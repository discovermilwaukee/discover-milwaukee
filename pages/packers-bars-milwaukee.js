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

const packersBars = {
  legendary: [
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      vibe: "Ultimate Packers Experience",
      priceRange: "$$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      description: "Synonymous with Packers game day in Milwaukee. The incredible outdoor space transforms into a massive viewing party with food trucks and a huge screen. Inside, TVs cover every surface and the crowd brings championship energy to every game.",
      highlights: "Massive outdoor watch parties, food trucks, energetic crowd, multiple TVs",
      gameDay: "Arrive early for outdoor seating. The energy builds as kickoff approaches.",
      insiderTip: "The outdoor setup in fall is legendary. Bring layers—you won't want to leave.",
      bestFor: "True game day experience, outdoor viewing, big crowds",
    },
    {
      name: "Major Goolsby's",
      neighborhood: "Downtown",
      vibe: "Classic Sports Bar",
      priceRange: "$-$$",
      address: "340 W Kilbourn Ave, Milwaukee, WI 53203",
      description: "A downtown institution since 1972, Major Goolsby's has been the place to watch Green Bay for over 50 years. The no-frills sports bar atmosphere and proximity to Fiserv Forum make this a Milwaukee classic.",
      highlights: "50+ years of sports history, classic atmosphere, downtown location",
      gameDay: "The crowd skews older and knows their football. Great for actually watching the game.",
      insiderTip: "The history here is real. Look for memorabilia from decades of Milwaukee sports.",
      bestFor: "Traditional sports bar, serious fans, downtown convenience",
    },
  ],
  modern: [
    {
      name: "Tom's Watch Bar",
      neighborhood: "Deer District",
      vibe: "Modern Sports Bar",
      priceRange: "$$-$$$",
      address: "1134 N Vel R Phillips Ave, Milwaukee, WI 53203",
      description: "Steps from Fiserv Forum, Tom's Watch Bar brings the modern sports bar experience with massive 360° screens and an electric atmosphere. The technology and energy make every game feel like you're at the stadium.",
      highlights: "360° screens, Deer District location, impressive screen technology",
      gameDay: "The screens are overwhelming in the best way. Great for big games and playoffs.",
      insiderTip: "Combine with Deer District energy before/after Bucks games.",
      bestFor: "Modern experience, great screens, Deer District pre-gaming",
    },
  ],
  neighborhood: [
    {
      name: "Milwaukee Brat House",
      neighborhood: "Third Ward",
      vibe: "Wisconsin Comfort",
      priceRange: "$$",
      address: "1013 N Old World 3rd St, Milwaukee, WI 53203",
      description: "Brats, beer, and Packers football—the Wisconsin trinity. Milwaukee Brat House delivers authentic Wisconsin game day vibes with plenty of TVs, quality food, and beer served in pairs as tradition demands.",
      highlights: "Wisconsin fare, beer pairs, plenty of TVs, Third Ward location",
      gameDay: "Perfect Wisconsin game day: brat, beer pair, Packers. As it should be.",
      insiderTip: "The beer pairs are tradition. Don't fight it.",
      bestFor: "Wisconsin experience, good food, Third Ward",
    },
    {
      name: "SportClub",
      neighborhood: "Bay View",
      vibe: "Neighborhood Sports Bar",
      priceRange: "$",
      address: "2314 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Bay View's neighborhood sports bar runs Packers Sunday specials including $3 Miller Lite drafts, $3 Coors Light drafts, five-for-$15 buckets, and $8 one-topping pizzas. The value and vibe make this a local favorite.",
      highlights: "Game day specials, cheap drafts, neighborhood vibe, Bay View location",
      gameDay: "The Sunday specials make this one of the best values for watching the game.",
      insiderTip: "The $8 pizza pairs perfectly with those $3 drafts.",
      bestFor: "Value, Bay View locals, budget-friendly game day",
    },
    {
      name: "Brewski's Sports Club",
      neighborhood: "Various Locations",
      vibe: "Multi-Location Sports Bar",
      priceRange: "$-$$",
      address: "Multiple Milwaukee-area locations",
      description: "A reliable chain of sports bars across the Milwaukee area, Brewski's offers consistent quality, plenty of screens, and a crowd that shows up ready for Packers football.",
      highlights: "Multiple locations, consistent quality, family-friendly",
      gameDay: "Check your nearest location. The suburban spots can be easier for parking.",
      insiderTip: "Good option if downtown spots are packed—find your local Brewski's.",
      bestFor: "Convenience, family groups, suburban options",
    },
  ],
  unique: [
    {
      name: "Capt'n Nick's",
      neighborhood: "Riverwest",
      vibe: "Dive Bar Sports",
      priceRange: "$",
      address: "2734 N Weil St, Milwaukee, WI 53212",
      description: "A Riverwest dive bar that takes Packers football seriously. The no-frills environment attracts a devoted crowd of fans who come for football, cheap drinks, and genuine community.",
      highlights: "Dive bar vibes, cheap drinks, devoted regulars, Riverwest character",
      gameDay: "The regulars are passionate. A great spot for watching with real fans.",
      insiderTip: "Embrace the dive bar. It's part of the experience.",
      bestFor: "Dive bar fans, Riverwest locals, authentic atmosphere",
    },
    {
      name: "Points East Pub",
      neighborhood: "Bay View",
      vibe: "Classic Tavern",
      priceRange: "$",
      address: "2501 S Delaware Ave, Milwaukee, WI 53207",
      description: "A Bay View classic that's been serving the neighborhood for years. The tavern atmosphere and loyal regulars make this a comfortable spot to watch the Packers without fighting downtown crowds.",
      highlights: "Classic tavern, neighborhood regulars, Bay View location",
      gameDay: "Less chaotic than downtown spots. Good for actually watching the game.",
      insiderTip: "Walking distance from other Bay View spots—make a day of it.",
      bestFor: "Neighborhood feel, Bay View, less crowded",
    },
  ],
};

const gameInfo = {
  essentials: [
    "Wear green and gold. Even if you're from out of town, the Packers are everyone's team in Wisconsin.",
    "Arrive early for popular spots, especially for playoff games or divisional rivalries (Bears, Vikings, Lions).",
    "Bar time in Wisconsin is 2:30 AM for those late games that go to overtime.",
    "Brandy Old Fashioned (sweet or sour) is the Wisconsin game day drink if you want to go local.",
  ],
  rivals: [
    "Bears games: Extra energy, louder crowds, more trash talk. Chicago is just 90 minutes south.",
    "Vikings games: The rivalry is real. Purple is not welcome.",
    "Lions games: Division rival with increasingly competitive matchups.",
  ],
};

const faqs = [
  {
    question: "What's the best Packers bar in Milwaukee?",
    answer: "Steny's Tavern in Walker's Point is considered the ultimate Packers watching experience with its massive outdoor setup. For downtown, Tom's Watch Bar offers impressive 360° screens. Major Goolsby's has 50+ years of sports bar history.",
  },
  {
    question: "Do I need to wear Packers gear?",
    answer: "It's not required, but strongly encouraged. Green and gold dominates every bar on game day. Even if you're not a Packers fan, it's hard not to get swept up in the enthusiasm.",
  },
  {
    question: "Where should I watch Packers games with kids?",
    answer: "Milwaukee Brat House and Brewski's locations are family-friendly options. Tom's Watch Bar's size makes it easier to manage with families. For outdoor spaces, Steny's works until it gets too rowdy later in the day.",
  },
  {
    question: "What's the deal with the brandy Old Fashioned?",
    answer: "Wisconsin's signature cocktail uses brandy (not bourbon), muddled cherry and orange, and is served 'sweet' (7-Up), 'sour' (Squirt or sour mix), or 'press' (half and half). Order one to fit in.",
  },
  {
    question: "Should I arrive early for Packers games?",
    answer: "Yes, especially for primetime games, playoffs, or rivalry matchups. Popular spots fill up. Arriving an hour before kickoff is safe for most regular season games.",
  },
];

export default function PackersBarsMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Packers Bars in Milwaukee: Where to Watch Green Bay [2026]",
    description: "Find the best bars to watch Packers games in Milwaukee. From Steny's outdoor parties to modern sports bars with massive screens.",
    image: "https://www.discover-milwaukee.com/images/packers-bars-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/packers-bars-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Packers Bars Milwaukee", item: "https://www.discover-milwaukee.com/packers-bars-milwaukee" },
    ],
  };

  const renderBar = (bar) => (
    <div key={bar.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{bar.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{bar.neighborhood}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{bar.priceRange}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{bar.vibe}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{bar.description}</p>
      <div style={{ fontSize: "0.9rem", marginBottom: "12px" }}>
        <strong style={{ color: c.green1 }}>Highlights:</strong> <span style={{ color: "#555" }}>{bar.highlights}</span>
      </div>
      <div style={{ padding: "12px", backgroundColor: "#e8f5e9", borderRadius: "8px", borderLeft: "3px solid #2e7d32", marginBottom: "12px" }}>
        <strong style={{ color: "#2e7d32" }}>Game Day:</strong> <span style={{ color: "#555" }}>{bar.gameDay}</span>
      </div>
      <div style={{ padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{bar.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{bar.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Packers Bars in Milwaukee: Where to Watch Green Bay [2026]</title>
        <meta name="description" content="Find the best bars to watch Packers games in Milwaukee. From Steny's legendary outdoor parties to modern sports bars with 38-foot screens." />
        <meta name="keywords" content="Packers bars Milwaukee, watch Packers Milwaukee, Green Bay Packers Milwaukee, sports bars Milwaukee, Steny's Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/packers-bars-milwaukee" />
        <meta property="og:title" content="Best Packers Bars in Milwaukee [2026 Guide]" />
        <meta property="og:description" content="Where to watch Green Bay Packers football in Milwaukee. Game day guide." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/packers-bars-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/packers-bars-milwaukee.jpg" />
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
            <span style={{ color: c.green1 }}>Packers Bars</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>Best Packers Bars in Milwaukee: Where to Watch Green Bay</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Wisconsin takes Packers football seriously, and Milwaukee delivers on game day. From legendary outdoor watch parties at Steny's to massive screens in the Deer District, the city transforms every Sunday (and Monday, and Thursday) into a sea of green and gold.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              Whether you're a lifelong shareholder or visiting from out of town, this guide covers the best spots to watch the Pack in Milwaukee. Go Pack Go.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All bars verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: "2px solid #2e7d32" }}>Legendary Spots</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>The essential Milwaukee Packers experience</p>
            {packersBars.legendary.map(renderBar)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: "2px solid #2e7d32" }}>Modern Sports Bars</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Big screens and Deer District energy</p>
            {packersBars.modern.map(renderBar)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: "2px solid #2e7d32" }}>Neighborhood Favorites</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Local spots with game day specials</p>
            {packersBars.neighborhood.map(renderBar)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: "2px solid #2e7d32" }}>Unique Atmosphere</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Character spots for true fans</p>
            {packersBars.unique.map(renderBar)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Game Day Essentials</h2>
            <ul style={{ color: "#555", lineHeight: "2", paddingLeft: "20px" }}>
              {gameInfo.essentials.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <h3 style={{ color: c.green1, marginTop: "24px", marginBottom: "12px" }}>Rivalry Games</h3>
            <ul style={{ color: "#555", lineHeight: "2", paddingLeft: "20px" }}>
              {gameInfo.rivals.map((rival, index) => (
                <li key={index}>{rival}</li>
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

          <section style={{ backgroundColor: "#2e7d32", borderRadius: "12px", padding: "32px", textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Nightlife</h2>
            <p style={{ color: "#e8f5e9", marginBottom: "20px" }}>Explore more of Milwaukee's bar scene</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/best-dive-bars-milwaukee" style={{ backgroundColor: "#ffd54f", color: "#2e7d32", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "600" }}>Dive Bars</Link>
              <Link href="/rooftop-bars-milwaukee" style={{ backgroundColor: "#ffd54f", color: "#2e7d32", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "600" }}>Rooftop Bars</Link>
              <Link href="/milwaukee-breweries" style={{ backgroundColor: "#ffd54f", color: "#2e7d32", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "600" }}>Breweries</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Cheering for the Pack in Milwaukee since 2024. Go Pack Go.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
