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

const doughnutSpots = {
  institutions: [
    {
      name: "Grebe's Bakery",
      neighborhood: "West Allis",
      priceRange: "$",
      address: "5132 W Lincoln Ave, West Allis, WI 53219",
      special: "Family-owned since 1937",
      doughnutStyle: "Old-school Milwaukee bakery doughnuts — 30+ varieties daily, with the classic Milwaukee-style cruller as the calling card. Yeast-raised, cake, filled, glazed, all turned out in volume and fresh.",
      mustTry: "The cruller — sugar-shell crisp outside, soft inside — and on Fat Tuesday, the apricot or sweet-cheese paczki.",
      vibe: "Fourth-generation bakery, no pretense, neighborhood institution",
      insiderTip: "Go early. By mid-morning the best varieties are gone, and on Paczki Day they bake 160,000+ and still sell out — preorder online.",
    },
    {
      name: "Cranky Al's",
      neighborhood: "Wauwatosa",
      priceRange: "$",
      address: "6901 W North Ave, Wauwatosa, WI 53213",
      special: "Alton Brown favorite cruller",
      doughnutStyle: "Hand-cut, made-fresh-daily doughnuts using locally sourced and organic ingredients — the shop Alton Brown put on the national map for crullers.",
      mustTry: "The cruller — oblong, hard glaze shell, buttery interior. Alton Brown called it dream-worthy and locals don't argue.",
      vibe: "Tosa neighborhood coffee-and-doughnut shop, also slings hand-tossed pizza",
      insiderTip: "Closed Mondays. The cruller is the one — order it before anything with sprinkles tempts you.",
    },
    {
      name: "Honeydip Donuts",
      neighborhood: "South Side",
      priceRange: "$",
      address: "805 S Layton Blvd, Milwaukee, WI 53215",
      special: "Milwaukee staple since 1974",
      doughnutStyle: "35+ varieties of no-frills, sub-$1.50 doughnuts — cake, yeast, filled, crullers — fried fresh through the day. Cheese pockets and sour cream doughnuts are sleeper picks.",
      mustTry: "A sugar-crusted cruller and a cheese pocket. The sour cream doughnut is the local order.",
      vibe: "Old-school South Side counter, ice cream and burgers too",
      insiderTip: "The Layton Blvd spot is the surviving location and runs 6am to 10pm most days — the 27th St shop is closed, so don't drive there.",
    },
  ],
  craft: [
    {
      name: "Donut Monster",
      neighborhood: "Third Ward",
      priceRange: "$$",
      address: "316 N Milwaukee St, Milwaukee, WI 53202",
      special: "Fine-dining trained, chef-driven",
      doughnutStyle: "Sour cream-based old-fashioneds and yeast-raised rings from a Michelin-trained chef — no artificial colors, organic fruit concentrates for glazes, everything made in-house.",
      mustTry: "Brown butter old-fashioned, PB&J with Concord grape glaze, or the rotating special.",
      vibe: "Bright modern shop, quick line, breakfast sandwiches too",
      insiderTip: "Only open Thursday–Sunday. Also at Whitefish Bay (5169 N Elkhart Ave) and Cedarburg if the Third Ward is a haul.",
    },
    {
      name: "Donut Squad",
      neighborhood: "East Side",
      priceRange: "$",
      address: "2264 N Prospect Ave, Milwaukee, WI 53202",
      special: "Late-night weekend reopen",
      doughnutStyle: "Yeast and cake doughnuts loaded with cereals, candy and cookies — Fruity Pebbles, Cap'n Crunch, Sour Patch, Reese's, Oreo — plus straightforward classics and filled specialties.",
      mustTry: "The Boston cream with Nutella and crushed peanut butter cups, or anything Fruity Pebbles.",
      vibe: "East Side counter shop, quick in-and-out, very Instagrammable",
      insiderTip: "They reopen at 10pm on weekend nights for the bar-crawl crowd — Milwaukee's de facto late-night doughnut move.",
    },
    {
      name: "Sugar Cube Donuts",
      neighborhood: "Juneau Town",
      priceRange: "$$",
      address: "400 N Water St, Milwaukee, WI 53202",
      special: "Vegan doughnuts, square-shaped",
      doughnutStyle: "Square-cut yeast doughnuts made from a dough free of eggs, butter and dairy — fully vegan but designed so you don't notice, with bold glazes and creative toppings.",
      mustTry: "Whatever the rotating glaze of the week is — the vegan dough holds up to wet toppings better than most.",
      vibe: "Small downtown counter, also pops up at the Public Market and Bayshore",
      insiderTip: "This is the spot to take a vegan or dairy-allergic friend without compromise — almost no one clocks them as vegan.",
    },
  ],
  paczki: [
    {
      name: "National Bakery & Deli",
      neighborhood: "South Side",
      priceRange: "$",
      address: "3200 S 16th St, Milwaukee, WI 53215",
      special: "40,000 paczki on Fat Tuesday",
      doughnutStyle: "Traditional Polish paczki — denser, richer than a doughnut, filled with prune, raspberry, lemon or raisin. A 2026 collaboration adds a Brandy Old Fashioned paczki with Central Standard Distillery.",
      mustTry: "The prune (the original, and the most Polish), or the Brandy Old Fashioned if you can grab one.",
      vibe: "Three-generation Milwaukee bakery — accordion players on Paczki Day",
      insiderTip: "Lines start 4:30am for a 6am open on Fat Tuesday. Preorder online or hit the Greendale (5637 Broad St) or Brookfield (13820 W Greenfield Ave) locations to skip the worst of it.",
    },
    {
      name: "Peter Sciortino Bakery",
      neighborhood: "Brady Street",
      priceRange: "$",
      address: "1101 E Brady St, Milwaukee, WI 53202",
      special: "Brady Street landmark since 1946",
      doughnutStyle: "Italian bakery first, but the Fat Tuesday paczki are made from scratch daily like everything else here — yeasted, fried, filled, dusted, sold out by noon.",
      mustTry: "A fresh paczki on Fat Tuesday, plus a few Italian cookies for the road.",
      vibe: "Old-Milwaukee Italian bakery, neon sign, line out the door",
      insiderTip: "Closed Mondays. Voted Milwaukee's best bakery more than once — even when it's not Paczki Day, the case is worth a stop.",
    },
    {
      name: "Wioletta's Polish Market",
      neighborhood: "Bay View / Airport",
      priceRange: "$",
      address: "3955 S Howell Ave, Milwaukee, WI 53207",
      special: "Polish-owned, authentic paczki",
      doughnutStyle: "Imported and house-made Polish paczki from an actual Polish-owned market — denser dough, fruit fillings, the real-deal version most American bakeries are imitating.",
      mustTry: "The traditional rose-petal or plum paczki when available — flavors you won't find at the big bakeries.",
      vibe: "Tight neighborhood Polish grocery, kielbasa case, Eastern European imports",
      insiderTip: "Since Polonez closed in 2022, this is the closest thing left to a true Polish bakery experience in Milwaukee. See also: Grebe's and National Bakery for higher-volume paczki.",
    },
  ],
  worthTheDrive: [
    {
      name: "Happy Dough Lucky",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2691 S Kinnickinnic Ave, Milwaukee, WI 53207",
      special: "Donuts + arcade + late hours",
      doughnutStyle: "Mini doughnuts fried to order — the dough isn't even started until you walk in — then dunked, glazed and loaded into custom builds like s'mores, dirt cup and Yabba Dabba Doo.",
      mustTry: "The s'mores mini doughnuts, hot and built to order.",
      vibe: "Bay View arcade with Pac-Man cabinets, claw machines, pizza, drinks and doughnuts",
      insiderTip: "Open till midnight on Fridays — one of the only real late-night doughnut moves in town besides Donut Squad's weekend reopen.",
    },
    {
      name: "Donut Monster (Whitefish Bay)",
      neighborhood: "Whitefish Bay",
      priceRange: "$$",
      address: "5169 N Elkhart Ave, Whitefish Bay, WI 53217",
      special: "The original storefront",
      doughnutStyle: "Same chef-driven brown-butter old-fashioneds and creative yeast rings as the Third Ward shop — this is the original 2019 location on a quiet residential corner.",
      mustTry: "The cinnamon toast old-fashioned and whatever sandwich is on the breakfast menu.",
      vibe: "Tucked into a North Shore neighborhood, small but bright",
      insiderTip: "Worth the trip if the Third Ward line is too long, or if you're already on the North Shore — Cedarburg's W62 N634 Washington Ave shop is the third option.",
    },
    {
      name: "Donut Monster (Cedarburg)",
      neighborhood: "Cedarburg",
      priceRange: "$$",
      address: "W62 N634 Washington Ave, Cedarburg, WI 53012",
      special: "Day-trip doughnut stop",
      doughnutStyle: "The Cedarburg outpost of the chef-driven brown-butter operation, same menu and standards, with a small-town main-street setting.",
      mustTry: "Brown butter old-fashioned and a breakfast sandwich on the housemade English muffin.",
      vibe: "Historic Cedarburg downtown, easy to fold into a day trip",
      insiderTip: "Pair with a walk down Washington Ave and a stop at the Cedar Creek Settlement — this is the doughnut excuse for a North Shore Saturday.",
    },
  ],
};

const faqs = [
  {
    question: "Where are the best doughnuts (or donuts) in Milwaukee?",
    answer: "The consensus best donuts in Milwaukee come from a mix of old and new: Grebe's Bakery (West Allis, since 1937), Cranky Al's (Wauwatosa, Alton Brown-approved crullers), Honeydip Donuts (South Side, since 1974), Donut Monster (Third Ward, Whitefish Bay, Cedarburg) for chef-driven brown-butter old-fashioneds, and Donut Squad on the East Side for loaded specialty doughnuts. For paczki, National Bakery and Peter Sciortino's are the names.",
  },
  {
    question: "Where do I get paczki in Milwaukee on Fat Tuesday?",
    answer: "Grebe's Bakery in West Allis bakes more than 160,000 paczki for Paczki Day in flavors like apricot, sweet cheese, prune and raspberry. National Bakery & Deli (S. 16th St., plus Greendale and Brookfield) makes 40,000 and partners with Central Standard Distillery for a Brandy Old Fashioned paczki. Peter Sciortino's on Brady Street and Wioletta's Polish Market on S. Howell Ave. round out the must-hit list. Lines start before dawn — preorder if you can.",
  },
  {
    question: "What is a paczki?",
    answer: "A pączki (plural: pączki, pronounced 'POONCH-kee') is a traditional Polish filled doughnut made from rich, egg-and-butter yeasted dough, deep-fried, and filled with fruit preserves, sweet cheese or custard. Milwaukee's huge Polish heritage makes the city one of the best places in the country to eat them, especially on Fat Tuesday (Paczki Day) — the last day before Lent, when bakeries clear out their richest ingredients.",
  },
  {
    question: "What's the best old-fashioned or cake doughnut in Milwaukee?",
    answer: "Donut Monster's brown-butter old-fashioned is the chef-driven pick — sour cream dough, made in-house with no artificial colors. Cranky Al's hand-cut cake doughnuts and the famous cruller are the Wauwatosa benchmark. Grebe's Milwaukee-style cruller is the old-school answer. For cake doughnuts under $1.50, Honeydip Donuts is the value play.",
  },
  {
    question: "What's the best doughnut shop open early in Milwaukee?",
    answer: "Honeydip Donuts on S. Layton Blvd opens at 6am most days. Cranky Al's opens at 6am Tuesday–Sunday. Grebe's Bakery opens at 5am (and earlier on Paczki Day). National Bakery opens 6:30am. For late-night, Donut Squad reopens at 10pm on weekends and Happy Dough Lucky in Bay View stays open till midnight on Fridays.",
  },
  {
    question: "Are there vegan doughnuts in Milwaukee?",
    answer: "Yes — Sugar Cube Donuts on N. Water St. makes square-shaped, fully vegan doughnuts (no eggs, butter or dairy) with creative glazes and toppings. Honeydip Donuts also rotates vegan and gluten-friendly options. Sugar Cube is the go-to recommendation for vegan or dairy-allergic doughnut eaters in Milwaukee.",
  },
];

const allDoughnutSpots = [
  ...doughnutSpots.institutions,
  ...doughnutSpots.craft,
  ...doughnutSpots.paczki,
  ...doughnutSpots.worthTheDrive,
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Doughnuts in Milwaukee 2026: Top Donut Shops, Paczki & Bakeries",
    "description": "A researched guide to the best doughnuts in Milwaukee — institutions, craft shops, Polish paczki bakeries and late-night spots, by neighborhood and price.",
    "image": "https://www.discover-milwaukee.com/images/best-doughnuts-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-28",
    "dateModified": "2026-05-28",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-doughnuts-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Doughnuts Milwaukee", "item": "https://www.discover-milwaukee.com/best-doughnuts-milwaukee" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Doughnut Shops in Milwaukee",
    "description": "12 doughnut shops, paczki bakeries and craft favorites across Milwaukee and the suburbs.",
    "numberOfItems": allDoughnutSpots.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allDoughnutSpots.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Bakery",
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

export default function BestDoughnutsMilwaukee() {
  const DoughnutCard = ({ spot }) => (
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
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.doughnutStyle}</p>
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
        <title>Best Doughnuts in Milwaukee 2026: Donuts & Paczki</title>
        <meta name="description" content="Best doughnuts in Milwaukee 2026: 12 verified shops + paczki bakeries — Cranky Al's, Grebe's, Donut Monster, National Bakery, Sciortino & more." />
        <meta name="keywords" content="best doughnuts milwaukee, best donuts milwaukee, milwaukee doughnut shops, milwaukee donut shops, paczki milwaukee, fat tuesday paczki milwaukee, milwaukee bakery doughnuts, cranky al's, grebe's bakery" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-doughnuts-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Doughnuts in Milwaukee 2026: Donuts & Paczki" key="og:title" />
        <meta property="og:description" content="12 Milwaukee doughnut shops + paczki bakeries — institutions, craft, Polish, and late-night picks." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-doughnuts-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-doughnuts-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Doughnuts in Milwaukee — 12 shops, institutions to craft to paczki." key="og:image:alt" />
        <meta property="article:published_time" content="2026-05-28T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-05-28T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Doughnuts in Milwaukee 2026: Donuts & Paczki" key="twitter:title" />
        <meta name="twitter:description" content="12 Milwaukee doughnut shops + paczki bakeries — institutions to craft." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-doughnuts-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 28, 2026 · 12 SHOPS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Doughnuts in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Milwaukee's doughnut scene is older than it looks — multi-generation Polish bakeries, the Fat Tuesday paczki tradition, and a new wave of craft shops doing brown-butter old-fashioneds and rotating flavors.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Hours, prices and flavors change — and many shops sell out by mid-morning. Always confirm with the bakery before you go, especially on Fat Tuesday. Pair a doughnut with <Link href="/best-coffee-milwaukee" style={{ color: c.green2 }}>Milwaukee's best coffee</Link>, a full <Link href="/best-breakfast-milwaukee" style={{ color: c.green2 }}>breakfast</Link>, or <Link href="/best-brunch-milwaukee" style={{ color: c.green2 }}>weekend brunch</Link>.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Milwaukee Doughnut Institutions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Multi-generation bakeries and decades-old shops — the names locals grew up on and still measure everything else against.
            </p>
            {doughnutSpots.institutions.map((spot, i) => <DoughnutCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Modern & Craft Doughnuts</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Chef-driven, in-house dough, organic glazes, vegan, loaded — the new wave doing things the old shops don't.
            </p>
            {doughnutSpots.craft.map((spot, i) => <DoughnutCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Polish Paczki Specialists</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Where Milwaukee goes for Fat Tuesday — and where the paczki tradition actually lives the rest of the year. See also: Grebe's in the Institutions section, also a paczki powerhouse.
            </p>
            {doughnutSpots.paczki.map((spot, i) => <DoughnutCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Late-Night & Worth the Drive</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The bar-crawl doughnut, the arcade doughnut, and the North Shore day-trip doughnuts worth crossing town for.
            </p>
            {doughnutSpots.worthTheDrive.map((spot, i) => <DoughnutCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-bakeries-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Bakeries</Link>
              <Link href="/best-breakfast-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Breakfast</Link>
              <Link href="/best-ice-cream-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Ice Cream</Link>
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
