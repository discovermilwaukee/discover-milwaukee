import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsletterCTA from "../../components/NewsletterCTA";
import {
  eventsWithPages, getEventBySlug, eventSlug, eventPath, chicagoNow, hasEnded, eventsOnDay, upcomingEvents,
  dayKey, formatDay, formatTime, timeLabel, costLabel, toIsoWithOffset,
} from "../../lib/events";
import { venueFor } from "../../lib/venues";
import { guidesForCategory } from "../../lib/eventGuides";

const SITE = "https://www.discover-milwaukee.com";

const SCHEMA_TYPE = { "Live Music": "MusicEvent", Sports: "SportsEvent", Comedy: "ComedyEvent", "Food & Drink": "FoodEvent" };

// Small, serializable summary of an event for lists.
const brief = (e) => ({
  title: e.title,
  path: eventPath(e),
  day: formatDay(e.startDateTime, { weekday: "short", month: "short", day: "numeric" }),
  time: timeLabel(e),
  venue: e.venueName,
  cost: costLabel(e),
});

export async function getStaticPaths() {
  return { paths: eventsWithPages().map((e) => ({ params: { slug: eventSlug(e) } })), fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const event = getEventBySlug(params.slug);
  // An event that has been removed from the calendar sends the visitor to the calendar, not a dead end.
  if (!event) return { redirect: { destination: "/events", permanent: false } };

  const now = chicagoNow();
  const ended = hasEnded(event, now);
  const day = dayKey(event.startDateTime);
  const withPages = eventsWithPages();
  const sameDay = eventsOnDay(day, withPages).filter((e) => e.id !== event.id && !hasEnded(e, now)).slice(0, 6).map(brief);
  const comingUp = upcomingEvents(now, withPages).filter((e) => e.id !== event.id && dayKey(e.startDateTime) !== day).slice(0, 6).map(brief);
  const v = venueFor(event.venueName);

  let endText = null;
  if (event.endDateTime && !event.allDay) {
    endText = dayKey(event.endDateTime) === day || event.endDateTime.slice(11, 16) <= "04:00"
      ? formatTime(event.endDateTime)
      : `${formatDay(event.endDateTime, { weekday: "long", month: "long", day: "numeric" })}, ${formatTime(event.endDateTime)}`;
  }

  let host = "";
  try { host = new URL(event.sourceUrl).hostname.replace(/^www\./, ""); } catch { host = "the organizer's site"; }

  return {
    props: {
      slug: params.slug,
      event: {
        title: event.title,
        category: event.category,
        description: event.shortDescription,
        venueName: event.venueName,
        sourceUrl: event.sourceUrl,
        free: event.costType === "free",
        allDay: !!event.allDay,
      },
      when: {
        dayLong: formatDay(event.startDateTime),
        dayShort: formatDay(event.startDateTime, { month: "short", day: "numeric", year: "numeric" }),
        weekdayDate: formatDay(event.startDateTime, { weekday: "long", month: "long", day: "numeric" }),
        start: event.allDay ? null : formatTime(event.startDateTime),
        end: endText,
        isoStart: event.allDay ? day : toIsoWithOffset(event.startDateTime),
        isoEnd: event.endDateTime ? toIsoWithOffset(event.endDateTime) : null,
      },
      venue: v
        ? {
            placeName: v.placeName || event.venueName,
            streetAddress: v.streetAddress || null,
            locality: v.addressLocality || null,
            region: v.addressRegion || "WI",
            postalCode: v.postalCode || null,
            isArea: !!v.isArea,
          }
        : null,
      host,
      ended,
      sameDay,
      comingUp,
      guides: guidesForCategory(event.category),
    },
    // Rebuilt hourly so "ended" and the related lists stay current without a deploy.
    revalidate: 3600,
  };
}

function EventList({ items }) {
  return (
    <ul className="evp-list">
      {items.map((e) => (
        <li key={e.path} className="evp-item">
          <h3><Link href={e.path}>{e.title}</Link></h3>
          <p className="evp-meta">{e.day} · {e.time} · {e.venue} · {e.cost}</p>
        </li>
      ))}
    </ul>
  );
}

export default function EventPage({ slug, event, when, venue, host, ended, sameDay, comingUp, guides }) {
  const url = `${SITE}/events/${slug}`;
  // `where` is the label used on the calendar (it can name a room or floor). `place` is the
  // building's proper name, used for directions and structured data.
  const where = event.venueName;
  const place = venue ? venue.placeName : event.venueName;
  const cityLine = venue && venue.locality ? `${venue.locality}, ${venue.region}${venue.postalCode ? " " + venue.postalCode : ""}` : null;
  // Some calendar labels already carry a street address from the organizer; do not print a second one.
  const labelHasStreet = /\d+\s+[NSEW]\.?\s/.test(where);
  const addressLine = venue && venue.streetAddress && !labelHasStreet ? `${venue.streetAddress}, ${cityLine}` : cityLine;
  const timeText = event.allDay ? "All day" : when.end ? `${when.start} to ${when.end}` : when.start;
  const title = `${event.title} | ${when.dayShort} | Milwaukee Events`;
  const description = `${event.title} at ${where}, ${when.weekdayDate}${event.allDay ? "" : " at " + when.start}. ${event.description}`.slice(0, 300);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue && venue.streetAddress ? `${place}, ${venue.streetAddress}, ${cityLine}` : `${place}, ${cityLine || "Milwaukee, WI"}`
  )}`;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": SCHEMA_TYPE[event.category] || "Event",
    name: event.title,
    description: event.description,
    startDate: when.isoStart,
    ...(when.isoEnd ? { endDate: when.isoEnd } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: event.free,
    url,
    location: {
      "@type": "Place",
      name: place,
      address: {
        "@type": "PostalAddress",
        ...(venue && venue.streetAddress ? { streetAddress: venue.streetAddress } : {}),
        addressLocality: (venue && venue.locality) || "Milwaukee",
        addressRegion: "WI",
        ...(venue && venue.postalCode ? { postalCode: venue.postalCode } : {}),
        addressCountry: "US",
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Events", item: `${SITE}/events` },
      { "@type": "ListItem", position: 3, name: event.title, item: url },
    ],
  };

  return (
    <div className="evp">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {/* Past events stay reachable for anyone with the link but drop out of search. */}
        {ended && <meta name="robots" content="noindex, follow" />}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content={`${event.title} | ${when.dayShort}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <nav aria-label="Breadcrumb" className="evp-crumbs">
        <div>
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/events">Events</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{event.title}</span>
        </div>
      </nav>

      <main id="main-content" tabIndex={-1}>
        <header className="evp-hero">
          <p className="evp-kicker">{event.category} · {event.free ? "Free" : "Ticketed"}</p>
          <h1 className="evp-title">{event.title}</h1>
          <p className="evp-sub">{when.weekdayDate}{event.allDay ? "" : `, ${when.start}`} · {where}</p>
        </header>

        <div className="evp-wrap">
          {ended && (
            <p className="evp-note" role="status">
              This event has ended. <Link href="/this-weekend-milwaukee">See what is on this weekend</Link> or browse the <Link href="/events">full calendar</Link>.
            </p>
          )}

          <section className="evp-card" aria-labelledby="event-details-heading">
            <h2 id="event-details-heading" className="evp-card-h">Event details</h2>
            <dl className="evp-facts">
              <dt>When</dt>
              <dd>{when.dayLong}<br />{timeText}</dd>
              <dt>Where</dt>
              <dd>
                {where}
                {addressLine && <><br />{addressLine}</>}
                <br />
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${where} (opens in a new tab)`}>
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </dd>
              <dt>Cost</dt>
              <dd>{event.free ? "Free" : "Ticketed. See the organizer's page for prices."}</dd>
              <dt>Type</dt>
              <dd>{event.category}</dd>
            </dl>
            <p className="evp-desc">{event.description}</p>
            <div className="evp-actions">
              <a className="evp-btn" href={event.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Event details at ${host} (opens in a new tab)`}>
                Event details at {host} <span aria-hidden="true">↗</span>
              </a>
              <Link className="evp-btn alt" href="/events">All Milwaukee events</Link>
            </div>
            <p className="evp-fine">
              Details come from the organizer&apos;s listing linked above. Times, prices and availability can change, so confirm before you go.
            </p>
          </section>

          {sameDay.length > 0 && (
            <section aria-labelledby="same-day-heading">
              <h2 id="same-day-heading" className="evp-h2">Also on {when.weekdayDate}</h2>
              <EventList items={sameDay} />
            </section>
          )}

          {comingUp.length > 0 && (
            <section aria-labelledby="coming-up-heading">
              <h2 id="coming-up-heading" className="evp-h2">Coming up in Milwaukee</h2>
              <EventList items={comingUp} />
              <p className="evp-more">
                <Link href="/this-weekend-milwaukee">This weekend in Milwaukee</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/events">Full events calendar</Link>
              </p>
            </section>
          )}

          {guides.length > 0 && (
            <section aria-labelledby="guides-heading">
              <h2 id="guides-heading" className="evp-h2">Make a day of it</h2>
              <ul className="evp-guides">
                {guides.map((g) => (
                  <li key={g.href}>
                    <Link href={g.href}>
                      <span className="evp-guide-t">{g.title}</span>
                      {g.desc && <span className="evp-guide-d">{g.desc}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="evp-cta"><NewsletterCTA /></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
