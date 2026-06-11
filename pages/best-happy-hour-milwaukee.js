import React, { useState, useMemo } from "react";
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
  { name: "Aperitivo", region: "third-ward", neighborhood: "Historic Third Ward", priceRange: "$$", address: "311 N Plankinton Ave, Milwaukee, WI 53203", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Thu 4–6 p.m.; Fri 4–5 p.m.", drinkSpecials: "Flat $8 — 4 rotating wines, 4 rotating cocktails", foodSpecials: "Flat $8 — 5 rotating small plates (hummus, skewers, flatbreads)", description: "Italian aperitivo bar in the Pritzlaff Building. Flat-$8 menu (drinks AND food, rotating). Dine-in only — no to-go HH.", insiderTip: "Friday is one hour only (4–5 p.m.). Closed Sun & Mon.", tags: ["cocktails", "wine", "food", "international"] },
  { name: "Black Sheep", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "216 S 2nd St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri", "sat"], daysLabel: "Mon–Sat 4–6 p.m. (Fri extends 11 a.m.–6 p.m.)", drinkSpecials: "$5 Stoli martinis, $5 Four Roses Manhattans, $5 house wine, $5 house-made sangria", foodSpecials: "$10 cheese board — Mon–Thu only", description: "Walker's Point staple. The extended Friday window (11 a.m.–6 p.m.) is the longest weekday HH in this guide.", insiderTip: "The $10 cheese board is the move — but go Mon–Thu (not Fri/Sat).", tags: ["cocktails", "wine", "food"] },
  { name: "Odd Duck", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "939 S 2nd St, Milwaukee, WI 53204", days: ["tue", "wed", "thu", "fri", "sat"], daysLabel: "Tue–Sat 3 p.m. open (bar HH menu — call to confirm)", drinkSpecials: "Bar HH drink specials — call to confirm current pricing", foodSpecials: "No formal HH food menu — order from the ever-changing small-plates list", description: "Chef-driven restaurant that relocated from Bay View in 2022. Bar opens at 3 p.m. Tue–Sat.", insiderTip: "Sit at the bar to watch the open kitchen. Whatever's marked seasonal is the order. Venue doesn't publish a formal HH menu — confirm specials with the bartender.", tags: ["wine", "beer", "food"] },
  { name: "Von Trier", region: "east-side", neighborhood: "Lower East Side", priceRange: "$-$$", address: "2235 N Farwell Ave, Milwaukee, WI 53211", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 4–6 p.m.", drinkSpecials: "$7 happy-hour menu (cocktails and mixed drinks)", foodSpecials: "Free popcorn with drinks, all day", description: "Milwaukee's German beer-hall fixture at Farwell & North since 1978. Free popcorn all day. Outdoor biergarten in summer.", insiderTip: "The biergarten is the right call on warm Fridays — get there before 4 p.m. or grab one of the inside booths.", tags: ["beer", "cocktails", "rooftop"] },
  { name: "Maxie's Southern Comfort", region: "west-side", neighborhood: "West Side / Wauwatosa border", priceRange: "$$", address: "6732 W Fairview Ave, Milwaukee, WI 53213", days: ["mon", "tue", "wed", "thu", "fri", "sat"], daysLabel: "Mon–Sat 4–6 p.m.", drinkSpecials: "$1 off all drinks (the \"Buck Off!\" deal)", foodSpecials: "$2 fresh-shucked oysters · $9 select apps (fried green tomatoes, mussels, Kentucky Nuggets, Creole meatballs, gumbo)", description: "Branded \"Milwaukee's Happiest Happy Hour.\" Recent refresh under co-owner Dan Sidner.", insiderTip: "$2 oysters with a whiskey cocktail is the move. Kentucky Nuggets are the sleeper.", tags: ["food", "oysters", "cocktails"] },
  { name: "Miller Time Pub & Grill", region: "downtown", neighborhood: "Westown (Hilton Milwaukee)", priceRange: "$-$$", address: "509 W Wisconsin Ave, Milwaukee, WI 53203", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu 4–7 p.m. + late-night 10 p.m.–midnight", drinkSpecials: "$3 rails, $3 Miller drafts, $5 house wine · Late-night 10 p.m.–midnight: $3 Miller High Life taps and shots · Game-day $5 Miller Lite drafts during Brewers/Bucks home games", foodSpecials: "$2 off appetizers", description: "Downtown pub attached to the Hilton Milwaukee City Center. Late-night window is one of the only downtown HH options after 10 p.m.", insiderTip: "Great spot before a show at the Riverside or Pabst Theater. Game-day deals kick in for Brewers/Bucks home games.", tags: ["beer", "sports", "late-night", "hotel"] },
  { name: "Birch", region: "brewers-hill", neighborhood: "Brewer's Hill / Lower East Side", priceRange: "$$$", address: "459 E Pleasant St, Milwaukee, WI 53202", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Fri 4–6 p.m. (bar only)", drinkSpecials: "Bar HH menu — call (414) 921-4250 to confirm current pricing", foodSpecials: "Bar-only menu items — call to confirm current pricing", description: "High-end tasting-menu restaurant with a bar-only happy hour — a way to experience Birch without the full prix-fixe commitment.", insiderTip: "Sit at the bar and trust the bartender. Reservations not required at the bar during HH; specifics rotate.", tags: ["cocktails", "wine", "food"] },
  { name: "Bryant's Cocktail Lounge", region: "south-side", neighborhood: "Historic Mitchell Street", priceRange: "$$", address: "1579 S 9th St, Milwaukee, WI 53204", days: ["sun", "tue", "wed", "thu"], daysLabel: "Sun + Tue–Thu 5–8 p.m. (closed Mondays)", drinkSpecials: "$5 Old Fashioneds and Depression-era cocktails", foodSpecials: "No food served — drinks only", description: "Milwaukee's oldest cocktail lounge, in business since 1938. No printed cocktail menu — tell the bartender what you like.", insiderTip: "Closed Mondays — show up Sun or Tue–Thu for the 5–8 p.m. HH window. Describe a mood (\"something bourbon-forward\") and the bartender takes it from there.", tags: ["cocktails"] },
  { name: "Hooligan's Super Bar", region: "east-side", neighborhood: "Lower East Side", priceRange: "$", address: "2017 E North Ave, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 3–6 p.m.", drinkSpecials: "$1 off all taps, $1 off bottles/cans, $1 off wine, $2 off mixers and rails", foodSpecials: "Half-priced appetizers", description: "East Side neighborhood institution at Farwell & North. ~30 taps and 99+ bottles/cans, all $1 off during HH.", insiderTip: "Half-priced apps + $1 off taps for three hours is the best beer-and-bar-food value on the East Side.", tags: ["beer", "food", "sports"] },
  { name: "The Vanguard", region: "bay-view", neighborhood: "Bay View", priceRange: "$$", address: "2659 S Kinnickinnic Ave, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily — bourbon deals + $2 cans always on", drinkSpecials: "Daily bourbon: $2 shot / $3 mixed / $4 pour Sun–Thu · $3 shot / $4 mixed / $6 pour Fri–Sat · $2 PBR / Rhinelander / Milwaukee Classic Lager always", foodSpecials: "Daily themed sausage specials (Meatball Monday and similar — themes shift)", description: "Craft sausage spot with a rotating daily drink program instead of a fixed HH window.", insiderTip: "Ask the bartender what bourbon is on. The Duck Bacon Jalapeño sausage is a longtime favorite.", tags: ["beer", "cocktails", "food"] },
  { name: "Mason Street Grill", region: "downtown", neighborhood: "East Town (The Pfister)", priceRange: "$$$", address: "425 E Mason St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4:00–6:30 p.m. (Mon extends to 8:30 p.m. — Industry Night)", drinkSpecials: "$2 drafts, $3 well mixed drinks, $5 martinis, $5–$7 wine by the glass", foodSpecials: "$5–$7 bar bites / appetizers", description: "Hotel-bar HH inside The Pfister, with smooth jazz playing live nightly. The closest thing to a grand-hotel HH downtown. Monday Industry Night extends the HH to 8:30 p.m.", insiderTip: "Monday Industry Night (4–8:30 p.m.) is the longest single-day window in this guide. Live jazz starts before HH ends.", tags: ["cocktails", "wine", "hotel"] },
  { name: "The Bar at Saint Kate", region: "downtown", neighborhood: "East Town (Saint Kate)", priceRange: "$$", address: "139 E Kilbourn Ave, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu drinks 3–5 p.m. · bites 4–5 p.m.", drinkSpecials: "Deals on select wines by the glass / by the bottle, tap beer (call to confirm specifics)", foodSpecials: "Shareable apps — bites window 4–5 p.m. only (drinks 3–5)", description: "Arts-hotel lobby bar with rotating gallery, sushi and Proof Pizza. Live music at 5 p.m. nightly — HH ends as live music starts.", insiderTip: "If you stay through 5, you get the music for free. THC-infused drink options are on the menu.", tags: ["cocktails", "wine", "hotel"] },
  { name: "The Outsider (rooftop)", region: "third-ward", neighborhood: "Third Ward (Kimpton Journeyman)", priceRange: "$$$", address: "310 E Chicago St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (seasonal — rooftop)", drinkSpecials: "$10 Outsider Originals — signature fruit-infused cocktails (Keylime Sangria, Tangerine Mirage)", foodSpecials: "Shareable small plates and snacks", description: "9th-floor rooftop atop the Kimpton Journeyman Hotel. The best rooftop HH downtown — Third Ward views.", insiderTip: "Lines build by 8 p.m. on summer Fridays — get there closer to 5 for HH pricing and seat options. Sips & Sounds Thursdays 7:30–11:30 p.m.", tags: ["cocktails", "rooftop", "hotel"] },
  { name: "Tre Rivali", region: "third-ward", neighborhood: "Third Ward (Kimpton Journeyman)", priceRange: "$$$", address: "200 N Broadway, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 2–6 p.m. (bar or patio only)", drinkSpecials: "Cocktail and wine specials at the bar/patio — call to confirm current pricing and weekly wine deals", foodSpecials: "Cicheti / Mediterranean shareables at the bar — call to confirm Snack Hour timing", description: "Mediterranean restaurant in Kimpton Journeyman with one of the longest weekday HH windows (4 hours).", insiderTip: "The patio on Broadway is great in summer. Call ahead for current cicheti and weekly wine specials — they rotate.", tags: ["wine", "food", "hotel", "rooftop", "international"] },
  { name: "Lupi & Iris", region: "downtown", neighborhood: "East Town", priceRange: "$$$", address: "777 N Van Buren St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 3–6 p.m. (Monday may extend later — call to confirm)", drinkSpecials: "$4 select beers, $7 select wines, $9 select cocktails (bar area only)", foodSpecials: "Bar HH menu (call to confirm specifics)", description: "Mediterranean / Coastal restaurant from James Beard Award–winning chef Adam Siegel (2008 Best Chef: Midwest), near the lakefront.", insiderTip: "Sit at the bar for the HH menu. Siegel's pedigree shows in the food — the bar is one of the best ways to taste the menu without the prix-fixe commitment.", tags: ["cocktails", "wine", "international"] },
  { name: "Tupelo Honey", region: "third-ward", neighborhood: "Third Ward", priceRange: "$$", address: "511 N Broadway, Suite 100, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (Hoot & Holler HH)", drinkSpecials: "$5 well spirits and select cocktails; select beers and house wines on HH menu; rotating themed weeknight specials (Tue martinis, Wed wine, Thu margaritas — call to confirm current week)", foodSpecials: "Half-off starters + HH bites menu (crispy brussels, fried pickles, fried green tomatoes, cauliflower tacos)", description: "Southern kitchen with a broad HH drink-and-food deal list downtown. Themed weekly nights run alongside the daily HH.", insiderTip: "Weeknight themes rotate — Tuesday martinis, Wednesday wine, Thursday margaritas are recurring patterns but specifics shift; call ahead.", tags: ["food", "cocktails", "wine"] },
  { name: "The Wicked Hop", region: "third-ward", neighborhood: "Third Ward", priceRange: "$$", address: "345 N Broadway, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri", "sun"], daysLabel: "Mon–Fri 4–6 p.m. + all-day Tuesday & Sunday", drinkSpecials: "$1 off taps and bottles; $5 Three Olives highballs · Tue all-day: $7 select cocktails, $9 select apps", foodSpecials: "Taqueria Thursday ($4 Modelo tall boys, Milagro shots); Friday Fish Fry", description: "Third Ward's oldest building (1875, Jewett & Sherman). The all-day HH on Tuesdays and Sundays is the standout — Mon, Wed, Thu, Fri run the standard 4–6 p.m. window.", insiderTip: "Tuesday all-day pricing is the steal ($7 cocktails, $9 apps). Sunday is the other all-day HH day — rare in Milwaukee.", tags: ["beer", "cocktails", "food", "weekend"] },
  { name: "Uncle Bucks on Third", region: "downtown", neighborhood: "Deer District", priceRange: "$$", address: "1125 N Dr Martin Luther King Jr Dr, Milwaukee, WI 53203", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Fri 4–7 p.m. (NOT during Fiserv events)", drinkSpecials: "$5 specials on tap beer, wine and rail mixers", foodSpecials: "Lunch specials run separately 11 a.m.–3 p.m. Mon–Fri", description: "Independent multi-level bar and restaurant adjacent to Fiserv Forum, opened 2019. Rooftop and sport-club energy.", insiderTip: "HH is suspended on Fiserv Forum event nights — check the arena schedule before you commit.", tags: ["sports", "food", "rooftop"] },
  { name: "Café Hollander — Downer", region: "east-side", neighborhood: "East Side (Downer)", priceRange: "$$", address: "2608 N Downer Ave, Milwaukee, WI 53211", days: ["mon", "tue", "wed", "thu"], daysLabel: "Mon–Thu 3–5 p.m.", drinkSpecials: "Discounted Lowlands Brewing drafts, Bier of the Month, wine, specialty mules and sangria (call to confirm % off)", foodSpecials: "Drink-focused HH (no published food deals)", description: "Belgian grand-café with a long beer list and a Downer Ave patio. Lowlands Brewing collaborations anchor the HH.", insiderTip: "Sit on the patio when weather allows. Try a Bier of the Month at HH pricing.", tags: ["beer", "wine", "international", "rooftop"] },
  { name: "Palomino Bar", region: "bay-view", neighborhood: "Bay View", priceRange: "$", address: "2491 S Superior St, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–7 p.m. + always-on $6 tap-and-shot combo", drinkSpecials: "$2 PBR tall boys · $1 off taps · Always-on $6 tap-beer-and-a-shot combo (rotating)", foodSpecials: "Southern menu available (not part of HH)", description: "Honky-tonk dive on the south end of Bay View. Southern food, patio, classic Bay View energy.", insiderTip: "The $6 beer-and-shot combo is one of the best dive deals in the city — and it's always on, not just during HH.", tags: ["beer", "cocktails"] },
  { name: "Foundation Bar (Foundation Tiki)", region: "brewers-hill", neighborhood: "Riverwest", priceRange: "$", address: "2718 N Bremen St, Milwaukee, WI 53212", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 5–10 p.m. (early window 4–5 p.m.: 50% off up to $10)", drinkSpecials: "$3 taps and $3 rail mixers daily 5–10 p.m. · 4–5 p.m. 50% off anything up to $10 · Rotating taps including Lakefront Riverwest Stein and Kona Longboard", foodSpecials: "No kitchen (bar snacks only)", description: "Riverwest tiki bar with a 5-hour daily HH window — the longest daily HH in this guide.", insiderTip: "The 4–5 p.m. half-off window is unbeatable for an early drink. Cash-friendly, tiki-themed, late-night-leaning.", tags: ["cocktails", "beer", "late-night"] },
  { name: "At Random", region: "bay-view", neighborhood: "Bay View", priceRange: "$$", address: "2501 S Delaware Ave, Milwaukee, WI 53207", days: ["tue", "wed", "thu"], daysLabel: "Tue–Thu evenings (call to confirm current HH window)", drinkSpecials: "Discounted ice cream cocktails (regularly ~$13) — call to confirm current HH pricing", foodSpecials: "No kitchen — drinks only", description: "Historic Bay View cocktail lounge — the building has been a tavern since the 1890s and \"At Random\" since 1968. Ice cream cocktails are the calling card.", insiderTip: "Dim, vintage, no kids allowed. The Pink Squirrel (invented by Bryant's down the road) and Tin Roof are the orders. Cash adds to the vibe.", tags: ["cocktails"] },
  { name: "Lost Whale", region: "bay-view", neighborhood: "Bay View", priceRange: "$$", address: "2151 S Kinnickinnic Ave, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 4–6 p.m.", drinkSpecials: "Half off tap beer and tap \"staple\" cocktails · $4.50 Old Fashioneds", foodSpecials: "No in-house kitchen — rotating food trucks (e.g., Pallino Burger)", description: "Bay View cocktail bar at the north end of KK with a backyard patio. The daily Old Fashioned at $4.50 is the cheap-cocktail anchor.", insiderTip: "Check who's parked outside — the food truck rotation is part of the appeal. Patio fills fast on warm nights.", tags: ["cocktails", "beer", "rooftop"] },
  { name: "Avli", region: "brewers-hill", neighborhood: "Brewer's Hill", priceRange: "$$", address: "1818 N Hubbard St, Milwaukee, WI 53212", days: ["sun", "mon", "tue", "wed", "thu", "fri"], daysLabel: "Sun–Fri 3–6 p.m. (closed Sat HH)", drinkSpecials: "HH menu of cocktails, wines and small plates (call to confirm pricing)", foodSpecials: "Greek meze small plates featured", description: "Greek small-plates restaurant with a wine-forward bar. The patio hosts Tuesday Backyard BBQs in season (4–9 p.m.).", insiderTip: "The patio is the right call when weather allows. Sunday HH is rare in Milwaukee — Avli is one of the few.", tags: ["wine", "cocktails", "international", "food"] },
  { name: "Café Corazón — Bay View", region: "bay-view", neighborhood: "Bay View", priceRange: "$$", address: "2394 S Kinnickinnic Ave, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "3–6 p.m. on open days (call to confirm hours and Tuesday all-day pricing)", drinkSpecials: "$7 house margarita, $7 paloma, $6 sangria, $1 off Mexican lagers (call to confirm)", foodSpecials: "Taco Tuesday ($1/taco charitable donation); themed weeknights (Mole Monday, Vegan Thursday) — call to confirm current schedule", description: "Mexican neighborhood favorite known for Taco Tuesday and seasonal themed weeknights.", insiderTip: "Taco Tuesday is a charitable donation model — confirm current beneficiary and HH details with the venue before going.", tags: ["cocktails", "food", "international"] },
  { name: "BelAir Cantina — Water St", region: "east-side", neighborhood: "Lower East Side (Brady-adjacent)", priceRange: "$$", address: "1935 N Water St, Milwaukee, WI 53202", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 3–7 p.m. · Late-night 9–11 p.m. Thu–Sat only (Water St)", drinkSpecials: "Late-night (Thu–Sat, Water St only): $5 margaritas, $3 tequila shots, $6 specialty cocktails", foodSpecials: "Late-night (Thu–Sat): $6 queso blanco fundido, $5 nachos, $3 walkin' tacos, $5 guacamole · $2 Taco Tue & Thu · Burrito Mon 25% off", description: "Mexican spot with one of the city's only real late-night HH windows — Thu–Sat 9–11 p.m. specifically at the Water St location (other locations close earlier).", insiderTip: "The 9–11 p.m. window is Thu/Fri/Sat only at Water St — other days the venue closes at 10. Burrito Monday 25% off is the daytime steal.", tags: ["cocktails", "food", "late-night", "international"] },
  { name: "The Diplomat", region: "east-side", neighborhood: "Brady Street", priceRange: "$$$", address: "815 E Brady St, Milwaukee, WI 53202", days: ["tue", "wed", "thu", "fri"], daysLabel: "Tue–Fri evenings (bar HH — call to confirm exact window)", drinkSpecials: "Wine-focused HH menu (Wine Spectator award winner) — call to confirm pricing", foodSpecials: "Shareable American small plates — chef Dane Baldwin (2022 James Beard Best Chef: Midwest)", description: "Chef-driven Brady Street restaurant from James Beard winner Dane Baldwin. Often cited among Milwaukee's best HH for quality of bar food.", insiderTip: "Reservations not required at the bar for HH. The wine list is the reason — splurge on a glass during HH pricing.", tags: ["wine", "cocktails", "food"] },
  { name: "Camino", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$", address: "434 S 2nd St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 2–5 p.m.", drinkSpecials: "2-for-1 domestic tall boys", foodSpecials: "Half-off pierogi (dine-in only)", description: "Polish-inspired gastropub with 20 rotating craft taps. The 2 p.m. start is one of the earliest HH windows in the city.", insiderTip: "Half-off pierogi is the only way — order multiple flavors. Also: their Friday fish fry is excellent.", tags: ["beer", "food", "international"] },
  { name: "Movida at Hotel Madrid", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "600 S 6th St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. at the bar", drinkSpecials: "$9 sangrias (red/white/tequila) · Mon Sangria HH · Wine Wed (ladies' first glass free) · Take Two Thursdays", foodSpecials: "$1 tapas (jamon croquetas, pan con tomate) plus $3 and $5 tapas tiers", description: "Spanish tapas in the Hotel Madrid with a rooftop patio. The $1 tapas at the bar is one of the best food deals in Milwaukee.", insiderTip: "Live Flamenco Tuesdays. Hand-carved jamon. Rooftop in season.", tags: ["wine", "food", "international", "rooftop", "hotel"] },
  { name: "Iron Horse Hotel — Branded", region: "walkers-point", neighborhood: "Walker's Point (Iron Horse Hotel)", priceRange: "$$", address: "500 W Florida St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–6 p.m. (call to confirm)", drinkSpecials: "$4 tall boys · $5 off specialty cocktails · Half-off house wine and house liquor pours (call to confirm)", foodSpecials: "Half-off apps (call to confirm)", description: "The Iron Horse Hotel's pub-style HH with pool, shuffleboard, foosball and arcade games. Patio at The Yard expands the HH in season.", insiderTip: "Walker's Point is dense around the Iron Horse — walk to Camino, MobCraft or Bryant's after.", tags: ["cocktails", "beer", "food", "hotel"] },
  { name: "Steny's Tavern & Grill", region: "walkers-point", neighborhood: "Walker's Point", priceRange: "$$", address: "800 S 2nd St, Milwaukee, WI 53204", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri (Mon historically all-day; Tue–Fri 3–7 p.m. — call to confirm current schedule)", drinkSpecials: "Off-prices on mixed drinks, pitchers and taps; $5 Bloodys (call to confirm current pricing)", foodSpecials: "Sports-bar / pizza menu (no formal HH food deals)", description: "Walker's Point sports bar staple (since 1985) — Bucks shuttle bar, Packers crowd, big patio.", insiderTip: "Steny's also runs game-day shuttles to AmFam Field for Brewers games and to Fiserv Forum for Bucks games — perfect HH-then-game combo. Confirm shuttle schedule on stenystavern.com.", tags: ["beer", "sports", "late-night"] },
  { name: "Boone & Crockett", region: "walkers-point", neighborhood: "Walker's Point (riverfront)", priceRange: "$$", address: "818 S Water St, Milwaukee, WI 53204", days: ["sun", "wed", "thu", "fri", "sat"], daysLabel: "Wed–Thu 4 p.m.–2 a.m.; Fri–Sun 3 p.m.–2 a.m. — HH until 7 p.m. + all-day Sunday (closed Mon/Tue)", drinkSpecials: "Sun: $5 Manhattans with Luxardo cherry · Weekday HH cocktail specials until 7 p.m.", foodSpecials: "Taco Moto food truck on-site (not part of HH)", description: "Cocktail bar with one of the biggest riverside patios in the city. Closed Mon/Tue. Sunday all-day HH is the standout — perfect end-of-weekend move.", insiderTip: "The riverfront patio is a hidden gem. Sundays are the right call — most other spots don't run Sunday HH.", tags: ["cocktails", "rooftop"] },
  { name: "Burnhearts", region: "bay-view", neighborhood: "Bay View", priceRange: "$", address: "2599 S Logan Ave, Milwaukee, WI 53207", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily before 8 p.m. — sampler deals", drinkSpecials: "$8 sampler — four 6 oz pours (before 8 p.m.) · $10 flight of five draft selections · $2 PBR · Rotating well/tap specials", foodSpecials: "No kitchen — bar snacks only", description: "Bay View craft beer bar with 25 taps and a shuffleboard. The $8 sampler is the value play — taste four pours for the price of a cocktail elsewhere.", insiderTip: "Mitten Fest hosts in winter. Patio works in season. Cash-friendly.", tags: ["beer", "cocktails"] },
  { name: "Story Hill BKC", region: "west-side", neighborhood: "Story Hill (just west of MKE)", priceRange: "$$", address: "5100 W Bluemound Rd, Milwaukee, WI 53208", days: ["tue", "wed", "thu", "fri", "sat"], daysLabel: "Tue–Sat 2–6 p.m. drink HH (food Mid-Day window may vary — call to confirm)", drinkSpecials: "$2 off taps — beer AND tap craft cocktails", foodSpecials: "Mid-Day food menu (call to confirm current window)", description: "Neighborhood bistro with a 4-hour weekday drink HH window — one of the longest in this guide. Tap cocktails are the differentiator.", insiderTip: "Tap cocktails at $2 off are a rare find. Confirm Mid-Day food window with the host before going.", tags: ["beer", "cocktails", "food"] },
  { name: "Three Lions Pub", region: "suburbs", neighborhood: "Shorewood", priceRange: "$$", address: "4515 N Oakland Ave, Shorewood, WI 53211", days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], daysLabel: "Daily 4–6 p.m.", drinkSpecials: "Up to 40% off taps, wine, specialty cocktails · Wed $5 pints of 3 Sheeps + $3 Lemon Drop shots + $5 Deep Eddy Bombs · Fri \"Old Fashioned Friday\" $6 all day · Thu $1 traditional wings", foodSpecials: "Up to 40% off appetizers", description: "British pub with a 7-day-a-week HH — the most consistent suburban option. Long beer list and pub trivia Wednesday.", insiderTip: "Old Fashioned Friday ($6 all day) is the trip-up to Shorewood worth making. 40% off is steep — the deal is real.", tags: ["beer", "cocktails", "food", "weekend"] },
  { name: "Camp Bar — Shorewood", region: "suburbs", neighborhood: "Shorewood", priceRange: "$$", address: "4044 N Oakland Ave, Shorewood, WI 53211", days: ["mon", "tue", "wed", "thu", "fri"], daysLabel: "Mon–Fri 4–7 p.m. + nightly specials 7–10 p.m.", drinkSpecials: "HH drink specials including Old Fashioneds (call to confirm pricing)", foodSpecials: "Call to confirm food deals", description: "Supper-club-vibes lodge bar on the North Shore. Late-night extension (7–10 p.m. specials) makes it a longer-than-most weekday HH.", insiderTip: "Old Fashioneds are the order — this is supper-club territory. Camp's Third Ward location runs a different HH structure.", tags: ["cocktails", "late-night"] },
  { name: "Gathering Place Brewing", region: "brewers-hill", neighborhood: "Riverwest", priceRange: "$", address: "811 E Vienna Ave, Milwaukee, WI 53212", days: ["mon", "tue", "wed"], daysLabel: "Mon–Wed 4–6 p.m.", drinkSpecials: "$2 off full pours", foodSpecials: "No kitchen (bring outside food)", description: "Riverwest brewery taproom with a rare early-week HH. Dog-friendly, neighborhood-feel.", insiderTip: "Bring outside food — they encourage it. Walk to Lakefront Brewery after for the full Riverwest beer crawl.", tags: ["beer", "brewery"] },
];

const faqs = [
  {
    question: "What are the best happy hour deals in Milwaukee?",
    answer: "Top all-around Milwaukee happy hour deals include Aperitivo (flat $8 wines/cocktails/small plates Tue–Thu 4–6 + Fri 4–5), Black Sheep ($5 Stoli martinis + Four Roses Manhattans + house wine, $10 cheese board Mon–Thu), Maxie's ($2 oysters, $9 select apps, $1 off all drinks Mon–Sat 4–6), Hooligan's ($1 off taps/bottles/wine + half-price apps Mon–Fri 3–6), Tupelo Honey (half-off starters + HH drinks Mon–Fri 4–6 with rotating themed weeknights), Lupi & Iris ($4 beer / $7 wine / $9 cocktails Mon–Fri 3–6 from James Beard winner Adam Siegel), and Three Lions Pub in Shorewood (daily 4–6 with up to 40% off everything)."
  },
  {
    question: "What time does happy hour start in Milwaukee?",
    answer: "Most Milwaukee HHs run weekday 4–6 p.m. The earliest starts are Camino (2 p.m. Mon–Fri), Story Hill BKC (2 p.m. Tue–Sat) and Tre Rivali (2 p.m. Mon–Fri at the Kimpton Journeyman). The Wicked Hop runs all-day HH on Tuesdays and Sundays. The longest single-day HH is Mason Street Grill's Monday Industry Night (4 p.m.–8:30 p.m. inside The Pfister). For late-night, BelAir Cantina Water St runs a 9–11 p.m. window Thu–Sat, and Miller Time Pub runs 10 p.m.–midnight Mon–Thu."
  },
  {
    question: "Where is happy hour open on Sunday in Milwaukee?",
    answer: "Sunday happy hour is rare in Milwaukee. Confirmed Sunday HH spots: Von Trier (daily 4–6 p.m. — includes Sunday), The Vanguard (daily bourbon deal), Foundation Bar in Riverwest (daily 5–10 p.m.), Lost Whale Bay View (daily 4–6 p.m.), BelAir Cantina Water St (daily 3–7 p.m.), Three Lions Pub Shorewood (daily 4–6 p.m.), Avli Brewer's Hill (Sun–Fri 3–6), Bryant's Cocktail Lounge (Sunday 5–8 p.m. with $5 Old Fashioneds), The Wicked Hop (all-day Sunday), and Boone & Crockett (Sunday all-day HH — the city's standout Sunday move with $5 Luxardo Manhattans)."
  },
  {
    question: "Where can I get cheap drinks in Milwaukee?",
    answer: "For pure value: Hooligan's Super Bar on the East Side ($1 off taps/bottles/wine, $2 off mixers Mon–Fri 3–6 p.m.), Palomino Bar in Bay View ($2 PBR tall boys, $6 beer-and-shot combo always), Foundation Bar in Riverwest ($3 taps and rails 5–10 p.m. daily), Camino in Walker's Point (2-for-1 tall boys + half-off pierogi Mon–Fri 2–5 p.m.), The Vanguard ($2 PBR/Rhinelander/Milwaukee Classic Lager always), and Miller Time Pub downtown ($3 rails / $3 Miller drafts Mon–Thu 4–7). Burnhearts' $8 four-pour sampler is the craft-beer value play in Bay View."
  },
  {
    question: "What Milwaukee bars have the best happy hour food?",
    answer: "Movida at Hotel Madrid in Walker's Point runs $1 tapas at the bar (Mon–Fri 4–6) — arguably the best food deal in the city. Maxie's has $2 oysters and $9 select apps Mon–Sat 4–6. Tupelo Honey has half-off starters plus HH bites Mon–Fri 4–6. Hooligan's runs half-priced apps Mon–Fri 3–6. BelAir Cantina Water St's late-night 9–11 p.m. (Thu–Sat) brings $3 walkin' tacos and $5 nachos. The Wicked Hop runs all-day Tuesday $9 select apps. Camino does half-off pierogi Mon–Fri 2–5. Black Sheep's $10 cheese board (Mon–Thu) is the wine-pairing classic."
  },
  {
    question: "What are the best rooftop and patio happy hours in Milwaukee?",
    answer: "The Outsider rooftop atop the Kimpton Journeyman in the Third Ward (Mon–Fri 4–6, $10 fruit-infused signature cocktails) is the city's best rooftop HH. Uncle Bucks on Third's rooftop in the Deer District has the Tue–Fri 4–7 HH (suspended on Fiserv event nights). Boone & Crockett's riverside patio in Walker's Point is the standout outdoor cocktail bar — Sunday all-day HH. Von Trier's biergarten and Café Hollander Downer's patio cover the East Side. Movida's rooftop at Hotel Madrid hosts $1 tapas Mon–Fri. Lost Whale's Bay View backyard runs daily 4–6 with half-off taps and cocktails."
  },
  {
    question: "What hotel bars have happy hour in Milwaukee?",
    answer: "Mason Street Grill inside The Pfister (Mon–Fri 4–6:30; Mon extends to 8:30 for Industry Night — $2 drafts / $3 wells / $5 martinis / $5–$7 wine + live nightly jazz). The Bar at Saint Kate Arts Hotel (Mon–Thu, drinks 3–5 + bites 4–5 + live music starting at 5). The Outsider at Kimpton Journeyman (rooftop, Mon–Fri 4–6). Tre Rivali at Kimpton Journeyman (Mon–Fri 2–6 bar/patio HH). Branded at The Iron Horse Hotel in Walker's Point (Mon–Fri 4–6 — call to confirm specials). Movida at Hotel Madrid (Mon–Fri 4–6, $1 tapas)."
  },
  {
    question: "Where can I find late-night happy hour in Milwaukee?",
    answer: "True late-night HH is rare in Milwaukee. Confirmed: Miller Time Pub & Grill downtown runs 10 p.m.–midnight Mon–Thu with $3 Miller High Life taps and shots. BelAir Cantina Water St runs a 9–11 p.m. late-night HH Thu–Sat (Lower East Side) with $5 margaritas, $3 tequila shots, $6 specialty cocktails, plus discounted snacks. Foundation Bar in Riverwest runs HH till 10 p.m. daily. Camp Bar Shorewood adds 7–10 p.m. nightly specials after the regular HH."
  },
  {
    question: "Where is happy hour near Fiserv Forum and the Deer District?",
    answer: "Walking distance from Fiserv: Uncle Bucks on Third (1125 N Dr Martin Luther King Jr Dr) has a Tue–Fri 4–7 p.m. HH ($5 tap beer, wine and rail mixers) — but the HH is NOT available during Fiserv Forum events, so check your game time. Miller Time Pub & Grill at 5th & Wisconsin (Mon–Thu 4–7) adds $5 Miller Lite drafts during Brewers/Bucks home games. Mason Street Grill at The Pfister and The Bar at Saint Kate are both ~10-minute walks east. Several Deer District spots that older guides reference (Punch Bowl Social, MECCA Sports Bar, Good City Deer District) have closed — these are no longer options."
  },
  {
    question: "Which Milwaukee happy hour spots have specialty deals on specific days?",
    answer: "Tupelo Honey: rotating themed weeknights (Tue martinis, Wed wine, Thu margaritas — call to confirm). Three Lions Pub Shorewood: Wed $5 pints of 3 Sheeps + $3 Lemon Drops + $5 Deep Eddy Bombs; Fri \"Old Fashioned Friday\" $6 all day; Thu $1 traditional wings. Tre Rivali: rotating weekly wine deals (call to confirm). Movida at Hotel Madrid: Mon Sangria HH, Wine Wed (ladies' first glass free), Take Two Thursday tapa+cocktail pairing, Flamenco Tuesdays 7–9 p.m. Boone & Crockett: Sun all-day HH ($5 Luxardo Manhattans). The Wicked Hop: Tue + Sun all-day HH ($7 cocktails, $9 apps). Mason Street Grill: Mon Industry Night extends to 8:30 p.m."
  },
];

const BY_DAY_BEST = {
  mon: ["Mason Street Grill", "Hooligan's Super Bar", "Movida at Hotel Madrid", "Three Lions Pub", "Black Sheep"],
  tue: ["Tupelo Honey", "Three Lions Pub", "The Wicked Hop", "At Random", "Maxie's Southern Comfort"],
  wed: ["Tupelo Honey", "Tre Rivali", "Movida at Hotel Madrid", "Three Lions Pub", "Camino"],
  thu: ["Tupelo Honey", "BelAir Cantina — Water St", "Foundation Bar (Foundation Tiki)", "The Outsider (rooftop)", "Three Lions Pub"],
  fri: ["Black Sheep", "Three Lions Pub", "Aperitivo", "Maxie's Southern Comfort", "Camino"],
  sat: ["Black Sheep", "Three Lions Pub", "Maxie's Southern Comfort", "Story Hill BKC", "The Wicked Hop"],
  sun: ["Boone & Crockett", "Café Corazón — Bay View", "Foundation Bar (Foundation Tiki)", "Von Trier", "Three Lions Pub"],
};

const DAY_LABELS = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "Best Happy Hour in Milwaukee 2026: 35+ Verified Spots by Day, Neighborhood & Type",
    description: "Comprehensive guide to Milwaukee happy hour — 35+ verified spots with exact days, times, drink and food specials. Filter by day of week, neighborhood, and type.",
    image: "https://www.discover-milwaukee.com/images/best-happy-hour-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-01-15",
    dateModified: "2026-06-07",
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
    description: "35+ verified Milwaukee happy hour spots across all major neighborhoods.",
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
        <title>Best Happy Hour in Milwaukee 2026: 35+ Verified Spots</title>
        <meta name="description" content="Comprehensive Milwaukee happy hour guide: 35+ verified spots with exact days, times, drink and food specials. Filter by day, neighborhood and type." />
        <meta name="keywords" content="best happy hour milwaukee, milwaukee happy hour, happy hour near me milwaukee, sunday happy hour milwaukee, late night happy hour milwaukee, rooftop happy hour milwaukee, happy hour third ward, happy hour bay view, happy hour walker's point, $5 cocktails milwaukee, cheap drinks milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-happy-hour-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Happy Hour in Milwaukee 2026: 35+ Verified Spots" key="og:title" />
        <meta property="og:description" content="35+ verified Milwaukee happy hour spots — exact days, times, prices. Filter by day, neighborhood, and type." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-happy-hour-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-happy-hour-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Happy Hour in Milwaukee — 35+ verified spots by day, neighborhood, and type." key="og:image:alt" />
        <meta property="article:published_time" content="2026-01-15T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-07T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Happy Hour in Milwaukee 2026: 35+ Verified Spots" key="twitter:title" />
        <meta name="twitter:description" content="Comprehensive guide — exact days, times, drink and food specials. Filter by day, neighborhood, and type." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-happy-hour-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 7, 2026 · 35+ VERIFIED SPOTS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Best Happy Hour in Milwaukee</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              <strong>35+ verified spots</strong> across every neighborhood — exact days, times, drink and food prices. Filter by day of week, neighborhood, or what you're looking for (cocktails, rooftop, late-night, hotel bar, oysters). Audited against each venue's own website in June 2026.
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
              <strong>Heads up:</strong> Every spot below was verified against the venue's own website in June 2026 — but happy-hour times, prices and food specials shift frequently with seasons, ownership changes, and game-day schedules. Always call ahead before you go, especially for Sunday/Monday plans (most HH is weekday) and for Deer District spots on Fiserv Forum event nights (some HHs are suspended).
            </p>
          </div>


          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best happy hours in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Total spots verified</dt>
              <dd style={{ color: "#444", margin: 0 }}>36+ across 9 Milwaukee neighborhoods</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Filters available</dt>
              <dd style={{ color: "#444", margin: 0 }}>By day of week, neighborhood, type (cocktails / wine / food / patio)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top all-around picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Aperitivo (Third Ward), Black Sheep (Walker's Point), Maxie's (Wauwatosa), Hooligan's (East Side), Three Lions Pub (Shorewood)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Earliest start</dt>
              <dd style={{ color: "#444", margin: 0 }}>Camino (Mon–Fri 2 p.m.), Story Hill BKC (Tue–Sat 2 p.m.)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Longest single-day HH</dt>
              <dd style={{ color: "#444", margin: 0 }}>Mason Street Grill (Mon Industry Night 4–8:30 p.m.)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Best late-night</dt>
              <dd style={{ color: "#444", margin: 0 }}>BelAir Water St (Thu–Sat 9–11 p.m.), Miller Time Pub (Mon–Thu 10 p.m.–midnight)</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-07">2026-06-07</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Happy Hour at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Fast picks for common questions.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {[
                { label: "Earliest HH start", value: "Camino (2 p.m. Mon–Fri) & Story Hill BKC (2 p.m. Tue–Sat)" },
                { label: "Longest single-day HH", value: "Mason Street Grill (Mon Industry Night 4–8:30) · Foundation Bar (daily 5–10)" },
                { label: "Best $5-and-under cocktails", value: "Tupelo Honey, Black Sheep, Bryant's, Lost Whale" },
                { label: "Best $1 / $2 food deal", value: "Movida ($1 tapas), Maxie's ($2 oysters)" },
                { label: "Best Sunday HH", value: "Boone & Crockett (all day), Café Corazón, Von Trier" },
                { label: "Best late-night (after 9 p.m.)", value: "BelAir Water St (Thu–Sat 9–11), Miller Time (Mon–Thu 10–12), Foundation Bar (daily till 10)" },
                { label: "Best rooftop HH", value: "The Outsider at Kimpton Journeyman" },
                { label: "Best hotel-bar HH", value: "Mason Street Grill (Pfister), Movida (Hotel Madrid)" },
                { label: "Best for under $1 off (value)", value: "Hooligan's, Palomino, Foundation Bar, Camino, The Vanguard" },
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

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Bar Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/rooftop-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Rooftop Bars</Link>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Cocktail Bars</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/best-dive-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Dive Bars</Link>
              <Link href="/milwaukee-bars" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Bars</Link>
              <Link href="/best-brewery-tours-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Brewery Tours</Link>
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Happy hour updates, new restaurants, events, and insider tips every Wednesday.</p>
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
