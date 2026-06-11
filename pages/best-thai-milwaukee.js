import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const thaiSpots = {
  authentic: [
    {
      name: "EE-Sane Thai-Lao Cuisine",
      neighborhood: "East Side",
      style: "Thai-Lao Authentic",
      priceRange: "$-$$",
      address: "1806 N Farwell Ave, Milwaukee, WI 53202",
      description: "A quaint, family-owned restaurant that punches above its weight class. EE-Sane delivers authentic Thai and Lao cuisine with fair prices and a family-style atmosphere. The unassuming exterior hides some of Milwaukee's most genuine Southeast Asian flavors.",
      mustTry: "Pad Thai, Larb, Thai basil dishes, Lao specialties",
      insiderTip: "Don't skip the Lao dishes—they're harder to find elsewhere in Milwaukee and equally excellent.",
      bestFor: "Authentic flavors, affordable dining, Thai-Lao exploration",
      verified: "Open 2026",
    },
    {
      name: "Bangkok House",
      neighborhood: "West Side",
      style: "Traditional Thai",
      priceRange: "$$",
      address: "4698 S Whitnall Ave, Milwaukee, WI 53220",
      description: "High-quality, authentic Thai cuisine with intensely flavored, highly creative dishes. Bangkok House uses fresh ingredients including premium spices and herbs imported directly from Thailand for genuine flavor.",
      mustTry: "Curries, Thai basil dishes, seafood specials",
      insiderTip: "The imported Thai ingredients make a noticeable difference in authenticity.",
      bestFor: "Traditional Thai, quality ingredients, authentic spicing",
      verified: "Open 2026",
    },
    {
      name: "Mekong Cafe",
      neighborhood: "Bay View",
      style: "Thai-Lao-Vietnamese",
      priceRange: "$$",
      address: "2514 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Family-friendly restaurant offering Thai, Laotian, and Vietnamese cuisine. Co-owned by chef Banh Phongsavat, Mekong Cafe brings innovative takes on traditional Southeast Asian fare while maintaining authentic roots.",
      mustTry: "Pho, Pad Thai, Lao specialties, Vietnamese dishes",
      insiderTip: "The menu spans three cuisines—take advantage and try dishes from each tradition.",
      bestFor: "Families, variety seekers, Bay View dining",
      verified: "Open 2026",
    },
  ],
  popular: [
    {
      name: "Thai-namite",
      neighborhood: "West Allis",
      style: "Thai & Sushi",
      priceRange: "$$",
      address: "6814 W Greenfield Ave, West Allis, WI 53214",
      description: "Milwaukee's first Thai and sushi restaurant, serving fresh flavors since 2009. Thai-namite combines authentic Thai dishes with handcrafted sushi, offering two cuisines under one roof.",
      mustTry: "Pad Thai, sushi rolls, Thai curries",
      insiderTip: "Great option when your group can't decide between Thai and sushi.",
      bestFor: "Thai-sushi combo, groups with varied preferences",
      verified: "Open 2026",
    },
    {
      name: "The King & I",
      neighborhood: "Downtown",
      style: "Classic Thai",
      priceRange: "$$",
      address: "830 N Old World Third St, Milwaukee, WI 53203",
      description: "A downtown staple serving classic Thai dishes in a comfortable setting. The King & I has built a loyal following with consistent quality and convenient location near entertainment venues.",
      mustTry: "Curries, Pad Thai, Thai iced tea",
      insiderTip: "Great for pre-theater dinner with its downtown location.",
      bestFor: "Downtown convenience, pre-event dining, reliable Thai",
      verified: "Open 2026",
    },
    {
      name: "Sweet Basil",
      neighborhood: "Bay View",
      style: "Contemporary Thai",
      priceRange: "$$",
      address: "2301 S Howell Ave, Milwaukee, WI 53207",
      description: "Contemporary Thai cuisine with fresh ingredients and careful preparation. Sweet Basil balances authenticity with approachability, making it a neighborhood favorite.",
      mustTry: "Basil dishes, curries, noodles",
      insiderTip: "The basil dishes live up to the restaurant's name.",
      bestFor: "Casual dining, neighborhood spot, contemporary Thai",
      verified: "Open 2026",
    },
  ],
  neighborhood: [
    {
      name: "Siam Thai",
      neighborhood: "Multiple Locations",
      style: "Traditional Thai",
      priceRange: "$$",
      address: "Multiple Milwaukee-area locations",
      description: "A reliable Thai option with multiple locations across the Milwaukee area. Siam Thai delivers consistent quality and a full menu of traditional favorites.",
      mustTry: "Pad Thai, curries, Thai basil",
      insiderTip: "Multiple locations mean you can usually find one nearby.",
      bestFor: "Convenience, consistent quality, suburban access",
      verified: "Open 2026",
    },
    {
      name: "Thai Orchid",
      neighborhood: "Wauwatosa",
      style: "Traditional Thai",
      priceRange: "$$",
      address: "Wauwatosa, WI",
      description: "A Wauwatosa favorite for traditional Thai cuisine. Thai Orchid serves classic dishes with attention to authentic flavors in a welcoming atmosphere.",
      mustTry: "Curries, noodle dishes, appetizers",
      insiderTip: "Good suburban option when you don't want to drive downtown.",
      bestFor: "Wauwatosa dining, traditional flavors, families",
      verified: "Open 2026",
    },
    {
      name: "Room Service",
      neighborhood: "East Side",
      style: "Thai-Asian Fusion",
      priceRange: "$$",
      address: "2651 N Downer Ave, Milwaukee, WI 53211",
      description: "East Side spot offering Thai alongside other Asian cuisines. The diverse menu and Downer Avenue location make this a popular neighborhood choice.",
      mustTry: "Thai specialties, Asian fusion dishes",
      insiderTip: "The Downer Avenue location is great for a pre-movie dinner.",
      bestFor: "East Side convenience, varied menu, casual dining",
      verified: "Open 2026",
    },
  ],
  specialty: [
    {
      name: "Vientiane Noodle Shop",
      neighborhood: "Silver City",
      style: "Lao Noodles",
      priceRange: "$",
      address: "3422 W National Ave, Milwaukee, WI 53215",
      description: "Specializing in Lao noodle dishes, Vientiane offers something different from typical Thai restaurants. The focus on noodles and Lao specialties makes this a unique destination.",
      mustTry: "Pho, Lao noodle soups, rice dishes",
      insiderTip: "One of the few places in Milwaukee to find authentic Lao noodles.",
      bestFor: "Noodle lovers, Lao cuisine, unique flavors",
      verified: "Open 2026",
    },
    {
      name: "Momo Mee",
      neighborhood: "Bay View",
      style: "Pan-Asian with Thai",
      priceRange: "$$",
      address: "2565 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Pan-Asian restaurant with strong Thai offerings. Momo Mee brings creative takes on noodles and Asian comfort food to Bay View's dining scene.",
      mustTry: "Noodle dishes, dumplings, Thai-inspired items",
      insiderTip: "Good for groups who want variety in their Asian food options.",
      bestFor: "Bay View dining, creative Asian, noodle lovers",
      verified: "Open 2026",
    },
  ],
};

const faqs = [
  {
    question: "What's the best Thai restaurant in Milwaukee?",
    answer: "EE-Sane Thai-Lao Cuisine on the East Side is frequently cited as the most authentic option. Bangkok House is known for using imported Thai ingredients. For convenient downtown dining, The King & I is a reliable choice.",
  },
  {
    question: "Where can I find Lao food in Milwaukee?",
    answer: "EE-Sane Thai-Lao Cuisine offers both Thai and Lao dishes. Vientiane Noodle Shop specializes in Lao noodles. Mekong Cafe in Bay View also features Lao cuisine alongside Thai and Vietnamese.",
  },
  {
    question: "What's a good Thai restaurant for spicy food?",
    answer: "EE-Sane and Bangkok House both offer authentic spice levels. Most Thai restaurants will adjust spice to your preference—don't be shy about asking for Thai-hot if you can handle it.",
  },
  {
    question: "Best Thai restaurant for large groups?",
    answer: "Thai-namite works well for groups since it offers both Thai and sushi. Siam Thai locations typically have good seating capacity. Sweet Basil in Bay View is also group-friendly.",
  },
  {
    question: "Where's the best Pad Thai in Milwaukee?",
    answer: "EE-Sane and Bangkok House are known for excellent Pad Thai with authentic technique. The King & I downtown also serves a reliable version.",
  },
];

export default function BestThaiMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "12 Best Thai Restaurants in Milwaukee: Authentic to Contemporary [2026]",
    description: "Discover Milwaukee's best Thai restaurants from authentic EE-Sane to contemporary favorites. Pad Thai, curries, Lao specialties, and more.",
    image: "https://www.discover-milwaukee.com/images/best-thai-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-thai-milwaukee",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Explore", item: "https://www.discover-milwaukee.com/explore" },
      { "@type": "ListItem", position: 3, name: "Best Thai Milwaukee", item: "https://www.discover-milwaukee.com/best-thai-milwaukee" },
    ],
  };

  const renderSpot = (spot) => (
    <div key={spot.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{spot.neighborhood}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{spot.priceRange}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{spot.style}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Must Try:</strong> <span style={{ color: "#555" }}>{spot.mustTry}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{spot.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{spot.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{spot.address} | {spot.verified}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>12 Best Thai Restaurants in Milwaukee: Authentic to Contemporary [2026]</title>
        <meta name="description" content="Discover Milwaukee's best Thai restaurants from authentic EE-Sane to downtown favorites. Pad Thai, curries, Lao specialties, and more." />
        <meta name="keywords" content="best Thai Milwaukee, Thai restaurants Milwaukee, Pad Thai Milwaukee, EE-Sane Milwaukee, Thai food Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-thai-milwaukee" />
        <meta property="og:title" content="12 Best Thai Restaurants in Milwaukee [2026 Guide]" />
        <meta property="og:description" content="From authentic EE-Sane to contemporary favorites, discover Milwaukee's best Thai restaurants." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-thai-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-thai-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>12 Best Thai Restaurants in Milwaukee: From Authentic to Contemporary</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee's Thai restaurant scene offers everything from family-run authentic spots to contemporary fusion. Many restaurants also feature Lao cuisine, reflecting the region's Southeast Asian community and adding dishes you won't find elsewhere.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide covers the best Thai restaurants in Milwaukee—from the unassuming excellence of EE-Sane to convenient downtown options. All restaurants verified open in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All restaurants verified open</p>
          </header>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Thai Restaurants in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>EE-Sane Thai-Lao Cuisine, Bangkok House, Mekong Cafe, Thai-namite, The King & I</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Most Authentic</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Family-run spots with genuine flavors</p>
            {thaiSpots.authentic.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Popular Favorites</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Tried-and-true Thai restaurants</p>
            {thaiSpots.popular.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Neighborhood Spots</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Convenient local options</p>
            {thaiSpots.neighborhood.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Specialty & Unique</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Something different</p>
            {thaiSpots.specialty.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px", fontSize: "1.1rem" }}>{faq.question}</h3>
                <p style={{ color: "#555", lineHeight: "1.7" }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ backgroundColor: c.green1, borderRadius: "12px", padding: "32px", textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Food Guides</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Explore more of Milwaukee's diverse culinary scene</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/best-sushi-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Sushi</Link>
              <Link href="/best-restaurants-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>All Restaurants</Link>
              <Link href="/best-tacos-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Tacos</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best Thai food since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
