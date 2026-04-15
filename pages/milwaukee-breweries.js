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

// Brewery data
const iconicBreweries = [
  {
    name: 'Lakefront Brewery',
    neighborhood: 'Beerline B',
    beerStyle: 'German-style lagers and creative ales',
    mustTry: 'Riverwest Stein Amber Lager',
    vibe: 'Iconic Milwaukee experience with entertaining tours, polka music, and fish fry Fridays along the Milwaukee River',
  },
  {
    name: 'Milwaukee Brewing Company',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Bold American ales and experimental brews',
    mustTry: 'Louie\'s Demise Amber Ale',
    vibe: 'Historic former railway building with exposed brick, spacious taproom, and rotating food trucks',
  },
  {
    name: 'Sprecher Brewing Company',
    neighborhood: 'Glendale',
    beerStyle: 'Bavarian-inspired craft beers and legendary root beer',
    mustTry: 'Black Bavarian Schwarzbier',
    vibe: 'Family-friendly brewery famous for craft sodas, European-style beers, and engaging tours',
  },
];

const craftBreweries = [
  {
    name: 'MobCraft Beer',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Crowdsourced creative and wild ales',
    mustTry: 'Batshit Crazy Coffee Brown Ale',
    vibe: 'Eclectic taproom where fans vote on what gets brewed next—expect the unexpected',
  },
  {
    name: 'Enlightened Brewing Company',
    neighborhood: 'Bay View',
    beerStyle: 'Belgian-inspired and hop-forward ales',
    mustTry: 'Cream City Brix IPA',
    vibe: 'Cozy neighborhood taproom in a converted warehouse with rotating art installations',
  },
  {
    name: 'Good City Brewing',
    neighborhood: 'East Side / Downtown',
    beerStyle: 'West Coast-style IPAs and clean lagers',
    mustTry: 'Good City Pils',
    vibe: 'Modern industrial chic with multiple locations including a downtown taproom near Fiserv Forum',
  },
  {
    name: 'Third Space Brewing',
    neighborhood: 'Menomonee Valley',
    beerStyle: 'Balanced American ales and lagers',
    mustTry: 'Happy Place Midwest Pale Ale',
    vibe: 'Spacious family-friendly brewery with games, food trucks, and a welcoming community atmosphere',
  },
  {
    name: 'Urban Harvest Brewing',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Sessionable ales and locally-sourced ingredients',
    mustTry: 'Urban Harvest Cream Ale',
    vibe: 'Intimate nano-brewery focused on sustainability and neighborhood connections',
  },
  {
    name: 'Indeed Brewing Company',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Creative ales and seasonal specialties',
    mustTry: 'Day Tripper Pale Ale',
    vibe: 'Minnesota transplant with a vibrant taproom, murals, and strong community programming',
  },
  {
    name: 'Gathering Place Brewing Company',
    neighborhood: 'Riverwest',
    beerStyle: 'Hop-driven ales and experimental small batches',
    mustTry: 'Hop Yard IPA',
    vibe: 'Community-focused brewery hosting events, live music, and neighborhood gatherings',
  },
  {
    name: '1840 Brewing Company',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Barrel-aged sours and mixed fermentation',
    mustTry: 'Their rotating barrel-aged sour series',
    vibe: 'Intimate speakeasy-style taproom for serious sour beer enthusiasts',
  },
  {
    name: 'Component Brewing Company',
    neighborhood: 'Bay View',
    beerStyle: 'Small-batch experimental ales',
    mustTry: 'Rotating seasonal series',
    vibe: 'Tiny nano-brewery with a neighborhood feel and constantly changing tap list',
  },
  {
    name: 'Broken Bat Brewing Company',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Baseball-themed American ales',
    mustTry: 'Corkball Cream Ale',
    vibe: 'Baseball memorabilia-filled taproom perfect for sports fans and beer lovers alike',
  },
  {
    name: 'Black Husky Brewing',
    neighborhood: 'Riverwest',
    beerStyle: 'Bold hop-forward ales and stouts',
    mustTry: 'Sproose Double IPA',
    vibe: 'Dog-friendly taproom with a cozy cabin feel, strong IPAs, and a passionate local following',
  },
  {
    name: 'Westallion Brewing Company',
    neighborhood: 'West Allis',
    beerStyle: 'Traditional lagers and American ales',
    mustTry: 'Westallion Lager',
    vibe: 'Neighborhood brewery celebrating West Allis heritage with approachable, well-crafted beers',
  },
  {
    name: 'Raised Grain Brewing Company',
    neighborhood: 'Waukesha',
    beerStyle: 'IPAs and barrel-aged specialties',
    mustTry: 'Paradocs Double IPA',
    vibe: 'Award-winning suburban brewery known for hop-forward ales and extensive barrel program',
  },
  {
    name: 'Company Brewing',
    neighborhood: 'Riverwest',
    beerStyle: 'Creative American ales and lagers',
    mustTry: 'Company Lager',
    vibe: 'Restaurant-brewery hybrid with excellent food menu, live music, and a neighborhood bar atmosphere',
  },
  {
    name: 'Eagle Park Brewing Company',
    neighborhood: 'Muskego / Downtown',
    beerStyle: 'Hazy IPAs and fruited sours',
    mustTry: 'Loop Station Hazy IPA',
    vibe: 'Trendy brewery with multiple locations, Instagram-worthy hazy IPAs, and a loyal following',
  },
  {
    name: 'Vennture Brew Co.',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Coffee-infused beers and creative collaborations',
    mustTry: 'Neon Basement Coffee Blonde',
    vibe: 'Coffee roaster turned brewery specializing in unique coffee-beer hybrids and collaborations',
  },
  {
    name: 'Biloba Brewing',
    neighborhood: 'Brookfield',
    beerStyle: 'Belgian-style ales and farmhouse beers',
    mustTry: 'Belgian Golden Strong',
    vibe: 'Cozy Belgian-focused brewery with exceptional farmhouse ales and a relaxed suburban setting',
  },
  {
    name: 'Big Head Brewing Company',
    neighborhood: 'Wauwatosa',
    beerStyle: 'American ales and lagers',
    mustTry: 'Big Head IPA',
    vibe: 'Tosa Village brewery with a welcoming taproom, diverse beer selection, and local character',
  },
  {
    name: 'Stock House Brewing Co.',
    neighborhood: 'Downtown',
    beerStyle: 'German-style lagers and ales',
    mustTry: 'Stock House Pilsner',
    vibe: 'Downtown microbrewery in the Historic Third Ward with a focus on traditional German styles',
  },
  {
    name: 'Dead Bird Brewing Company',
    neighborhood: 'Walker\'s Point',
    beerStyle: 'Farmhouse ales and wild fermentation',
    mustTry: 'Seasonal farmhouse releases',
    vibe: 'Small-batch brewery specializing in Belgian and farmhouse styles with natural fermentation',
  },
  {
    name: 'Explorium Brewpub',
    neighborhood: 'Greendale / Southridge',
    beerStyle: 'Diverse American craft styles',
    mustTry: 'Explorium IPA',
    vibe: 'Family-friendly brewpub with a full restaurant, diverse tap list, and welcoming atmosphere',
  },
  {
    name: 'Inventors Brewpub',
    neighborhood: 'Port Washington',
    beerStyle: 'American craft ales',
    mustTry: 'Rotating seasonal ales',
    vibe: 'Port Washington gem with creative beers, excellent food, and Lake Michigan proximity',
  },
  {
    name: 'Titletown Brewing Company',
    neighborhood: 'Downtown',
    beerStyle: 'American ales and lagers',
    mustTry: '400 Honey Ale',
    vibe: 'Historic downtown brewpub in a renovated train depot with riverside dining',
  },
  {
    name: 'Fermentorium Brewery & Tasting Room',
    neighborhood: 'Cedarburg',
    beerStyle: 'Belgian-inspired and barrel-aged',
    mustTry: 'Belgian Tripel',
    vibe: 'Charming Cedarburg brewery known for Belgian styles, a cozy tasting room, and specialty releases',
  },
  {
    name: 'Delafield Brewhaus',
    neighborhood: 'Delafield',
    beerStyle: 'German lagers and American ales',
    mustTry: 'Delafield Amber',
    vibe: 'Lake Country brewpub with a full restaurant, scenic setting, and decades of brewing history',
  },
  {
    name: 'Water Street Brewery',
    neighborhood: 'Downtown / Multiple',
    beerStyle: 'Traditional American styles',
    mustTry: 'Honey Lager',
    vibe: 'Milwaukee\'s original brewpub chain with multiple locations and a wide variety of house beers',
  },
  {
    name: 'Milwaukee Ale House',
    neighborhood: 'Third Ward',
    beerStyle: 'American ales and seasonal brews',
    mustTry: 'Louie\'s Demise Amber',
    vibe: 'Riverwalk brewpub with a prime patio, extensive menu, and beers from Milwaukee Brewing Co.',
  },
  {
    name: 'Rock Bottom Restaurant & Brewery',
    neighborhood: 'Downtown',
    beerStyle: 'American craft styles',
    mustTry: 'White Ale',
    vibe: 'Downtown brewpub near Fiserv Forum with a full menu and rotating seasonal beers',
  },
];

const breweryTours = [
  {
    name: 'Lakefront Brewery Tour',
    description: 'Milwaukee\'s most entertaining brewery tour featuring unlimited samples, comedy, and polka',
    price: '$15-20',
    duration: '45 minutes',
  },
  {
    name: 'Sprecher Brewery Tour',
    description: 'Family-friendly tour showcasing Bavarian brewing traditions and craft soda production',
    price: '$10-15',
    duration: '1 hour',
  },
  {
    name: 'Milwaukee Brewing Company Tour',
    description: 'Behind-the-scenes look at craft brewing in a historic Walker\'s Point building',
    price: '$12-15',
    duration: '45 minutes',
  },
  {
    name: 'Brewery Walking Tours',
    description: 'Guided neighborhood brewery crawls through Walker\'s Point or Bay View',
    price: '$45-65',
    duration: '3-4 hours',
  },
];

const breweryPatios = [
  {
    name: 'Lakefront Brewery',
    feature: 'Riverside deck with stunning views of the Milwaukee River and downtown skyline',
  },
  {
    name: 'Third Space Brewing',
    feature: 'Spacious outdoor area with yard games, fire pits, and food truck parking',
  },
  {
    name: 'Good City Brewing (East Side)',
    feature: 'Rooftop patio with city views and a lively summer atmosphere',
  },
  {
    name: 'Indeed Brewing Company',
    feature: 'Colorful patio with murals, string lights, and a dog-friendly vibe',
  },
  {
    name: 'Gathering Place Brewing',
    feature: 'Intimate courtyard perfect for neighborhood hangs and live music',
  },
];

const beerGardens = [
  {
    name: 'Estabrook Park Beer Garden',
    description: 'Milwaukee\'s first park-based beer garden with German imports and local craft beers',
  },
  {
    name: 'South Shore Terrace Beer Garden',
    description: 'Lakefront views at South Shore Park with a family-friendly atmosphere',
  },
  {
    name: 'The Landing at Hoyt Park',
    description: 'Scenic beer garden in Wauwatosa\'s beautiful Hoyt Park',
  },
  {
    name: 'Hubbard Park Beer Garden',
    description: 'Historic lodge setting along the Milwaukee River in Shorewood',
  },
];

const faqs = [
  {
    question: 'Why is Milwaukee called the beer capital?',
    answer: 'Milwaukee earned its title as America\'s beer capital in the 19th century when German immigrants established major breweries including Schlitz, Pabst, Miller, and Blatz. At its peak, Milwaukee had more than 80 breweries. Today, the craft beer renaissance continues this proud tradition with over 30 local breweries.',
  },
  {
    question: 'What is the best brewery tour in Milwaukee?',
    answer: 'Lakefront Brewery offers Milwaukee\'s most entertaining tour, featuring unlimited beer samples, comedy, and even polka music. Tours run Friday evenings and throughout the weekend. Sprecher Brewery is ideal for families thanks to their famous craft sodas alongside beer.',
  },
  {
    question: 'Which Milwaukee neighborhood has the most breweries?',
    answer: 'Walker\'s Point has the highest concentration of breweries including MobCraft, Indeed, Milwaukee Brewing Company, 1840, Urban Harvest, and Broken Bat—all within walking distance of each other, making it perfect for a self-guided brewery crawl.',
  },
  {
    question: 'Are Milwaukee breweries family-friendly?',
    answer: 'Many Milwaukee breweries welcome families, especially during daytime hours. Third Space Brewing, Sprecher, and Good City Brewing are particularly kid-friendly with games, non-alcoholic options, and spacious layouts. Most breweries allow minors accompanied by adults until evening.',
  },
  {
    question: 'When is the best time to visit Milwaukee breweries?',
    answer: 'Summer offers the best patio and beer garden experiences, while fall brings Oktoberfest celebrations and seasonal brews. Winter features cozy taprooms and holiday releases. Weekend afternoons are ideal for tours, while weekday evenings offer a more relaxed local atmosphere.',
  },
  {
    question: 'What is the Milwaukee beer style?',
    answer: 'Milwaukee\'s brewing heritage centers on German-style lagers—crisp pilsners, amber lagers, and dark Schwarzbiers. Today\'s craft scene embraces everything from hazy IPAs and barrel-aged sours to cream ales and Belgian-inspired brews, while honoring traditional lager craftsmanship.',
  },
];

// Schema.org structured data
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Ultimate Guide to Milwaukee Breweries: Historic Brewing Capital to Modern Craft Scene',
  description: 'Discover Milwaukee\'s best breweries from iconic Lakefront Brewery to cutting-edge craft producers. Explore brewery tours, beer gardens, and the craft beer scene in America\'s historic brewing capital.',
  author: {
    '@type': 'Organization',
    name: 'Discover Milwaukee',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Discover Milwaukee',
  },
  datePublished: '2024-01-15',
  dateModified: '2024-01-15',
  image: 'https://discovermilwaukee.com/images/milwaukee-breweries-guide.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://discovermilwaukee.com/milwaukee-breweries',
  },
};

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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Milwaukee Breweries',
  description: 'Complete list of breweries in Milwaukee, Wisconsin',
  numberOfItems: iconicBreweries.length + craftBreweries.length,
  itemListElement: [...iconicBreweries, ...craftBreweries].map((brewery, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Brewery',
      name: brewery.name,
      description: brewery.vibe,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        addressCountry: 'US',
      },
    },
  })),
};

export default function MilwaukeeBreweries() {
  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>Milwaukee Breweries Guide 2024 | Best Craft Beer & Brewery Tours</title>
        <meta
          name="description"
          content="Explore 30+ Milwaukee breweries from historic Lakefront Brewery to innovative craft producers. Discover brewery tours, beer gardens, and why Milwaukee remains America's beer capital."
        />
        <meta
          name="keywords"
          content="milwaukee breweries, craft beer milwaukee, brewery tour milwaukee, milwaukee beer, lakefront brewery, milwaukee brewing company, best breweries milwaukee, milwaukee craft breweries, beer gardens milwaukee, walker's point breweries"
        />
        <link rel="canonical" href="https://discovermilwaukee.com/milwaukee-breweries" />

        {/* Open Graph */}
        <meta property="og:title" content="Milwaukee Breweries Guide | Craft Beer & Brewery Tours" />
        <meta
          property="og:description"
          content="Your complete guide to Milwaukee's brewery scene. From iconic Lakefront Brewery to cutting-edge craft producers, discover the best beer in America's brewing capital."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discovermilwaukee.com/milwaukee-breweries" />
        <meta property="og:image" content="https://discovermilwaukee.com/images/milwaukee-breweries-guide.jpg" />
        <meta property="og:site_name" content="Discover Milwaukee" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Milwaukee Breweries Guide | Best Craft Beer" />
        <meta
          name="twitter:description"
          content="Explore Milwaukee's best breweries, tours, and beer gardens in America's historic brewing capital."
        />
        <meta name="twitter:image" content="https://discovermilwaukee.com/images/milwaukee-breweries-guide.jpg" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              America's Beer Capital
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                marginTop: '24px',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              Milwaukee Breweries Guide
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                opacity: '0.9',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              From the German immigrants who built Schlitz, Pabst, and Miller to today's innovative craft
              brewers, Milwaukee's brewing heritage runs deep. Explore 30+ breweries in America's original
              beer city.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <nav
          style={{
            backgroundColor: colors.green2,
            padding: '20px',
            position: 'sticky',
            top: '0',
            zIndex: '100',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '15px',
            }}
          >
            {['Iconic Breweries', 'Craft Breweries', 'Tours', 'Patios', 'Beer Gardens', 'FAQs'].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  style={{
                    color: colors.cream,
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'background-color 0.3s',
                  }}
                >
                  {link}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Introduction */}
        <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: colors.green1 }}>
            Milwaukee isn't just a city with breweries—it's a city <em>built</em> by breweries. In the
            late 1800s, German immigrants transformed this lakeside city into America's undisputed beer
            capital. Names like <strong>Schlitz</strong>, <strong>Pabst</strong>, <strong>Miller</strong>,
            and <strong>Blatz</strong> didn't just brew beer; they shaped Milwaukee's skyline, culture,
            and identity.
          </p>
          <p
            style={{ fontSize: '1.2rem', lineHeight: '1.8', color: colors.green1, marginTop: '20px' }}
          >
            Today, Milwaukee's craft beer renaissance honors that legacy while pushing boundaries. From
            the polka-filled tours at <strong>Lakefront Brewery</strong> to barrel-aged sours at{' '}
            <strong>1840 Brewing</strong>, there's a brewery for every palate. Whether you're planning a{' '}
            <Link href="/walkers-point-milwaukee" style={{ color: colors.orange, fontWeight: '600' }}>
              Walker's Point brewery crawl
            </Link>{' '}
            or seeking the perfect{' '}
            <Link href="/best-patios-milwaukee" style={{ color: colors.orange, fontWeight: '600' }}>
              brewery patio
            </Link>
            , this guide has you covered.
          </p>
        </section>

        {/* Iconic Breweries Section */}
        <section
          id="iconic-breweries"
          style={{ backgroundColor: colors.beige, padding: '80px 20px' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  color: colors.green1,
                  marginBottom: '15px',
                  fontWeight: '700',
                }}
              >
                Iconic & Historic Breweries
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                These Milwaukee institutions carry on the city's legendary brewing tradition
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
              }}
            >
              {iconicBreweries.map((brewery) => (
                <article
                  key={brewery.name}
                  style={{
                    backgroundColor: colors.cream,
                    borderRadius: '16px',
                    padding: '35px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    borderLeft: `5px solid ${colors.yellow}`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      display: 'inline-block',
                      marginBottom: '15px',
                    }}
                  >
                    ICONIC
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: colors.green1, marginBottom: '8px' }}>
                    {brewery.name}
                  </h3>
                  <p
                    style={{
                      color: colors.orange,
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      marginBottom: '15px',
                    }}
                  >
                    {brewery.neighborhood}
                  </p>
                  <p style={{ color: colors.green2, lineHeight: '1.7', marginBottom: '20px' }}>
                    {brewery.vibe}
                  </p>
                  <div
                    style={{
                      backgroundColor: colors.beige,
                      padding: '15px',
                      borderRadius: '10px',
                    }}
                  >
                    <p style={{ fontSize: '0.9rem', color: colors.green2, marginBottom: '8px' }}>
                      <strong>Known for:</strong> {brewery.beerStyle}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: colors.green2 }}>
                      <strong>Must try:</strong>{' '}
                      <span style={{ color: colors.orange, fontWeight: '600' }}>{brewery.mustTry}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Craft Breweries Section */}
        <section id="craft-breweries" style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  color: colors.green1,
                  marginBottom: '15px',
                  fontWeight: '700',
                }}
              >
                Milwaukee Craft Breweries
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
                The new generation pushing Milwaukee's brewing boundaries with innovation and creativity
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '25px',
              }}
            >
              {craftBreweries.map((brewery) => (
                <article
                  key={brewery.name}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                    border: `1px solid ${colors.beige}`,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                >
                  <h3 style={{ fontSize: '1.35rem', color: colors.green1, marginBottom: '6px' }}>
                    {brewery.name}
                  </h3>
                  <p
                    style={{
                      color: colors.orange,
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      marginBottom: '12px',
                    }}
                  >
                    {brewery.neighborhood}
                  </p>
                  <p
                    style={{
                      color: colors.green2,
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      marginBottom: '18px',
                    }}
                  >
                    {brewery.vibe}
                  </p>
                  <div
                    style={{
                      borderTop: `1px solid ${colors.beige}`,
                      paddingTop: '15px',
                    }}
                  >
                    <p style={{ fontSize: '0.85rem', color: colors.green2, marginBottom: '6px' }}>
                      <strong>Style:</strong> {brewery.beerStyle}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: colors.green1 }}>
                      <strong>Try:</strong> {brewery.mustTry}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brewery Tours Section */}
        <section
          id="tours"
          style={{ backgroundColor: colors.green1, color: colors.cream, padding: '80px 20px' }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: '700' }}>
                Milwaukee Brewery Tours
              </h2>
              <p style={{ opacity: '0.9', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                Go behind the scenes and learn the craft from Milwaukee's master brewers
              </p>
            </div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {breweryTours.map((tour) => (
                <div
                  key={tour.name}
                  style={{
                    backgroundColor: colors.green2,
                    borderRadius: '12px',
                    padding: '30px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '20px',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{tour.name}</h3>
                    <p style={{ opacity: '0.9', lineHeight: '1.6' }}>{tour.description}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: colors.yellow, fontSize: '1.3rem', fontWeight: '700' }}>
                      {tour.price}
                    </p>
                    <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>{tour.duration}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '40px', opacity: '0.9' }}>
              Pro tip: Book Lakefront Brewery's Friday night tour for fish fry and live polka!
            </p>
          </div>
        </section>

        {/* Best Brewery Patios */}
        <section id="patios" style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  color: colors.green1,
                  marginBottom: '15px',
                  fontWeight: '700',
                }}
              >
                Best Brewery Patios
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.1rem' }}>
                Sip your craft beer in the fresh Milwaukee air. See our complete{' '}
                <Link href="/best-patios-milwaukee" style={{ color: colors.orange, fontWeight: '600' }}>
                  Milwaukee patio guide
                </Link>{' '}
                for more outdoor drinking spots.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {breweryPatios.map((patio, index) => (
                <div
                  key={patio.name}
                  style={{
                    backgroundColor: colors.beige,
                    borderRadius: '12px',
                    padding: '25px',
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: colors.orange,
                      color: '#fff',
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      flexShrink: '0',
                    }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 style={{ color: colors.green1, fontSize: '1.15rem', marginBottom: '8px' }}>
                      {patio.name}
                    </h3>
                    <p style={{ color: colors.green2, fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {patio.feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beer Gardens */}
        <section
          id="beer-gardens"
          style={{ backgroundColor: colors.beige, padding: '80px 20px' }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  color: colors.green1,
                  marginBottom: '15px',
                  fontWeight: '700',
                }}
              >
                Milwaukee Beer Gardens
              </h2>
              <p style={{ color: colors.green2, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                Honoring the German tradition with outdoor drinking in Milwaukee's beautiful parks
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              {beerGardens.map((garden) => (
                <div
                  key={garden.name}
                  style={{
                    backgroundColor: colors.cream,
                    borderRadius: '12px',
                    padding: '30px',
                    borderTop: `4px solid ${colors.green2}`,
                  }}
                >
                  <h3 style={{ color: colors.green1, fontSize: '1.25rem', marginBottom: '12px' }}>
                    {garden.name}
                  </h3>
                  <p style={{ color: colors.green2, lineHeight: '1.6' }}>{garden.description}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: colors.green2,
                color: colors.cream,
                borderRadius: '12px',
                padding: '30px',
                marginTop: '40px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                <strong>Pro tip:</strong> Milwaukee's beer gardens typically operate from May through
                October. Check individual hours as they vary by weather and season. Most allow you to
                bring your own food!
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhood Brewery Guide */}
        <section style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2rem',
                color: colors.green1,
                marginBottom: '30px',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              Breweries by Neighborhood
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '25px',
                  borderRadius: '12px',
                  border: `2px solid ${colors.orange}`,
                }}
              >
                <h3 style={{ color: colors.orange, marginBottom: '12px' }}>Walker's Point</h3>
                <p style={{ color: colors.green2, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  MobCraft, Indeed, Milwaukee Brewing Co., 1840, Urban Harvest, Broken Bat
                </p>
                <Link
                  href="/walkers-point-milwaukee"
                  style={{
                    color: colors.orange,
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    marginTop: '10px',
                    display: 'inline-block',
                  }}
                >
                  Explore Walker's Point →
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '25px',
                  borderRadius: '12px',
                  border: `1px solid ${colors.beige}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginBottom: '12px' }}>Bay View</h3>
                <p style={{ color: colors.green2, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Enlightened Brewing, Component Brewing
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '25px',
                  borderRadius: '12px',
                  border: `1px solid ${colors.beige}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginBottom: '12px' }}>East Side / Downtown</h3>
                <p style={{ color: colors.green2, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Good City Brewing (multiple locations)
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '25px',
                  borderRadius: '12px',
                  border: `1px solid ${colors.beige}`,
                }}
              >
                <h3 style={{ color: colors.green1, marginBottom: '12px' }}>Riverwest</h3>
                <p style={{ color: colors.green2, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Gathering Place Brewing Company
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" style={{ backgroundColor: colors.green2, padding: '80px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.cream,
                marginBottom: '40px',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              Milwaukee Breweries FAQ
            </h2>

            <div style={{ display: 'grid', gap: '20px' }}>
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  style={{
                    backgroundColor: colors.cream,
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <summary
                    style={{
                      padding: '25px',
                      cursor: 'pointer',
                      fontSize: '1.15rem',
                      fontWeight: '600',
                      color: colors.green1,
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {faq.question}
                    <span style={{ color: colors.orange, fontSize: '1.5rem' }}>+</span>
                  </summary>
                  <div style={{ padding: '0 25px 25px 25px' }}>
                    <p style={{ color: colors.green2, lineHeight: '1.7' }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2rem',
                color: colors.green1,
                marginBottom: '20px',
                fontWeight: '700',
              }}
            >
              Plan Your Milwaukee Brewery Adventure
            </h2>
            <p style={{ color: colors.green2, fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
              Ready to explore more of Milwaukee? Check out our guides to the city's best neighborhoods,
              patios, and activities.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '15px',
              }}
            >
              <Link
                href="/things-to-do-milwaukee"
                style={{
                  backgroundColor: colors.green1,
                  color: colors.cream,
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'background-color 0.3s',
                }}
              >
                Things to Do in Milwaukee
              </Link>
              <Link
                href="/best-patios-milwaukee"
                style={{
                  backgroundColor: colors.orange,
                  color: '#fff',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'background-color 0.3s',
                }}
              >
                Best Milwaukee Patios
              </Link>
              <Link
                href="/walkers-point-milwaukee"
                style={{
                  backgroundColor: colors.green2,
                  color: colors.cream,
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'background-color 0.3s',
                }}
              >
                Walker's Point Guide
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
          <p style={{ opacity: '0.8', marginBottom: '15px' }}>
            Discover Milwaukee | Your Guide to America's Beer Capital
          </p>
          <p style={{ opacity: '0.6', fontSize: '0.9rem' }}>
            Please drink responsibly. Support local breweries.
          </p>
        </footer>
      </main>
    </>
  );
}
