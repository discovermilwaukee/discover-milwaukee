import React, { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedGuides from "../components/RelatedGuides";

import NewsletterCTA from "../components/NewsletterCTA";
const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const DAYS = [
  { id: "all", label: "All Days" },
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
  { id: "sat", label: "Sat" },
  { id: "sun", label: "Sun" },
];

const REGIONS = [
  { id: "all", label: "All Neighborhoods" },
  { id: "downtown", label: "Downtown / Deer District" },
  { id: "third-ward", label: "Third Ward" },
  { id: "east-side", label: "East Side" },
  { id: "brewers-hill", label: "Brewer's Hill / Riverwest" },
  { id: "walkers-point", label: "Walker's Point" },
  { id: "bay-view", label: "Bay View" },
  { id: "south-side", label: "South Side / Mitchell" },
  { id: "west-side", label: "West Side / Story Hill" },
  { id: "suburbs", label: "Shorewood / Wauwatosa" },
];

const TAGS = [
  { id: "all", label: "All Types" },
  { id: "cocktails", label: "Cocktails" },
  { id: "wine", label: "Wine" },
  { id: "beer", label: "Beer" },
  { id: "food", label: "Food Deals" },
  { id: "oysters", label: "Oysters" },
  { id: "rooftop", label: "Rooftop / Patio" },
  { id: "late-night", label: "Late-Night" },
  { id: "hotel", label: "Hotel Bar" },
  { id: "brewery", label: "Brewery" },
  { id: "sports", label: "Sports Bar" },
  { id: "international", label: "International" },
];

const happyHourSpots = [
  { name: "Aperitivo", region: "third-ward", neighborhood: "Historic Third Ward", priceRange: "$$", address: "311 N Plankinton Ave, Milwaukee, WI 53203", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Thu 4–6 p.m.; Fri 4–5 p.m. (no Sun or Mon hours)", drinkSpecials: "Flat $8 — rotating happy-hour cocktails and wines by the glass", foodSpecials: "Flat $8 — rotating small bites (menu changes; dine-in only, no carry-out)", description: "Italian aperitivo bar in the Pritzlaff Building. Flat-$8 menu for drinks and food, rotating. Dine-in only — no to-go HH.", insiderTip: "The venue's own site lists Friday as both 4–5 and 4–6 — call (414) 276-4400 to confirm the Friday end time. Open Tue–Sat only.", tags: ["cocktails", "wine", "food", "international"] },
  { name: "Black Sheep", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "216 S 2nd St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri", "sat"], daysLabel: "Mon–Sat 4–6 p.m.; Fri all day 11 a.m.–6 p.m.", drinkSpecials: "$5 Wheatley martinis, $5 Four Roses Manhattans, $5 house wine, $5 house-made sangria · $3 drafts every day", foodSpecials: "$10 cheese board — Mon–Thu only", description: "Walker's Point staple. The all-day Friday window (11 a.m.–6 p.m.) is the longest weekday HH in this guide.", insiderTip: "The $10 cheese board is the move — but go Mon–Thu (not Fri/Sat). The homepage banner currently says Tue–Sat while the happy hour page says Mon–Sat; call (414) 223-0903 to confirm Mondays.", tags: ["cocktails", "wine", "food"] },
  { name: "Odd Duck", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "939 S 2nd St, Milwaukee, WI 53204", days: ["tue", "wed", "thu", "fri", "sat"], daysLabel: "Tue–Sat 3–6 p.m. (bar area only)", drinkSpecials: "$7 spritz (non-alcoholic version available), $5 draft beer and cider, $8 wine by the glass", foodSpecials: "Rotating happy-hour-only snack special (currently a $12 Taiwanese hujiao bing pork bun)", description: "Chef-driven restaurant that relocated from Bay View to Walker's Point in March 2022. Bar opens at 3 p.m.; dining room and kitchen open at 5 p.m.", insiderTip: "Sit at the bar to watch the open kitchen. The HH-only snack rotates — ask what's on. Full dinner service starts at 5.", tags: ["wine", "beer", "cocktails", "food"] },
  { name: "Von Trier", region: "east-side", neighborhood: "Lower East Side", priceRange: "$-$$", address: "2235 N Farwell Ave, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 4–6 p.m.", drinkSpecials: "$7 Von Trier Old Fashioned, select German drafts, select cocktails, and house red or white wine", foodSpecials: "Free popcorn all day with a drink (no discounted HH food)", description: "Milwaukee's German beer-hall fixture at Farwell & North; the Von Trier name dates to 1978. Under new ownership (John Dye of Bryant's and At Random) since 2025. Biergarten out back.", insiderTip: "Weeknights open at 4 p.m. (Fri 3, Sat/Sun 11). Monday's $20 Burger Club (burger, fries, half-liter Hofbräu) and Sunday half-off wine bottles run outside HH.", tags: ["beer", "cocktails", "rooftop"] },
  { name: "Maxie's Southern Comfort", region: "west-side", neighborhood: "West Side / Wauwatosa border", priceRange: "$$", address: "6732 W Fairview Ave, Milwaukee, WI 53213", days: ["mon", "tue", "wed", "thu", "fri", "sat"], daysLabel: "Mon–Sat 4–6 p.m.", drinkSpecials: "\"Buck Off!\" — $1 off all beer, wine and cocktails", foodSpecials: "Fresh-shucked oyster special (recently listed at $1–$2 each — confirm) · $9 select appetizers", description: "Branded \"Milwaukee's Happiest Happy Hour\" — Southern kitchen on the Wauwatosa border from Black Shoe Hospitality.", insiderTip: "Oysters with a whiskey cocktail is the move. Maxie's site blocks automated checks, so we verified via secondary sources — call (414) 292-3969 to confirm current oyster pricing and whether Sunday HH is running.", tags: ["food", "oysters", "cocktails"] },
  { name: "Miller Time Pub & Grill", region: "downtown", neighborhood: "Westown (Hilton Milwaukee)", priceRange: "$-$$", address: "509 W Wisconsin Ave, Milwaukee, WI 53203", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu 4–7 p.m.", drinkSpecials: "$4 Miller taps, $5 rail cocktails, $5 house wine · Game day: $5 Miller Lite drafts whenever the Brewers are playing; $1 off drafts all game when you wear Packers gear", foodSpecials: "$2 off select appetizers", description: "Downtown pub inside the Hilton Milwaukee, steps from the Baird Center and the downtown theaters.", insiderTip: "Great spot before a show at the Riverside or Pabst. Game-day deals change with the season — the Packers draft deal is the live one in fall.", tags: ["beer", "sports", "hotel"] },
  { name: "Birch", region: "brewers-hill", neighborhood: "Brewer's Hill / Lower East Side", priceRange: "$$$", address: "459 E Pleasant St, Milwaukee, WI 53202", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Fri 4–6 p.m.", drinkSpecials: "Happy-hour drink pricing not published — call (414) 323-7372", foodSpecials: "Happy-hour food pricing not published; the bar room serves the Birch Burger", description: "Wood-fired, seasonal restaurant (à la carte, plus an optional $86 tasting menu). Happy hour is the pre-dinner bar window before doors open for dinner at 5.", insiderTip: "Sit at the bar and trust the bartender. Closed Sun & Mon.", tags: ["cocktails", "wine", "food"] },
  { name: "Bryant's Cocktail Lounge", region: "south-side", neighborhood: "Historic Mitchell Street", priceRange: "$$", address: "1579 S 9th St, Milwaukee, WI 53204", days: ["sun", "tue", "wed", "thu"], daysLabel: "Sun & Tue–Thu 5–7 p.m.; late-night 11 p.m.–close (closed Mon)", drinkSpecials: "Cocktail Hour: $7 Wisconsin-style Old Fashioneds and $7 Depression-era cocktails · Late Nite: $7 Old Fashioneds and a $7 rotating \"Teeny Tini\" / \"Mini Man\" freezer martini or Manhattan", foodSpecials: "No food served — drinks only", description: "Milwaukee's oldest cocktail lounge, in business since 1938 and a 2026 Timeless Award winner. No printed cocktail menu — tell the bartender what you like.", insiderTip: "Two windows, both Sun & Tue–Thu: 5–7 p.m. and 11 p.m.–close. No specials Fri or Sat. Describe a mood (\"something bourbon-forward\") and the bartender takes it from there.", tags: ["cocktails", "late-night"] },
  { name: "Hooligan's Super Bar", region: "east-side", neighborhood: "Lower East Side", priceRange: "$", address: "2017 E North Ave, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 3–6 p.m. (venue says HH details \"will return soon\" — call to confirm)", drinkSpecials: "Current happy-hour drink deals not published by the venue", foodSpecials: "Current happy-hour food deals not published; Friday fish fry", description: "East Side neighborhood institution at Farwell & North with a deep tap list and 100-plus bottles and cans.", insiderTip: "The homepage still advertises a Mon–Fri 3–6 p.m. happy hour, but the specials page says details are coming back soon. Call (414) 273-5230 before you count on a deal.", tags: ["beer", "food", "sports"] },
  { name: "Mason Street Grill", region: "downtown", neighborhood: "East Town (The Pfister)", priceRange: "$$$", address: "425 E Mason St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6:30 p.m.; Monday Industry Night runs until 8:30 p.m. (not on holidays)", drinkSpecials: "$4 draft beers, $5 well drinks, $5 wine by the glass", foodSpecials: "$11 bar snacks", description: "Hotel-bar HH inside The Pfister, with live jazz Mon–Sat 6–10 p.m. (no cover). The closest thing to a grand-hotel HH downtown.", insiderTip: "Monday Industry Night (4–8:30 p.m.) is the longest single-day window in this guide. Live jazz starts at 6, so a 4 p.m. arrival gets you HH pricing and the first set.", tags: ["cocktails", "wine", "hotel"] },
  { name: "The Bar at Saint Kate", region: "downtown", neighborhood: "East Town (Saint Kate)", priceRange: "$$", address: "139 E Kilbourn Ave, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu 3–5 p.m.", drinkSpecials: "Happy-hour specials not published online — call (414) 291-4797", foodSpecials: "Happy-hour food specials not published online", description: "Arts-hotel lobby bar with a rotating gallery, sushi and Proof Pizza. Live music nightly from 5 p.m. — HH ends as the music starts.", insiderTip: "If you stay through 5, you get the music for free. THC-infused drink options are on the menu. The bar is cashless.", tags: ["cocktails", "wine", "hotel"] },
  { name: "The Outsider (rooftop)", region: "third-ward", neighborhood: "Third Ward (Kimpton Journeyman)", priceRange: "$$$", address: "310 E Chicago St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (venue's events page says Mon–Thu — confirm Fridays)", drinkSpecials: "$10 Outsider Originals signature cocktails, plus select beer and wine specials", foodSpecials: "Japanese-inspired small bites (HH food pricing not published)", description: "9th-floor rooftop atop the Kimpton Journeyman Hotel, open year-round (indoor space with retractable glass walls; outdoor areas are weather-dependent). The best rooftop HH downtown.", insiderTip: "Thursday \"Sips & Sounds\" DJ nights run 7:30–11:30 p.m. Walk-in seating only; groups max 15.", tags: ["cocktails", "rooftop", "hotel"] },
  { name: "Tre Rivali", region: "third-ward", neighborhood: "Third Ward (Kimpton Journeyman)", priceRange: "$$$", address: "200 N Broadway, Milwaukee, WI 53202", days: ["tue", "wed", "thu", "fri", "sat"], daysLabel: "Snack Hour Tue–Sat 2–5 p.m.; Wine Wednesday 5–9 p.m.", drinkSpecials: "Wine Wednesday: half-price select bottles (5–9 p.m.) · Snack Hour drink pricing not published", foodSpecials: "Snack Hour menu of Mediterranean small plates (items and prices not published online)", description: "Mediterranean restaurant in the Kimpton Journeyman. It doesn't call it a happy hour — the afternoon \"Snack Hour\" runs Tue–Sat 2–5 p.m.", insiderTip: "No afternoon or dinner service Sun–Mon. Call (414) 291-3971 for the current Snack Hour menu.", tags: ["wine", "food", "hotel", "international"] },
  { name: "Lupi & Iris", region: "downtown", neighborhood: "East Town", priceRange: "$$$", address: "777 N Van Buren St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 3–6 p.m.", drinkSpecials: "$4 select beers, $7 select wines, $9 select cocktails", foodSpecials: "Happy hour menu: arancini, panisse, Parmesan frites, salumi, fromage, marinated olives, stuffed dates, Le Burger and more (prices not posted online)", description: "Mediterranean / Coastal restaurant from James Beard Award–winning chef Adam Siegel, near the lakefront.", insiderTip: "Sit at the bar for the HH menu — one of the best ways to taste Siegel's cooking without a full dinner. (414) 293-9090.", tags: ["cocktails", "wine", "international", "food"] },
  { name: "Tupelo Honey", region: "third-ward", neighborhood: "Third Ward", priceRange: "$$", address: "511 N Broadway, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (Hoot & Holler HH, dine-in only)", drinkSpecials: "$5 well spirits · $2 off drafts, bottles, cans and glasses of wine · Themed weeknights: Mimosa Monday ($2 off mimosas), 'Tini Tuesday ($3 classic gin/vodka martinis & cosmos), Wine Wednesday (half-off bottles), Tequila Thursday ($6 Tupelo Honey Margarita)", foodSpecials: "$6 starters", description: "Southern kitchen with a broad HH drink list downtown. Themed weeknights run alongside the daily HH.", insiderTip: "Specials come from Tupelo Honey's brand-wide HH, which notes offerings can vary by location — confirm at (414) 207-4604 if a specific deal matters.", tags: ["food", "cocktails", "wine"] },
  { name: "The Wicked Hop", region: "third-ward", neighborhood: "Third Ward", priceRange: "$$", address: "345 N Broadway, Milwaukee, WI 53202", days: ["tue", "sun", "wed", "thu", "fri"], daysLabel: "Tuesday all day (11 a.m.–10 p.m.) + Sunday 4–9 p.m.; other weekday specials vary by day", drinkSpecials: "Tue all-day HH: $7 select cocktails · Wed: $1 off Third Space beers · Thu: $4 Modelo tall boys & Milagro shots · Fri: $4 Jim Beam shots, $8 Tito's double talls · Sun 4–9 p.m. HH", foodSpecials: "Tue: $9 select apps · Wed: $3.50 sliders · Thu: Taqueria Thursday rotating special · Fri: fish fry · Mon & Sun evenings: Burger Madness", description: "Third Ward's oldest building (1875). The all-day Tuesday HH is the standout; the rest of the week runs day-specific specials rather than a fixed 4–6 window.", insiderTip: "Tuesday all-day pricing is the steal ($7 cocktails, $9 apps). Specials are posted week-by-week at thewickedhop.com/specials and rotate.", tags: ["beer", "cocktails", "food", "weekend"] },
  { name: "Uncle Bucks on Third", region: "downtown", neighborhood: "Deer District", priceRange: "$$", address: "1125 N Dr Martin Luther King Jr Dr, Milwaukee, WI 53203", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Fri 4–7 p.m. per the specials page (NOT during Fiserv Forum events; Tuesday uncertain — see tip)", drinkSpecials: "$5 happy hour (venue doesn't publish which drinks) — call (414) 988-0355", foodSpecials: "No HH food deal published; Friday fish fry 4–10 p.m.; Saturday brunch with $19 bottomless mimosas", description: "Multi-level bar and restaurant with a rooftop, adjacent to Fiserv Forum. Opened 2019; under new ownership since June 2026 with a new menu.", insiderTip: "HH is suspended on Fiserv Forum event nights — check the arena schedule. The venue's homepage lists a conflicting 3–5 p.m. window, a Sept. 2026 Urban Milwaukee profile lists it open Wed/Thu/Sun and Fri/Sat only, and the bar says it's updating its specials — call ahead.", tags: ["sports", "food", "rooftop"] },
  { name: "Café Hollander — Downer", region: "east-side", neighborhood: "East Side (Downer)", priceRange: "$$", address: "2608 N Downer Ave, Milwaukee, WI 53211", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu 3–5 p.m.", drinkSpecials: "Half off Lowlands Brewing Collaboratives, Bier of the Month, house wines, specialty mules and sangria", foodSpecials: "No published HH food deals (Friday fish fry is regular price)", description: "Belgian grand-café with a long beer list and a Downer Ave patio. Lowlands Brewing collaborations anchor the HH.", insiderTip: "Happy hour is published brand-wide for the Hollander cafés; the Downer page itself doesn't list it — confirm locally at (414) 963-6366.", tags: ["beer", "wine", "international", "rooftop"] },
  { name: "Palomino Bar", region: "bay-view", neighborhood: "Bay View", priceRange: "$", address: "2491 S Superior St, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Weekdays 4–6 p.m.", drinkSpecials: "$15 \"Sweet Ol' Beer & a Burger\": a pint from the brewery of the month plus a brisket burger · Thursdays: $1 off most Old Friends beers with a Palomino koozie", foodSpecials: "Brisket burger in the $15 HH combo · daily specials (Mon cheese curds, Tue pimento mac, Wed fried bologna, Fri fish fry, Sat beer can chicken, Sun fried chicken)", description: "Honky-tonk bar on the south end of Bay View, reopened in 2022 under new owners. Brisket burgers and hot fried chicken sandwiches.", insiderTip: "Bar opens at 4 daily; kitchen closes at 9. The $15 beer-and-burger combo is the deal.", tags: ["beer", "food"] },
  { name: "At Random", region: "bay-view", neighborhood: "Bay View", priceRange: "$$", address: "2501 S Delaware Ave, Milwaukee, WI 53207", days: ["tue", "wed", "thu"], daysLabel: "Tue–Thu 5–7 p.m. (indoors only; not on holidays)", drinkSpecials: "$6 Old Fashioneds plus specially priced cocktails · Thursdays: no up-charge for dairy-free ice cream drinks", foodSpecials: "No food served — drinks only", description: "Historic Bay View cocktail lounge — serving ice cream cocktails \"since 1964\" and owned by John Dye (Bryant's) since 2018. Specialty drinks run $11–$14.", insiderTip: "Dim, vintage, 21+ indoors (kids allowed on the patio with a parent until 8 p.m.). Walk-in only. Closed Mondays.", tags: ["cocktails"] },
  { name: "Lost Whale", region: "bay-view", neighborhood: "Bay View", priceRange: "$$", address: "2151 S Kinnickinnic Ave, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 4–6 p.m.", drinkSpecials: "Half off house staple cocktails and tap beer · $5 Old Fashioneds · $5 glasses of Odyssea sangria · Wed 7 p.m.–close: $5 wine pours / $20 bottles · Thu 7 p.m.–close: 25% off whiskey pours", foodSpecials: "No kitchen — Pallino Burger truck on the patio Thu 5–9 p.m., Fri–Sat 5–10 p.m.", description: "Bay View cocktail bar at the north end of KK with a backyard patio. The daily $5 Old Fashioned is the cheap-cocktail anchor.", insiderTip: "The food truck is outdoors, so hours can shift in winter. Patio fills fast on warm nights.", tags: ["cocktails", "beer", "rooftop"] },
  { name: "Avli", region: "brewers-hill", neighborhood: "Brewer's Hill", priceRange: "$$", address: "1818 N Hubbard St, Milwaukee, WI 53212", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (bar and patio only)", drinkSpecials: "$8 cocktails (A-Gouri, Klima Klub, Canela Sour) · $12 half-liter / $24 liter carafes of Greek table wine · $5 Mythos lager", foodSpecials: "Greek spreads $6 single / $9 trio with pita · kataifi shrimp and wagyu soutzoukakia $4 each · Greek fries $7 · zucchini chips $9", description: "Greek small-plates restaurant with a wine-forward bar and a seasonal patio in Brewer's Hill.", insiderTip: "HH is served at the bar and patio only, not the dining room. A 2.95% surcharge is added to checks (removable on request).", tags: ["wine", "cocktails", "international", "food"] },
  { name: "BelAir Cantina — Water St", region: "east-side", neighborhood: "Lower East Side (Brady-adjacent)", priceRange: "$$", address: "1935 N Water St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri", "sat"], daysLabel: "Late-night HH Thu–Sat 9–11 p.m. (Water St only) · $5 frozen margaritas Mon–Fri 11 a.m.–5 p.m. · Taco Tue & Thu all day", drinkSpecials: "Late night: $5 margaritas, $3 tequila shots, $6 specialty cocktails · Mon–Fri before 5: $5 frozen margaritas · Tue & Thu: $3 Modelo and Dos Equis Ambar drafts, $3 Tecate cans, $3 mystery tequila/mezcal shots", foodSpecials: "Late night: $6 queso blanco fundido, $5 nachos, $3 walk-in tacos, $5 guacamole · Tue & Thu: $3 select tacos all day · daily featured taco", description: "Mexican spot with one of the city's only real late-night HH windows — Thu–Sat 9–11 p.m., specifically at the Water St location.", insiderTip: "The 9–11 p.m. window is Thu/Fri/Sat only at Water St. Specials are posted weekly at belaircantina.com. (414) 226-2245.", tags: ["cocktails", "food", "late-night", "international"] },
  { name: "Camino", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$", address: "434 S 2nd St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 2–5 p.m.", drinkSpecials: "2-for-1 domestic tall boys", foodSpecials: "Half-off pierogi (dine-in only) · $5 Burger Mondays all day · Friday fish fry", description: "Polish-inspired gastropub with a deep craft tap list. A planned move to the former Engine Co. No. 3 firehouse at 217 W National Ave was pushed back to 2027 (National Ave reconstruction), so Camino stays on 2nd St for now.", insiderTip: "The 2 p.m. start is one of the earliest HH windows in the city. Half-off pierogi is the only way — order multiple flavors. (414) 763-0232.", tags: ["beer", "food", "international"] },
  { name: "Movida at Hotel Madrid", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "600 S 6th St, Milwaukee, WI 53204", days: ["wed", "thu", "fri", "sat", "sun"], daysLabel: "Wed–Sun 4–6 p.m., bar seating only (closed Mon & Tue)", drinkSpecials: "Drink specials offered at the bar; prices not published (regular sangria is $12 a glass in red, white or rosé)", foodSpecials: "$1 tapas (garden paella, pan con tomate, pimento cheese spread, whipped ricotta & hot honey tosta) · $3 (manchego, drunken goat cheese, vegetable empanadillas, cauliflower tosta) · $5 (patatas bravas, Moroccan beef barbacoa tacos)", description: "Spanish tapas in the Hotel Madrid with a rooftop patio. The $1 tapas at the bar is one of the best food deals in Milwaukee.", insiderTip: "Bar-only, and a 20% service charge is added to every bill. Rooftop is seasonal — call ahead in winter. (414) 488-9146.", tags: ["wine", "food", "international", "rooftop", "hotel"] },
  { name: "Iron Horse Hotel — Branded", region: "walkers-point", neighborhood: "Walker's Point (Iron Horse Hotel)", priceRange: "$$", address: "500 W Florida St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu 4–6 p.m. (hotel site also says \"weekdays\" — confirm Fridays)", drinkSpecials: "$5 draft beers · $5 tall boys · half-price rail · half-price glasses of wine", foodSpecials: "No HH food deals published", description: "The Iron Horse Hotel's pub-style bar with pool, shuffleboard, foosball and arcade games. The Yard patio runs the same 4–6 HH in season.", insiderTip: "Walker's Point is dense around the Iron Horse — walk to Camino, Movida or Bryant's after. (414) 374-4766.", tags: ["cocktails", "beer", "hotel"] },
  { name: "Steny's Tavern & Grill", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "800 S 2nd St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily specials, not a fixed HH: Mon $1 off all drinks all day; Sat–Sun brunch drink prices until 6 p.m.", drinkSpecials: "Mon $1 off all beer, seltzer, mixed drinks & shots · Tue $1 off margaritas/palomas · Wed $1 off seasonal cocktails, $3 select cold shots · Thu $2 off local craft pitchers, $30 seltzer buckets · Fri $10 tap Bulleit Old Fashioned, $9 brandy Old Fashioned, $5 Steny Bombs · Sat–Sun $7 Bloody Marys & $6 mimosas until 6 p.m.", foodSpecials: "Mon specialty mac & cheese · Tue $12 smash burger (dine-in) · Wed $4 off shareables · Thu 6 wings for $6 from 6 p.m. (dine-in, with a drink) · Fri fish fry", description: "Walker's Point sports bar staple since 1985 — Packers crowd, big patio, game-day shuttles.", insiderTip: "Steny's currently runs shuttles for Packers games and concerts ($10 bar minimum) — check stenystavern.com/shuttle-schedule. Monday's $1-off-everything is the best all-day value here.", tags: ["beer", "sports", "late-night", "weekend"] },
  { name: "Boone & Crockett", region: "walkers-point", neighborhood: "Walker's Point (riverfront)", priceRange: "$$", address: "818 S Water St, Milwaukee, WI 53204", days: ["sun", "wed", "thu", "fri", "sat"], daysLabel: "HH every day from open until 7 p.m., and all day Sunday (closed Mon & Tue)", drinkSpecials: "$1 off draft beers and $7 house cocktails during HH", foodSpecials: "No kitchen — Taco Moto truck on the patio spring through fall; South Water Snacks pop-up inside in winter", description: "Cocktail bar with one of the biggest riverside patios in the city (patio bar is seasonal). Open Wed–Thu 4 p.m.–2 a.m., Fri–Sun 3 p.m.–2 a.m.", insiderTip: "Sunday all-day HH is the standout — most other spots don't run Sunday HH. Dogs welcome on a leash.", tags: ["cocktails", "rooftop", "weekend"] },
  { name: "Story Hill BKC", region: "west-side", neighborhood: "Story Hill (just west of downtown)", priceRange: "$$", address: "5100 W Bluemound Rd, Milwaukee, WI 53208", days: ["tue", "wed", "thu", "fri", "sat"], daysLabel: "Tue–Sat 2–6 p.m. (no Monday hours)", drinkSpecials: "$2 off all tap beers and tap cocktails · $8 glasses of select red, white, rosé and sparkling wines", foodSpecials: "Rotating Mid-Day Menu of Midwest-inspired dishes, 3–5 p.m.", description: "Neighborhood bistro with a 4-hour drink HH window — one of the longest in this guide. Tap cocktails are the differentiator.", insiderTip: "Tap cocktails at $2 off are a rare find. Lunch 11–2 and dinner 5–9 Tue–Sat; brunch Sat–Sun 9–2. (414) 539-4424.", tags: ["beer", "cocktails", "wine", "food"] },
  { name: "Three Lions Pub", region: "suburbs", neighborhood: "Shorewood", priceRange: "$$", address: "4515 N Oakland Ave, Shorewood, WI 53211", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (weekend HH not confirmed)", drinkSpecials: "$2 off tap beers, house cocktails and wine by the glass · Old Fashioned Friday: discounted Old Fashioneds all day (recently $6 — confirm)", foodSpecials: "$2 off select appetizers at HH · Thu $1 traditional wings (4–9 p.m.)", description: "British pub with the most consistent North Shore HH. Long beer list and Quiz Night Wednesdays at 7.", insiderTip: "Old Fashioned Friday is the trip to Shorewood worth making. The pub's site blocks automated checks and it said it was updating specials in mid-2026 — call (414) 763-6992 for the current weeknight deals.", tags: ["beer", "cocktails", "food"] },
  { name: "Gathering Place Brewing", region: "brewers-hill", neighborhood: "Riverwest", priceRange: "$", address: "811 E Vienna Ave, Milwaukee, WI 53212", days: ["mon", "tue", "wed"], daysLabel: "Mon–Wed 4–6 p.m.", drinkSpecials: "$2 off full pours", foodSpecials: "No HH food deals; the taproom sells Flourchild pizza baked on site, Bavarian pretzels and Usinger's snack sticks", description: "Riverwest brewery taproom with a rare early-week HH. Dog-friendly, neighborhood-feel.", insiderTip: "Don't confuse it with the Wauwatosa taproom (closed Mondays). Walk to Lakefront Brewery after for the full Riverwest beer crawl.", tags: ["beer", "brewery"] },
];

const faqs = [
  {
    question: "What are the best happy hour deals in Milwaukee?",
    answer: "Top all-around Milwaukee happy hour deals right now: Aperitivo (flat $8 cocktails, wines and small bites, Tue–Thu 4–6 + Fri 4–5), Black Sheep ($5 Wheatley martinis, Four Roses Manhattans and house wine, $3 drafts, $10 cheese board Mon–Thu), Maxie's ($2 oysters, $9 select apps, $1 off all drinks Mon–Sat 4–6), Lupi & Iris ($4 beer / $7 wine / $9 cocktails Mon–Fri 3–6 from James Beard winner Adam Siegel), Mason Street Grill inside The Pfister ($4 drafts, $5 wells, $5 wine Mon–Fri 4–6:30), Odd Duck ($5 drafts and cider, $7 spritz, $8 wine Tue–Sat 3–6) and Movida at Hotel Madrid ($1 tapas at the bar Wed–Sun 4–6)."
  },
  {
    question: "What time does happy hour start in Milwaukee?",
    answer: "Most Milwaukee HHs run weekday 4–6 p.m. The earliest starts are Camino (2 p.m. Mon–Fri), Story Hill BKC (2 p.m. Tue–Sat) and Tre Rivali's Snack Hour (2 p.m. Tue–Sat at the Kimpton Journeyman); Odd Duck and Lupi & Iris both start at 3. The longest single-day windows are The Wicked Hop's all-day Tuesday (11 a.m.–10 p.m.), Black Sheep's all-day Friday (11 a.m.–6 p.m.) and Mason Street Grill's Monday Industry Night (4–8:30 p.m.). For late-night, BelAir Cantina Water St runs 9–11 p.m. Thu–Sat and Bryant's runs a second window from 11 p.m. to close on Sun and Tue–Thu."
  },
  {
    question: "Where is happy hour open on Sunday in Milwaukee?",
    answer: "Sunday happy hour is rare in Milwaukee. Confirmed Sunday HH spots: Boone & Crockett (all-day Sunday HH — $1 off drafts and $7 house cocktails — the city's standout Sunday move), The Wicked Hop (Sunday 4–9 p.m.), Bryant's Cocktail Lounge (Sunday 5–7 p.m. and 11 p.m.–close, $7 Old Fashioneds), Movida at Hotel Madrid (Sunday 4–6 p.m., $1 tapas), Von Trier (daily 4–6 p.m.), Lost Whale (daily 4–6 p.m.) and Steny's ($7 Bloody Marys and $6 mimosas until 6 p.m. Sat–Sun)."
  },
  {
    question: "Where can I get cheap drinks in Milwaukee?",
    answer: "For pure value: Black Sheep ($3 drafts every day plus $5 martinis and Manhattans at HH), Mason Street Grill ($4 drafts and $5 wells Mon–Fri 4–6:30 — inside The Pfister, no less), Miller Time Pub downtown ($4 Miller taps and $5 rails Mon–Thu 4–7), Lupi & Iris ($4 select beers Mon–Fri 3–6), Odd Duck ($5 drafts and cider Tue–Sat 3–6), Steny's (Monday $1 off every drink all day), Lost Whale ($5 Old Fashioneds daily 4–6), At Random ($6 Old Fashioneds Tue–Thu 5–7), Three Lions Pub (discounted Old Fashioneds all day Friday) and Gathering Place Brewing ($2 off full pours Mon–Wed 4–6). Camino does 2-for-1 domestic tall boys with half-off pierogi Mon–Fri 2–5."
  },
  {
    question: "What Milwaukee bars have the best happy hour food?",
    answer: "Movida at Hotel Madrid in Walker's Point runs $1 tapas at the bar (Wed–Sun 4–6: garden paella, pan con tomate, pimento cheese, whipped ricotta tosta) — arguably the best food deal in the city. Maxie's has $2 oysters and $9 select apps Mon–Sat 4–6. Avli does Greek spreads for $6 (trio $9) plus $4 kataifi shrimp and soutzoukakia Mon–Fri 4–6. Tupelo Honey runs $6 starters Mon–Fri 4–6. Black Sheep's $10 cheese board (Mon–Thu) is the wine-pairing classic. The Wicked Hop runs $9 select apps all day Tuesday. BelAir Cantina Water St's late-night window (Thu–Sat 9–11 p.m.) brings $3 walk-in tacos, $5 nachos and $6 queso fundido. Palomino's $15 beer-and-brisket-burger combo (weekdays 4–6) and Three Lions' $1 wings (Thursdays) round it out."
  },
  {
    question: "What are the best rooftop and patio happy hours in Milwaukee?",
    answer: "The Outsider rooftop atop the Kimpton Journeyman in the Third Ward (Mon–Fri 4–6, $10 Outsider Originals) is the city's best rooftop HH and runs year-round thanks to its enclosed indoor space. Uncle Bucks on Third has a rooftop in the Deer District with a $5 HH Tue–Fri 4–7 (suspended on Fiserv event nights). Boone & Crockett's riverside patio in Walker's Point is the standout outdoor cocktail bar — HH daily until 7 plus all-day Sunday — though the patio bar itself is seasonal. Von Trier's biergarten and Café Hollander Downer's patio cover the East Side. Movida's rooftop at Hotel Madrid and Avli's patio in Brewer's Hill both run HH at the bar and patio in season, and Lost Whale's Bay View backyard runs daily 4–6 with half-off taps and staple cocktails."
  },
  {
    question: "What hotel bars have happy hour in Milwaukee?",
    answer: "Mason Street Grill inside The Pfister (Mon–Fri 4–6:30, Monday Industry Night until 8:30 — $4 drafts, $5 wells, $5 wine, $11 bar snacks, live jazz Mon–Sat from 6). The Bar at Saint Kate Arts Hotel (Mon–Thu 3–5; the hotel doesn't publish deal details, so call ahead; live music nightly from 5). The Kimpton Journeyman has two: The Outsider rooftop (Mon–Fri 4–6, $10 Outsider Originals) and Tre Rivali's Snack Hour (Tue–Sat 2–5, plus half-price select bottles on Wine Wednesday 5–9). Branded at The Iron Horse Hotel in Walker's Point (Mon–Thu 4–6 — $5 drafts and tall boys, half-price rail and wine). Movida at Hotel Madrid (Wed–Sun 4–6, $1 tapas). Miller Time Pub inside the Hilton Milwaukee (Mon–Thu 4–7)."
  },
  {
    question: "Where can I find late-night happy hour in Milwaukee?",
    answer: "True late-night HH is rare in Milwaukee. Confirmed: BelAir Cantina Water St runs a 9–11 p.m. late-night HH Thu–Sat (Lower East Side) with $5 margaritas, $3 tequila shots, $6 specialty cocktails and discounted snacks. Bryant's Cocktail Lounge runs a Late Nite Happy Hour from 11 p.m. to close on Sun and Tue–Thu ($7 Old Fashioneds and a $7 rotating freezer martini or Manhattan). The Wicked Hop runs a Monday Service Industry Night from 9 p.m."
  },
  {
    question: "Where is happy hour near Fiserv Forum and the Deer District?",
    answer: "Walking distance from Fiserv: Uncle Bucks on Third (1125 N Dr Martin Luther King Jr Dr) runs a $5 happy hour Tue–Fri 4–7 p.m. — but it is NOT available during Fiserv Forum events, so check your game time, and the bar changed owners in June 2026 and is updating its specials. Miller Time Pub & Grill at 5th & Wisconsin (Mon–Thu 4–7: $4 Miller taps, $5 rails) adds $1 off drafts all game when you wear Packers gear and $5 Miller Lite drafts during Brewers home games in season. Mason Street Grill at The Pfister and The Bar at Saint Kate are both ~10-minute walks east. Several Deer District spots that older guides reference (Punch Bowl Social, MECCA Sports Bar, Good City Deer District) have closed — these are no longer options."
  },
  {
    question: "Which Milwaukee happy hour spots have specialty deals on specific days?",
    answer: "Tupelo Honey: Mimosa Monday, 'Tini Tuesday ($3 martinis), Wine Wednesday (half-off bottles), Tequila Thursday ($6 margaritas). Three Lions Pub Shorewood: Thu $1 wings, Fri discounted Old Fashioneds all day (call for the current Tue/Wed deals). The Wicked Hop: Tue all-day HH ($7 cocktails, $9 apps), Wed $1 off Third Space beers, Thu $4 Modelo tall boys and Milagro shots, Fri $4 Jim Beam shots, Sun 4–9 HH. Lost Whale: Wed $5 wine pours after 7, Thu 25% off whiskey after 7. Black Sheep: Mon $10 chicken & waffles, Tue half-price shareables, Wed $10 burger, Thu $5 margaritas. Steny's: a different $1-off or themed deal every weekday, Monday being $1 off everything. Boone & Crockett: Sun all-day HH. Mason Street Grill: Mon Industry Night until 8:30."
  },
];

const BY_DAY_BEST = {
  mon: ["Mason Street Grill", "Steny's Tavern & Grill", "Black Sheep", "Lupi & Iris", "Von Trier"],
  tue: ["The Wicked Hop", "Tupelo Honey", "Odd Duck", "At Random", "Three Lions Pub"],
  wed: ["Lost Whale", "Movida at Hotel Madrid", "Tupelo Honey", "Three Lions Pub", "Avli"],
  thu: ["BelAir Cantina — Water St", "Lost Whale", "Three Lions Pub", "Bryant's Cocktail Lounge", "The Outsider (rooftop)"],
  fri: ["Black Sheep", "Three Lions Pub", "Aperitivo", "Maxie's Southern Comfort", "Story Hill BKC"],
  sat: ["Black Sheep", "Odd Duck", "Maxie's Southern Comfort", "Story Hill BKC", "Movida at Hotel Madrid"],
  sun: ["Boone & Crockett", "The Wicked Hop", "Bryant's Cocktail Lounge", "Von Trier", "Movida at Hotel Madrid"],
};

const DAY_LABELS = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };

const REGION_BLURBS = {
  downtown: "Downtown and the Deer District cluster around Fiserv Forum, The Pfister, and Wisconsin Ave — hotel bars, game-day pre-parties, and the city's rare late-night happy hours.",
  "third-ward": "The Historic Third Ward has Milwaukee's most stylish happy hours — rooftop cocktails at the Kimpton Journeyman, Italian aperitivo, and Southern bites along Broadway.",
  "east-side": "The Lower East Side and Downer Ave lean neighborhood-bar and beer-hall — big tap lists, free popcorn, and some of the best-value happy hours in the city.",
  "brewers-hill": "Brewer's Hill and Riverwest run creative and low-key — a tiki bar, brewery taprooms, and Greek small plates with rare early-week deals.",
  "walkers-point": "Walker's Point is the densest happy-hour crawl in Milwaukee — Spanish tapas, Polish pierogi, riverfront patios, and the Iron Horse all within a few blocks.",
  "bay-view": "Bay View's KK corridor is cocktail country — $5 Old Fashioneds, vintage ice-cream drinks, a beer-and-brisket-burger deal, and backyard patios.",
  "south-side": "The South Side and Historic Mitchell Street hold Milwaukee's oldest cocktail lounge — $7 Old Fashioneds, two happy-hour windows, no printed menu.",
  "west-side": "The West Side and Story Hill offer long weekday windows, tap cocktails, and Southern oysters just west of downtown.",
  suburbs: "Shorewood and the North Shore run the most consistent 7-day happy hours — British-pub deals and supper-club Old Fashioneds.",
};

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "Best Happy Hour in Milwaukee 2026: 31 Verified Spots by Day, Neighborhood & Type",
    description: "Comprehensive guide to Milwaukee happy hour — 31 verified spots with exact days, times, drink and food specials. Filter by day of week, neighborhood, and type.",
    image: "https://www.discover-milwaukee.com/images/best-happy-hour-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-01-15",
    dateModified: "2026-11-02",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-happy-hour-milwaukee",
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
      { "@type": "ListItem", position: 2, name: "Best Happy Hour Milwaukee", item: "https://www.discover-milwaukee.com/best-happy-hour-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Happy Hour Spots in Milwaukee",
    description: "31 verified Milwaukee happy hour spots across all major neighborhoods.",
    numberOfItems: happyHourSpots.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: happyHourSpots.map((spot, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "BarOrPub",
        name: spot.name,
        priceRange: spot.priceRange,
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

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#filter", label: "Filter Spots" },
  { href: "#by-day", label: "Best by Day" },
  { href: "#by-neighborhood", label: "By Neighborhood" },
  { href: "#faq", label: "FAQ" },
];

export default function BestHappyHourMilwaukee() {
  const [dayFilter, setDayFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const filtered = useMemo(() => happyHourSpots.filter((s) => {
    if (dayFilter !== "all" && !s.days.includes(dayFilter)) return false;
    if (regionFilter !== "all" && s.region !== regionFilter) return false;
    if (tagFilter !== "all" && !s.tags.includes(tagFilter)) return false;
    return true;
  }), [dayFilter, regionFilter, tagFilter]);

  return (
    <>
      <Head>
        <title>Best Happy Hour in Milwaukee 2026: 31 Verified Spots</title>
        <meta name="description" content="Milwaukee happy hour guide: 31 spots verified in November 2026 with exact days, times, drink and food specials. Filter by day, neighborhood and type." />
        <meta name="keywords" content="best happy hour milwaukee, milwaukee happy hour, happy hour near me milwaukee, sunday happy hour milwaukee, late night happy hour milwaukee, rooftop happy hour milwaukee, happy hour third ward, happy hour bay view, happy hour walker's point, $5 cocktails milwaukee, cheap drinks milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-happy-hour-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Happy Hour in Milwaukee 2026: 31 Verified Spots" key="og:title" />
        <meta property="og:description" content="31 verified Milwaukee happy hour spots — exact days, times, prices. Filter by day, neighborhood, and type." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-happy-hour-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-happy-hour-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Happy Hour in Milwaukee — 31 verified spots by day, neighborhood, and type." key="og:image:alt" />
        <meta property="article:published_time" content="2026-01-15T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-11-02T00:00:00-06:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Happy Hour in Milwaukee 2026: 31 Verified Spots" key="twitter:title" />
        <meta name="twitter:description" content="Comprehensive guide — exact days, times, drink and food specials. Filter by day, neighborhood, and type." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-happy-hour-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <Breadcrumbs />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED NOVEMBER 2, 2026 · 31 VERIFIED SPOTS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Best Happy Hour in Milwaukee</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              <strong>31 verified spots</strong> across every neighborhood — exact days, times, drink and food prices. Filter by day of week, neighborhood, or what you're looking for (cocktails, rooftop, late-night, hotel bar, oysters). Every spot was re-verified against the venue's own website in November 2026 in two independent passes; where a venue doesn't publish a price, we say so instead of guessing.
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
          <NewsletterCTA />


          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Heads up:</strong> All 31 spots below were re-verified against each venue's own website in November 2026 — but happy-hour times, prices and food specials shift frequently with seasons, ownership changes, and game-day schedules. Several venues currently say they are "updating" specials. Always call ahead before you go, especially for Sunday/Monday plans (most HH is weekday) and for Deer District spots on Fiserv Forum event nights (some HHs are suspended).
            </p>
          </div>


          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best happy hours in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Total spots verified</dt>
              <dd style={{ color: "#444", margin: 0 }}>31 across 9 Milwaukee neighborhoods</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Filters available</dt>
              <dd style={{ color: "#444", margin: 0 }}>By day of week, neighborhood, type (cocktails / wine / food / patio)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top all-around picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Aperitivo (Third Ward), Black Sheep (Walker's Point), Maxie's (Wauwatosa border), Mason Street Grill (Pfister), Movida (Hotel Madrid)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Earliest start</dt>
              <dd style={{ color: "#444", margin: 0 }}>Camino (Mon–Fri 2 p.m.), Story Hill BKC (Tue–Sat 2 p.m.), Tre Rivali Snack Hour (Tue–Sat 2 p.m.)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Longest single-day HH</dt>
              <dd style={{ color: "#444", margin: 0 }}>The Wicked Hop (Tue all day, 11 a.m.–10 p.m.); Mason Street Grill (Mon Industry Night 4–8:30 p.m.)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Best late-night</dt>
              <dd style={{ color: "#444", margin: 0 }}>BelAir Water St (Thu–Sat 9–11 p.m.), Bryant's (11 p.m.–close Sun & Tue–Thu)</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              All 31 spots re-verified <time dateTime="2026-11-02">2026-11-02</time> against each venue&apos;s own website and Milwaukee press, in two independent passes.
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Happy Hour at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Fast picks for common questions.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {[
                { label: "Earliest HH start", value: "Camino (2 p.m. Mon–Fri), Story Hill BKC & Tre Rivali (2 p.m. Tue–Sat)" },
                { label: "Longest single-day HH", value: "The Wicked Hop (Tue 11 a.m.–10 p.m.) · Black Sheep (Fri 11–6) · Mason Street Grill (Mon 4–8:30)" },
                { label: "Best $5-and-under cocktails", value: "Black Sheep ($5 martinis & Manhattans), Lost Whale ($5 Old Fashioneds), Mason Street Grill & Tupelo Honey ($5 wells)" },
                { label: "Best $1 / $2 food deal", value: "Movida ($1 tapas), Maxie's ($2 oysters)" },
                { label: "Best Sunday HH", value: "Boone & Crockett (all day), The Wicked Hop (4–9), Bryant's, Movida" },
                { label: "Best late-night (after 9 p.m.)", value: "BelAir Water St (Thu–Sat 9–11), Bryant's (11 p.m.–close Sun & Tue–Thu)" },
                { label: "Best rooftop HH", value: "The Outsider at Kimpton Journeyman" },
                { label: "Best hotel-bar HH", value: "Mason Street Grill (Pfister), Movida (Hotel Madrid)" },
                { label: "Best pure value", value: "Black Sheep ($3 drafts), Steny's (Mon $1 off everything), Miller Time ($4 taps), Lupi & Iris ($4 beers), Gathering Place ($2 off pours)" },
              ].map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="filter" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Filter the Full List</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Filter by day of week, neighborhood, or type. Tap a pill to filter; tap again or pick "All" to clear.</p>

            <div style={{ marginBottom: "18px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>Day</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {DAYS.map((d) => {
                  const active = dayFilter === d.id;
                  return (
                    <button key={d.id} onClick={() => setDayFilter(d.id)} style={{ padding: "6px 12px", borderRadius: "20px", border: active ? `2px solid ${c.green1}` : `2px solid ${c.beige}`, backgroundColor: active ? c.green1 : "white", color: active ? c.cream : c.green1, fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>Neighborhood</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {REGIONS.map((r) => {
                  const active = regionFilter === r.id;
                  return (
                    <button key={r.id} onClick={() => setRegionFilter(r.id)} style={{ padding: "6px 12px", borderRadius: "20px", border: active ? `2px solid ${c.green1}` : `2px solid ${c.beige}`, backgroundColor: active ? c.green1 : "white", color: active ? c.cream : c.green1, fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>Type</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {TAGS.map((t) => {
                  const active = tagFilter === t.id;
                  return (
                    <button key={t.id} onClick={() => setTagFilter(t.id)} style={{ padding: "6px 12px", borderRadius: "20px", border: active ? `2px solid ${c.green1}` : `2px solid ${c.beige}`, backgroundColor: active ? c.green1 : "white", color: active ? c.cream : c.green1, fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <p style={{ color: c.green2, fontSize: "13px", fontWeight: "700", marginBottom: "20px" }}>Showing {filtered.length} of {happyHourSpots.length} spots</p>

            {filtered.length === 0 ? (
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: "#666", margin: 0 }}>No spots match all three filters. Try clearing one.</p>
              </div>
            ) : (
              filtered.map((spot) => (
                <div key={spot.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "20px 22px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                    <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.priceRange}</span>
                      <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{spot.neighborhood}</span>
                    </div>
                  </div>
                  <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "10px" }}>{spot.daysLabel}</p>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{spot.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px" }}>
                      <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase" }}>Drink Specials</p>
                      <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.drinkSpecials}</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "10px", borderRadius: "8px" }}>
                      <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase" }}>Food Specials</p>
                      <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.foodSpecials}</p>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase" }}>Insider Tip</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{spot.insiderTip}</p>
                  </div>
                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>📍 {spot.address}</p>
                </div>
              ))
            )}
          </section>

          <section id="by-day" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Best Happy Hour by Day of Week</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Top picks for each day, based on verified specials and standout deals.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {Object.keys(BY_DAY_BEST).map((day) => (
                <div key={day} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>{DAY_LABELS[day]}</h3>
                  <ol style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "13px", lineHeight: 1.7 }}>
                    {BY_DAY_BEST[day].map((name) => <li key={name}>{name}</li>)}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <section id="by-neighborhood" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Happy Hour by Milwaukee Neighborhood</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Where to drink by part of town — Downtown, Third Ward, East Side, Walker's Point, Bay View, Riverwest and beyond.</p>
            {REGIONS.filter((r) => r.id !== "all").map((r) => {
              const spots = happyHourSpots.filter((s) => s.region === r.id);
              if (spots.length === 0) return null;
              return (
                <div key={r.id} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px 20px", marginBottom: "14px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 6px" }}>Happy Hour in {r.label}</h3>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: "0 0 12px" }}>{REGION_BLURBS[r.id]}</p>
                  <ul style={{ margin: 0, paddingLeft: "18px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                    {spots.map((s) => (
                      <li key={s.name}><strong style={{ color: c.green1 }}>{s.name}</strong> — {s.daysLabel}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Bar Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/rooftop-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Rooftop Bars</Link>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Cocktail Bars</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/best-dive-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Dive Bars</Link>
              <Link href="/milwaukee-bars" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Bars</Link>
              <Link href="/best-brewery-tours-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Brewery Tours</Link>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Patios & Outdoor</Link>
              <Link href="/milwaukee-nightlife" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Nightlife</Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Date Ideas</Link>
            </div>
          </section>

          <section id="removed" aria-labelledby="removed-heading" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 id="removed-heading" style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "8px" }}>Removed in the November 2026 update</h2>
            <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.7, marginBottom: "14px" }}>We only list a happy hour we can verify against the venue itself. These six came off the list this round — not because they're bad bars, but because we couldn't confirm a current deal.</p>
            <ul style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
              <li><strong>Café Corazón — Bay View</strong> closed permanently on Oct. 2, 2026. The Riverwest and Brown Deer locations remain open and advertise a 3–6 p.m. happy hour ($7 house margarita or paloma, $6 sangria, $1 off Mexican lagers); call for days.</li>
              <li><strong>The Diplomat</strong> (Brady Street) publishes no happy hour schedule or pricing; third-party listings cite Mon 4–10 and Tue–Fri 4–6, unconfirmed. (414) 800-5816.</li>
              <li><strong>The Vanguard</strong> (Bay View) runs unpriced daily bourbon specials rather than a happy hour; the $2–$4 bourbon deals in older guides date to 2015.</li>
              <li><strong>Foundation Bar</strong> (Riverwest) publishes no happy hour and its website is offline; the $3 taps-and-rails deal in older guides dates to 2015.</li>
              <li><strong>Burnhearts</strong> (Bay View) publishes no specials; the $8 sampler and $2 PBR figures circulating online are undated.</li>
              <li><strong>Camp Bar — Shorewood</strong> advertises a Thursday all-day happy hour and nightly specials only as an image graphic we couldn't verify in text, and third-party listings conflict. (414) 962-5182.</li>
            </ul>
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Happy hour updates, new restaurants, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <RelatedGuides />
      <Footer />
      </div>
    </>
  );
}
