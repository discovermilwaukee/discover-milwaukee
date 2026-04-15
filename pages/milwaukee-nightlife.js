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

// FAQ data for schema and rendering
const faqs = [
  {
    question: 'What time do bars close in Milwaukee?',
    answer: 'Most Milwaukee bars close at 2:00 AM on weekdays and 2:30 AM on weekends. Some after-hours spots and private clubs may stay open later with proper licensing.',
  },
  {
    question: 'What is the best neighborhood for bar hopping in Milwaukee?',
    answer: 'Walker\'s Point, Brady Street, and Bay View are the top three neighborhoods for bar hopping in Milwaukee. Walker\'s Point offers the most diverse mix with LGBTQ+ bars, cocktail lounges, and dive bars within walking distance. Brady Street is perfect for a classic pub crawl atmosphere, while Bay View attracts a hip, artistic crowd.',
  },
  {
    question: 'What are the best cocktail bars in Milwaukee?',
    answer: 'Bryant\'s Cocktail Lounge is Milwaukee\'s oldest cocktail bar and a must-visit institution. At Random serves tiki-inspired cocktails in a retro ice cream parlor setting. The Outsider at Kimpton Journeyman Hotel offers craft cocktails with stunning views. Lost Whale on Brady Street and Blu at The Pfister Hotel round out the top five.',
  },
  {
    question: 'Where can I see live music in Milwaukee?',
    answer: 'The Rave/Eagles Club hosts major touring acts across multiple stages. Turner Hall Ballroom and The Pabst Theater offer intimate concert experiences with excellent acoustics. For indie and local music, check out Shank Hall and Cactus Club in Bay View.',
  },
  {
    question: 'Is Milwaukee\'s Walker\'s Point neighborhood safe at night?',
    answer: 'Walker\'s Point is generally safe and is Milwaukee\'s most vibrant nightlife district. The area is well-lit with heavy foot traffic, especially on weekends. As with any urban area, stay aware of your surroundings and stick to main streets.',
  },
  {
    question: 'What makes Milwaukee\'s bar scene unique?',
    answer: 'Milwaukee has more bars per capita than almost any other U.S. city, thanks to its German brewing heritage. The city is famous for its authentic dive bars, historic taverns dating back over 100 years, and innovative craft cocktail scene. Wisconsin\'s relaxed liquor laws and the famous "Milwaukee hospitality" create an unpretentious, welcoming atmosphere.',
  },
];

// Venue data
const cocktailBars = [
  {
    name: "Bryant's Cocktail Lounge",
    address: '1579 S 9th St, Milwaukee, WI 53204',
    description: 'Milwaukee\'s oldest cocktail bar, opened in 1938. No menu here—just tell the bartender your mood and they\'ll craft something perfect. Dimly lit with vintage charm and some of the most skilled bartenders in the Midwest.',
    vibe: 'Intimate, historic, sophisticated',
  },
  {
    name: 'At Random',
    address: '2501 S Delaware Ave, Milwaukee, WI 53207',
    description: 'A retro ice cream parlor turned tiki-inspired cocktail lounge. Famous for grasshoppers, pink squirrels, and creative frozen drinks. The swanky 1960s décor transports you to another era.',
    vibe: 'Retro, playful, Instagram-worthy',
  },
  {
    name: 'The Outsider',
    address: '310 E Chicago St, Milwaukee, WI 53202',
    description: 'Located in the Kimpton Journeyman Hotel, this rooftop bar offers panoramic views of downtown Milwaukee with meticulously crafted seasonal cocktails.',
    vibe: 'Upscale, scenic, trendy',
  },
  {
    name: 'Lost Whale',
    address: '2151 N Humboldt Ave, Milwaukee, WI 53212',
    description: 'A beloved neighborhood cocktail bar on Brady Street with creative drinks, friendly staff, and a cozy outdoor patio. Known for inventive seasonal menus.',
    vibe: 'Neighborhood gem, creative, welcoming',
  },
  {
    name: 'Blu at The Pfister',
    address: '424 E Wisconsin Ave, Milwaukee, WI 53202',
    description: 'Perched atop Milwaukee\'s historic Pfister Hotel, Blu offers stunning 23rd-floor views, elegant cocktails, and a sophisticated atmosphere perfect for special occasions.',
    vibe: 'Elegant, romantic, panoramic views',
  },
  {
    name: 'Goodkind',
    address: '2457 S Wentworth Ave, Milwaukee, WI 53207',
    description: 'Bay View\'s farm-to-table restaurant with a serious cocktail program. Seasonal, locally-sourced ingredients extend to their inventive drink menu with house-made syrups and bitters.',
    vibe: 'Farm-to-glass, refined, Bay View',
  },
  {
    name: 'The Rumpus Room',
    address: '1030 N Water St, Milwaukee, WI 53202',
    description: 'A quirky downtown speakeasy hidden behind an unmarked door. Craft cocktails in a whimsical setting with vintage games, unique décor, and surprise entertainment.',
    vibe: 'Speakeasy, whimsical, hidden gem',
  },
  {
    name: 'Dock18 Cocktail Lab',
    address: '318 S Water St, Milwaukee, WI 53204',
    description: 'Walker\'s Point cocktail laboratory using molecular mixology techniques. Expect smoking drinks, unusual presentations, and flavors you\'ve never experienced in a cocktail.',
    vibe: 'Experimental, innovative, theatrical',
  },
  {
    name: 'The Diplomat',
    address: '815 E Brady St, Milwaukee, WI 53202',
    description: 'Brady Street\'s upscale cocktail destination with craft drinks, small plates, and a sophisticated yet welcoming atmosphere. Great for date nights.',
    vibe: 'Upscale casual, date night, Brady Street',
  },
  {
    name: 'Foundation Tiki Bar',
    address: '2718 N Bremen St, Milwaukee, WI 53212',
    description: 'Riverwest\'s tropical escape with authentic tiki cocktails, island décor, and a devoted following. Potent rum drinks and pu-pu platters transport you to Polynesia.',
    vibe: 'Tiki, tropical, escapist',
  },
];

const diveBars = [
  {
    name: "Wolski's Tavern",
    address: '1836 N Pulaski St, Milwaukee, WI 53202',
    description: 'The iconic Brady Street dive bar famous for its "I Closed Wolski\'s" bumper stickers. A Milwaukee institution since 1908, serving cold beer and good times until the lights come on.',
    vibe: 'Legendary, unpretentious, local institution',
  },
  {
    name: 'Up & Under Pub',
    address: '1216 E Brady St, Milwaukee, WI 53202',
    description: 'A gritty, beloved dive bar with live blues and rock music most nights. Cheap drinks, sticky floors, and genuine Milwaukee character.',
    vibe: 'Live music, gritty, authentic',
  },
  {
    name: 'Comet Cafe',
    address: '1947 N Farwell Ave, Milwaukee, WI 53202',
    description: 'Part diner, part dive bar, all Milwaukee. Famous for vegan comfort food, stiff drinks, and a punk rock attitude. Late-night crowds love the bacon-wrapped everything.',
    vibe: 'Punk rock, comfort food, late-night',
  },
  {
    name: 'Burnhearts',
    address: '2599 S Logan Ave, Milwaukee, WI 53207',
    description: 'Bay View\'s beloved neighborhood tavern with a stellar beer selection, whiskey flights, and famous fish fry. Their Mitten Fest winter party is legendary.',
    vibe: 'Neighborhood classic, craft beer, Bay View',
  },
  {
    name: 'The Gig',
    address: '1132 E Wright St, Milwaukee, WI 53212',
    description: 'Riverwest dive with cheap drinks, pool tables, and a jukebox full of punk and metal. Cash only, no pretense, just good times with locals.',
    vibe: 'Cash only, punk rock, Riverwest',
  },
  {
    name: 'Tonic Tavern',
    address: '2335 S Kinnickinnic Ave, Milwaukee, WI 53207',
    description: 'Bay View corner bar with strong pours, friendly bartenders, and a mix of regulars and newcomers. Great jukebox and unpretentious vibe.',
    vibe: 'Corner bar, friendly, no frills',
  },
  {
    name: 'The Uptowner',
    address: '1032 E Center St, Milwaukee, WI 53212',
    description: 'Riverwest institution open since 1884. One of Milwaukee\'s oldest bars with cheap drinks, a pool table, and generations of neighborhood character.',
    vibe: 'Historic, cheap drinks, neighborhood',
  },
  {
    name: "Frank's Power Plant",
    address: '2800 S Kinnickinnic Ave, Milwaukee, WI 53207',
    description: 'Bay View dive bar with shuffleboard, darts, and some of the cheapest drinks on KK. A true locals\' spot with friendly regulars.',
    vibe: 'Cheap drinks, games, local hangout',
  },
  {
    name: 'Circle A',
    address: '932 E Chambers St, Milwaukee, WI 53212',
    description: 'Riverwest punk bar with anarchist vibes, vegan food, and live music. DIY spirit, activist community, and no corporate beer.',
    vibe: 'DIY, punk, vegan-friendly',
  },
  {
    name: 'Y-Not II',
    address: '324 E Wisconsin Ave, Milwaukee, WI 53202',
    description: 'Downtown dive that\'s been serving workers and night owls since 1970. Cash only, cheap beer, and zero pretension in the heart of the business district.',
    vibe: 'Downtown dive, cash only, old school',
  },
];

const liveMusic = [
  {
    name: 'The Rave / Eagles Club',
    address: '2401 W Wisconsin Ave, Milwaukee, WI 53233',
    description: 'Milwaukee\'s legendary multi-room concert venue housed in a historic 1926 building. Eight unique spaces host everything from metal to EDM to indie rock.',
    capacity: '4,000+',
  },
  {
    name: 'Turner Hall Ballroom',
    address: '1040 N Vel R. Phillips Ave, Milwaukee, WI 53203',
    description: 'Historic 1882 venue with stunning architecture and incredible acoustics. Hosts national touring acts in an intimate standing-room setting.',
    capacity: '1,000',
  },
  {
    name: 'Pabst Theater',
    address: '144 E Wells St, Milwaukee, WI 53202',
    description: 'A gorgeous 1895 theater perfect for concerts requiring seated audiences. Ornate interior, exceptional sound, and a truly special concert experience.',
    capacity: '1,339',
  },
  {
    name: 'Shank Hall',
    address: '1434 N Farwell Ave, Milwaukee, WI 53202',
    description: 'Intimate club showcasing local and touring indie, folk, and alternative acts. Great sightlines and a true music lover\'s venue since 1989.',
    capacity: '300',
  },
  {
    name: 'Cactus Club',
    address: '2496 S Wentworth Ave, Milwaukee, WI 53207',
    description: 'Bay View\'s beloved dive bar and music venue. Punk, metal, indie, and experimental acts play this cramped, sweaty, perfect room.',
    capacity: '150',
  },
  {
    name: 'Riverside Theater',
    address: '116 W Wisconsin Ave, Milwaukee, WI 53203',
    description: 'Art Deco masterpiece from 1928 hosting major touring acts in a beautiful seated venue. Perfect acoustics and stunning architecture.',
    capacity: '2,450',
  },
  {
    name: 'The Back Room @ Colectivo',
    address: '2211 N Prospect Ave, Milwaukee, WI 53202',
    description: 'Intimate venue inside the gorgeous Prospect Mall Colectivo location. Singer-songwriters, jazz, and acoustic acts in a listening room setting.',
    capacity: '175',
  },
  {
    name: 'X-Ray Arcade',
    address: '5036 S Packard Ave, Cudahy, WI 53110',
    description: 'All-ages venue with pinball machines and punk/metal shows. DIY spirit with national touring acts and local bands alike.',
    capacity: '200',
  },
  {
    name: 'Bremen Cafe',
    address: '901 E Clarke St, Milwaukee, WI 53212',
    description: 'Riverwest cafe and bar with live jazz, folk, and experimental music. Cozy listening room atmosphere with local and touring artists.',
    capacity: '100',
  },
  {
    name: 'Jazz Estate',
    address: '2423 N Murray Ave, Milwaukee, WI 53211',
    description: 'Milwaukee\'s premier jazz club since 1977. Intimate setting showcasing local and national jazz talent in East Side setting.',
    capacity: '80',
  },
  {
    name: 'Linneman\'s Riverwest Inn',
    address: '1001 E Locust St, Milwaukee, WI 53212',
    description: 'Neighborhood bar doubling as one of Milwaukee\'s best small music venues. Eclectic booking from folk to punk to experimental.',
    capacity: '100',
  },
  {
    name: 'Fiserv Forum',
    address: '1111 Vel R. Phillips Ave, Milwaukee, WI 53203',
    description: 'Milwaukee\'s state-of-the-art arena hosting the biggest touring acts alongside Bucks games. Major concert destination for arena shows.',
    capacity: '17,500',
  },
];

const danceClubs = [
  {
    name: 'Mad Planet',
    address: '533 E Center St, Milwaukee, WI 53212',
    description: 'Riverwest\'s beloved dance club hosting themed nights from \'80s new wave to disco to industrial. The weekend dance parties are legendary, with a devoted local crowd and visiting DJs.',
  },
  {
    name: 'Wherehouse / Site 1A',
    address: '818 S Water St, Milwaukee, WI 53204',
    description: 'Walker\'s Point warehouse venue hosting EDM nights, special events, and touring electronic acts. Raw industrial space with serious sound systems.',
  },
  {
    name: 'Decibel',
    address: '1905 E North Ave, Milwaukee, WI 53202',
    description: 'East Side club with resident and guest DJs spinning house, techno, and dance music. Great rooftop patio when weather permits.',
  },
  {
    name: 'The Mothership',
    address: '720 E Burleigh St, Milwaukee, WI 53212',
    description: 'Riverwest performance space and event venue hosting dance parties, live music, and community events. Eclectic programming and inclusive vibes.',
  },
  {
    name: 'Hotel Foster',
    address: '2028 E North Ave, Milwaukee, WI 53202',
    description: 'East Side bar with a dedicated dance floor and DJ nights. Mix of hip-hop, house, and eclectic programming throughout the week.',
  },
];

const sportsBars = [
  {
    name: "Major Goolsby's",
    address: '340 W Kilbourn Ave, Milwaukee, WI 53203',
    description: 'Milwaukee\'s legendary sports bar since 1972. Walking distance to Fiserv Forum, packed on game days with memorabilia covering every wall.',
    specialty: 'Classic Milwaukee sports bar',
  },
  {
    name: "Kelly's Bleachers",
    address: '5218 W Blue Mound Rd, Milwaukee, WI 53208',
    description: 'Brewers fans\' favorite bar near Miller Park. Bus shuttles to games and a party atmosphere that starts hours before first pitch.',
    specialty: 'Brewers HQ',
  },
  {
    name: 'Who\'s On Third',
    address: '1007 N Old World 3rd St, Milwaukee, WI 53203',
    description: 'Three-story sports bar in the heart of downtown. Rooftop patio, dozens of screens, and a prime location near Deer District.',
    specialty: 'Downtown sports destination',
  },
  {
    name: 'The Loaded Slate',
    address: '1137 N Old World 3rd St, Milwaukee, WI 53203',
    description: 'Craft beer-focused sports bar with elevated bar food and plenty of screens. Part of the Old World Third Street bar district.',
    specialty: 'Craft beer sports bar',
  },
  {
    name: "Jack's American Pub",
    address: '1323 E Brady St, Milwaukee, WI 53202',
    description: 'Brady Street sports bar with neighborhood charm. Great for watching games without the downtown crowds, plus solid pub food.',
    specialty: 'Neighborhood sports pub',
  },
];

const barCrawls = [
  {
    neighborhood: 'Brady Street',
    description: 'Milwaukee\'s bohemian heart with a perfect mix of dive bars, cocktail lounges, and late-night eats all within a walkable stretch.',
    stops: ['Lost Whale', "Wolski's Tavern", 'Up & Under Pub', 'Nomad World Pub', 'Hi-Hat Lounge'],
    vibe: 'Eclectic, walkable, energetic',
  },
  {
    neighborhood: "Walker's Point",
    description: 'The epicenter of Milwaukee nightlife with LGBTQ+ venues, craft cocktail bars, and dance clubs concentrated in a vibrant district.',
    stops: ["Bryant's Cocktail Lounge", 'La Cage', 'Kruz', 'D.I.X.', 'Tin Widow Harley-Davidson'],
    vibe: 'Diverse, inclusive, vibrant',
    link: '/walkers-point-milwaukee',
  },
  {
    neighborhood: 'Bay View',
    description: 'The artsy South Side neighborhood where locals drink. Quirky taverns, great patios, and a laid-back vibe.',
    stops: ['At Random', 'Cactus Club', 'Sugar Maple', 'Burnhearts', 'Palomino'],
    vibe: 'Artsy, local, laid-back',
  },
];

// Schema.org JSON-LD
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Milwaukee Nightlife Guide 2024: Best Bars, Clubs & Live Music',
  description: 'Comprehensive guide to Milwaukee nightlife including the best cocktail bars, dive bars, dance clubs, LGBTQ+ venues, and live music spots.',
  image: 'https://discovermilwaukee.com/images/milwaukee-nightlife-hero.jpg',
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
  dateModified: '2024-01-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://discovermilwaukee.com/milwaukee-nightlife',
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

export default function MilwaukeeNightlife() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Milwaukee Nightlife Guide 2024 | Best Bars, Clubs & Live Music</title>
        <meta
          name="title"
          content="Milwaukee Nightlife Guide 2024 | Best Bars, Clubs & Live Music"
        />
        <meta
          name="description"
          content="Discover Milwaukee's legendary bar scene with our complete nightlife guide. From historic cocktail lounges like Bryant's to dive bars, LGBTQ+ venues in Walker's Point, and live music at The Rave. Find the best bars in Milwaukee."
        />
        <meta
          name="keywords"
          content="milwaukee nightlife, milwaukee bars, best bars milwaukee, milwaukee cocktail bars, milwaukee dive bars, walker's point bars, milwaukee live music, milwaukee clubs, milwaukee LGBTQ bars, brady street bars, bay view bars"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Discover Milwaukee" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discovermilwaukee.com/milwaukee-nightlife" />
        <meta
          property="og:title"
          content="Milwaukee Nightlife Guide 2024 | Best Bars, Clubs & Live Music"
        />
        <meta
          property="og:description"
          content="Explore Milwaukee's legendary bar scene. From craft cocktails at Bryant's to dive bars, LGBTQ+ venues, and live music - your complete guide to going out in Milwaukee."
        />
        <meta
          property="og:image"
          content="https://discovermilwaukee.com/images/milwaukee-nightlife-hero.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://discovermilwaukee.com/milwaukee-nightlife" />
        <meta
          property="twitter:title"
          content="Milwaukee Nightlife Guide 2024 | Best Bars, Clubs & Live Music"
        />
        <meta
          property="twitter:description"
          content="Explore Milwaukee's legendary bar scene. From craft cocktails at Bryant's to dive bars, LGBTQ+ venues, and live music."
        />
        <meta
          property="twitter:image"
          content="https://discovermilwaukee.com/images/milwaukee-nightlife-hero.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://discovermilwaukee.com/milwaukee-nightlife" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main style={{ backgroundColor: colors.cream, color: colors.green1 }}>
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
                fontWeight: '800',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              Milwaukee Nightlife Guide
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto 30px',
                lineHeight: '1.6',
              }}
            >
              From legendary cocktail lounges to honest dive bars, Milwaukee has more bars per
              capita than almost any other American city. Here's your guide to drinking like a
              local.
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
                  backgroundColor: colors.orange,
                  color: colors.green1,
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                50+ Venues
              </span>
              <span
                style={{
                  backgroundColor: colors.yellow,
                  color: colors.green1,
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                7 Neighborhoods
              </span>
              <span
                style={{
                  backgroundColor: colors.beige,
                  color: colors.green1,
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                Updated 2024
              </span>
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
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {['Cocktail Bars', 'Dive Bars', 'Dance Clubs', 'LGBTQ+', 'Live Music', 'Sports Bars', 'Bar Crawls'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  style={{
                    color: colors.green1,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.green2;
                    e.currentTarget.style.color = colors.cream;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.green1;
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Introduction */}
        <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: colors.green1,
              marginBottom: '20px',
              borderLeft: `4px solid ${colors.orange}`,
              paddingLeft: '20px',
            }}
          >
            A City Built on Beer (And So Much More)
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Milwaukee's drinking culture runs deep—we're talking German brewing heritage,
            Prohibition-era speakeasies, and a genuine love for the corner tavern. With over{' '}
            <strong>1,500 licensed drinking establishments</strong> serving a population of 600,000,
            this city takes its nightlife seriously.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            But forget what you think you know. Yes, Milwaukee gave the world Miller, Pabst, and
            Schlitz. Today's scene is so much more: James Beard-nominated cocktail bars, rooftop
            lounges with skyline views, gritty punk venues, and yes—legendary dive bars where
            everyone knows your name.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Whether you're seeking a perfect Old Fashioned (we make them with brandy here), a cheap
            beer with genuine local character, or a night dancing until close, this guide has you
            covered. Check out our{' '}
            <Link href="/events" style={{ color: colors.orange, fontWeight: '600' }}>
              upcoming events calendar
            </Link>{' '}
            for live shows and special nights.
          </p>
        </section>

        {/* Cocktail Bars Section */}
        <section
          id="cocktail-bars"
          style={{ backgroundColor: colors.beige, padding: '60px 20px' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Craft Cocktail Bars
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: colors.green2,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}
            >
              Milwaukee's cocktail renaissance is real. These bars serve drinks that rival any major
              city—often with Wisconsin charm and no pretension.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
              }}
            >
              {cocktailBars.map((bar, index) => (
                <article
                  key={index}
                  style={{
                    backgroundColor: colors.cream,
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    borderTop: `4px solid ${colors.orange}`,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: colors.green1,
                      marginBottom: '10px',
                    }}
                  >
                    {bar.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: colors.green2,
                      marginBottom: '15px',
                      fontStyle: 'italic',
                    }}
                  >
                    {bar.address}
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: colors.green1,
                      marginBottom: '15px',
                    }}
                  >
                    {bar.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: colors.yellow,
                      color: colors.green1,
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                  >
                    {bar.vibe}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dive Bars Section */}
        <section id="dive-bars" style={{ padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Legendary Dive Bars
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: colors.green2,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}
            >
              Milwaukee's dive bars aren't trendy recreations—they're the real thing. Cash-only,
              cheap beer, and characters you'll never forget.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
              }}
            >
              {diveBars.map((bar, index) => (
                <article
                  key={index}
                  style={{
                    backgroundColor: colors.green1,
                    color: colors.cream,
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: colors.yellow,
                      marginBottom: '10px',
                    }}
                  >
                    {bar.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: colors.beige,
                      marginBottom: '15px',
                      fontStyle: 'italic',
                    }}
                  >
                    {bar.address}
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      marginBottom: '15px',
                    }}
                  >
                    {bar.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: colors.orange,
                      color: colors.green1,
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                  >
                    {bar.vibe}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dance Clubs Section */}
        <section
          id="dance-clubs"
          style={{
            background: `linear-gradient(180deg, ${colors.beige} 0%, ${colors.cream} 100%)`,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Dance Clubs & Late Night
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: colors.green2,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}
            >
              When you want to dance until close and beyond, these {danceClubs.length} spots keep the energy high.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '25px',
              }}
            >
              {danceClubs.map((club, index) => {
                const borderColors = [colors.orange, colors.yellow, colors.green2, colors.green1, colors.orange];
                return (
                  <div
                    key={club.name}
                    style={{
                      backgroundColor: colors.cream,
                      padding: '25px',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${borderColors[index % 5]}`,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    }}
                  >
                    <h3 style={{ color: colors.green1, marginBottom: '10px' }}>{club.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: colors.green2, marginBottom: '10px' }}>
                      {club.address}
                    </p>
                    <p style={{ lineHeight: '1.7', color: colors.green1 }}>
                      {club.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LGBTQ+ Section */}
        <section
          id="lgbtq-"
          style={{
            background: `linear-gradient(135deg, ${colors.green2} 0%, ${colors.green1} 100%)`,
            color: colors.cream,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>
              LGBTQ+ Scene: Walker's Point
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                marginBottom: '40px',
                opacity: 0.9,
              }}
            >
              Walker's Point is Milwaukee's vibrant LGBTQ+ hub with a welcoming mix of bars, clubs,
              and community spaces. Read our complete{' '}
              <Link
                href="/walkers-point-milwaukee"
                style={{ color: colors.yellow, fontWeight: '600' }}
              >
                Walker's Point neighborhood guide
              </Link>
              .
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '10px' }}>La Cage</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                  801 S 2nd St
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Milwaukee's largest LGBTQ+ dance club with multiple levels, drag shows, and
                  weekend dance parties. A cornerstone of the community since 1984.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '10px' }}>This Is It!</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                  418 E Wells St
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Wisconsin's oldest continuously-operating gay bar, open since 1968. A downtown
                  institution with loyal regulars and welcoming vibes.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '10px' }}>Kruz</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                  354 E National Ave
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Walker's Point neighborhood bar with a leather/cruise vibe, great patio, and
                  friendly regulars. Events include underwear parties and bear nights.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '10px' }}>D.I.X.</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                  739 S 1st St
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Video bar and club with dancing, drag performances, and a fun party atmosphere.
                  Popular for weekend nights and special events.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '10px' }}>Woody's</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                  1579 S 2nd St
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Sports bar atmosphere with pool tables, darts, and a chill neighborhood vibe. A
                  great spot to start or end your Walker's Point night.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: colors.yellow, marginBottom: '10px' }}>Walker's Pint</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                  818 S 2nd St
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Lesbian-owned neighborhood bar welcoming everyone. Pool, darts, jukebox, and
                  genuine community. A local favorite with character.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Music Section */}
        <section id="live-music" style={{ padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Live Music Venues
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: colors.green2,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}
            >
              From arena shows to intimate clubs, Milwaukee's live music scene punches above its
              weight. Check our{' '}
              <Link href="/events" style={{ color: colors.orange, fontWeight: '600' }}>
                events calendar
              </Link>{' '}
              for upcoming shows.
            </p>

            <div style={{ display: 'grid', gap: '20px' }}>
              {liveMusic.map((venue, index) => (
                <article
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '20px',
                    alignItems: 'center',
                    backgroundColor: colors.beige,
                    padding: '25px',
                    borderRadius: '12px',
                  }}
                >
                  <div>
                    <h3 style={{ color: colors.green1, marginBottom: '8px', fontSize: '1.4rem' }}>
                      {venue.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: colors.green2,
                        marginBottom: '10px',
                      }}
                    >
                      {venue.address}
                    </p>
                    <p style={{ lineHeight: '1.7', color: colors.green1 }}>{venue.description}</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: colors.green1,
                      color: colors.cream,
                      padding: '15px 20px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      minWidth: '100px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '5px' }}>
                      CAPACITY
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{venue.capacity}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Bars Section */}
        <section
          id="sports-bars"
          style={{
            backgroundColor: colors.beige,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Sports Bars
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: colors.green2,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}
            >
              Milwaukee is a sports town through and through. These {sportsBars.length} bars are perfect for catching the Bucks, Brewers, or Packers.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '25px',
              }}
            >
              {sportsBars.map((bar) => (
                <article
                  key={bar.name}
                  style={{
                    backgroundColor: colors.cream,
                    borderRadius: '12px',
                    padding: '25px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      color: colors.green1,
                      marginBottom: '8px',
                    }}
                  >
                    {bar.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: colors.green2,
                      marginBottom: '12px',
                      fontStyle: 'italic',
                    }}
                  >
                    {bar.address}
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: colors.green1,
                      marginBottom: '12px',
                    }}
                  >
                    {bar.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: colors.green1,
                      color: colors.cream,
                      padding: '5px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    {bar.specialty}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bar Crawls Section */}
        <section
          id="bar-crawls"
          style={{
            backgroundColor: colors.cream,
            padding: '60px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Neighborhood Bar Crawls
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: colors.green2,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}
            >
              Milwaukee's best nights out happen on foot. These walkable neighborhoods pack dozens
              of bars into compact districts.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
              }}
            >
              {barCrawls.map((crawl, index) => (
                <article
                  key={index}
                  style={{
                    backgroundColor: colors.cream,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: colors.green1,
                      color: colors.cream,
                      padding: '20px',
                    }}
                  >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
                      {crawl.link ? (
                        <Link href={crawl.link} style={{ color: colors.yellow }}>
                          {crawl.neighborhood}
                        </Link>
                      ) : (
                        crawl.neighborhood
                      )}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        backgroundColor: colors.orange,
                        color: colors.green1,
                        padding: '3px 12px',
                        borderRadius: '15px',
                      }}
                    >
                      {crawl.vibe}
                    </span>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <p style={{ lineHeight: '1.7', marginBottom: '20px', color: colors.green1 }}>
                      {crawl.description}
                    </p>
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        color: colors.green2,
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      Suggested Stops:
                    </h4>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      {crawl.stops.map((stop, i) => (
                        <li
                          key={i}
                          style={{
                            backgroundColor: colors.beige,
                            padding: '5px 12px',
                            borderRadius: '15px',
                            fontSize: '0.85rem',
                            color: colors.green1,
                          }}
                        >
                          {stop}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                color: colors.green1,
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'grid', gap: '20px' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: colors.beige,
                    borderRadius: '12px',
                    padding: '25px',
                    borderLeft: `4px solid ${index % 2 === 0 ? colors.orange : colors.yellow}`,
                  }}
                >
                  <h3
                    style={{
                      color: colors.green1,
                      fontSize: '1.2rem',
                      marginBottom: '12px',
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p style={{ lineHeight: '1.7', color: colors.green2 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: `linear-gradient(135deg, ${colors.green1} 0%, ${colors.green2} 100%)`,
            padding: '60px 20px',
            textAlign: 'center',
            color: colors.cream,
          }}
        >
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>
              Ready to Experience Milwaukee Nightlife?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
              Check out our neighborhood guides for even more spots, or browse upcoming events to
              plan your perfect night out.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/walkers-point-milwaukee"
                style={{
                  backgroundColor: colors.orange,
                  color: colors.green1,
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  transition: 'transform 0.2s',
                }}
              >
                Explore Walker's Point
              </Link>
              <Link
                href="/east-side-milwaukee"
                style={{
                  backgroundColor: colors.yellow,
                  color: colors.green1,
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  transition: 'transform 0.2s',
                }}
              >
                East Side Guide
              </Link>
              <Link
                href="/events"
                style={{
                  backgroundColor: colors.cream,
                  color: colors.green1,
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  transition: 'transform 0.2s',
                }}
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer
          style={{
            backgroundColor: colors.green1,
            color: colors.beige,
            padding: '30px 20px',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          <p style={{ opacity: 0.8 }}>
            Please drink responsibly. Bar hours, offerings, and policies may change. Always confirm
            details before visiting.
          </p>
        </footer>
      </main>
    </>
  );
}
