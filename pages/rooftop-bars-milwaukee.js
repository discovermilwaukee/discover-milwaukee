import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

import NewsletterCTA from "../components/NewsletterCTA";
const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const rooftopBars = {
  bestViews: [
    {
      name: "The Outsider",
      neighborhood: "Third Ward",
      priceRange: "$$$",
      address: "Kimpton Journeyman Hotel, 310 E Chicago St, Milwaukee, WI 53202",
      description: "Nine floors up at the Kimpton Journeyman Hotel, The Outsider is Milwaukee's most sophisticated rooftop experience. Six unique indoor and outdoor areas, swanky cocktail lounge vibes, and stunning skyline views year-round. This is where the views meet the cocktails.",
      viewType: "Downtown skyline, 360° views",
      bestTime: "Sunset for golden hour views",
      vibe: "Upscale, trendy, hotel chic",
      insiderTip: "Make a reservation for sunset. The heated areas make this a year-round option.",
      reservations: "Recommended, especially weekends",
    },
    {
      name: "Skyline Bar + Lounge",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "Nō Studios, 1037 W McKinley Ave, Milwaukee, WI 53205",
      description: "Perched atop Nō Studios, Skyline Bar + Lounge delivers unobstructed 360° views of the city. The modern, glass-enclosed space opens to two outdoor patios. It's equal parts art gallery and rooftop bar.",
      viewType: "360° unobstructed city views",
      bestTime: "Late afternoon through sunset",
      vibe: "Modern, artistic, sophisticated",
      insiderTip: "Check out the studios and art spaces before heading up for drinks.",
      reservations: "Recommended for groups",
    },
    {
      name: "Café Benelux / Lux Skyhaus",
      neighborhood: "Third Ward",
      priceRange: "$$-$$$",
      address: "346 N Broadway, Milwaukee, WI 53202",
      description: "Milwaukee's first rooftop with a retractable enclosure. The Lux Skyhaus transforms from open-air European vibes on beautiful days to a heated, enclosed space when weather demands. Belgian beer selection is excellent.",
      viewType: "Third Ward streetscape, downtown skyline",
      bestTime: "Summer afternoons, any season with the enclosure",
      vibe: "European al fresco, Belgian-inspired",
      insiderTip: "The Belgian beer list is extensive—ask for recommendations. Brunch is popular too.",
      reservations: "Recommended, especially weekends",
    },
  ],
  deerDistrict: [
    {
      name: "Uncle Buck's",
      neighborhood: "Deer District",
      priceRange: "$$",
      address: "1120 N Phillips Ave, Milwaukee, WI 53203",
      description: "The ultimate game-day rooftop next to Fiserv Forum. Two patios stretch across the rooftop, built around a fire bar. Views of the skyline and the Deer District crowd below make this perfect for Bucks or Brewers game days.",
      viewType: "Deer District, downtown skyline",
      bestTime: "Game days, summer evenings",
      vibe: "Sports bar, lively, energetic",
      insiderTip: "Arrive early on game days—it fills up fast. The fire bar is great for cooler evenings.",
      reservations: "Walk-in friendly, but early arrival recommended for games",
    },
    {
      name: "Pilot Project",
      neighborhood: "Pabst Brewery District",
      priceRange: "$$",
      address: "1128 N 9th St, Milwaukee, WI 53233",
      description: "Brewery incubator, restaurant, and rooftop bar in one vibrant venue. The spacious rooftop terrace offers comfy lounge seating and bar spots, covered and open-air areas, with lovely views over downtown and the Deer District.",
      viewType: "Downtown skyline, Deer District",
      bestTime: "Pre-game drinks, summer afternoons",
      vibe: "Craft beer focused, casual, brewery vibes",
      insiderTip: "Try the rotating guest brewery taps—each one brings something different.",
      reservations: "Usually walk-in friendly",
    },
  ],
  cocktailFocused: [
    {
      name: "The Aviary",
      neighborhood: "Downtown",
      priceRange: "$$-$$$",
      address: "Central Standard Crafthouse, 320 E Clybourn St, Milwaukee, WI 53202",
      description: "Central Standard Crafthouse's crown jewel. The open-air rooftop terrace called The Aviary is spacious and modern with plenty of bar-style seating surrounded by fantastic skyline views. Craft cocktails are the star.",
      viewType: "Milwaukee skyline",
      bestTime: "Evening cocktail hour",
      vibe: "Craft cocktails, trendy, modern",
      insiderTip: "The cocktail program is serious—don't be afraid to ask the bartenders for recommendations.",
      reservations: "Helpful for groups",
    },
    {
      name: "Pufferfish",
      neighborhood: "Walker's Point",
      priceRange: "$$-$$$",
      address: "Walker's Point, Milwaukee",
      description: "Tiki-inspired rooftop escape with creative cocktails like 'Get Lost' and 'Ocean Eyes.' The tropical vibes make you forget you're in the Midwest. Perfect for escaping the everyday.",
      viewType: "Urban rooftop",
      bestTime: "Summer evenings",
      vibe: "Tiki bar, tropical, escapist",
      insiderTip: "Embrace the tiki theme—order something with rum and a tiny umbrella.",
      reservations: "Recommended on weekends",
    },
  ],
  casualVibes: [
    {
      name: "Camp Bar Third Ward",
      neighborhood: "Third Ward",
      priceRange: "$$",
      address: "525 E Menomonee St, Milwaukee, WI 53202",
      description: "A two-story camping-themed bar with a rooftop patio that's more casual than most. Think fire pits, cozy seating, and a laid-back vibe. Dog-friendly too.",
      viewType: "Third Ward neighborhood",
      bestTime: "Casual afternoons, after-work drinks",
      vibe: "Casual, camping-themed, dog-friendly",
      insiderTip: "Bring your dog—the patio is pet-friendly. The s'mores kit is a fun move.",
      reservations: "Usually walk-in friendly",
    },
    {
      name: "The Rooftop at The Cambria Hotel",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "503 N Plankinton Ave, Milwaukee, WI 53203",
      description: "Hotel rooftop bar with solid views and accessible vibes. Less scene-y than some options, making it a good choice for a relaxed evening drink.",
      viewType: "Downtown views",
      bestTime: "Evening drinks",
      vibe: "Hotel bar, relaxed, accessible",
      insiderTip: "Good option when other rooftops are packed.",
      reservations: "Usually not needed",
    },
  ],
};

const faqs = [
  {
    question: "What are the best rooftop bars in Milwaukee?",
    answer: "Top Milwaukee rooftop bars include The Outsider at Kimpton Journeyman Hotel (best overall views), Skyline Bar + Lounge at Nō Studios (360° views), Café Benelux/Lux Skyhaus (retractable roof), and Uncle Buck's near Fiserv Forum (best for game days)."
  },
  {
    question: "Are Milwaukee rooftop bars open year-round?",
    answer: "Some are! The Outsider and Café Benelux's Lux Skyhaus have heated/enclosed areas that operate year-round. Most seasonal rooftops open in late spring and close in early fall. Call ahead to confirm seasonal hours."
  },
  {
    question: "Do I need reservations for Milwaukee rooftop bars?",
    answer: "Reservations are recommended for popular spots like The Outsider, Café Benelux, and Skyline Bar, especially on weekends and during sunset hours. More casual spots like Camp Bar and Uncle Buck's are usually walk-in friendly."
  },
  {
    question: "Where can I watch Bucks games at a rooftop bar?",
    answer: "Uncle Buck's in the Deer District is the premier rooftop for Bucks games with views of Fiserv Forum and the plaza below. Pilot Project in the nearby Pabst Brewery District is another great pre-game option."
  },
  {
    question: "Which Milwaukee rooftop bar has the best views?",
    answer: "The Outsider at Kimpton Journeyman Hotel (9 floors up with 360° views) and Skyline Bar + Lounge at Nō Studios are considered to have the best panoramic city views. Café Benelux offers great Third Ward streetscape views."
  },
  {
    question: "Are there any dog-friendly rooftop bars in Milwaukee?",
    answer: "Camp Bar in the Third Ward has a dog-friendly rooftop patio. Always call ahead to confirm current pet policies, as they can change seasonally."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "Best Rooftop Bars in Milwaukee 2026: Views & Drinks Guide",
    "description": "Discover Milwaukee's best rooftop bars with skyline views, craft cocktails, and outdoor patios. Complete guide to elevated drinking spots.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/rooftop-bars-milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Rooftop Bars Milwaukee", "item": "https://www.discover-milwaukee.com/rooftop-bars-milwaukee" }
    ]
  }
};

export default function RooftopBarsMilwaukee() {
  const RooftopCard = ({ bar }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{bar.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{bar.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{bar.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>{bar.vibe}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{bar.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>THE VIEW</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.viewType}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST TIME</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.bestTime}</p>
        </div>
        <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>RESERVATIONS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.reservations}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(26,61,52,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.insiderTip}</p>
      </div>
      {bar.address && (
        <p style={{ fontSize: "13px", color: "#777", marginBottom: 0 }}>{bar.address}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Rooftop Bars in Milwaukee 2026 | Skyline Views & Drinks</title>
        <meta name="description" content="Find the best rooftop bars in Milwaukee with skyline views. The Outsider, Café Benelux, and more. Complete guide to Milwaukee's elevated drinking spots." />
        <meta name="keywords" content="rooftop bars milwaukee, best rooftop milwaukee, skyline bars milwaukee, outdoor bars milwaukee, rooftop patios milwaukee, The Outsider milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/rooftop-bars-milwaukee" />

        <meta property="og:title" content="Best Rooftop Bars in Milwaukee 2026 | Views & Drinks Guide" />
        <meta property="og:description" content="Milwaukee's best rooftop bars with skyline views, craft cocktails, and outdoor patios." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/rooftop-bars-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED APRIL 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Rooftop Bars in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Elevated drinking with skyline views. Milwaukee's best rooftops for cocktails, craft beer, and unforgettable sunsets.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />
          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Rooftop Bars in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>The Outsider, Skyline Bar + Lounge, Café Benelux / Lux Skyhaus, Uncle Buck's, Pilot Project</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Views</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The rooftops where the view is as impressive as the drinks.
            </p>
            {rooftopBars.bestViews.map((bar, i) => <RooftopCard key={i} bar={bar} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Deer District / Game Day</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Perfect for pre-game drinks or watching the Deer District energy from above.
            </p>
            {rooftopBars.deerDistrict.map((bar, i) => <RooftopCard key={i} bar={bar} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Cocktail-Focused</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              When the drinks matter as much as the views.
            </p>
            {rooftopBars.cocktailFocused.map((bar, i) => <RooftopCard key={i} bar={bar} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Casual Vibes</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Laid-back rooftops for relaxed afternoons and easy evenings.
            </p>
            {rooftopBars.casualVibes.map((bar, i) => <RooftopCard key={i} bar={bar} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Bar Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Cocktail Bars</Link>
              <Link href="/best-dive-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Dive Bars</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New openings, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
