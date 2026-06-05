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

const hotels = {
  luxury: [
    {
      name: "The Pfister Hotel",
      neighborhood: "Downtown",
      priceRange: "$$$$",
      address: "424 E Wisconsin Ave, Milwaukee, WI 53202",
      special: "Historic 1893 grand hotel",
      hotelStyle: "Milwaukee's iconic luxury landmark since 1893, blending Victorian grandeur with modern comforts. Home to a renowned Victorian art collection, full-service WELL Spa + Salon, and the 23rd-floor Blu martini bar.",
      mustTry: "A nightcap at Blu on the 23rd floor for the best skyline-and-lake view in the city, paired with a stroll through the lobby's Victorian art collection.",
      vibe: "Old-school grand hotel, marble lobby, doorman energy — Milwaukee's most photographed interior",
      insiderTip: "Book an Executive Tower room over the historic side if you want a city view from a higher floor — the tower goes up 23 stories and the lake views are the payoff.",
    },
    {
      name: "Saint Kate – The Arts Hotel",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "139 E Kilbourn Ave, Milwaukee, WI 53202",
      special: "Marcus Hotels arts-focused boutique",
      hotelStyle: "A 219-room art-immersed boutique in the heart of the downtown theater district. Artist-designed rooms, an on-site gallery, a black box theater, and a guitar-on-request program built around Milwaukee's creative scene.",
      mustTry: "Request a guitar to your room, then dinner at ARIA on the lobby level — the rotating art is part of the meal.",
      vibe: "Working art hotel — galleries off the lobby, in-room art books, performances on-site",
      insiderTip: "Walk one block to the Riverwalk and the Milwaukee Rep is steps away — Saint Kate is the closest hotel to a pre-show dinner-and-theater night downtown.",
    },
    {
      name: "Kimpton Journeyman Hotel",
      neighborhood: "Third Ward",
      priceRange: "$$$",
      address: "310 E Chicago St, Milwaukee, WI 53202",
      special: "Third Ward boutique with rooftop bar",
      hotelStyle: "A 158-room boutique on the corner of Chicago and Broadway in the Historic Third Ward — red-brick exterior, modern-living-room lobby, and Kimpton's signature pet-friendly, free-bike-loaner hospitality.",
      mustTry: "A drink and the view from The Outsider rooftop bar, followed by dinner at Tre Rivali on the ground floor.",
      vibe: "Design-forward, Third Ward, walk-everywhere — shops, galleries, the Public Market all within blocks",
      insiderTip: "Skip the car and stay here for a Third Ward weekend — the Public Market, Lakefront Brewery and the Riverwalk are all under a 10-minute walk.",
    },
    {
      name: "The Iron Horse Hotel",
      neighborhood: "Walker's Point",
      priceRange: "$$$",
      address: "500 W Florida St, Milwaukee, WI 53204",
      special: "Industrial-chic across from Harley-Davidson Museum",
      hotelStyle: "A 100-loft-style-room boutique inside a 100-year-old warehouse — exposed brick, soaring ceilings, leather, and the world's first luxury hotel built for both business travelers and motorcycle enthusiasts. Three on-site restaurants and bars.",
      mustTry: "A burger and a bourbon at Branded, then a walk across the street to the Harley-Davidson Museum.",
      vibe: "Industrial Walker's Point — leather, raw wood, motorcycle culture, but genuinely luxurious",
      insiderTip: "The patio at The Yard is one of the best summer hangs in the city — go for a drink even if you're not staying. Easy walk to the rest of Walker's Point for dinner.",
    },
  ],
  boutique: [
    {
      name: "Hotel Metro",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "411 E Mason St, Milwaukee, WI 53202",
      special: "1930s Art Deco boutique",
      hotelStyle: "Milwaukee's original boutique hotel — 63 suites inside a 1930s Art Deco building, with European-style detail, complimentary Hampton cruiser bicycles, and a rooftop deck overlooking downtown.",
      mustTry: "A suite with a fireplace and soaking tub, breakfast or a cocktail at Oggie's Kitchen & Bar downstairs.",
      vibe: "Quiet, intimate, all-suite Art Deco — the antidote to a big convention hotel",
      insiderTip: "All rooms are suites — even the entry-level category is bigger than a standard room at most hotels nearby. Borrow a cruiser bike and ride the Lakefront in 5 minutes.",
    },
    {
      name: "Drury Plaza Hotel Milwaukee Downtown",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "700 N Water St, Milwaukee, WI 53202",
      special: "Free hot breakfast + 5:30 Kickback",
      hotelStyle: "A historic 15-story conversion of the First Financial Centre with 227 rooms, an indoor pool, and Drury's well-known free hot breakfast plus the 5:30 Kickback (free snacks and drinks) every evening.",
      mustTry: "The 5:30 Kickback in the lobby — free hot snacks and drinks every evening, which more than pays for a night's stay.",
      vibe: "Classic downtown building, value-forward, surprisingly polished — a quiet favorite for return travelers",
      insiderTip: "The free breakfast and 5:30 Kickback genuinely add up — if you're a family or a couple staying multiple nights, this is the best value-per-dollar hotel downtown.",
    },
    {
      name: "Cambria Hotel Milwaukee Downtown",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "503 N Plankinton Ave, Milwaukee, WI 53203",
      special: "Modern, walkable to Fiserv Forum",
      hotelStyle: "A 132-room modern hotel with an indoor pool, fitness center, and the 414 Bar + Kitchen on the ground floor. Steps from the Riverwalk and roughly a 10-minute walk to Fiserv Forum.",
      mustTry: "A drink at the 414 Bar + Kitchen before walking over the river to a Bucks game.",
      vibe: "Clean, contemporary, no-fuss — built for travelers who want walkability without the boutique price",
      insiderTip: "Ask for a high-floor river-view room. The Riverwalk is right outside — you can walk to the Third Ward in one direction and Fiserv Forum in the other.",
    },
    {
      name: "Dubbel Dutch Hotel",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "817 N Marshall St, Milwaukee, WI 53202",
      special: "17-room historic mansion boutique",
      hotelStyle: "A 17-room boutique inside an architecturally significant 1898 double house designed by Ferry & Clas (the Milwaukee Public Library architects). Original tile, crown molding, and a secret room — all blended with contemporary art and amenities.",
      mustTry: "Book the room with the most original architectural detail and explore the building's secret room and local-artist installations.",
      vibe: "Quiet, residential, design-obsessed — staying in a turn-of-the-century Milwaukee mansion",
      insiderTip: "Self check-in by key code, no front desk lobby — it's a true small boutique. Cathedral Square Park and the Milwaukee Art Museum are both an easy walk.",
    },
  ],
  familyBusiness: [
    {
      name: "Hilton Garden Inn Milwaukee Downtown",
      neighborhood: "Downtown / Juneau Town",
      priceRange: "$$",
      address: "611 N Broadway, Milwaukee, WI 53202",
      special: "Historic Loyalty Building conversion",
      hotelStyle: "127 rooms inside the historic Loyalty Building — originally Northwestern Mutual's headquarters — with a five-story marble-and-iron atrium under a massive skylight. Rooms include fridges, microwaves, and a fitness center on-site.",
      mustTry: "Brunch at The Social American Tavern in the atrium, then a walk down Broadway into the Third Ward.",
      vibe: "Reliable Hilton experience inside a genuinely beautiful historic building",
      insiderTip: "The atrium under the skylight is worth seeing even if you're not staying. Location-wise this is one of the best mid-priced walking bases downtown — Third Ward and the Riverwalk are both close.",
    },
    {
      name: "Hyatt Regency Milwaukee",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "333 W Kilbourn Ave, Milwaukee, WI 53203",
      special: "Skywalk to the Wisconsin Center / Baird Center",
      hotelStyle: "A 481-room, 21-story convention hotel with a covered skywalk directly to the Wisconsin Center (Baird Center). 33,000 sq ft of meeting space, an on-site restaurant, and the rotating sky-lobby experience.",
      mustTry: "A drink in the lobby with the atrium view, then take the skywalk to your convention without putting on a coat.",
      vibe: "Big convention hotel — efficient, predictable, built for business travel and large groups",
      insiderTip: "If you're in town for a convention at Baird/Wisconsin Center, this is the no-brainer: weather-protected skywalk straight to the floor. Fiserv Forum is also a short walk west.",
    },
    {
      name: "Hilton Milwaukee City Center",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "509 W Wisconsin Ave, Milwaukee, WI 53203",
      special: "1927 Art Deco, skywalk to Wisconsin Center",
      hotelStyle: "729 rooms inside the 1927 Schroeder Hotel — a fully restored Art Deco landmark with skywalk access to the Wisconsin Center. Includes the Milwaukee ChopHouse, Miller Time Pub & Grill, Monarch Lounge, an indoor pool and Paradise Landing waterpark.",
      mustTry: "A steak at the Milwaukee ChopHouse downstairs, or a Wisconsin beer at the Miller Time Pub off the lobby.",
      vibe: "Grand 1927 Art Deco — biggest hotel in the city, large groups, families with kids, conventioneers",
      insiderTip: "Paradise Landing — the on-site indoor waterpark — is the single best reason to bring kids here. Most downtown hotels don't have it.",
    },
    {
      name: "Crowne Plaza Milwaukee West",
      neighborhood: "Wauwatosa",
      priceRange: "$$",
      address: "10499 W Innovation Dr, Wauwatosa, WI 53226",
      special: "West-side base near the Zoo and Medical College",
      hotelStyle: "An 8-story, 198-room west-side hotel near the Milwaukee County Zoo, Wisconsin Exposition Center, and the Medical College of Wisconsin. Indoor pool, 24-hour fitness center, and the on-site Innovation restaurant.",
      mustTry: "Stay here for a Zoo day or a Medical College visit, then drive 15 minutes east to downtown for dinner.",
      vibe: "Suburban west-side hotel — quieter, easier parking, faster freeway access",
      insiderTip: "Free self-parking (rare in downtown Milwaukee) and 15 minutes to downtown — a smart base if you're combining Milwaukee with the Zoo or a west-suburb visit.",
    },
  ],
  budget: [
    {
      name: "Aloft Milwaukee Downtown",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "1230 N Old World 3rd St, Milwaukee, WI 53212",
      special: "5-minute walk to Fiserv Forum",
      hotelStyle: "A contemporary 18-story atrium hotel with 160 rooms, 9-foot ceilings, indoor pool, 24-hour fitness center and the W XYZ lobby bar. Connected to the Deer District and a 5-minute walk to Fiserv Forum.",
      mustTry: "A pre-game drink at W XYZ Bar, then walk to the Bucks or a concert at Fiserv Forum without dealing with parking.",
      vibe: "Modern, music-forward, lobby-as-living-room — built for younger travelers and sports fans",
      insiderTip: "This is the closest mid-price hotel to Fiserv Forum and the Deer District. If you're in town for a Bucks game, a concert, or a Marquette game, you're walking back to bed.",
    },
    {
      name: "Holiday Inn Express Milwaukee Downtown",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "525 N Jefferson St, Milwaukee, WI 53202",
      special: "Free breakfast, walking distance to Third Ward",
      hotelStyle: "A value-priced downtown IHG with free hot breakfast, free Wi-Fi, and a 24-hour fitness center. Located a block north of the Historic Third Ward and a short walk to the Riverwalk and Cathedral Square.",
      mustTry: "Free breakfast in the lobby, then walk down Jefferson into the Third Ward for the rest of your day.",
      vibe: "Functional, well-located, no surprises — the value play for a walkable downtown stay",
      insiderTip: "Location is the win — you're walking distance to the Third Ward, Summerfest grounds, Cathedral Square and the Riverwalk. Skip the valet and use a nearby garage to keep the price down.",
    },
    {
      name: "Kinn Guesthouse Downtown",
      neighborhood: "Downtown / East Town",
      priceRange: "$$",
      address: "600 N Broadway, Milwaukee, WI 53202",
      special: "Boutique guesthouse with shared chef's kitchens",
      hotelStyle: "A 31-room, 5-floor boutique guesthouse that splits the difference between a hotel and a residential rental — fully furnished chef's kitchens on each floor, a rooftop event space, a speakeasy entertainment room in the basement.",
      mustTry: "Cook a quick meal in the floor's shared chef's kitchen, then walk three blocks to the Third Ward for the actual night out.",
      vibe: "Live-like-a-local boutique — independent, design-driven, ideal for stays longer than two nights",
      insiderTip: "The shared kitchens are the real value play for groups or longer stays — pick up groceries at the Milwaukee Public Market (a 5-minute walk) instead of eating every meal out.",
    },
  ],
};

const faqs = [
  {
    question: "Where should I stay in Milwaukee?",
    answer: "For most first-time visitors, stay downtown or in the Historic Third Ward — you can walk to the Riverwalk, the Public Market, Fiserv Forum and the lakefront. For iconic luxury, The Pfister Hotel. For boutique arts, Saint Kate – The Arts Hotel or the Kimpton Journeyman. For value, Drury Plaza, Cambria, Hilton Garden Inn or Holiday Inn Express. For convention travelers, the Hyatt Regency or Hilton Milwaukee City Center (both skywalked to the Wisconsin Center).",
  },
  {
    question: "What is the best luxury hotel in Milwaukee?",
    answer: "The Pfister Hotel is the definitive answer — Milwaukee's grand 1893 landmark with a renowned Victorian art collection, the WELL Spa + Salon, and the 23rd-floor Blu martini bar. For a more modern luxury experience, Saint Kate – The Arts Hotel and the Kimpton Journeyman in the Third Ward are the boutique alternatives, and The Iron Horse Hotel in Walker's Point is the industrial-chic option.",
  },
  {
    question: "What's the best boutique hotel in Milwaukee?",
    answer: "Saint Kate – The Arts Hotel (139 E Kilbourn) and Kimpton Journeyman (310 E Chicago, Third Ward) are the two most-recognized boutique stays — both art-forward, both walkable. For something smaller and more independent, Dubbel Dutch (17 rooms in a historic 1898 mansion) and Kinn Guesthouse Downtown (31 rooms with shared chef's kitchens). Hotel Metro is Milwaukee's original 1930s Art Deco boutique.",
  },
  {
    question: "Where to stay near Fiserv Forum for Bucks games?",
    answer: "Aloft Milwaukee Downtown (1230 N Old World 3rd St) is the closest mid-price hotel to the Deer District — about a 5-minute walk to Fiserv Forum. Cambria Hotel (503 N Plankinton) and Hilton Milwaukee City Center (509 W Wisconsin) are both walkable too. The Pfister and Saint Kate are roughly a 10-15 minute walk if you'd rather upgrade.",
  },
  {
    question: "Where to stay near American Family Field for Brewers games?",
    answer: "American Family Field doesn't have a hotel on-site, so the standard play is to stay downtown and Uber or drive 10 minutes west to the ballpark. Crowne Plaza Milwaukee West in Wauwatosa is the closest hotel in this guide to the ballpark (about 10 minutes by car). For game-day-then-downtown-night-out, staying downtown at the Hilton Milwaukee City Center, Hyatt Regency or Drury Plaza is the easier move.",
  },
  {
    question: "Best family-friendly hotels in downtown Milwaukee?",
    answer: "Hilton Milwaukee City Center is the top family pick — it has Paradise Landing, an on-site indoor waterpark, which most downtown hotels don't. Drury Plaza Hotel Milwaukee Downtown offers free hot breakfast, free 5:30 Kickback snacks-and-drinks, and an indoor pool — outstanding value for families. Hilton Garden Inn Milwaukee Downtown and Hyatt Regency are also reliable family choices with pools and large rooms.",
  },
];

const allHotels = [
  ...hotels.luxury,
  ...hotels.boutique,
  ...hotels.familyBusiness,
  ...hotels.budget,
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Hotels in Milwaukee 2026: Where to Stay Downtown",
    "description": "A researched guide to the best hotels in Milwaukee — iconic luxury, boutique stays, family-friendly downtown bases and value picks by neighborhood and style.",
    "image": "https://www.discover-milwaukee.com/images/milwaukee-hotels-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-06-04",
    "dateModified": "2026-06-04",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-hotels"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Hotels", "item": "https://www.discover-milwaukee.com/milwaukee-hotels" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Hotels in Milwaukee",
    "description": "15 verified hotels across downtown Milwaukee, the Third Ward, Walker's Point and Wauwatosa.",
    "numberOfItems": allHotels.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allHotels.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Hotel",
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

export default function MilwaukeeHotels() {
  const HotelCard = ({ spot }) => (
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
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.hotelStyle}</p>
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
        <title>Best Hotels in Milwaukee 2026: Where to Stay Downtown</title>
        <meta name="description" content="Best hotels in Milwaukee 2026: iconic luxury at The Pfister, boutique stays at Saint Kate and Kimpton Journeyman, family picks downtown. Book your stay." />
        <meta name="keywords" content="best hotels milwaukee, milwaukee hotels downtown, where to stay milwaukee, pfister hotel milwaukee, saint kate hotel, boutique hotels milwaukee, milwaukee accommodation" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-hotels" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Hotels in Milwaukee 2026: Where to Stay Downtown" key="og:title" />
        <meta property="og:description" content="15 verified Milwaukee hotels — iconic luxury, boutique arts, family-friendly downtown bases and value picks by neighborhood and style." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-hotels" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-hotels-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Hotels in Milwaukee — iconic luxury, boutique stays and family-friendly downtown bases." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-04T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-04T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Travel" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Hotels in Milwaukee 2026: Where to Stay Downtown" key="twitter:title" />
        <meta name="twitter:description" content="15 verified Milwaukee hotels — luxury, boutique, family-friendly and value picks by neighborhood." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-hotels-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 4, 2026 · 15 HOTELS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Hotels in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Where to stay in Milwaukee, from the iconic Pfister to boutique arts hotels to family-friendly downtown bases. Picked by neighborhood, style, and what's actually a short walk from the Bucks game, Summerfest, or a fish fry.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Hotel rates change daily — always check current pricing on the hotel's site before you book. Price tiers ($ to $$$$) are relative, not specific. Most of these stays put you in <Link href="/downtown-milwaukee" style={{ color: c.green2 }}>downtown Milwaukee</Link>, the <Link href="/third-ward-milwaukee" style={{ color: c.green2 }}>Historic Third Ward</Link>, or <Link href="/walkers-point-milwaukee" style={{ color: c.green2 }}>Walker's Point</Link> — all walkable to each other.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Iconic & Luxury</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The grande dame, the arts hotel, the Third Ward boutique, the Walker's Point warehouse — the four luxury stays that define Milwaukee.
            </p>
            {hotels.luxury.map((spot, i) => <HotelCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Modern & Boutique</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Design-forward mid-size stays — Art Deco suites, value-with-polish, and a 17-room historic mansion.
            </p>
            {hotels.boutique.map((spot, i) => <HotelCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Family & Business</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Big-box reliability — convention-adjacent towers, pools, skywalk access to the Wisconsin Center, and a west-side base for the Zoo.
            </p>
            {hotels.familyBusiness.map((spot, i) => <HotelCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Budget & Value Downtown</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The cheapest way to still be walking distance from Fiserv Forum, Summerfest and the Third Ward.
            </p>
            {hotels.budget.map((spot, i) => <HotelCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Plan the Rest of Your Trip</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do</Link>
              <Link href="/first-time-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>First-Time Visitor</Link>
              <Link href="/weekend-in-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Weekend Itinerary</Link>
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
