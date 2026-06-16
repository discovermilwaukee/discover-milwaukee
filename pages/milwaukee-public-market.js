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

const vendors = {
  wisconsin: [
    {
      name: "West Allis Cheese & Sausage Shoppe",
      category: "Cheese & Sausage",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Wisconsin cheese counter",
      vendorStyle: "A deep Wisconsin cheese case plus house and regional sausages, summer sausage, smoked meats and gift boxes. The single best place inside the Market to assemble a Wisconsin board.",
      mustTry: "A wedge of aged cheddar from a Wisconsin creamery plus a stick of summer sausage — eat it upstairs on the mezzanine.",
      vibe: "Old-school cheese-shop counter energy — staff who actually know the cases",
      insiderTip: "Ask for a couple of small samples before you commit — the staff will cut you slivers of two or three styles so you can decide between sharp, smoked, or bandaged cheddars.",
    },
    {
      name: "Milwaukee Pretzel Co.",
      category: "Bavarian Pretzels",
      priceRange: "$",
      address: "Milwaukee Public Market",
      special: "Hand-rolled Bavarian pretzels",
      vendorStyle: "Milwaukee-made Bavarian-style soft pretzels, hand-rolled and baked, sold plain or with house mustard and beer cheese for dipping.",
      mustTry: "A warm classic Bavarian pretzel with beer cheese — split it across two people and it doubles as an appetizer for the rest of your Market crawl.",
      vibe: "Glass case full of fresh-baked pretzels — you can smell it from the next aisle",
      insiderTip: "Grab a pretzel early in your visit and walk the Market with it — it's the easiest hand-food while you scout the other vendors.",
    },
    {
      name: "St. Paul Fish Co.",
      category: "Seafood & Oyster Bar",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Oyster bar + fresh seafood counter",
      vendorStyle: "A working seafood market with a full oyster bar and sit-down counter — fresh oysters shucked to order, fish tacos, lobster rolls, gumbo and a real fish case to take home.",
      mustTry: "Half a dozen oysters on the half shell at the counter, or the fish tacos if you want something hot.",
      vibe: "Bustling fish-counter-meets-raw-bar — easily the loudest, most theatrical stall in the Market",
      insiderTip: "Sit at the oyster bar itself rather than grabbing a table — the shuckers will walk you through what's freshest that day.",
    },
  ],
  eats: [
    {
      name: "Cubanitas",
      category: "Cuban",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Milwaukee's Cuban staple",
      vendorStyle: "The Public Market outpost of Milwaukee's longtime Cuban restaurant — pressed Cubano sandwiches, ropa vieja, plantains and rice-and-beans, built for a counter lunch.",
      mustTry: "The classic Cubano sandwich (roast pork, ham, Swiss, pickles, mustard, pressed) with a side of sweet plantains.",
      vibe: "Bright counter with the smell of pressed pork and citrus pulling people in from across the building",
      insiderTip: "Take the Cubano upstairs to the mezzanine — it eats much better at a table than balancing on the rail downstairs.",
    },
    {
      name: "Aleppo Kitchen",
      category: "Syrian / Middle Eastern",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Syrian comfort food",
      vendorStyle: "Family-run Syrian kitchen serving shawarma, falafel, kebabs, hummus, fattoush and homestyle Middle Eastern plates from a small Market stall.",
      mustTry: "A chicken shawarma plate with hummus, salad and rice — or a falafel wrap if you want hand-food.",
      vibe: "Tiny stall, big aromatics — garlic, lemon and grilled meat",
      insiderTip: "Ask if they have any of the daily specials off the board — the homestyle Syrian dishes are where this stall really shows up.",
    },
    {
      name: "Lucha",
      category: "Tacos",
      priceRange: "$",
      address: "Milwaukee Public Market",
      special: "Counter taco bar",
      vendorStyle: "Quick-service taco counter with a tight menu of made-to-order tacos, plus chips, salsas and easy Mexican sides.",
      mustTry: "An order of three tacos across different proteins so you can compare.",
      vibe: "Order-at-the-counter taco stand — fast, casual, easy to eat anywhere in the Market",
      insiderTip: "Best paired with a frozen margarita from Margarita Paradise across the building — order tacos, walk over for the drink, sit upstairs.",
    },
    {
      name: "The Green Kitchen",
      category: "Vegan / Vegetarian",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Plant-based menu",
      vendorStyle: "Plant-based counter inside the Market — bowls, wraps, salads and vegan comfort plates built so vegetarians and vegans actually have a real option here.",
      mustTry: "A signature grain bowl loaded with seasonal vegetables and a house sauce.",
      vibe: "Bright, produce-forward counter — the calm corner of the Market",
      insiderTip: "If you're rolling through with a mixed group (meat-eaters + a vegan), this is the stall that solves it without compromise.",
    },
    {
      name: "On the Bus",
      category: "Gourmet Hot Dogs",
      priceRange: "$",
      address: "Milwaukee Public Market",
      special: "Loaded hot dogs",
      vendorStyle: "A hot-dog-and-sausage counter doing loaded, dressed-up dogs with house toppings — well past a ballpark dog, still hand-food.",
      mustTry: "A loaded specialty dog of the day — ask what the staff is eating.",
      vibe: "Quick-counter, easy-grab, dressed-up versus a stadium dog",
      insiderTip: "Grab a dog plus a Wisconsin beer from Thief Wine and post up at one of the standing counters on the main floor.",
    },
    {
      name: "Joey Gerard's",
      category: "Italian Deli",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Italian sandwiches and deli",
      vendorStyle: "Italian-American deli stall — cold cuts, cheeses, pressed sandwiches and antipasti to eat in or take home, run by a longtime Milwaukee restaurant group.",
      mustTry: "A classic Italian sub stacked with cured meats and provolone.",
      vibe: "Glass deli case, salami hanging behind the counter — old-school Italian shop energy",
      insiderTip: "Order a sandwich plus a few ounces of meats and cheeses from the case — it's an instant picnic for the lakefront or Pere Marquette Park.",
    },
  ],
  sweetsDrinks: [
    {
      name: "C. Adams Bakery",
      category: "Bakery",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Artisan breads and pastries",
      vendorStyle: "Small-batch bakery selling artisan loaves, pastries, scones and morning bakes — the bread-and-butter counter at the Market.",
      mustTry: "Whatever loaf is fresh that morning, plus a buttery scone for the walk.",
      vibe: "Glass case full of pastries and stacked bread baskets",
      insiderTip: "Go in the morning — the best loaves and the most pastries are on the shelves before lunch.",
    },
    {
      name: "Anodyne Coffee",
      category: "Coffee",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Local-roaster espresso bar",
      vendorStyle: "Public Market outpost of Anodyne — the certified-organic Milwaukee roaster — pulling espresso and drip from house beans.",
      mustTry: "A flat white pulled on the house espresso to reset between food stalls.",
      vibe: "Bright espresso bar tucked into the Market — busy in the morning, calm in the afternoon",
      insiderTip: "If you like what you drink, walk over to the Walker's Point roastery later — same beans, full cafe and live music at night. See our full coffee guide.",
    },
    {
      name: "Thief Wine",
      category: "Wine Shop & Bar",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Wine retail + by-the-glass bar",
      vendorStyle: "A serious wine shop with a working bar — bottles to take home plus a constantly rotating by-the-glass list you can sit and drink in the Market.",
      mustTry: "Ask for a flight of three by-the-glass pours built around what you're about to eat.",
      vibe: "Wood-and-bottle bar with stools — the closest thing to a wine bar inside a food hall",
      insiderTip: "They'll build a flight around your food order from elsewhere in the Market — tell them you're eating oysters from St. Paul, or a Cubano, and they'll pair to it.",
    },
    {
      name: "Margarita Paradise",
      category: "Tequila & Margaritas",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Frozen-margarita bar",
      vendorStyle: "Tequila-and-margarita bar inside the Market — frozen margaritas in multiple flavors plus a tequila list, built for a quick drink while you eat.",
      mustTry: "The classic frozen lime margarita, or a flavor-of-the-day swirl.",
      vibe: "Bright tequila bar — the loudest, most vacation-coded corner of the building",
      insiderTip: "Best paired with tacos from Lucha — grab the drink, grab the food, sit upstairs.",
    },
    {
      name: "Kehr's Candies",
      category: "Candy",
      priceRange: "$",
      address: "Milwaukee Public Market",
      special: "Milwaukee candy maker since 1930",
      vendorStyle: "Classic Milwaukee candy maker — hand-dipped chocolates, caramels, fudge and old-school confections from a Milwaukee family operation that's been at it for nearly a century.",
      mustTry: "A few pieces of the hand-dipped chocolates, plus a chunk of fresh fudge.",
      vibe: "Glass cases full of chocolates — a true Milwaukee candy shop, just relocated into the food hall",
      insiderTip: "Grab a small mixed box as a souvenir — it travels better than cheese and lasts longer than a sandwich.",
    },
    {
      name: "The Spice House",
      category: "Spices & Gifts",
      priceRange: "$$",
      address: "Milwaukee Public Market",
      special: "Hand-blended spices",
      vendorStyle: "Hand-blended spices, salts, peppercorns and gift sets — the Public Market outpost of the longtime Midwestern spice shop. Not a food stall — a pantry.",
      mustTry: "A jar of a Milwaukee- or Chicago-named house blend as a take-home souvenir.",
      vibe: "Wall-to-wall apothecary jars — smells like every spice rack you've ever wanted",
      insiderTip: "Ask to smell two or three blends before buying — staff will pop the jars for you and the differences are bigger than the labels suggest.",
    },
  ],
};

const faqs = [
  {
    question: "What is the Milwaukee Public Market?",
    answer: "The Milwaukee Public Market is a year-round indoor public market in the Historic Third Ward at 400 N Water St, opened in 2005. It houses 30+ independent vendors under one roof — bakeries, butchers, cheese, seafood, coffee, wine, prepared foods from Cuban to Syrian to vegan, plus a sit-down mezzanine upstairs. It is one of Milwaukee's most-visited destinations.",
  },
  {
    question: "What are the Milwaukee Public Market hours?",
    answer: "The Market is typically open Monday through Saturday 10 a.m. to 8 p.m. and Sunday 10 a.m. to 6 p.m. Individual vendors sometimes keep slightly different hours. Always confirm current hours on milwaukeepublicmarket.org before a trip, especially around holidays.",
  },
  {
    question: "Where do I park for the Milwaukee Public Market?",
    answer: "There are paid surface lots on N Water St, E St Paul Ave and E Erie St immediately around the Market, plus paid parking structures within a short walk in the Third Ward. Some metered street parking is available but limited at peak times. If you're staying downtown, it's a very walkable 10–15 minutes via the Riverwalk.",
  },
  {
    question: "What's the best food at the Milwaukee Public Market?",
    answer: "The most-recommended stalls are St. Paul Fish Co. (oysters and fish tacos), Cubanitas (Cuban sandwiches), Aleppo Kitchen (Syrian), West Allis Cheese & Sausage Shoppe (Wisconsin cheese boards), Milwaukee Pretzel Co. (Bavarian pretzels) and C. Adams Bakery (artisan breads and pastries). A smart strategy is to share small orders from three or four stalls upstairs on the mezzanine.",
  },
  {
    question: "Is the Milwaukee Public Market kid-friendly?",
    answer: "Yes — it's one of the most kid-friendly destinations downtown. Open layout, casual food from pretzels to tacos to hot dogs, no reservations, and the upstairs mezzanine gives families a place to actually sit. Strollers move through the main aisles fine.",
  },
  {
    question: "Are there vegan options at the Milwaukee Public Market?",
    answer: "Yes. The Green Kitchen runs a plant-based menu with bowls, wraps and vegan plates. Aleppo Kitchen has falafel and hummus, Lucha has vegetable tacos, and most produce-and-bakery stalls have vegan-friendly items. Mixed groups with vegans and meat-eaters can easily eat together here.",
  },
  {
    question: "Can I get groceries at the Milwaukee Public Market?",
    answer: "Partly — it's a public market, not a full grocery store. You can pick up cheese and sausage at West Allis Cheese, fresh seafood at St. Paul Fish Co., artisan breads at C. Adams Bakery, spices at The Spice House, wine at Thief Wine, candy at Kehr's, deli items at Joey Gerard's and pretzels at Milwaukee Pretzel Co. Combine those and you can absolutely build a full dinner-at-home haul.",
  },
];

const allVendors = [
  ...vendors.wisconsin,
  ...vendors.eats,
  ...vendors.sweetsDrinks,
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Public Market: Complete Visitor Guide 2026",
    "description": "A complete guide to the Milwaukee Public Market in the Historic Third Ward — 30+ vendors, hours, parking, mezzanine and tips for first-time visitors.",
    "image": "https://www.discover-milwaukee.com/images/milwaukee-public-market-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-06-04",
    "dateModified": "2026-06-04",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-public-market"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Public Market", "item": "https://www.discover-milwaukee.com/milwaukee-public-market" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Vendors at the Milwaukee Public Market",
    "description": "Top vendors and stalls inside the Milwaukee Public Market in the Historic Third Ward.",
    "numberOfItems": allVendors.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allVendors.map((v, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": ["Coffee", "Wine", "Spice", "Candy", "Bakery"].some(k => v.category.toLowerCase().includes(k.toLowerCase())) ? "Store" : "FoodEstablishment",
        "name": v.name,
        "priceRange": v.priceRange,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "400 N Water St",
          "addressLocality": "Milwaukee",
          "addressRegion": "WI",
          "postalCode": "53202",
          "addressCountry": "US"
        }
      }
    }))
  },
  place: {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Milwaukee Public Market",
    "url": "https://www.discover-milwaukee.com/milwaukee-public-market",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 N Water St",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "postalCode": "53202",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.0263,
      "longitude": -87.9105
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ]
  }
};

export default function MilwaukeePublicMarket() {
  const VendorCard = ({ spot }) => (
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
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.category}</span>
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.vendorStyle}</p>
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
        <title>Milwaukee Public Market: Vendors, Hours, Parking Guide</title>
        <meta name="description" content="Complete Milwaukee Public Market guide: 30+ Third Ward vendors including St. Paul Fish Co., Cubanitas, Wisconsin cheese, hours, parking and first-timer tips." />
        <meta name="keywords" content="milwaukee public market, milwaukee public market vendors, milwaukee public market hours, milwaukee public market parking, third ward milwaukee, st paul fish co, cubanitas milwaukee, milwaukee public market food" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-public-market" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Public Market: Vendors, Hours, Parking Guide" key="og:title" />
        <meta property="og:description" content="30+ vendors in the Historic Third Ward — St. Paul Fish, Cubanitas, Wisconsin cheese, Bavarian pretzels and a mezzanine to sit and eat it all." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-public-market" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-public-market-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee Public Market — complete visitor guide to 30+ Third Ward vendors." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-04T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-04T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Public Market: Vendors, Hours, Parking Guide" key="twitter:title" />
        <meta name="twitter:description" content="30+ Third Ward vendors — St. Paul Fish, Cubanitas, Wisconsin cheese, Bavarian pretzels and a mezzanine to eat it all." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-public-market-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.place) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 4, 2026 · 30+ VENDORS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Milwaukee Public Market
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              <strong>Milwaukee's year-round indoor food hall in the Third Ward</strong> — 30+ vendors, fresh oysters at St. Paul Fish, Cuban at Cubanitas, Wisconsin cheese, and a mezzanine to actually sit and eat it all.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section style={{ marginBottom: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, marginBottom: "6px" }}>ADDRESS</p>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>400 N Water St</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>Historic Third Ward</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, marginBottom: "6px" }}>HOURS</p>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>Mon–Sat 10a–8p</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>Sun 10a–6p</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, marginBottom: "6px" }}>SEATING</p>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>Mezzanine upstairs</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>Eat-in seating</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, marginBottom: "6px" }}>PARKING</p>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>Paid lots</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>Water/St Paul/Erie</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, marginBottom: "6px" }}>VENDORS</p>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>30+ stalls</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>Food, drink, gifts</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, marginBottom: "6px" }}>OPENED</p>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>2005</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>Year-round, indoor</p>
              </div>
            </div>
          </section>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Vendors and hours rotate — always confirm current hours and stalls on milwaukeepublicmarket.org before a trip. The Market sits inside the <Link href="/third-ward-milwaukee" style={{ color: c.green2 }}>Historic Third Ward</Link>, an easy walk to <Link href="/best-restaurants-milwaukee" style={{ color: c.green2 }}>Milwaukee's best restaurants</Link> and <Link href="/milwaukee-shopping" style={{ color: c.green2 }}>downtown shopping</Link>.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>What is the Milwaukee Public Market?</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "12px" }}>
              The Milwaukee Public Market is a year-round indoor public market that opened in 2005 in the Historic Third Ward at 400 N Water St. Under one roof you get 30+ independent vendors — fresh seafood, cheese and sausage counters, an artisan bakery, prepared food stalls running from Cuban to Syrian to vegan, a wine bar, a tequila bar, a coffee bar, candy, spices and gifts.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "12px" }}>
              The whole point of the building is that it works two ways. You can shop it like a real market — pick up cheese, fish, bread and a bottle of wine to go — or you can graze it like a food hall, ordering from three or four stalls and carrying it upstairs to the mezzanine to actually sit and eat.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              It is one of Milwaukee's most-visited destinations and, for most first-time visitors to the city, the easiest single stop to get a sense of how Milwaukee actually eats.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Wisconsin Classics</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The stalls that anchor the Public Market to Wisconsin — cheese, sausage, oysters from the Great Lakes seafood counter, and Bavarian pretzels. Pair with our guide to <Link href="/best-cheese-curds-milwaukee" style={{ color: c.green2 }}>Milwaukee's best cheese curds</Link>.
            </p>
            {vendors.wisconsin.map((spot, i) => <VendorCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Eats — Around the World</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The reason the mezzanine is always full — Cuban sandwiches, Syrian shawarma, tacos, gourmet hot dogs, Italian deli plates and a real vegan kitchen, all in one building.
            </p>
            {vendors.eats.map((spot, i) => <VendorCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Sweets & Drinks</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Coffee, wine, frozen margaritas, hand-dipped chocolates, artisan breads and a wall of spices. See our full <Link href="/best-coffee-milwaukee" style={{ color: c.green2 }}>Milwaukee coffee guide</Link> for more of the Anodyne story.
            </p>
            {vendors.sweetsDrinks.map((spot, i) => <VendorCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Mezzanine & Events</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "12px" }}>
              The mezzanine is the upstairs seating area that turns the Public Market from a food court into something better. Once you've ordered from any stall on the main floor, take it upstairs — you'll find tables, longer counters and a view back down over the Market itself.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              The mezzanine and the Market also host cooking classes, demos, holiday markets, tastings and private events throughout the year. The current schedule lives on milwaukeepublicmarket.org — worth a glance before a visit, especially in November and December.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Getting There & Parking</h2>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>Driving & Parking</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                There are paid surface lots immediately around the Market on N Water St, E St Paul Ave and E Erie St, plus paid parking structures within a short walk in the Third Ward. Some metered street parking exists but goes fast at peak times — weekend brunch hours and Friday/Saturday evenings are the worst. The paid lots are the easiest play.
              </p>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>Walking from Downtown</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                From most downtown hotels it is a 10–15 minute walk south along the Milwaukee Riverwalk to the Market — flat, scenic, and the best way to arrive. From the Fiserv Forum or the convention center area, plan closer to 15–20 minutes.
              </p>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>Transit & Streetcar</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                The Hop streetcar runs through downtown and into the Historic Third Ward — check the current route and stop nearest the Market. MCTS bus routes also serve downtown and the Third Ward. Rideshare drop-offs are easy in front of the Market on N Water St.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Tips for First-Timers</h2>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>When to go</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>Weekday late mornings and mid-afternoons are calmest. Saturday lunch and Friday evening are peak chaos — fun, but expect lines at the headliner stalls (St. Paul Fish, Cubanitas).</p>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>How to order</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>Don't commit to one stall. Walk the full loop first, then divide and conquer with whoever you're with — one person on oysters, one on Cuban, one on tacos — and meet at the mezzanine.</p>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>Where to sit</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>Always go upstairs. The mezzanine has the real tables and the view back down — the few standing counters on the main floor get bumped constantly.</p>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>What to take home</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>If you're flying out: Kehr's candies, a Spice House blend, and a vacuum-packed cheese from West Allis Cheese all travel well. Skip the fresh seafood unless you're driving.</p>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>Pair it with</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>The Market sits in the middle of the Third Ward. Before or after, walk Broadway for boutiques and galleries, or down to the Riverwalk — see <Link href="/third-ward-milwaukee" style={{ color: c.green2 }}>our Third Ward guide</Link> and <Link href="/things-to-do-milwaukee" style={{ color: c.green2 }}>things to do in Milwaukee</Link>.</p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Third Ward Guide</Link>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do</Link>
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
