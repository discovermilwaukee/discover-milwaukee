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

const museums = [
  { name: "Milwaukee Art Museum", type: "Art", description: "The Calatrava-designed Quadracci Pavilion is an architectural icon. The Burke Brise Soleil 'wings' open at 10am daily. 25,000+ works spanning centuries.", highlight: "The wings opening ceremony at 10am", tip: "Free first Thursday of every month." },
  { name: "Milwaukee Public Museum", type: "Natural History", description: "Classic natural history museum with the famous Streets of Old Milwaukee, butterfly garden, and dinosaur hall. A Milwaukee institution.", highlight: "Walking through old Milwaukee at night", tip: "New museum opens 2027—visit the historic building now." },
  { name: "Grohmann Museum", type: "Art", description: "World's largest collection of art depicting human work—from ancient times to the modern era. Fascinating and unique.", highlight: "The rooftop sculpture garden", tip: "Often overlooked—rarely crowded." },
  { name: "Museum of Wisconsin Art (MOWA)", type: "Art", description: "Just north in West Bend, focused exclusively on Wisconsin artists. Beautiful building, excellent collection.", highlight: "Wisconsin-focused art you won't see elsewhere", tip: "Worth the 30-minute drive." },
  { name: "Harley-Davidson Museum", type: "History/Auto", description: "Even non-riders love this museum. Over 450 motorcycles plus exhibits on American manufacturing and design history.", highlight: "The custom bikes and racing history", tip: "The restaurant is surprisingly good." },
  { name: "America's Black Holocaust Museum", type: "History", description: "Powerful museum in Bronzeville documenting the history and ongoing legacy of slavery and racial injustice in America.", highlight: "The deeply moving exhibits", tip: "Give yourself time to process." },
];

const theaters = [
  { name: "Pabst Theater", built: "1895", description: "Historic Victorian theater hosting concerts, comedy, and special events. The ornate interior is stunning. Excellent acoustics.", vibe: "Intimate historic venue" },
  { name: "Riverside Theater", built: "1928", description: "Art Deco masterpiece hosting major touring acts. The lobby architecture alone is worth the visit.", vibe: "Mid-size concert venue" },
  { name: "Marcus Performing Arts Center", built: "1969", description: "Milwaukee's main performing arts complex. Home to Milwaukee Symphony, Milwaukee Ballet, and Broadway touring shows.", vibe: "Milwaukee's arts hub" },
  { name: "Turner Hall", built: "1882", description: "Historic German heritage hall turned concert venue. Great sight lines, classic Milwaukee vibe.", vibe: "Rock and indie shows" },
  { name: "Milwaukee Rep", built: "1954", description: "One of the largest regional theaters in the country. Three stages, excellent productions year-round.", vibe: "Professional theater" },
];

const liveMusic = [
  { name: "Summerfest", type: "Festival", description: "The world's largest music festival. 11 days, 1,000+ acts, multiple stages on the lakefront. Late June-early July.", location: "Henry Maier Festival Park" },
  { name: "The Rave / Eagles Club", type: "Multi-Venue", description: "Historic venue with multiple rooms hosting everything from club shows to major touring acts. Eclectic booking.", location: "Downtown" },
  { name: "Shank Hall", type: "Intimate Venue", description: "Small listening room perfect for singer-songwriters and acoustic acts. Great sound, intimate setting.", location: "East Side" },
  { name: "Linneman's Riverwest Inn", type: "Folk/Americana", description: "Legendary folk music venue with shows in the back room. Intimate and authentic.", location: "Riverwest" },
  { name: "Jazz Estate", type: "Jazz Club", description: "Milwaukee's dedicated jazz club. Intimate setting, quality acts, proper jazz club atmosphere.", location: "East Side" },
];

const galleries = [
  { name: "Portrait Society Gallery", hood: "Third Ward", focus: "Contemporary portraiture and figure-based art" },
  { name: "Usable Space", hood: "Walker's Point", focus: "Emerging and experimental artists" },
  { name: "MARN (Milwaukee Artist Resource Network)", hood: "Walker's Point", focus: "Local artist studios and exhibitions" },
  { name: "Var Gallery", hood: "Bay View", focus: "Photography and new media" },
  { name: "Green Gallery", hood: "Various", focus: "Rotating conceptual exhibitions" },
];

const streetArt = [
  { name: "Black Cat Alley", location: "East Side near Brady Street", description: "Outdoor gallery of murals by local and international artists. Updated regularly. Free and always accessible." },
  { name: "Walker's Point Murals", location: "Walker's Point", description: "Scattered throughout the neighborhood. The area's artistic character shows on every block." },
  { name: "Sculpture Milwaukee", location: "Downtown", description: "Annual outdoor sculpture exhibition along Wisconsin Avenue. New pieces each summer." },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arts & Culture Weekend in Milwaukee: Museums, Music & More",
    "description": "Plan an arts and culture weekend in Milwaukee. Museums, theaters, live music venues, galleries, and street art guide.",
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
      { "@type": "ListItem", "position": 3, "name": "Arts & Culture", "item": "https://discover-milwaukee.com/arts-culture-milwaukee" },
    ],
  },
};

export default function ArtsCultureMilwaukee() {
  return (
    <>
      <Head>
        <title>Arts & Culture Weekend in Milwaukee: Museums, Music & More</title>
        <meta name="description" content="Plan an arts and culture weekend in Milwaukee. Guide to museums, theaters, live music venues, galleries, and street art." />
        <meta name="keywords" content="Milwaukee museums, Milwaukee Art Museum, Milwaukee theater, Milwaukee live music, Milwaukee galleries, arts Milwaukee, Pabst Theater" />
        <link rel="canonical" href="https://discover-milwaukee.com/arts-culture-milwaukee" />

        <meta property="og:title" content="Arts & Culture Weekend in Milwaukee: Museums, Music & More" />
        <meta property="og:description" content="Plan an arts and culture weekend in Milwaukee with our guide to museums, theaters, and live music." />
        <meta property="og:url" content="https://discover-milwaukee.com/arts-culture-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-arts.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>ARTS GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Arts & Culture in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From a Calatrava-designed museum to historic theaters, jazz clubs to street art alleys—Milwaukee's arts scene is vibrant, diverse, and constantly evolving.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Museums</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's museums rival larger cities—and the Art Museum is world-famous.
            </p>
            {museums.map((m, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{m.name}</h3>
                  <span style={{ backgroundColor: c.green2, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px" }}>{m.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{m.description}</p>
                <div style={{ backgroundColor: `${c.orange}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>DON'T MISS</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{m.highlight}</p>
                </div>
                <p style={{ color: "#777", fontSize: "13px", margin: 0 }}>Tip: {m.tip}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Historic Theaters</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's historic theaters are architectural gems worth visiting even before the show starts.
            </p>
            {theaters.map((t, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{t.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>Est. {t.built}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{t.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>{t.vibe}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Live Music Venues</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From the world's largest music festival to intimate jazz clubs.
            </p>
            {liveMusic.map((v, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{v.name}</h3>
                  <span style={{ backgroundColor: c.orange, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px" }}>{v.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{v.description}</p>
                <p style={{ color: "#777", fontSize: "13px", margin: 0 }}>{v.location}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Galleries</h2>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              {galleries.map((g, i) => (
                <div key={i} style={{ paddingBottom: "16px", marginBottom: "16px", borderBottom: i < galleries.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", margin: 0 }}>{g.name}</h4>
                    <span style={{ backgroundColor: c.beige, color: c.green1, fontSize: "11px", padding: "3px 8px", borderRadius: "4px" }}>{g.hood}</span>
                  </div>
                  <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{g.focus}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Street Art & Public Art</h2>
            {streetArt.map((s, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{s.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{s.location}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{s.description}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Explore More</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do →</Link>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Third Ward →</Link>
              <Link href="/bronzeville-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bronzeville →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Stay Inspired</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on shows, exhibitions, and cultural events.</p>
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
                <Link href="/things-to-do-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/milwaukee-nightlife" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Nightlife</Link>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>East Side</Link>
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
