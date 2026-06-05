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

const DAYS = [
  { id: "all", label: "All Days", date: null },
  { id: "pre", label: "Pre-Festival", date: "Jun 16–17" },
  { id: "jun18", label: "Thu Jun 18", date: "Weekend 1" },
  { id: "jun19", label: "Fri Jun 19", date: "Weekend 1" },
  { id: "jun20", label: "Sat Jun 20", date: "Weekend 1" },
  { id: "jun25", label: "Thu Jun 25", date: "Weekend 2" },
  { id: "jun26", label: "Fri Jun 26", date: "Weekend 2" },
  { id: "jun27", label: "Sat Jun 27", date: "Weekend 2" },
  { id: "jul2", label: "Thu Jul 2", date: "Weekend 3" },
  { id: "jul3", label: "Fri Jul 3", date: "Weekend 3" },
  { id: "jul4", label: "Sat Jul 4", date: "Weekend 3" },
];

const lineup = [
  { day: "pre", date: "Jun 16 + 17, 2026", venue: "AmFam Amphitheater", artist: "Garth Brooks", support: "Two-night pre-festival stand", note: "Amphitheater ticket required — separate from grounds admission." },
  { day: "jun18", date: "Jun 18, 2026", venue: "BMO Pavilion", artist: "Charlie Wilson", support: "Opening night Uncle Charlie", note: "BMO Pavilion is reserved seating; check ticket type." },
  { day: "jun20", date: "Jun 20, 2026", venue: "AmFam Amphitheater", artist: "Carín León", support: "Closes Weekend 1", note: "Regional-Mexican crossover headliner closes the first weekend." },
  { day: "jun20", date: "Jun 20, 2026", venue: "BMO Pavilion", artist: "David Lee Roth", support: "Solo Roth, full hits set", note: "Reserved BMO Pavilion show — limited GA seating." },
  { day: "jun25", date: "Jun 25, 2026", venue: "AmFam Amphitheater", artist: "Ed Sheeran", support: "Opens Weekend 2", note: "Looper-pedal solo setup + full hit catalog. Sells out fast." },
  { day: "jun25", date: "Jun 25, 2026", venue: "BMO Pavilion", artist: "The Roots", support: "Legendary live hip-hop", note: "One of the most-anticipated BMO Pavilion bookings for 2026." },
  { day: "jun26", date: "Jun 26, 2026", venue: "AmFam Amphitheater", artist: "Cody Johnson", support: "Traditional country night", note: "Neo-traditional country with crowd-singing setlist." },
  { day: "jun27", date: "Jun 27, 2026", venue: "AmFam Amphitheater", artist: "Post Malone w/ Carter Faith", support: "Carter Faith opens", note: "Closes Weekend 2 with the pop-rap-into-country-curious bill." },
  { day: "jun27", date: "Jun 27, 2026", venue: "BMO Pavilion", artist: "Russell Dickerson", support: "Country pavilion night", note: "Reserved-seat pavilion show on the same night as Post Malone." },
  { day: "jul2", date: "Jul 2, 2026", venue: "AmFam Amphitheater", artist: "Muse", support: "Opens Weekend 3", note: "Full arena-rock production at the amphitheater." },
  { day: "jul2", date: "Jul 2, 2026", venue: "BMO Pavilion", artist: "Ella Mai", support: "R&B pavilion show", note: "BMO Pavilion night for the Grammy-winning vocalist." },
  { day: "jul3", date: "Jul 3, 2026", venue: "AmFam Amphitheater", artist: "Alex Warren", support: "Fan Appreciation Day", note: "July 3 is also free-admission noon–3 on the grounds." },
  { day: "jul3", date: "Jul 3, 2026", venue: "BMO Pavilion", artist: "Buju Banton w/ Stephen Marley", support: "Reggae double-bill", note: "One of the highest-anticipated pavilion shows of 2026." },
  { day: "jul4", date: "Jul 4, 2026", venue: "AmFam Amphitheater", artist: "Jelly Roll w/ Tyler Hubbard", support: "Independence Day closer", note: "Closes Summerfest 2026 on July 4 with stadium-country energy." },
];

const stages = [
  { name: "American Family Insurance Amphitheater", tag: "Ticketed Headliners", icon: "🎤", description: "Summerfest's flagship reserved-seat venue. Every name in the 2026 amphitheater lineup plays here. Amphitheater tickets typically include grounds admission." },
  { name: "BMO Pavilion", tag: "Reserved Pavilion", icon: "🎼", description: "Covered, reserved-seat pavilion inside the grounds. Hosts mid-tier ticketed shows alongside free GA seating on a first-come basis. Charlie Wilson, The Roots, Ella Mai and more in 2026." },
  { name: "Miller Lite Oasis", tag: "Rock & Variety · Free w/ GA", icon: "🍺", description: "One of Summerfest's longest-running GA stages. Big daily lineups, lakefront-leaning location, Saz's 2026 food stand nearby." },
  { name: "Generac Power Stage", tag: "Rock & Alt · Free w/ GA", icon: "⚡", description: "Power Stage leans rock, alt and harder-edged GA bookings. Also home to three of the four new 2026 food vendors (Discourse Coffee, Jimmy Ward's Grill, Montacos Taqueria)." },
  { name: "T-Mobile Stage", tag: "Pop & Hip-Hop · Free w/ GA", icon: "📱", description: "Big pop, hip-hop and crossover acts pull the largest GA crowds without an amphitheater ticket. Formerly UScellular Connection Stage." },
  { name: "Uline Warehouse", tag: "Indie & Alt · Free w/ GA", icon: "📦", description: "The discovery stage. Up-and-comer indie and alternative bookings. Strong track record on next-wave acts." },
  { name: "Briggs & Stratton Big Backyard", tag: "Country & Roots · Free w/ GA", icon: "🤠", description: "Anchors country, roots and Americana programming on the GA side. Catches amphitheater spillover on country nights." },
  { name: "Aurora Pavilion", tag: "Variety GA · Free w/ GA", icon: "🎵", description: "Versatile GA stage with broad genre programming across all three weekends. A reliable fallback when the bigger stages are packed." },
  { name: "Summerville Presented by Johnsonville", tag: "Country & Sausage · Free w/ GA", icon: "🌽", description: "Pairs country and roots programming with the Johnsonville sausage food zone — eat and listen in the same footprint." },
  { name: "Klement's Sausage & Beer Garden", tag: "Polka & Beer Garden · Free w/ GA", icon: "🥨", description: "The most Milwaukee corner of the grounds. Beer-garden seating, sausage stand, polka and local-band rotation. Klement's signed a 10-year extension through 2035." },
];

const secondaryStages = [
  "Lasso Lounge",
  "American Family Insurance House",
  "Northwestern Mutual Community Park",
  "Gruber Law Offices Sportszone",
];

const newFood = [
  { name: "The Wisconsin Table", location: "North Gate", emoji: "🧀", description: "Wisconsin-inspired fare from a brand-new 2026 vendor near the North Gate.", mustTry: "Loaded Bloody Mary Burger or the Wisconsin Pretzel Charcuterie." },
  { name: "Discourse Coffee Workshop", location: "Generac Power Stage", emoji: "☕", description: "The Walker's Point craft-coffee operation brings espresso and signature drinks to the grounds.", mustTry: "Espresso-based craft drinks built like cocktails — Discourse's calling card." },
  { name: "Jimmy Ward's Grill", location: "Generac Power Stage", emoji: "🍔", description: "Handheld-focused grill stand new for 2026.", mustTry: "Big Jim Burger, Ward's Cheese Steak Sandwich, BBQ Pulled Chicken Sandwich." },
  { name: "Montacos Taqueria", location: "Generac Power Stage", emoji: "🌮", description: "Birria and walking-taco specialist new to Summerfest's vendor rotation.", mustTry: "Birria Egg Rolls and the Walking Taco." },
];

const returningFood = [
  { name: "Klement's Sausage & Beer Garden", emoji: "🌭", description: "The Milwaukee mainstay. Brats, kraut, and a beer garden built to park in. 10-year extension through 2035 confirmed." },
  { name: "Saz's State House", emoji: "🍖", description: "Stands at Miller Lite Oasis and BMO Pavilion. New 2026 menu adds cheese curd tots and jalapeño mac bites." },
  { name: "Robby's Roasted Corn", emoji: "🌽", description: "The Summerfest corn stand. Salt-and-butter classic with the line that proves it." },
  { name: "Sil's Mini Doughnuts", emoji: "🍩", description: "Hot, sugared mini-doughnuts pulled fresh out of the fryer — a multi-generation Summerfest staple." },
  { name: "Wild Dog", emoji: "🐶", description: "Hot-dog specialist with toppings including an elote dog loaded with street corn." },
];

const ticketTiers = [
  { name: "General Admission — Early Bird", price: "$30", note: "Now through June 17, 2026" },
  { name: "General Admission — Regular", price: "$33", note: "June 18 – July 4, 2026" },
  { name: "Senior (62+)", price: "$22", note: "Valid ID at gate" },
  { name: "Child (ages 6–11)", price: "$7", note: "Available at gate windows" },
  { name: "Young Children (5 & under)", price: "Free", note: "No ticket required" },
  { name: "T-Mobile Power Pass (9-day)", price: "From ~$58", note: "Black Friday + early pricing" },
  { name: "T-Mobile 3-Day Pass", price: "Varies", note: "Pick any 3 festival days" },
  { name: "Amphitheater Show", price: "Per-show", note: "Includes grounds admission for that day" },
];

const freeAdmission = [
  { date: "Thu Jun 18", time: "Noon – 3 p.m.", name: "Saz's Stomp Out Hunger Day", condition: "Donate 3 shelf-stable food items.", sponsor: "Saz's + FOX6", details: "Saz's matches the first 1,976 canned goods; proceeds to Feeding America Eastern Wisconsin." },
  { date: "Thu Jun 18", time: "Noon – 3 p.m.", name: "Show Your College Pride Day", condition: "Wear apparel from Carroll, Marquette, MATC, UWM, or UW-Whitewater — or show a valid high school ID.", sponsor: "OnMilwaukee + CW18/MY24", details: "HS students completing FAFSA before July 4 also receive a free ticket." },
  { date: "Fri Jun 19", time: "Noon – 3 p.m.", name: "Redo Cabinets Food Drive", condition: "Donate 3 shelf-stable food items.", sponsor: "Redo Cabinets", details: "First 2,500 patrons. Supports Northcott Neighborhood House." },
  { date: "Sat Jun 20", time: "Noon – 3 p.m.", name: "Briggs & Stratton United Way Diaper Drive", condition: "Donate new, unopened diapers or wipes — $10 minimum value.", sponsor: "Briggs & Stratton United Way", details: "First 1,500 patrons. Supports the United Way Diaper Bank." },
  { date: "Thu Jun 25", time: "All day", name: "Throwback Thursday — $5 admission", condition: "$5 GA at the gate.", sponsor: "Summerfest", details: "Plus 50% off select drinks noon–6 p.m. (Discounted, not free.)" },
  { date: "Thu Jun 25", time: "Noon – 3 p.m.", name: "H.O.G. Member Day", condition: "Present a valid Harley Owners Group card.", sponsor: "H.O.G.", details: "Day-of only." },
  { date: "Fri Jun 26", time: "Noon – 3 p.m.", name: "Shorewest Children's Fest Day", condition: "No condition — walk up.", sponsor: "Shorewest + TMJ4 + 99.1 The Mix", details: "Celebrates Shorewest's 80th anniversary. Select vendors offer food discounts." },
  { date: "Sat Jun 27", time: "Noon – 6 p.m.", name: "Military & First Responder Appreciation Day", condition: "Valid military ID, DD-214 copy, veteran-classified driver's license, or law-enforcement/fire credentials.", sponsor: "Generac", details: "Covers up to 4 family members per service member." },
  { date: "Sat Jun 27", time: "Noon – 3 p.m.", name: "Northwestern Mutual Make a Child Smile Day", condition: "Donate new or gently used children's books — $10 minimum value.", sponsor: "Northwestern Mutual", details: "First 2,500 patrons." },
  { date: "Fri Jul 3", time: "Noon – 3 p.m.", name: "Summerfest Appreciation Day", condition: "No condition — walk up.", sponsor: "Potawatomi Casino Hotel", details: "First 30,000 patrons receive a 2027 admission ticket plus a BIG WIN drawing entry." },
  { date: "Sat Jul 4", time: "Noon – 3 p.m.", name: "Freedom on the Fourth Food Drive", condition: "Donate 3 nonperishable food items (canned fruits/vegetables preferred).", sponsor: "Harley-Davidson", details: "First 5,000 patrons. Supports Hunger Task Force." },
];

const shuttles = [
  { name: "College Avenue", address: "1400 W College Ave", note: "South-side park-and-ride." },
  { name: "Brown Deer Road East", address: "851 W Brown Deer Rd", note: "North-side park-and-ride." },
  { name: "Hales Corners", address: "S 108th Street park-and-ride", note: "Southwest suburbs park-and-ride." },
];

const bagAllowed = [
  "Clear bags up to 12\" × 12\" × 6\" (vinyl, plastic or PVC).",
  "Small clutches and fanny packs up to 6\" × 9\" — clear or opaque.",
  "Diaper bags up to 12\" × 12\" × 6\" — clear or opaque, for guests with infants.",
  "Sealed bottles of water are allowed at festival gates (not inside AmFam Amphitheater or BMO Pavilion).",
];

const bagProhibited = [
  "Backpacks of any size.",
  "Bags larger than 9\" × 10\" × 12\".",
  "Cans, glass, and metal/plastic containers — including Yeti-style tumblers, thermoses, and disposable plastic bottles.",
  "Umbrellas inside the AmFam Amphitheater or BMO Pavilion during stand-alone shows.",
  "Strollers inside the AmFam Amphitheater.",
  "Professional cameras (detachable lens, or any lens longer than 3 inches) and video equipment.",
  "Weapons of any kind, fireworks, drones, and outside alcohol.",
];

const accessibility = [
  { title: "Wheelchair & Stroller Rentals", body: "Manual wheelchairs are $15; strollers are $5. Rent at the Mid Gate or South Gate with a valid ID (renter must be 18+). First-come, first-served — they go fast on amphitheater nights." },
  { title: "Sensory Quiet Rooms", body: "Three individual, wheelchair-accessible, air-conditioned quiet rooms inside the Northwestern Mutual Community Park. Built for kids (and adults) who get overstimulated by the noise and crowds." },
  { title: "Stephen J. Schwalbe Respite Pavilion", body: "Two large accessible restrooms, a large shower with a shower chair, an adult changing area with a changing table, storage lockers, and electrical outlets for charging wheelchairs and scooters." },
  { title: "Accessible Seating", body: "Available at every major stage on a first-come basis. The AmFam Amphitheater includes accessible seating at every ticket level, a raised viewing platform, accessible entrances/pathways, and elevators." },
  { title: "Sign Language Interpreters", body: "Available for select performances. Call Guest Services at 414-273-2680 with at least two weeks' notice to request an interpreter." },
  { title: "ADA Compliance", body: "Summerfest meets current ADA guidelines. Some areas of Henry Maier Festival Park were built before 1990 and are not fully ADA-compliant — Guest Services can route around them." },
];

const familyTips = [
  { title: "Kids' Ticket Prices", body: "Children 5 and under are free. Kids 6–11 are $7 at gate windows. Bring ID for the discount; gate cashiers will check ages." },
  { title: "Northwestern Mutual Community Park", body: "The north-end family zone — playground, family programming, and the three sensory quiet rooms all live here. Built for a kids-first afternoon." },
  { title: "Children's Fest Day", body: "Friday, June 26, noon–3 p.m. — free grounds admission for everyone (no donation needed) plus extra family programming." },
  { title: "Stroller Policy", body: "Strollers are allowed on the grounds (rent one for $5 at Mid/South Gate if you didn't bring one) but NOT inside the AmFam Amphitheater. Plan a hand-off if you have amphitheater tickets." },
  { title: "Lost-Kid Plan", body: "Take a photo of your kid in their outfit each day before you leave the hotel/house. Pick a meeting stage if you separate. Summerfest Guest Services has a lost-child protocol — find any uniformed staff." },
];

const insiderTips = [
  { title: "Gate Strategy", body: "Pick a gate that matches your first stage, not the closest gate to the freeway. Walking end-to-end is real distance — North Gate for Big Backyard / Community Park, Mid Gate for Klement's and shuttle drop-off, South Gate for the AmFam Amphitheater." },
  { title: "Get Free Before You Pay", body: "There are 11 ways to get in free or discounted in 2026 — food/diaper/book donations, college apparel, military ID, HOG card, walk-up Fan Appreciation Day. If you're under-3-PM flexible, plan around the free-admission window for that day." },
  { title: "Pre-Pay for Anything", body: "Summerfest, MCTS shuttles, and the food stands all run cashless. Bring a phone with tap-to-pay or a card — leave the cash for tipping musicians at the smaller stages." },
  { title: "Weather Plan, Not a Weather Hope", body: "Summerfest goes on in rain. Bring a poncho (no umbrellas in the amphitheater or BMO Pavilion). Klement's Beer Garden, BMO Pavilion and Uline Warehouse are the covered ride-out spots when weather rolls off the lake." },
  { title: "Bring the Smallest Bag You Can", body: "Fanny packs and small clutches (≤6\" × 9\") skip the bag-check line entirely. A backpack will get you turned away — leave it in the car or hotel." },
  { title: "Amphitheater vs Grounds", body: "An amphitheater ticket usually includes grounds admission for that day — don't double-buy. Read the ticket terms before adding a GA pass to your cart." },
  { title: "Where Locals Actually Eat", body: "Klement's beer garden is the sit-down. Robby's corn and Sil's mini doughnuts are the in-line classics. Saz's curd tots are the new 2026 must-try. The Generac Power Stage zone is where the four new vendors landed — go hungry." },
];

const faqs = [
  { q: "When is Summerfest 2026?", a: "Three Thursday–Saturday weekends: June 18–20, June 25–27, and July 2–4, 2026. Gates open at noon and the grounds run until midnight every festival day." },
  { q: "Where is Summerfest held?", a: "Henry Maier Festival Park, 200 N Harbor Drive, Milwaukee, WI 53202 — the lakefront festival grounds just south of downtown along Lake Michigan." },
  { q: "Who is headlining Summerfest 2026?", a: "AmFam Insurance Amphitheater confirmed shows include Garth Brooks (Jun 16 + 17 pre-festival), Carín León (Jun 20), Ed Sheeran (Jun 25), Cody Johnson (Jun 26), Post Malone w/ Carter Faith (Jun 27), Muse (Jul 2), Alex Warren (Jul 3), and Jelly Roll w/ Tyler Hubbard (Jul 4). BMO Pavilion confirmed: Charlie Wilson (Jun 18), David Lee Roth (Jun 20), The Roots (Jun 25), Russell Dickerson (Jun 27), Ella Mai (Jul 2), Buju Banton w/ Stephen Marley (Jul 3)." },
  { q: "How much are Summerfest tickets?", a: "Early-bird general admission is $30 through June 17; regular GA is $33 from June 18 onward. Seniors 62+ are $22 and kids 6–11 are $7. Children 5 and under are free. T-Mobile 9-day Power Pass starts around $58. Amphitheater shows are ticketed separately and typically include grounds admission for that day." },
  { q: "Is there free admission to Summerfest 2026?", a: "Yes — 10 free-admission promotion days plus a discounted Throwback Thursday ($5 admission on Jun 25). Free-admission windows are mostly noon–3 p.m. and include food-drive days, college-apparel day, H.O.G. day, Children's Fest Day (Jun 26), Military & First Responder Day (Jun 27, noon–6), Fan Appreciation Day (Jul 3), and Freedom on the Fourth (Jul 4). See the Tickets & Entry section above for every requirement." },
  { q: "What's the Summerfest 2026 bag policy?", a: "Clear bags up to 12\" × 12\" × 6\". Small clutches and fanny packs ≤ 6\" × 9\" (clear or opaque). Diaper bags up to 12\" × 12\" × 6\" (clear or opaque). Backpacks of any size are NOT allowed. Bags larger than 9\" × 10\" × 12\" are NOT allowed. All bags are subject to search at the gate." },
  { q: "What can't I bring into Summerfest?", a: "Backpacks, cans, glass and any metal/plastic containers (including Yeti-style tumblers, thermoses and disposable plastic bottles), professional cameras (detachable lens or lens longer than 3 inches), weapons, fireworks, drones, outside alcohol, and umbrellas inside the AmFam Amphitheater or BMO Pavilion during stand-alone shows. Strollers are allowed on the grounds but not inside the amphitheater." },
  { q: "Where do I park for Summerfest? Is there a shuttle?", a: "MCTS Summerfest Express shuttles run every 15 minutes from three free park-and-ride lots: College Ave (1400 W College Ave), Brown Deer Rd East (851 W Brown Deer Rd), and Hales Corners (S 108th St). Service starts at 11:30 a.m. and the last bus leaves the festival's Mid Gate at 12:30 a.m. Fares for 2026 are $18 round-trip for ages 12+, $9 for youth 11 and under / seniors 65+ / people with qualifying disabilities. Cashless only — tap card, Apple Pay or Google Pay." },
  { q: "Is Summerfest accessible?", a: "Yes. Manual wheelchairs are $15 and strollers are $5 (Mid + South Gate, valid ID, 18+). Three sensory quiet rooms are inside the Northwestern Mutual Community Park. The Stephen J. Schwalbe Respite Pavilion has large accessible restrooms, a shower with chair, adult changing table, lockers, and scooter-charging outlets. Sign language interpreters available with two weeks' notice at 414-273-2680." },
  { q: "Is Summerfest family-friendly?", a: "Yes. Kids 5 and under are free; kids 6–11 are $7. The Northwestern Mutual Community Park anchors the family zone with a playground, family programming, and three sensory rooms. Children's Fest Day on Friday, June 26 (noon–3) is the free-admission window built for families." },
  { q: "What new food is at Summerfest 2026?", a: "Four new vendors join the rotation: Discourse Coffee Workshop, Jimmy Ward's Grill, and Montacos Taqueria (all at the Generac Power Stage), plus The Wisconsin Table at the North Gate. Klement's signed a 10-year extension through 2035, and Saz's added cheese curd tots and jalapeño mac bites to its 2026 menu." },
  { q: "What's the best stage at Summerfest?", a: "Depends on the night. AmFam Amphitheater holds the headliners. BMO Pavilion is the reserved-seat covered pavilion. T-Mobile Stage and Miller Lite Oasis pull the biggest GA crowds. Generac Power Stage handles rock + the new food vendor zone. Uline Warehouse is the indie/alt discovery stage. Briggs & Stratton Big Backyard is country and roots. Klement's Sausage & Beer Garden is the Milwaukee-classic corner." },
  { q: "Are there ATMs at Summerfest? Is the festival cashless?", a: "Most Summerfest food, drink, and merch vendors are cashless — tap a card or phone. ATMs are available on the grounds if you need cash for tipping smaller-stage musicians. MCTS Summerfest Express shuttles are cashless only." },
  { q: "What's the weather plan? What if it rains?", a: "Summerfest goes on rain or shine. Bring a poncho — umbrellas are prohibited inside the AmFam Amphitheater and BMO Pavilion. The covered ride-out spots when storms roll in off the lake are BMO Pavilion, Klement's Beer Garden, and Uline Warehouse. Severe weather alerts come through the Summerfest app and the PA system." },
  { q: "Can I bring my kid's stroller into Summerfest?", a: "Yes on the grounds. No inside the AmFam Amphitheater. If you don't want to lug one in, rent a stroller for $5 at the Mid Gate or South Gate (valid ID, renter must be 18+)." },
];

const overviewStats = [
  { label: "Dates", value: "Jun 18–20, Jun 25–27, Jul 2–4, 2026" },
  { label: "Gates", value: "Noon to midnight, all 9 days" },
  { label: "Location", value: "Henry Maier Festival Park · 200 N Harbor Dr" },
  { label: "Headliners", value: "Ed Sheeran, Post Malone, Muse, Jelly Roll + more" },
  { label: "Tickets from", value: "$30 early-bird GA · Kids 5 & under free" },
  { label: "Free days", value: "10 free-admission days + $5 Throwback Thursday" },
  { label: "Stages", value: "10 major + 4 secondary stages" },
  { label: "Shuttle", value: "MCTS from 3 free park-and-ride lots" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Summerfest 2026 Milwaukee: Complete Guide to Dates, Lineup, Tickets, Stages, Food & More",
    description: "The most comprehensive 2026 guide to Summerfest in Milwaukee — full AmFam Amphitheater + BMO Pavilion lineup, every stage, every food vendor, every free-admission day, MCTS shuttles, bag policy, accessibility, and insider tips.",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    mainEntityOfPage: "https://www.discover-milwaukee.com/summerfest-milwaukee",
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
      { "@type": "ListItem", position: 2, name: "Summerfest Milwaukee", item: "https://www.discover-milwaukee.com/summerfest-milwaukee" },
    ],
  },
  event: {
    "@context": "https://schema.org",
    "@type": "MusicFestival",
    name: "Summerfest 2026",
    description: "The world's largest music festival, presented by American Family Insurance. Three Thursday–Saturday weekends in Milwaukee.",
    startDate: "2026-06-18",
    endDate: "2026-07-04",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Henry Maier Festival Park",
      address: {
        "@type": "PostalAddress",
        streetAddress: "200 N Harbor Dr",
        addressLocality: "Milwaukee",
        addressRegion: "WI",
        postalCode: "53202",
        addressCountry: "US",
      },
    },
    url: "https://www.discover-milwaukee.com/summerfest-milwaukee",
    organizer: {
      "@type": "Organization",
      name: "Milwaukee World Festival, Inc.",
      url: "https://www.summerfest.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.summerfest.com/ticket-info/",
      price: "30",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2025-11-01",
    },
  },
};

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#lineup", label: "Lineup" },
  { href: "#stages", label: "Stages" },
  { href: "#food", label: "Food & Drink" },
  { href: "#tickets", label: "Tickets & Entry" },
  { href: "#getting-there", label: "Getting There" },
  { href: "#visitors", label: "For Visitors" },
  { href: "#tips", label: "Insider Tips" },
  { href: "#faq", label: "FAQ" },
];

export default function SummerfestMilwaukee() {
  const [selectedDay, setSelectedDay] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredLineup = selectedDay === "all" ? lineup : lineup.filter((l) => l.day === selectedDay);

  return (
    <>
      <Head>
        <title>Summerfest 2026 Milwaukee | Complete Guide: Lineup, Tickets, Stages, Food, Parking & Tips</title>
        <meta name="description" content="The complete Summerfest 2026 guide — full AmFam Amphitheater + BMO Pavilion lineup, every stage, food vendors, all 10 free-admission days, MCTS shuttles, bag policy, accessibility & insider tips." />
        <meta name="keywords" content="summerfest 2026, summerfest milwaukee, summerfest lineup 2026, summerfest tickets, summerfest dates, summerfest parking, summerfest free admission, summerfest bmo pavilion, summerfest amfam amphitheater, summerfest mcts shuttle, summerfest bag policy, summerfest accessibility, summerfest food vendors" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/summerfest-milwaukee" />

        <meta property="og:title" content="Summerfest 2026 Milwaukee | The Complete Guide" />
        <meta property="og:description" content="Everything you need for Summerfest 2026: lineup, tickets, stages, food, shuttles, bag policy, accessibility, and insider tips." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/summerfest-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.event) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 2026 · THE COMPLETE GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Summerfest 2026</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              The world's largest music festival lives in Milwaukee. Full 2026 guide — every confirmed show, every stage, every vendor, every way to get in free, plus the parking, accessibility and gate-strategy details locals actually use.
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
              <strong>Heads up:</strong> Lineups, food vendors, ticket prices and gate policies shift right up to opening day. Confirm with Summerfest before you go. Amphitheater shows are ticketed separately from grounds admission.
            </p>
          </div>

          <section id="overview" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Summerfest 2026 at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Three Thursday–Saturday weekends, one lakefront, and the deepest live-music lineup the city books all year.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "12px" }}>
              {overviewStats.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "15px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "16px" }}>
              <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>What is Summerfest?</h3>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
                Summerfest is the largest music festival in the world by attendance, held every summer on Milwaukee's lakefront at Henry Maier Festival Park since 1968. Run by Milwaukee World Festival, Inc., it spans three Thursday–Saturday weekends, 10+ stages, hundreds of bands, the ticketed American Family Insurance Amphitheater, the covered BMO Pavilion, and a sprawling food and beer-garden footprint. In 2026, headliners include Ed Sheeran, Post Malone, Muse, Jelly Roll, Garth Brooks, The Roots, Buju Banton, and more.
              </p>
            </div>
          </section>

          <section id="lineup" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 Lineup — AmFam Amphitheater + BMO Pavilion</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              The confirmed ticketed-venue lineup for 2026. Tap a day to filter, or scroll the full list. GA stages program hundreds of additional bands across the 9 days — see the official Summerfest lineup page for the day-by-day GA grid.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
              {DAYS.map((d) => {
                const active = selectedDay === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDay(d.id)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      border: active ? `2px solid ${c.green1}` : `2px solid ${c.beige}`,
                      backgroundColor: active ? c.green1 : "white",
                      color: active ? c.cream : c.green1,
                      fontWeight: "700",
                      fontSize: "13px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
            {filteredLineup.length === 0 ? (
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "24px", borderRadius: "12px", textAlign: "center" }}>
                <p style={{ color: "#666", margin: 0, fontSize: "15px" }}>No ticketed-venue shows confirmed for this day yet. Hundreds of GA acts still program the grounds — check the official lineup.</p>
              </div>
            ) : (
              filteredLineup.map((show, i) => (
                <div key={i} style={{
                  backgroundColor: c.cream,
                  borderRadius: "16px",
                  padding: "20px 24px",
                  marginBottom: "14px",
                  border: `1px solid ${c.beige}`,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  alignItems: "flex-start",
                }}>
                  <div style={{ flex: "0 0 110px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: 0, textTransform: "uppercase" }}>{show.date}</p>
                    <p style={{ fontSize: "12px", color: c.green2, marginTop: "4px", margin: "4px 0 0", fontWeight: "600" }}>{show.venue}</p>
                  </div>
                  <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                    <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 6px" }}>{show.artist}</h3>
                    <p style={{ color: "#555", fontSize: "14px", margin: "0 0 8px", fontStyle: "italic" }}>{show.support}</p>
                    <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{show.note}</p>
                  </div>
                </div>
              ))
            )}
          </section>

          <section id="stages" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Stages</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Ten major stages plus secondary stages and activations across the grounds. The amphitheater and BMO Pavilion are ticketed; the other eight are free with general admission.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {stages.map((s) => (
                <div key={s.name} style={{
                  backgroundColor: c.cream,
                  border: `1px solid ${c.beige}`,
                  borderRadius: "16px",
                  padding: "20px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "24px" }}>{s.icon}</span>
                    <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: 0, lineHeight: 1.25 }}>{s.name}</h3>
                  </div>
                  <p style={{ color: c.green2, fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px", margin: "0 0 10px", textTransform: "uppercase" }}>{s.tag}</p>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{s.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px", backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "8px", letterSpacing: "1px", textTransform: "uppercase" }}>Also on the grounds in 2026</p>
              <p style={{ color: c.green1, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{secondaryStages.join(" · ")}</p>
            </div>
          </section>

          <section id="food" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Food & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Summerfest's food rotation is part of why locals come back. Four new vendors join the grounds in 2026, alongside the Milwaukee staples that have anchored the festival for decades.
            </p>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>New for 2026</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "32px" }}>
              {newFood.map((f) => (
                <div key={f.name} style={{
                  backgroundColor: "white",
                  border: `2px solid ${c.orange}`,
                  borderRadius: "14px",
                  padding: "18px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "26px" }}>{f.emoji}</span>
                    <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: 0 }}>{f.name}</h4>
                  </div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 10px", textTransform: "uppercase" }}>{f.location}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: "0 0 10px" }}>{f.description}</p>
                  <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
                    <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{f.mustTry}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Returning Favorites</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "32px" }}>
              {returningFood.map((f) => (
                <div key={f.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "24px" }}>{f.emoji}</span>
                    <h4 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: 0 }}>{f.name}</h4>
                  </div>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{f.description}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>Beer Gardens & Drinks</h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Klement's Sausage & Beer Garden anchors the Milwaukee-classic corner; Miller Lite Oasis covers the lakefront. Local Wisconsin breweries pour through the grounds, with non-alcoholic options (sodas, mocktails, sparkling water) at every major bar. Throwback Thursday on June 25 includes 50% off select drinks noon–6 p.m.
              </p>
            </div>
          </section>

          <section id="tickets" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Tickets & Entry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              2026 ticket prices plus the full list of free and discounted-admission days. Amphitheater and BMO Pavilion ticketed shows are separate from grounds admission.
            </p>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>2026 Ticket Prices</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", marginBottom: "32px" }}>
              {ticketTiers.map((t) => (
                <div key={t.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 6px", textTransform: "uppercase" }}>{t.name}</p>
                  <p style={{ fontSize: "22px", fontWeight: "900", color: c.green1, margin: "0 0 4px" }}>{t.price}</p>
                  <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>Free & Discounted Admission Days (2026)</h3>
            <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>
              Ten ways to get in for free in 2026, plus the $5 Throwback Thursday. Most free windows are noon–3 p.m. Some require a donation; some require an ID; some are walk-up. Plan around the window for whatever day you're going.
            </p>
            {freeAdmission.map((day, i) => (
              <div key={i} style={{
                backgroundColor: "white",
                border: `1px solid ${c.beige}`,
                borderLeft: `5px solid ${c.orange}`,
                borderRadius: "12px",
                padding: "16px 18px",
                marginBottom: "12px",
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "baseline", marginBottom: "6px" }}>
                  <span style={{ backgroundColor: c.green1, color: c.yellow, padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.5px" }}>{day.date}</span>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "700" }}>{day.time}</span>
                </div>
                <h4 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "4px 0 6px" }}>{day.name}</h4>
                <p style={{ color: "#444", fontSize: "14px", margin: "0 0 6px", lineHeight: 1.55 }}><strong>How to get in:</strong> {day.condition}</p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0, lineHeight: 1.55 }}><strong>Sponsor:</strong> {day.sponsor} · {day.details}</p>
              </div>
            ))}
          </section>

          <section id="getting-there" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Getting There — Parking, Shuttles & Transit</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The grounds are downtown-lakefront and on a big amphitheater night, driving in is the hardest part. Locals shuttle, rideshare, or park a few blocks out and walk.
            </p>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>MCTS Summerfest Express Shuttle</h3>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "20px", borderRadius: "12px", marginBottom: "16px" }}>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
                Every 15 minutes from three free park-and-ride lots, 11:30 a.m. start, 12:30 a.m. last bus from the Mid Gate. Direct, non-stop, drops you outside the Mid Gate. <strong>Cashless only</strong> (tap card, Apple Pay, Google Pay).
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px", marginBottom: "16px" }}>
                {shuttles.map((s) => (
                  <div key={s.name} style={{ backgroundColor: c.cream, padding: "14px", borderRadius: "10px", border: `1px solid ${c.beige}` }}>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1px", margin: "0 0 4px", textTransform: "uppercase" }}>{s.name}</p>
                    <p style={{ fontSize: "14px", color: c.green1, margin: "0 0 4px", fontWeight: "600" }}>{s.address}</p>
                    <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>{s.note}</p>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: c.yellow, padding: "12px 14px", borderRadius: "8px" }}>
                <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                  <strong>2026 fares:</strong> $18 round-trip for ages 12+ · $9 for youth 11 & under, seniors 65+, and people with qualifying disabilities. Free parking at all three P&R lots.
                </p>
              </div>
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Driving & Paid Lots</h3>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px", marginBottom: "16px" }}>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Paid lots run close to the grounds; downtown garages fill up fast on amphitheater nights. Park further north or west of the grounds for a shorter walk-out than queue-out. Don't expect cheap street parking near Harbor Drive on Saturdays. Watch for street-cleaning and Brewers-game date conflicts.
              </p>
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Rideshare</h3>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px", marginBottom: "16px" }}>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                Dedicated rideshare drop-off and pickup zones operate near the main gates. After amphitheater shows let out, expect surge pricing — walk a few blocks off-grounds before requesting if you want to avoid the worst of it.
              </p>
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Bike & Walk</h3>
            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px", borderRadius: "12px" }}>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                The Oak Leaf Trail and Hank Aaron State Trail both connect to the festival grounds via the lakefront. Bike valet has historically operated near a perimeter gate — check the Summerfest app for the 2026 location and hours. From downtown hotels, the walk down Harbor Drive is the easiest move.
              </p>
            </div>
          </section>

          <section id="visitors" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>For Visitors — Bags, Accessibility, Families & More</h2>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px", marginTop: "16px" }}>Bag Policy 2026</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "32px" }}>
              <div style={{ backgroundColor: "white", border: `2px solid ${c.green2}`, borderRadius: "12px", padding: "18px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>✓ Allowed</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.7 }}>
                  {bagAllowed.map((item, i) => <li key={i} style={{ marginBottom: "6px" }}>{item}</li>)}
                </ul>
              </div>
              <div style={{ backgroundColor: "white", border: `2px solid #c44`, borderRadius: "12px", padding: "18px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: "#c44", marginBottom: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>✗ Prohibited</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.7 }}>
                  {bagProhibited.map((item, i) => <li key={i} style={{ marginBottom: "6px" }}>{item}</li>)}
                </ul>
              </div>
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Accessibility & ADA</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "32px" }}>
              {accessibility.map((a) => (
                <div key={a.title} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 8px" }}>{a.title}</h4>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{a.body}</p>
                </div>
              ))}
            </div>

            <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Families & Kids</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {familyTips.map((f) => (
                <div key={f.title} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h4 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 8px" }}>{f.title}</h4>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tips" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Insider Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The strategy locals use to make a Summerfest night work — gate, gear, food, and timing.
            </p>
            {insiderTips.map((t) => (
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
              Tap a question to expand. Covers everything from tickets to bag policy to weather plans.
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
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Live Music & Events</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Festivals</Link>
              <Link href="/summer-live-music-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Summer Live Music</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Summerfest tips, new restaurants, events, and insider picks every Wednesday.</p>
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
