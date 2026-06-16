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

const coffeeSpots = {
  institutions: [
    {
      name: "Colectivo Coffee — Lakefront",
      neighborhood: "Lakefront",
      priceRange: "$$",
      address: "1701 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      special: "Local roaster since 1993",
      coffeeStyle: "House-roasted beans pulled into espresso, drip and pour-over inside the restored 1888 Milwaukee River Flushing Station. Medium-leaning roasts built for everyday drinking.",
      mustTry: "Cubano espresso drink, or a drip of the seasonal single-origin with a scratch-made bakery pastry.",
      vibe: "Cathedral-ceilinged historic building right on Veterans Park and the lakefront path",
      insiderTip: "Walk or bike the Oak Leaf Trail in, grab a coffee, and post up outside facing the lake — it's the most Milwaukee coffee moment in the city.",
    },
    {
      name: "Stone Creek Coffee — Factory Cafe",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "422 N 5th St, Milwaukee, WI 53203",
      special: "Roastery + flagship cafe",
      coffeeStyle: "Stone Creek's roasting headquarters — espresso, pour-over and drip pulled steps from the actual roaster, with a viewing window onto production. Clean, balanced, dialed-in.",
      mustTry: "A pour-over of whatever single-origin is on the bar, plus a scone from the in-house bakery.",
      vibe: "Restored 1888 Cream City brick warehouse, wood-burning fireplace, working roastery energy",
      insiderTip: "Ask for the bar seat by the brew bar and watch them weigh, time and pour — this is where Stone Creek trains its baristas.",
    },
    {
      name: "Anodyne Coffee Roasting — Walker's Point",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "224 W Bruce St, Milwaukee, WI 53204",
      special: "Certified-organic roaster since 1999",
      coffeeStyle: "Organic, fair-trade beans roasted on-site in a refurbished warehouse. Espresso and drip with a clean, slightly chocolatey house profile.",
      mustTry: "A flat white pulled on the house espresso, or a drip of the rotating organic single-origin.",
      vibe: "Cream city brick, exposed beams, reclaimed 40-foot bar — daytime cafe, nighttime live music",
      insiderTip: "It doubles as a music venue at night — check the calendar and you can hit a show in the same space you got coffee that morning.",
    },
    {
      name: "Valentine Coffee Roasters — Vliet Street",
      neighborhood: "Washington Heights",
      priceRange: "$$",
      address: "5918 W Vliet St, Milwaukee, WI 53208",
      special: "Original 2013 cafe + roastery",
      coffeeStyle: "Small-batch roaster with a serious bar program — espresso, pour-over and batch brew from carefully sourced single-origins. Bright, modern roast profiles.",
      mustTry: "A pour-over of the current Ethiopian single-origin, or the cortado.",
      vibe: "Sharp black awning, big V logo, neighborhood-cafe-meets-third-wave-roastery on the Milwaukee/Tosa border",
      insiderTip: "Roasting has moved to a bigger building so the cafe has more room — go on a weekday morning when the bar staff has time to talk through what's on.",
    },
  ],
  specialty: [
    {
      name: "Likewise Coffee",
      neighborhood: "Third Ward",
      priceRange: "$$",
      address: "232 E Erie St, Milwaukee, WI 53202",
      special: "Specialty cafe + in-house bakery",
      coffeeStyle: "Independent specialty shop pulling farmer-focused, third-wave roasts as espresso and pour-over alongside a small-batch bakery program.",
      mustTry: "A cortado paired with whatever pastry came out of the oven that morning.",
      vibe: "Bright, airy, plant-filled space in the former Kickapoo/Wonderstate room",
      insiderTip: "The bakery is genuinely part of the draw, not an afterthought — go early before the morning bakes sell out.",
    },
    {
      name: "Canary Coffee Bar",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "720 N Old World 3rd St, Milwaukee, WI 53203",
      special: "Multi-roaster specialty bar",
      coffeeStyle: "A rotating multi-roaster program — different beans from top regional and national roasters pulled through a dialed-in espresso bar and as pour-over.",
      mustTry: "Ask what's currently on espresso and order it as a cortado — they rotate roasters so the answer's always changing.",
      vibe: "Small, sharp, design-forward bar inside the historic Hotel Wisconsin",
      insiderTip: "This is the spot to taste roasters you'd otherwise have to travel for — the bar staff will walk you through who's on this week.",
    },
    {
      name: "Pilcrow Coffee",
      neighborhood: "Brewer's Hill / Halyard Park",
      priceRange: "$$",
      address: "416 W Walnut St, Milwaukee, WI 53212",
      special: "Small-batch roaster + cafe",
      coffeeStyle: "Independently roasted, lightly roasted single-origins built for filter and espresso. Carefully sourced, carefully pulled.",
      mustTry: "A pour-over of the lightest single-origin on the menu — that's where Pilcrow's roasting shows up.",
      vibe: "Small, focused, quietly serious neighborhood cafe just north of downtown",
      insiderTip: "If you've been hearing about Milwaukee's new wave of small roasters, this is the one to actually go sit at the bar for.",
    },
  ],
  neighborhood: [
    {
      name: "Rochambo Coffee & Tea House",
      neighborhood: "Brady Street",
      priceRange: "$",
      address: "1317 E Brady St, Milwaukee, WI 53202",
      special: "Brady Street fixture for decades",
      coffeeStyle: "Classic neighborhood coffeehouse — drip, espresso and a deep loose-leaf tea menu. Not chasing trends, just doing the same thing well for years.",
      mustTry: "A drip and a loose-leaf tea on the side — it's one of the few cafes that takes tea as seriously as coffee.",
      vibe: "Late hours, mismatched chairs, students and locals reading — the platonic ideal of a Brady Street cafe",
      insiderTip: "Open later than almost any other cafe in the city — this is where you go when you need coffee after dinner, not just before it.",
    },
    {
      name: "Fiddleheads Coffee — Shorewood",
      neighborhood: "Shorewood",
      priceRange: "$$",
      address: "4334 N Oakland Ave, Shorewood, WI 53211",
      special: "Local roaster, North Shore go-to",
      coffeeStyle: "House-roasted beans pulled as espresso, drip and pour-over. Approachable, well-balanced roasts — the North Shore's everyday coffee.",
      mustTry: "A latte with the house espresso, or a drip of the seasonal blend.",
      vibe: "1920s Mediterranean revival corner building at Oakland and Lake Bluff, regulars-and-laptops energy",
      insiderTip: "Park once, get coffee, walk to Atwater Beach — Fiddleheads-then-the-lake is a perfect Shorewood morning.",
    },
    {
      name: "Anodyne Coffee — Bay View",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2920 S Kinnickinnic Ave, Milwaukee, WI 53207",
      special: "Bay View neighborhood cafe + pizza",
      coffeeStyle: "Same house-roasted Anodyne beans as Walker's Point, in a smaller neighborhood-cafe setting on KK. Solid espresso and drip all day.",
      mustTry: "A cappuccino in the morning, or come back at night for coffee and the wood-fired pizza menu.",
      vibe: "Bay View's coffee living room — daytime laptops, evening pizza-and-a-beer",
      insiderTip: "Most people don't know this Anodyne does pizza at night. Coffee in the AM, pie and a glass of wine in the PM, same room.",
    },
  ],
  newSchool: [
    {
      name: "Discourse Coffee at Radio Milwaukee",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "220 E Pittsburgh Ave, Milwaukee, WI 53204",
      special: "Experimental craft drinks",
      coffeeStyle: "Traditional espresso menu plus signature craft drinks built like cocktails — syrups, bitters, smoke, infusions. Coffee as composition.",
      mustTry: "A craft signature like Channel Orange (smoked-and-oaked orange vanilla syrup, blackstrap bitters, orange powder) or whatever's on the seasonal menu.",
      vibe: "European-style all-day cafe inside Radio Milwaukee — espresso bar, zero-proof spritzes, wine and a patisserie",
      insiderTip: "Order one classic espresso drink and one signature craft drink — the side-by-side is the whole point of what Discourse is doing.",
    },
    {
      name: "Vennture Brew Co.",
      neighborhood: "Washington Heights",
      priceRange: "$$",
      address: "5519 W North Ave, Milwaukee, WI 53208",
      special: "Coffee roaster + craft brewery, same room",
      coffeeStyle: "House-roasted single-origins and blends pulled as espresso and drip until evening — when the same building shifts to a craft brewery.",
      mustTry: "A morning pour-over, then come back later for The Heights table saison named after the neighborhood.",
      vibe: "Photographer-founded, dual coffee-and-beer concept on W North Ave — open early, open late",
      insiderTip: "It opens at 5 a.m. — earliest serious specialty coffee on the west side. Stay long enough and you can switch from latte to lager without changing seats.",
    },
    {
      name: "Hawthorne Coffee Roasters",
      neighborhood: "South Side / Town of Lake",
      priceRange: "$$",
      address: "4177 S Howell Ave, Milwaukee, WI 53207",
      special: "South-side roaster + cafe",
      coffeeStyle: "Small-batch roaster pulling its own beans as espresso, drip and pour-over. Clean, considered roasts, friendly service.",
      mustTry: "A pour-over of whatever single-origin is featured that week.",
      vibe: "Quiet, neighborhood, south-side roaster cafe — the kind of spot you become a regular at",
      insiderTip: "On the way to or from the airport on S Howell — a much better last-coffee-in-Milwaukee than anything inside MKE.",
    },
  ],
};

const faqs = [
  {
    question: "Where is the best coffee in Milwaukee?",
    answer: "The proven names are Colectivo Coffee (Lakefront), Stone Creek Coffee (Factory Cafe downtown), Anodyne Coffee Roasting (Walker's Point), and Valentine Coffee Roasters on Vliet Street — all local roasters. For specialty/third-wave, Likewise Coffee in the Third Ward, Canary Coffee Bar downtown, and Pilcrow Coffee just north of downtown are the dialed-in bars.",
  },
  {
    question: "What's the best local coffee roaster in Milwaukee?",
    answer: "Milwaukee has a deep local roasting bench: Colectivo (since 1993), Stone Creek, Anodyne (since 1999), Valentine, Fiddleheads, Hawthorne, Pilcrow and Vennture Brew all roast their own beans in the city. For the most accessible everyday roast, Colectivo and Stone Creek. For the most third-wave-leaning, Valentine, Pilcrow and Hawthorne.",
  },
  {
    question: "Where can I get the best espresso or pour-over in Milwaukee?",
    answer: "For espresso, Valentine Coffee (Vliet St), Stone Creek Factory Cafe, Likewise (Third Ward) and Canary Coffee Bar all run dialed-in espresso programs. For pour-over, Stone Creek's brew bar, Valentine, Pilcrow and Hawthorne are where you go when the brew method is the point of the drink.",
  },
  {
    question: "Best coffee shop to work or study from in Milwaukee?",
    answer: "Rochambo on Brady Street stays open late and is built for sitting. Colectivo Lakefront has space and a view. Fiddleheads in Shorewood and Anodyne in Bay View are neighborhood laptop spots. Vennture Brew on W North Ave opens at 5 a.m. and runs late. For a quieter, more focused room, Likewise or Pilcrow.",
  },
  {
    question: "Best coffee in Bay View or on the East Side?",
    answer: "In Bay View, Anodyne Coffee on S Kinnickinnic Ave is the everyday spot (and does wood-fired pizza at night). On the East Side / Brady Street, Rochambo Coffee & Tea House is the long-standing neighborhood cafe. Colectivo Lakefront is a short walk from the lower East Side too.",
  },
  {
    question: "Is there good specialty or third-wave coffee in Milwaukee?",
    answer: "Yes — and it's grown a lot. Likewise Coffee (Third Ward), Canary Coffee Bar (multi-roaster, downtown), Pilcrow Coffee (Brewer's Hill area), Valentine Coffee Roasters (Vliet St), Hawthorne Coffee Roasters (S Howell) and Discourse Coffee at Radio Milwaukee are all dialed-in specialty programs. Canary in particular rotates national roasters you'd otherwise have to travel for.",
  },
];

const allSpots = [
  ...coffeeSpots.institutions,
  ...coffeeSpots.specialty,
  ...coffeeSpots.neighborhood,
  ...coffeeSpots.newSchool,
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "Best Coffee in Milwaukee 2026: Top Coffee Shops & Roasters",
    "description": "A researched guide to the best coffee in Milwaukee — proven local roasters, third-wave cafes and neighborhood coffeehouses by neighborhood and style.",
    "image": "https://www.discover-milwaukee.com/images/best-coffee-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-28",
    "dateModified": "2026-05-28",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-coffee-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Coffee Milwaukee", "item": "https://www.discover-milwaukee.com/best-coffee-milwaukee" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Coffee Shops in Milwaukee",
    "description": "13 proven local roasters and specialty coffee cafés across Milwaukee.",
    "numberOfItems": allSpots.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allSpots.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "CafeOrCoffeeShop",
        "name": spot.name,
        "priceRange": spot.priceRange,
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

export default function BestCoffeeMilwaukee() {
  const CoffeeCard = ({ spot }) => (
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
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.coffeeStyle}</p>
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
        <title>Best Coffee in Milwaukee 2026: Top Shops & Roasters</title>
        <meta name="description" content="Best coffee in Milwaukee 2026: 13 proven local roasters and specialty cafés — Colectivo, Stone Creek, Anodyne, Valentine, Likewise, Discourse & more." />
        <meta name="keywords" content="best coffee milwaukee, milwaukee coffee shops, milwaukee coffee roasters, best espresso milwaukee, best pour over milwaukee, milwaukee cafes, colectivo coffee, stone creek coffee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-coffee-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Coffee in Milwaukee 2026: Top Shops & Roasters" key="og:title" />
        <meta property="og:description" content="13 proven Milwaukee coffee spots — local roasters, third-wave cafés and the neighborhood coffeehouses locals actually go to." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-coffee-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-coffee-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Coffee in Milwaukee — 13 proven local roasters and specialty cafés." key="og:image:alt" />
        <meta property="article:published_time" content="2026-05-28T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-05-28T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Coffee in Milwaukee 2026: Top Shops & Roasters" key="twitter:title" />
        <meta name="twitter:description" content="13 proven Milwaukee coffee spots — local roasters, third-wave cafés, neighborhood favorites." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-coffee-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 28, 2026 · 13 PROVEN SPOTS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Coffee in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Milwaukee's coffee scene punches above its size — proven local roasters, third-wave pour-overs, and the neighborhood cafés that hold the city together. 13 spots, by style and neighborhood.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Cafe hours, single-origins and bar programs rotate. Always confirm current hours with the shop before you go. Prices listed are approximate. Pair your morning coffee with <Link href="/best-doughnuts-milwaukee" style={{ color: c.green2 }}>Milwaukee's best doughnuts</Link>, a <Link href="/best-breakfast-milwaukee" style={{ color: c.green2 }}>full breakfast</Link>, or a <Link href="/best-brunch-milwaukee" style={{ color: c.green2 }}>weekend brunch</Link>.
            </p>
          </div>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Coffee in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Colectivo Coffee — Lakefront, Stone Creek Coffee — Factory Cafe, Anodyne Coffee Roasting — Walker's Point, Valentine Coffee Roasters — Vliet Street, Likewise Coffee</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Milwaukee Coffee Institutions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The proven local roasters — the names that built Milwaukee's coffee reputation and still set the standard.
            </p>
            {coffeeSpots.institutions.map((spot, i) => <CoffeeCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Specialty & Third-Wave</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Dialed-in espresso bars and small-batch roasters — where the brew method is the point of the drink.
            </p>
            {coffeeSpots.specialty.map((spot, i) => <CoffeeCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Cafes Locals Love</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The everyday spots that hold their neighborhoods together — the platonic Milwaukee corner coffeehouse.
            </p>
            {coffeeSpots.neighborhood.map((spot, i) => <CoffeeCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>New School & Unique</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Experimental craft drinks, dual coffee-and-beer concepts, and small roasters doing it their own way.
            </p>
            {coffeeSpots.newSchool.map((spot, i) => <CoffeeCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-breakfast-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Breakfast</Link>
              <Link href="/best-bakeries-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Bakeries</Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Brunch</Link>
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
