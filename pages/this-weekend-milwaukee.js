import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// =============================================================================
// WEEKLY CONTENT - UPDATE EACH WEEK
// =============================================================================
const WEEKEND_DATA = {
  // Update these dates each week
  weekendOf: 'April 16-19, 2026',
  wednesdayDate: 'April 16, 2026',
  fridayDate: 'April 17, 2026',
  saturdayDate: 'April 18, 2026',
  sundayDate: 'April 19, 2026',
  lastUpdated: '2026-04-16T09:00:00-05:00',

  // Weather for this weekend
  weather: {
    friday: { high: 58, low: 42, condition: 'Partly Cloudy', icon: '⛅' },
    saturday: { high: 62, low: 45, condition: 'Sunny', icon: '☀️' },
    sunday: { high: 55, low: 40, condition: 'Light Rain', icon: '🌧️' },
  },

  // Featured Events - Update weekly (top picks)
  featuredEvents: [
    {
      name: 'Milwaukee Film Festival',
      venue: 'Various Locations',
      date: 'April 16-19, 2026',
      time: 'Various Times',
      description: 'Milwaukee Film Festival kicks off with screenings across the city featuring independent films, documentaries, and special presentations.',
      price: 'Varies',
      category: 'Film',
      url: '/events/milwaukee-film-festival',
    },
    {
      name: 'Spring Gallery Night',
      venue: 'Historic Third Ward & Citywide',
      date: 'April 17-18, 2026',
      time: '5:00 PM - 9:00 PM',
      description: 'Explore over 25 galleries and studios during this quarterly art walk. Free admission to participating venues across multiple neighborhoods.',
      price: 'Free',
      category: 'Arts & Culture',
      url: '/events/spring-gallery-night',
    },
    {
      name: 'Art in Bloom',
      venue: 'Milwaukee Art Museum',
      date: 'April 16-19, 2026',
      time: '10:00 AM - 5:00 PM',
      description: 'Annual event pairing stunning floral arrangements with masterpieces from the museum collection. Florists interpret artwork through flowers.',
      price: 'Museum Admission',
      category: 'Arts & Culture',
      url: '/events/art-in-bloom',
    },
    {
      name: 'Brew City Marathon, Half Marathon & 5K',
      venue: 'McKinley Marina',
      date: 'April 18, 2026',
      time: '7:00 AM',
      description: 'Scenic lakefront race with courses for all levels. Start and finish at McKinley Marina with beautiful views of Lake Michigan.',
      price: 'Registration Required',
      category: 'Sports',
      url: '/events/brew-city-marathon',
    },
    {
      name: 'We Them Ones Comedy Tour',
      venue: 'Fiserv Forum',
      date: 'April 18, 2026',
      time: '7:00 PM',
      description: 'Major comedy tour stop at Fiserv Forum featuring top comedians. Get ready to laugh all night!',
      price: 'From $45',
      category: 'Comedy',
      url: '/events/we-them-ones-comedy',
    },
  ],

  // All Events This Weekend
  allEvents: [
    // Wednesday April 16
    { name: 'Community Access Day', venue: 'Betty Brinn Children\'s Museum', date: 'April 16', time: 'All Day', category: 'Family', price: 'Free' },
    { name: 'Spelling Bee Showdown', venue: 'Lakefront Brewery', date: 'April 16', time: '6:30 PM', category: 'Entertainment', price: 'Varies' },
    { name: 'Milwaukee Film Festival Begins', venue: 'Various Locations', date: 'April 16', time: 'Various', category: 'Film', price: 'Varies' },
    { name: 'Art in Bloom', venue: 'Milwaukee Art Museum', date: 'April 16-19', time: '10 AM - 5 PM', category: 'Arts', price: 'Museum Admission' },

    // Friday April 17
    { name: 'Gallery Night Pop-Up Art Market', venue: 'Milwaukee Public Market', date: 'April 17', time: '4:00 PM - 8:00 PM', category: 'Arts', price: 'Free' },
    { name: 'Spring Gallery Night', venue: 'Citywide', date: 'April 17-18', time: '5:00 PM - 9:00 PM', category: 'Arts', price: 'Free' },

    // Saturday April 18
    { name: 'Brew City Marathon, Half & 5K', venue: 'McKinley Marina', date: 'April 18', time: '7:00 AM', category: 'Sports', price: 'Registration' },
    { name: 'Tory Lowe Community Clean Up', venue: 'Evolve MKE / Pitts Mortuary / MLK Elementary', date: 'April 18', time: '8:00 AM - 12:00 PM', category: 'Community', price: 'Free' },
    { name: 'Oak Creek Winter Farmers Market', venue: 'Oak Creek Community Center', date: 'April 18', time: '9:00 AM - 1:00 PM', category: 'Market', price: 'Free' },
    { name: 'Future Builders Start Here', venue: 'American Family Field', date: 'April 18', time: '9:00 AM - 12:00 PM', category: 'Family', price: 'Free' },
    { name: 'Milwaukee Zine Fest', venue: 'Milwaukee Central Library', date: 'April 18', time: '10:30 AM', category: 'Arts', price: 'Free' },
    { name: 'Community Spring Clean Swap Party & Market', venue: 'Brown Deer Beer Garden', date: 'April 18', time: '11:00 AM - 3:00 PM', category: 'Market', price: 'Free' },
    { name: '3rd St Vintage Market by All Goods', venue: '3rd St Market Hall', date: 'April 18-19', time: '11:00 AM - 6:00 PM', category: 'Market', price: 'Free' },
    { name: 'Red Magic Spring Makers Market', venue: 'Black Husky Brewing', date: 'April 18', time: '12:00 PM - 4:00 PM', category: 'Market', price: 'Free' },
    { name: 'Cryptids and Conspiracies Market', venue: 'MKeULTRA', date: 'April 18', time: '12:00 PM - 4:00 PM', category: 'Market', price: 'Free' },
    { name: 're:Craft & Relic Market', venue: 'Milwaukee Co Sports Expo', date: 'April 18-19', time: 'Various', category: 'Market', price: 'Varies' },
    { name: 'We Them Ones Comedy Tour', venue: 'Fiserv Forum', date: 'April 18', time: '7:00 PM', category: 'Comedy', price: 'From $45' },

    // Sunday April 19
    { name: 'North Ave Clean Up', venue: 'Meet at The Little Village Play Cafe', date: 'April 19', time: '9:00 AM', category: 'Community', price: 'Free' },
    { name: 'Free Book Swap', venue: 'Dead Bird Brewing', date: 'April 19', time: '12:00 PM - 3:00 PM', category: 'Community', price: 'Free' },
    { name: 'Where is the Love? Conscious Community Sale', venue: 'Low Rain An Artist Collective', date: 'April 19', time: '2:00 PM - 6:00 PM', category: 'Market', price: 'Free' },
    { name: 'Keg Stand Up Comedy', venue: 'Lakefront Brewery', date: 'April 19', time: '7:00 PM', category: 'Comedy', price: 'Varies' },
  ],

  // By Day Recommendations
  byDay: {
    friday: {
      dayPart: 'Friday',
      highlights: [
        {
          title: 'Gallery Night Pop-Up Art Market',
          description: 'Start your weekend at the Milwaukee Public Market with local artists showcasing their work.',
          time: '4:00 PM - 8:00 PM',
        },
        {
          title: 'Spring Gallery Night',
          description: 'Free art walk through the Third Ward, Walker\'s Point, and beyond. Complimentary refreshments at many galleries.',
          time: '5:00 PM - 9:00 PM',
        },
        {
          title: 'Milwaukee Film Festival Screenings',
          description: 'Catch opening night films at various venues across the city.',
          time: 'Various',
        },
      ],
    },
    saturday: {
      dayPart: 'Saturday',
      highlights: [
        {
          title: 'Brew City Marathon',
          description: 'Cheer on runners or participate in the marathon, half, or 5K along the beautiful lakefront.',
          time: '7:00 AM Start',
        },
        {
          title: 'Milwaukee Zine Fest',
          description: 'Celebrate independent publishing at Milwaukee Central Library with zine makers from across the region.',
          time: '10:30 AM',
        },
        {
          title: 'Makers Markets Crawl',
          description: 'Hit Red Magic at Black Husky Brewing and Cryptids & Conspiracies at MKeULTRA for unique local goods.',
          time: '12:00 PM - 4:00 PM',
        },
        {
          title: 'We Them Ones Comedy Tour',
          description: 'Major comedy show at Fiserv Forum to end the night with laughs.',
          time: '7:00 PM',
        },
      ],
    },
    sunday: {
      dayPart: 'Sunday',
      highlights: [
        {
          title: 'North Ave Clean Up',
          description: 'Give back to the community! Meet at The Little Village Play Cafe for neighborhood beautification.',
          time: '9:00 AM',
        },
        {
          title: 'Free Book Swap',
          description: 'Bring books, take books at Dead Bird Brewing. Perfect for book lovers.',
          time: '12:00 PM - 3:00 PM',
        },
        {
          title: 'Art in Bloom (Final Day)',
          description: 'Last chance to see stunning floral interpretations of masterpieces at the Milwaukee Art Museum.',
          time: '10:00 AM - 5:00 PM',
        },
        {
          title: 'Keg Stand Up Comedy',
          description: 'Sunday laughs at Lakefront Brewery — great way to end the weekend.',
          time: '7:00 PM',
        },
      ],
    },
  },

  // Can't Miss This Weekend
  cantMiss: {
    title: 'Art in Bloom at Milwaukee Art Museum',
    reason: 'This annual event only runs 4 days and pairs stunning floral arrangements with masterpieces from the museum collection. Perfect intersection of art and nature.',
    tip: 'Go on Saturday morning to avoid crowds, then head to Gallery Night in the evening for a full day of art.',
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
      'Cheer on Brew City Marathon runners along the lakefront',
      'Walk between Gallery Night venues in the Third Ward',
      'Explore outdoor makers markets at Black Husky and Brown Deer Beer Garden',
    ],
    rainy: [
      'Milwaukee Art Museum for Art in Bloom (all weekend)',
      'Milwaukee Film Festival screenings at indoor venues',
      'Milwaukee Zine Fest at the Central Library',
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
