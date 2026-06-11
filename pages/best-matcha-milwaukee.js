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

const specialists = [
  {
    name: "Jasher's Organic Tea House",
    neighborhood: "Bay View",
    address: "2680 S Kinnickinnic Ave, Suite 4, Milwaukee, WI 53207",
    phone: "Phone not publicly listed — DMs via @jashersorganicteahouse",
    hours: "Tue–Fri 4 p.m.–9 p.m. · Sat 9 a.m.–5 p.m. · Sun–Mon closed",
    opened: "November 2025 (official grand opening June 11–13, 2026)",
    owners: "Jack and Rumi DeDecker — named for their young son",
    matchaProgram: "Ceremonial-grade matcha, whisked to order, listed on the menu as \"shade-grown, stone-ground green tea powder\" at $5. Jasher's is the closest thing Milwaukee has to a true Japanese-style tea house: more than 20 organic teas, ceremonial matcha, yerba mate and pu'er tuo cha, alongside Rumi's house masala chai made with Assam black tea, fresh ginger, whole spices and jaggery.",
    whatToOrder: "The straight ceremonial matcha ($5) — order it traditional, no milk, no sweetener, and ask Jack or Rumi to walk you through the whisking. Then come back another visit for the masala chai, which has already become the early signature drink.",
    insiderTip: "Jasher's is intentionally an evening-and-weekend tea house, not a morning coffee shop — they're closed Sunday and Monday and don't open until 4 p.m. on weekdays. Plan around it. The space is set up as a living room with couches, board games and soft music; budget more than 20 minutes if you want the experience.",
    sourcing: "Sencha and ceremonial matcha listed as Japanese-sourced (Shizuoka noted on the sencha); most other premium teas come from Yunnan, China, with some from South Africa and Thailand.",
    url: "jashersorganic.com",
  },
  {
    name: "Rodeo Matcha (pop-up)",
    neighborhood: "Pop-up — rotating Milwaukee locations + farmers markets",
    address: "No permanent storefront — follow @rodeomatcha on Instagram for that week's pop-up calendar",
    phone: "DMs via Instagram @rodeomatcha",
    hours: "Pop-up only — varies week to week; summer 2026 includes the Shorewood Farmers Market and Deer District Farmers Market",
    opened: "First pop-up October 2025; founder Abel De Leon spent nearly two years researching matcha before launching",
    owners: "Abel De Leon — family-run, with his wife, daughter, niece, mom, mother-in-law, cousins, brothers and sisters all working pop-ups (per Milwaukee Uncut, May 2026)",
    matchaProgram: "The most matcha-obsessed operator in Milwaukee. Abel is on record (Milwaukee Uncut) saying \"ceremonial grade\" is largely American marketing — quality depends on leaf age, color and origin, with the highest-quality matcha being vibrant green from young leaves. The drinks lean creative: layered matcha lattes with house-made syrups and purees in flavors like mango sticky rice, lychee, strawberry, banana pudding and fruity pebbles cereal milk. The crème brûlée and toasted marshmallow matcha lattes have been the breakout pop-up hits.",
    whatToOrder: "Whatever the seasonal special is — Abel rotates flavors aggressively. If they're at the pop-up, the crème brûlée matcha latte is the headliner. Iced strawberry matcha is the entry point.",
    insiderTip: "Rodeo Matcha is a pop-up — there is no storefront. Pinned post on @rodeomatcha lists the upcoming week's locations, including the Shorewood Farmers Market (summer Sundays) and Deer District Farmers Market. They also pop up at Lake Effect Coffee in West Allis. Don't drive to 6217 W Greenfield expecting a permanent shop; that's the host café address. Abel has hinted at expanding to a trailer or brick-and-mortar — watch the Instagram.",
    sourcing: "Sources are not publicly disclosed in detail; Abel emphasizes leaf color, age and vibrancy as the real quality markers, not the \"ceremonial\" label.",
    url: "rodeomatcha.com",
  },
  {
    name: "Blue Hour Coffee",
    neighborhood: "East Side / Shorewood border",
    address: "2410 N Murray Ave, Shorewood, WI 53211",
    phone: "info@bluehour.coffee — phone not publicly listed",
    hours: "Daily 7 a.m.–8 p.m.",
    opened: "Soft-opened May 16–17, 2026 (the matcha sold out opening weekend) by Milwaukee streetwear brand Unfinished Legacy",
    owners: "Unfinished Legacy — a Milwaukee-born streetwear label expanding into a café concept attached to its East Side studio",
    matchaProgram: "Matcha-forward by design. The owners have publicly stated matcha is one of the things they want Blue Hour to be known for. Drinks are built on ceremonial-grade matcha with house-made natural syrups; the standout has been the ube matcha (a violet-and-green layered drink that became the opening-weekend signature) and a black sesame matcha that's drawn praise from early regulars. Coffee comes from local roaster Sugar Leaf.",
    whatToOrder: "The ube matcha latte — it's the drink Blue Hour has become known for in its first month open. If ube isn't your thing, the straight matcha latte with house oat milk is the cleanest read on what the ceremonial powder actually tastes like here.",
    insiderTip: "Show up early. The matcha ran out on day one and has been one of the most-ordered drinks since. The address is technically in Shorewood by a block (just north of the Milwaukee city line on Murray) but locals universally describe it as East Side. There's limited street parking on Murray; check side streets.",
    sourcing: "Ceremonial-grade matcha confirmed on the menu; specific origin not publicly listed as of June 2026 — call to confirm.",
    url: "bluehourcoffee.com",
  },
];

const matchaLatteShops = [
  {
    name: "Love Cafe",
    address: "3801 N Oakland Ave, Shorewood, WI 53211",
    neighborhood: "Shorewood (with a summer 2026 pop-up at Nonfiction Natural Wines, 2563 S Kinnickinnic, Bay View)",
    phone: "Phone not publicly listed — see lovecafemke.com",
    matcha: "Ceremonial-grade matcha from Shizuoka, Japan — one of the very few Milwaukee cafés where the sourcing region is publicly stated. Drinks include a traditional matcha latte, an iced mango matcha and a strawberry-rose matcha.",
    order: "Iced mango matcha — Love's signature, blending the Shizuoka ceremonial with fruity mango nectar. Order the straight matcha latte if you want to taste the powder.",
    opened: "Valentine's Day 2024 (named for the day)",
    note: "Love Cafe doubles as a coffee shop and yoga studio, with a wellness lean. Summer 2026: a Bay View residency at Nonfiction Natural Wines (2563 S Kinnickinnic Ave) weekdays 8 a.m.–noon through the season.",
  },
  {
    name: "HoneyBee Sage Wellness & Apothecary Cafe",
    address: "1819 N Doctor M.L.K. Jr Dr, Milwaukee, WI 53212",
    neighborhood: "Bronzeville / Brewers Hill",
    phone: "Call to confirm — see honeybeesage.com",
    matcha: "Ceremonial-grade matcha, paired with house-made almond milk. HoneyBee Sage is built as an apothecary and herbal-tea café — Milwaukee's first alcohol-free craft cocktail lounge — and treats matcha as a wellness drink, not a syrup vehicle.",
    order: "Matcha with house-made almond milk, unsweetened. Stay for the herbal tea menu — this is the rare Milwaukee café where the staff can speak fluently about adaptogens and tea ceremony.",
    opened: "2018, founded by Angela Mallett",
    note: "Open since 2018, the cafe has become a Bronzeville cornerstone. Hours fluctuate seasonally; check honeybeesage.com or Instagram before going.",
  },
  {
    name: "Discourse Coffee — Downtown",
    address: "1016 N Broadway, Milwaukee, WI 53202",
    neighborhood: "Downtown (former German English Academy building)",
    phone: "(414) 273-2326 — call to confirm",
    matcha: "Discourse uses matcha from Rishi Tea — the Milwaukee-headquartered specialty tea importer (185 S 33rd Ct). Their downtown shop describes the matcha latte as \"soft, round, and gently sweet,\" with l-theanine credited for the calm-energy feel. They also build seasonal matcha drinks with house syrups and Harney & Sons fruit teas — blackberry-lime matcha being a recent example.",
    order: "Straight matcha latte to taste the Rishi powder, or whatever the seasonal art-menu matcha is — Discourse's art-drink program is one of the most ambitious in the city.",
    opened: "Downtown location is the current flagship — note that the older Farwell Avenue Discourse location closed (verified June 2026 on Yelp).",
    note: "Hours: Mon–Sun 7:30 a.m.–4:30 p.m. The downtown space is in a 19th-century landmark building — go for the room as much as the drink.",
  },
  {
    name: "Brew-Jas Coffee House",
    address: "3062 S 13th St, Milwaukee, WI 53215",
    neighborhood: "South Side / Crisol Corridor",
    phone: "(414) 635-0018",
    matcha: "Ceremonial-grade matcha, with serious latte-art preparation. Brew-Jas is Latino-owned, family-run, and one of the more design-conscious matcha programs on the South Side — the strawberry matcha is the breakout drink.",
    order: "Iced strawberry matcha, or the cinnamon roll-flavored seasonal latte if it's on.",
    opened: "October 2024",
    note: "Hours: Closed Mon · Tue–Fri 7:30 a.m.–3 p.m. · Sat 9 a.m.–5 p.m. · Sun 9 a.m.–3 p.m. (call to confirm extended weekday hours). Local artists hang work on the walls free of charge.",
  },
  {
    name: "Vendetta Coffee Bar",
    address: "524 S 2nd St (Walker's Point) · 7613 W State St (Wauwatosa) · 2268 S Kinnickinnic Ave (Bay View, opened summer 2025)",
    neighborhood: "Walker's Point · Wauwatosa · Bay View",
    phone: "Call individual location — see vendettacoffeebar.com",
    matcha: "Vendetta runs creative seasonal matcha drinks across all three locations — strawberry iced matcha, blackberry matcha latte, pistachio cappuccinos. The Walker's Point shop is the original and bakery-focused; the Bay View location (2268 S Kinnickinnic, opened June 2025) is the newest.",
    order: "Strawberry iced matcha at any location. The Bay View shop's pastry case pairs especially well with it.",
    opened: "Walker's Point original; Wauwatosa second; Bay View opened June 2025",
    note: "All three locations are on the Bay View, Walker's Point and Tosa stops of a Milwaukee café crawl. Hours vary by location.",
  },
  {
    name: "Stone Creek Coffee",
    address: "Factory Café: 422 N 5th St, Milwaukee, WI 53203 · plus locations citywide (see stonecreekcoffee.com/cafes)",
    neighborhood: "Downtown flagship + Walker's Point HQ + neighborhood cafés citywide",
    phone: "(414) 431-2157 (Factory Café)",
    matcha: "Stone Creek serves Rishi Matcha — Rishi being the Milwaukee-headquartered specialty tea company at 185 S 33rd Ct. Rishi's signature Super Green sachets blend organic sencha and stone-ground matcha grown in the volcanic soils of southern Japan's Kyushu region.",
    order: "Straight matcha latte to read the Rishi powder. The Factory Café room — restored 1888 Cream City brick, working fireplace — is the destination room.",
    opened: "Stone Creek has been operating in Milwaukee since 1993; Factory Café opened in this form in 2012.",
    note: "Locations include Factory Café (Downtown), Bay View, Mequon, Glendale, Wauwatosa and the Public Market — check stonecreekcoffee.com/cafes for current hours.",
  },
  {
    name: "Colectivo Coffee",
    address: "Many Milwaukee-area locations — flagship Lakefront café at 1701 N Lincoln Memorial Dr · Third Ward at 223 E Saint Paul Ave",
    neighborhood: "Citywide (Wisconsin's largest specialty roaster)",
    phone: "(414) 273-6753 (Lakefront)",
    matcha: "Colectivo's matcha program leans creative — the pistachio matcha latte (matcha + pistachio syrup + white chocolate + milk) and the peachy cream matcha latte (iced matcha topped with white peach cold foam) have been seasonal hits across all locations.",
    order: "Pistachio matcha latte iced. If you want the classic, ask for a straight matcha latte (sweetened on request).",
    opened: "Colectivo has roots back to 1993 as Alterra; rebranded Colectivo in 2013.",
    note: "Lakefront location is the 1888 Milwaukee River Flushing Station — a historic landmark on Lake Michigan — the room is its own attraction. Third Ward, Bay View, Riverwest, East Side, Downtown, Mequon and beyond.",
  },
  {
    name: "Anodyne Coffee Roasting Co.",
    address: "Walker's Point Roastery: 224 W Bruce St, Milwaukee, WI 53204 · Bay View Café: 2920 S Kinnickinnic Ave · plus Third Ward and Tosa locations",
    neighborhood: "Walker's Point · Bay View · Third Ward · Wauwatosa",
    phone: "(414) 763-1143 (Walker's Point)",
    matcha: "Matcha latte is on the menu at every Anodyne location. Anodyne's matcha is a serviceable specialty-coffee-shop matcha — not the spotlight, but consistent. The Walker's Point roastery is the destination room (live music, certified-organic roasting on premises).",
    order: "Matcha latte at the Walker's Point roastery — pair with whatever is coming off the espresso bar.",
    opened: "Anodyne has been roasting in Milwaukee since 1999.",
    note: "Walker's Point roastery hosts live music and weddings; the Bay View café is more neighborhood-everyday. Small Change (a Hide House complex salon and coffee bar in Bay View) also serves Anodyne coffee and matcha.",
  },
  {
    name: "The Daily Bird",
    address: "818 E Center St, Milwaukee, WI 53212",
    neighborhood: "Riverwest",
    phone: "Call to confirm — see thedailybirdmke.square.site",
    matcha: "The Daily Bird pours Anodyne coffee and Rishi tea — including matcha. It's the everyday Riverwest matcha latte: solid, unfussy, in a bright yellow room with affirming messages painted on the walls.",
    order: "Matcha latte or — if you want the local move — a matcha latte with an espresso shot (a \"dirty matcha\"). Pair with the cheese danish.",
    opened: "April 2021 as a pop-up at Cafe Centro; took permanent residence in the former Fuel space later that year.",
    note: "Owner Dan Zwart named the cafe for his daughters Dayle and Birdie. Vegan pastries on rotation.",
  },
  {
    name: "Pilcrow Coffee",
    address: "416 W Walnut St, Milwaukee, WI 53212",
    neighborhood: "Bronzeville",
    phone: "Call to confirm — see pilcrowcoffee.com",
    matcha: "Pilcrow roasts its own coffee in-house and serves an iced matcha latte alongside a rotating cold-brew flight program. Matcha is not the headline here — coffee is — but the matcha latte holds up.",
    order: "Iced matcha latte to balance whatever cold-brew flight you're already ordering.",
    opened: "Pilcrow has been in Bronzeville since 2018.",
    note: "The tasting room is the move — sit in for the rotating cold-brew specials.",
  },
  {
    name: "Likewise Coffee",
    address: "232 E Erie St, Milwaukee, WI 53202",
    neighborhood: "Historic Third Ward",
    phone: "(414) 914-9497",
    matcha: "Matcha latte on the menu daily. Likewise is the clean, light-filled Third Ward room — a tourist-friendly stop that doesn't compromise the drink.",
    order: "Matcha latte iced in summer, hot in winter.",
    opened: "Open daily 7 a.m.–6 p.m.",
    note: "Outdoor seating, dog-friendly, free Wi-Fi. Walkable to Public Market and Lakefront.",
  },
  {
    name: "Lake Effect Coffee Company",
    address: "6217 W Greenfield Ave, West Allis, WI 53214",
    neighborhood: "West Allis (Greenfield Avenue corridor)",
    phone: "Call to confirm — see lakeeffectcoffeeco.com",
    matcha: "Lake Effect uses Rishi Tea for matcha and also hosts Rodeo Matcha as a recurring pop-up — the only café on this list where you can routinely catch Milwaukee's most-talked-about pop-up matcha operation. Beans are roasted fresh weekly on site.",
    order: "Check @rodeomatcha to see if Abel is popping up this week; if not, the in-house Rishi matcha latte. Either is worth the West Allis drive.",
    opened: "Started in 2021 as a coffee bike; opened the brick-and-mortar in September 2024.",
    note: "Small, modern, neighborhood-friendly. Confirm Rodeo Matcha pop-up dates before driving out specifically for that.",
  },
  {
    name: "Miss Molly's Cafe & Pastry Shop",
    address: "9201 W Center St, Milwaukee, WI 53222",
    neighborhood: "Mount Mary / West Side",
    phone: "(414) 249-5665",
    matcha: "Miss Molly's pulls quality matcha lattes (call to confirm sourcing) with simple syrup and milk. The from-scratch pastry case is the reason to drive out here — matcha is a strong supporting role.",
    order: "Iced matcha latte with whatever pastry is fresh out of the oven.",
    opened: "Locally loved café, catering company and wholesale bakery.",
    note: "Far west side; budget the drive from downtown.",
  },
  {
    name: "Valentine Coffee Roasters",
    address: "Third Ward: 189 N Milwaukee St · Vliet Street cafe (Washington Heights/Tosa-adjacent) · Downer",
    neighborhood: "Third Ward · Vliet Street · Downer",
    phone: "Call to confirm — see valentinecoffeeco.com",
    matcha: "Valentine offers a matcha with house-made cream, plus a matcha-with-lavender option that's become an Instagram favorite. The Third Ward room is bright, plant-filled and works as a meeting spot.",
    order: "Matcha with lavender — distinct to Valentine, not on most Milwaukee menus.",
    opened: "Vliet Street original; Third Ward and Downer expansions followed.",
    note: "Third Ward and Downer: 6 a.m.–6 p.m. weekdays, 7 a.m.–6 p.m. weekends. Vliet: 6 a.m.–6 p.m. daily (confirm seasonally).",
  },
];

const bubbleTea = [
  {
    name: "Tsaocaa 朝茶 (East Side)",
    address: "2224 N Farwell Ave, Milwaukee, WI 53202",
    phone: "Call to confirm — see tsaocaamke.com",
    matcha: "Tsaocaa brews each loose-leaf tea fresh to order in an espresso-style machine — a setup their menu claims is unique among U.S. bubble tea shops. Matcha milk tea is the standard; the Hong Kong–style matcha waffle (HK Matcha Waffle) is the surprise — a real waffle with matcha worked into the batter, served warm.",
    order: "Matcha milk tea with tapioca, plus the HK Matcha Waffle to share.",
    note: "Easy walk from the Lower East Side bar district.",
  },
  {
    name: "Elite Boba MKE",
    address: "1956 N Farwell Ave, Milwaukee, WI 53202",
    phone: "Call to confirm — see elitebobamilwaukee.square.site",
    matcha: "Standard matcha milk tea with the full boba topping lineup — tapioca, popping boba, jellies, cheese foam. One of the most popular boba stops on the East Side.",
    order: "Matcha milk tea with tapioca pearls — order it slightly sweet (50%) to taste the matcha.",
    note: "Hours: Mon–Thu and Sat–Sun 11 a.m.–8 p.m. · Fri 11 a.m.–8:30 p.m.",
  },
  {
    name: "Taichi Bubble Tea",
    address: "2028 E North Ave, Milwaukee, WI 53202",
    phone: "Call to confirm",
    matcha: "Taichi is a regional bubble tea chain with a Milwaukee outpost. The matcha menu includes standard matcha milk tea plus matcha-strawberry and matcha-coconut blends.",
    order: "Matcha milk tea with tapioca, lower sweetness, less ice.",
    note: "Also serves ramen and poke — useful as a one-stop dinner-plus-boba.",
  },
  {
    name: "Other boba shops on the radar",
    address: "Multiple",
    phone: "—",
    matcha: "BAMBU, Mochi Ring, Uni Uni Tea, SereniTea, Craft Boba, Ultra Violet — all in active rotation on Milwaukee's 2026 best-boba lists. Most pour matcha milk tea, but matcha is rarely the headliner at boba shops; if pure matcha quality matters more to you than the drink format, start at the matcha specialists above.",
    order: "If you're already at a boba shop, order matcha at the lowest sweetness level the menu allows.",
    note: "Matcha at a boba shop will almost always be culinary-grade matcha blended into sweetened milk and ice — that's the boba format, not a flaw.",
  },
];

const pastries = [
  {
    name: "Miss Molly's Cafe & Pastry Shop",
    address: "9201 W Center St, Milwaukee, WI 53222",
    matcha: "From-scratch pastry case rotates seasonally; matcha is on the drink menu (Rishi). Ask about matcha-flavored pastries on the day — they're occasional, not permanent.",
    note: "The pastry case is the destination; matcha pastries appear seasonally.",
  },
  {
    name: "Honeypie Cafe",
    address: "2569 S Kinnickinnic Ave, Milwaukee, WI 53207 (Bay View)",
    matcha: "Honeypie is a from-scratch Bay View pie and brunch cafe. Matcha isn't a permanent menu item — but their seasonal pastry case has historically featured matcha pieces during seasonal rotations. Call (414) 489-7437 to confirm what's in the case today.",
    note: "The pie program is the reason to come; matcha desserts are an occasional bonus.",
  },
  {
    name: "Smallpie (Honeypie's sister cafe)",
    address: "2504 E Oklahoma Ave, Milwaukee, WI 53207 (Bay View)",
    matcha: "Smallpie's case includes cookies, mini sweet pies and tea breads with regular rotation. Matcha treats appear seasonally — confirm at the counter.",
    note: "Hand-pies are the signature; matcha cookies appear in seasonal batches.",
  },
  {
    name: "Tsaocaa (Hong Kong matcha waffle)",
    address: "2224 N Farwell Ave",
    matcha: "The HK Matcha Waffle is the most consistently available matcha-dessert item on this list — a real warm Hong Kong-style waffle with matcha worked into the batter.",
    note: "Order at the boba counter; eat in or take to-go.",
  },
];

const grocery = [
  {
    name: "Rishi Tea & Botanicals (Milwaukee HQ)",
    address: "185 S 33rd Ct, Milwaukee, WI 53208",
    note: "Milwaukee's homegrown specialty tea importer, founded 1997, and the source of the matcha used by Stone Creek, Discourse, The Daily Bird, Miss Molly's, Lake Effect and many other local cafes. Rishi's matcha line includes Ceremonial Matcha and Teahouse Ceremonial Matcha (their top tiers), Matcha Super Green sachets (sencha + stone-ground matcha from southern Japan's Kyushu region), and culinary-grade options. Buy at rishi-tea.com, at Outpost, and at most Milwaukee cafes that resell the line.",
  },
  {
    name: "Outpost Natural Foods (member-owned co-op)",
    address: "100 E Capitol Dr, Milwaukee · 7000 W State St, Wauwatosa · 7590 W Mequon Rd, Mequon · 2826 S Kinnickinnic Ave, Bay View",
    note: "All four Outpost locations carry Rishi Tea matcha tins (the Milwaukee local line) plus rotating Aiya and other organic matcha brands. The Bay View store is the most convenient grocery stop for matcha-curious shoppers who want to read labels and ask staff questions.",
  },
  {
    name: "Whole Foods Market",
    address: "5800 N Bayshore Dr, Glendale · 2305 N Prospect Ave, Milwaukee (East Side)",
    note: "Reliable for Aiya (the major Japanese matcha producer, sourced from Nishio), Jade Leaf, and 365 by Whole Foods matcha. Aiya is the highest-quality common grocery option; ceremonial Aiya tins are clearly labeled.",
  },
  {
    name: "Asian International Market",
    address: "3401 W National Ave, Milwaukee, WI 53215",
    note: "Family-owned Asian grocery with a Japanese tea aisle. Good for budget culinary-grade matcha and Japanese-import brands not always carried at Whole Foods. Selection rotates — call first if you're chasing a specific brand.",
  },
  {
    name: "Mei Hua Market",
    address: "11066 W National Ave, West Allis, WI 53227",
    note: "Larger West Allis Asian supermarket. Stocks matcha alongside the rest of the Japanese, Chinese and Korean grocery aisles. Worth combining with a visit to Rodeo Matcha pop-ups at Lake Effect, just up the road on Greenfield.",
  },
  {
    name: "Pacific Produce",
    address: "5455 S 27th St, Milwaukee, WI 53221",
    note: "Largest Asian supermarket in the Milwaukee area. Broad Japanese tea section — culinary matcha is reliably in stock; ceremonial tins appear seasonally.",
  },
  {
    name: "Direct from Japan (online)",
    address: "Online — Ippodo (ippodotea.com), Marukyu Koyamaen (marukyu-koyamaen.co.jp), Nakamura Tokichi (tokichi.jp), Matchaful (matchaful.com)",
    note: "If you've graduated past the grocery tier, this is where Milwaukee's serious home matcha drinkers buy. Ippodo (Kyoto, since 1717) and Marukyu Koyamaen (Uji, since 1704) are the two most-cited household names; both ship to the U.S.",
  },
];

const neighborhoodGuide = [
  { hood: "Bay View", pick: "Jasher's Organic Tea House (2680 S Kinnickinnic) for ceremonial matcha; Vendetta Bay View (2268 S Kinnickinnic) for creative matcha lattes; Honeypie + Smallpie nearby for pastries.", why: "Bay View is the densest matcha neighborhood in Milwaukee in 2026 — a true tea house, a coffee shop with a serious matcha latte program and two pastry destinations all walkable along KK." },
  { hood: "East Side / Lower East Side", pick: "Blue Hour Coffee (2410 N Murray) for ceremonial matcha and ube matcha; Tsaocaa (2224 N Farwell) for matcha boba + HK matcha waffle; Elite Boba MKE (1956 N Farwell) for matcha milk tea.", why: "East Side is the new center of gravity since Blue Hour opened in May 2026 — and Farwell Avenue has the densest run of matcha boba in the city." },
  { hood: "Shorewood / North Shore", pick: "Love Cafe (3801 N Oakland) for Shizuoka ceremonial matcha; Blue Hour Coffee one block south.", why: "Two of the city's most carefully-sourced matcha programs are 10 minutes apart on the same Oakland-Murray corridor." },
  { hood: "Walker's Point", pick: "Vendetta Coffee (524 S 2nd St) for creative matcha lattes; Anodyne Roastery (224 W Bruce) for the room.", why: "Walker's Point is the South Side's coffee-and-matcha core — start at Vendetta, walk to Anodyne's roastery." },
  { hood: "Third Ward", pick: "Likewise Coffee (232 E Erie) for a clean matcha latte; Valentine Third Ward (189 N Milwaukee St) for matcha with lavender; Colectivo Lakefront (1701 N Lincoln Memorial Dr) for matcha with a lake view.", why: "The Third Ward is the easiest neighborhood for visitors — three serious matcha lattes within a 10-minute walk of Public Market." },
  { hood: "Bronzeville / Brewers Hill", pick: "HoneyBee Sage (1819 N Dr MLK Jr Dr) for ceremonial matcha with house almond milk; Pilcrow Coffee (416 W Walnut) for an iced matcha alongside a cold-brew flight.", why: "Bronzeville's wellness lean shows up in HoneyBee Sage's tea-ceremony respect; Pilcrow's a 5-minute walk away." },
  { hood: "Riverwest", pick: "The Daily Bird (818 E Center) for the everyday matcha latte in the bright-yellow Riverwest room.", why: "Affordable, friendly, with vegan pastries — Riverwest matcha at neighborhood scale." },
  { hood: "Downtown / Kilbourn Town", pick: "Discourse Coffee Downtown (1016 N Broadway) for matcha-art drinks; Stone Creek Factory Café (422 N 5th St) for Rishi matcha in a Cream City brick room.", why: "Downtown's two most architecturally interesting cafes also pour two of the most serious matcha lattes in the city." },
  { hood: "West Allis / Wauwatosa", pick: "Lake Effect Coffee (6217 W Greenfield, West Allis) for in-house Rishi matcha and rotating Rodeo Matcha pop-ups; Vendetta Tosa (7613 W State); Valentine Vliet Street.", why: "West Allis hosts Milwaukee's most-talked-about pop-up matcha operation (Rodeo); Tosa has two solid latte programs." },
];

const tastingVocab = [
  { word: "Umami", meaning: "The savory, broth-like fifth taste. Good ceremonial matcha is heavy on umami — it's why straight unsweetened matcha tastes almost like seaweed broth at first, then resolves to sweetness." },
  { word: "Vegetal", meaning: "Green, leafy, grass-like. Most matcha drinkers learn to love this. If a matcha tastes like a wet lawn in a bad way, the powder is old, oxidized or low grade." },
  { word: "Oceanic / Marine", meaning: "A faint salt-and-seaweed quality, especially in high-end ceremonial matcha from Uji or Kyushu. This is praise — it means the shading process worked." },
  { word: "Astringent", meaning: "Dry, tannin-tight, mouth-puckering. Comes from water that was too hot (boiling = bad) or oversteeping. Real matcha is not bitter — if it is, blame the water, not the powder." },
  { word: "Creamy / Velvety", meaning: "A good whisked matcha — even unsweetened, even no milk — feels almost like a foam in the mouth. The fine particle size and the chasen technique do the work." },
  { word: "Gritty", meaning: "If the powder wasn't sifted before whisking, you'll feel grit at the bottom of the bowl. At the better Milwaukee specialists, this shouldn't happen." },
  { word: "Sweet finish", meaning: "Real ceremonial matcha has a natural sweetness on the finish — without sugar. That's the L-theanine and amino acids talking." },
  { word: "Koicha / Usucha", meaning: "Koicha = thick matcha (closer to a paste, 2x the powder, less water — used in formal tea ceremony). Usucha = thin matcha (the standard whisked cup). Most café matcha is usucha-style; Jasher's will do either on request." },
];

const faqs = [
  {
    question: "What is matcha, and how is it different from regular green tea?",
    answer: "Matcha is finely ground powder made from shade-grown green tea leaves (Camellia sinensis). The leaves — called tencha — are covered for about three weeks before harvest, which boosts chlorophyll and L-theanine and turns them deep green. After harvest the stems and veins are removed, the leaves are dried, and the dried leaves are stone-ground into a fine, talc-like powder. Where steeped green tea uses the leaves as a filter (you drink the infusion, not the leaf), matcha is whisked directly into hot water and you consume the whole leaf in suspension. That's why a single bowl of matcha contains substantially more L-theanine, chlorophyll and antioxidants than a cup of steeped sencha — and why the flavor is dramatically more concentrated."
  },
  {
    question: "Is matcha supposed to taste bitter?",
    answer: "No. Good matcha — ceremonial-grade, fresh, prepared correctly — tastes vegetal, umami-rich, faintly oceanic and finishes naturally sweet. Real bitterness usually means one of three things: (1) the water was too hot (boiling water scorches the powder; the right temperature is 160–175°F), (2) the matcha is old or culinary-grade rather than ceremonial, or (3) the ratio is off. If you've only had matcha at chain coffee shops where it's blended into sweetened milk, you've probably never tasted matcha on its own. At Jasher's Organic Tea House in Bay View or HoneyBee Sage in Bronzeville, you can try a properly prepared ceremonial matcha in a bowl — that's the real flavor."
  },
  {
    question: "Why is matcha bright green?",
    answer: "The bright, almost neon green is the result of shading. For about three weeks before harvest, tea farmers cover the plants with reed mats or shade cloth, blocking up to 90% of sunlight. The leaves respond by producing more chlorophyll and more L-theanine (an amino acid that gives matcha its sweet, calm-energy character). After harvest, the de-stemmed leaves (tencha) are stone-ground into a powder that retains that intense green. If a matcha looks yellow-brown or olive instead of vibrant jade, the powder is either old, low-grade, or wasn't truly shade-grown. The color is the first quality signal — bright green is good."
  },
  {
    question: "What is the difference between ceremonial-grade and culinary-grade matcha?",
    answer: "Ceremonial-grade matcha is made from the youngest, top-tier shade-grown leaves, stone-ground into a fine particle, and intended to be whisked into hot water and consumed straight (usucha-style thin tea, or koicha-style thick tea). It's bright green, sweet, smooth and expensive — $25–$60+ for a 30g tin is normal. Culinary-grade matcha is made from older or lower-tier leaves, often with a coarser grind, and is intended for baking, smoothies, lattes with milk and sweetener, and ice cream. It's still real matcha — just optimized to hold its flavor when mixed with other ingredients. Cafe-grade or premium-grade sits in between: better than culinary but not ceremonial. A note Rodeo Matcha founder Abel De Leon has emphasized publicly: Japan doesn't have an official 'ceremonial grade' label — the term is largely an American marketing convention. What actually matters is the leaf age, the harvest, the shading, and the freshness of the grind."
  },
  {
    question: "How much caffeine is in matcha compared to coffee?",
    answer: "A standard 8-ounce cup of matcha (made with about 1–2g of powder) contains roughly 60–80mg of caffeine. An 8-ounce cup of drip coffee runs roughly 95–165mg. So matcha has materially less caffeine than coffee per cup — but the matcha experience is famously different because of L-theanine, the amino acid in shade-grown tea that promotes calm focus. L-theanine slows caffeine absorption and counteracts jitter, which is why many matcha drinkers describe the energy as 'alert without the spike.' If you're switching from coffee, expect a smoother on-ramp and less crash."
  },
  {
    question: "How do you make matcha properly at home?",
    answer: "The proper home setup: (1) Sift about 1–2 grams of ceremonial-grade matcha into a chawan (matcha bowl) — sifting prevents clumps. (2) Heat water to 160–175°F — never boiling. (3) Pour about 2 ounces of water into the bowl. (4) Whisk vigorously with a chasen (bamboo whisk) in a 'W' or 'M' motion for about 15–20 seconds, until the surface is bright green and frothy on top. (5) Drink within a minute or two — matcha sits in suspension and will separate. For a latte, whisk the matcha into a small amount of hot water first, then add steamed milk and sweetener if you want. For tools: a chasen ($20–$40), a chawan ($20–$80), a sifter ($5) and a 30g tin of ceremonial-grade matcha will get you started for around $100. Rishi Tea (185 S 33rd Ct, Milwaukee) sells everything you need, or stop into Jasher's or Love Cafe and ask which brands they recommend."
  },
  {
    question: "Is matcha actually good for you?",
    answer: "Matcha is high in catechins (especially EGCG, a polyphenol antioxidant), L-theanine (a calming amino acid), and chlorophyll. Because you consume the whole leaf in suspension rather than steeping and discarding it, you get a higher concentration of these compounds per cup than from regular green tea. Research has linked green tea catechin intake to cardiovascular and metabolic benefits, though as with any single food the claims often outrun the evidence — a cup of matcha is not a magic bullet. What's well established: matcha delivers a smoother caffeine experience (thanks to L-theanine) than coffee, and it's a low-calorie, low-sugar drink when consumed unsweetened or lightly sweetened. The sweetened blended matcha lattes that dominate chain menus are a different question — those can run 30g+ of added sugar."
  },
  {
    question: "Where is the best matcha latte in Milwaukee?",
    answer: "It depends on what you're optimizing for. For the best ceremonial-grade matcha experience — straight, no milk, traditionally whisked — go to Jasher's Organic Tea House (2680 S Kinnickinnic Ave, Bay View) or HoneyBee Sage (1819 N Dr MLK Jr Dr, Bronzeville). For the best ceremonial-grade matcha latte with milk and creative flavor work, Love Cafe (3801 N Oakland Ave, Shorewood — Shizuoka-sourced) and Blue Hour Coffee (2410 N Murray Ave, East Side — ceremonial-grade) are the top tier. For the most creative seasonal matcha lattes, follow Rodeo Matcha (@rodeomatcha) — the city's leading pop-up — wherever Abel De Leon is set up that week. For a great everyday matcha latte at a coffee shop you'll already be at, Discourse Coffee (downtown, uses Rishi), Vendetta Coffee Bar (three locations), Stone Creek Factory Café and the Daily Bird (Riverwest) all deliver. There is no single 'best' — there are tiers, and the right answer depends on which neighborhood you're in."
  },
  {
    question: "Where can I buy ceremonial-grade matcha in Milwaukee to take home?",
    answer: "Milwaukee has one of the best matcha-buying scenes in the Midwest because Rishi Tea & Botanicals is headquartered here (185 S 33rd Ct). Rishi sells ceremonial-grade matcha direct at rishi-tea.com and at all four Outpost Natural Foods co-op locations (East Side, Wauwatosa, Mequon, Bay View). Whole Foods Market (Bayshore + East Side) carries Aiya — a respected Nishio, Japan producer — in clearly labeled ceremonial tins. For deeper Japanese imports, try Asian International Market (3401 W National Ave) or Pacific Produce (5455 S 27th St). For the next level up, serious matcha drinkers in Milwaukee order direct from Ippodo (Kyoto, since 1717) or Marukyu Koyamaen (Uji, since 1704) — both ship to the U.S. Plan to spend $25–$60 for a 30g tin of genuine ceremonial-grade."
  },
  {
    question: "What's the deal with Rodeo Matcha — is it a real shop?",
    answer: "Rodeo Matcha is a pop-up, not a brick-and-mortar. Founder Abel De Leon launched his first pop-up in October 2025 after nearly two years of researching matcha; his family — wife, daughter, niece, mother, mother-in-law, cousins, brothers and sisters — work the pop-ups together. As of June 2026 he's still pop-up only, though he has publicly said he's considering a larger trailer or eventually a brick-and-mortar. To find him this week, follow @rodeomatcha on Instagram — the pinned post lists upcoming pop-up locations and dates. Recurring summer 2026 stops include the Shorewood Farmers Market, the Deer District Farmers Market and Lake Effect Coffee in West Allis (6217 W Greenfield Ave). The Yelp address you may see attached to Rodeo Matcha — 6217 W Greenfield Ave — is the West Allis café that hosts him, not a Rodeo Matcha storefront. Drinks to try when you find him: the crème brûlée matcha latte and the toasted marshmallow matcha latte are the breakout pop-up hits."
  },
];

const atAGlance = [
  { label: "Cafés in this guide", value: "20+ verified matcha venues across Milwaukee" },
  { label: "Dedicated matcha specialists", value: "Jasher's Organic Tea House, Rodeo Matcha (pop-up), Blue Hour Coffee" },
  { label: "Best for ceremonial-grade matcha", value: "Jasher's (Bay View), HoneyBee Sage (Bronzeville), Love Cafe (Shorewood)" },
  { label: "Best creative matcha lattes", value: "Rodeo Matcha (pop-up), Blue Hour Coffee, Vendetta Coffee Bar" },
  { label: "Best matcha boba", value: "Tsaocaa (East Side) + the HK Matcha Waffle" },
  { label: "Local matcha source", value: "Rishi Tea & Botanicals — Milwaukee HQ, 185 S 33rd Ct" },
  { label: "Verified date", value: "June 10, 2026 — every venue cross-checked against its own website + Milwaukee press" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "Best Matcha in Milwaukee 2026: Cafés, Lattes & Pastries",
    description: "The definitive 2026 guide to the best matcha in Milwaukee — ceremonial specialists Jasher's and Blue Hour, Love Cafe's Shizuoka sourcing, Rodeo Matcha pop-ups, plus the best matcha lattes, boba and pastries.",
    image: "https://www.discover-milwaukee.com/images/best-matcha-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-matcha-milwaukee",
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
      { "@type": "ListItem", position: 2, name: "Best Matcha", item: "https://www.discover-milwaukee.com/best-matcha-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Matcha in Milwaukee — Cafés, Lattes, Boba & Pastries",
    description: "Verified Milwaukee matcha venues — ceremonial-grade specialists, best matcha lattes, boba shops with matcha milk tea, and pastry destinations.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 20,
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Cafe", name: "Jasher's Organic Tea House", servesCuisine: "Tea, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2680 S Kinnickinnic Ave, Suite 4", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53207", addressCountry: "US" }, openingHours: "Tu-Fr 16:00-21:00, Sa 09:00-17:00", hasMap: "https://www.google.com/maps/search/?api=1&query=Jasher%27s+Organic+Tea+House+Milwaukee", url: "https://jashersorganic.com" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Cafe", name: "Rodeo Matcha (pop-up)", servesCuisine: "Matcha", priceRange: "$$", address: { "@type": "PostalAddress", addressLocality: "Milwaukee", addressRegion: "WI", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Rodeo+Matcha+Milwaukee", url: "https://www.rodeomatcha.com" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Cafe", name: "Blue Hour Coffee", servesCuisine: "Coffee, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2410 N Murray Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53211", addressCountry: "US" }, openingHours: "Mo-Su 07:00-20:00", hasMap: "https://www.google.com/maps/search/?api=1&query=Blue+Hour+Coffee+Milwaukee", url: "https://www.bluehourcoffee.com" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Cafe", name: "Love Cafe", servesCuisine: "Coffee, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "3801 N Oakland Ave", addressLocality: "Shorewood", addressRegion: "WI", postalCode: "53211", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Love+Cafe+Shorewood", url: "https://www.lovecafemke.com" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Cafe", name: "HoneyBee Sage Wellness & Apothecary Cafe", servesCuisine: "Tea, Matcha, Herbal", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1819 N Doctor M.L.K. Jr Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=HoneyBee+Sage+Milwaukee", url: "https://honeybeesage.com" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Cafe", name: "Discourse Coffee — Downtown", servesCuisine: "Coffee, Matcha", priceRange: "$$", telephone: "+1-414-273-2326", address: { "@type": "PostalAddress", streetAddress: "1016 N Broadway", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, openingHours: "Mo-Su 07:30-16:30", hasMap: "https://www.google.com/maps/search/?api=1&query=Discourse+Coffee+Downtown+Milwaukee", url: "https://www.discourse.coffee" } },
      { "@type": "ListItem", position: 7, item: { "@type": "Cafe", name: "Brew-Jas Coffee House", servesCuisine: "Coffee, Matcha", priceRange: "$$", telephone: "+1-414-635-0018", address: { "@type": "PostalAddress", streetAddress: "3062 S 13th St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53215", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Brew-Jas+Coffee+House+Milwaukee", url: "https://www.facebook.com/brewjascoffeemke/" } },
      { "@type": "ListItem", position: 8, item: { "@type": "Cafe", name: "Vendetta Coffee Bar — Walker's Point", servesCuisine: "Coffee, Matcha, Bakery", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "524 S 2nd St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53204", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Vendetta+Coffee+Walkers+Point+Milwaukee", url: "https://www.vendettacoffeebar.com" } },
      { "@type": "ListItem", position: 9, item: { "@type": "Cafe", name: "Vendetta Coffee Bar — Bay View", servesCuisine: "Coffee, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2268 S Kinnickinnic Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53207", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Vendetta+Coffee+Bay+View+Milwaukee", url: "https://www.vendettacoffeebar.com" } },
      { "@type": "ListItem", position: 10, item: { "@type": "Cafe", name: "Stone Creek Coffee — Factory Café", servesCuisine: "Coffee, Matcha", priceRange: "$$", telephone: "+1-414-270-1008", address: { "@type": "PostalAddress", streetAddress: "422 N 5th St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53203", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Stone+Creek+Coffee+Factory+Cafe+Milwaukee", url: "https://www.stonecreekcoffee.com" } },
      { "@type": "ListItem", position: 11, item: { "@type": "Cafe", name: "Colectivo Coffee — Lakefront", servesCuisine: "Coffee, Matcha", priceRange: "$$", telephone: "+1-414-273-6753", address: { "@type": "PostalAddress", streetAddress: "1701 N Lincoln Memorial Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Colectivo+Coffee+Lakefront+Milwaukee", url: "https://colectivo.com" } },
      { "@type": "ListItem", position: 12, item: { "@type": "Cafe", name: "Anodyne Coffee Roasting Co. — Walker's Point Roastery", servesCuisine: "Coffee, Matcha", priceRange: "$$", telephone: "+1-414-763-1143", address: { "@type": "PostalAddress", streetAddress: "224 W Bruce St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53204", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Anodyne+Coffee+Walkers+Point+Milwaukee", url: "https://anodynecoffee.com" } },
      { "@type": "ListItem", position: 13, item: { "@type": "Cafe", name: "The Daily Bird", servesCuisine: "Coffee, Matcha, Bakery", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "818 E Center St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=The+Daily+Bird+Riverwest+Milwaukee", url: "https://thedailybirdmke.square.site" } },
      { "@type": "ListItem", position: 14, item: { "@type": "Cafe", name: "Pilcrow Coffee", servesCuisine: "Coffee, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "416 W Walnut St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Pilcrow+Coffee+Bronzeville+Milwaukee", url: "https://www.pilcrowcoffee.com" } },
      { "@type": "ListItem", position: 15, item: { "@type": "Cafe", name: "Likewise Coffee", servesCuisine: "Coffee, Matcha", priceRange: "$$", telephone: "+1-414-914-9497", address: { "@type": "PostalAddress", streetAddress: "232 E Erie St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, openingHours: "Mo-Su 07:00-18:00", hasMap: "https://www.google.com/maps/search/?api=1&query=Likewise+Coffee+Milwaukee", url: "https://www.likewisemke.com" } },
      { "@type": "ListItem", position: 16, item: { "@type": "Cafe", name: "Lake Effect Coffee Company", servesCuisine: "Coffee, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "6217 W Greenfield Ave", addressLocality: "West Allis", addressRegion: "WI", postalCode: "53214", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Lake+Effect+Coffee+West+Allis", url: "https://lakeeffectcoffeeco.com" } },
      { "@type": "ListItem", position: 17, item: { "@type": "Cafe", name: "Miss Molly's Cafe & Pastry Shop", servesCuisine: "Bakery, Coffee, Matcha", priceRange: "$$", telephone: "+1-414-249-5665", address: { "@type": "PostalAddress", streetAddress: "9201 W Center St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53222", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Miss+Molly%27s+Cafe+Milwaukee", url: "https://www.missmollyscafe.com" } },
      { "@type": "ListItem", position: 18, item: { "@type": "Cafe", name: "Valentine Coffee Roasters — Third Ward", servesCuisine: "Coffee, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "189 N Milwaukee St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Valentine+Coffee+Third+Ward+Milwaukee", url: "https://www.valentinecoffeeco.com" } },
      { "@type": "ListItem", position: 19, item: { "@type": "Restaurant", name: "Tsaocaa 朝茶 — East Side", servesCuisine: "Bubble Tea, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2224 N Farwell Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Tsaocaa+East+Side+Milwaukee", url: "http://tsaocaamke.com" } },
      { "@type": "ListItem", position: 20, item: { "@type": "Restaurant", name: "Elite Boba MKE", servesCuisine: "Bubble Tea, Matcha", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1956 N Farwell Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, hasMap: "https://www.google.com/maps/search/?api=1&query=Elite+Boba+MKE+Milwaukee", url: "https://elitebobamilwaukee.square.site" } },
    ],
  },
};

const navLinks = [
  { href: "#key-facts", label: "Key Facts" },
  { href: "#good-matcha", label: "What Makes Good Matcha" },
  { href: "#specialists", label: "Matcha Specialists" },
  { href: "#lattes", label: "Best Matcha Lattes" },
  { href: "#boba", label: "Bubble Tea Matcha" },
  { href: "#pastries", label: "Matcha Pastries" },
  { href: "#buy", label: "Buy at Home" },
  { href: "#hoods", label: "By Neighborhood" },
  { href: "#vocab", label: "Tasting Vocabulary" },
  { href: "#faq", label: "FAQ" },
];

export default function BestMatchaMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Best Matcha in Milwaukee 2026: Cafés, Lattes & Pastries</title>
        <meta name="description" content="The definitive 2026 Milwaukee matcha guide — ceremonial-grade specialists Jasher's & Blue Hour, Love Cafe's Shizuoka sourcing, Rodeo Matcha pop-ups, best lattes & boba." />
        <meta name="keywords" content="best matcha milwaukee, matcha latte milwaukee, where to get matcha milwaukee, ceremonial matcha milwaukee, jasher's tea house, blue hour coffee, love cafe matcha, rodeo matcha, rishi tea milwaukee, milwaukee matcha cafe, milwaukee boba matcha, vendetta coffee matcha, discourse coffee matcha, honeybee sage matcha, milwaukee tea house bay view" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-matcha-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Best Matcha in Milwaukee 2026: Cafés, Lattes & Pastries" key="og:title" />
        <meta property="og:description" content="Definitive 2026 guide — Jasher's, Blue Hour, Love Cafe, Rodeo Matcha, HoneyBee Sage and 15+ verified Milwaukee matcha spots. Ceremonial, lattes, boba, pastries." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-matcha-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-matcha-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Best Matcha in Milwaukee 2026 — ceremonial-grade specialists, lattes, boba and pastries across the city." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-10T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-10T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Drink" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Matcha in Milwaukee 2026: Cafés, Lattes & Pastries" key="twitter:title" />
        <meta name="twitter:description" content="Ceremonial specialists Jasher's & Blue Hour, Love Cafe's Shizuoka matcha, Rodeo Matcha pop-ups + 15 more verified Milwaukee matcha spots." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-matcha-og.svg" key="twitter:image" />

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
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Best Matcha in Milwaukee — 2026 Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "720px", margin: "0 auto" }}>
              Milwaukee&apos;s matcha scene exploded in late 2025 and 2026. A dedicated tea house opened in Bay View. A streetwear brand launched a matcha-forward café on the East Side. A pop-up matcha specialist became one of the most-followed food accounts in the city. And Milwaukee is the headquarters of <strong>Rishi Tea</strong> — the company supplying matcha to half the cafes you&apos;ll visit. Here are the <strong>20+ spots</strong> that earn the list. Verified June 2026.
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
              <strong>Heads up:</strong> Milwaukee&apos;s matcha scene is young and moving fast — Jasher&apos;s opened November 2025, Blue Hour opened May 2026, Rodeo Matcha&apos;s pop-up calendar shifts week to week. Every venue below was cross-referenced against the venue&apos;s own website, OnMilwaukee, Urban Milwaukee, Milwaukee Magazine, BizTimes Milwaukee, Milwaukee Record and TMJ4 in June 2026. Hours and pop-up locations change — confirm before you drive.
            </p>
          </div>

          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best matcha in Milwaukee — cafés, lattes, boba and pastries</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Total venues featured</dt>
              <dd style={{ color: "#444", margin: 0 }}>20+ verified matcha spots across the city</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Dedicated matcha specialists</dt>
              <dd style={{ color: "#444", margin: 0 }}>Jasher&apos;s Organic Tea House (Bay View), Rodeo Matcha (pop-up), Blue Hour Coffee (East Side)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top ceremonial picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Jasher&apos;s, HoneyBee Sage, Love Cafe (Shizuoka-sourced)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>What to look for in quality matcha</dt>
              <dd style={{ color: "#444", margin: 0 }}>Bright jade-green color · Japanese origin (Uji, Nishio, Shizuoka, Kyushu) · sifted before whisking · whisked with a chasen, not a frother · water 160–175°F, never boiling · sweet vegetal finish, no real bitterness</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Price range</dt>
              <dd style={{ color: "#444", margin: 0 }}>Ceremonial matcha at a tea house: $5–$8 per bowl. Matcha latte at a coffee shop: $5.50–$7. Matcha boba: $6–$7.50. 30g ceremonial tin to take home: $25–$60+.</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Local source</dt>
              <dd style={{ color: "#444", margin: 0 }}>Rishi Tea &amp; Botanicals — Milwaukee-headquartered specialty tea importer at 185 S 33rd Ct, founded 1997. Supplies matcha to many of the cafés on this list.</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Verified date</dt>
              <dd style={{ color: "#444", margin: 0 }}><time dateTime="2026-06-10">June 10, 2026</time></dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified against each venue&apos;s own website + Milwaukee press (OnMilwaukee, Urban Milwaukee, Milwaukee Magazine, BizTimes, Milwaukee Record, TMJ4).
            </p>
          </section>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/matcha/matcha-latte.jpg" alt="A bright green matcha latte in a glass cup with steamed milk — the standard café-style matcha drink served across Milwaukee" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The matcha latte — the format you&apos;ll find at every café on this list.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/matcha/matcha-whisk-chasen.jpg" alt="Bright green matcha being whisked with a chasen bamboo whisk in a chawan tea bowl — the traditional Japanese preparation served at Jasher's Organic Tea House in Bay View" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Ceremonial matcha whisked with a chasen — the preparation at Jasher&apos;s, HoneyBee Sage and Love Cafe.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/matcha/matcha-powder.jpg" alt="Fine vibrant green matcha powder showing the bright jade color that signals shade-grown, fresh ceremonial-grade matcha" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Matcha powder — the bright jade color is the first signal of ceremonial-grade quality.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/matcha/matcha-pastry.jpg" alt="Matcha-flavored pastry showing the green color worked into a baked good — the format used at Tsaocaa, Honeypie and Smallpie" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Matcha pastry — culinary-grade matcha worked into baked goods.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#999", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. See accompanying yaml manifest for full attribution and license info.
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Matcha at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The fast facts before you drive across town for a bowl.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="good-matcha" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>What Makes Good Matcha — Read This First</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>If you&apos;ve only had blended matcha lattes at chain coffee shops, you don&apos;t actually know what matcha tastes like. This is the short version of what to look for.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "20px", marginBottom: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>What matcha actually is</p>
              <p style={{ color: "#333", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Matcha is finely stone-ground powder made from <strong>shade-grown</strong> green tea leaves (Camellia sinensis). The leaves are covered for about three weeks before harvest, which boosts chlorophyll and L-theanine and turns them deep jade green. After harvest, stems and veins are removed, leaves are dried into <em>tencha</em>, and tencha is ground on a stone mill into a fine, talc-textured powder. Because you whisk matcha into water rather than steeping and discarding the leaf, you consume the whole leaf in suspension — so matcha delivers far more L-theanine, chlorophyll and antioxidants per cup than steeped green tea.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "16px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>CEREMONIAL GRADE</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Youngest, top-tier shade-grown leaves; bright jade green; fine stone-ground particle. Meant to be whisked into water and consumed straight (usucha thin, koicha thick). Sweet, vegetal, umami, no real bitterness. $25–$60+ for a 30g tin.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>PREMIUM / CAFÉ GRADE</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Mid-tier. Optimized for high-end matcha lattes and blends. Less pricey than ceremonial, still good color and flavor. What most serious specialty coffee shops use for lattes.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>CULINARY GRADE</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Older / lower-tier leaves, coarser grind. For baking, smoothies, ice cream, mass-market lattes. Real matcha, just designed to hold flavor when mixed with sugar, milk and other ingredients.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>ORIGIN MATTERS</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>The signature Japanese matcha regions: <strong>Uji</strong> (Kyoto) — the historic heart, often considered the gold standard; <strong>Nishio</strong> (Aichi) — large volume, consistent quality; <strong>Shizuoka</strong> — Japan&apos;s largest tea region; <strong>Kyushu</strong> (Fukuoka, Yame, Kagoshima) — volcanic soil, vibrant green. Love Cafe&apos;s Shizuoka sourcing and Rishi&apos;s Kyushu sourcing are both noteworthy.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>BREWING TEMPERATURE</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>160–175°F. <strong>Never boiling.</strong> Water above ~185°F scorches the matcha and the result tastes bitter and astringent. If a café is pouring straight from a kettle without cooling, the matcha will suffer — politely ask them to use water that&apos;s been off the boil for a minute.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>THE WHISK (CHASEN)</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>A chasen is a Japanese whisk hand-carved from a single piece of bamboo into 80–120 tines, made in Takayama, Nara for 500+ years. The chasen creates the fine froth on top of properly prepared matcha. An electric frother is a workable substitute for a latte — but for straight matcha in a bowl, a chasen is the difference between &quot;tea drink&quot; and matcha.</p>
              </div>
            </div>

            <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              <strong>The shortcut:</strong> if the powder is bright jade-green, the water is below boiling, the powder is sifted before whisking, and the finish is sweet rather than bitter — it&apos;s good matcha. If the drink is olive-brown, gritty at the bottom, or sharply bitter — something went wrong.
            </p>
          </section>

          <section id="specialists" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Matcha Specialists</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The three operators in Milwaukee where matcha is the point, not a menu item. If you only have time for one matcha stop in the city, choose from this section.</p>

            {specialists.map((p) => (
              <div key={p.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <h3 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", margin: 0 }}>{p.name}</h3>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{p.neighborhood}</span>
                  </div>
                </div>

                <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{p.hours}</p>

                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>{p.opened}</p>
                <p style={{ color: "#444", fontSize: "13px", lineHeight: 1.7, marginBottom: "14px", fontStyle: "italic" }}>{p.owners}</p>

                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>The Matcha Program</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.matchaProgram}</p>
                </div>

                <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>What to Order</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.whatToOrder}</p>
                </div>

                <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Insider Tip</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.insiderTip}</p>
                </div>

                <div style={{ backgroundColor: "rgba(26,61,52,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green1, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Sourcing</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{p.sourcing}</p>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <p style={{ fontSize: "12px", color: "#555", margin: "0 0 4px" }}>📍 {p.address}</p>
                  <p style={{ fontSize: "12px", color: "#555", margin: "0 0 4px" }}>📞 {p.phone}</p>
                </div>

                <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>Web: <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" style={{ color: c.green2, fontWeight: "700" }}>{p.url}</a></p>
              </div>
            ))}
          </section>

          <section id="lattes" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Best Matcha Lattes at Coffee Shops</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Specialty coffee shops with serious matcha programs — venues where matcha isn&apos;t the headline but the drink is still worth ordering. Most use Rishi (the Milwaukee-based importer) or a comparable specialty-grade powder.</p>

            {matchaLatteShops.map((s) => (
              <div key={s.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "12px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 6px" }}>{s.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>{s.neighborhood}</p>
                <p style={{ color: "#444", fontSize: "13px", lineHeight: 1.6, margin: "0 0 8px" }}>📍 {s.address}</p>
                {s.phone && s.phone !== "—" && <p style={{ color: "#444", fontSize: "13px", lineHeight: 1.6, margin: "0 0 8px" }}>📞 {s.phone}</p>}
                <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px", marginBottom: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>The Matcha</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{s.matcha}</p>
                </div>
                <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "10px", borderRadius: "8px", marginBottom: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>What to Order</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{s.order}</p>
                </div>
                <p style={{ fontSize: "12px", color: "#777", margin: 0, fontStyle: "italic" }}>{s.note}</p>
              </div>
            ))}
          </section>

          <section id="boba" style={{ marginBottom: "56px", scrollMarginTop: "80px", backgroundColor: c.green1, padding: "32px", borderRadius: "16px" }}>
            <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px" }}>SUB-SECTION</p>
            <h2 style={{ color: c.cream, fontSize: "30px", fontWeight: "900", marginBottom: "16px" }}>Bubble Tea Matcha — The Boba Tier</h2>
            <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              Matcha milk tea is its own format — sweetened, blended with milk and ice, finished with tapioca, popping boba or cheese foam. The matcha at a boba shop will almost always be culinary-grade rather than ceremonial. That&apos;s not a flaw — it&apos;s the format. Here&apos;s where to go.
            </p>

            {bubbleTea.map((b) => (
              <div key={b.name} style={{ backgroundColor: "rgba(244,208,63,0.1)", border: `1px solid rgba(244,208,63,0.25)`, borderRadius: "12px", padding: "16px 18px", marginBottom: "12px" }}>
                <h3 style={{ color: c.yellow, fontSize: "18px", fontWeight: "800", margin: "0 0 6px" }}>{b.name}</h3>
                <p style={{ color: c.beige, fontSize: "13px", margin: "0 0 6px" }}>📍 {b.address}</p>
                <p style={{ color: c.cream, fontSize: "13px", lineHeight: 1.6, margin: "0 0 8px" }}>{b.matcha}</p>
                <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", margin: "0 0 4px" }}>Order: <span style={{ color: c.cream, fontWeight: 500 }}>{b.order}</span></p>
                <p style={{ fontSize: "11px", color: c.beige, margin: 0, fontStyle: "italic", opacity: 0.8 }}>{b.note}</p>
              </div>
            ))}
          </section>

          <section id="pastries" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Matcha Pastries &amp; Desserts</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Where to find matcha worked into baked goods and desserts in Milwaukee. Most matcha pastries here are seasonal — confirm at the counter or call ahead.</p>

            {pastries.map((p) => (
              <div key={p.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{p.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 6px" }}>📍 {p.address}</p>
                <p style={{ color: "#444", fontSize: "13px", lineHeight: 1.6, margin: "0 0 6px" }}>{p.matcha}</p>
                <p style={{ color: "#777", fontSize: "12px", margin: 0, fontStyle: "italic" }}>{p.note}</p>
              </div>
            ))}
          </section>

          <section id="buy" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Where to Buy Matcha to Make at Home</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>One of the underrated facts about Milwaukee: <strong>Rishi Tea &amp; Botanicals</strong> is headquartered here. That means Milwaukee has one of the best matcha-buying scenes in the Midwest — you can buy direct from the importer, plus the standard grocery options, plus a strong run of Asian markets.</p>

            {grocery.map((g) => (
              <div key={g.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{g.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 6px" }}>📍 {g.address}</p>
                <p style={{ color: "#444", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{g.note}</p>
              </div>
            ))}
          </section>

          <section id="hoods" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Matcha by Milwaukee Neighborhood</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>If you&apos;re already going to be in a neighborhood, here&apos;s the best matcha stop in each.</p>
            {neighborhoodGuide.map((n) => (
              <div key={n.hood} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{n.hood}</h3>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "700", margin: "0 0 6px" }}>{n.pick}</p>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{n.why}</p>
              </div>
            ))}
          </section>

          <section id="vocab" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>How to Order: A Matcha Tasting Vocabulary</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The words that help you describe — and ask for — what you actually want.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {tastingVocab.map((t) => (
                <div key={t.word} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{t.word}</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{t.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food &amp; Drink Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-coffee-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Coffee in MKE</Link>
              <Link href="/best-bakeries-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Bakeries</Link>
              <Link href="/best-doughnuts-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Doughnuts</Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Date Ideas</Link>
              <Link href="/best-frozen-custard-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Frozen Custard</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New café openings, matcha pop-up drops, weekend picks and insider food tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 8px" }}>© 2026 Discover Milwaukee. Your insider&apos;s guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75 }}>Matcha venue facts verified against each venue&apos;s own website and Milwaukee press (OnMilwaukee, Urban Milwaukee, Milwaukee Magazine, BizTimes Milwaukee, Milwaukee Record, TMJ4) in June 2026. Hours, pop-up dates and menu items shift — always confirm with the venue before going. Rodeo Matcha has no permanent storefront; follow @rodeomatcha for current pop-up locations.</p>
        </footer>
      </div>
    </>
  );
}
