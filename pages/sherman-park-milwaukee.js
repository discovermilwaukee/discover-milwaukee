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
    name: "Daddy's Soul Food & Grille",
    cuisine: "Soul Food",
    priceRange: "$",
    address: "754 N 27th St, Milwaukee, WI 53208",
    description: "Authentic soul food that's earned a devoted following. Fried chicken, mac and cheese, collard greens—all the classics done right. A neighborhood institution serving comfort food at its finest.",
    mustTry: "Fried chicken, mac and cheese, sweet potato pie",
    bestFor: "Soul food cravings, family dinners, comfort food",
    insiderTip: "The portions are generous. Come hungry.",
  },
  {
    name: "Mr. Perkins Family Restaurant",
    cuisine: "Soul Food/American",
    priceRange: "$",
    address: "2001 W Atkinson Ave, Milwaukee, WI 53209",
    description: "A Milwaukee institution for decades. Mr. Perkins serves up soul food classics and American breakfast favorites in a welcoming, family-friendly environment.",
    mustTry: "Breakfast, fried fish, homestyle dinners",
    bestFor: "Breakfast, family meals, classic soul food",
    insiderTip: "Weekend breakfast can get busy—go early.",
  },
  {
    name: "The Tandem",
    cuisine: "Southern/Soul Food",
    priceRange: "$$",
    address: "1848 W Fond du Lac Ave, Milwaukee, WI 53205",
    description: "Elevated soul food in a welcoming, community-focused restaurant. The Tandem operates on a pay-what-you-can model for those in need while serving exceptional food. Their fried chicken is legendary.",
    mustTry: "Fried chicken, seasonal sides, community spirit",
    bestFor: "Soul food, community support, great chicken",
    insiderTip: "Support their mission—pay it forward if you can.",
  },
  {
    name: "Maxie's Southern Comfort",
    cuisine: "Southern",
    priceRange: "$$",
    address: "6732 W Fairview Ave, Milwaukee, WI 53213",
    description: "Southern-style comfort food in a casual, welcoming setting. Great cocktails complement the menu of po' boys, gumbo, and classic Southern dishes.",
    mustTry: "Po' boys, gumbo, bourbon cocktails",
    bestFor: "Southern cravings, casual dinners, date nights",
    insiderTip: "Happy hour deals are solid.",
  },
];

const attractions = [
  {
    name: "Sherman Park",
    type: "Park",
    description: "The neighborhood's namesake park featuring beautiful green space, walking paths, a lagoon, and community gathering areas. A peaceful urban oasis.",
    highlights: ["Green space", "Lagoon", "Walking paths", "Community events"],
  },
  {
    name: "Sherman Park Historic District",
    type: "Historic District",
    description: "Beautiful early 20th century homes line the streets of this historic district. Craftsman bungalows, American Foursquares, and Tudor Revivals showcase the neighborhood's architectural heritage.",
    highlights: ["Historic homes", "Architecture", "Walkable streets"],
  },
  {
    name: "Washington Park",
    type: "Park",
    description: "One of Milwaukee's largest parks featuring a lagoon, golf course, Urban Ecology Center, and the Milwaukee County Zoo nearby. A major community asset.",
    highlights: ["Large park", "Zoo nearby", "Golf course", "Lagoon"],
  },
  {
    name: "Community Markets",
    type: "Local Markets",
    description: "Local markets and community events bring neighbors together, especially during summer months with pop-up markets and block parties.",
    highlights: ["Local vendors", "Community spirit", "Seasonal events"],
  },
];

const nightlife = [
  {
    name: "Garfield's 502",
    type: "Bar & Grill",
    description: "Local bar and grill with a welcoming atmosphere. Good food, strong drinks, and a place where everybody knows your name.",
    vibe: "Local, friendly, laid-back",
  },
  {
    name: "Community Events",
    type: "Block Parties",
    description: "Sherman Park is known for its community block parties and neighborhood events that bring residents together.",
    vibe: "Community, family-friendly, celebratory",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sherman Park Milwaukee Neighborhood Guide 2026",
    "description": "Explore Sherman Park, a historic Milwaukee neighborhood with beautiful homes, excellent soul food, and strong community spirit.",
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
      { "@type": "ListItem", "position": 3, "name": "Sherman Park", "item": "https://discover-milwaukee.com/sherman-park-milwaukee" },
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

export default function ShermanParkMilwaukee() {
  return (
    <>
      <Head>
        <title>Sherman Park Milwaukee Guide 2026 | Historic Homes, Soul Food & Community</title>
        <meta name="description" content="Explore Sherman Park, Milwaukee's historic neighborhood with beautiful early 20th century homes, excellent soul food, and strong community spirit." />
        <meta name="keywords" content="Sherman Park Milwaukee, Milwaukee soul food, Sherman Park restaurants, historic Milwaukee neighborhoods, Washington Park Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/sherman-park-milwaukee" />

        <meta property="og:title" content="Sherman Park Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Historic homes, excellent soul food, and strong community spirit define Sherman Park." />
        <meta property="og:url" content="https://discover-milwaukee.com/sherman-park-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-sherman-park.jpg" />
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
              Sherman Park
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              A historic Milwaukee neighborhood with beautiful homes, excellent soul food, community pride, and resilient spirit.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The Neighborhood</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Sherman Park is a neighborhood of beautiful historic homes, tree-lined streets, and deep community roots. The early 20th century architecture—Craftsman bungalows, American Foursquares, and Tudor Revivals—makes for stunning neighborhoods that feel distinctly Milwaukee. The area's soul food restaurants serve some of the best comfort food in the city, and the community's resilience and pride are evident in the neighbors who've lived here for generations.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Some of Milwaukee's best soul food lives in Sherman Park.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Things to See</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Parks, historic streets, and community gathering spots.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Neighborhoods</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/bronzeville-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bronzeville →</Link>
              <Link href="/washington-heights-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Washington Heights →</Link>
              <Link href="/riverwest-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Riverwest →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Community events and neighborhood news every Wednesday.</p>
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
                <Link href="/bronzeville-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bronzeville</Link>
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
