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

const restaurants = [
  {
    name: "Klement's Sausage Haus",
    cuisine: "German/Sausage",
    priceRange: "$",
    address: "200 E Lincoln Ave, Milwaukee, WI 53207",
    description: "Located at the Klement's factory, this is where Milwaukee's famous sausage company serves up bratwurst, hot dogs, and all the fixings. A true Milwaukee experience—especially on Brewers game days.",
    mustTry: "Bratwurst, Polish sausage, cheese curds",
    bestFor: "Brewers pregame, Milwaukee tradition, quick lunch",
    insiderTip: "Perfect stop before heading to a Brewers game.",
  },
  {
    name: "Boone & Crockett",
    cuisine: "Bar/Small Plates",
    priceRange: "$$",
    address: "818 S Water St, Milwaukee, WI 53204",
    description: "Craft cocktails and small plates in a stylish waterfront setting. The outdoor patio overlooking the river is one of the best in the city. A Walker's Point neighbor serving the Harbor District well.",
    mustTry: "Craft cocktails, oysters, patio vibes",
    bestFor: "Date nights, happy hour, waterfront drinks",
    insiderTip: "The sunset views from the patio are unbeatable.",
  },
  {
    name: "Milwaukee Brewing Company",
    cuisine: "Brewery/Pub",
    priceRange: "$$",
    address: "1128 N 9th St, Milwaukee, WI 53233",
    description: "One of Milwaukee's craft beer pioneers, now in an expanded location. Great beer, solid food, and a tour-worthy facility. The Louie's Demise Amber is a local classic.",
    mustTry: "Louie's Demise, brewery tours, beer flights",
    bestFor: "Beer lovers, brewery tours, groups",
    insiderTip: "Book a brewery tour for the full experience.",
  },
  {
    name: "Harbor House",
    cuisine: "Seafood",
    priceRange: "$$$",
    address: "550 N Harbor Dr, Milwaukee, WI 53202",
    description: "Milwaukee's premier waterfront seafood destination. Fresh catches, stunning harbor views, and Bartolotta quality. The patio is prime summer real estate.",
    mustTry: "Fresh oysters, Lake Superior whitefish, lobster",
    bestFor: "Special occasions, waterfront dining, celebrations",
    insiderTip: "Request a window table for sunset views.",
  },
];

const attractions = [
  {
    name: "Summerfest Grounds",
    type: "Festival/Venue",
    description: "Home to the world's largest music festival and year-round concerts at the American Family Insurance Amphitheater. The lakefront grounds host multiple ethnic festivals throughout summer.",
    highlights: ["Summerfest", "Concerts", "Festivals", "Lakefront"],
  },
  {
    name: "Discovery World",
    type: "Museum",
    description: "Science and technology museum with interactive exhibits, aquariums, and the Denis Sullivan tall ship. Great for families and anyone curious about the Great Lakes.",
    highlights: ["Family-friendly", "Interactive", "Aquarium", "Tall ship"],
  },
  {
    name: "Milwaukee Art Museum",
    type: "Museum",
    description: "The iconic Calatrava-designed wings open and close daily over the lakefront. World-class art collection and stunning architecture make this a must-see Milwaukee landmark.",
    highlights: ["Architecture", "Art collection", "Lakefront", "Free Thursday evenings"],
  },
  {
    name: "Lakefront Trail",
    type: "Recreation",
    description: "Miles of paved trail along Lake Michigan perfect for biking, running, or walking. Connect to Bradford Beach, the Third Ward, and downtown.",
    highlights: ["Biking", "Running", "Lake views", "Free"],
  },
  {
    name: "Harbor District Waterways",
    type: "Recreation",
    description: "The Kinnickinnic River and inner harbor offer kayaking, paddleboarding, and boat access. Urban water recreation at its finest.",
    highlights: ["Kayaking", "Paddleboarding", "River access"],
  },
  {
    name: "Reed Street Yards",
    type: "Creative District",
    description: "Former industrial area transforming into a creative and tech hub. New developments, startups, and adaptive reuse projects are changing the landscape.",
    highlights: ["Innovation", "Adaptive reuse", "Growing area"],
  },
];

const nightlife = [
  {
    name: "Milwaukee Ale House",
    type: "Brewpub",
    description: "Craft beer brewed on-site with a beautiful riverwalk patio. Great for groups and after-work drinks.",
    vibe: "Casual, craft beer, riverfront",
  },
  {
    name: "The Jazz Estate (nearby)",
    type: "Jazz Club",
    description: "Milwaukee's premier jazz club featuring local and touring acts. Intimate setting, great sound, and a sophisticated vibe.",
    vibe: "Jazz, sophisticated, intimate",
  },
  {
    name: "Summer Festival Nights",
    type: "Seasonal",
    description: "During festival season, the Summerfest grounds come alive nearly every weekend with music and cultural celebrations.",
    vibe: "Festive, outdoor, seasonal",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Harbor District Milwaukee Guide 2026",
    "description": "Explore Milwaukee's Harbor District. Summerfest grounds, lakefront museums, waterfront dining, and the transformation of industrial Milwaukee.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee", "logo": { "@type": "ImageObject", "url": "https://discover-milwaukee.com/logo.png" } },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://discover-milwaukee.com/explore" },
      { "@type": "ListItem", "position": 3, "name": "Harbor District", "item": "https://discover-milwaukee.com/harbor-district-milwaukee" },
    ],
  },
};

const VenueCard = ({ venue }) => (
  <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
      <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{venue.name}</h3>
      {venue.priceRange && <span style={{ color: c.orange, fontWeight: "700" }}>{venue.priceRange}</span>}
    </div>
    {venue.cuisine && <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "12px" }}>{venue.cuisine}</p>}
    <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{venue.description}</p>
    {venue.mustTry && (
      <div style={{ backgroundColor: `${c.orange}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{venue.mustTry}</p>
      </div>
    )}
    {venue.insiderTip && (
      <div style={{ backgroundColor: `${c.green2}15`, padding: "12px", borderRadius: "8px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{venue.insiderTip}</p>
      </div>
    )}
    {venue.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{venue.address}</p>}
  </div>
);

const AttractionCard = ({ attraction }) => (
  <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
      <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{attraction.name}</h3>
      <span style={{ backgroundColor: c.orange, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px" }}>{attraction.type}</span>
    </div>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{attraction.description}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {attraction.highlights.map((h, i) => (
        <span key={i} style={{ backgroundColor: c.beige, color: c.green1, fontSize: "12px", padding: "4px 10px", borderRadius: "20px" }}>{h}</span>
      ))}
    </div>
  </div>
);

export default function HarborDistrictMilwaukee() {
  return (
    <>
      <Head>
        <title>Harbor District Milwaukee Guide 2026 | Lakefront, Summerfest & Museums</title>
        <meta name="description" content="Explore Milwaukee's Harbor District. Summerfest grounds, Milwaukee Art Museum, Discovery World, waterfront dining, and lakefront recreation. Complete guide." />
        <meta name="keywords" content="Harbor District Milwaukee, Summerfest Milwaukee, Milwaukee Art Museum, Discovery World, Milwaukee lakefront, waterfront Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/harbor-district-milwaukee" />

        <meta property="og:title" content="Harbor District Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Lakefront museums, Summerfest grounds, waterfront dining, and Milwaukee's transformation along the harbor." />
        <meta property="og:url" content="https://discover-milwaukee.com/harbor-district-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-harbor-district.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>NEIGHBORHOOD GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Harbor District
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Where industrial Milwaukee meets lakefront recreation. Summerfest grounds, world-class museums, and a district in transformation.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The District</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              The Harbor District represents Milwaukee's past and future. Former industrial land along the inner harbor and Lake Michigan is being transformed into parks, creative spaces, and mixed-use development while preserving the working waterfront character.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              This is where you'll find the Summerfest grounds, the Milwaukee Art Museum's stunning Calatrava addition, Discovery World, and miles of lakefront trails. The Kinnickinnic River corridor offers urban kayaking, and new developments are bringing restaurants and housing to the area.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Waterfront dining, breweries, and Milwaukee institutions.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Things to Do</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              World-class museums, festivals, and lakefront recreation.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section id="nightlife" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nightlife & Entertainment</h2>
            {nightlife.map((n, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{n.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{n.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{n.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Vibe: {n.vibe}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Neighborhoods</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Third Ward →</Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Walker's Point →</Link>
              <Link href="/downtown-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Downtown →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Festival news, events, and lakefront happenings every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>Explore More Neighborhoods</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Walker's Point</Link>
                <Link href="/downtown-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Downtown</Link>
                <Link href="/south-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>South Side</Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "12px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
                <Link href="/things-to-do-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
                <Link href="/about" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>About</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
