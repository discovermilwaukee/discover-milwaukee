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
    name: "Maxie's Southern Comfort",
    cuisine: "Southern",
    priceRange: "$$",
    address: "6732 W Fairview Ave, Milwaukee, WI 53213",
    description: "Southern comfort food done right. Gumbo, po' boys, jambalaya, and a great bourbon selection make this a neighborhood favorite. The cozy atmosphere is perfect for a relaxed dinner.",
    mustTry: "Gumbo, po' boys, bourbon flights",
    bestFor: "Casual dinners, Southern food lovers, comfort food",
    insiderTip: "The blackened catfish is outstanding.",
  },
  {
    name: "Ono Kine Grindz",
    cuisine: "Hawaiian",
    priceRange: "$$",
    address: "7215 W North Ave, Wauwatosa, WI 53213",
    description: "Authentic Hawaiian plate lunch in Milwaukee. Kalua pork, loco moco, and spam musubi—the real deal from owners with island roots. A unique find in the Midwest.",
    mustTry: "Kalua pork, loco moco, mac salad",
    bestFor: "Hawaiian food craving, unique eats, lunch",
    insiderTip: "Portions are generous—plate lunches are filling.",
  },
  {
    name: "Story Hill BKC",
    cuisine: "American/Brunch",
    priceRange: "$$",
    address: "5100 W Bluemound Rd, Milwaukee, WI 53208",
    description: "Elevated comfort food in a welcoming neighborhood setting. The brunch is popular, and the seasonal menu keeps regulars coming back. Beer cheese soup is a local legend.",
    mustTry: "Beer cheese soup, brunch items, seasonal specials",
    bestFor: "Brunch, family dinners, neighborhood spot",
    insiderTip: "Make reservations for weekend brunch—it gets busy.",
  },
  {
    name: "Engine Company No. 3",
    cuisine: "American/Pizza",
    priceRange: "$$",
    address: "217 W National Ave, Milwaukee, WI 53204",
    description: "Located in a restored firehouse, serving creative American cuisine and excellent Detroit-style pizza. The historic setting adds to the experience.",
    mustTry: "Detroit-style pizza, craft cocktails",
    bestFor: "Date nights, unique setting, pizza lovers",
    insiderTip: "The Detroit-style pizza is some of the best in the city.",
  },
];

const attractions = [
  {
    name: "Washington Park",
    type: "Park",
    description: "One of Milwaukee's largest and most beautiful parks, designed by Frederick Law Olmsted's firm. Features a lagoon, bandshell, Urban Ecology Center, and the Milwaukee County Zoo adjacent.",
    highlights: ["Large park", "Lagoon", "Urban Ecology Center", "Zoo nearby"],
  },
  {
    name: "Milwaukee County Zoo",
    type: "Zoo",
    description: "One of the finest zoos in the country featuring animals from around the world. Family favorite with seasonal events, train rides, and conservation education.",
    highlights: ["Family-friendly", "World-class", "Events", "All ages"],
  },
  {
    name: "Historic Homes",
    type: "Architecture",
    description: "Washington Heights is known for its beautiful early 20th century homes—Arts & Crafts bungalows, American Foursquares, and Colonial Revivals line the tree-shaded streets.",
    highlights: ["Architecture", "Historic homes", "Walkable streets"],
  },
  {
    name: "Urban Ecology Center",
    type: "Nature Center",
    description: "Environmental education center in Washington Park offering programs, equipment rentals, and outdoor activities. Kayak, snowshoe, or bike rentals available.",
    highlights: ["Nature programs", "Equipment rentals", "Family activities"],
  },
  {
    name: "Story Hill",
    type: "Neighborhood",
    description: "Adjacent micro-neighborhood near the stadium with charming homes and increasing restaurant development.",
    highlights: ["Residential", "Near stadium", "Growing dining scene"],
  },
];

const nightlife = [
  {
    name: "Maxie's",
    type: "Bar/Restaurant",
    description: "Great bourbon selection and Southern hospitality make this a good spot for evening drinks.",
    vibe: "Casual, bourbon, Southern",
  },
  {
    name: "Nearby Tosa Village",
    type: "Entertainment District",
    description: "The Wauwatosa Village area, a short drive away, offers additional restaurants, bars, and entertainment options.",
    vibe: "Suburban, variety, family-friendly",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Washington Heights Milwaukee Neighborhood Guide 2026",
    "description": "Explore Washington Heights, a family-friendly Milwaukee neighborhood with beautiful historic homes, Washington Park, and the Milwaukee County Zoo.",
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
      { "@type": "ListItem", "position": 3, "name": "Washington Heights", "item": "https://discover-milwaukee.com/washington-heights-milwaukee" },
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

export default function WashingtonHeightsMilwaukee() {
  return (
    <>
      <Head>
        <title>Washington Heights Milwaukee Guide 2026 | Zoo, Parks & Family-Friendly</title>
        <meta name="description" content="Explore Washington Heights, Milwaukee's family-friendly neighborhood with the Milwaukee County Zoo, beautiful Washington Park, historic homes, and local restaurants." />
        <meta name="keywords" content="Washington Heights Milwaukee, Milwaukee County Zoo, Washington Park, Milwaukee family neighborhood, Story Hill Milwaukee, Milwaukee historic homes" />
        <link rel="canonical" href="https://discover-milwaukee.com/washington-heights-milwaukee" />

        <meta property="og:title" content="Washington Heights Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Family-friendly neighborhood with the Milwaukee County Zoo, beautiful parks, and historic homes." />
        <meta property="og:url" content="https://discover-milwaukee.com/washington-heights-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-washington-heights.jpg" />
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
              Washington Heights
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              A family-friendly neighborhood with the Milwaukee County Zoo, beautiful parks, historic homes, and a growing restaurant scene.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The Neighborhood</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Washington Heights is where Milwaukee families have put down roots for generations. Tree-lined streets showcase beautiful early 20th century homes—Craftsman bungalows, American Foursquares, and Colonial Revivals that give the neighborhood its character.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              The Milwaukee County Zoo—one of the nation's finest—anchors the western edge, while Washington Park provides green space, the Urban Ecology Center, and community gathering spots. The adjacent Story Hill area is seeing a mini-renaissance with new restaurants joining established favorites.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Neighborhood gems serving everything from Southern comfort to Hawaiian plates.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Things to Do</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The zoo, parks, and family-friendly attractions.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Neighborhoods</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/sherman-park-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Sherman Park →</Link>
              <Link href="/riverwest-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Riverwest →</Link>
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bay View →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Family events, new spots, and neighborhood news every Wednesday.</p>
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
                <Link href="/sherman-park-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Sherman Park</Link>
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
