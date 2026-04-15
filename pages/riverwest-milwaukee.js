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
    name: "Fuel Cafe",
    cuisine: "Cafe/Brunch",
    priceRange: "$",
    address: "818 E Center St, Milwaukee, WI 53212",
    description: "The heart and soul of Riverwest. This vegetarian-friendly cafe has been fueling the neighborhood's artists, activists, and eccentrics since 1993. Strong coffee, hearty breakfast, and a bulletin board full of local happenings.",
    mustTry: "Any breakfast burrito, French toast, strong coffee",
    bestFor: "Lazy mornings, people watching, community vibes",
    insiderTip: "Cash only. Weekend mornings can have a wait, but the patio is worth it.",
  },
  {
    name: "Comet Cafe",
    cuisine: "American Comfort",
    priceRange: "$",
    address: "1947 N Farwell Ave, Milwaukee, WI 53202",
    description: "A Milwaukee institution serving elevated comfort food with a punk rock attitude. Famous for meat loaf, vegan options, and a Bloody Mary bar that's become a Sunday tradition. The tattoo-friendly vibe is quintessentially Riverwest-adjacent.",
    mustTry: "Meat loaf, bacon-wrapped dates, Sunday Bloody Mary bar",
    bestFor: "Brunch, late-night eats, comfort food cravings",
    insiderTip: "The Bloody Mary bar on Sundays is legendary—build your own masterpiece.",
  },
  {
    name: "Uptowner",
    cuisine: "Bar/Pub Food",
    priceRange: "$",
    address: "1032 E Center St, Milwaukee, WI 53212",
    description: "A true Riverwest dive bar serving cheap drinks and surprisingly good food. The jukebox is excellent, the crowd is eclectic, and the cheeseburgers are some of the best in the city.",
    mustTry: "Cheeseburger, cheap beer, jukebox picks",
    bestFor: "Dive bar lovers, late nights, cash in your pocket",
    insiderTip: "Cash only, ATM inside. The burger is seriously underrated.",
  },
  {
    name: "Riverwest Co-op",
    cuisine: "Grocery/Deli",
    priceRange: "$",
    address: "733 E Clarke St, Milwaukee, WI 53212",
    description: "Member-owned cooperative grocery with a small deli serving fresh, local, and organic options. A perfect stop for a quick lunch or to stock up on specialty items.",
    mustTry: "Deli sandwiches, local produce, bulk goods",
    bestFor: "Quick lunch, grocery run, supporting local",
    insiderTip: "Non-members can shop too—just a small markup. Check the events board.",
  },
  {
    name: "Brewers Hill Eatery",
    cuisine: "American/Brunch",
    priceRange: "$$",
    address: "1060 E Pleasant St, Milwaukee, WI 53202",
    description: "Neighborhood spot on the edge of Riverwest/Brewers Hill serving solid American fare with great brunch options. The patio is lovely in summer.",
    mustTry: "Brunch dishes, burgers, craft beer selection",
    bestFor: "Weekend brunch, casual dinners",
    insiderTip: "Quieter than East Side spots but just as good.",
  },
  {
    name: "Foundation",
    cuisine: "Tiki Bar/Pizza",
    priceRange: "$$",
    address: "2718 N Bremen St, Milwaukee, WI 53212",
    description: "A tiki bar in Riverwest serving excellent Neapolitan-style pizza? It shouldn't work, but it absolutely does. Strong tropical drinks, creative pies, and a unique vibe make this a neighborhood gem.",
    mustTry: "Tiki cocktails, pizza specials, the atmosphere",
    bestFor: "Unique date night, pizza lovers, cocktail enthusiasts",
    insiderTip: "The tiki drinks are strong—pace yourself.",
  },
];

const attractions = [
  {
    name: "Riverwest 24 (Annual Event)",
    type: "Cycling Event",
    description: "The legendary 24-hour bike race through Riverwest streets. Teams race around the clock in this chaotic, community-driven celebration of cycling and neighborhood pride.",
    highlights: ["July event", "Community spirit", "24-hour race"],
  },
  {
    name: "Linneman's Riverwest Inn",
    type: "Music Venue/Bar",
    description: "Intimate live music venue hosting local and touring acts. Folk, blues, americana, and everything in between. One of the best small music rooms in the city.",
    highlights: ["Live music", "Intimate setting", "Local acts"],
  },
  {
    name: "Art*Bar",
    type: "Bar/Gallery",
    description: "Part bar, part art gallery, all Riverwest. Rotating local art exhibits, cheap drinks, and a cast of characters that exemplifies the neighborhood.",
    highlights: ["Local art", "Cheap drinks", "Character"],
  },
  {
    name: "Gordon Park",
    type: "Park",
    description: "Beautiful green space along the Milwaukee River with walking trails, picnic areas, and a popular dog park. A peaceful escape within the city.",
    highlights: ["Milwaukee River", "Dog park", "Walking trails"],
  },
  {
    name: "Bremen Street Farmers Market",
    type: "Market (Seasonal)",
    description: "Sunday morning farmers market featuring local produce, baked goods, and artisan products. The community gathering spot of Riverwest summers.",
    highlights: ["Local produce", "Sunday mornings", "Community vibe"],
  },
];

const nightlife = [
  {
    name: "Linneman's Riverwest Inn",
    type: "Live Music",
    description: "The definitive Riverwest music venue. Intimate shows, great sound, and a crowd that's actually there for the music.",
    vibe: "Music-focused, intimate, authentic",
  },
  {
    name: "Foundation",
    type: "Tiki Bar",
    description: "Tropical drinks and pizza in a quirky space. The tiki theme is executed well, and the drinks are dangerously good.",
    vibe: "Tropical, unique, date night",
  },
  {
    name: "The Uptowner",
    type: "Dive Bar",
    description: "Classic dive with great jukebox, cheap drinks, and excellent burgers. Cash only, no pretense.",
    vibe: "Dive bar, local, unpretentious",
  },
  {
    name: "Art*Bar",
    type: "Art Bar",
    description: "Drinks surrounded by rotating local art. Eclectic crowd, neighborhood staple.",
    vibe: "Artistic, eclectic, local",
  },
  {
    name: "Falcon Bowl",
    type: "Bowling/Bar",
    description: "Retro bowling alley with cheap lanes, cheap drinks, and a no-frills attitude. A neighborhood institution.",
    vibe: "Retro, fun, unpretentious",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Riverwest Milwaukee Neighborhood Guide 2026",
    "description": "Explore Milwaukee's most bohemian neighborhood. Riverwest guide featuring Fuel Cafe, local art, live music, and authentic community vibes.",
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
      { "@type": "ListItem", "position": 3, "name": "Riverwest", "item": "https://discover-milwaukee.com/riverwest-milwaukee" },
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

export default function RiverwestMilwaukee() {
  return (
    <>
      <Head>
        <title>Riverwest Milwaukee Guide 2026 | Bohemian, Artsy & Authentic</title>
        <meta name="description" content="Discover Riverwest, Milwaukee's most bohemian neighborhood. Fuel Cafe, live music at Linneman's, local art, dive bars, and authentic community. Complete guide to Riverwest." />
        <meta name="keywords" content="Riverwest Milwaukee, Fuel Cafe, Riverwest restaurants, Milwaukee bohemian neighborhood, Linneman's, Riverwest bars, things to do Riverwest" />
        <link rel="canonical" href="https://discover-milwaukee.com/riverwest-milwaukee" />

        <meta property="og:title" content="Riverwest Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Milwaukee's most bohemian neighborhood. Artists, activists, great food, live music, and authentic community vibes." />
        <meta property="og:url" content="https://discover-milwaukee.com/riverwest-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-riverwest.jpg" />
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
              Riverwest
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's bohemian heart. Artists, activists, eccentrics, and everyone in between call this proudly weird neighborhood home.
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
              Riverwest is Milwaukee's most unapologetically itself neighborhood. Bordered by the Milwaukee River and home to a diverse mix of artists, students, longtime residents, and free spirits, it's the kind of place where community gardens thrive, murals cover the walls, and nobody's trying too hard to be cool. The annual Riverwest 24 bike race captures the spirit perfectly: grassroots, chaotic, inclusive, and deeply local. This isn't a neighborhood for tourists—it's a neighborhood for people.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Unpretentious, affordable, and full of character—dining in Riverwest reflects the neighborhood.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Things to Do</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Live music, local art, outdoor spaces, and community events define the Riverwest experience.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section id="nightlife" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nightlife</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Dive bars, music venues, and places where everyone knows your name.
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
              <Link href="/brady-street-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Brady Street →</Link>
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bay View →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Local events, new spots, and neighborhood news every Wednesday.</p>
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
                <Link href="/downtown-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Downtown</Link>
                <Link href="/brady-street-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Brady Street</Link>
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
