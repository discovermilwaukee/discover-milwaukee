import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

import NewsletterCTA from "../components/NewsletterCTA";
const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const guide = {
  remembrance: [
    {
      name: "Field of Flags at Veterans Park",
      neighborhood: "Lakefront",
      priceRange: "Free",
      when: "Fri May 23 – Mon May 25",
      details: "The lawn beside the War Memorial Center on Lincoln Memorial Drive is planted with roughly 27,316 American flags — one for every Wisconsinite killed in action from the Civil War to the present. A dedication ceremony is typically held Friday morning; the field stays up through the weekend.",
      whyGo: "The single most moving thing you can do in Milwaukee on Memorial Day weekend, and it costs nothing. Lake Michigan as the backdrop makes it unforgettable.",
      vibe: "Solemn, vast, free, family-appropriate",
      address: "Veterans Park & War Memorial Center, 750 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      insiderTip: "Go at first light or just before sunset for the best photos and the smallest crowds. Pair it with a walk over to the lakefront afterward.",
    },
    {
      name: "Wood National Cemetery Memorial Day Service",
      neighborhood: "West Side",
      priceRange: "Free",
      when: "Mon May 25 — morning (annual, ~9:25 a.m.)",
      details: "The annual Memorial Day program at Wood National Cemetery on the Milwaukee VA grounds traditionally includes a pre-ceremony concert, wreath-laying, rifle volley, taps and patriotic music. Times have historically run mid-morning — confirm the exact 2026 start.",
      whyGo: "Wisconsin's most significant Memorial Day observance, on the grounds of a national cemetery with thousands of veterans' graves.",
      vibe: "Formal military ceremony, deeply moving",
      address: "Wood National Cemetery, 5000 W National Ave, Milwaukee, WI 53295",
      insiderTip: "Parking and access fill early. Arrive at least 30 minutes ahead and dress for a quiet, respectful outdoor service.",
    },
    {
      name: "West Allis Memorial Day Parade & Observance",
      neighborhood: "West Allis",
      priceRange: "Free",
      when: "Mon May 25 — parade ~10 a.m., service ~11 a.m. (annual)",
      details: "West Allis runs one of the area's most established Memorial Day traditions: a parade that has historically stepped off on W. Greenfield Ave., followed by an observation ceremony at Veterans Memorial Park (S. 70th & W. National Ave.) with an honor guard, chamber choir, rifle salute and veterans tribute.",
      whyGo: "A classic small-city Memorial Day parade-and-ceremony combination right in Milwaukee's backyard.",
      vibe: "Hometown parade, community, patriotic",
      address: "Veterans Memorial Park, S 70th St & W National Ave, West Allis, WI 53214",
      insiderTip: "Stake a curb spot on Greenfield Ave. 20–30 minutes before step-off. Confirm the 2026 route and times with the City of West Allis before you go.",
    },
    {
      name: "Wauwatosa Memorial Day Observance",
      neighborhood: "Wauwatosa",
      priceRange: "Free",
      when: "Mon May 25 — morning (annual, ~9 a.m.)",
      details: "Wauwatosa's annual observance is traditionally held at Hart Park near the skate park, with a guest speaker, mayoral remarks, a moment of silence and a wreath presentation. It is short, dignified and very walkable from the Tosa Village.",
      whyGo: "A close-in, low-key ceremony you can pair with brunch in the Village afterward.",
      vibe: "Neighborhood observance, brief and respectful",
      address: "Hart Park, 7300 Chestnut St, Wauwatosa, WI 53213",
      insiderTip: "It runs early and ends quickly — get there for the start. Confirm the 2026 time with the City of Wauwatosa.",
    },
    {
      name: "Forest Home Cemetery Civil War Commemoration",
      neighborhood: "South Side",
      priceRange: "Free",
      when: "Mon May 25 — late morning (annual, ~11 a.m.)",
      details: "Historic Forest Home Cemetery hosts a Memorial Day program that has featured costumed reenactors, a wreath-laying and history tours of one of Milwaukee's oldest burial grounds. A guided walking tour with a local historian is sometimes offered in the afternoon.",
      whyGo: "Equal parts remembrance and Milwaukee history lesson, set among landmark monuments and mature trees.",
      vibe: "Historical, reflective, educational",
      address: "Forest Home Cemetery, 2405 W Forest Home Ave, Milwaukee, WI 53215",
      insiderTip: "Check Forest Home's site for the 2026 schedule — the afternoon historian-led walking tour is the sleeper pick for history fans.",
    },
    {
      name: "Mequon-Thiensville Memorial Day Parade",
      neighborhood: "North Suburbs",
      priceRange: "Free",
      when: "Mon May 25 — parade ~10 a.m. (annual)",
      details: "A traditional north-suburban parade that has historically stepped off from Grace Lutheran Church in Thiensville and proceeded along Main Street / Cedarburg Road into Mequon, with a ceremony at Mequon City Hall to follow.",
      whyGo: "A picturesque, family-packed suburban parade if you are coming from the north side or pairing it with a Cedarburg day trip.",
      vibe: "Big suburban parade, lots of families",
      address: "Grace Lutheran Church, 250 Green Bay Rd, Thiensville, WI 53092",
      insiderTip: "Combine it with Cedarburg's Maxwell Street Days the same weekend — they are minutes apart. Verify the 2026 route and step-off time first.",
    },
  ],
  lakefront: [
    {
      name: "Bradford Beach Season Kick-Off",
      neighborhood: "Lakefront / East Side",
      priceRange: "Free entry",
      when: "Memorial Day weekend (annual season opener)",
      details: "Milwaukee's marquee beach traditionally throws a season kick-off over Memorial Day weekend with a DJ in the afternoon, food and drink for sale, and beach-volleyball nets going up for the summer. The water is still cold in late May, but the scene is fully on.",
      whyGo: "The unofficial start of Milwaukee summer. Sand, Lake Michigan, the tiki bars and the city's best people-watching.",
      vibe: "Party beach, social, summer-kickoff energy",
      address: "Bradford Beach, 2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
      insiderTip: "The lake is frigid until July — come for the scene, not a swim. Bring layers; lakefront wind makes it cooler than inland.",
    },
    {
      name: "Family Kite Festival at Veterans Park",
      neighborhood: "Lakefront",
      priceRange: "Free",
      when: "Sat–Sun of MDW, 10 a.m.–6 p.m. (annual, ~31st year)",
      details: "A long-running, free two-day festival on the lakefront with giant show kites, professional kite-flying teams, a noon Grand Launch of 600+ kites, lessons and free kites for the first hundred kids in the Kids Mad Dash. Free parking.",
      whyGo: "One of the best free family events of the entire Milwaukee year, with Lake Michigan as the canvas.",
      vibe: "Free, family, colorful, photogenic",
      address: "Veterans Park, 1300 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      insiderTip: "Noon is the Grand Launch — be on the field by 11:45. Bring sunscreen and a blanket; there is little shade by the water.",
    },
    {
      name: "Oak Leaf Trail & Lakefront Loop",
      neighborhood: "Lakefront",
      priceRange: "Free",
      when: "All weekend, daylight hours",
      details: "The paved Oak Leaf Trail runs the length of the Milwaukee lakefront, linking Veterans Park, the Lakefront, Lake Park and beyond. It is ideal for a Memorial Day morning run, bike or stroller walk before the crowds and ceremonies.",
      whyGo: "Free, scenic and open year-round — the best way to see the lakefront under your own power.",
      vibe: "Active, scenic, do-it-yourself",
      address: "Oak Leaf Trail, lakefront segment near Veterans Park, Milwaukee, WI 53202",
      insiderTip: "Rent a Bublr bike at a lakefront station and ride north to Lake Park, then loop back past the Field of Flags.",
    },
    {
      name: "Lake Park & Lighthouse",
      neighborhood: "East Side",
      priceRange: "Free",
      when: "All weekend, daylight hours",
      details: "An Olmsted-designed bluff-top park with ravine footbridges, a historic lighthouse, the Lake Park Bistro and wide lawns above Lake Michigan. A relaxed counterpoint to the busier beach scene a mile south.",
      whyGo: "Classic Milwaukee parkland with big lake views and shade — great for a picnic or a quiet holiday afternoon.",
      vibe: "Leafy, historic, picnic-friendly",
      address: "Lake Park, 3233 E Kenwood Blvd, Milwaukee, WI 53211",
      insiderTip: "The lighthouse is occasionally open for tours in summer. Pack a picnic and claim a bluff-edge spot before noon on holiday Monday.",
    },
    {
      name: "South Shore Park & Beach",
      neighborhood: "Bay View",
      priceRange: "Free",
      when: "All weekend (Sunday farmers market in season)",
      details: "Bay View's lakefront park with a small beach, the Yacht Club, a boat launch and the South Shore Terrace beer garden. The Sunday South Shore Farmers Market typically runs in season — confirm whether the 2026 opener falls on MDW.",
      whyGo: "A mellower, more local lakefront experience than the East Side, with a great beer garden right on the water.",
      vibe: "Local, low-key, Bay View",
      address: "South Shore Park, 2900 S Shore Dr, Milwaukee, WI 53207",
      insiderTip: "Pair the park with the South Shore Terrace beer garden and a stroll up to Bay View's KK Avenue for dinner.",
    },
  ],
  festivals: [
    {
      name: "Milwaukee County Parks Summer Kickoff",
      neighborhood: "Countywide",
      priceRange: "Free entry",
      when: "Memorial Day weekend (seasonal openings)",
      details: "Memorial Day weekend is the official start of Milwaukee County Parks' summer season. Beer gardens (Juneau Park, Greenfield Park, Whitnall Park, South Shore Terrace) typically open with weekend hours, and the family aquatic centers begin their season.",
      whyGo: "A whole county's worth of free and cheap outdoor options switching on at once — the real start of MKE summer.",
      vibe: "Outdoorsy, social, citywide",
      address: "Milwaukee County Parks (multiple beer-garden and aquatic locations)",
      insiderTip: "Check the Milwaukee County Parks events calendar for the 2026 opening list and live-music nights at the beer gardens.",
    },
    {
      name: "Cool Waters & Schulz Aquatic Centers Open",
      neighborhood: "Greenfield / Lincoln Park",
      priceRange: "$",
      when: "Memorial Day weekend (season opener)",
      details: "The county's two big aquatic parks — Cool Waters in Greenfield Park and David F. Schulz in Lincoln Park — traditionally open for the season over Memorial Day weekend, with giant waterslides, zero-depth entry and splash features.",
      whyGo: "The first real splash-pad-and-slides day of the year for families with kids.",
      vibe: "Family, water, kid-energy",
      address: "Cool Waters, 2028 S 124th St, West Allis, WI 53227",
      insiderTip: "Late-May water is heated but the air can be cool — go midday and check 2026 opening hours before driving over.",
    },
    {
      name: "War Memorial / Lakefront Beer Garden Opening",
      neighborhood: "Lakefront",
      priceRange: "$$",
      when: "Around Memorial Day weekend (season opener)",
      details: "Several lakefront and county beer gardens traditionally open for the season around Memorial Day — expect unobstructed lake views, brats, pretzels, local beer and a dog-friendly, first-come-first-served setup.",
      whyGo: "Patio season officially begins. A lake-view beer garden is the most Milwaukee way to spend a holiday afternoon.",
      vibe: "Patio, casual, dog-friendly",
      address: "War Memorial / lakefront beer garden, 750 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      insiderTip: "Opening dates shift year to year — confirm the 2026 schedule. Bring cash and arrive early on holiday Monday for a table.",
    },
    {
      name: "Brewers vs. Cardinals — Memorial Day at American Family Field",
      neighborhood: "Menomonee Valley",
      priceRange: "$$",
      when: "Mon May 25 — 1:10 p.m. first pitch",
      details: "The Milwaukee Brewers host the St. Louis Cardinals on Memorial Day, May 25, 2026, with a 1:10 p.m. start at American Family Field. The series runs May 25–27; the holiday game has been promoted as a Dollar Dog Day.",
      whyGo: "An afternoon ballgame against a classic rival is a textbook Memorial Day plan. The retractable roof means no rain-outs.",
      vibe: "Ballpark, classic Americana, family",
      address: "American Family Field, 1 Brewers Way, Milwaukee, WI 53214",
      insiderTip: "Confirm the Dollar Dog promotion for 2026. Tailgating in the lots is part of the experience — get there well before first pitch.",
    },
    {
      name: "Milwaukee Milkmen Holiday Homestand",
      neighborhood: "Franklin",
      priceRange: "$",
      when: "Memorial Day weekend (typical homestand)",
      details: "The independent-league Milwaukee Milkmen frequently schedule a Memorial Day weekend homestand at Franklin Field, with cheap tickets, an intimate ballpark and family promotions — a budget alternative to the Brewers.",
      whyGo: "Affordable, family-friendly baseball with a small-park atmosphere and easy parking.",
      vibe: "Indie ball, family, low-cost",
      address: "Franklin Field, 7035 Ballpark Dr, Franklin, WI 53132",
      insiderTip: "Verify the 2026 Milkmen schedule before planning around it — opponents and dates change each season.",
    },
  ],
  food: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Brewers Hill",
      priceRange: "$$",
      when: "All weekend (riverside patio + tours)",
      details: "Milwaukee's beloved riverfront brewery with a big outdoor space, the famous beer hall tour and a Friday fish fry with a polka band. A reliable, very Milwaukee anchor for the long weekend.",
      whyGo: "Patio-season beer, a genuinely fun tour and a riverside seat — it is hard to do MDW more Milwaukee than this.",
      vibe: "Riverside, festive, classic MKE",
      address: "Lakefront Brewery, 1872 N Commerce St, Milwaukee, WI 53212",
      insiderTip: "The Friday fish fry with the polka band is a holiday-weekend institution — go early or expect a wait.",
    },
    {
      name: "Walker's Point Patios & Fire Pits",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      when: "All weekend",
      details: "Walker's Point packs the city's densest run of patios, fire pits and rooftop bars. Spots like Camino, Boone & Crockett and the Iron Horse rooftop make it the obvious base for a patio-season crawl.",
      whyGo: "If Memorial Day weekend is the kickoff to patio season, this is where the city goes to celebrate it.",
      vibe: "Patio crawl, lively, walkable",
      address: "Walker's Point, S 2nd St corridor, Milwaukee, WI 53204",
      insiderTip: "Start early afternoon and walk it — 2nd Street between Pittsburgh and National puts a dozen patios within a few blocks.",
    },
    {
      name: "South Shore Terrace Beer Garden",
      neighborhood: "Bay View",
      priceRange: "$$",
      when: "Memorial Day weekend (season opener)",
      details: "The county's most scenic beer garden, perched right on the lake in South Shore Park, traditionally opens for the season around Memorial Day with weekend hours, food and a Friday fish fry.",
      whyGo: "Lake views, local beer and a relaxed Bay View crowd — the season-opener atmosphere is the whole point.",
      vibe: "Lakeside beer garden, mellow, local",
      address: "South Shore Terrace, 2900 S Shore Dr, Milwaukee, WI 53207",
      insiderTip: "Confirm the 2026 opening day and hours. Sunset over the boats is the move — arrive a couple hours before.",
    },
    {
      name: "Milwaukee Public Market",
      neighborhood: "Third Ward",
      priceRange: "$$",
      when: "All weekend, daily",
      details: "An indoor market of local food vendors in the Historic Third Ward — oysters, tacos, cheese, sandwiches and a mezzanine to eat them on. A weatherproof plan B if lake wind chases you off the patios.",
      whyGo: "One-stop local food for a mixed group, open all weekend, walkable to the RiverWalk and Third Ward shops.",
      vibe: "Indoor market, casual, something for everyone",
      address: "Milwaukee Public Market, 400 N Water St, Milwaukee, WI 53202",
      insiderTip: "Go off-peak (mid-afternoon) to skip the lunch crush, then walk the RiverWalk along the Milwaukee River.",
    },
  ],
  family: [
    {
      name: "Milwaukee County Zoo",
      neighborhood: "West Side",
      priceRange: "$$",
      when: "Open MDW — summer schedule (~9:30 a.m.–5 p.m.)",
      details: "The county zoo is open Memorial Day and shifts to its summer schedule and hours in late May, with the West entrance opening for the holiday-through-Labor-Day season. A full-day classic for families.",
      whyGo: "The region's biggest family attraction, open on the holiday and running summer hours.",
      vibe: "Family, all-day, classic",
      address: "Milwaukee County Zoo, 10001 W Bluemound Rd, Milwaukee, WI 53226",
      insiderTip: "Buy tickets online and arrive at open — holiday-weekend lots and the carousel/train lines build fast by late morning.",
    },
    {
      name: "Discovery World",
      neighborhood: "Lakefront",
      priceRange: "$$",
      when: "Holiday weekend (confirm Monday hours)",
      details: "A lakefront science-and-technology museum with aquariums, freshwater and saltwater tanks, hands-on labs and the Reiman Aquarium tunnel — an ideal rainy-or-windy-day plan steps from the Field of Flags.",
      whyGo: "Indoor, hands-on and right on the lakefront, so you can pair it with Veterans Park in one trip.",
      vibe: "Hands-on, indoor, kid-driven",
      address: "Discovery World, 500 N Harbor Dr, Milwaukee, WI 53202",
      insiderTip: "Confirm Memorial Day Monday hours — some attractions adjust on holidays. Combine with the lakefront Field of Flags.",
    },
    {
      name: "Betty Brinn Children's Museum",
      neighborhood: "Downtown",
      priceRange: "$",
      when: "Holiday weekend (confirm Monday hours)",
      details: "A downtown hands-on museum built for kids roughly 10 and under, with interactive exhibits and play-based learning near the lakefront and O'Donnell Park.",
      whyGo: "The best little-kid option in the city, fully indoor and walkable to the lakefront ceremonies.",
      vibe: "Little kids, indoor, play-based",
      address: "Betty Brinn Children's Museum, 929 E Wisconsin Ave, Milwaukee, WI 53202",
      insiderTip: "Check holiday hours before going. It is small — a 90-minute visit pairs perfectly with the kite festival next door.",
    },
    {
      name: "Milwaukee Public Museum",
      neighborhood: "Downtown",
      priceRange: "$$",
      when: "Holiday weekend (confirm Monday hours)",
      details: "Milwaukee's classic natural-history museum — the Streets of Old Milwaukee, the rainforest and the dioramas remain favorites. A dependable all-ages indoor plan if the weather turns.",
      whyGo: "A multi-generational rainy-day standby that never gets old, downtown and central.",
      vibe: "Classic museum, all ages, indoor",
      address: "Milwaukee Public Museum, 800 W Wells St, Milwaukee, WI 53233",
      insiderTip: "Verify Memorial Day hours and any ticketing changes in advance, and budget at least two to three hours inside.",
    },
    {
      name: "Boerner Botanical Gardens",
      neighborhood: "Hales Corners",
      priceRange: "$",
      when: "All weekend (late-spring bloom season)",
      details: "Formal gardens within Whitnall Park, peaking in late May with spring blooms, flowering trees and trails. A calm, pretty, low-key option for a holiday afternoon with grandparents or younger kids.",
      whyGo: "Late May is peak bloom — it is one of the prettiest, most relaxed family outings of the season.",
      vibe: "Gardens, peaceful, photogenic",
      address: "Boerner Botanical Gardens, 9400 Boerner Dr, Hales Corners, WI 53130",
      insiderTip: "Mornings are best for photos and the smallest crowds. Combine with a Whitnall Park picnic or beer-garden stop.",
    },
  ],
  daytrips: [
    {
      name: "Cedarburg & Maxwell Street Days",
      neighborhood: "~20 min north",
      priceRange: "Free entry",
      when: "Sun May 24, 2026 — ~7 a.m.–2 p.m. (Maxwell Street Days)",
      details: "Historic Cedarburg's huge community flea market and craft sale, Maxwell Street Days, traditionally has a Memorial Day weekend edition (the 2026 calendar lists a May 24 date) at Cedarburg Firemen's Park, alongside the town's stone-building historic district, shops and wineries.",
      whyGo: "A picture-perfect small-town day trip plus a massive market, easy from the north side of Milwaukee.",
      vibe: "Historic town, market, browsing",
      address: "Cedarburg Firemen's Park, N Hamilton Rd, Cedarburg, WI 53012",
      insiderTip: "Maxwell Street Days starts at dawn and the best finds go early. Confirm the 2026 date, then explore downtown Cedarburg after.",
    },
    {
      name: "Lake Geneva",
      neighborhood: "~1 hr 15 min SW",
      priceRange: "$$",
      when: "All weekend (cruise season runs May–Oct)",
      details: "A classic Wisconsin resort town: the 21-mile Geneva Lake Shore Path past historic estates, downtown shopping and the Lake Geneva Cruise Line's narrated boat and mailboat tours, which run May through October and book up on holiday weekends.",
      whyGo: "The quintessential Memorial Day getaway from Milwaukee — lake town energy and an easy day trip.",
      vibe: "Resort town, lake, walkable",
      address: "Riviera Docks, 812 Wrigley Dr, Lake Geneva, WI 53147",
      insiderTip: "Reserve cruise tickets in advance for a holiday weekend. The Shore Path is free and the best way to see the lake mansions.",
    },
    {
      name: "Door County Kickoff",
      neighborhood: "~2.5 hrs north",
      priceRange: "$$$",
      when: "Memorial Day weekend (peak season opens)",
      details: "Memorial Day weekend is the traditional start of Door County's busy season — Cave Point, Peninsula State Park, the waterfront villages of Fish Creek and Ephraim, cherry-blossom-time orchards and the first big fish boils of the year.",
      whyGo: "If you want a full long-weekend escape rather than a day trip, this is Wisconsin's signature one.",
      vibe: "Peninsula getaway, scenic, slower pace",
      address: "Door County Peninsula, WI (Sturgeon Bay & north)",
      insiderTip: "Lodging books out far ahead for MDW — reserve well in advance and treat it as an overnight, not a day trip.",
    },
    {
      name: "Holy Hill",
      neighborhood: "~40 min NW",
      priceRange: "Free",
      when: "All weekend, daylight hours",
      details: "The Basilica of the National Shrine of Mary, Help of Christians at Holy Hill sits atop a glacial moraine in the Kettle Moraine, with a scenic-tower climb (seasonal) offering long views over the late-spring countryside.",
      whyGo: "A short, dramatic drive from Milwaukee to one of Wisconsin's most striking landmarks and viewpoints.",
      vibe: "Landmark, scenic, contemplative",
      address: "Holy Hill, 1525 Carmel Rd, Hubertus, WI 53033",
      insiderTip: "Confirm 2026 scenic-tower hours and any holiday-Mass schedule before visiting; weekday-style quiet returns by late afternoon.",
    },
    {
      name: "Old World Wisconsin",
      neighborhood: "~50 min SW",
      priceRange: "$$",
      when: "Holiday weekend (open-air season)",
      details: "A large open-air history museum in Eagle with restored 19th-century farmsteads, costumed interpreters and heritage animals across the Kettle Moraine — a strong all-ages day trip that does not require reservations.",
      whyGo: "An immersive, walk-back-in-time outing that is genuinely engaging for kids and adults alike.",
      vibe: "Living history, outdoor, all ages",
      address: "Old World Wisconsin, W372 S9727 WI-67, Eagle, WI 53119",
      insiderTip: "It is a lot of walking on grounds — wear real shoes and confirm 2026 holiday-weekend hours before driving out.",
    },
  ],
};

const faqs = [
  {
    question: "What is there to do in Milwaukee on Memorial Day weekend?",
    answer: "Plenty. Start with the Field of Flags at Veterans Park (free, ~27,316 flags on the lakefront), then add the free Family Kite Festival, a Bradford Beach season kick-off, a Brewers afternoon game, county beer gardens opening for the season, and the West Allis or Wauwatosa Memorial Day ceremonies. Museums, the zoo and day trips round it out.",
  },
  {
    question: "Is there a Memorial Day parade in Milwaukee?",
    answer: "Yes — several. West Allis runs an established parade and ceremony (historically a ~10 a.m. parade and ~11 a.m. service), and Mequon-Thiensville holds a large suburban parade. Wauwatosa, Whitefish Bay and other suburbs hold morning observances. These are annual traditions — confirm exact 2026 routes and times with each city before you go.",
  },
  {
    question: "Is Bradford Beach open Memorial Day?",
    answer: "Yes. Bradford Beach is a public beach that is open, and Memorial Day weekend is its traditional season kick-off, often with a DJ, food and volleyball. Note that Lake Michigan is still very cold in late May — most people come for the scene rather than to swim. Confirm the 2026 kick-off details before going.",
  },
  {
    question: "What are family things to do Memorial Day weekend in Milwaukee?",
    answer: "The free Family Kite Festival at Veterans Park is the standout. The Milwaukee County Zoo is open on the holiday and moves to summer hours, the county aquatic centers (Cool Waters, Schulz) typically open for the season, and Discovery World, Betty Brinn and the Milwaukee Public Museum are good indoor backups. Confirm holiday hours for the museums.",
  },
  {
    question: "What are good Memorial Day weekend day trips from Milwaukee?",
    answer: "Cedarburg (about 20 minutes north, with a Memorial-weekend Maxwell Street Days listed for May 24, 2026), Lake Geneva (about 75 minutes, boat tours run May–October), Holy Hill (about 40 minutes, scenic basilica and tower), Old World Wisconsin in Eagle, and Door County (about 2.5 hours) as the traditional start of its busy season.",
  },
  {
    question: "What is open and closed on Memorial Day in Milwaukee?",
    answer: "Memorial Day is a federal holiday: banks, post offices, government offices and many services are closed, and parking/transit may run on a holiday schedule. The Milwaukee County Zoo, beaches, parks and beer gardens are open and in summer mode; museums often open but may run holiday hours. Always confirm holiday hours with each venue before you go.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Memorial Day Weekend in Milwaukee 2026: What to Do",
    "description": "An expansive, researched guide to Memorial Day weekend in Milwaukee 2026 — ceremonies and parades, lakefront and parks, festivals, patios, family activities and day trips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-18",
    "dateModified": "2026-05-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/memorial-day-weekend-milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Memorial Day Weekend Milwaukee", "item": "https://www.discover-milwaukee.com/memorial-day-weekend-milwaukee" }
    ]
  }
};

export default function MemorialDayWeekendMilwaukee() {
  const GuideCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.when}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.details}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>WHY GO</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.whyGo}</p>
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
        <title>Memorial Day Weekend in Milwaukee 2026 | What to Do</title>
        <meta name="description" content="An expansive guide to Memorial Day weekend in Milwaukee 2026 (May 23–25): parades and ceremonies, the lakefront, festivals, patios, family activities and day trips." />
        <meta name="keywords" content="memorial day weekend milwaukee, things to do memorial day milwaukee, milwaukee memorial day 2026, milwaukee memorial day parade, memorial day events milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/memorial-day-weekend-milwaukee" />

        <meta property="og:title" content="Memorial Day Weekend in Milwaukee 2026 | What to Do" />
        <meta property="og:description" content="Ceremonies and parades, the lakefront, festivals, patios, family activities and day trips — the complete Memorial Day weekend 2026 guide for Milwaukee." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/memorial-day-weekend-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>MEMORIAL DAY WEEKEND 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Memorial Day Weekend in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Saturday, May 23 through Monday, May 25, 2026 — the unofficial start of Milwaukee summer. Ceremonies and parades, the lakefront, festivals, patios, family days and day trips, all in one expansive guide.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Many of these are annual events whose 2026 dates, times and routes were not all fully confirmed at publication. Always confirm exact 2026 schedules, hours and ticketing with the venue or organizer before you go.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Remembrance & Ceremonies</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The reason for the weekend. Free, moving and worth building the day around — flags, parades and services across the metro.
            </p>
            {guide.remembrance.map((spot, i) => <GuideCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Lakefront & Outdoors</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's lakefront wakes up for the season — beaches, trails, parks and the big free kite festival.
            </p>
            {guide.lakefront.map((spot, i) => <GuideCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Festivals, Events & Ballgames</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The county switches summer on — beer gardens, aquatic centers and a holiday afternoon at the ballpark.
            </p>
            {guide.festivals.map((spot, i) => <GuideCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Food, Patios & Drinks</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Memorial Day weekend is the kickoff to patio season — riverside breweries, fire pits and lakeside beer gardens.
            </p>
            {guide.food.map((spot, i) => <GuideCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Family-Friendly</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Zoo, science, dinosaurs and gardens — open-on-the-holiday options and indoor backups for kids of every age.
            </p>
            {guide.family.map((spot, i) => <GuideCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Day Trips & Beyond</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Easy escapes for the long weekend — historic towns, a resort lake, a hilltop basilica and the start of Door County season.
            </p>
            {guide.daytrips.map((spot, i) => <GuideCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Festivals</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do</Link>
              <Link href="/free-things-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Free Things To Do</Link>
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
