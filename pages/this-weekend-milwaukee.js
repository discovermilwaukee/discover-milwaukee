import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewsletterCTA from "../components/NewsletterCTA";
import {
  EVENTS, chicagoNow, weekendDays, eventsOnDay, hasEnded, eventPath, formatDay, timeLabel, costLabel, addDays,
} from "../lib/events";

const SITE = "https://www.discover-milwaukee.com";
const PATH = "/this-weekend-milwaukee";

// Evergreen guides that pair with a weekend out.
const PAIRINGS = [
  { href: "/best-happy-hour-milwaukee", title: "Best Happy Hours", desc: "31 verified spots" },
  { href: "/best-brunch-milwaukee", title: "Best Brunch", desc: "Saturday and Sunday plans" },
  { href: "/milwaukee-date-ideas", title: "Date Ideas", desc: "For two" },
  { href: "/things-to-do-with-kids-milwaukee", title: "Things to Do with Kids", desc: "Family picks" },
  { href: "/free-things-milwaukee", title: "Free Things to Do", desc: "No ticket needed" },
  { href: "/winter-guide-milwaukee", title: "Winter Guide", desc: "The season in one place" },
];

const brief = (e, now) => ({
  id: e.id,
  title: e.title,
  path: eventPath(e),
  time: timeLabel(e),
  venue: e.venueName,
  category: e.category,
  cost: costLabel(e),
  description: e.shortDescription,
  ended: hasEnded(e, now),
});

const rangeLabel = (days) => {
  const a = formatDay(days[0], { month: "long", day: "numeric" });
  const sameMonth = days[0].slice(0, 7) === days[2].slice(0, 7);
  const b = formatDay(days[2], sameMonth ? { day: "numeric" } : { month: "long", day: "numeric" });
  return `${a}–${b}, ${days[2].slice(0, 4)}`;
};

export async function getStaticProps() {
  const now = chicagoNow();
  const days = weekendDays(now.slice(0, 10));
  const nextDays = days.map((d) => addDays(d, 7));
  const dayBlock = (key) => ({
    key,
    weekday: formatDay(key, { weekday: "long" }),
    label: formatDay(key, { weekday: "long", month: "long", day: "numeric" }),
    events: eventsOnDay(key, EVENTS).map((e) => brief(e, now)),
  });
  const blocks = days.map(dayBlock);
  const next = nextDays.flatMap((key) => eventsOnDay(key, EVENTS).map((e) => ({ ...brief(e, now), day: formatDay(key, { weekday: "short", month: "short", day: "numeric" }) })));

  return {
    props: {
      range: rangeLabel(days),
      nextRange: rangeLabel(nextDays),
      blocks,
      next: next.slice(0, 12),
      nextTotal: next.length,
      total: blocks.reduce((n, b) => n + b.events.length, 0),
      updated: formatDay(now, { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
      updatedIso: now.slice(0, 10),
    },
    // Rebuilt every 30 minutes, so the page rolls to the next weekend on its own each Monday.
    revalidate: 1800,
  };
}

function EventCard({ e }) {
  return (
    <li className="evp-item">
      <h3>{e.path ? <Link href={e.path}>{e.title}</Link> : e.title}</h3>
      <p className="evp-meta">
        {e.time} · {e.venue} · <span className="evp-chip">{e.cost}</span> <span className="evp-chip">{e.category}</span>
        {e.ended && <span className="evp-chip evp-chip-done">Ended</span>}
      </p>
      <p className="evp-item-desc">{e.description}</p>
    </li>
  );
}

export default function ThisWeekendMilwaukee({ range, nextRange, blocks, next, nextTotal, total, updated, updatedIso }) {
  const url = `${SITE}${PATH}`;
  const title = `Things to Do in Milwaukee This Weekend (${range})`;
  const description = total > 0
    ? `${total} things to do in Milwaukee this weekend, ${range}: concerts, markets, sports, comedy and family events, day by day, with links to each organizer.`
    : `What's happening in Milwaukee this weekend, ${range}. Our day-by-day list of concerts, markets, sports and family events, updated automatically.`;

  const linked = blocks.flatMap((b) => b.events).filter((e) => e.path);
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Milwaukee events this weekend, ${range}`,
    numberOfItems: linked.length,
    itemListElement: linked.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.title, url: `${SITE}${e.path}` })),
  };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    dateModified: updatedIso,
    isPartOf: { "@type": "WebSite", name: "Discover Milwaukee", url: SITE },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Events", item: `${SITE}/events` },
      { "@type": "ListItem", position: 3, name: "This Weekend", item: url },
    ],
  };

  return (
    <div className="evp">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        {linked.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <nav aria-label="Breadcrumb" className="evp-crumbs">
        <div>
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/events">Events</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">This Weekend</span>
        </div>
      </nav>

      <main id="main-content" tabIndex={-1}>
        <header className="evp-hero">
          <p className="evp-kicker">{range}</p>
          <h1 className="evp-title">This Weekend in Milwaukee</h1>
          <p className="evp-sub">
            {total > 0
              ? `${total} things to do, Friday through Sunday. Pick a day.`
              : "Friday through Sunday, day by day."}
          </p>
        </header>

        <div className="evp-wrap">
          <nav aria-label="On this page" className="evp-jump">
            {blocks.map((b) => (
              <a key={b.key} href={`#${b.weekday.toLowerCase()}`}>{b.weekday} <span className="evp-count">{b.events.length}</span></a>
            ))}
            {next.length > 0 && <a href="#next-weekend">Next weekend</a>}
          </nav>

          {total === 0 && (
            <p className="evp-note">
              We have not posted this weekend&apos;s events yet. Browse the <Link href="/events">full calendar</Link> or start with the guides below.
            </p>
          )}

          {blocks.map((b) => (
            <section key={b.key} id={b.weekday.toLowerCase()} aria-labelledby={`${b.weekday.toLowerCase()}-heading`} className="evp-day">
              <h2 id={`${b.weekday.toLowerCase()}-heading`} className="evp-h2">{b.label}</h2>
              {b.events.length > 0 ? (
                <ul className="evp-list">{b.events.map((e) => <EventCard key={e.id} e={e} />)}</ul>
              ) : (
                <p className="evp-empty">Nothing on our calendar for {b.weekday} yet.</p>
              )}
            </section>
          ))}

          {next.length > 0 && (
            <section id="next-weekend" aria-labelledby="next-weekend-heading" className="evp-day">
              <h2 id="next-weekend-heading" className="evp-h2">Next weekend: {nextRange}</h2>
              <ul className="evp-list">
                {next.map((e) => (
                  <li key={e.id} className="evp-item">
                    <h3>{e.path ? <Link href={e.path}>{e.title}</Link> : e.title}</h3>
                    <p className="evp-meta">{e.day} · {e.time} · {e.venue} · {e.cost}</p>
                  </li>
                ))}
              </ul>
              {nextTotal > next.length && (
                <p className="evp-more"><Link href="/events">See all {nextTotal} events next weekend on the calendar</Link></p>
              )}
            </section>
          )}

          <section aria-labelledby="pairings-heading">
            <h2 id="pairings-heading" className="evp-h2">Round out the weekend</h2>
            <ul className="evp-guides">
              {PAIRINGS.map((g) => (
                <li key={g.href}>
                  <Link href={g.href}>
                    <span className="evp-guide-t">{g.title}</span>
                    <span className="evp-guide-d">{g.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="about-list-heading" className="evp-card evp-about">
            <h2 id="about-list-heading" className="evp-card-h">About this list</h2>
            <p>
              This page rebuilds itself from our <Link href="/events">events calendar</Link> and moves to the next weekend every Monday.
              Each event page links to the organizer&apos;s own listing. Times, prices and availability can change, so confirm before you go.
            </p>
            <p className="evp-fine">Last updated {updated}.</p>
          </section>

          <div className="evp-cta"><NewsletterCTA /></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
