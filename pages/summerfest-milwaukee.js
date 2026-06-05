import React from "react";
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

const fest = {
  lineup: [
    {
      name: "Garth Brooks",
      date: "Jun 16 + 17, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Pre-Festival",
      headline: "Garth Brooks",
      support: "Two-night amphitheater stand ahead of opening weekend.",
      description: "Two pre-festival amphitheater shows from Garth Brooks lead into Summerfest's opening weekend. Amphitheater ticket required separately from grounds admission.",
      mustTry: "Two-night stand — different setlists each night are typical for Garth.",
      vibe: "Stadium-country, sing-every-word, opening-stretch energy",
      insiderTip: "These are pre-fest amphitheater shows. Grounds admission isn't the ticket — you need the amphitheater ticket for the seat.",
      priceRange: "Ticketed",
      genreOrVibe: "Pre-Festival",
      special: "Two-night amphitheater stand · Jun 16 + 17, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Charlie Wilson",
      date: "Jun 18, 2026",
      venue: "BMO Pavilion",
      tag: "Opening Night",
      headline: "Charlie Wilson",
      support: "BMO Pavilion opener for the 2026 festival.",
      description: "Charlie Wilson opens the BMO Pavilion side of Summerfest 2026 on night one. Reserved-seat pavilion show inside the grounds.",
      mustTry: "Catch the BMO Pavilion crowd warmup — Uncle Charlie sets the tone.",
      vibe: "Soul-and-R&B, opening-night, pavilion-seated",
      insiderTip: "BMO Pavilion is reserved seating inside the grounds — grounds admission gets you in the gate, but the pavilion seat is its own ticket.",
      priceRange: "Ticketed",
      genreOrVibe: "Opening Night",
      special: "Opening BMO Pavilion · Jun 18, 2026",
      address: "BMO Pavilion",
    },
    {
      name: "Carín León",
      date: "Jun 20, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Weekend 1",
      headline: "Carín León",
      support: "Closing night of Summerfest's first weekend.",
      description: "Carín León closes out the first Summerfest weekend at the AmFam Amphitheater with the Mexican-music crossover run he's been on for two years.",
      mustTry: "His regional-Mexican-meets-country crossover catalog from the recent run.",
      vibe: "Big amphitheater singalong, Spanish-and-English crowd",
      insiderTip: "Weekend-one closer — get to the grounds early, the amphitheater fills fast for León.",
      priceRange: "Ticketed",
      genreOrVibe: "Weekend 1 Close",
      special: "Closes Weekend 1 · Jun 20, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Ed Sheeran",
      date: "Jun 25, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Weekend 2",
      headline: "Ed Sheeran",
      support: "Opening night, weekend two.",
      description: "Ed Sheeran kicks off Summerfest's second weekend at the AmFam Amphitheater. Expect the looper-pedal solo setup and a full hit catalog.",
      mustTry: "The one-man-with-a-looper portion of the show — Sheeran's calling card.",
      vibe: "Mass-singalong pop, every-demo crowd, amphitheater-packed",
      insiderTip: "Sheeran sells out fast — secure amphitheater tickets well before weekend two opens.",
      priceRange: "Ticketed",
      genreOrVibe: "Weekend 2 Open",
      special: "Opens Weekend 2 · Jun 25, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Cody Johnson",
      date: "Jun 26, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Weekend 2",
      headline: "Cody Johnson",
      support: "Country middle-night of weekend two.",
      description: "Cody Johnson brings the traditional-leaning country night to weekend two's amphitheater slot.",
      mustTry: "His ride-the-bull, neo-traditional country setlist.",
      vibe: "Boots-and-hat country, line-singing crowd",
      insiderTip: "If you're doing both Sheeran and CoJo back-to-back, plan the grounds-walk between them — it's a hike to the amphitheater gate.",
      priceRange: "Ticketed",
      genreOrVibe: "Weekend 2",
      special: "Country night · Jun 26, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Post Malone",
      date: "Jun 27, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Weekend 2",
      headline: "Post Malone w/ Carter Faith",
      support: "Carter Faith opens.",
      description: "Post Malone closes weekend two at the AmFam Amphitheater with Carter Faith on the opener slot — a pop-rap-into-country-curious bill.",
      mustTry: "The country-curious portion of Post's recent setlists alongside the hits.",
      vibe: "Genre-crossing, festival-loud, weekend-two finale",
      insiderTip: "Carter Faith is worth showing up early for — country-side opener with momentum.",
      priceRange: "Ticketed",
      genreOrVibe: "Weekend 2 Close",
      special: "w/ Carter Faith · Jun 27, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Muse",
      date: "Jul 2, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Weekend 3",
      headline: "Muse",
      support: "Opening night of the final weekend.",
      description: "Muse opens Summerfest's third and final weekend with a full arena-rock production at the AmFam Amphitheater.",
      mustTry: "The big-screen, lasers-and-anthems Muse production at full scale.",
      vibe: "Stadium-rock, theatrical, headphones-off-loud",
      insiderTip: "Muse's stage production is the show — sit deep enough in the amphitheater to see the full rig.",
      priceRange: "Ticketed",
      genreOrVibe: "Weekend 3 Open",
      special: "Opens Weekend 3 · Jul 2, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Alex Warren",
      date: "Jul 3, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Weekend 3",
      headline: "Alex Warren",
      support: "Friday-night amphitheater slot of the final weekend.",
      description: "Alex Warren takes the AmFam Amphitheater on July 3, the middle night of the closing weekend.",
      mustTry: "The breakout singles that put him on the 2025–2026 festival circuit.",
      vibe: "Modern pop, younger-skew amphitheater crowd",
      insiderTip: "July 3 is historically Fan Appreciation Day on the grounds — free admission noon–3 means heavy daytime traffic before the amphitheater show.",
      priceRange: "Ticketed",
      genreOrVibe: "Weekend 3",
      special: "Fan Appreciation Day · Jul 3, 2026",
      address: "American Family Insurance Amphitheater",
    },
    {
      name: "Jelly Roll",
      date: "Jul 4, 2026",
      venue: "American Family Insurance Amphitheater",
      tag: "Closing Night",
      headline: "Jelly Roll w/ Tyler Hubbard",
      support: "Tyler Hubbard opens. Independence Day closer.",
      description: "Jelly Roll and Tyler Hubbard close Summerfest 2026 on July 4 at the AmFam Amphitheater — country-rock-redemption headliner with a Florida Georgia Line alum on support.",
      mustTry: "The Jelly Roll / Tyler Hubbard pairing — both hit-heavy, both built for stadium-country singalongs.",
      vibe: "Independence Day, fireworks-adjacent, festival-finale",
      insiderTip: "July 4 historically has free grounds admission noon–6 — the amphitheater ticket is its own thing, but plan for huge daytime crowds.",
      priceRange: "Ticketed",
      genreOrVibe: "Closing Night",
      special: "w/ Tyler Hubbard · Jul 4, 2026",
      address: "American Family Insurance Amphitheater",
    },
  ],
  stages: [
    {
      name: "American Family Insurance Amphitheater",
      genreOrVibe: "Headliners",
      priceRange: "Ticketed",
      address: "South end of the festival grounds",
      special: "The big-ticket stage — separate ticket from grounds GA.",
      description: "Summerfest's flagship reserved-seat venue. Every name in the 2026 amphitheater lineup above plays here. Amphitheater tickets typically include grounds admission.",
      mustTry: "Anything from the 2026 amphitheater lineup — Sheeran, Post, Muse, Jelly Roll.",
      vibe: "Big-room, reserved-seat, headliner-energy",
      insiderTip: "The amphitheater ticket usually includes grounds admission — read the ticket terms before you also buy a GA pass.",
    },
    {
      name: "BMO Pavilion",
      genreOrVibe: "Reserved Pavilion",
      priceRange: "Ticketed",
      address: "South end, near the AmFam Amphitheater",
      special: "Charlie Wilson opens Jun 18.",
      description: "Covered, reserved-seat pavilion inside the grounds. Hosts mid-tier ticketed shows and sit-down crowds. Saz's runs a 2026 food spot here too.",
      mustTry: "A pavilion show plus the Saz's stand — cheese curd tots are on the 2026 menu.",
      vibe: "Covered, seated, slightly more relaxed than the amphitheater",
      insiderTip: "BMO Pavilion seats are reserved separately — your grounds wristband gets you to the gate, not into the seat.",
    },
    {
      name: "Miller Lite Oasis",
      genreOrVibe: "Rock & Variety",
      priceRange: "Free w/ GA",
      address: "Mid-grounds, lakefront-leaning",
      special: "One of Summerfest's longest-running GA stages.",
      description: "Big general-admission stage with deep daily lineups and a Saz's 2026 food stand parked nearby.",
      mustTry: "Hit it mid-evening when the day's biggest GA act rotates in.",
      vibe: "Classic Summerfest crowd-spill, beer-in-hand, lakefront breeze",
      insiderTip: "Stake out a spot at least an act earlier than the one you came for — Oasis fills up fast at night.",
    },
    {
      name: "Generac Power Stage",
      genreOrVibe: "Rock & Alt",
      priceRange: "Free w/ GA",
      address: "North-central grounds",
      special: "Heavier and rock-leaning bookings.",
      description: "Power Stage typically leans rock, alternative and harder-edged acts on the GA side of the festival.",
      mustTry: "The late-evening rock slot — that's the Power Stage at its peak.",
      vibe: "Crowd-energy, mosh-friendly, big production for a free stage",
      insiderTip: "Bring earplugs if you're parked here all night — Power Stage is loud, even by Summerfest standards.",
    },
    {
      name: "T-Mobile Stage",
      genreOrVibe: "Pop & Hip-Hop",
      priceRange: "Free w/ GA",
      address: "Central grounds",
      special: "Big pop and hip-hop bookings on the GA side.",
      description: "One of Summerfest's larger GA stages — the spot where pop, hip-hop and crossover acts pull big crowds without an amphitheater ticket.",
      mustTry: "The 9 or 10pm headliner slot, which is typically the GA night-closer.",
      vibe: "Festival-pop crowd, phones-up, big GA singalongs",
      insiderTip: "If the GA headliner here overlaps with the amphitheater show, pick one — the cross-grounds walk is real.",
    },
    {
      name: "Uline Warehouse",
      genreOrVibe: "Indie & Alt",
      priceRange: "Free w/ GA",
      address: "North grounds",
      special: "Indie, alt and tastemaker bookings.",
      description: "Uline Warehouse is where Summerfest tends to put up-and-comer indie and alternative acts. Often the discovery stage of the festival.",
      mustTry: "An early-evening act you've barely heard of — that's the point here.",
      vibe: "Younger, indie-leaning, discovery-mode crowd",
      insiderTip: "Show up for a name you don't know — this stage's track record on next-wave acts is strong.",
    },
    {
      name: "Briggs & Stratton Big Backyard",
      genreOrVibe: "Country & Roots",
      priceRange: "Free w/ GA",
      address: "North end of the grounds",
      special: "Country-and-roots focused on the GA side.",
      description: "The Big Backyard typically anchors country, roots and Americana programming on the general-admission side of the festival.",
      mustTry: "A country bill paired with food from one of the BBQ vendors nearby.",
      vibe: "Boots, hats, slower-paced, big sky vibe",
      insiderTip: "If the amphitheater's hosting a country night too, Big Backyard catches the spillover crowd — get there before the amphitheater lets out.",
    },
    {
      name: "Aurora Pavilion",
      genreOrVibe: "Variety GA",
      priceRange: "Free w/ GA",
      address: "Central grounds",
      special: "Mixed-genre GA programming.",
      description: "A versatile general-admission stage with broad genre programming across all three weekends.",
      mustTry: "Whatever's on the early-evening slot — Aurora tends to book mid-tier touring acts there.",
      vibe: "Mixed-crowd, neighborhood-festival energy",
      insiderTip: "Good fallback when the bigger stages are packed — sightlines stay reasonable later than you'd expect.",
    },
    {
      name: "Summerville Presented by Johnsonville",
      genreOrVibe: "Country & Sausage",
      priceRange: "Free w/ GA",
      address: "South-central grounds",
      special: "Country stage tied to the Johnsonville food zone.",
      description: "Summerville pairs country and roots programming with the Johnsonville sausage food zone — eat and listen in the same footprint.",
      mustTry: "A country set with a brat from the Johnsonville stand a few steps away.",
      vibe: "Country-festival, food-and-music mash-up",
      insiderTip: "This is the easiest stage to combine into a food run without missing the act.",
    },
    {
      name: "Klement's Sausage & Beer Garden",
      genreOrVibe: "Polka & Beer Garden",
      priceRange: "Free w/ GA",
      address: "Central grounds",
      special: "Klement's signed a 10-year extension through 2035.",
      description: "Wisconsin's most Milwaukee corner of Summerfest — Klement's sausage and the beer garden anchor a stage built around tradition and crowd energy.",
      mustTry: "A Klement's brat plus whatever's playing on the polka or local-band rotation.",
      vibe: "Old-school Milwaukee, beer-garden, multi-generational",
      insiderTip: "Klement's just signed a 10-year extension through 2035 — this corner of the festival isn't going anywhere.",
    },
  ],
  food: [
    {
      name: "Klement's Sausage",
      genreOrVibe: "Milwaukee Tradition",
      priceRange: "$",
      address: "Klement's Sausage & Beer Garden",
      special: "10-year extension confirmed through 2035.",
      description: "The Klement's beer garden and sausage stand is the most Milwaukee thing on the grounds. Signed a 10-year extension for 2026 and beyond.",
      mustTry: "A Klement's brat with kraut and a beer in the garden.",
      vibe: "Beer garden, multi-generational, peak-Milwaukee",
      insiderTip: "Pace yourself — the line moves, but the garden is where people park for an hour. Plan it as a sit-down, not a grab-and-go.",
    },
    {
      name: "Saz's State House",
      genreOrVibe: "MKE BBQ & Bar Food",
      priceRange: "$$",
      address: "Miller Lite Oasis + BMO Pavilion food stands",
      special: "New 2026 menu: cheese curd tots, jalapeño mac bites.",
      description: "Saz's runs stands at Miller Lite Oasis and BMO Pavilion in 2026, with a new menu that adds cheese curd tots and jalapeño mac bites to the rotation.",
      mustTry: "Cheese curd tots — new for 2026 and very on-brand for Milwaukee.",
      vibe: "Milwaukee bar-food classic, festival-portion sized",
      insiderTip: "Two locations means two shorter lines than one big one — pick whichever stage you're at and don't cross the grounds for it.",
    },
    {
      name: "Four New 2026 Vendors",
      genreOrVibe: "Vendor Refresh",
      priceRange: "Varies",
      address: "Spread across the grounds",
      special: "Four new food vendors added for 2026.",
      description: "Summerfest 2026 adds four new food vendors across the grounds alongside the returning Milwaukee staples. Check the festival's food map on arrival for current locations.",
      mustTry: "The new-vendor stands — Summerfest's food rotation is part of how the festival stays sharp.",
      vibe: "New-this-year energy, worth a detour",
      insiderTip: "The official Summerfest food map gets updated each weekend — check it once you're in the gates rather than guessing from last year.",
    },
  ],
};

const otherStages = [
  "Lasso Lounge",
  "American Family Insurance House",
  "Northwestern Mutual Community Park",
  "Gruber Law Offices Sportszone",
];

const faqs = [
  {
    question: "When is Summerfest 2026?",
    answer: "Summerfest 2026 runs three Thursday–Saturday weekends: June 18–20, June 25–27, and July 2–4. Gates open at noon and the grounds run until midnight each day at Henry Maier Festival Park on Milwaukee's lakefront.",
  },
  {
    question: "Who is the headliner and lineup at Summerfest 2026?",
    answer: "Confirmed American Family Insurance Amphitheater shows include Carín León (Jun 20), Ed Sheeran (Jun 25), Cody Johnson (Jun 26), Post Malone with Carter Faith (Jun 27), Muse (Jul 2), Alex Warren (Jul 3), and Jelly Roll with Tyler Hubbard (Jul 4). Garth Brooks plays a two-night amphitheater stand June 16 and 17 ahead of the festival, and Charlie Wilson opens BMO Pavilion on June 18.",
  },
  {
    question: "How much are Summerfest tickets? Is there free admission?",
    answer: "Early-bird general admission is $30 through June 17, then $33 starting June 18. Kids 5 and under are free; kids 6–11 are $7. The Power Pass starts around $58. Free-admission opportunities for 2026 include Children's Fest Day on June 19 noon–3 (presented by Shorewest), Fan Appreciation Day on July 3 noon–3 (Potawatomi Casino Hotel), and the July 4 Independence Day window noon–6 (Kwik Trip), in line with recent years. Amphitheater shows are ticketed separately.",
  },
  {
    question: "Where is Summerfest held?",
    answer: "Summerfest is held at Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202 — Milwaukee's lakefront festival grounds, just south of downtown along Lake Michigan.",
  },
  {
    question: "Where do I park for Summerfest? Is there a shuttle?",
    answer: "MCTS runs Summerfest shuttles from College Avenue, Brown Deer Road East, and Hales Corners every 15 minutes, from 11:30am to a 12:30am last bus. 2026 fares are $18 adult round-trip and $9 youth, cashless only. Paid lots run near the grounds, and dedicated rideshare zones operate at the main gates. Plan for shuttle or rideshare on weekend nights — downtown lots fill early.",
  },
  {
    question: "What can you bring into Summerfest?",
    answer: "Summerfest allows small bags subject to search, sealed water bottles, and weather gear like ponchos. Outside alcohol, glass, large coolers, professional cameras, and weapons are typically prohibited. Always check Summerfest's current entry policy before you go — the official list is the source of truth.",
  },
  {
    question: "Is Summerfest family-friendly?",
    answer: "Yes. Kids 5 and under are free and kids 6–11 are $7 in 2026. The Northwestern Mutual Community Park and the broader north-end family zone are built for kids, and Children's Fest Day on June 19 noon–3 (Shorewest) gives families a free-admission window. The grounds are walkable and stroller-friendly.",
  },
  {
    question: "What's the best stage at Summerfest?",
    answer: "It depends on the night. The AmFam Amphitheater holds the headliners. T-Mobile Stage and Miller Lite Oasis are the biggest GA crowds. Uline Warehouse is the discovery stage for indie and alternative. Klement's Sausage & Beer Garden is the Milwaukee-classic corner. Generac Power Stage handles the rock side. Big Backyard is country and roots.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Summerfest 2026 Milwaukee: Dates, Lineup, Tickets, Tips & Parking",
    "description": "Your full 2026 guide to Summerfest in Milwaukee — June 18 through July 4. Amphitheater lineup, major stages, food, parking, shuttles, and insider tips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-28",
    "dateModified": "2026-05-28",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/summerfest-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Summerfest Milwaukee", "item": "https://www.discover-milwaukee.com/summerfest-milwaukee" }
    ]
  },
  event: {
    "@context": "https://schema.org",
    "@type": "MusicFestival",
    "name": "Summerfest 2026",
    "startDate": "2026-06-18",
    "endDate": "2026-07-04",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Henry Maier Festival Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "200 N Harbor Dr",
        "addressLocality": "Milwaukee",
        "addressRegion": "WI",
        "postalCode": "53202",
        "addressCountry": "US"
      }
    },
    "url": "https://www.discover-milwaukee.com/summerfest-milwaukee",
    "organizer": {
      "@type": "Organization",
      "name": "Milwaukee World Festival, Inc.",
      "url": "https://www.summerfest.com"
    }
  }
};

export default function SummerfestMilwaukee() {
  const FestCard = ({ spot }) => (
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
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.genreOrVibe}</span>
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST CATCH</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
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
        <title>Summerfest 2026 Milwaukee | Dates, Lineup, Tickets, Tips & Parking</title>
        <meta name="description" content="Summerfest 2026 in Milwaukee runs June 18 – July 4. Full guide to the AmFam Amphitheater lineup, stages, tickets, parking, shuttles and insider tips." />
        <meta name="keywords" content="summerfest 2026, summerfest milwaukee, summerfest lineup, summerfest tickets, summerfest dates, summerfest parking, summerfest stages, milwaukee festivals" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/summerfest-milwaukee" />

        <meta property="og:title" content="Summerfest 2026 Milwaukee | Dates, Lineup, Tickets & Parking" />
        <meta property="og:description" content="The world's largest music festival, June 18 – July 4, 2026 in Milwaukee. Full lineup, stages, tickets, food, and how to get in." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/summerfest-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.event) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Summerfest 2026
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>
              The world's largest music festival lives in Milwaukee. Here's your full 2026 guide — dates, the AmFam Amphitheater lineup, every major stage, what to eat, how to get in, and the gate-strategy locals actually use.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Lineups, daily schedules, ticket prices and food vendors change. Always confirm details with Summerfest before you go. Amphitheater shows are ticketed separately from grounds admission.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Summerfest 2026 at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Three Thursday–Saturday weekends, one lakefront, and the deepest live-music lineup the city books all year. Here's the quick-look on 2026.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px" }}>DATES</p>
                <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600" }}>Jun 18–20, Jun 25–27, Jul 2–4, 2026</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px" }}>LOCATION</p>
                <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600" }}>Henry Maier Festival Park, 200 N Harbor Dr</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px" }}>HEADLINERS</p>
                <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600" }}>Ed Sheeran, Post Malone, Muse, Jelly Roll + more</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px" }}>TICKETS FROM</p>
                <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600" }}>$30 early-bird GA, $33 from Jun 18</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px" }}>GATES OPEN</p>
                <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600" }}>Noon to midnight, all 9 days</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px" }}>KIDS</p>
                <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600" }}>5 & under free, 6–11 are $7</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>2026 Amphitheater Lineup</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The confirmed American Family Insurance Amphitheater shows for 2026, plus the BMO Pavilion opener and the Garth Brooks pre-festival stand. Amphitheater tickets are sold separately from grounds admission.
            </p>
            {fest.lineup.map((spot, i) => <FestCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Stages</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The main Summerfest 2026 stages — from the ticketed amphitheater down to the free-with-GA crowd stages where most of the discoveries happen.
            </p>
            {fest.stages.map((spot, i) => <FestCard key={i} spot={spot} />)}
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "8px" }}>ALSO ON THE GROUNDS IN 2026</p>
              <p style={{ color: c.green1, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                {otherStages.join(" · ")}
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Food & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Summerfest's food rotation is part of why locals come back. Klement's just locked in a 10-year extension, Saz's brings a new 2026 menu to two locations, and four new vendors join the grounds.
            </p>
            {fest.food.map((spot, i) => <FestCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Getting There — Parking & Transit</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The grounds are downtown-lakefront, and on a big amphitheater night, driving in is the hardest part. Most locals shuttle, rideshare, or park a few blocks out and walk.
            </p>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>MCTS Summerfest Shuttles</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                MCTS runs Summerfest shuttles from College Avenue, Brown Deer Road East and Hales Corners every 15 minutes. Service runs 11:30am to a 12:30am last bus. 2026 fares are $18 adult round-trip and $9 youth — cashless only.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Paid Lots & Downtown Parking</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Paid lots run close to the grounds, and downtown garages fill up fast on amphitheater nights. Park further north or west of the grounds for a shorter walk-out than queue-out. Don't expect cheap street parking near Harbor Drive on Saturdays.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Rideshare</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Dedicated rideshare drop-off and pickup zones operate near the main gates. After amphitheater shows let out, expect surge pricing — walk a few blocks off-grounds before requesting if you want to avoid it.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Insider Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The strategy locals actually use to make a Summerfest night work — when to show up, where to land first, and how to dodge the worst of the crush.
            </p>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Gate Strategy</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Pick a gate that matches the stage you're starting at, not the closest one to the freeway. Walking the grounds end-to-end is real distance — start near your first act and drift, don't sprint.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Free-Admission Days for 2026</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Children's Fest Day on June 19 (Shorewest) is free noon–3. Fan Appreciation Day on July 3 (Potawatomi Casino Hotel) is free noon–3. July 4 Independence Day is historically free noon–6 (Kwik Trip). Free windows draw big daytime crowds — plan around the wave.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Kids on the Grounds</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Kids 5 and under are free. Kids 6–11 are $7. Northwestern Mutual Community Park and the family-oriented north end of the grounds are built for a kids-first afternoon — go early, leave before the amphitheater lets out.
              </p>
            </div>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Weather Plan</h3>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Summerfest goes on in rain. Bring a poncho, not an umbrella — covered stages like BMO Pavilion, Klement's beer garden, and Uline Warehouse all become ride-out spots when weather rolls off the lake.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Live Music & Events</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Festivals</Link>
              <Link href="/summer-live-music-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Summer Live Music</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do</Link>
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
