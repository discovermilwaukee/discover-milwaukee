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

const fishFrySpots = {
  bestOverall: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Brewer's Hill",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "The quintessential Milwaukee fish fry experience. Beer-battered Atlantic cod (2 or 3 piece), baked cod, hand-breaded whole bluegill, and a family-pack option — served alongside excellent craft beer. The Brewhaus Polka Kings play live Fridays 5:30–8:30 p.m., creating an atmosphere that's pure Wisconsin.",
      fishOptions: "Beer-battered cod, baked cod, hand-breaded bluegill, fish tacos, fried-shrimp combo",
      sides: "Seasoned fries, creamy coleslaw, tartar sauce, lemon wedge",
      insiderTip: "Limited reservations 4:00–4:30 p.m. and 6:00–6:30 p.m. — otherwise arrive by 5 p.m. or expect a wait. Multiple-year Shepherd Express Readers' Pick winner.",
      bestFor: "First-timers, tourists, authentic Milwaukee experience",
      allYouCanEat: false,
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      description: "Walker's Point staple since 1985 with 326+ consecutive Friday fish fries on the board. Beer-battered Icelandic cod, pan-fried lake perch, and a famously good house tartar. The Steny's Bloody Mary was voted best in the city three years running.",
      fishOptions: "Beer-battered Icelandic cod, baked cod, beer-battered or pan-fried lake perch, saucy shrimp",
      sides: "Hand-cut fries, potato pancakes, Jamaican potato salad, sauteed veggies, cottage cheese, coleslaw, buttered marble rye",
      insiderTip: "The house tartar is exceptional — ask for extra. Pair the fish with the city's most-decorated Bloody Mary.",
      bestFor: "Sports fans, neighborhood regulars, quality over quantity",
      allYouCanEat: false,
    },
    {
      name: "St. Paul Fish Company",
      neighborhood: "Third Ward",
      priceRange: "$$",
      address: "400 N Water St, Milwaukee, WI 53202",
      description: "The Milwaukee Public Market's fresh-fish counter with 246+ consecutive Friday fish fries on the books. Schlitz-battered cod is the signature; walleye, perch, grouper, and catfish round out the case. Casual counter service inside the market hall — not a tavern, not a white-tablecloth restaurant.",
      fishOptions: "Schlitz-battered cod, walleye, perch, grouper, catfish",
      sides: "Chips or fries, coleslaw, tartar — plus raw-bar oysters and lobster rolls available alongside",
      insiderTip: "Order the Schlitz-battered cod fish-and-chips, then take it upstairs to the Public Market mezzanine. Friday lunchtime is often the price-best window.",
      bestFor: "Fresh-fish seekers, Public Market visitors, fast counter lunch",
      allYouCanEat: false,
    },
  ],
  traditional: [
    {
      name: "Swingin' Door Exchange",
      neighborhood: "Downtown",
      priceRange: "$",
      address: "219 E Michigan St, Milwaukee, WI 53202",
      description: "Downtown East Town saloon with 209+ consecutive Friday fish fries on the board. Icelandic cod (fried or baked, 2/3/4 piece, $9.50–$13.50) and lake perch ($13), plus a combo fry (2pc cod + 2pc perch + 3 shrimp, $16.50). Also runs the fish fry Saturday 10 a.m.–2 p.m.",
      fishOptions: "Fried or baked Icelandic cod (2/3/4 pc), lake perch, combo fry (cod + perch + shrimp)",
      sides: "Choice of housemade chips, fries, slaw, or soup; buttered marble rye; housemade tartar/cocktail. Substitutions include chili, chowder, spicy vermouth carrots, brussels sprouts, grilled beets",
      insiderTip: "One of the few downtown fish fries that also runs Saturday late-morning — great if you can't get a Friday slot.",
      bestFor: "Visitors, downtown workers, groups, value seekers",
      allYouCanEat: false,
    },
    {
      name: "Kegel's Inn",
      neighborhood: "West Allis",
      priceRange: "$$",
      address: "5901 W National Ave, West Allis, WI 53214",
      description: "A German-American institution since 1924, Kegel's serves a single-portion Friday fish fry that's a Milwaukee tradition. Old-world tavern charm, the original Kegel family recipes still on the menu, and the city's most well-known house potato pancakes alongside the fish.",
      fishOptions: "Cod, lake perch (lightly breaded), walleye, grouper, jumbo shrimp",
      sides: "Famous house potato pancakes, French fries, coleslaw, rye bread, tartar, lemon",
      insiderTip: "Reservations are essential — Friday nights pack out. Order the lake perch with potato pancakes for the most-Wisconsin plate, and don't skip the German specialties (schnitzel, sauerbraten) if you have room.",
      bestFor: "Tradition seekers, German food lovers, multi-generation Milwaukee families",
      allYouCanEat: false,
    },
    {
      name: "Serb Hall",
      neighborhood: "South Side",
      priceRange: "$",
      address: "5101 W Oklahoma Ave, Milwaukee, WI 53219",
      description: "Iconic South Side hall serving the city's signature hand-breaded Serbian-style cod since 1950. Single-portion dinners across three preparations: square-cut Icelandic cod, hand-breaded Atlantic cod (fried or baked), and the signature Serbian-style Atlantic cod in tomato sauce with peppers, onions, and garlic. Dine-in, drive-thru, and walk-up windows on Fridays 3:30–8:30 p.m.",
      fishOptions: "Icelandic cod (2/3 pc, $15.95/$18.95), hand-breaded Atlantic cod fried or baked (2/3 pc, $13.95/$15.95), Serbian-style Atlantic cod in tomato sauce (2/3 pc, $14.95/$16.95)",
      sides: "Choice of potato (French fries, garlic mashed, or Serbian potato salad), Serb Hall coleslaw, salted marble rye with butter, fresh lemon, tartar. House potato pancakes $2 each à la carte",
      insiderTip: "Order the hand-breaded Serbian-style cod — it's the signature and the dish locals make the drive for. (Some older guides label Serb Hall as all-you-can-eat — it isn't; the menu is fixed 2- or 3-piece dinners.)",
      bestFor: "Hand-breaded fans, Serbian heritage, banquet-hall scale",
      allYouCanEat: false,
    },
  ],
  neighborhood: [
    {
      name: "Erv's Mug",
      neighborhood: "Oak Creek",
      priceRange: "$$",
      address: "130 W Ryan Rd, Oak Creek, WI 53154",
      description: "Family-owned, women-owned Oak Creek tavern since 1979 (daughter Danielle now at the helm). The fish fry runs Wednesdays and Fridays — 3-piece dinners. Lake perch is the signature, with a \"crackly golden shell\" praised by the Milwaukee Journal Sentinel, OnMilwaukee, Shepherd Express, and TMJ4.",
      fishOptions: "Beer-battered cod, baked cod, tilapia, lake perch (beer-battered or lightly floured), yellowfin tuna, walleye pike, calamari, shrimp",
      sides: "Soup, coleslaw, rye bread, choice of potato",
      insiderTip: "Order the lake perch — it's what they're known for. Wednesday is the lower-traffic night if Friday is too booked. Note: Oak Creek is south of Milwaukee proper — plan ~20 minutes from downtown.",
      bestFor: "Perch lovers, suburban neighborhood authenticity",
      allYouCanEat: false,
    },
    {
      name: "Maxie's Southern Comfort",
      neighborhood: "West Side",
      priceRange: "$$",
      address: "6732 W Fairview Ave, Milwaukee, WI 53213",
      description: "A Southern/Cajun-Creole spin on the Milwaukee Friday fish fry. Single-portion beer-battered fresh haddock ($19.95) with Cajun waffle fries and house-made cornbread instead of the usual rye and potato pancakes. Maxie's reopened after a 2026 refresh with the haddock fish fry intact.",
      fishOptions: "Beer-battered fresh haddock",
      sides: "Creamy coleslaw, house-made tartar, Cajun waffle fries, house-made cornbread",
      insiderTip: "Pair with the $2 oyster happy hour for a Cajun-meets-Wisconsin seafood night.",
      bestFor: "Southern food fans, oyster lovers, twist-on-tradition fish fry",
      allYouCanEat: false,
    },
    {
      name: "Barnacle Bud's",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "1955 S Hilbert Ave, Milwaukee, WI 53207",
      description: "Dockside Bay View patio with a \"Key West in Milwaukee\" vibe — at its best in warm months. The Friday fish fry includes cod, perch, grouper, catfish, smelt, and clam strips, plus coconut shrimp. Closed Mon–Wed; open Thu–Sat 11 a.m.–9 p.m. and Sun 11 a.m.–6 p.m.",
      fishOptions: "Cod, perch, grouper, catfish, smelt, clam strips, coconut shrimp",
      sides: "Coleslaw, French fries, rye bread with butter, Friday clam chowder",
      insiderTip: "Get the Grouper Reuben (cult favorite). Patio fills fast on warm Fridays — get there early.",
      bestFor: "Bay View locals, patio season, casual waterfront-adjacent dining",
      allYouCanEat: false,
    },
  ],
  upscale: [
    {
      name: "Harbor House",
      neighborhood: "Downtown Lakefront",
      priceRange: "$$$",
      address: "550 N Harbor Dr, Milwaukee, WI 53202",
      description: "Bartolotta's New England-style fine-dining restaurant with sweeping Lake Michigan views from the downtown lakefront. The Friday fish fry rotates with the seasonal menu — call ahead for the specific fish that week. White-tablecloth upscale; this is not a tavern fish fry.",
      fishOptions: "Rotating seasonal fish — call (414) 395-4900 to confirm the Friday menu",
      sides: "Elevated New England-style accompaniments; rotates with the season",
      insiderTip: "Request a lakeside table when you reserve — the view is the whole point. Open Mon–Thu 5–9 p.m., Fri–Sun 11 a.m.–2 p.m. and 5–9 p.m.",
      bestFor: "Special occasions, date nights, visitors wanting upscale",
      allYouCanEat: false,
    },
    {
      name: "Three Brothers",
      neighborhood: "Bay View",
      priceRange: "$$$",
      address: "2414 S St Clair St, Milwaukee, WI 53207",
      description: "James Beard Award-winning Serbian dinner-house in a historic 1897 Schlitz tavern building since 1956. Not a traditional Wisconsin fish fry — the menu's fish dishes (Atlantic cod, square-cut Icelandic cod, and the signature Serbian-style fish in tomato sauce with peppers and garlic) are part of a full Serbian dinner-house menu, not a Friday-only special.",
      fishOptions: "Atlantic cod, square-cut Icelandic cod, Serbian-style fish in tomato sauce",
      sides: "Serbian dinner-house sides — typically rice, vegetables, Serbian-style accompaniments. Not the classic Milwaukee fish fry plate.",
      insiderTip: "Reservations strongly recommended — the dining room is small. Order off the full Serbian menu, not just the fish — the room is the experience. Open Wed–Fri 5–9 p.m., Sat–Sun 4–9 p.m.",
      bestFor: "Serbian food lovers, James Beard fans, special-occasion dining (not a casual fish-fry stop)",
      allYouCanEat: false,
    },
  ],
};

const faqs = [
  {
    question: "What is a Wisconsin Friday fish fry?",
    answer: "The Friday fish fry is a beloved Wisconsin tradition with origins in Catholic dietary restrictions and German/Polish immigrant heritage. A classic fish fry includes beer-battered or breaded fish (usually cod or perch), potato pancakes or fries, coleslaw, rye bread, and tartar sauce. It's served at taverns, restaurants, and church halls across the state every Friday."
  },
  {
    question: "What fish is used in a Milwaukee fish fry?",
    answer: "Traditional Milwaukee fish fries feature cod (most common), lake perch (a Wisconsin favorite), haddock, walleye, or bluegill. Cod is typically beer-battered, while perch is often breaded. Lake perch is considered more premium and authentic to the Wisconsin tradition."
  },
  {
    question: "What comes with a fish fry in Milwaukee?",
    answer: "A complete Milwaukee fish fry includes the fried fish, potato pancakes (German influence) or french fries, creamy coleslaw, rye bread with butter, tartar sauce, and often a lemon wedge. Some places also serve applesauce. Beer is the traditional beverage pairing."
  },
  {
    question: "Where is the best fish fry in Milwaukee?",
    answer: "Top fish fry spots include Lakefront Brewery (classic experience with live polka), Steny's Tavern & Grill (excellent beer batter, 326+ Friday fish fries running), St. Paul Fish Company at the Milwaukee Public Market (Schlitz-battered cod fish-and-chips), Kegel's Inn (German-American since 1924, famous house potato pancakes), Serb Hall (iconic hand-breaded Serbian-style cod since 1950), and Swingin' Door Exchange (downtown East Town saloon, also serves Saturday). The best fish fry often depends on whether you prefer atmosphere, quality fish, or a specific style."
  },
  {
    question: "Is fish fry only on Fridays in Milwaukee?",
    answer: "While Friday is traditional (due to Catholic no-meat Fridays), many Milwaukee restaurants serve fish fry throughout the week. However, the full Friday night fish fry experience—with the crowds, the atmosphere, and often live music—is specifically a Friday tradition."
  },
  {
    question: "Do any Milwaukee fish fry spots offer all-you-can-eat?",
    answer: "None of the spots featured on this guide currently offer all-you-can-eat. Serb Hall and Kegel's Inn — the two Milwaukee venues most commonly associated with AYCE — both serve single-portion Friday fish fry dinners only (2-piece or 3-piece, roughly $13–$19). AYCE Friday fish fry in the broader Milwaukee area is more common at suburban supper-club venues; if all-you-can-eat is the priority, call ahead to confirm — fish-fry formats shift with ownership changes and operating costs."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Fish Fry in Milwaukee 2026: Complete Friday Fish Fry Guide",
    "description": "The best Friday fish fry in Milwaukee — traditional taverns, neighborhood spots, upscale picks and the authentic Wisconsin fish fry experience.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-06-07",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-fish-fry-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Fish Fry in Milwaukee", "item": "https://www.discover-milwaukee.com/best-fish-fry-milwaukee" }
    ]
  }
};

export default function BestFishFryMilwaukee() {
  const FishFryCard = ({ spot }) => (
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
          {spot.allYouCanEat && (
            <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>ALL-YOU-CAN-EAT</span>
          )}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>FISH OPTIONS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.fishOptions}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>SIDES</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.sides}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
      {spot.address && (
        <p style={{ fontSize: "13px", color: "#777", marginBottom: 0 }}>{spot.address}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Fish Fry in Milwaukee 2026 | Friday Fish Fry Guide</title>
        <meta name="description" content="Find the best Friday fish fry in Milwaukee — traditional taverns, neighborhood spots and upscale picks. Beer-battered cod, lake perch, Serbian-style, polka and the authentic Wisconsin tradition." />
        <meta name="keywords" content="best fish fry milwaukee, friday fish fry milwaukee, wisconsin fish fry, beer battered cod milwaukee, lake perch milwaukee, serb hall fish fry, kegels fish fry, lakefront fish fry" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-fish-fry-milwaukee" />

        <meta property="og:title" content="Best Fish Fry in Milwaukee 2026 | Friday Fish Fry Guide" />
        <meta property="og:description" content="Milwaukee's definitive Friday fish fry guide — traditional taverns, neighborhood spots, upscale picks, and the authentic Wisconsin experience." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-fish-fry-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>WISCONSIN TRADITION</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Fish Fry in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              The Friday fish fry is more than a meal in Wisconsin—it's a cultural institution. Here's where to find the best in Milwaukee.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK NAVIGATION</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#traditional" style={{ color: c.green2, fontSize: "14px" }}>Traditional</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#upscale" style={{ color: c.green2, fontSize: "14px" }}>Upscale</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Wisconsin Fish Fry Tradition Box */}
          <div style={{ backgroundColor: c.yellow, padding: "24px", borderRadius: "16px", marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>The Wisconsin Fish Fry Tradition</h2>
            <p style={{ color: c.green1, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
              The Friday fish fry dates back to Catholic dietary restrictions and was popularized by German and Polish immigrants in the 19th century. The Kashubes who settled on Jones Island were among the first to serve fried fish in taverns alongside local beer. Today, it's a beloved Wisconsin tradition served in taverns, restaurants, and church halls every Friday—and year-round in many spots.
            </p>
          </div>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These spots deliver the complete fish fry experience: excellent fish, perfect sides, and authentic atmosphere.
            </p>
            {fishFrySpots.bestOverall.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section id="traditional" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Traditional Fish Fry Spots</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Classic preparations in settings that have been serving fish fry for generations.
            </p>
            {fishFrySpots.traditional.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section id="neighborhood" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local taverns where the fish fry is a weekly community gathering.
            </p>
            {fishFrySpots.neighborhood.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section id="upscale" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Upscale Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Elevated takes on the tradition for special Friday occasions.
            </p>
            {fishFrySpots.upscale.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/best-dive-bars-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Dive Bars</Link>
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurants, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
