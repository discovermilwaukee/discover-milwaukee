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

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#hours-admission", label: "Hours & Admission" },
  { href: "#exhibits", label: "Exhibits" },
  { href: "#rides", label: "Rides" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
];

const atAGlance = [
  { label: "Summer hours (through Sept 7)", value: "Daily 9:30 a.m.–5 p.m." },
  { label: "Fall hours (Sept 8–Oct 31)", value: "Daily 9:30 a.m.–4:30 p.m." },
  { label: "Winter hours (Nov 1–Dec 31)", value: "Weekdays 9:30 a.m.–2:30 p.m.; Weekends 9:30–4:30" },
  { label: "Summer adult admission (flex)", value: "$14.75–$19.75 (advance online saves)" },
  { label: "Winter adult admission (flex)", value: "$12.75–$15.75 (lowest in Jan–Mar)" },
  { label: "Parking", value: "$15 per car (free for Zoo Pass members)" },
  { label: "Kids 2 and under", value: "Free, every day" },
  { label: "Best season for outdoor exhibits", value: "Memorial Day–Labor Day (giraffe feeding, Sky Safari, Goat Yard)" },
  { label: "Family-friendly notes", value: "190 acres, 2,400+ animals, stroller rental $12.50, all paved paths" },
  { label: "Free admission days", value: "6 Family Free Days + Frosty Free Week (Dec 26–30)" },
];

const seasonPricing = [
  {
    season: "Peak Summer (Memorial Day weekend – Labor Day)",
    window: "Late May through early September 2026",
    rows: [
      { who: "Adult (13+)", price: "Up to $19.75 (top of flex range — peak weekends)" },
      { who: "Senior (60+)", price: "$13.25 (April 1 – October 31)" },
      { who: "Child (3–12)", price: "Up to $16.75 (top of flex range)" },
      { who: "Child (2 and under)", price: "Free" },
      { who: "Zoo Pass member", price: "Free admission + free parking" },
      { who: "Parking", price: "$15 per car" },
    ],
  },
  {
    season: "Shoulder (Sept 8 – Oct 31)",
    window: "Early fall — daily 9:30 a.m.–4:30 p.m.",
    rows: [
      { who: "Adult (13+)", price: "Mid-flex pricing — typically $14.75–$17.75" },
      { who: "Senior (60+)", price: "$13.25 (through October 31)" },
      { who: "Child (3–12)", price: "Mid-flex pricing — typically $11.75–$13.75" },
      { who: "Child (2 and under)", price: "Free" },
      { who: "Zoo Pass member", price: "Free admission + free parking" },
      { who: "Parking", price: "$15 per car" },
    ],
  },
  {
    season: "Winter (Nov 1 – Mar 31)",
    window: "Reduced hours; weekday closes 2:30, weekends 4:30",
    rows: [
      { who: "Adult (13+)", price: "$12.75–$15.75 (lowest end of flex Jan–Mar)" },
      { who: "Senior (60+)", price: "$10.25 (Jan 1–Mar 31 and Nov 1–Dec 31)" },
      { who: "Child (3–12)", price: "$9.75–$12.75" },
      { who: "Child (2 and under)", price: "Free" },
      { who: "Zoo Pass member", price: "Free admission + free parking" },
      { who: "Parking", price: "$15 per car" },
    ],
  },
];

const exhibits = [
  {
    name: "Adventure Africa (Elephant Habitat & Care Center)",
    what: "Largest single addition in zoo history. African savanna elephant Belle now anchors a 1.6-acre outdoor yard and a 20,000 sq ft Care Center; she has been the zoo's sole elephant since Ruth died in September 2025 and Brittany was euthanized in April 2026. The zoo has committed to continuing its elephant program in coordination with the AZA Species Survival Plan. Check the daily schedule at the gate for keeper enrichment talks.",
    best: "Morning enrichment talk (11:30 a.m. weekdays) — elephants are most active and you get keeper commentary.",
  },
  {
    name: "Adventure Africa Phase II — Dohmen Family Foundation Hippo Haven",
    what: "Underwater viewing of Nile hippos in a 60,000-gallon pool. Opened summer 2020. Tied into the Adventure Africa complex with elephants.",
    best: "Mid-morning before crowds for the underwater windows. Hippos are most likely to swim past then.",
  },
  {
    name: "Adventure Africa Phase III — Ladish Co. Foundation Rhino Care Center",
    what: "Newest addition. Houses Eastern black rhinos in habitats reshaped from the former elephant and rhino footprint. The Conservation Outpost nearby features the Adventure Africa mural.",
    best: "Late morning — rhinos are typically out on warm days. Pair with the elephant talk next door.",
  },
  {
    name: "Florence Mila Borchert Big Cat Country",
    what: "Opened 2005. Lions, jaguars, tigers and snow leopards in naturalistic rock-and-stream habitats with multi-level glass viewing. Daily Big Cat demonstrations at 3 p.m.",
    best: "3 p.m. demo is the move. Mornings if you want quiet viewing through glass.",
  },
  {
    name: "Stearns Family Apes of Africa",
    what: "Opened 1992. Western lowland gorillas and bonobos in West African rainforest habitats with elevated outdoor mesh passageways (added 2011). Bonobo demonstrations Wednesdays at 3:45 p.m.",
    best: "Wednesday 3:45 p.m. for bonobo demo. Otherwise mid-morning when both groups are most social.",
  },
  {
    name: "Primates of the World",
    what: "Indoor building with orangutans, gibbons, lemurs, mandrills and other primates from across the globe. Comes alive on cold or rainy days when guests cluster inside.",
    best: "Any winter day or rainy summer afternoon — heated, sheltered, never empty-feeling.",
  },
  {
    name: "Aquatic & Reptile Center",
    what: "Sharks, sea turtles, alligators, snakes, frogs and a touch tank. Walks visitors through aquatic and herp species across continents. Indoor, year-round.",
    best: "Hot afternoons (cool indoors) or rainy days. Sea turtle viewing is the highlight.",
  },
  {
    name: "Small Mammals Building — CLOSED INDEFINITELY",
    what: "The Small Mammals Building is closed indefinitely. Bats, rodents, marsupials, fennec foxes and other small mammal species that were on display here are not currently accessible to the public. Check milwaukeezoo.org for updates on the building's status.",
    best: "Plan your visit around the other indoor buildings (Aquatic & Reptile Center, Primates of the World, Bird Building, Apes of Africa) until further notice.",
  },
  {
    name: "Bird Building (Bird House)",
    what: "Multi-zone indoor flight rooms with tropical and shorebird species. Often the warmest building in the park — a winter favorite.",
    best: "January–February afternoons when outdoor exhibits are limited. Quiet weekday mornings are best for photography.",
  },
  {
    name: "Idabel Wilmot Borchert Flamingo Exhibit",
    what: "Caribbean and Chilean flamingos in an open outdoor habitat near the zoo entrance. Added 2008.",
    best: "Late morning when birds are most active and grouped together.",
  },
  {
    name: "Northwestern Mutual Family Farm",
    what: "Working dairy and farm complex with cows, goats, sheep, pigs, horses, alpacas and farm-life programming. The Goat Yard (Nigerian dwarf goats) opens May 23–Sept 7, 10 a.m.–4:15 p.m.; pellets are $0.50.",
    best: "Late morning before farm animals nap. Bring quarters for goat pellets — Goat Yard is a kid magnet.",
  },
  {
    name: "Australia (Australian Animals Building)",
    what: "Indoor exhibit area featuring kangaroos, wallabies, koalas and other Australian wildlife. Climate-controlled, open year-round.",
    best: "Mid-day visits when koalas are most likely to be visible (still mostly napping — that is the truth about koalas).",
  },
  {
    name: "Modern Woodmen Otter Passage",
    what: "North American river otters in an outdoor habitat with underwater viewing windows. Opened 2018.",
    best: "Morning or right after a keeper enrichment feed — otters are most playful with fresh ice or toys.",
  },
  {
    name: "Giraffe Experience (presented by Miller Lite)",
    what: "Hand-feed giraffes from an elevated platform. Operates weekends in May, daily Memorial Day through Labor Day, then weekends in September. Times: 10:30 a.m.–12:30 p.m. and 2–3:30 p.m. Cost: $5.",
    best: "Earlier session (10:30 a.m.) — shorter lines and giraffes are hungrier.",
  },
  {
    name: "Powerful Pollinators (2026 Summer Exhibit)",
    what: "Special interactive seasonal exhibit with animatronic pollinators. Runs May 23 – October 4, 2026. $4 per person on top of zoo admission.",
    best: "Pair with the Family Farm next door — most pollinator content is hands-on for kids 4–10.",
  },
];

const rides = [
  { name: "Sky Safari (chairlift)", price: "$4 + tax per person", when: "Daily, March–November (weather permitting)", note: "One-way aerial ride across the zoo's interior — great way to scout the layout when you arrive." },
  { name: "Safari Train", price: "$5 + tax per person", when: "Daily, March–November (weather permitting)", note: "Miniature train loop. Saves toddler legs late in the day." },
  { name: "Penzeys Carousel", price: "$3 + tax per person", when: "Daily March–November; winter weather-permitting", note: "Hand-painted animal carousel near the entrance plaza." },
  { name: "Sky Adventure Zip Line", price: "$20 + tax", when: "May 23 – Sept 7 (weather permitting)", note: "400-foot zip line — adults and older kids only. Height/weight rules apply." },
  { name: "Sky Adventure Ropes Course", price: "$15 + tax", when: "May 23 – Sept 7 (weather permitting)", note: "Multi-element course beside the zip line. Combo zip + ropes is $30." },
  { name: "Sky Tykes (kid ropes course)", price: "$10 + tax", when: "May 23 – Sept 7", note: "Lower, safer course for small kids — same plaza as the big zip line." },
  { name: "ScooterPals (mobility scooters for rent)", price: "$5 activation + $0.35/min", when: "Daily, weather permitting", note: "Driver must be 16+. Returns to designated docks around the park." },
  { name: "Virtual Reality Experience", price: "$6 ($5 for members)", when: "Year-round", note: "Three VR adventures in multiple languages — the Gorilla Trek experience is the best one." },
  { name: "Stroller rental", price: "$12.50 + tax", when: "Daily at the entrance", note: "Wheelchairs are $10; mobility scooters $35. All first-come, first-served." },
];

const dailySchedule = [
  { time: "9:30 a.m.", item: "Zoo opens — entrance lines are shortest in the first 30 minutes" },
  { time: "10:30 a.m. – 12:30 p.m.", item: "Giraffe Experience session 1 ($5) — summer season only" },
  { time: "11:30 a.m.", item: "Elephant Habitat enrichment talk (Mon, Tue, Thu, Fri)" },
  { time: "12:00 p.m.", item: "Kohl's Wild Theater show (15 min, free) — summer only, closed Mondays" },
  { time: "1:45 p.m.", item: "Kohl's Wild Theater show #2 (15 min, free) — summer only" },
  { time: "2:00 – 3:30 p.m.", item: "Giraffe Experience session 2 ($5) — summer season only" },
  { time: "3:00 p.m.", item: "Big Cat Country demonstration (daily)" },
  { time: "3:45 p.m.", item: "Bonobo demonstration (Wednesdays)" },
  { time: "Varies", item: "Animals in Action talks + Veterinary Views (Animal Health Center)" },
];

const events = [
  { name: "Egg Day", when: "Saturday, April 4, 2026 — 9:30 a.m.–3 p.m.", what: "Spring family event. Scavenger hunts, Bunny Parade at 10:30 a.m., noon and 1:30 p.m., face painting, Chalk the Zoo, Dixieland jazz, and egg-themed animal enrichment for lions, otters and elephants. New 2026 brunch buffet package: $70 adults / $36 kids 3–12 (includes admission, parking, train ride, animal encounter)." },
  { name: "Senior Safari", when: "June 16, 2026", what: "Free admission for guests 60+ (and caretakers). One of the year's most-attended free days." },
  { name: "Father's Day", when: "June 21, 2026", what: "Free admission for dads." },
  { name: "Zoo Ball (gala fundraiser)", when: "June 27, 2026", what: "Zoological Society's flagship adults-only gala. Ticketed, formal." },
  { name: "$4 on the 4th", when: "July 4, 2026", what: "Independence Day promotion — $4 admission for everyone." },
  { name: "Military & Veterans Family Day", when: "July 5, 2026", what: "Free admission and free parking for military and veterans plus immediate family." },
  { name: "Kids Nights (members only)", when: "July 14–16, 2026", what: "After-hours Zoo Pass member event with extended hours and family activities." },
  { name: "Birdies & Eagles Golf Tournament", when: "July 27, 2026", what: "Annual Zoological Society golf fundraiser." },
  { name: "Snooze at the Zoo (overnight camping)", when: "August 13–15, 2026", what: "Family overnight inside the zoo grounds — registration through the Zoological Society." },
  { name: "À La Carte at the Zoo", when: "August 20–23, 2026", what: "Multi-day food, music and dining festival across the park." },
  { name: "Zoo Brew", when: "Thursday, October 8, 2026 (21+)", what: "Zoological Society's adults-only craft-beer tasting across three zones. Includes local and national breweries plus food. Tickets at gozoobrew.com." },
  { name: "Boo at the Zoo", when: "Two October weekends (2025 ran Oct 17–19 and 24–26; 2026 dates confirmed on zoo site closer to fall) — 5:30–9 p.m.", what: "Not-so-spooky family Halloween event. Trick-or-Treat Trail through Adventure Africa with six treat stops, light show, Candy Corn Farmer's Market, Pumpkin Park, Haunted Hollow. Pre-purchased tickets required; parking included." },
  { name: "Wild Lights", when: "Select nights Nov 21 – Dec 31 (2025 schedule; 2026 dates confirmed in fall) — 5:30–9 p.m.", what: "Holiday light walk presented by We Energies Foundation. Expanded route, opening-night drone show, four Drive-Thru nights, an adults-only Cheers! night, and a Dogs After Dark night." },
  { name: "Frosty Free Week", when: "December 26–30, 2026", what: "Free daytime zoo admission for everyone — one of the best low-cost holiday-break activities in Milwaukee." },
];

const familyFreeDays = ["January 3, 2026", "February 7, 2026", "March 7, 2026", "October 3, 2026", "November 7, 2026", "December 5, 2026"];

const memberships = [
  { tier: "Individual", price: "$110", who: "One adult, 18+" },
  { tier: "Dual", price: "$135", who: "Two adults at the same address" },
  { tier: "One-Adult Household", price: "$155", who: "One adult + their kids/grandkids 17 and under" },
  { tier: "Two-Adult Household", price: "$180", who: "Two adults at the same address + their kids/grandkids 17 and under" },
  { tier: "Affiliate", price: "$355", who: "Household + 4 guests per visit + 4 one-time guest passes + education class certificate" },
  { tier: "Benefactor", price: "$460", who: "Household + 4 guests per visit + 6 one-time guest passes + class certificate + walking tour certificate" },
];

const faqs = [
  { question: "What are Milwaukee County Zoo's hours in 2026?", answer: "Through September 7, 2026 the zoo is open daily 9:30 a.m. to 5 p.m. From September 8 through October 31 the zoo is open daily 9:30 a.m. to 4:30 p.m. From November 1 through December 31 the zoo is open 9:30 a.m. to 2:30 p.m. on weekdays and 9:30 a.m. to 4:30 p.m. on weekends. The zoo is closed Thanksgiving Day, Christmas Day and New Year's Day. Always check milwaukeezoo.org before going — special events (Boo at the Zoo, Wild Lights) and weather can change the day's schedule." },
  { question: "How much does it cost to get into the Milwaukee County Zoo?", answer: "The zoo uses flex pricing — admission rises on peak days. Adults range from $12.75 (winter floor) to $19.75 (peak summer weekends). Kids 3–12 range from $9.75 to $16.75. Seniors 60+ pay $13.25 April 1–October 31 and $10.25 November 1–March 31. Kids 2 and under are always free. Parking is $15 per car. Buying tickets in advance at milwaukeezoo.org saves money over the gate price and skips the entrance line." },
  { question: "Are there any free admission days at the Milwaukee County Zoo?", answer: "Yes — the 2026 Family Free Days, sponsored by Tri City National Bank and FOX6, are January 3, February 7, March 7, October 3, November 7 and December 5. The zoo also offers free daytime admission December 26–30, 2026 during Frosty Free Week. Senior Safari (June 16) is free for guests 60 and over and their caretakers, and Father's Day (June 21) is free for dads. Parking is still $15 on free-admission days unless otherwise noted." },
  { question: "Where is the Milwaukee County Zoo and is it actually in Milwaukee?", answer: "The zoo is at 10001 W Bluemound Rd, Milwaukee, WI 53226. The mailing address says Milwaukee, but the zoo footprint sits inside the City of Wauwatosa, just west of the Hawley Road / Hwy 41 corridor and a short drive from the I-94 Bluemound exit. From downtown Milwaukee it's about 15–20 minutes by car. Parking is $15 per car, paid at the entrance (free for Zoo Pass members)." },
  { question: "Do you still have elephants at the Milwaukee County Zoo?", answer: "Yes — one African savanna elephant, Belle. Brittany was euthanized in April 2026 and Ruth died in September 2025; Belle is currently the zoo's sole elephant. She lives in the Adventure Africa complex (opened 2019, largest physical change to the zoo since its 1961 move to this site), with a 1.6-acre outdoor yard and a 20,000-square-foot Elephant Care Center. The zoo has committed to continuing its elephant program in coordination with the AZA Species Survival Plan. Check the daily schedule at the gate for current keeper enrichment talks." },
  { question: "What rides are at the Milwaukee County Zoo and how much do they cost?", answer: "Rides are not included in admission. The Sky Safari (chairlift) is $4. The Safari Train is $5. The Penzeys Carousel is $3. The Sky Adventure Zip Line is $20, the Ropes Course is $15, the zip + ropes combo is $30, and Sky Tykes for little kids is $10 — these summer-only attractions run May 23 – September 7. The VR Experience is $6 ($5 for members). All prices are plus tax. The Goat Yard at the Family Farm is free; pellets to feed the goats are $0.50. Stroller rental is $12.50, wheelchair $10, mobility scooter $35." },
  { question: "What animal demonstrations or feedings happen each day?", answer: "Typical summer schedule (subject to change — check at the gate): Big Cat Country demonstrations at 3 p.m. daily. Elephant Habitat enrichment talks Monday, Tuesday, Thursday and Friday at 11:30 a.m. Bonobo demonstrations Wednesdays at 3:45 p.m. Kohl's Wild Theater shows at noon and 1:45 p.m. (May 23–Sept 7, closed Mondays). Giraffe Experience feeding sessions at 10:30 a.m.–12:30 p.m. and 2–3:30 p.m. for $5 (summer season). Veterinary Views at the Animal Health Center has a rotating schedule posted onsite." },
  { question: "When is the best time of year to visit the Milwaukee County Zoo?", answer: "Late spring through early fall (mid-May to early October) is peak season — every outdoor exhibit and every ride is open, plus seasonal programming like Giraffe Experience, Goat Yard, Sky Adventure zip line, and Kohl's Wild Theater. Visit on a weekday morning to dodge weekend crowds. Winter (November through March) is quieter and cheaper but several outdoor exhibits and the summer rides are closed; the indoor buildings (Aquatic & Reptile Center, Primates of the World, Bird Building, Apes of Africa) still anchor a full visit. Note: the Small Mammals Building is closed indefinitely. The two best 'special' visit windows are Wild Lights in late November–December and Boo at the Zoo on two October weekends." },
  { question: "How much is a Zoo Pass membership and is it worth it?", answer: "Zoo Pass tiers as of February 2026: Individual $110, Dual $135, One-Adult Household $155, Two-Adult Household $180, Affiliate $355, Benefactor $460. Every tier includes free admission, free parking ($15/visit value), member discounts on rides and the VR Experience, and reciprocal admission at 150+ AZA zoos. For a Milwaukee family of four, the Two-Adult Household tier ($180) pays for itself in roughly two visits once parking and admission are added up — and it covers free entry to Wild Lights member previews, Kids Nights and Family Free Days." },
  { question: "What is there to do near the Milwaukee County Zoo after the visit?", answer: "The zoo sits on the Milwaukee–Wauwatosa border. Within 5–10 minutes by car: Mayfair Mall (largest mall in metro Milwaukee), Hoyt Park & Pool (Menomonee River trails, summer pool), Wauwatosa Village (independent restaurants, brewpubs, walkable Underwood Creek), North Avenue's stretch through Tosa (bars and breakfast spots), and Story Hill (where Maxie's Southern Comfort and Story Hill BKC sit at Bluemound). Miller Park / American Family Field is also a 7-minute drive east on Bluemound, making zoo + Brewers game a real day-double in summer." },
];

const structuredData = {
  attraction: {
    "@context": "https://schema.org",
    "@type": "Zoo",
    name: "Milwaukee County Zoo",
    description: "Milwaukee County Zoo — 190-acre AZA-accredited zoo home to more than 2,400 animals across 340+ species, including African savanna elephants, lions, snow leopards, gorillas, bonobos and Eastern black rhinos.",
    image: "https://www.discover-milwaukee.com/images/milwaukee-county-zoo-og.svg",
    url: "https://www.discover-milwaukee.com/milwaukee-county-zoo",
    telephone: "+1-414-771-3040",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10001 W Bluemound Rd",
      addressLocality: "Milwaukee",
      addressRegion: "WI",
      postalCode: "53226",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 43.0276, longitude: -88.0379 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:30", closes: "17:00", validFrom: "2026-05-23", validThrough: "2026-09-07" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:30", closes: "16:30", validFrom: "2026-09-08", validThrough: "2026-10-31" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "14:30", validFrom: "2026-11-01", validThrough: "2026-12-31" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "09:30", closes: "16:30", validFrom: "2026-11-01", validThrough: "2026-12-31" },
    ],
    priceRange: "$12.75 – $19.75 (adult flex pricing); $15 parking",
    isAccessibleForFree: false,
    sameAs: ["https://www.milwaukeezoo.org", "https://www.zoosociety.org"],
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
      { "@type": "ListItem", position: 2, name: "Milwaukee County Zoo", item: "https://www.discover-milwaukee.com/milwaukee-county-zoo" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Major Exhibits at Milwaukee County Zoo",
    description: "Major animal exhibits and habitats at Milwaukee County Zoo verified open as of June 2026.",
    numberOfItems: exhibits.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: exhibits.map((e, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "TouristAttraction",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
        name: e.name,
        description: e.what,
        isAccessibleForFree: false,
        address: { "@type": "PostalAddress", streetAddress: "10001 W Bluemound Rd", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53226", addressCountry: "US" },
      },
    })),
  },
};

export default function MilwaukeeCountyZoo() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Milwaukee County Zoo 2026 Guide | Hours, Tickets, Tips</title>
        <meta name="description" content="The definitive Milwaukee County Zoo 2026 guide: verified hours, flex-pricing tickets, every major exhibit, ride costs, animal demo times, events and parking." />
        <meta name="keywords" content="milwaukee county zoo, milwaukee zoo, milwaukee zoo hours, milwaukee zoo tickets, milwaukee zoo admission 2026, milwaukee zoo parking, adventure africa milwaukee, big cat country, apes of africa, wild lights milwaukee zoo, boo at the zoo, zoo brew milwaukee, zoo pass milwaukee, milwaukee with kids" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-county-zoo" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee County Zoo 2026 Guide | Hours, Tickets, Tips" key="og:title" />
        <meta property="og:description" content="Verified 2026 Milwaukee County Zoo guide — hours, flex-pricing tickets, exhibits, rides, animal demos, events and parking." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-county-zoo" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-county-zoo-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee County Zoo 2026 Guide — hours, tickets, exhibits, events." key="og:image:alt" />
        <meta property="article:published_time" content="2026-01-15T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-07T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Things to Do" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee County Zoo 2026 Guide | Hours, Tickets, Tips" key="twitter:title" />
        <meta name="twitter:description" content="Verified 2026 guide — hours, flex pricing, every major exhibit, ride costs, demo times, events and parking." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-county-zoo-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.attraction) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>VERIFIED JUNE 7, 2026 · 2,400+ ANIMALS · 190 ACRES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Milwaukee County Zoo: The 2026 Visitor Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              Everything you actually need before you go — <strong>verified hours</strong>, current <strong>flex-pricing tickets</strong>, every major exhibit and ride, animal demonstration times, the 2026 events calendar, and parking. Audited against milwaukeezoo.org and the Zoological Society of Milwaukee in June 2026.
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
              <strong>Heads up:</strong> Milwaukee County Zoo uses flex pricing — admission rises on peak weekends and holidays. Animal demonstrations, daily show times and ride availability shift with weather and season. Every fact below was verified against milwaukeezoo.org and zoosociety.org in June 2026, but always confirm the day's schedule at the gate or on the zoo website before you go.
            </p>
          </div>


          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Venue</dt>
              <dd style={{ color: "#444", margin: 0 }}>Milwaukee County Zoo</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Address</dt>
              <dd style={{ color: "#444", margin: 0 }}>10001 W Bluemound Rd, Milwaukee, WI 53226</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Summer hours (through Sept 7)</dt>
              <dd style={{ color: "#444", margin: 0 }}>Daily 9:30 a.m. – 5 p.m.</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Admission (flex pricing)</dt>
              <dd style={{ color: "#444", margin: 0 }}>Adult $14.75–$19.75 summer · $12.75–$15.75 winter</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Kids 2 and under</dt>
              <dd style={{ color: "#444", margin: 0 }}>Free, every day</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Parking</dt>
              <dd style={{ color: "#444", margin: 0 }}>$15 per car (free for Zoo Pass members)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Family Free Days 2026</dt>
              <dd style={{ color: "#444", margin: 0 }}>Jan 3, Feb 7, Mar 7, Oct 3, Nov 7, Dec 5</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Notable</dt>
              <dd style={{ color: "#444", margin: 0 }}>Small Mammals Building closed indefinitely; Belle is the sole elephant since April 2026</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-main-entrance.jpg" alt="Milwaukee County Zoo Main Entrance gate and signage on Bluemound Road" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Main Entrance on West Bluemound Road.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-gorilla.jpg" alt="Western lowland gorilla foraging at the Milwaukee County Zoo Stearns Family Apes of Africa habitat" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>A gorilla in the Stearns Family Apes of Africa building.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-jaguar.jpg" alt="Close-up portrait of a jaguar at the Milwaukee County Zoo big cat habitat" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>A jaguar at the Milwaukee County Zoo (Commons featured picture).</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-safari-train.jpg" alt="Milwaukee County Zoo miniature Safari Train carrying visitors through the zoo grounds" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Safari Train winding through the zoo grounds.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#999", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. Credits: Michael Barera (CC-BY-SA-4.0); Antigrandiose (CC-BY-SA-3.0); Cburnett (CC-BY-SA-3.0); David W. Feldbruegge (CC-BY-2.0).
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee County Zoo at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Fast answers to the questions most visitors ask before they go.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="hours-admission" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Hours & Admission by Season</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The zoo runs three distinct seasons. Buying advance tickets at milwaukeezoo.org saves money over walk-up and skips the entrance line.</p>

            {seasonPricing.map((s) => (
              <div key={s.season} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "20px 22px", marginBottom: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "19px", fontWeight: "800", margin: "0 0 4px" }}>{s.season}</h3>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "14px" }}>{s.window}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "0", border: `1px solid ${c.beige}`, borderRadius: "10px", overflow: "hidden" }}>
                  {s.rows.map((r, i) => (
                    <React.Fragment key={r.who}>
                      <div style={{ backgroundColor: i % 2 === 0 ? c.cream : "white", padding: "10px 14px", fontSize: "13px", color: c.green1, fontWeight: "700", borderBottom: i < s.rows.length - 1 ? `1px solid ${c.beige}` : "none" }}>{r.who}</div>
                      <div style={{ backgroundColor: i % 2 === 0 ? c.cream : "white", padding: "10px 14px", fontSize: "13px", color: "#444", borderBottom: i < s.rows.length - 1 ? `1px solid ${c.beige}` : "none" }}>{r.price}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "14px 16px", borderRadius: "10px", marginTop: "12px" }}>
              <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>
                <strong>2026 Family Free Days</strong> (sponsored by Tri City National Bank &amp; FOX6): {familyFreeDays.join(" · ")}. Parking still $15 on free days. Plus <strong>Frosty Free Week Dec 26–30</strong> — free daytime admission for everyone.
              </p>
            </div>
          </section>

          <section id="exhibits" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Major Exhibits & Animal Areas</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Every exhibit below was verified open as of June 2026. Indoor buildings stay open through winter; outdoor habitats and seasonal experiences (Giraffe Experience, Goat Yard, Sky Adventure zip line) close after Labor Day weekend.</p>

            {exhibits.map((e) => (
              <div key={e.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px 20px", marginBottom: "14px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>{e.name}</h3>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: "0 0 10px" }}>{e.what}</p>
                <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "10px 12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Best Viewing Time</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{e.best}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="rides" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Rides, Sky Adventure & Extras</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>None of the rides are included in admission — most run $3–$5 a person and the Sky Adventure complex tops out at $30 for the zip + ropes combo. All prices are plus tax.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {rides.map((r) => (
                <div key={r.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 6px" }}>{r.name}</h3>
                  <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", margin: "0 0 4px" }}>{r.price}</p>
                  <p style={{ color: c.green2, fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>{r.when}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{r.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Daily Animal Demonstrations & Feedings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Typical summer schedule below. The zoo varies these by season and weather — always check the day-of schedule at the entrance kiosk or at the building you want to visit.</p>

            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", overflow: "hidden" }}>
              {dailySchedule.map((d, i) => (
                <div key={d.time + d.item} style={{ display: "grid", gridTemplateColumns: "180px 1fr", borderBottom: i < dailySchedule.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                  <div style={{ backgroundColor: c.green1, color: c.yellow, padding: "12px 14px", fontSize: "13px", fontWeight: "700" }}>{d.time}</div>
                  <div style={{ padding: "12px 14px", fontSize: "14px", color: c.green1, lineHeight: 1.5 }}>{d.item}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Dining at the Zoo</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>The full-service option is <strong>Café 1892 and Coffee Shop</strong>, open daily year-round near the main entrance — sit-down seating, coffee, hot food, beer and wine. In summer, additional snack stands operate seasonally across the park (ice cream, pretzels, hot dogs, churros) at locations including the Family Farm, Big Cat Country and the Sky Adventure plaza.</p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "0" }}>You're allowed to bring your own food and non-alcoholic drinks into the zoo — there are picnic tables throughout the grounds and several covered picnic shelters that can be reserved for groups. No outside alcohol. For an upgrade, the À La Carte at the Zoo event (Aug 20–23, 2026) features food trucks and tasting stations across the park.</p>
          </section>

          <section id="events" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 Annual Events Calendar</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Confirmed 2026 dates from milwaukeezoo.org and zoosociety.org. Boo at the Zoo and Wild Lights 2026 schedules are typically published in late summer and early fall.</p>

            {events.map((e) => (
              <div key={e.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: 0 }}>{e.name}</h3>
                  <span style={{ backgroundColor: c.green1, color: c.yellow, padding: "4px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{e.when}</span>
                </div>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{e.what}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Zoo Pass Memberships (2026 Pricing)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Memberships are sold by the Zoological Society of Milwaukee. Every tier includes free zoo admission, free parking ($15/visit value), ride and VR discounts, and reciprocal admission at 150+ AZA zoos nationwide. Pricing below reflects the Feb 2026 update.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {memberships.map((m) => (
                <div key={m.tier} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{m.tier}</h3>
                  <p style={{ color: c.orange, fontSize: "20px", fontWeight: "900", margin: "0 0 8px" }}>{m.price}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{m.who}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking, Accessibility, Strollers & Lockers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Parking</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>$15 per car at the entrance booths. Free for Zoo Pass members. Picnic-area parking is complimentary for group events. The main lots fill on summer Saturdays — arrive before 10:30 a.m. on peak days.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Accessibility</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>All main pathways are paved and ADA-accessible. Wheelchair rental $10. Mobility scooter rental $35 (limited supply — first come, first served). Service animals welcome; pet animals are not.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Strollers</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Single stroller rental $12.50 + tax at the front entrance. Bring your own if you prefer — paths are stroller-friendly, including the Sky Safari boarding zone.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Re-entry & Stamps</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Same-day re-entry is allowed — get a hand stamp at the exit if you need to go to your car for snacks, sunscreen or a stroller swap.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Outside Food</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Picnics are welcome — bring food and non-alcoholic drinks. Picnic shelters can be reserved for groups; no outside alcohol or glass.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>How Long to Plan</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>4–6 hours covers a complete adult-pace visit. With young kids and a Sky Safari, train and carousel ride, plan a full day. Winter visits often fit in 2.5–3 hours since outdoor exhibits are limited.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Nearby in Wauwatosa & West Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The zoo sits at the Milwaukee–Wauwatosa border on Bluemound Road, with several worthwhile stops within a 10-minute drive.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {[
                { name: "Mayfair Mall", detail: "~5 min north on Hwy 100 — the largest indoor mall in metro Milwaukee. Apple Store, food hall, year-round air-conditioned backup plan." },
                { name: "American Family Field", detail: "~7 min east on Bluemound (Story Hill exit). Pair a Brewers afternoon game with a morning zoo visit." },
                { name: "Wauwatosa Village", detail: "~10 min north along Underwood Creek. Walkable independent restaurants, brewpubs (Leff's Lucky Town, Café Hollander), and shops along Harwood Ave." },
                { name: "Hoyt Park & Pool", detail: "~7 min northeast. Menomonee River trails, summer outdoor pool, and one of the area's best beer-garden patios at the Friends of Hoyt Park beer garden." },
                { name: "Story Hill / Bluemound dining", detail: "Bluemound between the zoo and downtown is dense with options — Maxie's Southern Comfort and Story Hill BKC both anchor the strip." },
                { name: "North Avenue (Tosa)", detail: "Five minutes north. Independent breakfast spots, coffee, and casual dinner restaurants — quieter than the Village strip." },
              ].map((n) => (
                <div key={n.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px" }}>
                  <h3 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 6px" }}>{n.name}</h3>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{n.detail}</p>
                </div>
              ))}
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

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>Keep Exploring Milwaukee</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do With Kids</Link>
              <Link href="/wauwatosa" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Wauwatosa Guide</Link>
              <Link href="/milwaukee-museums" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Museums</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Happy Hour Guide</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Family events, new restaurants, festival schedules and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE. Zoo hours, prices and events independently verified against milwaukeezoo.org and zoosociety.org in June 2026 — confirm day-of details before you go.</p>
        </footer>
      </div>
    </>
  );
}
