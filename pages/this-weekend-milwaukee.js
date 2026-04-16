import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// =============================================================================
// WEEKLY CONTENT - UPDATE EACH WEEK
// =============================================================================
const WEEKEND_DATA = {
  // Update these dates each week
  weekendOf: 'April 17-19, 2026',
  fridayDate: 'April 17, 2026',
  saturdayDate: 'April 18, 2026',
  sundayDate: 'April 19, 2026',
  lastUpdated: '2026-04-15T09:00:00-05:00',

  // Weather for this weekend
  weather: {
    friday: { high: 58, low: 42, condition: 'Partly Cloudy', icon: '⛅' },
    saturday: { high: 62, low: 45, condition: 'Sunny', icon: '☀️' },
    sunday: { high: 55, low: 40, condition: 'Light Rain', icon: '🌧️' },
  },

  // Featured Events - Update weekly (3-4 major events)
  featuredEvents: [
    {
      name: 'Milwaukee Brewers vs. Chicago Cubs',
      venue: 'American Family Field',
      date: 'April 18, 2026',
      time: '6:10 PM',
      description: 'Division rivalry game with fireworks after the game. Opening month baseball at its finest.',
      price: 'From $25',
      category: 'Sports',
      url: '/events/brewers-cubs-april-18',
    },
    {
      name: 'Spring Gallery Night',
      venue: 'Historic Third Ward',
      date: 'April 17, 2026',
      time: '5:00 PM - 9:00 PM',
      description: 'Explore over 25 galleries and studios during this quarterly art walk. Free admission to participating venues.',
      price: 'Free',
      category: 'Arts & Culture',
      url: '/events/spring-gallery-night',
    },
    {
      name: 'Milwaukee Food & Wine Experience',
      venue: 'Discovery World',
      date: 'April 17-18, 2026',
      time: 'Various Times',
      description: 'Sample dishes from 40+ local restaurants and sip wines from around the world.',
      price: '$75-$150',
      category: 'Food & Drink',
      url: '/events/food-wine-experience',
    },
    {
      name: 'Earth Day Milwaukee Festival',
      venue: 'Veterans Park',
      date: 'April 19, 2026',
      time: '10:00 AM - 5:00 PM',
      description: 'Family-friendly environmental festival with live music, eco vendors, and educational activities.',
      price: 'Free',
      category: 'Festival',
      url: '/events/earth-day-milwaukee',
    },
  ],

  // By Day Recommendations
  byDay: {
    friday: {
      dayPart: 'Friday Night',
      highlights: [
        {
          title: 'Start at Spring Gallery Night',
          description: 'Free art walk through the Third Ward with complimentary refreshments at many stops.',
          time: '5:00 PM - 9:00 PM',
        },
        {
          title: 'Dinner at Odd Duck',
          description: 'Small plates and craft cocktails — make reservations now.',
          time: '8:00 PM',
        },
        {
          title: 'Late Night at Bryant\'s Cocktail Lounge',
          description: 'Milwaukee\'s oldest cocktail lounge for a nightcap.',
          time: '10:00 PM',
        },
      ],
    },
    saturday: {
      dayPart: 'Saturday',
      highlights: [
        {
          title: 'Morning at Milwaukee Public Market',
          description: 'Coffee and breakfast from local vendors. Try the new St. Paul Fish Company oyster bar.',
          time: '9:00 AM',
        },
        {
          title: 'Afternoon at Lakefront Brewery',
          description: 'Take the famous Friday fish fry... on Saturday! Tours run every 30 minutes.',
          time: '1:00 PM',
        },
        {
          title: 'Brewers Game',
          description: 'Catch the Cubs rivalry game with post-game fireworks.',
          time: '6:10 PM',
        },
      ],
    },
    sunday: {
      dayPart: 'Sunday',
      highlights: [
        {
          title: 'Brunch at Cafe Benelux',
          description: 'Rooftop brunch if weather permits, otherwise cozy indoor Belgian fare.',
          time: '10:00 AM',
        },
        {
          title: 'Earth Day Festival',
          description: 'Family-friendly activities and live music at Veterans Park.',
          time: '11:00 AM - 4:00 PM',
        },
        {
          title: 'Rainy Day Backup: Milwaukee Art Museum',
          description: 'Explore the galleries and watch the Burke Brise Soleil wings close at 5 PM.',
          time: '2:00 PM',
        },
      ],
    },
  },

  // Can't Miss This Weekend
  cantMiss: {
    title: 'Spring Gallery Night',
    reason: 'Only happens 4 times a year and this spring edition features 10 new galleries. The weather looks perfect for walking between venues.',
    tip: 'Start at the Marshall Building and work your way toward the Milwaukee River.',
  },

  // New Restaurant to Try This Week
  newRestaurant: {
    name: 'Flour Girl & Flame',
    cuisine: 'Wood-fired Pizza & Pasta',
    neighborhood: 'Walker\'s Point',
    opened: 'March 2026',
    mustTry: 'The sourdough crust pizza with local Sartori cheese',
    address: '824 S 2nd St, Milwaukee, WI 53204',
    priceRange: '$$',
    reservation: 'Walk-ins welcome, reservations recommended for Friday/Saturday',
  },

  // Weather-Appropriate Suggestions
  weatherSuggestions: {
    sunny: [
      'Walk the Milwaukee RiverWalk from the Third Ward to Brady Street',
      'Bike the Oak Leaf Trail — rentals available at Wheel & Sprocket',
      'Explore the outdoor sculpture garden at Lynden Sculpture Garden',
    ],
    rainy: [
      'Milwaukee Art Museum — free admission Wisconsin residents on first Thursday',
      'Third Coast Comedy Club for a Saturday night show',
      'Explore the Milwaukee Public Market and connected shops',
    ],
  },
};

// =============================================================================
// ONGOING ATTRACTIONS - Update less frequently
// =============================================================================
const ONGOING_ATTRACTIONS = [
  {
    name: 'Milwaukee Art Museum',
    description: 'Iconic lakefront museum with the movable Burke Brise Soleil wings.',
    hours: 'Thu-Sun 10am-5pm',
    link: '/things-to-do-milwaukee#art-museum',
  },
  {
    name: 'Milwaukee Public Market',
    description: 'Indoor market with local vendors, fresh seafood, and artisan goods.',
    hours: 'Daily 10am-8pm',
    link: '/things-to-do-milwaukee#public-market',
  },
  {
    name: 'Lakefront Brewery',
    description: 'Award-winning brewery known for hilarious tours and Friday fish fry.',
    hours: 'Tours daily, check schedule',
    link: '/things-to-do-milwaukee#lakefront-brewery',
  },
  {
    name: 'Historic Third Ward',
    description: 'Walkable neighborhood with boutiques, galleries, and restaurants.',
    hours: 'Always open',
    link: '/things-to-do-milwaukee#third-ward',
  },
];

// =============================================================================
// COLORS
// =============================================================================
const colors = {
  green1: '#1a3d34',
  green2: '#2d5a4a',
  cream: '#faf8f5',
  beige: '#e8e4dc',
  orange: '#f4a261',
  yellow: '#f4d03f',
};

// =============================================================================
// SCHEMA.ORG STRUCTURED DATA
// =============================================================================
function generateSchemaData() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `This Weekend in Milwaukee: ${WEEKEND_DATA.weekendOf}`,
    description: `Your complete guide to things to do in Milwaukee this weekend, ${WEEKEND_DATA.weekendOf}. Featured events, restaurant picks, and day-by-day itineraries.`,
    datePublished: WEEKEND_DATA.lastUpdated,
    dateModified: WEEKEND_DATA.lastUpdated,
    author: {
      '@type': 'Organization',
      name: 'Discover Milwaukee',
      url: 'https://discover-milwaukee.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Discover Milwaukee',
      logo: {
        '@type': 'ImageObject',
        url: 'https://discover-milwaukee.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://discover-milwaukee.com/this-weekend-milwaukee',
    },
    about: {
      '@type': 'City',
      name: 'Milwaukee',
      sameAs: 'https://en.wikipedia.org/wiki/Milwaukee',
    },
  };

  const eventSchemas = WEEKEND_DATA.featuredEvents.map((event) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        addressCountry: 'US',
      },
    },
    offers: {
      '@type': 'Offer',
      price: event.price.replace('From ', '').replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    organizer: {
      '@type': 'Organization',
      name: 'Discover Milwaukee',
    },
  }));

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `This Weekend in Milwaukee | ${WEEKEND_DATA.weekendOf}`,
    description: 'Weekly guide to Milwaukee events, activities, and things to do this weekend.',
    lastReviewed: WEEKEND_DATA.lastUpdated,
    reviewedBy: {
      '@type': 'Organization',
      name: 'Discover Milwaukee',
    },
  };

  return [articleSchema, webPageSchema, ...eventSchemas];
}

// =============================================================================
// COMPONENTS
// =============================================================================

function LastUpdatedBadge() {
  const date = new Date(WEEKEND_DATA.lastUpdated);
  const formatted = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: colors.yellow,
      color: colors.green1,
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
    }}>
      <span style={{ fontSize: '10px' }}>●</span>
      Last Updated: {formatted}
    </div>
  );
}

function WeatherWidget() {
  const { weather } = WEEKEND_DATA;
  return (
    <div style={{
      background: colors.beige,
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '32px',
    }}>
      <h3 style={{ margin: '0 0 16px 0', color: colors.green1, fontSize: '18px' }}>
        Weekend Weather Forecast
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {[
          { day: 'Friday', data: weather.friday },
          { day: 'Saturday', data: weather.saturday },
          { day: 'Sunday', data: weather.sunday },
        ].map(({ day, data }) => (
          <div key={day} style={{
            background: colors.cream,
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{data.icon}</div>
            <div style={{ fontWeight: '600', color: colors.green1 }}>{day}</div>
            <div style={{ fontSize: '14px', color: colors.green2 }}>{data.condition}</div>
            <div style={{ fontSize: '14px', marginTop: '4px' }}>
              <span style={{ fontWeight: '600' }}>{data.high}°</span>
              <span style={{ color: '#666' }}> / {data.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedEventCard({ event }) {
  return (
    <article style={{
      background: colors.cream,
      border: `1px solid ${colors.beige}`,
      borderRadius: '12px',
      padding: '24px',
      transition: 'box-shadow 0.2s',
    }}>
      <div style={{
        display: 'inline-block',
        background: colors.orange,
        color: 'white',
        fontSize: '12px',
        fontWeight: '600',
        padding: '4px 10px',
        borderRadius: '12px',
        marginBottom: '12px',
      }}>
        {event.category}
      </div>
      <h3 style={{ margin: '0 0 8px 0', color: colors.green1, fontSize: '20px' }}>
        {event.name}
      </h3>
      <p style={{ margin: '0 0 12px 0', color: colors.green2, fontSize: '14px' }}>
        {event.venue} • {event.date} • {event.time}
      </p>
      <p style={{ margin: '0 0 16px 0', color: '#555', lineHeight: '1.6' }}>
        {event.description}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: '600', color: colors.green1 }}>{event.price}</span>
        <Link href={event.url} style={{
          background: colors.green1,
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
        }}>
          Learn More
        </Link>
      </div>
    </article>
  );
}

function CantMissSection() {
  const { cantMiss } = WEEKEND_DATA;
  return (
    <section style={{
      background: `linear-gradient(135deg, ${colors.green1} 0%, ${colors.green2} 100%)`,
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '48px',
      color: 'white',
    }}>
      <div style={{
        display: 'inline-block',
        background: colors.yellow,
        color: colors.green1,
        fontSize: '12px',
        fontWeight: '700',
        padding: '6px 12px',
        borderRadius: '4px',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        Can't Miss This Weekend
      </div>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '28px' }}>{cantMiss.title}</h2>
      <p style={{ margin: '0 0 16px 0', fontSize: '18px', opacity: 0.95, lineHeight: '1.6' }}>
        {cantMiss.reason}
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        padding: '16px',
        borderRadius: '8px',
        borderLeft: `4px solid ${colors.yellow}`,
      }}>
        <strong>Pro Tip:</strong> {cantMiss.tip}
      </div>
    </section>
  );
}

function ByDaySection() {
  const { byDay } = WEEKEND_DATA;
  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ color: colors.green1, fontSize: '28px', marginBottom: '24px' }}>
        Your Weekend Day-by-Day
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(byDay).map(([key, day]) => (
          <div key={key} style={{
            background: colors.cream,
            borderRadius: '12px',
            padding: '24px',
            borderLeft: `4px solid ${key === 'friday' ? colors.orange : key === 'saturday' ? colors.yellow : colors.green2}`,
          }}>
            <h3 style={{ margin: '0 0 16px 0', color: colors.green1, fontSize: '22px' }}>
              {day.dayPart}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {day.highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    minWidth: '80px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: colors.green2,
                  }}>
                    {item.time}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: colors.green1, marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '14px', color: '#555' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewRestaurantSection() {
  const { newRestaurant } = WEEKEND_DATA;
  return (
    <section style={{
      background: colors.beige,
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '48px',
    }}>
      <div style={{
        display: 'inline-block',
        background: colors.orange,
        color: 'white',
        fontSize: '12px',
        fontWeight: '700',
        padding: '6px 12px',
        borderRadius: '4px',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        New Restaurant to Try
      </div>
      <h3 style={{ margin: '0 0 8px 0', color: colors.green1, fontSize: '24px' }}>
        {newRestaurant.name}
      </h3>
      <p style={{ margin: '0 0 16px 0', color: colors.green2, fontSize: '16px' }}>
        {newRestaurant.cuisine} • {newRestaurant.neighborhood} • {newRestaurant.priceRange}
      </p>
      <p style={{ margin: '0 0 16px 0', color: '#555', lineHeight: '1.6' }}>
        <strong>Opened:</strong> {newRestaurant.opened}<br />
        <strong>Must Try:</strong> {newRestaurant.mustTry}<br />
        <strong>Reservations:</strong> {newRestaurant.reservation}
      </p>
      <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
        {newRestaurant.address}
      </p>
      <Link href="/best-restaurants-milwaukee" style={{
        display: 'inline-block',
        marginTop: '16px',
        color: colors.green1,
        fontWeight: '600',
        textDecoration: 'underline',
      }}>
        See all Milwaukee restaurant recommendations →
      </Link>
    </section>
  );
}

function WeatherSuggestions() {
  const { weatherSuggestions } = WEEKEND_DATA;
  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ color: colors.green1, fontSize: '28px', marginBottom: '24px' }}>
        Weather-Smart Ideas
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div style={{ background: colors.cream, borderRadius: '12px', padding: '24px' }}>
          <h3 style={{ margin: '0 0 16px 0', color: colors.green1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>☀️</span> If It's Nice Out
          </h3>
          <ul style={{ margin: 0, padding: '0 0 0 20px', color: '#555', lineHeight: '1.8' }}>
            {weatherSuggestions.sunny.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ background: colors.cream, borderRadius: '12px', padding: '24px' }}>
          <h3 style={{ margin: '0 0 16px 0', color: colors.green1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🌧️</span> Rainy Day Backups
          </h3>
          <ul style={{ margin: 0, padding: '0 0 0 20px', color: '#555', lineHeight: '1.8' }}>
            {weatherSuggestions.rainy.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OngoingAttractions() {
  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ color: colors.green1, fontSize: '28px', marginBottom: '8px' }}>
        Always Open: Milwaukee Classics
      </h2>
      <p style={{ color: '#555', marginBottom: '24px' }}>
        These attractions are available every weekend, no special tickets needed.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {ONGOING_ATTRACTIONS.map((attraction, idx) => (
          <Link href={attraction.link} key={idx} style={{
            display: 'block',
            background: colors.cream,
            borderRadius: '12px',
            padding: '20px',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s',
            border: `1px solid ${colors.beige}`,
          }}>
            <h4 style={{ margin: '0 0 8px 0', color: colors.green1 }}>
              {attraction.name}
            </h4>
            <p style={{ margin: '0 0 8px 0', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
              {attraction.description}
            </p>
            <span style={{ fontSize: '13px', color: colors.green2, fontWeight: '500' }}>
              {attraction.hours}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function NewsletterCTA() {
  const [email, setEmail] = useState('');

  return (
    <section style={{
      background: `linear-gradient(135deg, ${colors.green1} 0%, ${colors.green2} 100%)`,
      borderRadius: '16px',
      padding: '48px 32px',
      textAlign: 'center',
      marginBottom: '48px',
    }}>
      <h2 style={{ color: 'white', margin: '0 0 12px 0', fontSize: '28px' }}>
        Get Weekend Updates Every Thursday
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0 0 24px 0', fontSize: '18px' }}>
        Join 15,000+ Milwaukeeans who get our free weekly guide to the best events.
      </p>
      <form
        style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            padding: '14px 20px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            background: colors.yellow,
            color: colors.green1,
            border: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Subscribe Free
        </button>
      </form>
      <p style={{ color: 'rgba(255,255,255,0.7)', margin: '16px 0 0 0', fontSize: '13px' }}>
        Sent every Thursday at 6am. Unsubscribe anytime.
      </p>
    </section>
  );
}

function InternalLinks() {
  const links = [
    { href: '/events', label: 'All Milwaukee Events', description: 'Full calendar of upcoming events' },
    { href: '/best-restaurants-milwaukee', label: 'Best Restaurants', description: 'Top dining spots in the city' },
    { href: '/things-to-do-milwaukee', label: 'Things To Do', description: 'Complete visitor guide' },
  ];

  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ color: colors.green1, fontSize: '28px', marginBottom: '24px' }}>
        Explore More Milwaukee
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {links.map((link, idx) => (
          <Link href={link.href} key={idx} style={{
            display: 'block',
            background: colors.green1,
            color: 'white',
            borderRadius: '12px',
            padding: '24px',
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'background 0.2s',
          }}>
            <div style={{ fontWeight: '600', fontSize: '18px', marginBottom: '8px' }}>
              {link.label}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              {link.description}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================
export default function ThisWeekendMilwaukee() {
  const schemaData = generateSchemaData();

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>This Weekend in Milwaukee: {WEEKEND_DATA.weekendOf} | Things To Do</title>
        <meta
          name="description"
          content={`Your guide to things to do in Milwaukee this weekend (${WEEKEND_DATA.weekendOf}). Featured events, new restaurants, day-by-day itineraries, and local recommendations. Updated weekly.`}
        />
        <meta
          name="keywords"
          content="things to do this weekend milwaukee, milwaukee events this week, what to do in milwaukee this weekend, milwaukee weekend activities, milwaukee events today, milwaukee things to do, weekend in milwaukee"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://discover-milwaukee.com/this-weekend-milwaukee" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`This Weekend in Milwaukee: ${WEEKEND_DATA.weekendOf}`} />
        <meta
          property="og:description"
          content={`${WEEKEND_DATA.featuredEvents.length} featured events, new restaurant picks, and your complete weekend guide to Milwaukee.`}
        />
        <meta property="og:url" content="https://discover-milwaukee.com/this-weekend-milwaukee" />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={WEEKEND_DATA.lastUpdated} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`This Weekend in Milwaukee: ${WEEKEND_DATA.weekendOf}`} />
        <meta
          name="twitter:description"
          content="Your weekly guide to Milwaukee events, restaurants, and things to do."
        />

        {/* Freshness Signals for Google */}
        <meta name="last-modified" content={WEEKEND_DATA.lastUpdated} />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* Geo Targeting */}
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />

        {/* Schema.org Structured Data */}
        {schemaData.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main style={{ background: colors.cream, minHeight: '100vh' }}>
        {/* Hero Header */}
        <header style={{
          background: `linear-gradient(135deg, ${colors.green1} 0%, ${colors.green2} 100%)`,
          padding: '64px 24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <LastUpdatedBadge />
            <h1 style={{
              color: 'white',
              fontSize: '48px',
              fontWeight: '700',
              margin: '24px 0 16px 0',
              lineHeight: '1.2',
            }}>
              This Weekend in Milwaukee
            </h1>
            <p style={{
              color: colors.yellow,
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 16px 0',
            }}>
              {WEEKEND_DATA.weekendOf}
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '18px',
              margin: 0,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Your weekly guide to events, restaurants, and things to do in Milwaukee.
              Updated every Thursday.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px' }}>
          {/* Weather Widget */}
          <WeatherWidget />

          {/* Can't Miss Section */}
          <CantMissSection />

          {/* Featured Events */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ color: colors.green1, fontSize: '28px', marginBottom: '24px' }}>
              Featured Events This Weekend
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {WEEKEND_DATA.featuredEvents.map((event, idx) => (
                <FeaturedEventCard key={idx} event={event} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link href="/events" style={{
                display: 'inline-block',
                background: colors.green1,
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
              }}>
                View All Milwaukee Events
              </Link>
            </div>
          </section>

          {/* By Day Section */}
          <ByDaySection />

          {/* New Restaurant */}
          <NewRestaurantSection />

          {/* Weather Suggestions */}
          <WeatherSuggestions />

          {/* Ongoing Attractions */}
          <OngoingAttractions />

          {/* Newsletter CTA */}
          <NewsletterCTA />

          {/* Internal Links */}
          <InternalLinks />

          {/* Breadcrumbs for SEO */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{
              display: 'flex',
              gap: '8px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '14px',
              color: '#666',
            }}>
              <li><Link href="/" style={{ color: colors.green2 }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/events" style={{ color: colors.green2 }}>Events</Link></li>
              <li>/</li>
              <li style={{ color: colors.green1, fontWeight: '500' }}>This Weekend</li>
            </ol>
          </nav>
        </div>

        {/* Footer Note */}
        <footer style={{
          background: colors.beige,
          padding: '24px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#666',
        }}>
          <p style={{ margin: 0 }}>
            This page is updated every Thursday with the latest Milwaukee events and recommendations.
            <br />
            Last updated: {new Date(WEEKEND_DATA.lastUpdated).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </footer>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        a:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
