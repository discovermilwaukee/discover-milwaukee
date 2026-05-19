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

const iceCreamSpots = {
  frozenCustard: [
    {
      name: "Kopp's Frozen Custard",
      neighborhood: "Glendale / Greenfield / Brookfield",
      style: "Wisconsin Institution",
      priceRange: "$",
      address: "Multiple locations: 7631 W Layton Ave, 5373 N Port Washington Rd, 18880 W Bluemound Rd",
      description: "The frozen custard institution of Milwaukee with a cult following. Kopp's features two flavors of the day alongside vanilla and chocolate, plus giant charbroiled burgers. The rotating flavors are legendary—fans track the calendar religiously.",
      mustTry: "Flavor of the day, jumbo burger combo, sundaes",
      insiderTip: "Check the flavor calendar online and plan your visit around a special flavor. Some only appear a few times a year.",
      bestFor: "Wisconsin tradition, burger + custard combos, flavor variety",
      verified: "All locations open 2026",
    },
    {
      name: "Leon's Frozen Custard",
      neighborhood: "South Side",
      style: "Neon-Lit Classic",
      priceRange: "$",
      address: "3131 S 27th St, Milwaukee, WI 53215",
      description: "The neon lights of Leon's have been beckoning Milwaukeeans since 1942. This drive-up institution serves creamy frozen custard in a setting that feels frozen in time—in the best way possible.",
      mustTry: "Vanilla custard, chocolate custard, sundaes",
      insiderTip: "The neon sign is iconic Milwaukee. Come at night for the full experience.",
      bestFor: "Historic atmosphere, classic custard, photo ops",
      verified: "Open 2026",
    },
    {
      name: "Gilles Frozen Custard",
      neighborhood: "Multiple Locations",
      style: "Milwaukee's Oldest",
      priceRange: "$",
      address: "7515 W Blue Mound Rd, Wauwatosa, WI 53213",
      description: "Milwaukee's oldest custard stand, operating since 1938. Gilles has been serving the same quality frozen custard for nearly 90 years, making it a living piece of Milwaukee history.",
      mustTry: "Classic vanilla, chocolate, simple sundaes",
      insiderTip: "The simplicity is the point. This is custard the way it's been done for generations.",
      bestFor: "History lovers, classic preparation, traditional experience",
      verified: "Open since 1938",
    },
    {
      name: "Oscar's Frozen Custard",
      neighborhood: "Waukesha / Franklin / Milwaukee",
      style: "Flavor of the Day Focus",
      priceRange: "$",
      address: "Multiple locations throughout greater Milwaukee",
      description: "With three locations, Oscar's has built a following for fun flavors of the day, charbroiled burgers, shakes, and the sundae of the month. The expanding footprint proves Milwaukee's custard appetite is endless.",
      mustTry: "Flavor of the day, charbroiled burger, sundae of the month",
      insiderTip: "The sundae of the month is worth following. Creative combinations change regularly.",
      bestFor: "Flavor variety, burger combos, suburban convenience",
      verified: "All locations open 2026",
    },
  ],
  artisanal: [
    {
      name: "Purple Door Ice Cream",
      neighborhood: "Third Ward / Walker's Point",
      style: "Small-Batch Artisanal",
      priceRange: "$$",
      address: "205 S 2nd St, Milwaukee, WI 53204",
      description: "Milwaukee's premier small-batch ice cream maker with 34 rotating flavors. The Third Ward location is perfect for strolling, and the creative flavors go far beyond standard offerings.",
      mustTry: "Seasonal specials, unique flavors, classic done right",
      insiderTip: "The rotating flavors mean there's always something new. Ask what's seasonal.",
      bestFor: "Artisanal quality, unique flavors, Third Ward visits",
      verified: "Open 2026",
    },
    {
      name: "Scratch Ice Cream",
      neighborhood: "West Allis",
      style: "Craft Ice Cream",
      priceRange: "$$",
      address: "6502 W North Ave, Wauwatosa, WI 53213",
      description: "Small-batch craft ice cream with creative flavors and quality ingredients. Scratch represents the modern ice cream movement with attention to sourcing and technique.",
      mustTry: "Seasonal flavors, creative combinations",
      insiderTip: "Follow for limited-time flavors. They experiment with interesting combinations.",
      bestFor: "Craft ice cream, unique flavors, quality ingredients",
      verified: "Open 2026",
    },
  ],
  classic: [
    {
      name: "Culver's",
      neighborhood: "Multiple Locations",
      style: "Wisconsin Chain",
      priceRange: "$",
      address: "Multiple Milwaukee-area locations",
      description: "Wisconsin's own fast-food chain featuring frozen custard alongside ButterBurgers. While it's a chain, Culver's maintains quality and offers the Wisconsin custard experience with consistent availability.",
      mustTry: "Concrete mixer, flavor of the day, ButterBurger combo",
      insiderTip: "The Concrete Mixer (blended custard with mix-ins) is the signature order.",
      bestFor: "Quick custard fix, family-friendly, consistent quality",
      verified: "All locations open",
    },
    {
      name: "Georgie Porgie's Treefort",
      neighborhood: "Oak Creek",
      style: "Family Fun",
      priceRange: "$",
      address: "8501 S Howell Ave, Oak Creek, WI 53154",
      description: "A family-friendly destination combining frozen custard with a treehouse play area. Georgie Porgie's makes custard runs into an adventure for kids and a nostalgia trip for adults.",
      mustTry: "Custard treats, family combos",
      insiderTip: "Great for families with young kids—let them play while you enjoy custard.",
      bestFor: "Families with kids, fun atmosphere, custard destination",
      verified: "Open 2026",
    },
  ],
  specialty: [
    {
      name: "Northpoint Custard",
      neighborhood: "Lakefront",
      style: "Lakefront Stand",
      priceRange: "$",
      address: "Bradford Beach, Milwaukee",
      description: "A lakefront custard stand serving beachgoers and strollers along the lake. The setting—right on Lake Michigan—makes this a summer essential.",
      mustTry: "Classic custard with lake views",
      insiderTip: "Combine with a Bradford Beach visit in summer. The views add to the experience.",
      bestFor: "Summer lakefront, beach days, scenic treats",
      verified: "Seasonal - Open summers",
    },
  ],
};

const custardFacts = [
  "Milwaukee is home to the world's largest concentration of frozen custard shops, earning the unofficial title of 'frozen custard capital of the world.'",
  "Frozen custard differs from ice cream by containing egg yolks and being served at a warmer temperature with less air whipped in.",
  "Kopp's flavor calendar has inspired a devoted following—some flavors only appear a few times a year.",
  "Leon's neon sign has been a Milwaukee landmark since 1942, appearing in films and representing the city's custard culture.",
];

const faqs = [
  {
    question: "What's the difference between frozen custard and ice cream?",
    answer: "Frozen custard contains egg yolks (at least 1.4% by weight), is served at a warmer temperature (around 18°F vs 10°F for ice cream), and has less air whipped in, making it denser and creamier.",
  },
  {
    question: "What's the best frozen custard in Milwaukee?",
    answer: "Kopp's is the most popular for its flavor variety and burger combos. Leon's offers the most nostalgic atmosphere. Gilles is the oldest (since 1938). Each has devoted fans.",
  },
  {
    question: "Where can I find artisanal ice cream in Milwaukee?",
    answer: "Purple Door Ice Cream in the Third Ward offers 34 rotating small-batch flavors. Scratch Ice Cream focuses on craft preparations with creative combinations.",
  },
  {
    question: "Is frozen custard a Milwaukee thing?",
    answer: "While frozen custard originated elsewhere, Milwaukee has more custard stands than any other city, earning it the title of 'frozen custard capital of the world.'",
  },
  {
    question: "What should I order at a Milwaukee custard stand?",
    answer: "The 'flavor of the day' is the classic order—a rotating specialty flavor alongside vanilla and chocolate. Sundaes and 'concrete mixers' (blended with toppings) are also popular.",
  },
];

export default function BestIceCreamMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Ice Cream & Frozen Custard in Milwaukee: Complete Guide [2026]",
    description: "Discover Milwaukee's best frozen custard and ice cream from legendary Kopp's to artisanal Purple Door. The frozen custard capital of the world.",
    image: "https://www.discover-milwaukee.com/images/best-ice-cream-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-ice-cream-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Best Ice Cream Milwaukee", item: "https://www.discover-milwaukee.com/best-ice-cream-milwaukee" },
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
        <title>Best Ice Cream & Frozen Custard in Milwaukee [2026 Guide]</title>
        <meta name="description" content="Discover Milwaukee's best frozen custard and ice cream from legendary Kopp's to artisanal Purple Door. The frozen custard capital of the world." />
        <meta name="keywords" content="best ice cream Milwaukee, frozen custard Milwaukee, Kopp's Milwaukee, Leon's custard, Milwaukee custard, Purple Door ice cream" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-ice-cream-milwaukee" />
        <meta property="og:title" content="Best Ice Cream & Frozen Custard in Milwaukee [2026]" />
        <meta property="og:description" content="From legendary Kopp's to artisanal Purple Door, discover Milwaukee's best frozen treats." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-ice-cream-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-ice-cream-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>Best Ice Cream & Frozen Custard in Milwaukee: The Frozen Custard Capital</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee is the unofficial frozen custard capital of the world, with more custard stands than any other city. The tradition runs deep—some shops have been serving the same creamy recipe for nearly 90 years.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              Beyond custard, the city also offers artisanal ice cream shops pushing creative boundaries. This guide covers both traditions—from neon-lit custard stands to small-batch creameries. All locations verified open in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All locations verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Classic Frozen Custard</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Milwaukee's signature frozen treat</p>
            {iceCreamSpots.frozenCustard.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Artisanal Ice Cream</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Small-batch and craft options</p>
            {iceCreamSpots.artisanal.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Family Favorites</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Reliable options for all ages</p>
            {iceCreamSpots.classic.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Specialty Spots</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Unique experiences</p>
            {iceCreamSpots.specialty.map(renderSpot)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Milwaukee Custard Facts</h2>
            <ul style={{ color: "#555", lineHeight: "2", paddingLeft: "20px" }}>
              {custardFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
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
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Guides</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Explore more of what Milwaukee has to offer</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/best-burgers-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Burgers</Link>
              <Link href="/things-to-do-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Things to Do</Link>
              <Link href="/family-weekend-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Family Fun</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's frozen treats since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
