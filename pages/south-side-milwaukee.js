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
    name: "Conejito's Place",
    cuisine: "Mexican",
    priceRange: "$",
    address: "539 W Virginia St, Milwaukee, WI 53204",
    description: "A South Side institution serving authentic Mexican food since 1972. The hand-made tortillas, carnitas, and pozole are legendary. Cash only, no frills, all flavor. This is the real deal.",
    mustTry: "Carnitas, handmade tortillas, pozole (weekends)",
    bestFor: "Authentic Mexican, late night, budget-friendly",
    insiderTip: "Cash only. The carnitas are the move. Pozole is only on weekends.",
  },
  {
    name: "El Rey",
    cuisine: "Mexican Grocery/Taqueria",
    priceRange: "$",
    address: "Multiple South Side locations",
    description: "Part grocery store, part taqueria, all Milwaukee institution. The in-store taquerias serve excellent tacos, tortas, and aguas frescas while you shop for authentic ingredients.",
    mustTry: "Al pastor tacos, fresh tortillas, aguas frescas",
    bestFor: "Quick lunch, grocery shopping, authentic tacos",
    insiderTip: "The hot bar has incredible prepared foods. Load up.",
  },
  {
    name: "Taqueria Buenavista",
    cuisine: "Mexican",
    priceRange: "$",
    address: "2301 S Howell Ave, Milwaukee, WI 53207",
    description: "Authentic Mexican cuisine with excellent tacos, tortas, and breakfast burritos. A neighborhood favorite known for generous portions and friendly service.",
    mustTry: "Breakfast burritos, carnitas, al pastor",
    bestFor: "Breakfast, quick lunch, authentic Mexican",
    insiderTip: "Breakfast items are available all day.",
  },
  {
    name: "Vanguard",
    cuisine: "Sausages/Bar",
    priceRange: "$$",
    address: "2659 S Kinnickinnic Ave, Milwaukee, WI 53207",
    description: "Gourmet sausages with creative toppings and an impressive craft beer list. Located in Bay View but serving the South Side vibe, Vanguard has become a Milwaukee favorite for elevated bar food.",
    mustTry: "House sausages, loaded fries, craft beers",
    bestFor: "Late night, craft beer lovers, groups",
    insiderTip: "The specials rotate—always worth checking.",
  },
  {
    name: "Cafe el Sol",
    cuisine: "Mexican Bakery/Cafe",
    priceRange: "$",
    address: "1028 S 9th St, Milwaukee, WI 53204",
    description: "Authentic Mexican bakery and cafe in the heart of the Latino community. Fresh pan dulce, coffee, and a community gathering spot.",
    mustTry: "Pan dulce, Mexican hot chocolate, breakfast",
    bestFor: "Breakfast, bakery, coffee",
    insiderTip: "Go early for the best selection of pastries.",
  },
  {
    name: "Botanas II",
    cuisine: "Mexican",
    priceRange: "$",
    address: "816 S 5th St, Milwaukee, WI 53204",
    description: "Family-run Mexican restaurant serving massive portions of authentic food. The mole is house-made, and the margaritas are strong. A neighborhood staple.",
    mustTry: "Mole, margaritas, combination plates",
    bestFor: "Family dinners, celebration meals, mole lovers",
    insiderTip: "Portions are huge—sharing is encouraged.",
  },
];

const attractions = [
  {
    name: "Mitchell Street",
    type: "Historic District",
    description: "Historic shopping corridor with deep Latino heritage. Quinceañera shops, Mexican bakeries, and cultural businesses line this vibrant street.",
    highlights: ["Latino culture", "Shopping", "Historic buildings"],
  },
  {
    name: "Basilica of St. Josaphat",
    type: "Historic Landmark",
    description: "Stunning Roman Catholic basilica modeled after St. Peter's in Rome. The Polish heritage landmark features incredible architecture and is one of Milwaukee's most impressive buildings.",
    highlights: ["Architecture", "Polish heritage", "Historic", "Tours"],
  },
  {
    name: "Forest Home Cemetery",
    type: "Historic Site",
    description: "Historic cemetery and arboretum where Milwaukee's beer barons and city founders rest. Beautiful grounds for walking and history appreciation.",
    highlights: ["History", "Walking paths", "Architecture", "Beer baron graves"],
  },
  {
    name: "Mexican Fiesta",
    type: "Annual Festival",
    description: "Three-day celebration of Mexican culture on the Summerfest grounds every August. Music, food, dancing, and cultural pride.",
    highlights: ["August event", "Music", "Food", "Culture"],
  },
  {
    name: "Cesar E. Chavez Drive",
    type: "Cultural Corridor",
    description: "Renamed to honor the civil rights leader, this street is the heart of Milwaukee's Latino community with authentic restaurants, shops, and cultural businesses.",
    highlights: ["Latino culture", "Restaurants", "Shopping"],
  },
];

const nightlife = [
  {
    name: "La Perla",
    type: "Restaurant/Bar",
    description: "Upscale Mexican restaurant with a great bar scene. Excellent cocktails, especially margaritas and mezcal drinks.",
    vibe: "Upscale, margaritas, celebration",
  },
  {
    name: "The Tracks",
    type: "Bar",
    description: "Neighborhood bar with a diverse crowd and laid-back atmosphere. A welcoming local spot.",
    vibe: "Local, diverse, friendly",
  },
  {
    name: "Bel Air Cantina",
    type: "Mexican/Bar",
    description: "Trendy taco spot with strong margaritas and a lively atmosphere. Multiple Milwaukee locations.",
    vibe: "Trendy, margaritas, groups",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "South Side Milwaukee Neighborhood Guide 2026",
    "description": "Explore Milwaukee's South Side, home to the city's vibrant Latino community. Authentic Mexican restaurants, cultural landmarks, and neighborhood pride.",
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
      { "@type": "ListItem", "position": 3, "name": "South Side", "item": "https://discover-milwaukee.com/south-side-milwaukee" },
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

export default function SouthSideMilwaukee() {
  return (
    <>
      <Head>
        <title>South Side Milwaukee Guide 2026 | Authentic Mexican Food & Latino Culture</title>
        <meta name="description" content="Explore Milwaukee's South Side, home to the city's vibrant Latino community. Conejito's, authentic taquerias, Basilica of St. Josaphat, and cultural celebrations." />
        <meta name="keywords" content="South Side Milwaukee, Milwaukee Mexican food, Conejito's, Milwaukee Latino, Mitchell Street, authentic Mexican Milwaukee, Cesar Chavez Drive" />
        <link rel="canonical" href="https://discover-milwaukee.com/south-side-milwaukee" />

        <meta property="og:title" content="South Side Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Authentic Mexican food, vibrant Latino culture, and historic landmarks on Milwaukee's South Side." />
        <meta property="og:url" content="https://discover-milwaukee.com/south-side-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-south-side.jpg" />
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
              South Side Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              The heart of Milwaukee's Latino community. Authentic taquerias, cultural landmarks, and neighborhood pride make the South Side essential Milwaukee.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Where to Eat</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#attractions" style={{ color: c.green2, fontSize: "14px" }}>Attractions</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nightlife" style={{ color: c.green2, fontSize: "14px" }}>Nightlife</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The Neighborhood</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Milwaukee's South Side is where you'll find the city's most authentic Mexican food, vibrant Latino culture, and a community that takes pride in its heritage. From the legendary tacos at Conejito's to the stunning Basilica of St. Josaphat, this area offers experiences you won't find anywhere else in Wisconsin.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Cesar E. Chavez Drive and Mitchell Street are the main arteries, lined with taquerias, panaderias, quinceañera shops, and family-owned businesses serving generations of Milwaukee families. The Mexican Fiesta in August is one of the city's premier cultural celebrations.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Authentic Mexican food—taquerias, bakeries, and family restaurants serving the real thing.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Attractions & Culture</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Historic landmarks, cultural corridors, and annual celebrations.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section id="nightlife" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nightlife</h2>
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
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bay View →</Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Walker's Point →</Link>
              <Link href="/downtown-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Downtown →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Festivals, new spots, and neighborhood news every Wednesday.</p>
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
                <Link href="/riverwest-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Riverwest</Link>
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
