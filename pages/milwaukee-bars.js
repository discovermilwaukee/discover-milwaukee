import React, { useState } from "react";
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

// SVG Icons (replacing emojis)
const Icons = {
  Beer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>
    </svg>
  ),
  Cocktail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/>
    </svg>
  ),
  Building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  ),
  Trophy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  ),
  Hop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22s6-7 12-7 12 7 12 7H2Z"/><path d="M8 22V10a4 4 0 1 1 8 0v12"/><path d="M12 6V2"/>
    </svg>
  ),
  Target: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
};

// Bar categories with featured picks
const BAR_CATEGORIES = [
  {
    id: "dive-bars",
    title: "Dive Bars",
    icon: "Beer",
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
    icon: "Cocktail",
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
    icon: "Building",
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
    icon: "Trophy",
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
    icon: "Hop",
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
    icon: "Target",
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

// Neighborhoods with bar listings - Milwaukee city neighborhoods only
const NEIGHBORHOODS = [
  {
    name: "Walker's Point",
    vibe: "Nightlife epicenter",
    character: "Milwaukee's most vibrant after-dark neighborhood. Cocktail lounges, LGBTQ+ bars, dive bars, and clubs cluster around 2nd and 5th Streets.",
    bars: [
      { name: "Bryant's Cocktail Lounge", type: "Cocktail", note: "Milwaukee's first cocktail lounge, famous ice cream drinks" },
      { name: "Steny's Tavern", type: "Sports Bar", note: "Legendary Packers bar with massive outdoor setup" },
      { name: "Koz's Mini Bowl", type: "Dive", note: "4-lane mini bowling + dive bar" },
      { name: "Indeed Brewing", type: "Brewery", note: "Creative brews, community vibes" },
      { name: "La Cage", type: "LGBTQ+", note: "Late night dancing, Milwaukee staple since 1984" },
      { name: "This Is It", type: "LGBTQ+", note: "One of the oldest gay bars in the Midwest" },
      { name: "Hamburger Mary's", type: "LGBTQ+", note: "Drag shows, karaoke, burgers" },
      { name: "Woody's", type: "LGBTQ+", note: "Neighborhood sports bar vibe" },
      { name: "Stella's", type: "Dive", note: "Cocktail dive with strong pours" },
      { name: "Sabbatic", type: "Dive", note: "Heavy metal bar, pinball, cheap beer" },
      { name: "Hi-Hat Lounge", type: "Cocktail", note: "Vintage vibes, great cocktails" },
      { name: "Dock18 Cocktail Lab", type: "Cocktail", note: "Creative rotating menu" },
    ],
  },
  {
    name: "Bay View",
    vibe: "Hip & local",
    character: "Kinnickinnic Ave is lined with bars from craft cocktail to neighborhood dive. The city's most walkable bar strip.",
    bars: [
      { name: "At Random", type: "Cocktail", note: "70s ice cream parlor meets cocktail bar" },
      { name: "Boone & Crockett", type: "Cocktail", note: "Hoan Bridge views, exceptional drinks" },
      { name: "Sugar Maple", type: "Craft Beer", note: "Massive tap list, beer garden" },
      { name: "Burnhearts", type: "Dive", note: "Neighborhood soul, famous Bloody Mary bar" },
      { name: "Just Art's Saloon", type: "Dive", note: "Cash only, shuffleboard, cheap beer" },
      { name: "Vanguard", type: "Bar & Grill", note: "Sausages and cocktails" },
      { name: "Palm Tavern", type: "Neighborhood", note: "Rotating food pop-ups, great patio" },
      { name: "Club Garibaldi", type: "Neighborhood", note: "Italian heritage, classic Milwaukee" },
      { name: "Tonic Tavern", type: "Neighborhood", note: "Craft cocktails, tacos" },
      { name: "Three Cellars", type: "Wine Bar", note: "Wine flights, cheese boards" },
    ],
  },
  {
    name: "Third Ward",
    vibe: "Upscale & trendy",
    character: "Historic warehouse district turned trendy. Rooftop bars, wine bars, and upscale spots. Great for dates and special occasions.",
    bars: [
      { name: "The Outsider", type: "Rooftop", note: "9 floors up at Kimpton Journeyman, 360° views" },
      { name: "Café Benelux", type: "Rooftop", note: "Skyhaus rooftop, retractable roof, Belgian beers" },
      { name: "Nine Below", type: "Activity", note: "Indoor mini golf bar" },
      { name: "Merriment Social", type: "Cocktail", note: "Craft cocktails, shareable plates" },
      { name: "The Wicked Hop", type: "Neighborhood", note: "Craft beer, pub fare" },
      { name: "Onesto", type: "Wine Bar", note: "Italian wines, small plates" },
      { name: "Hotel Madrid", type: "Restaurant/Bar", note: "Spanish tapas, creative cocktails" },
    ],
  },
  {
    name: "Lower East Side",
    vibe: "Classic Milwaukee",
    character: "Historic taverns, beloved institutions, and the famous Water Street bar scene. Mix of college energy and neighborhood classics.",
    bars: [
      { name: "Wolski's Tavern", type: "Dive", note: "The 'I Closed Wolski's' bumper sticker since 1908" },
      { name: "The Diplomat", type: "Cocktail", note: "Classic cocktails, intimate speakeasy feel" },
      { name: "Hosed on Brady", type: "Dive", note: "3 Alarm Bloody Mary, cheap shots" },
      { name: "Von Trier", type: "German", note: "Authentic German bar, beer hall vibes" },
      { name: "Roman's Pub", type: "Craft Beer", note: "Legendary beer selection, cozy" },
      { name: "Hi-Fi Café", type: "Music Venue", note: "Live music, craft cocktails" },
      { name: "Hotel Foster", type: "Cocktail", note: "Craft cocktails, upscale casual" },
      { name: "Jo-Cat's Pub", type: "Dive", note: "Fishbowl drinks, college crowd" },
    ],
  },
  {
    name: "East Side",
    vibe: "Young & eclectic",
    character: "North Avenue corridor with college bars, live music venues, and neighborhood classics. UWM student energy.",
    bars: [
      { name: "Landmark Lanes", type: "Activity", note: "Bowling alley since 1927, three bars inside" },
      { name: "Jamo's Bar", type: "Dive", note: "Nightly Jeopardy! viewing since 1890" },
      { name: "BBC", type: "Bar & Grill", note: "Burgers, beer, sports" },
      { name: "Foundation", type: "Tiki", note: "Hidden tiki bar, tropical cocktails" },
      { name: "Axel's", type: "Neighborhood", note: "Classic corner bar" },
      { name: "The Yield Bar", type: "Music Venue", note: "Vinyl, craft cocktails, DJs" },
    ],
  },
  {
    name: "Brady Street",
    vibe: "Historic party street",
    character: "Milwaukee's original entertainment strip. Italian heritage meets nightlife. Walkable strip with diverse options.",
    bars: [
      { name: "Nomad World Pub", type: "World", note: "Soccer bar, global beers, rooftop" },
      { name: "The Harp", type: "Irish", note: "Irish pub, live music weekends" },
      { name: "Regano's Roman Coin", type: "Italian", note: "Old school Italian bar, classic Milwaukee" },
      { name: "County Clare", type: "Irish", note: "Irish pub with great fish fry" },
      { name: "Jack's American Pub", type: "Bar & Grill", note: "Wings, beer, sports" },
      { name: "Clover", type: "Cocktail", note: "Intimate cocktail spot" },
    ],
  },
  {
    name: "Riverwest",
    vibe: "Artsy & local",
    character: "Bohemian neighborhood with dive bars, art spaces, and genuine neighborhood joints. Cash-only vibes, artist crowd.",
    bars: [
      { name: "The Uptowner", type: "Dive", note: "Vending machine sells cigarettes & Skittles" },
      { name: "Riverwest Public House", type: "Neighborhood", note: "Co-op bar, community owned" },
      { name: "Falcon Bowl", type: "Dive", note: "Polish bar, bowling alley, polka nights" },
      { name: "Linneman's Riverwest Inn", type: "Music Venue", note: "Live folk and Americana" },
      { name: "Gee Willickers", type: "Dive", note: "Cash only, cheap drinks, jukebox" },
      { name: "Circle A", type: "Café/Bar", note: "Coffee by day, bar by night" },
    ],
  },
  {
    name: "Downtown",
    vibe: "Urban core",
    character: "Office crowd happy hours, hotel bars, and pre-theater drinks. Wisconsin Ave and Old World Third St.",
    bars: [
      { name: "The Aviary", type: "Rooftop", note: "Central Standard's rooftop, craft cocktails" },
      { name: "Major Goolsby's", type: "Sports Bar", note: "50+ years of sports bar history" },
      { name: "Who's on Third", type: "Sports Bar", note: "Pre-game destination, great food" },
      { name: "The Loaded Slate", type: "Bar & Grill", note: "Craft beer, elevated pub food" },
      { name: "Safe House", type: "Themed", note: "Spy-themed bar, secret entrance" },
      { name: "Trinity Three Irish Pubs", type: "Irish", note: "Three floors, three pubs" },
      { name: "The Pub Club", type: "Cocktail", note: "Speakeasy in Pfister Hotel" },
      { name: "Blu", type: "Lounge", note: "Pfister Hotel rooftop, upscale" },
    ],
  },
  {
    name: "Deer District",
    vibe: "Game day central",
    character: "The energy hub around Fiserv Forum. Sports bars, modern entertainment, and pre/post-game crowds.",
    bars: [
      { name: "Tom's Watch Bar", type: "Sports Bar", note: "360° screens, next to Fiserv Forum" },
      { name: "Uncle Buck's", type: "Rooftop", note: "Fire bar, game day HQ" },
      { name: "Punch Bowl Social", type: "Activity", note: "Bowling, karaoke, arcade, full restaurant" },
      { name: "Good City Brewing", type: "Brewery", note: "Craft beer, downtown taproom" },
      { name: "The MECCA Sports Bar", type: "Sports Bar", note: "At Fiserv, massive space" },
    ],
  },
  {
    name: "Bronzeville",
    vibe: "Cultural revival",
    character: "Historic African American neighborhood experiencing revival. Cultural bars and restaurants celebrating Black Milwaukee.",
    bars: [
      { name: "The Blu Lounge", type: "Lounge", note: "Live music, cocktails" },
      { name: "Jewels Caribbean", type: "Caribbean", note: "Reggae nights, island vibes" },
    ],
  },
  {
    name: "Harambee",
    vibe: "Neighborhood soul",
    character: "North side neighborhood with longtime corner bars and community gathering spots.",
    bars: [
      { name: "The Butterfly", type: "Neighborhood", note: "Historic corner bar" },
    ],
  },
  {
    name: "Washington Heights",
    vibe: "Neighborhood gems",
    character: "Residential west side with hidden neighborhood bars. Vliet Street has local favorites.",
    bars: [
      { name: "The Brass Tap", type: "Neighborhood", note: "Corner bar, neighborhood crowd" },
      { name: "Tusk", type: "Craft Cocktail", note: "Intimate cocktail bar" },
    ],
  },
  {
    name: "Sherman Park",
    vibe: "Community focused",
    character: "Historic neighborhood with longtime taverns serving the community.",
    bars: [
      { name: "Frank's Power Plant", type: "Dive", note: "Cash only, classic corner bar" },
    ],
  },
  {
    name: "Story Hill",
    vibe: "Stadium adjacent",
    character: "Near American Family Field. Game day spots and neighborhood bars.",
    bars: [
      { name: "Story Hill BKC", type: "Restaurant/Bar", note: "Upscale, great cocktails" },
      { name: "Kelly's Bleachers", type: "Sports Bar", note: "Brewers pre-game spot" },
    ],
  },
  {
    name: "Menomonee Valley",
    vibe: "Industrial craft",
    character: "Former industrial zone now home to breweries and maker spaces.",
    bars: [
      { name: "Third Space Brewing", type: "Brewery", note: "Award-winning IPAs, huge taproom" },
      { name: "Urban Harvest Brewing", type: "Brewery", note: "Farm-to-glass beers" },
    ],
  },
  {
    name: "Harbor District",
    vibe: "Waterfront emerging",
    character: "Developing waterfront area with new bars and restaurants.",
    bars: [
      { name: "Zocalo Food Park", type: "Food Park", note: "Outdoor bar, food trucks" },
    ],
  },
  {
    name: "Lincoln Village",
    vibe: "South side pride",
    character: "Mexican-American neighborhood with cantinas and neighborhood bars.",
    bars: [
      { name: "Botanas", type: "Cantina", note: "Margaritas, Mexican fare" },
      { name: "El Rey", type: "Cantina", note: "South side institution" },
    ],
  },
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

// Filter options
const FILTER_OPTIONS = [
  { id: "all", label: "All Bars" },
  { id: "dive-bars", label: "Dive Bars" },
  { id: "cocktail-bars", label: "Cocktails" },
  { id: "rooftop-bars", label: "Rooftops" },
  { id: "sports-bars", label: "Sports" },
  { id: "breweries", label: "Breweries" },
  { id: "adventure-bars", label: "Adventure" },
];

export default function MilwaukeeBars() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter categories based on active filter
  const filteredCategories = activeFilter === "all"
    ? BAR_CATEGORIES
    : BAR_CATEGORIES.filter(cat => cat.id === activeFilter);

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Milwaukee Bars Guide: 100+ Best Bars by Category & Neighborhood [2026]",
    description: "The complete guide to Milwaukee's bar scene. Dive bars, cocktail lounges, rooftops, breweries, sports bars, and more. Find your perfect Milwaukee bar.",
    author: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
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

  // ItemList schema for rich results
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Bars in Milwaukee",
    description: "Curated list of the best bars in Milwaukee, Wisconsin",
    numberOfItems: 24,
    itemListElement: BAR_CATEGORIES.flatMap((cat, catIndex) =>
      cat.featured.map((bar, barIndex) => ({
        "@type": "ListItem",
        position: catIndex * 4 + barIndex + 1,
        item: {
          "@type": "BarOrPub",
          name: bar.name,
          description: bar.claim,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Milwaukee",
            addressRegion: "WI",
            addressCountry: "US",
          },
        },
      }))
    ),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Explore", item: "https://www.discover-milwaukee.com/explore" },
      { "@type": "ListItem", position: 3, name: "Milwaukee Bars", item: "https://www.discover-milwaukee.com/milwaukee-bars" },
    ],
  };

  const IconComponent = ({ name }) => {
    const Icon = Icons[name];
    return Icon ? <Icon /> : null;
  };

  return (
    <>
      <Head>
        <title>Milwaukee Bars Guide: Best Dive Bars, Cocktail Lounges, Rooftops & More [2026]</title>
        <meta name="description" content="The complete guide to Milwaukee's bar scene. 100+ bars organized by category and neighborhood. Dive bars, cocktail lounges, rooftops, breweries, sports bars, and LGBTQ+ nightlife." />
        <meta name="keywords" content="Milwaukee bars, best bars Milwaukee, Milwaukee nightlife, dive bars Milwaukee, cocktail bars Milwaukee, rooftop bars Milwaukee, Milwaukee breweries, Walker's Point bars, Bay View bars, Milwaukee drinks" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-bars" />
        <meta property="og:title" content="Milwaukee Bars Guide: 100+ Best Bars [2026]" />
        <meta property="og:description" content="The complete guide to Milwaukee bars. Dive bars, cocktails, rooftops, breweries, sports bars by category and neighborhood." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-bars" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-bars-guide.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </Head>

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        onFocus={(e) => {
          e.target.style.left = "16px";
          e.target.style.top = "16px";
          e.target.style.width = "auto";
          e.target.style.height = "auto";
          e.target.style.padding = "12px 24px";
          e.target.style.backgroundColor = c.green1;
          e.target.style.color = "#fff";
          e.target.style.zIndex = "9999";
          e.target.style.borderRadius = "8px";
        }}
        onBlur={(e) => {
          e.target.style.left = "-9999px";
          e.target.style.width = "1px";
          e.target.style.height = "1px";
        }}
      >
        Skip to main content
      </a>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh", fontFamily: "'Poppins', system-ui, sans-serif" }}>
        {/* Nav */}
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none", cursor: "pointer" }}>DISCOVER MILWAUKEE</Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>Events</Link>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
            <Link href="/" style={{ color: c.green2, textDecoration: "none", cursor: "pointer" }}>Home</Link>
            <Icons.ChevronRight />
            <Link href="/explore" style={{ color: c.green2, textDecoration: "none", cursor: "pointer" }}>Explore</Link>
            <Icons.ChevronRight />
            <span style={{ color: c.green1, fontWeight: "600" }}>Milwaukee Bars</span>
          </nav>
        </div>

        {/* Hero */}
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, #0d1f1a 100%)`, padding: "60px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* SEO-optimized hero image - visually integrated but crawlable */}
          <img
            src="/images/milwaukee-bars-nightlife.jpg"
            alt="Milwaukee bars and nightlife scene featuring historic taverns, craft cocktail lounges, and vibrant neighborhood bars"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.15,
              top: 0,
              left: 0,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", zIndex: 1, pointerEvents: "none" }}></div>
          <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <p style={{ color: c.orange, fontSize: "13px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>The Complete Guide</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "900", marginBottom: "20px", lineHeight: 1.1 }}>
              Milwaukee Bars
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 32px" }}>
              More bars per capita than almost any city in America. From century-old dive bars to craft cocktail lounges, find your perfect Milwaukee watering hole.
            </p>
            <p style={{ color: c.beige, fontSize: "13px", opacity: 0.8, marginBottom: "32px" }}>
              Last Updated: April 2026
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#categories" style={{ backgroundColor: c.orange, color: "#fff", padding: "14px 28px", borderRadius: "30px", textDecoration: "none", fontWeight: "700", fontSize: "15px", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 4px 12px rgba(244,162,97,0.4)"; }} onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>Browse by Type</a>
              <a href="#trails" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 28px", borderRadius: "30px", textDecoration: "none", fontWeight: "700", fontSize: "15px", border: `2px solid rgba(255,255,255,0.3)`, cursor: "pointer", transition: "background-color 0.2s" }} onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"} onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}>Bar Trails</a>
              <a href="#neighborhoods" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 28px", borderRadius: "30px", textDecoration: "none", fontWeight: "700", fontSize: "15px", border: `2px solid rgba(255,255,255,0.3)`, cursor: "pointer", transition: "background-color 0.2s" }} onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"} onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}>By Neighborhood</a>
            </div>
          </div>
        </header>

        <main id="main-content" style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>

          {/* Quick Stats */}
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px", marginBottom: "60px" }}>
            {[
              { stat: "500+", label: "Bars in Metro MKE" },
              { stat: "2:30 AM", label: "Bar Time (Weekends)" },
              { stat: "6", label: "Bar Categories" },
              { stat: "7", label: "Neighborhoods" },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#fff", padding: "24px 16px", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize: "28px", fontWeight: "900", color: c.green1, marginBottom: "4px" }}>{item.stat}</p>
                <p style={{ fontSize: "13px", color: c.tan, fontWeight: "600" }}>{item.label}</p>
              </div>
            ))}
          </section>

          {/* Neighborhood Map Visual */}
          <section style={{ marginBottom: "60px" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: c.green1, marginBottom: "8px" }}>Milwaukee Bar Districts</h2>
              <p style={{ color: "#666", fontSize: "15px" }}>Tap a neighborhood to explore</p>
            </div>
            <div style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              overflow: "hidden"
            }}>
              {/* Visual map grid - main nightlife districts */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", maxWidth: "800px", margin: "0 auto" }}>
                {NEIGHBORHOODS.slice(0, 9).map((hood, i) => {
                  const colors = ["#8B4513", "#6B5B95", "#F7786B", "#34A853", "#DAA520", "#FF6B35", "#4A90A4", "#9B59B6", "#E67E22"];
                  return (
                    <a
                      key={hood.name}
                      href="#neighborhoods"
                      style={{
                        backgroundColor: colors[i % colors.length],
                        color: "#fff",
                        padding: "16px 12px",
                        borderRadius: "12px",
                        textAlign: "center",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <p style={{ fontWeight: "700", fontSize: "13px", marginBottom: "4px" }}>{hood.name}</p>
                      <p style={{ fontSize: "11px", opacity: 0.9, margin: 0 }}>{hood.bars.length} bars</p>
                    </a>
                  );
                })}
              </div>
              <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: "#888" }}>
                Click any district to jump to neighborhood details below
              </p>
            </div>
          </section>

          {/* Filter Pills */}
          <section id="categories" style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
              {FILTER_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: activeFilter === option.id ? c.green1 : "#fff",
                    color: activeFilter === option.id ? "#fff" : c.green1,
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== option.id) {
                      e.target.style.backgroundColor = c.beige;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== option.id) {
                      e.target.style.backgroundColor = "#fff";
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "12px" }}>
                Find Your Kind of Bar
              </h2>
              <p style={{ color: "#666", fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>From cash-only dive bars to craft cocktail lounges, explore Milwaukee's diverse drinking scene.</p>
            </div>

            {filteredCategories.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#fff", borderRadius: "16px" }}>
                <p style={{ color: "#666", fontSize: "18px" }}>No categories match the current filter.</p>
                <button onClick={() => setActiveFilter("all")} style={{ marginTop: "16px", padding: "12px 24px", backgroundColor: c.orange, color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontFamily: "inherit" }}>
                  Show All Categories
                </button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
                {filteredCategories.map((cat) => (
                  <article
                    key={cat.id}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={{ backgroundColor: cat.color, padding: "24px", color: "#fff" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                        <IconComponent name={cat.icon} />
                        <h3 style={{ fontSize: "22px", fontWeight: "800", margin: 0 }}>{cat.title}</h3>
                      </div>
                      <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>{cat.tagline}</p>
                    </div>
                    <div style={{ padding: "24px" }}>
                      <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>{cat.description}</p>
                      <div style={{ marginBottom: "20px" }}>
                        {cat.featured.map((bar, i) => (
                          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 0", borderBottom: i < cat.featured.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                            <div>
                              <p style={{ fontWeight: "700", color: c.green1, marginBottom: "2px", fontSize: "14px" }}>{bar.name}</p>
                              <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>{bar.claim}</p>
                            </div>
                            <span style={{ fontSize: "11px", backgroundColor: c.beige, padding: "4px 10px", borderRadius: "20px", color: c.green2, fontWeight: "600", whiteSpace: "nowrap" }}>{bar.neighborhood}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={cat.link}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          backgroundColor: c.green1,
                          color: "#fff",
                          padding: "14px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontWeight: "700",
                          fontSize: "14px",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = c.green2}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = c.green1}
                      >
                        {cat.linkText}
                        <Icons.ArrowRight />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Bar Trails */}
          <section id="trails" style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "12px" }}>Milwaukee Bar Trails</h2>
              <p style={{ color: "#666", fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>Curated crawls for the perfect night out. Follow the trail, hit every stop, experience Milwaukee.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {BAR_TRAILS.map((trail) => (
                <article
                  key={trail.id}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    padding: "28px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, margin: 0, lineHeight: 1.3 }}>{trail.title}</h3>
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
                  <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#777" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Icons.Clock /> {trail.duration}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Icons.MapPin /> {trail.neighborhoods.join(", ")}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Neighborhoods */}
          <section id="neighborhoods" style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "12px" }}>Bars by Neighborhood</h2>
              <p style={{ color: "#666", fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>Each Milwaukee neighborhood has its own bar personality. Find yours.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {NEIGHBORHOODS.map((hood) => (
                <article
                  key={hood.name}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Neighborhood Header */}
                  <div style={{
                    background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`,
                    padding: "24px",
                    color: "#fff",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "22px", fontWeight: "800", margin: 0 }}>{hood.name}</h3>
                      <span style={{
                        fontSize: "13px",
                        backgroundColor: c.orange,
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontWeight: "700"
                      }}>
                        {hood.bars.length} bars
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "4px", fontWeight: "600" }}>{hood.vibe}</p>
                    <p style={{ fontSize: "13px", opacity: 0.8, margin: 0, lineHeight: 1.5 }}>{hood.character}</p>
                  </div>

                  {/* Bar Listings */}
                  <div style={{ padding: "20px" }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                      gap: "12px",
                    }}>
                      {hood.bars.map((bar, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            padding: "12px",
                            backgroundColor: c.cream,
                            borderRadius: "8px",
                          }}
                        >
                          <span style={{
                            fontSize: "10px",
                            backgroundColor: c.green2,
                            color: "#fff",
                            padding: "3px 8px",
                            borderRadius: "4px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}>
                            {bar.type}
                          </span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontWeight: "700", color: c.green1, margin: 0, fontSize: "14px" }}>{bar.name}</p>
                            <p style={{ fontSize: "12px", color: "#666", margin: "2px 0 0 0", lineHeight: 1.4 }}>{bar.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Know Before You Go */}
          <section style={{ backgroundColor: c.green1, borderRadius: "20px", padding: "48px", marginBottom: "80px" }}>
            <h2 style={{ color: c.yellow, fontSize: "26px", fontWeight: "900", marginBottom: "32px", textAlign: "center" }}>Milwaukee Bar Basics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {[
                { title: "Bar Time: 2:30 AM", desc: "Wisconsin bars can serve until 2:30 AM on weekends. Milwaukee takes full advantage." },
                { title: "Cash is King", desc: "Many dive bars are cash-only. Hit the ATM before your crawl. Tipping well is expected." },
                { title: "Brandy Old Fashioned", desc: "The state drink. Ask for 'sweet' with Sprite, 'sour' with sour mix, or 'press' with both." },
                { title: "Friday Fish Fry", desc: "A Wisconsin tradition. Many bars serve fish fry on Fridays—some are legendary." },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "20px" }}>
                  <h3 style={{ color: c.orange, fontSize: "15px", fontWeight: "700", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "900", color: c.green1, marginBottom: "32px", textAlign: "center" }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {faqs.map((faq, i) => (
                <article key={i} style={{ marginBottom: "16px", backgroundColor: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>{faq.question}</h3>
                  <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          {/* More Guides */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "900", color: c.green1, marginBottom: "20px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
              {[
                { title: "Best Restaurants", href: "/best-restaurants-milwaukee", color: c.orange },
                { title: "Coffee Shops", href: "/milwaukee-coffee-shops", color: c.green2 },
                { title: "Date Night Ideas", href: "/milwaukee-date-ideas", color: "#9B59B6" },
                { title: "Happy Hour Deals", href: "/best-happy-hour-milwaukee", color: "#E74C3C" },
              ].map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  style={{
                    backgroundColor: guide.color,
                    color: "#fff",
                    padding: "20px 16px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "700",
                    textAlign: "center",
                    display: "block",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "48px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <h2 style={{ color: c.green1, fontSize: "26px", fontWeight: "900", marginBottom: "12px" }}>Get the Weekly Pour</h2>
            <p style={{ color: "#666", fontSize: "16px", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px" }}>New bar openings, drink specials, and insider tips delivered every Wednesday.</p>
            <Link
              href="/newsletter"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: c.green1,
                color: c.yellow,
                padding: "16px 36px",
                borderRadius: "30px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,61,52,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Subscribe Free
              <Icons.ArrowRight />
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "48px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", marginBottom: "16px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" style={{ color: c.beige, textDecoration: "none", fontSize: "14px", cursor: "pointer" }}>About</Link>
            <Link href="/newsletter" style={{ color: c.beige, textDecoration: "none", fontSize: "14px", cursor: "pointer" }}>Newsletter</Link>
            <Link href="/privacy" style={{ color: c.beige, textDecoration: "none", fontSize: "14px", cursor: "pointer" }}>Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
