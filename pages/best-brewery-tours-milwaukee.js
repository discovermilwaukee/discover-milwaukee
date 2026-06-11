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

const tours = {
  heavyweights: [
    {
      name: "Miller Brewery Tour (Molson Coors)",
      neighborhood: "Miller Valley",
      priceRange: "$$",
      address: "4251 W State St, Milwaukee, WI 53208",
      special: "1.5-hr walking tour · 21+ samples",
      tourStyle: "The big one. A 90-minute walk through Miller Valley — packaging, the historic Caves, the brewhouse — finishing in the Bavarian-style Miller Inn for samples (21+) or root beer (under 21).",
      mustTry: "End in the Miller Inn taproom and try a draft you've never had on the East Coast — it pours cleaner here.",
      vibe: "Industrial-historic, big-brewery scale, busloads of out-of-towners",
      insiderTip: "Book online — walk-ins fill fast in summer. Wear closed-toe shoes (required) and skip the noon slot if you want fewer big groups.",
    },
    {
      name: "Best Place at the Historic Pabst Brewery",
      neighborhood: "Brewery District",
      priceRange: "$$",
      address: "901 W Juneau Ave, Milwaukee, WI 53233",
      special: "Founded 1844 · three beer pours",
      tourStyle: "An hour-long historical tour of the original Pabst campus — the Captain's Courtyard, the Blue Ribbon Hall, the gift shop saloon — with three pours of Pabst-family beers along the way.",
      mustTry: "The Pabst Andeker on draft and a Schlitz pour in the same flight — Milwaukee in two glasses.",
      vibe: "Bavarian saloon, oil paintings, blue-ribbon history",
      insiderTip: "Pair this with a Pabst Mansion tour the same afternoon — different addresses, same family, makes for the best beer-history day in the city.",
    },
    {
      name: "Sprecher Brewery",
      neighborhood: "Glendale",
      priceRange: "$$",
      address: "701 W Glendale Ave, Glendale, WI 53209",
      special: "Beer + root-beer flight",
      tourStyle: "The classic family-run Sprecher tour — brewhouse walk-through plus a tasting that's the only one in town with a real soda flight (the famous Sprecher root beer, cream soda, ginger ale) alongside the beer.",
      mustTry: "The root beer on draft straight from the source, then a Black Bavarian to compare.",
      vibe: "Family-friendly, soda fountain meets brewery",
      insiderTip: "This is THE brewery tour for groups with kids or non-drinkers — the soda flight is the actual draw, not a compromise.",
    },
  ],
  modern: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Riverwest",
      priceRange: "$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      special: "Four 8-oz pours + souvenir pint glass",
      tourStyle: "The funniest brewery tour in the country — guides have free rein to roast guests, riff on Milwaukee, and somehow still explain brewing. Four pours, a pint glass to keep, and ~1 hour of pure comedy.",
      mustTry: "Riverwest Stein on draft inside the brewhouse you're standing in, then Eastside Dark.",
      vibe: "Loud, packed, riverside, hands-down a top-five Milwaukee experience",
      insiderTip: "Friday Fish Fry tour is the move — fish fry + polka band + tour in one ticket, but it sells out a week+ ahead.",
    },
    {
      name: "Third Space Brewing",
      neighborhood: "Menomonee Valley",
      priceRange: "$",
      address: "1505 W St Paul Ave, Milwaukee, WI 53233",
      special: "Saturday 1pm & 3pm · 2 beers + glass",
      tourStyle: "A genuinely informative ~45-minute tour through the working brewhouse — brewers actually run it, so the production-side detail is real.",
      mustTry: "Happy Place Midwest Pale Ale (their flagship) — the canonical Milwaukee craft pale.",
      vibe: "Modern, taproom-energy, dialed-in",
      insiderTip: "Stay after — the taproom kitchen is dog-friendly outside and the pretzel game is underrated.",
    },
    {
      name: "Good City Brewing",
      neighborhood: "East Side",
      priceRange: "$",
      address: "2108 N Farwell Ave, Milwaukee, WI 53202",
      special: "Saturday 1pm & 2pm · full pour + glass",
      tourStyle: "Short, tight East Side production tour with a full beer pour and a glass — the best quick add-on if you're already eating or shopping on the East Side.",
      mustTry: "Motto Mosaic Pale Ale — Good City's most-awarded beer.",
      vibe: "Polished, urban, food-forward taproom",
      insiderTip: "Walk to Hi-Hat Lounge or Beans & Barley after — Good City is the easiest tour to chain with a real Milwaukee day.",
    },
    {
      name: "MobCraft Beer",
      neighborhood: "Walker's Point",
      priceRange: "$",
      address: "505 S 5th St, Milwaukee, WI 53204",
      special: "Crowdsourced recipes · reopened Sept 2025",
      tourStyle: "Tour the brewhouse behind the only crowdsourced craft brewery in America — fans submit and vote recipes into existence. Heavily interactive, fewer rote facts, more story.",
      mustTry: "Whatever the current crowd-voted winner is on tap — it changes constantly by design.",
      vibe: "Community-driven, Walker's Point craft, rotating chaos in the best way",
      insiderTip: "Ask about the submission process — most regulars don't realize they can actually pitch a recipe.",
    },
  ],
  small: [
    {
      name: "Eagle Park Brewing",
      neighborhood: "Lower East Side",
      priceRange: "$",
      address: "823 E Hamilton St, Milwaukee, WI 53202",
      special: "Production tours in Muskego",
      tourStyle: "Eagle Park's East Side taproom is the easy stop, but the real tour is at the Muskego production facility — full brewhouse walk-through, often led by the brewers themselves.",
      mustTry: "Any current IPA — Eagle Park's hop program is among the city's strongest. They also inherited Milwaukee Brewing Co.'s old trademarks, so look for those throwback brands.",
      vibe: "Brewer-run, smaller-scale, true craft energy",
      insiderTip: "Eagle Park also operates the 2335 S Kinnickinnic St taproom in Bay View — three locations, one brewery family.",
    },
    {
      name: "Broken Bat Brewery",
      neighborhood: "Walker's Point",
      priceRange: "$",
      address: "135 E Pittsburgh Ave, Milwaukee, WI 53204",
      special: "Baseball-themed · indoor wiffle ball field",
      tourStyle: "Baseball-themed brewery with an indoor wiffle ball field inside the taproom. The tour is short and casual — the point is the experience after.",
      mustTry: "Splash Hit Wisconsin Lager — clean, sessionable, the all-day option.",
      vibe: "Brewers Game day energy year-round",
      insiderTip: "Go on game day to walk to American Family Field after — Broken Bat is the warm-up most regulars never tell tourists about.",
    },
    {
      name: "Component Brewing",
      neighborhood: "Bay View",
      priceRange: "$",
      address: "2018 S 1st St, Milwaukee, WI 53207",
      special: "Multi-tenant craft hub",
      tourStyle: "A multi-tenant craft hub — Component shares the building with Twisted Path Distillery, New Barons Brewing, and Soul Brew Kombucha. One tour can touch beer, spirits, and kombucha.",
      mustTry: "A Component flight + a Twisted Path mezcal pour — the only spot in town where that's possible under one roof.",
      vibe: "Industrial, small-craft, Bay View weird-in-a-good-way",
      insiderTip: "Saturday is the best window — all four tenants are usually fully open and you can wander between them.",
    },
    {
      name: "Black Husky Brewing",
      neighborhood: "Riverwest",
      priceRange: "$",
      address: "909 E Locust St, Milwaukee, WI 53212",
      special: "Spruce-tip beer specialty",
      tourStyle: "Riverwest neighborhood brewery known for foraging-leaning ingredients — fresh spruce tips, wild yeast. Tours are loose, brewer-led, and you'll smell the spruce before you see it.",
      mustTry: "Sproose Joose — the flagship spruce-tip IPA that put them on the map.",
      vibe: "Tiny, woodsy, Riverwest to the bone",
      insiderTip: "Call ahead — they're small enough that 'tour' can mean a 1:1 with the brewer if you ask nicely.",
    },
    {
      name: "Gathering Place Brewing",
      neighborhood: "Riverwest",
      priceRange: "$",
      address: "811 E Vienna Ave, Milwaukee, WI 53212",
      special: "European-style focus",
      tourStyle: "Saturday-afternoon tour of a small Riverwest brewery focused on European styles — Kölsch, Helles, schwarzbier. The taproom is the destination, the tour is the bonus.",
      mustTry: "Bridge Builder Blonde or the seasonal schwarzbier if it's on.",
      vibe: "Neighborhood-first, Riverwest community vibe, regulars on a first-name basis",
      insiderTip: "Combine with Black Husky and Lakefront for the unofficial Riverwest brewery triangle — all walkable from one another.",
    },
  ],
};

const faqs = [
  {
    question: "What are the best brewery tours in Milwaukee?",
    answer: "Lakefront Brewery (Riverwest) is the famously funny one, Miller Brewery Tour is the historic heavyweight, Best Place at the Historic Pabst Brewery covers the 1844 origin story, and Sprecher includes a root-beer flight. For modern craft, Third Space and Good City are the most accessible production tours; Component and Eagle Park reward fans who want smaller-scale.",
  },
  {
    question: "How much is a Lakefront, Miller, or Pabst brewery tour?",
    answer: "Lakefront's tour is $13 weekday / $16 weekend with four 8-oz pours and a souvenir glass. Miller's tour is $20 for adults with samples in the Miller Inn for guests 21+. Best Place at Pabst is $14 adult / $12 senior-military-student / free for kids under 13, with three beer pours included.",
  },
  {
    question: "Is the Miller brewery tour free?",
    answer: "No — it's a paid ticketed tour (~$20 adult). Miller's historic complimentary tours ended years ago. You still get samples in the Miller Inn afterward (21+), and it's still considered worth the price for the Miller Valley walk and the Caves.",
  },
  {
    question: "What's the funniest brewery tour in Milwaukee?",
    answer: "Lakefront Brewery, no contest. The guides have free rein to roast guests, run bits, and somehow still deliver real beer history. It's regularly listed among the best brewery tours in the U.S. and the Friday Fish Fry + Polka tour is a separate phenomenon worth booking ahead.",
  },
  {
    question: "Can you do multiple brewery tours in a day in Milwaukee?",
    answer: "Easily — that's the move for visiting beer fans. The Riverwest triangle (Lakefront, Black Husky, Gathering Place) is walkable. Walker's Point clusters MobCraft, Broken Bat, and Eagle Park's southside production. The Brewery District holds Best Place at Pabst and is a short ride to Miller. Use rideshare between districts and pace yourself.",
  },
  {
    question: "Are Milwaukee brewery tours family-friendly?",
    answer: "Sprecher is the most family-friendly — the root-beer flight is a real draw for kids. Miller and Best Place at Pabst allow under-21 guests on the tour with non-alcoholic options. Most craft taprooms (Third Space, Good City, Component) welcome kids in the taproom; the tour portion is generally fine but check the brewery's policy when booking.",
  },
  {
    question: "Best brewery tour for first-time visitors to Milwaukee?",
    answer: "Lakefront for the experience, Best Place at Pabst for the history, Miller for the scale — pick any one. If you only have time for one, Lakefront is the answer almost every local gives. Book ahead in summer and on Brewers home weekends.",
  },
];

const allTours = [...tours.heavyweights, ...tours.modern, ...tours.small];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "Best Brewery Tours in Milwaukee 2026: Top Beer Tours & Tastings",
    "description": "A researched guide to the best brewery tours in Milwaukee — historic heavyweights, the funniest tour in the country, and the small craft taprooms locals send guests to.",
    "image": "https://www.discover-milwaukee.com/images/best-brewery-tours-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-28",
    "dateModified": "2026-05-28",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-brewery-tours-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Brewery Tours Milwaukee", "item": "https://www.discover-milwaukee.com/best-brewery-tours-milwaukee" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Brewery Tours in Milwaukee",
    "description": "12 Milwaukee breweries offering tours and tasting-room experiences worth booking.",
    "numberOfItems": allTours.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allTours.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Brewery",
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

export default function BestBreweryToursMilwaukee() {
  const BreweryCard = ({ spot }) => (
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
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.tourStyle}</p>
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
        <title>Best Brewery Tours in Milwaukee 2026: 12 Top Picks</title>
        <meta name="description" content="12 best brewery tours in Milwaukee 2026 — Lakefront's comedy tour, Miller, Pabst, Sprecher, Third Space and the craft taprooms locals send guests to." />
        <meta name="keywords" content="best brewery tours milwaukee, milwaukee brewery tours, milwaukee beer tours, lakefront brewery tour, miller brewery tour, pabst brewery tour, milwaukee craft beer tours, beer capital tours" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-brewery-tours-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Brewery Tours in Milwaukee 2026: 12 Top Picks" key="og:title" />
        <meta property="og:description" content="The 12 Milwaukee brewery tours that actually deliver — historic, comedic, craft. Lakefront, Miller, Pabst, Sprecher, Third Space and more." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-brewery-tours-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-brewery-tours-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Brewery Tours in Milwaukee — 12 breweries, historic to craft." key="og:image:alt" />
        <meta property="article:published_time" content="2026-05-28T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-05-28T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Brewery Tours in Milwaukee 2026: 12 Top Picks" key="twitter:title" />
        <meta name="twitter:description" content="The 12 Milwaukee brewery tours that actually deliver — historic, comedic, craft." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-brewery-tours-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 28, 2026 · 12 BREWERIES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Brewery Tours in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Milwaukee is the historical beer capital and still earns the title. Here are the brewery tours that actually deliver — the comedy classics, the historic giants, and the small-craft tasting rooms locals send guests to.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Tour times, prices and availability shift seasonally. Always confirm directly with the brewery before you go. Prices listed are approximate. Doing a beer-and-food day? Pair a tour with <Link href="/best-cheese-curds-milwaukee" style={{ color: c.green2 }}>Milwaukee cheese curds</Link>, a <Link href="/best-fish-fry-milwaukee" style={{ color: c.green2 }}>Friday fish fry</Link>, or hit <Link href="/packers-bars-milwaukee" style={{ color: c.green2 }}>a Packers bar</Link> on game day.
            </p>
          </div>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Brewery Tours in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Miller Brewery Tour (Molson Coors), Best Place at the Historic Pabst Brewery, Sprecher Brewery, Lakefront Brewery, Third Space Brewing</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-04">2026-06-04</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Milwaukee Brewery Heavyweights</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The historic, big-name tours — the ones that earned Milwaukee the title in the first place.
            </p>
            {tours.heavyweights.map((spot, i) => <BreweryCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Modern Craft Tours Locals Send People To</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The craft side of the city — established, dialed-in production tours that go beyond the taproom.
            </p>
            {tours.modern.map((spot, i) => <BreweryCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Small & Distinctive</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Brewer-run taprooms, foraging-leaning recipes, and the tours fans take after they've done the classics.
            </p>
            {tours.small.map((spot, i) => <BreweryCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Beer Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Breweries</Link>
              <Link href="/beer-lovers-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Beer Lovers Weekend</Link>
              <Link href="/packers-bars-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Packers Bars</Link>
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
