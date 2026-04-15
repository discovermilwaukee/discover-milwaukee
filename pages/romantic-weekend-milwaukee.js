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
    name: "Sanford",
    cuisine: "Contemporary American",
    price: "$$$$",
    description: "Milwaukee's most celebrated fine dining restaurant. Chef Justin Aprahamian creates seasonal tasting menus that have earned national acclaim. Intimate, elegant, unforgettable.",
    address: "1547 N Jackson St",
    tip: "The 5-course tasting menu is the way to go. Book 2+ weeks ahead.",
  },
  {
    name: "Bacchus",
    cuisine: "American Fine Dining",
    price: "$$$$",
    description: "Upscale dining in a gorgeous Cudahy Tower space with stunning views. The wine list is exceptional, and the seasonal menu emphasizes local ingredients.",
    address: "925 E Wells St",
    tip: "Request a window table for lakefront views at sunset.",
  },
  {
    name: "Lake Park Bistro",
    cuisine: "French",
    price: "$$$",
    description: "Classic French bistro in a stunning Lake Park pavilion. The terrace overlooks Lake Michigan—arguably the most romantic setting in Milwaukee.",
    address: "3133 E Newberry Blvd",
    tip: "Summer terrace reservations fill up fast—book early.",
  },
  {
    name: "EsterEv",
    cuisine: "Tasting Menu",
    price: "$$$$",
    description: "Hidden behind Odd Duck, this intimate 20-seat restaurant serves a nightly tasting menu in a communal setting. Unique and memorable.",
    address: "2352 S Kinnickinnic Ave",
    tip: "Only open Thu-Sat. Reservations required.",
  },
  {
    name: "Ardent",
    cuisine: "New American Tasting",
    price: "$$$$",
    description: "Chef Justin Carlisle's intimate tasting menu experience. Creative, seasonal, and intensely focused on craft. Only 24 seats.",
    address: "1751 N Farwell Ave",
    tip: "The full tasting menu is worth the splurge.",
  },
];

const activities = [
  {
    name: "Milwaukee Art Museum",
    type: "Arts & Culture",
    description: "The Calatrava-designed building is stunning, and the wings opening at 10am is magical. Walk the galleries together, then stroll the lakefront.",
    romantic: "Watching the Burke Brise Soleil wings open together.",
  },
  {
    name: "Lakefront Sunset Walk",
    type: "Outdoor",
    description: "Walk along the lakefront from Veterans Park to Bradford Beach. The sunset over Lake Michigan is spectacular. Bring a blanket and a bottle of wine.",
    romantic: "Sunset picnic at Lakeshore State Park with skyline views.",
  },
  {
    name: "Milwaukee Boat Line Cruise",
    type: "Experience",
    description: "River cruises through downtown and the harbor. The sunset and cocktail cruises are particularly romantic.",
    romantic: "Sunset cruise with champagne and city lights.",
  },
  {
    name: "Pfister Hotel Art Collection",
    type: "Arts & Culture",
    description: "The historic Pfister has a world-class Victorian art collection you can tour for free. End with cocktails at Blu rooftop bar.",
    romantic: "Cocktails at Blu with panoramic city views.",
  },
  {
    name: "North Point Lighthouse",
    type: "Historic",
    description: "Climb the historic lighthouse for stunning views of the lake and city. Then explore Lake Park's romantic trails.",
    romantic: "The view from the top at golden hour.",
  },
];

const bars = [
  {
    name: "Bryant's Cocktail Lounge",
    style: "Classic Cocktails",
    description: "Milwaukee's oldest cocktail lounge with 1930s ambiance. No menu—tell the bartender what you like. Cash only, intimate, timeless.",
    vibe: "Speakeasy romance",
  },
  {
    name: "At Random",
    style: "Tiki/Ice Cream Drinks",
    description: "Retro supper club vibes with creative ice cream cocktails. The pink neon glow and vinyl booths feel like a date from another era.",
    vibe: "Retro romantic",
  },
  {
    name: "Blu at the Pfister",
    style: "Rooftop Lounge",
    description: "Swanky rooftop bar atop Milwaukee's most historic hotel. Craft cocktails with panoramic views of the city and lake.",
    vibe: "Upscale with a view",
  },
  {
    name: "The Outsider",
    style: "Rooftop",
    description: "Kimpton's rooftop bar with craft cocktails and one of the best views in Milwaukee. Perfect for a nightcap.",
    vibe: "Modern rooftop",
  },
  {
    name: "Goodkind",
    style: "Wine Bar",
    description: "Bay View's beloved wine bar attached to a fantastic restaurant. Intimate, excellent wine list, perfect for a quiet evening.",
    vibe: "Neighborhood wine bar",
  },
];

const hotels = [
  {
    name: "The Pfister Hotel",
    style: "Historic Luxury",
    price: "$$$$",
    romantic: "Milwaukee's grand Victorian hotel. Victorian art collection, Blu rooftop bar, and old-world elegance. Many couples get engaged here.",
  },
  {
    name: "Iron Horse Hotel",
    style: "Boutique Industrial",
    price: "$$$",
    romantic: "Industrial-chic in Walker's Point. The loft suites with exposed brick and luxury bedding are incredibly romantic.",
  },
  {
    name: "Kinn Guesthouse",
    style: "Boutique B&B",
    price: "$$",
    romantic: "Bay View's coolest boutique stay. Intimate, design-forward rooms above a great restaurant. Very European.",
  },
  {
    name: "Saint Kate Arts Hotel",
    style: "Arts Hotel",
    price: "$$$",
    romantic: "Milwaukee's arts-focused hotel with rotating exhibitions, a theater, and stylish rooms. Creative date night built in.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Romantic Weekend in Milwaukee: Couples Guide to the Best Date Spots",
    "description": "Plan the perfect romantic getaway in Milwaukee. Discover the best restaurants, activities, cocktail bars, and hotels for couples.",
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
      { "@type": "ListItem", "position": 3, "name": "Romantic Weekend", "item": "https://discover-milwaukee.com/romantic-weekend-milwaukee" },
    ],
  },
};

export default function RomanticWeekendMilwaukee() {
  return (
    <>
      <Head>
        <title>Romantic Weekend in Milwaukee: Couples Guide to the Best Date Spots</title>
        <meta name="description" content="Plan the perfect romantic getaway in Milwaukee. Discover the best restaurants, activities, cocktail bars, and hotels for couples visiting Milwaukee." />
        <meta name="keywords" content="romantic weekend Milwaukee, Milwaukee couples getaway, Milwaukee date ideas, romantic restaurants Milwaukee, romantic hotels Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/romantic-weekend-milwaukee" />

        <meta property="og:title" content="Romantic Weekend in Milwaukee: Couples Guide" />
        <meta property="og:description" content="Plan the perfect romantic getaway in Milwaukee with our couples guide to restaurants, activities, and hotels." />
        <meta property="og:url" content="https://discover-milwaukee.com/romantic-weekend-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-romantic.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>COUPLES GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              A Romantic Milwaukee Weekend
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's lakefront sunsets, intimate cocktail lounges, and world-class restaurants make it perfect for a couples getaway. Here's how to fall in love with MKE together.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Romantic Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's dining scene punches well above its weight. These are the most romantic tables in the city.
            </p>
            {restaurants.map((r, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{r.name}</h3>
                  <span style={{ color: c.orange, fontWeight: "700" }}>{r.price}</span>
                </div>
                <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "12px" }}>{r.cuisine}</p>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{r.description}</p>
                <div style={{ backgroundColor: `${c.green2}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{r.tip}</p>
                </div>
                <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{r.address}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Couples Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Beyond dinner—the experiences that make a trip memorable.
            </p>
            {activities.map((a, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{a.name}</h3>
                  <span style={{ backgroundColor: c.orange, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px" }}>{a.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{a.description}</p>
                <div style={{ backgroundColor: `${c.orange}15`, padding: "10px 12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "2px" }}>MOST ROMANTIC</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{a.romantic}</p>
                </div>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Date Night Bars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's cocktail scene is outstanding. These spots set the mood.
            </p>
            {bars.map((b, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{b.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{b.style}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{b.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Vibe: {b.vibe}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Romantic Hotels</h2>
            <div style={{ display: "grid", gap: "16px" }}>
              {hotels.map((h, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{h.name}</h3>
                    <span style={{ color: c.orange, fontWeight: "700" }}>{h.price}</span>
                  </div>
                  <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>{h.style}</p>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{h.romantic}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Weekend Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/weekend-in-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Weekend Itinerary →</Link>
              <Link href="/foodie-weekend-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Foodie Weekend →</Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Date Ideas →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Plan Your Romantic Getaway</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on romantic spots, events, and new openings.</p>
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
                <Link href="/milwaukee-nightlife" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Nightlife</Link>
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
