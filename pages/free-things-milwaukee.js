import Head from 'next/head';
import Link from 'next/link';

// Color palette
const colors = {
  green1: '#1a3d34',
  green2: '#2d5a4a',
  cream: '#faf8f5',
  beige: '#e8e4dc',
  orange: '#f4a261',
  yellow: '#f4d03f',
};

// FAQ data for schema and display
const faqs = [
  {
    question: 'What are the best free things to do in Milwaukee?',
    answer: 'The best free things to do in Milwaukee include visiting the Milwaukee Art Museum on First Thursdays, exploring the Lakefront Trail, attending free concerts at Cathedral Square, walking the Milwaukee Riverwalk, and enjoying the city\'s many beer gardens (entry is free, pay for drinks). Milwaukee also offers free admission to several museums on specific days and numerous free summer festivals.',
  },
  {
    question: 'Are there free museum days in Milwaukee?',
    answer: 'Yes! The Milwaukee Art Museum offers free admission on the first Thursday of every month. The Milwaukee Public Museum has free days throughout the year for Wisconsin residents. Many smaller galleries and museums also offer free admission regularly, including the Museum of Wisconsin Art on certain days.',
  },
  {
    question: 'Is Milwaukee an affordable city to visit?',
    answer: 'Absolutely! Milwaukee is known as one of the most affordable major cities in the Midwest. With numerous free attractions, affordable dining options, reasonably priced accommodations, and free parking in many areas, visitors can enjoy a fantastic trip without breaking the bank.',
  },
  {
    question: 'What free outdoor activities are available in Milwaukee?',
    answer: 'Milwaukee offers extensive free outdoor activities including the 3-mile Lakefront Trail, Lake Park designed by Frederick Law Olmsted, South Shore Beach, Lakeshore State Park (Wisconsin\'s only urban state park), and numerous other parks. The city also has free public beaches along Lake Michigan during summer months.',
  },
  {
    question: 'Are Milwaukee beer gardens free to enter?',
    answer: 'Yes, all of Milwaukee\'s famous beer gardens are free to enter. You only pay for what you drink and eat. Popular free-entry beer gardens include the Estabrook Park Beer Garden, South Shore Terrace, and Hubbard Park Lodge, all offering scenic settings without cover charges.',
  },
  {
    question: 'What free events happen in Milwaukee during summer?',
    answer: 'Milwaukee summers are packed with free events including Jazz in the Park at Cathedral Square (Thursdays), Chill on the Hill concerts, Third Ward Art Walks, ethnic festivals with free admission areas, farmers markets throughout the city, and free concerts at Pere Marquette Park. Many neighborhood festivals also offer free entry.',
  },
];

// Schema.org Article markup
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Things to Do in Milwaukee: Ultimate Budget-Friendly Guide 2024',
  description: 'Discover 50+ free things to do in Milwaukee including free museum days, outdoor activities, concerts, beer gardens, self-guided tours, and seasonal events. Milwaukee is one of the most affordable cities in the Midwest!',
  image: 'https://discovermilwaukee.com/images/milwaukee-lakefront-free.jpg',
  author: {
    '@type': 'Organization',
    name: 'Discover Milwaukee',
    url: 'https://discovermilwaukee.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Discover Milwaukee',
    logo: {
      '@type': 'ImageObject',
      url: 'https://discovermilwaukee.com/logo.png',
    },
  },
  datePublished: '2024-01-15',
  dateModified: '2024-03-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://discovermilwaukee.com/free-things-milwaukee',
  },
};

// Schema.org FAQPage markup
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// Free activities data organized by category
const freeMuseums = [
  {
    name: 'Milwaukee Art Museum',
    highlight: 'First Thursday of Every Month',
    description: 'The iconic Calatrava-designed museum with its stunning Burke Brise Soleil wings offers free admission on the first Thursday of every month from 10am-8pm. Over 30,000 works spanning antiquity to present day.',
    featured: true,
  },
  {
    name: 'Milwaukee Public Museum',
    highlight: 'Select Free Days for WI Residents',
    description: 'One of the nation\'s largest natural history museums offers free admission days throughout the year for Wisconsin residents. Walk through the Streets of Old Milwaukee.',
  },
  {
    name: 'Discovery World',
    highlight: 'Community Free Days & Library Passes',
    description: 'This lakefront science and technology museum offers free community days and partners with Milwaukee Public Library for free museum passes.',
  },
  {
    name: 'Grohmann Museum',
    highlight: 'Free Admission Always',
    description: 'Located at MSOE, features the world\'s most comprehensive collection of art depicting the evolution of human work. Completely free admission.',
  },
  {
    name: 'Haggerty Museum of Art',
    highlight: 'Free Admission Always',
    description: 'Marquette University\'s art museum with over 4,500 works including old masters, contemporary art, and rotating exhibitions. Always free.',
  },
  {
    name: 'UWM Art Collection',
    highlight: 'Free Admission Always',
    description: 'University galleries featuring contemporary art, student exhibitions, and visiting artist shows throughout the academic year.',
  },
  {
    name: 'Charles Allis Art Museum',
    highlight: 'First Sunday Free',
    description: 'Tudor-style mansion with impressive collection of decorative arts, paintings, and antiques. Free admission on the first Sunday of each month.',
  },
  {
    name: 'Villa Terrace Decorative Arts Museum',
    highlight: 'First Sunday Free',
    description: 'Italian Renaissance-style villa with decorative arts and stunning gardens overlooking Lake Michigan. Free first Sundays.',
  },
];

const freeParks = [
  {
    name: 'Oak Leaf Lakefront Trail',
    description: '3-mile paved trail along Lake Michigan with stunning skyline views. Connects to the larger 125-mile Oak Leaf Trail system.',
    highlight: 'Best for: Running, biking, sunset walks',
  },
  {
    name: 'Lake Park',
    description: 'Designed by Frederick Law Olmsted, this 138-acre park features ravines, a historic lighthouse, and the famous Lion Bridges.',
    highlight: 'Don\'t miss: North Point Lighthouse',
  },
  {
    name: 'South Shore Park & Beach',
    description: 'Bay View destination with free public beach, pavilion, and stunning Lake Michigan sunsets.',
    highlight: 'Best for: Summer beach days',
  },
  {
    name: 'Lakeshore State Park',
    description: 'Wisconsin\'s only urban state park - 22 acres downtown with no vehicle sticker required.',
    highlight: 'Unique: Only urban state park in WI',
  },
  {
    name: 'Veterans Park',
    description: 'Sprawling lakefront park perfect for kite flying, picnics, and the famous Milwaukee Kite Festival.',
    highlight: 'Best for: Kite flying, festivals',
  },
  {
    name: 'Grant Park',
    description: '138 acres with Seven Bridges Trail, beach access, and beautiful ravine hiking.',
    highlight: 'Don\'t miss: Seven Bridges Trail',
  },
  {
    name: 'Juneau Park',
    description: 'Historic downtown park with stunning views, the Leif Erikson statue, and connection to the lakefront.',
    highlight: 'Best for: Downtown walks',
  },
  {
    name: 'Humboldt Park',
    description: 'Beautiful park with lagoon, bandshell for free concerts, and great sledding hill in winter.',
    highlight: 'Best for: Concerts, winter sledding',
  },
  {
    name: 'Whitnall Park',
    description: 'Largest park in Milwaukee County with botanical gardens, nature center, and miles of trails.',
    highlight: 'Best for: Nature walks, gardens',
  },
  {
    name: 'Estabrook Park',
    description: 'Scenic riverside park with trails, picnic areas, and Milwaukee\'s first modern beer garden.',
    highlight: 'Best for: River views, beer garden',
  },
  {
    name: 'McKinley Marina',
    description: 'Free to walk the marina and enjoy views of hundreds of boats and the Milwaukee skyline.',
    highlight: 'Best for: Boat watching, photos',
  },
  {
    name: 'Kern Park',
    description: 'Hidden gem on the Milwaukee River with disc golf course, trails, and peaceful nature.',
    highlight: 'Best for: Disc golf, solitude',
  },
];

const freeEvents = [
  {
    name: 'Jazz in the Park',
    location: 'Cathedral Square',
    timing: 'Thursdays, June-August, 5-9pm',
    description: 'Milwaukee\'s favorite free concert series draws thousands with live jazz, food vendors, and community atmosphere.',
  },
  {
    name: 'Gallery Night MKE',
    location: 'Various Neighborhoods',
    timing: 'Third Friday of each month',
    description: 'Galleries throughout Milwaukee open their doors with free art walks, opening receptions, and complimentary refreshments.',
  },
  {
    name: 'Chill on the Hill',
    location: 'Humboldt Park',
    timing: 'Tuesdays, July-August',
    description: 'Free outdoor concert series in Bay View\'s Humboldt Park with local and touring bands.',
  },
  {
    name: 'River Rhythms',
    location: 'Pere Marquette Park',
    timing: 'Wednesdays, June-August',
    description: 'Free downtown concert series along the Milwaukee River featuring diverse musical acts.',
  },
  {
    name: 'Bastille Days',
    location: 'Cathedral Square',
    timing: 'July (4 days)',
    description: 'The largest free French-themed festival in the country with live music, street performers, and family activities.',
  },
  {
    name: 'Locust Street Festival',
    location: 'Riverwest',
    timing: 'June',
    description: 'Free neighborhood street festival with multiple music stages, local vendors, and community spirit.',
  },
  {
    name: 'Brady Street Festival',
    location: 'Brady Street',
    timing: 'July',
    description: 'Historic Brady Street closes to traffic for free live music, food, and Italian heritage celebration.',
  },
  {
    name: 'Doors Open Milwaukee',
    location: 'Citywide',
    timing: 'September',
    description: 'Annual event opening 150+ buildings for free tours including historic sites normally closed to public.',
  },
  {
    name: 'Holiday Lights Festival',
    location: 'Downtown',
    timing: 'November-December',
    description: 'Free holiday light displays throughout downtown including the Milwaukee City Hall light show.',
  },
];

const beerGardens = [
  { name: 'Estabrook Park Beer Garden', desc: 'Milwaukee\'s first modern beer garden with 800 seats along the river' },
  { name: 'South Shore Terrace', desc: 'Stunning Lake Michigan views and Bay View vibes' },
  { name: 'Hubbard Park Lodge', desc: 'Charming historic lodge setting on the river in Shorewood' },
  { name: 'The Landing at Hoyt Park', desc: 'Wauwatosa gem with playground nearby for families' },
  { name: 'Whitnall Park Beer Garden', desc: 'Beautiful setting in Milwaukee County\'s largest park' },
  { name: 'Drexel Town Square', desc: 'Oak Creek destination with splash pad and family activities' },
  { name: 'The Grist House', desc: 'New Berlin location with scenic grounds and fire pits' },
];

const selfGuidedTours = [
  {
    name: 'Milwaukee Riverwalk',
    length: '3 Miles',
    highlights: ['Public Art', 'Historic Markers', 'Free App Available'],
    description: 'Winds through downtown along the Milwaukee River with art installations and restaurants.',
  },
  {
    name: 'Street Art & Murals Tour',
    length: 'Variable',
    highlights: ['Black Cat Alley', 'Walker\'s Point', 'Third Ward'],
    description: 'Milwaukee\'s vibrant mural scene spans neighborhoods. Download free mural map from Visit Milwaukee.',
  },
  {
    name: 'Historic Architecture Walk',
    length: '2-3 Miles',
    highlights: ['City Hall', 'Yankee Hill', 'Art Deco'],
    description: 'Explore Victorian mansions, Art Deco gems, and stunning churches with free guides from Central Library.',
  },
  {
    name: 'Bronze Fonz & Public Art Trail',
    length: '2 Miles',
    highlights: ['Bronze Fonz', 'Gertie the Duck', 'River Sculptures'],
    description: 'Visit Milwaukee\'s beloved public sculptures including the famous Bronze Fonz on the Riverwalk.',
  },
  {
    name: 'Historic Third Ward Walking Tour',
    length: '1.5 Miles',
    highlights: ['Warehouses', 'Galleries', 'Broadway'],
    description: 'Explore converted warehouses, boutiques, and the vibrant arts scene of this trendy neighborhood.',
  },
  {
    name: 'Brewery Heritage Trail',
    length: 'Variable',
    highlights: ['Pabst Complex', 'Miller Valley', 'Schlitz Park'],
    description: 'Discover Milwaukee\'s beer history through historic brewery buildings and brewing landmarks.',
  },
];

const freeSummerActivities = [
  'Bradford Beach volleyball and swimming',
  'South Shore Beach relaxation',
  'Bay View Beach quiet escapes',
  'Atwater Beach in Shorewood',
  'Fondy Farmers Market browsing',
  'Riverwest Gardeners Market',
  'Milwaukee Public Market sampling (free to browse)',
  'Free festival areas at ethnic festivals',
  'Locust Street Festival music',
  'Brady Street Festival celebration',
  'Juneteenth Day Celebration',
  'PrideFest free stages',
  'Free concerts throughout the city',
  'Kayak launch at Lakeshore State Park (bring your own)',
  'Free outdoor yoga in parks',
  'Fishing from public piers (with license)',
];

const freeWinterActivities = [
  'Sledding at Humboldt Park hill',
  'Sledding at Whitnall Park',
  'Cross-country skiing on park trails',
  'Ice skating at Red Arrow Park (bring skates)',
  'Winter hiking on lakefront trails',
  'Snowshoeing at county parks',
  'Milwaukee Public Library programs',
  'Free museum days year-round',
  'Gallery Night with refreshments',
  'Holiday light displays downtown',
  'Cathedral Square Christmas tree',
  'Milwaukee City Hall light show',
  'Winter farmers markets (indoor)',
  'Free downtown ice rink viewing',
];

const historicSites = [
  { name: 'Milwaukee City Hall', desc: 'Stunning Flemish Renaissance building with free lobby access and architecture tours during Doors Open' },
  { name: 'Pabst Mansion Grounds', desc: 'Walk the beautiful grounds of this Gilded Age mansion for free (mansion tour has fee)' },
  { name: 'Historic Third Ward', desc: 'Former warehouse district now arts hub - free to explore streets, galleries, and architecture' },
  { name: 'North Point Lighthouse', desc: 'Historic 1888 lighthouse in Lake Park - free grounds access, small fee for tower' },
  { name: 'Forest Home Cemetery', desc: 'Historic cemetery with beautiful Victorian monuments and famous Milwaukee residents' },
  { name: 'Milwaukee Federal Building', desc: 'Beaux-Arts masterpiece downtown - free to enter lobby and admire architecture' },
];

export default function FreeThingsMilwaukee() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Free Things to Do in Milwaukee | 50+ Budget-Friendly Activities</title>
        <meta
          name="title"
          content="Free Things to Do in Milwaukee | 50+ Budget-Friendly Activities"
        />
        <meta
          name="description"
          content="Discover 50+ free things to do in Milwaukee! Free museum days, lakefront trails, concerts, beer gardens, self-guided tours & more. Milwaukee is surprisingly affordable!"
        />
        <meta
          name="keywords"
          content="free things to do milwaukee, free activities milwaukee, milwaukee free attractions, free milwaukee events, budget milwaukee, cheap things to do milwaukee, free museums milwaukee, free concerts milwaukee"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Discover Milwaukee" />
        <link rel="canonical" href="https://discovermilwaukee.com/free-things-milwaukee" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discovermilwaukee.com/free-things-milwaukee" />
        <meta
          property="og:title"
          content="Free Things to Do in Milwaukee | 50+ Budget-Friendly Activities"
        />
        <meta
          property="og:description"
          content="Discover 50+ free things to do in Milwaukee! Free museum days, lakefront trails, concerts, beer gardens & more."
        />
        <meta
          property="og:image"
          content="https://discovermilwaukee.com/images/milwaukee-lakefront-free.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Discover Milwaukee" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://discovermilwaukee.com/free-things-milwaukee"
        />
        <meta
          property="twitter:title"
          content="Free Things to Do in Milwaukee | 50+ Budget-Friendly Activities"
        />
        <meta
          property="twitter:description"
          content="Discover 50+ free things to do in Milwaukee! Free museum days, lakefront trails, concerts, beer gardens & more."
        />
        <meta
          property="twitter:image"
          content="https://discovermilwaukee.com/images/milwaukee-lakefront-free.jpg"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main style={{ backgroundColor: colors.cream, minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: colors.green1,
            color: colors.cream,
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span
              style={{
                backgroundColor: colors.orange,
                color: colors.green1,
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Budget-Friendly Guide
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                margin: '30px 0 20px',
                lineHeight: '1.1',
              }}
            >
              Free Things to Do in Milwaukee
            </h1>
            <p
              style={{
                fontSize: '1.3rem',
                opacity: '0.9',
                maxWidth: '700px',
                margin: '0 auto 30px',
                lineHeight: '1.6',
              }}
            >
              Milwaukee is one of the most affordable major cities in the Midwest. Discover 50+
              completely free activities, from world-class museums to stunning lakefront trails.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  backgroundColor: colors.yellow,
                  color: colors.green1,
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                }}
              >
                50+ Free Activities
              </span>
              <span
                style={{
                  backgroundColor: 'transparent',
                  border: `2px solid ${colors.cream}`,
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                }}
              >
                Year-Round Options
              </span>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <nav
          style={{
            backgroundColor: colors.beige,
            padding: '25px 20px',
            position: 'sticky',
            top: '0',
            zIndex: '100',
            borderBottom: `3px solid ${colors.green2}`,
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Free Museums', href: '#museums' },
              { label: 'Parks & Outdoors', href: '#parks' },
              { label: 'Free Events', href: '#events' },
              { label: 'Beer Gardens', href: '#beer-gardens' },
              { label: 'Self-Guided Tours', href: '#tours' },
              { label: 'Summer Activities', href: '#summer' },
              { label: 'Winter Activities', href: '#winter' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: colors.green1,
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  padding: '8px 15px',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Introduction */}
        <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderLeft: `5px solid ${colors.orange}`,
            }}
          >
            <h2 style={{ color: colors.green1, marginTop: 0, fontSize: '1.8rem' }}>
              Why Milwaukee is Perfect for Budget Travelers
            </h2>
            <p style={{ color: colors.green2, fontSize: '1.1rem', lineHeight: '1.8' }}>
              Unlike many major cities, <strong>Milwaukee offers an incredible amount of free entertainment</strong>.
              From free museum days at world-class institutions to miles of stunning lakefront trails,
              free summer concerts, and unique beer gardens with no cover charge, you can easily spend
              a weekend here without spending a dime on activities. The city's German heritage means
              a culture of accessible public spaces and community gatherings that won't cost you anything
              but your time.
            </p>
            <p style={{ color: colors.green2, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 0 }}>
              Looking for more activities? Check out our complete guide to{' '}
              <Link href="/things-to-do-milwaukee" style={{ color: colors.orange, fontWeight: '600' }}>
                things to do in Milwaukee
              </Link>{' '}
              or discover the{' '}
              <Link href="/best-patios-milwaukee" style={{ color: colors.orange, fontWeight: '600' }}>
                best patios in Milwaukee
              </Link>{' '}
              for outdoor dining.
            </p>
          </div>
        </section>

        {/* Free Museum Days Section */}
        <section id="museums" style={{ padding: '60px 20px', backgroundColor: colors.beige }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Museum Days in Milwaukee
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {freeMuseums.length} world-class museums with free admission options
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '25px',
              }}
            >
              {freeMuseums.map((museum, index) => (
                <article
                  key={museum.name}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: index === 0 ? colors.green1 : index % 3 === 1 ? colors.green2 : colors.orange,
                      padding: '25px',
                      color: index % 3 === 2 ? colors.green1 : colors.cream,
                    }}
                  >
                    {museum.featured && (
                      <span
                        style={{
                          backgroundColor: colors.yellow,
                          color: colors.green1,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '700',
                          marginBottom: '10px',
                          display: 'inline-block',
                        }}
                      >
                        MOST POPULAR
                      </span>
                    )}
                    <h3 style={{ margin: museum.featured ? '15px 0 5px' : '0 0 5px', fontSize: '1.5rem' }}>
                      {museum.name}
                    </h3>
                    <p style={{ opacity: 0.9, margin: 0 }}>{museum.highlight}</p>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <p style={{ color: colors.green2, lineHeight: '1.7', margin: 0 }}>
                      {museum.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Parks & Outdoor Section */}
        <section id="parks" style={{ padding: '80px 20px', backgroundColor: colors.cream }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Parks & Outdoor Activities
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {freeParks.length} stunning parks and green spaces - all free to enjoy
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              {freeParks.map((park, index) => {
                const borderColors = [colors.green1, colors.green2, colors.orange, colors.yellow];
                return (
                  <div
                    key={park.name}
                    style={{
                      backgroundColor: 'white',
                      padding: '30px',
                      borderRadius: '16px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                      borderTop: `4px solid ${borderColors[index % 4]}`,
                    }}
                  >
                    <h3 style={{ color: colors.green1, marginTop: 0 }}>{park.name}</h3>
                    <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                      {park.description}
                    </p>
                    <div
                      style={{
                        backgroundColor: colors.beige,
                        padding: '15px',
                        borderRadius: '8px',
                        marginTop: '15px',
                      }}
                    >
                      <span style={{ color: colors.green1, fontWeight: '600' }}>{park.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Free Events Section */}
        <section id="events" style={{ padding: '80px 20px', backgroundColor: colors.green1 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.cream,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Events & Entertainment
              </h2>
              <p style={{ color: colors.beige, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {freeEvents.length} free festivals, concerts, and events throughout the year
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {freeEvents.map((event, index) => (
                <div
                  key={event.name}
                  style={{
                    backgroundColor: colors.cream,
                    padding: '35px',
                    borderRadius: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: index % 2 === 0 ? colors.orange : colors.yellow,
                      color: colors.green1,
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      marginBottom: '15px',
                    }}
                  >
                    {event.timing.toUpperCase()}
                  </div>
                  <h3 style={{ color: colors.green1, marginTop: 0, fontSize: '1.4rem' }}>
                    {event.name}
                  </h3>
                  <p style={{ color: colors.green2, fontSize: '0.9rem', marginBottom: '10px' }}>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p style={{ color: colors.green2, lineHeight: '1.7', margin: 0 }}>
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beer Gardens Section */}
        <section id="beer-gardens" style={{ padding: '80px 20px', backgroundColor: colors.beige }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free-Entry Beer Gardens
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                All of Milwaukee's beer gardens are free to enter - you only pay for what you drink
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              }}
            >
              <p style={{ color: colors.green2, fontSize: '1.1rem', lineHeight: '1.8', marginTop: 0 }}>
                Milwaukee's German heritage shines through its <strong>beloved beer garden culture</strong>.
                Unlike bars with cover charges, all Milwaukee beer gardens are <strong>completely free to
                enter</strong>. Bring a picnic, meet friends, or just enjoy the scenery - you only pay
                for drinks and food you purchase.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginTop: '30px',
                }}
              >
                {beerGardens.map((garden) => (
                  <div
                    key={garden.name}
                    style={{
                      backgroundColor: colors.beige,
                      padding: '20px',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${colors.orange}`,
                    }}
                  >
                    <h4 style={{ color: colors.green1, margin: '0 0 8px' }}>{garden.name}</h4>
                    <p style={{ color: colors.green2, margin: 0, fontSize: '0.95rem' }}>{garden.desc}</p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: colors.green1,
                  color: colors.cream,
                  padding: '20px',
                  borderRadius: '12px',
                  marginTop: '30px',
                  textAlign: 'center',
                }}
              >
                <strong>Remember:</strong> Entry is always free! Bring your own food to most gardens.
                Check individual policies for outside beverages.
              </div>
            </div>
          </div>
        </section>

        {/* Self-Guided Tours Section */}
        <section id="tours" style={{ padding: '80px 20px', backgroundColor: colors.cream }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Self-Guided Tours
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {selfGuidedTours.length} ways to explore Milwaukee's architecture, art, and history at your own pace
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
              {selfGuidedTours.map((tour, index) => {
                const headerColors = [colors.green2, colors.orange, colors.yellow, colors.green1];
                const headerTextColors = [colors.cream, colors.green1, colors.green1, colors.cream];
                return (
                  <div
                    key={tour.name}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div style={{ backgroundColor: headerColors[index % 4], padding: '20px', color: headerTextColors[index % 4] }}>
                      <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{tour.name}</h3>
                      <p style={{ margin: '5px 0 0', opacity: 0.9, fontSize: '0.9rem' }}>{tour.length}</p>
                    </div>
                    <div style={{ padding: '25px' }}>
                      <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                        {tour.description}
                      </p>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
                        {tour.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Free Summer Activities Section */}
        <section id="summer" style={{ padding: '80px 20px', backgroundColor: colors.green2 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.cream,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Summer Activities
              </h2>
              <p style={{ color: colors.beige, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {freeSummerActivities.length} free festivals, beaches, and outdoor activities
              </p>
            </div>

            <div
              style={{
                backgroundColor: colors.cream,
                padding: '40px',
                borderRadius: '16px',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.orange}`, paddingBottom: '10px' }}>
                    Beaches & Water
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    {freeSummerActivities.slice(0, 5).map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.yellow}`, paddingBottom: '10px' }}>
                    Markets & Food
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    {freeSummerActivities.slice(5, 8).map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.green1}`, paddingBottom: '10px' }}>
                    Free Festivals
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    {freeSummerActivities.slice(8, 13).map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.green2}`, paddingBottom: '10px' }}>
                    Outdoor Recreation
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    {freeSummerActivities.slice(13).map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Winter Activities Section */}
        <section id="winter" style={{ padding: '80px 20px', backgroundColor: colors.cream }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Winter Activities
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {freeWinterActivities.length} ways to embrace winter in Milwaukee
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.orange}`, paddingBottom: '10px' }}>
                    Outdoor Winter Fun
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    {freeWinterActivities.slice(0, 6).map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.yellow}`, paddingBottom: '10px' }}>
                    Indoor & Holiday Activities
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    {freeWinterActivities.slice(6).map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: colors.beige,
                  padding: '25px',
                  borderRadius: '12px',
                  marginTop: '30px',
                  textAlign: 'center',
                }}
              >
                <p style={{ color: colors.green1, margin: 0, fontSize: '1.1rem' }}>
                  <strong>Winter Pro Tip:</strong> The Milwaukee Art Museum's free First Thursday continues
                  through winter, making it the perfect cozy escape from the cold!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historic Sites Section */}
        <section style={{ padding: '80px 20px', backgroundColor: colors.green1 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.cream,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Free Historic Sites
              </h2>
              <p style={{ color: colors.beige, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                {historicSites.length} historic landmarks free to explore
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
              {historicSites.map((site) => (
                <div
                  key={site.name}
                  style={{
                    backgroundColor: colors.cream,
                    padding: '30px',
                    borderRadius: '16px',
                  }}
                >
                  <h3 style={{ color: colors.green1, marginTop: 0, fontSize: '1.3rem' }}>
                    {site.name}
                  </h3>
                  <p style={{ color: colors.green2, lineHeight: '1.7', margin: 0 }}>
                    {site.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ padding: '80px 20px', backgroundColor: colors.beige }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '15px',
                }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.2rem' }}>
                Everything you need to know about free activities in Milwaukee
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  }}
                >
                  <h3 style={{ color: colors.green1, marginTop: 0, marginBottom: '15px', fontSize: '1.2rem' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: colors.green2, margin: 0, lineHeight: '1.7' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ padding: '80px 20px', backgroundColor: colors.green1, textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: colors.cream, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '20px' }}>
              Ready to Explore Milwaukee on a Budget?
            </h2>
            <p style={{ color: colors.beige, fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '30px' }}>
              Milwaukee proves you don't need to spend a fortune to have an amazing time.
              From world-class museums to stunning lakefront views, this city welcomes everyone
              with open arms and free admission.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/things-to-do-milwaukee"
                style={{
                  backgroundColor: colors.orange,
                  color: colors.green1,
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                }}
              >
                Explore All Milwaukee Activities
              </Link>
              <Link
                href="/best-patios-milwaukee"
                style={{
                  backgroundColor: 'transparent',
                  color: colors.cream,
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  border: `2px solid ${colors.cream}`,
                }}
              >
                Best Milwaukee Patios
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section style={{ padding: '40px 20px', backgroundColor: colors.cream, textAlign: 'center' }}>
          <p style={{ color: colors.green2, maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            <em>
              Last updated: March 2024. Always check individual venues for current hours and any
              policy changes. Some activities may be seasonal or weather-dependent.
            </em>
          </p>
        </section>
      </main>
    </>
  );
}
