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

// Schema.org structured data
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '50+ Best Date Ideas in Milwaukee for Every Couple | 2024 Guide',
  description:
    'Discover the most romantic date ideas in Milwaukee, from upscale dining at Sanford to kayaking on the Milwaukee River. Perfect for first dates, anniversaries, and everything in between.',
  image: 'https://discovermilwaukee.com/images/milwaukee-date-ideas.jpg',
  author: {
    '@type': 'Organization',
    name: 'Discover Milwaukee',
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
  dateModified: '2024-03-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://discovermilwaukee.com/milwaukee-date-ideas',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most romantic restaurants in Milwaukee for a date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most romantic restaurants in Milwaukee include Sanford (fine dining with a tasting menu), Amilinda (intimate Spanish cuisine), Bacchus (elegant lakefront dining), Cassis (French bistro ambiance), and Birch (modern American in a cozy setting). Each offers an intimate atmosphere perfect for special occasions.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are good first date ideas in Milwaukee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Great first date ideas in Milwaukee include grabbing coffee at Colectivo or Interval, walking through the Milwaukee Public Market, strolling the Riverwalk, visiting the Milwaukee Art Museum, or exploring the Third Ward neighborhood. These options are low-pressure and allow for easy conversation.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are free date ideas in Milwaukee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Free date ideas in Milwaukee include walking along the Lakefront Trail, exploring Lake Park, visiting the free galleries at the Milwaukee Art Museum (first Thursday of the month), browsing the Third Ward Art Walk, watching planes at the airport observation area, and stargazing at the UWM Planetarium public nights.",
      },
    },
    {
      '@type': 'Question',
      name: "Where can I take a date in Milwaukee at night?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For nighttime dates in Milwaukee, visit Bryant's Cocktail Lounge for craft cocktails, catch a show at the Pabst Theater, walk the illuminated Riverwalk, enjoy rooftop drinks at The Outsider, or go bowling at Landmark Lanes. In summer, outdoor movies at various parks are also popular.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are unique date ideas in Milwaukee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Unique Milwaukee date ideas include kayaking on the Milwaukee River, taking a cocktail-making class at Bryant's, doing a brewery tour by bike, attending a murder mystery dinner, exploring the Mitchell Park Domes at night during special events, or taking a cooking class at Sur La Table in the Third Ward.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best seasonal date ideas in Milwaukee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Seasonal dates in Milwaukee vary throughout the year. In spring, visit the Domes or bike the Oak Leaf Trail. Summer offers beach days, festival hopping, and rooftop bars. Fall is perfect for apple picking nearby, brewery patios, and fall color drives. Winter dates include ice skating at Red Arrow Park, Holiday Lights at the Domes, and cozy cocktail bars.",
      },
    },
  ],
};

export default function MilwaukeeDateIdeas() {
  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>50+ Best Date Ideas in Milwaukee WI | Romantic Things to Do 2024</title>
        <meta
          name="description"
          content="Discover the best date ideas in Milwaukee for every couple. From romantic dinners at Sanford to kayaking the river, find perfect date night ideas for first dates, anniversaries & more."
        />
        <meta
          name="keywords"
          content="date ideas milwaukee, romantic things to do milwaukee, date night milwaukee, first date ideas milwaukee, romantic restaurants milwaukee, things to do for couples milwaukee, milwaukee date spots"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="50+ Best Date Ideas in Milwaukee | Romantic Things to Do"
        />
        <meta
          property="og:description"
          content="From romantic dinners to outdoor adventures, discover the perfect date ideas in Milwaukee for every stage of your relationship."
        />
        <meta
          property="og:image"
          content="https://discovermilwaukee.com/images/milwaukee-date-ideas.jpg"
        />
        <meta property="og:url" content="https://discovermilwaukee.com/milwaukee-date-ideas" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="50+ Best Date Ideas in Milwaukee | Romantic Things to Do"
        />
        <meta
          name="twitter:description"
          content="From romantic dinners to outdoor adventures, discover the perfect date ideas in Milwaukee for every stage of your relationship."
        />
        <meta
          name="twitter:image"
          content="https://discovermilwaukee.com/images/milwaukee-date-ideas.jpg"
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://discovermilwaukee.com/milwaukee-date-ideas" />
        <meta name="author" content="Discover Milwaukee" />
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />

        {/* Structured Data */}
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
            background: `linear-gradient(135deg, ${colors.green1} 0%, ${colors.green2} 100%)`,
            color: colors.cream,
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}
            >
              50+ Best Date Ideas in Milwaukee
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                opacity: '0.9',
                maxWidth: '700px',
                margin: '0 auto 30px',
                lineHeight: '1.6',
              }}
            >
              From romantic fine dining to adventurous outdoor activities, discover the perfect date
              ideas in Milwaukee for every stage of your relationship.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
              }}
            >
              {['Romantic Dinners', 'Creative Dates', 'First Dates', 'Outdoor Adventures', 'Free Ideas'].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: colors.orange,
                      color: colors.green1,
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <nav
          style={{
            backgroundColor: colors.beige,
            padding: '20px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: `2px solid ${colors.green2}`,
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'center',
            }}
          >
            {[
              { label: 'Romantic Dinners', href: '#romantic-dinners' },
              { label: 'Creative Dates', href: '#creative-dates' },
              { label: 'First Dates', href: '#first-dates' },
              { label: 'Outdoor Dates', href: '#outdoor-dates' },
              { label: 'Free Ideas', href: '#free-dates' },
              { label: 'Seasonal', href: '#seasonal-dates' },
              { label: 'FAQs', href: '#faqs' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: colors.green1,
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.cream)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Introduction */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px 40px' }}>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: colors.green1,
            }}
          >
            Milwaukee is a city made for romance. Whether you're planning a memorable first date, celebrating
            an anniversary, or simply looking for a fun night out with your partner, the Cream City offers
            an incredible variety of experiences. From James Beard-nominated restaurants tucked into
            historic neighborhoods to sunset kayak paddles on the Milwaukee River, our guide covers every
            type of date for every type of couple.
          </p>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: colors.green1,
              marginTop: '20px',
            }}
          >
            We've organized these date ideas by category to help you find exactly what you're looking for.
            Looking for more dining options? Check out our{' '}
            <Link
              href="/best-restaurants-milwaukee"
              style={{ color: colors.orange, fontWeight: '600' }}
            >
              guide to Milwaukee's best restaurants
            </Link>
            .
          </p>
        </section>

        {/* Romantic Dinners Section */}
        <section
          id="romantic-dinners"
          style={{
            backgroundColor: colors.beige,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.orange,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Fine Dining & Romance
              </span>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                }}
              >
                Romantic Dinner Spots
              </h2>
              <p style={{ color: colors.green2, maxWidth: '600px', margin: '20px auto 0' }}>
                Perfect for anniversaries, special occasions, or when you want to impress. These
                restaurants offer exceptional food in intimate settings.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
              }}
            >
              {/* Sanford */}
              <article
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                  }}
                >
                  <h3 style={{ color: colors.green1, fontSize: '1.5rem', margin: 0 }}>Sanford</h3>
                  <span
                    style={{
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    $$$
                  </span>
                </div>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  Milwaukee's most celebrated fine dining destination. The intimate 50-seat dining room
                  and exceptional tasting menu make this the ultimate special occasion spot. James Beard
                  nominated multiple times, Sanford delivers an unforgettable culinary experience.
                </p>
                <div style={{ fontSize: '0.9rem', color: colors.green2 }}>
                  <strong>Best for:</strong> Anniversaries, proposals, milestone celebrations
                  <br />
                  <strong>Location:</strong> East Side
                  <br />
                  <strong>Pro tip:</strong> Book at least 2 weeks ahead; request the corner table for
                  maximum privacy.
                </div>
              </article>

              {/* Amilinda */}
              <article
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                  }}
                >
                  <h3 style={{ color: colors.green1, fontSize: '1.5rem', margin: 0 }}>Amilinda</h3>
                  <span
                    style={{
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    $$$
                  </span>
                </div>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  This intimate Spanish and Portuguese restaurant offers a deeply romantic experience.
                  With only about 30 seats, chef Gregory Leon creates dishes that transport you to the
                  Iberian Peninsula. The candlelit atmosphere is inherently romantic.
                </p>
                <div style={{ fontSize: '0.9rem', color: colors.green2 }}>
                  <strong>Best for:</strong> Food-loving couples, wine enthusiasts
                  <br />
                  <strong>Location:</strong> Walker's Point
                  <br />
                  <strong>Pro tip:</strong> Opt for the tasting menu to experience the full range of
                  flavors.
                </div>
              </article>

              {/* Birch */}
              <article
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                  }}
                >
                  <h3 style={{ color: colors.green1, fontSize: '1.5rem', margin: 0 }}>Birch</h3>
                  <span
                    style={{
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    $$$
                  </span>
                </div>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  Modern American cuisine in a warm, sophisticated setting. Birch focuses on locally
                  sourced ingredients with creative preparations. The wood-accented interior creates a
                  cozy yet upscale vibe that's perfect for date night.
                </p>
                <div style={{ fontSize: '0.9rem', color: colors.green2 }}>
                  <strong>Best for:</strong> Foodies who appreciate farm-to-table dining
                  <br />
                  <strong>Location:</strong> East Side
                  <br />
                  <strong>Pro tip:</strong> Start with the seasonal cocktails—they're expertly crafted.
                </div>
              </article>

              {/* Cassis */}
              <article
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                  }}
                >
                  <h3 style={{ color: colors.green1, fontSize: '1.5rem', margin: 0 }}>Cassis</h3>
                  <span
                    style={{
                      backgroundColor: colors.orange,
                      color: colors.green1,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    $$
                  </span>
                </div>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  A charming French bistro that feels like a mini getaway to Paris. The intimate space,
                  classic French cuisine, and extensive wine list create an effortlessly romantic
                  atmosphere. Perfect for couples who appreciate European charm.
                </p>
                <div style={{ fontSize: '0.9rem', color: colors.green2 }}>
                  <strong>Best for:</strong> Francophiles, wine lovers, midweek date nights
                  <br />
                  <strong>Location:</strong> Third Ward
                  <br />
                  <strong>Pro tip:</strong> The French onion soup and steak frites are legendary.
                </div>
              </article>

              {/* Bacchus */}
              <article
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                  }}
                >
                  <h3 style={{ color: colors.green1, fontSize: '1.5rem', margin: 0 }}>Bacchus</h3>
                  <span
                    style={{
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    $$$
                  </span>
                </div>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  Located in the Cudahy Tower with stunning lake views, Bacchus offers elegant
                  contemporary American cuisine. The sophisticated setting with floor-to-ceiling windows
                  makes every meal feel special, especially at sunset.
                </p>
                <div style={{ fontSize: '0.9rem', color: colors.green2 }}>
                  <strong>Best for:</strong> Sunset dinners, impressing out-of-town guests
                  <br />
                  <strong>Location:</strong> Downtown lakefront
                  <br />
                  <strong>Pro tip:</strong> Request a window table and time your reservation for sunset.
                </div>
              </article>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link
                href="/best-restaurants-milwaukee"
                style={{
                  display: 'inline-block',
                  backgroundColor: colors.green1,
                  color: colors.cream,
                  padding: '14px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'background-color 0.2s',
                }}
              >
                Explore All Milwaukee Restaurants
              </Link>
            </div>
          </div>
        </section>

        {/* Creative & Unique Dates Section */}
        <section
          id="creative-dates"
          style={{
            backgroundColor: colors.cream,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.orange,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Beyond the Ordinary
              </span>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                }}
              >
                Unique & Creative Date Ideas
              </h2>
              <p style={{ color: colors.green2, maxWidth: '600px', margin: '20px auto 0' }}>
                Skip the typical dinner-and-a-movie routine with these memorable experiences that will
                spark conversation and create lasting memories.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
              }}
            >
              {/* Bryant's Cocktail Lounge */}
              <div
                style={{
                  backgroundColor: colors.green1,
                  borderRadius: '16px',
                  padding: '30px',
                  color: colors.cream,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.orange,
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  🍸
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Bryant's Cocktail Lounge</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.7', marginBottom: '15px' }}>
                  Milwaukee's oldest cocktail lounge is a speakeasy-style bar with no menu—just tell
                  the bartender what flavors you like, and they'll craft something special. The
                  intimate, dimly lit atmosphere is perfect for couples.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <strong>Why it's special:</strong> The mystery of not knowing what you'll get makes
                  for great conversation and a sense of adventure.
                </p>
              </div>

              {/* Third Ward Art Walk */}
              <div
                style={{
                  backgroundColor: colors.green2,
                  borderRadius: '16px',
                  padding: '30px',
                  color: colors.cream,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.yellow,
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  🎨
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Third Ward Art Walk</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.7', marginBottom: '15px' }}>
                  On the third Friday of each month, the Historic Third Ward's galleries open their
                  doors for a free self-guided art walk. Browse contemporary art, meet artists, and
                  enjoy complimentary refreshments.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <strong>Why it's special:</strong> It's free, cultural, and you can end the evening
                  at any of the neighborhood's excellent restaurants.
                </p>
              </div>

              {/* Kayaking the River */}
              <div
                style={{
                  backgroundColor: colors.green1,
                  borderRadius: '16px',
                  padding: '30px',
                  color: colors.cream,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.orange,
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  🛶
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Kayaking the Milwaukee River</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.7', marginBottom: '15px' }}>
                  Paddle through downtown Milwaukee on a tandem kayak for a unique perspective of the
                  city. Sunset paddles are particularly romantic, with the city lights reflecting on
                  the water as dusk falls.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <strong>Why it's special:</strong> Active and adventurous while still allowing for
                  conversation. Rent from Milwaukee Kayak Company.
                </p>
              </div>

              {/* Brewery Hopping */}
              <div
                style={{
                  backgroundColor: colors.green2,
                  borderRadius: '16px',
                  padding: '30px',
                  color: colors.cream,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.yellow,
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  🍺
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Brewery Hopping Tour</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.7', marginBottom: '15px' }}>
                  In the city that made beer famous, create your own brewery crawl. Start at Lakefront
                  Brewery for their entertaining tour, then hit Third Space, Good City, and Eagle Park.
                  Each has its own vibe and specialty brews.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <strong>Why it's special:</strong> Milwaukee's brewery scene is world-class, and
                  tasting flights together is naturally social and fun.
                </p>
              </div>

              {/* Cooking Class */}
              <div
                style={{
                  backgroundColor: colors.green1,
                  borderRadius: '16px',
                  padding: '30px',
                  color: colors.cream,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.orange,
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  👨‍🍳
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Couples Cooking Class</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.7', marginBottom: '15px' }}>
                  Learn to cook together at Sur La Table in the Third Ward or Milwaukee Food & City
                  Tours' hands-on classes. From pasta making to sushi rolling, these classes are
                  interactive and delicious.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <strong>Why it's special:</strong> You'll work together, learn something new, and
                  enjoy the fruits of your labor.
                </p>
              </div>

              {/* Murder Mystery */}
              <div
                style={{
                  backgroundColor: colors.green2,
                  borderRadius: '16px',
                  padding: '30px',
                  color: colors.cream,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.yellow,
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  🔍
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Murder Mystery Dinner</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.7', marginBottom: '15px' }}>
                  Get dressed up and solve a crime together at one of Milwaukee's murder mystery dinner
                  theaters. It's interactive, theatrical, and includes a multi-course meal. Perfect
                  for couples who love games and puzzles.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <strong>Why it's special:</strong> You'll see each other's problem-solving skills in
                  action—a fun way to learn more about your partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Casual First Dates Section */}
        <section
          id="first-dates"
          style={{
            backgroundColor: colors.beige,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.orange,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Low-Pressure Options
              </span>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                }}
              >
                Perfect First Date Ideas
              </h2>
              <p style={{ color: colors.green2, maxWidth: '600px', margin: '20px auto 0' }}>
                First dates should be relaxed and conducive to conversation. These spots offer the
                perfect balance of ambiance and comfort.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '30px' }}>
              {/* Coffee Shops */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3 style={{ color: colors.green1, fontSize: '1.8rem', marginBottom: '20px' }}>
                    Coffee Shop Dates
                  </h3>
                  <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '20px' }}>
                    The classic first date for good reason. Coffee shops offer a casual, low-commitment
                    setting where you can talk for hours or gracefully exit if the chemistry isn't
                    there. Milwaukee has exceptional options.
                  </p>
                  <Link
                    href="/milwaukee-coffee-shops"
                    style={{
                      color: colors.orange,
                      fontWeight: '600',
                      textDecoration: 'none',
                    }}
                  >
                    See our full coffee shop guide →
                  </Link>
                </div>
                <div>
                  <h4 style={{ color: colors.green1, marginBottom: '15px' }}>Top Picks:</h4>
                  <ul style={{ color: colors.green2, lineHeight: '2' }}>
                    <li>
                      <strong>Colectivo (Lakefront):</strong> Stunning lake views, spacious seating
                    </li>
                    <li>
                      <strong>Interval:</strong> Modern, stylish space in Walker's Point
                    </li>
                    <li>
                      <strong>Stone Creek (Factory):</strong> Industrial chic, watch roasting
                    </li>
                    <li>
                      <strong>Anodyne:</strong> Bay View's beloved neighborhood spot
                    </li>
                    <li>
                      <strong>Pilcrow:</strong> Minimal, aesthetic, excellent pastries
                    </li>
                  </ul>
                </div>
              </div>

              {/* Public Market */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3 style={{ color: colors.green1, fontSize: '1.8rem', marginBottom: '20px' }}>
                    Milwaukee Public Market
                  </h3>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    The Public Market is ideal for first dates because there's always something to look
                    at and talk about. Browse the vendors together, grab different dishes to share, and
                    people-watch from the upstairs seating area. The variety means you can both find
                    something you like.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: colors.beige,
                    padding: '25px',
                    borderRadius: '12px',
                  }}
                >
                  <h4 style={{ color: colors.green1, marginBottom: '15px' }}>Date Strategy:</h4>
                  <ol style={{ color: colors.green2, lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li>Browse together and each pick something to share</li>
                    <li>Grab drinks (great wine and beer selection)</li>
                    <li>Find seats upstairs with market views</li>
                    <li>Walk off dinner along the nearby Riverwalk</li>
                  </ol>
                </div>
              </div>

              {/* Riverwalk */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3 style={{ color: colors.green1, fontSize: '1.8rem', marginBottom: '20px' }}>
                    Milwaukee Riverwalk Stroll
                  </h3>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    The Riverwalk stretches for miles through downtown, offering a beautiful backdrop
                    for conversation. Walking dates are underrated—they're active enough to reduce
                    awkwardness but relaxed enough for real connection. Stop at riverside bars and
                    restaurants along the way.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: colors.beige,
                    padding: '25px',
                    borderRadius: '12px',
                  }}
                >
                  <h4 style={{ color: colors.green1, marginBottom: '15px' }}>Best Route:</h4>
                  <p style={{ color: colors.green2, lineHeight: '1.7' }}>
                    Start at Pere Marquette Park, walk south through the Third Ward, and end at
                    Lakefront Brewery or Barnacle Bud's for drinks. The whole walk takes about 45
                    minutes, but you can extend or shorten based on how things are going.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor Dates Section */}
        <section
          id="outdoor-dates"
          style={{
            backgroundColor: colors.cream,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.orange,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Fresh Air & Adventure
              </span>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                }}
              >
                Outdoor Date Ideas
              </h2>
              <p style={{ color: colors.green2, maxWidth: '600px', margin: '20px auto 0' }}>
                Milwaukee's lakefront location and extensive park system make it perfect for active,
                outdoorsy couples. For more outdoor activities, see our{' '}
                <Link href="/things-to-do-milwaukee" style={{ color: colors.orange }}>
                  complete things to do guide
                </Link>
                .
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '25px',
              }}
            >
              {/* Lake Park */}
              <div
                style={{
                  border: `2px solid ${colors.green2}`,
                  borderRadius: '16px',
                  padding: '30px',
                  backgroundColor: colors.cream,
                }}
              >
                <h3 style={{ color: colors.green1, fontSize: '1.4rem', marginBottom: '15px' }}>
                  Lake Park Exploration
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  This Frederick Law Olmsted-designed park is one of Milwaukee's most beautiful spaces.
                  Walk the ravine trails, admire the historic pavilion, and take in stunning lake
                  views. The North Point Lighthouse is particularly romantic at golden hour.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Free
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Year-round
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Dogs welcome
                  </span>
                </div>
              </div>

              {/* Kayaking */}
              <div
                style={{
                  border: `2px solid ${colors.green2}`,
                  borderRadius: '16px',
                  padding: '30px',
                  backgroundColor: colors.cream,
                }}
              >
                <h3 style={{ color: colors.green1, fontSize: '1.4rem', marginBottom: '15px' }}>
                  Milwaukee River Kayaking
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  Rent a tandem kayak and paddle through downtown. You'll see the city from a
                  completely different perspective while getting some exercise. Sunset paddles are
                  especially romantic, with city lights reflecting on the water.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    ~$30/person
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    May-October
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Active
                  </span>
                </div>
              </div>

              {/* Lakeshore State Park */}
              <div
                style={{
                  border: `2px solid ${colors.green2}`,
                  borderRadius: '16px',
                  padding: '30px',
                  backgroundColor: colors.cream,
                }}
              >
                <h3 style={{ color: colors.green1, fontSize: '1.4rem', marginBottom: '15px' }}>
                  Lakeshore State Park
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  Wisconsin's only urban state park offers incredible skyline views, a sandy beach
                  area, and miles of walking paths. Pack a picnic, watch the sailboats, and enjoy one
                  of the best sunset spots in the city.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Free (parking fee)
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Year-round
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Sunset views
                  </span>
                </div>
              </div>

              {/* Bike the Lakefront */}
              <div
                style={{
                  border: `2px solid ${colors.green2}`,
                  borderRadius: '16px',
                  padding: '30px',
                  backgroundColor: colors.cream,
                }}
              >
                <h3 style={{ color: colors.green1, fontSize: '1.4rem', marginBottom: '15px' }}>
                  Lakefront Trail Bike Ride
                </h3>
                <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '15px' }}>
                  Rent Bublr bikes (Milwaukee's bike share) and cruise the Oak Leaf Trail along the
                  lakefront. Stop at Bradford Beach, the art museum, or South Shore Park. It's active
                  but easy, and you can go at your own pace.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    ~$8/hour
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Spring-Fall
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.beige,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: colors.green1,
                    }}
                  >
                    Scenic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free/Budget Dates Section */}
        <section
          id="free-dates"
          style={{
            backgroundColor: colors.green1,
            padding: '60px 20px',
            color: colors.cream,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.yellow,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Romance on a Budget
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Free & Budget-Friendly Date Ideas</h2>
              <p style={{ opacity: 0.9, maxWidth: '600px', margin: '20px auto 0' }}>
                Great dates don't have to break the bank. Milwaukee offers plenty of free and low-cost
                experiences that are just as memorable as expensive outings.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
              }}
            >
              {[
                {
                  title: 'Lakefront Trail Walk',
                  description:
                    'Miles of scenic lakefront paths perfect for conversation and people-watching.',
                  cost: 'Free',
                },
                {
                  title: 'Milwaukee Art Museum (First Thursday)',
                  description:
                    'Free admission on the first Thursday of each month. The Calatrava building alone is worth the visit.',
                  cost: 'Free',
                },
                {
                  title: 'Third Ward Gallery Walk',
                  description:
                    'Free monthly art walk through the Historic Third Ward galleries. Third Friday each month.',
                  cost: 'Free',
                },
                {
                  title: 'UWM Planetarium Nights',
                  description:
                    'Public viewing nights at the Manfred Olson Planetarium. Stargazing makes for great dates.',
                  cost: 'Free',
                },
                {
                  title: 'Mitchell Park Domes',
                  description:
                    "Three stunning glass domes with different climates. One of Milwaukee's most unique spots.",
                  cost: '$8/person',
                },
                {
                  title: 'Public Market Browsing',
                  description:
                    "Browse the market, sample free tastings, and share an affordable lunch together.",
                  cost: '$15-25',
                },
                {
                  title: 'Sunset at Lakeshore State Park',
                  description:
                    'Pack a picnic and watch the sun set over the Milwaukee skyline. Magical and free.',
                  cost: 'Free',
                },
                {
                  title: 'Airport Observation Area',
                  description:
                    "Watch planes take off and land from General Mitchell's free observation area. Surprisingly romantic.",
                  cost: 'Free',
                },
                {
                  title: 'Summer Concert Series',
                  description:
                    'Free live music at Cathedral Square Park (Jazz in the Park) and other venues throughout summer.',
                  cost: 'Free',
                },
                {
                  title: 'Library Date',
                  description:
                    "Browse Milwaukee's beautiful central library, pick books for each other, read together in the reading room.",
                  cost: 'Free',
                },
                {
                  title: 'Farmers Market Morning',
                  description:
                    'Summer Saturdays at the Third Ward or Wauwatosa farmers markets. Fresh air, local goods, and people-watching.',
                  cost: '$10-20',
                },
                {
                  title: 'Board Game Cafe',
                  description:
                    'Pay a small cover at a board game cafe and spend hours playing together. Great for competitive couples.',
                  cost: '$5-10 + drinks',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '25px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{item.title}</h3>
                    <span
                      style={{
                        backgroundColor: item.cost === 'Free' ? colors.yellow : colors.orange,
                        color: colors.green1,
                        padding: '4px 10px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                      }}
                    >
                      {item.cost}
                    </span>
                  </div>
                  <p style={{ opacity: 0.85, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Dates Section */}
        <section
          id="seasonal-dates"
          style={{
            backgroundColor: colors.beige,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.orange,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Year-Round Romance
              </span>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                }}
              >
                Seasonal Date Ideas
              </h2>
              <p style={{ color: colors.green2, maxWidth: '600px', margin: '20px auto 0' }}>
                Milwaukee transforms with each season, offering unique date opportunities throughout
                the year.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
              }}
            >
              {/* Spring */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#a8d5ba',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: colors.green1, margin: 0, fontSize: '1.5rem' }}>Spring</h3>
                  <p style={{ color: colors.green2, margin: '5px 0 0', fontSize: '0.9rem' }}>
                    March - May
                  </p>
                </div>
                <div style={{ padding: '25px' }}>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: colors.green2,
                    }}
                  >
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Mitchell Park Domes</strong> - Spring flower show
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Bike the Oak Leaf Trail</strong> - Cherry blossoms
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Boerner Botanical Gardens</strong> - Tulip season
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Patio Season Returns</strong> - First outdoor drinks
                    </li>
                    <li style={{ padding: '10px 0' }}>
                      <strong>Opening Day at Miller Park</strong> - Brewers game
                    </li>
                  </ul>
                </div>
              </div>

              {/* Summer */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.yellow,
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: colors.green1, margin: 0, fontSize: '1.5rem' }}>Summer</h3>
                  <p style={{ color: colors.green2, margin: '5px 0 0', fontSize: '0.9rem' }}>
                    June - August
                  </p>
                </div>
                <div style={{ padding: '25px' }}>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: colors.green2,
                    }}
                  >
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Summerfest</strong> - World's largest music festival
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Beach Day at Bradford</strong> - Lake Michigan vibes
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Rooftop Bar Hopping</strong> - Outsider, Broken Bat
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Jazz in the Park</strong> - Free Thursday concerts
                    </li>
                    <li style={{ padding: '10px 0' }}>
                      <strong>Kayak at Sunset</strong> - River or lakefront
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fall */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.orange,
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: colors.green1, margin: 0, fontSize: '1.5rem' }}>Fall</h3>
                  <p style={{ color: colors.green2, margin: '5px 0 0', fontSize: '0.9rem' }}>
                    September - November
                  </p>
                </div>
                <div style={{ padding: '25px' }}>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: colors.green2,
                    }}
                  >
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Apple Picking</strong> - Nearby Cedarburg orchards
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Brewery Patio Season</strong> - Oktoberfest beers
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Holy Hill Fall Colors</strong> - Scenic drive
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Corn Maze Date</strong> - Get playfully lost
                    </li>
                    <li style={{ padding: '10px 0' }}>
                      <strong>Cozy Cocktail Bars</strong> - Bryant's, At Random
                    </li>
                  </ul>
                </div>
              </div>

              {/* Winter */}
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#b8d4e8',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: colors.green1, margin: 0, fontSize: '1.5rem' }}>Winter</h3>
                  <p style={{ color: colors.green2, margin: '5px 0 0', fontSize: '0.9rem' }}>
                    December - February
                  </p>
                </div>
                <div style={{ padding: '25px' }}>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: colors.green2,
                    }}
                  >
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Ice Skating Red Arrow Park</strong> - Downtown romance
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Holiday Lights at the Domes</strong> - Magical display
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Christkindlmarket</strong> - German holiday market
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: `1px solid ${colors.beige}` }}>
                      <strong>Cozy Restaurant Hopping</strong> - Beat cabin fever
                    </li>
                    <li style={{ padding: '10px 0' }}>
                      <strong>Valentine's Dinner</strong> - Book early!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section
          id="faqs"
          style={{
            backgroundColor: colors.cream,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.orange,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Common Questions
              </span>
              <h2
                style={{
                  color: colors.green1,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                }}
              >
                Milwaukee Date Ideas FAQ
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details
                  key={index}
                  style={{
                    backgroundColor: colors.beige,
                    borderRadius: '12px',
                    padding: '25px',
                    cursor: 'pointer',
                  }}
                >
                  <summary
                    style={{
                      color: colors.green1,
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {faq.name}
                    <span style={{ fontSize: '1.5rem', color: colors.orange }}>+</span>
                  </summary>
                  <p
                    style={{
                      color: colors.green2,
                      lineHeight: '1.7',
                      marginTop: '15px',
                      paddingTop: '15px',
                      borderTop: `1px solid ${colors.cream}`,
                    }}
                  >
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Relationship Stage Guide */}
        <section
          style={{
            backgroundColor: colors.green2,
            padding: '60px 20px',
            color: colors.cream,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span
                style={{
                  color: colors.yellow,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Personalized Picks
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>
                Date Ideas by Relationship Stage
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
              }}
            >
              {/* First Date */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '30px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '20px', fontSize: '1.3rem' }}>
                  First Date
                </h3>
                <p style={{ opacity: 0.9, marginBottom: '20px', lineHeight: '1.7' }}>
                  Keep it casual and conversation-friendly. You want to be able to talk easily and
                  leave gracefully if needed.
                </p>
                <ul style={{ opacity: 0.85, lineHeight: '1.8' }}>
                  <li>Coffee at Colectivo Lakefront</li>
                  <li>Walk through Public Market</li>
                  <li>Drinks at a Third Ward bar</li>
                  <li>Riverwalk stroll + ice cream</li>
                </ul>
              </div>

              {/* New Relationship */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '30px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '20px', fontSize: '1.3rem' }}>
                  New Relationship (1-6 months)
                </h3>
                <p style={{ opacity: 0.9, marginBottom: '20px', lineHeight: '1.7' }}>
                  Time to get more adventurous and learn about each other through shared experiences.
                </p>
                <ul style={{ opacity: 0.85, lineHeight: '1.8' }}>
                  <li>Kayaking the Milwaukee River</li>
                  <li>Brewery tour crawl</li>
                  <li>Cooking class together</li>
                  <li>Explore a new neighborhood</li>
                </ul>
              </div>

              {/* Established */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '30px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '20px', fontSize: '1.3rem' }}>
                  Established (6+ months)
                </h3>
                <p style={{ opacity: 0.9, marginBottom: '20px', lineHeight: '1.7' }}>
                  Mix comfortable favorites with new adventures to keep things fresh.
                </p>
                <ul style={{ opacity: 0.85, lineHeight: '1.8' }}>
                  <li>Fine dining at Sanford</li>
                  <li>Day trip to Door County</li>
                  <li>Murder mystery dinner</li>
                  <li>Festival hopping in summer</li>
                </ul>
              </div>

              {/* Long-term */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '30px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '20px', fontSize: '1.3rem' }}>
                  Long-Term/Married
                </h3>
                <p style={{ opacity: 0.9, marginBottom: '20px', lineHeight: '1.7' }}>
                  Prioritize quality time and new experiences to break from routine.
                </p>
                <ul style={{ opacity: 0.85, lineHeight: '1.8' }}>
                  <li>Monthly date night tradition</li>
                  <li>Staycation at a boutique hotel</li>
                  <li>Take a class together</li>
                  <li>Recreate your first date</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Related Content */}
        <section
          style={{
            backgroundColor: colors.cream,
            padding: '60px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: colors.green1, fontSize: '2rem', marginBottom: '20px' }}>
              Explore More Milwaukee Guides
            </h2>
            <p style={{ color: colors.green2, marginBottom: '40px', fontSize: '1.1rem' }}>
              Planning the perfect date requires knowing the best spots in the city. Check out our
              other comprehensive guides.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Link
                href="/best-restaurants-milwaukee"
                style={{
                  backgroundColor: colors.green1,
                  color: colors.cream,
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                }}
              >
                Best Restaurants
              </Link>
              <Link
                href="/milwaukee-coffee-shops"
                style={{
                  backgroundColor: colors.green2,
                  color: colors.cream,
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                }}
              >
                Coffee Shop Guide
              </Link>
              <Link
                href="/things-to-do-milwaukee"
                style={{
                  backgroundColor: colors.orange,
                  color: colors.green1,
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                }}
              >
                Things To Do
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: colors.green1,
            color: colors.cream,
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
            Last updated: March 2024 | Discover Milwaukee
          </p>
          <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '10px' }}>
            Have a date idea we missed? We'd love to hear from you.
          </p>
        </footer>
      </main>

      <style jsx>{`
        details[open] summary span {
          transform: rotate(45deg);
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </>
  );
}
