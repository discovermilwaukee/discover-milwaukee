import React from "react";
import Head from "next/head";
import Link from "next/link";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

// Milwaukee Coffee Shop Data
const localRoasters = [
  {
    name: "Colectivo Coffee",
    neighborhood: "Multiple Locations",
    address: "2211 N Prospect Ave (Prospect), 2301 S Howell Ave (Bay View), and more",
    roastStyle: "Balanced, accessible, consistently excellent",
    description: "Milwaukee's most iconic coffee brand. What started as Alterra Coffee has grown into a regional powerhouse while maintaining its local soul. The Lakefront location in a renovated pumping station is architecturally stunning. Every neighborhood location has its own character, but the commitment to quality never wavers.",
    knownFor: "Lakefront flagship, outdoor lakeside seating, fresh-baked goods, community gathering spaces",
    wifiQuality: "Excellent - fast and reliable at all locations",
    foodOptions: "Full bakery, breakfast sandwiches, salads, soups",
    vibe: "Buzzing community hub, laptops welcome, all ages",
    proTip: "The Lakefront location at the old pumping station is a must-visit. Grab a window seat overlooking Lake Michigan.",
  },
  {
    name: "Stone Creek Coffee",
    neighborhood: "Multiple Locations",
    address: "422 N 5th St (Factory), 2266 S Kinnickinnic Ave (Bay View), and more",
    roastStyle: "Craft-focused, lighter roasts, origin-forward",
    description: "Milwaukee's craft coffee pioneer. Stone Creek roasts on-site at their Factory location, where you can watch the process while you sip. They've pushed Milwaukee's coffee culture forward for years, sourcing exceptional beans and treating the roasting process as an art form.",
    knownFor: "On-site roasting, exceptional single origins, Factory cafe experience, coffee education",
    wifiQuality: "Good - varies by location, Factory has great connectivity",
    foodOptions: "Pastries, light breakfast items, toasts",
    vibe: "Serious coffee lovers, creative professionals, thoughtful atmosphere",
    proTip: "Visit the Factory on N 5th St to see beans roasted in real-time. Ask about their current single origin offerings.",
  },
  {
    name: "Anodyne Coffee Roasting Co.",
    neighborhood: "Walker's Point / Bay View",
    address: "224 W Bruce St (Walker's Point), 2920 S Kinnickinnic Ave (Bay View)",
    roastStyle: "Bold, full-bodied, espresso-forward",
    description: "Walker's Point anchor and Bay View staple. Anodyne's industrial Walker's Point space in a converted warehouse is one of Milwaukee's most atmospheric cafes. They roast bold, approachable coffee that satisfies without pretension. The Bay View location is smaller but equally welcoming.",
    knownFor: "Industrial warehouse space, live music venue, bold espresso, neighborhood loyalty",
    wifiQuality: "Good - Walker's Point location is better for working",
    foodOptions: "Pastries, breakfast items, sandwiches at Walker's Point",
    vibe: "Artistic, industrial-chic, neighborhood gathering spot, occasional live music",
    proTip: "The Walker's Point location doubles as a music venue some evenings. Check their calendar for shows.",
  },
  {
    name: "Pilcrow Coffee Roasters",
    neighborhood: "Third Ward",
    address: "327 E Menomonee St, Milwaukee, WI 53202",
    roastStyle: "Light to medium, nuanced, specialty-focused",
    description: "The Third Ward's specialty coffee destination. Pilcrow brings serious craft coffee to the neighborhood without the attitude. Their minimalist space lets the coffee do the talking, and their roasting program emphasizes clarity and complexity. If you want to taste what Milwaukee's coffee future looks like, start here.",
    knownFor: "Specialty-grade beans, pour-overs, clean minimalist aesthetic, knowledgeable baristas",
    wifiQuality: "Limited - designed more for coffee appreciation than laptop work",
    foodOptions: "Select pastries from local bakeries",
    vibe: "Clean, focused, coffee-forward, quick visits encouraged",
    proTip: "Order a pour-over of their current single origin. The baristas can guide you through flavor notes.",
  },
  {
    name: "Valentine Coffee Roasters",
    neighborhood: "Third Ward / East Side",
    address: "5918 W Vliet St (roastery), Third Ward cafe",
    roastStyle: "Balanced, approachable, consistent quality",
    description: "Sourcing exceptional beans and roasting them with care. Valentine has quietly built a reputation for quality that rivals any Milwaukee roaster. Their focus on direct trade relationships shows in the cup. Look for their beans at quality cafes across the city.",
    knownFor: "Direct trade sourcing, consistent quality, wholesale presence, growing retail footprint",
    wifiQuality: "Good at cafe locations",
    foodOptions: "Light pastries, varies by location",
    vibe: "Neighborhood-friendly, quality-focused, unpretentious",
    proTip: "If you can't visit a cafe, many quality Milwaukee restaurants serve Valentine coffee.",
  },
  {
    name: "Interval",
    neighborhood: "Bay View",
    address: "2076 S 1st St, Milwaukee, WI 53207",
    roastStyle: "Light, complex, third-wave focused",
    description: "Bay View's third-wave coffee destination. Interval takes a meticulous approach to coffee preparation, offering multiple brewing methods and rotating guest roasters alongside their own offerings. The space is intimate and focused, perfect for those who want to geek out on coffee.",
    knownFor: "Multiple brewing methods, rotating roasters, coffee geek paradise, intimate space",
    wifiQuality: "Available but limited seating makes it less ideal for extended work",
    foodOptions: "Minimal - select pastries",
    vibe: "Coffee-focused, intimate, knowledgeable crowd, third-wave aesthetic",
    proTip: "Ask about their current guest roasters. They often feature excellent out-of-state roasters.",
  },
  {
    name: "Kickapoo Coffee",
    neighborhood: "Various Locations",
    address: "Available at Milwaukee Public Market and select cafes",
    roastStyle: "Organic, fair trade, environmentally conscious",
    description: "While roasted in Viroqua, Wisconsin, Kickapoo has a strong Milwaukee presence. Their commitment to organic, fair-trade sourcing resonates with conscious consumers. You'll find their beans at the Public Market and quality cafes across the city.",
    knownFor: "Organic certification, fair trade practices, Wisconsin roots, environmental commitment",
    wifiQuality: "Varies by serving location",
    foodOptions: "Varies by serving location",
    vibe: "Values-driven, quality coffee, community-minded",
    proTip: "Grab a bag at Milwaukee Public Market to take home.",
  },
];

const bestForWorking = [
  {
    name: "Colectivo Lakefront",
    neighborhood: "East Side",
    address: "2211 N Prospect Ave",
    wifiSpeed: "Fast and reliable",
    outlets: "Plentiful",
    seating: "Tons of space - multiple rooms, outdoor patio",
    noiseLevel: "Moderate - good background buzz",
    bestTimes: "Weekday mornings, early afternoons",
    why: "Milwaukee's best laptop-friendly cafe. Huge space means you'll always find a seat, strong WiFi, plenty of outlets, and excellent coffee. The lake views don't hurt either.",
  },
  {
    name: "Stone Creek Factory",
    neighborhood: "Downtown",
    address: "422 N 5th St",
    wifiSpeed: "Fast",
    outlets: "Good availability",
    seating: "Large industrial space with varied seating",
    noiseLevel: "Moderate",
    bestTimes: "Weekday afternoons",
    why: "Watch coffee being roasted while you work. The industrial space has great light and enough room to spread out. Coffee quality is top-notch.",
  },
  {
    name: "Anodyne Walker's Point",
    neighborhood: "Walker's Point",
    address: "224 W Bruce St",
    wifiSpeed: "Good",
    outlets: "Available but limited",
    seating: "Large warehouse space, communal tables",
    noiseLevel: "Low to moderate",
    bestTimes: "Weekday mornings",
    why: "Huge converted warehouse with artistic atmosphere. The communal tables are great for focused work. Bold espresso keeps you fueled.",
  },
  {
    name: "Colectivo Prospect",
    neighborhood: "East Side",
    address: "2211 N Prospect Ave",
    wifiSpeed: "Fast",
    outlets: "Good",
    seating: "Multiple levels and outdoor space",
    noiseLevel: "Moderate",
    bestTimes: "Off-peak hours",
    why: "Central East Side location with reliable WiFi and plenty of seating. Great for meetings or solo work sessions.",
  },
];

const bestVibes = [
  {
    name: "Anodyne Walker's Point",
    neighborhood: "Walker's Point",
    description: "Industrial warehouse conversion with exposed brick, soaring ceilings, and an artistic atmosphere. Live music some evenings.",
    vibeType: "Industrial-chic, artistic, community-oriented",
    bestFor: "Creative types, artistic inspiration, neighborhood hangouts",
  },
  {
    name: "Colectivo Lakefront",
    neighborhood: "East Side",
    description: "Stunning restored 1888 pumping station on the lakefront. Architectural gem with lake views and outdoor seating.",
    vibeType: "Historic, scenic, quintessentially Milwaukee",
    bestFor: "First-time visitors, coffee with a view, weekend relaxation",
  },
  {
    name: "Pilcrow Coffee",
    neighborhood: "Third Ward",
    description: "Minimalist Third Ward space with clean lines and coffee-focused design. Lets the coffee speak for itself.",
    vibeType: "Minimalist, focused, specialty coffee aesthetic",
    bestFor: "Coffee purists, design lovers, quick quality cups",
  },
  {
    name: "Interval",
    neighborhood: "Bay View",
    description: "Intimate Bay View spot with a true third-wave coffee shop feel. Thoughtful space for thoughtful coffee.",
    vibeType: "Intimate, third-wave, coffee geek approved",
    bestFor: "Coffee enthusiasts, quiet conversations, Bay View exploration",
  },
  {
    name: "Stone Creek Factory",
    neighborhood: "Downtown",
    description: "Working roastery with cafe attached. Watch beans transform while you sip. Industrial space with great natural light.",
    vibeType: "Industrial, educational, behind-the-scenes",
    bestFor: "Coffee nerds, Instagram moments, understanding the craft",
  },
];

const bestFoodAndCoffee = [
  {
    name: "Colectivo (Any Location)",
    neighborhood: "Multiple",
    coffeeStrength: "Excellent across the board",
    foodHighlights: "Full bakery program, breakfast sandwiches, salads, soups",
    standouts: "Fresh-baked scones, breakfast sandwiches, seasonal soups",
    why: "Full-service food menu that's actually good, not an afterthought. The bakery items are made fresh daily.",
  },
  {
    name: "Stone Creek Factory",
    neighborhood: "Downtown",
    coffeeStrength: "Top-tier craft coffee",
    foodHighlights: "Quality toasts, pastries from local bakeries",
    standouts: "Avocado toast, rotating pastry selection",
    why: "While not a full restaurant, their food program is thoughtful and complements the excellent coffee.",
  },
  {
    name: "Anodyne Walker's Point",
    neighborhood: "Walker's Point",
    coffeeStrength: "Bold, satisfying espresso",
    foodHighlights: "Breakfast sandwiches, pastries, light lunch options",
    standouts: "Breakfast sandwiches, quality pastries",
    why: "Solid food options in a great atmosphere. Can handle a real breakfast or lunch.",
  },
  {
    name: "Fairgrounds Coffee & Tea",
    neighborhood: "Third Ward",
    coffeeStrength: "Quality coffee and extensive tea program",
    foodHighlights: "Full breakfast and lunch menu",
    standouts: "Breakfast bowls, sandwiches, healthy options",
    why: "More of a full cafe experience with food menu rivaling coffee in focus. Great for those who want a meal, not just pastries.",
  },
];

const byNeighborhood = {
  thirdWard: {
    name: "Third Ward",
    link: "/third-ward-milwaukee",
    shops: [
      { name: "Pilcrow Coffee Roasters", type: "Specialty", vibe: "Coffee-forward minimalist" },
      { name: "Valentine Coffee", type: "Quality roaster", vibe: "Neighborhood-friendly" },
      { name: "Fairgrounds Coffee & Tea", type: "Full cafe", vibe: "Comfortable, food-focused" },
      { name: "Colectivo", type: "Local chain", vibe: "Reliable community hub" },
    ],
  },
  bayView: {
    name: "Bay View",
    link: "/bay-view-milwaukee",
    shops: [
      { name: "Stone Creek Coffee", type: "Craft roaster", vibe: "Quality-focused neighborhood spot" },
      { name: "Interval", type: "Third-wave", vibe: "Intimate, coffee geek approved" },
      { name: "Anodyne Coffee", type: "Local roaster", vibe: "Neighborhood staple" },
      { name: "Colectivo", type: "Local chain", vibe: "Bay View community hub" },
    ],
  },
  eastSide: {
    name: "East Side",
    link: "/east-side-milwaukee",
    shops: [
      { name: "Colectivo Lakefront", type: "Flagship", vibe: "Iconic, must-visit" },
      { name: "Colectivo Prospect", type: "Local chain", vibe: "Central, reliable" },
      { name: "Rochambo Coffee & Tea", type: "Tea house", vibe: "Cozy, Brady Street gem" },
    ],
  },
  walkersPoint: {
    name: "Walker's Point",
    link: "/walkers-point-milwaukee",
    shops: [
      { name: "Anodyne Coffee", type: "Flagship", vibe: "Industrial, artistic, live music" },
      { name: "Canteen", type: "Counter service", vibe: "Quick, quality" },
    ],
  },
  downtown: {
    name: "Downtown",
    link: "/things-to-do-milwaukee",
    shops: [
      { name: "Stone Creek Factory", type: "Roastery cafe", vibe: "Watch roasting in action" },
      { name: "Colectivo", type: "Local chain", vibe: "Convenient, reliable" },
    ],
  },
};

const faqs = [
  {
    question: "What are the best local coffee roasters in Milwaukee?",
    answer: "Milwaukee's top local coffee roasters include Colectivo (the city's most iconic brand), Stone Creek Coffee (craft-focused with on-site roasting), Anodyne Coffee Roasting Co. (bold espresso-forward roasts), Pilcrow Coffee Roasters (specialty-grade beans), Valentine Coffee Roasters (direct trade focus), and Interval (third-wave specialist). Each roaster has a distinct style, from Colectivo's accessible excellence to Pilcrow's nuanced specialty coffees."
  },
  {
    question: "Where is the best coffee shop for working remotely in Milwaukee?",
    answer: "The best Milwaukee coffee shops for remote work are Colectivo Lakefront (huge space, fast WiFi, plenty of outlets, lake views), Stone Creek Factory (industrial space, great coffee, reliable internet), and Anodyne Walker's Point (large warehouse, communal tables, artistic atmosphere). Colectivo locations generally have the best combination of space, WiFi, and outlet availability."
  },
  {
    question: "What is the most Instagrammable coffee shop in Milwaukee?",
    answer: "Colectivo Lakefront is Milwaukee's most photogenic coffee shop, housed in a stunning 1888 pumping station with lake views and outdoor seating. Stone Creek Factory offers unique shots of the roasting process. Pilcrow's minimalist Third Ward space and Anodyne's industrial Walker's Point location are also popular for photography."
  },
  {
    question: "Where can I buy Milwaukee-roasted coffee beans?",
    answer: "Local Milwaukee-roasted beans are available at roaster cafes (Colectivo, Stone Creek, Anodyne, Pilcrow, Valentine), Milwaukee Public Market (multiple roasters), grocery stores (Outpost Natural Foods, Sendik's, Metro Market), and online from most local roasters. Colectivo and Stone Creek have the widest retail distribution."
  },
  {
    question: "What makes Milwaukee's coffee scene special?",
    answer: "Milwaukee's coffee scene is defined by local roasters rather than chains. Colectivo, Stone Creek, and Anodyne have deep community roots, often housed in historic or architecturally significant buildings. The scene emphasizes quality sourcing, local ownership, and creating gathering spaces. Most Milwaukee coffee shops are local businesses, not national chains."
  },
  {
    question: "Which Milwaukee coffee shops have outdoor seating?",
    answer: "Best outdoor coffee seating includes Colectivo Lakefront (lakeside patio with views), Colectivo Prospect (sidewalk seating), Stone Creek Bay View (neighborhood patio), and Anodyne Walker's Point (urban outdoor space). Most Colectivo locations have some outdoor seating. Summer months see expanded patio service across the city."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Coffee Shops in Milwaukee 2026: Local Roasters, WiFi Cafes & Hidden Gems",
    "description": "Complete guide to Milwaukee coffee shops. Colectivo, Stone Creek, Anodyne, Pilcrow, and more local roasters. Best cafes for working, atmosphere, and by neighborhood.",
    "author": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com"
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://discover-milwaukee.com/milwaukee-coffee-shops"
    },
    "keywords": "coffee shops milwaukee, best coffee milwaukee, cafes milwaukee, colectivo coffee, stone creek coffee, anodyne coffee, milwaukee roasters, coffee near me milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://discover-milwaukee.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Coffee Shops in Milwaukee",
        "item": "https://discover-milwaukee.com/milwaukee-coffee-shops"
      }
    ]
  }
};

export default function MilwaukeeCoffeeShops() {
  // Reusable Components
  const CoffeeShopCard = ({ shop, showDetails = true }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{shop.name}</h3>
        <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{shop.neighborhood}</span>
      </div>

      {shop.roastStyle && (
        <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>
          Roast Style: {shop.roastStyle}
        </p>
      )}

      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{shop.description}</p>

      {showDetails && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "16px" }}>
          {shop.knownFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>KNOWN FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{shop.knownFor}</p>
            </div>
          )}
          {shop.vibe && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>THE VIBE</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{shop.vibe}</p>
            </div>
          )}
        </div>
      )}

      {showDetails && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "8px", marginBottom: "12px" }}>
          {shop.wifiQuality && (
            <div style={{ padding: "8px 12px", backgroundColor: c.beige, borderRadius: "8px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>WIFI</p>
              <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{shop.wifiQuality}</p>
            </div>
          )}
          {shop.foodOptions && (
            <div style={{ padding: "8px 12px", backgroundColor: c.beige, borderRadius: "8px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>FOOD</p>
              <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}>{shop.foodOptions}</p>
            </div>
          )}
        </div>
      )}

      {shop.proTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Pro tip:</strong> {shop.proTip}</p>
        </div>
      )}

      {shop.address && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{shop.address}</p>
      )}
    </div>
  );

  const WorkingSpotCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h4 style={{ color: c.green1, fontSize: "20px", fontWeight: "700", margin: 0 }}>{spot.name}</h4>
        <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.neighborhood}</span>
      </div>

      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.why}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "8px" }}>
        <div style={{ padding: "8px", backgroundColor: c.beige, borderRadius: "8px", textAlign: "center" }}>
          <p style={{ fontSize: "10px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>WIFI</p>
          <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.wifiSpeed}</p>
        </div>
        <div style={{ padding: "8px", backgroundColor: c.beige, borderRadius: "8px", textAlign: "center" }}>
          <p style={{ fontSize: "10px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>OUTLETS</p>
          <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.outlets}</p>
        </div>
        <div style={{ padding: "8px", backgroundColor: c.beige, borderRadius: "8px", textAlign: "center" }}>
          <p style={{ fontSize: "10px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>NOISE</p>
          <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.noiseLevel}</p>
        </div>
        <div style={{ padding: "8px", backgroundColor: c.beige, borderRadius: "8px", textAlign: "center" }}>
          <p style={{ fontSize: "10px", fontWeight: "700", color: c.green2, marginBottom: "2px" }}>BEST TIME</p>
          <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.bestTimes}</p>
        </div>
      </div>

      <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>
    </div>
  );

  const VibeCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "20px",
      marginBottom: "16px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
        <h4 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{spot.name}</h4>
        <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 10px", borderRadius: "16px", fontSize: "11px", fontWeight: "600" }}>{spot.neighborhood}</span>
      </div>
      <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{spot.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 10px", borderRadius: "12px", fontSize: "11px" }}>{spot.vibeType}</span>
        <span style={{ backgroundColor: c.beige, color: c.green1, padding: "4px 10px", borderRadius: "12px", fontSize: "11px" }}>Best for: {spot.bestFor}</span>
      </div>
    </div>
  );

  const FoodCoffeeCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "20px",
      marginBottom: "16px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
        <h4 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{spot.name}</h4>
        <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 10px", borderRadius: "16px", fontSize: "11px", fontWeight: "600" }}>{spot.neighborhood}</span>
      </div>
      <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{spot.why}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        <div style={{ padding: "10px", backgroundColor: c.beige, borderRadius: "8px" }}>
          <p style={{ fontSize: "10px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>COFFEE</p>
          <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.coffeeStrength}</p>
        </div>
        <div style={{ padding: "10px", backgroundColor: c.beige, borderRadius: "8px" }}>
          <p style={{ fontSize: "10px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>STANDOUTS</p>
          <p style={{ fontSize: "12px", color: c.green1, margin: 0 }}>{spot.standouts}</p>
        </div>
      </div>
    </div>
  );

  const NeighborhoodSection = ({ area }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "20px",
      marginBottom: "16px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h4 style={{ color: c.green1, fontSize: "20px", fontWeight: "700", margin: 0 }}>{area.name}</h4>
        <Link href={area.link} style={{ color: c.orange, fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
          Explore {area.name} →
        </Link>
      </div>
      <div style={{ display: "grid", gap: "8px" }}>
        {area.shops.map((shop, idx) => (
          <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", backgroundColor: "white", borderRadius: "8px", border: `1px solid ${c.beige}` }}>
            <div>
              <p style={{ fontSize: "15px", fontWeight: "600", color: c.green1, margin: 0 }}>{shop.name}</p>
              <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>{shop.vibe}</p>
            </div>
            <span style={{ backgroundColor: c.beige, color: c.green2, padding: "4px 8px", borderRadius: "8px", fontSize: "10px", fontWeight: "600" }}>{shop.type}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const FAQItem = ({ faq, isLast }) => (
    <div style={{
      borderBottom: isLast ? "none" : `1px solid ${c.beige}`,
      paddingBottom: isLast ? 0 : "20px",
      marginBottom: isLast ? 0 : "20px"
    }}>
      <h4 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h4>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Coffee Shops in Milwaukee 2026 | Local Roasters & Cafes Guide</title>
        <meta name="description" content="Discover Milwaukee's best coffee shops. From Colectivo and Stone Creek to hidden gems like Pilcrow and Interval. Local roasters, best WiFi cafes, and neighborhood guides." />
        <meta name="keywords" content="coffee shops milwaukee, best coffee milwaukee, cafes milwaukee, colectivo coffee, stone creek coffee, anodyne coffee, milwaukee coffee roasters, coffee near me milwaukee, best wifi cafe milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/milwaukee-coffee-shops" />

        <meta property="og:title" content="Best Coffee Shops in Milwaukee 2026 | Local Roasters Guide" />
        <meta property="og:description" content="Milwaukee's complete coffee guide. Local roasters like Colectivo, Stone Creek, and Anodyne. Best WiFi cafes, neighborhood picks, and hidden gems." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discover-milwaukee.com/milwaukee-coffee-shops" />
        <meta property="og:image" content="https://discover-milwaukee.com/images/milwaukee-coffee-shops.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Coffee Shops in Milwaukee 2026" />
        <meta name="twitter:description" content="Local roasters, WiFi cafes, and neighborhood coffee guides for Milwaukee." />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <main style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        {/* Hero Section */}
        <section style={{
          background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`,
          padding: "80px 20px 60px",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "600", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>
              Milwaukee Coffee Guide 2026
            </p>
            <h1 style={{ color: "white", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: "800", lineHeight: 1.1, marginBottom: "20px" }}>
              Best Coffee Shops in Milwaukee
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 24px" }}>
              Milwaukee's coffee scene is defined by local roasters, not chains. From Colectivo's lakefront flagship to Pilcrow's specialty focus, here's your guide to the city's best cups.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <span style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "13px" }}>7 Local Roasters</span>
              <span style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "13px" }}>5 Neighborhoods</span>
              <span style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "13px" }}>Laptop-Friendly Spots</span>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "16px 20px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
            {[
              { label: "Local Roasters", href: "#roasters" },
              { label: "Best for Working", href: "#working" },
              { label: "Best Vibes", href: "#vibes" },
              { label: "Food + Coffee", href: "#food" },
              { label: "By Neighborhood", href: "#neighborhoods" },
              { label: "FAQs", href: "#faqs" },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{
                backgroundColor: c.beige,
                color: c.green1,
                padding: "8px 14px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s",
              }}>
                {item.label}
              </a>
            ))}
          </div>
        </section>

        {/* Intro Section */}
        <section style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "32px", border: `1px solid ${c.beige}` }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>
              Why Milwaukee's Coffee Scene Stands Out
            </h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Walk into most American cities and you'll find the usual suspects: Starbucks on every corner, maybe a Dunkin' or a Peet's. Milwaukee is different. Here, local roasters dominate the landscape, and the national chains feel like afterthoughts.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              <strong>Colectivo</strong> (formerly Alterra) set the standard, transforming a historic lakefront pumping station into one of the country's most beautiful coffee shops. <strong>Stone Creek</strong> pushed the craft forward with on-site roasting and origin-focused beans. <strong>Anodyne</strong> brought warehouse-cool to Walker's Point before the neighborhood was cool.
            </p>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              Today, newer spots like <strong>Pilcrow</strong> and <strong>Interval</strong> are raising the specialty coffee bar even higher. This is a city where local coffee isn't just an option—it's the default.
            </p>
          </div>
        </section>

        {/* Local Roasters Section */}
        <section id="roasters" style={{ padding: "40px 20px 60px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>The Heart of Milwaukee Coffee</p>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>Local Roasters</h2>
            <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
              These homegrown roasters define Milwaukee's coffee identity. Each brings something different to the cup.
            </p>
          </div>

          {localRoasters.map((shop, idx) => (
            <CoffeeShopCard key={idx} shop={shop} />
          ))}
        </section>

        {/* Best for Working Section */}
        <section id="working" style={{ backgroundColor: "white", padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>Remote Work Ready</p>
              <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>Best Coffee Shops for Working</h2>
              <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                Fast WiFi, plenty of outlets, good seating, and excellent coffee. These spots welcome laptops.
              </p>
            </div>

            {bestForWorking.map((spot, idx) => (
              <WorkingSpotCard key={idx} spot={spot} />
            ))}
          </div>
        </section>

        {/* Best Vibes Section */}
        <section id="vibes" style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>Atmosphere Matters</p>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>Best Coffee Shop Vibes</h2>
            <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
              Sometimes you want more than good coffee. These spots deliver atmosphere, ambiance, and aesthetic.
            </p>
          </div>

          {bestVibes.map((spot, idx) => (
            <VibeCard key={idx} spot={spot} />
          ))}
        </section>

        {/* Best Food + Coffee Section */}
        <section id="food" style={{ backgroundColor: "white", padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>More Than Just Coffee</p>
              <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>Best Food + Coffee Combos</h2>
              <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                When you need a real meal with your caffeine. These spots take food as seriously as coffee.
              </p>
            </div>

            {bestFoodAndCoffee.map((spot, idx) => (
              <FoodCoffeeCard key={idx} spot={spot} />
            ))}
          </div>
        </section>

        {/* By Neighborhood Section */}
        <section id="neighborhoods" style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>Explore by Area</p>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>Coffee by Neighborhood</h2>
            <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
              Each Milwaukee neighborhood has its own coffee character. Find what's near you.
            </p>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            {Object.values(byNeighborhood).map((area, idx) => (
              <NeighborhoodSection key={idx} area={area} />
            ))}
          </div>
        </section>

        {/* Local vs Chain Callout */}
        <section style={{ backgroundColor: c.green1, padding: "60px 20px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "white", fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>
              Support Local: Why It Matters
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>
              Every cup of coffee from a Milwaukee roaster supports local jobs, local sourcing relationships, and keeps money in the community. These aren't just coffee shops—they're neighborhood anchors, creative spaces, and gathering spots that define Milwaukee's character.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px", minWidth: "150px" }}>
                <p style={{ color: c.orange, fontSize: "32px", fontWeight: "800", margin: 0 }}>7+</p>
                <p style={{ color: "white", fontSize: "14px", margin: 0 }}>Local Roasters</p>
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px", minWidth: "150px" }}>
                <p style={{ color: c.orange, fontSize: "32px", fontWeight: "800", margin: 0 }}>30+</p>
                <p style={{ color: "white", fontSize: "14px", margin: 0 }}>Local Cafes</p>
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px", minWidth: "150px" }}>
                <p style={{ color: c.orange, fontSize: "32px", fontWeight: "800", margin: 0 }}>100%</p>
                <p style={{ color: "white", fontSize: "14px", margin: 0 }}>Local Soul</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>Common Questions</p>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>Milwaukee Coffee FAQs</h2>
          </div>

          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "32px", border: `1px solid ${c.beige}` }}>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} isLast={idx === faqs.length - 1} />
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section style={{ backgroundColor: "white", padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "800", marginBottom: "24px", textAlign: "center" }}>
              More Milwaukee Guides
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
              {[
                { title: "Best Brunch Spots", desc: "Where to start your weekend right", link: "/best-brunch-milwaukee" },
                { title: "Third Ward Guide", desc: "Shopping, dining & coffee in the Third Ward", link: "/third-ward-milwaukee" },
                { title: "Bay View Guide", desc: "The city's most eclectic neighborhood", link: "/bay-view-milwaukee" },
                { title: "East Side Guide", desc: "From Brady Street to the Lakefront", link: "/east-side-milwaukee" },
                { title: "Walker's Point", desc: "Industrial cool and great coffee", link: "/walkers-point-milwaukee" },
                { title: "Things to Do", desc: "Beyond coffee: Milwaukee activities", link: "/things-to-do-milwaukee" },
              ].map((guide, idx) => (
                <Link key={idx} href={guide.link} style={{ textDecoration: "none" }}>
                  <div style={{
                    backgroundColor: c.cream,
                    borderRadius: "12px",
                    padding: "20px",
                    border: `1px solid ${c.beige}`,
                    transition: "all 0.2s",
                  }}>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>{guide.title}</h3>
                    <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{guide.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section style={{ backgroundColor: c.beige, padding: "60px 20px" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "800", marginBottom: "12px" }}>
              Get More Milwaukee Tips
            </h2>
            <p style={{ color: "#555", fontSize: "16px", marginBottom: "24px" }}>
              Join our newsletter for new openings, local favorites, and insider guides.
            </p>
            <Link href="/newsletter" style={{
              display: "inline-block",
              backgroundColor: c.orange,
              color: "white",
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
            }}>
              Subscribe to Newsletter
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "40px 20px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: 0 }}>
            © 2026 Discover Milwaukee. Made with love for MKE coffee culture.
          </p>
        </footer>
      </main>
    </>
  );
}
