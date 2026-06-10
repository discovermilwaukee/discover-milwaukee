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

const sporkies = [
  {
    name: "Bayou Crunch Cup",
    vendor: "Exotic Meat Grill",
    location: "Central Mall area, near the Coca-Cola Stage",
    image: "/images/sporkies/bayou-crunch-cup.png",
    blurb: "A towering cup of southern comfort: sidewinder fries, Cajun slaw, alligator nuggets, breaded crawfish, comeback sauce, pickled okra — and a whole crawfish riding shotgun on top.",
    ingredients: "Sidewinder fries, Cajun coleslaw, alligator nuggets, breaded crawfish bites, comeback sauce, pickled okra, garnished with a whole crawfish.",
    tag: "Bold Flavor",
  },
  {
    name: "Cream City Cone",
    vendor: "WürstBar",
    location: "WürstBar stand, Main Street area",
    image: "/images/sporkies/cream-city-cone.png",
    blurb: "A handheld pretzel cone — dipped in Milwaukee Pretzel Company dill pickle mustard — packed with bratwurst, sautéed onions and mushrooms, melted cheddar and a whole breaded white cheddar cheese curd.",
    ingredients: "Buttery soft pretzel cone, Milwaukee Pretzel Company dill pickle mustard, bratwurst, sautéed onions and mushrooms, melted cheddar, breaded white cheddar cheese curd.",
    tag: "Wisconsin Classic",
  },
  {
    name: "Tinga Tango Chicharrones",
    vendor: "Blue Moon Tavern at the Park",
    location: "Blue Moon Tavern, near the Main Gate plaza",
    image: "/images/sporkies/tinga-tango-chicharrones.png",
    blurb: "Housemade honey-habanero pork rinds stacked like nachos with smoky chicken tinga, pickled red onions, queso fresco and cotija, candied jalapeños and a cilantro-lime crema.",
    ingredients: "Honey-habanero chicharrones, chicken tinga, pickled red onions, queso fresco, cotija, candied jalapeños, cilantro-lime crema, salsa verde.",
    tag: "Bold Flavor",
  },
  {
    name: "Porky Puff",
    vendor: "Bud Pavilion",
    location: "Bud Pavilion, Central Mall",
    image: "/images/sporkies/porky-puff.png",
    blurb: "Pulled pork tucked into golden puff pastry with peach filling and garlic-herb cheese, then finished with a drizzle of hot honey and a sprinkle of mustard seeds. Sweet, smoky, flaky.",
    ingredients: "Puff pastry, pulled pork, peach filling, garlic-and-herb cheese, hot honey, mustard seeds.",
    tag: "Sweet + Savory",
  },
  {
    name: "Deep-Fried Horchata Balls",
    vendor: "Badger Bites",
    location: "Badger Bites, Grandstand Avenue",
    image: "/images/sporkies/deep-fried-horchata-balls.png",
    blurb: "Cinnamon-sugar fried dough balls plated with dulce de leche, chocolate sauce, mini chips, toasted coconut and crisp fried plantain chips. The dessert finalist of 2026.",
    ingredients: "Fried horchata dough, cinnamon sugar, dulce de leche, chocolate sauce, mini chocolate chips, toasted coconut, fried plantain chips.",
    tag: "Dessert",
  },
  {
    name: "Sweet Lemon Berry Cheese Curds",
    vendor: "Saz's BBQ",
    location: "Saz's BBQ, multiple locations on the fairgrounds",
    image: "/images/sporkies/sweet-lemon-berry-cheese-curds.png",
    blurb: "Ellsworth Creamery white cheddar curds fried crisp, rolled in cinnamon-sugar, then topped with a bright raspberry sauce and a swoop of sweet lemon-zest cream. Saz's is the reigning Sporkies brand to beat — they won in 2024.",
    ingredients: "Ellsworth Creamery white cheddar curds, cinnamon sugar, fresh raspberry sauce, sweet lemon-zest whipped cream.",
    tag: "Wisconsin Classic",
  },
  {
    name: "Al Pastor Pizza",
    vendor: "Charlie's Pizza",
    location: "Charlie's Pizza, Central Mall",
    image: "/images/sporkies/al-pastor-pizza.png",
    blurb: "A taco-meets-slice mashup: marinated al pastor pork, mozzarella, pineapple, white onion, cilantro, a squeeze of lime and a signature sauce on a crisp Charlie's crust.",
    ingredients: "Pizza crust, mozzarella, al pastor marinated pork, pineapple, white onion, cilantro, fresh lime, signature al pastor sauce.",
    tag: "Sweet + Savory",
  },
  {
    name: "Birria Flamin' Bombs",
    vendor: "Fiesta Grill & Cantina",
    location: "Fiesta Grill & Cantina, near the South Gate",
    image: "/images/sporkies/birria-flamin-bombs.png",
    blurb: "Crispy breaded spheres stuffed with slow-cooked beef birria, mozzarella, cilantro and onion, served with a cup of birria consommé for dipping and a creamy chipotle aioli on the side.",
    ingredients: "Slow-cooked beef birria, mozzarella, cilantro, onion, seasoned breadcrumb coating, birria consommé, chipotle aioli.",
    tag: "Bold Flavor",
  },
];

const drinkies = [
  {
    name: "Color-Changing Swamp Juice",
    vendor: "All Things Jerky",
    location: "All Things Jerky, Grandstand Avenue",
    image: "/images/sporkies/color-changing-swamp-juice.png",
    blurb: "Pull the trigger on the syringe of \"swamp potion\" and watch the blue raspberry lemonade flip color in your cup. Gummy gators hide at the bottom, candy frogs float on top, and a Pop Rocks rim crackles with every sip.",
    ingredients: "Blue raspberry lemonade base, color-changing swamp potion syringe, gummy alligators, candy frogs, Pop Rocks crackle rim.",
    tag: "Spectacle",
  },
  {
    name: "Cookie Butter Coffee Float",
    vendor: "Fluffy's Hand Cut Donuts",
    location: "Fluffy's Hand Cut Donuts, Main Street",
    image: "/images/sporkies/cookie-butter-coffee-float.png",
    blurb: "Vanilla ice cream swimming in cookie-butter-infused iced coffee, finished with a Biscoff cookie crumble rim, a cookie butter drizzle and a whole Biscoff cookie as the garnish.",
    ingredients: "Vanilla ice cream, cookie butter iced coffee, Biscoff cookie crumble rim, cookie butter drizzle, whole Biscoff cookie.",
    tag: "Dessert Drink",
  },
  {
    name: "Hot Honey Chicken Lemonade",
    vendor: "Deep-Fried Mashed Potatoes On-a-Stick",
    location: "Deep-Fried Mashed Potatoes On-a-Stick, Central Mall",
    image: "/images/sporkies/hot-honey-chicken-lemonade.png",
    blurb: "Fresh-squeezed lemonade sweetened with Mike's Hot Honey, finished with honey-popping juice pearls and garnished with two hot-honey-battered chicken nuggets clipped to the rim. Yes — chicken nuggets. On a lemonade.",
    ingredients: "Fresh-squeezed lemonade, Mike's Hot Honey, honey-popping juice pearls, two hot-honey battered chicken nuggets.",
    tag: "Sweet + Spicy",
  },
  {
    name: "Tilt-A-Spritz",
    vendor: "Old Fashioned Sipper Club",
    location: "Old Fashioned Sipper Club, near the Carnival Midway",
    image: "/images/sporkies/tilt-a-spritz.png",
    blurb: "A Tilt-A-Whirl in a glass: ruby grapefruit and key lime juices, ginger-beer effervescence, sealed in a smoke box with hickory chips and a torched rosemary sprig. The flashiest finalist of 2026.",
    ingredients: "Ruby grapefruit juice, key lime juice, ginger beer, hickory wood smoke, torched rosemary garnish.",
    tag: "Smoke + Show",
  },
];

const overviewStats = [
  { label: "Fair Dates", value: "Aug 6–16, 2026 · 175th anniversary" },
  { label: "Sporkies Finalists", value: "8 dishes from 29 entries" },
  { label: "Drinkies Finalists", value: "4 drinks from 24 entries" },
  { label: "Judging Day", value: "Tuesday, Aug 4, 2026 (pre-fair)" },
  { label: "Winners Announced", value: "Day after judging — opening weekend" },
  { label: "What Winners Get", value: "Golden Spork & Golden Cup trophies" },
  { label: "Find Finalists By", value: "13-ft Spork or Drinkie statue at booth" },
  { label: "Past Champ", value: "Saz's took the 2024 Sporkies (Deep-Fried Lemonade Bites)" },
];

const navLinks = [
  { href: "#overview", label: "At a Glance" },
  { href: "#what", label: "What They Are" },
  { href: "#sporkies", label: "8 Sporkies" },
  { href: "#drinkies", label: "4 Drinkies" },
  { href: "#judging", label: "Judging" },
  { href: "#map", label: "Where to Find" },
  { href: "#past", label: "Past Winners" },
  { href: "#tips", label: "Tips" },
  { href: "#faq", label: "FAQ" },
];

const pastWinners = [
  { year: "2024", spork: "Deep-Fried Lemonade Bites — Saz's BBQ", drinkie: "Slushie of the Year — Slushie Brothers (Drinkies)" },
  { year: "2023", spork: "Brat Rangoon — On-A-Stick", drinkie: "Inaugural Drinkies year — debuted to mark 10 years of Sporkies" },
  { year: "Earlier", spork: "Past Sporkies winners include Ube Banana Lumpia, the OG Cheese Curd Tacos, and a long line of deep-fried dessert champions.", drinkie: "Sporkies launched in 2013; the contest is one of the most copied fair-food formats in the country." },
];

const judgingNotes = [
  { title: "When Judging Happens", body: "Tuesday, August 4, 2026 — two days before the fair opens. A panel of celebrity judges (revealed by the State Fair closer to the date) tastes every Sporkies dish and every Drinkies drink in a single pre-fair session at State Fair Park." },
  { title: "What Winners Get", body: "The Golden Spork (food) and the Golden Cup (drink). Beyond the hardware, the winning vendors get to sell their item all 11 days of the fair with the title attached — and historically that translates to a season-defining sales bump." },
  { title: "When Winners Are Announced", body: "Winners are revealed publicly just ahead of opening day on Wednesday, August 5 / Thursday, August 6, 2026, via the State Fair's press channels and on-site signage. By the time you walk through the Main Gate, the trophies are already won." },
  { title: "Is There a People's Choice?", body: "The 2026 Sporkies and Drinkies competitions are judged by the celebrity panel — there is no public People's Choice ballot. (The State Fair runs separate People's Choice voting on its broader new-foods lineup; the Sporkies & Drinkies are judges-only.) The closest fan input is the lines that form at each booth all 11 days." },
  { title: "How a Booth Becomes a Finalist", body: "Vendors who sell at the fair submit menu-item entries in the spring (29 Sporkies entries and 24 Drinkies entries this year). State Fair staff narrow the field to 8 Sporkies and 4 Drinkies finalists, announced in late April. Every entered vendor — finalist or not — gets a sticker at their booth so fairgoers can find them." },
];

const fairTips = [
  { title: "Go on a Weekday, Early", body: "Sporkies finalist lines balloon after 4 p.m. on weekends. Tuesday–Thursday between noon and 3 p.m. is the cleanest run at the dishes — and gives you a couple of hours to sleep off the cheese curds before round two." },
  { title: "Split Everything", body: "Eight Sporkies + four Drinkies is 12 items. Even at fair-sample portions that is too much for one person. Bring two or three people, split every order, and you actually get to taste the whole bracket." },
  { title: "Hit Saz's Last", body: "Saz's BBQ has multiple stands on the grounds so the Sweet Lemon Berry Cheese Curds are the easiest finalist to track down all day. Save it for last — it'll be there when nothing else is." },
  { title: "Look for the 13-Foot Spork", body: "A giant 13-foot Spork or Drinkie statue marks every finalist booth in 2026. If you can't find one, the State Fair's printed tear-off map (free at info kiosks) has every finalist plotted." },
  { title: "Pair a Drinkie With a Sporkie", body: "Color-Changing Swamp Juice pairs surprisingly well with the Bayou Crunch Cup — both lean Cajun-coded. The Tilt-A-Spritz cuts through Birria Flamin' Bombs. Cookie Butter Coffee Float is the dessert closer with the Horchata Balls." },
  { title: "Cash a Little, Tap Mostly", body: "State Fair vendors broadly accept tap-to-pay in 2026, but a few smaller booths still prefer cash. Carry $40 in small bills for tips and the corner-case stand." },
  { title: "Pace the Salt", body: "The 2026 lineup leans savory — chicharrones, brats, alligator, birria. Drink water between finalists, not just Drinkies. The Main Gate and Central Mall have free water-bottle filling stations." },
];

const faqs = [
  { q: "What are the Wisconsin State Fair Sporkies?", a: "The Sporkies are the State Fair's annual food competition — vendors submit a single new menu item, a panel of celebrity judges narrows the field to eight finalists, and the winning dish takes home the Golden Spork. The contest launched in 2013 and is one of the most-watched fair-food competitions in the country." },
  { q: "What are the Drinkies?", a: "The Drinkies are the Sporkies' beverage sibling — a four-finalist drink competition that debuted in 2023 to mark the 10th anniversary of the Sporkies. Winners take home the Golden Cup. Drinkies finalists can be alcoholic, non-alcoholic, hot, cold, blended or spectacle-driven (smoke boxes, color-changing potions, edible garnishes)." },
  { q: "Who are the 2026 Sporkies finalists?", a: "Eight dishes from 29 entries: Bayou Crunch Cup (Exotic Meat Grill), Cream City Cone (WürstBar), Tinga Tango Chicharrones (Blue Moon Tavern at the Park), Porky Puff (Bud Pavilion), Deep-Fried Horchata Balls (Badger Bites), Sweet Lemon Berry Cheese Curds (Saz's BBQ), Al Pastor Pizza (Charlie's Pizza), and Birria Flamin' Bombs (Fiesta Grill & Cantina)." },
  { q: "Who are the 2026 Drinkies finalists?", a: "Four drinks from 24 entries: Color-Changing Swamp Juice (All Things Jerky), Cookie Butter Coffee Float (Fluffy's Hand Cut Donuts), Hot Honey Chicken Lemonade (Deep-Fried Mashed Potatoes On-a-Stick), and Tilt-A-Spritz (Old Fashioned Sipper Club)." },
  { q: "When are the 2026 winners announced?", a: "Celebrity judges taste every finalist on Tuesday, August 4, 2026 — two days before the fair opens. Winners are announced publicly just ahead of opening day on August 5–6. The Golden Spork and Golden Cup trophies are awarded; winners get to sell their item all 11 days of the fair with the title attached." },
  { q: "Can the public vote on the Sporkies or Drinkies?", a: "No — the 2026 winners are picked by a panel of celebrity judges, not a public People's Choice vote. The State Fair does run separate People's Choice contests for its broader new-foods lineup, but the Sporkies and Drinkies titles are judges-only. The closest the public gets to a vote is the lines that form at the winning booths." },
  { q: "Where do I find each finalist on the fairgrounds?", a: "Every Sporkies and Drinkies finalist booth has a 13-foot Spork or Drinkie statue parked next to it in 2026 — that is the visual landmark. The State Fair also prints a free tear-off finalists map you can grab at any information kiosk. Saz's BBQ has the easiest finalist to find: multiple stands on the grounds." },
  { q: "When is the Wisconsin State Fair in 2026?", a: "August 6 through August 16, 2026 — eleven days at Wisconsin State Fair Park in West Allis. The 2026 fair is the 175th anniversary of the Wisconsin State Fair (the first was held in 1851), and the Sporkies and Drinkies are part of the marquee programming." },
  { q: "How does a vendor become a Sporkies or Drinkies finalist?", a: "Vendors who already sell at the fair submit a single new menu item in the spring entry window. Staff narrow 29 Sporkies entries down to 8 finalists, and 24 Drinkies entries down to 4 finalists. Every entered vendor — finalist or not — gets a sticker at their booth, so fairgoers can find and try entries that didn't make the cut." },
  { q: "Has any vendor won the Sporkies more than once?", a: "Yes — Saz's BBQ is the most decorated brand in Sporkies history, including the 2024 win with Deep-Fried Lemonade Bites. Saz's is back as a 2026 finalist with Sweet Lemon Berry Cheese Curds — making them one of the favorites going into judging day on August 4." },
];

const VENUE = {
  "@type": "Place",
  name: "Wisconsin State Fair Park",
  address: {
    "@type": "PostalAddress",
    streetAddress: "640 S 84th St",
    addressLocality: "West Allis",
    addressRegion: "WI",
    postalCode: "53214",
    addressCountry: "US",
  },
};

const buildItemList = () => {
  const items = [...sporkies, ...drinkies].map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "MenuItem",
      name: it.name,
      description: it.blurb,
      image: `https://www.discover-milwaukee.com${it.image}`,
      offers: {
        "@type": "Offer",
        seller: { "@type": "FoodEstablishment", name: it.vendor },
        availabilityStarts: "2026-08-06",
        availabilityEnds: "2026-08-16",
        areaServed: "Wisconsin State Fair Park",
        url: "https://wistatefair.com/fair/sporkies/",
      },
    },
  }));
  return items;
};

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wisconsin State Fair Sporkies & Drinkies 2026: All 12 Finalists",
    description: "The definitive 2026 guide to the Wisconsin State Fair Sporkies and Drinkies finalist competitions — all 8 Sporkies dishes, all 4 Drinkies drinks, vendors, locations, judging, and where to find each one on the fairgrounds.",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: "https://www.discover-milwaukee.com/wisconsin-state-fair-sporkies-2026",
    image: "https://www.discover-milwaukee.com/images/sporkies-2026-og.svg",
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Wisconsin State Fair", item: "https://www.discover-milwaukee.com/wisconsin-state-fair-milwaukee" },
      { "@type": "ListItem", position: 3, name: "Sporkies & Drinkies 2026", item: "https://www.discover-milwaukee.com/wisconsin-state-fair-sporkies-2026" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "2026 Wisconsin State Fair Sporkies & Drinkies Finalists",
    description: "All 8 Sporkies food finalists and all 4 Drinkies beverage finalists at the 2026 Wisconsin State Fair, August 6–16 at State Fair Park in West Allis.",
    numberOfItems: 12,
    itemListElement: buildItemList(),
  },
};

export default function SporkiesDrinkies2026() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Wisconsin State Fair Sporkies & Drinkies 2026 Finalists</title>
        <meta name="description" content="Sporkies 2026 finalists — Bayou Crunch Cup, Cream City Cone, Tinga Tango Chicharrones + 5 more — plus the 4 Drinkies at the Wisconsin State Fair." />
        <meta name="keywords" content="wisconsin state fair sporkies 2026, drinkies 2026, bayou crunch cup, cream city cone, tinga tango chicharrones, porky puff, deep fried horchata balls, sweet lemon berry cheese curds, al pastor pizza, birria flamin bombs, color changing swamp juice, cookie butter coffee float, hot honey chicken lemonade, tilt-a-spritz, golden spork, golden cup, state fair park west allis" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/wisconsin-state-fair-sporkies-2026" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Sporkies & Drinkies 2026 — All 12 Wisconsin State Fair Finalists" key="og:title" />
        <meta property="og:description" content="Every 2026 Sporkies and Drinkies finalist at the Wisconsin State Fair — vendors, descriptions, locations, judging day, and how to find each one on the fairgrounds." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/wisconsin-state-fair-sporkies-2026" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/sporkies-2026-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Wisconsin State Fair Sporkies & Drinkies 2026 — All 12 finalists guide. Aug 6–16." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-10T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-10T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Food & Festivals" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Sporkies & Drinkies 2026 — All 12 Wisconsin State Fair Finalists" key="twitter:title" />
        <meta name="twitter:description" content="Every 2026 Sporkies dish and every Drinkies drink — vendors, descriptions, where to find them at State Fair Park." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/sporkies-2026-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 10, 2026 · THE COMPLETE FINALISTS GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Wisconsin State Fair Sporkies & Drinkies 2026</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              8 Sporkies finalists · 4 Drinkies finalists · Verified June 2026. Every vendor, every dish, every drink, and where to find each one on the fairgrounds during the 175th Wisconsin State Fair, August 6–16.
            </p>
          </div>
        </header>

        <nav style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: c.green1,
          borderBottom: `2px solid ${c.green2}`,
          padding: "12px 16px",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}>
          <div style={{ display: "flex", gap: "8px", maxWidth: "1000px", margin: "0 auto", whiteSpace: "nowrap" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: c.cream,
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(244,162,97,0.15)",
                  border: `1px solid rgba(244,162,97,0.3)`,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "880px", margin: "0 auto", padding: "40px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Heads up:</strong> Finalist vendors and dish descriptions are verified to the Wisconsin State Fair announcement (April 28, 2026). Exact booth locations on the fairgrounds are finalized closer to opening day — look for the 13-foot Spork or Drinkie statue at each finalist booth. Confirm with wistatefair.com the day you go.
            </p>
          </div>

          <section id="overview" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Sporkies & Drinkies 2026 at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The fastest summary of the 2026 finalists, judging day, and the 11-day fair window where you can actually taste them.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "12px" }}>
              {overviewStats.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="what" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>What the Sporkies & Drinkies Are</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              A short history of how Wisconsin's most-photographed fair food competition got started — and why every vendor pours their best new idea into the entry window every spring.
            </p>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "16px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>The Sporkies (since 2013)</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                The Wisconsin State Fair launched the Sporkies in 2013 as a way to spotlight the wildest, most-creative new dish on the fairgrounds each year. Vendors who already sell at the fair submit a single new menu item — historically anything from deep-fried lemonade bites to ube banana lumpia to brat rangoon. Staff pick eight finalists, a panel of celebrity judges tastes them in a single pre-fair session, and the winner takes home the Golden Spork. Now in its 13th year, the Sporkies has become one of the most-copied state fair food formats in the country.
              </p>
            </div>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>The Drinkies (since 2023)</h3>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                The Drinkies debuted in 2023 to mark the Sporkies' 10th anniversary — a four-finalist beverage competition with the same format and the same vendor pool. Winners take home the Golden Cup. Drinkies finalists trend toward spectacle: color-changing syringe potions, smoke-box spritzes, edible garnishes that clip onto the rim. 2026 is the Drinkies' fourth year, with 24 entries narrowed to four finalists.
              </p>
            </div>
          </section>

          <section id="sporkies" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The 8 Sporkies Finalists</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
              Eight dishes, 29 entries, one Golden Spork on the line. Vendors and descriptions verified to the Wisconsin State Fair's official announcement.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {sporkies.map((s) => (
                <div key={s.name} style={{
                  backgroundColor: "white",
                  border: `1px solid ${c.beige}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{ aspectRatio: "16 / 10", backgroundColor: c.beige, backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{ padding: "18px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", margin: "0 0 6px", textTransform: "uppercase" }}>{s.tag}</p>
                    <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 4px", lineHeight: 1.25 }}>{s.name}</h3>
                    <p style={{ color: c.green2, fontSize: "13px", fontWeight: "700", margin: "0 0 10px" }}>{s.vendor}</p>
                    <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: "0 0 12px" }}>{s.blurb}</p>
                    <div style={{ backgroundColor: c.cream, padding: "10px 12px", borderRadius: "8px", marginBottom: "10px" }}>
                      <p style={{ fontSize: "10px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 4px", textTransform: "uppercase" }}>In the Build</p>
                      <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{s.ingredients}</p>
                    </div>
                    <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.5 }}><strong style={{ color: c.green1 }}>Find it:</strong> {s.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="drinkies" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The 4 Drinkies Finalists</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
              Four drinks, 24 entries, one Golden Cup on the line. The 2026 Drinkies lean spectacle — syringes, smoke boxes, chicken nuggets on the rim of a lemonade.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {drinkies.map((d) => (
                <div key={d.name} style={{
                  backgroundColor: "white",
                  border: `2px solid ${c.orange}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{ aspectRatio: "16 / 10", backgroundColor: c.beige, backgroundImage: `url(${d.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{ padding: "18px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", margin: "0 0 6px", textTransform: "uppercase" }}>{d.tag}</p>
                    <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 4px", lineHeight: 1.25 }}>{d.name}</h3>
                    <p style={{ color: c.green2, fontSize: "13px", fontWeight: "700", margin: "0 0 10px" }}>{d.vendor}</p>
                    <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: "0 0 12px" }}>{d.blurb}</p>
                    <div style={{ backgroundColor: c.cream, padding: "10px 12px", borderRadius: "8px", marginBottom: "10px" }}>
                      <p style={{ fontSize: "10px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 4px", textTransform: "uppercase" }}>In the Glass</p>
                      <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{d.ingredients}</p>
                    </div>
                    <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.5 }}><strong style={{ color: c.green1 }}>Find it:</strong> {d.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="judging" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Judging Day & How the Winners Are Picked</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The Sporkies and Drinkies winners are actually crowned before the fair opens — by the time you walk in on Wednesday, the trophies are already won.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {judgingNotes.map((j) => (
                <div key={j.title} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 8px" }}>{j.title}</h4>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{j.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="map" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Where to Find Each Finalist on the Fairgrounds</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              A by-area summary of where the 12 finalist booths sit. Every finalist booth has a 13-foot Spork or Drinkie statue planted next to it as your visual landmark in 2026 — and a free tear-off map at any information kiosk plots every booth.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>Central Mall</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  The dense middle of the fairgrounds — start here. Bayou Crunch Cup (Exotic Meat Grill), Porky Puff (Bud Pavilion), Al Pastor Pizza (Charlie's Pizza) and Hot Honey Chicken Lemonade (Deep-Fried Mashed Potatoes On-a-Stick) all sit in or right off Central Mall.
                </p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>Main Street</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  The long north-south spine. Cream City Cone (WürstBar) and Cookie Butter Coffee Float (Fluffy's Hand Cut Donuts) anchor this corridor. Easy walking from the Main Gate.
                </p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>Grandstand Avenue</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  South-side stretch near the Grandstand. Deep-Fried Horchata Balls (Badger Bites) and Color-Changing Swamp Juice (All Things Jerky) are here — pair them as a sweet-spectacle one-two.
                </p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>Main Gate Plaza</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  Blue Moon Tavern at the Park — home of the Tinga Tango Chicharrones — sits in the plaza near the Main Gate. First or last stop, depending on the day.
                </p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>South Gate Area</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  Fiesta Grill & Cantina — Birria Flamin' Bombs — operates closer to the South Gate. Hit it on your way in or out from the south parking lots.
                </p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>Carnival Midway</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  Old Fashioned Sipper Club — Tilt-A-Spritz — lives near the carnival rides. The smoke-box presentation is a built-for-Instagram stop before or after the Tilt-A-Whirl.
                </p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px", gridColumn: "1 / -1" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 8px" }}>Multiple Stands — Saz's BBQ</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  Saz's BBQ runs more than one stand on the fairgrounds, so the Sweet Lemon Berry Cheese Curds are the easiest finalist to track down all day. If you only get one Sporkies stop in, this is the safe pick — and Saz's is the reigning 2024 Sporkies champ.
                </p>
              </div>
            </div>
          </section>

          <section id="past" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Iconic Past Winners</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Short context for first-timers — the dishes and drinks that built the Sporkies' reputation and made Saz's the brand to beat.
            </p>
            {pastWinners.map((w) => (
              <div key={w.year} style={{
                backgroundColor: "white",
                border: `1px solid ${c.beige}`,
                borderLeft: `5px solid ${c.orange}`,
                borderRadius: "12px",
                padding: "16px 18px",
                marginBottom: "12px",
              }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", margin: "0 0 6px", textTransform: "uppercase" }}>{w.year}</p>
                <p style={{ color: c.green1, fontSize: "15px", margin: "0 0 6px", fontWeight: "700" }}>Sporkies: {w.spork}</p>
                <p style={{ color: "#555", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Drinkies / Note: {w.drinkie}</p>
              </div>
            ))}
          </section>

          <section id="tips" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Tips for Fair-Going Foodies</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The strategy locals use to taste the whole Sporkies + Drinkies bracket without blowing your budget or your stomach.
            </p>
            {fairTips.map((t) => (
              <div key={t.title} style={{
                backgroundColor: "white",
                border: `1px solid ${c.beige}`,
                borderLeft: `5px solid ${c.green2}`,
                borderRadius: "12px",
                padding: "16px 18px",
                marginBottom: "12px",
              }}>
                <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 6px" }}>{t.title}</h4>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </section>

          <section id="faq" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Tap a question to expand. Covers the 2026 finalists, judging, voting, where to find them and the contest's history.
            </p>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{
                  backgroundColor: "white",
                  border: `1px solid ${c.beige}`,
                  borderRadius: "12px",
                  marginBottom: "10px",
                  overflow: "hidden",
                }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      backgroundColor: isOpen ? c.cream : "white",
                      border: "none",
                      padding: "16px 18px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: c.green1,
                    }}
                  >
                    <span>{f.q}</span>
                    <span style={{
                      fontSize: "20px",
                      color: c.orange,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.15s",
                      fontWeight: "300",
                    }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px", color: "#444", fontSize: "14px", lineHeight: 1.7, borderTop: `1px solid ${c.beige}` }}>
                      <p style={{ margin: "12px 0 0" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food & Festival Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/wisconsin-state-fair-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Wisconsin State Fair Guide</Link>
              <Link href="/summerfest-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Summerfest 2026</Link>
              <Link href="/best-fish-fry-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Fish Fry</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.yellow, color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "700", textAlign: "center" }}>Things To Do</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>State Fair picks, new restaurants, events, and insider picks every Wednesday.</p>
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
