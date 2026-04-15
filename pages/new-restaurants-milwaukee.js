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

const newRestaurants = {
  hottest: [
    {
      name: "Cassis",
      neighborhood: "Third Ward",
      cuisine: "French-European Bistro",
      priceRange: "$$$",
      opened: "Winter 2025",
      address: "Historic Third Ward, Milwaukee, WI",
      description: "The Third Ward's newest culinary destination brings French Riviera energy to Milwaukee. Cassis has quickly become one of the most talked-about restaurants in the city, with a bistro-style menu featuring perfectly executed classics alongside creative seasonal dishes. The space itself transports you—think warm lighting, marble bar tops, and that unmistakable European café atmosphere.",
      mustTry: "Steak Frites, Moules Marinières, French Onion Soup",
      vibe: "Chic but accessible, date night perfect, sidewalk seating in summer",
      buzz: "High - reservations recommended, especially weekends",
    },
    {
      name: "Nakama",
      neighborhood: "Downtown",
      cuisine: "High-End Japanese & Omakase",
      priceRange: "$$$$",
      opened: "Late 2025",
      address: "Downtown Milwaukee, WI",
      description: "Milwaukee's new standard for sushi and Japanese cuisine. Nakama brings an omakase experience previously unavailable in the city, with pristine fish flown in regularly and a chef's counter experience that rivals coastal cities. This is destination dining for serious sushi enthusiasts.",
      mustTry: "Omakase tasting menu, Specialty nigiri selection, Wagyu preparations",
      vibe: "Intimate, focused, celebratory",
      buzz: "Very high - omakase spots limited, book ahead",
    },
    {
      name: "Aya",
      neighborhood: "Walker's Point",
      cuisine: "Modern Middle Eastern",
      priceRange: "$$",
      opened: "Early 2026",
      address: "Walker's Point, Milwaukee, WI",
      description: "A fresh voice in Milwaukee's dining scene, Aya brings modern Middle Eastern flavors to Walker's Point. The mezze-style menu encourages sharing, with vibrant dishes that showcase both traditional techniques and contemporary creativity. Vegetarian and vegan options are abundant and genuinely exciting.",
      mustTry: "House-made hummus trio, Lamb kofta, Wood-fired pita, Falafel",
      vibe: "Lively, colorful, shareable plates, great for groups",
      buzz: "Building fast - early adopters are spreading the word",
    },
  ],
  recentOpenings: [
    {
      name: "Marrow",
      neighborhood: "Bay View",
      cuisine: "Modern American",
      priceRange: "$$$",
      opened: "Spring 2026",
      description: "Chef-driven neighborhood restaurant focusing on whole-animal butchery and house-made charcuterie. Marrow brings serious culinary technique to Bay View's thriving dining scene.",
      mustTry: "Bone marrow, House-cured meats, Daily specials",
      vibe: "Cozy, intimate, food-forward",
    },
    {
      name: "Second Story",
      neighborhood: "East Side",
      cuisine: "Wine Bar & Small Plates",
      priceRange: "$$",
      opened: "Winter 2025",
      description: "An intimate wine bar above an East Side retail space, Second Story offers a curated wine list and elegant small plates. Perfect for pre-dinner drinks or a full evening of grazing.",
      mustTry: "Rotating cheese selection, Seasonal small plates",
      vibe: "Sophisticated, conversation-friendly, hidden gem feel",
    },
    {
      name: "Masa",
      neighborhood: "Walker's Point",
      cuisine: "Mexican",
      priceRange: "$$",
      opened: "Fall 2025",
      description: "Authentic Mexican cuisine with a focus on house-made masa and regional specialties. Masa fills a gap in Milwaukee's dining scene with genuine, flavorful dishes that go beyond typical Tex-Mex.",
      mustTry: "Fresh tortillas, Mole dishes, Carnitas",
      vibe: "Casual, vibrant, family-friendly",
    },
  ],
  comingSoon: [
    {
      name: "The Elm",
      neighborhood: "Third Ward",
      cuisine: "Seasonal American",
      expected: "Summer 2026",
      description: "A highly anticipated opening from a James Beard-nominated chef, focusing on hyper-local Wisconsin ingredients and a rotating seasonal menu.",
    },
    {
      name: "Nori",
      neighborhood: "East Side",
      cuisine: "Japanese Izakaya",
      expected: "Fall 2026",
      description: "A casual Japanese izakaya concept bringing late-night dining and Japanese bar food to the East Side.",
    },
  ],
};

const faqs = [
  {
    question: "What are the newest restaurants in Milwaukee?",
    answer: "The newest restaurant openings in Milwaukee for 2026 include Cassis (French-European bistro in Third Ward), Nakama (high-end sushi downtown), Aya (modern Middle Eastern in Walker's Point), and Marrow (modern American in Bay View). The Elm and Nori are expected later in 2026."
  },
  {
    question: "What Milwaukee restaurants opened in 2025?",
    answer: "Notable 2025 openings include Nakama (late 2025), Second Story wine bar, Masa Mexican, and Cassis (winter 2025). These restaurants have quickly established themselves as must-visit destinations."
  },
  {
    question: "Where do I find new restaurant openings in Milwaukee?",
    answer: "Follow Discover Milwaukee for weekly updates on new restaurant openings. We cover every notable opening, from fine dining to casual concepts, across all Milwaukee neighborhoods."
  },
  {
    question: "What neighborhood has the most new restaurants?",
    answer: "Walker's Point and Third Ward continue to lead new restaurant development in Milwaukee, followed by Bay View and the East Side. Downtown has seen several notable high-end openings as well."
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
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/new-restaurants-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "New Restaurants in Milwaukee", "item": "https://discover-milwaukee.com/new-restaurants-milwaukee" }
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
        <link rel="canonical" href="https://discover-milwaukee.com/new-restaurants-milwaukee" />

        <meta property="og:title" content="New Restaurants in Milwaukee 2026 | Latest Openings" />
        <meta property="og:description" content="Stay ahead of Milwaukee's food scene. Complete guide to new restaurant openings, updated weekly." />
        <meta property="og:url" content="https://discover-milwaukee.com/new-restaurants-milwaukee" />
        <meta property="og:type" content="article" />

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

        <header style={{ background: `linear-gradient(135deg, ${c.orange} 0%, ${c.yellow} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED WEEKLY • APRIL 2026</p>
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
              <a href="#hottest" style={{ color: c.green2, fontSize: "14px" }}>Hottest Openings</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#recent" style={{ color: c.green2, fontSize: "14px" }}>Recent Openings</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#coming-soon" style={{ color: c.green2, fontSize: "14px" }}>Coming Soon</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="hottest" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Hottest New Openings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The restaurants everyone's talking about right now. These are generating real buzz and filling up fast.
            </p>
            {newRestaurants.hottest.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
          </section>

          <section id="recent" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>More Recent Openings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Other notable restaurants that have opened in the past year and are worth your attention.
            </p>
            {newRestaurants.recentOpenings.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
          </section>

          <section id="coming-soon" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Coming Soon</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              On our radar: anticipated openings to watch for later this year.
            </p>
            {newRestaurants.comingSoon.map((r, i) => <RestaurantCard key={i} restaurant={r} showOpened={false} />)}
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

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "16px" }}>
            <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
            <Link href="/explore" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Explore</Link>
            <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
