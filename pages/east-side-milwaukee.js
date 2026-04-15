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

// East Side places and landmarks
const sections = {
  bradyStreet: {
    description: "Brady Street is Milwaukee's most eclectic neighborhood strip—a six-block stretch of independent shops, dive bars, Italian delis, and late-night eats. It's where old-school Milwaukee meets young creative energy. The street has maintained its independent spirit for decades while constantly evolving.",
    bars: [
      {
        name: "Wolski's Tavern",
        type: "Dive Bar",
        description: "Milwaukee's most legendary dive bar. If you close Wolski's, you get a bumper sticker—a badge of honor for locals. Cash only, cheap drinks, and 70+ years of history.",
        highlight: "The 'I Closed Wolski's' bumper sticker tradition",
      },
      {
        name: "The Nomad World Pub",
        type: "Soccer Bar",
        description: "A global soccer bar with over 100 beers and a loyal following. Watch matches from around the world, grab a pint, and soak in the international atmosphere.",
        highlight: "Match day energy during Premier League and World Cup",
      },
      {
        name: "Hi-Hat Lounge",
        type: "Cocktail Bar",
        description: "A retro-cool cocktail lounge with vintage vibes and excellent drinks. Perfect for a date night or a classy nightcap on Brady Street.",
        highlight: "Classic cocktails in a mid-century modern setting",
      },
      {
        name: "Roman's Pub",
        type: "Beer Bar",
        description: "A craft beer destination with one of the best tap lists in Milwaukee. Small, cozy, and serious about beer. A must for hop heads.",
        highlight: "30+ rotating craft taps from around the world",
      },
    ],
    restaurants: [
      {
        name: "Glorioso's Italian Market",
        type: "Italian Deli",
        priceRange: "$",
        description: "A Brady Street institution since 1946. Fresh pasta, imported Italian goods, incredible sandwiches, and a full-service deli. This is old Milwaukee at its finest.",
        mustTry: "Italian sub, fresh mozzarella, housemade pasta",
      },
      {
        name: "Centro Café",
        type: "Italian",
        priceRange: "$$",
        description: "Upscale Italian in the heart of Brady Street. Handmade pasta, wood-fired dishes, and a lively atmosphere. Great for groups or date nights.",
        mustTry: "Housemade pasta, wood-fired pizzas",
      },
      {
        name: "Pizza Man",
        type: "Pizza",
        priceRange: "$",
        description: "A Brady Street institution for deep dish and thin crust pizza. Late-night go-to for locals leaving the bars. The building is part of Brady Street's history.",
        mustTry: "Deep dish pizza, breadsticks",
      },
      {
        name: "Balzac Wine Bar",
        type: "Wine Bar",
        priceRange: "$$",
        description: "An intimate wine bar with European flair. Small plates, excellent wine selection, and a cozy atmosphere perfect for conversation.",
        mustTry: "Wine flights, cheese boards",
      },
    ],
    shops: [
      { name: "Rochambo Coffee & Tea", type: "Coffee Shop", description: "Brady Street's best coffee shop. Local roasts, cozy seating, and great people-watching." },
      { name: "Antiques on Brady", type: "Antiques", description: "Vintage finds, mid-century furniture, and unique collectibles." },
      { name: "Broadway Paper", type: "Stationery", description: "Beautiful paper goods, cards, and gifts with a focus on local artists." },
    ],
  },
  downerAve: {
    description: "Downer Avenue is the more residential, family-friendly side of the East Side. Tree-lined streets, independent bookstores, classic movie theaters, and neighborhood restaurants make this a beloved stretch for UWM students and longtime residents alike.",
    highlights: [
      {
        name: "Boswell Book Company",
        type: "Independent Bookstore",
        description: "Milwaukee's beloved independent bookstore. Author events, curated selections, and knowledgeable staff. A community anchor on Downer.",
      },
      {
        name: "Downer Theatre",
        type: "Historic Theater",
        description: "An Art Deco gem showing independent and foreign films since 1915. One of Milwaukee's last single-screen theaters.",
      },
      {
        name: "Beans & Barley",
        type: "Health Food",
        description: "A Downer Avenue institution for vegetarian-friendly food, a full grocery market, and excellent deli. A locals' favorite since 1972.",
      },
      {
        name: "Lisa's Pizzeria",
        type: "Pizza",
        description: "Thin-crust pizza and Italian classics in a cozy neighborhood setting. A Downer Avenue staple for decades.",
      },
    ],
  },
  restaurants: [
    {
      name: "Sanford Restaurant",
      neighborhood: "Lower East Side",
      cuisine: "American Fine Dining",
      priceRange: "$$$$",
      address: "1547 N Jackson St, Milwaukee, WI 53202",
      description: "Milwaukee's finest dining experience and the city's strongest Michelin contender. Chef Justin Aprahamian delivers impeccable tasting menus with precision and creativity. The intimate 40-seat dining room sets the stage for dishes that showcase Wisconsin ingredients at their absolute finest.",
      mustTry: "Chef's Tasting Menu, Foie Gras preparation",
      bestFor: "Special occasions, anniversary dinners, impressing out-of-town guests",
    },
    {
      name: "Glorioso's Italian Market",
      neighborhood: "Brady Street",
      cuisine: "Italian Deli",
      priceRange: "$",
      address: "1011 E Brady St, Milwaukee, WI 53202",
      description: "A family-run Italian market and deli since 1946. Fresh pasta, imported meats and cheeses, incredible sandwiches, and authentic Italian groceries. This is where Milwaukee's Italian heritage lives on.",
      mustTry: "Italian sub, fresh mozzarella, imported olive oils",
      bestFor: "Quick lunch, grocery shopping, authentic Italian products",
    },
    {
      name: "EsterEv",
      neighborhood: "Lower East Side",
      cuisine: "Tasting Menu",
      priceRange: "$$$$",
      address: "2150 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "An intimate tasting-menu-only experience from the Odd Duck team. Twelve seats, one seating, and a menu that changes with the seasons. One of the most unique dining experiences in the Midwest.",
      mustTry: "The full tasting menu experience",
      bestFor: "Adventurous foodies, special celebrations, unique experiences",
    },
  ],
  bars: [
    {
      name: "Wolski's Tavern",
      neighborhood: "Brady Street",
      type: "Legendary Dive Bar",
      address: "1836 N Pulaski St, Milwaukee, WI 53202",
      description: "The most famous dive bar in Milwaukee. Wolski's has been serving cheap drinks since 1908. Close the bar and earn the legendary 'I Closed Wolski's' bumper sticker—a Milwaukee rite of passage. Cash only.",
      vibe: "Authentic dive bar, cash only, legendary",
      bestFor: "Late nights, Milwaukee traditions, dive bar enthusiasts",
    },
    {
      name: "The Nomad World Pub",
      neighborhood: "Brady Street",
      type: "Soccer Bar",
      address: "1401 E Brady St, Milwaukee, WI 53202",
      description: "Milwaukee's premier soccer bar with a global beer selection. Over 100 beers, multiple screens, and a passionate crowd during international matches. Also a great spot for world music and cultural events.",
      vibe: "International, energetic during matches, diverse crowd",
      bestFor: "Soccer fans, beer enthusiasts, international atmosphere",
    },
    {
      name: "Burnhearts",
      neighborhood: "Lower East Side",
      type: "Neighborhood Bar",
      address: "2599 S Logan Ave, Milwaukee, WI 53207",
      description: "A beloved neighborhood bar known for excellent cocktails, craft beer, and the legendary Mitten Fest in winter. Cozy vibes and a local crowd.",
      vibe: "Cozy, local favorite, great cocktails",
      bestFor: "Craft cocktails, casual nights, supporting local",
    },
    {
      name: "Bryant's Cocktail Lounge",
      neighborhood: "Near East Side",
      type: "Classic Cocktail Lounge",
      address: "1579 S 9th St, Milwaukee, WI 53204",
      description: "Milwaukee's oldest cocktail lounge, operating since 1938. No menu—tell the bartender what you like and they'll craft something perfect. A speakeasy vibe with velvet booths and ice cream drinks.",
      vibe: "Vintage, intimate, no-menu cocktails",
      bestFor: "Cocktail lovers, unique experiences, date nights",
    },
  ],
  landmarks: [
    {
      name: "Oriental Theatre",
      category: "Historic Theater",
      description: "A stunning 1927 movie palace featuring East Indian-inspired architecture, complete with lions, elephants, and intricate details. One of the most beautiful theaters in America, now showing independent and classic films. The Midnight Movies series is legendary.",
      highlight: "Midnight Movies on Fridays and Saturdays",
      address: "2230 N Farwell Ave, Milwaukee, WI 53202",
    },
    {
      name: "Lake Park",
      category: "Park",
      description: "A Frederick Law Olmsted-designed park stretching along Lake Michigan's bluffs. Hiking trails, a ravine, beer garden, golf course, and stunning lakefront views. One of Milwaukee's most beautiful green spaces.",
      highlight: "Lake Park Bistro, sunset views from the bluffs",
      address: "3233 E Kenwood Blvd, Milwaukee, WI 53211",
    },
    {
      name: "North Point Lighthouse",
      category: "Historic Landmark",
      description: "A working lighthouse built in 1888, now a museum. Climb the tower for panoramic views of Lake Michigan and the Milwaukee skyline. A hidden gem that most tourists miss.",
      highlight: "Tower climbs with 360-degree views",
      address: "2650 N Wahl Ave, Milwaukee, WI 53211",
    },
    {
      name: "UWM Campus & Environs",
      category: "University",
      description: "The University of Wisconsin-Milwaukee brings youthful energy to the neighborhood. The campus features interesting architecture, and the surrounding area has affordable eats, coffee shops, and a college-town vibe.",
      highlight: "Colectivo on Prospect, student-friendly restaurants",
      address: "2200 E Kenwood Blvd, Milwaukee, WI 53211",
    },
    {
      name: "Bradford Beach",
      category: "Beach",
      description: "Milwaukee's most popular urban beach. Volleyball courts, tiki bars, and Lake Michigan swimming. Summer weekends bring out the whole city. A quintessential Milwaukee summer experience.",
      highlight: "Volleyball leagues, summer beach parties",
      address: "2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
    },
  ],
};

// FAQ data for schema markup
const faqs = [
  {
    question: "What is the East Side of Milwaukee known for?",
    answer: "Milwaukee's East Side is known for Brady Street's eclectic bars and restaurants, the historic Oriental Theatre, Lake Park, vibrant nightlife, and a mix of young professionals and longtime residents. It's one of Milwaukee's most walkable neighborhoods with a strong independent spirit."
  },
  {
    question: "Is Brady Street in Milwaukee safe?",
    answer: "Yes, Brady Street is generally safe and well-traveled, especially during evenings when bars and restaurants are busy. Like any urban area, basic awareness is recommended late at night. The street is well-lit and popular with locals and visitors year-round."
  },
  {
    question: "What are the best bars on Brady Street Milwaukee?",
    answer: "The best Brady Street bars include Wolski's Tavern (legendary dive bar where you can earn an 'I Closed Wolski's' bumper sticker), The Nomad World Pub (soccer bar with 100+ beers), Hi-Hat Lounge (craft cocktails), and Roman's Pub (craft beer destination). The strip offers everything from dive bars to wine bars."
  },
  {
    question: "Where should I eat on the East Side of Milwaukee?",
    answer: "Top East Side dining includes Sanford Restaurant (Milwaukee's best fine dining), Glorioso's Italian Market (iconic deli since 1946), Centro Café (Italian), Pizza Man (late-night pizza), and Beans & Barley on Downer Avenue (vegetarian-friendly). The neighborhood offers everything from quick bites to special-occasion dining."
  },
  {
    question: "What is there to do on Milwaukee's East Side?",
    answer: "East Side Milwaukee offers the Oriental Theatre (historic movie palace), Lake Park (Olmsted-designed park with lake views), North Point Lighthouse (museum with tower climbs), Brady Street shopping and dining, Downer Avenue's independent shops, Bradford Beach, and some of Milwaukee's best nightlife."
  },
  {
    question: "Is the East Side a good neighborhood to live in Milwaukee?",
    answer: "The East Side is one of Milwaukee's most desirable neighborhoods, especially for young professionals, students, and those who want walkability. It offers easy access to the lakefront, vibrant nightlife, diverse dining, and a mix of historic apartments and newer developments. Rent tends to be higher than other Milwaukee neighborhoods."
  },
];

// Structured data for SEO
const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "East Side Milwaukee Neighborhood Guide 2026: Brady Street, Bars, Restaurants & Things to Do",
    "description": "Complete guide to Milwaukee's East Side neighborhood including Brady Street bars, best restaurants like Sanford and Glorioso's, the Oriental Theatre, Lake Park, and local tips.",
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
    "mainEntityOfPage": "https://discover-milwaukee.com/east-side-milwaukee",
    "about": {
      "@type": "Place",
      "name": "East Side Milwaukee",
      "description": "A vibrant neighborhood in Milwaukee, Wisconsin known for Brady Street, the Oriental Theatre, and Lake Park",
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
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://discover-milwaukee.com/explore" },
      { "@type": "ListItem", "position": 3, "name": "East Side Milwaukee", "item": "https://discover-milwaukee.com/east-side-milwaukee" }
    ]
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "East Side Milwaukee Restaurants and Bars",
    "description": "Top restaurants and bars in Milwaukee's East Side neighborhood",
    "itemListElement": [
      ...sections.restaurants.map((r, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Restaurant",
          "name": r.name,
          "address": r.address,
          "priceRange": r.priceRange,
          "servesCuisine": r.cuisine
        }
      })),
      ...sections.bars.map((b, i) => ({
        "@type": "ListItem",
        "position": sections.restaurants.length + i + 1,
        "item": {
          "@type": "BarOrPub",
          "name": b.name,
          "address": b.address
        }
      }))
    ]
  }
};

export default function EastSideMilwaukee() {
  const RestaurantCard = ({ restaurant }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{restaurant.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>{restaurant.cuisine}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{restaurant.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.bestFor}</p>
        </div>
      </div>
      {restaurant.address && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{restaurant.address}</p>
      )}
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
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{bar.type}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{bar.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{bar.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.vibe}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.bestFor}</p>
        </div>
      </div>
      <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{bar.address}</p>
    </div>
  );

  const LandmarkCard = ({ landmark }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{landmark.name}</h3>
        <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{landmark.category}</span>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{landmark.description}</p>
      <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{landmark.highlight}</p>
      </div>
      <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{landmark.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>East Side Milwaukee Neighborhood Guide 2026 | Brady Street, Bars & Restaurants</title>
        <meta name="description" content="Explore Milwaukee's East Side: Brady Street bars and restaurants, the Oriental Theatre, Sanford fine dining, Glorioso's deli, Wolski's Tavern, Lake Park, and local tips. Complete 2026 guide." />
        <meta name="keywords" content="east side milwaukee, brady street milwaukee, brady street bars, wolski's tavern, oriental theatre milwaukee, sanford restaurant milwaukee, glorioso's milwaukee, lake park milwaukee, milwaukee nightlife, best bars brady street, milwaukee neighborhoods" />
        <link rel="canonical" href="https://discover-milwaukee.com/east-side-milwaukee" />

        {/* Open Graph */}
        <meta property="og:title" content="East Side Milwaukee Neighborhood Guide 2026 | Brady Street, Bars & Things to Do" />
        <meta property="og:description" content="Your insider guide to Milwaukee's East Side. Brady Street bars, the best restaurants, Oriental Theatre, Lake Park, and why locals love this neighborhood." />
        <meta property="og:url" content="https://discover-milwaukee.com/east-side-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content="2026-04-15" />
        <meta property="article:section" content="Neighborhoods" />
        <meta property="article:tag" content="East Side Milwaukee" />
        <meta property="article:tag" content="Brady Street" />
        <meta property="article:tag" content="Milwaukee Bars" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="East Side Milwaukee Guide 2026" />
        <meta name="twitter:description" content="Brady Street bars, restaurants, Oriental Theatre, and more in Milwaukee's East Side." />

        {/* Additional SEO */}
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }} />
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
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              East Side Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Where Brady Street's eclectic energy meets lakefront beauty. Dive bars, fine dining, historic theaters, and one of Milwaukee's most walkable neighborhoods.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>IN THIS GUIDE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#overview" style={{ color: c.green2, fontSize: "14px" }}>Overview</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#brady-street" style={{ color: c.green2, fontSize: "14px" }}>Brady Street</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#downer-avenue" style={{ color: c.green2, fontSize: "14px" }}>Downer Avenue</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Best Restaurants</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#bars" style={{ color: c.green2, fontSize: "14px" }}>Bars</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#landmarks" style={{ color: c.green2, fontSize: "14px" }}>Things to Do</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Overview */}
          <section id="overview" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Milwaukee's East Side: The Complete Guide</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              The East Side is one of Milwaukee's most dynamic neighborhoods—a stretch running from Brady Street's bar-lined blocks up through the tree-lined streets near UWM and along the Lake Michigan shoreline. It's where college students, young professionals, longtime residents, and visitors all mix together.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              <strong>Brady Street</strong> is the heart of the action—six blocks of independent restaurants, dive bars, Italian delis, and late-night energy. It's eclectic, unpretentious, and unapologetically Milwaukee. Meanwhile, <strong>Downer Avenue</strong> offers a quieter, more residential vibe with bookstores, neighborhood cafes, and the beloved Oriental Theatre.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>
              The East Side also includes the stunning <strong>Lake Park</strong>, designed by Frederick Law Olmsted, and <strong>Bradford Beach</strong>—Milwaukee's urban beach. Add in some of the city's best restaurants (including Michelin-worthy Sanford) and you have one of the most complete neighborhoods in the Midwest.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}`, textAlign: "center" }}>
                <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: "0 0 4px 0" }}>6</p>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Blocks of Brady St</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}`, textAlign: "center" }}>
                <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: "0 0 4px 0" }}>100+</p>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Years of Wolski's</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}`, textAlign: "center" }}>
                <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: "0 0 4px 0" }}>1927</p>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Oriental Theatre Built</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}`, textAlign: "center" }}>
                <p style={{ fontSize: "24px", fontWeight: "900", color: c.green1, margin: "0 0 4px 0" }}>138</p>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Acres of Lake Park</p>
              </div>
            </div>
          </section>

          {/* Brady Street */}
          <section id="brady-street" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Brady Street: The Heart of the East Side</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              {sections.bradyStreet.description}
            </p>

            {/* Brady Street Bars */}
            <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", marginBottom: "16px" }}>Best Bars on Brady Street</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "32px" }}>
              {sections.bradyStreet.bars.map((bar, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h4 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{bar.name}</h4>
                    <span style={{ backgroundColor: c.orange, color: "white", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "600" }}>{bar.type}</span>
                  </div>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{bar.description}</p>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "6px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "2px" }}>HIGHLIGHT</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{bar.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brady Street Restaurants */}
            <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", marginBottom: "16px" }}>Where to Eat on Brady Street</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "32px" }}>
              {sections.bradyStreet.restaurants.map((restaurant, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h4 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{restaurant.name}</h4>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{ backgroundColor: c.green2, color: "white", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "600" }}>{restaurant.type}</span>
                      <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{restaurant.priceRange}</span>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{restaurant.description}</p>
                  <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "10px", borderRadius: "6px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>MUST TRY</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{restaurant.mustTry}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brady Street Shops */}
            <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", marginBottom: "16px" }}>Shopping on Brady Street</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              {sections.bradyStreet.shops.map((shop, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "16px", borderRadius: "10px", border: `1px solid ${c.beige}` }}>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{shop.name}</h4>
                  <p style={{ color: c.orange, fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>{shop.type}</p>
                  <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>{shop.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Downer Avenue */}
          <section id="downer-avenue" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Downer Avenue</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              {sections.downerAve.description}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {sections.downerAve.highlights.map((place, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{place.name}</h3>
                    <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{place.type}</span>
                  </div>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{place.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best Restaurants */}
          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Restaurants on Milwaukee's East Side</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From Milwaukee's most acclaimed fine dining to beloved neighborhood institutions, the East Side delivers at every price point.
            </p>
            {sections.restaurants.map((restaurant, i) => <RestaurantCard key={i} restaurant={restaurant} />)}
            <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Looking for more options? See our complete <Link href="/best-restaurants-milwaukee" style={{ color: c.green1, fontWeight: "800" }}>Best Restaurants in Milwaukee</Link> guide.
              </p>
            </div>
          </section>

          {/* Bars */}
          <section id="bars" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Bars on Milwaukee's East Side</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From legendary dive bars to craft cocktail lounges, the East Side has some of Milwaukee's most iconic watering holes.
            </p>
            {sections.bars.map((bar, i) => <BarCard key={i} bar={bar} />)}
          </section>

          {/* Landmarks and Things to Do */}
          <section id="landmarks" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Things to Do on Milwaukee's East Side</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Beyond the bars and restaurants, the East Side offers historic theaters, beautiful parks, and lakefront access that rivals any major city.
            </p>
            {sections.landmarks.map((landmark, i) => <LandmarkCard key={i} landmark={landmark} />)}
          </section>

          {/* Related Guides */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Explore More Milwaukee Neighborhoods</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Third Ward Guide →
              </Link>
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Bay View Guide →
              </Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Walker's Point Guide →
              </Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.yellow, color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Things to Do →
              </Link>
            </div>
          </section>

          {/* More Guides */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: "white", color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center", border: `1px solid ${c.beige}` }}>
                Best Restaurants
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: "white", color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center", border: `1px solid ${c.beige}` }}>
                Best Brunch Spots
              </Link>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: "white", color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center", border: `1px solid ${c.beige}` }}>
                Best Patios
              </Link>
              <Link href="/events" style={{ display: "block", backgroundColor: "white", color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center", border: `1px solid ${c.beige}` }}>
                Events Calendar
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions About East Side Milwaukee</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* Newsletter CTA */}
          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly East Side Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New bars, restaurant openings, events on Brady Street, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
            <Link href="/explore" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Explore</Link>
            <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
            <Link href="/best-restaurants-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Restaurants</Link>
            <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
