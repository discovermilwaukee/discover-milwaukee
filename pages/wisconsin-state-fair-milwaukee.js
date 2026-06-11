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

const dailySchedule = [
  { date: "Thu, Aug 6", hours: "10 a.m. – midnight", theme: "Opening Day · Piggly Wiggly $5 Day (10 a.m.–4 p.m.) — donate 2 nonperishable food items or cash to Hunger Task Force for $5 admission. Main Stage: Hairball (80s rock tribute)." },
  { date: "Fri, Aug 7", hours: "10 a.m. – midnight", theme: "Celebrate Wisconsin Day, presented by Travel Wisconsin (10 a.m.–6 p.m.) — out-of-state visitors get 2 adult admissions for $20. Main Stage: Nelly. Free amphitheater: Here Come the Mummies." },
  { date: "Sat, Aug 8", hours: "10 a.m. – midnight", theme: "First Saturday — peak crowds expected. Main Stage: Bailey Zimmerman (country). Free amphitheater: Here Come the Mummies (night 2)." },
  { date: "Sun, Aug 9", hours: "10 a.m. – 10 p.m.", theme: "Network Health Military Appreciation Day (10 a.m.–4 p.m.) — free admission for veterans, active military and their families with ID (limit 4 per ID). Main Stage: Wynonna Judd & Melissa Etheridge (Raised On Radio Tour). Free amphitheater: Claire Sardina's Neil Diamond tribute." },
  { date: "Mon, Aug 10", hours: "10 a.m. – 10 p.m.", theme: "Capri Communities Senior Day (10 a.m.–4 p.m.) — fairgoers 60+ pay $7 at the gate with valid ID. Main Stage: for KING + COUNTRY. Free amphitheater: Herman's Hermits starring Peter Noone." },
  { date: "Tue, Aug 11", hours: "10 a.m. – 10 p.m.", theme: "Milwaukee Bucks Kids Day in Central Park (10 a.m.–4 p.m.) — Bango appearances, Bucks Entertainment, souvenirs. (Bango's Kids Club members ages 6–11 who signed up in July get a free youth ticket.) Main Stage: The Isley Brothers. Free amphitheater: Herman's Hermits (night 2)." },
  { date: "Wed, Aug 12", hours: "10 a.m. – 10 p.m.", theme: "Meijer Day (10 a.m.–4 p.m.) — $5 off one adult admission with a Wisconsin Meijer receipt of $40+ dated July 13–Aug 12. Main Stage: John Mulaney (comedy)." },
  { date: "Thu, Aug 13", hours: "10 a.m. – midnight", theme: "Prairie Farms Dairy Day Honoring Educators (10 a.m.–4 p.m.) — free admission for educators with a school-issued ID or name badge. Main Stage: The All-American Rejects." },
  { date: "Fri, Aug 14", hours: "10 a.m. – midnight", theme: "Second Friday — second-weekend crowds build. Main Stage: Lindsey Stirling (electronic violin)." },
  { date: "Sat, Aug 15", hours: "10 a.m. – midnight", theme: "Final Saturday — peak attendance day historically. Main Stage: AJR. Free amphitheater: Taylor Swift tribute show." },
  { date: "Sun, Aug 16", hours: "10 a.m. – 10 p.m.", theme: "Closing Day. Main Stage: The Beach Boys. Free amphitheater: Pat McCurdy." },
];

const admissionTiers = [
  { tier: "Adult (12 & over)", advance: "$15 (advance, online before fair)", gate: "$20" },
  { tier: "Senior (60 & over)", advance: "—", gate: "$15 (Senior Day Mon 8/10: $7 with ID, 10 a.m.–4 p.m.)" },
  { tier: "Military / Veterans (with ID)", advance: "—", gate: "$15 (FREE on Sun 8/9 Network Health Military Day, 10 a.m.–4 p.m., limit 4 per ID)" },
  { tier: "Youth (ages 6–11)", advance: "—", gate: "$13 (FREE for Bango's Kids Club members who signed up in July)" },
  { tier: "Children (5 & under)", advance: "—", gate: "FREE" },
  { tier: "Group rate (20+)", advance: "Available — contact Wisconsin State Fair Group Sales", gate: "—" },
];

const iconicFoods = [
  { name: "Original Cream Puff", vendor: "Wisconsin Bakers Association — The Dairy Building", note: "Since 1924. ~350,000 sold per fair. Available single or in 6-pack vouchers ($22). Get one at the bakery counter inside The Dairy Building or at the Cream Puff Express Window outside the north end of the building." },
  { name: "Chocolate Cream Puff", vendor: "Wisconsin Bakers Association — The Dairy Building", note: "Available throughout the fair alongside the Original. Chocolate pastry shell, same fresh whipped cream filling." },
  { name: "Wisconsin Cheese Curds", vendor: "Multiple — Original House of Cheese Curds and 10+ vendors", note: "Squeaky, deep-fried, served by the basket. The benchmark Wisconsin fair food alongside the cream puff." },
  { name: "Saz's BBQ Pork Sandwich", vendor: "Saz's BBQ (Saz's State Fair location) and Saz's Miller High Life Pavilion", note: "Slow-smoked pork with Saz's original sauce. Sliders also available." },
  { name: "Saz's Famous Racing Pigs", vendor: "Saz's Racing Pigs Arena (presented by Milwaukee Admirals)", note: "Not a food — but the Saz's-sponsored pig races are a Fair institution. Free with admission, multiple races daily." },
  { name: "Corn Dogs", vendor: "Multiple stands fair-wide", note: "Hand-dipped on-site. Look for the long-running stands near the Grand Avenue and Central Park areas." },
  { name: "Roasted Sweet Corn", vendor: "Wisconsin Corn Promotion Board stand", note: "Wisconsin-grown, roasted in the husk, brushed with butter. A staple at the corn pavilion every year." },
  { name: "Cheese-on-a-Stick", vendor: "Multiple stands", note: "Battered, fried mozzarella block on a skewer. Cousin to the cheese curd." },
  { name: "Flavored Milk", vendor: "Wisconsin Dairy Promotion / The Dairy Building", note: "Strawberry, chocolate, root beer float and rotating flavors. Cold, cheap, refilled by the cup." },
  { name: "Foot-long Hot Dogs & Brats", vendor: "Klement's, Usinger's and others", note: "Wisconsin sausage country — brats are a near-mandatory order." },
  { name: "The Sporkies finalists (2026)", vendor: "Look for the 13-foot finalist statues at each vendor", note: "Bayou Crunch Cup, Birria Flamin' Bombs, Cream City Cone and Sweet Lemon Berry Cheese Curds (Saz's) are among the 8 finalists. Winners announced opening week." },
  { name: "The Drinkies finalists (2026)", vendor: "Various beverage vendors", note: "Hot Honey Chicken Lemonade, Tilt-a-Spritz, Color-Changing Swamp Juice and Cookie Butter Coffee Float are the 4 finalists." },
  { name: "Deep-fried everything", vendor: "Fair-wide", note: "Cheesecake, Oreos, butter, pickles, candy bars — it changes year to year but the deep-fryer section is half the appeal." },
  { name: "On-a-stick anything", vendor: "Fair-wide", note: "Pork chop on a stick, ribeye on a stick, pickle on a stick, mac-and-cheese on a stick. The State Fair runs on sticks." },
];

const discountDays = [
  { day: "Thu, Aug 6", name: "Opening Day — Piggly Wiggly $5 Day", time: "10 a.m. – 4 p.m.", deal: "$5 admission with 2 nonperishable food items or a cash donation benefiting Hunger Task Force." },
  { day: "Fri, Aug 7", name: "Celebrate Wisconsin Day (presented by Travel Wisconsin)", time: "10 a.m. – 6 p.m.", deal: "Out-of-state visitors: 2 adult admissions for $20 (with valid out-of-state ID)." },
  { day: "Sun, Aug 9", name: "Network Health Military Appreciation Day", time: "10 a.m. – 4 p.m.", deal: "FREE admission for veterans, active military and their families with valid military ID — limit 4 admissions per ID." },
  { day: "Mon, Aug 10", name: "Capri Communities Senior Day", time: "10 a.m. – 4 p.m.", deal: "$7 admission for fairgoers 60+ with valid ID (vs. $15 standard senior price)." },
  { day: "Tue, Aug 11", name: "Milwaukee Bucks Kids Day", time: "10 a.m. – 4 p.m.", deal: "Activities, Bango appearances and souvenirs in Central Park. Bango's Kids Club members ages 6–11 (sign-up in July) get a free youth admission." },
  { day: "Wed, Aug 12", name: "Meijer Day", time: "10 a.m. – 4 p.m.", deal: "$5 off one adult admission with a Wisconsin Meijer receipt of $40+ dated between July 13 and Aug 12." },
  { day: "Thu, Aug 13", name: "Prairie Farms Dairy Day Honoring Educators", time: "10 a.m. – 4 p.m.", deal: "FREE admission for educators with a school-issued ID or name badge." },
];

const faqs = [
  {
    question: "When is the Wisconsin State Fair 2026?",
    answer: "The 2026 Wisconsin State Fair, presented by T-Mobile, runs Thursday, August 6 through Sunday, August 16 — 11 days. It's the fair's 175th anniversary. Hours are 10 a.m.–10 p.m. Sunday through Wednesday and 10 a.m.–midnight Thursday through Saturday. Ticket sales and entry to the park end one hour before closing. Most buildings close at 9 p.m., except The Dairy Building and Wisconsin Products Pavilion, which stay open until 10 p.m."
  },
  {
    question: "Where is the Wisconsin State Fair held?",
    answer: "Wisconsin State Fair Park, 640 S. 84th St., West Allis, WI 53214 — about 10 minutes west of downtown Milwaukee off I-94. The park sits right next to the Milwaukee Mile. There are multiple entrance gates; the main entrance is Gate 7 (U.S. Cellular / Main Entrance E) on 84th Street."
  },
  {
    question: "How much does it cost to get into the Wisconsin State Fair in 2026?",
    answer: "Gate admission for 2026: adults (12 & over) $20, seniors (60+) $15, military/veterans with ID $15, youth (ages 6–11) $13, children 5 and under FREE. Buying online in advance before the fair starts drops the adult ticket to $15. Multiple discount days bring admission well below the standard rate — Piggly Wiggly $5 Day on opening Thursday (8/6) is the cheapest way in if you can swing the donation, and Sunday 8/9 (Military) and Thursday 8/13 (Educators) are FREE for those who qualify."
  },
  {
    question: "How much is parking at the Wisconsin State Fair?",
    answer: "Onsite parking at State Fair Park is $30 per vehicle Monday–Thursday and $36 per vehicle Friday–Sunday. Parking is CASHLESS — credit/debit only. Buying your parking pass online in advance means a faster entry into the lot. A limited number of Preferred Parking spaces (same price) sit near the Main Stage Entrance (via Gate 1), the Main Entrance E (via Gate 7), and the Tunnel Entrance F (via Gate 9). If $36 feels steep, take a Dousman shuttle for $15 round-trip — see the parking section above."
  },
  {
    question: "How much do Wisconsin State Fair cream puffs cost — and where do I buy them?",
    answer: "Single Original Cream Puffs and Chocolate Cream Puffs are sold at the bakery counter inside The Dairy Building (the historic building formerly called the Original Cream Puff Pavilion) and at the Cream Puff Express Window on the north end of the building — that's the fastest grab-and-go option. A 6-pack voucher costs $22 in advance. The cream puff has been served at this fair every year since 1924, and roughly 350,000 are sold across the 11-day run — about 30,000 a day. Pre-orders for pickup are available through originalcreampuffs.com if you want to skip the line."
  },
  {
    question: "Who is playing the Main Stage at the 2026 Wisconsin State Fair?",
    answer: "The 2026 Bank Five Nine Main Stage lineup (paid concerts, separate ticket): Aug 6 Hairball, Aug 7 Nelly, Aug 8 Bailey Zimmerman, Aug 9 Wynonna Judd & Melissa Etheridge (Raised On Radio Tour), Aug 10 for KING + COUNTRY, Aug 11 The Isley Brothers, Aug 12 John Mulaney (comedy), Aug 13 The All-American Rejects, Aug 14 Lindsey Stirling, Aug 15 AJR, Aug 16 The Beach Boys. Free amphitheater highlights include Here Come the Mummies (Aug 7–8), Herman's Hermits starring Peter Noone (Aug 10–11), a Claire Sardina Neil Diamond tribute (Aug 9), a Taylor Swift tribute (Aug 15) and Pat McCurdy (Aug 16). All concert details on wistatefair.com/entertainment."
  },
  {
    question: "Is there free entertainment at the Wisconsin State Fair?",
    answer: "Yes — most entertainment at the fair is free with admission. The Bank Five Nine Amphitheater hosts free nightly concerts all 11 days. Dozens of additional free stages run regional bands and family programming across the grounds. Saz's Famous Racing Pigs (presented by the Milwaukee Admirals) race multiple times daily. The new 230-foot America 250 Wheel debuts in 2026. Coliseum livestock judging, the Compeer Financial Discovery Barnyard, the Wisconsin Products Pavilion and the Cream Puff Bakery viewing are all free walk-ins."
  },
  {
    question: "How much are SpinCity ride wristbands and how do rides work?",
    answer: "SpinCity is the fair's midway. Single-day wristbands sold onsite on weekdays (Monday–Friday) are $45 and good for unlimited rides from 11 a.m.–7 p.m. that day. An Any Day Wristband (good for unlimited rides on a single day Mon–Sun) is sold ONLY online in advance — it's not available at the fair. Wristbands are good for rides only, not midway games. Voucher holders must redeem at the SpinCity Redemption Booth on the Grand Walkway by 5 p.m. Individual ride tickets are also sold for pay-per-ride."
  },
  {
    question: "What are the best discount days at the 2026 Wisconsin State Fair?",
    answer: "The headline discount days for 2026 are: Thursday Aug 6 (Piggly Wiggly $5 Day — $5 admission with a Hunger Task Force food/cash donation, 10 a.m.–4 p.m.), Sunday Aug 9 (Network Health Military Day — FREE for military/veterans + families with ID, limit 4 per ID, 10 a.m.–4 p.m.), Monday Aug 10 (Capri Communities Senior Day — $7 for 60+ with ID, 10 a.m.–4 p.m.), Wednesday Aug 12 (Meijer Day — $5 off one adult with a Wisconsin Meijer receipt of $40+, 10 a.m.–4 p.m.), and Thursday Aug 13 (Prairie Farms Educators Day — FREE for educators with school ID, 10 a.m.–4 p.m.). Friday Aug 7 is Celebrate Wisconsin Day with a 2-for-$20 out-of-state visitor deal."
  },
  {
    question: "Can I take a shuttle to the Wisconsin State Fair instead of driving?",
    answer: "Yes. Dousman Transport Co. runs Park & Ride shuttles to the fair for $15 per person. Two confirmed 2026 routes: one starts at the Mukwonago Park & Ride and stops at Big Bend and Hales Corners Park & Rides before the fair; the other starts at the Nagawaukee Park & Ride and stops at Pewaukee and Goerke's Corners Park & Rides. MCTS local Route 18 (National Avenue) and Route 33 (Vliet–84th) also serve the fair on regular daily schedules. Plan to arrive 15 minutes before listed departure times — confirm current schedules on wistatefair.com/fair/shuttles-transit or statefairshuttle.com."
  },
];

const atAGlance = [
  { label: "2026 Dates", value: "Thu, Aug 6 – Sun, Aug 16 · 11 days · 175th anniversary" },
  { label: "Address", value: "Wisconsin State Fair Park, 640 S 84th St, West Allis, WI 53214" },
  { label: "Adult Admission (advance)", value: "$15 online before fair · $20 at the gate" },
  { label: "Kids 5 & Under", value: "FREE always · Youth 6–11: $13 at gate" },
  { label: "Cream Puff (Dairy Bldg.)", value: "Since 1924 · ~350,000 sold per fair · 6-pack voucher $22" },
  { label: "Onsite Parking", value: "$30 Mon–Thu · $36 Fri–Sun · cashless (credit/debit only)" },
  { label: "Park & Ride Shuttle", value: "$15 per person via Dousman Transport (Mukwonago, Pewaukee + 4 stops)" },
  { label: "SpinCity Wristband", value: "$45 weekday onsite · single-day, 11 a.m.–7 p.m." },
  { label: "Gate Hours", value: "Sun–Wed 10 a.m.–10 p.m. · Thu–Sat 10 a.m.–midnight" },
  { label: "Cheapest Way In", value: "Opening Day Piggly Wiggly $5 (10 a.m.–4 p.m., food or cash donation)" },
];

const rentals = [
  { item: "Single Stroller", price: "$15" },
  { item: "Wagon", price: "$20" },
  { item: "Wheelchair", price: "$30" },
  { item: "Electric Scooter", price: "$70" },
];

const animalBarns = [
  { barn: "Upper & Lower Cattle Barns + Dairy Lane", animals: "~1,100 dairy cattle + ~500 beef cattle judged each year. Dairy classes judged in The Coliseum. Milking Parlor demos daily." },
  { barn: "Sheep & Goat Barn", animals: "~1,300 sheep + ~1,200 goats shown across the run." },
  { barn: "Piggly Wiggly Swine & Goat Barn", animals: "~1,000 swine + goats shown (the barn houses both species). Saz's Famous Racing Pigs perform in a nearby arena throughout the fair." },
  { barn: "Livestock Horse Barn + \"Neigh\"borhood Corral", animals: "~400 horses shown across breeds — draft horse hitches and the Coliseum horse shows are crowd favorites." },
  { barn: "Compeer Financial Discovery Barnyard", animals: "Walk-through kid-friendly barn — chicks, baby pigs, calves, lambs, goats up close. The best stop with young kids." },
  { barn: "The Coliseum", animals: "Main show ring for cattle, horses and the Governor's Blue Ribbon Livestock Auction. Free seating; check daily schedule for show times." },
];

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#daily", label: "Daily Schedule" },
  { href: "#admission", label: "Tickets" },
  { href: "#cream-puffs", label: "Cream Puffs" },
  { href: "#food", label: "Food" },
  { href: "#entertainment", label: "Entertainment" },
  { href: "#discounts", label: "Discount Days" },
  { href: "#rides", label: "SpinCity" },
  { href: "#animals", label: "Animals" },
  { href: "#parking", label: "Parking" },
  { href: "#faq", label: "FAQ" },
];

const structuredData = {
  event: {
    "@context": "https://schema.org",
    "@type": "Festival",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    name: "Wisconsin State Fair 2026",
    description: "The 175th Wisconsin State Fair, presented by T-Mobile — 11 days of food, free concerts, rides, animals and the iconic Original Cream Puff at Wisconsin State Fair Park in West Allis.",
    startDate: "2026-08-06T10:00:00-05:00",
    endDate: "2026-08-16T22:00:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
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
    },
    image: "https://www.discover-milwaukee.com/images/wisconsin-state-fair-og.svg",
    offers: {
      "@type": "Offer",
      url: "https://wistatefair.com/fair/tickets/",
      price: "15",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01T00:00:00-06:00",
      description: "Adult advance ticket $15 (online before fair); $20 at the gate. Youth 6–11 $13; under 6 free; seniors 60+ and military with ID $15.",
    },
    organizer: {
      "@type": "Organization",
      name: "Wisconsin State Fair",
      url: "https://wistatefair.com",
    },
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
      { "@type": "ListItem", position: 2, name: "Wisconsin State Fair", item: "https://www.discover-milwaukee.com/wisconsin-state-fair-milwaukee" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wisconsin State Fair 2026 Daily Discount Days",
    description: "Verified daily discount and theme days for the 2026 Wisconsin State Fair, August 6–16.",
    numberOfItems: discountDays.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: discountDays.map((d, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Event",
        name: d.name,
        description: `${d.deal} (Active ${d.time}.)`,
        startDate: `2026-08-${String(6 + idx + (idx >= 2 ? 1 : 0)).padStart(2, "0")}T10:00:00-05:00`,
        location: {
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
        },
      },
    })),
  },
};

export default function WisconsinStateFairMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Wisconsin State Fair 2026 | Dates, Tickets, Cream Puffs</title>
        <meta name="description" content="Wisconsin State Fair 2026 guide (Aug 6–16, West Allis): verified dates, ticket prices, parking, free concerts, cream puffs, discount days, food." />
        <meta name="keywords" content="wisconsin state fair 2026, wisconsin state fair dates 2026, wisconsin state fair tickets, wisconsin state fair cream puffs, wisconsin state fair parking, wisconsin state fair main stage 2026, west allis state fair, milwaukee state fair, wisconsin state fair discount days" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/wisconsin-state-fair-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Wisconsin State Fair 2026 | Dates, Tickets, Cream Puffs" key="og:title" />
        <meta property="og:description" content="Verified 2026 Wisconsin State Fair guide — Aug 6–16 in West Allis. Tickets, parking, cream puffs, free concerts, daily discount days, animals and the SpinCity midway." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/wisconsin-state-fair-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/wisconsin-state-fair-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Wisconsin State Fair 2026 — Aug 6–16 in West Allis: cream puffs, free concerts, daily discount days." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-07T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-07T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Events" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Wisconsin State Fair 2026 | Dates, Tickets, Cream Puffs" key="twitter:title" />
        <meta name="twitter:description" content="Verified Aug 6–16 dates, ticket prices, cream puffs, free concerts, parking, discount days." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/wisconsin-state-fair-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.event) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 7, 2026 · VERIFIED AGAINST WISTATEFAIR.COM</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Wisconsin State Fair 2026: The Complete Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
              <strong>Thursday, August 6 – Sunday, August 16, 2026</strong> at Wisconsin State Fair Park in West Allis — the fair's <strong>175th anniversary</strong>. Verified ticket prices, parking, free concerts, cream puffs, daily discount days, the SpinCity midway, animal barns and every theme day for the 11-day run.
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
              <strong>Heads up:</strong> Every date, price and lineup item below was cross-checked against wistatefair.com and Milwaukee press in June 2026. Concert lineups, daily theme times and SpinCity hours can shift — always confirm same-day specifics (especially weather-affected schedules and Main Stage start times) on the official site before you go.
            </p>
          </div>


          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Event</dt>
              <dd style={{ color: "#444", margin: 0 }}>2026 Wisconsin State Fair (175th anniversary)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Dates</dt>
              <dd style={{ color: "#444", margin: 0 }}>August 6–16, 2026</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Location</dt>
              <dd style={{ color: "#444", margin: 0 }}>640 S 84th St, West Allis, WI 53214</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Adult admission</dt>
              <dd style={{ color: "#444", margin: 0 }}>$20 gate · $15 advance</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Senior 60+ / Military / Youth 6–11</dt>
              <dd style={{ color: "#444", margin: 0 }}>$15 / $15 / $13 — kids 5 & under free</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Cream Puffs</dt>
              <dd style={{ color: "#444", margin: 0 }}>$5 single, $22 6-pack voucher, sold at the Dairy Building</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Parking</dt>
              <dd style={{ color: "#444", margin: 0 }}>$30 Mon–Thu · $36 Fri–Sun (cashless only)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Main Stage 2026 highlights</dt>
              <dd style={{ color: "#444", margin: 0 }}>Nelly, Wynonna & Etheridge, for KING+COUNTRY, John Mulaney, AJR, The Beach Boys</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/fair/fair-cream-puff.jpg" alt="Wisconsin State Fair Original Cream Puffs displayed at Wisconsin State Fair Park" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The iconic Original Cream Puffs — sold since 1924.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/fair/fair-cream-puff-pavilion.jpg" alt="Wisconsin State Fair Original Cream Puff Pavilion exterior at Wisconsin State Fair Park in West Allis" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Original Cream Puff Pavilion (now the Dairy Building).</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/fair/fair-main-entrance.jpg" alt="Wisconsin State Fair Main Entrance panorama showing carnival rides and the front gate at Wisconsin State Fair Park" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Panorama of the Main Entrance and SpinCity midway.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/fair/fair-grandstand-avenue.jpg" alt="Wisconsin State Fair Grandstand Avenue viewed from the SkyGlider above the fairgrounds" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Grandstand Avenue from the SkyGlider overhead trolley.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#999", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. Credits: Michael Barera (CC-BY-SA-4.0); Michael Barera (CC-BY-SA-4.0); Corey Coyle (CC-BY-3.0); Michael Barera (CC-BY-SA-4.0).
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Wisconsin State Fair 2026 at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The numbers you need before you book parking or buy tickets.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="daily" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>11-Day Schedule: Hours, Themes & Main Stage</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Every day of the 2026 fair — gate hours, daily theme/discount and the night's Main Stage headliner. Buildings close at 9 p.m. except The Dairy Building and Wisconsin Products Pavilion (10 p.m.).</p>
            {dailySchedule.map((d) => (
              <div key={d.date} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: 0 }}>{d.date}</h3>
                  <span style={{ backgroundColor: c.green1, color: c.yellow, padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>{d.hours}</span>
                </div>
                <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>{d.theme}</p>
              </div>
            ))}
          </section>

          <section id="admission" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 Admission Tiers</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Buying online in advance is the single biggest standard-day savings ($15 vs $20 at the gate for adults). See the Discount Days section for cheaper one-day options.</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.beige}` }}>
                <thead>
                  <tr style={{ backgroundColor: c.green1 }}>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "700" }}>Tier</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "700" }}>Advance</th>
                    <th style={{ color: c.cream, padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "700" }}>Gate</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionTiers.map((t, i) => (
                    <tr key={t.tier} style={{ backgroundColor: i % 2 === 0 ? c.cream : "white" }}>
                      <td style={{ padding: "12px", fontSize: "13px", color: c.green1, fontWeight: "700", verticalAlign: "top" }}>{t.tier}</td>
                      <td style={{ padding: "12px", fontSize: "13px", color: "#444", verticalAlign: "top" }}>{t.advance}</td>
                      <td style={{ padding: "12px", fontSize: "13px", color: "#444", verticalAlign: "top" }}>{t.gate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "#666", fontSize: "13px", marginTop: "12px" }}>Source: wistatefair.com/fair/tickets — confirmed June 2026.</p>
          </section>

          <section id="cream-puffs" style={{ marginBottom: "56px", scrollMarginTop: "80px", backgroundColor: c.green1, padding: "32px", borderRadius: "16px" }}>
            <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px" }}>THE FAIR'S SIGNATURE ITEM</p>
            <h2 style={{ color: c.cream, fontSize: "30px", fontWeight: "900", marginBottom: "16px" }}>The Original Cream Puff</h2>
            <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>
              The Wisconsin State Fair cream puff has been served at this fair every year since <strong>1924</strong> — created by Wisconsin food inspector Charles Kremer at the request of Governor John Blaine to showcase the state's dairy industry. The recipe today is essentially Kremer's original: choux pastry shell, fresh sweetened whipped cream filling, dusted in powdered sugar.
            </p>
            <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              An average of <strong>roughly 350,000 cream puffs</strong> are sold across the 11-day fair — about <strong>30,000 per day</strong>. The Wisconsin Bakers Association operates the bakery and the express window.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>WHERE TO BUY</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>The Dairy Building (the historic building formerly called the Original Cream Puff Pavilion, ovens added in 1924). The bakery counter is inside; the Cream Puff Express Window is on the north end of the building for grab-and-go.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>PRICING</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>Singles sold at the bakery and the express window (check the menu board onsite for the current single price). 6-pack vouchers $22 sold online and at the bakery.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>SKIP THE LINE</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>Pre-order for pickup at originalcreampuffs.com — a limited number of cream puffs is also held back for walk-up orders. The Spring Fling Drive-In runs separately in April, not during the August fair.</p>
              </div>
              <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px" }}>
                <p style={{ color: c.yellow, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", marginBottom: "6px" }}>CHOCOLATE OPTION</p>
                <p style={{ color: c.cream, fontSize: "14px", margin: 0, lineHeight: 1.5 }}>A Chocolate Cream Puff (chocolate-flavored pastry shell, same whipped cream filling) is available throughout the fair alongside the Original at the Dairy Building.</p>
              </div>
            </div>
          </section>

          <section id="food" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Iconic State Fair Foods</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Beyond the cream puff: the food items long-time fairgoers plan around. The new 2026 Sporkies and Drinkies finalists are marked at vendor stands by 13-foot statues.</p>
            {iconicFoods.map((f) => (
              <div key={f.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{f.name}</h3>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "1px" }}>{f.vendor}</p>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{f.note}</p>
              </div>
            ))}
          </section>

          <section id="entertainment" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Free Entertainment & Main Stage</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Most music at the fair is FREE with admission. The Bank Five Nine Main Stage is the one big exception — those are ticketed concerts.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Bank Five Nine Main Stage 2026 (ticketed)</h3>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                <li><strong>Thu Aug 6:</strong> Hairball (80s rock tribute)</li>
                <li><strong>Fri Aug 7:</strong> Nelly</li>
                <li><strong>Sat Aug 8:</strong> Bailey Zimmerman</li>
                <li><strong>Sun Aug 9:</strong> Wynonna Judd &amp; Melissa Etheridge — Raised On Radio Tour</li>
                <li><strong>Mon Aug 10:</strong> for KING + COUNTRY</li>
                <li><strong>Tue Aug 11:</strong> The Isley Brothers</li>
                <li><strong>Wed Aug 12:</strong> John Mulaney (comedy)</li>
                <li><strong>Thu Aug 13:</strong> The All-American Rejects</li>
                <li><strong>Fri Aug 14:</strong> Lindsey Stirling</li>
                <li><strong>Sat Aug 15:</strong> AJR</li>
                <li><strong>Sun Aug 16:</strong> The Beach Boys</li>
              </ul>
              <p style={{ color: "#666", fontSize: "12px", marginTop: "12px", margin: "12px 0 0" }}>Tickets sold separately. Buy via wistatefair.com/entertainment.</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Bank Five Nine Amphitheater (free with admission)</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: "0 0 12px" }}>Free nightly concerts run all 11 days. Confirmed 2026 highlights:</p>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                <li>Aug 7–8: Here Come the Mummies (two nights)</li>
                <li>Aug 9: Claire Sardina&apos;s Neil Diamond tribute</li>
                <li>Aug 10–11: Herman&apos;s Hermits starring Peter Noone (two nights)</li>
                <li>Aug 15: Taylor Swift tribute show</li>
                <li>Aug 16: Pat McCurdy (closing)</li>
              </ul>
              <p style={{ color: "#666", fontSize: "12px", marginTop: "12px", margin: "12px 0 0" }}>Full free amphitheater lineup at wistatefair.com/free-live-music.</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Other free entertainment</h3>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                <li><strong>Dozens of free stages</strong> across the grounds — local and regional bands, family programming all 11 days.</li>
                <li><strong>Saz&apos;s Famous Racing Pigs</strong> (presented by the Milwaukee Admirals) — multiple races daily at the Racing Pigs Arena.</li>
                <li><strong>The new 230-foot America 250 Wheel</strong> debuts in 2026 (separate ride fee — not free).</li>
                <li><strong>Coliseum livestock judging</strong> — free seating; the Governor&apos;s Blue Ribbon Livestock Auction is a marquee event.</li>
                <li><strong>Compeer Financial Discovery Barnyard</strong> — walk-through baby-animal barn, great for kids.</li>
              </ul>
            </div>
          </section>

          <section id="discounts" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 Daily Discount & Theme Days</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Seven verified discount days for 2026. Most run a 10 a.m.–4 p.m. or 10 a.m.–6 p.m. window — get to the gate early if you&apos;re relying on one of these for cheap admission.</p>
            {discountDays.map((d) => (
              <div key={d.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: 0 }}>{d.day} — {d.name}</h3>
                  <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{d.time}</span>
                </div>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{d.deal}</p>
              </div>
            ))}
          </section>

          <section id="rides" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>SpinCity Midway & Rides</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>SpinCity is the fair&apos;s midway — rides, games and the new 230-foot America 250 Wheel. Wristbands are the right call if you plan to ride more than four or five times; otherwise pay-per-ride tickets are sold individually.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>WEEKDAY WRISTBAND (ONSITE)</p>
                <p style={{ fontSize: "20px", color: c.green1, margin: "0 0 4px", fontWeight: "800" }}>$45</p>
                <p style={{ fontSize: "13px", color: "#444", margin: 0, lineHeight: 1.5 }}>Mon–Fri single-day, unlimited rides 11 a.m.–7 p.m. Sold at SpinCity onsite.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>ANY-DAY WRISTBAND (ONLINE ONLY)</p>
                <p style={{ fontSize: "20px", color: c.green1, margin: "0 0 4px", fontWeight: "800" }}>Online only</p>
                <p style={{ fontSize: "13px", color: "#444", margin: 0, lineHeight: 1.5 }}>Use any single day Mon–Sun, unlimited rides 11 a.m.–7 p.m. NOT sold during the fair — buy in advance at wistatefair.com.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>RIDE & GAME TICKETS</p>
                <p style={{ fontSize: "20px", color: c.green1, margin: "0 0 4px", fontWeight: "800" }}>Pay per ride</p>
                <p style={{ fontSize: "13px", color: "#444", margin: 0, lineHeight: 1.5 }}>Individual ticket strips sold at SpinCity ticket booths — the move if you&apos;re only riding a couple of things or have a mix of ages.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px" }}>REDEMPTION</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "700", lineHeight: 1.5 }}>Voucher holders must redeem at the SpinCity Redemption Booth on the Grand Walkway by 5 p.m.</p>
              </div>
            </div>
            <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "14px", borderRadius: "10px", marginTop: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "6px", letterSpacing: "1.5px" }}>FOR FAMILIES WITH YOUNG KIDS</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Wristbands only cover rides — not games. If your kids are 3–6, pay-per-ride tickets are often the better value than a wristband. The Compeer Financial Discovery Barnyard (no extra fee, included with admission) is usually a bigger hit at that age than the midway.</p>
            </div>
          </section>

          <section id="animals" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Animal Barns & Agriculture</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Wisconsin is a dairy state and the fair shows it. Roughly 4,500+ animals are judged across the 11 days — most are walkable any time the fair is open.</p>
            {animalBarns.map((b) => (
              <div key={b.barn} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 6px" }}>{b.barn}</h3>
                <p style={{ color: "#444", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{b.animals}</p>
              </div>
            ))}
          </section>

          <section id="parking" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking & Park-and-Ride</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The lots fill on weekends and weekday evenings. Buy your parking pass online in advance for a faster entry. Parking is CASHLESS — credit or debit only at the gate.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Onsite parking at State Fair Park</h3>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                <li><strong>Monday–Thursday:</strong> $30 per vehicle</li>
                <li><strong>Friday–Sunday:</strong> $36 per vehicle</li>
                <li>Limited <strong>Preferred Parking</strong> at same rates near Main Stage Entrance (via Gate 1), Main Entrance E (via Gate 7) and Tunnel Entrance F (via Gate 9)</li>
                <li>Over half of State Fair Park is dedicated parking; first-come, first-served</li>
                <li>Cashless — credit/debit card only</li>
              </ul>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Park &amp; Ride shuttles ($15/person via Dousman Transport)</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, marginBottom: "10px" }}>Two confirmed 2026 shuttle routes serve the fair. Arrive 15 minutes before listed departure.</p>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                <li><strong>Western route:</strong> Mukwonago Park &amp; Ride → Big Bend Park &amp; Ride → Hales Corners Park &amp; Ride → State Fair</li>
                <li><strong>Lake Country route:</strong> Nagawaukee Park &amp; Ride → Pewaukee Park &amp; Ride → Goerke&apos;s Corners Park &amp; Ride → State Fair</li>
              </ul>
              <p style={{ color: "#666", fontSize: "12px", marginTop: "10px", margin: "10px 0 0" }}>Current schedule: wistatefair.com/fair/shuttles-transit or statefairshuttle.com.</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>MCTS public transit</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>MCTS local <strong>Route 18 (National Avenue)</strong> and <strong>Route 33 (Vliet – 84th)</strong> serve State Fair Park on regular daily schedules. Check ridemcts.com for current festival service additions during fair dates.</p>
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "26px", fontWeight: "900", marginBottom: "16px" }}>Accessibility, Rentals & Lockers</h2>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>Stroller, wagon, wheelchair &amp; scooter rentals</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
                {rentals.map((r) => (
                  <div key={r.item} style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "10px", textAlign: "center" }}>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>{r.item}</p>
                    <p style={{ fontSize: "20px", color: c.green1, fontWeight: "800", margin: 0 }}>{r.price}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: "#666", fontSize: "12px", marginTop: "10px", margin: "10px 0 0" }}>Reserve online in advance to guarantee one. A valid credit card is required as deposit; Visa/MC/Discover/cash accepted for remaining payment onsite.</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>ADA &amp; accessibility</h3>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                <li>Certified American Sign Language (ASL) interpretation is available for shows — request at least two weeks ahead: (414) 266-7071 or entertainment@wistatefair.com</li>
                <li>Service animals welcome (must be on leash, harness or tether)</li>
                <li>ADA-accessible parking and shuttles are available — confirm same-day specifics with Guest Services</li>
                <li>Most buildings are ground-level; the grounds are paved/walkable but the park is large — a wagon or scooter rental saves a lot of feet</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "26px", fontWeight: "900", marginBottom: "16px" }}>Tips: First-Timer vs. Returning Fairgoer</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>First-timer playbook</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                  <li>Buy adult admission online before the fair starts ($15 vs $20 at gate)</li>
                  <li>Go on a weekday — crowds, parking and food lines are noticeably lighter than Saturday</li>
                  <li>Start at The Dairy Building, get a cream puff, then walk Grand Avenue for the food vendors</li>
                  <li>Pace your food: small bites at multiple stands beats one heavy meal — that&apos;s the point of the fair</li>
                  <li>Plan around one show: pick either a Main Stage ticket or a free amphitheater set, build the day around that start time</li>
                  <li>Take cash for tips even though most vendors take cards (and parking is card-only)</li>
                </ul>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "10px" }}>Returning fairgoer moves</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                  <li>If you qualify, the Sunday 8/9 Military Day and Thursday 8/13 Educators Day are FREE — plan accordingly</li>
                  <li>Senior Day (Mon 8/10) drops the 60+ ticket from $15 to $7 — best deal for older fairgoers</li>
                  <li>Pre-order cream puff 6-packs online and pick up at the Express Window — skip the bakery line</li>
                  <li>The 2026 Sporkies and Drinkies finalists are flagged by 13-foot statues at vendor stands — that&apos;s your new-food shortlist</li>
                  <li>Park &amp; Ride saves $15–$21 vs onsite parking and skips the post-show parking-lot crush</li>
                  <li>Hit the new 230-foot America 250 Wheel before sunset for the West Allis skyline</li>
                </ul>
              </div>
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
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Summer Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do With Kids</Link>
              <Link href="/this-weekend-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>This Weekend in MKE</Link>
              <Link href="/milwaukee-events" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Events Guide</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
              <Link href="/milwaukee-summerfest" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Summerfest Guide</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Breweries</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>State Fair changes, event picks, food openings and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 8px" }}>© 2026 Discover Milwaukee. Your insider&apos;s guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75 }}>Fair facts verified against wistatefair.com and Milwaukee press in June 2026. Always confirm same-day specifics with the venue before going.</p>
        </footer>
      </div>
    </>
  );
}
