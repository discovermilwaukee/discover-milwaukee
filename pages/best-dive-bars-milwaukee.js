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

const diveBarSpots = {
  legendary: [
    {
      name: "Wolski's Tavern",
      neighborhood: "Lower East Side",
      vibe: "Historic Milwaukee Institution",
      priceRange: "$",
      address: "1836 N Pulaski St, Milwaukee, WI 53202",
      description: "Open since 1908, Wolski's is the definitive Milwaukee dive bar. The historic Brunswick back bar, free popcorn, dart boards, and pool table create the perfect old-school atmosphere. The famous 'I Closed Wolski's' bumper sticker has been a Milwaukee badge of honor for over 50 years.",
      mustTry: "PBR, classic cocktails, free popcorn",
      insiderTip: "Stay until close to earn your bumper sticker. The retro beer selection is surprisingly deep.",
      bestFor: "Late nights, Milwaukee history, pool and darts",
      hours: "Open late, often until bar time",
    },
    {
      name: "Jamo's Bar",
      neighborhood: "East Side",
      vibe: "Cash-Only Time Capsule",
      priceRange: "$",
      address: "1801 E North Ave, Milwaukee, WI 53202",
      description: "Walking into Jamo's feels like time-traveling to the 1950s. This cash-only joint has been a tavern since 1890, and owner Jamison Goll has built a 20+ year tradition of nightly 'Jeopardy!' watching that draws loyal crowds.",
      mustTry: "Cheap domestics, specialty shots",
      insiderTip: "Come for Jeopardy! weeknights—the crowd really gets into it. Bring cash!",
      bestFor: "Trivia lovers, old-school atmosphere, cheap drinks",
      hours: "Daily, cash only",
    },
  ],
  classic: [
    {
      name: "The Uptowner",
      neighborhood: "Riverwest",
      vibe: "Quirky Neighborhood Gem",
      priceRange: "$",
      address: "1032 E Center St, Milwaukee, WI 53212",
      description: "The Uptowner is Riverwest incarnate—unpretentious, eclectic, and full of character. The vending machine that dispenses cigarettes, lighters, and Zyn alongside Skittles and Doritos tells you everything you need to know. Cash only.",
      mustTry: "Whatever's cheap on tap",
      insiderTip: "The vending machine is an experience. Great jukebox selection.",
      bestFor: "Riverwest locals, cheap drinks, unique atmosphere",
      hours: "Cash only",
    },
    {
      name: "Hosed on Brady",
      neighborhood: "Brady Street",
      vibe: "Firefighter-Themed Dive",
      priceRange: "$",
      address: "780 N Jefferson St, Milwaukee, WI 53202",
      description: "Located next to an old firehouse, this cash-only dive offers the legendary 3 Alarm Special: your choice of Hamm's, Old Milwaukee, or Blatz, plus a shot of Jack Daniel's and a pull tab—all for $5.",
      mustTry: "3 Alarm Special",
      insiderTip: "The pull tab from the special could pay for your next round. Cash only!",
      bestFor: "Pre-gaming Brady Street, cheap specials, pull tabs",
      hours: "Cash only",
    },
    {
      name: "Y-Not II Tavern",
      neighborhood: "East Side",
      vibe: "Neighborhood Classic",
      priceRange: "$",
      address: "2229 N Humboldt Blvd, Milwaukee, WI 53212",
      description: "A true neighborhood bar where everyone eventually becomes a regular. Y-Not II maintains that perfect dive bar balance of friendly staff, cheap drinks, and zero pretense.",
      mustTry: "House specials, domestic beers",
      insiderTip: "The bartenders remember faces. Come a few times and you're family.",
      bestFor: "Becoming a regular, neighborhood feel, cheap drinks",
      hours: "Daily",
    },
  ],
  cocktailDives: [
    {
      name: "Stella's A Cocktail Dive",
      neighborhood: "Walker's Point",
      vibe: "Upscale Dive",
      priceRange: "$$",
      address: "1100 S 1st St, Milwaukee, WI 53204",
      description: "Stella's proves dive bars can have great cocktails. The intentionally grungy aesthetic contrasts with thoughtfully crafted drinks, creating something unique in Milwaukee's bar scene.",
      mustTry: "Classic cocktails with a twist, craft beers",
      insiderTip: "Don't let the dive appearance fool you—the bartenders know their stuff.",
      bestFor: "Cocktail lovers who hate pretension, Walker's Point nights",
      hours: "Evening hours",
    },
    {
      name: "Sabbatic",
      neighborhood: "Walker's Point",
      vibe: "Heavy Metal Dive",
      priceRange: "$-$$",
      address: "700 S 2nd St, Milwaukee, WI 53204",
      description: "Heavy metal soundtrack, dark atmosphere, and surprisingly good drinks. Sabbatic combines dive bar energy with a specific aesthetic that metal fans and bar enthusiasts alike appreciate.",
      mustTry: "Whiskey selection, import beers",
      insiderTip: "Check their calendar for DJ nights. The metal community is welcoming.",
      bestFor: "Metal fans, dark atmosphere, whiskey lovers",
      hours: "Evening into late night",
    },
  ],
  hiddenGems: [
    {
      name: "Just Art's Saloon",
      neighborhood: "Bay View",
      vibe: "Hidden Neighborhood Spot",
      priceRange: "$",
      address: "2560 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Just Art's perfectly captures dive bar charm—quirky art on the walls, bartenders who greet you like family, and a local crowd that's genuinely friendly to newcomers.",
      mustTry: "Cold domestics, house shots",
      insiderTip: "Great spot before or after dinner in Bay View. Very chill crowd.",
      bestFor: "Bay View locals, low-key nights, friendly atmosphere",
      hours: "Daily",
    },
    {
      name: "Franky's Newport Lounge",
      neighborhood: "Lower East Side",
      vibe: "Retro Dive",
      priceRange: "$",
      address: "1601 N Jackson St, Milwaukee, WI 53202",
      description: "A Lower East Side fixture with a retro feel and prices that make you wonder what decade you're in. Franky's keeps it simple and keeps regulars coming back.",
      mustTry: "Cheap beer, simple cocktails",
      insiderTip: "Perfect pre-gaming spot for the Lower East Side bar crawl.",
      bestFor: "Pre-gaming, cheap drinks, no frills",
      hours: "Daily",
    },
    {
      name: "Koz's Mini Bowl",
      neighborhood: "Walker's Point",
      vibe: "Bowling Alley Dive",
      priceRange: "$",
      address: "2078 S 7th St, Milwaukee, WI 53204",
      description: "A tiny bowling alley attached to a dive bar—only in Milwaukee. Four mini lanes, cheap beer, and an atmosphere you won't find anywhere else. This place is a Milwaukee treasure.",
      mustTry: "Beer and bowling",
      insiderTip: "Bowl first, drink second—the lanes get busy. Cash only for bowling.",
      bestFor: "Unique experiences, group outings, cheap fun",
      hours: "Check for lane availability",
    },
    {
      name: "Trailer Park Tavern",
      neighborhood: "South Side",
      vibe: "Themed Dive",
      priceRange: "$",
      address: "3601 S Howell Ave, Milwaukee, WI 53207",
      description: "Fully committed to the trailer park aesthetic with decor to match. Don't let the theme fool you—this is a genuinely welcoming neighborhood spot with cheap drinks and a fun atmosphere.",
      mustTry: "PBR, house specials",
      insiderTip: "Great for people-watching and meeting locals. The theme is all in good fun.",
      bestFor: "Themed bars, cheap drinks, fun atmosphere",
      hours: "Daily",
    },
  ],
};

const faqs = [
  {
    question: "What makes a Milwaukee dive bar special?",
    answer: "Milwaukee dive bars often have deep history—many buildings have been taverns for over a century. They feature cheap drinks, cash-only policies, jukeboxes, pool tables, and bartenders who treat regulars like family. The lack of pretension is the whole point.",
  },
  {
    question: "Are Milwaukee dive bars safe?",
    answer: "Milwaukee's dive bars are generally safe and welcoming. They're neighborhood establishments where regulars look out for each other. As with any bar, use common sense and be respectful of the local crowd.",
  },
  {
    question: "Do I need cash for Milwaukee dive bars?",
    answer: "Many Milwaukee dives are cash-only, including Jamo's, The Uptowner, and Hosed on Brady. It's always smart to bring cash when diving into the dive bar scene.",
  },
  {
    question: "What's the best dive bar for first-timers?",
    answer: "Wolski's Tavern is the essential Milwaukee dive bar experience—historic, friendly, and famous enough that you won't feel out of place. Just stay until close to earn your bumper sticker.",
  },
  {
    question: "What should I wear to a dive bar?",
    answer: "Whatever you want—that's the beauty of dive bars. Casual is the dress code. Overdressing might get you some looks, but Milwaukee folks are friendly regardless.",
  },
];

export default function BestDiveBarsMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "12 Best Dive Bars in Milwaukee: A Local's Guide to Authentic Watering Holes [2026]",
    description: "Discover Milwaukee's best dive bars, from legendary institutions like Wolski's Tavern to hidden neighborhood gems. Cash-only spots, cheap drinks, and real Milwaukee character.",
    image: "https://www.discover-milwaukee.com/images/best-dive-bars-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-dive-bars-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Best Dive Bars Milwaukee", item: "https://www.discover-milwaukee.com/best-dive-bars-milwaukee" },
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
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{spot.vibe}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Must Try:</strong> <span style={{ color: "#555" }}>{spot.mustTry}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{spot.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{spot.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{spot.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>12 Best Dive Bars in Milwaukee: Authentic Local Watering Holes [2026 Guide]</title>
        <meta name="description" content="Discover Milwaukee's best dive bars, from legendary Wolski's Tavern to hidden neighborhood gems. Cash-only spots, cheap drinks, and real Milwaukee character." />
        <meta name="keywords" content="Milwaukee dive bars, best dive bars Milwaukee, Wolski's Tavern, Milwaukee bars, cheap bars Milwaukee, cash only bars Milwaukee, Milwaukee nightlife" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-dive-bars-milwaukee" />
        <meta property="og:title" content="12 Best Dive Bars in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From legendary Wolski's to hidden gems, discover Milwaukee's best dive bars with cheap drinks and authentic character." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-dive-bars-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-dive-bars-milwaukee.jpg" />
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
            <span style={{ color: c.green1 }}>Best Dive Bars</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>12 Best Dive Bars in Milwaukee: A Local's Guide to Authentic Watering Holes</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee has more bars per capita than almost any city in America, and the dive bars are where you find the real soul of the city. These aren't trendy cocktail lounges or brewpubs—they're cash-only, cheap-drinks, jukebox-playing institutions where bartenders know your name and the decor hasn't changed since your grandparents were regulars.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              From Wolski's famous bumper stickers to the mini bowling lanes at Koz's, these 12 bars represent the best of Milwaukee's dive bar culture. Pack some cash, leave your pretensions at the door, and experience drinking the way Milwaukee has done it for generations.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All bars verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Legendary Milwaukee Institutions</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>These bars define Milwaukee dive culture—historic, beloved, and essential</p>
            {diveBarSpots.legendary.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Classic Cash-Only Dives</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Bring bills, leave credit cards at home—these spots keep it old school</p>
            {diveBarSpots.classic.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Cocktail Dives</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Dive bar vibes with unexpectedly good drinks</p>
            {diveBarSpots.cocktailDives.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Hidden Gems</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Neighborhood spots worth seeking out</p>
            {diveBarSpots.hiddenGems.map(renderSpot)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>The Dive Bar Experience: What to Know</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Bring Cash</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Many Milwaukee dives are cash-only. Hit the ATM before you start your crawl. Some have ATMs inside but fees can add up.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Respect the Regulars</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>These are neighborhood bars with loyal customers. Be friendly, don't take over the jukebox, and tip your bartender well.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Bar Time is 2:30 AM</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Wisconsin bars can stay open until 2:30 AM on weekends. That's when you earn your "I Closed Wolski's" sticker.</p>
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
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>Explore More Milwaukee Nightlife</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Discover more ways to experience Milwaukee after dark</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/rooftop-bars-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Rooftop Bars</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Happy Hours</Link>
              <Link href="/milwaukee-nightlife" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Nightlife Guide</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best dive bars since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
