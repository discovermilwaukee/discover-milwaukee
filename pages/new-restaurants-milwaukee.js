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

const newRestaurants = {
  hottest: [
    {
      name: "Cassis",
      neighborhood: "Third Ward",
      cuisine: "French-European Bistro",
      priceRange: "$$$",
      opened: "January 2026",
      address: "333 N Water St, Milwaukee, WI 53202",
      description: "The Third Ward's newest culinary destination brings French Riviera energy to Milwaukee. From James Beard-nominated chef Kyle Knall (of Birch), Cassis has quickly become one of the most talked-about restaurants in the city. Named by Bon Appetit as one of nine must-visit restaurants for 2025, it features a bistro-style menu with perfectly executed classics alongside creative seasonal dishes.",
      mustTry: "Steak Frites, Moules Marinières, French Onion Soup",
      vibe: "Chic but accessible, date night perfect, sidewalk seating in summer",
      buzz: "High - reservations recommended, especially weekends",
    },
    {
      name: "Nakama",
      neighborhood: "Lower East Side",
      cuisine: "High-End Japanese & Omakase",
      priceRange: "$$$$",
      opened: "Late 2025",
      address: "1600 N Jackson St, Milwaukee, WI 53202",
      description: "Milwaukee's new standard for sushi and Japanese cuisine. Featuring Chef Jason Morimoto (winner of Morimoto's Sushi Master Season 2) and co-owned by Cristian Vega of Screaming Tuna, Nakama brings an omakase experience previously unavailable in the city. Pristine fish flown in regularly creates a chef's counter experience that rivals coastal cities.",
      mustTry: "Omakase tasting menu, Specialty nigiri selection, Hand rolls",
      vibe: "Intimate, focused, celebratory",
      buzz: "Very high - omakase spots limited, book ahead",
    },
    {
      name: "Aya",
      neighborhood: "Downtown",
      cuisine: "Modern Mediterranean & Middle Eastern",
      priceRange: "$$-$$$",
      opened: "February 2026",
      address: "700 E Kilbourn Ave, Milwaukee, WI 53202",
      description: "Located in the stunning Ascent building downtown, Aya brings modern Mediterranean and Middle Eastern flavors from Fatima and Hanish Kumar (owners of Saffron). The mezze-style menu encourages sharing, with vibrant dishes that showcase both traditional techniques and contemporary creativity. Vegetarian and vegan options are abundant and genuinely exciting.",
      mustTry: "House-made hummus trio, Lamb kofta, Wood-fired pita, Falafel",
      vibe: "Lively, colorful, shareable plates, great for groups",
      buzz: "Building fast - early adopters are spreading the word",
    },
  ],
};

const faqs = [
  {
    question: "What are the newest restaurants in Milwaukee?",
    answer: "The hottest restaurant openings in Milwaukee for 2026 include Cassis (French-European bistro in Third Ward from the team behind Birch), Nakama (high-end omakase on the Lower East Side), and Aya (modern Mediterranean downtown in the Ascent building)."
  },
  {
    question: "What Milwaukee restaurants opened in 2025?",
    answer: "Notable late 2025 openings include Nakama (omakase and hand rolls on the Lower East Side) and Cassis (January 2026). Both have quickly established themselves as must-visit destinations."
  },
  {
    question: "Where do I find new restaurant openings in Milwaukee?",
    answer: "Follow Discover Milwaukee for weekly updates on new restaurant openings. We cover every notable opening, from fine dining to casual concepts, across all Milwaukee neighborhoods."
  },
  {
    question: "What neighborhood has the most new restaurants?",
    answer: "Third Ward and Downtown continue to lead new restaurant development in Milwaukee, followed by Walker's Point and the East Side. The Lower East Side has also seen notable high-end openings."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "New Restaurants in Milwaukee 2026: Latest Openings & Coming Soon",
    "description": "Stay ahead of Milwaukee's evolving food scene with our complete guide to new restaurant openings, including Cassis, Nakama, Aya, and coming-soon spots.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-07-03",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/new-restaurants-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "New Restaurants in Milwaukee", "item": "https://www.discover-milwaukee.com/new-restaurants-milwaukee" }
    ]
  }
};

export default function NewRestaurantsMilwaukee() {
  const RestaurantCard = ({ restaurant, showOpened = true }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{restaurant.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {restaurant.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.neighborhood}</span>
          {showOpened && restaurant.opened && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{restaurant.opened}</span>}
          {restaurant.expected && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>Expected {restaurant.expected}</span>}
        </div>
      </div>
      <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>{restaurant.cuisine}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{restaurant.description}</p>
      {restaurant.mustTry && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
            <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
            <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.mustTry}</p>
          </div>
          {restaurant.vibe && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.vibe}</p>
            </div>
          )}
        </div>
      )}
      {restaurant.buzz && (
        <p style={{ fontSize: "13px", color: c.orange, marginTop: "12px", marginBottom: 0, fontWeight: "600" }}>Buzz level: {restaurant.buzz}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>New Restaurants in Milwaukee 2026 | Latest Openings & Coming Soon</title>
        <meta name="description" content="Discover Milwaukee's newest restaurants for 2026. Cassis, Nakama, Aya, and more recent openings plus coming-soon spots. Updated weekly with the latest MKE food news." />
        <meta name="keywords" content="new restaurants Milwaukee, Milwaukee restaurant openings 2026, new Milwaukee restaurants, recently opened Milwaukee, where to eat Milwaukee new" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/new-restaurants-milwaukee" />

        <meta property="og:title" content="New Restaurants in Milwaukee 2026 | Latest Openings" />
        <meta property="og:description" content="Stay ahead of Milwaukee's food scene. Complete guide to new restaurant openings, updated weekly." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/new-restaurants-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-new-restaurants.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-new-restaurants.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.orange} 0%, ${c.yellow} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED WEEKLY • JULY 2026</p>
            <h1 style={{ color: c.green1, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              New Restaurants in Milwaukee
            </h1>
            <p style={{ color: c.green1, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto", opacity: 0.85 }}>
              Milwaukee's restaurant scene is constantly evolving. Here's everything that's opened recently—and what's coming next.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#at-a-glance" style={{ color: c.green2, fontSize: "14px" }}>At a Glance</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#hottest" style={{ color: c.green2, fontSize: "14px" }}>Hottest Openings</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />

          {/* Key Facts — lead answer block */}
          <section id="key-facts" style={{ marginBottom: "40px", scrollMarginTop: "80px" }}>
            <p style={{ color: c.green1, fontSize: "18px", lineHeight: 1.7, fontWeight: "600", marginBottom: 0 }}>
              The hottest new restaurants in Milwaukee for 2026 are Cassis (a French-European bistro in the Third Ward from Birch's James Beard-nominated chef Kyle Knall), Nakama (high-end omakase on the Lower East Side with Sushi Master winner Jason Morimoto), and Aya (modern Mediterranean and Middle Eastern downtown in the Ascent building). The Third Ward and Downtown lead Milwaukee's new-restaurant development, followed by Walker's Point and the East Side.
            </p>
          </section>

          {/* At-a-Glance table — quick reference */}
          <section id="at-a-glance" aria-labelledby="at-a-glance-heading" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <h2 id="at-a-glance-heading" style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>New Milwaukee Restaurants at a Glance</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ backgroundColor: c.green1, color: c.cream, textAlign: "left" }}>
                    <th style={{ padding: "10px 12px" }}>Restaurant</th>
                    <th style={{ padding: "10px 12px" }}>Neighborhood</th>
                    <th style={{ padding: "10px 12px" }}>Cuisine</th>
                    <th style={{ padding: "10px 12px" }}>Price</th>
                    <th style={{ padding: "10px 12px" }}>Opened</th>
                  </tr>
                </thead>
                <tbody>
                  {newRestaurants.hottest.map((r, i) => (
                    <tr key={r.name} style={{ borderBottom: `1px solid ${c.beige}`, backgroundColor: i % 2 ? "#fff" : c.cream }}>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: c.green1 }}>{r.name}</td>
                      <td style={{ padding: "10px 12px", color: "#555" }}>{r.neighborhood}</td>
                      <td style={{ padding: "10px 12px", color: "#555" }}>{r.cuisine}</td>
                      <td style={{ padding: "10px 12px", color: "#555" }}>{r.priceRange}</td>
                      <td style={{ padding: "10px 12px", color: "#555" }}>{r.opened}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="hottest" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Hottest New Openings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The restaurants everyone's talking about right now. These are generating real buzz and filling up fast.
            </p>
            {newRestaurants.hottest.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Brunch →
              </Link>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Patios →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Never Miss a New Opening</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get new restaurant alerts and weekly Milwaukee updates.</p>
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
