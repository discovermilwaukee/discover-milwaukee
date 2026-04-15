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

const patios = {
  rooftops: [
    {
      name: "The Outsider",
      neighborhood: "Third Ward",
      type: "Rooftop Bar",
      priceRange: "$$",
      address: "316 N Milwaukee St, Milwaukee, WI 53202",
      description: "Milwaukee's premier rooftop bar with sweeping skyline views and serious summer energy. The Outsider sits atop the Kimpton Journeyman Hotel and delivers craft cocktails, a curated beer list, and one of the best sunsets in the city. When the weather breaks, this is where Milwaukee shows up.",
      bestFor: "Sunset drinks, date nights, impressing visitors",
      hours: "Seasonal - typically May through October",
      vibe: "Trendy, social scene, skyline views",
      proTip: "Arrive before 6pm on weekends to snag seating without a wait. Or go on a weekday for a more relaxed experience.",
    },
    {
      name: "Café Benelux (Rooftop)",
      neighborhood: "Third Ward",
      type: "Rooftop Restaurant",
      priceRange: "$$",
      address: "346 N Broadway, Milwaukee, WI 53202",
      description: "The Third Ward's go-to rooftop combines Belgian-inspired food and drinks with prime city views. More restaurant than bar, so you can make an evening of it with dinner and drinks. Great for brunch with a view on weekends.",
      bestFor: "Brunch, dinner with a view, groups",
      hours: "Year-round (heated in winter)",
      vibe: "Lively, European-inspired, social",
      proTip: "They have heaters and sometimes igloo seating in winter—check their socials for availability.",
    },
    {
      name: "Blu at the Pfister",
      neighborhood: "Downtown",
      type: "Hotel Rooftop Lounge",
      priceRange: "$$$",
      address: "424 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "A more sophisticated rooftop experience atop the historic Pfister Hotel. Blu offers craft cocktails and upscale small plates with panoramic views. This is the grown-up option when you want rooftop vibes without the scene.",
      bestFor: "Special occasions, business drinks, sophisticated evenings",
      hours: "Check seasonal hours",
      vibe: "Upscale, quieter, classic Milwaukee",
      proTip: "Grab a drink here before dinner at a downtown restaurant.",
    },
  ],
  waterfront: [
    {
      name: "Boone & Crockett",
      neighborhood: "Bay View",
      type: "Waterfront Bar",
      priceRange: "$",
      address: "2151 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "A waterfront patio that captures the best of Milwaukee summers. Boone & Crockett's spacious outdoor area sits right on the Kinnickinnic River with tiki-bar touches, strong drinks, and the kind of easy summer energy that makes you forget you're in a city.",
      bestFor: "Casual hangs, day drinking, river views",
      hours: "Daily, weather permitting",
      vibe: "Tiki-adjacent, laid-back, quintessentially Milwaukee summer",
      proTip: "They have a food truck on-site most days. Cash helps here.",
    },
    {
      name: "Lakefront Brewery",
      neighborhood: "Brewer's Hill",
      type: "Brewery Patio",
      priceRange: "$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "A Milwaukee institution with a spacious patio overlooking the Milwaukee River. Come for the beer, stay for the fish fry, and soak in one of the most authentically Milwaukee experiences you can have.",
      bestFor: "Friday fish fry, brewery vibes, local experience",
      hours: "Daily tours and taproom",
      vibe: "Local, fun, quintessential Milwaukee",
      proTip: "Friday fish fry is legendary but crowded—arrive early or go on another day for patio without the wait.",
    },
    {
      name: "Barnacle Bud's",
      neighborhood: "Bay View",
      type: "Waterfront Dive",
      priceRange: "$",
      address: "1955 S Hilbert St, Milwaukee, WI 53207",
      description: "A no-frills waterfront hangout where the drinks are cheap and the views are surprisingly good. Barnacle Bud's is the antidote to trendy—just picnic tables, cold beer, and the river. Peak Milwaukee summer.",
      bestFor: "Casual day drinking, no pretense, cheap drinks",
      hours: "Seasonal",
      vibe: "Dive bar, unpretentious, local legend",
      proTip: "Bring cash. This is not the place for craft cocktails—embrace it.",
    },
  ],
  neighborhood: [
    {
      name: "Café Hollander",
      neighborhood: "Downer Ave / Wauwatosa / Mequon",
      type: "Restaurant Patio",
      priceRange: "$$",
      address: "Multiple locations",
      description: "A Milwaukee staple with multiple locations, each featuring a generous patio. Belgian-inspired food and an extensive beer list make this a go-to for any occasion. The Downer Ave location is particularly beloved.",
      bestFor: "Dinner, drinks, people-watching",
      vibe: "Neighborhood anchor, European feel, family-friendly",
    },
    {
      name: "Colectivo Coffee (Lakefront)",
      neighborhood: "Lake Park",
      type: "Café Patio",
      priceRange: "$",
      address: "2211 N Prospect Ave, Milwaukee, WI 53202",
      description: "The lakefront Colectivo location offers one of the best casual patios in the city. Coffee by day, beer and wine by evening, all with Lake Michigan views. Perfect for working remotely or catching up with friends.",
      bestFor: "Coffee meetings, casual hangs, lake views",
      vibe: "Relaxed, scenic, community hub",
    },
    {
      name: "Wolski's Tavern",
      neighborhood: "East Side",
      type: "Bar Patio",
      priceRange: "$",
      address: "1836 N Pulaski St, Milwaukee, WI 53202",
      description: "Home of the famous 'I Closed Wolski's' bumper sticker, this East Side institution has a surprisingly nice patio tucked behind the bar. A mix of old Milwaukee charm and neighborhood hangout.",
      bestFor: "Late night, local experience, cheap drinks",
      vibe: "Legendary dive, neighborhood institution",
    },
    {
      name: "Sugar Maple",
      neighborhood: "Bay View",
      type: "Craft Beer Bar Patio",
      priceRange: "$$",
      address: "441 E Lincoln Ave, Milwaukee, WI 53207",
      description: "Bay View's craft beer destination with a cozy back patio. An exceptional tap list in a neighborhood bar setting. The patio is intimate but perfect for summer evenings.",
      bestFor: "Craft beer lovers, Bay View hangout",
      vibe: "Chill, beer-focused, neighborhood",
    },
  ],
  beerGardens: [
    {
      name: "Estabrook Park Beer Garden",
      neighborhood: "Shorewood",
      type: "Public Beer Garden",
      priceRange: "$",
      description: "Milwaukee County's first beer garden revival, set in beautiful Estabrook Park. German-style beer, brats, and communal tables under the trees. This is Milwaukee summer at its most pure.",
      bestFor: "Family-friendly, afternoon hangouts, German beer",
      vibe: "Community, outdoor, classic Milwaukee",
    },
    {
      name: "South Shore Terrace",
      neighborhood: "Bay View",
      type: "Public Beer Garden",
      priceRange: "$",
      description: "A lake-adjacent beer garden with stunning Lake Michigan views. Part of the county parks system, South Shore Terrace offers affordable drinks and the best sunset views in the city.",
      bestFor: "Sunset watching, family-friendly, lake views",
      vibe: "Scenic, relaxed, community",
    },
    {
      name: "The Landing at Hoyt Park",
      neighborhood: "Wauwatosa",
      type: "Public Beer Garden",
      priceRange: "$",
      description: "A newer addition to the Milwaukee beer garden scene, The Landing offers a family-friendly atmosphere in beautiful Hoyt Park. Live music, good beer, and a true community vibe.",
      bestFor: "Families, live music, suburban escape",
      vibe: "Family-friendly, community, park setting",
    },
  ],
};

const faqs = [
  {
    question: "What are the best rooftop bars in Milwaukee?",
    answer: "The top rooftop bars in Milwaukee are The Outsider (Third Ward, best skyline views), Café Benelux rooftop (Third Ward, food + drinks), and Blu at the Pfister (Downtown, upscale). The Outsider is the most popular for summer drinks and sunset views."
  },
  {
    question: "What are the best patios in Milwaukee for food?",
    answer: "For dining with great patio seating, try Café Benelux (Third Ward), Café Hollander (multiple locations), and Lakefront Brewery (Brewer's Hill). Story Hill BKC and Odd Duck also offer excellent food with outdoor seating options."
  },
  {
    question: "Are there waterfront patios in Milwaukee?",
    answer: "Yes! Milwaukee has excellent waterfront patios. Boone & Crockett (Bay View, river views), Lakefront Brewery (Milwaukee River), Barnacle Bud's (Bay View, dive bar vibes), and South Shore Terrace (Lake Michigan views) are top options."
  },
  {
    question: "When do Milwaukee patios open?",
    answer: "Most Milwaukee patios open in late April or early May, depending on weather. Peak patio season runs May through September. Some spots like Café Benelux offer heated outdoor seating year-round. Beer gardens typically operate May through October."
  },
  {
    question: "What are the best beer gardens in Milwaukee?",
    answer: "Milwaukee's top beer gardens include Estabrook Park Beer Garden (Shorewood), South Shore Terrace (Bay View, lake views), and The Landing at Hoyt Park (Wauwatosa). All are part of the county parks system with affordable drinks and family-friendly atmospheres."
  },
  {
    question: "Where can I watch the sunset in Milwaukee?",
    answer: "The best sunset spots with drinks are South Shore Terrace (Lake Michigan), The Outsider rooftop (skyline), and Boone & Crockett (river). For a non-bar option, the Bradford Beach area and Lakeshore State Park also offer stunning sunsets."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Patios in Milwaukee 2026: Rooftops, Waterfront & Beer Gardens",
    "description": "Complete guide to Milwaukee's best outdoor drinking and dining. Rooftop bars, waterfront patios, beer gardens, and neighborhood favorites for summer 2026.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/best-patios-milwaukee"
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Best Patios in Milwaukee", "item": "https://discover-milwaukee.com/best-patios-milwaukee" }
    ]
  }
};

export default function BestPatiosMilwaukee() {
  const PatioCard = ({ patio }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{patio.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {patio.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{patio.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{patio.neighborhood}</span>
          {patio.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{patio.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{patio.description}</p>
      {(patio.bestFor || patio.vibe) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {patio.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{patio.bestFor}</p>
            </div>
          )}
          {patio.vibe && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{patio.vibe}</p>
            </div>
          )}
        </div>
      )}
      {patio.proTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Pro tip:</strong> {patio.proTip}</p>
        </div>
      )}
      {patio.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{patio.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Patios in Milwaukee 2026 | Rooftops, Waterfront & Beer Gardens</title>
        <meta name="description" content="Find Milwaukee's best patios for summer 2026. Rooftop bars, waterfront drinking spots, neighborhood patios, and beer gardens. Complete guide with addresses and tips." />
        <meta name="keywords" content="best patios Milwaukee, Milwaukee rooftop bars, outdoor dining Milwaukee, Milwaukee beer gardens, waterfront bars Milwaukee, where to drink outside Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/best-patios-milwaukee" />

        <meta property="og:title" content="Best Patios in Milwaukee 2026 | Complete Outdoor Guide" />
        <meta property="og:description" content="Milwaukee's ultimate patio guide. Rooftops, waterfront spots, beer gardens, and neighborhood favorites." />
        <meta property="og:url" content="https://discover-milwaukee.com/best-patios-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-best-patios.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://discover-milwaukee.com/og-best-patios.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
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

        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>SUMMER 2026 GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Patios in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              When the weather hits, Milwaukee becomes a patio city. From rooftop bars to riverfront dives, here's where to drink outside.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#rooftops" style={{ color: c.green2, fontSize: "14px" }}>Rooftop Bars</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#waterfront" style={{ color: c.green2, fontSize: "14px" }}>Waterfront</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood Patios</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#beer-gardens" style={{ color: c.green2, fontSize: "14px" }}>Beer Gardens</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="rooftops" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Rooftop Bars in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Skyline views and craft cocktails. Milwaukee's rooftop scene has grown significantly, with options for every vibe from trendy to upscale.
            </p>
            {patios.rooftops.map((patio, i) => <PatioCard key={i} patio={patio} />)}
          </section>

          <section id="waterfront" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Waterfront Patios</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's rivers and lakefront provide stunning backdrops for summer drinking. These spots make the most of our water city status.
            </p>
            {patios.waterfront.map((patio, i) => <PatioCard key={i} patio={patio} />)}
          </section>

          <section id="neighborhood" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Patios</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The local spots where regulars gather. Less scene, more community—these patios are the backbone of Milwaukee's outdoor culture.
            </p>
            {patios.neighborhood.map((patio, i) => <PatioCard key={i} patio={patio} />)}
          </section>

          <section id="beer-gardens" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Beer Gardens</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's German heritage shines through its beer gardens. These county-run spots offer affordable drinks, family-friendly atmospheres, and pure summer vibes.
            </p>
            {patios.beerGardens.map((patio, i) => <PatioCard key={i} patio={patio} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/new-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                New Restaurants →
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Brunch →
              </Link>
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Summer Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Patio openings, outdoor events, and Milwaukee summer fun.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>Explore by Neighborhood</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Walker's Point</Link>
                <Link href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>East Side</Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "12px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
                <Link href="/things-to-do-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
                <Link href="/about" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>About</Link>
                <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
