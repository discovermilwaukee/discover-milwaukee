import React, { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
  tan: "#8b7355",
};

// Bar categories with featured picks
const BAR_CATEGORIES = [
  {
    id: "dive-bars",
    title: "Dive Bars",
    icon: "🍺",
    color: "#8B4513",
    tagline: "Cash, cheap drinks, zero pretension",
    description: "Milwaukee has more bars per capita than almost any US city, and the dive bars are where you find the real soul. These are cash-only, jukebox-playing institutions where bartenders know your name.",
    featured: [
      { name: "Wolski's Tavern", neighborhood: "Lower East Side", claim: "The 'I Closed Wolski's' bumper sticker since 1908", vibe: "Legendary" },
      { name: "Jamo's Bar", neighborhood: "East Side", claim: "Nightly Jeopardy! viewing since 1890", vibe: "Cash Only Time Capsule" },
      { name: "Koz's Mini Bowl", neighborhood: "Walker's Point", claim: "4-lane mini bowling + dive bar", vibe: "Only in Milwaukee" },
      { name: "The Uptowner", neighborhood: "Riverwest", claim: "Vending machine sells cigarettes & Skittles", vibe: "Riverwest Classic" },
    ],
    link: "/best-dive-bars-milwaukee",
    linkText: "See All 12 Dive Bars",
  },
  {
    id: "cocktail-bars",
    title: "Cocktail Bars",
    icon: "🍸",
    color: "#6B5B95",
    tagline: "Craft cocktails done right",
    description: "From Milwaukee's first cocktail lounge to modern speakeasies, these bars take drinks seriously. Expect skilled bartenders, quality spirits, and cocktails worth savoring.",
    featured: [
      { name: "Bryant's Cocktail Lounge", neighborhood: "Walker's Point", claim: "Milwaukee's first lounge, famous ice cream drinks", vibe: "Living Legend" },
      { name: "At Random", neighborhood: "Bay View", claim: "70s ice cream parlor meets cocktail bar", vibe: "Retro Wonderland" },
      { name: "The Diplomat", neighborhood: "Lower East Side", claim: "Classic cocktails, intimate speakeasy feel", vibe: "Old Hollywood" },
      { name: "Boone & Crockett", neighborhood: "Bay View", claim: "Views of the Hoan Bridge, exceptional drinks", vibe: "Waterfront Gem" },
    ],
    link: "/best-cocktail-bars-milwaukee",
    linkText: "See All Cocktail Bars",
  },
  {
    id: "rooftop-bars",
    title: "Rooftop Bars",
    icon: "🌆",
    color: "#F7786B",
    tagline: "Skyline views & elevated drinking",
    description: "Milwaukee's skyline is underrated, and these rooftops prove it. From sophisticated hotel bars to casual game-day patios, find your perfect perch above the city.",
    featured: [
      { name: "The Outsider", neighborhood: "Third Ward", claim: "9 floors up at Kimpton Journeyman, 360° views", vibe: "Best Views in MKE" },
      { name: "Café Benelux Skyhaus", neighborhood: "Third Ward", claim: "Retractable roof, Belgian beers", vibe: "Year-Round Rooftop" },
      { name: "Uncle Buck's", neighborhood: "Deer District", claim: "Fire bar, game day HQ", vibe: "Sports & Skyline" },
      { name: "The Aviary", neighborhood: "Downtown", claim: "Central Standard's rooftop, craft cocktails", vibe: "Modern & Trendy" },
    ],
    link: "/rooftop-bars-milwaukee",
    linkText: "See All Rooftop Bars",
  },
  {
    id: "sports-bars",
    title: "Sports Bars",
    icon: "🏈",
    color: "#34A853",
    tagline: "Game day, every day",
    description: "Bucks, Brewers, Packers—Milwaukee takes its sports seriously. These bars have the screens, the energy, and the fellow fans to make every game feel like you're at the stadium.",
    featured: [
      { name: "Steny's Tavern", neighborhood: "Walker's Point", claim: "Legendary Packers bar, massive outdoor setup", vibe: "Ultimate Game Day" },
      { name: "Major Goolsby's", neighborhood: "Downtown", claim: "50+ years of sports bar history", vibe: "Milwaukee Institution" },
      { name: "Tom's Watch Bar", neighborhood: "Deer District", claim: "360° screens, next to Fiserv Forum", vibe: "Modern Sports Tech" },
      { name: "Who's on Third", neighborhood: "Downtown", claim: "Pre-game destination, great food", vibe: "Upscale Sports" },
    ],
    link: "/packers-bars-milwaukee",
    linkText: "See Packers Bars Guide",
  },
  {
    id: "breweries",
    title: "Breweries & Taprooms",
    icon: "🍻",
    color: "#DAA520",
    tagline: "Cream City craft beer",
    description: "The city that Miller built has embraced craft beer with open arms. From historic tours at Lakefront to experimental brews in Walker's Point, Milwaukee's brewery scene is thriving.",
    featured: [
      { name: "Lakefront Brewery", neighborhood: "Beerline B", claim: "Best brewery tour in America, fish fry Fridays", vibe: "Must-Do Milwaukee" },
      { name: "Third Space Brewing", neighborhood: "Menomonee Valley", claim: "Award-winning IPAs, huge taproom", vibe: "Craft Beer Haven" },
      { name: "Indeed Brewing", neighborhood: "Walker's Point", claim: "Creative brews, community vibes", vibe: "Neighborhood Favorite" },
      { name: "Sprecher Brewing", neighborhood: "Glendale", claim: "Craft sodas too, family-friendly tours", vibe: "Milwaukee Classic" },
    ],
    link: "/milwaukee-breweries",
    linkText: "Full Brewery Guide",
  },
  {
    id: "adventure-bars",
    title: "Adventure Bars",
    icon: "🎯",
    color: "#FF6B35",
    tagline: "Drinks + activities",
    description: "Why just drink when you can bowl, throw axes, play arcade games, or mini golf? These bars combine entertainment with your beverages for a memorable night out.",
    featured: [
      { name: "Landmark Lanes", neighborhood: "East Side", claim: "Bowling alley since 1927, three bars inside", vibe: "Classic Entertainment" },
      { name: "Koz's Mini Bowl", neighborhood: "Walker's Point", claim: "4 mini bowling lanes, pure Milwaukee", vibe: "Dive + Games" },
      { name: "Punch Bowl Social", neighborhood: "Deer District", claim: "Bowling, karaoke, arcade, full restaurant", vibe: "All-In-One" },
      { name: "Nine Below", neighborhood: "Third Ward", claim: "Indoor mini golf bar, Instagram-ready", vibe: "Modern Fun" },
    ],
    link: "/milwaukee-nightlife",
    linkText: "Nightlife Guide",
  },
];

// Curated bar trails
const BAR_TRAILS = [
  {
    id: "classic-crawl",
    title: "The Classic Milwaukee Crawl",
    description: "The essential Milwaukee bar experience in one night",
    duration: "4-5 hours",
    stops: 5,
    neighborhoods: ["Walker's Point", "Third Ward", "Lower East Side"],
    bars: [
      { name: "Bryant's Cocktail Lounge", type: "Start classy", order: 1 },
      { name: "Boone & Crockett", type: "Sunset views", order: 2 },
      { name: "The Diplomat", type: "Speakeasy vibes", order: 3 },
      { name: "Wolski's Tavern", type: "The classic finish", order: 4 },
      { name: "Comet Café", type: "Late night food", order: 5 },
    ],
  },
  {
    id: "dive-bar-trail",
    title: "The Dive Bar Trail",
    description: "Cash-only classics and neighborhood gems",
    duration: "4-6 hours",
    stops: 5,
    neighborhoods: ["Riverwest", "East Side", "Brady Street"],
    bars: [
      { name: "The Uptowner", type: "Riverwest start", order: 1 },
      { name: "Jamo's Bar", type: "Jeopardy time", order: 2 },
      { name: "Y-Not II", type: "Neighborhood classic", order: 3 },
      { name: "Hosed on Brady", type: "3 Alarm Special", order: 4 },
      { name: "Wolski's Tavern", type: "Earn your sticker", order: 5 },
    ],
  },
  {
    id: "bay-view-crawl",
    title: "Bay View Bar Hop",
    description: "Milwaukee's coolest neighborhood, one bar at a time",
    duration: "3-4 hours",
    stops: 5,
    neighborhoods: ["Bay View"],
    bars: [
      { name: "At Random", type: "Cocktail start", order: 1 },
      { name: "Boone & Crockett", type: "Hoan Bridge views", order: 2 },
      { name: "Sugar Maple", type: "Craft beer heaven", order: 3 },
      { name: "Burnhearts", type: "Neighborhood soul", order: 4 },
      { name: "Just Art's Saloon", type: "Dive finale", order: 5 },
    ],
  },
  {
    id: "walker-point-trail",
    title: "Walker's Point After Dark",
    description: "Milwaukee's nightlife epicenter",
    duration: "4-5 hours",
    stops: 5,
    neighborhoods: ["Walker's Point"],
    bars: [
      { name: "Bryant's Cocktail Lounge", type: "Living legend", order: 1 },
      { name: "Stella's", type: "Cocktail dive", order: 2 },
      { name: "Sabbatic", type: "Heavy metal vibes", order: 3 },
      { name: "Hamburger Mary's", type: "Karaoke & shows", order: 4 },
      { name: "La Cage", type: "Late night dancing", order: 5 },
    ],
  },
];

// Neighborhoods with bar character
const NEIGHBORHOODS = [
  { name: "Walker's Point", vibe: "Nightlife epicenter", barCount: "30+", character: "Milwaukee's most vibrant after-dark neighborhood. Cocktail lounges, LGBTQ+ bars, dive bars, and clubs." },
  { name: "Bay View", vibe: "Hip & local", barCount: "25+", character: "Kinnickinnic Ave is lined with bars from craft cocktail to neighborhood dive. Very walkable." },
  { name: "Third Ward", vibe: "Upscale & trendy", barCount: "15+", character: "Rooftop bars, wine bars, and upscale spots. Great for dates and special occasions." },
  { name: "East Side", vibe: "Young & eclectic", barCount: "20+", character: "College bars, live music venues, and neighborhood classics along North Ave." },
  { name: "Brady Street", vibe: "Historic party street", barCount: "15+", character: "Milwaukee's original entertainment strip. Mix of Italian heritage and nightlife." },
  { name: "Riverwest", vibe: "Artsy & local", barCount: "10+", character: "Dive bars, art spaces, and genuine neighborhood joints. Cash-only vibes." },
  { name: "Downtown/Deer District", vibe: "Game day central", barCount: "20+", character: "Sports bars, hotel bars, and the energy around Fiserv Forum." },
];

// FAQs
const faqs = [
  {
    question: "What makes Milwaukee's bar scene unique?",
    answer: "Milwaukee has more bars per capita than almost any U.S. city, with a drinking culture rooted in German and Polish heritage. You'll find everything from century-old taverns with original Brunswick back bars to modern craft cocktail lounges. The cash-only dive bar tradition is still strong, and bar time (2:30 AM) lets the night run later than many cities.",
  },
  {
    question: "What are the best neighborhoods for bar hopping in Milwaukee?",
    answer: "Walker's Point is Milwaukee's nightlife epicenter with the most diverse bar scene. Bay View offers a hip, walkable strip along Kinnickinnic Ave. Brady Street has historic party vibes. The Third Ward is best for upscale spots and rooftops. Each neighborhood has its own distinct character.",
  },
  {
    question: "What is bar time in Milwaukee?",
    answer: "Wisconsin bars can serve until 2:30 AM on weekends (Saturday night into Sunday morning). This 'bar time' is later than many states, making Milwaukee a great late-night city. Some bars are famous for staying open until the very end—earning your 'I Closed Wolski's' bumper sticker is a Milwaukee rite of passage.",
  },
  {
    question: "Are there good LGBTQ+ bars in Milwaukee?",
    answer: "Walker's Point is home to Milwaukee's LGBTQ+ nightlife scene. La Cage, This Is It (one of the oldest gay bars in the Midwest), Hamburger Mary's, and Woody's are all welcoming spots. The neighborhood hosts PrideFest and has a strong, visible community.",
  },
  {
    question: "What should I know about Milwaukee dive bars?",
    answer: "Many Milwaukee dives are cash-only—bring bills. Expect cheap drinks, pool tables, jukeboxes, and bartenders who treat regulars like family. Don't overdress. The lack of pretension is the whole point. Some buildings have been taverns for over a century.",
  },
  {
    question: "Where should I watch Packers games in Milwaukee?",
    answer: "Steny's Tavern in Walker's Point is the ultimate Packers bar with a massive outdoor setup. Major Goolsby's downtown has 50+ years of sports bar history. The Deer District bars (Tom's Watch Bar, Uncle Buck's) offer modern screens and energy.",
  },
];

export default function MilwaukeeBars() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeNeighborhood, setActiveNeighborhood] = useState(null);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Milwaukee Bars Guide: 100+ Best Bars by Category & Neighborhood [2026]",
    description: "The complete guide to Milwaukee's bar scene. Dive bars, cocktail lounges, rooftops, breweries, sports bars, and more. Find your perfect Milwaukee bar.",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/milwaukee-bars",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Head>
        <title>Milwaukee Bars Guide: Best Dive Bars, Cocktail Lounges, Rooftops & More [2026]</title>
        <meta name="description" content="The complete guide to Milwaukee's bar scene. 100+ bars organized by category and neighborhood. Dive bars, cocktail lounges, rooftops, breweries, sports bars, and LGBTQ+ nightlife." />
        <meta name="keywords" content="Milwaukee bars, best bars Milwaukee, Milwaukee nightlife, dive bars Milwaukee, cocktail bars Milwaukee, rooftop bars Milwaukee, Milwaukee breweries, Walker's Point bars, Bay View bars" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-bars" />
        <meta property="og:title" content="Milwaukee Bars Guide: 100+ Best Bars [2026]" />
        <meta property="og:description" content="The complete guide to Milwaukee bars. Dive bars, cocktails, rooftops, breweries, sports bars by category and neighborhood." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-bars" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        {/* Nav */}
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>DISCOVER MILWAUKEE</Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, #0d1f1a 100%)`, padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px" }}>THE COMPLETE GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "900", marginBottom: "20px", lineHeight: 1.1 }}>
              Milwaukee Bars
            </h1>
            <p style={{ color: c.beige, fontSize: "20px", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 24px" }}>
              More bars per capita than almost any city in America. From century-old dive bars to craft cocktail lounges, find your perfect Milwaukee watering hole.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#categories" style={{ backgroundColor: c.orange, color: "#fff", padding: "14px 28px", borderRadius: "30px", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>Browse by Type</a>
              <a href="#trails" style={{ backgroundColor: "transparent", color: c.cream, padding: "14px 28px", borderRadius: "30px", textDecoration: "none", fontWeight: "700", fontSize: "15px", border: `2px solid ${c.cream}` }}>Bar Trails</a>
              <a href="#neighborhoods" style={{ backgroundColor: "transparent", color: c.cream, padding: "14px 28px", borderRadius: "30px", textDecoration: "none", fontWeight: "700", fontSize: "15px", border: `2px solid ${c.cream}` }}>By Neighborhood</a>
            </div>
          </div>
        </header>

        <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>

          {/* Quick Stats */}
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px", marginBottom: "60px" }}>
            {[
              { stat: "500+", label: "Bars in Metro MKE" },
              { stat: "2:30 AM", label: "Bar Time (Weekends)" },
              { stat: "6", label: "Bar Categories" },
              { stat: "7", label: "Neighborhoods" },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "4px" }}>{item.stat}</p>
                <p style={{ fontSize: "14px", color: c.tan, fontWeight: "600" }}>{item.label}</p>
              </div>
            ))}
          </section>

          {/* Categories */}
          <section id="categories" style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "36px", fontWeight: "900", color: c.green1, marginBottom: "12px" }}>Find Your Kind of Bar</h2>
              <p style={{ color: "#666", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>From cash-only dive bars to craft cocktail lounges, explore Milwaukee's diverse drinking scene.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
              {BAR_CATEGORIES.map((cat) => (
                <div key={cat.id} style={{ backgroundColor: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", transition: "transform 0.2s", cursor: "pointer" }}>
                  <div style={{ backgroundColor: cat.color, padding: "24px", color: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <span style={{ fontSize: "32px" }}>{cat.icon}</span>
                      <h3 style={{ fontSize: "24px", fontWeight: "800", margin: 0 }}>{cat.title}</h3>
                    </div>
                    <p style={{ fontSize: "15px", opacity: 0.9, margin: 0 }}>{cat.tagline}</p>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>{cat.description}</p>
                    <div style={{ marginBottom: "20px" }}>
                      {cat.featured.map((bar, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 0", borderBottom: i < cat.featured.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                          <div>
                            <p style={{ fontWeight: "700", color: c.green1, marginBottom: "2px", fontSize: "15px" }}>{bar.name}</p>
                            <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{bar.claim}</p>
                          </div>
                          <span style={{ fontSize: "12px", backgroundColor: c.beige, padding: "4px 10px", borderRadius: "20px", color: c.green2, fontWeight: "600", whiteSpace: "nowrap" }}>{bar.neighborhood}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={cat.link} style={{ display: "block", textAlign: "center", backgroundColor: c.green1, color: "#fff", padding: "14px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                      {cat.linkText} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bar Trails */}
          <section id="trails" style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "36px", fontWeight: "900", color: c.green1, marginBottom: "12px" }}>Milwaukee Bar Trails</h2>
              <p style={{ color: "#666", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>Curated crawls for the perfect night out. Follow the trail, hit every stop, experience Milwaukee.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {BAR_TRAILS.map((trail) => (
                <div key={trail.id} style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: c.green1, margin: 0, lineHeight: 1.3 }}>{trail.title}</h3>
                    <span style={{ backgroundColor: c.orange, color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>{trail.stops} stops</span>
                  </div>
                  <p style={{ color: "#666", fontSize: "14px", marginBottom: "16px" }}>{trail.description}</p>
                  <div style={{ marginBottom: "16px" }}>
                    {trail.bars.map((bar, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0" }}>
                        <span style={{ width: "24px", height: "24px", backgroundColor: c.green1, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "700", flexShrink: 0 }}>{bar.order}</span>
                        <div>
                          <p style={{ fontWeight: "600", color: c.green1, margin: 0, fontSize: "14px" }}>{bar.name}</p>
                          <p style={{ fontSize: "12px", color: c.tan, margin: 0 }}>{bar.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "12px", fontSize: "13px", color: "#777" }}>
                    <span>⏱ {trail.duration}</span>
                    <span>📍 {trail.neighborhoods.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhoods */}
          <section id="neighborhoods" style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "36px", fontWeight: "900", color: c.green1, marginBottom: "12px" }}>Bars by Neighborhood</h2>
              <p style={{ color: "#666", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>Each Milwaukee neighborhood has its own bar personality. Find yours.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
              {NEIGHBORHOODS.map((hood) => (
                <div key={hood.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderLeft: `4px solid ${c.orange}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, margin: 0 }}>{hood.name}</h3>
                    <span style={{ fontSize: "13px", color: c.orange, fontWeight: "700" }}>{hood.barCount} bars</span>
                  </div>
                  <p style={{ fontSize: "14px", color: c.green2, fontWeight: "600", marginBottom: "8px" }}>{hood.vibe}</p>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>{hood.character}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Know Before You Go */}
          <section style={{ backgroundColor: c.green1, borderRadius: "20px", padding: "48px", marginBottom: "80px" }}>
            <h2 style={{ color: c.yellow, fontSize: "28px", fontWeight: "900", marginBottom: "32px", textAlign: "center" }}>Milwaukee Bar Basics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
              {[
                { title: "Bar Time: 2:30 AM", desc: "Wisconsin bars can serve until 2:30 AM on weekends. Milwaukee takes full advantage." },
                { title: "Cash is King", desc: "Many dive bars are cash-only. Hit the ATM before your crawl. Tipping well is expected." },
                { title: "Brandy Old Fashioned", desc: "The state drink. Ask for 'sweet' with Sprite, 'sour' with sour mix, or 'press' with both." },
                { title: "Friday Fish Fry", desc: "A Wisconsin tradition. Many bars serve fish fry on Fridays—some are legendary." },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "20px" }}>
                  <h3 style={{ color: c.orange, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "32px", textAlign: "center" }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: "16px", backgroundColor: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "12px" }}>{faq.question}</h3>
                  <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* More Guides */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "900", color: c.green1, marginBottom: "20px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              {[
                { title: "Best Restaurants", href: "/best-restaurants-milwaukee", color: c.orange },
                { title: "Coffee Shops", href: "/milwaukee-coffee-shops", color: c.green2 },
                { title: "Date Night Ideas", href: "/milwaukee-date-ideas", color: "#9B59B6" },
                { title: "Happy Hour Deals", href: "/best-happy-hour-milwaukee", color: "#E74C3C" },
              ].map((guide, i) => (
                <Link key={i} href={guide.href} style={{ backgroundColor: guide.color, color: "#fff", padding: "20px", borderRadius: "12px", textDecoration: "none", fontWeight: "700", textAlign: "center", display: "block" }}>
                  {guide.title}
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "48px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "12px" }}>Get the Weekly Pour</h2>
            <p style={{ color: "#666", fontSize: "16px", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px" }}>New bar openings, drink specials, and insider tips delivered every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.green1, color: c.yellow, padding: "16px 36px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", fontSize: "16px" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "48px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", marginBottom: "16px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" style={{ color: c.beige, textDecoration: "none", fontSize: "14px" }}>About</Link>
            <Link href="/newsletter" style={{ color: c.beige, textDecoration: "none", fontSize: "14px" }}>Newsletter</Link>
            <Link href="/privacy" style={{ color: c.beige, textDecoration: "none", fontSize: "14px" }}>Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
