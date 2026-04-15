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

const mustSee = [
  { name: "Milwaukee Art Museum", type: "Museum", description: "The Calatrava-designed Quadracci Pavilion with its moving 'wings' is Milwaukee's signature landmark. World-class art collection too.", tip: "Arrive at 10am to watch the wings open." },
  { name: "Third Ward", type: "Neighborhood", description: "Historic warehouse district turned trendy neighborhood. Milwaukee Public Market, boutique shopping, galleries, and great restaurants.", tip: "Start at the Public Market for a food tour." },
  { name: "Lakefront", type: "Outdoor", description: "Lake Michigan's shoreline with beaches, parks, trails, and stunning views. Walk the Riverwalk from downtown to Discovery World.", tip: "Sunset at Veterans Park is magical." },
  { name: "Fiserv Forum & Deer District", type: "Entertainment", description: "Home of the NBA champion Bucks. Even without tickets, the Deer District plaza buzzes with energy on game nights.", tip: "Go on a Bucks home game night for the atmosphere." },
  { name: "Lakefront Brewery", type: "Brewery", description: "The most fun brewery tour in America. Hilarious guides, generous samples, legendary Friday fish fry.", tip: "Book the tour ahead—they sell out on weekends." },
];

const quintessential = [
  { experience: "Friday Fish Fry", description: "A Wisconsin tradition. Battered cod with coleslaw, tartar sauce, and rye bread. Every Friday at most taverns and restaurants.", where: "Lakefront Brewery, Kopp's, any neighborhood tavern" },
  { experience: "Frozen Custard", description: "Not ice cream—denser, richer, creamier. Milwaukee's signature dessert. Get the 'flavor of the day.'", where: "Kopp's (3 locations) or Leon's (South Side)" },
  { experience: "Brewery Tour", description: "This is the city that made Pabst, Schlitz, and Miller. Do at least one tour—Lakefront for fun, Miller for history.", where: "Lakefront Brewery, Miller/Molson Coors" },
  { experience: "Bucks Game", description: "The 2021 NBA champs play in one of the league's best arenas. The Deer District atmosphere is electric.", where: "Fiserv Forum" },
  { experience: "German Food", description: "Milwaukee's German heritage is delicious. Schnitzel, bratwurst, pretzels, and great German beer.", where: "Mader's, Old World Third Street" },
];

const neighborhoods = [
  { name: "Third Ward", vibe: "Trendy/Historic", description: "Boutiques, galleries, Public Market. Milwaukee's SoHo.", good: "Shopping, food, walking" },
  { name: "Downtown", vibe: "Urban/Entertainment", description: "Fiserv Forum, theaters, hotels. The city center.", good: "Sports, shows, convenience" },
  { name: "Bay View", vibe: "Hip/Local", description: "Trendy restaurants, vintage shops, neighborhood bars.", good: "Food, nightlife, authentic MKE" },
  { name: "Walker's Point", vibe: "Artsy/Diverse", description: "Breweries, LGBTQ+ bars, galleries, diverse restaurants.", good: "Nightlife, beer, arts" },
  { name: "East Side", vibe: "Lively/Young", description: "Brady Street, college areas, lakefront access.", good: "Bars, restaurants, energy" },
  { name: "Riverwest", vibe: "Bohemian", description: "Artists, musicians, co-ops. Milwaukee's most alternative neighborhood.", good: "Dive bars, authenticity" },
];

const gettingHere = [
  { method: "Flying", details: "General Mitchell International Airport (MKE) is 10 minutes from downtown. Small, easy airport. Uber/Lyft widely available." },
  { method: "Driving", details: "Chicago: 90 minutes. Madison: 75 minutes. Minneapolis: 5 hours. Free street parking on weekends. Garage parking ~$15-25/day downtown." },
  { method: "Amtrak", details: "Hiawatha line runs 7x daily from Chicago (90 min). Station is downtown near the Intermodal." },
];

const gettingAround = [
  { method: "The Hop", details: "Free streetcar connecting downtown, Third Ward, and Fiserv Forum. Great for visitors staying downtown." },
  { method: "Rideshare", details: "Uber and Lyft widely available. Quick rides between neighborhoods. $8-15 for most in-city trips." },
  { method: "Bublr Bikes", details: "Bike share with 100+ stations. $8/day for unlimited 30-min rides. Lakefront trail is great for biking." },
  { method: "Walking", details: "Downtown, Third Ward, and East Side are very walkable. Riverwalk connects many attractions." },
];

const whenToVisit = [
  { season: "Summer (Jun-Aug)", pros: "Festivals every weekend (including Summerfest), beaches open, outdoor dining. Milwaukee at its best.", cons: "Busiest season, hotel prices higher." },
  { season: "Fall (Sep-Oct)", pros: "Beautiful colors, comfortable temps, fewer crowds. Bucks season starts.", cons: "Weather can turn quickly." },
  { season: "Winter (Nov-Mar)", pros: "Holiday markets, Bucks in full swing, lower prices. Indoor attractions.", cons: "Cold (very cold). Lake effect wind." },
  { season: "Spring (Apr-May)", pros: "City comes alive, Brewers season, blooming gardens.", cons: "Weather unpredictable. Still chilly early on." },
];

const localTips = [
  "Milwaukeeans are friendly—don't be afraid to ask for recommendations.",
  "Friday fish fry is a thing. Pick any tavern and join the tradition.",
  "The lakefront is spectacular—don't skip it.",
  "Parking is easy and cheap compared to other cities.",
  "Layer up—lake effect weather can change quickly.",
  "It's pronounced 'mil-WAU-kee' (not 'mil-WALK-ee').",
  "Cheese curds should squeak when they're fresh. If they don't, they're not fresh.",
  "Say 'bubbler' instead of 'water fountain' to fit in.",
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "First Time in Milwaukee? Essential Visitor's Guide (2026)",
    "description": "Everything you need to know for your first visit to Milwaukee. Must-see attractions, neighborhoods, getting around, and local tips.",
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
      { "@type": "ListItem", "position": 3, "name": "First Time Visitor", "item": "https://discover-milwaukee.com/first-time-milwaukee" },
    ],
  },
};

export default function FirstTimeMilwaukee() {
  return (
    <>
      <Head>
        <title>First Time in Milwaukee? Essential Visitor's Guide (2026)</title>
        <meta name="description" content="Everything you need to know for your first visit to Milwaukee. Must-see attractions, neighborhood guide, getting around, and local tips." />
        <meta name="keywords" content="visiting Milwaukee, Milwaukee travel guide, first time Milwaukee, Milwaukee visitor guide, Milwaukee tourism, things to do Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/first-time-milwaukee" />

        <meta property="og:title" content="First Time in Milwaukee? Essential Visitor's Guide" />
        <meta property="og:description" content="Everything you need to know for your first visit to Milwaukee. Must-see spots, getting around, and local tips." />
        <meta property="og:url" content="https://discover-milwaukee.com/first-time-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-first-time.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>VISITOR GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Welcome to Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee surprises people. It's affordable, friendly, beautiful, and far more vibrant than its humble Midwestern reputation suggests. Here's everything you need to make the most of your first visit.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Must-See Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These are the non-negotiables for first-time visitors.
            </p>
            {mustSee.map((m, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{m.name}</h3>
                  <span style={{ backgroundColor: c.green2, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px" }}>{m.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{m.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Tip: {m.tip}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Quintessential Milwaukee Experiences</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Do these things and you'll leave understanding what Milwaukee is all about.
            </p>
            {quintessential.map((q, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>{q.experience}</h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{q.description}</p>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", margin: 0 }}>Where: {q.where}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Overview</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's neighborhoods each have their own personality.
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              {neighborhoods.map((n, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "16px 20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", margin: 0 }}>{n.name}</h3>
                    <span style={{ backgroundColor: c.orange, color: "white", fontSize: "11px", padding: "3px 8px", borderRadius: "4px" }}>{n.vibe}</span>
                  </div>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.5, marginBottom: "6px" }}>{n.description}</p>
                  <p style={{ color: c.green2, fontSize: "12px", fontWeight: "600", margin: 0 }}>Good for: {n.good}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Getting Here</h2>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              {gettingHere.map((g, i) => (
                <div key={i} style={{ paddingBottom: "16px", marginBottom: "16px", borderBottom: i < gettingHere.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>{g.method}</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>{g.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Getting Around</h2>
            <div style={{ display: "grid", gap: "12px" }}>
              {gettingAround.map((g, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "16px 20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>{g.method}</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>{g.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>When to Visit</h2>
            {whenToVisit.map((w, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>{w.season}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ backgroundColor: `${c.green2}15`, padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>PROS</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{w.pros}</p>
                  </div>
                  <div style={{ backgroundColor: `${c.orange}15`, padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>CONS</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{w.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Local Tips</h2>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {localTips.map((tip, i) => (
                  <li key={i} style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, marginBottom: "8px" }}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Plan Your Trip</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/weekend-in-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Weekend Itinerary →</Link>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Where to Eat →</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Things to Do →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Ready to Explore?</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on what's happening in Milwaukee.</p>
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
                <Link href="/best-restaurants-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Restaurants</Link>
                <Link href="/milwaukee-breweries" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Breweries</Link>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
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
