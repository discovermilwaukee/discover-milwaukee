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

const categories = {
  topAttractions: [
    {
      name: "Milwaukee Art Museum",
      category: "Museum",
      neighborhood: "Downtown",
      price: "$22 adults",
      description: "The iconic Quadracci Pavilion with its movable wings is Milwaukee's most photographed landmark. World-class collection spanning 25,000 works from antiquity to present day. The building itself—designed by Santiago Calatrava—is worth the visit alone.",
      highlight: "Free admission on the first Thursday of each month",
      bestFor: "Art lovers, architecture fans, rainy days",
    },
    {
      name: "Milwaukee Public Market",
      category: "Food Hall",
      neighborhood: "Third Ward",
      price: "Free entry",
      description: "The beating heart of Milwaukee's food scene. Local vendors serve everything from fresh seafood and cheese curds to craft coffee and spices. Come hungry and graze your way through Wisconsin's best.",
      highlight: "St. Paul Fish Company for the best oysters in town",
      bestFor: "Foodies, casual lunch, rainy day activity",
    },
    {
      name: "Lakefront Brewery",
      category: "Brewery",
      neighborhood: "Brewer's Hill",
      price: "$15 tour",
      description: "More than a brewery tour—it's a Milwaukee institution. The Friday fish fry is legendary, the tour guides are hilarious, and the beer is excellent. This is Milwaukee at its most authentic.",
      highlight: "Friday fish fry with live polka music",
      bestFor: "Beer lovers, Friday nights, authentic MKE experience",
    },
    {
      name: "Harley-Davidson Museum",
      category: "Museum",
      neighborhood: "Menomonee Valley",
      price: "$22 adults",
      description: "Even if you've never ridden a motorcycle, this museum tells a compelling American story. 450+ motorcycles spanning Harley's 100+ year history, interactive exhibits, and a gorgeous campus.",
      highlight: "Sit on vintage bikes in the Experience Gallery",
      bestFor: "History buffs, motorcycle enthusiasts, unique experiences",
    },
    {
      name: "Milwaukee Riverwalk",
      category: "Outdoor",
      neighborhood: "Downtown",
      price: "Free",
      description: "A 3-mile stretch of walkways, public art, restaurants, and bars along the Milwaukee River. Start in the Third Ward, walk through downtown, end at Brady Street. Perfect for people-watching.",
      highlight: "Stop at Café Benelux rooftop or The Outsider for drinks",
      bestFor: "Walking, outdoor dining, date nights",
    },
    {
      name: "Discovery World",
      category: "Science Museum",
      neighborhood: "Downtown Lakefront",
      price: "$21 adults",
      description: "Hands-on science and technology museum on the lakefront. Great for families but genuinely interesting for adults too. Features freshwater aquariums and the historic S/V Denis Sullivan tall ship.",
      highlight: "Virtual reality experiences and the Great Lakes exhibit",
      bestFor: "Families, science enthusiasts, lakefront access",
    },
  ],
  freeThings: [
    { name: "Milwaukee Art Museum (First Thursdays)", description: "Free admission on the first Thursday of every month" },
    { name: "Lakefront Trail", description: "Miles of paved paths along Lake Michigan" },
    { name: "Bronze Fonz Statue", description: "Iconic photo op on the Riverwalk downtown" },
    { name: "Milwaukee Public Library", description: "Beautiful historic architecture, free WiFi, rotating exhibits" },
    { name: "Third Ward Art Walk", description: "Free gallery walks on the third Friday of each month" },
    { name: "Beer Garden Hang", description: "Entry is free—just pay for what you drink" },
    { name: "Cathedral Square Park", description: "People watching, summer concerts, food trucks" },
    { name: "Street Art Tour", description: "Walker's Point and Bay View murals" },
  ],
  byNeighborhood: {
    "Third Ward": ["Milwaukee Public Market", "Café Benelux", "Broadway shops", "Art galleries", "Riverwalk"],
    "Bay View": ["Odd Duck", "Colectivo", "Vintage shops", "Boone & Crockett", "South Shore Park"],
    "East Side": ["Brady Street", "Glorioso's", "Oriental Theatre", "Wolski's", "Lake Park"],
    "Walker's Point": ["Craft breweries", "LGBTQ+ nightlife", "Street art", "La Merenda", "Boone & Crockett"],
    "Downtown": ["Milwaukee Art Museum", "Fiserv Forum", "The Pfister Hotel", "Theater District"],
  },
  seasonal: {
    summer: ["Summerfest", "Beer gardens", "Lakefront festivals", "Brewers games", "Patio season"],
    fall: ["Oktoberfest", "Apple picking day trips", "Foliage at Lake Park", "Bucks season starts"],
    winter: ["Holiday markets", "Museum hopping", "Cozy bars", "Bucks games", "Ice skating"],
    spring: ["Restaurant Week", "Opening Day", "Patio season begins", "St. Patrick's Day parade"],
  },
};

const faqs = [
  {
    question: "What is there to do in Milwaukee?",
    answer: "Milwaukee offers world-class attractions including the Milwaukee Art Museum, Harley-Davidson Museum, historic breweries like Lakefront Brewery, vibrant neighborhoods (Third Ward, Bay View, Walker's Point), professional sports (Bucks, Brewers), 100+ annual festivals including Summerfest, excellent restaurants, craft breweries, and beautiful Lake Michigan access. It's a major city with a small-town feel."
  },
  {
    question: "Is Milwaukee worth visiting?",
    answer: "Milwaukee is absolutely worth visiting. It offers big-city attractions at Midwest prices, a genuinely friendly atmosphere, an incredible food and craft beer scene, and a lakefront rivaling Chicago's. Most visitors are surprised by how much there is to do and how welcoming the city feels."
  },
  {
    question: "What is Milwaukee known for?",
    answer: "Milwaukee is known for beer (historic brewing capital of America), Harley-Davidson motorcycles, the Milwaukee Bucks (2021 NBA Champions), cheese curds and Friday fish fry, Summerfest (world's largest music festival), the Milwaukee Art Museum's Calatrava-designed building, and its German heritage."
  },
  {
    question: "How many days do you need in Milwaukee?",
    answer: "A weekend (2-3 days) is ideal for first-time visitors to hit major attractions. With 4-5 days, you can explore neighborhoods, catch a game, and discover hidden gems. Milwaukee rewards longer stays—locals are still discovering new things after years."
  },
  {
    question: "What are the best free things to do in Milwaukee?",
    answer: "Free activities include the Lakefront Trail, Milwaukee Art Museum (first Thursdays), Third Ward Art Walk (third Fridays), beer garden entry (pay for drinks only), street art tours in Walker's Point, the Bronze Fonz statue, Cathedral Square Park, and the Milwaukee Public Library."
  },
  {
    question: "What is the best neighborhood in Milwaukee?",
    answer: "It depends on your vibe. Third Ward is upscale with shopping and dining. Bay View is hip and artsy with great restaurants. Walker's Point has nightlife and LGBTQ+ scene. East Side/Brady Street is eclectic with bars and vintage shops. Downtown has attractions and sports."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Things to Do in Milwaukee 2026: Complete Local Guide to MKE Attractions",
    "description": "Comprehensive guide to the best things to do in Milwaukee, Wisconsin. Museums, breweries, restaurants, neighborhoods, free activities, and seasonal events.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/things-to-do-milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  },
  touristAttraction: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Things to Do in Milwaukee",
    "description": "Best attractions and activities in Milwaukee, Wisconsin",
    "numberOfItems": categories.topAttractions.length,
    "itemListElement": categories.topAttractions.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": item.name,
        "description": item.description
      }
    }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Things to Do in Milwaukee", "item": "https://discover-milwaukee.com/things-to-do-milwaukee" }
    ]
  }
};

export default function ThingsToDoMilwaukee() {
  const AttractionCard = ({ attraction }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{attraction.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{attraction.category}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{attraction.neighborhood}</span>
          <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{attraction.price}</span>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{attraction.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>INSIDER TIP</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{attraction.highlight}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{attraction.bestFor}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Things to Do in Milwaukee 2026 | Complete Guide to MKE Attractions</title>
        <meta name="description" content="Discover the best things to do in Milwaukee, WI. Museums, breweries, restaurants, free activities, and neighborhood guides. Updated for 2026 with insider tips from locals." />
        <meta name="keywords" content="things to do in milwaukee, milwaukee attractions, what to do in milwaukee, milwaukee activities, visit milwaukee, milwaukee tourism, milwaukee guide 2026" />
        <link rel="canonical" href="https://discover-milwaukee.com/things-to-do-milwaukee" />

        <meta property="og:title" content="Things to Do in Milwaukee 2026 | Complete Local Guide" />
        <meta property="og:description" content="The definitive guide to Milwaukee attractions, activities, and experiences. Written by locals, updated weekly." />
        <meta property="og:url" content="https://discover-milwaukee.com/things-to-do-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.touristAttraction) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>DISCOVER MILWAUKEE</Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
            </div>
          </div>
        </nav>

        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>COMPLETE 2026 GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Things to Do in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Your insider's guide to everything worth doing in Milwaukee, Wisconsin. Museums, breweries, neighborhoods, and experiences you won't find in generic travel guides.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK NAVIGATION</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#top-attractions" style={{ color: c.green2, fontSize: "14px" }}>Top Attractions</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#free-things" style={{ color: c.green2, fontSize: "14px" }}>Free Activities</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhoods" style={{ color: c.green2, fontSize: "14px" }}>Neighborhoods</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#seasonal" style={{ color: c.green2, fontSize: "14px" }}>Seasonal</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="top-attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Top Milwaukee Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The essential Milwaukee experiences—these are the attractions that define the city and should be on every visitor's list.
            </p>
            {categories.topAttractions.map((attraction, i) => <AttractionCard key={i} attraction={attraction} />)}
          </section>

          <section id="free-things" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Free Things to Do in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee is surprisingly affordable. Here's how to experience the city without spending a dime.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {categories.freeThings.map((item, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>{item.name}</h3>
                  <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px" }}>
              <Link href="/free-things-milwaukee" style={{ color: c.orange, fontWeight: "600", textDecoration: "none" }}>
                See our complete guide to free activities →
              </Link>
            </div>
          </section>

          <section id="neighborhoods" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Neighborhoods</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Each Milwaukee neighborhood has its own personality. Here's a quick guide to help you find your vibe.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
              {Object.entries(categories.byNeighborhood).map(([neighborhood, highlights]) => (
                <div key={neighborhood} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>{neighborhood}</h3>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#555", fontSize: "14px" }}>
                    {highlights.map((h, i) => <li key={i} style={{ marginBottom: "4px" }}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link href="/third-ward-milwaukee" style={{ backgroundColor: c.green1, color: c.cream, padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Third Ward Guide</Link>
              <Link href="/bay-view-milwaukee" style={{ backgroundColor: c.green2, color: c.cream, padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Bay View Guide</Link>
              <Link href="/walkers-point-milwaukee" style={{ backgroundColor: c.orange, color: "white", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Walker's Point Guide</Link>
              <Link href="/east-side-milwaukee" style={{ backgroundColor: c.yellow, color: c.green1, padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>East Side Guide</Link>
            </div>
          </section>

          <section id="seasonal" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Seasonal Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee is a four-season city. Here's what to do no matter when you visit.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {Object.entries(categories.seasonal).map(([season, activities]) => (
                <div key={season} style={{
                  backgroundColor: season === "summer" ? "rgba(244,162,97,0.1)" : season === "fall" ? "rgba(244,208,63,0.1)" : season === "winter" ? "rgba(45,90,74,0.1)" : "rgba(26,61,52,0.1)",
                  padding: "20px",
                  borderRadius: "12px"
                }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px", textTransform: "capitalize" }}>{season}</h3>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#555", fontSize: "14px" }}>
                    {activities.map((a, i) => <li key={i} style={{ marginBottom: "4px" }}>{a}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/milwaukee-nightlife" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Nightlife</Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.yellow, color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Brunch</Link>
              <Link href="/this-weekend-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>This Weekend</Link>
              <Link href="/events" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Events Calendar</Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New openings, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
