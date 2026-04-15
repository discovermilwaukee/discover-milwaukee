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

const historicBreweries = [
  {
    name: "Miller Brewing Company (Molson Coors)",
    type: "Major Brewery Tour",
    description: "Free tours of one of America's largest breweries. Walk through the caves where beer was stored before refrigeration, see the bottling line, and enjoy samples in the historic Miller Inn.",
    address: "4251 W State St",
    tip: "Tours book up fast—reserve online 2+ weeks ahead. The caves are a highlight.",
    samples: "3 full-size beers included",
  },
  {
    name: "Best Place at the Historic Pabst Brewery",
    type: "Historic Brewery & Bar",
    description: "The stunning former Pabst corporate headquarters, now a bar and event space. Tours tell the story of Milwaukee's brewing golden age. The Blue Ribbon Hall is gorgeous.",
    address: "901 W Juneau Ave",
    tip: "The Pabst history tour is excellent. Friday night fish fry here is a local favorite.",
    samples: "Pabst products, craft options available",
  },
];

const craftBreweries = [
  {
    name: "Lakefront Brewery",
    style: "Milwaukee's Favorite",
    description: "The best brewery tour in Milwaukee—hilarious, informative, and generous with samples. The Friday fish fry is legendary (served all day Friday). A must-visit.",
    address: "1872 N Commerce St",
    tip: "Weekend tours sell out—book ahead. The fish fry is worth any wait.",
    tryThis: "Riverwest Stein, Eastside Dark",
  },
  {
    name: "Good City Brewing",
    style: "Modern Craft",
    description: "Sleek Deer District taproom near Fiserv Forum. Excellent IPAs and lagers in a modern space. Perfect pre/post-game spot.",
    address: "333 W Juneau Ave",
    tip: "The Deer District location is huge—easy to get a table even on game days.",
    tryThis: "Motto IPA, Risk Pils",
  },
  {
    name: "Third Space Brewing",
    style: "German-Inspired",
    description: "Award-winning German-style beers in a cozy, intimate taproom. The Happy Place Midwest Pale Ale is a local favorite. True craft quality.",
    address: "1505 W St Paul Ave",
    tip: "Small space, so come early on weekends. Worth the trip to the Menomonee Valley.",
    tryThis: "Happy Place MPA, Unite the Clans",
  },
  {
    name: "MobCraft Beer",
    style: "Experimental",
    description: "Crowdsourced beer ideas voted on by fans. Expect unusual flavors and creative concepts. The Walker's Point taproom has food too.",
    address: "505 S 5th St",
    tip: "Check their calendar—the food options are excellent and change regularly.",
    tryThis: "Whatever's weird this month",
  },
  {
    name: "Gathering Place Brewing",
    style: "Neighborhood Gem",
    description: "Riverwest brewery in a former hardware store. Focus on approachable, sessionable beers. Great outdoor space and community vibe.",
    address: "811 E Vienna Ave",
    tip: "Very dog and kid friendly. The outdoor area is excellent in summer.",
    tryThis: "Cream City Lager",
  },
  {
    name: "Enlightened Brewing",
    style: "Bay View Craft",
    description: "Small-batch brewery focusing on Belgian and German styles. The cozy taproom in Bay View is a great neighborhood hang.",
    address: "2020 S Allis St",
    tip: "Limited hours—check before you go. Cash preferred.",
    tryThis: "Belgian Golden Strong",
  },
  {
    name: "Component Brewing",
    style: "German Precision",
    description: "German and Czech-style lagers brewed with technical precision. Walker's Point location, rotating food trucks.",
    address: "2018 S 1st St",
    tip: "Lager lovers paradise. The Czech pilsner is outstanding.",
    tryThis: "Czech Pilsner, Munich Dunkel",
  },
];

const beerBars = [
  {
    name: "Sugar Maple",
    focus: "Craft Beer Selection",
    description: "Milwaukee's best craft beer bar with 60+ taps and hundreds of bottles. Knowledgeable staff, no TVs, serious about beer.",
    location: "Bay View",
    vibe: "Beer geek heaven",
  },
  {
    name: "Palm Tavern",
    focus: "Wisconsin Beer",
    description: "Cozy Bay View bar focused on Wisconsin breweries. Great selection, friendly crowd, local feel.",
    location: "Bay View",
    vibe: "Neighborhood favorite",
  },
  {
    name: "Burnhearts",
    focus: "Dive Bar + Craft",
    description: "Beloved Bay View dive with surprisingly good craft selection. Famous for Bloody Mary Fest. Quintessential Milwaukee.",
    location: "Bay View",
    vibe: "Authentic MKE",
  },
  {
    name: "The Vanguard",
    focus: "Craft Beer & Sausages",
    description: "German-style beer hall vibes with excellent sausages and a great tap list. Outdoor seating, Bay View hotspot.",
    location: "Bay View",
    vibe: "Beer garden feel",
  },
  {
    name: "Roman's Pub",
    focus: "Wisconsin & Craft Taps",
    description: "Walker's Point institution with a staggering tap list. No-frills bar with serious beer credentials.",
    location: "Walker's Point",
    vibe: "No pretense, great beer",
  },
];

const tourItinerary = [
  { time: "11:00 AM", stop: "Lakefront Brewery", activity: "Tour + Fish Fry", duration: "2 hours" },
  { time: "2:00 PM", stop: "Good City Brewing", activity: "Flights + Snacks", duration: "1 hour" },
  { time: "3:30 PM", stop: "Third Space Brewing", activity: "German-style pints", duration: "1 hour" },
  { time: "5:00 PM", stop: "Walker's Point Crawl", activity: "MobCraft → Component", duration: "2 hours" },
  { time: "7:30 PM", stop: "Sugar Maple", activity: "Rare bottles & dinner", duration: "Evening" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Beer Lover's Weekend in Milwaukee: Ultimate Brewery Tour Guide",
    "description": "Plan the ultimate Milwaukee brewery tour. Historic breweries, craft beer scene, best beer bars, and a self-guided tour itinerary.",
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
      { "@type": "ListItem", "position": 3, "name": "Beer Lovers Milwaukee", "item": "https://discover-milwaukee.com/beer-lovers-milwaukee" },
    ],
  },
};

export default function BeerLoversMilwaukee() {
  return (
    <>
      <Head>
        <title>Beer Lover's Weekend in Milwaukee: Ultimate Brewery Tour Guide</title>
        <meta name="description" content="Plan the ultimate Milwaukee brewery tour. Historic Miller and Pabst tours, the best craft breweries, top beer bars, and a self-guided brewery crawl itinerary." />
        <meta name="keywords" content="Milwaukee breweries, Milwaukee beer tour, Milwaukee craft beer, Lakefront Brewery, Miller tour, Pabst Milwaukee, best breweries Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/beer-lovers-milwaukee" />

        <meta property="og:title" content="Beer Lover's Weekend in Milwaukee: Ultimate Brewery Tour Guide" />
        <meta property="og:description" content="Plan the ultimate Milwaukee brewery tour with our guide to historic and craft breweries, beer bars, and a self-guided tour." />
        <meta property="og:url" content="https://discover-milwaukee.com/beer-lovers-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-beer.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>BEER GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Beer Lover's Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee was built on beer. From the historic German breweries to today's thriving craft scene, this is America's original brewing capital. Here's how to experience it all.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Milwaukee's Beer Legacy</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              In the late 1800s, Milwaukee's German immigrants—Pabst, Schlitz, Miller, and Blatz—made this city the beer capital of America. While consolidation changed the industry, Miller (now Molson Coors) still brews here, and the craft revolution has brought brewing back to neighborhoods across the city. Walker's Point alone has more breweries than many cities. Whether you want history or hops, Milwaukee delivers.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Historic Brewery Tours</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Experience the beer that made Milwaukee famous.
            </p>
            {historicBreweries.map((b, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{b.name}</h3>
                  <span style={{ backgroundColor: c.yellow, color: c.green1, fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px" }}>{b.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{b.description}</p>
                <div style={{ backgroundColor: `${c.orange}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>SAMPLES</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{b.samples}</p>
                </div>
                <div style={{ backgroundColor: `${c.green2}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{b.tip}</p>
                </div>
                <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{b.address}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Craft Breweries</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's craft scene is thriving. These are the must-visit taprooms.
            </p>
            {craftBreweries.map((b, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{b.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{b.style}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "10px" }}>{b.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>Try: {b.tryThis}</p>
                <p style={{ color: "#777", fontSize: "12px", margin: 0 }}>{b.tip}</p>
                <p style={{ fontSize: "12px", color: "#999", marginTop: "8px", marginBottom: 0 }}>{b.address}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Beer Bars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Not a brewery, but the tap list is just as good.
            </p>
            {beerBars.map((b, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{b.name}</h3>
                  <span style={{ backgroundColor: c.beige, color: c.green1, fontSize: "11px", fontWeight: "600", padding: "4px 8px", borderRadius: "4px" }}>{b.location}</span>
                </div>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>{b.focus}</p>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{b.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Vibe: {b.vibe}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Self-Guided Brewery Tour</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              A full day hitting Milwaukee's best. Use rideshare between stops.
            </p>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              {tourItinerary.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", paddingBottom: "16px", marginBottom: "16px", borderBottom: i < tourItinerary.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                  <div style={{ backgroundColor: c.green1, color: c.yellow, padding: "8px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", height: "fit-content" }}>{t.time}</div>
                  <div>
                    <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", margin: "0 0 4px 0" }}>{t.stop}</h4>
                    <p style={{ color: "#555", fontSize: "14px", margin: "0 0 4px 0" }}>{t.activity}</p>
                    <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>{t.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Related Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Milwaukee Breweries →</Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Walker's Point →</Link>
              <Link href="/milwaukee-nightlife" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Nightlife Guide →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Plan Your Beer Weekend</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on new breweries, taproom events, and beer releases.</p>
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
                <Link href="/milwaukee-breweries" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Breweries</Link>
                <Link href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Walker's Point</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/best-restaurants-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Restaurants</Link>
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
