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

const curdSpots = {
  institutions: [
    {
      name: "Sobelman's Pub & Grill",
      neighborhood: "Menomonee Valley",
      priceRange: "$$",
      address: "1900 W St Paul Ave, Milwaukee, WI 53233",
      special: "Pretzel-crumb beer batter",
      curdStyle: "White cheddar curds in a beer batter rolled in crushed pretzel crumbs, then fried until the shell shatters. Served with house ranch.",
      mustTry: "A basket of the pretzel-crumb curds alongside whatever Bloody Mary garnish tower they're running.",
      vibe: "Tavern-burger institution, locals and tourists side by side",
      insiderTip: "If the wait at the bar is long, the curds travel — order them with a Bloody to go and eat them in the parking lot like a local.",
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      priceRange: "$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      special: "Wisconsin farm white cheddar",
      curdStyle: "Fresh Wisconsin farm white-cheddar curds, hand-battered and dropped to order so the middle stays molten while the outside crackles.",
      mustTry: "A basket of the white-cheddar curds with the chipotle ranch on the side.",
      vibe: "Big Walker's Point sports tavern, game-day energy",
      insiderTip: "Get them on a Packers Sunday — the kitchen is in rhythm and the batter is at its crispiest.",
    },
    {
      name: "Hooligan's Super Bar",
      neighborhood: "Lower East Side",
      priceRange: "$$",
      address: "2017 E North Ave, Milwaukee, WI 53202",
      special: "Smoky paprika aioli",
      curdStyle: "Classic Wisconsin curds in a light beer batter, served with a smoked-paprika aioli instead of the usual ranch cup.",
      mustTry: "A full order of curds with the paprika aioli — and ask for ranch too if you want to compare.",
      vibe: "Late-night East Side bar that's been here forever",
      insiderTip: "Kitchen runs late — these are some of the best post-bar curds in the city after 11pm.",
    },
    {
      name: "Saz's State House",
      neighborhood: "Washington Heights",
      priceRange: "$$",
      address: "5539 W State St, Milwaukee, WI 53208",
      special: "Leinie's beer-battered",
      curdStyle: "Saz's signature mozzarella-and-cheddar curds in a Leinenkugel's beer batter — a Milwaukee staple poured at Brewers games and State Fair stands.",
      mustTry: "Sampler basket with the curds front and center, plus Saz's BBQ sauce alongside the standard ranch.",
      vibe: "Family-friendly West Side classic, BBQ-bar energy",
      insiderTip: "If you can't make it to State Street, Saz's runs the curd stand at American Family Field — same batter, ballpark prices.",
    },
  ],
  fresh: [
    {
      name: "Hill Valley Dairy — Milwaukee Cheese Bar",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "138 W Bruce St, Milwaukee, WI 53204",
      special: "Curds made in-house weekly",
      curdStyle: "Small-batch curds made on-site from southern Wisconsin milk — squeaky when fresh, mild and milky, sold by the bag the day they're made.",
      mustTry: "A bag of plain fresh curds the day of make, plus a flight at the cheese bar to taste them against the aged styles.",
      vibe: "Small Walker's Point cheese bar, dairy nerd-friendly",
      insiderTip: "Call ahead to find out which day's the make day — fresh-that-day is the entire point of squeaky curds.",
    },
    {
      name: "Wisconsin Cheese Mart",
      neighborhood: "Westown",
      priceRange: "$$",
      address: "215 W Highland Ave, Milwaukee, WI 53203",
      special: "Wisconsin cheese since 1938",
      curdStyle: "Wide rotating selection of Wisconsin curds — plain, flavored, garlic-dill, jalapeño — sourced from creameries across the state.",
      mustTry: "Plain yellow curds plus one flavored bag (garlic-dill is the classic) and a slice of any award-winning cheddar.",
      vibe: "Old-school cheese counter near Old World 3rd, free samples, knowledgeable staff",
      insiderTip: "Free wine and cheese tastings most afternoons — a curd run can turn into a slow hour without trying.",
    },
    {
      name: "West Allis Cheese & Sausage Shoppe",
      neighborhood: "Milwaukee Public Market",
      priceRange: "$$",
      address: "400 N Water St, Milwaukee, WI 53202",
      special: "Public Market counter",
      curdStyle: "Fresh Wisconsin curds restocked frequently from the West Allis shop — multiple flavors and Wisconsin specialty cheddars in one stop.",
      mustTry: "Plain curds plus a Cajun or Buffalo Wing bag, eaten on the Public Market mezzanine.",
      vibe: "Bustling indoor market counter, easy for visitors",
      insiderTip: "Pair the curds with a baguette from the Public Market bakery and a beer upstairs — best instant Milwaukee picnic downtown.",
    },
  ],
  brewery: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Riverwest",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      special: "Curdsday Thursdays",
      curdStyle: "Wisconsin curds dropped in a lager-based beer batter and fried to order, served with Lakefront's house 'granch' — a garlic-ranch mash-up.",
      mustTry: "A basket of curds with granch on Curdsday Thursday, paired with an Eastside Dark.",
      vibe: "Big riverside beer hall, polka brunch energy",
      insiderTip: "Thursday is when curds are the special — bigger pours, the beer hall is loud, and the brewery tour ends right at the curd table.",
    },
    {
      name: "Third Space Brewing",
      neighborhood: "Menomonee Valley",
      priceRange: "$$",
      address: "1505 W St Paul Ave, Milwaukee, WI 53233",
      special: "Taproom curds with rotating beer",
      curdStyle: "Beer-battered Wisconsin curds in a taproom with no full kitchen — focused, fried, simple, and built to pair with the IPA in your hand.",
      mustTry: "Curds with a pour of Happy Place — the pale ale that put Third Space on the Milwaukee map.",
      vibe: "Modern Menomonee Valley taproom, families and dogs welcome",
      insiderTip: "Curds go fast when food trucks aren't parked outside — order with your first beer, not your third.",
    },
    {
      name: "Red Lion Pub",
      neighborhood: "North End",
      priceRange: "$$",
      address: "1850 N Water St, Milwaukee, WI 53202",
      special: "Spotted Cow beer batter",
      curdStyle: "Wisconsin curds in a New Glarus Spotted Cow beer batter — a very Wisconsin-meets-British-pub move that ends up working.",
      mustTry: "Spotted Cow curds with malt vinegar on the side — the pub treatment that no other curd spot in town does.",
      vibe: "British-style pub with Wisconsin loyalty, North End location",
      insiderTip: "Order the curds and a pint of Spotted Cow back-to-back — the batter and the beer are literally the same thing.",
    },
  ],
  elevated: [
    {
      name: "Black Sheep MKE",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "216 S 2nd St, Milwaukee, WI 53204",
      special: "Pancake-battered with maple",
      curdStyle: "Curds dropped in a pancake batter and fried, then served with warm maple syrup for dipping — Wisconsin breakfast and Wisconsin bar food in one bite.",
      mustTry: "The pancake-battered curds with maple syrup as the only dip — skip the ranch for once.",
      vibe: "Walker's Point cocktail bar, brunch crowd at peak",
      insiderTip: "Best ordered for the table at brunch — they go cold fast, but the maple-and-curd combination wins everyone over before that happens.",
    },
    {
      name: "Café Centraal",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2306 S Kinnickinnic Ave, Milwaukee, WI 53207",
      special: "Garlic-cracker breading",
      curdStyle: "Curds breaded in crushed garlic crackers instead of batter — a crunchier, more herbaceous shell that holds up to the chipotle ranch served alongside.",
      mustTry: "A basket of cracker-breaded curds with chipotle ranch and a Belgian beer from the long Lowlands list.",
      vibe: "Bay View Belgian café, beer-forward, long tables",
      insiderTip: "Lowlands Group runs a few Belgian cafés citywide — Centraal is the Bay View one, and the cracker-breaded curds are on the menu at the others too.",
    },
    {
      name: "Camino",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "434 S 2nd St, Milwaukee, WI 53204",
      special: "Rye-crumb crust, Russian dressing",
      curdStyle: "Curds in a rye-leaning crumb crust — a Reuben-on-a-fryer-spoon move, served with house Russian dressing instead of ranch.",
      mustTry: "Rye-crusted curds with Russian dressing alongside a smash burger and the fire-pit table outside.",
      vibe: "Walker's Point bar with fire pits, all-things-chicken energy",
      insiderTip: "The Russian dressing is the move — locals who order ranch out of habit always end up swapping after one bite.",
    },
  ],
};

const faqs = [
  {
    question: "Where are the best cheese curds in Milwaukee?",
    answer: "For fried curds: Sobelman's pretzel-crumb curds, Steny's white-cheddar, Hooligan's with paprika aioli, and Saz's Leinie's-battered. For fresh squeaky curds: Hill Valley Dairy in Walker's Point, Wisconsin Cheese Mart downtown, and West Allis Cheese & Sausage Shoppe at the Milwaukee Public Market. Lakefront Brewery's Curdsday Thursday and Black Sheep's pancake-battered with maple round out the unusual entries.",
  },
  {
    question: "What's the difference between fried and fresh cheese curds?",
    answer: "Fresh curds are the day-of-make byproduct of cheddar production — small, irregular nuggets that squeak against your teeth and have a mild, milky flavor. Fried curds take those same curds, batter them, and drop them in a fryer until the inside is molten and the outside is crisp. Wisconsin is one of the few places that does both at scale; Milwaukee is one of the only cities where you can eat both in the same afternoon.",
  },
  {
    question: "What makes cheese curds squeak?",
    answer: "The squeak comes from elastic protein strands inside curds that are less than a day or two old. As curds age, those strands break down and the squeak fades. By the time most curds reach a grocery shelf, the squeak is gone — which is why Hill Valley Dairy and Wisconsin Cheese Mart matter. Bring curds to room temperature to bring some of the squeak back; refrigeration kills it.",
  },
  {
    question: "Where can I buy fresh squeaky cheese curds in Milwaukee?",
    answer: "Hill Valley Dairy's Milwaukee Cheese Bar in Walker's Point makes curds in-house on a regular weekly schedule — that's the freshest option in the city. Wisconsin Cheese Mart on Highland Ave has a wide rotating selection from creameries across the state. West Allis Cheese & Sausage Shoppe at the Milwaukee Public Market restocks frequently and makes it easy if you're already downtown.",
  },
  {
    question: "Best fried cheese curds for first-time visitors to Milwaukee?",
    answer: "Sobelman's is the safe, iconic answer — pretzel-crumb beer batter and a tavern setting that feels like Milwaukee on first impression. If you want the brewery-tour version, Lakefront on Curdsday Thursday hits the brewery, beer hall and curds in one stop. Saz's is the State Fair lineage in a sit-down room. Any of the three is a strong introduction.",
  },
  {
    question: "Best dipping sauce for Milwaukee cheese curds?",
    answer: "Ranch is the Milwaukee default — most kitchens make their own, and it's what you'll be handed if you don't ask. Variations are where things get interesting: Steny's and Café Centraal go chipotle ranch, Lakefront makes 'granch' (garlic-ranch), Hooligan's pours a smoked-paprika aioli, Black Sheep skips dip altogether for warm maple syrup, and Camino goes Russian dressing on its rye-crusted curds. Order ranch if it's your first round, then branch out.",
  },
];

const allCurdSpots = [
  ...curdSpots.institutions,
  ...curdSpots.fresh,
  ...curdSpots.brewery,
  ...curdSpots.elevated,
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Cheese Curds in Milwaukee 2026: Fried & Fresh Wisconsin Curds",
    "description": "A researched guide to the best cheese curds in Milwaukee — fried-curd institutions, fresh squeaky curds from cheese shops, brewery taprooms and elevated takes.",
    "image": "https://www.discover-milwaukee.com/images/best-cheese-curds-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-28",
    "dateModified": "2026-05-28",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-cheese-curds-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Cheese Curds Milwaukee", "item": "https://www.discover-milwaukee.com/best-cheese-curds-milwaukee" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Cheese Curds in Milwaukee",
    "description": "13 Milwaukee spots for fried and fresh Wisconsin cheese curds — bars, cheese shops, breweries, and elevated takes.",
    "numberOfItems": allCurdSpots.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allCurdSpots.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Restaurant",
        "name": spot.name,
        "priceRange": spot.priceRange,
        "servesCuisine": "American · Wisconsin",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": spot.address.split(",")[0].trim(),
          "addressLocality": (spot.address.match(/,\s*([^,]+?),\s*WI/) || [,"Milwaukee"])[1],
          "addressRegion": "WI",
          "postalCode": (spot.address.match(/WI\s+(\d{5})/) || [,""])[1],
          "addressCountry": "US"
        }
      }
    }))
  }
};

export default function BestCheeseCurdsMilwaukee() {
  const CurdCard = ({ spot }) => (
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
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.curdStyle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.vibe}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
      <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>📍 {spot.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Cheese Curds in Milwaukee 2026: Fried & Fresh</title>
        <meta name="description" content="Best cheese curds in Milwaukee 2026: 13 spots for fried + fresh squeaky Wisconsin curds — Sobelman's, Hill Valley Dairy, Lakefront Curdsday & more." />
        <meta name="keywords" content="best cheese curds milwaukee, fried cheese curds milwaukee, fresh cheese curds milwaukee, squeaky cheese curds milwaukee, wisconsin cheese curds milwaukee, sobelman's curds, lakefront brewery curds" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-cheese-curds-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Cheese Curds in Milwaukee 2026: Fried & Fresh" key="og:title" />
        <meta property="og:description" content="13 Milwaukee cheese-curd spots — fried-curd institutions, fresh-from-the-cheesemaker, brewery standouts, and elevated takes." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-cheese-curds-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-cheese-curds-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Cheese Curds in Milwaukee — 13 spots, fried to fresh." key="og:image:alt" />
        <meta property="article:published_time" content="2026-05-28T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-05-28T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Cheese Curds in Milwaukee 2026: Fried & Fresh" key="twitter:title" />
        <meta name="twitter:description" content="13 Milwaukee cheese-curd spots — fried, fresh, brewery, elevated." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-cheese-curds-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 28, 2026 · 13 SPOTS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Cheese Curds in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Wisconsin invented cheese curds and Milwaukee perfected what to do with them — beer-battered at the corner bar, squeaky-fresh at the cheese shop, reinvented at the brewery. Here's the proven list.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Curd menus, fryer specials and cheesemaker schedules change. Confirm hours, make-days and current dips with the spot before you go. Prices listed are approximate. Building a full Milwaukee food day? Add a <Link href="/best-brewery-tours-milwaukee" style={{ color: c.green2 }}>brewery tour</Link>, a <Link href="/best-fish-fry-milwaukee" style={{ color: c.green2 }}>Friday fish fry</Link>, or hit <Link href="/packers-bars-milwaukee" style={{ color: c.green2 }}>a Packers bar</Link> on game day.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Fried-Curd Institutions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The corner-bar, ballpark and tavern names everyone in Milwaukee names first.
            </p>
            {curdSpots.institutions.map((spot, i) => <CurdCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Fresh & Squeaky — The Cheese Shops</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Day-of-make curds with the squeak still in them — where to buy them by the bag.
            </p>
            {curdSpots.fresh.map((spot, i) => <CurdCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Brewery & Taproom Standouts</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Curds engineered to pair with a pour — Curdsday Thursdays included.
            </p>
            {curdSpots.brewery.map((spot, i) => <CurdCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Elevated & Unexpected</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Pancake batter and maple, garlic-cracker crumbs, rye crust and Russian dressing — Wisconsin curds reinvented.
            </p>
            {curdSpots.elevated.map((spot, i) => <CurdCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-fish-fry-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Fish Fry</Link>
              <Link href="/best-burgers-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Burgers</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Breweries</Link>
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
