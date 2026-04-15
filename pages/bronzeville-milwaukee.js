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
    name: "Funky Fresh Spring Rolls",
    cuisine: "Fusion/Vietnamese",
    priceRange: "$",
    address: "509 W North Ave, Milwaukee, WI 53212",
    description: "Fresh, creative spring rolls with a fun twist. This fast-casual spot has become a Milwaukee favorite for healthy, flavorful lunches. Owner Nella McBride brings creativity and quality to every roll.",
    mustTry: "Signature spring rolls, peanut sauce, fresh fruit agua fresca",
    bestFor: "Quick lunch, healthy eating, grab-and-go",
    insiderTip: "Try the seasonal specials—they're always creative.",
  },
  {
    name: "Pete's Fruit Market",
    cuisine: "Market/Deli",
    priceRange: "$",
    address: "1400 N King Dr, Milwaukee, WI 53212",
    description: "A Bronzeville institution and one of the best produce markets in the city. Fresh fruits, vegetables, and a deli counter serving homestyle food. A community gathering spot.",
    mustTry: "Fresh produce, deli items, community vibes",
    bestFor: "Grocery shopping, fresh produce, supporting local",
    insiderTip: "Shop early on weekends for the best selection.",
  },
  {
    name: "America's Black Holocaust Museum",
    cuisine: "Cultural Site",
    priceRange: "$",
    address: "401 W North Ave, Milwaukee, WI 53212",
    description: "Not a restaurant, but an essential Bronzeville experience. Founded by lynching survivor James Cameron, this museum documents the African American experience from slavery through civil rights and beyond.",
    mustTry: "Full museum experience, guided tours",
    bestFor: "History, education, understanding Milwaukee's Black history",
    insiderTip: "Allow at least 2-3 hours. The experience is powerful and comprehensive.",
  },
  {
    name: "Black Cat Alley (nearby)",
    cuisine: "Art Installation",
    priceRange: "Free",
    address: "E Ivanhoe Pl, Milwaukee, WI 53202",
    description: "A short walk from Bronzeville, this outdoor gallery features murals by local and international artists. A celebration of urban art and creativity.",
    mustTry: "Self-guided tour, photography",
    bestFor: "Art lovers, Instagram, free activities",
    insiderTip: "Best visited during daylight for photos. New murals rotate regularly.",
  },
];

const attractions = [
  {
    name: "America's Black Holocaust Museum",
    type: "Museum",
    description: "The nation's only museum dedicated to the Black Holocaust, documenting slavery, Jim Crow, lynching, and the ongoing fight for justice. Founded by lynching survivor James Cameron.",
    highlights: ["Black history", "Civil rights", "Education", "Powerful experience"],
  },
  {
    name: "Bronzeville Cultural Center",
    type: "Cultural Center",
    description: "The heart of Milwaukee's African American arts scene. Exhibits, performances, and community events celebrating Black culture and history.",
    highlights: ["Art exhibits", "Performances", "Community events"],
  },
  {
    name: "Historic King Drive",
    type: "Historic District",
    description: "Dr. Martin Luther King Jr. Drive is the main artery of Bronzeville, lined with historic buildings, murals, and businesses that tell the story of Milwaukee's Black community.",
    highlights: ["Historic buildings", "Murals", "Community businesses"],
  },
  {
    name: "Juneteenth Festival",
    type: "Annual Event",
    description: "Milwaukee's Juneteenth celebration on King Drive is one of the largest in the nation, featuring music, food, vendors, and community celebration.",
    highlights: ["June event", "Live music", "Food vendors", "Community"],
  },
  {
    name: "Columbia Savings & Loan Building",
    type: "Historic Landmark",
    description: "This historic building represents the economic empowerment of Milwaukee's Black community. Part of the Bronzeville redevelopment efforts.",
    highlights: ["Historic", "Architecture", "Black history"],
  },
];

const nightlife = [
  {
    name: "Bronzeville Week Events",
    type: "Annual Celebration",
    description: "Each August, Bronzeville Week brings concerts, art walks, and community celebrations to the neighborhood.",
    vibe: "Community, cultural, celebratory",
  },
  {
    name: "The Venue",
    type: "Event Space",
    description: "Multi-purpose event space hosting concerts, parties, and community events. Check their calendar for upcoming shows.",
    vibe: "Live music, events, community",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bronzeville Milwaukee Neighborhood Guide 2026",
    "description": "Explore Bronzeville, Milwaukee's historic African American neighborhood. America's Black Holocaust Museum, Juneteenth, King Drive, and cultural renaissance.",
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
      { "@type": "ListItem", "position": 3, "name": "Bronzeville", "item": "https://discover-milwaukee.com/bronzeville-milwaukee" },
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

export default function BronzevilleMilwaukee() {
  return (
    <>
      <Head>
        <title>Bronzeville Milwaukee Guide 2026 | Black History, Culture & Heritage</title>
        <meta name="description" content="Explore Bronzeville, Milwaukee's historic African American neighborhood. America's Black Holocaust Museum, Juneteenth festival, King Drive, and cultural renaissance." />
        <meta name="keywords" content="Bronzeville Milwaukee, Black Holocaust Museum, Milwaukee Black history, King Drive Milwaukee, Juneteenth Milwaukee, African American Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/bronzeville-milwaukee" />

        <meta property="og:title" content="Bronzeville Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Milwaukee's historic African American neighborhood. Rich history, cultural institutions, and community renaissance." />
        <meta property="og:url" content="https://discover-milwaukee.com/bronzeville-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-bronzeville.jpg" />
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
              Bronzeville
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's historic African American neighborhood experiencing a cultural renaissance. Rich history, powerful institutions, and community pride define this essential Milwaukee district.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#venues" style={{ color: c.green2, fontSize: "14px" }}>Places to Visit</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#attractions" style={{ color: c.green2, fontSize: "14px" }}>Attractions</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#events" style={{ color: c.green2, fontSize: "14px" }}>Events</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The Neighborhood</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Bronzeville's history is Milwaukee's history. From the Great Migration through the civil rights era to today's cultural renaissance, this neighborhood along Dr. Martin Luther King Jr. Drive has been the heart of Black Milwaukee.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Today, Bronzeville is experiencing renewed investment and cultural development. America's Black Holocaust Museum—the only museum of its kind in the nation—anchors the neighborhood's commitment to preserving and sharing African American history. Juneteenth celebrations on King Drive draw tens of thousands annually, making it one of the largest such celebrations in the country.
            </p>
          </section>

          <section id="venues" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Places to Visit</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Cultural institutions, local businesses, and community gathering spots.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Attractions & Culture</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              History, art, and community define the Bronzeville experience.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section id="events" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Events & Celebrations</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bronzeville comes alive with community celebrations throughout the year.
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
              <Link href="/riverwest-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Riverwest →</Link>
              <Link href="/downtown-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Downtown →</Link>
              <Link href="/sherman-park-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Sherman Park →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Community events, cultural happenings, and neighborhood news.</p>
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
                <Link href="/riverwest-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Riverwest</Link>
                <Link href="/downtown-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Downtown</Link>
                <Link href="/sherman-park-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Sherman Park</Link>
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
