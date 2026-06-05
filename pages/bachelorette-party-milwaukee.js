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

const bachelorette = {
  activities: [
    { name: "Milwaukee Pedal Tavern", category: "Pedal Tavern", priceRange: "$$", address: "1110 N Old World 3rd St, Milwaukee, WI 53203", special: "The original group-bike bar crawl", activityStyle: "16-person pedal-powered party bike that rolls between bars in the Third Ward, Walker's Point and Old World 3rd Street. BYO music and your tour guide handles routing, bar entries and the whole vibe.", mustTry: "Saturday afternoon mimosa-and-brunch route through the Third Ward — the most-photographed loop in the city for a bride tribe.", vibe: "Sashes, sunglasses, group sing-alongs and stranger high-fives on every block", insiderTip: "Book the 11 a.m. or noon slot for an iced-coffee-and-mimosas crawl that wraps in time for dinner reservations — the late slots run hot and you lose the rest of the day." },
    { name: "Mini-Golf Brewery Tour by City Tours MKE", category: "Brewery + Activity", priceRange: "$$$", address: "Pickup downtown Milwaukee", special: "Putt-putt course inside each brewery", activityStyle: "A motor-coach tour that hits three Milwaukee craft breweries — and at every stop you play a hole of mini-golf set up inside the brewery while you taste. Beer, golf, beer, golf.", mustTry: "The full tasting flight at each stop and the leaderboard — most groups crown a bachelorette champion by the third brewery.", vibe: "Goofy, competitive, lightly buzzed — a great daytime activity that isn't just another bar crawl", insiderTip: "Bring a printed scorecard with the bride's name at the top and small dollar-store trophies — the brewery staff lean in hard if you make it a bit." },
    { name: "Board & Brush Creative Studio — Milwaukee", category: "Paint & Sip (Wood)", priceRange: "$$", address: "224 E Chicago St, Milwaukee, WI 53202", special: "BYOB wood-sign workshops in the Third Ward", activityStyle: "Three-hour DIY wood-sign workshop — sand, stain, stencil and paint a take-home sign while you sip whatever you brought. Private party rooms book for bachelorette groups.", mustTry: "Custom wedding-date or last-name sign as the project — the bride leaves with a piece for the new house.", vibe: "Aprons over white dresses, prosecco on the workbench, instructor walking the room", insiderTip: "Book the private room (not the open class) and pre-order the bride's design as a surprise — they'll have it set up at her station when you walk in." },
    { name: "Bay View Printing Co. — Drink & Ink", category: "Letterpress + Cocktails", priceRange: "$$", address: "2702 S Kinnickinnic Ave, Milwaukee, WI 53207", special: "Hands-on vintage letterpress workshop", activityStyle: "Roll up your sleeves on a working letterpress in a Bay View print shop while a bartender pours drinks. Each guest hand-prints a poster or card to take home — the bride gets a custom commemorative print.", mustTry: "The custom bachelorette poster — design it ahead and every guest pulls a copy on press.", vibe: "Ink-smudged hands, exposed brick, low lighting and a small-batch craft energy you won't get anywhere else in the Midwest", insiderTip: "This books out a month-plus in advance for weekends — lock it in before you book the hotel." },
    { name: "AXE MKE", category: "Axe Throwing", priceRange: "$$", address: "1924 E Kenilworth Pl, Milwaukee, WI 53202", special: "East Side axe-throwing lounge", activityStyle: "Coached axe-throwing lanes inside a converted East Side building — beer, wine and cocktails on tap, league-style scoring on the screens, all-female-coached sessions on request.", mustTry: "The 90-minute private lane reservation — long enough for everyone to actually get good before the side bets start.", vibe: "String lights, hatchets in plaid flannel, plus the bride in a veil scoring bullseyes", insiderTip: "Tell them at booking that it's a bachelorette — they'll typically put up a target with the bride's name on it for the opener." },
    { name: "WELL Spa + Salon at The Pfister Hotel", category: "Spa Day", priceRange: "$$$", address: "424 E Wisconsin Ave, Milwaukee, WI 53202", special: "Hotel spa inside the historic Pfister", activityStyle: "Full-service spa on the 23rd floor of the Pfister with massage, facials, mani/pedi and bridal-party package add-ons. Champagne, robes, the works.", mustTry: "The bridal-party group booking — mani/pedi side-by-side in the relaxation lounge with sparkling rosé.", vibe: "Quiet, plush, lakefront-view luxury — the Sunday-morning recovery the bride actually wants", insiderTip: "Book the 9 a.m. slot, then walk down to Mason Street Grill in the Pfister lobby for a long boozy brunch — same building, zero Ubers." },
    { name: "Milwaukee Kayak Co.", category: "Kayaks on the River", priceRange: "$", address: "318 S Water St, Milwaukee, WI 53204", special: "River-launched group kayak rentals", activityStyle: "Single and tandem kayaks rented straight off the Milwaukee River dock — paddle past the Third Ward, downtown skyline and out toward the lakefront. Group reservations welcome.", mustTry: "The 2-hour rental looped past Lakefront Brewery, then dock at the Milwaukee Ale House for a beer without ever leaving the boats.", vibe: "Sunshine, group photos with the skyline, and a built-in excuse for matching swimsuits", insiderTip: "Reserve a tandem for the bride so she can be photographed without paddling — the rest of the group earns the beer at the dock." },
  ],
  eat: [
    { name: "Blue's Egg", category: "Brunch", priceRange: "$$", address: "317 N 76th St, Milwaukee, WI 53213", special: "Milwaukee's most-loved brunch room", activityStyle: "Made-from-scratch brunch — stuffed hash browns, the famous beignet flight, scrambles, and a full bar with brunch cocktails. Takes large parties with notice.", mustTry: "The beignet flight (cinnamon-sugar, chocolate, fruit jam) plus a flight of mimosas for the table.", vibe: "Bright, busy, photogenic — bachelorette tables get politely loud and nobody minds", insiderTip: "Call to ask about the back room for groups of 10+, and put a card on file — walk-ins on a Saturday will lose you 90 minutes." },
    { name: "The Diplomat", category: "Brunch (Brewer's Hill)", priceRange: "$$$", address: "815 E Brady St, Milwaukee, WI 53202", special: "Chef-driven brunch on Brady", activityStyle: "Modern American brunch from chef Dane Baldwin (James Beard winner). Wood-fired pastries, intricate plates and a brunch cocktail program that's actually worth ordering from.", mustTry: "The pastry of the day, the Diplomat burger, and a French 75 — split everything family-style.", vibe: "Small, design-forward room — feels like a date but holds a bachelorette beautifully", insiderTip: "Reservations are required and they go fast — book the moment you lock the weekend." },
    { name: "Onesto", category: "Group Dinner (Italian)", priceRange: "$$$", address: "221 N Broadway, Milwaukee, WI 53202", special: "Third Ward Italian with group menus", activityStyle: "Wood-fired pizzas, hand-rolled pastas and a serious cocktail bar in the Third Ward — long communal tables in the back hold a bachelorette party without breaking pace.", mustTry: "Family-style pasta service plus the wood-fired pizzas down the center of the table.", vibe: "Exposed brick, romantic lighting, group-friendly, walkable to Pedal Tavern pickup", insiderTip: "Ask for the long banquette in the back when you reserve — it's the bachelorette table." },
    { name: "Café Benelux", category: "Brunch + Rooftop", priceRange: "$$", address: "346 N Broadway, Milwaukee, WI 53202", special: "Third Ward rooftop brunch", activityStyle: "European-style café with a full rooftop deck over the Third Ward — brunch, Belgian beer, a long mimosa menu and one of the only rooftops in the city built for daytime drinking.", mustTry: "Rooftop brunch table, the Croque Madame and a bottomless mimosa flight.", vibe: "Open-air, skyline-adjacent, sash-and-tiara friendly", insiderTip: "The rooftop is first-come on warm weekends — get there at 10 a.m. and hold the table while the rest of the group catches up." },
  ],
  drink: [
    { name: "The Outsider — Rooftop at Saint Kate", category: "Rooftop Bar", priceRange: "$$$", address: "139 E Kilbourn Ave, Milwaukee, WI 53202", special: "Downtown rooftop on the Arts Hotel", activityStyle: "Sixth-floor seasonal rooftop bar on top of the Saint Kate Arts Hotel — craft cocktails, downtown skyline, golden-hour photo wall.", mustTry: "A house-spec'd spritz at sunset on the west-facing side.", vibe: "Skyline-and-cocktail-dress territory — the bachelorette group-photo spot of the weekend", insiderTip: "Walk-ins only and the line builds by 8 p.m. — get there at 6, hold a couch, and the rest of the night follows." },
    { name: "Bryant's Cocktail Lounge", category: "Speakeasy / Cocktail Bar", priceRange: "$$", address: "1579 S 9th St, Milwaukee, WI 53204", special: "America's first cocktail lounge (since 1938)", activityStyle: "Order by mood, not by name — there's no printed menu. Tell the bartender what flavors you like and a classic-trained cocktail appears. National-press regular for a reason.", mustTry: "The Pink Squirrel (invented here) for the bride, then let the bartender freestyle the rest of the round.", vibe: "Velvet, dim red lighting, jazz, no phones at the bar — a serious bachelorette stop, not a rager", insiderTip: "Go for the first round of the night, not the last — the bartenders engage more before the room fills." },
    { name: "Lakefront Brewery", category: "Brewery Tour", priceRange: "$", address: "1872 N Commerce St, Milwaukee, WI 53212", special: "The famously funny tour", activityStyle: "Milwaukee's most-loved craft brewery tour — guides do a stand-up-comedy-grade routine, you get four pours, a souvenir glass and a token for one more beer in the beer hall after.", mustTry: "The Riverwest Stein lager plus the Friday fish fry afterward (polka band, the whole thing).", vibe: "Group-friendly, laugh-out-loud, photo-ready bachelorette stop", insiderTip: "Book the Friday 5 p.m. tour — tour ends right as fish fry starts in the next room." },
    { name: "Walker's Pint", category: "Dance Bar", priceRange: "$", address: "818 S 2nd St, Milwaukee, WI 53204", special: "Milwaukee's beloved lesbian bar (since 2001)", activityStyle: "Walker's Point neighborhood bar — DJs, dancing, drag nights, a back patio, and a famously inclusive crowd. One of the warmest bachelorette welcomes in the city.", mustTry: "Check the calendar for a drag-bingo or DJ night and build the Saturday around it.", vibe: "Loud, joyful, dance-floor-to-patio energy — bride tribes are written into the DNA here", insiderTip: "Walkable to two dozen other Walker's Point bars — make this your anchor and crawl from there." },
    { name: "This Is It!", category: "Dance Bar", priceRange: "$", address: "418 E Wells St, Milwaukee, WI 53202", special: "Downtown's historic LGBTQ+ dance bar", activityStyle: "Open since 1968 — drag shows, packed dance floor, theme nights and one of the most welcoming bachelorette rooms downtown.", mustTry: "A weekend drag show and a round of well shots — that's the assignment.", vibe: "Sequins, glitter, cheering crowds and a stage that loves a bride", insiderTip: "Tell the door it's a bachelorette — the queens regularly shout out brides in the show." },
  ],
  stay: [
    { name: "Saint Kate — The Arts Hotel", category: "Boutique Hotel", priceRange: "$$$", address: "139 E Kilbourn Ave, Milwaukee, WI 53202", special: "Arts-themed boutique with rooftop bar in-building", activityStyle: "Downtown arts hotel with curated rooms, in-house theater, the ARC art gallery and The Outsider rooftop bar upstairs. Walk to the Riverwalk, Third Ward and Old World 3rd Street.", mustTry: "Block a King Suite as the bride's room and standard kings around it on the same floor.", vibe: "Design-forward, photo-ready lobby, the most Instagrammed hotel in the city", insiderTip: "The rooftop opens to hotel guests first on busy nights — being upstairs is the access pass." },
    { name: "The Pfister Hotel", category: "Luxury Hotel", priceRange: "$$$", address: "424 E Wisconsin Ave, Milwaukee, WI 53202", special: "Milwaukee's grand 1893 hotel with WELL Spa", activityStyle: "Historic luxury hotel downtown — gilded lobby, marble staircase, in-house spa, Mason Street Grill and Blu rooftop lounge. The full-luxury bachelorette base camp.", mustTry: "Group spa morning at WELL, then Blu lounge on the 23rd floor at sunset.", vibe: "Tea-at-the-Pfister, white-robe-and-mimosa luxury", insiderTip: "Ask about the bridal-party rate when you book a block of rooms — it isn't published but it exists." },
    { name: "Iron Horse Hotel", category: "Boutique (Walker's Point)", priceRange: "$$$", address: "500 W Florida St, Milwaukee, WI 53204", special: "Group-friendly boutique in the bar district", activityStyle: "Industrial-luxe boutique in a converted Walker's Point warehouse, walkable to the densest cluster of bars and breweries in the city. Suites large enough to pre-game the group together.", mustTry: "A Yard suite — sleeps multiple, opens onto the courtyard, becomes the pre-game room.", vibe: "Leather, exposed brick, motorcycle iconography — even the bachelorette parties feel cool here", insiderTip: "The Walker's Point bar circuit is on foot from the door — zero rideshares all weekend." },
  ],
};

const sampleItinerary = [
  { time: "Friday 6:00 PM", activity: "Check in at Saint Kate, change, take the group photo in the lobby." },
  { time: "Friday 7:30 PM", activity: "Group dinner at Onesto (Third Ward) — family-style pasta and pizza." },
  { time: "Friday 10:00 PM", activity: "Bryant's Cocktail Lounge for one round, then The Outsider rooftop." },
  { time: "Saturday 10:00 AM", activity: "Rooftop brunch at Café Benelux with bottomless mimosas." },
  { time: "Saturday 1:00 PM", activity: "Milwaukee Pedal Tavern — afternoon Third Ward loop." },
  { time: "Saturday 4:00 PM", activity: "Drink & Ink at Bay View Printing Co. — hand-print the bride's poster." },
  { time: "Saturday 8:00 PM", activity: "Late dinner at Onesto or street tacos in Walker's Point." },
  { time: "Saturday 10:00 PM", activity: "Walker's Pint + This Is It! drag show — dance the night out." },
  { time: "Sunday 10:00 AM", activity: "WELL Spa at the Pfister — group mani/pedi recovery." },
  { time: "Sunday 12:30 PM", activity: "Long brunch at Blue's Egg — beignet flight, then home." },
];

const faqs = [
  { question: "Where should a bachelorette party stay in Milwaukee?", answer: "Three proven choices, depending on vibe. Saint Kate — The Arts Hotel (downtown) is the boutique-and-rooftop pick — The Outsider rooftop bar is in the building. The Pfister Hotel is the luxury-spa pick — the WELL Spa is on the 23rd floor and brunch at Mason Street Grill is in the lobby. Iron Horse Hotel in Walker's Point is the bar-district pick — you can walk to a dozen-plus bars and breweries from the door." },
  { question: "What are the best bachelorette party activities in Milwaukee?", answer: "The Milwaukee Pedal Tavern is the iconic group ride — book a daytime slot in the Third Ward. The Mini-Golf Brewery Tour by City Tours MKE is the most unique daytime option (mini-golf inside three breweries). Board & Brush in the Third Ward runs private BYOB wood-sign workshops. Bay View Printing Co.'s Drink & Ink lets your group hand-print custom posters on vintage letterpress. AXE MKE on the East Side is the move for axe-throwing-and-cocktails." },
  { question: "What are the best brunch spots for a bachelorette party in Milwaukee?", answer: "Blue's Egg on N 76th is Milwaukee's most-loved brunch — book ahead for groups. Café Benelux in the Third Ward has the rooftop deck and bottomless mimosas. The Diplomat on Brady Street is the chef-driven, James Beard pick. Mason Street Grill inside the Pfister is the right call if you booked the WELL Spa morning — no Uber required." },
  { question: "Any tips for the Milwaukee Pedal Tavern?", answer: "Book the 11 a.m. or noon slot, not the late ones — the early routes are cooler, less crowded and let you keep the rest of the day. Bring your own playlist on a Bluetooth speaker. Sashes and matching tops photograph well on the bike. Tip the driver in cash. And confirm the meet-up location the morning of, because Pedal Tavern departs from different points depending on the route." },
  { question: "Can we do a brewery tour and spa day in the same weekend?", answer: "Absolutely — that's a classic Milwaukee bachelorette move. Lakefront Brewery's famously funny tour pairs with their Friday fish fry on night one. Save Sunday morning for the WELL Spa at the Pfister — group mani/pedis in robes with sparkling rosé. They're walkable plus a 10-minute Uber apart and the contrast is the whole point." },
  { question: "Where are the best dance bars for a bachelorette in Milwaukee?", answer: "Walker's Pint in Walker's Point (Milwaukee's beloved lesbian bar since 2001) and This Is It! downtown (historic LGBTQ+ dance bar since 1968) have the warmest welcomes for bride tribes — drag shows, packed floors and dedicated bachelorette shout-outs. Both are walkable to multiple other bars, so you can build a crawl around either one." },
  { question: "How far in advance should you plan a Milwaukee bachelorette party?", answer: "Three months minimum, six is safer. Hotel blocks at Saint Kate, the Pfister and Iron Horse sell out for summer weekends. Bay View Printing Co.'s Drink & Ink books a month-plus out. The Pedal Tavern's prime Saturday slots go first. The Pfister WELL Spa group bookings need lead time. Lock the hotel and the Pedal Tavern first, then build the rest of the weekend around them." },
  { question: "What's a good Milwaukee bachelorette weekend itinerary?", answer: "Friday: arrive, dinner at Onesto in the Third Ward, cocktails at Bryant's and The Outsider rooftop. Saturday: rooftop brunch at Café Benelux, Pedal Tavern in the afternoon, Drink & Ink at Bay View Printing in the early evening, drag-show dance night at This Is It! Sunday: WELL Spa group mani/pedi at the Pfister, long brunch at Blue's Egg, home. Two and a half days, all bookable." },
];

const allActivities = [...bachelorette.activities, ...bachelorette.eat, ...bachelorette.drink, ...bachelorette.stay];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Bachelorette Party Guide 2026: Top Activities",
    "description": "A researched 2026 guide to the best Milwaukee bachelorette party activities, brunch spots, dance bars and group-friendly hotels.",
    "image": "https://www.discover-milwaukee.com/images/bachelorette-party-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-06-04",
    "dateModified": "2026-06-04",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/bachelorette-party-milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Bachelorette Party Milwaukee", "item": "https://www.discover-milwaukee.com/bachelorette-party-milwaukee" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Milwaukee Bachelorette Party Activities, Bars & Hotels",
    "description": "Researched activities, restaurants, bars and hotels for a Milwaukee bachelorette party in 2026.",
    "numberOfItems": allActivities.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allActivities.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": spot.name,
        "description": spot.activityStyle,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": spot.address.split(",")[0].trim(),
          "addressLocality": (spot.address.match(/,\s*([^,]+?),\s*WI/) || [, "Milwaukee"])[1],
          "addressRegion": "WI",
          "postalCode": (spot.address.match(/WI\s+(\d{5})/) || [, ""])[1],
          "addressCountry": "US"
        }
      }
    }))
  }
};

export default function BacheloretteMilwaukee() {
  const ActivityCard = ({ spot }) => (
    <div style={{ backgroundColor: c.cream, borderRadius: "16px", padding: "24px", marginBottom: "20px", border: `1px solid ${c.beige}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.category}</span>
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.activityStyle}</p>
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
        <title>Milwaukee Bachelorette Party Guide 2026: Top Activities</title>
        <meta name="description" content="Milwaukee bachelorette party guide 2026: pedal tavern, mini-golf brewery tour, Drink & Ink letterpress, Pfister spa, dance bars, brunch spots and group hotels." />
        <meta name="keywords" content="bachelorette party milwaukee, milwaukee bachelorette, milwaukee pedal tavern, milwaukee party planning, bachelorette brunch milwaukee, milwaukee group activities, milwaukee axe throwing, milwaukee brewery tour" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/bachelorette-party-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Bachelorette Party Guide 2026: Top Activities" key="og:title" />
        <meta property="og:description" content="The 2026 guide to Milwaukee bachelorette parties — pedal tavern, brewery tours, paint & sip, spa day, dance bars, brunch and group hotels." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/bachelorette-party-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/bachelorette-party-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee Bachelorette Party Guide — pedal tavern, brunch, spa and dance bars." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-04T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-04T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Events" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Bachelorette Party Guide 2026: Top Activities" key="twitter:title" />
        <meta name="twitter:description" content="Pedal tavern, brewery tours, paint & sip, Pfister spa, dance bars, brunch and group-friendly hotels — the 2026 Milwaukee bachelorette guide." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/bachelorette-party-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 4, 2026 · GROUP-TESTED PICKS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>The Ultimate Milwaukee Bachelorette Party Guide</h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>Pedal taverns, mini-golf brewery tours, letterpress cocktail workshops, Pfister spa mornings and the dance bars locals actually go to. A weekend the bride will actually remember — and the maid of honor can actually book.</p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Confirm hours, group capacity and bachelorette policies with each venue before you book. Planning the other side? See our <Link href="/bachelor-party-milwaukee" style={{ color: c.green2 }}>Milwaukee bachelor party guide</Link>. Pair this with <Link href="/best-brunch-milwaukee" style={{ color: c.green2 }}>Milwaukee's best brunch</Link>, the <Link href="/best-cocktail-bars-milwaukee" style={{ color: c.green2 }}>best cocktail bars</Link>, and <Link href="/milwaukee-hotels" style={{ color: c.green2 }}>where to stay</Link>.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bachelorette Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Group-tested daytime moves — pedal tavern, brewery tours, paint & sip, letterpress workshops, axe throwing and a Pfister spa morning.</p>
            {bachelorette.activities.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat & Brunch</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Brunch rooms and dinner spots built for a group of 8–15 — book ahead, reserve the back room, and split everything family-style.</p>
            {bachelorette.eat.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Rooftop cocktails, classic speakeasies, a famously funny brewery tour and the dance bars that welcome a bride tribe like family.</p>
            {bachelorette.drink.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Stay</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Boutique, luxury or bar-district base camps — three group-friendly hotels picked for the bachelorette weekend you actually want.</p>
            {bachelorette.stay.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Sample Bachelorette Weekend Itinerary</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>A copy-paste two-and-a-half-day plan you can hand to the group chat — Friday arrival through Sunday brunch.</p>
            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", border: `1px solid ${c.beige}` }}>
              {sampleItinerary.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "12px 0", borderBottom: i === sampleItinerary.length - 1 ? "none" : `1px solid ${c.beige}` }}>
                  <div style={{ minWidth: "140px", color: c.orange, fontWeight: "700", fontSize: "14px" }}>{item.time}</div>
                  <div style={{ color: c.green1, fontSize: "15px", lineHeight: 1.6 }}>{item.activity}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Plan the Rest of the Weekend</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Brunch</Link>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Cocktail Bars</Link>
              <Link href="/milwaukee-hotels" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Hotels</Link>
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
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
