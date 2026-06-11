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

const soccerPubs = [
  {
    name: "Nomad World Pub",
    address: "1401 E Brady St, Milwaukee, WI 53202",
    phone: "(414) 224-8111",
    neighborhood: "Brady Street / Lower East Side",
    supports: "International / open-allegiance — historically THE Milwaukee World Cup gathering point",
    hours: "Mon–Thu 1 p.m.–2 a.m. · Fri 1 p.m.–2:30 a.m. · Sat 6:30 a.m.–2:30 a.m. · Sun 6:30 a.m.–2 a.m. — opens early for every World Cup match",
    capacity: "Mid-size pub + expanded outdoor 'Brady Beach' patio with massive outdoor Jumbotron for the tournament",
    foodDrink: "Full bar, Brady Street rotating food trucks, beer-forward. Drink specials timed to match windows.",
    insiderTip: "Nomad has confirmed it is showing EVERY 2026 World Cup match — indoors and on the outdoor Jumbotron — and is throwing a Brady Street Final Block Party on Sunday, July 19. In 2014, the Nomad USMNT party drew so many people the city closed Brady Street. Show up 60–90 minutes before any USMNT or Mexico kickoff if you want to sit.",
    why: "If there is one single bar that defines Milwaukee soccer culture, this is it. Owner Mike Eitel built the Nomad around international football in 1995 and the pub has anchored the city's World Cup tradition every cycle since.",
  },
  {
    name: "The Highbury Pub",
    address: "2322 S Kinnickinnic Ave, Milwaukee, WI 53207",
    phone: "(414) 539-4242",
    neighborhood: "Bay View",
    supports: "Arsenal (Brew City Gunners HQ); strong Manchester City, Chelsea, Borussia Dortmund crowds also turn up. For the World Cup it is open-allegiance — England, USMNT and neutrals all welcome.",
    hours: "Opens at 6:30 a.m. on early-match days — owner Joe Katz has done early Saturday openings since 2004 and is doing them again for the 2026 World Cup. Regular hours: daily 11 a.m.–close, later on weekends.",
    capacity: "Looks small from the outside — packs to capacity on big match mornings. Outdoor seating and street parking on KK.",
    foodDrink: "Full bar with English ales, spiked coffee for early kickoffs, pub menu. Dog-friendly.",
    insiderTip: "Highbury is named after Arsenal's old North London ground. Owner Joe Katz famously opens at 6:30 a.m. for Premier League and World Cup matches — locals have been showing up in pajamas for 20+ years. It is the closest thing Milwaukee has to a London soccer pub.",
    why: "Opened 2004. Listed in every Milwaukee soccer-bar roundup (OnMilwaukee, Milwaukee Record, Urban Milwaukee) for two decades. The Bay View crowd is loud and knowledgeable.",
  },
  {
    name: "Three Lions Pub",
    address: "4515 N Oakland Ave, Shorewood, WI 53211",
    phone: "(414) 763-6992",
    neighborhood: "Shorewood (North Shore)",
    supports: "England, full stop. This is the city's English pub — Three Lions is literally England's national-team nickname.",
    hours: "Mon–Thu 11 a.m.–midnight · Fri 11 a.m.–1 a.m. · Sat 9 a.m.–1 a.m. · Sun 9 a.m.–midnight. Saturday/Sunday 9 a.m. opens are standard. Earlier openings are usually scheduled around big-match calendars — call ahead.",
    capacity: "Traditional British pub, indoor + sidewalk seating, room for a crowd but expect a line for England matches.",
    foodDrink: "Full British menu cooked from scratch (the food is taken seriously here), long beer list, classic pub trivia Wednesdays.",
    insiderTip: "When England plays in the World Cup, this is THE Milwaukee viewing spot — past tournaments have included sidewalk block parties on Oakland Ave. The pub also runs a 7-day-a-week happy hour (4–6 p.m. daily) for postgame.",
    why: "Authentic British pub vibe, knowledgeable English-supporter regulars, walkable from Shorewood and the North Shore.",
  },
  {
    name: "Red Lion Pub",
    address: "1850 N Water St, Milwaukee, WI 53202",
    phone: "(414) 431-9009",
    neighborhood: "Lower East Side (Water Street)",
    supports: "Tottenham Hotspur — official Milwaukee Spurs supporters' club home base (the largest English-club supporter group in Wisconsin). Open-allegiance for the World Cup.",
    hours: "Mon–Tue CLOSED · Wed–Thu 4 p.m.–midnight · Fri 11 a.m.–1 a.m. · Sat 9 a.m.–1 a.m. · Sun 9 a.m.–close. For internationally televised Saturday matches, doors open at 6:45 a.m. (longstanding policy).",
    capacity: "Two levels in a historic 19th-century Cream City brick building, plus a second-floor outdoor patio with Milwaukee River views.",
    foodDrink: "Full British menu (proper Sunday roast, full English breakfast for early kickoffs) and Wisconsin-influenced bar food. Solid beer list — UK imports and craft.",
    insiderTip: "If you are watching a Saturday morning match and want the proper English-breakfast-and-a-pint experience, this is the move. Closed Monday and Tuesday — plan around that.",
    why: "Established 2011. Years of EPL, Champions League and World Cup viewing track record. The Tottenham supporter community is part of the texture.",
  },
  {
    name: "Moran's Pub",
    address: "912 Milwaukee Ave, South Milwaukee, WI 53172",
    phone: "(414) 762-2233",
    neighborhood: "South Milwaukee (10 minutes south of downtown)",
    supports: "USMNT specifically. Family-owned Irish/sports pub running the city's only confirmed USMNT block-party series for 2026.",
    hours: "Regular pub hours (call to confirm match-day openings). For the four announced 2026 World Cup events, the pub closes Milwaukee Avenue outside the bar and runs an outdoor block party.",
    capacity: "Pub interior plus the entire blocked-off section of Milwaukee Avenue for the four announced 2026 watch parties. Jumbotron, live music, food vendors.",
    foodDrink: "Irish pub menu, full bar. For block parties: authentic Mexican food and rotating vendors announced via Moran's social channels.",
    insiderTip: "Moran's has confirmed four Team USA block parties around the 2026 USMNT World Cup matches (June 12, June 19, June 25 and a USMNT knockout date if the team advances), plus a Final block party on July 19. Owner James Moran has been running World Cup viewing parties since 1998 — the pub has 25+ years of pedigree.",
    why: "The only Milwaukee-area venue with publicly announced, on-the-record USMNT 2026 block-party programming. Worth the 10-minute drive south.",
  },
  {
    name: "Tom's Watch Bar — Deer District",
    address: "1134 N Vel R. Phillips Ave, Milwaukee, WI 53203",
    phone: "(414) 488-5666",
    neighborhood: "Deer District (next to Fiserv Forum)",
    supports: "Open-allegiance neutral ground — built for big-screen tournament viewing. Massive screens, stadium sound.",
    hours: "Mon–Wed 4 p.m.–10 p.m. · Thu 4 p.m.–midnight · Fri–Sat 11 a.m.–midnight · Sun 11 a.m.–10 p.m. — expanded hours expected for early World Cup kickoffs (confirm with the venue).",
    capacity: "One of the largest screen counts in any single Milwaukee bar — dozens of TVs plus a video wall. Built for major sporting events.",
    foodDrink: "Full elevated sports-bar menu, deep beer and cocktail program.",
    insiderTip: "If you want a guaranteed seat with a clear view of a screen for a non-USMNT/non-Mexico match — Argentina vs Algeria on a Tuesday afternoon, say — Tom's is the easiest plan. It does not pull the same emotional crowd as Nomad or Highbury, but every match is on.",
    why: "Only major national-brand watch bar in the Deer District. Replaces the now-CLOSED MECCA Sports Bar that occupied the same kind of role in past cycles.",
  },
  {
    name: "SportClub",
    address: "750 N Jefferson St, Milwaukee, WI 53202",
    phone: "(414) 808-1588",
    neighborhood: "East Town (a block from Cathedral Square Park)",
    supports: "International, soccer-first. SportClub is owned by Nomad's Mike Eitel and shares the Nomad's soccer DNA.",
    hours: "Mon–Thu 11 a.m.–10 p.m. · Fri 11 a.m.–midnight · Sat 10 a.m.–midnight · Sun 10 a.m.–10 p.m. (verify match-day extensions — opening earlier than 10 a.m. is likely for big matches; call ahead).",
    capacity: "More upscale than the Nomad, refined pub-style food, multiple screens, indoor and patio seating.",
    foodDrink: "Globally-influenced pub menu, discounted-champagne happy hour, real cocktail program — a different feel from a typical sports bar.",
    insiderTip: "If Nomad is packed (it will be) and you want the same soccer-first programming with a quieter, slightly more refined room, this is the sister-bar move. East Town location makes it walkable from the downtown hotels.",
    why: "Sister bar to Nomad, owned by Mike Eitel, listed in Milwaukee Record's 11-soccer-bars-for-the-World-Cup roundup and on every major Champions League / World Cup viewing guide for Milwaukee.",
  },
];

const byCountry = [
  {
    team: "USMNT (United States)",
    group: "Group D — vs Paraguay, Australia, Türkiye",
    schedule: "Fri Jun 12 vs Paraguay (LA) — 8 p.m. CT · Fri Jun 19 vs Australia (Seattle) — 2 p.m. CT · Thu Jun 25 vs Türkiye (LA) — 9 p.m. CT",
    where: "Moran's Pub (South Milwaukee) — confirmed USMNT block-party series with Jumbotron, four parties announced for June 12, June 19, June 25 and a possible knockout date. Nomad World Pub (Brady Street) — Brady Beach Jumbotron, 'every match' commitment. Tom's Watch Bar (Deer District) — biggest screens. The Highbury (Bay View) and SportClub (Cathedral Square) — open-allegiance crowd that goes hard for USMNT.",
  },
  {
    team: "Mexico (El Tri)",
    group: "Group A (host group) — vs South Africa, South Korea, Czechia",
    schedule: "Thu Jun 11 vs South Africa (Mexico City — opening match) — 2 p.m. CT · Thu Jun 18 vs South Korea (Guadalajara) — 8 p.m. CT · Wed Jun 24 vs Czechia (Mexico City) — 8 p.m. CT",
    where: "Café Corazón (3129 N Bremen St, Riverwest · 2394 S Kinnickinnic Ave, Bay View) — Milwaukee's Mexican-restaurant favorite. Conejito's Place (539 W Virginia St, Walker's Point) — the historic Mexican restaurant since 1972, beloved by the Mexican-American community. Nomad World Pub on Brady Street draws huge Mexico-supporting crowds for the opener — kickoff is 2 p.m. Central, a perfect early-afternoon party slot. Call Café Corazón at (414) 810-3941 and Conejito's at (414) 278-9106 to confirm whether they are running TV viewing for specific Mexico matches.",
  },
  {
    team: "Argentina (defending champions)",
    group: "Group J — vs Algeria, Austria, Jordan",
    schedule: "Argentina enters as 2022 World Cup champions. Group-stage dates run mid-June through early July — check ESPN's match schedule for kickoff details as the tournament unfolds.",
    where: "Argentina does not have a dedicated Milwaukee club bar the way England (Three Lions / Red Lion) or Arsenal (Highbury) do. Nomad World Pub and SportClub draw the strongest South American supporter crowds for Argentina matches. Tom's Watch Bar in the Deer District is the most reliable big-screen plan.",
  },
  {
    team: "Brazil",
    group: "Group C — vs Morocco, Haiti, Scotland",
    schedule: "Group-stage matches scattered across the U.S. host cities — verify daily kickoff times at the FIFA / FOX Sports schedule (FOX is the U.S. English-language broadcaster; Telemundo carries Spanish-language).",
    where: "Same as Argentina — no single dedicated Brazil bar in Milwaukee. Nomad World Pub is the cultural soccer hub and will be the loudest Brazilian-supporter spot in the city. Tom's Watch Bar is the screens-guaranteed plan.",
  },
  {
    team: "England (Three Lions)",
    group: "Group L — vs Croatia, Ghana, Panama",
    schedule: "Group-stage matches mid-June through late June. Most England matches kick off in late-morning or early-afternoon Central Time.",
    where: "Three Lions Pub (Shorewood) — the obvious move. Red Lion Pub (Lower East Side) — also strongly English (Tottenham home bar). For a really early kickoff, Red Lion has historically opened at 6:45 a.m.",
  },
  {
    team: "Germany",
    group: "Group E — vs Curaçao, Côte d'Ivoire, Ecuador",
    schedule: "Group-stage matches in mid-to-late June across U.S. venues.",
    where: "Old German Beer Hall (1009 N Old World 3rd St, downtown — Hofbräu Munich beer hall, open daily 10 a.m.–midnight, (414) 226-2728). Mader's German Restaurant (1037 N Old World 3rd St, downtown — Milwaukee's most iconic German dining room since 1902). Von Trier (2235 N Farwell Ave, Lower East Side — Milwaukee's German beer-hall fixture since 1978 with a biergarten). Call ahead to confirm each venue is showing the specific Germany match — these are restaurants and beer halls first, sports bars second.",
  },
  {
    team: "Spain",
    group: "Group H — vs Cape Verde, Saudi Arabia, Uruguay",
    schedule: "Group-stage matches mid-to-late June. Spain enters as one of the highest-ranked teams in the field.",
    where: "Movida at Hotel Madrid (600 S 6th St, Walker's Point — Milwaukee's Spanish tapas restaurant). Movida is closed Monday and Tuesday — verify the specific Spain match falls on an open day (Wed–Sun) and call to confirm they are showing it. Otherwise default to Nomad, SportClub or Tom's Watch Bar.",
  },
  {
    team: "France",
    group: "Group I — vs Senegal, Iraq, Norway",
    schedule: "Group-stage matches mid-June through late June across U.S. host cities.",
    where: "No dedicated French bar in Milwaukee. Nomad, SportClub and Tom's Watch Bar are the universal options. For a French-leaning crowd, French-speaking Milwaukeeans tend to gather at Nomad for major Les Bleus moments.",
  },
  {
    team: "Croatia, Serbia, Eastern Europe",
    group: "Croatia in Group L (with England) · Serbia did not qualify this cycle",
    schedule: "Croatia plays England in the group stage — that match will be a big one at both Three Lions and Red Lion in Milwaukee.",
    where: "Three Brothers Serbian Restaurant (2414 S St Clair St, Bay View — James Beard–honored, family-run since 1956). Three Brothers is a restaurant first (open Wed–Sun 4 p.m.) but is the Serbian/Balkan cultural anchor in the city. Call (414) 481-7530 to confirm whether they are showing matches.",
  },
  {
    team: "Italy and Poland",
    group: "Did NOT qualify for 2026",
    schedule: "Both fell short in the European playoffs — Italy lost to Bosnia & Herzegovina, Poland lost to Sweden. There is no Italy or Poland match to watch.",
    where: "Polonez, Milwaukee's long-running Polish restaurant, has previously closed. For a Polish-influenced Walker's Point gastropub night that is not tied to a specific match, Camino (434 S 2nd St) is the move.",
  },
];

const sportsBars = [
  { name: "Steny's Tavern & Grill", address: "800 S 2nd St, Milwaukee, WI 53204 · (414) 672-7139", neighborhood: "Walker's Point", note: "Open Mon–Thu 11 a.m.–1 a.m., Fri–Sat 11 a.m.–2:30 a.m., Sun 11 a.m.–1 a.m. Walker's Point sports-bar staple since 1985. Many TVs, big patio, Brewers/Bucks shuttle bar. Call ahead to confirm which matches they are featuring." },
  { name: "Camp Bar — Shorewood", address: "4044 N Oakland Ave, Shorewood, WI 53211 · (414) 332-2267", neighborhood: "Shorewood (North Shore)", note: "Supper-club lodge vibe, North Shore. A block from Three Lions Pub — pair them on the same trip up Oakland." },
  { name: "Milwaukee Ale House", address: "233 N Water St, Milwaukee, WI 53202 · (414) 226-2337", neighborhood: "Third Ward (riverfront)", note: "Big multi-room brewpub with a riverfront patio. Many TVs, full kitchen, reliable for any match where you want a meal and a guaranteed seat." },
  { name: "Hooligan's Super Bar", address: "2017 E North Ave, Milwaukee, WI 53202 · (414) 273-5230", neighborhood: "Lower East Side", note: "East Side institution, ~30 taps and 99+ bottles/cans. Reliable open-late TV bar. Daily 3–6 p.m. happy hour fits an afternoon kickoff." },
  { name: "Uncle Bucks on Third", address: "1125 N Dr Martin Luther King Jr Dr, Milwaukee, WI 53203 · (414) 988-9088", neighborhood: "Deer District", note: "Multi-level bar adjacent to Fiserv Forum with rooftop. Many TVs. Note: HH is suspended on Fiserv event nights — check the arena calendar." },
  { name: "Miller Time Pub & Grill", address: "509 W Wisconsin Ave, Milwaukee, WI 53203 · (414) 935-5950", neighborhood: "Westown (Hilton Milwaukee)", note: "Downtown hotel-attached pub. Mon–Thu 4–7 p.m. happy hour, late-night 10 p.m.–midnight, $5 Miller Lite drafts during Brewers/Bucks games. Walkable from downtown hotels." },
];

const earlyMornings = [
  { match: "Mexico vs South Africa (Opening Match)", date: "Thu Jun 11", ct: "2 p.m. CT", note: "Afternoon kickoff, no early-open issue." },
  { match: "Most non-USMNT/Mexico group matches at U.S. venues", date: "Throughout group stage", ct: "Various — many in 11 a.m.–2 p.m. CT window", note: "U.S.-hosted matches are friendly to Central Time. No 6 a.m. wakeup needed for the majority of marquee group games." },
  { match: "Some Canada-hosted matches", date: "Throughout group stage", ct: "Generally evening CT", note: "Vancouver and Toronto kickoffs land in afternoon or evening Central." },
  { match: "Mexico-hosted matches at Estadio Azteca (Mexico City) and Guadalajara", date: "Group A and select knockout matches", ct: "Afternoon and evening CT", note: "Mexico City is in Central Time itself in summer — same time zone as Milwaukee. Easy." },
];

const beerGardens = [
  { name: "Hubbard Park Beer Garden", address: "3565 N Morris Blvd, Shorewood, WI 53211", note: "Traditional Old World beer garden along the Oak Leaf Trail. The patio is the draw — but TVs are NOT a standard feature. Treat this as a pre- or post-match drink, not a viewing destination. Walking distance to Three Lions Pub up the road." },
  { name: "Estabrook Beer Garden", address: "4600 Estabrook Dr, Milwaukee, WI 53211", note: "The first public beer garden in the U.S. since Prohibition (opened 2012). Hofbräu beers, communal tables, German theme — perfect post-match Germany-match destination, but no TVs." },
  { name: "South Shore Terrace", address: "2900 S Shore Dr, Milwaukee, WI 53207", note: "County-parks beer garden on Lake Michigan in Bay View. Stunning view; no TVs. Walk down KK from The Highbury after a match." },
  { name: "Lakefront Brewery Beer Hall", address: "1872 N Commerce St, Milwaukee, WI 53212", note: "Indoor beer hall with TVs (the Riverwest brewery has them above the bar). Not soccer-first, but reliable for casual viewing with food. Friday fish fry is the legendary side-quest." },
];

const atAGlance = [
  { label: "World Cup runs", value: "June 11 – July 19, 2026 (39 days)" },
  { label: "Tournament format", value: "48 teams · 104 matches · 16 host cities across USA, Canada, Mexico" },
  { label: "Opening match (Central Time)", value: "Thu Jun 11, 2 p.m. CT — Mexico vs South Africa at Estadio Azteca, Mexico City" },
  { label: "USMNT group", value: "Group D vs Paraguay (Jun 12), Australia (Jun 19), Türkiye (Jun 25)" },
  { label: "Mexico group", value: "Group A — South Africa (Jun 11), South Korea (Jun 18), Czechia (Jun 24)" },
  { label: "Defending champion", value: "Argentina (2022) — Group J this cycle" },
  { label: "Did NOT qualify", value: "Italy, Poland, Serbia (no national-team viewing for these countries)" },
  { label: "Best dedicated soccer pub", value: "Nomad World Pub (Brady Street) — official World Cup viewing series + Final block party Jul 19" },
  { label: "Best for early-morning kickoffs", value: "Nomad (opens 6:30 a.m. Sat/Sun), Highbury (6:30 a.m. on early-match days), Red Lion (6:45 a.m. Saturday)" },
  { label: "Final — where to watch in MKE", value: "Sun Jul 19, 2 p.m. CT — Nomad's Brady Street Block Party (announced)" },
];

const marqueeMatches = [
  { date: "Thu Jun 11", match: "Mexico vs South Africa (OPENING)", ct: "2 p.m. CT", venue: "Estadio Azteca, Mexico City", channel: "FOX / Telemundo", milwaukee: "Nomad's Brady Street watch party kicks off the tournament" },
  { date: "Fri Jun 12", match: "USA vs Paraguay (USMNT opener)", ct: "8 p.m. CT", venue: "SoFi Stadium, Los Angeles", channel: "FOX / Telemundo", milwaukee: "Moran's USMNT Block Party #1 · Nomad · Tom's Watch Bar" },
  { date: "Thu Jun 18", match: "Mexico vs South Korea", ct: "8 p.m. CT", venue: "Estadio Akron, Guadalajara", channel: "FOX / Telemundo", milwaukee: "Café Corazón · Conejito's · Nomad" },
  { date: "Fri Jun 19", match: "USA vs Australia", ct: "2 p.m. CT", venue: "Lumen Field, Seattle", channel: "FOX / Telemundo", milwaukee: "Moran's USMNT Block Party #2 · Nomad" },
  { date: "Wed Jun 24", match: "Czechia vs Mexico", ct: "8 p.m. CT", venue: "Estadio Azteca, Mexico City", channel: "FOX / Telemundo", milwaukee: "Café Corazón · Conejito's · Nomad" },
  { date: "Thu Jun 25", match: "USA vs Türkiye", ct: "9 p.m. CT", venue: "SoFi Stadium, Los Angeles", channel: "FOX / Telemundo", milwaukee: "Moran's USMNT Block Party #3 · Nomad" },
  { date: "Jun 28 – Jul 3", match: "Round of 32 (new for 48-team format)", ct: "Various", venue: "U.S./Canada/Mexico venues", channel: "FOX / Telemundo", milwaukee: "Nomad continues every match · Tom's Watch Bar" },
  { date: "Jul 4 – Jul 7", match: "Round of 16", ct: "Various", venue: "Houston, Philadelphia, Vancouver, Atlanta and others", channel: "FOX / Telemundo", milwaukee: "Nomad · Highbury · Tom's Watch Bar" },
  { date: "Jul 9 – Jul 11", match: "Quarterfinals", ct: "Various", venue: "Boston, LA, Miami, Kansas City", channel: "FOX / Telemundo", milwaukee: "Nomad · Tom's Watch Bar · Three Lions for England QF (if they advance)" },
  { date: "Jul 14", match: "Semifinal #1", ct: "Afternoon CT (TBC)", venue: "AT&T Stadium, Arlington TX", channel: "FOX / Telemundo", milwaukee: "Nomad's outdoor Jumbotron · Tom's Watch Bar" },
  { date: "Jul 15", match: "Semifinal #2", ct: "Afternoon CT (TBC)", venue: "Mercedes-Benz Stadium, Atlanta", channel: "FOX / Telemundo", milwaukee: "Nomad's outdoor Jumbotron · Tom's Watch Bar" },
  { date: "Sat Jul 18", match: "Third-place match", ct: "Afternoon CT (TBC)", venue: "Hard Rock Stadium, Miami Gardens", channel: "FOX / Telemundo", milwaukee: "Nomad · SportClub" },
  { date: "SUN Jul 19", match: "WORLD CUP FINAL", ct: "Afternoon CT (TBC)", venue: "MetLife Stadium, East Rutherford NJ", channel: "FOX / Telemundo", milwaukee: "Nomad's Brady Street Block Party (announced) · Moran's Final Block Party · every soccer pub in the city" },
];

const faqs = [
  {
    question: "When does the 2026 FIFA World Cup start and end?",
    answer: "The 2026 FIFA World Cup runs from Thursday, June 11 to Sunday, July 19, 2026 — 39 days, 48 teams, 104 matches. The opening match is Mexico vs South Africa at Estadio Azteca in Mexico City, kicking off at 2 p.m. Central Time on June 11 (3 p.m. ET). The final is Sunday, July 19 at MetLife Stadium in East Rutherford, New Jersey. This is the first World Cup hosted by three countries — the United States, Canada and Mexico — and the first with the new 48-team, 12-group, 104-match format including a brand-new Round of 32 knockout stage."
  },
  {
    question: "Is Milwaukee a 2026 World Cup host city?",
    answer: "No. Milwaukee is NOT a 2026 World Cup host city. The 11 U.S. host cities are Atlanta, Boston (Foxborough), Dallas (Arlington), Houston, Kansas City, Los Angeles (Inglewood), Miami (Miami Gardens), New York/New Jersey (East Rutherford), Philadelphia, San Francisco (Santa Clara) and Seattle. Chicago pulled out of bidding years ago. Canada hosts in Toronto and Vancouver; Mexico hosts in Mexico City (Estadio Azteca), Guadalajara and Monterrey. For Milwaukee soccer fans this means the city has no home matches — but it does have a deep, dedicated soccer-pub scene that is gearing up for the tournament with watch parties, block parties and Jumbotron viewing."
  },
  {
    question: "Where is the best place to watch USMNT World Cup matches in Milwaukee?",
    answer: "Moran's Pub in South Milwaukee (912 Milwaukee Ave) has confirmed four USMNT Team USA Block Parties for the 2026 World Cup — outdoor Jumbotron on a closed-off Milwaukee Avenue, live music, food vendors. This is the only Milwaukee venue with publicly announced, dedicated USMNT viewing-party programming for every Group D match (June 12 vs Paraguay, June 19 vs Australia, June 25 vs Türkiye) plus a knockout-round event if the U.S. advances. Nomad World Pub on Brady Street is the in-city alternative with massive crowds and the Brady Beach outdoor Jumbotron. Tom's Watch Bar in the Deer District is the easiest big-screen plan for a guaranteed seat. The Highbury in Bay View and SportClub near Cathedral Square also draw strong USMNT crowds."
  },
  {
    question: "Where is the best place to watch Mexico World Cup matches in Milwaukee?",
    answer: "Café Corazón (3129 N Bremen St in Riverwest and 2394 S Kinnickinnic Ave in Bay View — call (414) 810-3941) is Milwaukee's beloved Mexican restaurant and the natural community gathering point for El Tri matches. Conejito's Place (539 W Virginia St, Walker's Point — (414) 278-9106), open since 1972, is the historic anchor of Milwaukee's Mexican community and a long-loved viewing spot. Nomad World Pub on Brady Street will be the loudest open-allegiance Mexico crowd in the city — the opening match (Mexico vs South Africa, 2 p.m. CT on June 11) is essentially the city's tournament-kickoff party at Nomad. Always call ahead to confirm the specific match is being shown."
  },
  {
    question: "What is the best soccer bar in Milwaukee for the World Cup?",
    answer: "Three pubs share the title: Nomad World Pub (1401 E Brady St) — Milwaukee's original soccer bar since 1995, expanded outdoor 'Brady Beach' patio with a massive Jumbotron, official 'every World Cup match' programming, and a confirmed Brady Street Final Block Party on July 19. The Highbury Pub (2322 S Kinnickinnic Ave in Bay View) — Arsenal-themed, open since 2004, opens at 6:30 a.m. for early kickoffs, the kind of soccer-first crowd that exists in London but rarely in the American Midwest. Three Lions Pub (4515 N Oakland Ave in Shorewood) — the authentic British pub, THE Milwaukee England venue. For any given match, your default order is: Nomad first (atmosphere), Highbury second (intimacy), Tom's Watch Bar third (guaranteed screen access)."
  },
  {
    question: "Can I watch World Cup matches at a Milwaukee beer garden?",
    answer: "Mostly no — and this is the trap to avoid. Milwaukee's outdoor beer gardens (Hubbard Park in Shorewood, Estabrook Beer Garden in Glendale, South Shore Terrace in Bay View) generally do NOT have TVs as a standard feature. They are gorgeous summer drinking spots but not viewing destinations. The exception is Nomad World Pub's 'Brady Beach' outdoor patio, which is running an actual outdoor Jumbotron for every 2026 World Cup match — that's the closest thing to a 'beer garden World Cup' experience in the city. Lakefront Brewery's indoor beer hall has TVs above the bar but is not soccer-first. Treat traditional beer gardens as a pre- or post-match destination, not as where you watch the match itself."
  },
  {
    question: "Which Milwaukee bars open early for morning World Cup matches?",
    answer: "Three pubs are confirmed to open early specifically for soccer: Nomad World Pub (Saturday and Sunday 6:30 a.m. opens are standard year-round, and they will be open early for any World Cup match that requires it). The Highbury Pub (Owner Joe Katz has a 20+ year tradition of opening at 6:30 a.m. for Premier League and World Cup matches — calls for the 2026 tournament are confirmed). Red Lion Pub (Saturday doors at 6:45 a.m. is a longstanding policy for internationally televised morning matches). Three Lions Pub in Shorewood opens at 9 a.m. on Saturday and Sunday as a baseline and will adjust for big match days — call (414) 763-6992 to confirm. Good news for Milwaukee fans: because the tournament is in North American time zones, most marquee matches will kick off in the late morning, afternoon or evening Central Time. There are fewer 5 a.m. wake-up calls than in past European or Asian World Cups."
  },
  {
    question: "Are there kid-friendly places to watch the World Cup in Milwaukee?",
    answer: "Yes — several. Three Lions Pub in Shorewood is family-friendly (restaurant first, pub second). Café Corazón at both Riverwest and Bay View is a full restaurant where families bring kids regularly. Conejito's Place in Walker's Point has been a multi-generation family dining room since 1972. Milwaukee Ale House in the Third Ward is a sit-down brewpub with a kitchen and a riverfront patio that works for families. Tom's Watch Bar in the Deer District is technically family-welcome until later evening — go for an afternoon kickoff. Avoid Nomad, SportClub and Highbury for kids during the loudest matches — those are bar-first, packed-room atmospheres. The 2 p.m. CT opening match (Mexico vs South Africa on June 11) is the most kid-friendly marquee slot of the tournament."
  },
  {
    question: "Where can I watch Argentina, Brazil, Spain or Germany matches in Milwaukee?",
    answer: "Argentina (defending champions, Group J): Nomad World Pub draws the strongest South American supporter crowd; Tom's Watch Bar guarantees a big screen. Brazil (Group C): same — Nomad or Tom's. There is no dedicated Argentine or Brazilian bar in Milwaukee. Spain (Group H): Movida at Hotel Madrid (600 S 6th St, Walker's Point) is the city's Spanish tapas restaurant — but it is CLOSED Mon and Tue, so check the specific Spain match date. Default to Nomad otherwise. Germany (Group E): Old German Beer Hall (1009 N Old World 3rd St, downtown, daily 10 a.m.–midnight, (414) 226-2728) and Mader's German Restaurant (downtown, since 1902) are the obvious community gatherings; Von Trier on Farwell is the East Side German beer-hall fallback. Call ahead — these are restaurants and beer halls first, not sports bars."
  },
  {
    question: "What food and drink should I plan for long World Cup match days in Milwaukee?",
    answer: "Three approaches. (1) Pub crawl: do a Brady Street loop — start at Nomad for the marquee match, walk five minutes to Sasha's or Hooligan's for a custard or a beer break between matches, return to Nomad for the late match. (2) Restaurant anchor: pick a venue with a full kitchen (Three Lions for British pub food, Café Corazón for Mexican, Old German Beer Hall for Bavarian pretzels and sausages, Milwaukee Ale House for brewpub food, Red Lion for full English breakfast on an early Saturday kickoff). (3) Block party: Moran's Pub for the four announced USMNT block parties — outdoor food vendors and live music, the most festival-like atmosphere in the city. For drinks: Wisconsin is the country's leading dairy state and a brewing capital — a Milwaukee World Cup day pairs naturally with local lagers (Lakefront, Sprecher, Miller High Life, Pabst) and Spotted Cow if you can get it (Wisconsin-only New Glarus). For the Final on July 19, every soccer pub in the city will be running specials — show up at least 90 minutes early."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Where to Watch the World Cup 2026 in Milwaukee: Best Bars, Soccer Pubs & Watch Parties",
    description: "Definitive 2026 guide to watching the FIFA World Cup in Milwaukee — Nomad, Highbury, Three Lions, Moran's USMNT block parties, Café Corazón for Mexico, plus every kickoff time in Central.",
    image: "https://www.discover-milwaukee.com/images/world-cup-2026-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: "https://www.discover-milwaukee.com/world-cup-2026-milwaukee",
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
      { "@type": "ListItem", position: 2, name: "World Cup 2026 Milwaukee", item: "https://www.discover-milwaukee.com/world-cup-2026-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Places to Watch the 2026 FIFA World Cup in Milwaukee",
    description: "Verified Milwaukee venues for watching the 2026 World Cup — soccer pubs, sports bars, national-team community venues.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 17,
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "BarOrPub", name: "Nomad World Pub", telephone: "+1-414-224-8111", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1401 E Brady St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, openingHours: ["Mo-Th 13:00-02:00","Fr 13:00-02:30","Sa 06:30-02:30","Su 06:30-02:00"], url: "https://nomadworldpub.com" } },
      { "@type": "ListItem", position: 2, item: { "@type": "BarOrPub", name: "The Highbury Pub", telephone: "+1-414-539-4242", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2322 S Kinnickinnic Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53207", addressCountry: "US" }, openingHours: "Mo-Su 11:00-02:00", url: "https://www.thehighbury.com" } },
      { "@type": "ListItem", position: 3, item: { "@type": "BarOrPub", name: "Three Lions Pub", telephone: "+1-414-763-6992", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "4515 N Oakland Ave", addressLocality: "Shorewood", addressRegion: "WI", postalCode: "53211", addressCountry: "US" }, openingHours: ["Mo-Th 11:00-00:00","Fr 11:00-01:00","Sa 09:00-01:00","Su 09:00-00:00"], url: "https://threelionspub.com" } },
      { "@type": "ListItem", position: 4, item: { "@type": "BarOrPub", name: "Red Lion Pub", telephone: "+1-414-431-9009", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1850 N Water St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, openingHours: ["We-Th 16:00-00:00","Fr 11:00-01:00","Sa 09:00-01:00","Su 09:00-23:00"], url: "https://redlionpubmke.com" } },
      { "@type": "ListItem", position: 5, item: { "@type": "BarOrPub", name: "Moran's Pub", telephone: "+1-414-762-2233", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "912 Milwaukee Ave", addressLocality: "South Milwaukee", addressRegion: "WI", postalCode: "53172", addressCountry: "US" }, url: "https://moranspub.com" } },
      { "@type": "ListItem", position: 6, item: { "@type": "BarOrPub", name: "Tom's Watch Bar — Deer District", telephone: "+1-414-488-5666", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1134 N Vel R. Phillips Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53203", addressCountry: "US" }, openingHours: ["Mo-We 16:00-22:00","Th 16:00-00:00","Fr-Sa 11:00-00:00","Su 11:00-22:00"], url: "https://tomswatchbar.com/milwaukee" } },
      { "@type": "ListItem", position: 7, item: { "@type": "BarOrPub", name: "SportClub", telephone: "+1-414-808-1588", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "750 N Jefferson St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, openingHours: ["Mo-Th 11:00-22:00","Fr 11:00-00:00","Sa 10:00-00:00","Su 10:00-22:00"] } },
      { "@type": "ListItem", position: 8, item: { "@type": "Restaurant", name: "Café Corazón — Riverwest", telephone: "+1-414-810-3941", priceRange: "$$", servesCuisine: "Mexican", address: { "@type": "PostalAddress", streetAddress: "3129 N Bremen St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" }, url: "https://corazonmilwaukee.com" } },
      { "@type": "ListItem", position: 9, item: { "@type": "Restaurant", name: "Café Corazón — Bay View", telephone: "+1-414-810-3941", priceRange: "$$", servesCuisine: "Mexican", address: { "@type": "PostalAddress", streetAddress: "2394 S Kinnickinnic Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53207", addressCountry: "US" }, url: "https://corazonmilwaukee.com" } },
      { "@type": "ListItem", position: 10, item: { "@type": "Restaurant", name: "Conejito's Place", telephone: "+1-414-278-9106", priceRange: "$", servesCuisine: "Mexican", address: { "@type": "PostalAddress", streetAddress: "539 W Virginia St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53204", addressCountry: "US" }, openingHours: ["Su-Th 11:00-20:00","Fr-Sa 11:00-21:00"], url: "https://conejitosmke.com" } },
      { "@type": "ListItem", position: 11, item: { "@type": "Restaurant", name: "Movida at Hotel Madrid", priceRange: "$$", servesCuisine: "Spanish", address: { "@type": "PostalAddress", streetAddress: "600 S 6th St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53204", addressCountry: "US" }, openingHours: ["We-Th 16:00-21:00","Fr 16:00-22:00","Sa 10:00-22:00","Su 10:00-21:00"], url: "https://www.hotelmadridmke.com" } },
      { "@type": "ListItem", position: 12, item: { "@type": "BarOrPub", name: "Old German Beer Hall", telephone: "+1-414-226-2728", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1009 N Old World 3rd St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53203", addressCountry: "US" }, openingHours: "Mo-Su 10:00-00:00", url: "https://oldgermanbeerhall.com" } },
      { "@type": "ListItem", position: 13, item: { "@type": "Restaurant", name: "Mader's German Restaurant", priceRange: "$$$", servesCuisine: "German", address: { "@type": "PostalAddress", streetAddress: "1037 N Old World 3rd St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53203", addressCountry: "US" }, url: "https://madersrestaurant.com" } },
      { "@type": "ListItem", position: 14, item: { "@type": "Restaurant", name: "Three Brothers Serbian Restaurant", priceRange: "$$", servesCuisine: "Serbian", address: { "@type": "PostalAddress", streetAddress: "2414 S St Clair St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53207", addressCountry: "US" }, openingHours: ["We-Fr 17:00-21:00","Sa-Su 16:00-21:00"], url: "https://www.threebrothersmke.com" } },
      { "@type": "ListItem", position: 15, item: { "@type": "BarOrPub", name: "Steny's Tavern & Grill", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "800 S 2nd St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53204", addressCountry: "US" }, openingHours: ["Mo-Th 11:00-01:00","Fr-Sa 11:00-02:30","Su 11:00-01:00"], url: "https://www.stenystavern.com" } },
      { "@type": "ListItem", position: 16, item: { "@type": "BarOrPub", name: "Milwaukee Ale House", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "233 N Water St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" } } },
      { "@type": "ListItem", position: 17, item: { "@type": "BarOrPub", name: "Hooligan's Super Bar", priceRange: "$", address: { "@type": "PostalAddress", streetAddress: "2017 E North Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" } } },
    ],
  },
};

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#schedule", label: "Match Times CT" },
  { href: "#soccer-pubs", label: "Soccer Pubs" },
  { href: "#by-country", label: "By Country" },
  { href: "#sports-bars", label: "Sports Bars" },
  { href: "#beer-gardens", label: "Beer Gardens" },
  { href: "#early", label: "Early Mornings" },
  { href: "#faq", label: "FAQ" },
];

export default function WorldCup2026Milwaukee() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Watch World Cup 2026 in Milwaukee: Best Bars & Pubs</title>
        <meta name="description" content="Where to watch the 2026 FIFA World Cup in Milwaukee — Nomad, Three Lions, The Highbury, Moran's USMNT block parties + Mexico, Argentina, England venues." />
        <meta name="keywords" content="where to watch world cup milwaukee, world cup 2026 milwaukee, usmnt milwaukee, mexico world cup milwaukee, nomad world pub, three lions pub, highbury pub, red lion pub, moran's pub usmnt watch party, soccer bar milwaukee, fifa world cup 2026 schedule central time, milwaukee soccer pubs, brady street world cup, deer district world cup" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/world-cup-2026-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Watch World Cup 2026 in Milwaukee: Best Bars & Pubs" key="og:title" />
        <meta property="og:description" content="Definitive 2026 guide — Nomad, Three Lions, Highbury, Moran's USMNT block parties, Mexico viewing at Café Corazón. Every kickoff in Central Time." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/world-cup-2026-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/world-cup-2026-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Where to watch the 2026 FIFA World Cup in Milwaukee — verified soccer pubs, sports bars, USMNT and Mexico viewing venues, June 11 to July 19, 2026." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-10T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-10T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Sports" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Watch World Cup 2026 in Milwaukee: Best Bars & Pubs" key="twitter:title" />
        <meta name="twitter:description" content="Verified Milwaukee soccer pubs and watch parties for the 2026 FIFA World Cup — USMNT, Mexico, England, Argentina, Brazil, Germany, Spain." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/world-cup-2026-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 10, 2026 · KICKOFF TOMORROW · VERIFIED VENUES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Where to Watch the World Cup in Milwaukee — 2026 Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "720px", margin: "0 auto" }}>
              The 48-team tournament runs <strong>June 11 – July 19, 2026</strong>. Milwaukee is not a host city — but the soccer-pub scene here is real. Here&apos;s where to watch, with every kickoff in Central Time. Verified June 2026 against each venue&apos;s own website and Milwaukee press.
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
              <strong>Heads up:</strong> The opening match (Mexico vs South Africa, 2 p.m. Central) kicks off tomorrow. Every venue below was verified against the venue&apos;s own website and recent Milwaukee press (OnMilwaukee, Milwaukee Record, Urban Milwaukee, Milwaukee Magazine) in June 2026 — but match-day hours and watch-party programming can shift fast in a tournament window. Always call ahead before you go for early-morning openings or specific match showings. Several venues older guides reference (Punch Bowl Social, MECCA Sports Bar, Good City Deer District, Nomad Nacional, Polonez) are CLOSED — they are not in this guide.
            </p>
          </div>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/world-cup/estadio-azteca-aerial.jpg" alt="Aerial view of Estadio Azteca in Mexico City — host of the 2026 FIFA World Cup opening match June 11" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Estadio Azteca, Mexico City — hosts the opening match June 11 (Mexico vs South Africa, 2 p.m. CT).</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/world-cup/estadio-azteca-exterior.jpg" alt="Exterior of Estadio Azteca in Mexico City, opening match venue of the 2026 FIFA World Cup" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Milwaukee soccer-pub tradition gathers tomorrow: Nomad on Brady, Highbury in Bay View, Three Lions in Shorewood.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/world-cup/world-cup-fans.jpg" alt="FIFA World Cup fans cheering in a packed stadium during a tournament match" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>USMNT (Group D vs Paraguay, Australia, Türkiye) — Moran&apos;s Pub is hosting four block parties.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/world-cup/metlife-stadium-final.jpg" alt="MetLife Stadium in East Rutherford New Jersey — host of the 2026 FIFA World Cup Final on July 19" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Final — Sunday July 19 at MetLife Stadium, East Rutherford NJ. Defending champion: Argentina.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#999", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. Credits: Estadio Azteca aerial (CC-BY-SA-4.0); Estadio Azteca exterior — Carlos Valenzuela (CC-BY-SA-4.0); 2010 FIFA World Cup fans — Octagon (CC-BY-3.0); MetLife Stadium 2022 — Thecoolone1223 (CC-BY-4.0).
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 World Cup in Milwaukee at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The fast facts before tomorrow&apos;s opening match.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="schedule" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Key 2026 Match Times in Central Time</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Every marquee match for Milwaukee fans — kickoff times converted to Central Time, with where to watch in the city. Knockout-round Central Time kickoffs will be confirmed by FIFA as brackets fill out; check ESPN&apos;s match schedule for live updates.</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.beige}` }}>
                <thead>
                  <tr style={{ backgroundColor: c.green1 }}>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>Date</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>Match</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>CT</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>TV</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>Where to Watch in MKE</th>
                  </tr>
                </thead>
                <tbody>
                  {marqueeMatches.map((m, i) => (
                    <tr key={m.date + m.match} style={{ backgroundColor: i % 2 === 0 ? c.cream : "white" }}>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: c.green1, fontWeight: "700", verticalAlign: "top" }}>{m.date}</td>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: c.green1, verticalAlign: "top" }}>{m.match}<br /><span style={{ color: "#666", fontWeight: 400 }}>{m.venue}</span></td>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: c.orange, fontWeight: "700", verticalAlign: "top" }}>{m.ct}</td>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: "#444", verticalAlign: "top" }}>{m.channel}</td>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: "#444", verticalAlign: "top" }}>{m.milwaukee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "#666", fontSize: "13px", marginTop: "12px" }}>Sources: FIFA official schedule, ESPN, FOX Sports, NBC Sports — verified June 10, 2026. FOX (English) and Telemundo (Spanish) hold the U.S. broadcast rights.</p>
          </section>

          <section id="soccer-pubs" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Dedicated Soccer Pubs</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>These seven are the heart of Milwaukee&apos;s soccer-watching scene. If your first move during the World Cup is one of these, you are doing it right.</p>

            {soccerPubs.map((p) => (
              <div key={p.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <h3 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", margin: 0 }}>{p.name}</h3>
                  <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{p.neighborhood}</span>
                </div>

                <p style={{ fontSize: "13px", color: "#555", margin: "0 0 12px" }}>📍 {p.address} · {p.phone}</p>

                <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{p.hours}</p>

                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>{p.why}</p>

                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "10px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Who They Support</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.supports}</p>
                </div>

                <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "12px", borderRadius: "8px", marginBottom: "10px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Capacity & Setup</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.capacity}</p>
                </div>

                <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "12px", borderRadius: "8px", marginBottom: "10px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Food & Drink</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.foodDrink}</p>
                </div>

                <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Insider Tip</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.insiderTip}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="by-country" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>By Country — Where to Watch Each National Team</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Where Milwaukee&apos;s national-team supporter communities gather. Group assignments and verified Milwaukee venues for each team.</p>

            {byCountry.map((t) => (
              <div key={t.team} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "18px 20px", marginBottom: "14px" }}>
                <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "900", margin: "0 0 6px" }}>{t.team}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>{t.group}</p>
                <p style={{ color: "#333", fontSize: "13px", margin: "0 0 10px", lineHeight: 1.6, fontWeight: 600 }}>{t.schedule}</p>
                <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{t.where}</p>
              </div>
            ))}
          </section>

          <section id="sports-bars" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Sports Bars with Many TVs (No Team Allegiance Required)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>For when you want a guaranteed seat, a working screen and a beer — without committing to a specific country&apos;s supporter crowd. See also our full <Link href="/milwaukee-sports-bars" style={{ color: c.green2, fontWeight: 700 }}>Milwaukee sports bars guide</Link>.</p>

            {sportsBars.map((s) => (
              <div key={s.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{s.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 6px" }}>📍 {s.address} — {s.neighborhood}</p>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{s.note}</p>
              </div>
            ))}
          </section>

          <section id="beer-gardens" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Beer Gardens &amp; Outdoor Viewing — Read This Carefully</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The honest truth: Milwaukee&apos;s traditional outdoor beer gardens generally do NOT have TVs. They are stunning summer drinking destinations — but if you walk to Hubbard Park expecting to catch a USMNT match on a big screen, you will be disappointed. Here is the actual outdoor-viewing picture.</p>

            <div style={{ backgroundColor: c.green1, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "8px" }}>THE ONE REAL OUTDOOR WORLD CUP DESTINATION</p>
              <p style={{ color: c.cream, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                <strong>Nomad World Pub&apos;s &quot;Brady Beach&quot; patio</strong> is the only Milwaukee venue with a confirmed outdoor Jumbotron running for every 2026 World Cup match. That is the actual &quot;beer garden World Cup&quot; experience the city offers. Treat traditional beer gardens (below) as a pre- or post-match drink, not a viewing destination.
              </p>
            </div>

            {beerGardens.map((bg) => (
              <div key={bg.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{bg.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 6px" }}>📍 {bg.address}</p>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{bg.note}</p>
              </div>
            ))}
          </section>

          <section id="early" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Early-Morning Kickoffs — Where Opens Before Brunch</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The good news: because the 2026 tournament is in North American time zones, marquee matches mostly kick off in the late morning, afternoon and evening Central Time. There are fewer 5 a.m. wake-up calls than in past European or Asian World Cups. But here is the early-open picture for the matches that do require it.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px", marginBottom: "16px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>NOMAD WORLD PUB — 6:30 A.M.</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>Saturday and Sunday 6:30 a.m. opens are standard year-round. For weekday early-morning World Cup matches, confirm with the pub — they have committed to &quot;every match.&quot;</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>THE HIGHBURY — 6:30 A.M.</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>20+ years of opening at 6:30 a.m. for big early-morning matches. Owner Joe Katz has spiked coffee ready. Confirm a specific match opening at (414) 539-4242.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>RED LION PUB — 6:45 A.M. SAT</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>Saturday-morning international matches: doors at 6:45 a.m. is the longstanding policy. Full English breakfast available. Closed Mon–Tue.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>THREE LIONS — 9 A.M. SAT/SUN</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>Standard weekend opening is 9 a.m. — earlier openings for big match days are common but should be confirmed. Call (414) 763-6992.</p>
              </div>
            </div>

            <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              <strong>What kickoff times look like:</strong>
            </p>
            <ul style={{ color: "#444", fontSize: "13px", lineHeight: 1.7, marginTop: "8px" }}>
              {earlyMornings.map((m) => (
                <li key={m.match}><strong>{m.match}</strong> ({m.date}, {m.ct}) — {m.note}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-sports-bars" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Sports Bars</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Patios</Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Walker&apos;s Point Guide</Link>
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Tournament viewing tips, new openings, weekend picks and insider tips every Wednesday through the World Cup and beyond.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 8px" }}>© 2026 Discover Milwaukee. Your insider&apos;s guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75 }}>2026 FIFA World Cup viewing-venue facts verified against each venue&apos;s own website and Milwaukee press (OnMilwaukee, Milwaukee Record, Urban Milwaukee, Milwaukee Magazine) on June 10, 2026. Match dates and Central Time conversions sourced from FIFA, ESPN, FOX Sports and NBC Sports. Tournament hours, watch parties and special programming shift fast in-tournament — always confirm with the venue before going. Venues mentioned in older Milwaukee guides that have CLOSED and are intentionally excluded: Punch Bowl Social, MECCA Sports Bar, Good City Deer District, Nomad Nacional, Polonez.</p>
        </footer>
      </div>
    </>
  );
}
