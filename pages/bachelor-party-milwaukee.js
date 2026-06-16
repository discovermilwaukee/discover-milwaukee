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

const bachelor = {
  activities: [
    { name: "Lakefront Brewery Tour", category: "Brewery Tour", priceRange: "$", address: "1872 N Commerce St, Milwaukee, WI 53212", special: "Lakefront's famously funny tour", activityStyle: "Milwaukee's most-loved brewery tour — stand-up-comedy-level guides, four pours, a souvenir glass and a token for an extra beer in the beer hall after. The hour your groomsmen will quote for weeks.", mustTry: "The Riverwest Stein lager, then stay for the Friday-night fish fry and live polka band in the beer hall.", vibe: "Loud, group-friendly, comedians-with-day-jobs energy — this is the brewery tour that converts non-tour people", insiderTip: "Book the Friday 5 p.m. or 6 p.m. tour — the tour wraps right as the fish fry kicks off in the next room, so you don't move." },
    { name: "Mini-Golf Brewery Tour by City Tours MKE", category: "Brewery + Activity", priceRange: "$$$", address: "Pickup downtown Milwaukee", special: "Putt-putt course inside each brewery", activityStyle: "Motor-coach brewery tour with a twist — at every brewery, you play a hole of mini-golf set up on the floor while you taste. Three breweries, three holes, a leaderboard.", mustTry: "Side-bet the leaderboard — loser at each brewery buys the next round. By stop three the bets are degenerate.", vibe: "Competitive, lightly buzzed, dumb in the best way — solves the 'what do we do during the day' problem cold", insiderTip: "Tell them at booking it's a bachelor party — they'll usually let you put the groom in a custom jersey or hat for the day." },
    { name: "NorthSouth Club", category: "Axe + Deck Shuffleboard", priceRange: "$$", address: "238 N Water St, Milwaukee, WI 53202", special: "Axe throwing + deck shuffleboard + cocktail bar", activityStyle: "Third Ward club that combines axe-throwing lanes, full-size deck shuffleboard courts and a serious cocktail bar in one room. Reserve lanes and courts for the group.", mustTry: "A 90-minute lane reservation plus a shuffleboard court — rotate the group, two events on one tab.", vibe: "Industrial-luxe, low-lit, dudes-with-hatchets-and-old-fashioneds energy", insiderTip: "Book a lane AND a shuffleboard court at the same time — half the group throws, half plays, and you swap. Twice the activity, no waiting around." },
    { name: "Topgolf Brookfield", category: "Driving Range / Bays", priceRange: "$$$", address: "5101 S Moorland Rd, New Berlin, WI 53151", special: "Climate-controlled hitting bays + bar", activityStyle: "Three-level Topgolf with heated hitting bays, target greens, full food menu and a long beer/cocktail list. Reserve a bay for the group; the games make it work even for non-golfers.", mustTry: "A two-hour bay for 6 with the appetizer tower — that's the bachelor-party math.", vibe: "Loud, screens everywhere, plenty of beer and zero scorekeeping pressure", insiderTip: "Late-morning slots (10 a.m.–noon) are dramatically cheaper than evening — book the morning, hit the brewery tour in the afternoon." },
    { name: "AMPED Karaoke", category: "Private Karaoke Suites", priceRange: "$$", address: "1037 W Juneau Ave, Milwaukee, WI 53233", special: "Private suites for 6–125 in the Brewery District", activityStyle: "Private-room karaoke in the historic Brewery District — eight themed suites, full bar service to the door, suites scale from 6 people to 125 for the whole bachelor party plus partners.", mustTry: "Book the largest themed suite your group fits, pre-order a bottle service round, and assign someone to queue the groom's most-embarrassing song.", vibe: "No public stage, no waiting in line — just your group, your room, your shame", insiderTip: "Walking distance to a half-dozen Brewery District bars — make this Stop 3 of the night, not Stop 1." },
    { name: "Howl at the Moon Milwaukee", category: "Dueling Pianos", priceRange: "$$", address: "1115 N Old World 3rd St, Milwaukee, WI 53203", special: "Dueling-piano sing-along bar downtown", activityStyle: "Downtown dueling-pianos bar — two pianists trade requests, the room sings along, group-tip the groom up on stage. Books reserved tables and VIP packages for bachelor parties.", mustTry: "Reserved table package with bottle service and a tip-the-groom-up-on-stage request.", vibe: "Loud sing-alongs, bachelor parties everywhere, weaponized fun", insiderTip: "Book the reserved seating — the line for general admission on a Saturday is brutal and you've got 12 guys you need to keep together." },
    { name: "American Family Field — Milwaukee Brewers", category: "MLB Game", priceRange: "$$", address: "1 Brewers Way, Milwaukee, WI 53214", special: "Brewers home games April–September", activityStyle: "Major League Baseball at one of the most fun stadiums in the country — retractable roof, the legendary Klement's Sausage Race, Bernie's slide and the largest tailgating scene in MLB.", mustTry: "Tailgate the parking lot 3 hours before first pitch (brats, beer, cornhole), then group seats together in the loge or bleachers.", vibe: "Tailgate-first baseball — the parking lot is half the experience", insiderTip: "Sundays often have day-game starts (1:10 p.m.) — perfect day-two recovery move that's still beer-and-brats." },
  ],
  eat: [
    { name: "Five O'Clock Steakhouse", category: "Old-School Steakhouse", priceRange: "$$$", address: "2416 W State St, Milwaukee, WI 53233", special: "Milwaukee supper-club steakhouse since 1948", activityStyle: "Classic Milwaukee supper-club steakhouse — start in the dark cocktail lounge with a brandy old-fashioned, then move to the dining room for hand-cut steaks, the relish tray and shrimp cocktail. Takes large groups with reservations.", mustTry: "A bone-in ribeye, a brandy old-fashioned (sweet) to start, and the relish tray for the table.", vibe: "Dark wood, leather booths, brown-liquor-and-red-meat Milwaukee tradition", insiderTip: "Drinks first in the lounge for 30 minutes before your dining-room reservation — that's how locals do it." },
    { name: "Carnevor", category: "Modern Steakhouse", priceRange: "$$$$", address: "718 N Milwaukee St, Milwaukee, WI 53202", special: "Downtown chophouse, group dining room", activityStyle: "Modern downtown steakhouse — prime beef, raw bar, wagyu cuts, an extensive wine and bourbon list and a private dining room that fits a bachelor party. The dressier dinner option.", mustTry: "The wagyu strip, the raw bar tower for the table and a flight of bourbon.", vibe: "Dark, suited-up, expense-account energy — the right room for a rehearsal-grade dinner", insiderTip: "Reserve the private dining room when you book the group — the main room gets loud and the private room comes with its own server and bourbon walk-through." },
    { name: "Real Chili — Late-Night Recovery", category: "Late-night", priceRange: "$", address: "419 E Wells St, Milwaukee, WI 53202", special: "Iconic Milwaukee chili joint open since 1931", activityStyle: "The Milwaukee bachelor-party-aftermath play: a Marquette-style chili-mac (chili over spaghetti) after the bar at one of the city's longest-running late-night counters.", mustTry: "Marquette-style chili-mac, mild or hot.", vibe: "Function over form — the food that gets a 14-man bachelor party through Sunday", insiderTip: "Real Chili stays open very late on weekend nights — it's the last stop before Ubers home." },
    { name: "Lakefront Brewery Fish Fry", category: "Friday Fish Fry", priceRange: "$$", address: "1872 N Commerce St, Milwaukee, WI 53212", special: "Friday fish fry with live polka", activityStyle: "Classic Milwaukee Friday-night ritual — fried lake perch or cod, potato pancakes, applesauce, rye bread and a live polka band in the brewery beer hall. Takes large parties first-come.", mustTry: "Lake perch dinner, potato pancakes, a Riverwest Stein and at least one polka.", vibe: "Long shared tables, the polka band on stage, accordions and a 16-man bachelor party fitting right in", insiderTip: "Pair this with the 5 p.m. tour — tour wraps, you walk 30 feet, you're at the fish fry table." },
  ],
  drink: [
    { name: "The Safe House", category: "Spy-Themed Speakeasy", priceRange: "$$", address: "779 N Front St, Milwaukee, WI 53202", special: "Spy-themed bar with secret entrance (since 1966)", activityStyle: "Iconic Milwaukee spy-themed bar — you need a password (or do a stunt) to get in, the interior is packed with espionage memorabilia and hidden passages, and bachelor-party group packages are baked into how the place runs.", mustTry: "The Spyfall cocktail and the group bachelor package — they will absolutely put the groom through it.", vibe: "Theatrical, gimmicky in the best way, the most-photographed bar in the city", insiderTip: "Tell them at the door it's a bachelor party — the staff will pick on the groom for the rest of the night, which is exactly what you want." },
    { name: "Bryant's Cocktail Lounge", category: "Classic Cocktail Bar", priceRange: "$$", address: "1579 S 9th St, Milwaukee, WI 53204", special: "America's first cocktail lounge (since 1938)", activityStyle: "No menu — describe what you like and the bartender builds a classic-trained cocktail for you. National cocktail-press regular. Old-school Milwaukee through and through.", mustTry: "Tell them you want something bourbon-forward — and let the bartender freestyle.", vibe: "Dim red lighting, velvet, no phones at the bar, jazz on low", insiderTip: "Go early in the night while the bartenders have time to engage with the group — this is the conversation drink, not the closer." },
    { name: "Brenner Brewing Co.", category: "Brewery", priceRange: "$", address: "706 S 5th St, Milwaukee, WI 53204", special: "Walker's Point brewery taproom", activityStyle: "Walker's Point craft brewery with a full taproom — flights, pints and a beer-garden-style room that takes groups without reservations. Walking distance to a dozen-plus bars and breweries in Walker's Point.", mustTry: "Flight of four to taste through, then settle on a pint for the patio.", vibe: "Industrial, taproom-and-patio, ground-zero of the Walker's Point bar district", insiderTip: "Make this Stop 1 of the Walker's Point crawl — get the beer-y taste-test out of the way early, then walk to the cocktail bars." },
    { name: "Wolski's Tavern", category: "Dive Bar (Legendary)", priceRange: "$", address: "1836 N Pulaski St, Milwaukee, WI 53202", special: "Open since 1908 — home of the 'I Closed Wolski's' bumper sticker", activityStyle: "Legendary Milwaukee dive bar — wood-paneled, cash-only-vibes, free 'I Closed Wolski's' bumper sticker if you're there at closing time. The bachelor-party rite of passage closer.", mustTry: "Whatever's on tap, a shot of Jameson, and stay until you earn the bumper sticker.", vibe: "Hyper-local, no-frills, generations-of-regulars dive — the realest Milwaukee bar on this page", insiderTip: "The bumper sticker is the whole point — stay until close (2 a.m.) or don't come." },
    { name: "Camp Bar — Third Ward", category: "Sports Bar / Cocktail Bar", priceRange: "$$", address: "211 N Broadway, Milwaukee, WI 53202", special: "Wisconsin-supper-club-meets-sports-bar in the Third Ward", activityStyle: "Third Ward bar styled like a Northwoods Wisconsin lodge — taxidermy, log walls, a long bourbon list, Wisconsin old-fashioneds and big TVs for whatever game is on. Holds a bachelor party comfortably.", mustTry: "A proper Wisconsin brandy old-fashioned (sweet) and whatever game is on the big screen.", vibe: "Lodge-and-leather Wisconsin — sports bar without the wing-night chaos", insiderTip: "If a Bucks or Brewers game is on, this is a great no-stress watch spot for the group." },
  ],
  stay: [
    { name: "Iron Horse Hotel", category: "Boutique (Walker's Point)", priceRange: "$$$", address: "500 W Florida St, Milwaukee, WI 53204", special: "The gold-standard bachelor-party hotel", activityStyle: "Industrial-luxe boutique inside a converted Walker's Point warehouse — leather, exposed brick, motorcycle iconography. Walkable to the densest cluster of bars and breweries in Milwaukee. Suites large enough to pre-game the whole group together.", mustTry: "The Yard King Suite (sleeps multiple, opens onto the courtyard) — book it for the groom as the group's HQ.", vibe: "If a hotel can be 'for the boys' without trying, this is it — leather, brick, bourbon-lobby energy", insiderTip: "Walk to Brenner Brewing, Bryant's Cocktail Lounge and a dozen Walker's Point bars from the door — zero Ubers all weekend if you base here." },
    { name: "Kimpton Journeyman Hotel", category: "Boutique (Third Ward)", priceRange: "$$$", address: "310 E Chicago St, Milwaukee, WI 53202", special: "Third Ward boutique with rooftop bar", activityStyle: "Modern boutique in the Historic Third Ward with Tre Rivali downstairs and rooftop access upstairs. Walk to dinner, drinks and the Pedal Tavern pickup.", mustTry: "Book a group block, meet in the lobby bar pre-dinner, walk everywhere from there.", vibe: "Stylish, central, the easiest 'walk-to-everything' base camp for a downtown bachelor party", insiderTip: "Walking distance to Carnevor, NorthSouth Club, Howl at the Moon and the Riverwalk — no rideshares between any of the night's stops." },
    { name: "Brewhouse Inn & Suites", category: "Themed (Brewery District)", priceRange: "$$", address: "1215 N 10th St, Milwaukee, WI 53205", special: "Inside the historic Pabst brewery complex", activityStyle: "All-suite hotel built inside the original Pabst Brewing complex — original copper brew kettles preserved in the lobby, stained-glass King Gambrinus window, suites with kitchens for the group. Walking distance to AMPED Karaoke and Best Place at Pabst.", mustTry: "An all-suites bachelor block — kitchens in every room means pre-game catering is easy.", vibe: "Beer-history-pilgrimage stay — the most thematically-on-brand Milwaukee hotel for a bachelor weekend", insiderTip: "Walk to Best Place at Pabst for their guided beer tour right inside the complex — best on-foot brewery visit in the city." },
  ],
};

const sampleItinerary = [
  { time: "Friday 4:00 PM", activity: "Check in at Iron Horse Hotel, group cigars in the courtyard." },
  { time: "Friday 5:00 PM", activity: "Lakefront Brewery tour (the famously funny one)." },
  { time: "Friday 7:00 PM", activity: "Friday fish fry + polka at Lakefront, in the same room." },
  { time: "Friday 10:00 PM", activity: "The Safe House — make the groom do the password stunt." },
  { time: "Friday 12:30 AM", activity: "Wolski's Tavern — stay until close, earn the bumper sticker." },
  { time: "Saturday 11:00 AM", activity: "Topgolf Brookfield — late-morning bay, beers and brunch food." },
  { time: "Saturday 2:00 PM", activity: "Mini-Golf Brewery Tour by City Tours MKE — three breweries, three holes." },
  { time: "Saturday 7:00 PM", activity: "Steak dinner at Five O'Clock Steakhouse — old-fashioneds in the lounge first." },
  { time: "Saturday 10:00 PM", activity: "AMPED private karaoke suite, then NorthSouth Club for axe + shuffleboard." },
  { time: "Sunday 11:00 AM", activity: "Coffee and recovery, or Sunday 1:10 p.m. Brewers tailgate if in season." },
];

const faqs = [
  { question: "Where should a bachelor party stay in Milwaukee?", answer: "Three proven picks. Iron Horse Hotel in Walker's Point is the gold standard for groomsmen weekends — industrial-luxe rooms, group-friendly suites, walkable to a dozen-plus bars and breweries. Kimpton Journeyman in the Third Ward is the central walk-to-everything pick. Brewhouse Inn & Suites in the historic Pabst brewery complex is the most thematically-on-brand option — all-suite rooms with kitchens for the group." },
  { question: "What are the best bachelor party activities in Milwaukee?", answer: "Lakefront Brewery's famously funny tour is the unanimous opener. The Mini-Golf Brewery Tour by City Tours MKE (mini-golf inside three breweries) solves the daytime question. NorthSouth Club in the Third Ward combines axe throwing, deck shuffleboard and a serious cocktail bar in one room. Topgolf Brookfield is the late-morning move. AMPED in the Brewery District has private karaoke suites for 6 to 125." },
  { question: "Can you do a sports game + brewery tour in the same day for a Milwaukee bachelor party?", answer: "Yes — and it's the move. Brewers home games run April through September at American Family Field; tailgate the parking lot starting 3 hours before first pitch. For day games (often Sundays at 1:10 p.m.) you can tailgate, watch the game, then hit a brewery tour at 5 p.m. — Lakefront Brewery, Brenner Brewing in Walker's Point, or the Best Place at Pabst tour all fit cleanly into the evening." },
  { question: "What are the best steakhouses for a bachelor party in Milwaukee?", answer: "Five O'Clock Steakhouse on W State St (open since 1948) is the classic Milwaukee supper-club steakhouse — dark lounge for old-fashioneds first, then the dining room for hand-cut steaks and the relish tray. Carnevor downtown is the modern chophouse pick — prime beef, wagyu, raw bar tower and a private dining room that fits a bachelor party. Both take group reservations." },
  { question: "Where's the best axe throwing in Milwaukee for a group?", answer: "NorthSouth Club in the Third Ward is the top pick because it combines axe-throwing lanes, deck shuffleboard courts and a full cocktail bar in one room — book a lane and a court at the same time and rotate the group. AXE MKE on the East Side is the more dedicated axe-only experience with coached lanes and a serious bar." },
  { question: "Best sports bars and dive bars in Milwaukee for a bachelor party?", answer: "For the lodge-and-leather sports-bar vibe, Camp Bar in the Third Ward. For the legendary Milwaukee dive bar experience, Wolski's Tavern — open since 1908, and the bachelor party isn't real until someone earns the 'I Closed Wolski's' bumper sticker at 2 a.m. For the spy-themed group spectacle, The Safe House." },
  { question: "How early should you book a Milwaukee bachelor party?", answer: "Three months minimum, six if it's a peak weekend (Brewers home stand, Summerfest, fall Bucks games). The Iron Horse Hotel sells out for summer weekends. AMPED's large karaoke suites book a month-plus out. The Mini-Golf Brewery Tour by City Tours MKE has limited dates. Lock the hotel and the Saturday-afternoon main activity first." },
  { question: "What's a good Milwaukee bachelor party weekend itinerary?", answer: "Friday: check in at the Iron Horse, Lakefront Brewery tour at 5 p.m., Lakefront fish fry, The Safe House, close Wolski's. Saturday: late-morning Topgolf, afternoon Mini-Golf Brewery Tour, steakhouse dinner at Five O'Clock, private karaoke at AMPED, axe + shuffleboard at NorthSouth Club. Sunday: coffee and recovery, or if it's in season, a 1:10 p.m. Brewers tailgate." },
];

const allActivities = [...bachelor.activities, ...bachelor.eat, ...bachelor.drink, ...bachelor.stay];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Bachelor Party Guide 2026: Activities & Bars",
    "description": "A researched 2026 guide to Milwaukee bachelor party activities, brewery tours, steakhouses, sports bars, axe throwing and group-friendly hotels.",
    "image": "https://www.discover-milwaukee.com/images/bachelor-party-og.svg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-06-04",
    "dateModified": "2026-06-04",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/bachelor-party-milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Bachelor Party Milwaukee", "item": "https://www.discover-milwaukee.com/bachelor-party-milwaukee" }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Milwaukee Bachelor Party Activities, Bars & Hotels",
    "description": "Researched activities, restaurants, bars and hotels for a Milwaukee bachelor party in 2026.",
    "numberOfItems": allActivities.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": allActivities.map((spot, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": spot.name,
        "description": spot.activityStyle,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": spot.address.split(",")[0].trim(),
          "addressLocality": (spot.address.match(/,\s*([^,]+?),\s*WI/) || [, "Milwaukee"])[1],
          "addressRegion": "WI",
          "postalCode": (spot.address.match(/WI\s+(\d{5})/) || [, ""])[1],
          "addressCountry": "US"
        }
      }
    }))
  }
};

export default function BachelorMilwaukee() {
  const ActivityCard = ({ spot }) => (
    <div style={{ backgroundColor: c.cream, borderRadius: "16px", padding: "24px", marginBottom: "20px", border: `1px solid ${c.beige}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.category}</span>
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.activityStyle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
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
        <title>Milwaukee Bachelor Party Guide 2026: Activities & Bars</title>
        <meta name="description" content="Milwaukee bachelor party guide 2026: brewery tours, axe throwing, Brewers games, steakhouses, dueling pianos, dive bars, the Safe House and group hotels." />
        <meta name="keywords" content="bachelor party milwaukee, milwaukee bachelor party, milwaukee brewery tour, milwaukee axe throwing, milwaukee party planning, milwaukee steakhouses, milwaukee sports bars, iron horse hotel milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/bachelor-party-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Bachelor Party Guide 2026: Activities & Bars" key="og:title" />
        <meta property="og:description" content="The 2026 guide to Milwaukee bachelor parties — brewery tours, axe throwing, Brewers games, steakhouses, dueling pianos, dive bars and group-friendly hotels." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/bachelor-party-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/bachelor-party-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee Bachelor Party Guide — brewery tours, axe throwing, steakhouses and group hotels." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-04T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-04T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Events" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Bachelor Party Guide 2026: Activities & Bars" key="twitter:title" />
        <meta name="twitter:description" content="Brewery tours, axe throwing, Brewers games, steakhouses, dueling pianos, dive bars and group-friendly hotels — the 2026 Milwaukee bachelor guide." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/bachelor-party-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 4, 2026 · GROOMSMEN-TESTED PICKS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>The Ultimate Milwaukee Bachelor Party Guide</h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>Brewery tours, axe throwing, Brewers tailgates, supper-club steakhouses, the Safe House, dive bars, dueling pianos and the hotel groomsmen actually want to stay in. A weekend the groom won't be allowed to forget.</p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Confirm hours, group sizes and bachelor-party policies with each venue before you book. Planning the other side? See our <Link href="/bachelorette-party-milwaukee" style={{ color: c.green2 }}>Milwaukee bachelorette party guide</Link>. Pair this with <Link href="/best-brewery-tours-milwaukee" style={{ color: c.green2 }}>Milwaukee's best brewery tours</Link>, the <Link href="/best-steakhouses-milwaukee" style={{ color: c.green2 }}>best steakhouses</Link>, and <Link href="/milwaukee-hotels" style={{ color: c.green2 }}>where to stay</Link>.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bachelor Party Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Brewery tours, axe + deck shuffleboard, Topgolf, private karaoke, dueling pianos and a Brewers tailgate — the daytime and prime-time moves.</p>
            {bachelor.activities.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Classic supper-club steakhouses, modern chophouses, Friday fish fry and the late-night chili that gets the group home.</p>
            {bachelor.eat.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The Safe House group package, Bryant's century-old cocktail lounge, a Walker's Point taproom, a Wisconsin sports-lodge bar and the legendary Wolski's dive close.</p>
            {bachelor.drink.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Stay</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Iron Horse is the gold standard for groomsmen weekends — plus the central Third Ward boutique and the most-on-brand all-suite hotel inside the historic Pabst brewery complex.</p>
            {bachelor.stay.map((spot, i) => <ActivityCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Sample Bachelor Weekend Itinerary</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>A copy-paste two-and-a-half-day plan for the group chat — Friday brewery-and-fish-fry, Saturday all-day moves, Sunday recovery.</p>
            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", border: `1px solid ${c.beige}` }}>
              {sampleItinerary.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "12px 0", borderBottom: i === sampleItinerary.length - 1 ? "none" : `1px solid ${c.beige}` }}>
                  <div style={{ minWidth: "140px", color: c.orange, fontWeight: "700", fontSize: "14px" }}>{item.time}</div>
                  <div style={{ color: c.green1, fontSize: "15px", lineHeight: 1.6 }}>{item.activity}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Plan the Rest of the Weekend</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-brewery-tours-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Brewery Tours</Link>
              <Link href="/best-steakhouses-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Steakhouses</Link>
              <Link href="/milwaukee-hotels" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Hotels</Link>
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
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
