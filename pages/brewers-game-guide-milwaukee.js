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

const BAR_FILTERS = [
  { id: "all", label: "All Bars" },
  { id: "shuttle", label: "Shuttle Bars" },
  { id: "walk", label: "Walk-To" },
  { id: "tailgate", label: "Tailgate-Style" },
];

const overviewStats = [
  { label: "Venue", value: "American Family Field" },
  { label: "Address", value: "1 Brewers Way, Milwaukee, WI 53214" },
  { label: "Capacity", value: "~41,900" },
  { label: "Mascot", value: "Bernie Brewer (slide behind LF)" },
  { label: "Lots open", value: "3 hrs before first pitch (2.5 hrs for 6:15/6:40 weekday)" },
  { label: "Gates open", value: "90 minutes before first pitch" },
  { label: "Parking from", value: "$15 weekday general (advance)" },
  { label: "Season", value: "Opening Day Thu Mar 26, 2026 vs. White Sox" },
];

const parkingTiers = [
  { lot: "General — Weekday (Mon–Thu)", price: "$15", note: "Advance pricing; drive-up runs $5–$10 higher." },
  { lot: "General — Fri / Sat / Sun", price: "$20", note: "Same tier applies to all Cubs games regardless of weekday." },
  { lot: "General — Opening Day", price: "$30", note: "Advance purchase effectively required." },
  { lot: "Preferred — Weekday", price: "$25", note: "Closer to the ballpark; +$10 over general." },
  { lot: "Preferred — Fri / Sat / Sun", price: "$30", note: "Same Cubs-game rule applies here." },
  { lot: "Preferred — Opening Day", price: "$40", note: "Sells out first on the biggest dates." },
];

const tailgateRules = [
  "Tailgating is allowed in every Brewers lot except employee lots and the rideshare lot.",
  "Only ticketholders are permitted in the parking lots.",
  "Every vehicle must occupy a single purchased space — no saving spots for friends arriving later.",
  "Tailgating must end 30 minutes after first pitch — pack up and head in.",
  "Only state-approved gas / propane units with shut-off fuel valves and self-contained charcoal units are allowed. No open flames, no wood fires (fire marshal rule).",
  "Glass containers, kegs and unsealed alcohol are not allowed inside the ballpark.",
];

const ticketTiers = [
  { name: "Standing Room / Cheapest", price: "From ~$8–$10", note: "Resale lows; bring a phone with mobile entry." },
  { name: "Terrace Reserved", price: "Entry-level seated", note: "Upper deck. Lowest priced actual seat, full park views." },
  { name: "Loge Outfield / Bleachers", price: "Mid-range", note: "Bleacher Section in left field is the rowdy fan-favorite zone — closest to Bernie." },
  { name: "Field Outfield / Field Box", price: "Premium", note: "Field level around the foul lines and outfield corners." },
  { name: "Field Infield / Diamond Box", price: "Top-tier", note: "Closest to the action — behind home, dugouts and on the lines." },
  { name: "Selig Experience & Ballpark Tour", price: "Separate ticket", note: "Bud Selig multimedia exhibit + behind-the-scenes ballpark tour on non-game days." },
];

const food = [
  { name: "Fair Foods Stand", location: "New for 2026", priceRange: "$$", description: "A new 2026 concession celebrating Wisconsin State Fair classics on a ballpark menu.", mustTry: "Deep-fried kringle, corn dogs, cream puffs, and the new nachos-on-a-stick.", vibe: "State-fair-on-a-game-day-night.", insiderTip: "Lines stack up between innings — grab during a pitching change." },
  { name: "K&L's BBQ", location: "The Alley · New for 2026", priceRange: "$$", description: "Authentic smokehouse-style BBQ joining The Alley concourse stretch in 2026.", mustTry: "Smoked brisket and pulled pork sandwiches.", vibe: "Smoke-and-sauce backyard energy under a ballpark roof.", insiderTip: "Pair with a local Wisconsin lager from the same concourse." },
  { name: "Bebe Zito (3rd Street Market Hall Annex)", location: "Expanded 2026", priceRange: "$$", description: "The Bay View favorite expands into AmFam Field's 3rd Street Market Hall Annex with chicken sandwiches, tenders, and fries.", mustTry: "Signature 'chicken ice cream' (yes, really).", vibe: "Chef-driven counter inside a sit-down food-hall format.", insiderTip: "The annex is one of the only places at the park you can sit, eat and still see a screen." },
  { name: "Topped Dog Stands", location: "Multiple concourses", priceRange: "$", description: "Loaded hot dogs with rotating regional toppings around the park.", mustTry: "The new Al Pastor Topped Dog — pineapple, salsa verde, onions.", vibe: "Classic ballpark hot dog, leveled up.", insiderTip: "Faster lines than the main concession stands when the game's on." },
  { name: "Chicken Stands", location: "Multiple concourses", priceRange: "$", description: "Sandwich and tender stands across the concourse, with the new 2026 menu addition.", mustTry: "The Sticky Maple Chicken Sandwich — new for 2026.", vibe: "Quick, hot, hand-held.", insiderTip: "Pair with cheese curds from an adjacent stand for the full Wisconsin plate." },
  { name: "Field Level Cheese Steak Kiosk", location: "Field Level · New 2026", priceRange: "$", description: "Cheese steak window added for the 2026 season.", mustTry: "Classic Philly-style with onions, peppers and provolone.", vibe: "Late-game grab-and-go.", insiderTip: "Best between innings 6 and 7 — line drops, food is hottest." },
  { name: "Wisconsin Craft Beer Stands", location: "Across the park", priceRange: "$$", description: "Local breweries rotate on draft alongside the macro options — look for Lakefront, Third Space, Eagle Park, Good City and more.", mustTry: "Whatever Milwaukee brewery is featured on the rotating taps that night.", vibe: "Drink the city. Cold pour, baseball view.", insiderTip: "Bigger pours and rotating local taps usually live at the outfield bar stations." },
];

const bars = [
  { name: "Kelly's Bleachers", category: "shuttle", location: "5218 W Bluemound Rd · West of the ballpark", priceRange: "$$", address: "5218 W Bluemound Rd, Milwaukee, WI 53208", special: "Free shuttle with food/drink purchase. $20 parking with a $20 bar voucher.", description: "The most reliable Brewers-shuttle bar on Bluemound. Sports-bar food, big crowds, no-nonsense pre-game.", mustTry: "Burger and a beer before the gates open.", vibe: "Pre-game sports bar built for game day.", insiderTip: "Get there 90+ minutes pre-game — the lot and the shuttle line both fill fast on weekend games." },
  { name: "Steny's Tavern & Grill", category: "shuttle", location: "800 S 2nd St · Walker's Point", priceRange: "$$", address: "800 S 2nd St, Milwaukee, WI 53204", special: "Complimentary shuttle with food/drink + arm stamp. First shuttle 1 hour before first pitch, then every 20–30 min. Return shuttles start top of the 8th.", description: "The Walker's Point pre-game move. Big patio, big bar, easy walk from downtown hotels.", mustTry: "A bloody and a brat before the bus pulls up.", vibe: "Walker's Point game-day energy without leaving the neighborhood.", insiderTip: "Park downtown, walk over, ride the shuttle — you skip both ballpark lots and post-game traffic." },
  { name: "McGinn's Sports Bar", category: "shuttle", location: "5901 W Bluemound Rd · West side", priceRange: "$$", address: "5901 W Bluemound Rd, Milwaukee, WI 53213", special: "Free Brewers shuttle for game-day customers.", description: "Long-running west-side sports bar with one of the dependable Brewers shuttles on Bluemound.", mustTry: "Wisconsin cheese curds and a tall draft.", vibe: "Neighborhood sports bar, decades-deep regulars.", insiderTip: "Quieter pre-game vibe than Kelly's — same shuttle convenience." },
  { name: "Jackson's Blue Ribbon Pub", category: "shuttle", location: "11302 W Bluemound Rd · Wauwatosa", priceRange: "$$", address: "11302 W Bluemound Rd, Wauwatosa, WI 53226", special: "Free shuttle to AmFam Field for paying customers on most game days.", description: "Wauwatosa pub option for west-suburban fans who want to skip the parking lot altogether.", mustTry: "Friday fish fry on a Brewers Friday — see our fish fry guide.", vibe: "Suburban pub with serious Brewers loyalty.", insiderTip: "Pair with our Friday fish fry list for the rare Brewers + fish fry double-header." },
  { name: "Sobelman's Pub & Grill (St. Paul Ave)", category: "walk", location: "1900 W St Paul Ave · Menomonee Valley", priceRange: "$$", address: "1900 W St Paul Ave, Milwaukee, WI 53233", special: "Legendary bloody marys. Walkable from downtown; rideshare to the park.", description: "Milwaukee's most famous bloody mary. Pre-game brunch or a post-game late lunch.", mustTry: "The bloody — garnished with a slider, cheese curds, brussels sprouts and a brat.", vibe: "Loud, crowded, photogenic. The Milwaukee bloody pilgrimage.", insiderTip: "Get the bloody, then rideshare straight to the park. The bloody is the meal." },
  { name: "AJ Bombers", category: "walk", location: "1247 N Water St · Downtown", priceRange: "$$", address: "1247 N Water St, Milwaukee, WI 53202", special: "Downtown burger joint — easy hotel walk, peanut shells on the floor.", description: "Downtown burger spot beloved by Brewers fans for a pre-game burger before catching a rideshare west.", mustTry: "The Barrie Burger with peanut butter.", vibe: "Order-at-the-counter burger bar with retro sports energy.", insiderTip: "Skip the ballpark line by eating downtown — rideshare hits the park in 10–12 minutes." },
  { name: "Tailgate Lots — General + Preferred", category: "tailgate", location: "Around American Family Field", priceRange: "$15–$40", address: "1 Brewers Way, Milwaukee, WI 53214", special: "Open 3 hours before first pitch (2.5 hours for 6:15/6:40 weekday). Tailgating allowed in every Brewers lot except employee + rideshare lots.", description: "The classic Milwaukee move: skip the bar, run your own tailgate in the lot. Bring a grill, bring brats, bring friends.", mustTry: "A Klement's brat off your own grill before walking into a sausage race.", vibe: "Sprawling, charcoal-and-propane parking-lot party.", insiderTip: "Park in the Aaron lots (toward the south/west) for the most space to spread out." },
];

const traditions = [
  { name: "Bernie Brewer's Slide", location: "Above LF Bleachers", description: "Bernie slides down a white plastic slide onto a home-plate-shaped platform every time a Brewer hits a home run. Bob Uecker's 'Get up, get up, get outta here — GONE!' rings out on the tower above the dugout.", mustTry: "Buy the Bernie's Slide Experience — pre-game ride down the slide for groups of 2–8 before select home games.", insiderTip: "Sit in the LF Bleachers if you want the closest seat to the slide on every Brewers homer." },
  { name: "The Famous Racing Sausages", location: "Middle of the 6th inning", description: "Five costumed sausages sprint around the warning track between innings: Brat (#1), Polish (#2), Italian (#3), Hot Dog (#4) and Chorizo (#5). One of the longest-running between-innings traditions in MLB.", mustTry: "Time your food/bathroom run around the race — not over it.", insiderTip: "The new Skee-Ball-style sausage race in the upgraded 2026 playground is a kid-friendly version on the concourse." },
  { name: "Roll Out the Barrel — 7th Inning Stretch", location: "Ballpark-wide", description: "Polka-rooted Milwaukee tradition. After 'Take Me Out to the Ball Game,' the park breaks into 'Roll Out the Barrel' — the city's German-Polish heritage on full ballpark display.", mustTry: "Stand, stretch, sing along. The whole park does.", insiderTip: "It's an audible game-day moment — don't miss it for a food run." },
  { name: "The Selig Experience", location: "Loge Level", description: "Multimedia exhibit honoring Bud Selig — the man who brought MLB back to Milwaukee. Theater-style room with archival footage and team history.", mustTry: "Walk through before first pitch — it's the most underrated 15 minutes inside the ballpark.", insiderTip: "Open during games and on ballpark tour days. Free with your game ticket." },
];

const familyTips = [
  { title: "Kids Day & Family Promos", body: "Family-friendly theme nights run all season — Bark at the Park (May 12, 2026) is the dog-friendly one; Paw Patrol Day, Hello Kitty Night and Naruto Night are new 2026 family-themed games. Buy through the special-theme-night ticket page for the giveaway." },
  { title: "Upgraded Playground", body: "The kids' playground area was refreshed for 2026 with new interactive games — including a Skee-Ball-style sausage race and Instagrammable Famous Racing Sausages figurines for photos." },
  { title: "Bernie's Slide Experience", body: "Pre-game slide ride for groups of 2–8 — a kid-favorite memory before first pitch. Available at select regular-season home games; book through the Brewers' Bernie's Slide page." },
  { title: "Stroller-Friendly", body: "Strollers are allowed inside the ballpark. The concourses are wide and the elevators reach every level. Mid-game nap windows are easier than the bleacher sun." },
  { title: "Family Bathrooms", body: "Family / nursing rooms are located on the loge level and behind home plate — see Guest Services for the closest one to your section." },
];

const insiderTips = [
  { title: "Buy Parking in Advance", body: "Drive-up parking runs $5–$10 more than advance pricing on most game days. Buy through MLB Ballpark or the team site before you leave — Opening Day and Cubs games sell out completely." },
  { title: "Lot vs. Shuttle Math", body: "On Friday/Saturday games, the Bluemound shuttle bars (Kelly's, McGinn's, Jackson's) plus a 6 p.m. burger usually beats parking ($20+) and concession dinner ($30+) — and you skip the post-game queue out of the ballpark lots." },
  { title: "Tailgate Like a Local", body: "Aaron lots (south/west of the park) have the most spread-out spaces. Klement's brats on a propane grill is the textbook setup. Don't try to bring a wood fire — it's a fire-marshal ticket." },
  { title: "Get to Your Seat for the 6th", body: "The Famous Racing Sausages run between the top and bottom of the 6th inning. Don't be in line for cheese curds when it happens." },
  { title: "Outside Food Is Welcome", body: "American Family Field allows personal-sized outside food (sandwiches, snacks, fruit) plus sealed non-alcoholic drinks 32 oz or smaller — useful for families and budget game-day trips." },
  { title: "Walk-To Move", body: "From downtown hotels: rideshare to Sobelman's St Paul (5 min), bloody mary, then rideshare 5 more minutes to the park. Total Brewers + Milwaukee experience in under 30 minutes." },
  { title: "Beat the Crowd Out", body: "If the Brewers are up big in the 8th, walk out a half-inning early. The first wave of cars hits the I-94 ramp the second the last out is recorded — getting out before that saves 20+ minutes." },
];

const faqs = [
  { q: "Where do I park for Brewers games?", a: "American Family Field has 16 official Brewers parking lots ringing the ballpark, with general and preferred tiers. The most reliable option is to buy parking in advance through MLB Ballpark or the team site — drive-up rates run $5–$10 higher and Opening Day / Cubs games sell out completely. Tailgating is allowed in every Brewers lot except the employee lots and the rideshare lot." },
  { q: "How much is parking at American Family Field in 2026?", a: "Advance general-lot parking is $15 weekday (Mon–Thu), $20 Friday/Saturday/Sunday and $30 Opening Day. Preferred lots run $10 higher: $25 weekday, $30 Fri–Sun and $40 Opening Day. Cubs games always use the higher weekend tier regardless of day of week. Drive-up rates are $5–$10 more than advance pricing." },
  { q: "What time do parking lots open for Brewers games?", a: "Brewers parking lots open three hours before first pitch for most games. The exception: weekday games with a 6:15 p.m. or 6:40 p.m. first pitch open 2.5 hours before first pitch instead. Gates at the ballpark itself open 90 minutes before first pitch. Tailgating must end 30 minutes after first pitch." },
  { q: "Are there shuttles to American Family Field?", a: "Yes — several Milwaukee bars run free or low-cost shuttles to and from AmFam Field on game days. The most reliable for 2026 are Kelly's Bleachers (5218 W Bluemound, free with food/drink purchase, $20 parking + $20 voucher), Steny's Tavern in Walker's Point (800 S 2nd St, free with arm stamp; first shuttle 1 hour before first pitch, returns start top of the 8th), McGinn's Sports Bar (5901 W Bluemound) and Jackson's Blue Ribbon Pub (11302 W Bluemound). MCTS also runs bus routes serving the ballpark area and the team operates dedicated rideshare zones." },
  { q: "What's the best place to tailgate?", a: "Any of the Brewers general or preferred lots — tailgating is allowed in all of them except employee and rideshare lots. Locals favor the Aaron lots (south/west of the park) for more spread-out spaces. The setup: propane or self-contained charcoal grill, Klement's brats, friends, beer. Just no glass, no wood fires, no open flame, and pack up by 30 minutes after first pitch." },
  { q: "What food is at American Family Field?", a: "The 2026 menu adds a new Fair Foods stand (deep-fried kringle, corn dogs, nachos on a stick), K&L's BBQ in The Alley, an expanded Bebe Zito in the 3rd Street Market Hall Annex (chicken sandwiches, fries, signature 'chicken ice cream'), a new Field Level cheese steak kiosk, plus the new Sticky Maple Chicken Sandwich and Al Pastor Topped Dog. Local Wisconsin breweries rotate on the craft beer taps throughout the park." },
  { q: "Where are the best bars near American Family Field?", a: "The Bluemound corridor west of the ballpark is the classic pre-game strip: Kelly's Bleachers, McGinn's Sports Bar, and Jackson's Blue Ribbon Pub all run game-day shuttles. In Walker's Point, Steny's Tavern is the downtown-walkable shuttle move. For a pre-game bloody mary, Sobelman's on St Paul Ave is the Milwaukee pilgrimage. None of these are a 'walk-to-the-park' bar — the ballpark sits in the Menomonee Valley with no surrounding bar district." },
  { q: "How early should I get to a Brewers game?", a: "If you're tailgating, aim for when the lots open (3 hours pre-game, or 2.5 hours for 6:15/6:40 weekday games). If you're not, get to your bar/shuttle 90 minutes pre-game or your parking lot 60–75 minutes pre-game. Gates open 90 minutes before first pitch — Bernie's Slide Experience and the Selig Experience exhibit are worth getting in early for." },
  { q: "Is American Family Field family-friendly?", a: "Very. The 2026 season brought an upgraded playground with a Skee-Ball-style sausage race and Famous Racing Sausages figurines for photos. The Famous Sausage Race itself runs in the middle of the 6th inning. Strollers are allowed, family/nursing rooms are on the loge level and behind home plate, and 2026 theme nights include Paw Patrol Day, Hello Kitty Night, Naruto Night, and Bark at the Park (May 12, 2026)." },
  { q: "What's the Sausage Race?", a: "Five costumed runners — Brat (#1), Polish (#2), Italian (#3), Hot Dog (#4) and Chorizo (#5) — sprint a lap around the warning track every game in the middle of the 6th inning. The Bratwurst, Polish and Italian debuted in the early 1990s; Hot Dog joined mid-90s; Chorizo became permanent in 2007. It's one of MLB's most iconic between-innings traditions and the unofficial Milwaukee Brewers calling card." },
  { q: "Can I bring food into American Family Field?", a: "Yes — fans can bring personal-sized portions of food (sandwiches, fruit, chips, snacks) into the ballpark as long as the food fits inside the approved bag and is wrapped or in a container that can be inspected at security. Sealed non-alcoholic beverages in plastic bottles or containers 32 oz or smaller are also allowed. Glass containers, aluminum cans and any outside alcohol are prohibited." },
  { q: "What's the bag policy at American Family Field?", a: "Clear single-compartment bags up to 12\" × 12\" × 6\", non-clear bags up to 9\" × 5\" × 2\", and one-gallon clear resealable bags are allowed. Backpacks are not permitted. Exceptions are made for diaper bags up to 16\" × 16\" × 8\" and ADA / medically necessary items." },
  { q: "Where can I buy Brewers tickets?", a: "Single-game tickets sell through mlb.com/brewers, MLB Ballpark app, Ticketmaster (the team's primary ticketing partner) and resale platforms like SeatGeek, Vivid Seats, StubHub and TickPick. The cheapest seats on resale start around $8–$10 (standing room and upper-deck Terrace Reserved); average ticket price hovers around $37–$55 across the season. Opening Day (Mar 26 vs. White Sox) and Cubs series typically run the highest." },
];

const VENUE = {
  "@type": "StadiumOrArena",
  "@id": "https://www.discover-milwaukee.com/brewers-game-guide-milwaukee#venue",
  name: "American Family Field",
  alternateName: "AmFam Field",
  url: "https://www.mlb.com/brewers/ballpark",
  telephone: "+1-414-902-4400",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Brewers Way",
    addressLocality: "Milwaukee",
    addressRegion: "WI",
    postalCode: "53214",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.0280,
    longitude: -87.9712,
  },
  maximumAttendeeCapacity: 41900,
};

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "Milwaukee Brewers Game Day Guide 2026: Parking, Food, Bars & Tips",
    description: "The complete 2026 Milwaukee Brewers game-day guide — American Family Field parking prices, tailgating, food, bars with shuttles, the Sausage Race, family tips and FAQs.",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-05",
    mainEntityOfPage: "https://www.discover-milwaukee.com/brewers-game-guide-milwaukee",
    image: "https://www.discover-milwaukee.com/images/brewers-game-guide-og.svg",
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
      { "@type": "ListItem", position: 2, name: "Milwaukee Brewers Game Day Guide", item: "https://www.discover-milwaukee.com/brewers-game-guide-milwaukee" },
    ],
  },
  event: {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Milwaukee Brewers 2026 Home Season",
    description: "The Milwaukee Brewers' 2026 MLB regular-season home games at American Family Field. Opening Day Thursday, March 26, 2026 vs. Chicago White Sox.",
    image: "https://www.discover-milwaukee.com/images/brewers-game-guide-og.svg",
    startDate: "2026-03-26",
    endDate: "2026-09-27",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: VENUE,
    url: "https://www.discover-milwaukee.com/brewers-game-guide-milwaukee",
    organizer: {
      "@type": "SportsTeam",
      name: "Milwaukee Brewers",
      url: "https://www.mlb.com/brewers",
    },
    competitor: [
      { "@type": "SportsTeam", name: "Milwaukee Brewers", url: "https://www.mlb.com/brewers" },
    ],
    offers: {
      "@type": "Offer",
      url: "https://www.mlb.com/brewers/tickets/single-game-tickets",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "10",
      validFrom: "2025-11-01",
    },
  },
  place: {
    "@context": "https://schema.org",
    ...VENUE,
  },
};

const navLinks = [
  { href: "#overview", label: "At a Glance" },
  { href: "#season", label: "2026 Season" },
  { href: "#tickets", label: "Tickets" },
  { href: "#parking", label: "Parking" },
  { href: "#getting-there", label: "Getting There" },
  { href: "#food", label: "Food" },
  { href: "#bars", label: "Bars" },
  { href: "#traditions", label: "Traditions" },
  { href: "#family", label: "Family" },
  { href: "#tips", label: "Tips" },
  { href: "#faq", label: "FAQ" },
];

export default function BrewersGameGuideMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);
  const [barFilter, setBarFilter] = useState("all");

  const filteredBars = barFilter === "all" ? bars : bars.filter((b) => b.category === barFilter);

  return (
    <>
      <Head>
        <title>Milwaukee Brewers Game Day Guide 2026: Parking, Food & Tips</title>
        <meta name="description" content="The 2026 Milwaukee Brewers game-day guide: American Family Field parking prices, tailgating, food, bars with shuttles, the Sausage Race & family tips." />
        <meta name="keywords" content="brewers game guide milwaukee, american family field parking, milwaukee brewers tickets, brewers parking, bars near american family field, brewers shuttle, miller park parking, brewers tailgating" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/brewers-game-guide-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Brewers Game Day Guide 2026: Parking, Food & Tips" key="og:title" />
        <meta property="og:description" content="Everything for a Brewers game at American Family Field — 2026 parking prices, tailgating, food, bars with shuttles, and the Sausage Race." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/brewers-game-guide-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/brewers-game-guide-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee Brewers Game Day Guide 2026 — Parking, Food & Tips at American Family Field." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-04T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-05T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Sports" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Brewers Game Day Guide 2026" key="twitter:title" />
        <meta name="twitter:description" content="2026 Brewers game-day guide — AmFam Field parking, tailgating, food, shuttle bars, and the Sausage Race." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/brewers-game-guide-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.event) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.place) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 4, 2026 · 2026 SEASON GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Milwaukee Brewers Game Day Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              <strong>Everything you need for a Brewers game at American Family Field</strong> — 2026 parking, tailgating, food, the bars locals shuttle from, and what to know about the Sausage Race.
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
              <a key={link.href} href={link.href} style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "8px 14px", borderRadius: "8px", backgroundColor: "rgba(244,162,97,0.15)", border: `1px solid rgba(244,162,97,0.3)`, display: "inline-block", flexShrink: 0 }}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "880px", margin: "0 auto", padding: "40px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Heads up:</strong> Parking prices, shuttle bars, and theme nights shift through the season. Confirm with the Brewers and your shuttle bar before you go. Cubs games always run at the higher weekend parking tier.
            </p>
          </div>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Milwaukee Brewers Game Day Guide</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Featured</dt>
              <dd style={{ color: "#444", margin: 0 }}>8 game day verified across Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Standing Room / Cheapest, Terrace Reserved, Loge Outfield / Bleachers, Field Outfield / Field Box, Field Infield / Diamond Box</dd>
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
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Quick-hit facts for a Brewers game at American Family Field — address, gates, parking, capacity and what's open when.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "12px" }}>
              {overviewStats.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>What makes a Brewers game day different</h3>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
                Three things separate American Family Field from any other MLB ballpark: the tailgating culture (every Brewers lot allows grilling and a small-city's worth of parking-lot parties shows up for it), the Famous Racing Sausages between innings, and Bernie Brewer sliding down a chute behind left field every time the Brewers homer. The ballpark sits in the Menomonee Valley with no surrounding bar district, so the pre-game move is either lot-tailgating or a Bluemound / Walker's Point bar with a shuttle.
              </p>
            </div>
          </section>

          <section id="season" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 Season Info</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Opening Day, division, game times, and the theme nights worth planning around.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "20px" }}>
              <div style={{ backgroundColor: "white", border: `2px solid ${c.orange}`, borderRadius: "14px", padding: "18px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>Opening Day 2026</p>
                <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 8px" }}>Thu Mar 26, 1:10 p.m.</h3>
                <p style={{ color: "#555", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Brewers vs. Chicago White Sox at American Family Field. Parking + tickets are priciest on this date — buy in advance.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>Division</p>
                <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 8px" }}>NL Central</h3>
                <p style={{ color: "#555", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Cubs, Cardinals, Reds and Pirates are the divisional rivals. Cubs series always run the highest parking + ticket prices.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>Standard Game Times</p>
                <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 8px" }}>6:40 / 12:40 / 1:10</h3>
                <p style={{ color: "#555", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Most regular-season Mon–Fri night games start at 6:40 p.m. Day games are at 12:40 or 1:10 p.m.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>Memorial Day</p>
                <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 8px" }}>Mon May 25 · 1:10 p.m.</h3>
                <p style={{ color: "#555", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Brewers vs. St. Louis Cardinals. The annual Memorial Day matinee.</p>
              </div>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "8px", letterSpacing: "1px", textTransform: "uppercase" }}>2026 Theme Nights Worth Planning Around</p>
              <p style={{ color: c.green1, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                <strong>New for 2026:</strong> Naruto Night · Hello Kitty Night · Boy Band Night · Paw Patrol Day. <strong>Returning fan favorites:</strong> Bark at the Park (Tue May 12) · Star Wars Night · Bobblehead games throughout the season. Each requires a special theme-night ticket — see the Brewers' theme-nights page for dates.
              </p>
            </div>
          </section>

          <section id="tickets" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Tickets & Seating</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Brewers tickets are some of the most affordable in MLB — average around $37–$55, with resale lows that can dip under $10 for upper-deck and standing room.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "24px" }}>
              {ticketTiers.map((t) => (
                <div key={t.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>{t.name}</p>
                  <p style={{ fontSize: "20px", fontWeight: "900", color: c.green1, margin: "0 0 4px" }}>{t.price}</p>
                  <p style={{ fontSize: "13px", color: "#666", margin: 0, lineHeight: 1.55 }}>{t.note}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>Where to buy</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Primary: <strong>mlb.com/brewers</strong>, the MLB Ballpark app, and Ticketmaster. Resale: SeatGeek, Vivid Seats, StubHub and TickPick all consistently price below face value for weekday non-rivalry games. Opening Day, Cubs series and themed-bobblehead nights move fastest — buy early.
              </p>
            </div>
          </section>

          <section id="parking" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking & Tailgating</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              American Family Field has <strong>16 official Brewers parking lots</strong> ringing the ballpark, split into General and Preferred tiers. Tailgating is allowed in all of them except the employee and rideshare lots.
            </p>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>2026 Parking Prices (Advance)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "24px" }}>
              {parkingTiers.map((p) => (
                <div key={p.lot} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>{p.lot}</p>
                  <p style={{ fontSize: "22px", fontWeight: "900", color: c.green1, margin: "0 0 4px" }}>{p.price}</p>
                  <p style={{ fontSize: "13px", color: "#666", margin: 0, lineHeight: 1.55 }}>{p.note}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: c.yellow, padding: "12px 14px", borderRadius: "8px", marginBottom: "32px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                <strong>Drive-up rates run $5–$10 higher</strong> than advance pricing on most game days. Cubs games are sold at the higher Fri–Sun tier regardless of weekday. ADA-accessible parking is available in every lot — request when you buy.
              </p>
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Tailgating Rules</h3>
            <div style={{ backgroundColor: "white", border: `2px solid ${c.green2}`, borderRadius: "12px", padding: "18px", marginBottom: "16px" }}>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                {tailgateRules.map((rule, i) => <li key={i} style={{ marginBottom: "6px" }}>{rule}</li>)}
              </ul>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>📍 Lot opening times</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Parking lots open <strong>three hours before first pitch</strong> for most games. The exception: weekday games with a 6:15 p.m. or 6:40 p.m. first pitch open <strong>2.5 hours before first pitch</strong>. Gates at the ballpark itself open <strong>90 minutes</strong> before first pitch.
              </p>
            </div>
          </section>

          <section id="getting-there" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Getting There</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>American Family Field sits in the Menomonee Valley west of downtown — there is no walk-from-downtown option. Your three real choices: drive + lot, bar-shuttle, or rideshare.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "24px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>🚌 MCTS Bus</h3>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>MCTS routes serve the AmFam Field area. Check the MCTS RideMCTS app for the closest route from your hotel — fares are cashless (tap card, Apple Pay, Google Pay).</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>🍻 Bar Shuttles</h3>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>The locals' move. Kelly's Bleachers, Steny's Tavern, McGinn's and Jackson's Blue Ribbon all run game-day shuttles — see the Bars section below for conditions.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>🚗 Rideshare</h3>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>Dedicated rideshare drop-off and pickup zones operate at the ballpark. Surge pricing spikes the moment the game ends — walk a block off-grounds before requesting if you want a cheaper post-game ride.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>🚶 Walking from Downtown?</h3>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>No. The ballpark is roughly 3 miles west of downtown across freeway-heavy ground. The Hank Aaron State Trail does connect via the Menomonee Valley for cyclists, and bike racks are available at the ballpark.</p>
              </div>
            </div>
          </section>

          <section id="food" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Food at the Ballpark</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The 2026 concession menu adds a Fair Foods stand, K&L's BBQ in The Alley, an expanded Bebe Zito in the 3rd Street Market Hall Annex, a Field Level cheese steak kiosk, and new menu items at the chicken and topped-dog stands.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "24px" }}>
              {food.map((f) => (
                <div key={f.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px", lineHeight: 1.25 }}>{f.name}</h3>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 4px", textTransform: "uppercase" }}>📍 {f.location} · {f.priceRange}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: "10px 0" }}>{f.description}</p>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{f.mustTry}</p>
                  </div>
                  <p style={{ color: "#666", fontSize: "12px", fontStyle: "italic", margin: "6px 0 4px" }}>{f.vibe}</p>
                  <p style={{ color: c.green2, fontSize: "12px", margin: 0, fontWeight: "600" }}><strong>Tip:</strong> {f.insiderTip}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Want the deeper Milwaukee food experience around your game? Pair the ballpark with <Link href="/best-cheese-curds-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>the best cheese curds in town</Link>, a Friday <Link href="/best-fish-fry-milwaukee" style={{ color: c.green2, fontWeight: "600" }}>fish fry</Link>, or a <Link href="/milwaukee-breweries" style={{ color: c.green2, fontWeight: "600" }}>Milwaukee brewery tour</Link> before the first pitch.
              </p>
            </div>
          </section>

          <section id="bars" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Bars Near American Family Field</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The ballpark itself has no walkable bar district — but the Bluemound corridor west of the park and Walker's Point south of downtown both run game-day shuttles. Filter to the move you want.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {BAR_FILTERS.map((f) => {
                const active = barFilter === f.id;
                return (
                  <button key={f.id} onClick={() => setBarFilter(f.id)} style={{ padding: "8px 14px", borderRadius: "20px", border: active ? `2px solid ${c.green1}` : `2px solid ${c.beige}`, backgroundColor: active ? c.green1 : "white", color: active ? c.cream : c.green1, fontWeight: "700", fontSize: "13px", cursor: "pointer", transition: "all 0.15s" }}>
                    {f.label}
                  </button>
                );
              })}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {filteredBars.map((b) => (
                <div key={b.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderLeft: `5px solid ${c.orange}`, borderRadius: "14px", padding: "18px" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px", lineHeight: 1.25 }}>{b.name}</h3>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 4px", textTransform: "uppercase" }}>📍 {b.location} · {b.priceRange}</p>
                  <p style={{ fontSize: "12px", color: "#666", margin: "0 0 10px" }}>{b.address}</p>
                  <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>GAME-DAY DEAL</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{b.special}</p>
                  </div>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: "0 0 10px" }}>{b.description}</p>
                  <p style={{ color: c.green1, fontSize: "12px", margin: "0 0 4px" }}><strong>Must try:</strong> {b.mustTry}</p>
                  <p style={{ color: "#666", fontSize: "12px", fontStyle: "italic", margin: "0 0 6px" }}>{b.vibe}</p>
                  <p style={{ color: c.green2, fontSize: "12px", margin: 0, fontWeight: "600" }}><strong>Tip:</strong> {b.insiderTip}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="traditions" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Sausage Race & Other Traditions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The traditions are what separate a Brewers game from any other MLB experience. Don't be in the concession line when the sausages run.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {traditions.map((t) => (
                <div key={t.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px", lineHeight: 1.25 }}>{t.name}</h3>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 10px", textTransform: "uppercase" }}>📍 {t.location}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: "0 0 10px" }}>{t.description}</p>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST DO</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{t.mustTry}</p>
                  </div>
                  <p style={{ color: c.green2, fontSize: "12px", margin: 0, fontWeight: "600" }}><strong>Tip:</strong> {t.insiderTip}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="family" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Family-Friendly Game Day</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>American Family Field is one of the most family-built ballparks in MLB. Here's how to use it.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {familyTips.map((f) => (
                <div key={f.title} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 8px" }}>{f.title}</h4>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tips" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Insider Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The moves locals use to make a Brewers game cheaper, faster, and easier than the tourist version.</p>
            {insiderTips.map((t) => (
              <div key={t.title} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderLeft: `5px solid ${c.green2}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "12px" }}>
                <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 6px" }}>{t.title}</h4>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </section>

          <section id="faq" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Tap a question to expand. Covers parking, tickets, shuttles, food, family and more.</p>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", marginBottom: "10px", overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", textAlign: "left", backgroundColor: isOpen ? c.cream : "white", border: "none", padding: "16px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "700", color: c.green1 }}>
                    <span>{f.q}</span>
                    <span style={{ fontSize: "20px", color: c.orange, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.15s", fontWeight: "300" }}>+</span>
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
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Sports & Bars</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/packers-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Packers Bars</Link>
              <Link href="/bucks-game-guide-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bucks Game Day Guide</Link>
              <Link href="/milwaukee-bars" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Bars</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Brewers game-day tips, new restaurants, events, and insider picks every Wednesday.</p>
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
