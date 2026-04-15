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

const fineDining = [
  { name: "Sanford", cuisine: "Contemporary American", price: "$$$$", description: "Milwaukee's crown jewel. Chef Justin Aprahamian's seasonal tasting menus are nationally acclaimed. Intimate, elegant, unforgettable.", tip: "The 5-course tasting menu is the way to go." },
  { name: "Ardent", cuisine: "New American", price: "$$$$", description: "Chef Justin Carlisle's intimate 24-seat restaurant. Creative tasting menus focused on Wisconsin ingredients.", tip: "Book well in advance—very limited seating." },
  { name: "EsterEv", cuisine: "Tasting Menu", price: "$$$$", description: "Hidden behind Odd Duck, this 20-seat gem serves a communal tasting menu experience. Only Thu-Sat.", tip: "Reservations required—unique experience." },
  { name: "Bacchus", cuisine: "American", price: "$$$$", description: "Upscale dining with stunning lakefront views. Excellent wine list, seasonal Wisconsin ingredients.", tip: "Request a window table for sunset views." },
  { name: "Lake Park Bistro", cuisine: "French", price: "$$$", description: "Classic French in a stunning Lake Park pavilion. The terrace overlooking Lake Michigan is magical.", tip: "Summer terrace is Milwaukee's best patio." },
];

const brunch = [
  { name: "Blue's Egg", style: "Creative Brunch", description: "Milwaukee's most popular brunch spot. Creative dishes, great cocktails, always a wait on weekends.", mustTry: "Fried chicken and waffles" },
  { name: "Engine Company No. 3", style: "Firehouse Brunch", description: "Converted firehouse with inventive brunch dishes. The building is as good as the food.", mustTry: "Bourbon maple waffles" },
  { name: "Café Hollander", style: "Belgian", description: "Belgian-inspired brunch with excellent bloody marys and a huge outdoor patio in Downer Ave.", mustTry: "Liège waffles" },
  { name: "Story Hill BKC", style: "Neighborhood", description: "Cozy Story Hill spot with excellent biscuits, pastries, and coffee. Small menu, big flavors.", mustTry: "Any biscuit sandwich" },
];

const foodMarkets = [
  { name: "Milwaukee Public Market", location: "Third Ward", description: "Downtown food hall with 20+ vendors. Cheese curds, seafood, produce, prepared foods. Essential Milwaukee experience.", highlights: ["St. Paul Fish Company", "Foltz Family Market", "Kehr's Candies"] },
  { name: "Crossroads Collective", location: "East Side", description: "Modern food hall in a former Prospect Mall. Rotating local vendors with diverse cuisines.", highlights: ["Laughing Taco", "Meat on the Street", "Float"] },
];

const classicMilwaukee = [
  { item: "Frozen Custard", where: "Kopp's (3 locations) or Leon's (South Side)", why: "Denser and richer than ice cream. Daily flavor of the day. Milwaukee's signature dessert." },
  { item: "Friday Fish Fry", where: "Lakefront Brewery, Kopp's, Kegel's Inn", why: "A Milwaukee tradition. Battered cod with coleslaw, rye bread, and tartar sauce. Every Friday." },
  { item: "Cheese Curds", where: "Milwaukee Public Market, Lakefront Brewery, Any tavern", why: "Squeaky-fresh or beer-battered and fried. Either way, essential Wisconsin." },
  { item: "Bratwurst", where: "Mader's, Usinger's, Miller Park", why: "German heritage food. Best at tailgates or with sauerkraut and mustard." },
  { item: "Butter Burger", where: "Kopp's, Solly's Grille", why: "A patty cooked in butter, often with more butter on top. Gloriously excessive." },
];

const ethnicFood = [
  { cuisine: "Mexican", neighborhood: "South Side", spots: ["Conejito's Place", "Tres Hermanos", "La Casa de Alberto"], description: "Milwaukee's South Side has the most authentic Mexican food in the Midwest. Don't miss." },
  { cuisine: "Italian", neighborhood: "Brady Street", spots: ["Glorioso's Italian Market", "Balzac Wine Bar", "Tenuta's"], description: "Milwaukee's Little Italy. Glorioso's has been family-owned since 1946." },
  { cuisine: "Polish", neighborhood: "South Side", spots: ["Polonez", "Krakus", "Old Town Serbian Gourmet House"], description: "Milwaukee's Polish heritage lives on in these traditional spots." },
  { cuisine: "German", neighborhood: "Old World Third Street", spots: ["Mader's", "Old German Beer Hall", "Kegel's Inn"], description: "Milwaukee's brewing heritage came with incredible German food." },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Foodie Weekend in Milwaukee: Where to Eat Like a Local",
    "description": "Plan the ultimate Milwaukee food weekend. Fine dining, brunch spots, food markets, classic Milwaukee eats, and ethnic neighborhoods.",
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
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://discover-milwaukee.com/explore" },
      { "@type": "ListItem", "position": 3, "name": "Foodie Weekend", "item": "https://discover-milwaukee.com/foodie-weekend-milwaukee" },
    ],
  },
};

export default function FoodieWeekendMilwaukee() {
  return (
    <>
      <Head>
        <title>Foodie Weekend in Milwaukee: Where to Eat Like a Local</title>
        <meta name="description" content="Plan the ultimate Milwaukee food weekend. Fine dining, best brunch, food markets, classic Milwaukee foods, and ethnic neighborhood guides." />
        <meta name="keywords" content="Milwaukee food scene, best restaurants Milwaukee, Milwaukee brunch, Milwaukee food tour, where to eat Milwaukee, foodie Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/foodie-weekend-milwaukee" />

        <meta property="og:title" content="Foodie Weekend in Milwaukee: Where to Eat Like a Local" />
        <meta property="og:description" content="Plan the ultimate Milwaukee food weekend with our guide to fine dining, brunch, food markets, and classic Milwaukee eats." />
        <meta property="og:url" content="https://discover-milwaukee.com/foodie-weekend-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-foodie.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>FOOD GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Eat Your Way Through Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's food scene punches way above its weight. From James Beard-nominated chefs to legendary frozen custard, ethnic neighborhoods to farm-to-table pioneers, this is a seriously underrated food city.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Fine Dining</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee has multiple James Beard-recognized restaurants. These are the special occasion spots.
            </p>
            {fineDining.map((r, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{r.name}</h3>
                  <span style={{ color: c.orange, fontWeight: "700" }}>{r.price}</span>
                </div>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>{r.cuisine}</p>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{r.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Tip: {r.tip}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Brunch Spots</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee takes brunch seriously. Expect waits on weekends.
            </p>
            {brunch.map((b, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{b.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{b.style}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{b.description}</p>
                <div style={{ backgroundColor: `${c.orange}15`, padding: "8px 12px", borderRadius: "6px" }}>
                  <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Must Try: {b.mustTry}</p>
                </div>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Food Markets</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Graze your way through Milwaukee's food halls.
            </p>
            {foodMarkets.map((m, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "700", margin: 0 }}>{m.name}</h3>
                  <span style={{ backgroundColor: c.beige, color: c.green1, fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "20px" }}>{m.location}</span>
                </div>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6, marginBottom: "12px" }}>{m.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {m.highlights.map((h, j) => (
                    <span key={j} style={{ backgroundColor: c.green2, color: "white", fontSize: "12px", padding: "4px 10px", borderRadius: "20px" }}>{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Classic Milwaukee Foods</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              You can't leave without trying these Milwaukee originals.
            </p>
            {classicMilwaukee.map((c2, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>{c2.item}</h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{c2.why}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Where: {c2.where}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Ethnic Food Neighborhoods</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's diversity shows in its neighborhoods. Venture beyond downtown for incredible ethnic food.
            </p>
            {ethnicFood.map((e, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{e.cuisine}</h3>
                  <span style={{ backgroundColor: c.orange, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px" }}>{e.neighborhood}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "10px" }}>{e.description}</p>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", margin: 0 }}>Try: {e.spots.join(", ")}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Related Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants →</Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Brunch →</Link>
              <Link href="/new-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>New Openings →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Stay Hungry</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on new restaurants, openings, and food events.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>Explore Milwaukee</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/best-restaurants-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Best Restaurants</Link>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/south-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>South Side</Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
