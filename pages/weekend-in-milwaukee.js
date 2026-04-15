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

const day1 = [
  {
    time: "Morning",
    activity: "Milwaukee Art Museum",
    description: "Start at the iconic Milwaukee Art Museum with its stunning Calatrava-designed Quadracci Pavilion. The Burke Brise Soleil 'wings' open at 10am—don't miss it. The collection spans 25,000 works.",
    address: "700 N Art Museum Dr",
    tip: "Free admission on the first Thursday of every month.",
  },
  {
    time: "Lunch",
    activity: "Third Ward Exploration",
    description: "Head to the Historic Third Ward for lunch at the Milwaukee Public Market. Browse artisan vendors, grab Foltz Family Market cheese curds, and explore the boutique shopping.",
    address: "400 N Water St",
    tip: "St. Paul Fish Company has the best lobster rolls in the city.",
  },
  {
    time: "Afternoon",
    activity: "Lakefront Stroll",
    description: "Walk the Milwaukee Riverwalk connecting downtown to the lakefront. Stop at Lakeshore State Park for stunning skyline views, then relax at Veterans Park.",
    address: "Milwaukee Riverwalk",
    tip: "Rent a Bublr bike for a faster lakefront tour.",
  },
  {
    time: "Dinner",
    activity: "Sanford Restaurant",
    description: "End day one at Sanford, Milwaukee's most acclaimed fine dining restaurant. Chef Justin Aprahamian's seasonal tasting menus are unforgettable.",
    address: "1547 N Jackson St",
    tip: "Book at least 2 weeks ahead for weekend reservations.",
  },
];

const day2 = [
  {
    time: "Morning",
    activity: "Lakefront Brewery Tour",
    description: "The best brewery tour in Milwaukee—funny, informative, and includes generous samples. The fish fry is legendary. Arrive early on weekends.",
    address: "1872 N Commerce St",
    tip: "Friday fish fry is served all day and worth the wait.",
  },
  {
    time: "Lunch",
    activity: "Bay View Dining",
    description: "Head to Bay View for lunch at Odd Duck, one of Milwaukee's most creative restaurants. Small plates meant for sharing, all locally sourced.",
    address: "2352 S Kinnickinnic Ave",
    tip: "Sit at the bar for a more casual, walk-in friendly experience.",
  },
  {
    time: "Afternoon",
    activity: "Neighborhood Hopping",
    description: "Explore Bay View's vintage shops on KK, then hop to Brady Street for its eclectic mix of Italian heritage, tattoo parlors, and trendy boutiques. Stop at Glorioso's Italian Market.",
    address: "Brady Street District",
    tip: "Colectivo on the lakefront is a great coffee stop.",
  },
  {
    time: "Evening",
    activity: "Walker's Point Nightlife",
    description: "End the night in Walker's Point—Milwaukee's most diverse nightlife district. Craft cocktails at Bryant's Cocktail Lounge, then live music at The Cooperage or dancing at various clubs.",
    address: "Walker's Point",
    tip: "Bryant's is cash-only and doesn't have a menu—tell them what flavors you like.",
  },
];

const day3 = [
  {
    time: "Morning",
    activity: "Brunch at Engine Company No. 3",
    description: "Brunch in a converted firehouse with creative dishes and great cocktails. The building alone is worth the visit.",
    address: "217 W National Ave",
    tip: "Try the fried chicken and waffles with bourbon maple syrup.",
  },
  {
    time: "Late Morning",
    activity: "Milwaukee Public Museum",
    description: "Explore the Streets of Old Milwaukee exhibit, the famous butterfly garden, and world-class natural history collections. Great for all ages.",
    address: "800 W Wells St",
    tip: "The new museum in the Deer District opens in 2027—this historic building is worth visiting now.",
  },
  {
    time: "Afternoon",
    activity: "Old World Third Street",
    description: "Experience Milwaukee's German heritage. Tour the historic Pabst Brewery at Best Place, sample beer at Mader's, and grab cheese at Wisconsin Cheese Mart.",
    address: "Old World Third Street",
    tip: "Best Place has the best Pabst history tour—book online.",
  },
  {
    time: "Evening",
    activity: "Deer District Finale",
    description: "End your weekend in the Deer District. If there's a Bucks game, the energy is electric. Otherwise, enjoy dinner at Good City Brewing and drinks at the surrounding bars.",
    address: "Fiserv Forum Area",
    tip: "Even without tickets, the plaza is great for people-watching on game nights.",
  },
];

const hotels = [
  { name: "The Pfister Hotel", style: "Historic Luxury", price: "$$$$", description: "Milwaukee's grand Victorian hotel since 1893. Stunning lobby, art collection, and Blu rooftop bar." },
  { name: "Iron Horse Hotel", style: "Boutique", price: "$$$", description: "Industrial-chic in Walker's Point. Motorcycle-friendly, incredible design, great restaurant." },
  { name: "Hotel Metro", style: "Art Deco", price: "$$$", description: "Art Deco gem near the lakefront. Rooftop deck with skyline views." },
  { name: "Kinn Guesthouse", style: "Boutique B&B", price: "$$", description: "Bay View's coolest stay. Attached to a great restaurant, walkable to everything on KK." },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Weekend in Milwaukee: The Perfect 3-Day Itinerary (2026 Guide)",
    "description": "Plan your perfect Milwaukee weekend with our day-by-day itinerary covering the best restaurants, attractions, neighborhoods, and hotels.",
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
      { "@type": "ListItem", "position": 3, "name": "Weekend in Milwaukee", "item": "https://discover-milwaukee.com/weekend-in-milwaukee" },
    ],
  },
};

const ItineraryCard = ({ item }) => (
  <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
      <span style={{ backgroundColor: c.orange, color: "white", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{item.time}</span>
      <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{item.activity}</h3>
    </div>
    <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{item.description}</p>
    <div style={{ backgroundColor: `${c.green2}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
      <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
      <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{item.tip}</p>
    </div>
    <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{item.address}</p>
  </div>
);

export default function WeekendInMilwaukee() {
  return (
    <>
      <Head>
        <title>Weekend in Milwaukee: The Perfect 3-Day Itinerary (2026 Guide)</title>
        <meta name="description" content="Plan your perfect Milwaukee weekend with our day-by-day itinerary. Best restaurants, attractions, neighborhoods, and hotels for your Milwaukee trip." />
        <meta name="keywords" content="weekend in Milwaukee, Milwaukee weekend trip, Milwaukee itinerary, things to do Milwaukee weekend, Milwaukee travel guide, visiting Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/weekend-in-milwaukee" />

        <meta property="og:title" content="Weekend in Milwaukee: The Perfect 3-Day Itinerary" />
        <meta property="og:description" content="Plan your perfect Milwaukee weekend with our day-by-day itinerary covering restaurants, attractions, and neighborhoods." />
        <meta property="og:url" content="https://discover-milwaukee.com/weekend-in-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-weekend.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>WEEKEND GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              The Perfect Milwaukee Weekend
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Your complete 3-day itinerary to experience the best of Milwaukee—from world-class museums to legendary breweries, vibrant neighborhoods to unforgettable dining.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Why Milwaukee?</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Milwaukee is having a moment. The NBA champion Bucks have energized downtown, the food scene rivals any coastal city, and the craft beer scene—in America's original brewing capital—is second to none. Add in stunning lakefront views, diverse neighborhoods, and Midwestern hospitality, and you've got an underrated gem that delivers way more than visitors expect. This itinerary hits all the highlights while giving you an authentic taste of what makes MKE special.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ backgroundColor: c.green1, color: c.yellow, width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "900" }}>1</div>
              <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", margin: 0 }}>Day One: Art, Lakefront & Fine Dining</h2>
            </div>
            {day1.map((item, i) => <ItineraryCard key={i} item={item} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ backgroundColor: c.green1, color: c.yellow, width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "900" }}>2</div>
              <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", margin: 0 }}>Day Two: Breweries & Neighborhoods</h2>
            </div>
            {day2.map((item, i) => <ItineraryCard key={i} item={item} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ backgroundColor: c.green1, color: c.yellow, width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "900" }}>3</div>
              <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", margin: 0 }}>Day Three: Culture & German Heritage</h2>
            </div>
            {day3.map((item, i) => <ItineraryCard key={i} item={item} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Where to Stay</h2>
            <div style={{ display: "grid", gap: "16px" }}>
              {hotels.map((h, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{h.name}</h3>
                    <span style={{ color: c.orange, fontWeight: "700" }}>{h.price}</span>
                  </div>
                  <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>{h.style}</p>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{h.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Weekend Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/romantic-weekend-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Romantic Weekend →</Link>
              <Link href="/family-weekend-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Family Weekend →</Link>
              <Link href="/beer-lovers-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Beer Lover's Weekend →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Plan Your Trip</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on events, new openings, and insider tips.</p>
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
                <Link href="/milwaukee-breweries" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Breweries</Link>
                <Link href="/things-to-do-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
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
