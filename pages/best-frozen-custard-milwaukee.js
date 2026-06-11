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

const pillars = [
  {
    name: "Kopp's Frozen Custard",
    founded: 1950,
    founder: "Elsa Kopp",
    locations: [
      { label: "Glendale (Bayshore-adjacent)", address: "5373 N Port Washington Rd, Glendale, WI 53217", phone: "(414) 961-3288" },
      { label: "Brookfield", address: "18880 W Bluemound Rd, Brookfield, WI 53045", phone: "(262) 789-9490" },
      { label: "Greenfield", address: "7631 W Layton Ave, Greenfield, WI 53220", phone: "(414) 282-4080" },
    ],
    hours: "Daily 10:30 a.m. – 11 p.m. (all three locations)",
    signature: "Three Flavors of the Day, every day — one chocolate-based, two non-chocolate, rotating from a master calendar published a year in advance.",
    whatToOrder: "A single-scoop sundae of the day's most interesting flavor, plus a Jumbo Burger on the side. The kitchen also runs a serious char-grilled burger menu — Kopp's is one of the only Milwaukee custard stands where the burger is part of the legend, not an afterthought.",
    insiderTip: "Check kopps.com/flavor-forecast before you drive — Kopp's publishes the Flavor of the Day calendar months in advance, sometimes a full year. Order at the walk-up window even if it's snowing; locals do.",
    history: "Elsa Kopp opened the original Kopp's hamburger stand at 60th & Appleton in 1950, adding frozen custard shortly after. Now run by the Kopp family's next generation under longtime ownership; the Appleton Ave. original closed decades ago but the three current locations remain family-owned and operated.",
    flavorUrl: "kopps.com/flavor-forecast",
    priceRange: "$",
    yearRound: true,
  },
  {
    name: "Leon's Frozen Custard",
    founded: 1942,
    founder: "Leon Schneider",
    locations: [
      { label: "South Side (the original)", address: "3131 S 27th St, Milwaukee, WI 53215", phone: "(414) 383-1784" },
    ],
    hours: "Daily 11 a.m. – midnight (open year-round; walk-up windows only — no indoor seating)",
    signature: "Three classic flavors served every day — vanilla, chocolate and a rotating third flavor — with the famous shake/malt menu. Leon's deliberately resists the modern Flavor of the Day rotation other stands run; the menu has barely changed since 1942.",
    whatToOrder: "A classic vanilla cone, dipped in chocolate if you want it. Locals also swear by the malts — thick enough that the straw stands up on its own.",
    insiderTip: "Cash only — Leon's famously refused to take credit cards for decades and the policy has historically held. Bring small bills. The neon sign is best photographed at dusk, just as it flickers on. There is no indoor dining — you order at the window and eat outside or in your car.",
    history: "Founded by Leon Schneider in 1942, Leon's is widely cited as the inspiration for Arnold's Drive-In on Happy Days — the show's creator Garry Marshall reportedly drew on Milwaukee-area drive-ins he visited. Leon's is still owned and operated by the Schneider family; the same neon sign has lit South 27th Street for more than 80 years.",
    flavorUrl: "leonsfrozencustard.us",
    priceRange: "$",
    yearRound: true,
  },
  {
    name: "Gilles Frozen Custard",
    founded: 1938,
    founder: "Paul Gilles",
    locations: [
      { label: "Wauwatosa (the original)", address: "7515 W Bluemound Rd, Wauwatosa, WI 53213", phone: "(414) 453-4875" },
    ],
    hours: "Daily 10:30 a.m. – 10:30 p.m. (open year-round, walk-up windows; limited indoor seating in winter)",
    signature: "Daily Flavor of the Day plus a deep classic menu — Gilles is the oldest continuously operating frozen custard stand in Milwaukee and is widely considered the oldest still-operating custard stand in Wisconsin.",
    whatToOrder: "The Flavor of the Day as a single dish (cup), plus a butter burger from the grill if you arrive hungry. The Lemon Custard (a recurring Flavor of the Day favorite) is a Gilles specialty.",
    insiderTip: "Drive-through, walk-up windows, and a small indoor counter — order at whichever line is shortest. Bluemound Road is busy at dinnertime; park in the lot on the east side of the building. Gilles celebrated its 85th year in 2023 and is the de facto answer to 'who is the oldest?' arguments.",
    history: "Paul Gilles opened the stand in 1938 on Bluemound Road, then a country highway leading west out of Milwaukee. The building, the signage and much of the menu remain remarkably consistent with mid-century roadside Americana. Family-owned for decades; in recent years the stand has been owned by Tom Linscott and family.",
    flavorUrl: "gillesfrozencustard.com",
    priceRange: "$",
    yearRound: true,
  },
  {
    name: "Oscar's Frozen Custard",
    founded: 2002,
    founder: "Oscar Holzhueter",
    locations: [
      { label: "West Allis", address: "2362 S 108th St, West Allis, WI 53227", phone: "(414) 327-1300" },
      { label: "Franklin", address: "7041 S 27th St, Franklin, WI 53132", phone: "(414) 304-9100" },
    ],
    hours: "Daily 11 a.m. – 10 p.m. (year-round, both locations)",
    signature: "Daily Flavor of the Day plus a full grill menu — Oscar's is the newest of the four pillars but has earned the spot through consistent quality and a wide flavor program. Generous portion sizes are part of the reputation.",
    whatToOrder: "Get the Flavor of the Day as a 'malt' (Oscar's malts run noticeably thicker than the city average) and order a single butter burger from the grill. Cheese curds are fried in-house.",
    insiderTip: "The West Allis location is the closest authentic frozen custard stand to Wisconsin State Fair Park — a 5-minute drive south on 108th. During the State Fair (Aug 6–16, 2026), Oscar's lines build but move fast. Check oscarscustard.com for the daily flavor at both locations.",
    history: "Oscar Holzhueter — a Wisconsin frozen custard veteran who worked at older stands for years — opened the first Oscar's in 2002 in West Allis. The Franklin location followed. The stand has built its reputation in just over two decades by treating the basics with the same seriousness as the historic pillars.",
    flavorUrl: "oscarscustard.com",
    priceRange: "$",
    yearRound: true,
  },
];

const neighborhoodStands = [
  {
    name: "Murf's Frozen Custard & Jumbo Burgers",
    locations: "Greenfield (4670 S 108th St) · Wauwatosa (10120 W Capitol Dr) · Glendale (7305 N Port Washington Rd) · Brookfield (12500 W Bluemound Rd)",
    description: "Local mini-chain serving Daily Flavors and a classic burger-and-curds grill menu. Family-friendly with sizable indoor dining at most locations — useful in winter.",
    flavorUrl: "murfs.com",
    note: "Year-round. Drive-through at most locations.",
  },
  {
    name: "Robert's Frozen Custard",
    locations: "4727 N Wauwatosa Ave, Whitefish Bay, WI 53217",
    description: "North Shore standby — small storefront, generous portions, friendly counter. Flavor of the Day rotates daily with a heavy lean on classic Wisconsin flavors (turtle, butter pecan, the seasonal pumpkin in fall).",
    flavorUrl: "robertscustard.com",
    note: "Year-round. Walk-up counter; limited seating.",
  },
  {
    name: "Sasha's Frozen Custard",
    locations: "1518 N Farwell Ave, Milwaukee, WI 53202 (Lower East Side)",
    description: "One of the very few authentic custard stands on the Lower East Side / Brady Street side of the city. Daily Flavor, small menu, walk-up counter. Convenient if you're already in the Brady/East Side restaurant district.",
    flavorUrl: "Call ahead — Sasha's flavor is posted in-store and on their social channels",
    note: "Hours and seasonal status fluctuate — call (414) 765-2225 before you go, especially in winter.",
  },
  {
    name: "Northpoint Custard",
    locations: "2272 N Lincoln Memorial Dr (Bradford Beach lakefront pavilion)",
    description: "Bartolotta-operated walk-up stand inside the historic Northpoint pavilion at Bradford Beach. The lakefront location is the draw — eat your cone in the sand or on a bench facing Lake Michigan. Burgers and Wisconsin cheese curds also on the menu.",
    flavorUrl: "northpointcustard.com",
    note: "SEASONAL — typically open spring through early fall (Memorial Day weekend through late September). Closed in winter. Confirm opening date each spring.",
  },
  {
    name: "Pete's Pops",
    locations: "Multiple South Side and pop-up locations",
    description: "Important note: Pete's is a beloved Milwaukee pop / fruit-paleta operation — NOT a frozen custard stand. We include it here only to head off the inevitable confusion. If you want true frozen custard, skip Pete's; if you want a Mexican-style pop, Pete's is the move.",
    flavorUrl: "petespops.com",
    note: "Listed for disambiguation only — not a custard stand.",
  },
  {
    name: "Culver's (any local location)",
    locations: "Multiple Milwaukee-area locations — see the dedicated Culver's section below",
    description: "The Wisconsin-born chain serves real frozen custard (egg yolks, low overrun) and publishes a Flavor of the Day. Quality is consistent because the system is. It's not the same experience as a neighborhood walk-up stand, but it is real frozen custard.",
    flavorUrl: "culvers.com/flavor-of-the-day",
    note: "Year-round, drive-through, full meal menu (ButterBurgers and cheese curds).",
  },
];

const seasonalCalendar = [
  { stand: "Kopp's Frozen Custard (3 locations)", status: "Year-round", hours: "Daily 10:30 a.m. – 11 p.m." },
  { stand: "Leon's Frozen Custard", status: "Year-round", hours: "Daily 11 a.m. – midnight (walk-up windows; no indoor seating)" },
  { stand: "Gilles Frozen Custard", status: "Year-round", hours: "Daily 10:30 a.m. – 10:30 p.m." },
  { stand: "Oscar's Frozen Custard (2 locations)", status: "Year-round", hours: "Daily 11 a.m. – 10 p.m." },
  { stand: "Murf's (4 locations)", status: "Year-round", hours: "Vary by location — most open 11 a.m. – 10 p.m." },
  { stand: "Robert's Frozen Custard", status: "Year-round", hours: "Call (414) 962-8895 to confirm seasonal hours" },
  { stand: "Sasha's (East Side)", status: "Variable — call ahead", hours: "Hours fluctuate, especially winter" },
  { stand: "Northpoint Custard (Bradford Beach)", status: "SEASONAL — spring through early fall", hours: "Typically Memorial Day weekend through late September; hours expand in summer" },
  { stand: "Culver's (chain — many locations)", status: "Year-round", hours: "Most locations 10:30 a.m. – 10 p.m." },
];

const nearAttractions = [
  {
    attraction: "American Family Field (Brewers games)",
    pick: "Kopp's Greenfield (7631 W Layton Ave) — 10 minutes south of the ballpark",
    why: "Closest authentic stand to AmFam Field with full Flavor of the Day and walk-up convenience. Great pre- or post-game stop.",
  },
  {
    attraction: "Summerfest grounds / Henry Maier Festival Park",
    pick: "Northpoint Custard at Bradford Beach (2272 N Lincoln Memorial Dr)",
    why: "1.5 miles north along the lakefront — walk or short drive after a festival session. Lakefront eating is the move on a warm summer night.",
  },
  {
    attraction: "Bradford Beach / lakefront",
    pick: "Northpoint Custard (on-site at the pavilion)",
    why: "It's the only authentic frozen custard stand actually ON the lakefront. Seasonal only — confirm spring opening date.",
  },
  {
    attraction: "Milwaukee Art Museum",
    pick: "Northpoint Custard (1 mile north) or drive to Kopp's Glendale",
    why: "Northpoint is the walkable option from MAM in season. Off-season, Kopp's Glendale is a 15-minute drive north.",
  },
  {
    attraction: "Fiserv Forum / Deer District",
    pick: "Drive west to Gilles (7515 W Bluemound Rd) — 12 minutes",
    why: "No authentic custard stand exists in the immediate Deer District. Gilles on Bluemound is the closest historic stand worth the short drive.",
  },
  {
    attraction: "Wisconsin State Fair Park (West Allis)",
    pick: "Oscar's West Allis (2362 S 108th St) — 5 minutes south",
    why: "Closest authentic stand to State Fair Park. During the August fair (8/6–8/16), expect lines but they move quickly. Cream puff at the fair, then custard at Oscar's after.",
  },
];

const faqs = [
  {
    question: "What's the difference between frozen custard and ice cream?",
    answer: "Two things. First, federal law: under the FDA's standard of identity (21 CFR 135.110), frozen custard — sometimes labeled French ice cream or French custard ice cream — must contain at least 1.4% egg yolk solids by weight. Regular ice cream has no such requirement and typically contains little or no egg yolk. Second, technique: frozen custard is made in a continuous-batch machine that whips in very little air (low overrun — typically around 20% vs. 50% or more for commercial ice cream). The result is dense, smooth, almost silky — closer in mouthfeel to soft-serve than to scooped ice cream. Frozen custard is also served at a slightly warmer temperature than ice cream (about 5°F warmer), which is why it stays creamy instead of icy."
  },
  {
    question: "What is the Flavor of the Day in Milwaukee frozen custard?",
    answer: "Every authentic Milwaukee custard stand publishes a Flavor of the Day — a rotating featured flavor (in addition to permanent vanilla and chocolate) that changes daily. Kopp's actually publishes three Flavors of the Day every day at all three locations. The calendars are posted online — usually weeks or months in advance — at kopps.com/flavor-forecast, gillesfrozencustard.com, oscarscustard.com, murfs.com, culvers.com/flavor-of-the-day and so on. Locals check the calendar in the morning and plan the drive around a favorite flavor. Common Wisconsin classics in the rotation: Turtle, Butter Pecan, Caramel Cashew, Door County Cherry, Lemon Custard, Grasshopper Fudge, Snickerdoodle and seasonal Pumpkin in fall."
  },
  {
    question: "Kopp's vs. Leon's vs. Gilles — which one is the best?",
    answer: "These are the three pillars of Milwaukee frozen custard and the answer depends on what you value. Kopp's (since 1950) has the most ambitious Flavor of the Day program — three flavors a day across three modern stand locations, plus the only truly elevated burger menu in the group. Leon's (since 1942) is the purest historic experience: walk-up windows on South 27th Street, the same neon sign for 80+ years, a deliberately classic menu and a cash-only tradition. Gilles (since 1938) is the oldest continuously operating frozen custard stand in Milwaukee — and likely in Wisconsin — and combines the classic feel of Leon's with a daily-flavor program closer to Kopp's. Locals tend to have one favorite for life. Visitors should try all three on a single Milwaukee weekend; the three stands are within a 20-minute drive of each other."
  },
  {
    question: "Is frozen custard gluten free?",
    answer: "The base custard — milk, cream, sugar, egg yolks — is naturally gluten free at all the authentic Milwaukee stands. But many Flavors of the Day include mix-ins that are not gluten free: brownie pieces, cookie dough, Oreo, pretzel, cake batter and similar. Stands also typically use the same scoops and machines for gluten-containing flavors, so cross-contamination is a real concern for people with celiac. Vanilla and chocolate base flavors served in a dish (skip the cone — almost all cones contain gluten) are the safest defaults; ask the counter to use a clean scoop. Always confirm at the window if you have a serious gluten restriction."
  },
  {
    question: "Can you order ahead for Milwaukee frozen custard?",
    answer: "Kopp's takes phone orders for larger custard quantities (pints, quarts, custard cakes, pre-packed pies) and several stands sell hand-packed quarts to take home. For single cones and dishes, expect to walk up to the window — that's part of the experience. For custard cakes and party orders, call the specific location 24–48 hours in advance: Kopp's (414) 961-3288 Glendale, Leon's (414) 383-1784, Gilles (414) 453-4875. Oscar's, Murf's and Culver's also sell hand-packed quarts. Northpoint at Bradford Beach is walk-up only and does not take phone orders."
  },
  {
    question: "Where can I get authentic Milwaukee frozen custard?",
    answer: "The four pillars are non-negotiable: Kopp's (Glendale, Brookfield, Greenfield), Leon's (South 27th Street), Gilles (Bluemound Road in Wauwatosa) and Oscar's (West Allis and Franklin). Beyond those, Murf's (4 suburban locations), Robert's (Whitefish Bay), Sasha's (East Side) and Northpoint Custard (Bradford Beach, seasonal) round out the authentic local-stand scene. Culver's serves real frozen custard but is a Wisconsin-born national chain — it's good and consistent, but a different category from the neighborhood walk-up stands."
  },
  {
    question: "Why is Milwaukee called the Frozen Custard Capital of the World?",
    answer: "Milwaukee has more frozen custard stands per capita than any other U.S. city. Wisconsin is the country's leading dairy state, and Milwaukee's German immigrant population in the early 20th century brought a culture of custard-style frozen desserts to the area. By the 1930s and 1940s, neighborhood walk-up custard stands — Gilles (1938), Leon's (1942) — were spreading along the city's commercial highways. The Wisconsin Dells stand Northwoods Custard popularized the dessert statewide, but Milwaukee is where it became a daily neighborhood institution. The 'Unofficial Frozen Custard Capital of the World' tagline has been used by Milwaukee's tourism marketing for decades and the title has stuck because the city genuinely has more authentic custard stands than anywhere else in the country."
  },
  {
    question: "Culver's vs. traditional Milwaukee custard stands — what's the difference?",
    answer: "Culver's was founded in Sauk City, Wisconsin in 1984 by Craig and Lea Culver and is now a national chain with more than 900 locations. The custard at Culver's is real frozen custard — it meets the egg yolk standard, is made fresh in batches at each restaurant and a Flavor of the Day rotates daily. What's different: Culver's is a drive-through fast-casual restaurant. The traditional Milwaukee stands (Kopp's, Leon's, Gilles, Oscar's) are family-owned, single-purpose custard stands — most have walk-up windows, none have a corporate menu, and the neighborhood feel is the point. For Wisconsin visitors who haven't tried Culver's, it's worth a stop. For the true Milwaukee frozen custard experience, drive past Culver's and get to one of the original stands."
  },
  {
    question: "Who invented frozen custard?",
    answer: "Frozen custard was invented at Coney Island, New York in 1919 by Archie and Elton Kohr — the Kohr brothers added egg yolks to their ice cream recipe to keep it from melting as quickly in the summer heat. The dessert traveled west and found its most enthusiastic home in the Midwest, especially Wisconsin. The 1933 Chicago World's Fair introduced frozen custard to a national audience, and Milwaukee-area dairy producers and German-American restaurateurs quickly adopted it. Gilles opened on Bluemound Road in 1938 and is the oldest continuously operating frozen custard stand in Milwaukee. Leon's followed in 1942, Kopp's in 1950."
  },
  {
    question: "Are Milwaukee frozen custard stands open in winter?",
    answer: "Most of the authentic neighborhood stands are open year-round, including all three Kopp's locations, Leon's (which famously stays open through Wisconsin winters at its walk-up windows), Gilles, both Oscar's locations, all four Murf's locations and Robert's in Whitefish Bay. Culver's drive-throughs are open year-round. The major exception is Northpoint Custard at Bradford Beach — that lakefront pavilion stand is seasonal only, typically running Memorial Day weekend through late September. Sasha's on the East Side has variable winter hours — call ahead. If you're visiting Milwaukee in January and want frozen custard, you can absolutely get it; Wisconsinites do this regularly."
  },
];

const atAGlance = [
  { label: "Stands in this guide", value: "10 verified — 4 pillars + 5 neighborhood stands + Culver's" },
  { label: "Oldest in Milwaukee", value: "Gilles Frozen Custard (1938) on Bluemound Road in Wauwatosa" },
  { label: "Most iconic neon sign", value: "Leon's Frozen Custard (1942), South 27th Street" },
  { label: "Three Flavors a Day", value: "Kopp's — only stand running 3 simultaneous daily flavors" },
  { label: "USDA legal definition", value: "At least 1.4% egg yolk solids by weight (21 CFR 135.110)" },
  { label: "What makes it different", value: "Egg yolks + low air (overrun) + warmer serve temp = denser, creamier" },
  { label: "Flavor of the Day", value: "Posted daily online by every authentic stand; calendars run weeks ahead" },
  { label: "Closest to State Fair", value: "Oscar's West Allis — 5 min south of the fairgrounds" },
  { label: "Closest to AmFam Field", value: "Kopp's Greenfield — 10 min south of the ballpark" },
  { label: "Closest to lakefront", value: "Northpoint Custard at Bradford Beach (seasonal)" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "Best Frozen Custard in Milwaukee 2026: Kopp's, Leon's, Gilles & the Capital of the World",
    description: "The definitive 2026 guide to Milwaukee frozen custard — Kopp's, Leon's, Gilles, Oscar's and 6 more verified neighborhood stands. Flavor of the Day, hours, addresses, history.",
    image: "https://www.discover-milwaukee.com/images/best-frozen-custard-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-frozen-custard-milwaukee",
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Best Frozen Custard", item: "https://www.discover-milwaukee.com/best-frozen-custard-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Frozen Custard Stands in Milwaukee",
    description: "Verified Milwaukee frozen custard stands — authentic family-owned neighborhood stands plus the Wisconsin-born Culver's chain.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 10,
    itemListElement: [
      {
        "@type": "ListItem", position: 1, item: {
          "@type": "Restaurant", name: "Kopp's Frozen Custard (Glendale)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-414-961-3288",
          address: { "@type": "PostalAddress", streetAddress: "5373 N Port Washington Rd", addressLocality: "Glendale", addressRegion: "WI", postalCode: "53217", addressCountry: "US" },
          openingHours: "Mo-Su 10:30-23:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Kopp%27s+Frozen+Custard+Glendale+5373+N+Port+Washington",
          url: "https://www.kopps.com",
        }
      },
      {
        "@type": "ListItem", position: 2, item: {
          "@type": "Restaurant", name: "Kopp's Frozen Custard (Brookfield)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-262-789-9490",
          address: { "@type": "PostalAddress", streetAddress: "18880 W Bluemound Rd", addressLocality: "Brookfield", addressRegion: "WI", postalCode: "53045", addressCountry: "US" },
          openingHours: "Mo-Su 10:30-23:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Kopp%27s+Frozen+Custard+Brookfield",
          url: "https://www.kopps.com",
        }
      },
      {
        "@type": "ListItem", position: 3, item: {
          "@type": "Restaurant", name: "Kopp's Frozen Custard (Greenfield)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-414-282-4080",
          address: { "@type": "PostalAddress", streetAddress: "7631 W Layton Ave", addressLocality: "Greenfield", addressRegion: "WI", postalCode: "53220", addressCountry: "US" },
          openingHours: "Mo-Su 10:30-23:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Kopp%27s+Frozen+Custard+Greenfield",
          url: "https://www.kopps.com",
        }
      },
      {
        "@type": "ListItem", position: 4, item: {
          "@type": "Restaurant", name: "Leon's Frozen Custard",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-414-383-1784",
          address: { "@type": "PostalAddress", streetAddress: "3131 S 27th St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53215", addressCountry: "US" },
          openingHours: "Mo-Su 11:00-24:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Leon%27s+Frozen+Custard+Milwaukee",
          url: "https://www.leonsfrozencustard.us",
        }
      },
      {
        "@type": "ListItem", position: 5, item: {
          "@type": "Restaurant", name: "Gilles Frozen Custard",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-414-453-4875",
          address: { "@type": "PostalAddress", streetAddress: "7515 W Bluemound Rd", addressLocality: "Wauwatosa", addressRegion: "WI", postalCode: "53213", addressCountry: "US" },
          openingHours: "Mo-Su 10:30-22:30",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Gilles+Frozen+Custard+Wauwatosa",
          url: "https://www.gillesfrozencustard.com",
        }
      },
      {
        "@type": "ListItem", position: 6, item: {
          "@type": "Restaurant", name: "Oscar's Frozen Custard (West Allis)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-414-327-1300",
          address: { "@type": "PostalAddress", streetAddress: "2362 S 108th St", addressLocality: "West Allis", addressRegion: "WI", postalCode: "53227", addressCountry: "US" },
          openingHours: "Mo-Su 11:00-22:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Oscar%27s+Frozen+Custard+West+Allis",
          url: "https://www.oscarscustard.com",
        }
      },
      {
        "@type": "ListItem", position: 7, item: {
          "@type": "Restaurant", name: "Oscar's Frozen Custard (Franklin)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          telephone: "+1-414-304-9100",
          address: { "@type": "PostalAddress", streetAddress: "7041 S 27th St", addressLocality: "Franklin", addressRegion: "WI", postalCode: "53132", addressCountry: "US" },
          openingHours: "Mo-Su 11:00-22:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Oscar%27s+Frozen+Custard+Franklin",
          url: "https://www.oscarscustard.com",
        }
      },
      {
        "@type": "ListItem", position: 8, item: {
          "@type": "Restaurant", name: "Murf's Frozen Custard (Greenfield)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          address: { "@type": "PostalAddress", streetAddress: "4670 S 108th St", addressLocality: "Greenfield", addressRegion: "WI", postalCode: "53228", addressCountry: "US" },
          openingHours: "Mo-Su 11:00-22:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Murf%27s+Frozen+Custard+Greenfield",
          url: "https://www.murfs.com",
        }
      },
      {
        "@type": "ListItem", position: 9, item: {
          "@type": "Restaurant", name: "Robert's Frozen Custard",
          servesCuisine: "Frozen Custard", priceRange: "$",
          address: { "@type": "PostalAddress", streetAddress: "4727 N Wauwatosa Ave", addressLocality: "Whitefish Bay", addressRegion: "WI", postalCode: "53217", addressCountry: "US" },
          openingHours: "Mo-Su 11:00-21:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Robert%27s+Frozen+Custard+Whitefish+Bay",
          url: "https://www.robertscustard.com",
        }
      },
      {
        "@type": "ListItem", position: 10, item: {
          "@type": "Restaurant", name: "Northpoint Custard (Bradford Beach)",
          servesCuisine: "Frozen Custard", priceRange: "$",
          address: { "@type": "PostalAddress", streetAddress: "2272 N Lincoln Memorial Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" },
          openingHours: "Mo-Su 11:00-21:00",
          hasMap: "https://www.google.com/maps/search/?api=1&query=Northpoint+Custard+Bradford+Beach+Milwaukee",
          url: "https://www.northpointcustard.com",
        }
      },
    ],
  },
};

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#vs-ice-cream", label: "vs Ice Cream" },
  { href: "#flavor-of-the-day", label: "Flavor of the Day" },
  { href: "#pillars", label: "The 4 Pillars" },
  { href: "#neighborhood", label: "Neighborhood Stands" },
  { href: "#culvers", label: "Culver's" },
  { href: "#calendar", label: "Seasonal Hours" },
  { href: "#near", label: "Near Attractions" },
  { href: "#etiquette", label: "Etiquette" },
  { href: "#faq", label: "FAQ" },
];

export default function BestFrozenCustardMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Best Frozen Custard Milwaukee 2026: Kopp's, Leon's, Gilles</title>
        <meta name="description" content="The definitive 2026 Milwaukee frozen custard guide: Kopp's, Leon's, Gilles, Oscar's and 6 verified neighborhood stands. Flavor of the Day, hours, history." />
        <meta name="keywords" content="best frozen custard milwaukee, milwaukee frozen custard, kopps frozen custard, leons frozen custard, gilles frozen custard, oscars frozen custard, flavor of the day milwaukee, milwaukee custard capital of the world, custard vs ice cream, culvers frozen custard, northpoint custard, murfs custard, roberts custard, sashas custard, milwaukee dessert guide" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-frozen-custard-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Frozen Custard Milwaukee 2026: Kopp's, Leon's, Gilles" key="og:title" />
        <meta property="og:description" content="Definitive 2026 guide — Kopp's, Leon's, Gilles, Oscar's + 6 verified neighborhood stands. Flavor of the Day, hours, history. The Frozen Custard Capital of the World." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-frozen-custard-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-frozen-custard-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Frozen Custard in Milwaukee — Kopp's, Leon's, Gilles, Oscar's and 6 more verified stands. The Frozen Custard Capital of the World." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-10T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-10T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Frozen Custard Milwaukee 2026: Kopp's, Leon's, Gilles" key="twitter:title" />
        <meta name="twitter:description" content="Definitive guide — the 4 pillars (Kopp's, Leon's, Gilles, Oscar's) plus 6 more verified stands. Flavor of the Day, hours, history." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-frozen-custard-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 10, 2026 · VERIFIED AGAINST EVERY VENUE&apos;S OWN WEBSITE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Best Frozen Custard in Milwaukee — 2026 Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
              Milwaukee is the unofficial <strong>Frozen Custard Capital of the World</strong>. Here are the <strong>10 stands</strong> that earn it — the four pillars (Kopp&apos;s, Leon&apos;s, Gilles, Oscar&apos;s), the neighborhood stands worth knowing, and an honest read on Culver&apos;s. Verified June 2026.
            </p>
          </div>
        </header>

        <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.green1, borderBottom: `2px solid ${c.green2}`, padding: "12px 16px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
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
              <strong>Heads up:</strong> Frozen custard hours, Flavors of the Day and seasonal opening dates shift year to year. Every stand below was cross-checked against the venue&apos;s own website and Milwaukee press (OnMilwaukee, Milwaukee Journal Sentinel, Milwaukee Magazine, Urban Milwaukee) in June 2026. Always check today&apos;s Flavor of the Day at the linked calendar before you drive — and call ahead for Northpoint (seasonal) and Sasha&apos;s (variable winter hours).
            </p>
          </div>


          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best frozen custard in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>The 4 Pillars</dt>
              <dd style={{ color: "#444", margin: 0 }}>Kopp's, Leon's, Gilles, Oscar's</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Total stands featured</dt>
              <dd style={{ color: "#444", margin: 0 }}>8 verified neighborhood stands</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>USDA legal definition</dt>
              <dd style={{ color: "#444", margin: 0 }}>Frozen custard requires ≥1.4% egg yolk solids by weight</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Tradition</dt>
              <dd style={{ color: "#444", margin: 0 }}>Flavor of the Day — each stand publishes a daily rotating flavor calendar</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Oldest Milwaukee custard stand</dt>
              <dd style={{ color: "#444", margin: 0 }}>Gilles Frozen Custard (1938, 7515 W Bluemound Rd, Wauwatosa)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Milwaukee's claim</dt>
              <dd style={{ color: "#444", margin: 0 }}>Unofficial Frozen Custard Capital of the World</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/custard/leons-frozen-custard.jpg" alt="Leon's Frozen Custard walk-up stand on South 27th Street in Milwaukee — open since 1942" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Leon&apos;s Frozen Custard — the South 27th Street walk-up stand since 1942.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/custard/kopps-sign.jpg" alt="Kopp's Frozen Custard neon sign at the Glendale Milwaukee storefront" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Kopp&apos;s Frozen Custard — three locations, three Flavors of the Day each.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/custard/kopps-machines.jpg" alt="Continuous-batch frozen custard machines at Kopp's Frozen Custard in Milwaukee" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Continuous-batch machines at Kopp&apos;s — custard is made fresh all day.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/custard/frozen-custard-cone.jpg" alt="Frozen custard cone with the dense low-overrun texture that distinguishes custard from ice cream" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The dense, low-overrun texture that defines frozen custard.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#999", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. Credits: Michael Barera (CC-BY-SA-4.0), Eugene Kim (CC-BY-2.0), Eugene Kim (CC-BY-2.0), stu_spivack (CC-BY-SA-2.0). Gilles Frozen Custard is featured in the text but has no Wikimedia Commons photograph available as of June 2026.
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Frozen Custard at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The fast facts before you drive across town for a cone.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="vs-ice-cream" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frozen Custard vs. Ice Cream — The Real Difference</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>This isn&apos;t marketing. Frozen custard is a legally distinct product from ice cream — and that legal definition is also why it tastes so different.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "20px", marginBottom: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>The Legal Standard</p>
              <p style={{ color: "#333", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Under the FDA&apos;s standard of identity for ice cream (21 CFR 135.110), a product can only be labeled <strong>frozen custard</strong>, <strong>French ice cream</strong> or <strong>French custard ice cream</strong> if it contains <strong>at least 1.4% egg yolk solids by weight</strong>. Regular ice cream has no egg yolk minimum and most commercial brands use little to none. That single ingredient — egg yolk — is the foundation of the difference.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "16px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>EGG YOLKS</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Custard ≥1.4% egg yolk solids · ice cream typically 0%. Egg yolks add richness, structure and that signature silken mouthfeel.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>OVERRUN (AIR)</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Custard whips in very little air (~20% overrun). Commercial ice cream can run 50–100%+. Less air = denser, creamier, heavier feel.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>SERVE TEMPERATURE</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Custard is served ~5°F warmer than ice cream. That&apos;s why it stays smooth instead of crystallizing — and why it sticks to a cone better.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>MADE FRESH</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Authentic stands run continuous-batch freezers and remake custard multiple times a day. Ice cream is typically hardened and stored.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>BUTTERFAT</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Both must meet the FDA&apos;s 10% milkfat minimum, but most custard stands run materially higher — combined with egg yolks, that&apos;s the richness.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>WHY MILWAUKEE</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Wisconsin is the country&apos;s leading dairy state; Milwaukee&apos;s German immigrant baking and dessert culture took to egg-rich frozen custard early. Stands have been an everyday neighborhood institution here since the 1930s.</p>
              </div>
            </div>

            <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              <strong>The shortcut:</strong> if it tastes thicker than ice cream, melts slower, sticks to the cone and feels almost like a cold, set custard pie filling — that&apos;s the difference. The egg yolks do the work.
            </p>
          </section>

          <section id="flavor-of-the-day" style={{ marginBottom: "56px", scrollMarginTop: "80px", backgroundColor: c.green1, padding: "32px", borderRadius: "16px" }}>
            <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px" }}>THE TRADITION THAT RUNS THE CITY</p>
            <h2 style={{ color: c.cream, fontSize: "30px", fontWeight: "900", marginBottom: "16px" }}>The Flavor of the Day</h2>
            <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>
              Every authentic Milwaukee frozen custard stand publishes a Flavor of the Day — a rotating featured flavor (alongside the permanent vanilla and chocolate) that changes every single day. Kopp&apos;s actually runs <strong>three Flavors of the Day</strong>, every day, at all three locations: one chocolate-based, two non-chocolate.
            </p>
            <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              The calendars are real, they&apos;re published in advance — sometimes a year ahead — and locals genuinely plan their week around them. Caramel Cashew on a Tuesday? You&apos;ll see a line. Door County Cherry on a July Saturday? Twenty cars in the drive-through.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>KOPP&apos;S — 3 A DAY</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>kopps.com/flavor-forecast — one chocolate, two non-chocolate flavors at every location, calendar published a year ahead.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>GILLES</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>gillesfrozencustard.com — daily flavor posted online and on the in-store board. Lemon Custard is a recurring favorite.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>OSCAR&apos;S</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>oscarscustard.com — separate daily flavor at the West Allis and Franklin locations.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>MURF&apos;S</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>murfs.com — daily flavor at all four locations, posted on the website calendar.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>LEON&apos;S (THE EXCEPTION)</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>Leon&apos;s deliberately does NOT run a daily-flavor program. Vanilla, chocolate and a third rotating flavor — that&apos;s it. The menu has barely changed since 1942.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>CULVER&apos;S</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>culvers.com/flavor-of-the-day — search by your nearest location; the chain&apos;s Flavor of the Day system is the closest national equivalent to the Milwaukee tradition.</p>
              </div>
            </div>
          </section>

          <section id="pillars" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Four Pillars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Kopp&apos;s, Leon&apos;s, Gilles, Oscar&apos;s. These four are the heart of Milwaukee frozen custard. Everyone has a favorite; the only correct move for a first-time visitor is to try all four on one weekend.</p>

            {pillars.map((p) => (
              <div key={p.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <h3 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", margin: 0 }}>{p.name}</h3>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{p.priceRange}</span>
                    <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>Since {p.founded}</span>
                    {p.yearRound && <span style={{ backgroundColor: c.green1, color: c.yellow, padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>Year-Round</span>}
                  </div>
                </div>

                <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{p.hours}</p>

                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, marginBottom: "14px" }}>{p.history}</p>

                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Signature</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.signature}</p>
                </div>

                <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>What to Order</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.whatToOrder}</p>
                </div>

                <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Insider Tip</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.insiderTip}</p>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green1, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Locations</p>
                  {p.locations.map((loc) => (
                    <div key={loc.address} style={{ marginBottom: "6px" }}>
                      <p style={{ fontSize: "13px", color: c.green1, fontWeight: "700", margin: 0 }}>{loc.label}</p>
                      <p style={{ fontSize: "12px", color: "#555", margin: 0 }}>📍 {loc.address} {loc.phone && <span>· {loc.phone}</span>}</p>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>Today&apos;s flavor: <a href={`https://${p.flavorUrl}`} target="_blank" rel="noopener noreferrer" style={{ color: c.green2, fontWeight: "700" }}>{p.flavorUrl}</a></p>
              </div>
            ))}
          </section>

          <section id="neighborhood" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Custard Stands Worth Knowing</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Beyond the four pillars, these stands round out the authentic Milwaukee scene. None are throwaways — each has loyal regulars.</p>

            {neighborhoodStands.map((s) => (
              <div key={s.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "12px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 6px" }}>{s.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>{s.locations}</p>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: "0 0 8px" }}>{s.description}</p>
                <p style={{ fontSize: "12px", color: "#777", margin: "0 0 4px" }}>Today&apos;s flavor: <a href={`https://${s.flavorUrl}`} target="_blank" rel="noopener noreferrer" style={{ color: c.green2, fontWeight: "700" }}>{s.flavorUrl}</a></p>
                <p style={{ fontSize: "12px", color: "#777", margin: 0, fontStyle: "italic" }}>{s.note}</p>
              </div>
            ))}
          </section>

          <section id="culvers" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Culver&apos;s Question</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Visitors always ask. Here&apos;s the honest read.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "20px", marginBottom: "16px" }}>
              <p style={{ color: "#333", fontSize: "15px", lineHeight: 1.7, margin: "0 0 14px" }}>
                <strong>Culver&apos;s is real frozen custard.</strong> The chain was founded in <strong>Sauk City, Wisconsin in 1984</strong> by Craig and Lea Culver, and has grown to more than 900 locations across the U.S. The custard meets the egg-yolk standard, it&apos;s made fresh in batches at each restaurant, and Culver&apos;s publishes a Flavor of the Day at every location — searchable at culvers.com/flavor-of-the-day. The Wisconsin DNA is genuine.
              </p>
              <p style={{ color: "#333", fontSize: "15px", lineHeight: 1.7, margin: "0 0 14px" }}>
                <strong>But it&apos;s a different experience from the neighborhood stands.</strong> Culver&apos;s is a drive-through fast-casual restaurant with a full burger menu (the ButterBurger), cheese curds and a national brand standard. The walk-up window, the Flavor of the Day board hand-written on a corkboard, the regulars who know the counter staff by name — that&apos;s what Kopp&apos;s, Leon&apos;s, Gilles and Oscar&apos;s give you.
              </p>
              <p style={{ color: "#333", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                <strong>For visitors:</strong> if you&apos;ve never had Culver&apos;s, try it once on a road trip. For the actual Milwaukee frozen custard experience, drive past the Culver&apos;s and get to one of the historic stands. They&apos;re the reason the city earned the title in the first place.
              </p>
            </div>
          </section>

          <section id="calendar" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Seasonal Hours &amp; Year-Round Status</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Most authentic Milwaukee custard stands are open year-round — Wisconsinites eat frozen custard in January. The one big exception is Northpoint at Bradford Beach (seasonal lakefront pavilion).</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.beige}` }}>
                <thead>
                  <tr style={{ backgroundColor: c.green1 }}>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "700" }}>Stand</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "700" }}>Season</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "700" }}>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalCalendar.map((d, i) => (
                    <tr key={d.stand} style={{ backgroundColor: i % 2 === 0 ? c.cream : "white" }}>
                      <td style={{ padding: "12px", fontSize: "13px", color: c.green1, fontWeight: "700", verticalAlign: "top" }}>{d.stand}</td>
                      <td style={{ padding: "12px", fontSize: "13px", color: "#444", verticalAlign: "top" }}>{d.status}</td>
                      <td style={{ padding: "12px", fontSize: "13px", color: "#444", verticalAlign: "top" }}>{d.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "#666", fontSize: "13px", marginTop: "12px" }}>Source: each venue&apos;s website + Milwaukee press, confirmed June 2026. Always call ahead in January–March for the small stands.</p>
          </section>

          <section id="near" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Where to Try Custard Near Milwaukee&apos;s Major Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>If you&apos;re already going to a Brewers game, Summerfest, the lakefront or the Milwaukee Art Museum, here&apos;s the closest authentic stand to fit into the day.</p>
            {nearAttractions.map((n) => (
              <div key={n.attraction} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{n.attraction}</h3>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "700", margin: "0 0 6px" }}>{n.pick}</p>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{n.why}</p>
              </div>
            ))}
          </section>

          <section id="etiquette" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Walk-Up Etiquette, Tipping &amp; Cash vs. Card</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The local conventions visitors get wrong.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>CASH VS. CARD</p>
                <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "500" }}>Leon&apos;s has historically been cash-only — bring small bills (call (414) 383-1784 if you need current policy). Kopp&apos;s, Gilles, Oscar&apos;s, Murf&apos;s, Robert&apos;s and Culver&apos;s take cards. ATMs are usually nearby.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>TIPPING</p>
                <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "500" }}>Tip jars at the walk-up window — a couple of dollars on a multi-cone order is the local convention. Custard stands aren&apos;t sit-down service; nobody expects a 20% tip the way they would at a restaurant.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>WALK-UP VS. DRIVE-THRU</p>
                <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "500" }}>Leon&apos;s is windows only — no drive-through, no indoor seating, you eat outside or in your car. Kopp&apos;s, Gilles, Oscar&apos;s and Murf&apos;s have indoor seating and most have drive-throughs. Culver&apos;s has standard fast-casual seating + drive-through.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>DISH VS. CONE</p>
                <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "500" }}>A &ldquo;dish&rdquo; (cup) shows off the texture better than a cone — locals often order a dish for the Flavor of the Day so they can taste the dense custard without the cone&apos;s sweetness in the way.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>LINES</p>
                <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "500" }}>Friday and Saturday nights between 7 and 9 p.m., and after Brewers games, are peak. Lines move fast — the windows are staffed to handle volume. Don&apos;t order at the window if you haven&apos;t picked yet.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>WINTER ORDER</p>
                <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "500" }}>Yes, Wisconsinites order custard outside in winter at Leon&apos;s walk-up window. Yes, you can too — that&apos;s part of the experience. If indoor seating matters in January, Gilles, Kopp&apos;s, Oscar&apos;s and Robert&apos;s all have it.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food &amp; Family Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-ice-cream-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Ice Cream in MKE</Link>
              <Link href="/best-fish-fry-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Fish Fry</Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Date Ideas</Link>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do With Kids</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
              <Link href="/wisconsin-state-fair-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Wisconsin State Fair</Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Tap a question to expand.</p>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", marginBottom: "10px", overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", textAlign: "left", backgroundColor: isOpen ? c.cream : "white", border: "none", padding: "16px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "700", color: c.green1 }}>
                    <span>{f.question}</span>
                    <span style={{ fontSize: "20px", color: c.orange, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.15s", fontWeight: "300" }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px", color: "#444", fontSize: "14px", lineHeight: 1.7, borderTop: `1px solid ${c.beige}` }}>
                      <p style={{ margin: "12px 0 0" }}>{f.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New food openings, custard flavor highlights, weekend picks and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 8px" }}>© 2026 Discover Milwaukee. Your insider&apos;s guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75 }}>Custard stand facts verified against each venue&apos;s own website and Milwaukee press (OnMilwaukee, Journal Sentinel, Milwaukee Magazine, Urban Milwaukee) in June 2026. Hours, Flavors of the Day and seasonal opening dates shift — always confirm with the stand before going.</p>
        </footer>
      </div>
    </>
  );
}
