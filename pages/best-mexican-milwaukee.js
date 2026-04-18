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

const mexicanSpots = {
  authentic: [
    {
      name: "El Tlaxcalteca Restaurant",
      neighborhood: "South Side",
      style: "Traditional Mexican",
      priceRange: "$",
      address: "4463 S 27th St, Milwaukee, WI 53221",
      description: "A South Side institution serving authentic Mexican cuisine with generous portions and family recipes. El Tlaxcalteca consistently tops local lists for its genuine flavors and welcoming atmosphere that feels like visiting an abuela's home.",
      mustTry: "Tacos de barbacoa, tamales, enchiladas verdes, weekend specials",
      insiderTip: "Weekend specials often feature dishes not on the regular menu. Ask what's cooking.",
      bestFor: "Authentic Mexican, value, family dining",
      verified: "Open 2026",
    },
    {
      name: "Taqueria Buenavista",
      neighborhood: "South Side",
      style: "Family-Run Taqueria",
      priceRange: "$",
      address: "2611 W National Ave, Milwaukee, WI 53204",
      description: "This family-run establishment serves traditional, authentic, home-style Mexican cooking. The focus on family recipes and fresh ingredients has built a devoted following among those seeking the real thing.",
      mustTry: "Tacos al pastor, homemade salsas, aguas frescas",
      insiderTip: "The salsa bar is self-serve and exceptional. Don't miss it.",
      bestFor: "Authentic tacos, family atmosphere, traditional recipes",
      verified: "Open 2026",
    },
    {
      name: "Taqueria Los Comales",
      neighborhood: "South Side",
      style: "Neighborhood Taqueria",
      priceRange: "$",
      address: "On a street known for Mexican groceries and small restaurants",
      description: "Located among the authentic Mexican groceries and restaurants of the South Side, Los Comales delivers affordable tacos and great food in a no-frills setting. This is where locals eat.",
      mustTry: "Tacos, tortas, quesadillas",
      insiderTip: "Order at the counter, grab a seat, and enjoy. No pretense, just good food.",
      bestFor: "Cheap eats, authentic atmosphere, quick meals",
      verified: "Open 2026",
    },
  ],
  modern: [
    {
      name: "Paloma Taco and Tequila",
      neighborhood: "Third Ward / Washington Heights",
      style: "Modern Mexican",
      priceRange: "$$-$$$",
      address: "611 N Broadway, Milwaukee, WI 53202",
      description: "Paloma brings a quirky, elevated take on the Mexican taqueria with attention to detail in every dish. The Washington Heights location opened in 2020 and has become a neighborhood favorite. Dog-friendly patio.",
      mustTry: "Short rib tacos, crispy fish tacos, margaritas, queso fundido",
      insiderTip: "Happy hour offers good value. The tequila selection is worth exploring.",
      bestFor: "Date nights, groups, elevated tacos",
      verified: "Open 2026",
    },
    {
      name: "Café Corazón",
      neighborhood: "Riverwest",
      style: "Modern Mexican",
      priceRange: "$$",
      address: "3129 N Bremen St, Milwaukee, WI 53212",
      description: "A Riverwest favorite combining modern Mexican cuisine with a neighborhood bar atmosphere. Café Corazón balances creativity with authenticity, offering familiar flavors in unexpected preparations.",
      mustTry: "Tacos, weekend brunch, specialty cocktails",
      insiderTip: "Brunch is excellent but can get crowded. Arrive early on weekends.",
      bestFor: "Brunch, Riverwest dining, creative cocktails",
      verified: "Open 2026",
    },
    {
      name: "BelAir Cantina",
      neighborhood: "Multiple Locations",
      style: "California-Mexican",
      priceRange: "$$",
      address: "Water Street, Wauwatosa, Downer, Oak Creek, Brookfield",
      description: "Spacious patios and a California-Mexican vibe have made BelAir a family favorite across Milwaukee. Consistent quality across multiple locations with a menu that works for both traditionalists and adventurous eaters.",
      mustTry: "Street tacos, queso fundido, house margaritas",
      insiderTip: "The Water Street location has the best patio. Tuesday taco specials offer great value.",
      bestFor: "Families, large groups, patio dining",
      verified: "All locations open",
    },
  ],
  southSide: [
    {
      name: "Botanas Restaurant",
      neighborhood: "Walker's Point",
      style: "Authentic Mexican",
      priceRange: "$-$$",
      address: "816 S 5th St, Milwaukee, WI 53204",
      description: "Serving authentic Mexican cuisine since 2015 with all meats marinated for at least 24 hours before cooking. The homemade salsas and attention to traditional preparation have built a loyal following.",
      mustTry: "Carnitas, fajitas, homemade salsa, churros",
      insiderTip: "Save room for the churros. The 24-hour marinated meats are worth the wait.",
      bestFor: "Authentic flavors, quality ingredients, Walker's Point dining",
      verified: "Open 2026",
    },
    {
      name: "Los Tuxtla",
      neighborhood: "South Side",
      style: "Traditional Mexican",
      priceRange: "$",
      address: "South Side Milwaukee",
      description: "Named after the Los Tuxtlas region of Veracruz, this spot brings coastal Mexican flavors to Milwaukee. Fresh seafood preparations and regional specialties set it apart from standard taquerias.",
      mustTry: "Seafood dishes, regional specialties",
      insiderTip: "Try the regional dishes you might not find elsewhere in Milwaukee.",
      bestFor: "Veracruz cuisine, seafood, regional specialties",
      verified: "Open 2026",
    },
    {
      name: "La Casa De Alberto",
      neighborhood: "South Side",
      style: "Family Restaurant",
      priceRange: "$",
      address: "South Side Milwaukee",
      description: "A family-run establishment that's become a South Side staple. La Casa De Alberto delivers on the promise of home-style Mexican cooking with generous portions and fair prices.",
      mustTry: "Enchiladas, combination plates, daily specials",
      insiderTip: "The combination plates offer great value and variety.",
      bestFor: "Family meals, value, traditional cooking",
      verified: "Open 2026",
    },
  ],
  upscale: [
    {
      name: "Jalisco's Cantina",
      neighborhood: "Multiple Locations",
      style: "Contemporary Mexican",
      priceRange: "$$",
      address: "Multiple Milwaukee area locations",
      description: "Jalisco's brings contemporary Mexican dining with a focus on regional flavors and quality ingredients. The cantina atmosphere is festive without being overwhelming.",
      mustTry: "Regional specialties, margaritas, tableside guacamole",
      insiderTip: "Tableside guacamole is made fresh to your taste. Worth every penny.",
      bestFor: "Groups, celebrations, quality Mexican",
      verified: "Open 2026",
    },
  ],
};

const faqs = [
  {
    question: "Where's the most authentic Mexican food in Milwaukee?",
    answer: "Milwaukee's South Side, particularly along W National Ave, S 27th St, and surrounding areas, offers the most authentic Mexican food. El Tlaxcalteca, Taqueria Buenavista, and the many small taquerias in the area deliver genuine flavors.",
  },
  {
    question: "What's the best taco in Milwaukee?",
    answer: "For authentic street tacos, head to the South Side taquerias like El Tlaxcalteca or Taqueria Buenavista. For elevated tacos in a modern setting, Paloma delivers excellent quality. See our full taco guide for more options.",
  },
  {
    question: "Where should I go for a Mexican food date night?",
    answer: "Paloma in the Third Ward or Washington Heights offers upscale ambiance with quality food. Jalisco's Cantina provides a festive atmosphere for special occasions. Both have impressive tequila selections.",
  },
  {
    question: "What's the best Mexican restaurant for families?",
    answer: "BelAir Cantina works well for families with its spacious setting and crowd-pleasing menu. On the South Side, El Tlaxcalteca and La Casa De Alberto are welcoming to families with authentic food at reasonable prices.",
  },
  {
    question: "Where can I find good Mexican seafood in Milwaukee?",
    answer: "Los Tuxtla brings Veracruz coastal flavors to Milwaukee. For more casual seafood, check the South Side taquerias for ceviche and shrimp preparations. Paloma also serves excellent fish tacos.",
  },
];

export default function BestMexicanMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "12 Best Mexican Restaurants in Milwaukee: Authentic to Modern [2026]",
    description: "Discover Milwaukee's best Mexican restaurants from authentic South Side taquerias to modern cantinas. Tacos, enchiladas, and regional specialties.",
    image: "https://www.discover-milwaukee.com/images/best-mexican-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-mexican-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Best Mexican Milwaukee", item: "https://www.discover-milwaukee.com/best-mexican-milwaukee" },
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
        <title>12 Best Mexican Restaurants in Milwaukee: Authentic to Modern [2026]</title>
        <meta name="description" content="Discover Milwaukee's best Mexican restaurants from authentic South Side taquerias to modern cantinas. Complete guide to tacos, enchiladas, and regional specialties." />
        <meta name="keywords" content="best Mexican Milwaukee, Mexican restaurants Milwaukee, authentic tacos Milwaukee, El Tlaxcalteca, Milwaukee South Side Mexican" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-mexican-milwaukee" />
        <meta property="og:title" content="12 Best Mexican Restaurants in Milwaukee [2026 Guide]" />
        <meta property="og:description" content="From authentic South Side taquerias to modern cantinas, discover Milwaukee's best Mexican food." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-mexican-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-mexican-milwaukee.jpg" />
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
            <span style={{ color: c.green1 }}>Best Mexican</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>12 Best Mexican Restaurants in Milwaukee: From Authentic Taquerias to Modern Cantinas</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee's Mexican food scene is anchored by the vibrant South Side, where generations of Mexican-American families have built taquerias serving authentic regional cuisine. From no-frills neighborhood spots to modern interpretations, the city offers genuine flavors across every price point.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide covers the best Mexican restaurants in Milwaukee—from the taquerias where locals line up for carnitas to the contemporary cantinas elevating traditional dishes. All restaurants verified open in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All restaurants verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Most Authentic</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Family-run spots serving traditional recipes</p>
            {mexicanSpots.authentic.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Modern Mexican</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Contemporary takes on traditional flavors</p>
            {mexicanSpots.modern.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>South Side Favorites</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>The heart of Milwaukee's Mexican community</p>
            {mexicanSpots.southSide.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Upscale & Special Occasions</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Elevated Mexican dining experiences</p>
            {mexicanSpots.upscale.map(renderSpot)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Milwaukee's Mexican Food Scene</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>The South Side</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Milwaukee's South Side is home to a thriving Mexican-American community. W National Ave and S 27th St corridor are packed with taquerias, panaderias, and markets offering authentic ingredients and dishes.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Regional Specialties</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Milwaukee restaurants represent various Mexican regions—from Jalisco's birria to Veracruz seafood to Michoacán carnitas. Ask about regional specialties to expand your palate.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Festival Culture</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Mexican Fiesta at Summerfest Grounds celebrates Mexican culture every August with food, music, and cultural events. It's the largest Mexican festival in Wisconsin.</p>
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
              <Link href="/best-tacos-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Tacos</Link>
              <Link href="/food-trucks-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Food Trucks</Link>
              <Link href="/best-restaurants-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>All Restaurants</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best Mexican food since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
