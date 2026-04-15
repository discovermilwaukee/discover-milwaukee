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
    description: "Located at the Klement's factory in the heart of the Harbor District. Milwaukee's famous sausage company serves up bratwurst, hot dogs, and all the fixings in their factory retail store.",
    mustTry: "Bratwurst, Polish sausage, cheese curds",
    bestFor: "Lunch stop, Milwaukee tradition, factory tour",
    insiderTip: "Great for a quick lunch while exploring the district.",
  },
  {
    name: "Twisted Fisherman",
    cuisine: "Seafood/American",
    priceRange: "$$",
    address: "931 S 1st St, Milwaukee, WI 53204",
    description: "Casual seafood spot on the edge of the Harbor District serving fish fry, seafood baskets, and pub fare. A neighborhood favorite with a laid-back vibe.",
    mustTry: "Fish fry, seafood baskets, local beer",
    bestFor: "Casual lunch, fish fry Friday, groups",
    insiderTip: "Friday fish fry is popular—come early.",
  },
  {
    name: "Dock18 Cocktail Lab",
    cuisine: "Cocktail Bar",
    priceRange: "$$",
    address: "649 S 2nd St, Milwaukee, WI 53204",
    description: "Creative cocktail bar near the Harbor District in Walker's Point. Inventive drinks in a modern, industrial space that fits the neighborhood's evolving character.",
    mustTry: "Signature cocktails, seasonal creations",
    bestFor: "Cocktail enthusiasts, date nights, after-work drinks",
    insiderTip: "Ask the bartenders for recommendations—they love creating custom drinks.",
  },
  {
    name: "Enlightened Brewing Company",
    cuisine: "Brewery",
    priceRange: "$",
    address: "2020 S 1st St, Milwaukee, WI 53207",
    description: "Small-batch craft brewery in the Harbor District area focused on Belgian-inspired ales. Taproom with a rotating selection and a commitment to quality over quantity.",
    mustTry: "Belgian-style ales, seasonal releases, taproom hangs",
    bestFor: "Beer enthusiasts, Belgian beer lovers, local craft",
    insiderTip: "Check their release schedule for limited batches.",
  },
];

const attractions = [
  {
    name: "Kinnickinnic River Trail",
    type: "Recreation",
    description: "The KK River Trail runs through the Harbor District, connecting to the Hank Aaron State Trail. Great for biking, walking, and seeing the district's transformation up close.",
    highlights: ["Biking", "Walking", "River views", "Urban nature"],
  },
  {
    name: "Reed Street Yards",
    type: "Creative District",
    description: "Former industrial area transforming into a creative and tech hub. New developments, startups, and adaptive reuse projects are changing the landscape. The Rite-Hite headquarters is a major anchor.",
    highlights: ["Innovation", "Adaptive reuse", "Growing area", "New development"],
  },
  {
    name: "Harbor District Waterways",
    type: "Recreation",
    description: "The Kinnickinnic River and inner harbor offer kayaking, paddleboarding, and boat access. Urban Ecology Center provides equipment rentals and programming.",
    highlights: ["Kayaking", "Paddleboarding", "River access", "Equipment rentals"],
  },
  {
    name: "Klement's Factory",
    type: "Local Business",
    description: "See where Milwaukee's famous sausages are made. The factory includes a retail store where you can stock up on brats, hot dogs, and other Klement's products.",
    highlights: ["Milwaukee tradition", "Local business", "Factory store"],
  },
  {
    name: "Inner Harbor",
    type: "Working Waterfront",
    description: "Milwaukee's working harbor where industry meets urban development. Watch ships, explore the evolving landscape, and see the city's maritime heritage.",
    highlights: ["Maritime history", "Working harbor", "Urban exploration"],
  },
  {
    name: "Greenfield Avenue",
    type: "Commercial Corridor",
    description: "The main corridor through the Harbor District featuring local businesses, restaurants, and services. A neighborhood in transition with new investment.",
    highlights: ["Local businesses", "Neighborhood character", "Accessible"],
  },
];

const nightlife = [
  {
    name: "Enlightened Brewing Taproom",
    type: "Brewery",
    description: "Belgian-inspired craft beer in a cozy taproom. Low-key atmosphere perfect for catching up with friends.",
    vibe: "Casual, craft beer, local",
  },
  {
    name: "Nearby Walker's Point",
    type: "Adjacent District",
    description: "The Harbor District borders Walker's Point, which offers Milwaukee's best concentration of bars, breweries, and nightlife just minutes away.",
    vibe: "Walk to more options nearby",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Harbor District Milwaukee Guide 2026",
    "description": "Explore Milwaukee's Harbor District along the Kinnickinnic River. Industrial transformation, Reed Street Yards, urban kayaking, and emerging creative hub.",
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
        <title>Harbor District Milwaukee Guide 2026 | Kinnickinnic River, Urban Revival</title>
        <meta name="description" content="Explore Milwaukee's Harbor District along the Kinnickinnic River. Reed Street Yards creative hub, urban kayaking, Klement's factory, and industrial transformation." />
        <meta name="keywords" content="Harbor District Milwaukee, Kinnickinnic River, Reed Street Yards, Milwaukee industrial, Milwaukee kayaking, Milwaukee redevelopment" />
        <link rel="canonical" href="https://discover-milwaukee.com/harbor-district-milwaukee" />

        <meta property="og:title" content="Harbor District Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Milwaukee's industrial harbor transformed. Kinnickinnic River trails, creative spaces, and urban renewal." />
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
              Milwaukee's working waterfront in transformation. Industrial heritage, Kinnickinnic River access, and a creative hub emerging from the city's manufacturing past.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The District</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              The Harbor District is Milwaukee's evolving industrial corridor along the Kinnickinnic River and inner harbor. Once home to heavy manufacturing, the area is being thoughtfully redeveloped while maintaining its working waterfront character.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Reed Street Yards is the centerpiece of new development, attracting tech companies and creative businesses to adaptive reuse spaces. The Kinnickinnic River offers urban kayaking, and trails connect to the Hank Aaron State Trail network. Klement's Sausage factory remains a Milwaukee icon here. While still emerging, the Harbor District represents Milwaukee's ability to honor its industrial past while building something new.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local breweries, neighborhood spots, and nearby Walker's Point options.
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
