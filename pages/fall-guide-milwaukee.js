import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedGuides from "../components/RelatedGuides";
import RegionMap from "../components/RegionMap";

import NewsletterCTA from "../components/NewsletterCTA";

const SITE = "https://www.discover-milwaukee.com";
const PATH = "/fall-guide-milwaukee";
const DISPLAY = "'Anton', system-ui, -apple-system, sans-serif";
const BODY = "'Jost', system-ui, -apple-system, sans-serif";
const UPDATED = "2026-08-17";
const UPDATED_LABEL = "Aug 17, 2026";

const c = {
  green1: "#2C5235",
  green2: "#547F4B",
  blue2: "#0B77BD",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  yellow: "#F0A623",
  orange: "#D06828",
  tan: "#9E7F4B",
  ink: "#20291F",
};

// ---------------------------------------------------------------------------
// DATA — verified Aug 2026. Exact dates are only stated where confirmed by an
// official source; otherwise timing is described as the typical annual window,
// with a note to confirm current-year dates. Fall dates, hours, and pricing
// shift year to year and with the weather — always check before you go.
// ---------------------------------------------------------------------------

const festivals = [
  {
    name: "Milwaukee Oktoberfest",
    where: "Downtown Lakefront",
    type: "Oktoberfest",
    badge: "Oct 2–4, 2026",
    description: "The city's marquee downtown Oktoberfest takes over the Summerfest grounds with German food and beer from Kegel's Inn, Leinenkugel's, and Hofbräu München. Beyond the biergarten there are gleefully oddball contests — stein hoisting, brat eating, a Miss Oktoberfest pageant, and a wiener dog beauty pageant.",
    bestFor: "Big-crowd German beer hall energy downtown",
    proTip: "Reserve a table in advance if you're coming with a group — table reservations sell out fast.",
    address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
  },
  {
    name: "Oktoberfest at the Bavarian Bierhaus",
    where: "Glendale",
    type: "Oktoberfest",
    description: "Milwaukee's longest-running, most authentic Oktoberfest unfolds in a genuine Bavarian beer garden with the Alte Kameraden band, chicken dances, and steins of Hofbräu. It's spread across several consecutive weekends from early September into early October, so you can pick your date.",
    bestFor: "Traditional gemütlichkeit, family-friendly",
    proTip: "Sundays are typically free admission and the most family-friendly — go then to skip the cover.",
    address: "Old Heidelberg Park, 700 W Lexington Blvd, Glendale, WI 53217",
  },
  {
    name: "Waukesha Oktoberfest",
    where: "Waukesha",
    type: "Oktoberfest",
    badge: "Sept 25–26, 2026",
    description: "A lively Waukesha celebration bringing Bavarian music, brats, spanferkel, and wiener schnitzel to Frame Park. Compact and walkable, it's an easy county-seat alternative to the bigger Milwaukee fests.",
    bestFor: "A walkable, smaller-scale Oktoberfest",
    address: "Frame Park, 1150 Frame Park Dr, Waukesha, WI 53186",
  },
  {
    name: "Germantown Historical Society Oktoberfest",
    where: "Germantown",
    type: "Oktoberfest",
    badge: "Sept 26–27, 2026 · Free",
    description: "Set among restored 19th-century buildings at Dheinsville Historic Park, this 30-plus-year community Oktoberfest pairs German food and beer with genuine historical charm. Admission and parking are free, making it one of the best-value fall outings in the region.",
    bestFor: "Free, low-key, history-flavored fall day",
    address: "Dheinsville Historic Park, Germantown, WI 53022",
  },
  {
    name: "Cedarburg Wine & Harvest Festival",
    where: "Cedarburg",
    type: "Harvest Festival",
    badge: "Sept 19–20, 2026",
    description: "One of southeastern Wisconsin's signature fall festivals fills Cedarburg's historic streets with regional wines, craft beer, live music, juried artists, food trucks, and grape stomps at Cedar Creek Winery. The small-town-square setting and pumpkin activities make it a beloved autumn tradition.",
    bestFor: "Wine, makers market, and postcard small-town charm",
    proTip: "Go early for the grape stomps; parking fills fast, so arrive early or use the shuttle.",
    address: "Historic Downtown Cedarburg, WI 53012",
  },
  {
    name: "Fall on the Farms — Old World Wisconsin",
    where: "Eagle",
    type: "Living History",
    description: "This open-air historic-farm museum turns the harvest into a hands-on immersion: apple picking, cider pressing, butter and cheese making, and old-world food preservation across five historic farmsteads. You can even clink steins of Oktoberfest ale at the 1930s-style Wittnebel's Tavern. 2026 marks Old World's 50th season.",
    bestFor: "Living-history harvest with kids",
    proTip: "Wear sturdy shoes — the site is large and spread across rolling grounds. Verify 2026 weekend dates on the official site.",
    address: "Old World Wisconsin, W372 S9727 Hwy 67, Eagle, WI 53119",
  },
  {
    name: "Elegant Farmer Autumn Harvest Fest",
    where: "Mukwonago",
    type: "Harvest Festival",
    badge: "Sept 12–Oct 25, 2026 (weekends)",
    description: "Home of the famous Apple Pie Baked in a Paper Bag, this farm runs weekend harvest fests with pick-your-own apples, an orchard-shaped corn maze, hayrides, pony rides, and East Troy Electric Railroad train rides. Parking and admission are free.",
    bestFor: "A full family harvest day and that famous pie",
    proTip: "The market and bakery are open daily even when the festival is weekend-only — go midweek for the pie without the crowds.",
    address: "1545 Main St, Mukwonago, WI 53149",
  },
  {
    name: "Boo at the Zoo",
    where: "Milwaukee County Zoo",
    type: "Halloween · Family",
    badge: "Oct 16–17 & 23–24, 2026",
    description: "A not-so-scary Halloween celebration with a trick-or-treat trail, dazzling light shows, pumpkin animal enrichment, live entertainment, and carving demos. Costumes are encouraged for all ages, and 2026 adds a new daytime Saturday experience.",
    bestFor: "Little kids in costume",
    proTip: "Buy tickets online in advance — evening time slots regularly sell out.",
    address: "Milwaukee County Zoo, 10001 W Bluemound Rd, Milwaukee, WI 53226",
  },
  {
    name: "China Lights: Legends Come Alive",
    where: "Hales Corners",
    type: "Lantern Festival",
    badge: "Sept 11–Nov 1, 2026",
    description: "More than 40 handcrafted illuminated lantern displays — dragons, glowing pagodas, enchanted oceans — line a winding path through Boerner Botanical Gardens after dark. Running nearly two months, it's one of the region's most spectacular fall-evening outings.",
    bestFor: "A glowing after-dark walk",
    proTip: "Dress warmly and buy timed tickets ahead; the path is outdoors and gets chilly as fall deepens.",
    address: "Boerner Botanical Gardens, 9400 Boerner Dr, Hales Corners, WI 53130",
  },
  {
    name: "Mitchell Park Domes Fall Flower Show",
    where: "Milwaukee",
    type: "Flower Show",
    description: "The Show Dome fills with thousands of chrysanthemums in dozens of varieties, arranged with themed sculptures and seasonal décor under the iconic glass domes. A warm, colorful indoor escape and a 120-plus-year Milwaukee tradition — perfect for a rainy fall afternoon.",
    bestFor: "A rainy-day indoor fall outing",
    proTip: "The fall show typically runs late September into mid-November; check the Domes site for 2026 dates and theme.",
    address: "The Domes, 524 S Layton Blvd, Milwaukee, WI 53215",
  },
  {
    name: "Día de los Muertos Festival & 5K",
    where: "Milwaukee",
    type: "Cultural",
    description: "A moving Day of the Dead celebration set within Milwaukee's historic garden cemetery, honoring loved ones with ofrendas, music, art, and a run/walk through the arboretum grounds. It blends solemn remembrance with vibrant Mexican-American cultural tradition.",
    bestFor: "Culture and remembrance in late October",
    proTip: "Typically held in late October — confirm the 2026 date on the cemetery's site before planning.",
    address: "Forest Home Cemetery & Arboretum, 2405 W Forest Home Ave, Milwaukee, WI 53215",
  },
  {
    name: "Elktoberfest",
    where: "Elkhart Lake",
    type: "Oktoberfest · Day Trip",
    description: "Wisconsin's most charming lake village puts its own spin on Oktoberfest with stein hoists, brats, pretzels, polka, and a morning run/walk, capped by live music at historic Siebkens. A scenic day trip that pairs with Kettle Moraine fall color to the south.",
    bestFor: "A scenic small-town Oktoberfest getaway",
    proTip: "Typically held in mid-to-late September — verify the 2026 date on the Elkhart Lake site.",
    address: "Downtown Elkhart Lake, WI 53020",
  },
];

const orchards = [
  {
    name: "Barthel Fruit Farm",
    where: "Mequon",
    type: "U-Pick Orchard",
    description: "Worked by the same family since the 1800s, Barthel spreads 20-plus apple varieties across gentle North Shore hills, with a pumpkin patch, corn maze, and a bakery turning out cider donuts. Weekends bring brats and a beer garden that make it a hangout, not just a picking farm.",
    bestFor: "An easy, close-in North Shore orchard day",
    proTip: "Varieties ripen in waves into November — call ahead to confirm which apples are ready.",
    address: "12246 N Farmdale Rd, Mequon, WI 53097",
  },
  {
    name: "Peck & Bushel Organic Fruit Company",
    where: "Colgate",
    type: "Certified-Organic Orchard",
    description: "Wisconsin's largest certified-organic apple orchard grows 35-plus varieties across 30,000-plus trees with no synthetic sprays, plus a genuine farm-to-glass hard cider program. The on-site café and bakery turn out warm cider donuts.",
    bestFor: "Organic apples, fresh cider, and hard cider",
    proTip: "U-pick often runs weekends only and the season ends earlier than most (mid-October) — don't wait until Halloween week.",
    address: "5454 County Rd Q, Colgate, WI 53017",
  },
  {
    name: "Appleland Farm Market",
    where: "Fredonia",
    type: "U-Pick Orchard",
    description: "A friendly Ozaukee County market where wagon rides ferry families out to the pumpkin patch and the fryer runs cider donuts daily. They grow around 15 apple varieties, including Honeycrisp, for both u-pick and pre-picked buyers.",
    bestFor: "Wagon rides and daily cider donuts",
    proTip: "Honeycrisp goes fast — come early in the day and early in the ripening window.",
    address: "4177 State Rd 57, Fredonia, WI 53021",
  },
  {
    name: "Honey Creek Orchard",
    where: "Cedarburg",
    type: "U-Pick Orchard",
    description: "With thousands of trees and a wide sweep of varieties, Honey Creek pairs serious apple picking with quirky family fun — think emus and tractor-basketball alongside the cider donuts and pumpkins. A well-loved stop for Cedarburg-area families.",
    bestFor: "Kids and a big variety selection",
    proTip: "U-pick may carry an added fee and hours shift weekly — confirm the current schedule first.",
    address: "8210 Pioneer Rd, Cedarburg, WI 53012",
  },
  {
    name: "Rim's Edge Orchard",
    where: "Germantown",
    type: "U-Pick Orchard",
    description: "A tidy Washington County orchard with about 20 varieties ripening in waves and resident bees producing honey sold in the shop. Caramel apples and frozen cider pops make it a sweet, kid-friendly stop.",
    bestFor: "Honey, caramel apples, and small-orchard calm",
    proTip: "U-pick is usually weekends only — plan for Saturday or Sunday.",
    address: "W220N10550 Amy Belle Rd, Germantown, WI 53022",
  },
  {
    name: "Apple Holler",
    where: "Sturtevant",
    type: "Orchard · Family Park",
    description: "The big, polished destination of the group shuttles guests to 40-plus apple varieties on a tractor-drawn train and surrounds the orchard with a restaurant, bakery, farm animals, hayrides, and a full family fun park. The most amenity-rich (and busiest) stop.",
    bestFor: "A one-stop orchard, restaurant, and play park",
    proTip: "It draws heavy crowds and Chicago-area day-trippers — go on a weekday and book online for fall weekends.",
    address: "5006 S Sylvania Ave, Sturtevant, WI 53177",
  },
  {
    name: "Jacobson Orchards",
    where: "Waterford",
    type: "U-Pick Orchard",
    description: "A Racine County favorite with more than 40 apple varieties and a bakery turning out cider donuts, pies, and turnovers. Weekends often add a corn maze and October pumpkin picking — confirm current-year offerings.",
    bestFor: "Serious variety plus a bakery",
    proTip: "U-pick runs weekends only — save picking for Saturday or Sunday and check what's ripe.",
    address: "25911 Malchine Rd, Waterford, WI 53185",
  },
  {
    name: "Awe's Apple Orchard",
    where: "Franklin",
    type: "U-Pick Orchard",
    description: "A close-in, family-run orchard first planted in 1948, Awe's keeps things classic with roughly two dozen varieties and a farm stand famous for homemade cider donuts. Being right in Franklin makes it one of the easiest picks for city-side Milwaukeeans.",
    bestFor: "The closest true u-pick to the city",
    proTip: "Ripening varieties and hours change weekly — check their Facebook before heading out. Closed Mondays.",
    address: "8081 S Lovers Lane Rd, Franklin, WI 53132",
  },
  {
    name: "Apple Barn Orchard & Winery",
    where: "Elkhorn",
    type: "Orchard · Winery",
    description: "A Walworth County classic that combines the orchard with a working winery, so you can pick apples in the morning and taste house-made fruit wines by afternoon. The country store's pies, cider donuts, and caramel apples round out a full harvest experience near Lake Geneva.",
    bestFor: "Pairing apple picking with a wine tasting",
    proTip: "The patch is weather-dependent — confirm it's open (not just the store) before driving out.",
    address: "W6384 Sugar Creek Rd, Elkhorn, WI 53121",
  },
  {
    name: "Weston's Antique Apples",
    where: "New Berlin",
    type: "Heirloom Orchard (buy, don't pick)",
    description: "A National Historic Register orchard growing more than 90 antique apple varieties — some tracing back centuries. You can't pick here, but you can taste apples you'll find almost nowhere else and walk the memorial trail. Apples are sold at the stand on weekend afternoons and at area farmers markets.",
    bestFor: "Rare heirloom varieties you can't get anywhere else",
    proTip: "The stand is only open weekend afternoons in fall — plan accordingly.",
    address: "19760 W National Ave, New Berlin, WI 53146",
  },
];

const pumpkins = [
  {
    name: "Swan's Pumpkin Farm",
    where: "Franksville",
    type: "Pumpkin Patch · Corn Maze",
    description: "A Franksville institution celebrating its 50th pumpkin season in 2026. The yard fills with pumpkins of every size, and an Adventure Wristband bundles a five-acre corn maze, hayride, and kid attractions — while after dark the farm turns to haunted-attraction territory.",
    bestFor: "A classic all-day pumpkin outing",
    proTip: "2026 is the 50th-anniversary season — watch their site and socials for reopening dates and special events.",
    address: "5930 County Rd H, Franksville, WI 53126",
  },
  {
    name: "Basse's Taste of Country",
    where: "Colgate",
    type: "Pumpkin Fest · 65+ Activities",
    description: "A high-energy agritourism destination with more than 65 attractions on one farm: an eight-acre corn maze (one of Wisconsin's first), a sunflower maze, giant slides, a ropes course, mirror maze, animal barns, pig races, and a huge pumpkin patch. This is the bells-and-whistles pick.",
    bestFor: "Maximum activities in one place",
    proTip: "It's a full-day, ticketed festival — buy tickets ahead and go early on a weekend, or come on a discounted weekday.",
    address: "3190 County Rd Q, Colgate, WI 53017",
  },
  {
    name: "Schuett Farms",
    where: "Mukwonago",
    type: "Corn Maze · Hayrides",
    description: "A Mukwonago favorite whose 12-acre, four-mile corn maze is one of the biggest around and best explored in daylight. Hayrides carry visitors out to pick pumpkins, and the farm stocks all the classic fall décor — cornstalks, straw bales, gourds, and squash.",
    bestFor: "A genuinely big corn maze",
    proTip: "Give yourself plenty of daylight and good walking shoes; hours vary through the season.",
    address: "W299 S6370 State Rd 83, Mukwonago, WI 53149",
  },
  {
    name: "Jerry Smith Produce & Pumpkin Farm",
    where: "Kenosha",
    type: "Pumpkin Patch · Family",
    description: "A Kenosha-area staple since 1975, famous for elaborate hand-painted pumpkin scenes that draw photo-seekers every fall. Kids get pony rides, a petting zoo, bounce pads, and pedal carts alongside the corn maze and hayrides, with apple cider donuts in the country store.",
    bestFor: "Photo-worthy painted pumpkins and little kids",
    proTip: "The painted-pumpkin displays change yearly and are the signature draw — come for those.",
    address: "7150 18th St, Kenosha, WI 53144",
  },
  {
    name: "Cozy Nook Farm",
    where: "Waukesha",
    type: "Working Dairy · Hayrides",
    description: "An authentic, low-key working dairy farm where weekend hayrides roll through the fields before you pick from more than 40 kinds of pumpkins, gourds, and squash. A more traditional, agricultural alternative to the big festival farms.",
    bestFor: "An unfussy, real-farm experience",
    proTip: "Hayrides run weekend afternoons only — time your visit for Saturday or Sunday.",
    address: "S11 W30780 Summit Ave, Waukesha, WI 53188",
  },
  {
    name: "Meadowbrook Pumpkin Farm",
    where: "West Bend",
    type: "Pumpkin Patch · Haunted Forest",
    description: "A West Bend farm that doubles as a daytime pumpkin market and, after dark, one of the area's better-known haunted forest and cornfield walks. Daytime hayrides let you pick any pumpkin from the field; the nighttime haunt is a separate, genuinely scary ticketed experience.",
    bestFor: "Pumpkins by day, scares by night",
    proTip: "The haunted forest opens only on select October nights and isn't for young children — check the site for haunt dates.",
    address: "2970 Mile View Rd, West Bend, WI 53095",
  },
  {
    name: "Thompson Farm",
    where: "Bristol",
    type: "Pumpkin Patch · Jungle Maze",
    description: "A family farm growing produce since 1890, offering roughly 15 acres of pick-your-own pumpkins. Its twist is the green, leafy “Jungle Maze” — an alternative to the standard dried corn maze — plus late-season sunflower fields and a kids' adventure area.",
    bestFor: "Sunflower photos and a different kind of maze",
    proTip: "Pair a pumpkin visit with the late-blooming sunflower fields (August–September) for photos.",
    address: "6521 156th Ave, Bristol, WI 53104",
  },
  {
    name: "Lindner's Pumpkin Farm",
    where: "New Berlin",
    type: "Pumpkin Patch · Family",
    description: "A close-to-Milwaukee New Berlin farm that leans hard into kid-friendly fun: a petting zoo with feeding trails, a 30-foot giant slide, barrel train, pedal-car raceway, merry-go-round, and pumpkin bowling. There's a small per-person admission (a bit more Fri–Sun), and parking is free.",
    bestFor: "Younger kids on a budget",
    proTip: "Admission runs a few dollars more Fri–Sun — a weekday visit saves money.",
    address: "19075 W Cleveland Ave, New Berlin, WI 53146",
  },
  {
    name: "Pearce's Farm Stand",
    where: "Walworth",
    type: "Pumpkin Patch · Hay-Bale Mazes",
    description: "A Walworth County farm stand with a big variety of pumpkins and gourds plus a corn maze and multiple hay-bale mazes for different ages. Weekend hayrides out to the field are free, and you simply pay for what you pick.",
    bestFor: "Free weekend hayrides near Lake Geneva",
    proTip: "Open daily in season — weekends are when the free field hayrides run.",
    address: "W5740 N Walworth Rd, Walworth, WI 53184",
  },
  {
    name: "Squire's Pumpkin Patch",
    where: "Burlington",
    type: "Pumpkin Patch · Free Corn Maze",
    description: "A smaller, low-key Racine County option with u-pick pumpkins sold by the pound, a free corn maze, and an on-site shop with caramel apples. Free entry makes it an easy, budget-friendly stop when the big farms feel like too much.",
    bestFor: "A relaxed, low-cost pumpkin run",
    proTip: "It's a seasonal small operation — call ahead to confirm it's open on the day you want to go.",
    address: "27225 Church Rd, Burlington, WI 53105",
  },
];

const haunted = [
  {
    name: "The Hill Has Eyes",
    where: "Franklin",
    type: "Extreme · Outdoor",
    description: "One of the largest and most intense haunts in the Midwest: four connected outdoor attractions across 45 wooded acres at Crystal Ridge, where you flee a clan of mutant cannibal hillbillies down dark trails. Bonfires and a beer tent help you recover afterward, and a daytime not-so-scary party is offered for families.",
    bestFor: "Serious thrill-seekers (teens and adults)",
    proTip: "Buy a VIP Speed Pass online to skip lines — box-office tickets also run a few dollars more than online.",
    address: "7900 W Crystal Ridge Dr, Franklin, WI 53132",
  },
  {
    name: "Buffalo Bill's Haunted Trail",
    where: "Franklin",
    type: "Scary · Outdoor Trail",
    description: "A heart-pounding walk through 65 acres of dark woods where scare actors ambush you from the shadows. It's a true outdoor experience, so dress for the weather; anyone under 16 must be accompanied by an adult.",
    bestFor: "An outdoor scare in the woods",
    proTip: "A VIP Fast Pass lets you bypass the regular line — worth it on busy October weekends.",
    address: "9612 W Oakwood Rd, Franklin, WI 53132",
  },
  {
    name: "Desolate Acres",
    where: "Waukesha",
    type: "Scary · Indoor (age 13+)",
    description: "The current haunt at the Waukesha County Expo Center — the venue that formerly hosted Wisconsin Fear Grounds (now closed). It follows two twisted twins and their outlaw crew through a cursed farmhouse, leaning on atmosphere, detailed sets, and live actors rather than animatronics.",
    bestFor: "An indoor haunt with heavy set design",
    proTip: "This is a different operator than the old Fear Grounds — confirm 2026 dates before you drive out.",
    address: "Waukesha County Expo Center, 1000 Northview Rd, Waukesha, WI 53188",
  },
  {
    name: "Soul Reapers / Terror at the Fair",
    where: "Wilmot",
    type: "Extreme · Multi-Attraction",
    description: "A highly detailed, in-your-face haunt at the Kenosha County Fairgrounds near the Illinois line, with multiple themed attractions for a full night of scares. A destination haunt for the Milwaukee–Chicago border region.",
    bestFor: "A destination-level scare on select nights",
    proTip: "It runs only select October dates about an hour southwest — check the site before committing to the drive.",
    address: "Kenosha County Fairgrounds, 30820 111th St, Wilmot, WI 53192",
  },
  {
    name: "Meadowbrook Haunted Forest & Cornfield",
    where: "West Bend",
    type: "Tiered (family to intense)",
    description: "A 35-to-40-minute journey through a haunted forest that opens into six-plus acres of dense, fog-filled cornfield trails packed with scare actors. Choose your night: daytime visits are genuinely family-friendly, while Friday and Saturday actor nights are the intense ones.",
    bestFor: "Matching the scare level to your group",
    proTip: "Go with-actors for scares or daytime/no-actor nights for younger kids.",
    address: "2970 Mile View Rd, West Bend, WI 53095",
  },
  {
    name: "Pabst Mansion: Illuminating the Dark",
    where: "Milwaukee",
    type: "Family · Historic Candlelight Tour",
    description: "A guided, candlelit evening walk through the 1892 beer baron's mansion, exploring darkness, loss, hidden compartments, and seldom-seen lower-level spaces. Atmospheric rather than a jump-scare haunt — great for those who like history with their Halloween.",
    bestFor: "A spooky-but-gentle historic experience",
    proTip: "These evening specialty tours sell out — book online in advance and confirm 2026 dates.",
    address: "Pabst Mansion, 2000 W Wisconsin Ave, Milwaukee, WI 53233",
  },
  {
    name: "Milwaukee Ghost Walks",
    where: "Third Ward & Downtown",
    type: "Family · Guided Walking Tour",
    description: "Ninety-minute guided walks through the “Bloody Third Ward” and downtown, covering old saloons, city scandals, and Milwaukee's most famous haunt — the Pfister Hotel, where staff and visiting ballplayers have reported the ghost of Charles Pfister for a century. Operated since 2008.",
    bestFor: "Milwaukee ghost lore for all ages",
    proTip: "October weekends sell out — book ahead, and dress for the weather since it's entirely outdoors.",
    address: "Historic Third Ward & Downtown Milwaukee",
  },
  {
    name: "Halloween Haunts at Wehr Nature Center",
    where: "Franklin",
    type: "Family-Friendly (ages ~4–10)",
    description: "Wehr's woodland becomes an Enchanted Forest with a cackling witch, a talking owl, and a path lit by 300-plus jack-o'-lanterns — “chuckles and smiles, not nightmares.” The walk ends at the Visitor Center with a snack, live animals, and the nature store.",
    bestFor: "Young kids' first Halloween walk",
    proTip: "Timed entries go fast for this beloved event — reserve early through Milwaukee County Parks.",
    address: "Wehr Nature Center, 9701 W College Ave, Franklin, WI 53132",
  },
  {
    name: "Dominion of Terror",
    where: "Sheboygan",
    type: "Scary · Indoor (day trip)",
    description: "Founded in 1974, this is the longest continuously operating haunted house in Wisconsin, with film-quality sets, animatronics, and precise scare actors. Run by the Sheboygan Jaycees, all profits go to local charities — so a visit doubles as a good deed.",
    bestFor: "A historic haunt worth a Sheboygan day trip",
    proTip: "It's about an hour north — best combined with a Sheboygan outing.",
    address: "2024 N 15th St, Sheboygan, WI 53081",
  },
];

const foliage = [
  {
    name: "Lake Park",
    where: "Milwaukee (East Side)",
    type: "City Park",
    description: "A 138-acre Frederick Law Olmsted bluff-top park stretching a mile above Lake Michigan, with wooded ravines and lake views for easy urban leaf-peeping. In October the ravine canopy lights up above the water — one of the closest quality color spots to downtown.",
    bestFor: "In-city color at golden hour",
    proTip: "Park near the lighthouse and walk the ravine bridges for the best light on the bluff and lake.",
    address: "2975 N Lake Park Rd, Milwaukee, WI 53211",
  },
  {
    name: "Seven Bridges Trail — Grant Park",
    where: "South Milwaukee",
    type: "Ravine Hike",
    description: "Roughly two miles of ravine trails, lannon-stone staircases, and rustic foot bridges under old-growth beech, sugar maple, and yellow birch — arguably the area's most atmospheric fall hike. You'll cross bridges over a rushing brook with Lake Michigan lapping below.",
    bestFor: "The most storybook fall hike in the county",
    proTip: "Enter through the wooden bridge inscribed “Enter this wild wood”; go on a weekday morning to avoid crowds.",
    address: "Grant Park, 100 Hawthorne Ave, South Milwaukee, WI 53172",
  },
  {
    name: "Schlitz Audubon Nature Center",
    where: "Bayside",
    type: "Nature Center · 60-ft Tower",
    description: "Six miles of trails wind through 185 acres of forest, ponds, prairie, and Lake Michigan shoreline, and a 60-foot observation tower rises above the canopy for a color view out to the lake. The on-site raptor program adds eagles, hawks, and owls to a fall visit.",
    bestFor: "Above-canopy color and live raptors",
    proTip: "Climb the tower for the best view; admission is charged, so check hours first.",
    address: "1111 E Brown Deer Rd, Bayside, WI 53217",
  },
  {
    name: "Havenwoods State Forest",
    where: "Milwaukee",
    type: "Urban State Forest · Free",
    description: "Wisconsin's only urban state forest — 237 acres of woods, grassland, and wetland with six-plus miles of trails inside the city, free to visit. The Purple and Blue trails (with a pond boardwalk) run through hardwood forest that turns color in fall.",
    bestFor: "A quiet, free, uncrowded in-city walk",
    proTip: "Open daily 6 a.m.–8 p.m.; pair the Blue Trail boardwalk with the nature center.",
    address: "6141 N Hopkins St, Milwaukee, WI 53209",
  },
  {
    name: "Boerner Botanical Gardens & Whitnall Park",
    where: "Hales Corners",
    type: "Botanical Garden · Arboretum",
    description: "Twelve formal gardens sit within an arboretum of maples, oaks, and ornamental trees that glow in autumn, all inside the 660-acre Whitnall Park. Fall is a prime, less-crowded window before the gardens close for the year at the end of October.",
    bestFor: "A curated, designed fall display",
    proTip: "The gardens close for the season at the end of October — go in October and extend into Whitnall Park's trails.",
    address: "9400 Boerner Dr, Hales Corners, WI 53130",
  },
  {
    name: "Lapham Peak Unit — Kettle Moraine",
    where: "Delafield",
    type: "State Forest · 45-ft Tower",
    description: "A 45-foot tower atop the highest point in Waukesha County looks out over a glaciated forest ablaze in reds and golds, with 20-plus miles of trails from paved paths to challenging grass loops. Climb the tower for the payoff view.",
    bestFor: "A tower panorama 25 minutes from the city",
    proTip: "Climb the tower at golden hour; a state park sticker is required and October weekends fill early.",
    address: "W329 N846 County Rd C, Delafield, WI 53018",
  },
  {
    name: "Holy Hill — Basilica & Scenic Tower",
    where: "Hubertus",
    type: "Scenic Tower · Landmark",
    description: "The 178-step scenic tower rises 192 feet for one of the most famous fall-color panoramas in Wisconsin — a 360-degree view of hardwood forest glowing across the Kettle Moraine. The wooded approach roads up to the twin-spired basilica are a dramatic fall drive on their own.",
    bestFor: "The iconic Wisconsin fall-color view",
    proTip: "The tower is open May 1–Oct 31 and weather-dependent — go early on an October weekday, as weekends are packed.",
    address: "1525 Carmel Rd, Hubertus, WI 53033",
  },
  {
    name: "Retzer Nature Center",
    where: "Waukesha",
    type: "Nature Center",
    description: "A 483-acre nature center with miles of boardwalk, paved, and dirt loops through restored prairie and remnant oak savanna that turns russet and gold. The longer Yellow Loop offers the fullest immersion, and prairie grasses add warm autumn tones.",
    bestFor: "Oak-savanna color and a rainy-day planetarium",
    proTip: "Walk the Yellow or Blue loops for the best color; the on-site planetarium is a good backup.",
    address: "S14 W28167 Madison St, Waukesha, WI 53188",
  },
  {
    name: "Parnell Tower — Kettle Moraine (Northern Unit)",
    where: "near Plymouth",
    type: "State Forest · 60-ft Tower",
    description: "Repeatedly rated one of the best fall-color overlooks in the state, this 60-foot tower on the forest's high ground caps a 3.5-mile loop with a commanding view over woods and farmland in fiery reds, golds, and amber. The Northern Unit also holds 31 miles of the Ice Age Trail.",
    bestFor: "A top-tier color overlook worth the drive",
    proTip: "Arrive early on weekends — the lot fills fast at peak. A state park sticker is required.",
    address: "Parnell Tower Trailhead, County Rd U, Kettle Moraine — Northern Unit",
  },
  {
    name: "Scuppernong Trails — Kettle Moraine (Southern Unit)",
    where: "near Eagle",
    type: "State Forest · Observation Tower",
    description: "Loop trails roll through hardwood-and-pine moraine terrain, and an observation tower gives an elevated view over Ottawa Lake framed by autumn foliage. The Southern Unit's quieter answer to Parnell Tower.",
    bestFor: "A calmer Kettle Moraine color hike",
    proTip: "Combine the Scuppernong loops with the Ottawa Lake overlook; state park sticker required.",
    address: "Scuppernong Trailhead, near Eagle, WI 53119",
  },
  {
    name: "Cedarburg Covered Bridge Park",
    where: "Cedarburg",
    type: "Scenic Photo Stop",
    description: "Home to Wisconsin's last original wooden covered bridge (built 1876), spanning Cedar Creek amid trees that turn brilliant in October, with the color mirrored in the water. A quintessential autumn photo stop just north of Milwaukee.",
    bestFor: "The classic fall photo",
    proTip: "Shoot the bridge and creek reflection in early-morning light, then explore historic downtown Cedarburg.",
    address: "Covered Bridge Rd, Cedarburg, WI 53012",
  },
  {
    name: "Cedarburg Bog State Natural Area",
    where: "Saukville",
    type: "Boardwalk · Wetland Hike",
    description: "The largest, most intact wetland in southern Wisconsin, with a boardwalk into the bog and quiet woodland trails for an offbeat fall walk. Tamaracks and surrounding hardwoods lend unusual color to a rare ecosystem.",
    bestFor: "A quiet, unusual fall ecosystem",
    proTip: "Parking is very limited — go early. The north lot is on WI-33 west of Saukville.",
    address: "WI-33 west of Saukville, WI 53080",
  },
  {
    name: "Devil's Lake State Park",
    where: "Baraboo (day trip)",
    type: "Bluff Hikes · Day Trip",
    description: "A glacier-formed lake ringed by 500-foot quartzite bluffs, widely rated among the best fall-color spots in Wisconsin. The East and West Bluff loops (each ~2.5 miles) climb to overlooks where golden and fiery hues spread across the bluffs and reflect in the lake.",
    bestFor: "The definitive fall bluff hike within day-trip range",
    proTip: "A vehicle sticker is required and October weekends are very busy — arrive early and hike the East Bluff first.",
    address: "S5975 Park Rd, Baraboo, WI 53913",
  },
  {
    name: "Peninsula State Park & Eagle Tower",
    where: "Door County (day trip)",
    type: "Scenic Byway · Day Trip",
    description: "The reconstructed 60-foot Eagle Tower — with an ADA-accessible canopy walkway — puts an observation deck 253 feet above Green Bay over a peaking hardwood forest. Scenic drives like Bayshore Drive string together classic Door County peninsula color.",
    bestFor: "Big-view Door County color (best as an overnight)",
    proTip: "Door County typically peaks the second-to-third week of October — Milwaukee's furthest listed color trip.",
    address: "9462 Shore Rd, Fish Creek, WI 54212",
  },
];

const foodDrink = [
  {
    name: "Lakefront Brewery — Oktoberfest",
    where: "Milwaukee (Brewers Hill)",
    type: "Brewery · Märzen",
    description: "Lakefront's copper-orange Oktoberfest is a Vienna- and Munich-malt Märzen with bread-crust and nutty notes, released each August and pouring through October. The riverside beer hall, pretzels, brats, and legendary Friday fish fry make it the most quintessentially Milwaukee autumn beer stop.",
    bestFor: "The full Milwaukee beer-hall fall experience",
    proTip: "Come for the Friday fish fry, but arrive early — it's beloved and crowded.",
    address: "1872 N Commerce St, Milwaukee, WI 53212",
  },
  {
    name: "Sprecher Brewing — Oktoberfest & Pumpkin Lager",
    where: "Glendale",
    type: "Brewery · Tour",
    description: "Milwaukee's original craft brewery fire-brews a traditional copper Oktoberfest plus a well-known Pumpkin Lager each fall. The family-friendly tour pours samples for adults and unlimited house-made soda for everyone — a rare stop where pumpkin fans and Märzen purists both leave happy.",
    bestFor: "A tour that works with kids in tow",
    proTip: "The tour includes unlimited root beer and orange dream soda — great for families.",
    address: "701 W Glendale Ave, Glendale, WI 53209",
  },
  {
    name: "Third Space Brewing — Oktoberfest",
    where: "Menomonee Valley",
    type: "Brewery · Märzen",
    description: "Third Space's dark-amber Oktoberfest is a toasty, clean Märzen consistently rated among the city's best fall lagers. The valley taproom runs Saturday tours in season, and the Menomonee Falls location throws a full Oktoberfest bash with yodeling and stein-holding.",
    bestFor: "One of the city's best-rated Oktoberfest lagers",
    address: "1505 W St Paul Ave, Milwaukee, WI 53233",
  },
  {
    name: "Milwaukee Brewing Company — Oktoberfest",
    where: "Bay View",
    type: "Brewery · Märzen",
    description: "MKE Brewing builds its Oktoberfest from pale, caramel, and toasted Munich malts for a sweet, earthy pour with a bright orange hue. The Bay View taproom on KK Avenue sits in a walkable neighborhood full of fall patios.",
    bestFor: "A no-fuss local Märzen in a walkable district",
    proTip: "Use the Bay View KK Avenue taproom — the former 9th Street brewery location is closed.",
    address: "2335 S Kinnickinnic Ave, Milwaukee, WI 53207",
  },
  {
    name: "New Glarus Staghorn Oktoberfest",
    where: "Wisconsin-only (regional)",
    type: "Seasonal Beer",
    description: "Widely called the best Wisconsin-brewed Oktoberfest, this 6.25% Märzen is released each fall and sold only within state lines — which makes it feel like a local trophy. Grab six-packs across the Milwaukee area or pair it with a New Glarus day trip.",
    bestFor: "The one Wisconsin Oktoberfest to seek out",
    proTip: "It's Wisconsin-only and disappears fast — stock up in fall.",
    address: "Available statewide at Milwaukee-area retailers",
  },
  {
    name: "Five O'Clock Steakhouse",
    where: "Milwaukee",
    type: "Supper Club · Comfort",
    description: "Since 1946, Five O'Clock has delivered dim lighting, wood paneling, and old-school supper-club warmth that hits perfectly on a cold fall night. The bone-in ribeye is the headliner and the brandy old-fashioned is practically mandatory.",
    bestFor: "A cozy, classic Wisconsin fall dinner",
    proTip: "Reservations strongly recommended; the brandy old-fashioned is the move.",
    address: "2416 W State St, Milwaukee, WI 53233",
  },
  {
    name: "Bryant's Cocktail Lounge",
    where: "Walker's Point",
    type: "Historic Cocktail Lounge",
    description: "Open since 1938, Milwaukee's oldest cocktail lounge has velvet walls, leather booths, and no printed menu — you tell the bartender a mood and they build from 400-plus recipes, ideal for a warm, spiced fall drink. The definition of a cozy autumn nightcap.",
    bestFor: "A warming, spiced cocktail on a cold night",
    proTip: "Open evenings, closed Monday — ask for something warming and spiced.",
    address: "1579 S 9th St, Milwaukee, WI 53204",
  },
  {
    name: "Anodyne Coffee",
    where: "Walker's Point",
    type: "Coffee Roaster · Café",
    description: "Anodyne's Walker's Point roastery, with Cream City brick and the smell of roasting beans, is a classic autumn refuge, with seasonal pours that lean into fall flavors and frequent live music. For hot cider, the lakefront Colectivo and Stone Creek's Whitefish Bay café are cozy alternatives.",
    bestFor: "A cozy coffee-and-a-book fall afternoon",
    address: "Walker's Point, Milwaukee, WI 53204",
  },
];

const dayTrips = [
  {
    name: "Cedarburg",
    where: "~30 min north",
    type: "Historic Town",
    description: "Historic downtown Cedarburg hosts its free Wine & Harvest Festival (Sept 19–20, 2026) with a makers market, grape stomps, and food trucks, while the nearby 1876 covered bridge is a postcard fall photo stop. The Shops of Cedar Creek Settlement anchor the weekend in a 19th-century woolen mill.",
    bestFor: "Wine, a covered bridge, and antique shops",
    proTip: "Combine the festival, the covered bridge, and a Cedarburg-area orchard for a full day.",
    address: "Cedarburg, WI 53012",
  },
  {
    name: "Door County",
    where: "~2.5 hrs northeast",
    type: "Peninsula Getaway",
    description: "Door County peaks with fall color around the third week of October, when the Coastal Byway blazes along the shoreline. Apple orchards and cideries hit their stride, and traditional Scandinavian fish boils run several evenings a week through October, capped with Door County cherry pie.",
    bestFor: "Wisconsin's signature fall drive (best overnight)",
    proTip: "A 2–3 day trip is ideal; check Travel Wisconsin's color report before going.",
    address: "Door County Peninsula, WI",
  },
  {
    name: "Lake Geneva",
    where: "~1 hr southwest",
    type: "Lake Resort Town",
    description: "The 21-mile Geneva Lake Shore Path winds past historic mansions and manicured grounds framed by fall color — a free, walkable way to leaf-peep right at the water's edge. Fall-color boat cruises, farm stands, corn mazes, and zip-lining round out the season.",
    bestFor: "Lakeside color and a walkable shore path",
    proTip: "Pair it with Apple Barn Orchard in nearby Elkhorn for a full harvest day.",
    address: "Lake Geneva, WI 53147",
  },
  {
    name: "Wisconsin Dells",
    where: "~2 hrs northwest",
    type: "River Town",
    description: "Beyond the waterparks, the Dells sits below the ancient Baraboo Bluffs, best seen on a fall-color boat cruise along the Wisconsin River. Halloween becomes a whole season here with after-dark Ghost Boat tours, haunted houses, and resort trick-or-treating.",
    bestFor: "River-gorge color plus a big Halloween scene",
    proTip: "Combine daytime river color with a Ghost Boat tour after dark.",
    address: "Wisconsin Dells, WI 53965",
  },
  {
    name: "New Glarus",
    where: "~2 hrs west",
    type: "Swiss-Heritage Village",
    description: "“America's Little Switzerland” charms with Swiss architecture, cheese shops, and its famous namesake brewery. Its Oktoberfest fills downtown each fall with craft beer, live music, wagon rides, and Swiss treats, while the Swiss Historical Village runs autumn cheesemaking demos.",
    bestFor: "Culture plus a New Glarus beer pilgrimage",
    proTip: "New Glarus beer is Wisconsin-only — the trip doubles as a beer run. Verify festival dates first.",
    address: "New Glarus, WI 53574",
  },
  {
    name: "Galena, Illinois",
    where: "~2.5 hrs southwest",
    type: "Historic Town (out of state)",
    description: "Galena's 19th-century brick Main Street — 125-plus boutiques, galleries, and eateries — sits in the wooded bluffs of the Mississippi River Valley, which reach peak color late September through mid-October. Grant Park offers a classic across-the-river skyline view.",
    bestFor: "The region's most charming out-of-state escape",
    proTip: "It's over the Illinois line — factor a slightly longer drive; October is prime for the maples and oaks.",
    address: "Galena, IL 61036",
  },
  {
    name: "Kettle Moraine Scenic Drive",
    where: "~40 min to 1.5 hrs",
    type: "Scenic Byway",
    description: "A 115-mile scenic drive threads oak-maple-aspen forest and glacial hills from Whitewater Lake up to Elkhart Lake, anchored by Holy Hill's basilica and scenic tower. It strings together the best of the region's foliage into one flexible autumn route.",
    bestFor: "A flexible half- or full-day color drive",
    proTip: "Late September to mid-October is prime; climb the Holy Hill tower for the iconic panorama.",
    address: "Kettle Moraine State Forest, SE Wisconsin",
  },
];

const SECTIONS = [
  { id: "festivals", kicker: "Prost & Harvest", title: "Fall Festivals & Oktoberfest", blurb: "Milwaukee's German roots come alive every autumn. From the marquee downtown Oktoberfest to harvest festivals, lantern walks, and living-history farms, here's where the season officially begins.", list: festivals, schemaType: "Event" },
  { id: "apple-orchards", kicker: "U-Pick", title: "Apple Orchards Near Milwaukee", blurb: "Warm cider donuts, wagon rides, and rows of ripe apples. These verified orchards within about an hour of the city cover everything from massive family destinations to quiet heirloom farms.", list: orchards, schemaType: "LocalBusiness" },
  { id: "pumpkin-patches", kicker: "The Patch", title: "Pumpkin Patches, Corn Mazes & Hayrides", blurb: "Pick-your-own pumpkins, sprawling corn mazes, and weekend hayrides. These are the farms that turn a single afternoon into the whole fall experience.", list: pumpkins, schemaType: "LocalBusiness" },
  { id: "haunted-houses", kicker: "After Dark", title: "Haunted Houses & Halloween", blurb: "From the most intense outdoor screamparks in the Midwest to gentle lantern-lit walks for little kids, Milwaukee's Halloween scene spans every fear level. Intensity is noted on each — choose accordingly.", list: haunted, schemaType: "TouristAttraction" },
  { id: "fall-color", kicker: "Leaf-Peeping", title: "Fall Foliage, Scenic Drives & Hikes", blurb: "Where to see autumn color — from bluff-top towers to in-city ravines. Southeastern Wisconsin typically peaks early-to-mid October, but it shifts every year, so check a live color report before you drive.", list: foliage, schemaType: "TouristAttraction" },
  { id: "food-drink", kicker: "Märzen Season", title: "Fall Food & Drink", blurb: "Oktoberfest lagers, pumpkin beers, cider, and cozy supper clubs. This is where Milwaukee's fall tastes best — from riverside beer halls to the city's oldest cocktail lounge.", list: foodDrink, schemaType: "LocalBusiness" },
  { id: "day-trips", kicker: "Road Trip", title: "Fall Day Trips from Milwaukee", blurb: "When you want to make a day of it. These destinations — from a covered-bridge town to the Door County peninsula — are at their absolute best in autumn.", list: dayTrips, schemaType: "TouristAttraction" },
];

const timeline = [
  { month: "September", color: c.green2, items: ["Oktoberfest season opens (Bavarian Bierhaus, Waukesha, Germantown)", "Cedarburg Wine & Harvest Festival", "Apple picking begins — early varieties ripen", "China Lights opens at Boerner Botanical Gardens", "Late-season sunflower fields still blooming"] },
  { month: "October", color: c.orange, items: ["Peak fall color — typically early-to-mid October (varies yearly)", "Milwaukee Oktoberfest downtown", "Pumpkin patches & corn mazes in full swing", "Haunted houses open Fri/Sat nights", "Boo at the Zoo and family Halloween events", "Honeycrisp and mid-season apples at their best"] },
  { month: "November", color: c.tan, items: ["China Lights runs through Nov 1", "Late apple varieties still available at some orchards", "Boerner formal gardens now closed for the season", "Cozy supper-club and fireplace-bar season sets in", "First quiet, crisp days before the holidays"] },
];

const faqs = [
  {
    question: "What are the best fall activities in and around Milwaukee?",
    answer: "The best fall activities in Milwaukee include Oktoberfest celebrations (Milwaukee Oktoberfest downtown, the Bavarian Bierhaus in Glendale), apple picking at orchards like Barthel Fruit Farm and Apple Holler, pumpkin patches and corn mazes such as Swan's and Basse's, haunted houses like The Hill Has Eyes, leaf-peeping at Lapham Peak and Holy Hill, and the China Lights lantern festival at Boerner Botanical Gardens. Family favorites include Boo at the Zoo and Halloween Haunts at Wehr Nature Center.",
  },
  {
    question: "Where can I go apple picking near Milwaukee?",
    answer: "Top u-pick apple orchards within about an hour of Milwaukee include Barthel Fruit Farm (Mequon), Peck & Bushel — Wisconsin's largest certified-organic orchard (Colgate), Apple Holler (Sturtevant), Awe's Apple Orchard (Franklin, the closest to the city), Jacobson Orchards (Waterford), Honey Creek Orchard (Cedarburg), and Apple Barn Orchard & Winery (Elkhorn). Apple season runs roughly late August through October, and which varieties are ripe changes weekly — call ahead or check the farm's crop line before you go.",
  },
  {
    question: "What are the best pumpkin patches and corn mazes near Milwaukee?",
    answer: "Standout pumpkin patches and corn mazes include Swan's Pumpkin Farm (Franksville, celebrating its 50th season in 2026), Basse's Taste of Country (Colgate, with 65-plus activities), Schuett Farms (Mukwonago, a 12-acre corn maze), Jerry Smith Farm (Kenosha, famous for painted pumpkins), Lindner's (New Berlin, free admission, great for young kids), and Cozy Nook Farm (Waukesha, a working dairy with weekend hayrides). Most run weekends from late September through October — verify current-year hours and pricing on each farm's site.",
  },
  {
    question: "When is peak fall color in the Milwaukee area?",
    answer: "In southeastern Wisconsin, fall color typically peaks early-to-mid October, though it varies year to year with temperature and rainfall — some years peak runs into late October. Milwaukee-area day trips like Door County and Baraboo often peak a touch earlier, around the second-to-third week of October. Because timing shifts annually, check the live Travel Wisconsin Fall Color Report or the Wisconsin DNR fall-color guidance before planning a leaf-peeping trip.",
  },
  {
    question: "What Oktoberfest celebrations happen in and around Milwaukee?",
    answer: "Milwaukee-area Oktoberfests include Milwaukee Oktoberfest on the downtown lakefront (Oct 2–4, 2026), the Bavarian Bierhaus in Glendale (Milwaukee's longest-running, spread across several weekends), Waukesha Oktoberfest (Sept 25–26, 2026), the free Germantown Historical Society Oktoberfest (Sept 26–27, 2026), plus Cedarburg and Elkhart Lake celebrations. Local breweries including Lakefront, Sprecher, and Third Space also release traditional Märzen Oktoberfest lagers each fall.",
  },
  {
    question: "What are the scariest haunted houses near Milwaukee?",
    answer: "The most intense haunts near Milwaukee are The Hill Has Eyes in Franklin (a huge outdoor screampark), Buffalo Bill's Haunted Trail (Franklin), Desolate Acres at the Waukesha County Expo Center, and Soul Reapers / Terror at the Fair in Wilmot. Note that Wisconsin Fear Grounds has permanently closed. Haunt season runs roughly late September through early November, mostly Friday and Saturday nights — buy timed tickets online, as popular nights sell out.",
  },
  {
    question: "What family-friendly fall activities are there in Milwaukee?",
    answer: "Family-friendly fall favorites include Boo at the Zoo at the Milwaukee County Zoo, Halloween Haunts at Wehr Nature Center (best for ages 4–10), the China Lights lantern festival at Boerner Botanical Gardens, Halloween Glen from Milwaukee Recreation, the Mitchell Park Domes fall flower show, and the candlelit Illuminating the Dark tour at the Pabst Mansion. Nearly every pumpkin farm — Lindner's, Jerry Smith, and Elegant Farmer especially — is built for kids with hayrides, petting zoos, and mazes.",
  },
  {
    question: "Where can I see fall colors in Milwaukee without leaving the city?",
    answer: "You don't have to leave the city for great color. Lake Park on the East Side, the Seven Bridges Trail in Grant Park (South Milwaukee), Schlitz Audubon Nature Center in Bayside (with a 60-foot tower), Havenwoods State Forest (Wisconsin's only urban state forest, and free), and Boerner Botanical Gardens in Whitnall Park all deliver vivid autumn foliage close to home. For an easy tower view, Lapham Peak in Delafield is only about 25 minutes west.",
  },
  {
    question: "What are the best fall day trips from Milwaukee?",
    answer: "The best autumn day trips from Milwaukee are Cedarburg (covered bridge and Wine & Harvest Festival, ~30 minutes), Lake Geneva (the 21-mile Shore Path, ~1 hour), the Kettle Moraine Scenic Drive anchored by Holy Hill, Devil's Lake State Park in Baraboo (bluff hikes, ~2 hours), Door County (fall color and fish boils, best as an overnight), Wisconsin Dells (river color plus Halloween), and New Glarus (Swiss village and Oktoberfest). Galena, Illinois, is a charming out-of-state option about 2.5 hours away.",
  },
  {
    question: "When does fall festival and harvest season start in Milwaukee?",
    answer: "Fall season in Milwaukee kicks off in September, when Oktoberfests open, apple picking begins, and the Cedarburg Wine & Harvest Festival draws crowds (Sept 19–20, 2026). October is the peak month for pumpkin patches, haunted houses, and fall color, while the season winds down in early November as gardens close and cozy supper-club weather sets in.",
  },
];

// Confirmed-date festivals as Event structured data (rich-result eligible).
const confirmedEvents = [
  { name: "Cedarburg Wine & Harvest Festival", start: "2026-09-19", end: "2026-09-20", venue: "Historic Downtown Cedarburg", street: "Historic Downtown", city: "Cedarburg", zip: "53012" },
  { name: "Waukesha Oktoberfest", start: "2026-09-25", end: "2026-09-26", venue: "Frame Park", street: "1150 Frame Park Dr", city: "Waukesha", zip: "53186" },
  { name: "Germantown Historical Society Oktoberfest", start: "2026-09-26", end: "2026-09-27", venue: "Dheinsville Historic Park", street: "Dheinsville Historic Park", city: "Germantown", zip: "53022" },
  { name: "Milwaukee Oktoberfest", start: "2026-10-02", end: "2026-10-04", venue: "Henry Maier Festival Park", street: "200 N Harbor Dr", city: "Milwaukee", zip: "53202" },
  { name: "Boo at the Zoo", start: "2026-10-16", end: "2026-10-24", venue: "Milwaukee County Zoo", street: "10001 W Bluemound Rd", city: "Milwaukee", zip: "53226" },
  { name: "Elegant Farmer Autumn Harvest Fest", start: "2026-09-12", end: "2026-10-25", venue: "The Elegant Farmer", street: "1545 Main St", city: "Mukwonago", zip: "53149" },
  { name: "China Lights: Legends Come Alive", start: "2026-09-11", end: "2026-11-01", venue: "Boerner Botanical Gardens", street: "9400 Boerner Dr", city: "Hales Corners", zip: "53130" },
];

const allItems = SECTIONS.flatMap((s) => s.list.map((item) => ({ ...item, schemaType: s.schemaType, anchor: s.id })));

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// [lng, lat] for longer-term venues plotted on the region map. Town/address-level,
// validated to fall in the correct county (point-in-polygon). Single-day festivals
// and the statewide-only New Glarus beer are intentionally not mapped.
const COORDS = {
  "Barthel Fruit Farm": [-87.978, 43.245],
  "Peck & Bushel Organic Fruit Company": [-88.232, 43.283],
  "Appleland Farm Market": [-87.952, 43.472],
  "Honey Creek Orchard": [-87.985, 43.312],
  "Rim's Edge Orchard": [-88.170, 43.280],
  "Apple Holler": [-87.912, 42.700],
  "Jacobson Orchards": [-88.246, 42.782],
  "Awe's Apple Orchard": [-88.043, 42.862],
  "Apple Barn Orchard & Winery": [-88.497, 42.680],
  "Weston's Antique Apples": [-88.132, 42.965],
  "Swan's Pumpkin Farm": [-87.938, 42.754],
  "Basse's Taste of Country": [-88.223, 43.248],
  "Schuett Farms": [-88.362, 42.900],
  "Jerry Smith Produce & Pumpkin Farm": [-87.903, 42.612],
  "Cozy Nook Farm": [-88.303, 43.005],
  "Meadowbrook Pumpkin Farm": [-88.198, 43.437],
  "Thompson Farm": [-88.048, 42.552],
  "Lindner's Pumpkin Farm": [-88.118, 42.972],
  "Pearce's Farm Stand": [-88.598, 42.535],
  "Squire's Pumpkin Patch": [-88.196, 42.664],
  "The Hill Has Eyes": [-88.016, 42.889],
  "Buffalo Bill's Haunted Trail": [-88.052, 42.862],
  "Desolate Acres": [-88.245, 43.017],
  "Soul Reapers / Terror at the Fair": [-88.190, 42.510],
  "Meadowbrook Haunted Forest & Cornfield": [-88.198, 43.437],
  "Pabst Mansion: Illuminating the Dark": [-87.935, 43.039],
  "Milwaukee Ghost Walks": [-87.906, 43.032],
  "Halloween Haunts at Wehr Nature Center": [-88.028, 42.900],
  "Dominion of Terror": [-87.724, 43.760],
  "Lake Park": [-87.885, 43.052],
  "Seven Bridges Trail — Grant Park": [-87.852, 42.900],
  "Schlitz Audubon Nature Center": [-87.892, 43.170],
  "Havenwoods State Forest": [-87.962, 43.120],
  "Boerner Botanical Gardens & Whitnall Park": [-88.017, 42.938],
  "Lapham Peak Unit — Kettle Moraine": [-88.398, 43.028],
  "Holy Hill — Basilica & Scenic Tower": [-88.305, 43.252],
  "Retzer Nature Center": [-88.283, 43.000],
  "Parnell Tower — Kettle Moraine (Northern Unit)": [-88.050, 43.720],
  "Scuppernong Trails — Kettle Moraine (Southern Unit)": [-88.487, 42.888],
  "Covered Bridge (Cedarburg)": [-87.982, 43.332],
  "Cedarburg Bog State Natural Area": [-88.030, 43.400],
  "Devil's Lake State Park": [-89.730, 43.428],
  "Peninsula State Park & Eagle Tower": [-87.233, 45.130],
  "Lakefront Brewery — Oktoberfest": [-87.905, 43.052],
  "Sprecher Brewing — Oktoberfest & Pumpkin Lager": [-87.922, 43.132],
  "Third Space Brewing — Oktoberfest": [-87.942, 43.030],
  "Milwaukee Brewing Company — Oktoberfest": [-87.902, 42.998],
  "Five O'Clock Steakhouse": [-87.943, 43.045],
  "Bryant's Cocktail Lounge": [-87.926, 43.012],
  "Anodyne Coffee": [-87.912, 43.018],
  "Cedarburg": [-87.988, 43.298],
  "Door County": [-87.380, 44.850],
  "Lake Geneva": [-88.433, 42.591],
  "Wisconsin Dells": [-89.771, 43.628],
  "New Glarus": [-89.630, 42.814],
  "Galena, Illinois": [-90.429, 42.417],
  "Kettle Moraine Scenic Drive": [-88.305, 43.252],
};

const firstSentence = (t) => { const m = t.match(/^.*?[.!?](?=\s|$)/); return m ? m[0] : t; };

const mapItems = allItems
  .filter((it) => it.anchor !== "festivals" && COORDS[it.name])
  .map((it) => ({
    name: it.name,
    slug: slug(it.name),
    category: it.anchor,
    where: it.where,
    blurb: it.bestFor || firstSentence(it.description),
    lng: COORDS[it.name][0],
    lat: COORDS[it.name][1],
  }));

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "Fall in Milwaukee 2026: The Ultimate Guide to Autumn Activities",
    "description": "The most comprehensive guide to fall in Milwaukee and surrounding areas: Oktoberfest, apple orchards, pumpkin patches, corn mazes, haunted houses, fall color, seasonal food and drink, and the best autumn day trips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-08-17",
    "dateModified": UPDATED,
    "mainEntityOfPage": `${SITE}${PATH}`,
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Fall in Milwaukee 2026: Complete Guide",
    "description": "Verified fall activities in and around Milwaukee — festivals, orchards, pumpkin patches, haunted houses, foliage spots, food and drink, and day trips.",
    "numberOfItems": allItems.length,
    "itemListElement": allItems.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": item.schemaType,
        "name": item.name,
        "description": item.description,
        "url": `${SITE}${PATH}#${item.anchor}`,
        ...(item.address ? { "address": { "@type": "PostalAddress", "streetAddress": item.address, "addressRegion": "WI", "addressCountry": "US" } } : {}),
      },
    })),
  },
  events: confirmedEvents.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": e.name,
    "startDate": e.start,
    "endDate": e.end,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": e.venue,
      "address": { "@type": "PostalAddress", "streetAddress": e.street, "addressLocality": e.city, "addressRegion": "WI", "postalCode": e.zip, "addressCountry": "US" },
    },
    "organizer": { "@type": "Organization", "name": e.venue },
    "description": `${e.name} — a fall 2026 event in the Milwaukee area. See Discover Milwaukee's complete fall guide for details.`,
    "url": `${SITE}${PATH}#festivals`,
  })),
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
      { "@type": "ListItem", "position": 2, "name": "Fall in Milwaukee", "item": `${SITE}${PATH}` },
    ],
  },
};

export default function FallGuideMilwaukee() {
  const Tag = ({ bg, color, children }) => (
    <span style={{ backgroundColor: bg, color, padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", fontFamily: BODY, letterSpacing: "0.3px" }}>{children}</span>
  );

  const ItemCard = ({ item }) => (
    <div id={slug(item.name)} style={{ backgroundColor: "#fff", borderRadius: "18px", padding: "26px", marginBottom: "20px", border: `1px solid ${c.beige}`, boxShadow: "0 1px 2px rgba(32,41,31,0.04)", scrollMarginTop: "80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
        <h3 style={{ color: c.green1, fontSize: "26px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px", margin: 0, lineHeight: 1.1 }}>{item.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {item.badge && <Tag bg={c.orange} color="#fff">{item.badge}</Tag>}
          <Tag bg={c.green2} color="#fff">{item.where}</Tag>
          {item.type && <Tag bg={c.yellow} color={c.ink}>{item.type}</Tag>}
        </div>
      </div>
      <p style={{ color: "#4a4a4a", fontSize: "15px", lineHeight: 1.75, marginBottom: "16px", fontFamily: BODY }}>{item.description}</p>
      {item.bestFor && (
        <div style={{ backgroundColor: c.cream, padding: "12px 14px", borderRadius: "10px", border: `1px solid ${c.beige}` }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", letterSpacing: "1px", fontFamily: BODY }}>BEST FOR</p>
          <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontFamily: BODY }}>{item.bestFor}</p>
        </div>
      )}
      {item.proTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px 14px", borderRadius: "10px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.ink, margin: 0, fontFamily: BODY }}><strong>Pro tip:</strong> {item.proTip}</p>
        </div>
      )}
      {item.address && <p style={{ fontSize: "13px", color: "#8a8a8a", marginTop: "12px", marginBottom: 0, fontFamily: BODY }}>{item.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Fall in Milwaukee 2026: The Ultimate Guide to Autumn Activities</title>
        <meta name="description" content="The most comprehensive fall guide for Milwaukee & surrounding areas. Oktoberfest, apple orchards, pumpkin patches, corn mazes, haunted houses, fall color, seasonal beer & the best autumn day trips — all verified with addresses and tips." />
        <meta name="keywords" content="fall in Milwaukee, Milwaukee fall activities, things to do in Milwaukee in fall, apple orchards near Milwaukee, pumpkin patches Milwaukee, corn mazes Milwaukee, Milwaukee Oktoberfest, haunted houses Milwaukee, fall color Wisconsin, Milwaukee Halloween, apple picking Milwaukee, fall day trips Milwaukee" />
        <link rel="canonical" href={`${SITE}${PATH}`} />

        <meta property="og:title" content="Fall in Milwaukee 2026: The Ultimate Autumn Guide" />
        <meta property="og:description" content="Oktoberfest, apple orchards, pumpkin patches, haunted houses, fall color & day trips — the most comprehensive fall guide for Milwaukee and beyond." />
        <meta property="og:url" content={`${SITE}${PATH}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${SITE}/images/fall-guide-milwaukee-og.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/images/fall-guide-milwaukee-og.svg`} />
        <meta property="article:published_time" content="2026-08-17T00:00:00-05:00" />
        <meta property="article:modified_time" content={`${UPDATED}T00:00:00-05:00`} />
        <meta property="article:section" content="Seasonal Guides" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        {structuredData.events.map((ev, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ev) }} />
        ))}
      </Head>

      <Nav />
      <Breadcrumbs />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh", fontFamily: BODY }}>
        <header style={{ background: `linear-gradient(135deg, ${c.orange} 0%, ${c.green1} 100%)`, padding: "72px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.yellow, fontSize: "13px", fontWeight: "700", letterSpacing: "4px", marginBottom: "16px", fontFamily: BODY, textTransform: "uppercase" }}>The Complete Fall 2026 Guide</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(40px, 7vw, 68px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "18px", lineHeight: 1.05, letterSpacing: "1px" }}>
              Fall in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "660px", margin: "0 auto", fontFamily: BODY }}>
              The most comprehensive guide to autumn in and around Milwaukee — {allItems.length} verified Oktoberfests, orchards, pumpkin patches, haunted houses, fall-color spots, cozy food &amp; drink, and day trips, all in one place.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "#fff", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "12px", letterSpacing: "1.5px", fontFamily: BODY }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 12px", alignItems: "center" }}>
              <a href="#map" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>Map</a>
              {SECTIONS.map((s) => (
                <React.Fragment key={s.id}>
                  <span style={{ color: c.beige }}>|</span>
                  <a href={`#${s.id}`} style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>{s.title.replace(" Near Milwaukee", "").replace(" from Milwaukee", "")}</a>
                </React.Fragment>
              ))}
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px", fontWeight: 600, fontFamily: BODY }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />

          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, padding: "24px 26px", borderRadius: "16px", marginBottom: "36px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px", fontFamily: BODY }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5, fontFamily: BODY }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Covers</dt>
              <dd style={{ color: "#444", margin: 0 }}>Fall 2026 in Milwaukee &amp; surrounding counties ({allItems.length} verified picks)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Categories</dt>
              <dd style={{ color: "#444", margin: 0 }}>Festivals &amp; Oktoberfest, apple orchards, pumpkin patches &amp; corn mazes, haunted houses, fall color, food &amp; drink, day trips</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Peak color</dt>
              <dd style={{ color: "#444", margin: 0 }}>Typically early-to-mid October in SE Wisconsin (varies yearly — check the live color report)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Season</dt>
              <dd style={{ color: "#444", margin: 0 }}>September through early November</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "16px 0 0", fontFamily: BODY }}>
              Details verified <time dateTime={UPDATED}>{UPDATED_LABEL}</time> against official sources. Confirmed 2026 dates are labeled; everything else lists typical annual timing. Fall dates, hours, and pricing change year to year and with the weather — always confirm before you go.
            </p>
          </section>

          <section aria-labelledby="peak-color-heading" style={{ background: `linear-gradient(135deg, ${c.beige} 0%, ${c.cream} 100%)`, border: `1px solid ${c.tan}`, padding: "24px 26px", borderRadius: "16px", marginBottom: "36px" }}>
            <h2 id="peak-color-heading" style={{ color: c.green1, fontSize: "22px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.5px" }}>When Fall Color Peaks</h2>
            <p style={{ color: "#4a4a4a", fontSize: "15px", lineHeight: 1.75, margin: 0, fontFamily: BODY }}>
              In southeastern Wisconsin, autumn color typically arrives <strong>early-to-mid October</strong> and varies year to year with the weather — some seasons peak stretches into late October. Milwaukee and its surrounding counties generally hit their best color in the first half to middle of the month, while more northern day trips like Door County and Baraboo often peak a bit earlier, around the second-to-third week. Because timing shifts every year, don&apos;t lock in an exact date — check the interactive <strong>Travel Wisconsin Fall Color Report</strong> or the <strong>Wisconsin DNR</strong> fall-color guidance the week you plan to go.
            </p>
          </section>

          <section aria-labelledby="map-heading" style={{ marginBottom: "44px", scrollMarginTop: "80px" }} id="map">
            <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px", fontFamily: BODY }}>Explore by Location</p>
            <h2 id="map-heading" style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.5px", lineHeight: 1.1 }}>Fall in Southeastern Wisconsin, Mapped</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px", fontFamily: BODY }}>Every longer-term fall spot in this guide — orchards, pumpkin patches, haunted houses, foliage hikes, breweries, and day trips — plotted across the seven counties of southeastern Wisconsin. Filter by category, then click any dot to jump to the full listing.</p>
            <RegionMap items={mapItems} />
          </section>

          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} style={{ marginBottom: "52px", scrollMarginTop: "80px" }}>
              <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px", fontFamily: BODY }}>{section.kicker}</p>
              <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.5px", lineHeight: 1.1 }}>{section.title}</h2>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "26px", fontFamily: BODY }}>{section.blurb}</p>
              {section.list.map((item, i) => <ItemCard key={i} item={item} />)}
            </section>
          ))}

          <section aria-labelledby="timeline-heading" style={{ marginBottom: "52px" }}>
            <h2 id="timeline-heading" style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "18px", letterSpacing: "0.5px" }}>Month-by-Month Fall Timeline</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              {timeline.map((t) => (
                <div key={t.month} style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderTop: `5px solid ${t.color}`, borderRadius: "14px", padding: "22px" }}>
                  <h3 style={{ color: t.color, fontSize: "24px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", margin: "0 0 14px", letterSpacing: "0.5px" }}>{t.month}</h3>
                  <ul style={{ margin: 0, paddingLeft: "18px", color: "#4a4a4a", fontSize: "14px", lineHeight: 1.7, fontFamily: BODY }}>
                    {t.items.map((it, i) => <li key={i} style={{ marginBottom: "6px" }}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "18px", letterSpacing: "0.5px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Milwaukee Festivals →
              </Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Milwaukee Breweries →
              </Link>
              <Link href="/day-trips-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "#fff", padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Day Trips →
              </Link>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.blue2, color: "#fff", padding: "18px", borderRadius: "12px", textDecoration: "none", fontWeight: "600", textAlign: "center", fontFamily: BODY }}>
                Things to Do with Kids →
              </Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "52px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "24px", letterSpacing: "0.5px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "16px", backgroundColor: "#fff", padding: "22px", borderRadius: "14px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px", fontFamily: BODY }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0, fontFamily: BODY }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "40px 32px", borderRadius: "18px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "clamp(24px, 3.5vw, 32px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.5px" }}>Get Fall Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "22px", fontFamily: BODY }}>Oktoberfests, pumpkin patches, haunted houses, and peak-color updates — straight to your inbox.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.ink, padding: "15px 36px", borderRadius: "999px", fontWeight: "700", textDecoration: "none", fontFamily: BODY, fontSize: "16px" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <RelatedGuides />
        <Footer />
      </div>
    </>
  );
}
