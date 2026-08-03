import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedGuides from "../components/RelatedGuides";

import NewsletterCTA from "../components/NewsletterCTA";

const SITE = "https://www.discover-milwaukee.com";
const DISPLAY = "'Anton', system-ui, -apple-system, sans-serif";
const BODY = "'Jost', system-ui, -apple-system, sans-serif";

const c = {
  green1: "#2C5235",
  green2: "#547F4B",
  blue2: "#0B77BD",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  yellow: "#F0A623",
  orange: "#D06828",
  tan: "#9E7F4B",
  ink: "#20291F",
};

const patios = {
  rooftops: [
    {
      name: "The Outsider",
      neighborhood: "Third Ward",
      type: "Rooftop Bar",
      priceRange: "$$",
      address: "310 E Chicago St, 9th Floor, Milwaukee, WI 53202",
      description: "Milwaukee's premier rooftop bar, perched on the 9th floor of the Kimpton Journeyman Hotel in the Third Ward. Sweeping skyline views, craft cocktails, and a curated beer list make it the place the city shows up when the weather breaks. One of the best sunset seats downtown.",
      bestFor: "Sunset drinks, date nights, impressing visitors",
      hours: "Seasonal patio energy peaks May–October; open year-round",
      vibe: "Trendy, social scene, skyline views",
      proTip: "Arrive before 6pm on weekends to snag seating without a wait, or go on a weekday for a more relaxed experience.",
    },
    {
      name: "Café Benelux (Rooftop)",
      neighborhood: "Third Ward",
      type: "Rooftop Restaurant",
      priceRange: "$$",
      address: "346 N Broadway, Milwaukee, WI 53202",
      description: "The Third Ward's go-to rooftop pairs Belgian-inspired food and drinks with prime city views. More restaurant than bar, so you can make an evening of it with dinner and drinks — or come for brunch with a view on weekends.",
      bestFor: "Brunch, dinner with a view, groups",
      hours: "Venue open year-round; rooftop deck is seasonal (warm months)",
      vibe: "Lively, European-inspired, social",
      proTip: "The rooftop deck opens when the weather cooperates — check their socials before heading over.",
    },
    {
      name: "Uncle Buck's on 3rd",
      neighborhood: "Deer District",
      type: "Rooftop Sports Bar",
      priceRange: "$$",
      address: "1125 N Dr Martin Luther King Jr Dr, Milwaukee, WI 53203",
      description: "A multi-level gastropub in the Deer District topped by a third-floor rooftop with skyline and Milwaukee River views, steps from Fiserv Forum. Built for game days and big groups, it's the pre-event patio for anyone headed to a Bucks game or downtown show.",
      bestFor: "Bucks game days, big groups, pre-event drinks",
      hours: "Open year-round; rooftop is seasonal — call ahead",
      vibe: "Energetic, sporty, downtown buzz",
    },
    {
      name: "Blu at the Pfister",
      neighborhood: "Downtown",
      type: "Skyline Lounge (Indoor)",
      priceRange: "$$$",
      address: "424 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "Not a patio, but the best skyline view in the city without one. Blu sits on the 23rd floor of the historic Pfister Hotel with floor-to-ceiling windows, craft cocktails, and upscale small plates. The grown-up option when you want elevated views and a quieter, indoor room.",
      bestFor: "Special occasions, business drinks, sophisticated evenings",
      hours: "Evenings; check current hours before you go",
      vibe: "Upscale, quieter, classic Milwaukee",
      proTip: "Grab a drink here before dinner at a downtown restaurant — and note the views are through glass, not open air.",
    },
  ],
  waterfront: [
    {
      name: "Boone & Crockett",
      neighborhood: "Harbor District",
      type: "Waterfront Bar",
      priceRange: "$",
      address: "818 S Water St, Milwaukee, WI 53204",
      description: "A multi-award-winning riverfront patio on the Milwaukee River in the Harbor District, with Hoan Bridge views and the kind of easy summer energy that makes you forget you're in a city. Taco Moto runs the kitchen. (Boone moved here from its old Bay View address in 2018 — this is the current spot.)",
      bestFor: "Casual hangs, day drinking, river views",
      hours: "Seasonal patio; typically closed Mon–Tue",
      vibe: "Laid-back, waterfront, quintessentially Milwaukee summer",
      proTip: "The patio fills up fast on warm weekends — come early to claim a riverside table.",
    },
    {
      name: "Lakefront Brewery",
      neighborhood: "Riverwest",
      type: "Brewery Patio",
      priceRange: "$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "A Milwaukee institution with a spacious patio overlooking the Milwaukee River. Come for the beer, stay for the Friday fish fry, and soak in one of the most authentically Milwaukee experiences you can have.",
      bestFor: "Friday fish fry, brewery vibes, local experience",
      hours: "Daily taproom; riverside patio is seasonal",
      vibe: "Local, fun, quintessential Milwaukee",
      proTip: "Friday fish fry is legendary but crowded — arrive early or go another day for the patio without the wait.",
    },
    {
      name: "Barnacle Bud's",
      neighborhood: "Bay View",
      type: "Waterfront Seafood Shack",
      priceRange: "$",
      address: "1955 S Hilbert St, Milwaukee, WI 53207",
      description: "A no-frills, open-air waterfront hangout on the Kinnickinnic River where the drinks are cheap and the views are surprisingly good. Barnacle Bud's is the antidote to trendy — picnic tables, cold beer, seafood, and the river. Peak Milwaukee summer.",
      bestFor: "Casual day drinking, no pretense, riverside seafood",
      hours: "Seasonal (warm months); often closed early week",
      vibe: "Dive-adjacent, unpretentious, local legend",
      proTip: "It's seasonal and hours shift — call ahead before making the trip.",
    },
    {
      name: "Twisted Fisherman",
      neighborhood: "Menomonee Valley",
      type: "Waterfront Seafood Bar",
      priceRange: "$$",
      address: "1200 W Canal St, Milwaukee, WI 53233",
      description: "A coastal-style seafood beach bar on the Menomonee River just west of downtown, with a big deck, sand, picnic tables, and boat access. It leans into the beach-shack fantasy better than anywhere else this close to the city center.",
      bestFor: "Casual waterfront seafood, boaters, groups",
      hours: "Seasonal — check current hours",
      vibe: "Laid-back beach shack",
    },
    {
      name: "The Cooperage",
      neighborhood: "Harbor District",
      type: "Riverwalk Patio & Venue",
      priceRange: "$$",
      address: "822 S Water St, Milwaukee, WI 53204",
      description: "A riverside music and event venue with a patio right on the Harbor District Riverwalk, next door to Boone & Crockett. Programming is often event-driven, so it shines when there's live music or a market on the calendar.",
      bestFor: "Live music, events, riverwalk strolls",
      hours: "Often event-driven — check their calendar",
      vibe: "Industrial-waterfront",
    },
    {
      name: "The Dock at Bradford Beach",
      neighborhood: "East Side Lakefront",
      type: "Beach Tiki Bar",
      priceRange: "$$",
      address: "2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
      description: "Open-air tiki huts on Milwaukee's main public Lake Michigan beach, serving cocktails and casual food all summer. Sand between your toes, volleyball nets, and one of the city's best lakefront sunset backdrops.",
      bestFor: "Beach day drinking, sunsets, the volleyball crowd",
      hours: "Summer only, weather dependent",
      vibe: "Summery, sandy, festive",
      proTip: "Grab frozen custard next door at Northpoint (2272 N Lincoln Memorial Dr) to round out the beach day.",
    },
  ],
  neighborhood: [
    {
      name: "Café Hollander",
      neighborhood: "Downer Ave & Wauwatosa",
      type: "Restaurant Patio",
      priceRange: "$$",
      address: "2608 N Downer Ave, Milwaukee 53211 · 7677 W State St, Wauwatosa 53213",
      description: "A Milwaukee staple from the Lowlands Group, each location built around a generous patio. Belgian-inspired food and an extensive beer list make it a go-to for any occasion. The Downer Ave flagship reopened in fall 2025; the Tosa Village location sits along the Menomonee River.",
      bestFor: "Dinner, drinks, people-watching",
      hours: "Open year-round; patios are seasonal",
      vibe: "Neighborhood anchor, European feel, family-friendly",
    },
    {
      name: "Colectivo Coffee (Lakefront)",
      neighborhood: "Lower East Side Lakefront",
      type: "Café Patio",
      priceRange: "$",
      address: "1701 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      description: "Set in a restored lakeside pump house, this is Colectivo's iconic lakefront café — the one with the true Lake Michigan patio view. Coffee by day, beer and wine by evening, all steps from the water. Perfect for working remotely or catching up with friends.",
      bestFor: "Coffee meetings, casual hangs, lake views",
      hours: "Daily; patio seating is seasonal",
      vibe: "Relaxed, scenic, community hub",
    },
    {
      name: "Camp Bar",
      neighborhood: "Third Ward",
      type: "Cocktail Bar Patio",
      priceRange: "$$",
      address: "525 E Menomonee St, Milwaukee, WI 53202",
      description: "A Northwoods-cabin-themed bar in the Third Ward with a two-story patio — ground level plus a rooftop deck — and a serious craft cocktail program. The Wisconsin supper-club-meets-cabin theme is kitschy in the best way.",
      bestFor: "Cocktails outdoors, cozy group hangs",
      hours: "Open year-round; rooftop deck is seasonal",
      vibe: "Wisconsin cabin, kitschy-fun",
    },
    {
      name: "Wolski's Tavern",
      neighborhood: "Lower East Side",
      type: "Neighborhood Bar Patio",
      priceRange: "$",
      address: "1836 N Pulaski St, Milwaukee, WI 53202",
      description: "Home of the famous 'I Closed Wolski's' bumper sticker, this Lower East Side institution has a modest back patio tucked behind the bar. It's more neighborhood dive than destination, but it's pure old-Milwaukee charm.",
      bestFor: "Late night, local experience, cheap drinks",
      hours: "Nightly; small seasonal back patio",
      vibe: "Legendary dive, neighborhood institution",
    },
    {
      name: "Sugar Maple",
      neighborhood: "Bay View",
      type: "Craft Beer Bar Patio",
      priceRange: "$$",
      address: "441 E Lincoln Ave, Milwaukee, WI 53207",
      description: "Bay View's craft beer destination, with roughly 60 taps and a cozy back patio. An exceptional, ever-rotating tap list in a neighborhood-bar setting. The patio is intimate but perfect for summer evenings.",
      bestFor: "Craft beer lovers, Bay View hangout",
      hours: "Evenings; patio open on sunny days",
      vibe: "Chill, beer-focused, neighborhood",
    },
  ],
  beerGardens: [
    {
      name: "Estabrook Park Beer Garden",
      neighborhood: "Shorewood / Glendale",
      type: "German Beer Garden",
      priceRange: "$",
      address: "4600 Estabrook Dr, Milwaukee, WI 53211",
      description: "A German-style beer garden overlooking the Milwaukee River — often cited as the oldest permanent beer garden of its kind in the country. Imported German beer, brats, and communal tables under the trees. This is Milwaukee summer at its most pure.",
      bestFor: "Family-friendly, afternoon hangouts, German beer",
      hours: "Seasonal, roughly May–September",
      vibe: "Community, outdoor, classic Milwaukee",
    },
    {
      name: "South Shore Terrace",
      neighborhood: "Bay View",
      type: "County Beer Garden",
      priceRange: "$",
      address: "2900 S Shore Dr, Milwaukee, WI 53207",
      description: "A lakeside Milwaukee County beer garden in South Shore Park with stunning Lake Michigan views. Affordable drinks and arguably the best sunset seats in the city, right on the water.",
      bestFor: "Sunset watching, family-friendly, lake views",
      hours: "Seasonal, roughly April–November",
      vibe: "Scenic, relaxed, community",
      proTip: "Come for sunset — the west-facing park lights up over the lake and skyline.",
    },
    {
      name: "The Landing at Hoyt Park",
      neighborhood: "Wauwatosa",
      type: "Community Beer Garden",
      priceRange: "$",
      address: "1800 N Swan Blvd, Wauwatosa, WI 53226",
      description: "Run by the Friends of Hoyt Park & Pool, The Landing offers a family-friendly beer garden in beautiful Hoyt Park. Live music, good beer, and a true community vibe make it a suburban summer staple.",
      bestFor: "Families, live music, suburban escape",
      hours: "Seasonal, roughly May–October",
      vibe: "Family-friendly, community, park setting",
    },
    {
      name: "The Vine Humboldt",
      neighborhood: "Bay View / Humboldt Park",
      type: "Seasonal Beer Garden",
      priceRange: "$",
      address: "3000 S Howell Ave, Milwaukee, WI 53207",
      description: "A seasonal beer garden at the historic Humboldt Park pavilion, with rotating craft taps and open-air seating under the trees. Dog-friendly and relaxed, it's a favorite for leafy park hangs on the south side.",
      bestFor: "Families, dog-friendly park hangs",
      hours: "Seasonal, roughly May–September; closed Mondays",
      vibe: "Relaxed, leafy, community",
    },
    {
      name: "Whitnall Park Beer Garden",
      neighborhood: "Franklin / Hales Corners",
      type: "County Beer Garden",
      priceRange: "$",
      address: "5879 S 92nd St, Franklin, WI 53132",
      description: "A Milwaukee County beer garden set inside sprawling Whitnall Park near the Boerner Botanical Gardens, with rotating taps and wide-open lawn seating. Worth the drive for a spacious, green, low-key afternoon.",
      bestFor: "Suburban park day-trips, families",
      hours: "Seasonal, roughly spring–September",
      vibe: "Spacious, green, low-key",
    },
  ],
};

const allPatios = [
  ...patios.rooftops,
  ...patios.waterfront,
  ...patios.neighborhood,
  ...patios.beerGardens,
];

const faqs = [
  {
    question: "What are the best rooftop bars in Milwaukee?",
    answer: "The top rooftop bars in Milwaukee are The Outsider (Third Ward, best skyline views), Café Benelux rooftop (Third Ward, food + drinks), and Uncle Buck's on 3rd (Deer District, game-day views). For skyline views without an open-air patio, Blu at the Pfister sits on the 23rd floor downtown. The Outsider is the most popular for summer drinks and sunset views."
  },
  {
    question: "What are the best patios in Milwaukee for food?",
    answer: "For dining with great patio seating, try Café Benelux (Third Ward), Café Hollander (Downer Ave and Wauwatosa), Lakefront Brewery (Riverwest), and Twisted Fisherman (Menomonee Valley) for waterfront seafood. Each pairs a full menu with generous outdoor seating."
  },
  {
    question: "Are there waterfront patios in Milwaukee?",
    answer: "Yes. Milwaukee has excellent waterfront patios. Boone & Crockett (Harbor District, river views), Lakefront Brewery (Milwaukee River), Barnacle Bud's (Bay View, KK River), Twisted Fisherman (Menomonee River), The Dock at Bradford Beach (Lake Michigan), and South Shore Terrace (Lake Michigan views) are top options."
  },
  {
    question: "When do Milwaukee patios open?",
    answer: "Most Milwaukee patios open in late April or early May, depending on weather. Peak patio season runs May through September. Some spots like Café Benelux offer heated outdoor seating in the shoulder season. County and community beer gardens typically operate roughly May through October."
  },
  {
    question: "What are the best beer gardens in Milwaukee?",
    answer: "Milwaukee's top beer gardens include Estabrook Park Beer Garden (Shorewood/Glendale), South Shore Terrace (Bay View, lake views), The Landing at Hoyt Park (Wauwatosa), The Vine Humboldt (Humboldt Park), and Whitnall Park Beer Garden (Franklin). Many are part of the county parks system with affordable drinks and family-friendly atmospheres. The Milwaukee County Traveling Beer Garden also rotates through parks all summer."
  },
  {
    question: "Where can I watch the sunset in Milwaukee?",
    answer: "The best sunset spots with drinks are South Shore Terrace (Lake Michigan), The Outsider rooftop (skyline), The Dock at Bradford Beach (lakefront), and Boone & Crockett (river). For a non-bar option, the Bradford Beach area and Lakeshore State Park also offer stunning sunsets."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "Best Patios in Milwaukee 2026: Rooftops, Waterfront & Beer Gardens",
    "description": "Complete guide to Milwaukee's best outdoor drinking and dining. Rooftop bars, waterfront patios, beer gardens, and neighborhood favorites for summer 2026.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-08-03",
    "mainEntityOfPage": `${SITE}/best-patios-milwaukee`
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Patios in Milwaukee 2026",
    "description": "Milwaukee's best rooftop bars, waterfront patios, neighborhood spots, and beer gardens for outdoor drinking and dining.",
    "numberOfItems": allPatios.length,
    "itemListElement": allPatios.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": ["Restaurant", "BarOrPub"],
        "name": p.name,
        "servesCuisine": "American",
        "priceRange": p.priceRange,
        "description": p.description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": p.address,
          "addressLocality": "Milwaukee",
          "addressRegion": "WI",
          "addressCountry": "US"
        }
      }
    }))
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
      { "@type": "ListItem", "position": 2, "name": "Best Patios in Milwaukee", "item": `${SITE}/best-patios-milwaukee` }
    ]
  }
};

const SECTIONS = [
  {
    id: "rooftops",
    kicker: "Elevated",
    title: "Best Rooftop Bars in Milwaukee",
    blurb: "Skyline views and craft cocktails. Milwaukee's rooftop scene has grown fast, with options from trendy to upscale — plus one indoor lounge with the best glass-walled view in town.",
    list: patios.rooftops,
  },
  {
    id: "waterfront",
    kicker: "On the Water",
    title: "Waterfront Patios",
    blurb: "Milwaukee's rivers, harbor, and lakefront make the perfect backdrop for summer drinking. These spots lean all the way into our water-city status.",
    list: patios.waterfront,
  },
  {
    id: "neighborhood",
    kicker: "Local Favorites",
    title: "Neighborhood Patios",
    blurb: "The local spots where regulars gather. Less scene, more community — these patios are the backbone of Milwaukee's outdoor culture.",
    list: patios.neighborhood,
  },
  {
    id: "beer-gardens",
    kicker: "Prost",
    title: "Milwaukee Beer Gardens",
    blurb: "Milwaukee's German heritage shines through its beer gardens. County and community-run spots offer affordable drinks, communal tables, and pure summer vibes.",
    list: patios.beerGardens,
  },
];

export default function BestPatiosMilwaukee() {
  const Tag = ({ bg, color, children }) => (
    <span style={{ backgroundColor: bg, color, padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", fontFamily: BODY, letterSpacing: "0.3px" }}>{children}</span>
  );

  const PatioCard = ({ patio }) => (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "18px",
      padding: "26px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
      boxShadow: "0 1px 2px rgba(32,41,31,0.04)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
        <h3 style={{ color: c.green1, fontSize: "26px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px", margin: 0, lineHeight: 1.1 }}>{patio.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {patio.priceRange && <Tag bg={c.orange} color="#fff">{patio.priceRange}</Tag>}
          <Tag bg={c.green2} color="#fff">{patio.neighborhood}</Tag>
          {patio.type && <Tag bg={c.yellow} color={c.ink}>{patio.type}</Tag>}
        </div>
      </div>
      <p style={{ color: "#4a4a4a", fontSize: "15px", lineHeight: 1.75, marginBottom: "16px", fontFamily: BODY }}>{patio.description}</p>
      {(patio.bestFor || patio.vibe) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {patio.bestFor && (
            <div style={{ backgroundColor: c.cream, padding: "12px 14px", borderRadius: "10px", border: `1px solid ${c.beige}` }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", letterSpacing: "1px", fontFamily: BODY }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontFamily: BODY }}>{patio.bestFor}</p>
            </div>
          )}
          {patio.vibe && (
            <div style={{ backgroundColor: c.cream, padding: "12px 14px", borderRadius: "10px", border: `1px solid ${c.beige}` }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", letterSpacing: "1px", fontFamily: BODY }}>THE VIBE</p>
              <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontFamily: BODY }}>{patio.vibe}</p>
            </div>
          )}
        </div>
      )}
      {patio.hours && (
        <p style={{ fontSize: "13px", color: c.green2, marginTop: "12px", marginBottom: 0, fontFamily: BODY, fontWeight: 600 }}>
          <span style={{ color: c.tan }}>Hours:</span> {patio.hours}
        </p>
      )}
      {patio.proTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px 14px", borderRadius: "10px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.ink, margin: 0, fontFamily: BODY }}><strong>Pro tip:</strong> {patio.proTip}</p>
        </div>
      )}
      {patio.address && <p style={{ fontSize: "13px", color: "#8a8a8a", marginTop: "12px", marginBottom: 0, fontFamily: BODY }}>{patio.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Patios in Milwaukee 2026 | Rooftops, Waterfront & Beer Gardens</title>
        <meta name="description" content="Find Milwaukee's best patios for summer 2026. Rooftop bars, waterfront drinking spots, neighborhood patios, and beer gardens. Complete guide with addresses and tips." />
        <meta name="keywords" content="best patios Milwaukee, Milwaukee rooftop bars, outdoor dining Milwaukee, Milwaukee beer gardens, waterfront bars Milwaukee, where to drink outside Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-patios-milwaukee" />

        <meta property="og:title" content="Best Patios in Milwaukee 2026 | Complete Outdoor Guide" />
        <meta property="og:description" content="Milwaukee's ultimate patio guide. Rooftops, waterfront spots, beer gardens, and neighborhood favorites." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-patios-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-best-patios.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-best-patios.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <Breadcrumbs />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh", fontFamily: BODY }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "72px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.yellow, fontSize: "13px", fontWeight: "700", letterSpacing: "4px", marginBottom: "16px", fontFamily: BODY, textTransform: "uppercase" }}>Summer 2026 Guide</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(40px, 7vw, 68px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "18px", lineHeight: 1.05, letterSpacing: "1px" }}>
              Best Patios in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto", fontFamily: BODY }}>
              When the weather hits, Milwaukee becomes a patio city. From rooftop bars to riverfront shacks and lakeside beer gardens, here&apos;s where to drink outside — {allPatios.length} verified spots.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "#fff", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "12px", letterSpacing: "1.5px", fontFamily: BODY }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <a href="#rooftops" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>Rooftop Bars</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#waterfront" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>Waterfront</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>Neighborhood Patios</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#beer-gardens" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>Beer Gardens</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />
          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, padding: "24px 26px", borderRadius: "16px", marginBottom: "36px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px", fontFamily: BODY }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5, fontFamily: BODY }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Patios in Milwaukee ({allPatios.length} spots)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Categories</dt>
              <dd style={{ color: "#444", margin: 0 }}>Rooftop bars, waterfront patios, neighborhood spots, beer gardens</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>The Outsider, Café Benelux (Rooftop), Boone &amp; Crockett, Lakefront Brewery, South Shore Terrace</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Peak season</dt>
              <dd style={{ color: "#444", margin: 0 }}>May–September; beer gardens roughly May–October</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "16px 0 0", fontFamily: BODY }}>
              Addresses and status verified <time dateTime="2026-08-03">Aug 3, 2026</time> against each venue&apos;s own listings and Milwaukee press. Hours are seasonal and weather-dependent — confirm before you go.
            </p>
          </section>

          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} style={{ marginBottom: "52px", scrollMarginTop: "80px" }}>
              <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px", fontFamily: BODY }}>{section.kicker}</p>
              <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.5px", lineHeight: 1.1 }}>{section.title}</h2>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "26px", fontFamily: BODY }}>{section.blurb}</p>
              {section.list.map((patio, i) => <PatioCard key={i} patio={patio} />)}
            </section>
          ))}

          <section style={{ backgroundColor: c.beige, border: `1px solid ${c.tan}`, borderRadius: "16px", padding: "24px 26px", marginBottom: "52px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.5px" }}>Don&apos;t Forget the Traveling Beer Garden</h2>
            <p style={{ color: "#4a4a4a", fontSize: "15px", lineHeight: 1.75, margin: 0, fontFamily: BODY }}>
              The Milwaukee County Traveling Beer Garden rotates through county parks all summer on two touring schedules, popping up everywhere from Lake Park to neighborhood green spaces. It&apos;s a moving target rather than a fixed address, so check the county parks calendar for the current stop before you head out.
            </p>
          </section>

          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "18px", letterSpacing: "0.5px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Best Restaurants →
              </Link>
              <Link href="/new-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                New Restaurants →
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "#fff", padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Best Brunch →
              </Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.blue2, color: "#fff", padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Best Happy Hour →
              </Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "52px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "24px", letterSpacing: "0.5px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "16px", backgroundColor: "#fff", padding: "22px", borderRadius: "14px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px", fontFamily: BODY }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0, fontFamily: BODY }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "40px 32px", borderRadius: "18px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "clamp(24px, 3.5vw, 32px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.5px" }}>Get Summer Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "22px", fontFamily: BODY }}>Patio openings, outdoor events, and Milwaukee summer fun — straight to your inbox.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.ink, padding: "15px 36px", borderRadius: "999px", fontWeight: "700", textDecoration: "none", fontFamily: BODY, fontSize: "16px" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <RelatedGuides />
      <Footer />
      </div>
    </>
  );
}
