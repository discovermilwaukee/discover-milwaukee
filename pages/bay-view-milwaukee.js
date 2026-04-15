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

// Bay View spots organized by category
const spots = {
  restaurants: [
    {
      name: "Odd Duck",
      type: "Global Small Plates",
      priceRange: "$$",
      address: "2352 S Kinnickinnic Ave",
      description: "The restaurant that put Bay View on Milwaukee's culinary map. Globally inspired small plates with rotating seasonal menus keep locals coming back weekly. The open kitchen, exposed brick, and creative cocktails define the neighborhood's food-forward identity.",
      mustTry: "Chef's rotating seasonal selections, creative small plates",
      vibe: "Artsy, energetic, perfect for adventurous eaters",
    },
    {
      name: "Honeypie Cafe",
      type: "American Comfort & Pie",
      priceRange: "$",
      address: "2643 S Kinnickinnic Ave",
      description: "A Bay View institution serving scratch-made comfort food and legendary pies. The brunch lines are worth it. Mismatched vintage decor, friendly staff, and that from-scratch taste make this the neighborhood's cozy gathering spot.",
      mustTry: "Any pie (seriously, any), chicken pot pie, brunch",
      vibe: "Cozy, nostalgic, community-focused",
    },
    {
      name: "Palomino Bar",
      type: "Elevated American",
      priceRange: "$$",
      address: "2491 S Superior St",
      description: "A neighborhood bar that happens to serve exceptional food. The rotating menu showcases local ingredients with creative preparations. Low-key atmosphere belies the quality of what comes out of the kitchen.",
      mustTry: "Burger, seasonal specials, craft cocktails",
      vibe: "Casual but refined, local favorite",
    },
    {
      name: "Birch",
      type: "Contemporary Tasting Menu",
      priceRange: "$$$$",
      address: "459 E Pleasant St",
      description: "Bay View's fine dining destination and one of Milwaukee's most acclaimed restaurants. The intimate tasting menu experience rivals anything in Chicago. Minimalist presentation, impeccable technique, and a chef-driven approach make this Milwaukee's closest thing to a Michelin experience.",
      mustTry: "Full tasting menu with wine pairings",
      vibe: "Intimate, refined, special occasion worthy",
    },
  ],
  bars: [
    {
      name: "Sugar Maple",
      type: "Craft Beer Bar",
      address: "441 E Lincoln Ave",
      description: "Milwaukee's best craft beer bar, period. Over 60 taps featuring rare Wisconsin breweries and hard-to-find releases. The knowledgeable staff, no-frills atmosphere, and exceptional beer selection make this a pilgrimage site for beer lovers.",
      highlight: "60+ rotating taps, rare Wisconsin craft beers",
      vibe: "Laid-back, unpretentious, beer-nerd paradise",
    },
    {
      name: "Boone & Crockett",
      type: "Cocktail Bar & Venue",
      address: "2151 S Kinnickinnic Ave",
      description: "Creative cocktails in a space that feels like a hunting lodge designed by artists. The outdoor patio with fire pit is one of the best in Milwaukee. DJs, live music, and a younger crowd make this Bay View's see-and-be-seen spot.",
      highlight: "Fire pit patio, creative cocktails, live DJ nights",
      vibe: "Trendy, creative, excellent people-watching",
    },
  ],
  coffeeShops: [
    {
      name: "Colectivo Coffee",
      address: "2301 S Kinnickinnic Ave",
      description: "The flagship Bay View location in a beautifully converted former church. High ceilings, stained glass, and excellent coffee. The patio is a neighborhood gathering spot in warm weather.",
      highlight: "Historic church building, beautiful patio",
    },
    {
      name: "Stone Creek Coffee",
      address: "2266 S Kinnickinnic Ave",
      description: "Milwaukee-roasted coffee in a cozy neighborhood setting. The factory-roasted beans and skilled baristas make this a local favorite for serious coffee.",
      highlight: "Locally roasted, skilled baristas",
    },
    {
      name: "Anodyne Coffee",
      address: "224 W Bruce St",
      description: "Walker's Point-adjacent roaster with Bay View regulars. Industrial space, excellent espresso, and a slightly grittier vibe than the KK Ave spots.",
      highlight: "Industrial vibes, excellent espresso",
    },
  ],
  vintageShops: [
    {
      name: "Sparrow Collective",
      address: "2224 S Kinnickinnic Ave",
      description: "Multi-vendor vintage market with furniture, clothing, and home goods. The ever-changing inventory means every visit offers something new.",
    },
    {
      name: "Furnish Me Vintage",
      address: "2266 S Kinnickinnic Ave",
      description: "Mid-century modern furniture and home goods. Curated selection that skews higher-end but offers genuine quality pieces.",
    },
    {
      name: "Yellow Jacket Vintage",
      address: "2472 S Kinnickinnic Ave",
      description: "Clothing-focused vintage with great denim, leather jackets, and 70s/80s pieces. Affordable prices and friendly owners.",
    },
  ],
};

// FAQ data for Bay View
const faqs = [
  {
    question: "What is Bay View Milwaukee known for?",
    answer: "Bay View is Milwaukee's hip, artsy neighborhood known for its creative dining scene (Odd Duck, Honeypie, Birch), vintage shopping on Kinnickinnic Avenue, craft beer bars like Sugar Maple, vibrant street art, South Shore Park's lakefront access, and a thriving community of artists, musicians, and young professionals. It's often called Milwaukee's Brooklyn."
  },
  {
    question: "Is Bay View a good neighborhood to live in Milwaukee?",
    answer: "Bay View is one of Milwaukee's most desirable neighborhoods, especially for young professionals, artists, and families seeking walkability. It offers excellent restaurants and bars, Lake Michigan access, safe streets, strong community involvement, and a creative atmosphere. Housing ranges from historic bungalows to newer condos, with prices reflecting its popularity."
  },
  {
    question: "How do I get to Bay View Milwaukee?",
    answer: "Bay View is located south of downtown Milwaukee along the lakefront. From downtown, take I-794 East to the Lincoln Memorial Drive exit, or drive south on 1st Street. The neighborhood centers around Kinnickinnic Avenue (KK Ave) between Oklahoma Avenue and Lincoln Avenue. Street parking is generally available, and the neighborhood is very walkable once you arrive."
  },
  {
    question: "What is Kinnickinnic Avenue in Bay View?",
    answer: "Kinnickinnic Avenue (known locally as 'KK Ave') is Bay View's main commercial street and the heart of the neighborhood. This walkable stretch features the area's best restaurants (Odd Duck, Honeypie, Palomino), vintage shops, coffee roasters (Colectivo, Stone Creek), bars, and local boutiques. It's the best place to experience Bay View's creative, independent spirit."
  },
  {
    question: "What are the best restaurants in Bay View Milwaukee?",
    answer: "Bay View's top restaurants include Odd Duck (globally-inspired small plates), Honeypie Cafe (comfort food and legendary pies), Birch (upscale tasting menu), and Palomino Bar (elevated bar food). The neighborhood is known for chef-driven, creative cuisine that's less formal than downtown but equally delicious."
  },
  {
    question: "Is Bay View safe for visitors?",
    answer: "Bay View is considered one of Milwaukee's safest and most welcoming neighborhoods. The main commercial areas along Kinnickinnic Avenue are well-lit and busy with locals at all hours. Like any urban area, standard city awareness applies, but visitors consistently find Bay View friendly and comfortable to explore."
  },
];

// Structured data for SEO
const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bay View Milwaukee Neighborhood Guide 2026: Restaurants, Bars & Things to Do",
    "description": "Complete guide to Bay View, Milwaukee's hip artsy neighborhood. Best restaurants, craft beer bars, vintage shopping on KK Ave, South Shore Park, and local insider tips.",
    "author": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://discover-milwaukee.com/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/bay-view-milwaukee",
    "about": {
      "@type": "Place",
      "name": "Bay View",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milwaukee",
        "addressRegion": "WI",
        "addressCountry": "US"
      }
    }
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  },
  neighborhood: {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Bay View",
    "description": "Bay View is Milwaukee's hip, artsy neighborhood known for creative restaurants, vintage shopping, craft beer, and lakefront access at South Shore Park.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.9972",
      "longitude": "-87.9017"
    },
    "containedInPlace": {
      "@type": "City",
      "name": "Milwaukee"
    }
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://discover-milwaukee.com/neighborhoods" },
      { "@type": "ListItem", "position": 3, "name": "Bay View Milwaukee", "item": "https://discover-milwaukee.com/bay-view-milwaukee" }
    ]
  }
};

export default function BayViewMilwaukee() {
  const RestaurantCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {spot.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.type}</span>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.vibe}</p>
        </div>
      </div>
      <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}, Milwaukee, WI</p>
    </div>
  );

  const BarCard = ({ bar }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{bar.name}</h3>
        <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{bar.type}</span>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{bar.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>KNOWN FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.highlight}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.vibe}</p>
        </div>
      </div>
      <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{bar.address}, Milwaukee, WI</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Bay View Milwaukee Neighborhood Guide 2026 | Restaurants, Bars & Things to Do</title>
        <meta name="description" content="Explore Bay View, Milwaukee's hip artsy neighborhood. Best restaurants (Odd Duck, Honeypie, Birch), craft beer at Sugar Maple, vintage shopping on KK Ave, South Shore Park, and street art. Complete local guide." />
        <meta name="keywords" content="bay view milwaukee, bay view neighborhood, kinnickinnic avenue, KK ave milwaukee, bay view restaurants, odd duck milwaukee, sugar maple milwaukee, south shore park, milwaukee neighborhoods, bay view bars, bay view coffee shops" />
        <link rel="canonical" href="https://discover-milwaukee.com/bay-view-milwaukee" />

        {/* Open Graph */}
        <meta property="og:title" content="Bay View Milwaukee Neighborhood Guide 2026 | The Complete Local Guide" />
        <meta property="og:description" content="Discover Bay View, Milwaukee's hip artsy neighborhood. Best restaurants, craft beer bars, vintage shopping, South Shore Park, and street art. Written by locals." />
        <meta property="og:url" content="https://discover-milwaukee.com/bay-view-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content="2026-04-15" />
        <meta property="article:section" content="Neighborhoods" />
        <meta property="article:tag" content="Bay View" />
        <meta property="article:tag" content="Milwaukee Neighborhoods" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bay View Milwaukee Neighborhood Guide 2026" />
        <meta name="twitter:description" content="Milwaukee's hip artsy neighborhood: restaurants, bars, vintage shops, and lakefront vibes." />

        {/* Additional SEO */}
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.neighborhood) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        {/* Navigation */}
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>
              DISCOVER MILWAUKEE
            </Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>NEIGHBORHOOD GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.1 }}>
              Bay View
            </h1>
            <p style={{ color: c.yellow, fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
              Milwaukee's Hip, Artsy, Creative Heart
            </p>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Vintage shops, boundary-pushing restaurants, craft beer havens, and a lakefront park. Bay View is where Milwaukee's creative class lives, eats, and plays.
            </p>
          </div>
        </header>

        {/* Quick Navigation */}
        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#overview" style={{ color: c.green2, fontSize: "14px" }}>Overview</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Restaurants</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#bars" style={{ color: c.green2, fontSize: "14px" }}>Bars</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#coffee" style={{ color: c.green2, fontSize: "14px" }}>Coffee</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#vintage" style={{ color: c.green2, fontSize: "14px" }}>Vintage Shopping</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#outdoors" style={{ color: c.green2, fontSize: "14px" }}>South Shore Park</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#street-art" style={{ color: c.green2, fontSize: "14px" }}>Street Art</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Overview Section */}
          <section id="overview" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Welcome to Bay View</h2>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", border: `1px solid ${c.beige}`, marginBottom: "24px" }}>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                <strong>Bay View is Milwaukee's answer to Brooklyn</strong>—a neighborhood where artists, musicians, chefs, and young professionals have created something genuinely special. Located along the lakefront south of downtown, this former working-class neighborhood has transformed into the city's most creative enclave while maintaining its unpretentious, welcoming character.
              </p>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                The heart of Bay View is <strong>Kinnickinnic Avenue</strong> (locals call it "KK Ave"), a walkable stretch of independent restaurants, vintage shops, coffee roasters, and bars. Unlike Milwaukee's more polished Third Ward, Bay View has an edge—murals cover building sides, bands play in small venues, and conversation flows easily between strangers at neighborhood bars.
              </p>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
                Add in <strong>South Shore Park</strong> with its lakefront beach, beer garden, and stunning views, and you've got a neighborhood that offers everything you need without ever getting in a car. It's no wonder this is where Milwaukee's tastemakers choose to live.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.orange, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: "white", fontSize: "24px", fontWeight: "800", margin: 0 }}>Hip</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>Creative Energy</p>
              </div>
              <div style={{ backgroundColor: c.green2, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: "white", fontSize: "24px", fontWeight: "800", margin: 0 }}>Walkable</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>KK Ave Strip</p>
              </div>
              <div style={{ backgroundColor: c.yellow, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: c.green1, fontSize: "24px", fontWeight: "800", margin: 0 }}>Lakefront</p>
                <p style={{ color: "rgba(26,61,52,0.7)", fontSize: "12px", margin: 0 }}>South Shore Park</p>
              </div>
              <div style={{ backgroundColor: c.green1, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: c.cream, fontSize: "24px", fontWeight: "800", margin: 0 }}>Artsy</p>
                <p style={{ color: "rgba(250,248,245,0.7)", fontSize: "12px", margin: 0 }}>Murals & Music</p>
              </div>
            </div>
          </section>

          {/* Restaurants Section */}
          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Restaurants in Bay View</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bay View's dining scene punches way above its weight. From globally-inspired small plates at Odd Duck to Michelin-quality tasting menus at Birch, these are restaurants that would be destination-worthy in any city—but here they're your neighborhood spots.
            </p>
            {spots.restaurants.map((spot, i) => <RestaurantCard key={i} spot={spot} />)}
            <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Planning a food crawl? Check out our <Link href="/best-restaurants-milwaukee" style={{ color: c.green1, fontWeight: "800" }}>Best Restaurants in Milwaukee</Link> guide for more Bay View picks and citywide favorites.
              </p>
            </div>
          </section>

          {/* Bars Section */}
          <section id="bars" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Bars in Bay View</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From one of the country's best craft beer bars to fire pit cocktails, Bay View's drinking scene is as creative as its food. Skip the downtown crowds—this is where locals actually hang out.
            </p>
            {spots.bars.map((bar, i) => <BarCard key={i} bar={bar} />)}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "20px" }}>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Also Worth Checking Out</h4>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555", fontSize: "14px" }}>
                  <li>Burnhearts - Dive bar energy, great jukebox</li>
                  <li>Blackbird - Intimate cocktails</li>
                  <li>At Random - Tiki drinks, old-school cool</li>
                  <li>D14 Brewery - Neighborhood brewery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Coffee Section */}
          <section id="coffee" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Coffee Shops in Bay View</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bay View takes its coffee seriously. Milwaukee's best local roasters all have outposts here, and the neighborhood's creative energy makes every shop a good place to work, read, or people-watch.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {spots.coffeeShops.map((shop, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>{shop.name}</h3>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{shop.description}</p>
                  <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>{shop.highlight}</p>
                  <p style={{ color: "#888", fontSize: "12px", marginTop: "8px", marginBottom: 0 }}>{shop.address}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Vintage Shopping Section */}
          <section id="vintage" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Vintage Shopping on Kinnickinnic Ave</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              KK Ave is Milwaukee's best vintage hunting ground. From mid-century furniture to perfectly worn-in leather jackets, Bay View's shops attract thrifters from across the Midwest. The best part? Prices haven't caught up to the quality.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {spots.vintageShops.map((shop, i) => (
                <div key={i} style={{ backgroundColor: c.cream, padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>{shop.name}</h3>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{shop.description}</p>
                  <p style={{ color: "#888", fontSize: "12px", margin: 0 }}>{shop.address}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                <span style={{ color: c.orange, fontWeight: "700" }}>Pro tip:</span> Hit the shops on a weekday morning for the best selection. Weekend afternoons get crowded with serious vintage hunters.
              </p>
            </div>
          </section>

          {/* South Shore Park Section */}
          <section id="outdoors" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>South Shore Park & the Lakefront</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bay View's crown jewel is its lakefront access. South Shore Park offers beaches, trails, and one of Milwaukee's best beer gardens—all with stunning Lake Michigan views.
            </p>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", border: `1px solid ${c.beige}`, marginBottom: "20px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "16px" }}>South Shore Park Highlights</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                <div>
                  <h4 style={{ color: c.orange, fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>SOUTH SHORE BEACH</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>One of Milwaukee's best urban beaches. Swim, sunbathe, or just watch the sailboats. Less crowded than Bradford Beach with more of a neighborhood feel.</p>
                </div>
                <div>
                  <h4 style={{ color: c.green2, fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>BEER GARDEN</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>The South Shore Terrace beer garden offers cold beers and stunning lake views. Perfect for summer sunsets. Operated by the county parks system.</p>
                </div>
                <div>
                  <h4 style={{ color: c.green1, fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>OAK LEAF TRAIL</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>The Oak Leaf Trail runs right through, connecting Bay View to downtown and points south. Perfect for running, biking, or a lakefront walk.</p>
                </div>
                <div>
                  <h4 style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>PAVILION & EVENTS</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>The historic pavilion hosts summer concerts and community events. Check the county parks calendar for what's happening during your visit.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Street Art Section */}
          <section id="street-art" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bay View Street Art & Murals</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bay View's creative spirit shows on its walls. Murals cover building sides throughout the neighborhood, turning a casual walk into an outdoor gallery experience.
            </p>
            <div style={{ backgroundColor: c.green1, padding: "24px", borderRadius: "16px", marginBottom: "20px" }}>
              <h3 style={{ color: c.yellow, fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>Self-Guided Mural Walk</h3>
              <div style={{ color: c.cream, fontSize: "15px", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "12px" }}>Start at <strong>Kinnickinnic & Lincoln</strong> and walk south on KK Ave. Keep your eyes on building sides, alleys, and parking lots—murals pop up everywhere. Key spots include:</p>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>The large-scale murals near <strong>Odd Duck</strong></li>
                  <li>Colorful pieces in the alley behind <strong>Colectivo</strong></li>
                  <li>Community murals on <strong>Potter Ave</strong></li>
                  <li>The rotating walls near <strong>Sugar Maple</strong></li>
                </ul>
                <p style={{ marginTop: "12px", marginBottom: 0 }}>The neighborhood adds new murals regularly, so even repeat visitors will find something new.</p>
              </div>
            </div>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>
              Bay View also hosts <strong>Bay View Gallery Night</strong> several times a year, when neighborhood galleries, studios, and businesses open their doors for a community art walk. Check local listings for upcoming dates.
            </p>
          </section>

          {/* Kinnickinnic Ave Feature */}
          <section style={{ marginBottom: "48px" }}>
            <div style={{ backgroundColor: c.orange, padding: "32px", borderRadius: "16px" }}>
              <h2 style={{ color: "white", fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The KK Ave Experience</h2>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
                Kinnickinnic Avenue is the spine of Bay View. A walkable two-mile stretch from Lincoln Avenue south, this is where the neighborhood's best restaurants, shops, and bars cluster. Park once and spend an entire day wandering.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
                <div style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "16px", borderRadius: "10px" }}>
                  <p style={{ color: "white", fontWeight: "700", marginBottom: "4px" }}>Morning</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", margin: 0 }}>Colectivo coffee, vintage shopping</p>
                </div>
                <div style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "16px", borderRadius: "10px" }}>
                  <p style={{ color: "white", fontWeight: "700", marginBottom: "4px" }}>Afternoon</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", margin: 0 }}>Lunch at Honeypie, more browsing</p>
                </div>
                <div style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "16px", borderRadius: "10px" }}>
                  <p style={{ color: "white", fontWeight: "700", marginBottom: "4px" }}>Evening</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", margin: 0 }}>Odd Duck dinner, Sugar Maple beers</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Neighborhoods */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Explore More Milwaukee Neighborhoods</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Third Ward →
              </Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Walker's Point →
              </Link>
              <Link href="/east-side-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                East Side →
              </Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.yellow, color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                All Things to Do →
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions About Bay View</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* Newsletter CTA */}
          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Bay View Updates & Milwaukee Tips</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px", maxWidth: "500px", margin: "0 auto 20px" }}>
              New restaurant openings, neighborhood events, and insider tips delivered every Wednesday. Join 10,000+ Milwaukee locals.
            </p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", marginBottom: "16px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
            <Link href="/explore" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Explore</Link>
            <Link href="/best-restaurants-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Best Restaurants</Link>
            <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
            <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
            <Link href="/newsletter" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Newsletter</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
