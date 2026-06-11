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

const trueClubs = [
  {
    name: "Five O'Clock Steakhouse",
    neighborhood: "Near West Side (Milwaukee)",
    address: "2416 W State St, Milwaukee, WI 53233",
    phone: "(414) 342-3553",
    priceRange: "$$$",
    hours: "Tue–Thu 4:30–8:30 p.m. · Fri 4:30–9 p.m. · Sat 4–9 p.m. · Closed Sun & Mon",
    founded: "1946 (as Coerper's Five O'Clock Club; Five O'Clock Steakhouse since 1980s)",
    signatures: "Hand-cut Black Angus steaks; perfectly cooked prime rib; relish tray on the table; brandy Old Fashioneds in the Alley Cat Lounge.",
    orderThis: "The filet or the bone-in ribeye; an Old Fashioned sweet before; relish tray as the opening ritual.",
    reservations: "Required (OpenTable + phone). Friday/Saturday book 2–3 weeks out.",
    dressCode: "Smart casual. No tank tops or athletic wear. Most diners go upscale-casual.",
    insiderTip: "Arrive 30 minutes early and have a drink in the Alley Cat Lounge — live music Wed–Sat with no cover. The lounge is the supper-club experience the dining room can't deliver.",
    menuUrl: "https://www.fiveoclocksteakhouse.com/menu/",
    siteUrl: "https://www.fiveoclocksteakhouse.com/",
  },
  {
    name: "The Packing House",
    neighborhood: "Mitchell Park / South Side (near Mitchell Airport)",
    address: "900 E Layton Ave, Milwaukee, WI 53207",
    phone: "(414) 483-5054",
    priceRange: "$$",
    hours: "Tue 11 a.m.–8 p.m. · Wed–Thu 11 a.m.–9 p.m. · Fri 11 a.m.–10 p.m. · Sat 3:30–10 p.m. · Sun 4–8 p.m. · Closed Mon",
    founded: "1974 (family-owned).",
    signatures: "From-scratch kitchen; supper-club fish fry; prime rib (Wed/Fri/Sat); Tom & Jerrys in winter; live music in the lounge.",
    orderThis: "Prime rib Wednesday or Saturday; Friday fish fry (cod or perch); the wedge salad with the relish tray.",
    reservations: "Strongly recommended (OpenTable). Walk-ins seated at the bar.",
    dressCode: "Casual to smart casual. The Packing House skews more mellow than Five O'Clock — jeans are fine.",
    insiderTip: "Live music Wed 5:30–8:30, Fri & Sat 6:30–9:30 in the lounge. The lounge is the supper-club soul of the place — sit there even if you're dining.",
    menuUrl: "https://packinghousemke.com/menu/",
    siteUrl: "https://packinghousemke.com/",
  },
  {
    name: "Clifford's Supper Club",
    neighborhood: "Hales Corners",
    address: "10418 W Forest Home Ave, Hales Corners, WI 53130",
    phone: "(414) 425-6226",
    priceRange: "$$",
    hours: "Tue–Thu 11 a.m.–9 p.m. · Fri 11 a.m.–10 p.m. · Sat 3–9 p.m. · Closed Sun & Mon",
    founded: "Family-owned, multi-generational neighborhood supper club.",
    signatures: "Famous Friday fish fry (all-you-can-eat); broasted chicken; prime rib; brandy Old Fashioneds.",
    orderThis: "Friday all-you-can-eat fish fry (cod or perch) with potato pancakes; sweet brandy Old Fashioned.",
    reservations: "Recommended for groups of 6+. Walk-ins fine for smaller parties (but expect a Friday wait).",
    dressCode: "Casual. This is everyday-Wisconsin attire.",
    insiderTip: "Friday AYCE fish fry is the move — separate banquet-hall seating opens 4–8 p.m. when the main dining room fills.",
    menuUrl: "https://cliffordssupperclub.com/hales-corners-milwaukee-county-clifford-s-supper-club-food-menu",
    siteUrl: "https://cliffordssupperclub.com/",
  },
  {
    name: "Saz's State House",
    neighborhood: "West Side / Wick Field",
    address: "5539 W State St, Milwaukee, WI 53208",
    phone: "(414) 453-2410",
    priceRange: "$$",
    hours: "Sun 11 a.m.–8:30 p.m. · Tue–Thu 11 a.m.–8:30 p.m. · Fri–Sat 11 a.m.–9 p.m. · Closed Mon",
    founded: "1976 by Steve 'Saz' Sazama on West State Street.",
    signatures: "Saz's original BBQ sauce; mozzarella marinara; supper-club tavern fish fry (cod) with potato pancakes; prime rib Friday/Saturday.",
    orderThis: "Three-piece Miller High Life beer-battered cod fish fry ($18.50) with potato pancakes; mozzarella marinara to start.",
    reservations: "Recommended Fri/Sat; walk-ins welcome.",
    dressCode: "Casual.",
    insiderTip: "The Lenten fish fry runs Wednesdays AND Fridays (Feb 18–April 5 in 2026). Saz's also stretches every other Friday all year.",
    menuUrl: "https://sazs.com/statehouserestaurant/statehousemenus/state-house-menu/",
    siteUrl: "https://sazs.com/statehouserestaurant/",
  },
  {
    name: "Klemmer's Banquet Center",
    neighborhood: "West Allis",
    address: "10401 W Oklahoma Ave, West Allis, WI 53227",
    phone: "(414) 541-0401",
    priceRange: "$$",
    hours: "Friday Fish Fry served Labor Day through Memorial Day (Sept–May). Banquet hours otherwise — call ahead.",
    founded: "1977 by Bill & Dorothy Klemmer.",
    signatures: "Old-school Friday fish fry in the Governor's Dining Room — baked or fried haddock, jumbo lake perch, walleye, lobster tails.",
    orderThis: "Jumbo lake perch with potato pancakes, coleslaw, salt-crust rye bread.",
    reservations: "Recommended for Friday fish fry.",
    dressCode: "Casual.",
    insiderTip: "Klemmer's is technically a banquet center — but the Friday fish fry has been a Milwaukee institution for 275+ consecutive Fridays per Milwaukee Record. Call to confirm the fish fry is on the week you go — it pauses outside the Sept–May window.",
    menuUrl: "https://www.klemmersmke.com/",
    siteUrl: "https://www.klemmersmke.com/",
  },
  {
    name: "Fox & Hounds Restaurant & Tavern",
    neighborhood: "Hubertus (35 min NW of Milwaukee, near Holy Hill)",
    address: "1298 Friess Lake Rd, Hubertus, WI 53033",
    phone: "(262) 628-1111",
    priceRange: "$$$",
    hours: "Mon–Thu 4–9 p.m. · Fri 4–10 p.m. · Sat 11 a.m.–10 p.m. · Sun 10 a.m.–9 p.m.",
    founded: "Historic 1845 log lodge — supper club for decades.",
    signatures: "Wisconsin supper-club menu in a 19th-century log lodge; Friday fish fry; prime rib; Sunday brunch.",
    orderThis: "Friday fish fry (cod or perch) followed by an Old Fashioned by the fireplace in the lounge.",
    reservations: "Strongly recommended weekends.",
    dressCode: "Smart casual. The room rewards the effort.",
    insiderTip: "Pair with a sunset visit to Holy Hill Basilica 5 minutes away — the drive into Hubertus through the Kettle Moraine is half the supper-club experience.",
    menuUrl: "https://foxandhoundsrestaurant.com/menus",
    siteUrl: "https://foxandhoundsrestaurant.com/",
  },
  {
    name: "Johnny Manhattan's",
    neighborhood: "Hubertus (35 min NW of Milwaukee)",
    address: "3718 Hubertus Rd, Hubertus, WI 53033",
    phone: "(262) 628-0000",
    priceRange: "$$$",
    hours: "Dinner Tue–Sun (call to confirm current seasonal hours). Closed Mon.",
    founded: "Building dates to 1865; restaurant opened 1999; expanded dining room added 2015.",
    signatures: "Italian-leaning supper-club menu — prime cut steak, ribs, pork chops, veal, prime rib, fish and seafood.",
    orderThis: "Prime rib on a weekend; the Italian-influenced steak preparations are the differentiator.",
    reservations: "Recommended (OpenTable).",
    dressCode: "Smart casual.",
    insiderTip: "The 1865 building atmosphere is the draw — request the original side of the room when you book. Italian touches set Johnny Manhattan's apart from the rest of the Hubertus supper-club cluster.",
    menuUrl: "https://www.johnnymanhattans.com/menus",
    siteUrl: "https://www.johnnymanhattans.com/",
  },
];

const styleClubs = [
  {
    name: "Eddie Martini's",
    label: "Steakhouse / Supper-Club Hybrid",
    neighborhood: "Wauwatosa",
    address: "8612 W Watertown Plank Rd, Wauwatosa, WI 53226",
    phone: "(414) 771-6680",
    priceRange: "$$$$",
    hours: "Tue–Sat: bar 4:30, dinner 5 p.m. · Closed Sun & Mon",
    description: "Refined steaks, chops and seafood with white-tablecloth supper-club energy. Not a true family supper club, but the martinis-and-Manhattans bar culture is pure supper-club lineage. Often cited as Milwaukee's best old-school steakhouse.",
    orderThis: "Bone-in filet, the Maine lobster, or any seafood special. Martinis are the namesake — order one.",
    insiderTip: "Reservations open at noon Mon–Fri and 3 p.m. Sat by phone — call early for weekends.",
  },
  {
    name: "Sandra's on the Park",
    label: "Modern Supper Club",
    neighborhood: "Hales Corners",
    address: "10049 W Forest Home Ave, Hales Corners, WI 53130",
    phone: "(414) 235-8889",
    priceRange: "$$",
    hours: "Limited weeknight evening hours; expanded Fri/Sat. Call to confirm.",
    description: "Family-owned since 2015 with a self-described 'supper club with a modern twist' menu — seafood, pasta, BBQ, fish fry, award-winning ribs.",
    orderThis: "Friday fish fry; the ribs (multiple awards); seasonal specials.",
    insiderTip: "If Clifford's down the road is packed (it will be on Friday), Sandra's is the right pivot.",
  },
  {
    name: "Ward's House of Prime",
    label: "Prime-Rib Temple (Supper-Club–Adjacent)",
    neighborhood: "East Town (Downtown Milwaukee)",
    address: "540 E Mason St, Milwaukee, WI 53202",
    phone: "(414) 223-0135",
    priceRange: "$$$$",
    hours: "Tue–Thu 4–8:30 p.m. · Fri–Sat 4–9 p.m. · Closed Sun & Mon",
    description: "Travel Channel named the prime rib the best large cuts in America. Not a true supper club — it's a downtown destination steakhouse — but the prime-rib-and-brandy DNA is unmistakably supper club. 700+ bourbons and whiskeys.",
    orderThis: "The 20 oz prime rib with horseradish cream. Try the bourbon flight.",
    insiderTip: "Get on the Wall of Fame by finishing 40+ oz of prime rib (record is 368 oz). Order one slice smaller than you think — Ward's portions are vast.",
  },
  {
    name: "Camp Bar (Shorewood + Third Ward)",
    label: "Northwoods-Supper-Club Lounge (No Kitchen)",
    neighborhood: "Shorewood: 4044 N Oakland Ave · Third Ward: 525 E Menomonee St",
    address: "Two locations — see above",
    phone: "Shorewood (414) 962-5182",
    priceRange: "$$",
    hours: "Shorewood: Mon–Thu 4 p.m.–2 a.m.; Fri 3 p.m.–2:30 a.m.; Sat–Sun noon–2:30/2 a.m. · Third Ward similar.",
    description: "Up-North-lodge atmosphere in two urban neighborhoods. Voted Best Old Fashioned in Milwaukee multiple years. No kitchen — drinks only — but the supper-club energy (taxidermy, Northwoods kitsch, brandy Old Fashioneds) is the whole point.",
    orderThis: "An Old Fashioned sweet. Then a brandy Manhattan.",
    insiderTip: "Camp is what you do BEFORE or AFTER a supper-club meal — pre-game with an Old Fashioned, then walk down to a fish fry. The brandy-forward whiskey/bourbon list is the city's deepest for the supper-club drink set.",
  },
  {
    name: "Three Brothers Serbian Restaurant",
    label: "Supper-Club–Adjacent (Serbian Dinner House)",
    neighborhood: "Bay View",
    address: "2414 S St Clair St, Milwaukee, WI 53207",
    phone: "(414) 481-7530",
    priceRange: "$$",
    hours: "Wed–Fri 5–9 p.m. · Sat–Sun 4–9 p.m. · Closed Mon & Tue",
    description: "James Beard Award winner (2002) in an 1897 Schlitz tavern building since 1956. Not a supper club — it's a Serbian dinner house — but the family-owned, multi-generational, locals-only, no-changes-since-1956 ethos is the closest spiritual cousin to a true supper club in the city.",
    orderThis: "Burek (cabbage, spinach, or meat), goulash, ćevapi. Save room for nothing — the burek is the show.",
    insiderTip: "Burek is baked to order — call ahead a day or two for the cabbage variety to guarantee it. No printed menu surprises here, just decades of Serbian home cooking.",
  },
];

const dayTripClubs = [
  {
    name: "HobNob Restaurant & Cocktail Lounge",
    drive: "~45 min south on I-94",
    address: "277 Sheridan Rd, Racine, WI 53403",
    phone: "(262) 552-8008",
    hours: "Tue–Thu 5–9 p.m. (bar opens 30 min prior) · Fri–Sat 4:30–10 p.m. · Sun bar 3:30–4:30 + supper 4:30–9 · Closed Mon",
    description: "Established 1954 on the shore of Lake Michigan in Racine. Lake views, sunken bar, classic supper-club menu. Perhaps the most postcard-perfect supper club within an hour of Milwaukee.",
    orderThis: "Filet, prime rib (weekends), or walleye. Old Fashioned sweet with brandy.",
    insiderTip: "Request a lake-view table when you book — the Lake Michigan sunset over the dining room is the entire experience.",
  },
  {
    name: "The Wisco — An Old Fashioned Supper Club",
    drive: "~1 hour NW (Dodge County)",
    address: "W3295 County Rd Y, Lomira, WI 53048",
    phone: "(920) 583-4351",
    hours: "Thu–Sat 4–9 p.m. · Closed Sun–Wed",
    description: "Not in Sister Bay — the actual Wisco is in Lomira, a rural cornfield-and-county-road supper club that has poured its Old Fashioneds the same way for 40+ years. Friday fish fry. Saturday steaks and prime rib.",
    orderThis: "Friday fish fry; Saturday prime rib; an Old Fashioned sweet — they call themselves an Old Fashioned supper club for a reason.",
    insiderTip: "This is what a true rural Wisconsin supper club looks like — worth the drive specifically as an outing. Pair with a Holyland brewery stop (Riverside, North Lake) on the way back.",
  },
  {
    name: "Sister Bay Bowl",
    drive: "~3 hours NE (Door County) — proper road trip",
    address: "10640 N Bay Shore Dr, Sister Bay, WI 54234",
    phone: "(920) 854-2841",
    hours: "Open year-round; seasonal hour changes — call ahead.",
    description: "Iconic Door County supper club with bowling lanes attached since 1958. Whitefish dinner is a regional rite of passage. Owner-operated by the Willems family for three generations.",
    orderThis: "Lake-caught whitefish; perch; the Friday fish fry; brandy Old Fashioned sweet.",
    insiderTip: "Pair with Door County Brewing across the way, a fall fish boil at Pelletier's, or a summer stop at Wilson's for ice cream. Reservations recommended in summer.",
  },
];

const reservationStrategy = [
  { label: "Friday night, Five O'Clock or Packing House", strategy: "Book 2–3 weeks ahead via OpenTable. Bar walk-ins possible if you arrive by 4:30 p.m." },
  { label: "Friday fish fry at Clifford's or Saz's", strategy: "Walk-in works if you arrive 4:30 or after 8 p.m. Peak (5:30–7:30) you'll wait 45+ min without a reservation." },
  { label: "Sunday supper at Hobnob or Fox & Hounds", strategy: "Book ahead — Sunday is real supper-club night, especially in summer. Day-trippers fill the room." },
  { label: "Special occasion / birthday", strategy: "Five O'Clock dining room (book 3+ weeks ahead) or Fox & Hounds in Hubertus (Saturday night by the fireplace)." },
  { label: "Walk-in attempt", strategy: "Sit at the bar/lounge — most true supper clubs serve the full menu in the lounge. The Alley Cat (Five O'Clock) and Packing House lounge are the most reliable." },
];

const faqs = [
  {
    question: "What makes a Wisconsin supper club different from a regular restaurant?",
    answer: "A true Wisconsin supper club hits a specific set of cultural markers: family-owned (often multi-generational), a relish tray brought to the table at the start of the meal (cottage cheese, kidney beans, crudité, crackers — varies by club), brandy Old Fashioneds as the house cocktail, prime rib and Friday fish fry as menu anchors, a lounge or cocktail bar that's distinct from the dining room, supper-only hours (open 4 or 5 p.m., closed Sundays or Mondays), decor that hasn't changed since the 1970s, and servers who've been there 20+ years. Most true supper clubs sit in rural or roadside locations — Wisconsin's supper-club tradition emerged from Prohibition-era roadhouses outside city limits. Within Milwaukee proper, Five O'Clock Steakhouse and The Packing House are the truest examples; the rural Hubertus clubs (Fox & Hounds, Johnny Manhattan's) and HobNob in Racine are the closest classic-format supper clubs within driving distance."
  },
  {
    question: "Why do Wisconsinites drink brandy Old Fashioneds instead of whiskey?",
    answer: "The legend points to the 1893 Chicago World's Fair, where the Korbel brothers introduced their California brandy to Midwestern German immigrants who recognized it as a cousin to old-country schnapps and fruit distillates. A competing theory says Wisconsin distributors found a cache of good Christian Brothers brandy after WWII while quality whiskey was scarce. Either way: Wisconsin now consumes roughly half of all Korbel brandy produced. A Wisconsin Old Fashioned uses brandy (not bourbon), muddled orange and cherry, bitters and either Sprite ('sweet'), citrus mixer ('sour'), or half-soda-half-Sprite ('press'). At a true supper club, your server expects you to specify — 'Brandy Old Fashioned sweet, please' is the correct order."
  },
  {
    question: "What's actually on a Wisconsin supper-club relish tray?",
    answer: "The standard relish tray is a small platter brought to the table when you sit down. It typically includes some combination of: crudité (carrots, celery, radishes, scallions on ice), cottage cheese, kidney beans, marinated three-bean salad, pickled herring or pickled vegetables, a cheese spread (often cheddar or beer cheese), crackers, breadsticks, or a basket of bread. The origin: supper clubs emerged from Prohibition-era Wisconsin roadhouses, and in winter the only available 'fresh' vegetables were pickled or canned. The relish tray is essentially the survival logic of 1930s rural Wisconsin codified into a dining ritual. It's complimentary — don't ask to add it to the bill."
  },
  {
    question: "Is a Friday fish fry the same as a supper club?",
    answer: "Related but distinct. A Friday fish fry is a Wisconsin tradition served everywhere — taverns, churches, supper clubs, breweries, even gas stations — rooted in Catholic dietary observance and German/Polish immigrant heritage. A supper club is a venue type with the broader cultural markers (relish tray, brandy Old Fashioned, supper-only hours, multi-generational ownership). Most true supper clubs serve a Friday fish fry as one element of the full supper-club package, but plenty of venues serve a great fish fry without being a supper club (Lakefront Brewery, Kegel's Inn, Serb Hall). For the truest combined experience, Clifford's in Hales Corners, Saz's State House, and The Packing House all serve fish fry inside the full supper-club atmosphere. See our /best-fish-fry-milwaukee guide for the dedicated fish-fry deep dive."
  },
  {
    question: "How are Milwaukee supper clubs different from rural 'Up North' supper clubs?",
    answer: "Milwaukee supper clubs evolved from the same Prohibition-roadhouse roots as their Northwoods cousins but adapted to urban surroundings — they're often the last building of their kind on a city block (Five O'Clock on State Street), preserved as time capsules. Up-North supper clubs (HobNob in Racine, Johnny Manhattan's in Hubertus, Sister Bay Bowl in Door County, Norske Nook, Mama's on Curtis Lake) sit on lakes or surrounded by forest, with cabin-lodge architecture, lake views, and a more isolated, drive-an-hour-just-for-dinner ethos. The cocktails, menu and rituals are identical; the setting is the variable. For an authentic rural Wisconsin supper-club night from Milwaukee, the 35-minute drive to Fox & Hounds in Hubertus is the highest-payoff option."
  },
  {
    question: "Do Wisconsin supper clubs take reservations?",
    answer: "It varies dramatically — and the answer is itself part of the culture. Five O'Clock Steakhouse, The Packing House, Fox & Hounds, HobNob, Johnny Manhattan's and Ward's House of Prime all take reservations (OpenTable for most). Clifford's takes reservations only for parties of 6+. Klemmer's recommends calling ahead for Friday fish fry. Some rural supper clubs proudly take no reservations at all — the wait in the lounge with a brandy Old Fashioned is the experience. Rule of thumb: book ahead for any Friday or Saturday night and any special occasion; walk in earlier (4:30–5:30) or later (after 8) and you can usually get a seat at the bar."
  },
  {
    question: "Is there a dress code at a Wisconsin supper club?",
    answer: "Most Milwaukee-area supper clubs are smart casual — no formal jacket required, but no athletic wear, tank tops, or beachwear. Five O'Clock Steakhouse and Fox & Hounds skew slightly more upscale (a button-down or nice sweater is appropriate). Clifford's, Saz's State House, Packing House and the rural clubs are come-as-you-are casual — jeans are completely standard. The unspoken rule: dress like you're meeting your grandparents for dinner. Supper clubs are family establishments, and the room rewards the effort even when it doesn't require it."
  },
  {
    question: "What time should I arrive at a Wisconsin supper club?",
    answer: "Two strategies. (1) The 4:30–5 p.m. early arrival: walk in when doors open, order an Old Fashioned in the lounge, talk to the bartender, and slide into the dining room around 5:30. This is the classic supper-club rhythm — the lounge IS the appetizer. (2) The 7:30–8 p.m. late arrival: the dinner rush has cleared, the room slows down, and you can linger over coffee and a brandy Alexander. Avoid 6:00–7:30 p.m. without a reservation — that's the peak crush. For Friday fish fry, the 4–5 p.m. window is dramatically calmer than 5:30–7:30."
  },
  {
    question: "Where is the best prime rib in Milwaukee?",
    answer: "Ward's House of Prime (540 E Mason St) holds the Travel Channel's 'Best Large Cuts in America' designation and has 700+ bourbons to pair — it's the city's prime-rib temple, though it's more steakhouse than true supper club. For prime rib inside a true supper-club setting: Five O'Clock Steakhouse, The Packing House (Wed/Fri/Sat), Fox & Hounds in Hubertus on a weekend, and Clifford's in Hales Corners (rotating night) all serve excellent prime rib. HobNob in Racine on a weekend is the lake-view option."
  },
  {
    question: "Are Wisconsin supper clubs kid-friendly?",
    answer: "Yes — supper clubs have always been family establishments, distinct from cocktail-only venues. Kids' menus are standard, and Friday fish fry in particular is a multigenerational family event in Wisconsin. The Packing House, Clifford's, Saz's State House, Fox & Hounds, Klemmer's and Johnny Manhattan's are all welcoming to kids. Camp Bar (Shorewood/Third Ward) is bar-only and 21+ — it's a supper-club-vibes lounge, not a dining option for families. Five O'Clock Steakhouse and Ward's House of Prime allow kids but skew adult after 6 p.m. — earlier seatings are smoother. Most supper clubs offer crayons and a quieter back room; ask when you book."
  },
];

const atAGlance = [
  { label: "Supper clubs in this guide", value: "7 true Milwaukee-area supper clubs · 5 supper-club–style spots · 3 day-trip clubs" },
  { label: "Verified", value: "June 2026 — cross-checked against each venue's site, OnMilwaukee, Milwaukee Record, Yelp June updates" },
  { label: "Brandy consumption (state)", value: "Wisconsin consumes ~50% of all Korbel brandy produced in the U.S." },
  { label: "Signature meal", value: "Relish tray · brandy Old Fashioned · prime rib OR Friday fish fry" },
  { label: "Signature drink", value: "Brandy Old Fashioned sweet — muddled orange & cherry, brandy, Sprite top" },
  { label: "Friday", value: "Fish fry night — peak supper-club crowds 5:30–7:30 p.m." },
  { label: "Dress code", value: "Smart casual at upscale clubs (Five O'Clock, Fox & Hounds); casual at neighborhood spots (Clifford's, Saz's)" },
  { label: "Kids welcome?", value: "Yes — supper clubs are family venues. Earlier seatings (5–6 p.m.) skew families." },
  { label: "Reservation norm", value: "Recommended Fri/Sat at every club. Walk-ins viable in the lounge at most clubs." },
  { label: "Closed Sundays?", value: "Most Milwaukee true supper clubs close Sun & Mon. HobNob (Racine) and Fox & Hounds (Hubertus) are the Sunday plays." },
];

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#what-is", label: "What Is a Supper Club" },
  { href: "#old-fashioned", label: "Brandy Old Fashioned" },
  { href: "#relish-tray", label: "Relish Tray" },
  { href: "#true-clubs", label: "True Supper Clubs" },
  { href: "#style-clubs", label: "Supper-Club Style" },
  { href: "#day-trip", label: "Day-Trip Clubs" },
  { href: "#strategy", label: "Reservations" },
  { href: "#faq", label: "FAQ" },
];

const allClubsForLd = [
  ...trueClubs.map((c) => ({ name: c.name, address: c.address, phone: c.phone, priceRange: c.priceRange, menuUrl: c.menuUrl, siteUrl: c.siteUrl, cuisine: "American (Supper Club)" })),
  ...styleClubs.map((c) => ({ name: c.name, address: c.address, phone: c.phone, priceRange: c.priceRange, cuisine: "American (Supper Club Style)" })),
  ...dayTripClubs.map((c) => ({ name: c.name, address: c.address, phone: c.phone, priceRange: "$$$", cuisine: "American (Supper Club)" })),
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Wisconsin Supper Clubs Milwaukee 2026: Verified Guide",
    description: "Definitive 2026 guide to the best Wisconsin supper clubs in and around Milwaukee — verified hours, brandy Old Fashioneds, relish trays, Friday fish fry, prime rib and the cultural markers that define a true supper club.",
    image: "https://www.discover-milwaukee.com/images/best-supper-clubs-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-supper-clubs-milwaukee",
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
      { "@type": "ListItem", position: 2, name: "Best Supper Clubs Milwaukee", item: "https://www.discover-milwaukee.com/best-supper-clubs-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Wisconsin Supper Clubs Milwaukee",
    description: "Verified Milwaukee-area Wisconsin supper clubs — true supper clubs, supper-club-style restaurants, and day-trip supper clubs.",
    numberOfItems: allClubsForLd.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: allClubsForLd.map((spot, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Restaurant",
        name: spot.name,
        servesCuisine: spot.cuisine,
        priceRange: spot.priceRange,
        telephone: spot.phone,
        ...(spot.menuUrl ? { hasMenu: spot.menuUrl } : {}),
        ...(spot.siteUrl ? { url: spot.siteUrl } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: spot.address.split(",")[0].trim(),
          addressLocality: (spot.address.match(/,\s*([^,]+?),\s*WI/) || [, "Milwaukee"])[1],
          addressRegion: "WI",
          postalCode: (spot.address.match(/WI\s+(\d{5})/) || [, ""])[1],
          addressCountry: "US",
        },
      },
    })),
  },
};

export default function BestSupperClubsMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Best Wisconsin Supper Clubs Milwaukee 2026 Guide</title>
        <meta name="description" content="Best Wisconsin supper clubs in Milwaukee, verified June 2026: Five O'Clock, Packing House, Clifford's, Saz's. Brandy Old Fashioneds, relish trays, fish fry." />
        <meta name="keywords" content="best wisconsin supper clubs milwaukee, wisconsin supper club milwaukee, milwaukee supper clubs 2026, brandy old fashioned milwaukee, relish tray, five o'clock steakhouse, the packing house milwaukee, clifford's supper club, fox and hounds hubertus, hobnob racine, friday fish fry supper club, prime rib milwaukee supper club" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-supper-clubs-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Wisconsin Supper Clubs Milwaukee 2026 Guide" key="og:title" />
        <meta property="og:description" content="Verified 2026 guide to Wisconsin supper clubs in Milwaukee — brandy Old Fashioneds, relish trays, prime rib, Friday fish fry. True clubs + day-trip picks." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-supper-clubs-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-supper-clubs-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Wisconsin Supper Clubs Milwaukee 2026 — brandy Old Fashioneds, prime rib, Friday fish fry." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-10T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-10T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Wisconsin Supper Clubs Milwaukee 2026 Guide" key="twitter:title" />
        <meta name="twitter:description" content="Verified June 2026 guide — Five O'Clock, Packing House, Clifford's, Fox & Hounds. Brandy Old Fashioneds, relish trays, Friday fish fry, prime rib." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-supper-clubs-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>VERIFIED JUNE 2026 · 15 SUPPER CLUBS · NO CLOSED VENUES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Best Wisconsin Supper Clubs Milwaukee 2026</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
              The <strong>definitive guide</strong> to true Wisconsin supper clubs in and around Milwaukee — relish trays, brandy Old Fashioneds, prime rib, Friday fish fry, and the cultural markers that separate a real supper club from everything else. Every venue verified against its own website and Milwaukee press in June 2026.
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
              <strong>Heads up:</strong> Every supper club below was verified against the venue's own website and current Yelp/OpenTable listings in June 2026. Several beloved Milwaukee-area supper clubs have closed since 2022 — River Lane Inn (Brown Deer), Jake's Restaurant (Pewaukee), Sven's, Smoky's Madison and Schreiner's (Fond du Lac) are all gone and have been excluded. Hours and reservation policies shift seasonally; always confirm Friday-fish-fry availability and Sunday/Monday hours before you go.
            </p>
          </div>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Wisconsin Supper Clubs at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The fundamentals every Milwaukee supper-club visitor should know.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="what-is" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>What Makes a True Wisconsin Supper Club</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              The Wisconsin supper club is a specific cultural format — not just any restaurant that serves steak. The tradition was born from Prohibition-era roadhouses in the 1920s and early '30s that sat outside city limits, beyond the reach of dry-county law. When Prohibition ended in 1933, those roadhouses evolved into "supper clubs" — destination dining rooms where the cocktails came first, the menu was long, and the room was the entire reason to drive an hour from town.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              A true Wisconsin supper club hits most or all of the following markers:
            </p>
            <ul style={{ color: "#444", fontSize: "15px", lineHeight: 1.85, paddingLeft: "20px", marginBottom: "20px" }}>
              <li><strong>Family-owned and often multi-generational.</strong> Same family, same building, often for 50+ years.</li>
              <li><strong>Roadside or rural setting</strong> (or a long-anchored neighborhood institution). Most aren't downtown.</li>
              <li><strong>A relish tray</strong> brought to the table at the start of the meal — cottage cheese, kidney beans, crudité, crackers, three-bean salad, cheese spread.</li>
              <li><strong>A brandy Old Fashioned culture.</strong> The house cocktail, ordered "sweet," "sour" or "press."</li>
              <li><strong>Prime rib, Friday fish fry, and hand-cut steaks</strong> as the menu anchors. Saturday is prime-rib night; Friday is fish fry.</li>
              <li><strong>A lounge or bar that's distinct from the dining room.</strong> The lounge is the appetizer — pre-dinner Old Fashioneds happen there.</li>
              <li><strong>Either "we don't take reservations" OR a strict reservation policy</strong> — both are part of the quirk.</li>
              <li><strong>Supper-only hours</strong> (most open at 4 or 5 p.m.; many close Sunday or Monday).</li>
              <li><strong>Servers who've worked there 20+ years.</strong> Tipping is generous and they know your order.</li>
              <li><strong>Decor that hasn't materially changed since the 1970s.</strong> Wood paneling, taxidermy, vintage menus framed on the wall.</li>
            </ul>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7 }}>
              We're rigorous about this. The "true Wisconsin supper clubs" list below contains only venues that hit most of these markers. A separate "supper-club–style" section flags modern interpretations and steakhouse hybrids, so you know what you're getting before you book.
            </p>
          </section>

          <section id="old-fashioned" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Brandy Old Fashioned: Wisconsin's Signature Cocktail</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              Walk into any Wisconsin supper club and the bartender will assume you want a brandy Old Fashioned. The state consumes roughly <strong>half of all Korbel brandy produced in the United States</strong> — a statistic that's both true and a little astonishing.
            </p>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>How to Order</p>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                The correct order is: <strong>"Brandy Old Fashioned, sweet."</strong> (Or "sour," or "press." Pick one.)<br /><br />
                <strong>Sweet</strong> = topped with Sprite/7-Up (the most common Wisconsin style).<br />
                <strong>Sour</strong> = topped with sour mix or grapefruit/lemon soda (Squirt is common).<br />
                <strong>Press</strong> = half soda water, half Sprite (less sweet than sweet, less tart than sour).<br /><br />
                Inside the glass: muddled orange slice, maraschino cherry, a couple dashes of Angostura bitters, brandy (usually Korbel or Christian Brothers), ice, then the mixer. A cherry on top.
              </p>
            </div>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              <strong>The origin story</strong> most often told traces back to the 1893 Chicago World's Fair, where the Korbel brothers introduced their California brandy to Midwestern German immigrants who recognized it as a cousin to the schnapps and fruit distillates of the old country. (Some historians question this — when researching <em>Wisconsin Cocktails</em>, the author found Korbel itself couldn't confirm the story.) A competing theory: Wisconsin distributors found a cache of good Christian Brothers brandy after WWII, when quality whiskey was scarce. Either way: Wisconsin is a brandy state, and the Old Fashioned is the proof.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7 }}>
              In Milwaukee specifically: <strong>Camp Bar (Shorewood and Third Ward)</strong> has been voted Best Old Fashioned multiple years. The Alley Cat Lounge at <strong>Five O'Clock Steakhouse</strong> pours them the classic way. Bryant's Cocktail Lounge (the city's oldest cocktail bar, 1938) makes a textbook one. Every true supper club on this list serves a credible brandy Old Fashioned.
            </p>
          </section>

          <section id="relish-tray" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Relish Tray</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              The relish tray is the single most distinctive supper-club ritual. You sit down, you order a drink, and before your server takes the dinner order, a small platter or carousel appears at the table — complimentary, no charge, no menu.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              <strong>What's on it:</strong> The contents vary by supper club, but the standard array includes some combination of: crudité (carrots, celery, radishes, scallions on ice), cottage cheese, kidney beans or three-bean salad, pickled vegetables, pickled herring, a cheese spread (cheddar or beer cheese), crackers and breadsticks. Some clubs add bread, raw mushrooms, or pickled beets.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              <strong>Why it exists:</strong> Wisconsin supper clubs evolved out of 1930s rural roadhouses, and in winter the only "fresh" vegetables available were pickled, canned or otherwise preserved. The relish tray is essentially the survival logic of pre-refrigeration Wisconsin codified into a dining ritual — making something hospitable out of what the cellar could keep. Today it survives because it's still wonderful: a free, salty, crunchy first act while the kitchen fires your prime rib.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7 }}>
              <strong>Where to find a great one in Milwaukee:</strong> Five O'Clock Steakhouse and Clifford's still bring the classic, no-frills tray. The Packing House sets out a fuller spread that doubles as a pre-dinner snack. Fox & Hounds in Hubertus does an old-school carousel. Don't ask to add it to the bill; don't compliment it too loudly; just enjoy it.
            </p>
          </section>

          <section id="true-clubs" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee-Area True Wisconsin Supper Clubs</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Seven verified venues that hit the cultural markers. Ordered roughly by how iconic and supper-club-classic they feel — Five O'Clock first because it is Milwaukee's most preserved time capsule, and the Hubertus pair last because they require a 35-minute drive but reward it.</p>

            {trueClubs.map((spot) => (
              <div key={spot.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.priceRange}</span>
                    <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.neighborhood}</span>
                  </div>
                </div>
                <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "5px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.hours}</p>
                <p style={{ color: "#555", fontSize: "13px", fontWeight: "600", marginBottom: "12px", fontStyle: "italic" }}>Founded: {spot.founded}</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase" }}>Signatures</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.signatures}</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "12px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase" }}>Order This</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.orderThis}</p>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#888", marginBottom: "4px", textTransform: "uppercase" }}>Reservations</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.reservations}</p>
                  </div>
                  <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#888", marginBottom: "4px", textTransform: "uppercase" }}>Dress Code</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.dressCode}</p>
                  </div>
                </div>

                <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase" }}>Insider Tip</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.insiderTip}</p>
                </div>

                <p style={{ fontSize: "12px", color: "#777", margin: "0 0 4px" }}>{spot.address}</p>
                <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>{spot.phone}</p>
              </div>
            ))}
          </section>

          <section id="style-clubs" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Supper-Club–Style Restaurants Worth Knowing</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These five venues are not true Wisconsin supper clubs — they're modern interpretations, steakhouse hybrids, or supper-club–adjacent lounges. Including them so you know the difference before you book. Each card is clearly labeled with how it relates to the supper-club tradition.
            </p>

            {styleClubs.map((spot) => (
              <div key={spot.name} style={{ backgroundColor: "white", border: `2px dashed ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "21px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.priceRange}</span>
                    <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.neighborhood}</span>
                  </div>
                </div>
                <p style={{ display: "inline-block", color: c.green1, backgroundColor: c.yellow, padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "700", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>{spot.label}</p>
                <p style={{ color: c.green1, backgroundColor: c.cream, display: "inline-block", padding: "5px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px", marginLeft: "8px" }}>{spot.hours}</p>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{spot.description}</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase" }}>Order This</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.orderThis}</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase" }}>Insider Tip</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.insiderTip}</p>
                  </div>
                </div>
                <p style={{ fontSize: "12px", color: "#777", margin: "0 0 4px" }}>{spot.address}</p>
                <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>{spot.phone}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "26px", fontWeight: "900", marginBottom: "8px" }}>Friday Fish Fry at Supper Clubs</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>
              The Friday fish fry is a Wisconsin Catholic-immigrant tradition that pre-dates the supper-club era — but a fish fry inside a true supper-club setting is a different animal than a tavern fish fry. The standouts on this guide for the combined experience: <strong>Clifford's</strong> (Hales Corners, all-you-can-eat), <strong>Saz's State House</strong> (Wick Field, beer-battered cod and potato pancakes), <strong>The Packing House</strong> (Mitchell Park, prime rib + fish fry both nights), <strong>Klemmer's</strong> (West Allis, banquet-hall scale fish fry Sept–May), and <strong>Fox & Hounds</strong> in Hubertus (lodge atmosphere, weekend reservations essential).
            </p>
            <Link href="/best-fish-fry-milwaukee" style={{ display: "inline-block", backgroundColor: c.green1, color: c.cream, padding: "12px 24px", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}>Full Best Fish Fry guide →</Link>
          </section>

          <section id="day-trip" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Day-Trip Wisconsin Supper Clubs Worth the Drive</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Three regional supper clubs an hour or more out of Milwaukee that deliver the full rural-supper-club experience the city can't quite match.
            </p>

            {dayTripClubs.map((spot) => (
              <div key={spot.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "20px 22px", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
                  <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.drive}</span>
                </div>
                <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "5px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.hours}</p>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{spot.description}</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase" }}>Order This</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.orderThis}</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase" }}>Insider Tip</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.insiderTip}</p>
                  </div>
                </div>
                <p style={{ fontSize: "12px", color: "#777", margin: "0 0 4px" }}>{spot.address}</p>
                <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>{spot.phone}</p>
              </div>
            ))}
          </section>

          <section id="strategy" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Reservation Strategy, Timing & Tipping</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>How to actually get a table and what to do when you sit down.</p>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px", marginTop: "16px" }}>By the situation</h3>
            {reservationStrategy.map((r) => (
              <div key={r.label} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>{r.label}</p>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{r.strategy}</p>
              </div>
            ))}

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px", marginTop: "24px" }}>What time to arrive</h3>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>
              There are two correct strategies. The <strong>4:30–5 p.m. early arrival</strong> is the classic supper-club rhythm: walk in when doors open, order a brandy Old Fashioned in the lounge, chat with the bartender for half an hour, slide into the dining room around 5:30. The lounge IS the appetizer. The <strong>7:30–8 p.m. late arrival</strong> catches the room as the dinner rush clears — perfect for a slower meal, dessert and a brandy Alexander. Avoid 6:00–7:30 without a reservation; that's the peak crush on every supper club on this list.
            </p>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px", marginTop: "24px" }}>Tipping etiquette</h3>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7 }}>
              Wisconsin supper-club servers often have 20+ years at the same establishment — they know the regulars and they remember names. Standard practice is 20% on the post-tax total, with an extra few dollars to the bartender if you spent meaningful time in the lounge before sitting down. For exceptional service or holidays, 25% is welcomed. The relish tray, the bread basket, and the after-dinner coffee don't appear on the bill — tip on the implied generosity.
            </p>
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

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>Keep exploring Milwaukee dining</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-fish-fry-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Fish Fry</Link>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Cocktail Bars</Link>
              <Link href="/best-steakhouses-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Steakhouses</Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Date Ideas</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
              <Link href="/milwaukee-bars" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Bars</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Supper-club openings, new restaurants, events and insider tips every Wednesday.</p>
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
