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

const parks = [
  { name: "Lake Park", designer: "Frederick Law Olmsted", description: "Stunning bluffs overlooking Lake Michigan. Trails, a lighthouse, a golf course, and one of Milwaukee's best biergartens. Classic Olmsted design.", highlights: ["North Point Lighthouse", "Lake Park Bistro", "Ravine trails"], mustDo: "Climb North Point Lighthouse for panoramic views." },
  { name: "Veterans Park", designer: "City Park", description: "Lakefront park connecting downtown to the lake. Kite flying, frisbee, festivals, and stunning skyline views. Home to the lakefront fireworks.", highlights: ["Kite flying", "Skyline views", "Festival grounds"], mustDo: "Sunset picnic with the skyline behind you." },
  { name: "Lakeshore State Park", designer: "State Park", description: "The only urban state park in Wisconsin. A peaceful island connected to downtown by footbridge. Incredible skyline views.", highlights: ["Downtown views", "Quiet trails", "Fishing"], mustDo: "Evening walk with lit-up downtown as a backdrop." },
  { name: "Estabrook Park", designer: "County Park", description: "North side park along the Milwaukee River. Great for families with a beer garden, trails, and disc golf.", highlights: ["Estabrook Beer Garden", "River trails", "Disc golf"], mustDo: "Post-hike beer at the riverside beer garden." },
  { name: "Whitnall Park", designer: "County Park", description: "One of the largest municipal parks in the country. Home to Boerner Botanical Gardens and miles of trails.", highlights: ["Boerner Botanical Gardens", "Hiking trails", "Golf"], mustDo: "Spring visit to Boerner Botanical Gardens." },
];

const lakefront = [
  { activity: "Oak Leaf Trail", description: "125-mile multi-use trail circling Milwaukee County. The lakefront section is the most scenic—flat, paved, and perfect for biking or running.", distance: "Lakefront section: ~10 miles" },
  { activity: "Bradford Beach", description: "Milwaukee's main urban beach. Volleyball courts, lifeguards in summer, tiki bar vibes. The place to be on hot summer days.", season: "Summer only" },
  { activity: "McKinley Beach", description: "Smaller, quieter alternative to Bradford. Popular with families and those seeking less crowded sand.", season: "Summer only" },
  { activity: "South Shore Beach", description: "Bay View's beach with a large park, pavilion, and great skyline views. More neighborhood feel.", season: "Summer only" },
];

const water = [
  { activity: "Kayaking", provider: "Milwaukee Kayak Company", description: "Paddle the Milwaukee River through downtown. See the city from a totally different perspective. Sunset tours are magical.", location: "Multiple launch points" },
  { activity: "Paddleboarding", provider: "Various rentals", description: "SUP on the calm Milwaukee River or venture onto Lake Michigan on calm days. Rentals available along the lakefront.", location: "Lakefront & River" },
  { activity: "Sailing", provider: "Milwaukee Community Sailing Center", description: "Learn to sail on Lake Michigan. Classes for all levels, plus rentals for certified sailors.", location: "McKinley Marina" },
  { activity: "Boat Tours", provider: "Milwaukee Boat Line", description: "River cruises through downtown, harbor tours, and sunset cruises. A relaxing way to see the city.", location: "Riverwalk downtown" },
];

const biking = [
  { trail: "Oak Leaf Trail - Lakefront", type: "Paved Multi-Use", description: "The crown jewel. Flat lakefront riding with stunning views. Connect to downtown, Bay View, and beyond.", difficulty: "Easy" },
  { trail: "Hank Aaron State Trail", type: "Paved Multi-Use", description: "Connects Miller Park to downtown through the Menomonee Valley. Industrial heritage meets urban nature.", difficulty: "Easy" },
  { trail: "Bublr Bikes", type: "Bike Share", description: "Milwaukee's bike share with 100+ stations. Perfect for casual city exploring. $8/day unlimited 30-min rides.", difficulty: "Easy" },
  { trail: "Three Bridges Park", type: "Nature Trails", description: "Unique park with trails weaving through a restored prairie and wetland in the Menomonee Valley.", difficulty: "Easy-Moderate" },
];

const seasonal = [
  { season: "Spring", activities: ["Boerner Botanical Gardens", "Hiking as snow melts", "Farmers markets return"], note: "Weather unpredictable—layer up" },
  { season: "Summer", activities: ["Beach days", "Paddling", "Festivals every weekend", "Outdoor dining"], note: "Peak season—Milwaukee comes alive" },
  { season: "Fall", activities: ["Fall colors in parks", "Apple picking nearby", "Cooler hiking"], note: "September-October is gorgeous" },
  { season: "Winter", activities: ["Red Arrow Park ice skating", "Cross-country skiing", "Sledding at Whitnall"], note: "Bundle up—Lake Michigan is cold" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Outdoor Weekend in Milwaukee: Parks, Trails & Lake Activities",
    "description": "Plan an active outdoor weekend in Milwaukee. Parks, lakefront trails, water activities, biking routes, and seasonal outdoor activities.",
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
      { "@type": "ListItem", "position": 3, "name": "Outdoor Weekend", "item": "https://discover-milwaukee.com/outdoor-weekend-milwaukee" },
    ],
  },
};

export default function OutdoorWeekendMilwaukee() {
  return (
    <>
      <Head>
        <title>Outdoor Weekend in Milwaukee: Parks, Trails & Lake Activities</title>
        <meta name="description" content="Plan an active outdoor weekend in Milwaukee. Guide to parks, lakefront trails, kayaking, paddleboarding, biking, and seasonal outdoor activities." />
        <meta name="keywords" content="outdoor activities Milwaukee, Milwaukee parks, Lake Michigan Milwaukee, Milwaukee trails, kayaking Milwaukee, Milwaukee biking, Oak Leaf Trail" />
        <link rel="canonical" href="https://discover-milwaukee.com/outdoor-weekend-milwaukee" />

        <meta property="og:title" content="Outdoor Weekend in Milwaukee: Parks, Trails & Lake Activities" />
        <meta property="og:description" content="Plan an active outdoor weekend in Milwaukee with our guide to parks, trails, and water activities." />
        <meta property="og:url" content="https://discover-milwaukee.com/outdoor-weekend-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-outdoor.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>OUTDOOR GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Get Outside in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              With Lake Michigan, 150+ parks, and over 100 miles of trails, Milwaukee is an underrated outdoor city. Here's how to make the most of it.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Parks</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From Olmsted-designed gems to lakefront escapes.
            </p>
            {parks.map((p, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{p.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{p.designer}</span>
                </div>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                  {p.highlights.map((h, j) => (
                    <span key={j} style={{ backgroundColor: c.beige, color: c.green1, fontSize: "12px", padding: "4px 10px", borderRadius: "20px" }}>{h}</span>
                  ))}
                </div>
                <div style={{ backgroundColor: `${c.orange}15`, padding: "10px 12px", borderRadius: "8px" }}>
                  <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Don't Miss: {p.mustDo}</p>
                </div>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Lakefront Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Lake Michigan is Milwaukee's greatest natural asset.
            </p>
            {lakefront.map((l, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{l.activity}</h3>
                  <span style={{ color: c.orange, fontSize: "12px", fontWeight: "600" }}>{l.distance || l.season}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{l.description}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Water Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Get on the water for a different perspective.
            </p>
            {water.map((w, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{w.activity}</h3>
                  <span style={{ backgroundColor: c.green2, color: "white", fontSize: "11px", fontWeight: "600", padding: "4px 8px", borderRadius: "4px" }}>{w.location}</span>
                </div>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>{w.provider}</p>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{w.description}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Biking</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee is increasingly bike-friendly with dedicated trails and bike share.
            </p>
            {biking.map((b, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{b.trail}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{b.difficulty}</span>
                </div>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>{b.type}</p>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{b.description}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Seasonal Activities</h2>
            <div style={{ display: "grid", gap: "16px" }}>
              {seasonal.map((s, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>{s.season}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    {s.activities.map((a, j) => (
                      <span key={j} style={{ backgroundColor: c.green2, color: "white", fontSize: "12px", padding: "4px 10px", borderRadius: "20px" }}>{a}</span>
                    ))}
                  </div>
                  <p style={{ color: "#777", fontSize: "13px", margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Related Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/free-things-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Free Things to Do →</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Activities →</Link>
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bay View →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Outside</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on outdoor events, trail conditions, and seasonal activities.</p>
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
                <Link href="/free-things-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Free Activities</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
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
