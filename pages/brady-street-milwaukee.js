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
    name: "Balzac Wine Bar",
    cuisine: "Wine Bar/Mediterranean",
    priceRange: "$$",
    address: "1716 E Brady St, Milwaukee, WI 53202",
    description: "An intimate wine bar with an exceptional selection and knowledgeable staff. Mediterranean small plates pair perfectly with wines from around the world. The cozy, candlelit atmosphere makes it ideal for date nights.",
    mustTry: "Wine flights, cheese boards, Mediterranean plates",
    bestFor: "Date nights, wine lovers, intimate evenings",
    insiderTip: "Let the staff guide your wine selection—they know their stuff.",
  },
  {
    name: "Glorioso's Italian Market",
    cuisine: "Italian Deli/Market",
    priceRange: "$",
    address: "1020 E Brady St, Milwaukee, WI 53202",
    description: "A Brady Street institution since 1946. This Italian market is the heart of the neighborhood's Italian heritage. Fresh pasta, imported cheeses, deli sandwiches, and everything you need for an authentic Italian meal at home.",
    mustTry: "Deli sandwiches, fresh pasta, cannoli",
    bestFor: "Quick lunch, grocery shopping, Italian cravings",
    insiderTip: "The meatball sub is legendary. Get there early on weekends.",
  },
  {
    name: "Cempazuchi",
    cuisine: "Mexican",
    priceRange: "$$",
    address: "1205 E Brady St, Milwaukee, WI 53202",
    description: "Upscale Mexican fare featuring regional dishes you won't find at typical Mexican restaurants. The mezcal and tequila selection is impressive, and the mole is made from scratch daily.",
    mustTry: "Mole dishes, mezcal flights, churros",
    bestFor: "Special occasion Mexican, tequila lovers, groups",
    insiderTip: "Try the mole negro—it takes days to make.",
  },
  {
    name: "Pizza Man",
    cuisine: "Pizza",
    priceRange: "$",
    address: "1800 E Brady St, Milwaukee, WI 53202",
    description: "A Brady Street staple serving thin-crust pizza since 1970. Nothing fancy—just solid, affordable pizza in a classic pizza parlor setting. The garlic bread is a must.",
    mustTry: "Thin crust pizza, garlic bread, pitcher of beer",
    bestFor: "Late night eats, casual dinners, classic pizza",
    insiderTip: "Cash only. The lunch specials are a great deal.",
  },
  {
    name: "La Fuente",
    cuisine: "Mexican",
    priceRange: "$",
    address: "625 E Brady St, Milwaukee, WI 53202",
    description: "No-frills Mexican restaurant serving authentic, affordable food. The horchata is refreshing, the portions are generous, and it's been a neighborhood favorite for decades.",
    mustTry: "Burritos, horchata, combination plates",
    bestFor: "Quick lunch, authentic Mexican, budget-friendly",
    insiderTip: "The lunch specials are unbeatable value.",
  },
  {
    name: "Hi-Hat Lounge",
    cuisine: "Cocktails/Small Plates",
    priceRange: "$$",
    address: "1701 N Arlington Pl, Milwaukee, WI 53202",
    description: "Sophisticated craft cocktails in a 1920s-inspired speakeasy setting. Excellent mixology, intimate atmosphere, and attention to detail make this one of Milwaukee's best cocktail bars.",
    mustTry: "Craft cocktails, seasonal specials",
    bestFor: "Cocktail enthusiasts, date nights, pre-dinner drinks",
    insiderTip: "Sit at the bar to watch the bartenders work their magic.",
  },
];

const attractions = [
  {
    name: "Brady Street",
    type: "Historic District",
    description: "The street itself is the attraction—a walkable stretch of restaurants, bars, shops, and character. Italian heritage meets modern Milwaukee in this vibrant, pedestrian-friendly neighborhood.",
    highlights: ["Walkable", "Restaurants", "Nightlife", "Shopping"],
  },
  {
    name: "Brady Street Festival",
    type: "Annual Event",
    description: "The annual street festival brings live music, food vendors, and thousands of people to Brady Street each summer. A celebration of the neighborhood's eclectic spirit.",
    highlights: ["Live music", "Food vendors", "Community event"],
  },
  {
    name: "Lake Park",
    type: "Park",
    description: "Just east of Brady Street, Lake Park offers stunning lake views, historic architecture, and beautiful walking paths. Designed by Frederick Law Olmsted.",
    highlights: ["Lake views", "Walking paths", "Golf course", "Historic"],
  },
  {
    name: "North Point Lighthouse",
    type: "Historic Site",
    description: "Historic lighthouse in Lake Park offering tours and stunning views of Lake Michigan. A perfect add-on to any Brady Street visit.",
    highlights: ["Lake views", "Historic", "Tours"],
  },
  {
    name: "Boutique Shopping",
    type: "Retail",
    description: "Independent boutiques line Brady Street offering vintage clothing, records, home goods, and unique finds you won't see in the mall.",
    highlights: ["Vintage shops", "Records", "Boutiques"],
  },
];

const nightlife = [
  {
    name: "Hi-Hat Lounge",
    type: "Craft Cocktails",
    description: "Milwaukee's premier speakeasy-style cocktail bar. Expert bartenders, creative drinks, intimate vibes.",
    vibe: "Sophisticated, intimate, craft-focused",
  },
  {
    name: "The Nomad World Pub",
    type: "Pub/Soccer Bar",
    description: "The city's best soccer bar with matches from around the world. Also great for live music and a diverse, international crowd.",
    vibe: "International, sports, live music",
  },
  {
    name: "Roman Coin Pizza",
    type: "Dive Bar",
    description: "Classic Brady Street dive with cheap drinks, cash-only policy, and zero pretense. The pizza is surprisingly good.",
    vibe: "Dive bar, local, no frills",
  },
  {
    name: "Balzac",
    type: "Wine Bar",
    description: "Intimate wine bar perfect for a romantic evening or catching up with friends over great wine.",
    vibe: "Romantic, sophisticated, cozy",
  },
  {
    name: "Points East Pub",
    type: "Neighborhood Bar",
    description: "No-frills neighborhood bar with strong drinks and a loyal local crowd. The kind of place where everybody knows your name.",
    vibe: "Local, casual, unpretentious",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Brady Street Milwaukee Neighborhood Guide 2026",
    "description": "Explore Brady Street, Milwaukee's historic Italian neighborhood turned vibrant dining and nightlife destination. Glorioso's, Hi-Hat Lounge, and more.",
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
      { "@type": "ListItem", "position": 3, "name": "Brady Street", "item": "https://discover-milwaukee.com/brady-street-milwaukee" },
    ],
  },
};

const VenueCard = ({ venue, showCuisine = true }) => (
  <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
      <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{venue.name}</h3>
      {venue.priceRange && <span style={{ color: c.orange, fontWeight: "700" }}>{venue.priceRange}</span>}
    </div>
    {showCuisine && venue.cuisine && <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "12px" }}>{venue.cuisine}</p>}
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

export default function BradyStreetMilwaukee() {
  return (
    <>
      <Head>
        <title>Brady Street Milwaukee Guide 2026 | Italian Heritage, Bars & Restaurants</title>
        <meta name="description" content="Explore Brady Street, Milwaukee's historic Italian neighborhood. Glorioso's Market, Hi-Hat cocktails, Cempazuchi, nightlife, and walkable charm. Complete Brady Street guide." />
        <meta name="keywords" content="Brady Street Milwaukee, Glorioso's, Milwaukee Italian neighborhood, Brady Street restaurants, Hi-Hat Lounge, Milwaukee nightlife, things to do Brady Street" />
        <link rel="canonical" href="https://discover-milwaukee.com/brady-street-milwaukee" />

        <meta property="og:title" content="Brady Street Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Milwaukee's historic Italian neighborhood. Glorioso's, craft cocktails, great restaurants, and vibrant nightlife." />
        <meta property="og:url" content="https://discover-milwaukee.com/brady-street-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-brady-street.jpg" />
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
              Brady Street
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Where Milwaukee's Italian heritage meets modern nightlife. A walkable stretch of restaurants, bars, and character that's been drawing crowds for over a century.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Where to Eat</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#attractions" style={{ color: c.green2, fontSize: "14px" }}>Things to Do</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nightlife" style={{ color: c.green2, fontSize: "14px" }}>Nightlife</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The Vibe</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Brady Street is Milwaukee's original "cool street." Italian immigrants settled here in the late 1800s, and Glorioso's Italian Market has anchored the neighborhood since 1946. Today, the Italian heritage blends with bohemian boutiques, world-class cocktail bars, and one of the city's most walkable nightlife scenes. On summer evenings, the street comes alive with patio dining, bar crawlers, and people-watching. It's sophisticated but not stuffy, lively but not overwhelming.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Italian delis, upscale Mexican, craft cocktails, and everything in between.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Things to Do</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Walking the street is the main event, but there's plenty more to explore.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section id="nightlife" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nightlife</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From speakeasy cocktails to dive bar hangs, Brady Street delivers.
            </p>
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
              <Link href="/east-side-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>East Side →</Link>
              <Link href="/riverwest-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Riverwest →</Link>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Third Ward →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Brady Street events, new spots, and insider tips every Wednesday.</p>
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
                <Link href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>East Side</Link>
                <Link href="/riverwest-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Riverwest</Link>
                <Link href="/downtown-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Downtown</Link>
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
