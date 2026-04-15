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

const brunchSpots = {
  topPicks: [
    {
      name: "Blue's Egg",
      neighborhood: "West Side",
      priceRange: "$$",
      address: "317 N 76th St, Milwaukee, WI 53213",
      waitTime: "30-60 min weekends",
      hours: "Mon-Fri 7am-2pm, Sat-Sun 7am-3pm",
      description: "The undisputed king of Milwaukee brunch. Blue's Egg has earned its legendary status with creative takes on breakfast classics and portions that mean business. The menu changes seasonally, but the quality never wavers. Yes, there's usually a wait on weekends—and yes, it's worth it.",
      mustTry: "Seasonal Benedicts, Blue's Scramble, Any pancake special, Bloody Mary",
      vibe: "Buzzing, energetic, locals-know-it, family-friendly",
      proTip: "Go on a weekday to skip the line. Or put your name in and grab coffee at Stone Creek next door.",
    },
    {
      name: "Story Hill BKC",
      neighborhood: "Story Hill",
      priceRange: "$$$",
      address: "5100 W Bluemound Rd, Milwaukee, WI 53208",
      waitTime: "15-30 min weekends",
      hours: "Sat-Sun 9am-2pm (brunch only)",
      description: "Elevated brunch with high-quality ingredients and a refined menu. Story Hill BKC brings the same attention to detail from their dinner service to the weekend brunch table. Think locally-sourced eggs, house-made pastries, and cocktails that aren't an afterthought.",
      mustTry: "Steak & Eggs, Brioche French Toast, Breakfast Burger, Mimosa Flight",
      vibe: "Upscale casual, date-worthy, refined but relaxed",
      proTip: "Reservations accepted for brunch—use them.",
    },
    {
      name: "Café Benelux",
      neighborhood: "Third Ward",
      priceRange: "$$",
      address: "346 N Broadway, Milwaukee, WI 53202",
      waitTime: "20-45 min weekends",
      hours: "Sat-Sun 9am-3pm",
      description: "A Third Ward staple offering a lively brunch scene and prime people-watching. The rooftop is the move in warmer months. Belgian-inspired menu with plenty of American brunch classics alongside European touches.",
      mustTry: "Belgian Waffles, Croque Madame, Shakshuka, Rooftop Bloody Mary",
      vibe: "Trendy, social scene, great for groups, patio vibes",
      proTip: "The rooftop opens early in spring—get there before the rush.",
    },
  ],
  hiddenGems: [
    {
      name: "Engine Company No. 3",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "217 W National Ave, Milwaukee, WI 53204",
      description: "Housed in a converted firehouse, this neighborhood gem serves consistently excellent brunch in a unique setting. Less crowded than the usual suspects but just as good.",
      mustTry: "Fried Chicken & Waffles, Huevos Rancheros, Hash Browns",
      vibe: "Quirky, neighborhood feel, conversation-friendly",
    },
    {
      name: "Honeypie Café",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2643 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Bay View's comfort food destination. Honeypie delivers homestyle breakfast and brunch with serious pie credentials. Everything feels homemade because it is.",
      mustTry: "Any pie slice, Biscuits & Gravy, Breakfast specials",
      vibe: "Cozy, homestyle, neighborhood hangout",
    },
    {
      name: "Palomino",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2491 S Superior St, Milwaukee, WI 53207",
      description: "A bar that happens to serve excellent brunch. Palomino's weekend offerings are casual, affordable, and surprisingly good. Great bloody marys and a laid-back vibe.",
      mustTry: "Build-Your-Own Bloody Mary, Breakfast Burrito, Eggs Benedict",
      vibe: "Casual, dive-y in the best way, no pretense",
    },
    {
      name: "Glorioso's Italian Market",
      neighborhood: "East Side",
      priceRange: "$",
      address: "1020 E Brady St, Milwaukee, WI 53202",
      description: "Not a restaurant but a must-mention: Glorioso's deli counter serves incredible Italian breakfast sandwiches and espresso. Grab and go or eat at the small counter.",
      mustTry: "Italian Breakfast Sandwich, Espresso, Fresh pastries",
      vibe: "Quick, authentic, no-frills delicious",
    },
  ],
  byCategory: {
    dateNight: ["Story Hill BKC", "Café Benelux", "Engine Company No. 3"],
    groups: ["Blue's Egg", "Café Benelux", "Palomino"],
    noWait: ["Story Hill BKC (with reservation)", "Engine Company No. 3", "Glorioso's"],
    bestBloody: ["Sobelmans", "Blue's Egg", "Café Benelux", "Palomino"],
  },
};

const faqs = [
  {
    question: "What is the best brunch spot in Milwaukee?",
    answer: "Blue's Egg is consistently rated Milwaukee's best brunch spot, known for creative dishes and generous portions. Story Hill BKC offers a more upscale experience, while Café Benelux is perfect for those wanting a trendy Third Ward atmosphere with rooftop dining."
  },
  {
    question: "Where can I get brunch in Milwaukee without waiting?",
    answer: "To avoid brunch waits, try Story Hill BKC (accepts reservations), Engine Company No. 3 (less crowded), or go to popular spots on weekdays. Blue's Egg and Café Benelux typically have 30-60 minute waits on weekend mornings."
  },
  {
    question: "What time does brunch start in Milwaukee?",
    answer: "Most Milwaukee brunch spots open between 7am-9am on weekends. Blue's Egg opens at 7am, Story Hill BKC starts brunch at 9am. Many spots serve brunch until 2pm-3pm, with some offering all-day breakfast."
  },
  {
    question: "Where is the best Bloody Mary brunch in Milwaukee?",
    answer: "Milwaukee takes its Bloody Marys seriously. Top spots include Sobelmans (famous for over-the-top garnishes), Blue's Egg (quality classics), and Palomino (build-your-own bar). Café Benelux's rooftop bloodys are also popular in summer."
  },
  {
    question: "What Milwaukee neighborhoods are best for brunch?",
    answer: "Bay View offers multiple great options (Honeypie, Palomino, Odd Duck), Third Ward has the scene (Café Benelux, Café Hollander), and the East Side has quick options (Glorioso's, Beans & Barley). Blue's Egg on the West Side is worth the drive."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Brunch in Milwaukee 2026: Top Spots, Hidden Gems & Where to Avoid Waits",
    "description": "Complete guide to Milwaukee brunch spots. Blue's Egg, Story Hill BKC, Café Benelux, plus hidden gems and tips for beating the weekend crowds.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/best-brunch-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Brunch in Milwaukee", "item": "https://discover-milwaukee.com/best-brunch-milwaukee" }
    ]
  }
};

export default function BestBrunchMilwaukee() {
  const BrunchCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.neighborhood}</span>
        </div>
      </div>
      {spot.hours && <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "4px" }}>{spot.hours}</p>}
      {spot.waitTime && <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", marginBottom: "12px" }}>Typical wait: {spot.waitTime}</p>}
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.vibe}</p>
        </div>
      </div>
      {spot.proTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Pro tip:</strong> {spot.proTip}</p>
        </div>
      )}
      {spot.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Brunch in Milwaukee 2026 | Top Spots & Hidden Gems</title>
        <meta name="description" content="Find Milwaukee's best brunch spots for 2026. Blue's Egg, Story Hill BKC, Café Benelux and hidden gems. Plus tips on avoiding waits and the best Bloody Marys." />
        <meta name="keywords" content="best brunch Milwaukee, Milwaukee brunch spots, breakfast Milwaukee, Sunday brunch MKE, Blue's Egg, where to eat brunch Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/best-brunch-milwaukee" />

        <meta property="og:title" content="Best Brunch in Milwaukee 2026 | Complete Guide" />
        <meta property="og:description" content="Milwaukee's ultimate brunch guide. Top spots, hidden gems, and how to beat the weekend crowds." />
        <meta property="og:url" content="https://discover-milwaukee.com/best-brunch-milwaukee" />
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

        <header style={{ background: `linear-gradient(135deg, ${c.yellow} 0%, ${c.orange} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED APRIL 2026</p>
            <h1 style={{ color: c.green1, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Brunch in Milwaukee
            </h1>
            <p style={{ color: c.green1, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto", opacity: 0.85 }}>
              Brunch in Milwaukee isn't just a meal—it's a weekend ritual. From stacked pancakes to Bloody Mary bars, here's where to do it right.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>IN THIS GUIDE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#top-picks" style={{ color: c.green2, fontSize: "14px" }}>Top Brunch Spots</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#hidden-gems" style={{ color: c.green2, fontSize: "14px" }}>Hidden Gems</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#by-category" style={{ color: c.green2, fontSize: "14px" }}>By Category</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="top-picks" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Top Brunch Spots in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These are the heavy hitters—the spots that have earned their reputation. Expect crowds on weekends, but the food justifies the hype.
            </p>
            {brunchSpots.topPicks.map((spot, i) => <BrunchCard key={i} spot={spot} />)}
          </section>

          <section id="hidden-gems" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Hidden Gem Brunch Spots</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Skip the long lines and explore these under-the-radar favorites. Locals know, but the secret's getting out.
            </p>
            {brunchSpots.hiddenGems.map((spot, i) => <BrunchCard key={i} spot={spot} />)}
          </section>

          <section id="by-category" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Best Brunch by Category</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Best Date Brunch</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  {brunchSpots.byCategory.dateNight.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Best for Groups</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  {brunchSpots.byCategory.groups.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Skip the Wait</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  {brunchSpots.byCategory.noWait.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Best Bloody Mary</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  {brunchSpots.byCategory.bestBloody.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/new-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                New Restaurants →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get the Best of MKE Weekly</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New spots, events, and insider tips every Wednesday.</p>
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
