import React from "react";
import Head from "next/head";
import Link from "next/link";

// Brand colors matching main site
const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

// Restaurants in Walker's Point
const restaurants = [
  {
    name: "La Merenda",
    type: "International Small Plates",
    priceRange: "$$",
    address: "125 E National Ave, Milwaukee, WI 53204",
    description: "The anchor of Walker's Point dining. La Merenda has been serving globally-inspired small plates in this edgy neighborhood since before it was cool. The ever-rotating menu spans continents—from Spanish tapas to Asian-inspired bites—all served in a warm, unpretentious space that feels like a neighborhood secret.",
    mustTry: "Rotating tapas menu, seasonal specials, house-made charcuterie",
    vibe: "Neighborhood gem, perfect for groups who can't decide on one cuisine",
  },
  {
    name: "Morel",
    type: "Farm-to-Table American",
    priceRange: "$$$",
    address: "430 S 2nd St, Milwaukee, WI 53204",
    description: "Wisconsin farm-to-table done right. Chef relationships with local farmers shine through in every dish at this 2nd Street standout. The menu changes with the seasons, showcasing the best of what Wisconsin producers have to offer. The industrial-chic space matches the neighborhood's aesthetic perfectly.",
    mustTry: "Seasonal tasting menu, local protein preparations, Wisconsin cheese board",
    vibe: "Elevated but not pretentious, great for date nights",
  },
  {
    name: "Aya",
    type: "Modern Middle Eastern",
    priceRange: "$$",
    address: "Walker's Point, Milwaukee, WI 53204",
    description: "One of Milwaukee's most exciting recent additions. Aya brings bold Middle Eastern flavors to Walker's Point with vibrant mezze spreads, perfectly spiced proteins, and house-made pita that's worth the trip alone. The shareable format fits the neighborhood's communal, social energy.",
    mustTry: "Mezze platter, lamb dishes, house-made pita, baklava",
    vibe: "Vibrant, shareable, vegetarian-friendly",
  },
];

// Craft Breweries
const breweries = [
  {
    name: "MobCraft Beer",
    address: "505 S 5th St, Milwaukee, WI 53204",
    description: "The original crowdsourced brewery. MobCraft lets beer fans vote on experimental recipes, resulting in some of the most creative—and sometimes wild—beers in the Midwest. Their taproom is a perfect reflection of Walker's Point: industrial, unpretentious, and always surprising.",
    known: "Crowdsourced beers, experimental styles, Bat Sh!t Crazy (coffee brown ale)",
    vibe: "Experimental, community-driven, expect the unexpected",
  },
  {
    name: "Enlightened Brewing Company",
    address: "2020 S Allis St, Milwaukee, WI 53207",
    description: "A neighborhood brewery that keeps things approachable. Enlightened focuses on well-crafted beers that don't require a beer snob decoder ring. The taproom has a laid-back, living room vibe that makes you want to stay for another round.",
    known: "Cream City Brix (cream ale), Daily Stipend pilsner, rotating IPAs",
    vibe: "Laid-back, approachable, community-focused",
  },
  {
    name: "Urban Harvest Brewing Company",
    address: "1024 S 5th St, Milwaukee, WI 53204",
    description: "Sustainability meets craft beer. Urban Harvest grows hops and ingredients on-site and partners with local urban farms. The result is hyper-local beer that tastes like Milwaukee. The taproom features a rooftop garden and regularly hosts community events.",
    known: "Farm-to-glass brewing, locally-sourced ingredients, seasonal releases",
    vibe: "Sustainable, community-minded, garden-to-glass",
  },
];

// LGBTQ+ Nightlife
const nightlife = [
  {
    name: "This Is It!",
    address: "418 E Wells St (with Walker's Point roots)",
    description: "Milwaukee's oldest LGBTQ+ bar, operating since 1968. While the current location is on the edge of downtown, This Is It! is deeply woven into Milwaukee's queer history and remains a beloved gathering spot. Classic cocktails, no pretense, and a welcoming vibe for all.",
    vibe: "Historic, welcoming, classic cocktail bar",
  },
  {
    name: "Kruz",
    address: "354 E National Ave, Milwaukee, WI 53204",
    description: "A Walker's Point mainstay. Kruz offers a laid-back neighborhood bar atmosphere that's equally welcoming to leather daddies and first-timers. The spacious outdoor patio is a summer hotspot. Pool tables, darts, and cheap drinks keep it real.",
    vibe: "Laid-back, patio vibes, neighborhood bar energy",
  },
  {
    name: "D.I.X.",
    address: "739 S 1st St, Milwaukee, WI 53204",
    description: "Dance, drinks, and drag. D.I.X. brings high-energy nightlife to Walker's Point with themed nights, drag shows, and a dance floor that keeps going late. It's unapologetically queer and proudly over-the-top.",
    vibe: "High energy, drag shows, dance floor",
  },
];

// Street Art locations
const streetArt = [
  {
    title: "5th Street Murals",
    description: "The stretch of S 5th Street between National and Virginia features some of the most Instagram-worthy murals in the city. Local and national artists have transformed warehouse walls into massive, colorful statements.",
  },
  {
    title: "Black Cat Alley Adjacent Works",
    description: "While Black Cat Alley itself is in the East Side, many of the same artists have left their mark throughout Walker's Point. Keep your eyes open for smaller-scale works on garage doors and building sides.",
  },
  {
    title: "2nd Street Gallery District",
    description: "The galleries and creative spaces along 2nd Street often commission outdoor works that blur the line between street art and fine art. The annual Walker's Point Art Walk highlights many of these pieces.",
  },
];

// FAQ data for schema markup
const faqs = [
  {
    question: "Is Walker's Point safe to visit?",
    answer: "Walker's Point is a vibrant, well-traveled neighborhood that's popular with locals and visitors alike. Like any urban area, use common sense—stick to well-lit streets at night and be aware of your surroundings. The main corridors (2nd Street, 5th Street, National Avenue) are busy with foot traffic, especially on weekends.",
  },
  {
    question: "What is Walker's Point known for?",
    answer: "Walker's Point is known for its craft brewery scene (MobCraft, Enlightened, Urban Harvest), LGBTQ+-friendly nightlife, vibrant street art, farm-to-table restaurants like Morel and La Merenda, and its diverse, edgy character. It's often called Milwaukee's most eclectic neighborhood.",
  },
  {
    question: "Is Walker's Point LGBTQ+ friendly?",
    answer: "Absolutely. Walker's Point has been the heart of Milwaukee's LGBTQ+ community for decades. Bars like Kruz and D.I.X. are neighborhood institutions, and the area hosts Milwaukee PrideFest activities. The neighborhood is welcoming to everyone.",
  },
  {
    question: "Where should I park in Walker's Point?",
    answer: "Street parking is available throughout Walker's Point and is generally easier to find than in the Third Ward or downtown. Meters are enforced until 9 PM on most streets. On busy nights (Friday, Saturday), arrive early or use ride-share. Some restaurants have small lots.",
  },
  {
    question: "What is the 2nd Street corridor in Walker's Point?",
    answer: "The 2nd Street corridor is the main artery of Walker's Point, running from National Avenue south through the neighborhood. It's home to restaurants like Morel, galleries, creative businesses, and some of the area's best nightlife. This is where the neighborhood's energy is most concentrated.",
  },
  {
    question: "When is the best time to visit Walker's Point?",
    answer: "Walker's Point comes alive on Friday and Saturday evenings when the restaurants, breweries, and bars are buzzing. For a more relaxed experience, weekend afternoons are great for brewery hopping and mural hunting. Gallery nights and special events (check local listings) bring extra energy to the neighborhood.",
  },
];

// Structured data for SEO
const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Walker's Point Milwaukee: Neighborhood Guide to Breweries, Restaurants & Nightlife",
    "description": "Explore Walker's Point, Milwaukee's most diverse and edgy neighborhood. Discover craft breweries, LGBTQ+ nightlife, street art, and the best restaurants on 2nd Street.",
    "author": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://discover-milwaukee.com/logo.png",
      },
    },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/walkers-point-milwaukee",
    "keywords": "walkers point milwaukee, walker's point, milwaukee breweries, milwaukee lgbtq nightlife, milwaukee street art, milwaukee neighborhoods",
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  },
  neighborhood: {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Walker's Point",
    "description": "Walker's Point is Milwaukee's most diverse and eclectic neighborhood, known for craft breweries, LGBTQ+ nightlife, street art, and innovative restaurants.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.0230",
      "longitude": "-87.9150",
    },
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://discover-milwaukee.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Neighborhoods",
        "item": "https://discover-milwaukee.com/neighborhoods",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Walker's Point",
        "item": "https://discover-milwaukee.com/walkers-point-milwaukee",
      },
    ],
  },
};

export default function WalkersPointMilwaukee() {
  // Restaurant card component
  const RestaurantCard = ({ restaurant }) => (
    <div
      style={{
        backgroundColor: c.cream,
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "20px",
        border: `1px solid ${c.beige}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>
          {restaurant.name}
        </h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <span
            style={{
              backgroundColor: c.orange,
              color: "white",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {restaurant.priceRange}
          </span>
          <span
            style={{
              backgroundColor: c.green2,
              color: "white",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {restaurant.type}
          </span>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
        {restaurant.description}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.vibe}</p>
        </div>
      </div>
      {restaurant.address && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>
          {restaurant.address}
        </p>
      )}
    </div>
  );

  // Brewery card component
  const BreweryCard = ({ brewery }) => (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "20px",
        border: `2px solid ${c.yellow}`,
      }}
    >
      <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", marginBottom: "8px" }}>
        {brewery.name}
      </h3>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
        {brewery.description}
      </p>
      <div style={{ backgroundColor: "rgba(244,208,63,0.2)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>KNOWN FOR</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{brewery.known}</p>
      </div>
      <p style={{ fontSize: "13px", color: c.green2, fontWeight: "600", margin: 0 }}>{brewery.vibe}</p>
      <p style={{ fontSize: "13px", color: "#777", marginTop: "8px", marginBottom: 0 }}>{brewery.address}</p>
    </div>
  );

  // Nightlife card component
  const NightlifeCard = ({ spot }) => (
    <div
      style={{
        backgroundColor: c.green1,
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ color: c.yellow, fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>
        {spot.name}
      </h3>
      <p style={{ color: c.cream, fontSize: "15px", lineHeight: 1.7, marginBottom: "12px" }}>
        {spot.description}
      </p>
      <p style={{ fontSize: "13px", color: c.orange, fontWeight: "600", margin: 0 }}>{spot.vibe}</p>
      <p style={{ fontSize: "13px", color: c.beige, marginTop: "8px", marginBottom: 0 }}>{spot.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Walker's Point Milwaukee Guide 2026 | Breweries, Nightlife & Restaurants</title>
        <meta
          name="description"
          content="Explore Walker's Point, Milwaukee's most diverse neighborhood. Discover craft breweries like MobCraft, LGBTQ+ nightlife, street art, and restaurants like La Merenda and Morel. Your complete guide to Walker's Point."
        />
        <meta
          name="keywords"
          content="walkers point milwaukee, walker's point, milwaukee breweries, milwaukee craft beer, milwaukee lgbtq nightlife, milwaukee gay bars, walker's point restaurants, milwaukee street art, 2nd street milwaukee, mobcraft beer, la merenda milwaukee, morel milwaukee"
        />
        <link rel="canonical" href="https://discover-milwaukee.com/walkers-point-milwaukee" />

        {/* Open Graph */}
        <meta property="og:title" content="Walker's Point Milwaukee: Complete Neighborhood Guide 2026" />
        <meta
          property="og:description"
          content="Milwaukee's most diverse and edgy neighborhood. Craft breweries, LGBTQ+ nightlife, street art, and the best restaurants on 2nd Street."
        />
        <meta property="og:url" content="https://discover-milwaukee.com/walkers-point-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="article:published_time" content="2026-01-20" />
        <meta property="article:modified_time" content="2026-04-15" />
        <meta property="article:section" content="Neighborhoods" />
        <meta property="article:tag" content="Walker's Point" />
        <meta property="article:tag" content="Milwaukee Neighborhoods" />
        <meta property="article:tag" content="Milwaukee Breweries" />
        <meta property="article:tag" content="LGBTQ+ Milwaukee" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Walker's Point Milwaukee: Breweries, Nightlife & More" />
        <meta
          name="twitter:description"
          content="Your guide to Milwaukee's most eclectic neighborhood. Craft beer, LGBTQ+ nightlife, street art, and incredible restaurants."
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />
        <meta name="geo.position" content="43.0230;-87.9150" />
        <meta name="ICBM" content="43.0230, -87.9150" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.neighborhood) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
        />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        {/* Navigation */}
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>
              DISCOVER MILWAUKEE
            </Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
                Explore
              </Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
                Events
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header
          style={{
            background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`,
            padding: "60px 24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative element suggesting edgy/street art vibe */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "10%",
              width: "100px",
              height: "100px",
              backgroundColor: c.orange,
              opacity: 0.1,
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "5%",
              width: "60px",
              height: "60px",
              backgroundColor: c.yellow,
              opacity: 0.15,
              transform: "rotate(15deg)",
            }}
          />
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>
              MILWAUKEE NEIGHBORHOOD GUIDE
            </p>
            <h1
              style={{
                color: c.cream,
                fontSize: "clamp(36px, 6vw, 52px)",
                fontWeight: "900",
                marginBottom: "16px",
                lineHeight: 1.1,
              }}
            >
              Walker's Point
            </h1>
            <p style={{ color: c.yellow, fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
              Edgy. Diverse. Milwaukee's Craft Beer Hub.
            </p>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Where industrial grit meets creative energy. Walker's Point is Milwaukee's most eclectic neighborhood—home to
              craft breweries, LGBTQ+ nightlife, street art, and some of the city's most innovative restaurants.
            </p>
          </div>
        </header>

        {/* Quick Stats Bar */}
        <div style={{ backgroundColor: c.yellow, padding: "16px 24px" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: 0 }}>5+</p>
              <p style={{ fontSize: "12px", fontWeight: "600", color: c.green2, margin: 0 }}>CRAFT BREWERIES</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: 0 }}>10+</p>
              <p style={{ fontSize: "12px", fontWeight: "600", color: c.green2, margin: 0 }}>LGBTQ+ VENUES</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: 0 }}>20+</p>
              <p style={{ fontSize: "12px", fontWeight: "600", color: c.green2, margin: 0 }}>MURALS & STREET ART</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: 0 }}>50+</p>
              <p style={{ fontSize: "12px", fontWeight: "600", color: c.green2, margin: 0 }}>YEARS OF HISTORY</p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#overview" style={{ color: c.green2, fontSize: "14px" }}>Overview</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Restaurants</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#breweries" style={{ color: c.green2, fontSize: "14px" }}>Craft Breweries</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nightlife" style={{ color: c.green2, fontSize: "14px" }}>LGBTQ+ Nightlife</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#street-art" style={{ color: c.green2, fontSize: "14px" }}>Street Art</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#2nd-street" style={{ color: c.green2, fontSize: "14px" }}>2nd Street</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          {/* Overview Section */}
          <section id="overview" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "900", marginBottom: "16px" }}>
              Welcome to Walker's Point
            </h2>
            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
              Walker's Point doesn't try to be polished—and that's exactly why it works. This industrial-turned-creative
              neighborhood south of downtown is where Milwaukee gets real. Brick warehouses that once hummed with manufacturing
              now house craft breweries, art galleries, and some of the city's most exciting restaurants.
            </p>
            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
              For decades, Walker's Point has been the heart of Milwaukee's LGBTQ+ community. Historic bars like This Is It!
              paved the way, and today the neighborhood remains one of the most welcoming and diverse in the Midwest. Pride
              runs deep here—not just during June, but year-round.
            </p>
            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
              Then there's the beer. Walker's Point is ground zero for Milwaukee's craft brewing renaissance. MobCraft,
              Enlightened, Urban Harvest—these aren't just taprooms, they're community gathering spots where experimental
              brewing meets neighborhood spirit. If you want to understand Milwaukee's craft beer identity, start here.
            </p>

            <div
              style={{
                backgroundColor: c.green2,
                padding: "24px",
                borderRadius: "16px",
                marginTop: "24px",
              }}
            >
              <h3 style={{ color: c.yellow, fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>
                THE WALKER'S POINT VIBE
              </h3>
              <p style={{ color: c.cream, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Expect industrial-chic spaces, rainbow flags, brewery patios, and murals on every corner. The crowd is
                diverse—artists, makers, LGBTQ+ community, young professionals, and longtime residents who've watched the
                neighborhood evolve. It's unpretentious, creative, and genuinely welcoming. Come as you are.
              </p>
            </div>
          </section>

          {/* Restaurants Section */}
          <section id="restaurants" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>
              Best Restaurants in Walker's Point
            </h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Walker's Point dining is defined by creativity and authenticity. These aren't chain restaurants or safe
              bets—they're chef-driven spots that take risks and reflect the neighborhood's diverse spirit.
            </p>
            {restaurants.map((r, i) => (
              <RestaurantCard key={i} restaurant={r} />
            ))}
            <div style={{ backgroundColor: c.orange, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: "white", fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Hungry for more? Explore our complete{" "}
                <Link href="/best-restaurants-milwaukee" style={{ color: "white", fontWeight: "800", textDecoration: "underline" }}>
                  Best Restaurants in Milwaukee
                </Link>{" "}
                guide featuring spots across every neighborhood.
              </p>
            </div>
          </section>

          {/* Breweries Section */}
          <section id="breweries" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>
              Craft Breweries in Walker's Point
            </h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Walker's Point is Milwaukee's craft beer heartbeat. While the city has breweries scattered throughout, nowhere
              else captures the experimental, community-driven spirit of modern craft brewing like this neighborhood.
            </p>
            {breweries.map((b, i) => (
              <BreweryCard key={i} brewery={b} />
            ))}
            <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Planning a brewery crawl? Check out our{" "}
                <Link href="/milwaukee-breweries" style={{ color: c.green1, fontWeight: "800", textDecoration: "underline" }}>
                  Complete Milwaukee Breweries Guide
                </Link>{" "}
                for the full city-wide rundown.
              </p>
            </div>
          </section>

          {/* LGBTQ+ Nightlife Section */}
          <section id="nightlife" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>
              LGBTQ+ Nightlife in Walker's Point
            </h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Walker's Point has been the heart of Milwaukee's LGBTQ+ community for generations. These bars and clubs aren't
              just nightlife destinations—they're gathering spots, safe spaces, and community anchors that have shaped the
              neighborhood's identity.
            </p>
            {nightlife.map((spot, i) => (
              <NightlifeCard key={i} spot={spot} />
            ))}
            <div style={{ backgroundColor: c.green2, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: c.cream, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Looking for more nightlife options? Our{" "}
                <Link href="/milwaukee-nightlife" style={{ color: c.yellow, fontWeight: "800", textDecoration: "underline" }}>
                  Milwaukee Nightlife Guide
                </Link>{" "}
                covers bars, clubs, and late-night spots across the city.
              </p>
            </div>
          </section>

          {/* Street Art Section */}
          <section id="street-art" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>
              Street Art & Murals
            </h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Walker's Point wears its art on the outside. Industrial buildings and warehouse walls have become canvases for
              local and national muralists, turning the neighborhood into an open-air gallery. Grab your camera and explore.
            </p>
            <div style={{ display: "grid", gap: "16px" }}>
              {streetArt.map((art, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    border: `1px solid ${c.beige}`,
                    borderLeft: `4px solid ${c.orange}`,
                  }}
                >
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>
                    {art.title}
                  </h3>
                  <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{art.description}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                backgroundColor: c.cream,
                padding: "20px",
                borderRadius: "12px",
                marginTop: "24px",
                border: `2px dashed ${c.orange}`,
              }}
            >
              <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>
                PRO TIP: SELF-GUIDED MURAL WALK
              </h4>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Start at the intersection of 5th and National, then work your way south along 5th Street. Turn east on
                Virginia and make your way to 2nd Street. Allow 1-2 hours for a leisurely walk with photo stops. Best in
                afternoon light.
              </p>
            </div>
          </section>

          {/* 2nd Street Corridor Section */}
          <section id="2nd-street" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>
              The 2nd Street Corridor
            </h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              If Walker's Point has a main street, it's 2nd Street. This north-south artery is where the neighborhood's
              energy concentrates—restaurants, bars, galleries, and creative businesses line both sides.
            </p>
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "16px",
                border: `1px solid ${c.beige}`,
                marginBottom: "20px",
              }}
            >
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "700", marginBottom: "16px" }}>
                What You'll Find on 2nd Street
              </h3>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#555", lineHeight: 2 }}>
                <li>
                  <strong style={{ color: c.green1 }}>Morel</strong> — Farm-to-table dining with Wisconsin roots
                </li>
                <li>
                  <strong style={{ color: c.green1 }}>Galleries & Studios</strong> — Working artists with occasional open
                  hours
                </li>
                <li>
                  <strong style={{ color: c.green1 }}>Iron Horse Hotel</strong> — Industrial-chic boutique hotel
                </li>
                <li>
                  <strong style={{ color: c.green1 }}>Creative Businesses</strong> — Agencies, makers, and tech startups
                </li>
                <li>
                  <strong style={{ color: c.green1 }}>Dive Bars & Cocktail Lounges</strong> — Something for every mood
                </li>
              </ul>
            </div>
            <div style={{ backgroundColor: c.beige, padding: "20px", borderRadius: "12px" }}>
              <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>
                BEST TIME TO VISIT 2ND STREET
              </h4>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Friday and Saturday evenings (6-10 PM) when the restaurants are buzzing and the galleries occasionally open
                their doors. Sunday afternoons are more relaxed—perfect for a post-brunch walk before hitting a brewery
                taproom.
              </p>
            </div>
          </section>

          {/* Internal Links Section */}
          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>
              Explore More Milwaukee
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link
                href="/milwaukee-breweries"
                style={{
                  display: "block",
                  backgroundColor: c.green1,
                  color: c.cream,
                  padding: "20px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <span style={{ fontSize: "14px", color: c.yellow, display: "block", marginBottom: "4px" }}>GUIDE</span>
                Milwaukee Breweries
              </Link>
              <Link
                href="/milwaukee-nightlife"
                style={{
                  display: "block",
                  backgroundColor: c.green2,
                  color: c.cream,
                  padding: "20px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <span style={{ fontSize: "14px", color: c.yellow, display: "block", marginBottom: "4px" }}>GUIDE</span>
                Milwaukee Nightlife
              </Link>
              <Link
                href="/best-restaurants-milwaukee"
                style={{
                  display: "block",
                  backgroundColor: c.orange,
                  color: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: "4px" }}>
                  GUIDE
                </span>
                Best Restaurants MKE
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>
              Walker's Point FAQ
            </h2>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "20px",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  border: `1px solid ${c.beige}`,
                }}
              >
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>
                  {faq.question}
                </h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* Newsletter CTA */}
          <section
            style={{
              backgroundColor: c.green1,
              padding: "40px 32px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: c.yellow, fontSize: "28px", fontWeight: "900", marginBottom: "12px" }}>
              Get the Inside Scoop on Walker's Point
            </h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "8px", lineHeight: 1.6 }}>
              New brewery openings, pop-up events, gallery nights, and neighborhood news—delivered weekly.
            </p>
            <p style={{ color: c.beige, fontSize: "14px", marginBottom: "24px" }}>
              Join 5,000+ Milwaukee insiders who start their week with our newsletter.
            </p>
            <Link
              href="/newsletter"
              style={{
                display: "inline-block",
                backgroundColor: c.yellow,
                color: c.green1,
                padding: "16px 40px",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Subscribe Free
            </Link>
            <p style={{ color: c.beige, fontSize: "12px", marginTop: "16px", marginBottom: 0 }}>
              No spam. Unsubscribe anytime.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>
            &copy; 2026 Discover Milwaukee. Your insider's guide to MKE.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/explore" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>
              Explore
            </Link>
            <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>
              Events
            </Link>
            <Link href="/best-restaurants-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>
              Restaurants
            </Link>
            <Link href="/milwaukee-breweries" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>
              Breweries
            </Link>
            <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>
              Partner
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
