import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

const c = {
  ink: "#171513",
  green: "#1d5c3f",
  green2: "#2f7a55",
  red: "#9e2b25",
  gold: "#d99b1f",
  cream: "#faf6ef",
  beige: "#ece4d6",
};

const atAGlance = [
  { label: "What", value: "Milwaukee Juneteenth Day — the 55th annual parade & street festival" },
  { label: "When", value: "Friday, June 19, 2026 · 9 a.m.–4 p.m." },
  { label: "Where", value: "Dr. Martin Luther King Jr. Drive (King Drive), Bronzeville / Harambee" },
  { label: "Parade step-off", value: "9 a.m. — starts at N. 14th St & W. Atkinson Ave" },
  { label: "Admission", value: "Free" },
  { label: "Organizer", value: "Northcott Neighborhood House (since 1971)" },
  { label: "2026 theme", value: "Honoring the Past and Empowering the Future" },
  { label: "Evening add-on", value: "Summerfest Juneteenth Celebration, Henry Maier Festival Park" },
  { label: "Holiday status", value: "Federal holiday since 2021; Milwaukee County offices & courts closed" },
  { label: "Crowd", value: "Tens of thousands — one of the nation's oldest & longest-running" },
];

const dayPlan = [
  { time: "7 a.m.", what: "Parade line-up & float inspection", where: "Staging near N. 14th St & W. Atkinson Ave" },
  { time: "9 a.m.", what: "Jubilee Parade steps off — floats, marching bands, drumlines, dance teams", where: "14th & Atkinson → south to King Dr → east to Locust St (judges' grandstand at King Dr & Ring St)" },
  { time: "9 a.m.–4 p.m.", what: "King Drive street festival — 400+ vendors, food, live music, community resources", where: "King Drive, roughly W. Concordia Ave to W. Center St" },
  { time: "All day", what: "Kids Zone (ages 5–12) — carnival rides, petting zoo, pony rides", where: "MLK Jr. Elementary School playground" },
  { time: "All day", what: "Teen Zone (12–17) — basketball tournament vs. MPD, Double Dutch, spoken word, music", where: "Along the festival footprint" },
  { time: "All day", what: "Seniors Zone — DJ, karaoke, bingo, cards", where: "Walgreens lot at King Dr & Locust St" },
  { time: "All day", what: "Veterans Zone — veterans' support services & resources", where: "Clinton Rose Park (Bernice & N. King Dr area)" },
  { time: "6 p.m. onward", what: "Summerfest Juneteenth Celebration (separate ticketed event)", where: "Henry Maier Festival Park, 200 N. Harbor Dr" },
];

const eventsAround = [
  {
    name: "Summerfest Juneteenth Celebration",
    date: "June 18–20, 2026",
    venue: "Henry Maier Festival Park · 200 N. Harbor Dr",
    cost: "Summerfest admission (free-entry promo June 19, see note)",
    note: "Northcott Neighborhood House partners with Summerfest (presented by American Family Insurance) for a multi-day Juneteenth presence — an opening ceremony honoring the Juneteenth scholarship-pageant recipients, performances across stages, and a headlining set from Charlie Wilson with Danny Boy. FREE ENTRY for the first 2,500 fans on Friday June 19, noon–3 p.m. at the Mid Gate who donate 3 non-perishable food items (courtesy Redo Cabinets). Proceeds support Northcott. Confirm exact set times and the day-by-day schedule at summerfest.com.",
  },
  {
    name: "Juneteenth at the Milwaukee Public Museum",
    date: "Friday, June 19, 2026 · 11 a.m.–3 p.m.",
    venue: "Milwaukee Public Museum · 800 W. Wells St",
    cost: "Included with regular admission",
    note: "MPM educators stationed on the exhibit floors connect the history and meaning of Juneteenth to the museum's collections. Included with general admission — note this is not a free-admission day. (414) 278-2728.",
  },
  {
    name: "Celebration: Freedom! Free Day at the Milwaukee Art Museum",
    date: "Around Juneteenth — confirm 2026 date",
    venue: "Milwaukee Art Museum · 700 N. Art Museum Dr",
    cost: "Free general admission",
    note: "MAM hosts a free-admission day at the intersection of Juneteenth and Pride, celebrating Black and LGBTQIA+ communities with art-making, a community engagement fair, sound healing, music and gallery talks. The exact 2026 date had not been locked on mam.org at the time of writing — verify the calendar date before you plan around it. (414) 224-3200.",
  },
  {
    name: "Juneteenth Photowalk",
    date: "June 18 (6–7 p.m.) & June 19 (9–11 a.m. and 1–3 p.m.)",
    venue: "Henry Maier Festival Park · then King Drive · then The Peace Park (464 W. Locust St)",
    cost: "Free",
    note: "A free, open meet-up for photographers and visual storytellers documenting Black culture, freedom and joy — Thursday evening at the lakefront, Friday morning along the parade route on King Drive, and Friday afternoon at The Peace Park.",
  },
  {
    name: "Juneteenth Gospel Festival MKE",
    date: "Saturday, June 27, 2026 (confirm start time)",
    venue: "Richard E. Maslowski Glendale Community Park · 2200 W. Bender Rd, Glendale",
    cost: "See organizer",
    note: "A gospel-music celebration two weeks after Juneteenth in suburban Glendale — local choirs and music groups, food vendors and family activities. The 2026 organizer hadn't posted the final start time at the time of writing; confirm at juneteenthgospelfestmke.com.",
  },
];

const museums = [
  {
    name: "America's Black Holocaust Museum",
    address: "401 W. North Ave, Milwaukee, WI 53212",
    phone: "(414) 209-3640",
    hours: "Fri June 19: 10 a.m.–3 p.m. (Tue–Thu 10–5, Fri–Sat 10–3; closed Sun–Mon)",
    cost: "Adults (18+) $7 · Children (3–17) $5 · under 3 free · guided tours $10",
    why: "Founded by Dr. James Cameron — the only known survivor of a lynching to found a museum — ABHM is the single most important Juneteenth-adjacent destination in Bronzeville. It traces the African American journey from Africa through enslavement, emancipation and the ongoing fight for equality. There is no better place in Milwaukee to put the holiday in context. No special Juneteenth-day program was posted as of writing; it is open under regular Friday hours — call ahead to confirm.",
  },
  {
    name: "Milwaukee Public Museum",
    address: "800 W. Wells St, Milwaukee, WI 53233",
    phone: "(414) 278-2728",
    hours: "Juneteenth program Fri June 19, 11 a.m.–3 p.m.",
    cost: "Included with regular admission",
    why: "Educators on the floor link Juneteenth's history to the museum's exhibits — a good stop for families pairing the day's street festival with something indoors and air-conditioned.",
  },
  {
    name: "Milwaukee Art Museum",
    address: "700 N. Art Museum Dr, Milwaukee, WI 53202",
    phone: "(414) 224-3200",
    hours: "Free 'Celebration: Freedom!' day — confirm 2026 date on mam.org",
    cost: "Free general admission on the celebration day",
    why: "MAM's free 'Celebration: Freedom!' programming sits at the intersection of Juneteenth and Pride, with art-making, a community fair, sound healing and music. Confirm the exact 2026 calendar date before building plans around it.",
  },
];

const blackOwned = [
  {
    name: "Bronzeville Kitchen & Lounge",
    cuisine: "Upscale soul food & brunch",
    address: "2053 N. Dr. Martin Luther King Jr. Dr",
    note: "Right on King Drive in the heart of Bronzeville — chicken & waffles, shrimp & grits, a full bar and a Sunday-brunch reputation. The natural sit-down anchor for a Juneteenth on King Drive.",
  },
  {
    name: "Mi Casa Su Cafe",
    cuisine: "Comfort food & brunch",
    address: "1835 N. Dr. Martin Luther King Jr. Dr",
    note: "A Black-owned King Drive favorite (despite the name, it is eclectic comfort and breakfast/brunch, not Mexican) — burgers, shrimp & grits and big breakfast plates.",
  },
  {
    name: "Confectionately Yours",
    cuisine: "Bakery & café",
    address: "1920 N. Dr. Martin Luther King Jr. Dr",
    note: "Owner Adija Greer-Smith's scratch bakery right on King Drive — desserts, breakfast sandwiches and coffee (typically weekdays 8 a.m.–2 p.m.). A sweet stop steps from the festival.",
  },
  {
    name: "Daddy's Soul Food & Grille",
    cuisine: "Soul food",
    address: "754 N. 27th St (Avenues West)",
    note: "Bennie & Angela Smith's buffet-style Southern soul food — a Milwaukee institution for greens, mac, fried chicken and cornbread.",
  },
  {
    name: "Mr. Perkins' Family Restaurant",
    cuisine: "Soul food (since 1969)",
    address: "2001 W. Atkinson Ave",
    note: "One of Milwaukee's longest-running African American soul-food rooms, near the parade staging area on Atkinson — perfect for a pre-parade breakfast.",
  },
  {
    name: "1700 Pull Up",
    cuisine: "Upscale soul food",
    address: "1848 W. Fond du Lac Ave (Lindsay Heights)",
    note: "Chef Rosetta Bond's spot, famous for turkey legs and elevated soul food, in the former Tandem space in Lindsay Heights.",
  },
  {
    name: "Twisted Plants",
    cuisine: "100% vegan comfort food",
    address: "1233 E. Brady St (also Cudahy & West Allis)",
    note: "Arielle & Brandon Hawthorne's all-vegan kitchen — plant-based wings, sandwiches and shakes for the meat-free crowd.",
  },
  {
    name: "Gee's Clippers",
    cuisine: "Barbershop & community landmark",
    address: "2200 N. Dr. Martin Luther King Jr. Dr",
    note: "Not a restaurant — but Gaulien 'Gee' Smith's shop is one of the largest Black-owned barbershops in the Midwest and a genuine King Drive institution worth knowing on a Bronzeville walk.",
  },
];

const shermanVendors = [
  "Baked Dreams Bakery & Café — scratch cakes, cheesecakes & desserts",
  "Richmond's Restaurant & Catering — homestyle comfort food",
  "Just 4 U — homestyle and vegan plates",
  "Cinnabar Nutrition — teas, shakes and wellness drinks",
];

const faqs = [
  {
    question: "When and where is Milwaukee's Juneteenth Day 2026?",
    answer: "Milwaukee's Juneteenth Day is Friday, June 19, 2026, from 9 a.m. to 4 p.m. on Dr. Martin Luther King Jr. Drive (King Drive) in the Bronzeville/Harambee area on the Near North Side. The Jubilee Parade steps off at 9 a.m., starting at N. 14th Street and W. Atkinson Avenue, traveling south to King Drive and then to Locust Street, with the judges' grandstand at King Drive and Ring Street. The street festival itself runs along King Drive, roughly between W. Concordia Avenue and W. Center Street. It is organized by Northcott Neighborhood House and is free to attend. Because exact boundaries and zones can shift year to year, confirm the day-of footprint at juneteenthmilwaukee.com.",
  },
  {
    question: "Is Milwaukee's Juneteenth celebration really one of the oldest in the country?",
    answer: "Yes. Milwaukee's Juneteenth Day has been held every year since 1971, making 2026 the 55th annual celebration — one of the oldest and longest-running organized Juneteenth celebrations in the United States. The City of Milwaukee's own records describe it as 'the oldest known and longest-running annual Juneteenth celebration' in the country. It's worth being precise: Juneteenth itself originated in Galveston, Texas, in 1865, and Texas observances are older. Milwaukee's distinction is about being one of the longest continuously running, large, organized community celebrations — and a key founder, Margaret Henningsen, has said she believes Milwaukee was the first northern city to celebrate it.",
  },
  {
    question: "How much does it cost and is it family-friendly?",
    answer: "The King Drive parade and street festival are completely free to attend. It is built for families: there's a Kids Zone (ages 5–12) at the MLK Jr. Elementary School playground with carnival rides, a petting zoo and pony rides; a Teen Zone (12–17) with a basketball tournament against the Milwaukee Police Department, Double Dutch and spoken word; a Seniors Zone with a DJ, karaoke and bingo at the Walgreens lot near King & Locust; and a Veterans Zone at Clinton Rose Park. The separate evening Summerfest Juneteenth Celebration requires Summerfest admission, though there's a free-entry food-donation promo on June 19 from noon to 3 p.m.",
  },
  {
    question: "Where do I park and how do I get there?",
    answer: "King Drive will have street closures along the festival and parade route, so plan to park in the surrounding residential neighborhoods and walk in — arrive early for the best spots. The most reliable transit option is the MCTS Route 19 bus, which runs directly up and down King Drive; standard fare is about $2 ($1 reduced) via the Umo app or RideMCTS.com. Important: the Hop streetcar does NOT reach Bronzeville or King Drive — it runs a downtown loop and a lakefront line only, so don't plan to take the streetcar to Juneteenth. An extension up King Drive has been proposed but is not built as of 2026.",
  },
  {
    question: "What is Juneteenth and why is it celebrated on June 19?",
    answer: "Juneteenth (a blend of 'June' and 'nineteenth') commemorates June 19, 1865, the day Union Major General Gordon Granger arrived in Galveston, Texas, and issued General Order No. 3, announcing that all enslaved people in Texas were free. That was roughly two and a half years after the Emancipation Proclamation took effect on January 1, 1863 — the news and its enforcement simply hadn't reached the most remote Confederate state. Formerly enslaved Texans held the first 'Jubilee Day' celebrations in 1866, and the tradition spread across the country. Juneteenth became the 11th U.S. federal holiday when President Biden signed the Juneteenth National Independence Day Act on June 17, 2021. In Wisconsin, June 19 is recognized in state statute as a day of observation for Juneteenth Day, though it is not a paid state-employee holiday.",
  },
  {
    question: "Are city offices, courts and libraries closed for Juneteenth in Milwaukee?",
    answer: "Juneteenth is a federal holiday and an official paid Milwaukee County holiday, so Milwaukee County offices and the Milwaukee County Circuit Court are closed Friday, June 19, 2026, as are Wisconsin state courts. All Milwaukee Public Library locations are also closed that day. Banks and many government services observe the holiday too. If you need a specific city or county service, check that office's holiday schedule before you go.",
  },
  {
    question: "What other Juneteenth events are happening around Milwaukee?",
    answer: "Beyond the main King Drive celebration: the multi-day Summerfest Juneteenth Celebration (June 18–20 at Henry Maier Festival Park, with a Charlie Wilson headline set and a June 19 food-donation free-entry window); a Juneteenth program at the Milwaukee Public Museum (June 19, 11 a.m.–3 p.m., with admission); the Milwaukee Art Museum's free 'Celebration: Freedom!' day (confirm the 2026 date on mam.org); a free Juneteenth Photowalk across June 18–19; and, two weeks later, the Juneteenth Gospel Festival MKE on June 27 in Glendale. America's Black Holocaust Museum in Bronzeville is open under regular Friday hours and is the best place in the city to understand the holiday's history.",
  },
  {
    question: "What are good Black-owned restaurants to support near the celebration?",
    answer: "Right on King Drive: Bronzeville Kitchen & Lounge (2053 N. MLK Dr) for upscale soul food and brunch, Mi Casa Su Cafe (1835 N. MLK Dr) for comfort food, and Confectionately Yours (1920 N. MLK Dr) for desserts and coffee. Near the parade staging area, Mr. Perkins' Family Restaurant (2001 W. Atkinson Ave) has served soul food since 1969. Elsewhere in the city: Daddy's Soul Food & Grille (754 N. 27th St), 1700 Pull Up (1848 W. Fond du Lac Ave) for turkey legs, Twisted Plants (1233 E. Brady St) for vegan, and the Sherman Phoenix food hall (3536 W. Fond du Lac Ave), a marketplace of roughly 30 mostly Black-owned businesses. Juneteenth is a natural day to put dollars into Black-owned Milwaukee.",
  },
  {
    question: "What should I bring and expect at the festival?",
    answer: "It's a large outdoor street festival in mid-June, so plan for summer: sun protection (hat, sunscreen), plenty of water, and comfortable walking shoes, since the footprint stretches several blocks. Bring cash as well as cards — many vendors are small businesses. Expect big, celebratory crowds, road closures around King Drive, and a festive, all-ages, community atmosphere. Arrive early if you want a good parade-viewing spot along the route, and pace yourself for a full day in the sun.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#key-facts", "#faq"] },
    headline: "Juneteenth in Milwaukee 2026: Parade, Festival & Complete Guide",
    description: "The complete guide to Juneteenth in Milwaukee — the 55th annual Juneteenth Day parade and street festival on King Drive, plus citywide events, museums and Black-owned restaurants.",
    image: "https://www.discover-milwaukee.com/images/juneteenth-milwaukee-og.svg",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    mainEntityOfPage: "https://www.discover-milwaukee.com/juneteenth-milwaukee",
  },
  event: {
    "@context": "https://schema.org",
    "@type": "Festival",
    name: "Milwaukee Juneteenth Day 2026",
    description: "The 55th annual Milwaukee Juneteenth Day — a Jubilee Parade and all-day street festival on Dr. Martin Luther King Jr. Drive, organized by Northcott Neighborhood House. One of the oldest and longest-running Juneteenth celebrations in the United States.",
    startDate: "2026-06-19T09:00:00-05:00",
    endDate: "2026-06-19T16:00:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: "https://www.discover-milwaukee.com/images/juneteenth-milwaukee-og.svg",
    location: {
      "@type": "Place",
      name: "Dr. Martin Luther King Jr. Drive (Bronzeville)",
      address: { "@type": "PostalAddress", streetAddress: "N. Dr. Martin Luther King Jr. Dr (Concordia Ave to Center St)", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" },
    },
    organizer: { "@type": "Organization", name: "Northcott Neighborhood House", url: "https://www.juneteenthmilwaukee.com" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://www.juneteenthmilwaukee.com", validFrom: "2026-01-01T00:00:00-06:00" },
    isAccessibleForFree: true,
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
      { "@type": "ListItem", position: 2, name: "Juneteenth Milwaukee", item: "https://www.discover-milwaukee.com/juneteenth-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Black-Owned Restaurants & Cultural Sites for Juneteenth in Milwaukee",
    description: "Verified Black-owned restaurants and cultural destinations to support around Juneteenth in Milwaukee.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 11,
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Restaurant", name: "Bronzeville Kitchen & Lounge", servesCuisine: "Soul Food", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2053 N. Dr. Martin Luther King Jr. Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" } } },
      { "@type": "ListItem", position: 2, item: { "@type": "Restaurant", name: "Mi Casa Su Cafe", servesCuisine: "American", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1835 N. Dr. Martin Luther King Jr. Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" } } },
      { "@type": "ListItem", position: 3, item: { "@type": "Bakery", name: "Confectionately Yours", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1920 N. Dr. Martin Luther King Jr. Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" } } },
      { "@type": "ListItem", position: 4, item: { "@type": "Restaurant", name: "Daddy's Soul Food & Grille", servesCuisine: "Soul Food", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "754 N. 27th St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53208", addressCountry: "US" } } },
      { "@type": "ListItem", position: 5, item: { "@type": "Restaurant", name: "Mr. Perkins' Family Restaurant", servesCuisine: "Soul Food", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "2001 W. Atkinson Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53209", addressCountry: "US" } } },
      { "@type": "ListItem", position: 6, item: { "@type": "Restaurant", name: "1700 Pull Up", servesCuisine: "Soul Food", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1848 W. Fond du Lac Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53205", addressCountry: "US" } } },
      { "@type": "ListItem", position: 7, item: { "@type": "Restaurant", name: "Twisted Plants", servesCuisine: "Vegan", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "1233 E. Brady St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" } } },
      { "@type": "ListItem", position: 8, item: { "@type": "FoodEstablishment", name: "Sherman Phoenix Marketplace", priceRange: "$$", address: { "@type": "PostalAddress", streetAddress: "3536 W. Fond du Lac Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53210", addressCountry: "US" } } },
      { "@type": "ListItem", position: 9, item: { "@type": "Museum", name: "America's Black Holocaust Museum", address: { "@type": "PostalAddress", streetAddress: "401 W. North Ave", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53212", addressCountry: "US" }, url: "https://www.abhmuseum.org" } },
      { "@type": "ListItem", position: 10, item: { "@type": "Museum", name: "Milwaukee Public Museum", address: { "@type": "PostalAddress", streetAddress: "800 W. Wells St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53233", addressCountry: "US" }, url: "https://www.mpm.edu" } },
      { "@type": "ListItem", position: 11, item: { "@type": "Museum", name: "Milwaukee Art Museum", address: { "@type": "PostalAddress", streetAddress: "700 N. Art Museum Dr", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53202", addressCountry: "US" }, url: "https://www.mam.org" } },
    ],
  },
};

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#main-event", label: "The Main Event" },
  { href: "#day-plan", label: "The Day" },
  { href: "#more-events", label: "More Events" },
  { href: "#museums", label: "Museums" },
  { href: "#history", label: "History" },
  { href: "#black-owned", label: "Black-Owned" },
  { href: "#getting-there", label: "Getting There" },
  { href: "#faq", label: "FAQ" },
];

export default function JuneteenthMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribeStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }
    } catch {
      setSubscribeStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Juneteenth Milwaukee 2026: Parade, Events &amp; Guide</title>
        <meta name="description" content="Complete guide to Juneteenth in Milwaukee 2026 — the 55th annual parade & festival on King Drive (Fri June 19, 9 a.m.–4 p.m.), plus events, museums & Black-owned eats." />
        <meta name="keywords" content="juneteenth milwaukee, juneteenth milwaukee 2026, milwaukee juneteenth day, juneteenth parade milwaukee, king drive juneteenth, northcott juneteenth, juneteenth events milwaukee, bronzeville juneteenth, black owned restaurants milwaukee, juneteenth festival wisconsin, what to do juneteenth milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/juneteenth-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Juneteenth Milwaukee 2026: Parade, Events & Guide" key="og:title" />
        <meta property="og:description" content="The 55th annual Juneteenth Day parade & festival on King Drive (Fri June 19, 9 a.m.–4 p.m.), plus citywide events, museums and Black-owned restaurants to support." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/juneteenth-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/juneteenth-milwaukee-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Juneteenth in Milwaukee 2026 — the 55th annual parade and street festival on King Drive, Friday June 19." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-15T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-15T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Events" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Juneteenth Milwaukee 2026: Parade, Events & Guide" key="twitter:title" />
        <meta name="twitter:description" content="The complete 2026 guide to Juneteenth in Milwaukee — King Drive parade & festival, citywide events, museums and Black-owned restaurants." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/juneteenth-milwaukee-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.event) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.ink} 0%, ${c.green} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.gold, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 15, 2026 · 55TH ANNUAL · VERIFIED</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Juneteenth in Milwaukee — Your 2026 Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "720px", margin: "0 auto" }}>
              Milwaukee throws one of the oldest and longest-running Juneteenth celebrations in America. The 55th annual <strong>Juneteenth Day parade &amp; street festival</strong> takes over King Drive on <strong>Friday, June 19, 2026</strong>. Here&apos;s everything — the route, the day, citywide events, museums, and Black-owned spots to support.
            </p>
          </div>
        </header>

        <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.ink, borderBottom: `2px solid ${c.green}`, padding: "12px 16px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", gap: "8px", maxWidth: "1000px", margin: "0 auto", whiteSpace: "nowrap" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "8px 14px", borderRadius: "8px", backgroundColor: "rgba(217,155,31,0.15)", border: `1px solid rgba(217,155,31,0.35)`, display: "inline-block", flexShrink: 0 }}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "880px", margin: "0 auto", padding: "40px 24px" }}>

          <aside aria-labelledby="newsletter-cta-heading" style={{ background: `linear-gradient(135deg, ${c.ink} 0%, ${c.green} 100%)`, color: c.cream, padding: "24px 28px", borderRadius: "16px", marginBottom: "28px", border: `2px solid ${c.gold}` }}>
            <p style={{ color: c.gold, fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>📬 The weekly Milwaukee scoop</p>
            <h2 id="newsletter-cta-heading" style={{ color: c.cream, fontSize: "20px", fontWeight: "900", margin: "0 0 8px", lineHeight: 1.25 }}>Discover what&apos;s happening in Milwaukee</h2>
            <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.55, margin: "0 0 14px" }}>Join 10,000+ Milwaukee insiders. The best events, new restaurant openings, hidden gems, and local favorites — delivered free every Wednesday.</p>
            <form onSubmit={handleSubscribe} style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <label htmlFor="jt-newsletter-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>Email address</label>
              <input
                id="jt-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={subscribeStatus === "loading"}
                style={{ flex: "1 1 240px", minWidth: "200px", padding: "10px 14px", borderRadius: "8px", border: "none", fontSize: "14px", color: c.ink, backgroundColor: c.cream }}
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading"}
                style={{ background: c.gold, color: c.ink, border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", cursor: subscribeStatus === "loading" ? "not-allowed" : "pointer", whiteSpace: "nowrap" }}
              >
                {subscribeStatus === "loading" ? "Joining…" : "Subscribe"}
              </button>
            </form>
            {subscribeStatus === "success" && (
              <p style={{ color: c.gold, fontSize: "13px", margin: "10px 0 0", fontWeight: "600" }}>✓ You&apos;re in. Check your inbox to confirm.</p>
            )}
            {subscribeStatus === "error" && (
              <p style={{ color: "#ffb3b3", fontSize: "13px", margin: "10px 0 0" }}>Something went wrong — try again, or sign up at <Link href="/newsletter" style={{ color: c.gold, textDecoration: "underline" }}>discover-milwaukee.com/newsletter</Link>.</p>
            )}
            <p style={{ color: c.beige, fontSize: "11px", margin: "12px 0 0", opacity: 0.7 }}>Powered by Beehiiv. No spam, ever.</p>
          </aside>

          <div style={{ backgroundColor: c.gold, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.ink, fontSize: "14px", fontWeight: "600", margin: 0, lineHeight: 1.6 }}>
              <strong>Heads up:</strong> Juneteenth Day is <strong>this Friday, June 19</strong>. Details below were verified June 15, 2026 against the official Juneteenth Milwaukee site, Northcott Neighborhood House, venue sites and Milwaukee press. A few things still shift close to the date — the exact festival boundaries and zones, the Milwaukee Art Museum&apos;s free-day date, and Summerfest set times — so confirm those at the source before you go. The parade route and 9 a.m.–4 p.m. street festival on King Drive are confirmed.
            </p>
          </div>

          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.red, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green, fontWeight: "700" }}>Event</dt>
              <dd style={{ color: "#444", margin: 0 }}>Milwaukee Juneteenth Day (55th annual)</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>Date</dt>
              <dd style={{ color: "#444", margin: 0 }}><time dateTime="2026-06-19">Friday, June 19, 2026</time>, 9 a.m.–4 p.m.</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>Location</dt>
              <dd style={{ color: "#444", margin: 0 }}>Dr. Martin Luther King Jr. Drive, Bronzeville</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>Parade</dt>
              <dd style={{ color: "#444", margin: 0 }}>Steps off 9 a.m. at N. 14th St &amp; W. Atkinson Ave</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>Admission</dt>
              <dd style={{ color: "#444", margin: 0 }}>Free</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>Organizer</dt>
              <dd style={{ color: "#444", margin: 0 }}>Northcott Neighborhood House (since 1971)</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>2026 theme</dt>
              <dd style={{ color: "#444", margin: 0 }}>Honoring the Past and Empowering the Future</dd>
              <dt style={{ color: c.green, fontWeight: "700" }}>Holiday</dt>
              <dd style={{ color: "#444", margin: 0 }}>Federal holiday; Milwaukee County offices, courts &amp; libraries closed</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Verified <time dateTime="2026-06-15">2026-06-15</time> against juneteenthmilwaukee.com, Northcott Neighborhood House, venue sites and Milwaukee press.
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Juneteenth Milwaukee 2026 at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The fast facts for the day — everything you need to plan around.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.red, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="main-event" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Main Event: Juneteenth Day on King Drive</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>If you do one thing for Juneteenth in Milwaukee, do this. The Jubilee Parade and all-day street festival on Dr. Martin Luther King Jr. Drive is the city&apos;s signature Juneteenth celebration — and one of the oldest in the country.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "20px" }}>
              <div style={{ backgroundColor: "rgba(29,92,63,0.08)", padding: "14px", borderRadius: "8px", marginBottom: "14px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.green, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>The Jubilee Parade</p>
                <p style={{ fontSize: "14px", color: c.ink, margin: 0, lineHeight: 1.7 }}>The parade steps off at <strong>9 a.m.</strong> from <strong>N. 14th Street and W. Atkinson Avenue</strong>, traveling south to King Drive and then to Locust Street, with the judges&apos; grandstand at <strong>King Drive &amp; Ring Street</strong>. Expect floats, marching bands, drumlines, dance teams and community groups. Float line-up and inspection start around 7 a.m. Arrive early to claim a curbside spot along the route.</p>
              </div>
              <div style={{ backgroundColor: "rgba(158,43,37,0.07)", padding: "14px", borderRadius: "8px", marginBottom: "14px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.red, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>The Street Festival</p>
                <p style={{ fontSize: "14px", color: c.ink, margin: 0, lineHeight: 1.7 }}>From <strong>9 a.m. to 4 p.m.</strong>, King Drive (roughly between W. Concordia Avenue and W. Center Street) becomes a multi-block festival with <strong>400+ vendors</strong>, food, live music and stages, games, and community-resource booths. It&apos;s free, family-friendly, and draws tens of thousands of people over the course of the day.</p>
              </div>
              <div style={{ backgroundColor: "rgba(217,155,31,0.14)", padding: "14px", borderRadius: "8px", marginBottom: "14px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>The Four Zones</p>
                <ul style={{ fontSize: "14px", color: c.ink, margin: 0, paddingLeft: "18px", lineHeight: 1.7 }}>
                  <li><strong>Kids Zone (5–12):</strong> carnival rides, petting zoo, pony rides at the MLK Jr. Elementary School playground.</li>
                  <li><strong>Teen Zone (12–17):</strong> a basketball tournament against the Milwaukee Police Department, Double Dutch, hula hoop, spoken word and music.</li>
                  <li><strong>Seniors Zone:</strong> DJ, karaoke, bingo and cards at the Walgreens lot near King Drive &amp; Locust Street.</li>
                  <li><strong>Veterans Zone:</strong> veterans&apos; support services and resources at Clinton Rose Park.</li>
                </ul>
              </div>
              <p style={{ fontSize: "13px", color: "#555", margin: "0", lineHeight: 1.7 }}>
                <strong>Organizer:</strong> Northcott Neighborhood House (2460 N. 6th St · (414) 372-3770), which has run Milwaukee&apos;s Juneteenth Day every year since 1971. Official info, the parade page and zone map: <a href="https://www.juneteenthmilwaukee.com" target="_blank" rel="noopener noreferrer" style={{ color: c.green, fontWeight: 700 }}>juneteenthmilwaukee.com</a>. The 2026 theme is <em>&quot;Honoring the Past and Empowering the Future.&quot;</em> Exact festival boundaries and zone locations can shift year to year — confirm the day-of footprint at the official site.
              </p>
            </div>
          </section>

          <section id="day-plan" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>How the Day Unfolds</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>A simple timeline for Friday, June 19 — from the morning parade to the evening Summerfest celebration.</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.beige}` }}>
                <thead>
                  <tr style={{ backgroundColor: c.ink }}>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>Time</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>What</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "700" }}>Where</th>
                  </tr>
                </thead>
                <tbody>
                  {dayPlan.map((d, i) => (
                    <tr key={d.what} style={{ backgroundColor: i % 2 === 0 ? c.cream : "white" }}>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: c.red, fontWeight: "700", verticalAlign: "top", whiteSpace: "nowrap" }}>{d.time}</td>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: c.ink, verticalAlign: "top", fontWeight: 600 }}>{d.what}</td>
                      <td style={{ padding: "10px 12px", fontSize: "12px", color: "#444", verticalAlign: "top" }}>{d.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "#666", fontSize: "13px", marginTop: "12px" }}>Times reflect the official Juneteenth Milwaukee schedule and recent-year programming. The evening Summerfest event is separate and ticketed — see below.</p>
          </section>

          <section id="more-events" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>More Juneteenth Events Around Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The King Drive celebration is the centerpiece, but there&apos;s more happening across the city and the weekend.</p>

            {eventsAround.map((e) => (
              <div key={e.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "18px 20px", marginBottom: "14px" }}>
                <h3 style={{ color: c.green, fontSize: "20px", fontWeight: "900", margin: "0 0 6px" }}>{e.name}</h3>
                <p style={{ color: c.red, fontSize: "13px", fontWeight: "700", margin: "0 0 4px" }}>{e.date}</p>
                <p style={{ color: "#555", fontSize: "13px", margin: "0 0 4px" }}>📍 {e.venue}</p>
                <p style={{ color: "#333", fontSize: "12px", margin: "0 0 10px", fontWeight: 600 }}>{e.cost}</p>
                <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{e.note}</p>
              </div>
            ))}
          </section>

          <section id="museums" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Museums &amp; Cultural Sites</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>To put the holiday in context — three Milwaukee museums worth pairing with the festival. See also our <Link href="/milwaukee-museums" style={{ color: c.green2, fontWeight: 700 }}>full Milwaukee museums guide</Link>.</p>

            {museums.map((m) => (
              <div key={m.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "20px 22px", marginBottom: "16px" }}>
                <h3 style={{ color: c.green, fontSize: "22px", fontWeight: "900", margin: "0 0 6px" }}>{m.name}</h3>
                <p style={{ fontSize: "13px", color: "#555", margin: "0 0 8px" }}>📍 {m.address} · {m.phone}</p>
                <p style={{ color: c.cream, backgroundColor: c.green, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "6px" }}>{m.hours}</p>
                <p style={{ fontSize: "12px", color: "#333", margin: "0 0 10px", fontWeight: 600 }}>{m.cost}</p>
                <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{m.why}</p>
              </div>
            ))}
          </section>

          <section id="history" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>What Juneteenth Is — and Why Milwaukee&apos;s Matters</h2>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "16px" }}>
              <h3 style={{ color: c.red, fontSize: "18px", fontWeight: "900", margin: "0 0 8px" }}>The origin</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.8, margin: "0 0 16px" }}>
                Juneteenth — a blend of &quot;June&quot; and &quot;nineteenth&quot; — marks <strong>June 19, 1865</strong>, the day Union Major General Gordon Granger arrived in Galveston, Texas, and issued General Order No. 3, announcing that all enslaved people in Texas were free. That was roughly <strong>two and a half years after the Emancipation Proclamation</strong> took effect on January 1, 1863; the news and its enforcement simply hadn&apos;t reached the most remote Confederate state. Formerly enslaved Texans held the first &quot;Jubilee Day&quot; celebrations in 1866, and the tradition spread nationwide. Juneteenth became the <strong>11th U.S. federal holiday</strong> when President Biden signed the Juneteenth National Independence Day Act on June 17, 2021. In Wisconsin, June 19 is recognized in state statute as a day of observation for Juneteenth Day — though it is not a paid state-employee holiday.
              </p>
              <h3 style={{ color: c.red, fontSize: "18px", fontWeight: "900", margin: "0 0 8px" }}>Why Milwaukee&apos;s celebration is special</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.8, margin: "0 0 16px" }}>
                Milwaukee has celebrated Juneteenth every year since <strong>1971</strong>, when Northcott Neighborhood House launched the event — the idea brought back by a Northcott staffer who&apos;d experienced Juneteenth in the South, partly to revitalize the old Third Street business corridor (now King Drive). Margaret Henningsen, often called the &quot;Mother of Milwaukee&apos;s Juneteenth Day,&quot; is widely credited as a key founder and has said she believes Milwaukee was the first northern city to celebrate the holiday. The City of Milwaukee&apos;s own records describe it as the oldest known and longest-running annual Juneteenth celebration in the United States. (To be precise: Juneteenth itself was born in Texas in 1865, and Texas observances run deeper — Milwaukee&apos;s distinction is being one of the longest <em>continuously running</em> organized community celebrations anywhere in the country.) In 2026 it reaches its <strong>55th year</strong>.
              </p>
              <h3 style={{ color: c.red, fontSize: "18px", fontWeight: "900", margin: "0 0 8px" }}>Bronzeville &amp; King Drive</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                The celebration&apos;s home is no accident. <strong>Bronzeville</strong> — centered on the Near North Side, historically running from King Drive (formerly North 3rd Street) toward 12th Street between roughly Juneau and North Avenues — was Milwaukee&apos;s African American cultural and business heart from the early 1900s through the 1960s, famous for jazz, blues and Black-owned enterprise before mid-century urban renewal and the construction of I-43 displaced much of it. <strong>King Drive</strong> is the district&apos;s spine, running through the <strong>Harambee</strong> neighborhood (the name is Swahili for &quot;all pull together&quot;). Holding Juneteenth here is a continual act of celebration and revitalization of that legacy.
              </p>
            </div>
          </section>

          <section id="black-owned" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Black-Owned Restaurants &amp; Businesses to Support</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Juneteenth is a natural day to put your dollars into Black-owned Milwaukee. Several of these are right on or near King Drive — pair them with the festival.</p>

            {blackOwned.map((b) => (
              <div key={b.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 18px", marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "6px" }}>
                  <h3 style={{ color: c.green, fontSize: "17px", fontWeight: "800", margin: "0 0 4px" }}>{b.name}</h3>
                  <span style={{ backgroundColor: c.green, color: "white", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{b.cuisine}</span>
                </div>
                <p style={{ color: c.red, fontSize: "12px", fontWeight: "700", margin: "0 0 6px" }}>📍 {b.address}</p>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{b.note}</p>
              </div>
            ))}

            <div style={{ backgroundColor: c.ink, padding: "20px 22px", borderRadius: "14px", marginTop: "16px" }}>
              <p style={{ color: c.gold, fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>Don&apos;t miss: Sherman Phoenix Marketplace</p>
              <p style={{ color: c.cream, fontSize: "14px", lineHeight: 1.7, margin: "0 0 10px" }}>
                A ~20,000 sq ft food-and-business hall at <strong>3536 W. Fond du Lac Ave</strong>, home to roughly 30 mostly Black-owned businesses. It opened in 2018 after the 2016 Sherman Park unrest and is one of the best one-stop ways to support Black entrepreneurs in the city. Current food vendors include:
              </p>
              <ul style={{ color: c.beige, fontSize: "13px", lineHeight: 1.7, margin: 0, paddingLeft: "18px" }}>
                {shermanVendors.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              <p style={{ color: c.beige, fontSize: "11px", margin: "12px 0 0", opacity: 0.8 }}>Vendor lineups change — check shermanphoenix.com for the current roster and hours before you go.</p>
            </div>
          </section>

          <section id="getting-there" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Getting There &amp; What to Bring</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "16px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.red, letterSpacing: "1.5px", marginBottom: "6px" }}>BY BUS</p>
                <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>The MCTS <strong>Route 19</strong> runs directly up and down King Drive — the easiest transit option. Fare is about $2 ($1 reduced) via the Umo app or RideMCTS.com.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.red, letterSpacing: "1.5px", marginBottom: "6px" }}>PARKING</p>
                <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>Expect <strong>street closures</strong> along the parade and festival route. Park in the surrounding residential blocks and walk in — and arrive early for both parking and a parade spot.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.red, letterSpacing: "1.5px", marginBottom: "6px" }}>NOT THE STREETCAR</p>
                <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>The <strong>Hop streetcar does not reach Bronzeville or King Drive</strong> — it serves a downtown loop and the lakefront only. Don&apos;t plan to ride it to Juneteenth.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.red, letterSpacing: "1.5px", marginBottom: "6px" }}>WHAT TO BRING</p>
                <p style={{ fontSize: "14px", color: c.ink, margin: 0, fontWeight: "500", lineHeight: 1.6 }}>Sun protection, water, comfortable shoes, and <strong>cash plus cards</strong> — many vendors are small businesses. It&apos;s an all-ages, celebratory crowd; pace yourself for a full day outdoors.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-museums" style={{ display: "block", backgroundColor: c.ink, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Museums</Link>
              <Link href="/summerfest-milwaukee" style={{ display: "block", backgroundColor: c.green, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Summerfest 2026</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.red, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do With Kids</Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Tap a question to expand.</p>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", marginBottom: "10px", overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", textAlign: "left", backgroundColor: isOpen ? c.cream : "white", border: "none", padding: "16px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "700", color: c.green }}>
                    <span>{f.question}</span>
                    <span style={{ fontSize: "20px", color: c.red, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.15s", fontWeight: "300" }}>+</span>
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

          <section style={{ backgroundColor: c.ink, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.gold, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Events, new openings, weekend picks and insider tips — delivered free every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.gold, color: c.ink, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.ink, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 8px" }}>© 2026 Discover Milwaukee. Your insider&apos;s guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75, maxWidth: "760px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>Juneteenth Milwaukee facts verified June 15, 2026 against the official Juneteenth Milwaukee site (juneteenthmilwaukee.com), Northcott Neighborhood House, venue websites and Milwaukee press (FOX6, TMJ4, OnMilwaukee, Urban Milwaukee, Milwaukee NNS, Milwaukee Public Library, the Encyclopedia of Milwaukee). Festival boundaries, zone locations, museum free-day dates and Summerfest set times can shift close to the date — always confirm at the source before going.</p>
        </footer>
      </div>
    </>
  );
}
