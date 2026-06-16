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

const musicSpots = {
  freeSeries: [
    {
      name: "Jazz in the Park",
      neighborhood: "East Town",
      priceRange: "Free",
      address: "Cathedral Square Park, 520 E Wells St, Milwaukee, WI 53202",
      special: "Free · Thursdays in summer",
      description: "A Milwaukee summer institution for decades — free Thursday-evening concerts on the lawn at Cathedral Square downtown. Despite the name, the East Town Association lineup spans jazz, blues, funk, salsa, swing and tribute acts, with the Cathedral Square Market running beforehand.",
      knownFor: "The classic downtown picnic-blanket scene — bring a blanket, grab food and drinks on-site, and arrive early because the lawn fills fast.",
      goodToKnow: "Annual series, typically Thursdays roughly June through early September. Music usually starts around 6 PM. Confirm the 2026 schedule and lineup at easttown.com before you go.",
      insiderTip: "Get there before 5 PM to claim grass. The crowd skews after-work and social — it's as much a downtown happy hour as a concert.",
    },
    {
      name: "Chill on the Hill",
      neighborhood: "Bay View",
      priceRange: "Free",
      address: "Humboldt Park bandshell, 3000 S Howell Ave, Milwaukee, WI 53207",
      special: "Free · Tuesdays in summer",
      description: "Bay View's beloved free Tuesday-night series on the hill at Humboldt Park, run by the Bay View Neighborhood Association with Milwaukee County Parks. Local and regional acts, food trucks, and one of the most family- and dog-friendly crowds in the city.",
      knownFor: "A relaxed, neighborhood block-party feel — blankets, lawn chairs, strollers and leashed dogs on the grassy slope facing the bandshell.",
      goodToKnow: "Annual series, typically Tuesdays from roughly June into early September. Food trucks open before the music; shows generally start around 6:30 PM. Confirm the 2026 schedule at bayviewneighborhood.org.",
      insiderTip: "Carry-ins are welcome, so pack a cooler and a blanket. Come early to grab a flat spot on the hill near the front.",
    },
    {
      name: "River Rhythms",
      neighborhood: "Westown",
      priceRange: "Free",
      address: "Pere Marquette Park, 900 N Plankinton Ave, Milwaukee, WI 53203",
      special: "Free · Wednesdays in summer",
      description: "Running since 1996, the Westown Association's free Wednesday-evening series sits right on the Milwaukee River downtown. It bills itself as the city's most diverse concert series, jumping between blues, reggae, country, Celtic, salsa and cover bands.",
      knownFor: "Riverfront setting with food and beverage vendors on-site, an easy walk from Old World Third Street and the Riverwalk.",
      goodToKnow: "Annual series, typically Wednesday evenings from roughly June through August/early September. Confirm 2026 dates and lineup with the Westown Association before going.",
      insiderTip: "Pair it with a Riverwalk stroll and dinner on Old World Third Street — the park is steps from downtown's dining.",
    },
    {
      name: "Washington Park Wednesdays",
      neighborhood: "Washington Park",
      priceRange: "Free",
      address: "Washington Park Bandshell, 4599 W Lloyd St, Milwaukee, WI 53208",
      special: "Free · Wednesdays in summer",
      description: "A free, deeply community-rooted Wednesday series at the historic Washington Park Bandshell, running since 2019. Two stages spotlight Milwaukee musicians plus dance, performance and interactive arts, with food trucks and free meals for kids.",
      knownFor: "An inclusive, all-ages neighborhood gathering that leans hard on local talent across jazz, Latin, blues and more.",
      goodToKnow: "Annual eight-week series, typically Wednesday evenings in July and August. 2026 lineup runs Wednesdays July 8 through August 26, roughly 5:30–8:30 PM — confirm before going.",
      insiderTip: "Families come for the free kids' meals and art projects. The second stage is where you catch surprising local performance acts.",
    },
    {
      name: "Tosa Tonight",
      neighborhood: "Wauwatosa",
      priceRange: "Free",
      address: "Rotary Performance Pavilion, Hart Park, 7300 Chestnut St, Wauwatosa, WI 53213",
      special: "Free · Wednesdays in summer",
      description: "Wauwatosa's free Wednesday-evening series at Hart Park's Rotary Performance Pavilion has run for more than two decades. A family-friendly, sponsor-funded lineup of quality cover bands and local acts almost every Wednesday through the summer.",
      knownFor: "An easygoing suburban park concert with free parking, a covered pavilion stage and a steady, dependable summer schedule.",
      goodToKnow: "Annual series, typically Wednesday evenings (about 6–9 PM) through the summer. Confirm the 2026 schedule and lineup at tosatonight.com.",
      insiderTip: "It's a short hop from the Wauwatosa Village restaurants and bars — make a night of it before or after the show.",
    },
  ],
  festivals: [
    {
      name: "Summerfest",
      neighborhood: "Lakefront",
      priceRange: "$$",
      address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
      special: "Late June – early July",
      description: "Billed as the world's largest music festival, Summerfest sprawls across the lakefront's Henry Maier Festival Park with hundreds of acts on roughly a dozen stages, from local bands to arena headliners on the American Family Insurance Amphitheater stage.",
      knownFor: "Eleven-plus permanent stages, lake views, and a genre range that covers everything in one ticket (amphitheater headliners ticketed separately).",
      goodToKnow: "Annual festival held over three weekend blocks. 2026 runs June 18–20, June 25–27 and July 2–4 (with separate kickoff amphitheater shows June 16–17). Confirm dates and lineup at summerfest.com.",
      insiderTip: "Ground admission gets you all the side stages — many of the best discoveries are the smaller stages, not the amphitheater.",
    },
    {
      name: "Bastille Days",
      neighborhood: "East Town",
      priceRange: "Free",
      address: "Cathedral Square Park, 520 E Wells St, Milwaukee, WI 53202",
      special: "Free · Mid-July",
      description: "One of the country's largest French-themed street festivals, free and gateless in and around Cathedral Square. Four days of live music on multiple stages, plus a glowing Eiffel Tower replica, French and Cajun food, and the late-night Storm the Bastille run.",
      knownFor: "No tickets, no gates — a true open street party with continuous live music across several stages downtown.",
      goodToKnow: "Annual free festival. 2026 dates are July 9–12 at Cathedral Square Park. Confirm the music schedule at easttown.com before going.",
      insiderTip: "Evenings on the main stage draw the biggest crowds; daytime is easier if you want to actually move around with kids.",
    },
    {
      name: "Festa Italiana",
      neighborhood: "Lakefront",
      priceRange: "$$",
      address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
      special: "Mid-July",
      description: "One of the lakefront's long-running ethnic festivals, Festa Italiana blends Italian heritage, food and a steady run of live music across the festival grounds, capped by waterfront fireworks.",
      knownFor: "Italian-American music and entertainment in a lakefront festival setting, a strong dose of food and culture alongside the stages.",
      goodToKnow: "Annual festival, typically mid-July. 2026 dates are July 10–12 at Henry Maier Festival Park. Confirm the music lineup before going.",
      insiderTip: "The lakefront ethnic festivals share a grounds and a vibe — if you like one, the others (German Fest, Irish Fest) run the same playbook.",
    },
    {
      name: "German Fest",
      neighborhood: "Lakefront",
      priceRange: "$$",
      address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
      special: "Late July",
      description: "A massive celebration of German culture on the lakefront, with multiple stages of bands, polka, brass and dance music alongside beer halls and traditional food in a city with deep German roots.",
      knownFor: "Polka and brass bands, dancing, and one of the most music-and-beer-forward of the lakefront ethnic festivals.",
      goodToKnow: "Annual festival, typically late July. 2026 dates are July 24–26 at Henry Maier Festival Park. Confirm the lineup before going.",
      insiderTip: "The dance floors are part of the show here — German Fest is participatory, not just a watch-the-stage festival.",
    },
    {
      name: "Milwaukee Irish Fest",
      neighborhood: "Lakefront",
      priceRange: "$$",
      address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
      special: "Mid-August",
      description: "Often called the world's largest celebration of Irish music and culture, Irish Fest packs the lakefront with traditional and contemporary Celtic acts across many stages, plus Mexican Fiesta closing out the lakefront festival run in late August.",
      knownFor: "An enormous Celtic music lineup — trad sessions, fiddles, pipes and big-name Irish and Irish-American touring acts.",
      goodToKnow: "Annual festival, typically mid-August. 2026 dates are August 13–16 at Henry Maier Festival Park (Mexican Fiesta follows August 21–23). Confirm lineups before going.",
      insiderTip: "Beyond the main stages, the smaller traditional music and session tents are where Irish Fest regulars actually spend their time.",
    },
  ],
  venues: [
    {
      name: "American Family Insurance Amphitheater",
      neighborhood: "Lakefront",
      priceRange: "$$$",
      address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
      special: "Summer · big-name tours",
      description: "Milwaukee's largest concert stage, the lakefront amphitheater hosts arena- and stadium-level headliners through Summerfest and on standalone summer dates — the room for the biggest tours that come through the city.",
      knownFor: "Major touring headliners on the lake, both during Summerfest and on separate ticketed nights through the summer.",
      goodToKnow: "Year-round venue with a heavy summer schedule. 2026 standalone shows include Garth Brooks (June 16–17) and others — check summerfest.com for the current calendar.",
      insiderTip: "Amphitheater shows are ticketed separately from Summerfest grounds admission — read your ticket carefully so you know what you're buying.",
    },
    {
      name: "BMO Pavilion",
      neighborhood: "Lakefront",
      priceRange: "$$$",
      address: "Henry Maier Festival Park, 200 N Harbor Dr, Milwaukee, WI 53202",
      special: "Summer · lakefront stage",
      description: "A covered lakefront stage at Henry Maier Festival Park that anchors a major Summerfest stage and hosts its own slate of standalone summer concerts across pop, rock, hip-hop and country.",
      knownFor: "A mid-to-large lakefront stage with a strong summer concert series outside the Summerfest weekends.",
      goodToKnow: "Year-round venue with a busy summer slate. 2026 standalone shows include Parker McCollum (June 4), Goo Goo Dolls (Aug 6) and Empire Of The Sun (Aug 18). Confirm the calendar at summerfest.com.",
      insiderTip: "It's the same lakefront grounds as the amphitheater and the ethnic festivals — handy if you're already planning a festival-park day.",
    },
    {
      name: "The Riverside Theater",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "116 W Wisconsin Ave, Milwaukee, WI 53203",
      special: "Year-round · Pabst Theater Group",
      description: "An opulent, historic Pabst Theater Group room on the Milwaukee River downtown. The largest of the group's indoor theaters and a go-to for national touring acts that want a grand, seated-and-standing setting.",
      knownFor: "Ornate historic interior, riverfront location, and a steady stream of well-known touring musicians and comedians.",
      goodToKnow: "Year-round venue, not weather-dependent — a strong rainy-night alternative in summer. Check pabsttheatergroup.com for the schedule.",
      insiderTip: "The Pabst Theater Group runs several rooms downtown; if a show is sold out at one, the same promoter's other venues often have something the same week.",
    },
    {
      name: "The Pabst Theater",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "144 E Wells St, Milwaukee, WI 53202",
      special: "Year-round · Pabst Theater Group",
      description: "A 1895 landmark theater downtown, intimate and acoustically prized, used primarily for touring musical artists. The flagship of the Pabst Theater Group's portfolio of rooms.",
      knownFor: "Historic, acoustically excellent room favored for singer-songwriters, indie and folk-leaning touring acts.",
      goodToKnow: "Year-round venue. Around the corner from the Riverside and the group's other rooms. Check pabsttheatergroup.com for the calendar.",
      insiderTip: "The Pabst's sound is the selling point — it's the room to see an acoustic or stripped-back act over a louder venue.",
    },
  ],
  clubs: [
    {
      name: "Cactus Club",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2496 S Wentworth Ave, Milwaukee, WI 53207",
      special: "Year-round · indie & alt",
      description: "A small Bay View room that's been a Midwest tastemaker since 1996, with a history of hosting acts (The White Stripes, Queens of the Stone Age, Bright Eyes) well before they got big. Local launching pad and touring stopover in one tight space.",
      knownFor: "Catching national indie/alt acts in a tiny room, plus a deep bench of Milwaukee bands and community events.",
      goodToKnow: "Year-round venue, intimate capacity. Shows sell out fast given the size — buy ahead. Check cactusclubmilwaukee.com.",
      insiderTip: "If a band you like is playing the Cactus Club, that usually means you're seeing them small before they move to bigger rooms.",
    },
    {
      name: "Shank Hall",
      neighborhood: "East Side",
      priceRange: "$$",
      address: "1434 N Farwell Ave, Milwaukee, WI 53202",
      special: "Year-round · East Side staple",
      description: "An East Side institution for 35-plus years, named after the joke venue in This Is Spinal Tap. A roughly 300-capacity room hosting national touring headliners, cover bands and local acts with old-school neighborhood charm.",
      knownFor: "A reliable, long-running mid-size East Side club with broad booking and a no-frills, music-first reputation.",
      goodToKnow: "Year-round venue. Standing-room club; arrive early for a good spot. Walkable from East Side bars and restaurants.",
      insiderTip: "Yes, there's a tiny Stonehenge on stage — an inside joke that's become part of Shank Hall's identity.",
    },
    {
      name: "X-Ray Arcade",
      neighborhood: "Cudahy",
      priceRange: "$$",
      address: "5036 S Packard Ave, Cudahy, WI 53110",
      special: "Year-round · punk/emo & DIY",
      description: "A DIY-spirited room in Cudahy just south of the city, leaning punk, emo and hardcore, with a consistently boundary-pushing lineup and strong local openers — plus a wall of refurbished arcade games to play between sets.",
      knownFor: "All-ages-friendly punk and emo bookings and the playable retro arcade machines that give it its name.",
      goodToKnow: "Year-round venue. South of Milwaukee in Cudahy, an easy drive from Bay View. Check xrayarcade.com for shows.",
      insiderTip: "Get there early to actually play the arcade cabinets — Pac-Man and Galaga while you wait for the opener is the whole point.",
    },
    {
      name: "Turner Hall Ballroom & Vivarium",
      neighborhood: "Downtown / East Side",
      priceRange: "$$",
      address: "Turner Hall: 1034 N Vel R. Phillips Ave; Vivarium: 1818 N Farwell Ave, Milwaukee, WI",
      special: "Year-round · Pabst Theater Group",
      description: "Two mid-size Pabst Theater Group rooms for a step up from the clubs: Turner Hall Ballroom, an eclectic all-ages space inside a National Historic Landmark downtown, and Vivarium, a 450-seat East Side room opened in 2024.",
      knownFor: "Turner Hall's historic ballroom character and Vivarium's newer, intimate listening-room setup — both broadly booked.",
      goodToKnow: "Year-round venues. Both run by the Pabst Theater Group; share the calendar at pabsttheatergroup.com.",
      insiderTip: "Turner Hall is general-admission and standing — Vivarium is the more comfortable, seated-leaning option if that matters to you.",
    },
  ],
  bars: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Brewers Hill",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      special: "Year-round · riverfront beer hall",
      description: "A defining Milwaukee experience: a riverfront beer hall and patio along the Milwaukee River with brewery tours and a legendary Friday polka fish fry where a live polka band turns dinner into a party.",
      knownFor: "The Friday polka fish fry — live polka, beer hall energy, and a quintessentially Milwaukee night out.",
      goodToKnow: "Year-round venue; the patio is the summer draw. The polka fish fry is a Friday tradition — confirm hours at lakefrontbrewery.com.",
      insiderTip: "Go Friday for the fish fry and polka — it's the most Milwaukee thing on this list and worth doing once even if polka isn't your genre.",
    },
    {
      name: "Estabrook Beer Garden",
      neighborhood: "Shorewood",
      priceRange: "$$",
      address: "4600 Estabrook Dr, Milwaukee, WI 53211",
      special: "Free entry · seasonal beer garden",
      description: "The first public beer garden in the U.S. since Prohibition, set on a bluff above the Milwaukee River with Munich Hofbräuhaus beer and live music on select nights through the warm-weather season.",
      knownFor: "A traditional German beer garden setting in the trees by the river, with rotating live music nights in season.",
      goodToKnow: "Seasonal — typically open spring through fall, weather permitting. Music nights vary; check estabrookbeergarden.com for the schedule.",
      insiderTip: "Music here is a backdrop to the beer garden, not a ticketed show — go for the riverside setting and let the band be a bonus.",
    },
    {
      name: "Kegel's Inn Beer Garden",
      neighborhood: "West Allis",
      priceRange: "$$",
      address: "5901 W National Ave, West Allis, WI 53214",
      special: "Free entry · weekly live music",
      description: "A historic West Allis supper club and tavern whose seasonal beer garden runs live local music weekly through the summer — a low-key, neighborhood way to catch a band over German food and beer.",
      knownFor: "Weekly summer beer-garden music in a longtime family-run West Allis institution.",
      goodToKnow: "Seasonal beer garden with weekly live music in the warm months. Confirm the music schedule and hours with Kegel's Inn before going.",
      insiderTip: "Pair the music night with the supper-club menu inside — it's a full old-Milwaukee evening, not just a beer garden stop.",
    },
  ],
};

const faqs = [
  {
    question: "Where can I see free live music in Milwaukee this summer?",
    answer: "Milwaukee has a deep bench of free outdoor concert series: Jazz in the Park (Thursdays, Cathedral Square downtown), Chill on the Hill (Tuesdays, Humboldt Park in Bay View), River Rhythms (Wednesdays, Pere Marquette Park downtown), Washington Park Wednesdays, and Tosa Tonight (Wednesdays, Hart Park in Wauwatosa). Bastille Days in mid-July is also a free gateless festival with multiple music stages. These are annual traditions — confirm the 2026 schedules before going.",
  },
  {
    question: "What is Jazz in the Park and Chill on the Hill?",
    answer: "They're Milwaukee's two best-known free summer concert series. Jazz in the Park is a decades-old Thursday-evening series at Cathedral Square Park downtown (run by the East Town Association) spanning jazz, blues, funk and more. Chill on the Hill is a free Tuesday-night series on the hill at Humboldt Park in Bay View, run by the Bay View Neighborhood Association — family- and dog-friendly, with food trucks. Both are annual; confirm 2026 dates and lineups before heading out.",
  },
  {
    question: "When is Summerfest 2026?",
    answer: "Summerfest is an annual lakefront music festival at Henry Maier Festival Park, traditionally held over multiple late-June/early-July weekends. For 2026 it runs June 18–20, June 25–27 and July 2–4, with separate kickoff amphitheater shows June 16–17. Always confirm dates and lineup at summerfest.com, since the schedule can change.",
  },
  {
    question: "What are the best outdoor concert venues in Milwaukee?",
    answer: "On the lakefront, the American Family Insurance Amphitheater hosts the biggest touring headliners and the covered BMO Pavilion runs its own strong summer series — both at Henry Maier Festival Park. For free outdoor shows, the park bandshells and lawns at Humboldt Park, Cathedral Square, Pere Marquette Park, Washington Park and Hart Park (Wauwatosa) anchor the city's free series all summer.",
  },
  {
    question: "Where can I see live music in Bay View or on the East Side?",
    answer: "Bay View's Cactus Club is a tiny, well-respected indie/alt room, and Chill on the Hill brings free Tuesday concerts to Humboldt Park. On the East Side, Shank Hall is a 35-plus-year mid-size club staple and Vivarium is a newer 450-seat Pabst Theater Group room. Just south in Cudahy, X-Ray Arcade leans punk and emo with playable retro arcade games.",
  },
  {
    question: "Are there free summer concerts for families in Milwaukee?",
    answer: "Yes. Chill on the Hill (Humboldt Park, Tuesdays) is famously family- and dog-friendly with food trucks, and Washington Park Wednesdays offers free kids' meals, art projects and a second performance stage. Tosa Tonight at Hart Park in Wauwatosa is a relaxed family-oriented suburban series with free parking. All are annual traditions — confirm 2026 schedules before you go.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Live Music in Milwaukee This Summer 2026: Free Concerts, Festivals & Venues",
    "description": "A researched guide to summer live music in Milwaukee — free outdoor concert series, lakefront festivals, amphitheaters and intimate clubs for the 2026 season.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-18",
    "dateModified": "2026-05-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/summer-live-music-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Summer Live Music Milwaukee", "item": "https://www.discover-milwaukee.com/summer-live-music-milwaukee" }
    ]
  }
};

export default function SummerLiveMusicMilwaukee() {
  const MusicCard = ({ spot }) => (
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
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>KNOWN FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.knownFor}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>GOOD TO KNOW</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.goodToKnow}</p>
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
        <title>Live Music in Milwaukee This Summer 2026 | Free Concerts, Festivals & Venues</title>
        <meta name="description" content="Where to find live music in Milwaukee this summer: free outdoor concert series, lakefront festivals like Summerfest, amphitheaters and intimate clubs for the 2026 season." />
        <meta name="keywords" content="live music milwaukee summer, free concerts milwaukee, milwaukee summer concert series, summerfest, jazz in the park milwaukee, chill on the hill, milwaukee music venues" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/summer-live-music-milwaukee" />

        <meta property="og:title" content="Live Music in Milwaukee This Summer 2026 | Free Concerts, Festivals & Venues" />
        <meta property="og:description" content="Milwaukee's summer live music guide — free outdoor series, lakefront festivals, amphitheaters and clubs for the 2026 season." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/summer-live-music-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>SUMMER 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Live Music in Milwaukee This Summer
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Milwaukee is a summer music city — free park concerts almost every night of the week, the world's largest music festival on the lake, and clubs that catch bands before they get big. Here's where to go.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Lineups, dates and schedules change every season. The free series are annual traditions — always confirm the current 2026 schedule, times and lineup with the organizer or venue before you go.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Free Outdoor Concert Series</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The summer gold — free, weekly, neighborhood park concerts you can hit a different night of the week all season.
            </p>
            {musicSpots.freeSeries.map((spot, i) => <MusicCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Festivals & Big Stages</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Summerfest and the lakefront festival run — multi-day, multi-stage music marathons by the water.
            </p>
            {musicSpots.festivals.map((spot, i) => <MusicCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Major Venues & Amphitheaters</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Where the big tours land — lakefront amphitheater stages and the historic downtown theaters.
            </p>
            {musicSpots.venues.map((spot, i) => <MusicCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Clubs & Intimate Venues</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Small rooms with big reputations — where you catch bands close up before they move to bigger stages.
            </p>
            {musicSpots.clubs.map((spot, i) => <MusicCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bars & Patios with Live Music</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Beer halls, beer gardens and taverns where the music is a bonus to a classic Milwaukee summer night.
            </p>
            {musicSpots.bars.map((spot, i) => <MusicCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/live-music-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Live Music Milwaukee</Link>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Festivals</Link>
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
