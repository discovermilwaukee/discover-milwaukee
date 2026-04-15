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
                World-class museums without the admission price
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '25px',
              }}
            >
              {/* Milwaukee Art Museum */}
              <article
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.green1,
                    padding: '25px',
                    color: colors.cream,
                  }}
                >
                  <span
                    style={{
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}
                  >
                    MOST POPULAR
                  </span>
                  <h3 style={{ margin: '15px 0 5px', fontSize: '1.5rem' }}>Milwaukee Art Museum</h3>
                  <p style={{ opacity: 0.9, margin: 0 }}>First Thursday of Every Month</p>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    The iconic Calatrava-designed museum with its stunning Burke Brise Soleil wings
                    offers <strong>free admission on the first Thursday</strong> of every month from 10am-8pm.
                    Explore over 30,000 works spanning antiquity to present day, including an impressive
                    collection of American decorative arts and the world's largest collection of
                    Haitian art.
                  </p>
                  <ul style={{ color: colors.green2, lineHeight: '1.8' }}>
                    <li>Wings open at 10am, 12pm, and close at sunset</li>
                    <li>Don't miss the Impressionist collection</li>
                    <li>Free parking validation available</li>
                  </ul>
                </div>
              </article>

              {/* Milwaukee Public Museum */}
              <article
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.green2,
                    padding: '25px',
                    color: colors.cream,
                  }}
                >
                  <h3 style={{ margin: '0 0 5px', fontSize: '1.5rem' }}>Milwaukee Public Museum</h3>
                  <p style={{ opacity: 0.9, margin: 0 }}>Select Free Days for WI Residents</p>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    One of the nation's largest natural history museums offers <strong>free admission
                    days throughout the year</strong> for Wisconsin residents. Walk through the Streets
                    of Old Milwaukee, explore the butterfly garden, and see the famous dinosaur exhibits.
                  </p>
                  <ul style={{ color: colors.green2, lineHeight: '1.8' }}>
                    <li>Check website for specific free dates</li>
                    <li>Streets of Old Milwaukee is a must-see</li>
                    <li>Plan for 2-3 hours minimum</li>
                  </ul>
                </div>
              </article>

              {/* Discovery World */}
              <article
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.orange,
                    padding: '25px',
                    color: colors.green1,
                  }}
                >
                  <h3 style={{ margin: '0 0 5px', fontSize: '1.5rem' }}>Discovery World</h3>
                  <p style={{ margin: 0 }}>Community Free Days & Library Passes</p>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    This lakefront science and technology museum offers <strong>free community days</strong>
                    and partners with Milwaukee Public Library for free museum passes. Great for
                    families with interactive exhibits on Great Lakes ecology, technology, and more.
                  </p>
                  <ul style={{ color: colors.green2, lineHeight: '1.8' }}>
                    <li>Check out library museum pass programs</li>
                    <li>Explore the tall ship S/V Denis Sullivan</li>
                    <li>Interactive exhibits for all ages</li>
                  </ul>
                </div>
              </article>
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
                Milwaukee's stunning lakefront and green spaces are always free
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              {/* Lakefront Trail */}
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  borderTop: `4px solid ${colors.green1}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginTop: 0 }}>Oak Leaf Lakefront Trail</h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  This <strong>3-mile paved trail</strong> along Lake Michigan offers stunning views of the
                  Milwaukee skyline and the Art Museum's iconic wings. Perfect for walking, running,
                  or biking. Connects to the larger 125-mile Oak Leaf Trail system.
                </p>
                <div
                  style={{
                    backgroundColor: colors.beige,
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '15px',
                  }}
                >
                  <strong style={{ color: colors.green1 }}>Pro Tip:</strong>{' '}
                  <span style={{ color: colors.green2 }}>
                    Catch sunrise over the lake for an unforgettable experience
                  </span>
                </div>
              </div>

              {/* Lake Park */}
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  borderTop: `4px solid ${colors.green2}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginTop: 0 }}>Lake Park</h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  Designed by <strong>Frederick Law Olmsted</strong> (Central Park's creator), this 138-acre
                  park features ravines, a historic lighthouse, and the famous Lion Bridges. Free
                  access to beautiful gardens, picnic areas, and stunning bluff views.
                </p>
                <div
                  style={{
                    backgroundColor: colors.beige,
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '15px',
                  }}
                >
                  <strong style={{ color: colors.green1 }}>Don't Miss:</strong>{' '}
                  <span style={{ color: colors.green2 }}>
                    The North Point Lighthouse and stunning ravine trails
                  </span>
                </div>
              </div>

              {/* South Shore Park */}
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  borderTop: `4px solid ${colors.orange}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginTop: 0 }}>South Shore Park & Beach</h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  A beloved Bay View destination with a <strong>free public beach</strong>, pavilion, and the
                  popular South Shore Terrace beer garden. Great for swimming, picnicking, and watching
                  stunning Lake Michigan sunsets.
                </p>
                <div
                  style={{
                    backgroundColor: colors.beige,
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '15px',
                  }}
                >
                  <strong style={{ color: colors.green1 }}>Best For:</strong>{' '}
                  <span style={{ color: colors.green2 }}>
                    Summer beach days and sunset watching
                  </span>
                </div>
              </div>

              {/* Lakeshore State Park */}
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  borderTop: `4px solid ${colors.yellow}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginTop: 0 }}>Lakeshore State Park</h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  Wisconsin's only <strong>urban state park</strong> offers 22 acres of green space right
                  downtown. Free admission, no vehicle sticker required. Features walking paths,
                  fishing spots, and prime views of the city skyline and Summerfest grounds.
                </p>
                <div
                  style={{
                    backgroundColor: colors.beige,
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '15px',
                  }}
                >
                  <strong style={{ color: colors.green1 }}>Unique Feature:</strong>{' '}
                  <span style={{ color: colors.green2 }}>
                    Only urban state park in Wisconsin - completely free!
                  </span>
                </div>
              </div>
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
                Milwaukee's vibrant event scene includes plenty of free options
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {/* Cathedral Square Concerts */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  padding: '35px',
                  borderRadius: '16px',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: colors.orange,
                    color: colors.green1,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '15px',
                  }}
                >
                  SUMMER FAVORITE
                </div>
                <h3 style={{ color: colors.green1, marginTop: 0, fontSize: '1.6rem' }}>
                  Jazz in the Park - Cathedral Square
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7', fontSize: '1.05rem' }}>
                  Every <strong>Thursday evening from June through August</strong>, Cathedral Square transforms
                  into Milwaukee's favorite free concert venue. Jazz in the Park draws thousands with
                  live music, food vendors, and a true community atmosphere. Bring a blanket, grab
                  food from nearby restaurants, and enjoy world-class jazz completely free.
                </p>
                <ul style={{ color: colors.green2, lineHeight: '1.8' }}>
                  <li>Thursdays, 5pm-9pm (June-August)</li>
                  <li>Bring your own blanket or lawn chair</li>
                  <li>Food and drinks available for purchase</li>
                  <li>Family-friendly atmosphere</li>
                </ul>
              </div>

              {/* Third Friday Art Walk */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  padding: '35px',
                  borderRadius: '16px',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: colors.yellow,
                    color: colors.green1,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '15px',
                  }}
                >
                  MONTHLY EVENT
                </div>
                <h3 style={{ color: colors.green1, marginTop: 0, fontSize: '1.6rem' }}>
                  Gallery Night & Third Friday Art Walk
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7', fontSize: '1.05rem' }}>
                  On the <strong>third Friday of each month</strong>, galleries throughout Milwaukee open
                  their doors for free art walks. The Historic Third Ward, Walker's Point, and
                  Bay View neighborhoods feature dozens of galleries with opening receptions,
                  artist talks, and complimentary refreshments.
                </p>
                <ul style={{ color: colors.green2, lineHeight: '1.8' }}>
                  <li>Third Friday of every month, 5pm-9pm</li>
                  <li>Multiple neighborhoods participate</li>
                  <li>Many galleries offer free wine and snacks</li>
                  <li>Great way to discover local artists</li>
                </ul>
              </div>
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
                {[
                  {
                    name: 'Estabrook Park Beer Garden',
                    desc: 'Milwaukee\'s first modern beer garden with 800 seats along the river',
                  },
                  {
                    name: 'South Shore Terrace',
                    desc: 'Stunning Lake Michigan views and Bay View vibes',
                  },
                  {
                    name: 'Hubbard Park Lodge',
                    desc: 'Charming historic lodge setting on the river',
                  },
                  {
                    name: 'The Landing at Hoyt Park',
                    desc: 'Wauwatosa gem with playground nearby',
                  },
                ].map((garden) => (
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
                Explore Milwaukee's architecture, art, and history at your own pace
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
              {/* Riverwalk Tour */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ backgroundColor: colors.green2, padding: '20px', color: colors.cream }}>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Milwaukee Riverwalk</h3>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    The <strong>3-mile Milwaukee Riverwalk</strong> winds through downtown along the
                    Milwaukee River. Features public art installations, historic markers, restaurants,
                    and beautiful bridges. Download the free Riverwalk app for a narrated tour
                    covering history and architecture.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      3 Miles
                    </span>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Public Art
                    </span>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Free App
                    </span>
                  </div>
                </div>
              </div>

              {/* Street Art Tour */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ backgroundColor: colors.orange, padding: '20px', color: colors.green1 }}>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Street Art & Murals Tour</h3>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    Milwaukee's <strong>vibrant mural scene</strong> spans neighborhoods from Walker's Point
                    to Bay View to the Third Ward. The Black Cat Alley collection features multiple
                    large-scale murals. Download a free mural map from Visit Milwaukee to create
                    your own walking tour.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Black Cat Alley
                    </span>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Walker's Point
                    </span>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Third Ward
                    </span>
                  </div>
                </div>
              </div>

              {/* Historic Architecture Tour */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ backgroundColor: colors.yellow, padding: '20px', color: colors.green1 }}>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Historic Architecture Walk</h3>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    Explore Milwaukee's <strong>stunning architectural heritage</strong> with free walking
                    tours. From the Victorian mansions of Yankee Hill to the Art Deco gems downtown,
                    the City Hall clock tower, and the beautiful churches of the Historic Third Ward.
                    Free architecture guides available at the Central Library.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      City Hall
                    </span>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Yankee Hill
                    </span>
                    <span style={{ backgroundColor: colors.beige, padding: '6px 12px', borderRadius: '20px', fontSize: '13px', color: colors.green1 }}>
                      Art Deco
                    </span>
                  </div>
                </div>
              </div>
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
                Milwaukee summers are packed with free festivals, beaches, and outdoor fun
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              {/* Festivals */}
              <div style={{ backgroundColor: colors.cream, padding: '30px', borderRadius: '16px' }}>
                <h3 style={{ color: colors.green1, marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.8rem' }}>*</span> Free Festivals
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  Many of Milwaukee's famous ethnic festivals offer <strong>free admission</strong> at certain
                  times or on certain days. Watch for free entry deals at Polish Fest, German Fest,
                  Irish Fest, and more. Neighborhood festivals like Locust Street Festival and
                  Brady Street Festival are completely free.
                </p>
              </div>

              {/* Beaches */}
              <div style={{ backgroundColor: colors.cream, padding: '30px', borderRadius: '16px' }}>
                <h3 style={{ color: colors.green1, marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.8rem' }}>*</span> Free Public Beaches
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  Cool off at Milwaukee's <strong>free public beaches</strong> along Lake Michigan. Bradford
                  Beach is the most popular with volleyball courts and food vendors. South Shore Beach
                  and Bay View Beach offer quieter alternatives. All beaches are free - just find
                  street parking nearby.
                </p>
              </div>

              {/* Farmers Markets */}
              <div style={{ backgroundColor: colors.cream, padding: '30px', borderRadius: '16px' }}>
                <h3 style={{ color: colors.green1, marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.8rem' }}>*</span> Farmers Markets
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  Stroll through Milwaukee's vibrant <strong>farmers markets</strong> for free entertainment,
                  live music, and people-watching. The Fondy Farmers Market, Riverwest Gardeners Market,
                  and various neighborhood markets offer a great free outing - just budget for
                  irresistible local produce and treats.
                </p>
              </div>

              {/* Free Concerts */}
              <div style={{ backgroundColor: colors.cream, padding: '30px', borderRadius: '16px' }}>
                <h3 style={{ color: colors.green1, marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.8rem' }}>*</span> Outdoor Concert Series
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                  Beyond Jazz in the Park, Milwaukee offers <strong>Chill on the Hill</strong> in Bay View,
                  free concerts at Pere Marquette Park, and various neighborhood concert series.
                  Check local listings for free live music nearly every night of the week during summer.
                </p>
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
                Milwaukee embraces winter with free outdoor and indoor activities
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
                    <li><strong>Sledding hills</strong> at Humboldt Park, Whitnall Park</li>
                    <li><strong>Cross-country skiing</strong> on park trails</li>
                    <li><strong>Ice skating</strong> at Red Arrow Park (free if you bring skates)</li>
                    <li><strong>Winter hiking</strong> along the lakefront</li>
                    <li><strong>Snowshoeing</strong> at county parks</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: colors.green1, marginTop: 0, borderBottom: `3px solid ${colors.yellow}`, paddingBottom: '10px' }}>
                    Indoor Winter Activities
                  </h3>
                  <ul style={{ color: colors.green2, lineHeight: '2', paddingLeft: '20px' }}>
                    <li><strong>Milwaukee Public Library</strong> - stunning architecture, free programs</li>
                    <li><strong>Mitchell Park Domes</strong> - warm tropical gardens (small fee)</li>
                    <li><strong>Free museum days</strong> continue year-round</li>
                    <li><strong>Gallery walks</strong> with complimentary refreshments</li>
                    <li><strong>Holiday light displays</strong> throughout the city</li>
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
