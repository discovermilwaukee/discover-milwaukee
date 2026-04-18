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

const sushiSpots = {
  bestOverall: [
    {
      name: "Screaming Tuna",
      neighborhood: "Third Ward",
      style: "Sustainable Asian Fusion",
      priceRange: "$$$",
      address: "106 W Seeboth St, Milwaukee, WI 53204",
      description: "An Asian culinary gem committed to sustainable seafood. As a proud Monterey Bay Aquarium Seafood Watch partner, Screaming Tuna ensures every dish is delicious and environmentally responsible. The signature rolls like 'Eye of the Tiger' showcase creative flavor combinations.",
      mustTry: "Eye of the Tiger roll, Screaming Tuna Signature roll, sashimi platter",
      insiderTip: "Make a reservation for dinner. Ask about the omakase experience if available.",
      bestFor: "Date nights, sustainable dining, creative rolls",
      verified: "Open 2026",
    },
    {
      name: "Kawa Ramen & Sushi",
      neighborhood: "East Side / Third Ward",
      style: "Modern Japanese",
      priceRange: "$$",
      address: "2321 N Murray Ave, Milwaukee, WI 53211",
      description: "Kawa quickly became one of Milwaukee's most popular Japanese destinations with two locations. The East Side spot near North Avenue offers a warm, inviting atmosphere perfect for both sushi and their excellent ramen.",
      mustTry: "Chef's selection rolls, tonkotsu ramen, spicy tuna",
      insiderTip: "The combo deals pairing ramen with sushi rolls are excellent value.",
      bestFor: "Casual dining, ramen lovers, consistency",
      verified: "Two locations open",
    },
  ],
  traditional: [
    {
      name: "Sushi Yuki",
      neighborhood: "Brookfield",
      style: "Traditional Japanese",
      priceRange: "$$$",
      address: "19115 W Capitol Dr, Brookfield, WI 53045",
      description: "Led by Tokyo Sushi Academy graduate Jin San Koh, Sushi Yuki brings authentic technique to Milwaukee. The sashimi and nigiri are impeccably fresh with options like salmon belly, ebi, and surf clam alongside classic preparations.",
      mustTry: "Omakase, salmon belly nigiri, chef's sashimi selection",
      insiderTip: "Sit at the sushi bar and let the chef guide your experience.",
      bestFor: "Traditional sushi, omakase, purists",
      verified: "Open 2026",
    },
    {
      name: "Kanpai Izakaya",
      neighborhood: "Third Ward",
      style: "Contemporary Izakaya",
      priceRange: "$$$",
      address: "320 E Buffalo St, Milwaukee, WI 53202",
      description: "Kanpai brings the izakaya experience to Milwaukee's Third Ward with spectacular sushi and an impressive sake selection. The contemporary atmosphere is enriched with authenticity—small plates, quality fish, and Japanese hospitality.",
      mustTry: "Sake flight, nigiri platter, izakaya small plates",
      insiderTip: "The sake pairings elevate the sushi experience. Ask for recommendations.",
      bestFor: "Sake enthusiasts, small plates, sophisticated dining",
      verified: "Open 2026",
    },
  ],
  casual: [
    {
      name: "Rice N Roll Bistro",
      neighborhood: "East Side / Downtown",
      style: "Japanese-Thai Fusion",
      priceRange: "$$",
      address: "2005 E North Ave, Milwaukee, WI 53202",
      description: "Rice N Roll fuses Japanese and Thai flavors, offering both excellent sushi and Thai favorites. The East Side and downtown locations are perfect for a casual lunch or dinner without sacrificing quality.",
      mustTry: "Specialty rolls, pad thai, curry",
      insiderTip: "Great for groups with varied preferences—the Thai menu is just as good as the sushi.",
      bestFor: "Groups, lunch, Thai-sushi combo",
      verified: "Multiple locations open",
    },
    {
      name: "Hungry Sumo Sushi Bar",
      neighborhood: "Menomonee Falls",
      style: "Contemporary Sushi",
      priceRange: "$$",
      address: "W156 N11452 Pilgrim Rd, Germantown, WI 53022",
      description: "Hungry Sumo consistently ranks among Milwaukee's best sushi bars for good reason—fresh fish, creative rolls, and friendly service make this a suburban favorite worth the drive.",
      mustTry: "Specialty rolls, lunch specials",
      insiderTip: "Lunch specials offer great value. Beat the dinner rush.",
      bestFor: "Suburban dining, value, families",
      verified: "Open 2026",
    },
    {
      name: "Fujiyama",
      neighborhood: "Brookfield",
      style: "Traditional Japanese",
      priceRange: "$$",
      address: "15385 W Capitol Dr, Brookfield, WI 53005",
      description: "A longtime favorite in the western suburbs, Fujiyama offers reliable quality and a deep menu of both sushi and cooked Japanese dishes in a traditional setting.",
      mustTry: "Dragon roll, bento boxes, tempura",
      insiderTip: "The bento boxes are a great way to sample multiple items.",
      bestFor: "Families, traditional Japanese, suburban convenience",
      verified: "Open 2026",
    },
  ],
  allYouCanEat: [
    {
      name: "Kyoto Japanese Restaurant",
      neighborhood: "Brookfield",
      style: "AYCE Sushi",
      priceRange: "$$",
      address: "16795 W Blue Mound Rd, Brookfield, WI 53005",
      description: "Kyoto offers all-you-can-eat sushi that doesn't sacrifice quality for quantity. A huge menu of rolls, nigiri, and Japanese dishes makes this perfect for groups with big appetites.",
      mustTry: "Variety of rolls, sashimi, hibachi",
      insiderTip: "Come hungry. Pace yourself—the quality is consistent throughout.",
      bestFor: "Value seekers, big appetites, groups",
      verified: "Open 2026",
    },
    {
      name: "Wasabi Sushi Lounge",
      neighborhood: "Wauwatosa",
      style: "Modern AYCE",
      priceRange: "$$",
      address: "7665 W State St, Wauwatosa, WI 53213",
      description: "Wasabi brings a modern lounge atmosphere to the all-you-can-eat format. Quality sushi at a fixed price makes this popular for lunch and dinner crowds alike.",
      mustTry: "Chef specials, variety of nigiri",
      insiderTip: "Dinner offers more options than lunch. Worth the upgrade.",
      bestFor: "Value dining, variety, casual groups",
      verified: "Open 2026",
    },
  ],
};

const faqs = [
  {
    question: "What's the best sushi restaurant in Milwaukee?",
    answer: "Screaming Tuna in the Third Ward is widely considered Milwaukee's top sushi destination, known for sustainable sourcing and creative rolls. For traditional omakase, Sushi Yuki in Brookfield offers Tokyo Sushi Academy-trained expertise.",
  },
  {
    question: "Where can I find all-you-can-eat sushi in Milwaukee?",
    answer: "Kyoto Japanese Restaurant in Brookfield and Wasabi Sushi Lounge in Wauwatosa both offer quality AYCE sushi options. Both maintain solid quality despite the unlimited format.",
  },
  {
    question: "Is there good omakase in Milwaukee?",
    answer: "Sushi Yuki offers the most authentic omakase experience with a Tokyo-trained chef. Screaming Tuna and Kanpai Izakaya also offer chef-driven tasting experiences worth trying.",
  },
  {
    question: "What's the best sushi for a date night?",
    answer: "Screaming Tuna in the Third Ward offers an upscale atmosphere and excellent food. Kanpai Izakaya combines great sushi with sake pairings for a sophisticated evening.",
  },
  {
    question: "Where's the best casual sushi in Milwaukee?",
    answer: "Kawa Ramen & Sushi on the East Side offers great quality in a relaxed setting. Rice N Roll is perfect if your group wants both sushi and Thai food options.",
  },
];

export default function BestSushiMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "10 Best Sushi Restaurants in Milwaukee: From Omakase to AYCE [2026]",
    description: "Discover Milwaukee's best sushi from upscale omakase at Screaming Tuna to quality all-you-can-eat options. Fresh fish, creative rolls, and traditional Japanese.",
    image: "https://www.discover-milwaukee.com/images/best-sushi-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-sushi-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Best Sushi Milwaukee", item: "https://www.discover-milwaukee.com/best-sushi-milwaukee" },
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
        <title>10 Best Sushi Restaurants in Milwaukee: Omakase to AYCE [2026 Guide]</title>
        <meta name="description" content="Discover Milwaukee's best sushi restaurants from upscale omakase to quality all-you-can-eat options. Fresh fish, creative rolls, and authentic Japanese cuisine." />
        <meta name="keywords" content="best sushi Milwaukee, Milwaukee sushi restaurants, omakase Milwaukee, Japanese food Milwaukee, Screaming Tuna, sushi near me Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-sushi-milwaukee" />
        <meta property="og:title" content="10 Best Sushi Restaurants in Milwaukee [2026 Guide]" />
        <meta property="og:description" content="From sustainable fine dining to quality AYCE, discover Milwaukee's best sushi restaurants." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-sushi-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-sushi-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
          <nav style={{ marginBottom: "24px", fontSize: "0.9rem" }}>
            <Link href="/" style={{ color: c.green2, textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px", color: "#999" }}>/</span>
            <Link href="/explore" style={{ color: c.green2, textDecoration: "none" }}>Explore</Link>
            <span style={{ margin: "0 8px", color: "#999" }}>/</span>
            <span style={{ color: c.green1 }}>Best Sushi</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>10 Best Sushi Restaurants in Milwaukee: From Omakase to All-You-Can-Eat</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee's sushi scene has grown significantly, with options ranging from sustainable fine-dining experiences to excellent neighborhood spots and quality AYCE options. Whether you're seeking an intimate omakase experience or sharing platters with friends, the city delivers.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide covers the best sushi Milwaukee has to offer—from Screaming Tuna's award-winning sustainable approach to hidden suburban gems. All restaurants verified open and serving in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All restaurants verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Best Overall</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Top-rated sushi experiences in Milwaukee</p>
            {sushiSpots.bestOverall.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Traditional & Omakase</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Authentic Japanese technique and chef-driven experiences</p>
            {sushiSpots.traditional.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Casual & Neighborhood</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Reliable quality without the fuss</p>
            {sushiSpots.casual.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>All-You-Can-Eat</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Quality sushi at a fixed price</p>
            {sushiSpots.allYouCanEat.map(renderSpot)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Sushi Ordering Tips</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Start Simple</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Begin with a few pieces of nigiri or sashimi to gauge the restaurant's fish quality before ordering elaborate rolls.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Trust the Chef</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Omakase means "I'll leave it up to you." Let the chef guide your experience—they know what's freshest that day.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>AYCE Strategy</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>At all-you-can-eat spots, order in small batches and focus on items that offer the best value—typically sashimi and specialty rolls.</p>
              </div>
            </div>
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
              <Link href="/best-restaurants-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>All Restaurants</Link>
              <Link href="/best-tacos-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Tacos</Link>
              <Link href="/best-brunch-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Brunch</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best sushi since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
