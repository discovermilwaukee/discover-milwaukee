import React from "react";
import Head from "next/head";
import Link from "next/link";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

// Third Ward venue and content data
const restaurants = [
  {
    name: "Café Benelux",
    cuisine: "Belgian-European",
    priceRange: "$$",
    address: "346 N Broadway, Milwaukee, WI 53202",
    description: "The quintessential Third Ward experience. This Belgian brasserie serves mussels, frites, and an impressive Belgian beer list in a stunning multi-level space. The rooftop is arguably Milwaukee's best—panoramic views of the neighborhood with heated igloos in winter.",
    mustTry: "Moules Frites, Belgian waffles for brunch, extensive Belgian beer selection",
    bestFor: "Rooftop drinks, date nights, weekend brunch",
    insiderTip: "Book the rooftop for sunset. Winter igloos require reservations weeks in advance.",
  },
  {
    name: "Harbor House",
    cuisine: "Seafood",
    priceRange: "$$$",
    address: "550 N Harbor Dr, Milwaukee, WI 53202",
    description: "Milwaukee's premier seafood destination with stunning lakefront views. Part of the Bartolotta family of restaurants, Harbor House delivers fresh catches daily with impeccable preparation. The outdoor patio overlooking the harbor is unmatched.",
    mustTry: "Fresh oysters, Lake Superior whitefish, lobster roll",
    bestFor: "Special occasions, business dinners, lakefront dining",
    insiderTip: "Request a window table at sunset. The raw bar happy hour is exceptional value.",
  },
  {
    name: "Merriment Social",
    cuisine: "New American",
    priceRange: "$$",
    address: "240 E Pittsburgh Ave, Milwaukee, WI 53204",
    description: "A lively spot bringing creative American fare and craft cocktails to the Third Ward. The industrial-chic space buzzes with energy, and the menu balances comfort and creativity. Perfect for groups who want quality without pretension.",
    mustTry: "Signature cocktails, shareable plates, weekend brunch",
    bestFor: "Happy hour, group dinners, casual celebrations",
    insiderTip: "Their happy hour deals are some of the best in the neighborhood.",
  },
  {
    name: "Onesto",
    cuisine: "Italian",
    priceRange: "$$",
    address: "221 N Broadway, Milwaukee, WI 53202",
    description: "Rustic Italian cooking in a cozy, brick-walled space. House-made pastas, wood-fired pizzas, and an approachable Italian wine list make this a neighborhood go-to. The atmosphere strikes the perfect balance between casual and special.",
    mustTry: "House-made pasta, Margherita pizza, tiramisu",
    bestFor: "Date nights, family dinners, Italian cravings",
    insiderTip: "Sit at the bar for a more casual experience and great people-watching.",
  },
  {
    name: "Water Buffalo",
    cuisine: "American Bar & Grill",
    priceRange: "$$",
    address: "249 N Water St, Milwaukee, WI 53202",
    description: "Upscale pub fare meets craft cocktails in this stylish Third Ward spot. Great for a more casual meal or drinks after shopping Broadway. The outdoor seating is perfect for people-watching.",
    mustTry: "Burgers, craft cocktails, loaded fries",
    bestFor: "After-shopping drinks, casual dinners, sports viewing",
    insiderTip: "Check their daily specials—often great deals on drinks.",
  },
  {
    name: "St. Paul Fish Company",
    cuisine: "Seafood",
    priceRange: "$$",
    address: "400 N Water St (Milwaukee Public Market), Milwaukee, WI 53202",
    description: "Located inside Milwaukee Public Market, this fish counter serves the freshest seafood in the city. The lobster rolls are legendary, and the oyster selection rivals coastal cities. Order at the counter and grab a seat.",
    mustTry: "Lobster roll, fresh oysters, clam chowder",
    bestFor: "Quick lunch, seafood lovers, market grazing",
    insiderTip: "Go during off-peak hours (2-4pm) to avoid the lunch rush.",
  },
];

const shopping = [
  {
    name: "Broadway (Main Shopping Strip)",
    type: "District",
    description: "The heart of Third Ward shopping. Several blocks of boutiques, home goods stores, galleries, and specialty shops. Start at the Public Market and work your way south.",
    highlights: ["Boutique clothing", "Home décor", "Art galleries", "Gift shops"],
  },
  {
    name: "Anthropologie",
    type: "Fashion & Home",
    description: "Three-story flagship store in a beautifully restored warehouse. One of the most stunning Anthropologie locations in the Midwest.",
    highlights: ["Women's fashion", "Home goods", "Unique gifts"],
  },
  {
    name: "Duluth Trading Company",
    type: "Outdoor & Workwear",
    description: "Large flagship store featuring rugged workwear, outdoor gear, and practical clothing. A Wisconsin favorite.",
    highlights: ["Workwear", "Outdoor gear", "Wisconsin brand"],
  },
  {
    name: "Sparrow Collective",
    type: "Boutique",
    description: "Curated women's clothing and accessories with a bohemian edge. Local favorite for unique pieces you won't find elsewhere.",
    highlights: ["Women's clothing", "Accessories", "Local boutique"],
  },
  {
    name: "Orange & Blue Co",
    type: "Gifts & Home",
    description: "Eclectic gift shop featuring Milwaukee-made goods, quirky home items, and unique souvenirs. Perfect for finding a gift that's actually from Milwaukee.",
    highlights: ["Milwaukee gifts", "Local makers", "Home décor"],
  },
  {
    name: "Broadway Paper",
    type: "Stationery",
    description: "Beautiful stationery, cards, and paper goods. A Third Ward institution for anyone who appreciates the art of handwritten notes.",
    highlights: ["Cards", "Stationery", "Gifts"],
  },
];

const nightlife = [
  {
    name: "The Wicked Hop",
    type: "Craft Beer Bar",
    description: "Extensive craft beer selection with a focus on Wisconsin and Midwest breweries. The outdoor patio is packed on warm evenings.",
    vibe: "Casual, beer-focused",
  },
  {
    name: "Hotel Madrid",
    type: "Cocktail Bar & Restaurant",
    description: "Spanish-inspired cocktails and tapas in a moody, romantic setting. One of the more upscale nightlife options in the area.",
    vibe: "Upscale, romantic",
  },
  {
    name: "Café Benelux Rooftop",
    type: "Rooftop Bar",
    description: "The Third Ward's signature rooftop experience. Views of the neighborhood and downtown skyline. Book ahead on weekends.",
    vibe: "Scenic, trendy",
  },
  {
    name: "Lost Whale",
    type: "Cocktail Bar",
    description: "Craft cocktail bar with a cozy, intimate atmosphere. Creative drinks made by knowledgeable bartenders.",
    vibe: "Intimate, craft cocktail focused",
  },
];

const galleries = [
  {
    name: "Milwaukee Institute of Art & Design (MIAD)",
    description: "College art galleries featuring student and faculty work. Free admission and rotating exhibits throughout the year.",
  },
  {
    name: "Katie Gingrass Gallery",
    description: "Contemporary fine art gallery featuring established and emerging artists. One of Wisconsin's premier art galleries.",
  },
  {
    name: "Portrait Society Gallery",
    description: "Focus on photography and video art. Rotating exhibitions featuring national and international artists.",
  },
  {
    name: "Green Gallery",
    description: "Contemporary art space showing cutting-edge work from artists across the Midwest and beyond.",
  },
];

const faqs = [
  {
    question: "What is the Third Ward in Milwaukee?",
    answer: "The Historic Third Ward is Milwaukee's most upscale and trendy neighborhood, located just south of downtown along the Milwaukee River. Originally a warehouse district, it's been transformed into a vibrant area featuring the Milwaukee Public Market, boutique shopping along Broadway, excellent restaurants, art galleries, and converted loft apartments. It's often compared to SoHo in New York or the Pearl District in Portland."
  },
  {
    question: "Is the Third Ward safe to walk around?",
    answer: "Yes, the Third Ward is one of Milwaukee's safest and most walkable neighborhoods. The streets are well-lit, frequently patrolled, and busy with pedestrians throughout the day and evening. It's popular with tourists and locals alike for casual strolls, shopping, and dining."
  },
  {
    question: "Where should I park in the Third Ward Milwaukee?",
    answer: "The Third Ward has several parking options: street metered parking throughout the neighborhood (free on Sundays), the 3rd Ward Parking Structure on St. Paul Ave, and the Milwaukee Public Market garage. On weekends, arrive early as parking fills quickly. Many locals take rideshare to avoid parking hassles."
  },
  {
    question: "What are the best restaurants in Milwaukee's Third Ward?",
    answer: "Top Third Ward restaurants include Café Benelux (Belgian, best rooftop), Harbor House (upscale seafood), Merriment Social (New American), Onesto (Italian), and St. Paul Fish Company (seafood at Public Market). The neighborhood offers everything from casual market stalls to fine dining, with a focus on quality over quantity."
  },
  {
    question: "Is Milwaukee Public Market worth visiting?",
    answer: "Absolutely. Milwaukee Public Market is the culinary heart of the city. You'll find St. Paul Fish Company's famous oysters and lobster rolls, fresh cheese curds, local coffee roasters, spice shops, bakeries, and more. It's perfect for breakfast, lunch, or grabbing ingredients. Go hungry and graze your way through."
  },
  {
    question: "What is Third Ward Art Walk?",
    answer: "The Third Ward Art Walk is a free event held on the third Friday of each month (Gallery Night). Galleries throughout the neighborhood open their doors with new exhibitions, often with complimentary refreshments. It's a great way to explore the area's art scene and discover new artists in a social atmosphere."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Third Ward Milwaukee Neighborhood Guide 2026: Restaurants, Shopping & Things to Do",
    "description": "Complete insider's guide to Milwaukee's Historic Third Ward. Best restaurants including Café Benelux and Harbor House, Broadway shopping, Milwaukee Public Market, art galleries, nightlife, and parking tips.",
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
    "mainEntityOfPage": "https://discover-milwaukee.com/third-ward-milwaukee",
    "about": {
      "@type": "Place",
      "name": "Historic Third Ward",
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
    "@type": "Neighborhood",
    "name": "Historic Third Ward",
    "description": "Milwaukee's most upscale and trendy neighborhood featuring boutique shopping, acclaimed restaurants, art galleries, and the Milwaukee Public Market.",
    "containedInPlace": {
      "@type": "City",
      "name": "Milwaukee",
      "containedInPlace": {
        "@type": "State",
        "name": "Wisconsin"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.0339",
      "longitude": "-87.9065"
    }
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://discover-milwaukee.com/neighborhoods" },
      { "@type": "ListItem", "position": 3, "name": "Third Ward Milwaukee", "item": "https://discover-milwaukee.com/third-ward-milwaukee" }
    ]
  }
};

export default function ThirdWardMilwaukee() {
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
        <div style={{ display: "flex", gap: "8px" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.cuisine}</span>
        </div>
      </div>
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
      {restaurant.insiderTip && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>INSIDER TIP</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.insiderTip}</p>
        </div>
      )}
      <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{restaurant.address}</p>
    </div>
  );

  const ShopCard = ({ shop }) => (
    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
        <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{shop.name}</h3>
        <span style={{ backgroundColor: c.beige, color: c.green1, padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "600" }}>{shop.type}</span>
      </div>
      <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{shop.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {shop.highlights.map((h, i) => (
          <span key={i} style={{ backgroundColor: "rgba(45,90,74,0.1)", color: c.green2, padding: "4px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "600" }}>{h}</span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Third Ward Milwaukee Guide 2026 | Restaurants, Shopping & Things to Do</title>
        <meta name="description" content="Explore Milwaukee's Historic Third Ward. Best restaurants (Café Benelux, Harbor House), Broadway shopping, Milwaukee Public Market, art galleries, nightlife spots, and insider parking tips. Complete 2026 guide." />
        <meta name="keywords" content="third ward milwaukee, historic third ward, milwaukee public market, third ward restaurants, broadway milwaukee, third ward shopping, cafe benelux, harbor house milwaukee, milwaukee neighborhoods, things to do third ward" />
        <link rel="canonical" href="https://discover-milwaukee.com/third-ward-milwaukee" />

        {/* Open Graph */}
        <meta property="og:title" content="Third Ward Milwaukee: Complete Neighborhood Guide 2026" />
        <meta property="og:description" content="Your insider's guide to Milwaukee's trendiest neighborhood. Best restaurants, boutique shopping, Public Market, galleries, and nightlife in the Historic Third Ward." />
        <meta property="og:url" content="https://discover-milwaukee.com/third-ward-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content="2026-04-15" />
        <meta property="article:section" content="Neighborhoods" />
        <meta property="article:tag" content="Third Ward" />
        <meta property="article:tag" content="Milwaukee Neighborhoods" />
        <meta property="article:tag" content="Milwaukee Restaurants" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Third Ward Milwaukee Guide 2026" />
        <meta name="twitter:description" content="Milwaukee's trendiest neighborhood: restaurants, shopping, Public Market, and nightlife." />

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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>MILWAUKEE NEIGHBORHOOD GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Historic Third Ward
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto" }}>
              Milwaukee's most upscale and walkable neighborhood. Former warehouses transformed into boutiques, acclaimed restaurants, art galleries, and the beloved Milwaukee Public Market. This is where locals go to impress out-of-towners.
            </p>
          </div>
        </header>

        {/* Quick Stats Bar */}
        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "16px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "12px", color: "#888", margin: "0 0 4px 0" }}>VIBE</p>
              <p style={{ fontSize: "14px", color: c.green1, fontWeight: "700", margin: 0 }}>Upscale & Trendy</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "12px", color: "#888", margin: "0 0 4px 0" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, fontWeight: "700", margin: 0 }}>Shopping, Dining, Date Night</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "12px", color: "#888", margin: "0 0 4px 0" }}>WALKABILITY</p>
              <p style={{ fontSize: "14px", color: c.green1, fontWeight: "700", margin: 0 }}>Excellent</p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div style={{ backgroundColor: c.cream, borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK LINKS</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#overview" style={{ color: c.green2, fontSize: "14px" }}>Overview</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Restaurants</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#public-market" style={{ color: c.green2, fontSize: "14px" }}>Public Market</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#shopping" style={{ color: c.green2, fontSize: "14px" }}>Shopping</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nightlife" style={{ color: c.green2, fontSize: "14px" }}>Nightlife</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#galleries" style={{ color: c.green2, fontSize: "14px" }}>Art Galleries</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#parking" style={{ color: c.green2, fontSize: "14px" }}>Parking</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Overview Section */}
          <section id="overview" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>About the Historic Third Ward</h2>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", border: `1px solid ${c.beige}`, marginBottom: "20px" }}>
              <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                The Historic Third Ward is Milwaukee's answer to SoHo or the Pearl District—a former industrial warehouse district that's been transformed into the city's most polished urban neighborhood. Cobblestone streets, exposed brick buildings, and a carefully curated mix of boutiques, restaurants, and galleries create an atmosphere that feels distinctly cosmopolitan while remaining unmistakably Milwaukee.
              </p>
              <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                The neighborhood sits just south of downtown along the Milwaukee River, making it easily walkable from most downtown hotels. The Riverwalk connects through the heart of the district, and you can spend an entire day here without running out of things to do—start with breakfast at the Public Market, shop Broadway, grab lunch at a patio café, explore the galleries, and end with dinner and rooftop drinks.
              </p>
              <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
                This is where Milwaukee shows off. It's where locals bring visitors they want to impress, where couples go for special occasions, and where the city's creative class has carved out a sophisticated urban village. The vibe is upscale but not stuffy—you'll see designer handbags next to vintage finds and fine dining next to casual market stalls.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.green1, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", margin: "0 0 4px 0" }}>75+</p>
                <p style={{ color: c.cream, fontSize: "12px", margin: 0 }}>Shops & Boutiques</p>
              </div>
              <div style={{ backgroundColor: c.green2, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", margin: "0 0 4px 0" }}>40+</p>
                <p style={{ color: c.cream, fontSize: "12px", margin: 0 }}>Restaurants & Cafés</p>
              </div>
              <div style={{ backgroundColor: c.orange, padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: "white", fontSize: "24px", fontWeight: "900", margin: "0 0 4px 0" }}>15+</p>
                <p style={{ color: "white", fontSize: "12px", margin: 0 }}>Art Galleries</p>
              </div>
            </div>
          </section>

          {/* Restaurants Section */}
          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Third Ward Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From rooftop Belgian brasseries to lakefront seafood, the Third Ward offers Milwaukee's most concentrated dining scene. These are the restaurants worth planning your visit around.
            </p>
            {restaurants.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
            <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Looking for more dining options? Check our complete <Link href="/best-restaurants-milwaukee" style={{ color: c.green1, fontWeight: "800" }}>Best Restaurants in Milwaukee</Link> guide.
              </p>
            </div>
          </section>

          {/* Milwaukee Public Market Section */}
          <section id="public-market" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Public Market</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The beating heart of the Third Ward and arguably Milwaukee's most beloved food destination. This isn't a tourist trap—it's where locals actually shop and eat.
            </p>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", border: `1px solid ${c.beige}`, marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>Milwaukee Public Market</h3>
                <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>400 N Water St</span>
              </div>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>
                Open daily, this indoor market brings together the best of Wisconsin's food producers under one roof. Graze your way through local cheese, fresh seafood, artisan bread, craft coffee, and prepared foods. It's the perfect place to start your Third Ward day—grab breakfast, pick up provisions, or simply wander and sample.
              </p>

              <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Must-Visit Vendors</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "14px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>St. Paul Fish Company</p>
                  <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>Best oysters and lobster rolls in Milwaukee. Period.</p>
                </div>
                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "14px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>West Allis Cheese & Sausage</p>
                  <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>Wisconsin cheese curds at their finest. Fresh and squeaky.</p>
                </div>
                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "14px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>Anodyne Coffee</p>
                  <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>Milwaukee's favorite local roaster. Great espresso drinks.</p>
                </div>
                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "14px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>Kehr's Candies</p>
                  <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>Handmade chocolates and caramels since 1930.</p>
                </div>
              </div>

              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "16px", borderRadius: "8px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "8px" }}>INSIDER TIPS</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: c.green1, fontSize: "14px" }}>
                  <li style={{ marginBottom: "8px" }}>Weekday mornings (9-10am) are the least crowded times</li>
                  <li style={{ marginBottom: "8px" }}>Saturday lunch rush (11am-1pm) can be packed—arrive early or late</li>
                  <li style={{ marginBottom: "8px" }}>The rooftop deck opens in summer—great for drinks and people-watching</li>
                  <li style={{ marginBottom: "0" }}>Parking in the attached garage is validated with purchase</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section id="shopping" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Third Ward Shopping</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Broadway is the main artery of Third Ward shopping—a tree-lined street of boutiques, national retailers, and specialty stores. But the best finds are often tucked into the side streets and converted warehouses.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "24px" }}>
              {shopping.map((shop, i) => <ShopCard key={i} shop={shop} />)}
            </div>
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "20px", borderRadius: "12px" }}>
              <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Shopping Tips</h4>
              <ul style={{ margin: 0, paddingLeft: "20px", color: c.green2, fontSize: "14px", lineHeight: 1.8 }}>
                <li>Most shops open at 10am; some close by 6pm on weekdays</li>
                <li>Third Friday Art Walk brings extended hours and gallery openings</li>
                <li>Holiday season (Nov-Dec) features special markets and late shopping hours</li>
                <li>Many stores offer local/Wisconsin-made items—ask!</li>
              </ul>
            </div>
          </section>

          {/* Nightlife Section */}
          <section id="nightlife" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Third Ward Nightlife</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Third Ward nightlife skews more sophisticated than rowdy—think craft cocktails and rooftop views rather than dive bars (head to Walker's Point or Brady Street for that). Here's where to drink in the neighborhood.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
              {nightlife.map((spot, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{spot.name}</h3>
                  </div>
                  <span style={{ display: "inline-block", backgroundColor: c.orange, color: "white", padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "600", marginBottom: "10px" }}>{spot.type}</span>
                  <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{spot.description}</p>
                  <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", margin: 0 }}>Vibe: {spot.vibe}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Art Galleries Section */}
          <section id="galleries" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Art Galleries</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The Third Ward has the highest concentration of galleries in Milwaukee. Most are free to visit, and the monthly Third Friday Art Walk is the best way to see them all.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "20px" }}>
              {galleries.map((gallery, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{gallery.name}</h3>
                  <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{gallery.description}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: c.green2, padding: "20px", borderRadius: "12px" }}>
              <h4 style={{ color: c.yellow, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Third Friday Gallery Night</h4>
              <p style={{ color: c.cream, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                Every third Friday of the month, Third Ward galleries open their doors for free, often with new exhibitions, refreshments, and artist meet-and-greets. It's a quintessential Milwaukee experience—start around 5pm and gallery-hop until 9pm. Check <Link href="/events" style={{ color: c.yellow }}>our events calendar</Link> for dates.
              </p>
            </div>
          </section>

          {/* Parking Section */}
          <section id="parking" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Parking Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Parking in the Third Ward can be tricky on weekends, but it's manageable if you know where to look.
            </p>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", border: `1px solid ${c.beige}` }}>
              <div style={{ display: "grid", gap: "16px" }}>
                <div style={{ borderBottom: `1px solid ${c.beige}`, paddingBottom: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Street Parking</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                    Metered spots throughout the neighborhood. Rates vary; most areas are free on Sundays. Use the ParkMKE app for easy payment. Spots fill fast on weekends—arrive before noon for best selection.
                  </p>
                </div>
                <div style={{ borderBottom: `1px solid ${c.beige}`, paddingBottom: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Third Ward Parking Structure</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                    Located on St. Paul Ave. Your best bet for weekend visits. Rates are reasonable and you won't have to hunt for street parking. Some Third Ward businesses validate.
                  </p>
                </div>
                <div style={{ borderBottom: `1px solid ${c.beige}`, paddingBottom: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Milwaukee Public Market Garage</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                    Parking under the Public Market. Validation available with purchase. Can fill up during peak lunch hours on weekends.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Pro Tips</h4>
                  <ul style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, margin: 0, paddingLeft: "20px" }}>
                    <li>Uber/Lyft is often easier than parking on busy weekends</li>
                    <li>The Hop streetcar connects downtown to the Third Ward—free to ride!</li>
                    <li>Weekday parking is much easier; mornings especially</li>
                    <li>Look for spots on the south end of the neighborhood (near Menomonee St) for better luck</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Things to Do →
              </Link>
              <Link href="/events" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Events Calendar →
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.yellow, color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Brunch →
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* Newsletter CTA */}
          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get the Milwaukee Insider's Guide</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px", maxWidth: "500px", margin: "0 auto 20px" }}>
              New restaurant openings, hidden gems, and events you won't find elsewhere. Delivered every Wednesday.
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
            <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
            <Link href="/best-restaurants-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Restaurants</Link>
            <Link href="/things-to-do-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
            <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
