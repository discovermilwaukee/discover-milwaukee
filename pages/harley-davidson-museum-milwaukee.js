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

const atAGlance = [
  { label: "Hours", value: "Daily 10 a.m.–5 p.m. (holidays vary)" },
  { label: "Adult admission", value: "$25 (ages 18–64)" },
  { label: "Senior / military / student", value: "$21 (with valid ID)" },
  { label: "Kids 5–17 / under 5", value: "$11 / Free" },
  { label: "Parking", value: "Free (H Lot & D Lot, west of 6th St)" },
  { label: "Bike Night", value: "Thursdays 5–9 p.m. · May 7–Sept 24, 2026 · free outside the museum" },
  { label: "On-site dining", value: "MOTOR Bar & Restaurant (riverfront patio, no museum ticket required)" },
  { label: "Best for", value: "Riders, history buffs, families, design nerds — plan 2–3 hours" },
  { label: "Address", value: "400 W Canal St, Milwaukee, WI 53203" },
  { label: "Phone", value: "877-436-8738" },
];

const admissionTiers = [
  { tier: "Adult (18–64)", price: "$25", notes: "Standard general admission" },
  { tier: "Senior (65+)", price: "$21", notes: "Valid ID at the door" },
  { tier: "U.S. Military (with ID)", price: "$21", notes: "Valid Military I.D. at the door" },
  { tier: "Student (with school ID)", price: "$21", notes: "Valid school ID required (high school or college)" },
  { tier: "Child / Youth (5–17)", price: "$11", notes: "Under adult supervision" },
  { tier: "Child (under 5)", price: "Free", notes: "No ticket needed" },
  { tier: "H.O.G. & Museum Members", price: "Free", notes: "Membership card at the door — call to confirm current tier benefits" },
  { tier: "Groups (10+) & Family / Annual passes", price: "Call to confirm", notes: "Group sales (414) 287-2799 · annual passes through the H-D Museum website" },
];

const exhibits = [
  {
    name: "Serial Number One (1903)",
    gallery: "Lobby / Journey — 1st floor",
    description: "The oldest known Harley-Davidson in existence — the world's first H-D, built in a 10-by-15-foot wooden shed in the Davidson family backyard. Encased in glass within an illuminated footprint of that original shed.",
    why: "If you only see one motorcycle in the building, it's this one. It's the literal origin of the company and arguably the most important single motorcycle in American manufacturing history.",
    tip: "Start your visit here on the ground floor before walking up the chronological Journey. The shed outline is easy to miss — look down at the floor."
  },
  {
    name: "The Harley-Davidson Journey",
    gallery: "1st floor — chronological main hall",
    description: "Procession of bikes down the center of the main hall, walking visitors from 1903 through every decade of H-D production. Side galleries dig into the Great Depression, WWII military bikes, post-war boom, and the AMF era.",
    why: "This is the spine of the museum. The chronological flow is what makes the building work — every other gallery branches off of it.",
    tip: "Allow at least 45 minutes here. Don't skip the WWII military section — the WLA \"Liberator\" bikes shipped to Allied forces are a highlight."
  },
  {
    name: "Tank Gallery (Tank Wall)",
    gallery: "1st floor — branches off the Journey",
    description: "Roughly 100 reproduced Harley-Davidson fuel tank designs spanning 70+ years, mounted on a single wall in chronological order on Fat Bob–style tanks.",
    why: "The single most photographed wall in the building. It's the best visual shorthand for H-D's design language across generations — every paint scheme, every era, in one frame.",
    tip: "Backs up against the main aisle, so it gets crowded fast. Best photo light is in the first hour after opening."
  },
  {
    name: "The Engine Room",
    gallery: "2nd floor — start of the upstairs galleries",
    description: "Disassembled Knucklehead engine displayed in exploded view, with interactive touchscreens that demonstrate how Knucklehead, Panhead, Shovelhead and modern V-twin engines actually work.",
    why: "The most under-rated gallery for non-riders. The touchscreens turn the mechanical history into something you can actually understand without a wrench in your hand.",
    tip: "The audio stations let you hear individual engine soundtracks side by side — surprisingly addictive. Kids love this room."
  },
  {
    name: "Clubs & Competition",
    gallery: "2nd floor",
    description: "Racing and club history, anchored by a section of suspended wooden board track angled at 45 degrees — a reconstruction of the brutal 1920s board-track racing circuits where riders hit triple digits with no brakes.",
    why: "The board track is the most visceral artifact in the museum. It tells the dangerous early-racing story better than any caption can.",
    tip: "Look up. People miss the angle of the boards because they're reading the panels. Step back across the aisle to take it in."
  },
  {
    name: "Custom Culture",
    gallery: "2nd floor",
    description: "Harley-Davidson's impact on American culture, anchored by King Kong — a 13-foot, two-engine custom motorcycle built over four years by Felix Predko — plus exact replicas of the \"Captain America\" and \"Billy Bike\" choppers ridden by Peter Fonda and Dennis Hopper in Easy Rider (1969).",
    why: "This is where the museum stops being about machines and starts being about myth. The Easy Rider bikes are the most-asked-about artifacts in the building.",
    tip: "Captain America was destroyed in the final scene of Easy Rider — these are screen-accurate replicas built from original specs. Worth reading the full panel."
  },
  {
    name: "Experience Gallery",
    gallery: "1st floor — interactive",
    description: "Sit-on stations with current-production Harley-Davidson Freedom Machines (Sportster S, Pan America, Street Glide and others). Refreshed in 2022 to bridge historical galleries with contemporary riding stories.",
    why: "The only place in the building where you can actually throw a leg over a bike. Non-riders find out very quickly whether the Pan America fits — or doesn't.",
    tip: "Bring a kid here at the start of the visit and you'll buy yourself an extra 30 minutes upstairs."
  },
  {
    name: "Living the Legend Rivets",
    gallery: "Outdoor campus — Davidson Park & walkways",
    description: "Personalized aluminum rivets engraved with the names of riders, families, and clubs from around the world — installed in the walkways and architectural features around the museum campus.",
    why: "The largest community-owned artifact in the museum. Many riders make a pilgrimage specifically to find their rivet or a relative's.",
    tip: "If your family has a rivet, ask the guest services desk for help locating it — they can pull the install record."
  },
  {
    name: "Elvis Presley's 1956 KH",
    gallery: "1st floor — Journey, 1950s section",
    description: "The first motorcycle Elvis Presley ever bought — a 1956 Harley-Davidson KH, purchased in Memphis the same year he recorded \"Heartbreak Hotel.\"",
    why: "Pop-culture inflection point. Elvis on the cover of The Enthusiast (H-D's magazine) in 1956 helped reposition motorcycles in American youth culture.",
    tip: "Easy to walk past. The bike is small compared to what surrounds it — that's part of the story."
  },
  {
    name: "WLA \"Liberator\" (WWII military bikes)",
    gallery: "1st floor — Journey, 1940s section",
    description: "The WLA was the bike Harley built to military spec for the Allies in WWII — roughly 90,000 were produced. Nicknamed the \"Liberator\" because GIs rode them into liberated towns across Europe.",
    why: "The military gallery is one of the strongest sections in the museum and is the connective tissue between H-D and 20th-century American identity.",
    tip: "Pair this with the post-war return-and-club story upstairs — the rise of motorcycle clubs in the late 1940s is directly downstream of veterans coming home with bikes."
  },
  {
    name: "Special / Rotating Exhibits",
    gallery: "Dedicated 1st-floor special exhibit hall",
    description: "Curated temporary exhibits drawn from the H-D Archives (which feed roughly 85% of the museum's displays). Past exhibits have spotlighted women riders, racing, tattoo culture, and the company's 120-year milestone.",
    why: "The reason returning visitors come back. The permanent galleries don't change often, but the special exhibit hall does.",
    tip: "Check harley-davidson.com/museum before you go to see what's running — the rotating hall is included with general admission."
  },
  {
    name: "The Archives Tour (Vault access)",
    gallery: "Behind-the-scenes guided tour — extra ticket",
    description: "Guided tour into the H-D Archives — climate-controlled storage holding bikes, ephemera, and historical materials not on the general floor. Limited availability, additional fee, and often pre-purchase only.",
    why: "The only way to see the 85% of the collection that isn't on the floor. For serious H-D fans, this is the headline experience.",
    tip: "Call (877) 436-8738 ahead of your visit to confirm Archives tour days, times, and current pricing — schedules shift seasonally."
  },
];

const faqs = [
  {
    question: "What are the Harley-Davidson Museum hours in 2026?",
    answer: "The Harley-Davidson Museum is open daily from 10 a.m. to 5 p.m. year-round, with hours that may vary on select holidays (call 877-436-8738 before holiday visits). The campus also includes MOTOR Bar & Restaurant (Sun–Wed 11 a.m.–8 p.m.; Thu–Sat 11 a.m.–9 p.m.) and the H-D Shop / Factory Outlet (daily 10:30 a.m.–5:30 p.m.). MOTOR does not require a museum ticket to enter."
  },
  {
    question: "How much is admission to the Harley-Davidson Museum?",
    answer: "Adult admission (ages 18–64) is $25. Seniors 65+, U.S. military with ID, and college students with ID pay $21. Children 5–17 are $11. Children under 5 are free. H.O.G. and Museum members receive free general admission (membership card required at the door). Call ahead or check the museum's website for current group rates, annual passes, and Archives tour pricing."
  },
  {
    question: "How long should I plan to spend at the Harley-Davidson Museum?",
    answer: "Plan 2 to 3 hours for the main museum if you read the panels and use the interactive stations. Add another 30–45 minutes for the Experience Gallery (where you can sit on current-production bikes) and 30 minutes for the H-D Shop and outdoor campus. Lunch or dinner at MOTOR Bar & Restaurant adds another 60–90 minutes — many visitors make it a half-day trip."
  },
  {
    question: "When is Bike Night at the Harley-Davidson Museum?",
    answer: "The Harley-Davidson Museum Bike Night concert series runs every Thursday from 5 to 9 p.m. on the museum campus, May 7 through September 24, 2026. Bike Nights are free to attend — no museum admission required — and feature live music outside the museum, drink specials and food from MOTOR Bar & Restaurant, raffles, and H-D Shop deals. The 2026 lineup includes local favorites like The Grovelers, Valley Fox, Wire & Nail, Third Coast Blues Collective, and a Tom Petty cover set by Trapper Schoepp."
  },
  {
    question: "Is parking free at the Harley-Davidson Museum?",
    answer: "Yes — parking is free for both cars and motorcycles. There are two car lots (H Lot and D Lot) on the west side of 6th Street. Motorcycle riders can pull directly onto campus and park in front of the museum on a first-come, first-served basis. Accessible parking is available throughout the grounds."
  },
  {
    question: "What restaurants are at the Harley-Davidson Museum?",
    answer: "MOTOR Bar & Restaurant is the museum's on-site restaurant — scratch-made BBQ, burgers, salads, and the city's largest riverfront patio along the Menomonee River. Hours are Sun–Wed 11 a.m.–8 p.m. and Thu–Sat 11 a.m.–9 p.m. Recurring weekly events include Friday Fish Fry, Saturday BBQ & Brews (5:30 p.m. with 12 rotating taps and live acoustic music), and Thursday Bike Nights in season. Happy hour runs 3–6 p.m. seven days a week. No museum ticket is required to dine. Café Racer has historically operated as a separate quick-serve café — call (414) 287-2778 to confirm current hours and status before relying on it for breakfast or coffee."
  },
  {
    question: "Where is the Harley-Davidson Museum located?",
    answer: "The Harley-Davidson Museum sits at 400 W Canal St in Milwaukee, WI 53203, on a 20-acre campus along the Menomonee River — about a 10-minute walk over the 6th Street Bascule Bridge from Walker's Point and roughly a mile southwest of downtown Milwaukee and the Fiserv Forum. Visitors flying in land at Milwaukee Mitchell International (MKE), about 15 minutes south by car."
  },
  {
    question: "What are the must-see exhibits at the Harley-Davidson Museum?",
    answer: "The non-negotiables: Serial Number One (the oldest known Harley-Davidson, encased in the footprint of the original 1903 backyard shed), the Tank Wall (100 reproduced tank designs across 70 years), the Engine Room (exploded Knucklehead engine with interactive engine-sound stations), the Clubs & Competition gallery (45-degree board-track racing reconstruction), Custom Culture (King Kong custom bike plus the Easy Rider Captain America and Billy Bike replicas), the Experience Gallery (sit on current production bikes), and Elvis Presley's 1956 KH in the 1950s Journey section."
  },
  {
    question: "Is the Harley-Davidson Museum accessible and family-friendly?",
    answer: "Yes — all dining areas, museum floors, and restrooms are fully ADA accessible. Wheelchairs, power chairs, and mobility scooters are welcome, and complimentary wheelchairs are available first-come, first-served at the front desk. Service animals are permitted per ADA guidelines. The campus is stroller-friendly. Kids under 5 are free, kids 5–17 are $11, and the Engine Room and Experience Gallery (with sit-on bikes) are kid magnets. Year-round family programming includes S.T.E.A.M. of Motorcycles workshops, Breakfast with Santa, and the Skulloween Halloween event."
  },
  {
    question: "What's near the Harley-Davidson Museum?",
    answer: "The museum sits at the gateway to Walker's Point — Milwaukee's craft-beer and dining neighborhood. The Iron Horse Hotel (also Harley-themed) is a 9-minute walk east across the 6th Street Bascule Bridge. MobCraft Beer's taproom is right around the corner from the Iron Horse. Camino (American craft-beer gastropub with 20 rotating taps) and Hotel Madrid's Movida tapas bar are both within a 5–10 minute walk. Bryant's Cocktail Lounge (Milwaukee's oldest cocktail bar, 1938) is ~15 minutes away or a quick rideshare. The Historic Third Ward and Milwaukee Public Market are about a 15-minute walk northeast."
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
    { "@type": "ListItem", position: 2, name: "Harley-Davidson Museum", item: "https://www.discover-milwaukee.com/harley-davidson-museum-milwaukee" },
  ],
};

const museumLd = {
  "@context": "https://schema.org",
  "@type": "Museum",
  name: "Harley-Davidson Museum",
  description: "The official Harley-Davidson Museum — a 130,000-square-foot, 20-acre campus along the Menomonee River in Milwaukee, with two floors of motorcycles spanning 1903 to today, interactive galleries, MOTOR Bar & Restaurant, and the H-D Shop.",
  url: "https://www.harley-davidson.com/us/en/museum.html",
  telephone: "+1-877-436-8738",
  image: "https://www.discover-milwaukee.com/images/harley-davidson-museum-og.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "400 W Canal St",
    addressLocality: "Milwaukee",
    addressRegion: "WI",
    postalCode: "53203",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.0317, longitude: -87.9234 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "17:00" },
  ],
  isAccessibleForFree: false,
  publicAccess: true,
  priceRange: "$$",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const exhibitsLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Harley-Davidson Museum Permanent Exhibits & Galleries",
  description: "Major galleries and must-see exhibits at the Harley-Davidson Museum in Milwaukee.",
  numberOfItems: exhibits.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: exhibits.map((ex, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristAttraction",
      name: ex.name,
      description: ex.description,
      isPartOf: { "@type": "Museum", name: "Harley-Davidson Museum", address: { "@type": "PostalAddress", streetAddress: "400 W Canal St", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53203", addressCountry: "US" } },
    },
  })),
};

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#admission", label: "Hours & Admission" },
  { href: "#exhibits", label: "Exhibits" },
  { href: "#bike-night", label: "Bike Nights" },
  { href: "#dining", label: "Dining" },
  { href: "#practical", label: "Practical" },
  { href: "#nearby", label: "Nearby" },
  { href: "#faq", label: "FAQ" },
];

export default function HarleyDavidsonMuseumMilwaukee() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Harley-Davidson Museum Milwaukee 2026 Guide | Tickets, Hours</title>
        <meta name="description" content="Harley-Davidson Museum Milwaukee 2026: verified hours, ticket prices, must-see exhibits, Thursday Bike Night schedule, MOTOR Bar dining and parking tips." />
        <meta name="keywords" content="harley-davidson museum, harley davidson museum milwaukee, harley museum tickets, harley museum hours, harley museum admission, bike night milwaukee, MOTOR bar milwaukee, harley museum parking, things to do milwaukee, walker's point attractions" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/harley-davidson-museum-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Harley-Davidson Museum Milwaukee 2026 Guide | Tickets, Hours" key="og:title" />
        <meta property="og:description" content="Verified 2026 guide to the Harley-Davidson Museum — hours, tickets, exhibits, Bike Night schedule, MOTOR Bar and parking." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/harley-davidson-museum-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/harley-davidson-museum-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Harley-Davidson Museum Milwaukee — verified 2026 guide to tickets, hours, exhibits and Bike Nights." key="og:image:alt" />
        <meta property="article:published_time" content="2026-01-15T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-07T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Attractions" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Harley-Davidson Museum Milwaukee 2026 Guide | Tickets, Hours" key="twitter:title" />
        <meta name="twitter:description" content="Hours, ticket prices, must-see exhibits, Bike Night schedule, MOTOR Bar dining and parking tips — verified June 2026." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/harley-davidson-museum-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(museumLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(exhibitsLd) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 7, 2026 · VERIFIED 2026 GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Harley-Davidson Museum, Milwaukee</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              The definitive 2026 visitor guide to the <strong>Harley-Davidson Museum</strong> — 450+ motorcycles across two floors, the 1903 Serial Number One, the Tank Wall, the Engine Room, free Thursday Bike Nights, and MOTOR Bar's riverfront patio. Every hour, price, and exhibit on this page was verified against the museum's own website and recent Milwaukee press in June 2026.
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
              <strong>Heads up:</strong> Hours, ticket prices, and Bike Night lineups shift season to season. Everything here was verified against the official H-D Museum website, MOTOR Restaurant, Visit Milwaukee, and Milwaukee Record in June 2026 — but always check harley-davidson.com/museum or call <strong>877-436-8738</strong> before a holiday visit, a special-exhibit trip, or an Archives tour booking.
            </p>
          </div>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/harley/harley-museum-panorama.jpg" alt="Harley-Davidson Museum campus panorama along the Menomonee River in Milwaukee" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The 20-acre Harley-Davidson Museum campus on the Menomonee River.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/harley/harley-museum-exterior.jpg" alt="Harley-Davidson Museum exterior viewed from across the Menomonee River in Milwaukee, Wisconsin" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Museum's modern brick-and-glass architecture at 400 W Canal St.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/harley/harley-museum-tank-wall.jpg" alt="Harley-Davidson Museum Tank Wall exhibit displaying decades of motorcycle fuel tank graphics" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Tank Wall — a floor-to-ceiling timeline of fuel-tank art.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/harley/harley-museum-bike-parade.jpg" alt="Harley-Davidson Museum gallery floor lined with vintage motorcycles arranged in chronological procession" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>Vintage Harleys lined up across the main gallery floor in chronological order.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#999", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. Credits: Tedder (CC-BY-3.0); Dori (CC-BY-SA-3.0); Danemroberts (CC-BY-SA-3.0); Danemroberts (CC-BY-SA-3.0).
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Harley-Davidson Museum at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The fast answers most visitors need before they go.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="admission" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Hours & Admission</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The H-D Museum is open <strong>daily 10 a.m. to 5 p.m.</strong> year-round, with hours that may vary on select holidays. Tickets are sold at the door and online at harley-davidson.com/museum. H.O.G. and Museum members enter free.</p>

            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", overflow: "hidden", marginBottom: "20px" }}>
              <div style={{ backgroundColor: c.green1, color: c.cream, padding: "12px 18px", display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: "10px", fontWeight: "700", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
                <div>Tier</div><div>2026 Price</div><div>Notes</div>
              </div>
              {admissionTiers.map((t, i) => (
                <div key={t.tier} style={{ padding: "14px 18px", display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: "10px", alignItems: "center", borderTop: i === 0 ? "none" : `1px solid ${c.beige}`, fontSize: "14px", color: c.green1 }}>
                  <div style={{ fontWeight: "700" }}>{t.tier}</div>
                  <div style={{ fontWeight: "700", color: c.orange }}>{t.price}</div>
                  <div style={{ color: "#555" }}>{t.notes}</div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "14px 16px", borderRadius: "10px", marginBottom: "12px" }}>
              <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>
                <strong>Insider tip:</strong> If you ride a Harley regularly, H.O.G. (Harley Owners Group) membership comes with free general admission to the museum — bring your member card. Annual Museum memberships also pay for themselves in two visits.
              </p>
            </div>
            <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}>
              The Archives Tour (behind-the-scenes access to the climate-controlled H-D Archives, which feed ~85% of the displayed collection) is a separate ticket and books up — call <strong>877-436-8738</strong> ahead to confirm days, times, and current pricing.
            </p>
          </section>

          <section id="exhibits" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Permanent Exhibits & Galleries</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The museum spans 130,000 square feet across three buildings on 20 acres. Two floors of permanent galleries plus a dedicated special-exhibits hall. Here are the must-sees — start downstairs at Serial Number One and work your way up.</p>

            {exhibits.map((ex) => (
              <div key={ex.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "20px 22px", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{ex.name}</h3>
                  <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{ex.gallery}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{ex.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase" }}>Why It Matters</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{ex.why}</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase" }}>Insider Tip</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{ex.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section id="bike-night" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Bike Nights & Special Events (2026)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The H-D Museum's signature summer event is the Thursday Bike Night concert series — free, outdoors, no museum ticket required.</p>

            <div style={{ backgroundColor: c.green1, color: c.cream, padding: "22px", borderRadius: "16px", marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.yellow, letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>Thursday Bike Night Concert Series</p>
              <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 10px", color: c.cream }}>Every Thursday · 5–9 p.m. · May 7 – Sept 24, 2026</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0, color: c.beige }}>
                Free live music outside the museum, drink specials and BBQ from MOTOR Bar & Restaurant, raffles, and retail deals in the H-D Shop. Bikers and non-bikers welcome. The 2026 lineup features local and regional acts including The Grovelers, Valley Fox, Wire & Nail, Third Coast Blues Collective, and a Tom Petty tribute set by Trapper Schoepp. Check harley-davidson.com/museum/events for the week-by-week schedule.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "16px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Saturday BBQ & Brews</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "600" }}>Year-round at MOTOR. Smoked BBQ, 12 rotating local & regional taps, live acoustic music. Starts at 5:30 p.m. (4:30 p.m. Nov–Dec).</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Friday Fish Fry</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "600" }}>Wisconsin tradition at MOTOR — beer-battered cod, every Friday year-round.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>S.T.E.A.M. of Motorcycles</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "600" }}>Family workshops — June 13 and August 22, 2026. Hands-on engineering for kids.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>America's 250th</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "600" }}>Exhibits in Action programming — July 11, 2026. Curator-led talks tied to the U.S. Semiquincentennial.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>First Responders Weekend</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "600" }}>October 2, 2026 — discounts and recognition for police, fire, EMS.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Skulloween & Holiday</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5, fontWeight: "600" }}>Skulloween Oct 29 · Breakfast with Santa Dec 6, 13, 20 · Handmade Holidays workshops Dec 5, 12, 19.</p>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6, margin: 0 }}>
              Confirm individual event dates and any RSVP requirements at harley-davidson.com/museum/events before you go.
            </p>
          </section>

          <section id="dining" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Dining on Campus</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>You don't need a museum ticket to eat at MOTOR. It's one of the better riverfront patios in Milwaukee — and a destination in its own right.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>MOTOR Bar & Restaurant</h3>
                <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>RIVERFRONT PATIO</span>
              </div>
              <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>Sun–Wed 11 a.m.–8 p.m. · Thu–Sat 11 a.m.–9 p.m.</p>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "14px" }}>
                Scratch-made BBQ (their smokehouse is the calling card), juicy burgers, salads, and a long bar program — floor-to-ceiling windows over the Menomonee River and what MOTOR claims is the city's largest riverfront patio. Casual, ride-in-friendly, and open to the public whether or not you're going to the museum.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "12px" }}>
                <div style={{ backgroundColor: "rgba(244,162,97,0.12)", padding: "10px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", textTransform: "uppercase" }}>Happy Hour</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>3–6 p.m. seven days a week — call (414) 287-2778 to confirm current drink and food specials.</p>
                </div>
                <div style={{ backgroundColor: "rgba(45,90,74,0.08)", padding: "10px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "4px", textTransform: "uppercase" }}>What to Order</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Smoked BBQ platter, the Friday Fish Fry, and a beer from the Saturday rotating-tap list. The riverfront patio is the seat to ask for in summer.</p>
                </div>
                <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "10px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#b8860b", marginBottom: "4px", textTransform: "uppercase" }}>Reservations</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Parties of 8 or fewer: Toast or OpenTable. Groups 20–50: complete the group dining form on motorrestaurant.com.</p>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>📍 401 W Canal St, Milwaukee, WI 53203 · (414) 287-2778</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "22px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>Café Racer (call to confirm)</h3>
                <span style={{ backgroundColor: c.green2, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>QUICK-SERVE CAFÉ</span>
              </div>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "10px" }}>
                Café Racer has historically operated as the campus's quick-serve café — espresso drinks, breakfast pastries, custom sandwiches, salads, and frozen custard, in a smaller, racing-themed space with board-track-style wood paneling. As of June 2026, the H-D Museum's official campus pages list only MOTOR Bar & Restaurant as the on-site dining option. <strong>Call (414) 287-2778 before you rely on Café Racer for breakfast or coffee</strong> — hours, days, and operating status may have shifted.
              </p>
              <p style={{ fontSize: "13px", color: "#666", margin: 0, lineHeight: 1.5 }}>Backup plan if Café Racer isn't open: MOTOR opens at 11 a.m. daily, and Walker's Point has multiple coffee shops within a 5–10 minute walk.</p>
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "26px", fontWeight: "900", marginBottom: "12px" }}>The H-D Shop & Archives</h2>
            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "20px 22px" }}>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>
                The <strong>H-D Shop</strong> and adjacent <strong>H-D Factory Outlet</strong> are open daily 10:30 a.m. to 5:30 p.m. — apparel, MotorClothes, collectibles, and museum-exclusive items. No admission ticket required to shop. The Outlet runs deeper discounts on prior-season gear.
              </p>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                The <strong>Harley-Davidson Archives</strong> — the climate-controlled vault that supplies roughly 85% of what's on the museum floor — is open to the public only via the limited guided <strong>Archives Tour</strong>. It's an upcharge, days and times vary seasonally, and slots sell out. Book through harley-davidson.com/museum or call <strong>877-436-8738</strong>. For serious enthusiasts, this is the single best part of the visit.
              </p>
            </div>
          </section>

          <section id="practical" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking, Accessibility & Practical Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The campus is purpose-built — free parking, full ADA access, and easy on/off from I-94 at the 6th & Canal exit.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Parking — Cars</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Free. Two car lots — H Lot and D Lot — on the west side of 6th Street. ~500 spaces. Accessible parking throughout.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Parking — Motorcycles</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Free. Motorcycles can pull directly onto campus and park in front of the museum — first come, first served. ~1,000 motorcycle spaces on the grounds.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Accessibility</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>All floors, dining, and restrooms ADA accessible. Wheelchairs, power chairs, scooters welcome. Complimentary wheelchairs first-come, first-served at guest services. Service animals permitted per ADA.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Photography</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Personal photography is welcome throughout the galleries. The Tank Wall is the iconic shot — best light is early morning.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Strollers & Kids</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Stroller-friendly. Kids under 5 free, 5–17 are $11. Engine Room interactives and Experience Gallery sit-on bikes are the kid magnets.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Best Time to Visit</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Weekday mornings are quietest. Thursdays in summer get busy after 4 p.m. as Bike Night arrivals roll in. Weekends in July–August are the peak.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Getting There</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>I-94 exit 6th & Canal. ~15 minutes from MKE Mitchell International. ~10-minute walk over the 6th Street Bascule Bridge from Walker's Point. ~15 minutes from the Historic Third Ward / Public Market on foot.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>How Long to Plan</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>2–3 hours for the museum. Add 60–90 min for MOTOR. Add 45 min for the H-D Shop and outdoor Davidson Park. Many visitors make it a half-day.</p>
              </div>
            </div>
          </section>

          <section id="nearby" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Walking-Distance Pairings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The museum sits at the gateway to <strong>Walker's Point</strong> — Milwaukee's craft-beer and dining neighborhood. Cross the 6th Street Bascule Bridge and these are all within a 5–15 minute walk.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px" }}>The Iron Horse Hotel</h3>
                <p style={{ fontSize: "11px", color: c.orange, fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>~9 min walk · 500 W Florida St</p>
                <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}>The Harley-themed boutique hotel — pool, shuffleboard, and a pub-style bar with happy hour Mon–Fri 4–6 p.m. The natural stay if you're in town for a Harley pilgrimage.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px" }}>MobCraft Beer</h3>
                <p style={{ fontSize: "11px", color: c.orange, fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>~10 min walk · 505 S 5th St</p>
                <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}>Crowdsourced craft brewery in the heart of Walker's Point — ~0.1 mile from the Iron Horse Hotel. Taproom with frequent food trucks.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px" }}>Camino</h3>
                <p style={{ fontSize: "11px", color: c.orange, fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>~10 min walk · 434 S 2nd St</p>
                <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}>American craft-beer gastropub with 20 rotating taps — pierogi alongside burgers, poutine and brunch. Excellent Friday fish fry. Ride-friendly.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px" }}>Bryant's Cocktail Lounge</h3>
                <p style={{ fontSize: "11px", color: c.orange, fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>~15 min walk / quick rideshare · 1579 S 9th St</p>
                <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}>Milwaukee's oldest cocktail lounge (1938). No printed menu — tell the bartender what you want. Closed Mondays. A great evening cap.</p>
              </div>
              <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 4px" }}>Movida at Hotel Madrid</h3>
                <p style={{ fontSize: "11px", color: c.orange, fontWeight: "700", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>~12 min walk · 600 S 6th St</p>
                <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}>Spanish tapas with $1 jamón croquetas at the bar during HH (Mon–Fri 4–6). Rooftop in season. One of the best food-deal HHs in the city.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Walker's Point Guide</Link>
              <Link href="/best-brewery-tours-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Brewery Tours</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do in MKE</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Happy Hour</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>MKE Breweries</Link>
              <Link href="/milwaukee-bars" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Milwaukee Bars</Link>
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurants, exhibits, events and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 6px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75 }}>Hours, prices and event schedules verified against harley-davidson.com, motorrestaurant.com, Visit Milwaukee, and Milwaukee Record in June 2026. Always confirm with the venue before traveling.</p>
        </footer>
      </div>
    </>
  );
}
