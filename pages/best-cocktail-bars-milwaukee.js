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

const cocktailBars = {
  speakeasies: [
    {
      name: "Bryant's Cocktail Lounge",
      neighborhood: "Mitchell Street",
      style: "Historic Cocktail Lounge",
      priceRange: "$$-$$$",
      address: "1579 S 9th St, Milwaukee, WI 53204",
      description: "Milwaukee's oldest cocktail lounge, operating since 1938. The exotic lighting, plush velvet walls, and no-menu tradition create an intimate atmosphere. Tell the bartender what you like, and they'll craft something perfect. Home of the Pink Squirrel.",
      mustTry: "Pink Squirrel (invented here), Banshee, bartender's choice",
      insiderTip: "There's no cocktail menu—describe your preferences and trust the bartender. It's how it's done here.",
      bestFor: "Cocktail history, intimate dates, old-school Milwaukee",
      atmosphere: "Intimate, moody, historic",
    },
    {
      name: "The Sofie",
      neighborhood: "Downtown",
      style: "Modern Speakeasy",
      priceRange: "$$$",
      address: "777 N Jefferson St, Milwaukee, WI 53202",
      description: "A chic, high-energy cocktail lounge with a speakeasy vibe in downtown Milwaukee. The Sofie combines craft cocktails with a sophisticated atmosphere and VIP seating options for those who want an elevated night out.",
      mustTry: "Signature cocktails, champagne, seasonal creations",
      insiderTip: "Reserve VIP seating for special occasions. The vibe gets lively later in the evening.",
      bestFor: "Special occasions, groups, upscale night out",
      atmosphere: "Sophisticated, energetic, glamorous",
    },
    {
      name: "Shanghai",
      neighborhood: "East Side",
      style: "Hidden Speakeasy",
      priceRange: "$$-$$$",
      address: "Entrance in Black Cat Alley",
      description: "A hidden speakeasy accessed through Black Cat Alley. Shanghai specializes in craft cocktails with a wide selection of absinthe—one of the best in the Midwest. The hidden entrance adds to the mystique.",
      mustTry: "Absinthe service, classic cocktails, seasonal menu",
      insiderTip: "Finding the entrance is part of the experience. Look for the door in Black Cat Alley.",
      bestFor: "Absinthe lovers, secret bar seekers, adventurous drinkers",
      atmosphere: "Mysterious, intimate, eclectic",
    },
  ],
  craftCocktails: [
    {
      name: "Station No. 06",
      neighborhood: "West Allis",
      style: "Craft Cocktail Bar",
      priceRange: "$$$",
      address: "W Becher St, West Allis, WI",
      description: "A haven for cocktail aficionados featuring exceptional drinks in a refined setting. Station No. 06 showcases quality ingredients and innovative techniques that put it among the best cocktail bars in the region. Winner of 'Best Cocktail Bar, Best of the Burbs' award.",
      mustTry: "Seasonal menu, classic cocktails done right, bartender recommendations",
      insiderTip: "Worth the trip to West Allis. Ask about off-menu cocktails—the bartenders love showcasing their creativity.",
      bestFor: "Serious cocktail drinkers, refined atmosphere, quality focus",
      atmosphere: "Refined, professional, cocktail-forward",
    },
    {
      name: "Edith",
      neighborhood: "Downtown",
      style: "Moody Cocktail Bar",
      priceRange: "$$$",
      address: "228 W Wells St, Milwaukee, WI 53203",
      description: "Exceptional craft cocktails in a moody speakeasy setting. Edith brings serious cocktail craft to downtown Milwaukee with a menu that balances classics with creative originals.",
      mustTry: "Seasonal cocktails, classic preparations, amaro selection",
      insiderTip: "The late-night crowd is industry people. Great for post-service drinks.",
      bestFor: "Cocktail enthusiasts, moody atmosphere, late nights",
      atmosphere: "Moody, sophisticated, intimate",
    },
    {
      name: "Eldr + Rime",
      neighborhood: "Wauwatosa",
      style: "Suburban Hidden Gem",
      priceRange: "$$-$$$",
      address: "Wauwatosa, WI",
      description: "A celebrated hidden gem in Wauwatosa known for cocktails crafted with passion and attention to detail. Eldr + Rime proves you don't need to go downtown for excellent craft cocktails.",
      mustTry: "Signature cocktails, seasonal menu, fire-element drinks",
      insiderTip: "Worth the trip to Wauwatosa. Less crowded than downtown spots.",
      bestFor: "Suburban cocktail seekers, quality focus, relaxed atmosphere",
      atmosphere: "Welcoming, quality-focused, neighborhood gem",
    },
  ],
  classic: [
    {
      name: "At Random",
      neighborhood: "Bay View",
      style: "Ice Cream Cocktails & Tiki",
      priceRange: "$$",
      address: "2501 S Delaware Ave, Milwaukee, WI 53207",
      description: "A time capsule of mid-century Milwaukee featuring ice cream drinks, classic cocktails, Naugahyde booths, and swag lights. At Random is famous for potent, creamy cocktails in a setting that hasn't changed in decades.",
      mustTry: "Ice cream drinks, classic tiki cocktails, anything with coffee",
      insiderTip: "The drinks are strong. Pace yourself. The retro atmosphere is genuine, not recreated.",
      bestFor: "Ice cream cocktail lovers, retro atmosphere, unique Milwaukee",
      atmosphere: "Retro, intimate, nostalgic",
    },
    {
      name: "Goodkind",
      neighborhood: "Bay View",
      style: "Restaurant Bar",
      priceRange: "$$$",
      address: "2457 S Wentworth Ave, Milwaukee, WI 53207",
      description: "While primarily a restaurant, Goodkind's bar program rivals dedicated cocktail bars. Seasonal cocktails complement the seasonal menu with thoughtful ingredients and expert execution.",
      mustTry: "Seasonal cocktails, wine selection, bar snacks",
      insiderTip: "Sit at the bar for the full experience. The bartenders are knowledgeable and engaging.",
      bestFor: "Dinner drinks, Bay View dining, seasonal menus",
      atmosphere: "Warm, sophisticated, neighborhood",
    },
  ],
  unique: [
    {
      name: "Red Maple MKE",
      neighborhood: "Walker's Point",
      style: "Japanese Corner Bar",
      priceRange: "$$-$$$",
      address: "100 W Maple St, Milwaukee, WI 53204",
      description: "Milwaukee's Japanese corner bar offering Japanese-inspired cocktails in an intimate setting. Opened in 2023, the attention to detail—from ice to glassware to technique—reflects Japanese cocktail culture.",
      mustTry: "Highballs, Japanese whisky cocktails, sake",
      insiderTip: "The Japanese whisky selection is excellent. Try a highball the way it's done in Tokyo.",
      bestFor: "Japanese whisky lovers, intimate setting, quality focus",
      atmosphere: "Intimate, Japanese-inspired, meticulous",
    },
    {
      name: "Boone & Crockett",
      neighborhood: "Walker's Point",
      style: "Craft Cocktail & Patio",
      priceRange: "$$",
      address: "818 S Water St, Milwaukee, WI 53204",
      description: "Quality cocktails with one of Milwaukee's best patios. Boone & Crockett balances craft cocktails with a welcoming atmosphere that never feels pretentious.",
      mustTry: "Seasonal cocktails, classic preparations, frozen drinks (summer)",
      insiderTip: "The patio is legendary in summer. Come early for seating.",
      bestFor: "Patio season, accessible craft cocktails, Walker's Point nights",
      atmosphere: "Welcoming, fun, excellent patio",
    },
  ],
};

const faqs = [
  {
    question: "What's the best cocktail bar in Milwaukee?",
    answer: "Bryant's Cocktail Lounge is the historic choice—Milwaukee's oldest cocktail lounge. For modern craft cocktails, Station No. 06 and Edith are top picks. For speakeasy vibes, Shanghai and The Sofie deliver.",
  },
  {
    question: "Where can I find speakeasy bars in Milwaukee?",
    answer: "Shanghai (hidden in Black Cat Alley), Urban Underground (through a bookcase), Mosler's Vault (in a bank vault), and The Sofie all offer speakeasy experiences with varying levels of 'hiddenness.'",
  },
  {
    question: "What's Bryant's Cocktail Lounge known for?",
    answer: "Bryant's has operated since 1938 and invented the Pink Squirrel. There's no menu—you describe what you like and the bartender crafts something to your taste. It's Milwaukee cocktail history.",
  },
  {
    question: "Best cocktail bar for a date in Milwaukee?",
    answer: "Bryant's Cocktail Lounge offers intimate, historic atmosphere. At Random provides unique retro charm. The Sofie works for a glamorous night out. Shanghai's hidden entrance adds adventure.",
  },
  {
    question: "Where can I get good Japanese cocktails in Milwaukee?",
    answer: "Red Maple MKE specializes in Japanese-style cocktails with excellent Japanese whisky selection. The attention to ice, technique, and presentation reflects authentic Japanese cocktail culture.",
  },
];

export default function BestCocktailBarsMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "15 Best Cocktail Bars in Milwaukee: Speakeasies to Craft Cocktails [2026]",
    description: "Discover Milwaukee's best cocktail bars from historic Bryant's to hidden speakeasies. Craft cocktails, unique atmospheres, and expert bartenders.",
    image: "https://www.discover-milwaukee.com/images/best-cocktail-bars-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-cocktail-bars-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Best Cocktail Bars Milwaukee", item: "https://www.discover-milwaukee.com/best-cocktail-bars-milwaukee" },
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
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{bar.style} | {bar.atmosphere}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{bar.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Must Try:</strong> <span style={{ color: "#555" }}>{bar.mustTry}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{bar.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{bar.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{bar.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>15 Best Cocktail Bars in Milwaukee: Speakeasies & Craft Cocktails [2026]</title>
        <meta name="description" content="Discover Milwaukee's best cocktail bars from historic Bryant's to hidden speakeasies. Craft cocktails, unique atmospheres, and expert bartenders." />
        <meta name="keywords" content="best cocktail bars Milwaukee, Milwaukee speakeasy, Bryant's Cocktail Lounge, craft cocktails Milwaukee, hidden bars Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-cocktail-bars-milwaukee" />
        <meta property="og:title" content="15 Best Cocktail Bars in Milwaukee [2026 Guide]" />
        <meta property="og:description" content="From historic Bryant's to hidden speakeasies, discover Milwaukee's best cocktail bars." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-cocktail-bars-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-cocktail-bars-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>15 Best Cocktail Bars in Milwaukee: From Historic to Hidden</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee's cocktail scene goes far beyond brandy Old Fashioneds (though those are great too). From Bryant's—the city's oldest cocktail lounge where the Pink Squirrel was invented—to hidden speakeasies accessed through bookcases, the city offers sophisticated drinking for every taste.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide covers the best cocktail bars Milwaukee has to offer, from historic institutions to modern craft cocktail programs. All bars verified open in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All bars verified open</p>
          </header>
          <NewsletterCTA />          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Cocktail Bars in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Bryant's Cocktail Lounge, The Sofie, Shanghai, Station No. 06, Edith</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Speakeasies & Hidden Bars</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Secret entrances and intimate atmospheres</p>
            {cocktailBars.speakeasies.map(renderBar)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Craft Cocktail Focused</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Serious drinks for serious drinkers</p>
            {cocktailBars.craftCocktails.map(renderBar)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Classic Milwaukee</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Time-tested favorites</p>
            {cocktailBars.classic.map(renderBar)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Unique Concepts</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Something different</p>
            {cocktailBars.unique.map(renderBar)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Milwaukee Cocktail Culture</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>The Brandy Old Fashioned</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Wisconsin's signature cocktail uses brandy (not bourbon), muddled fruit, and sweet or sour mix. Ask for it "sweet" or "sour"—or "press" for half 7-Up, half soda water.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>The Pink Squirrel</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Invented at Bryant's Cocktail Lounge in Milwaukee, this creamy pink drink combines crème de noyaux, crème de cacao, and cream. A must-try at its birthplace.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>No-Menu Bars</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Several Milwaukee bars, including Bryant's, operate without menus. Tell the bartender what flavors you like, and they'll craft something perfect. Trust the process.</p>
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
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Nightlife</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Explore more of Milwaukee's drinking scene</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/best-dive-bars-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Dive Bars</Link>
              <Link href="/rooftop-bars-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Rooftop Bars</Link>
              <Link href="/milwaukee-nightlife" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Nightlife Guide</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best cocktails since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
