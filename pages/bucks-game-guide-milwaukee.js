import React, { useState } from "react";
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

const NEIGHBORHOODS = [
  { id: "all", label: "All Areas" },
  { id: "west", label: "West Side" },
  { id: "walkers", label: "Walker's Point" },
  { id: "multi", label: "Multiple Locations" },
];

const shuttleBars = [
  {
    id: "spitfires",
    name: "Spitfire's on State",
    neighborhood: "west",
    location: "West Side",
    priceRange: "$",
    address: "5018 W State St, Milwaukee, WI 53208",
    special: "Bucks home-game shuttle",
    description: "A no-frills State Street tavern that locals treat as a pre-game launch pad. The shuttle typically rolls about an hour before tip-off and runs back to the bar after the final buzzer, so you can park once and drink without driving downtown.",
    mustTry: "A tall pour of Miller and a shot before the bus loads.",
    vibe: "Wood-paneled neighborhood bar, jersey-heavy crowd, zero pretense.",
    insiderTip: "Get there 90 minutes before tip-off — the shuttle fills on big games and they don't run a second bus.",
  },
  {
    id: "stenys",
    name: "Steny's Tavern & Grill",
    neighborhood: "walkers",
    location: "Walker's Point",
    priceRange: "$$",
    address: "800 S 2nd St, Milwaukee, WI 53204",
    special: "Buy a drink + roadie + get stamped = round-trip shuttle",
    description: "The Walker's Point staple that's been running game-day shuttles for years. The deal locals know: buy a drink at the bar, grab a roadie for the ride, get your hand stamped, and the shuttle takes you to Fiserv and brings you back. One of the easiest no-Uber game-day plans in the city.",
    mustTry: "A roadie to-go and a Steny's bloody before the bus.",
    vibe: "Big two-level sports bar, screens everywhere, packed on game nights.",
    insiderTip: "Confirm the shuttle is running for that specific game on Steny's socials — schedule can vary by opponent and tip-off time.",
  },
  {
    id: "kellys",
    name: "Kelly's Bleachers",
    neighborhood: "multi",
    location: "Bay View + Wind Lake",
    priceRange: "$",
    address: "5218 W Bluemound Rd (and other locations)",
    special: "Two shuttles every Bucks home game — free with a Kelly's customer ticket",
    description: "Kelly's runs a long-running shuttle program for Bucks home games — two buses per game, free for customers. Show up, eat, drink, board the bus, and skip the parking math entirely. The most no-brainer pre-game move on the south side.",
    mustTry: "Cheese curds and a pitcher before the first shuttle loads.",
    vibe: "Classic Wisconsin sports bar, multi-TV, families and bar-stool regulars.",
    insiderTip: "Call ahead to confirm which Kelly's location is running the shuttle for the night you're going — not every site shuttles every game.",
  },
];

const parkingLots = [
  { name: "Highland Parking Garage", price: "$25–$35", note: "Attached to Fiserv Forum — closest paid garage to the arena. Prices surge on premium opponents." },
  { name: "MECCA Garage (Wisconsin Center)", price: "$20–$30", note: "Wisconsin Center District garage, ~5-minute walk to the Deer District plaza." },
  { name: "5th & Highland Surface Lot", price: "$20–$30", note: "Open-air lot just west of the arena; quick walk to Fiserv's west entrances." },
  { name: "Park East Surface Lots", price: "$15–$25", note: "Cluster of lots north of W McKinley Ave. Cheaper, slightly longer walk, easier exit." },
  { name: "ABM 4th & Highland", price: "$20–$30", note: "Covered garage one block south of the arena, walkable to the Mecca Sports Bar entrance." },
  { name: "Pre-Book via SpotHero / ParkWhiz", price: "From ~$12", note: "Reserve a spot in a downtown garage in advance — almost always cheaper than walking up day-of." },
];

const insideFood = [
  { name: "Saz's", emoji: "🍖", description: "The Milwaukee BBQ name has multiple stands inside Fiserv Forum. Sauce-and-mozzarella sticks plus pulled pork sandwiches are the calling card." },
  { name: "AJ Bombers", emoji: "🍔", description: "The Milwaukee burger institution runs an in-arena outpost. The peanut-topped Barrie Burger is the signature." },
  { name: "Milwaukee Burger Co.", emoji: "🥓", description: "Wisconsin-grown burger chain with a stand in the arena bowl. Cheese curds and a smashed burger combo move the line." },
  { name: "Cousins Subs", emoji: "🥪", description: "Milwaukee-founded sub chain. Fast line, classic Italian or Cousins Original is the order." },
  { name: "Local Brews & Cocktails", emoji: "🍺", description: "Multiple bar carts pour Milwaukee and Wisconsin beer — including local rotators alongside the macro pours. Specialty cocktail carts open on premium nights." },
];

const nearbySpots = [
  {
    name: "Mecca Sports Bar & Grill",
    neighborhood: "Deer District (across the plaza)",
    priceRange: "$$",
    address: "1134 Vel R. Phillips Ave",
    special: "Bucks-owned sports bar, in the plaza",
    description: "The official sports bar on the Deer District plaza — owned by the Bucks ownership group. Massive video walls, full menu, and the most direct pre-game line into Fiserv Forum (literally steps from the gates).",
    mustTry: "A Wisconsin Old Fashioned at the bar before the game.",
    vibe: "Polished sports-bar build, big crowds, family-friendly until tip-off.",
    insiderTip: "Walk-ins only fill up an hour before tip-off — book a table for premium opponents.",
  },
  {
    name: "Good City Brewing — Deer District",
    neighborhood: "Deer District",
    priceRange: "$$",
    address: "333 W Juneau Ave",
    special: "Local brewery taproom on the plaza",
    description: "The Deer District outpost of one of Milwaukee's most-respected modern breweries. Glass-walled taproom on the plaza, full Good City lineup on tap, and a kitchen that goes beyond bar food.",
    mustTry: "A pint of Motto pale ale or the Risk IPA.",
    vibe: "Modern brewery taproom, group tables, less rowdy than the bigger sports bars.",
    insiderTip: "The patio looks out on the plaza — great for catching the pre-game energy without the wall-of-screens vibe.",
  },
  {
    name: "Drink Wisconsinbly Pub",
    neighborhood: "Walker's Point / Downtown",
    priceRange: "$$",
    address: "135 E National Ave",
    special: "Wisconsin-themed pub, made for game day",
    description: "Built around the Drink Wisconsinbly merch brand, this is the most on-brand spot to start a Bucks night — Wisconsin beers, supper-club cocktails, and walls of state-pride memorabilia. Easy rideshare to Fiserv.",
    mustTry: "An Old Fashioned with a brandy float and a fried cheese curd basket.",
    vibe: "High-energy theme bar, jersey nights, group-friendly.",
    insiderTip: "Start here for a longer pre-game; it's a 10-minute Uber to the Deer District, not a walk.",
  },
  {
    name: "Punch Bowl Social",
    neighborhood: "Deer District / The Avenue",
    priceRange: "$$",
    address: "The Avenue, 275 W Wisconsin Ave",
    special: "Two-floor eat-drink-play",
    description: "The big eat-drink-play box at The Avenue downtown — bowling lanes, arcade, full kitchen, big bar. Solid pre-game with a group when you want food and activity, not just a stool.",
    mustTry: "Shareable bites with a punch bowl for the table.",
    vibe: "Group hangout, loud, families before 9 p.m. and adults after.",
    insiderTip: "Reserve a lane or karaoke room in advance on big game nights — walk-ins get turned away.",
  },
  {
    name: "The Iron Horse Hotel",
    neighborhood: "Walker's Point",
    priceRange: "$$$",
    address: "500 W Florida St",
    special: "Upscale pre-game dinner",
    description: "Boutique hotel and restaurant in a converted warehouse. The most polished pre-game move when you want an actual sit-down dinner instead of bar food — and the rideshare to Fiserv is short.",
    mustTry: "A steak at Smyth or a cocktail at The Yard patio bar.",
    vibe: "Industrial-chic hotel, date-night and corporate-host energy.",
    insiderTip: "Park here, eat dinner, then Uber the 8-minute ride to Fiserv to avoid downtown game-day parking entirely.",
  },
];

const transit = [
  { name: "The Hop Streetcar", icon: "🚋", description: "Milwaukee's free downtown streetcar circulator runs the L-Line loop with stops in the Third Ward and along Wisconsin Avenue. The closest stop to Fiserv Forum is the Burns Commons stop on Ogden Ave (a roughly 10-minute walk to the arena) — useful for hotels in the Third Ward or East Side.", fare: "Free" },
  { name: "MCTS Bus", icon: "🚌", description: "Several MCTS routes serve downtown blocks near Fiserv Forum. Routes 19, 31, 33, 34 and 80 all drop within walking distance of the arena. Check the MCTS trip planner the day of your game for the closest stop to your origin.", fare: "$2.25 base fare; cashless via Umo app" },
  { name: "Rideshare (Uber / Lyft)", icon: "🚗", description: "Dedicated rideshare zones operate on game nights — follow the signage out of the arena rather than pinning a random corner. Surge pricing kicks in immediately after the final buzzer.", fare: "Surge-priced post-game" },
];

const bucksTraditions = [
  { title: "Bango the Buck", body: "The Bucks' mascot since 1977 — named after Bucks broadcaster Eddie Doucette's signature 'Bango!' call on big shots. Trampoline dunks and crowd bits all game long." },
  { title: "\"Bucks in Six\"", body: "The franchise rallying cry, popularized by Brandon Jennings in 2013 (he was wrong that year) and reborn as a Milwaukee identity badge through the championship era. You'll see it on shirts everywhere on game day." },
  { title: "Cream City Uniforms", body: "The Bucks' alternate uniforms honor Milwaukee's nickname — 'Cream City' — earned from the pale cream-colored bricks used to build much of 19th-century Milwaukee. The lettering and color scheme reference that brick heritage." },
  { title: "Deer District Watch Parties", body: "The outdoor plaza in front of Fiserv Forum hosts massive watch parties on the big screen for playoff road games — free, family-friendly, and the closest thing in Milwaukee to a stadium-scale outdoor sports moment." },
  { title: "The Cream City Cycle Brewers", body: "An informal fan-group culture has grown around the Bucks in the Fiserv Forum era — supporter sections, plaza meet-ups, and game-day biking groups that ride in from neighborhoods around the city." },
];

const insiderTips = [
  { title: "Pre-Book Parking Online", body: "Walk-up garage prices spike on premium opponents. Booking through SpotHero or ParkWhiz a day or two ahead is almost always cheaper, and often gets you a spot closer than what's left day-of." },
  { title: "Use the Shuttle Bars", body: "Spitfire's, Steny's, and Kelly's all run game-day shuttles to Fiserv Forum. Park free at the bar, drink without driving, ride round-trip — it's the cheat code locals have used for years." },
  { title: "Arrive Early for the Deer District", body: "Gates inside Fiserv typically open about 90 minutes before tip-off, but the Deer District plaza is open and active earlier. Grab a drink at Mecca or Good City on the plaza and walk in without rushing the gate scrum." },
  { title: "Sit on the Right Side", body: "Lower-bowl seats on the side opposite the team benches give a better TV-broadcast angle. The mid-level on the side benches has the best in-arena views for the price." },
  { title: "Concerts Are the Same Venue", body: "Fiserv Forum hosts the same touring acts as any major-market arena. The parking, transit, shuttle-bar, and Deer District plays all apply identically to concert night — just check whether the plaza is open for the specific event." },
  { title: "Mobile Tickets Only", body: "Bucks tickets are mobile-only via the NBA / Bucks app. Download it before you leave the house, and screenshot a backup in case of bad cell service in the gate scrum." },
  { title: "Bring a Layer", body: "Fiserv Forum runs cold even on summer nights, and the Deer District plaza is fully exposed to lake-effect wind. A light jacket or hoodie makes the pre- and post-game plaza time work in any season." },
];

const ticketTiers = [
  { name: "Upper Bowl GA", price: "From ~$30", note: "Single-game upper-deck tickets for most regular-season matchups" },
  { name: "Mid-Level / 200 Section", price: "$60–$150", note: "Best mix of price and view; baseline pricing varies by opponent" },
  { name: "Lower Bowl", price: "$150–$400+", note: "Sideline and end-court seats; premium opponents push the high end" },
  { name: "Courtside / Premium", price: "$500–$2,000+", note: "Limited inventory; usually moved on the secondary market" },
  { name: "Bucks Season Memberships", price: "Varies", note: "Full-season and half-season packs via Bucks.com" },
  { name: "Group Tickets (20+)", price: "Varies", note: "Discounted group rates available through the Bucks group sales team" },
];

const overviewStats = [
  { label: "Venue", value: "Fiserv Forum · 1111 Vel R. Phillips Ave" },
  { label: "Capacity", value: "~17,500 for basketball; ~18,000+ for concerts" },
  { label: "Opened", value: "August 2018 — replaced the old BMO Harris Bradley Center" },
  { label: "Plaza", value: "The Deer District — vendors, viewing parties, bars" },
  { label: "Parking", value: "Highland Garage from ~$25; pre-book for less" },
  { label: "Shuttle Bars", value: "Spitfire's · Steny's · Kelly's Bleachers" },
  { label: "Transit", value: "The Hop streetcar nearby + MCTS routes 19/31/33/34/80" },
  { label: "Tickets from", value: "~$30 upper bowl on standard regular-season nights" },
];

const faqs = [
  { q: "Where do I park for Bucks games?", a: "The closest paid option is the Highland Parking Garage attached to Fiserv Forum (typically $25–$35). Other strong picks within a 5-minute walk: the MECCA Garage at the Wisconsin Center, the 5th & Highland surface lot, the ABM 4th & Highland garage, and the Park East surface lots north of W McKinley Ave. For best price, pre-book via SpotHero or ParkWhiz a day or two ahead of the game." },
  { q: "How much is parking at Fiserv Forum?", a: "Walk-up rates at the closest Highland Garage typically run $25–$35 per game, surging higher for premium opponents and concerts. Surface lots and slightly farther garages run $15–$30. Pre-booked online spots through SpotHero or ParkWhiz can drop into the $12–$20 range for downtown garages within walking distance." },
  { q: "Are there shuttles to Fiserv Forum?", a: "Yes — three Milwaukee bars are known for running Bucks home-game shuttles: Spitfire's on State (5018 W State St) on the west side, Steny's Tavern & Grill (800 S 2nd St) in Walker's Point, and Kelly's Bleachers (multiple locations) which runs two free shuttles per home game for customers. Schedules vary by game — confirm on each bar's socials before you head over." },
  { q: "What's the Deer District?", a: "The Deer District is the outdoor plaza on the north side of Fiserv Forum, in the blocks bounded by Highland, Vel R. Phillips and Juneau Avenues. It hosts pre-game vendors, restaurants and bars (Mecca Sports Bar, Good City Brewing, Punch Bowl Social), free outdoor playoff-game watch parties on the big screen, and other concerts and events year-round. It's free to enter — only the arena itself requires a ticket." },
  { q: "Best bars to pre-game before a Bucks game?", a: "On the Deer District plaza itself: Mecca Sports Bar (Bucks-owned, steps from the gates) and Good City Brewing's Deer District taproom. Walking distance downtown: Drink Wisconsinbly Pub and Punch Bowl Social at The Avenue. For Walker's Point sit-down pre-game: The Iron Horse Hotel. To skip parking entirely, use one of the shuttle bars (Spitfire's, Steny's, Kelly's)." },
  { q: "What food is at Fiserv Forum?", a: "Fiserv Forum runs a strong local-vendor lineup inside the arena: Saz's (Milwaukee BBQ), AJ Bombers (the Milwaukee burger institution), Milwaukee Burger Co., and Cousins Subs are the headline Milwaukee names. Local breweries pour at multiple bar carts alongside macro beer and a full cocktail program." },
  { q: "Best restaurants near Fiserv Forum?", a: "On the plaza: Mecca Sports Bar and Good City Brewing Deer District for sit-down with screens; Punch Bowl Social for eat-drink-play. Just outside the plaza: Drink Wisconsinbly Pub (Wisconsin theme bar) and The Iron Horse Hotel (upscale dinner in Walker's Point). For broader Milwaukee dining, see our Milwaukee restaurants guide." },
  { q: "Can I take MCTS to a Bucks game?", a: "Yes — MCTS bus routes 19, 31, 33, 34, and 80 all drop within walking distance of Fiserv Forum. Base fare is $2.25, payable cashless via the Umo app. Check the MCTS trip planner for the closest stop to your origin and game-day schedule." },
  { q: "Does The Hop streetcar go to Fiserv Forum?", a: "Not directly to the arena, but the Hop's free L-Line loop stops at Burns Commons on Ogden Avenue, which is roughly a 10-minute walk to Fiserv Forum. It's a free option for hotels in the Third Ward, downtown, or East Side that want to skip parking and rideshare." },
  { q: "Where can I park free near Fiserv Forum?", a: "There's no reliable free parking immediately around the arena on game nights — meters and surface lots are paid, and street parking in surrounding blocks is restricted or game-day metered. The closest thing to free parking is using one of the shuttle bars (Spitfire's, Steny's, Kelly's Bleachers) — park free at the bar and ride round-trip." },
  { q: "When do gates open for Bucks games?", a: "Fiserv Forum gates typically open 90 minutes before tip-off for regular-season games, and earlier for premium opponents, playoff games, and select theme nights. The Deer District plaza opens earlier than the arena itself. Check the Bucks app or your mobile ticket for the exact gate-open time for your game." },
  { q: "Is Fiserv Forum the same venue as the old Bradley Center?", a: "No — Fiserv Forum opened in August 2018, replacing the BMO Harris Bradley Center, which was demolished. Fiserv Forum is a newer, larger building, located one block north of where the Bradley Center stood, and it anchors the Deer District plaza that didn't exist with the old arena." },
  { q: "What about concerts at Fiserv Forum — same arena?", a: "Yes — Fiserv Forum hosts major touring acts on the same dates the Bucks are on the road. The parking, shuttle-bar, Deer District and transit options all apply identically to concert nights. The plaza programming can differ — Deer District viewing parties are tied to Bucks games, not concerts." },
];

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#deer-district", label: "Deer District" },
  { href: "#tickets", label: "Tickets" },
  { href: "#parking", label: "Parking" },
  { href: "#shuttles", label: "Shuttle Bars" },
  { href: "#transit", label: "Transit" },
  { href: "#food", label: "Inside Fiserv" },
  { href: "#nearby", label: "Nearby Bars" },
  { href: "#traditions", label: "Traditions" },
  { href: "#concerts", label: "Concerts" },
  { href: "#tips", label: "Insider Tips" },
  { href: "#faq", label: "FAQ" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "Milwaukee Bucks Game Day Guide 2026: Fiserv Forum, Deer District, Parking, Shuttle Bars & More",
    description: "The complete 2026 guide to a Bucks game at Fiserv Forum and the Deer District — tickets, parking, the shuttle bars locals use, transit, food inside the arena, nearby bars, and insider tips.",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    mainEntityOfPage: "https://www.discover-milwaukee.com/bucks-game-guide-milwaukee",
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Bucks Game Day Guide Milwaukee", item: "https://www.discover-milwaukee.com/bucks-game-guide-milwaukee" },
    ],
  },
  place: {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Fiserv Forum",
    description: "Home of the Milwaukee Bucks and the anchor of the Deer District entertainment plaza in downtown Milwaukee. Hosts NBA games, major concerts and arena events.",
    image: "https://www.discover-milwaukee.com/images/bucks-game-guide-og.svg",
    url: "https://www.discover-milwaukee.com/bucks-game-guide-milwaukee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1111 Vel R. Phillips Ave",
      addressLocality: "Milwaukee",
      addressRegion: "WI",
      postalCode: "53203",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "Place",
      name: "Deer District",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1101 N Vel R. Phillips Ave",
        addressLocality: "Milwaukee",
        addressRegion: "WI",
        postalCode: "53203",
        addressCountry: "US",
      },
    },
  },
};

export default function BucksGameGuideMilwaukee() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredShuttles = selectedNeighborhood === "all" ? shuttleBars : shuttleBars.filter((b) => b.neighborhood === selectedNeighborhood);

  return (
    <>
      <Head>
        <title>Bucks Game Day Guide 2026: Fiserv Forum, Parking & Shuttle Bars</title>
        <meta name="description" content="Milwaukee Bucks game day at Fiserv Forum — parking prices, the shuttle bars locals use (Spitfire's, Steny's, Kelly's), Deer District, food, nearby bars & tips." />
        <meta name="keywords" content="bucks game guide milwaukee, fiserv forum parking, bucks shuttle bars, deer district milwaukee, milwaukee bucks tickets, bars near fiserv forum, fiserv forum concerts, spitfires bucks shuttle, stenys shuttle bucks, kellys bleachers bucks shuttle" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/bucks-game-guide-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Bucks Game Day Guide 2026: Fiserv Forum & Deer District" key="og:title" />
        <meta property="og:description" content="Everything for a Bucks game at Fiserv Forum and the Deer District — parking, the shuttle bars locals use, food inside the arena, and where to eat and drink before and after." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/bucks-game-guide-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/bucks-game-guide-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee Bucks Game Day Guide — Fiserv Forum, Deer District, Parking & Shuttle Bars." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-04T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-04T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Sports" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Bucks Game Day Guide 2026: Fiserv Forum & Deer District" key="twitter:title" />
        <meta name="twitter:description" content="Full Bucks game-day guide — parking, the shuttle bars locals use, food inside Fiserv, nearby bars, and insider tips." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/bucks-game-guide-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.place) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 4, 2026 · GAME DAY GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Milwaukee Bucks Game Day Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              <strong>Everything for a Bucks game at Fiserv Forum and the Deer District</strong> — parking, the shuttle bars locals use, food inside the arena, and where to eat and drink before and after.
            </p>
          </div>
        </header>

        <nav style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: c.green1,
          borderBottom: `2px solid ${c.green2}`,
          padding: "12px 16px",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}>
          <div style={{ display: "flex", gap: "8px", maxWidth: "1000px", margin: "0 auto", whiteSpace: "nowrap" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: c.cream,
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(244,162,97,0.15)",
                  border: `1px solid rgba(244,162,97,0.3)`,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "880px", margin: "0 auto", padding: "40px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Heads up:</strong> Shuttle schedules, parking prices, and Deer District programming shift by opponent and event. Confirm with each bar's socials and the Bucks app on game day before you head out.
            </p>
          </div>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Milwaukee Bucks Game Day Guide</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Featured</dt>
              <dd style={{ color: "#444", margin: 0 }}>8 game day verified across Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Spitfire's on State, Steny's Tavern & Grill, Kelly's Bleachers, Highland Parking Garage, MECCA Garage (Wisconsin Center)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Coverage</dt>
              <dd style={{ color: "#444", margin: 0 }}>Spans multiple Milwaukee neighborhoods — see body for details</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Best for</dt>
              <dd style={{ color: "#444", margin: 0 }}>Game day in Milwaukee</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="overview" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>At a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Fiserv Forum + the Deer District plaza make up the Bucks game-day footprint — and the same playbook works for concert night.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "12px" }}>
              {overviewStats.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>What you're walking into</h3>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
                Fiserv Forum opened in August 2018 as the new home of the Milwaukee Bucks, replacing the old BMO Harris Bradley Center one block south. Around it, the Bucks ownership group built the Deer District — an outdoor entertainment plaza with bars, restaurants, vendors and a giant video board for outdoor watch parties. Game day is the arena plus the plaza. The same arena hosts the city's biggest touring concerts the rest of the year, and most of this guide (parking, shuttles, food, nearby bars) works identically for concert nights. The Bucks play in <Link href="/downtown-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>downtown Milwaukee</Link>, walkable to the <Link href="/third-ward-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>Third Ward</Link> for a post-game dinner or drink.
              </p>
            </div>
          </section>

          <section id="deer-district" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Deer District</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The outdoor plaza that wraps the north side of Fiserv Forum — the most distinctive thing about a Bucks game-day in Milwaukee, and the closest the city gets to a stadium-scale outdoor sports moment.
            </p>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "22px", borderRadius: "16px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>📍 What it is</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                A free, open-to-the-public outdoor plaza in the blocks bounded by Highland, Vel R. Phillips and Juneau Avenues, anchored by a giant video board on the north face of the arena. Built by the Bucks ownership group alongside Fiserv Forum and now home to restaurants, bars, residential and office buildings around the perimeter.
              </p>
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "22px", borderRadius: "16px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>Game-day watch parties</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                The plaza's signature programming. The Bucks broadcast playoff road games — and select regular-season nights — on the big screen, free to watch in the plaza. The 2021 championship run turned this into a national-television image of Milwaukee for a reason.
              </p>
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "22px", borderRadius: "16px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>Bars + restaurants on the plaza</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Mecca Sports Bar (Bucks-owned, steps from the arena gates), Good City Brewing's Deer District taproom, Drink Wisconsinbly Pub nearby, and Punch Bowl Social a short walk away at The Avenue. See the <a href="#nearby" style={{ color: c.green2, fontWeight: "600" }}>Nearby Bars</a> section below for full picks.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Year-round events</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Beyond Bucks games, the Deer District hosts free outdoor events, concerts, festivals and seasonal programming. It's a destination on non-game nights too — and a quick stop from the rest of <Link href="/downtown-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>downtown Milwaukee</Link>.
              </p>
            </div>
          </section>

          <section id="tickets" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Tickets & Seating</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bucks tickets are mobile-only via the Bucks / NBA app. Prices swing hard by opponent — Lakers and Warriors nights run multiples of what a Tuesday-in-January game costs.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "24px" }}>
              {ticketTiers.map((t) => (
                <div key={t.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>{t.name}</p>
                  <p style={{ fontSize: "22px", fontWeight: "900", color: c.green1, margin: "0 0 4px" }}>{t.price}</p>
                  <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>Where to buy</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Primary tickets come through Bucks.com and Ticketmaster. The Bucks also run season memberships, half-season packs, and a group-sales program (20+ tickets). Secondary-market resale comes through SeatGeek, StubHub and Vivid Seats — almost always cheaper than face value for non-premium opponents.
              </p>
            </div>
          </section>

          <section id="parking" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              There's no reliable free parking around the arena on game nights. Either pre-book online, walk a few blocks further out, or skip parking entirely with a shuttle bar.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "24px" }}>
              {parkingLots.map((lot) => (
                <div key={lot.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>{lot.name}</p>
                  <p style={{ fontSize: "20px", fontWeight: "900", color: c.green1, margin: "0 0 8px" }}>{lot.price}</p>
                  <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.5 }}>{lot.note}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: c.yellow, padding: "16px 18px", borderRadius: "12px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                <strong>Pre-book the smart move:</strong> SpotHero and ParkWhiz both list garages within walking distance for less than walk-up rates. Book the morning of the game and screenshot the confirmation — saves both the cost and the scramble of finding an open garage 30 minutes before tip.
              </p>
            </div>
          </section>

          <section id="shuttles" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Shuttle Bars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              The Milwaukee cheat code: three local bars run game-day shuttles to Fiserv Forum. Park free at the bar, drink without driving, ride round-trip to the arena. Filter by neighborhood.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
              {NEIGHBORHOODS.map((n) => {
                const active = selectedNeighborhood === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => setSelectedNeighborhood(n.id)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      border: active ? `2px solid ${c.green1}` : `2px solid ${c.beige}`,
                      backgroundColor: active ? c.green1 : "white",
                      color: active ? c.cream : c.green1,
                      fontWeight: "700",
                      fontSize: "13px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {n.label}
                  </button>
                );
              })}
            </div>
            {filteredShuttles.length === 0 ? (
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: "#666", margin: 0, fontSize: "15px" }}>No shuttle bars in this area. Try another filter.</p>
              </div>
            ) : (
              filteredShuttles.map((bar) => (
                <div key={bar.id} style={{
                  backgroundColor: "white",
                  border: `1px solid ${c.beige}`,
                  borderLeft: `5px solid ${c.orange}`,
                  borderRadius: "16px",
                  padding: "22px",
                  marginBottom: "16px",
                }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "baseline", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{bar.name}</h3>
                    <span style={{ color: c.green2, fontSize: "13px", fontWeight: "700" }}>· {bar.location} · {bar.priceRange}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: c.orange, fontWeight: "700", letterSpacing: "0.5px", margin: "0 0 8px", textTransform: "uppercase" }}>📍 {bar.address}</p>
                  <div style={{ backgroundColor: c.cream, padding: "10px 14px", borderRadius: "8px", marginBottom: "12px" }}>
                    <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", margin: 0 }}>The shuttle deal: {bar.special}</p>
                  </div>
                  <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: "0 0 12px" }}>{bar.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px" }}>
                      <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase" }}>Must Try</p>
                      <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{bar.mustTry}</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "10px", borderRadius: "8px" }}>
                      <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase" }}>Vibe</p>
                      <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{bar.vibe}</p>
                    </div>
                  </div>
                  <div style={{ borderTop: `1px solid ${c.beige}`, paddingTop: "10px" }}>
                    <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}><strong style={{ color: c.green1 }}>Insider tip:</strong> {bar.insiderTip}</p>
                  </div>
                </div>
              ))
            )}
            <div style={{ marginTop: "20px", backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Want to make a night of the shuttle bar? Pair the pre-game with our <Link href="/milwaukee-sports-bars" style={{ color: c.green2, fontWeight: "600" }}>Milwaukee sports bars</Link> guide or grab a meal first at one of our <Link href="/best-burgers-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>top burger spots</Link>.
              </p>
            </div>
          </section>

          <section id="transit" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Getting There — Transit</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              For downtown-based visitors, transit is often easier than driving — and The Hop is free.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {transit.map((t) => (
                <div key={t.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "26px" }}>{t.icon}</span>
                    <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: 0 }}>{t.name}</h3>
                  </div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 10px", textTransform: "uppercase" }}>Fare: {t.fare}</p>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{t.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="food" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Food & Drink Inside Fiserv</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Fiserv Forum leans heavily on Milwaukee names for the in-arena food program — Saz's, AJ Bombers, Milwaukee Burger Co. and Cousins Subs all anchor the bowl.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {insideFood.map((f) => (
                <div key={f.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "26px" }}>{f.emoji}</span>
                    <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: 0 }}>{f.name}</h3>
                  </div>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{f.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Want a deeper Milwaukee food dive? See our <Link href="/best-burgers-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>best burgers in Milwaukee</Link> guide for the full AJ Bombers / Milwaukee Burger Co. story, and our <Link href="/milwaukee-breweries" style={{ color: c.green2, fontWeight: "600" }}>Milwaukee breweries</Link> guide for what's pouring at the local bar carts.
              </p>
            </div>
          </section>

          <section id="nearby" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Restaurants & Bars Near Fiserv Forum</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              On the Deer District plaza and a short walk or rideshare beyond — the picks that work for a pre-game meal, a quick drink, or a post-game wind-down.
            </p>
            {nearbySpots.map((spot) => (
              <div key={spot.name} style={{
                backgroundColor: "white",
                border: `1px solid ${c.beige}`,
                borderLeft: `5px solid ${c.green2}`,
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "14px",
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "baseline", marginBottom: "6px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
                  <span style={{ color: c.green2, fontSize: "13px", fontWeight: "700" }}>· {spot.neighborhood} · {spot.priceRange}</span>
                </div>
                <p style={{ fontSize: "12px", color: c.orange, fontWeight: "700", letterSpacing: "0.5px", margin: "0 0 8px", textTransform: "uppercase" }}>📍 {spot.address}</p>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "700", margin: "0 0 10px", fontStyle: "italic" }}>{spot.special}</p>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: "0 0 10px" }}>{spot.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginBottom: "10px" }}>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "8px 10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "2px", textTransform: "uppercase" }}>Must Try</p>
                    <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "8px 10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "2px", textTransform: "uppercase" }}>Vibe</p>
                    <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.vibe}</p>
                  </div>
                </div>
                <div style={{ borderTop: `1px solid ${c.beige}`, paddingTop: "8px" }}>
                  <p style={{ fontSize: "12px", color: "#555", margin: 0, lineHeight: 1.6 }}><strong style={{ color: c.green1 }}>Insider tip:</strong> {spot.insiderTip}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="traditions" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Bucks Traditions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Context for what you'll see, hear and read on a Bucks night.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {bucksTraditions.map((t) => (
                <div key={t.title} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 8px" }}>{t.title}</h4>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="concerts" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Concerts at Fiserv Forum</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The same arena hosts Milwaukee's biggest touring acts when the Bucks are on the road — and almost every play in this guide works identically for a concert night.
            </p>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "22px", borderRadius: "16px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>Same parking, same shuttles, same plaza</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                The Highland Garage, MECCA Garage, and surrounding surface lots all serve concert nights with similar pricing. SpotHero and ParkWhiz pre-booking is just as effective. The Deer District plaza is typically open for pre-show drinks and food at Mecca, Good City and the surrounding restaurants — though plaza programming (watch parties, vendors) is keyed to Bucks games, not concerts.
              </p>
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "22px", borderRadius: "16px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>What changes</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Concert capacity is higher than basketball capacity (the arena reconfigures with floor seating), so the bowl runs fuller and gate lines hit harder. Tour-specific bag policies sometimes override the arena's standard rules — check the artist's tour page before you go. The in-arena food program runs but with reduced stand count depending on the tour.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Going to a concert?</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Use the same shuttle-bar play (Spitfire's, Steny's, Kelly's) for concert night — confirm with each bar that the shuttle is running for that specific show date, since they're calibrated to Bucks game schedules first.
              </p>
            </div>
          </section>

          <section id="tips" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Insider Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The plays locals use to make a Bucks night work — parking, plaza time, seating, tickets, and gear.
            </p>
            {insiderTips.map((t) => (
              <div key={t.title} style={{
                backgroundColor: "white",
                border: `1px solid ${c.beige}`,
                borderLeft: `5px solid ${c.green2}`,
                borderRadius: "12px",
                padding: "16px 18px",
                marginBottom: "12px",
              }}>
                <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 6px" }}>{t.title}</h4>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </section>

          <section id="faq" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Tap a question to expand. Covers parking, shuttles, Deer District, food, transit, and game-night logistics.
            </p>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{
                  backgroundColor: "white",
                  border: `1px solid ${c.beige}`,
                  borderRadius: "12px",
                  marginBottom: "10px",
                  overflow: "hidden",
                }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      backgroundColor: isOpen ? c.cream : "white",
                      border: "none",
                      padding: "16px 18px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: c.green1,
                    }}
                  >
                    <span>{f.q}</span>
                    <span style={{
                      fontSize: "20px",
                      color: c.orange,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.15s",
                      fontWeight: "300",
                    }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px", color: "#444", fontSize: "14px", lineHeight: 1.7, borderTop: `1px solid ${c.beige}` }}>
                      <p style={{ margin: "12px 0 0" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Sports & Game Day</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/brewers-game-guide-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Brewers Game Guide</Link>
              <Link href="/packers-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Packers Bars Milwaukee</Link>
              <Link href="/milwaukee-sports-bars" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Sports Bars</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Bucks game-day tips, new restaurants, events, and insider picks every Wednesday.</p>
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
