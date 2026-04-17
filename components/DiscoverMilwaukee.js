// DISCOVER MILWAUKEE - COMPLETE WEBSITE WITH ALL PAGES
// All navigation works: Home, Explore, Events, Newsletter, Partner
// Events powered by Google Sheets - see GOOGLE_SHEETS_CONFIG below

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Custom hook for responsive breakpoints
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
};

// Page route mapping
const PAGE_ROUTES = {
  home: "/",
  explore: "/explore",
  events: "/events",
  newsletter: "/newsletter",
  partner: "/partner"
};

const ROUTE_TO_PAGE = {
  "/": "home",
  "/explore": "explore",
  "/events": "events",
  "/newsletter": "newsletter",
  "/partner": "partner"
};

// SEO metadata for each page - Optimized for Milwaukee search rankings
const PAGE_SEO = {
  home: {
    title: "Things to Do in Milwaukee | Events, Restaurants & Local Guide 2026",
    description: "Discover the best things to do in Milwaukee, WI. Find local events, top restaurants, hidden gems, nightlife, and insider tips from real Milwaukeeans. Updated weekly.",
    canonical: "/",
    ogType: "website",
  },
  explore: {
    title: "Best of Milwaukee Guide | Restaurants, Bars & Neighborhoods 2026",
    description: "Explore Milwaukee's best restaurants, bars, neighborhoods, and hidden gems. Curated local guides to Third Ward, Bay View, East Side, Walker's Point and more.",
    canonical: "/explore",
    ogType: "website",
  },
  events: {
    title: "Milwaukee Events This Week | Concerts, Festivals & Things to Do",
    description: "Find the best Milwaukee events happening this week. Live music, festivals, Bucks games, food & drink events, comedy shows, and family activities. Free & paid events.",
    canonical: "/events",
    ogType: "website",
  },
  newsletter: {
    title: "Milwaukee Newsletter | Weekly Events & Local Tips | Free Subscribe",
    description: "Join 10,000+ Milwaukee insiders. Get the best events, new restaurant openings, and local favorites delivered free every Wednesday. The #1 Milwaukee newsletter.",
    canonical: "/newsletter",
    ogType: "website",
  },
  partner: {
    title: "Advertise in Milwaukee | Partner With Discover Milwaukee",
    description: "Reach Milwaukee's most engaged local audience. 22M+ annual views. Sponsored content, event promotion, and brand partnerships for Milwaukee businesses.",
    canonical: "/partner",
    ogType: "website",
  }
};

// Structured Data (Schema.org) for rich snippets
const getStructuredData = (page, events = [], articles = []) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Discover Milwaukee",
    "url": "https://discover-milwaukee.com",
    "logo": "https://discover-milwaukee.com/logo.png",
    "description": "Milwaukee's #1 local guide for events, restaurants, and things to do",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://instagram.com/discovermilwaukee",
      "https://tiktok.com/@discovermilwaukee",
      "https://facebook.com/discovermilwaukee"
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Discover Milwaukee",
    "description": "Milwaukee's premier local guide for events, restaurants, nightlife, and things to do",
    "url": "https://discover-milwaukee.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "postalCode": "53202",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.0389",
      "longitude": "-87.9065"
    },
    "areaServed": {
      "@type": "City",
      "name": "Milwaukee",
      "sameAs": "https://en.wikipedia.org/wiki/Milwaukee"
    }
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Discover Milwaukee",
    "url": "https://discover-milwaukee.com",
    "description": "Your insider's guide to Milwaukee events, restaurants, and things to do",
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://discover-milwaukee.com/events?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://discover-milwaukee.com"
      },
      page !== "home" && {
        "@type": "ListItem",
        "position": 2,
        "name": page.charAt(0).toUpperCase() + page.slice(1),
        "item": `https://discover-milwaukee.com/${page}`
      }
    ].filter(Boolean)
  };

  // Event structured data for events page
  const eventSchema = events.slice(0, 10).map(event => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.shortDescription,
    "startDate": event.startDateTime,
    "endDate": event.endDateTime,
    "location": {
      "@type": "Place",
      "name": event.venueName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milwaukee",
        "addressRegion": "WI",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "isAccessibleForFree": event.costType === "free",
    "offers": event.costType === "free" ? {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    } : undefined
  }));

  // Article structured data for explore page
  const articleSchema = articles.slice(0, 5).map(article => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || article.shortDescription,
    "author": {
      "@type": "Organization",
      "name": "Discover Milwaukee"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "logo": {
        "@type": "ImageObject",
        "url": "https://discover-milwaukee.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://discover-milwaukee.com/explore/${article.slug}`
    }
  }));

  // FAQ schema for homepage - targets featured snippets
  const homeFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is there to do in Milwaukee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milwaukee offers world-class attractions including the Milwaukee Art Museum, Harley-Davidson Museum, 100+ annual festivals (including Summerfest), professional sports (Bucks, Brewers), historic breweries like Lakefront Brewery, vibrant neighborhoods (Third Ward, Bay View, Walker's Point), excellent restaurants, craft breweries, and beautiful Lake Michigan lakefront access."
        }
      },
      {
        "@type": "Question",
        "name": "What is Milwaukee known for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milwaukee is known as America's historic brewing capital (home to Pabst, Schlitz, Miller), Harley-Davidson motorcycles, the Milwaukee Bucks (2021 NBA Champions), cheese curds and Friday fish fry tradition, Summerfest (world's largest music festival), the Milwaukee Art Museum's Calatrava-designed wings, and its German heritage."
        }
      },
      {
        "@type": "Question",
        "name": "Is Milwaukee worth visiting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Milwaukee is absolutely worth visiting. It offers big-city attractions at Midwest prices, a genuinely friendly atmosphere, an incredible food and craft beer scene, and a lakefront rivaling Chicago's. Most visitors are surprised by how much there is to do and how welcoming the city feels."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best neighborhoods in Milwaukee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milwaukee's best neighborhoods include the Historic Third Ward (upscale shopping, dining, galleries), Bay View (hip, artsy, great restaurants), Walker's Point (craft breweries, LGBTQ+ nightlife, street art), East Side/Brady Street (eclectic bars, shops, lakefront access), and Downtown (museums, sports, theater district)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to visit Milwaukee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to visit Milwaukee is late May through September when festival season is in full swing, patios are open, and the lakefront is buzzing. June-July features Summerfest and ethnic festivals. Fall offers beautiful foliage and fewer crowds. Winter is great for cozy bars, Bucks games, and holiday markets."
        }
      }
    ]
  };

  const schemas = [baseOrganization, localBusiness, website, breadcrumbs];

  // Add FAQ schema for homepage
  if (page === "home") {
    schemas.push(homeFAQSchema);
  }

  if (page === "events" && events.length > 0) {
    schemas.push(...eventSchema);
  }

  if (page === "explore" && articles.length > 0) {
    schemas.push(...articleSchema);
  }

  return schemas;
};

// ============================================================================
// GOOGLE SHEETS CONFIGURATION
// ============================================================================
// 
// HOW TO SET UP:
// 
// 1. Create a Google Sheet with these exact column headers (Row 1):
//    id | title | slug | startDateTime | endDateTime | allDay | venueName | neighborhood | category | tags | costType | costDetails | shortDescription | featured
//
// 2. Make the sheet PUBLIC:
//    - Click "Share" button
//    - Click "Change to anyone with the link"
//    - Set to "Viewer"
//
// 3. Get your Sheet ID from the URL:
//    https://docs.google.com/spreadsheets/d/[THIS_IS_YOUR_SHEET_ID]/edit
//
// 4. Replace the SHEET_ID below with your Sheet ID
//
// 5. Make sure the sheet/tab name matches SHEET_NAME (default: "Events")
//
// COLUMN FORMAT GUIDE:
// - id: Unique identifier (e.g., "1", "2", "event-jan-17")
// - title: Event name
// - slug: URL-friendly name (e.g., "art-walk", "bucks-game")
// - startDateTime: ISO format (2025-01-17T19:00:00) or readable (1/17/2025 7:00 PM)
// - endDateTime: Same format as startDateTime
// - allDay: TRUE or FALSE
// - venueName: Name of venue
// - neighborhood: Area of Milwaukee (Third Ward, Bay View, Downtown, etc.)
// - category: One of: Food & Drink, Live Music, Arts, Sports, Comedy, Family, Nightlife, Outdoors, Fitness, Shopping
// - tags: Comma-separated (free, date night, 21+, kid-friendly, outdoor)
// - costType: "free" or "paid"
// - costDetails: Price info ("Free", "$15", "$25-50")
// - shortDescription: 1-2 sentence description
// - featured: TRUE or FALSE
//
// ============================================================================

// ============================================================================
// MASTER GOOGLE SHEET - Single spreadsheet with multiple tabs
// ============================================================================
const MASTER_SHEET_ID = "1wIilEQVQFczUdUGf3MqpTpUguPvRPqUgWvP16ahFQ6g";

const GOOGLE_SHEETS_CONFIG = {
  // ============================================
  // EVENTS TAB
  // ============================================
  EVENTS: {
    SHEET_ID: MASTER_SHEET_ID,
    SHEET_NAME: "Events",
    ENABLED: false, // Disabled - using fallback events with dynamic dates
    REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes
  },
  
  // ============================================
  // ARTICLES TAB
  // ============================================
  EXPLORE: {
    SHEET_ID: MASTER_SHEET_ID,
    SHEET_NAME: "Articles",
    ENABLED: true,
    REFRESH_INTERVAL: 10 * 60 * 1000, // 10 minutes
  },
  
  // ============================================
  // PARTNERS TAB
  // ============================================
  PARTNERS: {
    SHEET_ID: MASTER_SHEET_ID,
    SHEET_NAME: "Partners",
    ENABLED: true,
    REFRESH_INTERVAL: 30 * 60 * 1000, // 30 minutes
  },
  
  // ============================================
  // NEIGHBORHOODS TAB
  // ============================================
  NEIGHBORHOODS: {
    SHEET_ID: MASTER_SHEET_ID,
    SHEET_NAME: "Neighborhoods",
    ENABLED: true,
    REFRESH_INTERVAL: 30 * 60 * 1000, // 30 minutes
  },
};

// Function to build Google Sheets API URL (public sheets only)
const getGoogleSheetsUrl = (config) => {
  const { SHEET_ID, SHEET_NAME } = config;
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
};

// Function to parse Google Sheets response for Events
const parseEventsData = (responseText) => {
  try {
    const jsonString = responseText.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/)?.[1];
    if (!jsonString) throw new Error("Invalid response format");
    
    const data = JSON.parse(jsonString);
    
    // Get headers - check both label and first row
    let headers = data.table.cols.map(col => col.label?.toLowerCase().replace(/\s+/g, '') || "");
    let rows = data.table.rows || [];
    
    // If headers are empty, try to get them from first row
    if (headers.every(h => !h) && rows.length > 0) {
      headers = rows[0].c?.map(cell => (cell?.v || cell?.f || "").toString().toLowerCase().replace(/\s+/g, '')) || [];
      rows = rows.slice(1); // Remove header row from data
    }
    
    console.log("Events headers found:", headers);
    console.log("Events rows count:", rows.length);
    
    const events = rows.map((row, index) => {
      const event = {};
      row.c?.forEach((cell, i) => {
        const header = headers[i];
        let value = cell?.v ?? cell?.f ?? "";
        
        if (header === "allday" || header === "featured") {
          value = String(value).toLowerCase() === "true";
        } else if (header === "tags" && typeof value === "string") {
          value = value.split(",").map(t => t.trim()).filter(Boolean);
        }
        
        const headerMap = {
          "allday": "allDay",
          "venuename": "venueName",
          "startdatetime": "startDateTime",
          "enddatetime": "endDateTime",
          "costtype": "costType",
          "costdetails": "costDetails",
          "shortdescription": "shortDescription",
        };
        
        event[headerMap[header] || header] = value;
      });
      
      event.id = event.id || `sheet-event-${index}`;
      event.tags = event.tags || [];
      event.allDay = event.allDay || false;
      event.featured = event.featured || false;
      
      return event;
    });
    
    console.log("Events parsed (before filter):", events);
    
    const filtered = events.filter(event => event.title);
    console.log("Events after filter:", filtered);
    
    return filtered;
  } catch (error) {
    console.error("Error parsing events data:", error);
    return null;
  }
};

// Function to parse Google Sheets response for Explore/Articles
const parseExploreData = (responseText) => {
  try {
    const jsonString = responseText.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/)?.[1];
    if (!jsonString) throw new Error("Invalid response format");
    
    const data = JSON.parse(jsonString);
    
    // Get headers - check both label and first row
    let headers = data.table.cols.map(col => col.label?.toLowerCase().replace(/\s+/g, '') || "");
    let rows = data.table.rows || [];
    
    // If headers are empty, try to get them from first row
    if (headers.every(h => !h) && rows.length > 0) {
      headers = rows[0].c?.map(cell => (cell?.v || cell?.f || "").toString().toLowerCase().replace(/\s+/g, '')) || [];
      rows = rows.slice(1); // Remove header row from data
    }
    
    console.log("Articles headers found:", headers);
    console.log("Articles rows count:", rows.length);
    
    const articles = rows.map((row, index) => {
      const article = {};
      row.c?.forEach((cell, i) => {
        const header = headers[i];
        let value = cell?.v ?? cell?.f ?? "";
        
        // Parse boolean fields
        if (header === "featured" || header === "ispillar") {
          value = String(value).toLowerCase() === "true";
        }
        // Parse arrays
        else if ((header === "tags" || header === "topiccategories") && typeof value === "string") {
          value = value.split(",").map(t => t.trim()).filter(Boolean);
        }
        // Parse numbers
        else if (header === "readtime" || header === "readtimeminutes") {
          value = parseInt(value) || 10;
        }
        
        const headerMap = {
          "topiccategories": "topicCategories",
          "readtime": "readTimeMinutes",
          "readtimeminutes": "readTimeMinutes",
          "ispillar": "isPillar",
          "metatitle": "metaTitle",
          "metadescription": "metaDescription",
          "lastupdated": "lastUpdated",
          "parentslug": "parentSlug",
          "shortdescription": "shortDescription",
          "heroimage": "heroImage",
        };
        
        article[headerMap[header] || header] = value;
      });
      
      // Set defaults
      article.id = article.id || `sheet-article-${index}`;
      article.tags = article.tags || [];
      article.topicCategories = article.topicCategories || (article.category ? [article.category] : []);
      article.featured = article.featured || false;
      article.isPillar = article.isPillar || article.type === "pillar";
      article.readTimeMinutes = article.readTimeMinutes || 10;
      article.type = article.type || "guide";
      article.icon = article.icon || "📄";
      article.color = article.color || "#2C5235";
      article.excerpt = article.shortDescription || article.excerpt || "";
      article.thumbnail = article.thumbnail || "";
      article.heroImage = article.heroImage || "";
      
      return article;
    });
    
    console.log("Articles parsed:", articles.length);
    
    return articles.filter(article => article.title);
  } catch (error) {
    console.error("Error parsing explore data:", error);
    return null;
  }
};

// Function to parse Google Sheets response for Partners
const parsePartnersData = (responseText) => {
  try {
    const jsonString = responseText.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/)?.[1];
    if (!jsonString) throw new Error("Invalid response format");
    
    const data = JSON.parse(jsonString);
    
    // Get headers - check both label and first row
    let headers = data.table.cols.map(col => col.label?.toLowerCase().replace(/\s+/g, '') || "");
    
    // If headers are empty, try to get them from first row
    const rows = data.table.rows || [];
    if (headers.every(h => !h) && rows.length > 0) {
      headers = rows[0].c?.map(cell => (cell?.v || cell?.f || "").toString().toLowerCase().replace(/\s+/g, '')) || [];
      rows.shift(); // Remove header row from data
    }
    
    console.log("Partners headers found:", headers);
    console.log("Partners rows count:", rows.length);
    
    const partners = rows.map((row, index) => {
      const partner = {};
      row.c?.forEach((cell, i) => {
        const header = headers[i];
        let value = cell?.v ?? cell?.f ?? "";
        
        if (header === "order") {
          value = parseInt(value) || index;
        }
        
        const headerMap = {
          "logourl": "logoUrl",
        };
        
        partner[headerMap[header] || header] = value;
      });
      
      partner.id = partner.id || `partner-${index}`;
      partner.order = partner.order || index;
      
      return partner;
    });
    
    console.log("Partners parsed (before filter):", partners);
    
    // Only require name - logoUrl is optional (will show placeholder if missing)
    const filtered = partners.filter(partner => partner.name);
    console.log("Partners after filter:", filtered);
    
    return filtered;
  } catch (error) {
    console.error("Error parsing partners data:", error);
    return null;
  }
};

// Function to parse Google Sheets response for Neighborhoods
const parseNeighborhoodsData = (responseText) => {
  try {
    const jsonString = responseText.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/)?.[1];
    if (!jsonString) throw new Error("Invalid response format");
    
    const data = JSON.parse(jsonString);
    const headers = data.table.cols.map(col => col.label?.toLowerCase().replace(/\s+/g, '') || "");
    const rows = data.table.rows || [];
    
    return rows.map((row, index) => {
      const neighborhood = {};
      row.c?.forEach((cell, i) => {
        const header = headers[i];
        let value = cell?.v ?? cell?.f ?? "";
        
        if (header === "order") {
          value = parseInt(value) || index;
        }
        
        neighborhood[header] = value;
      });
      
      neighborhood.id = neighborhood.id || `neighborhood-${index}`;
      neighborhood.order = neighborhood.order || index;
      
      return neighborhood;
    }).filter(n => n.name);
  } catch (error) {
    console.error("Error parsing neighborhoods data:", error);
    return null;
  }
};

// BRAND COLORS
const lightColors = {
  green1: "#2C5235", green2: "#547F4B", blue1: "#1E52A1", blue2: "#0B77BD", blue3: "#58ADC3",
  yellow: "#F0A623", orange: "#D06828", cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B",
  white: "#FFFFFF", black: "#000000",
  // UI specific
  navBg: "#F7F1E7", navText: "#2C5235", cardBg: "#FFFFFF", bodyBg: "#F7F1E7"
};

const darkColors = {
  green1: "#1a2f1f", green2: "#2d4a32", blue1: "#1E52A1", blue2: "#0B77BD", blue3: "#58ADC3",
  yellow: "#F0A623", orange: "#D06828", cream: "#1a1a1a", beige: "#2a2a2a", tan: "#9E7F4B",
  white: "#1f1f1f", black: "#FFFFFF",
  // UI specific
  navBg: "#1a1a1a", navText: "#F7F1E7", cardBg: "#252525", bodyBg: "#121212"
};

// Default colors (will be overridden in component)
const c = lightColors;

// DATE UTILITIES
const getMonday = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};
const getSunday = (mon) => { const d = new Date(mon); d.setDate(d.getDate() + 6); return d; };
const formatDate = (date, fmt = "short") => {
  const d = new Date(date);
  if (fmt === "short") return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if (fmt === "day") return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  if (fmt === "time") return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  if (fmt === "monthYear") return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  return d.toLocaleDateString();
};
const isSameDay = (d1, d2) => new Date(d1).toDateString() === new Date(d2).toDateString();
const isWithinWeek = (eventDate, monday) => {
  const e = new Date(eventDate), m = new Date(monday), s = getSunday(m);
  s.setHours(23, 59, 59, 999);
  return e >= m && e <= s;
};

// =============================================================================
// FALLBACK EVENTS - Static dates for reliability
// =============================================================================

// User's April 16-19, 2026 Events
const APRIL_2026_EVENTS = [
  // FEATURED EVENTS
  { id: "evt-1", title: "Milwaukee Film Festival", slug: "milwaukee-film-festival", startDateTime: "2026-04-16T10:00:00", endDateTime: "2026-04-19T23:00:00", allDay: false, venueName: "Various Locations", neighborhood: "Citywide", category: "Arts", tags: ["film", "festival"], costType: "paid", costDetails: "$15+", shortDescription: "Wisconsin's largest film festival returns with 200+ films from 50 countries. Opening night features world premieres.", featured: true },
  { id: "evt-2", title: "Spring Gallery Night", slug: "spring-gallery-night", startDateTime: "2026-04-17T17:00:00", endDateTime: "2026-04-18T21:00:00", allDay: false, venueName: "Historic Third Ward & Citywide", neighborhood: "Third Ward", category: "Arts", tags: ["free", "date night"], costType: "free", costDetails: "Free", shortDescription: "Milwaukee's biggest gallery crawl of spring. 50+ galleries, free admission, and artist meet-and-greets.", featured: true },
  { id: "evt-3", title: "Art in Bloom", slug: "art-in-bloom", startDateTime: "2026-04-16T10:00:00", endDateTime: "2026-04-19T17:00:00", allDay: false, venueName: "Milwaukee Art Museum", neighborhood: "Downtown", category: "Arts", tags: ["flowers", "art"], costType: "paid", costDetails: "$22", shortDescription: "Stunning floral installations interpreting masterworks. 50+ arrangements by local florists throughout the museum.", featured: true },
  { id: "evt-4", title: "Brew City Marathon, Half Marathon & 5K", slug: "brew-city-marathon", startDateTime: "2026-04-18T07:00:00", endDateTime: "2026-04-18T14:00:00", allDay: false, venueName: "McKinley Marina", neighborhood: "Downtown", category: "Sports", tags: ["outdoor", "fitness"], costType: "paid", costDetails: "$65-$130", shortDescription: "Scenic lakefront course through Milwaukee's best neighborhoods. Post-race beer garden at the finish.", featured: true },
  { id: "evt-5", title: "We Them Ones Comedy Tour", slug: "we-them-ones-comedy", startDateTime: "2026-04-18T20:00:00", endDateTime: "2026-04-18T23:00:00", allDay: false, venueName: "Fiserv Forum", neighborhood: "Downtown", category: "Comedy", tags: ["21+", "date night"], costType: "paid", costDetails: "$49+", shortDescription: "Bert Kreischer & Friends bring the laughs to Milwaukee. One of the biggest comedy tours of 2026.", featured: true },
  // WEDNESDAY APRIL 16
  { id: "evt-6", title: "Community Access Day", slug: "community-access-day", startDateTime: "2026-04-16T09:00:00", endDateTime: "2026-04-16T17:00:00", allDay: false, venueName: "Betty Brinn Children's Museum", neighborhood: "Downtown", category: "Family", tags: ["free", "kid-friendly"], costType: "free", costDetails: "Free", shortDescription: "Free admission for all families. Interactive exhibits, maker spaces, and hands-on learning.", featured: false },
  { id: "evt-7", title: "Spelling Bee Showdown", slug: "spelling-bee-showdown", startDateTime: "2026-04-16T18:30:00", endDateTime: "2026-04-16T21:00:00", allDay: false, venueName: "Lakefront Brewery", neighborhood: "Riverwest", category: "Nightlife", tags: ["21+", "free"], costType: "free", costDetails: "Free", shortDescription: "Adults-only spelling bee with beer. Teams compete for brewery prizes and bragging rights.", featured: false },
  { id: "evt-8", title: "Concerts in the Courtyard", slug: "concerts-courtyard", startDateTime: "2026-04-16T17:30:00", endDateTime: "2026-04-16T20:00:00", allDay: false, venueName: "Boerner Botanical Gardens", neighborhood: "Hales Corners", category: "Live Music", tags: ["outdoor", "free"], costType: "free", costDetails: "Free", shortDescription: "Live music surrounded by spring blooms. Food trucks and craft beverages available.", featured: false },
  // THURSDAY APRIL 17
  { id: "evt-9", title: "Food Truck Pilot Program", slug: "food-truck-pilot", startDateTime: "2026-04-17T11:00:00", endDateTime: "2026-04-17T14:00:00", allDay: false, venueName: "Milwaukee County Parks", neighborhood: "Citywide", category: "Food & Drink", tags: ["outdoor", "kid-friendly"], costType: "paid", costDetails: "Varies", shortDescription: "Sample 15+ food trucks at rotating park locations. Check locations day-of.", featured: false },
  { id: "evt-10", title: "Kite Society: Spring Session", slug: "kite-society-spring", startDateTime: "2026-04-17T16:00:00", endDateTime: "2026-04-17T19:00:00", allDay: false, venueName: "Veterans Park", neighborhood: "East Side", category: "Outdoors", tags: ["free", "kid-friendly"], costType: "free", costDetails: "Free", shortDescription: "Community kite flying along the lakefront. Bring your own or borrow from organizers.", featured: false },
  // FRIDAY APRIL 17
  { id: "evt-11", title: "Friday Fish Fry Crawl", slug: "fish-fry-crawl", startDateTime: "2026-04-17T16:00:00", endDateTime: "2026-04-17T22:00:00", allDay: false, venueName: "Various Bars & Restaurants", neighborhood: "Bay View", category: "Food & Drink", tags: ["21+"], costType: "paid", costDetails: "$15-25 per stop", shortDescription: "Sample Milwaukee's best fish fry at 4 iconic spots. Self-guided with discount card.", featured: false },
  { id: "evt-12", title: "MAM After Dark: Spring Edition", slug: "mam-after-dark", startDateTime: "2026-04-17T18:00:00", endDateTime: "2026-04-17T22:00:00", allDay: false, venueName: "Milwaukee Art Museum", neighborhood: "Downtown", category: "Arts", tags: ["21+", "date night"], costType: "paid", costDetails: "$25", shortDescription: "Explore the museum after hours with cocktails, DJs, and interactive art experiences.", featured: false },
  // SATURDAY APRIL 18
  { id: "evt-13", title: "Maker Faire Milwaukee", slug: "maker-faire", startDateTime: "2026-04-18T10:00:00", endDateTime: "2026-04-18T17:00:00", allDay: false, venueName: "Wisconsin State Fair Park", neighborhood: "West Allis", category: "Family", tags: ["kid-friendly"], costType: "paid", costDetails: "$15/$8", shortDescription: "DIY festival featuring 100+ makers, inventors, and crafters. Hands-on workshops all day.", featured: false },
  { id: "evt-14", title: "South Shore Farmers Market", slug: "south-shore-farmers", startDateTime: "2026-04-18T08:00:00", endDateTime: "2026-04-18T12:00:00", allDay: false, venueName: "South Shore Park", neighborhood: "Bay View", category: "Shopping", tags: ["free", "outdoor", "kid-friendly"], costType: "free", costDetails: "Free", shortDescription: "Season opener! 60+ vendors with local produce, baked goods, and artisan crafts.", featured: false },
  { id: "evt-15", title: "Pabst Mansion Spring Tour", slug: "pabst-mansion-spring", startDateTime: "2026-04-18T10:00:00", endDateTime: "2026-04-18T16:00:00", allDay: false, venueName: "Pabst Mansion", neighborhood: "Near West Side", category: "Tours", tags: ["indoor"], costType: "paid", costDetails: "$18", shortDescription: "Tour the Gilded Age mansion decorated with fresh spring florals.", featured: false },
  { id: "evt-16", title: "Lakefront Running Series", slug: "lakefront-running", startDateTime: "2026-04-18T08:00:00", endDateTime: "2026-04-18T11:00:00", allDay: false, venueName: "Bradford Beach", neighborhood: "East Side", category: "Sports", tags: ["outdoor", "fitness"], costType: "paid", costDetails: "$25", shortDescription: "5K and 10K along the lakefront. Post-race breakfast and beer included.", featured: false },
  // SUNDAY APRIL 19
  { id: "evt-17", title: "Urban Ecology Center Guided Hike", slug: "uec-guided-hike", startDateTime: "2026-04-19T09:00:00", endDateTime: "2026-04-19T11:00:00", allDay: false, venueName: "Urban Ecology Center - Riverside Park", neighborhood: "East Side", category: "Outdoors", tags: ["free", "kid-friendly"], costType: "free", costDetails: "Free", shortDescription: "Naturalist-led spring wildflower hike. Learn about native plants and urban wildlife.", featured: false },
  { id: "evt-18", title: "Sunday Funday at The Cooperage", slug: "sunday-funday-cooperage", startDateTime: "2026-04-19T12:00:00", endDateTime: "2026-04-19T17:00:00", allDay: false, venueName: "The Cooperage", neighborhood: "Walker's Point", category: "Live Music", tags: ["21+", "free"], costType: "free", costDetails: "Free", shortDescription: "Day drinking with live local bands. Food trucks and family-friendly until 5pm.", featured: false },
  { id: "evt-19", title: "Discovery World Free Admission Day", slug: "discovery-world-free", startDateTime: "2026-04-19T10:00:00", endDateTime: "2026-04-19T17:00:00", allDay: false, venueName: "Discovery World", neighborhood: "Downtown", category: "Family", tags: ["free", "kid-friendly"], costType: "free", costDetails: "Free", shortDescription: "Free admission all day. Science exhibits, aquarium, and lakefront views.", featured: false },
  { id: "evt-20", title: "Milwaukee Bucks Playoff Watch Party", slug: "bucks-watch-party", startDateTime: "2026-04-19T14:00:00", endDateTime: "2026-04-19T18:00:00", allDay: false, venueName: "Deer District", neighborhood: "Downtown", category: "Sports", tags: ["free", "outdoor"], costType: "free", costDetails: "Free", shortDescription: "Giant screens, live DJs, and 10,000 fans cheering on the Bucks. Deer District energy!", featured: false },
];

// Milwaukee Brewers 2026 Home Games at American Family Field
// Game times: Weeknights 6:40 PM, Saturdays 6:10 PM, Sundays 1:10 PM
const BREWERS_HOME_GAMES_2026 = [
  // MARCH 2026
  { id: "brew-1", title: "Brewers vs Chicago White Sox", slug: "brewers-whitesox-mar26", startDateTime: "2026-03-26T13:10:00", endDateTime: "2026-03-26T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Opening Day 2026! The Brewers kick off the season at home vs the White Sox.", featured: true },
  { id: "brew-2", title: "Brewers vs Chicago White Sox", slug: "brewers-whitesox-mar28", startDateTime: "2026-03-28T18:10:00", endDateTime: "2026-03-28T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night baseball vs the White Sox.", featured: false },
  { id: "brew-3", title: "Brewers vs Chicago White Sox", slug: "brewers-whitesox-mar29", startDateTime: "2026-03-29T13:10:00", endDateTime: "2026-03-29T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday afternoon at American Family Field.", featured: false },
  { id: "brew-4", title: "Brewers vs Tampa Bay Rays", slug: "brewers-rays-mar30", startDateTime: "2026-03-30T18:40:00", endDateTime: "2026-03-30T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "The Rays visit Milwaukee.", featured: false },
  { id: "brew-5", title: "Brewers vs Tampa Bay Rays", slug: "brewers-rays-mar31", startDateTime: "2026-03-31T18:40:00", endDateTime: "2026-03-31T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Tuesday night vs Tampa Bay.", featured: false },
  // APRIL 2026
  { id: "brew-6", title: "Brewers vs Tampa Bay Rays", slug: "brewers-rays-apr1", startDateTime: "2026-04-01T18:40:00", endDateTime: "2026-04-01T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Series finale vs the Rays.", featured: false },
  { id: "brew-7", title: "Brewers vs Washington Nationals", slug: "brewers-nationals-apr10", startDateTime: "2026-04-10T19:10:00", endDateTime: "2026-04-10T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Friday night vs the Nationals.", featured: false },
  { id: "brew-8", title: "Brewers vs Washington Nationals", slug: "brewers-nationals-apr11", startDateTime: "2026-04-11T18:10:00", endDateTime: "2026-04-11T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night baseball.", featured: false },
  { id: "brew-9", title: "Brewers vs Washington Nationals", slug: "brewers-nationals-apr12", startDateTime: "2026-04-12T13:10:00", endDateTime: "2026-04-12T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday at the ballpark.", featured: false },
  { id: "brew-10", title: "Brewers vs Toronto Blue Jays", slug: "brewers-bluejays-apr14", startDateTime: "2026-04-14T18:40:00", endDateTime: "2026-04-14T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Blue Jays visit Milwaukee.", featured: false },
  { id: "brew-11", title: "Brewers vs Toronto Blue Jays", slug: "brewers-bluejays-apr15", startDateTime: "2026-04-15T18:40:00", endDateTime: "2026-04-15T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Toronto.", featured: false },
  { id: "brew-12", title: "Brewers vs Toronto Blue Jays", slug: "brewers-bluejays-apr16", startDateTime: "2026-04-16T12:10:00", endDateTime: "2026-04-16T15:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Afternoon game vs the Blue Jays.", featured: false },
  { id: "brew-13", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-apr24", startDateTime: "2026-04-24T19:10:00", endDateTime: "2026-04-24T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Friday night NL Central matchup.", featured: false },
  { id: "brew-14", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-apr25", startDateTime: "2026-04-25T18:10:00", endDateTime: "2026-04-25T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night vs Pirates.", featured: false },
  { id: "brew-15", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-apr26", startDateTime: "2026-04-26T13:10:00", endDateTime: "2026-04-26T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday series finale vs Pittsburgh.", featured: false },
  { id: "brew-16", title: "Brewers vs Arizona Diamondbacks", slug: "brewers-dbacks-apr28", startDateTime: "2026-04-28T18:40:00", endDateTime: "2026-04-28T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "D-backs come to Milwaukee.", featured: false },
  { id: "brew-17", title: "Brewers vs Arizona Diamondbacks", slug: "brewers-dbacks-apr29", startDateTime: "2026-04-29T18:40:00", endDateTime: "2026-04-29T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Arizona.", featured: false },
  { id: "brew-18", title: "Brewers vs Arizona Diamondbacks", slug: "brewers-dbacks-apr30", startDateTime: "2026-04-30T18:40:00", endDateTime: "2026-04-30T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Thursday night vs D-backs.", featured: false },
  // MAY 2026
  { id: "brew-19", title: "Brewers vs New York Yankees", slug: "brewers-yankees-may8", startDateTime: "2026-05-08T19:10:00", endDateTime: "2026-05-08T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$30+", shortDescription: "The Yankees come to Milwaukee! Big crowd expected.", featured: true },
  { id: "brew-20", title: "Brewers vs New York Yankees", slug: "brewers-yankees-may9", startDateTime: "2026-05-09T18:10:00", endDateTime: "2026-05-09T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$30+", shortDescription: "Saturday night vs the Bronx Bombers.", featured: false },
  { id: "brew-21", title: "Brewers vs New York Yankees", slug: "brewers-yankees-may10", startDateTime: "2026-05-10T13:10:00", endDateTime: "2026-05-10T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$30+", shortDescription: "Sunday series finale vs Yankees.", featured: false },
  { id: "brew-22", title: "Brewers vs San Diego Padres", slug: "brewers-padres-may12", startDateTime: "2026-05-12T18:40:00", endDateTime: "2026-05-12T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Padres visit Milwaukee.", featured: false },
  { id: "brew-23", title: "Brewers vs San Diego Padres", slug: "brewers-padres-may13", startDateTime: "2026-05-13T18:40:00", endDateTime: "2026-05-13T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs San Diego.", featured: false },
  { id: "brew-24", title: "Brewers vs San Diego Padres", slug: "brewers-padres-may14", startDateTime: "2026-05-14T12:10:00", endDateTime: "2026-05-14T15:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Afternoon game vs Padres.", featured: false },
  { id: "brew-25", title: "Brewers vs Los Angeles Dodgers", slug: "brewers-dodgers-may22", startDateTime: "2026-05-22T19:10:00", endDateTime: "2026-05-22T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$25+", shortDescription: "The Dodgers come to town! Friday night showdown.", featured: true },
  { id: "brew-26", title: "Brewers vs Los Angeles Dodgers", slug: "brewers-dodgers-may23", startDateTime: "2026-05-23T18:10:00", endDateTime: "2026-05-23T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$25+", shortDescription: "Saturday night vs LA.", featured: false },
  { id: "brew-27", title: "Brewers vs Los Angeles Dodgers", slug: "brewers-dodgers-may24", startDateTime: "2026-05-24T13:10:00", endDateTime: "2026-05-24T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$25+", shortDescription: "Sunday series finale vs Dodgers.", featured: false },
  { id: "brew-28", title: "Brewers vs St. Louis Cardinals", slug: "brewers-cardinals-may25", startDateTime: "2026-05-25T13:10:00", endDateTime: "2026-05-25T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$20+", shortDescription: "Memorial Day weekend rivalry! Cardinals in town.", featured: true },
  { id: "brew-29", title: "Brewers vs St. Louis Cardinals", slug: "brewers-cardinals-may26", startDateTime: "2026-05-26T13:10:00", endDateTime: "2026-05-26T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$20+", shortDescription: "Memorial Day baseball vs the Cardinals!", featured: false },
  { id: "brew-30", title: "Brewers vs St. Louis Cardinals", slug: "brewers-cardinals-may27", startDateTime: "2026-05-27T18:40:00", endDateTime: "2026-05-27T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$20+", shortDescription: "Wednesday night rivalry game.", featured: false },
  // JUNE 2026
  { id: "brew-31", title: "Brewers vs San Francisco Giants", slug: "brewers-giants-jun1", startDateTime: "2026-06-01T18:40:00", endDateTime: "2026-06-01T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Giants come to Milwaukee.", featured: false },
  { id: "brew-32", title: "Brewers vs San Francisco Giants", slug: "brewers-giants-jun2", startDateTime: "2026-06-02T18:40:00", endDateTime: "2026-06-02T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Tuesday night vs SF.", featured: false },
  { id: "brew-33", title: "Brewers vs San Francisco Giants", slug: "brewers-giants-jun3", startDateTime: "2026-06-03T18:40:00", endDateTime: "2026-06-03T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Giants.", featured: false },
  { id: "brew-34", title: "Brewers vs San Francisco Giants", slug: "brewers-giants-jun4", startDateTime: "2026-06-04T12:10:00", endDateTime: "2026-06-04T15:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Thursday afternoon vs SF.", featured: false },
  { id: "brew-35", title: "Brewers vs Philadelphia Phillies", slug: "brewers-phillies-jun12", startDateTime: "2026-06-12T19:10:00", endDateTime: "2026-06-12T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Friday night vs the Phillies.", featured: false },
  { id: "brew-36", title: "Brewers vs Philadelphia Phillies", slug: "brewers-phillies-jun13", startDateTime: "2026-06-13T18:10:00", endDateTime: "2026-06-13T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Saturday night vs Philly.", featured: false },
  { id: "brew-37", title: "Brewers vs Philadelphia Phillies", slug: "brewers-phillies-jun14", startDateTime: "2026-06-14T13:10:00", endDateTime: "2026-06-14T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Sunday series finale vs Phillies.", featured: false },
  { id: "brew-38", title: "Brewers vs Cleveland Guardians", slug: "brewers-guardians-jun16", startDateTime: "2026-06-16T18:40:00", endDateTime: "2026-06-16T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Guardians visit Milwaukee.", featured: false },
  { id: "brew-39", title: "Brewers vs Cleveland Guardians", slug: "brewers-guardians-jun17", startDateTime: "2026-06-17T18:40:00", endDateTime: "2026-06-17T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Cleveland.", featured: false },
  { id: "brew-40", title: "Brewers vs Cleveland Guardians", slug: "brewers-guardians-jun18", startDateTime: "2026-06-18T12:10:00", endDateTime: "2026-06-18T15:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Thursday afternoon vs Guardians.", featured: false },
  { id: "brew-41", title: "Brewers vs Chicago Cubs", slug: "brewers-cubs-jun26", startDateTime: "2026-06-26T18:15:00", endDateTime: "2026-06-26T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "I-94 Rivalry! Cubs in town for Friday night.", featured: true },
  { id: "brew-42", title: "Brewers vs Chicago Cubs", slug: "brewers-cubs-jun27", startDateTime: "2026-06-27T18:10:00", endDateTime: "2026-06-27T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Saturday night rivalry game.", featured: false },
  { id: "brew-43", title: "Brewers vs Chicago Cubs", slug: "brewers-cubs-jun28", startDateTime: "2026-06-28T13:10:00", endDateTime: "2026-06-28T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Sunday series finale vs Cubs.", featured: false },
  { id: "brew-44", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-jun29", startDateTime: "2026-06-29T18:40:00", endDateTime: "2026-06-29T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "NL Central matchup vs Reds.", featured: false },
  { id: "brew-45", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-jun30", startDateTime: "2026-06-30T18:40:00", endDateTime: "2026-06-30T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Tuesday night vs Cincinnati.", featured: false },
  // JULY 2026
  { id: "brew-46", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-jul1", startDateTime: "2026-07-01T18:40:00", endDateTime: "2026-07-01T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Reds.", featured: false },
  { id: "brew-47", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-jul2", startDateTime: "2026-07-02T18:40:00", endDateTime: "2026-07-02T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Thursday night vs Cincinnati.", featured: false },
  { id: "brew-48", title: "Brewers vs Miami Marlins", slug: "brewers-marlins-jul17", startDateTime: "2026-07-17T19:10:00", endDateTime: "2026-07-17T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Friday night vs Miami.", featured: false },
  { id: "brew-49", title: "Brewers vs Miami Marlins", slug: "brewers-marlins-jul18", startDateTime: "2026-07-18T18:10:00", endDateTime: "2026-07-18T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night vs Marlins.", featured: false },
  { id: "brew-50", title: "Brewers vs Miami Marlins", slug: "brewers-marlins-jul19", startDateTime: "2026-07-19T13:10:00", endDateTime: "2026-07-19T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday series finale vs Miami.", featured: false },
  { id: "brew-51", title: "Brewers vs New York Mets", slug: "brewers-mets-jul20", startDateTime: "2026-07-20T18:40:00", endDateTime: "2026-07-20T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Mets visit Milwaukee.", featured: false },
  { id: "brew-52", title: "Brewers vs New York Mets", slug: "brewers-mets-jul21", startDateTime: "2026-07-21T18:40:00", endDateTime: "2026-07-21T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Tuesday night vs New York.", featured: false },
  { id: "brew-53", title: "Brewers vs New York Mets", slug: "brewers-mets-jul22", startDateTime: "2026-07-22T13:10:00", endDateTime: "2026-07-22T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Wednesday afternoon vs Mets.", featured: false },
  { id: "brew-54", title: "Brewers vs Colorado Rockies", slug: "brewers-rockies-jul24", startDateTime: "2026-07-24T19:10:00", endDateTime: "2026-07-24T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Friday night vs the Rockies.", featured: false },
  { id: "brew-55", title: "Brewers vs Colorado Rockies", slug: "brewers-rockies-jul25", startDateTime: "2026-07-25T18:10:00", endDateTime: "2026-07-25T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night vs Colorado.", featured: false },
  { id: "brew-56", title: "Brewers vs Colorado Rockies", slug: "brewers-rockies-jul26", startDateTime: "2026-07-26T13:10:00", endDateTime: "2026-07-26T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday series finale vs Rockies.", featured: false },
  // AUGUST 2026
  { id: "brew-57", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-aug3", startDateTime: "2026-08-03T18:40:00", endDateTime: "2026-08-03T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Pirates come to town.", featured: false },
  { id: "brew-58", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-aug4", startDateTime: "2026-08-04T18:40:00", endDateTime: "2026-08-04T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Tuesday night vs Pittsburgh.", featured: false },
  { id: "brew-59", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-aug5", startDateTime: "2026-08-05T18:40:00", endDateTime: "2026-08-05T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Pirates.", featured: false },
  { id: "brew-60", title: "Brewers vs Pittsburgh Pirates", slug: "brewers-pirates-aug6", startDateTime: "2026-08-06T12:10:00", endDateTime: "2026-08-06T15:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Thursday afternoon vs Pittsburgh.", featured: false },
  { id: "brew-61", title: "Brewers vs Minnesota Twins", slug: "brewers-twins-aug7", startDateTime: "2026-08-07T19:10:00", endDateTime: "2026-08-07T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Border Battle! Friday night vs Twins.", featured: false },
  { id: "brew-62", title: "Brewers vs Minnesota Twins", slug: "brewers-twins-aug8", startDateTime: "2026-08-08T18:10:00", endDateTime: "2026-08-08T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night vs Minnesota.", featured: false },
  { id: "brew-63", title: "Brewers vs Minnesota Twins", slug: "brewers-twins-aug9", startDateTime: "2026-08-09T13:10:00", endDateTime: "2026-08-09T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday series finale vs Twins.", featured: false },
  { id: "brew-64", title: "Brewers vs Seattle Mariners", slug: "brewers-mariners-aug18", startDateTime: "2026-08-18T18:40:00", endDateTime: "2026-08-18T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Mariners visit Milwaukee.", featured: false },
  { id: "brew-65", title: "Brewers vs Seattle Mariners", slug: "brewers-mariners-aug19", startDateTime: "2026-08-19T18:40:00", endDateTime: "2026-08-19T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Wednesday night vs Seattle.", featured: false },
  { id: "brew-66", title: "Brewers vs Seattle Mariners", slug: "brewers-mariners-aug20", startDateTime: "2026-08-20T12:10:00", endDateTime: "2026-08-20T15:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Thursday afternoon vs Mariners.", featured: false },
  { id: "brew-67", title: "Brewers vs Atlanta Braves", slug: "brewers-braves-aug21", startDateTime: "2026-08-21T19:10:00", endDateTime: "2026-08-21T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Friday night vs the Braves.", featured: false },
  { id: "brew-68", title: "Brewers vs Atlanta Braves", slug: "brewers-braves-aug22", startDateTime: "2026-08-22T13:10:00", endDateTime: "2026-08-22T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Saturday afternoon vs Atlanta.", featured: false },
  { id: "brew-69", title: "Brewers vs Atlanta Braves", slug: "brewers-braves-aug23", startDateTime: "2026-08-23T13:10:00", endDateTime: "2026-08-23T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$20+", shortDescription: "Sunday series finale vs Braves.", featured: false },
  { id: "brew-70", title: "Brewers vs Texas Rangers", slug: "brewers-rangers-aug28", startDateTime: "2026-08-28T19:10:00", endDateTime: "2026-08-28T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Friday night vs the Rangers.", featured: false },
  { id: "brew-71", title: "Brewers vs Texas Rangers", slug: "brewers-rangers-aug29", startDateTime: "2026-08-29T18:15:00", endDateTime: "2026-08-29T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night vs Texas.", featured: false },
  { id: "brew-72", title: "Brewers vs Texas Rangers", slug: "brewers-rangers-aug30", startDateTime: "2026-08-30T13:10:00", endDateTime: "2026-08-30T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday series finale vs Rangers.", featured: false },
  // SEPTEMBER 2026
  { id: "brew-73", title: "Brewers vs Chicago Cubs", slug: "brewers-cubs-sep7", startDateTime: "2026-09-07T13:10:00", endDateTime: "2026-09-07T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Labor Day weekend rivalry! Cubs in town.", featured: true },
  { id: "brew-74", title: "Brewers vs Chicago Cubs", slug: "brewers-cubs-sep8", startDateTime: "2026-09-08T18:40:00", endDateTime: "2026-09-08T22:00:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Tuesday night rivalry game.", featured: false },
  { id: "brew-75", title: "Brewers vs Chicago Cubs", slug: "brewers-cubs-sep9", startDateTime: "2026-09-09T13:10:00", endDateTime: "2026-09-09T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Wednesday afternoon vs Cubs.", featured: false },
  { id: "brew-76", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-sep11", startDateTime: "2026-09-11T19:10:00", endDateTime: "2026-09-11T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Friday night vs Cincinnati.", featured: false },
  { id: "brew-77", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-sep12", startDateTime: "2026-09-12T18:10:00", endDateTime: "2026-09-12T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Saturday night vs Reds.", featured: false },
  { id: "brew-78", title: "Brewers vs Cincinnati Reds", slug: "brewers-reds-sep13", startDateTime: "2026-09-13T13:10:00", endDateTime: "2026-09-13T16:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers"], costType: "paid", costDetails: "$15+", shortDescription: "Sunday series finale vs Cincinnati.", featured: false },
  { id: "brew-79", title: "Brewers vs St. Louis Cardinals", slug: "brewers-cardinals-sep25", startDateTime: "2026-09-25T19:10:00", endDateTime: "2026-09-25T22:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Final homestand! Friday night vs Cardinals.", featured: true },
  { id: "brew-80", title: "Brewers vs St. Louis Cardinals", slug: "brewers-cardinals-sep26", startDateTime: "2026-09-26T18:10:00", endDateTime: "2026-09-26T21:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$25+", shortDescription: "Saturday rivalry game vs St. Louis.", featured: false },
  { id: "brew-81", title: "Brewers vs St. Louis Cardinals", slug: "brewers-cardinals-sep27", startDateTime: "2026-09-27T14:10:00", endDateTime: "2026-09-27T17:30:00", allDay: false, venueName: "American Family Field", neighborhood: "West Side", category: "Sports", tags: ["baseball", "brewers", "rivalry"], costType: "paid", costDetails: "$30+", shortDescription: "Final home game of 2026! Fan Appreciation Day vs Cardinals.", featured: true },
];

// Combine user's April 2026 events with full Brewers 2026 schedule
const FALLBACK_EVENTS = [...APRIL_2026_EVENTS, ...BREWERS_HOME_GAMES_2026];

// FALLBACK EXPLORE DATA - Used when Google Sheets is not configured
// SEO-Optimized Pillar Content
const FALLBACK_EXPLORE = [
  // ===== PILLAR PAGES (Primary SEO Targets) =====
  {
    id: "pillar-1",
    title: "Things to Do in Milwaukee: 50+ Local Favorites (2025)",
    slug: "things-to-do-in-milwaukee",
    type: "pillar",
    topicCategories: ["Things To Do"],
    readTimeMinutes: 18,
    excerpt: "The definitive guide to things to do in Milwaukee. 50+ activities from locals who actually live here, organized by category, budget, and vibe. Updated weekly.",
    featured: true,
    isPillar: true,
    icon: "🎯",
    color: "#2C5235",
    tags: ["things to do", "activities", "guide", "milwaukee"],
    metaTitle: "Things to Do in Milwaukee - 50+ Local Picks (2025) | Discover Milwaukee",
    metaDescription: "The definitive guide to things to do in Milwaukee. 50+ activities from locals who actually live here. Free things, date ideas, family fun, and hidden gems.",
    lastUpdated: "2025-01-15",
    body: `Milwaukee offers an incredible mix of culture, food, outdoor activities, and entertainment that rivals any major city. Whether you're a visitor planning your first trip or a local looking for something new, this guide covers everything worth doing in Cream City.

## Quick Answer: Top 10 Things to Do in Milwaukee

1. **Milwaukee Art Museum** - Iconic architecture, world-class collection
2. **Lakefront Trail** - 118 miles of scenic paths along Lake Michigan
3. **Third Ward Exploration** - Shopping, dining, galleries
4. **Lakefront Brewery Tour** - Classic Milwaukee experience
5. **Milwaukee Public Market** - Local food vendors under one roof
6. **Fiserv Forum / Deer District** - Bucks games and concerts
7. **Discovery World** - Interactive science museum on the lakefront
8. **Bay View Neighborhood** - Local bars, restaurants, vintage shops
9. **Milwaukee County Zoo** - One of the country's best zoos
10. **Summerfest Grounds** - World's largest music festival (June-July)

## Free Things to Do in Milwaukee

Milwaukee doesn't require a big budget. Here are the best free activities:

**Lakefront Trail** - 118 miles of paved paths perfect for walking, running, or biking. Start at Veterans Park and head north past Bradford Beach or south toward Bay View.

**Milwaukee Art Museum** - Free admission every first Thursday of the month. The Santiago Calatrava-designed Quadracci Pavilion is worth seeing even from outside.

**Third Ward Art Walk** - Free monthly gallery walk on the third Friday, featuring local artists, wine, and live music.

**Bradford Beach** - Milwaukee's best beach. Free access, volleyball courts, and Lake Michigan views.

**Lakeshore State Park** - Wisconsin's only urban state park. Free entry, fishing pier, and downtown skyline views.

## Things to Do in Milwaukee This Weekend

For current weekend events, check our weekly events calendar. Popular weekend activities include:

- **Saturday Farmers Markets** - Multiple locations from May through October
- **Live Music** - Venues across Walker's Point, Bay View, and downtown
- **Bucks Games** - NBA action at Fiserv Forum (October-April)
- **Brewers Games** - Baseball at American Family Field (April-September)

## Family-Friendly Milwaukee Activities

**Discovery World** - Hands-on science exhibits and freshwater aquarium. Kids love the interactive technology zone.

**Milwaukee County Zoo** - Over 2,000 animals across 190 acres. Plan 3-4 hours minimum.

**Betty Brinn Children's Museum** - Designed for kids under 10. Excellent rainy day option.

**Mitchell Park Domes** - Three glass domes with tropical, desert, and seasonal plant displays.

## Milwaukee Date Night Ideas

**Dinner + Third Ward Walk** - Start at Café Benelux or Merriment Social, then walk the lit streets
**Lakefront Picnic** - Grab food from Public Market, find a spot at Veterans Park
**Comedy Night** - The Laughing Tap in Walker's Point
**Rooftop Drinks** - Café Benelux rooftop or The Outsider at Kimpton

## Outdoor Activities in Milwaukee

Milwaukee's location on Lake Michigan provides exceptional outdoor opportunities:

- **Kayaking on the Milwaukee River** - Rentals available downtown
- **Urban Ecology Center** - Three locations with nature programs
- **Seven Bridges Trail** - Challenging hike in Grant Park
- **Lake Park** - Designed by Frederick Law Olmsted, beautiful any season

## Frequently Asked Questions

**What is Milwaukee known for?**
Milwaukee is known for its brewing heritage (Pabst, Miller, Schlitz), lakefront location on Lake Michigan, diverse neighborhoods, the Milwaukee Bucks (2021 NBA Champions), Summerfest (world's largest music festival), and an increasingly acclaimed food scene.

**Is Milwaukee worth visiting?**
Absolutely. Milwaukee offers world-class museums, a vibrant food and bar scene, beautiful lakefront parks, professional sports, and distinct neighborhoods, all without the crowds and prices of larger cities.

**What is the best time to visit Milwaukee?**
Summer (June-August) offers the best weather, outdoor festivals, and Summerfest. Fall (September-October) brings pleasant temperatures and fewer crowds. Winter is cold but offers unique experiences like holiday markets and cozy bars.

**How many days do you need in Milwaukee?**
A long weekend (3-4 days) covers the highlights. A week allows deeper neighborhood exploration and day trips to nearby areas.`
  },
  {
    id: "pillar-2",
    title: "Best Restaurants in Milwaukee: Where Locals Actually Eat (2025)",
    slug: "best-restaurants-milwaukee",
    type: "pillar",
    topicCategories: ["Restaurants", "Food & Drink"],
    readTimeMinutes: 20,
    excerpt: "150+ Milwaukee restaurants worth your time and money. Fine dining to cheap eats, organized by neighborhood, cuisine, and occasion. No tourist traps.",
    featured: true,
    isPillar: true,
    icon: "🍽️",
    color: "#D06828",
    tags: ["restaurants", "food", "dining", "best restaurants"],
    metaTitle: "Best Restaurants in Milwaukee (2025) - Local's Guide | Discover Milwaukee",
    metaDescription: "The definitive guide to Milwaukee restaurants. 150+ spots from fine dining to cheap eats, organized by neighborhood, cuisine, and occasion. Updated monthly.",
    lastUpdated: "2025-01-15",
    body: `Milwaukee's restaurant scene has transformed over the past decade. What was once known primarily for Friday fish fry and frozen custard now offers James Beard-nominated chefs, diverse global cuisines, and innovative concepts that rival any major food city.

## Quick Answer: Top 10 Milwaukee Restaurants

1. **Sanford** - Fine dining institution, tasting menus
2. **Ardent** - Chef-driven modern American, intimate setting  
3. **Bavette La Boucherie** - French steakhouse, Third Ward
4. **Harbor House** - Lakefront seafood, stunning views
5. **Odd Duck** - Small plates, Walker's Point favorite
6. **Crossroads Collective** - Food hall, multiple concepts
7. **Vanguard** - Elevated bar food, craft sausages
8. **EsterEv** - Omakase experience, reservations required
9. **Goodkind** - Bay View farm-to-table
10. **La Merenda** - Slow food tapas, excellent wine

## Best Milwaukee Restaurants by Category

### Fine Dining
**Sanford** - Milwaukee's most acclaimed restaurant. Multi-course tasting menus in an intimate setting. $$$$$

**Ardent** - Chef Justin Carlisle's 20-seat restaurant offers one of the city's most memorable dining experiences. Reservations essential. $$$$$

**Bacchus** - Steakhouse meets fine dining in the Cudahy Tower. Great for special occasions. $$$$

### Best Casual Restaurants
**Odd Duck** - Small plates meant for sharing. The pork belly steam buns are legendary. $$

**Vanguard** - Gourmet sausages, craft cocktails, late-night hours. $

**Cafe Centraal** - Belgian-inspired Third Ward staple. Great mussels and frites. $$

### Best Budget Eats
**Conejito's Place** - Cash-only Mexican on the south side. Huge portions, tiny prices. $

**Jake's Deli** - Old-school deli, best corned beef in the city. $

**Kopps Frozen Custard** - Milwaukee institution. Flavor of the day is always the move. $

## Best Restaurants by Neighborhood

### Third Ward
The historic warehouse district offers Milwaukee's most concentrated dining scene:
- **Café Benelux** - Belgian, great brunch and rooftop
- **Merriment Social** - Modern American, excellent cocktails
- **St. Paul Fish Company** - Seafood market and raw bar

### Walker's Point
The city's most dynamic food neighborhood:
- **Odd Duck** - Essential small plates
- **Snack Boys** - Late-night Asian street food
- **Goodkind** - Farm-to-table comfort food

### Bay View
Local favorite with excellent variety:
- **Goodkind** - Farm-driven American
- **Palomino** - Neighborhood bar with great food
- **Crafty Cow** - Burgers and cheese curds done right

## Best Brunch in Milwaukee
- **Cafe Hollander** - Belgian waffles, multiple locations
- **Blue's Egg** - Worth the wait, American breakfast
- **Lazy Susan** - Bay View brunch favorite
- **Engine Company No. 3** - Firehouse-turned-restaurant

## Best Milwaukee Restaurants for Date Night
- **Sanford** - Ultimate special occasion
- **Ardent** - Intimate, memorable
- **Harbor House** - Lakefront views, seafood
- **Odd Duck** - Fun, shareable, Walker's Point energy

## Frequently Asked Questions

**What food is Milwaukee known for?**
Milwaukee is famous for Friday fish fry, frozen custard, cheese curds, bratwurst, and craft beer. The city also has excellent Serbian, Mexican, and German food due to its immigrant heritage.

**What is the best restaurant in Milwaukee?**
Sanford consistently ranks as Milwaukee's best restaurant, with decades of excellence in fine dining. For a more casual experience, Odd Duck is the local favorite.

**Is Milwaukee a good food city?**
Yes. Milwaukee has multiple James Beard-nominated restaurants, diverse ethnic food scenes, and innovative chefs. It punches well above its weight for a city its size.`
  },
  {
    id: "pillar-3",
    title: "Milwaukee Neighborhoods Guide: Where to Go and Why (2025)",
    slug: "milwaukee-neighborhoods",
    type: "pillar",
    topicCategories: ["Neighborhoods"],
    readTimeMinutes: 15,
    excerpt: "Every Milwaukee neighborhood explained. Where to eat, drink, stay, and explore based on your vibe. From Third Ward to Bay View, Walker's Point to East Side.",
    featured: true,
    isPillar: true,
    icon: "🏘️",
    color: "#1E52A1",
    tags: ["neighborhoods", "guide", "where to stay"],
    metaTitle: "Milwaukee Neighborhoods Guide (2025) - Where to Go | Discover Milwaukee",
    metaDescription: "Complete guide to Milwaukee neighborhoods. Third Ward, Bay View, Walker's Point, East Side, and more. Where to eat, drink, stay, and explore.",
    lastUpdated: "2025-01-15",
    body: `Milwaukee is a city of distinct neighborhoods, each with its own character, food scene, and vibe. Understanding these neighborhoods is key to experiencing the city like a local.

## Milwaukee Neighborhoods Overview

| Neighborhood | Best For | Vibe |
|--------------|----------|------|
| Third Ward | Shopping, dining, galleries | Upscale, trendy |
| Walker's Point | Nightlife, restaurants | Hip, energetic |
| Bay View | Local bars, brunch | Laid-back, authentic |
| East Side | College bars, music | Young, casual |
| Downtown | Sports, business | Urban, accessible |
| Riverwest | Arts, coffee shops | Bohemian, quirky |

## Historic Third Ward

Milwaukee's most walkable neighborhood. Former warehouse district transformed into the city's premier shopping and dining destination.

**Best For:** First-time visitors, shopping, upscale dining, galleries

**Don't Miss:**
- Milwaukee Public Market - Local food vendors under one roof
- Broadway - Main shopping street
- Third Ward Art Walk - Free monthly gallery event

**Where to Eat:** Café Benelux, Merriment Social, St. Paul Fish Company
**Where to Drink:** Café Benelux rooftop, The Wicked Hop

## Walker's Point

Milwaukee's most dynamic neighborhood. Former industrial zone now home to the city's best restaurants and nightlife.

**Best For:** Foodies, nightlife, LGBTQ+ scene

**Don't Miss:**
- Fifth Street - Restaurant row
- Second Street - Bar strip
- Iron Horse Hotel - Boutique hotel and bar

**Where to Eat:** Odd Duck, Snack Boys, Vanguard
**Where to Drink:** At Random, Bryant's Cocktail Lounge, Foundation

## Bay View

The neighborhood locals love. Kinnickinnic Avenue offers independent shops, excellent restaurants, and authentic Milwaukee vibes.

**Best For:** Local experience, brunch, casual bars, vintage shopping

**Don't Miss:**
- Kinnickinnic Avenue - Main drag
- South Shore Park - Beach and trails
- Cermak Fresh Market - International grocery

**Where to Eat:** Goodkind, Lazy Susan, Palomino
**Where to Drink:** Sugar Maple, Burnhearts

## East Side

UWM-adjacent neighborhood with youthful energy. North Avenue and Brady Street offer bars, restaurants, and entertainment.

**Best For:** Nightlife, casual dining, live music, young travelers

**Don't Miss:**
- Brady Street - Historic Italian neighborhood
- North Avenue - Bars and restaurants
- Colectivo Coffee - Lake Drive location

**Where to Eat:** Glorioso's Italian Market, Thai-namite
**Where to Drink:** Landmark Lanes, Hi-Hat

## Downtown Milwaukee

Central business district with sports venues, theaters, and waterfront access.

**Best For:** Business travelers, sports fans, convention attendees

**Don't Miss:**
- Fiserv Forum / Deer District - Bucks games
- Milwaukee Riverwalk - Scenic waterfront path
- Wisconsin Center District - Events and conventions

## Riverwest

Milwaukee's most bohemian neighborhood. Co-ops, coffee shops, and creative community.

**Best For:** Artists, alternative scene, budget-conscious

**Don't Miss:**
- Lakefront Brewery - Essential Milwaukee tour
- Fuel Café - Neighborhood coffee institution
- Center Street - Local businesses

## Frequently Asked Questions

**What is the best neighborhood in Milwaukee?**
It depends on your vibe. Third Ward is best for first-time visitors and shopping. Walker's Point is best for food and nightlife. Bay View is best for an authentic local experience.

**Where should I stay in Milwaukee?**
Third Ward and Downtown offer the most hotels and walkability. Walker's Point has boutique options like the Iron Horse. East Side works for budget travelers near UWM.

**Is Milwaukee safe?**
Milwaukee's tourist areas (Third Ward, Downtown, Walker's Point, Bay View, East Side) are generally safe. Like any city, use common sense at night.`
  },
  {
    id: "pillar-4",
    title: "Milwaukee Events Calendar: What's Happening This Week",
    slug: "milwaukee-events",
    type: "pillar",
    topicCategories: ["Events"],
    readTimeMinutes: 8,
    excerpt: "The most complete Milwaukee events calendar. Updated daily with concerts, festivals, sports, food events, and more. Never miss what's happening.",
    featured: true,
    isPillar: true,
    icon: "📅",
    color: "#F0A623",
    tags: ["events", "calendar", "things to do", "this weekend"],
    metaTitle: "Milwaukee Events This Week - What's Happening | Discover Milwaukee",
    metaDescription: "Complete Milwaukee events calendar. Concerts, festivals, sports, food events updated daily. Find what's happening in Milwaukee this weekend.",
    lastUpdated: "2025-01-15",
    body: `Stay up to date with everything happening in Milwaukee. Our events calendar is updated daily with the best concerts, festivals, sports, food events, and local happenings.

## What's Happening in Milwaukee This Weekend

Check our Events page for this week's complete listings. Popular weekend events typically include:

- **Live Music** - Venues across the city
- **Bucks/Brewers Games** - Seasonal sports
- **Third Ward Events** - Gallery walks, markets
- **Food & Drink** - Restaurant specials, brewery events

## Major Milwaukee Events by Season

### Summer (June - August)
**Summerfest** - World's largest music festival, late June to early July
**Wisconsin State Fair** - August, West Allis
**Brady Street Festival** - July, East Side
**Polish Fest, German Fest, Irish Fest** - Lakefront ethnic festivals

### Fall (September - November)
**Oktoberfest** - Multiple locations
**Halloween Events** - Throughout October
**Holiday Markets** - Beginning late November

### Winter (December - February)
**Christmas Markets** - Downtown and Third Ward
**Bucks Season** - October through April
**Winter Activities** - Ice skating, cozy bar season

### Spring (March - May)
**Brewers Opening Day** - Late March/Early April
**Gallery Night** - Quarterly art event
**Cinco de Mayo** - Walker's Point celebrations

## Annual Milwaukee Events

| Event | When | Location |
|-------|------|----------|
| Summerfest | Late June-July | Lakefront |
| State Fair | August | West Allis |
| Oktoberfest | September | Multiple |
| Gallery Night | Quarterly | Third Ward |
| Holiday Markets | Nov-Dec | Downtown |

## Frequently Asked Questions

**What events are happening in Milwaukee this weekend?**
Check our Events page for current listings. We update daily with the best things to do.

**What is Milwaukee's biggest event?**
Summerfest is Milwaukee's largest event and the world's largest music festival, attracting nearly 1 million visitors annually.

**Is there anything to do in Milwaukee in winter?**
Yes! Winter brings Bucks basketball, holiday markets, cozy bar season, and indoor activities at museums and entertainment venues.`
  },
  {
    id: "pillar-5",
    title: "Best Bars in Milwaukee: Local's Drinking Guide (2025)",
    slug: "best-bars-milwaukee",
    type: "pillar",
    topicCategories: ["Bars", "Nightlife"],
    readTimeMinutes: 14,
    excerpt: "Every type of bar Milwaukee offers. Dive bars, cocktail lounges, rooftops, breweries, and neighborhood spots. Where locals actually drink.",
    featured: true,
    isPillar: true,
    icon: "🍺",
    color: "#9E7F4B",
    tags: ["bars", "nightlife", "drinks", "breweries"],
    metaTitle: "Best Bars in Milwaukee (2025) - Local's Guide | Discover Milwaukee",
    metaDescription: "Complete guide to Milwaukee bars. Dive bars, cocktail lounges, rooftops, breweries. Where locals actually drink. Updated for 2025.",
    lastUpdated: "2025-01-15",
    body: `Milwaukee earned its reputation as a drinking city honestly. From historic breweries to craft cocktail lounges, dive bars to rooftops, the city offers something for every drinking style.

## Quick Answer: Top 10 Milwaukee Bars

1. **Bryant's Cocktail Lounge** - Historic cocktail bar since 1938
2. **At Random** - Ice cream drinks, retro vibes
3. **Sugar Maple** - Best craft beer selection, Bay View
4. **Burnhearts** - Neighborhood bar done right
5. **The Palm Tavern** - Bay View institution
6. **Wolski's Tavern** - Legendary dive, bumper stickers
7. **Foundation** - Tiki bar, Walker's Point
8. **Landmark Lanes** - Bowling, bars, East Side
9. **Café Benelux Rooftop** - Third Ward views
10. **Lakefront Brewery** - Essential Milwaukee tour

## Best Cocktail Bars

**Bryant's Cocktail Lounge** - Operating since 1938, no menu, trust your bartender. Milwaukee's most legendary cocktail experience.

**At Random** - Ice cream drinks in a retro lounge setting. Order a Pink Squirrel.

**Lost Valley Cider** - Craft cider house with cocktail program, Walker's Point.

## Best Dive Bars

**Wolski's Tavern** - "I Closed Wolski's" bumper stickers are a Milwaukee badge of honor. Cash only.

**Comet Café** - Walker's Point dive with great food and local character.

**The Palm Tavern** - Bay View corner bar, perfectly divey.

## Best Beer Bars

**Sugar Maple** - Best craft beer selection in the city. 60+ taps, hundreds of bottles.

**Palm Tavern** - Solid tap selection, neighborhood vibes.

**Burnhearts** - Great beer list, better atmosphere.

## Best Rooftop Bars

**Café Benelux** - Third Ward rooftop with downtown views. Heated in winter.

**The Outsider** - Kimpton Hotel rooftop, downtown.

**Good City Brewing** - East Side brewery with rooftop patio.

## Best Breweries

**Lakefront Brewery** - The essential Milwaukee brewery tour. Friday fish fry.

**Good City Brewing** - Modern taproom, excellent IPAs.

**Third Space Brewing** - Local favorite, Menomonee Valley.

**Enlightened Brewing** - Bay View brewery with character.

## Milwaukee Bar Crawl Routes

**Walker's Point Crawl:** Foundation → At Random → Bryant's → Comet Café

**Bay View Crawl:** Sugar Maple → Burnhearts → Palm Tavern → Enlightened Brewing

**Third Ward Crawl:** Café Benelux → Wicked Hop → Milwaukee Ale House

## Frequently Asked Questions

**What is Milwaukee known for drinking?**
Beer, obviously. But Milwaukee also has excellent cocktail culture thanks to historic bars like Bryant's and At Random.

**What is the oldest bar in Milwaukee?**
Several bars claim the title, but Wolski's Tavern (1908) and Bryant's Cocktail Lounge (1938) are among the most historic.

**Is Milwaukee a good city for nightlife?**
Yes. Walker's Point offers the densest nightlife, Bay View has neighborhood bars, and East Side caters to younger crowds.`
  },
  
  // ===== CLUSTER CONTENT (Supporting Pages) =====
  {
    id: "cluster-1",
    title: "Free Things to Do in Milwaukee: 30+ No-Cost Activities",
    slug: "free-things-to-do-milwaukee",
    type: "list",
    topicCategories: ["Things To Do", "Budget"],
    readTimeMinutes: 8,
    excerpt: "30+ activities that cost absolutely nothing. Parks, beaches, museums (on free days), and hidden gems that won't touch your wallet.",
    featured: false,
    icon: "🆓",
    color: "#547F4B",
    tags: ["free", "budget", "activities"],
    parentSlug: "things-to-do-in-milwaukee",
    body: `Milwaukee offers incredible free activities. Here's everything worth doing that won't cost you a dime.

## Best Free Activities

**Lakefront Trail** - 118 miles of paved paths along Lake Michigan. Start at Veterans Park.

**Milwaukee Art Museum (First Thursdays)** - Free admission first Thursday of each month.

**Bradford Beach** - Milwaukee's best beach, free access.

**Third Ward Art Walk** - Free gallery walk, third Friday monthly.

**Lakeshore State Park** - Wisconsin's only urban state park.

**Milwaukee Public Library** - Beautiful historic central library, free programs.`
  },
  {
    id: "cluster-2",
    title: "Milwaukee Date Night Ideas: 50+ Romantic Things to Do",
    slug: "milwaukee-date-night-ideas",
    type: "list",
    topicCategories: ["Date Night", "Things To Do"],
    readTimeMinutes: 10,
    excerpt: "First date? Anniversary? 50+ date ideas from casual to fancy, outdoor to cozy. No Netflix required.",
    featured: false,
    icon: "💕",
    color: "#1E52A1",
    tags: ["date night", "romantic", "couples"],
    parentSlug: "things-to-do-in-milwaukee",
    body: `Milwaukee offers excellent date options across every budget and vibe. Here are 50+ ideas.

## Casual First Dates
- Coffee at Colectivo Lake Drive
- Walk the Lakefront Trail
- Milwaukee Public Market exploration
- Third Ward gallery walk

## Special Occasion Dates
- Dinner at Sanford
- Omakase at EsterEv
- Harbor House with lakefront views
- Rooftop drinks at Café Benelux`
  },
  {
    id: "cluster-3",
    title: "Best Brunch in Milwaukee: Weekend Favorites",
    slug: "best-brunch-milwaukee",
    type: "list",
    topicCategories: ["Restaurants", "Food & Drink"],
    readTimeMinutes: 7,
    excerpt: "Weekend brunch done right. Bottomless mimosas, killer benedicts, and spots actually worth the wait.",
    featured: false,
    icon: "🥞",
    color: "#58ADC3",
    tags: ["brunch", "breakfast", "weekend"],
    parentSlug: "best-restaurants-milwaukee",
    body: `Milwaukee takes brunch seriously. Here's where to go.

## Best Overall Brunch
**Blue's Egg** - Worth the wait, excellent American breakfast.
**Lazy Susan** - Bay View brunch favorite, creative menu.
**Café Hollander** - Belgian waffles, multiple locations.

## Best Boozy Brunch
**Café Benelux** - Bottomless mimosas, Third Ward.
**Engine Company No. 3** - Bloody Mary bar.`
  },
  {
    id: "cluster-4",
    title: "Best Rooftop Bars in Milwaukee: Drinks with Views",
    slug: "best-rooftop-bars-milwaukee",
    type: "list",
    topicCategories: ["Bars", "Nightlife"],
    readTimeMinutes: 6,
    excerpt: "8 rooftops with skyline views, good drinks, and summer vibes. Where to drink above it all in Milwaukee.",
    featured: false,
    icon: "🌅",
    color: "#58ADC3",
    tags: ["rooftop", "bars", "views", "summer"],
    parentSlug: "best-bars-milwaukee",
    body: `Milwaukee's rooftop season is short but sweet. Here's where to drink with views.

## Best Rooftop Bars

**Café Benelux** - Third Ward, best overall, heated for winter.
**The Outsider** - Kimpton Hotel downtown.
**Good City Brewing** - East Side, brewery rooftop.
**Blu at The Pfister** - 23rd floor, upscale.`
  },
  {
    id: "cluster-5",
    title: "Third Ward Milwaukee Guide: Shopping, Dining & More",
    slug: "third-ward-milwaukee",
    type: "neighborhood",
    topicCategories: ["Neighborhoods"],
    neighborhood: "Third Ward",
    readTimeMinutes: 10,
    excerpt: "The complete guide to Milwaukee's Historic Third Ward. Best restaurants, shops, galleries, and things to do in MKE's trendiest neighborhood.",
    featured: false,
    icon: "🏙️",
    color: "#0B77BD",
    tags: ["third ward", "shopping", "dining", "neighborhood"],
    parentSlug: "milwaukee-neighborhoods",
    body: `The Historic Third Ward is Milwaukee's most walkable and visitor-friendly neighborhood.

## What to Do in Third Ward

**Milwaukee Public Market** - Local food vendors, essential stop.
**Broadway Shopping** - Boutiques, home goods, galleries.
**Riverwalk** - Scenic waterfront walking path.

## Where to Eat
Café Benelux, Merriment Social, St. Paul Fish Company, Char'd

## Where to Drink
Café Benelux rooftop, The Wicked Hop, Milwaukee Ale House`
  },
  {
    id: "cluster-6",
    title: "Bay View Milwaukee Guide: The Local's Neighborhood",
    slug: "bay-view-milwaukee",
    type: "neighborhood",
    topicCategories: ["Neighborhoods"],
    neighborhood: "Bay View",
    readTimeMinutes: 9,
    excerpt: "Bay View is where locals hang out. Best bars, restaurants, coffee shops, and things to do in Milwaukee's most authentic neighborhood.",
    featured: false,
    icon: "🏖️",
    color: "#547F4B",
    tags: ["bay view", "neighborhood", "local"],
    parentSlug: "milwaukee-neighborhoods",
    body: `Bay View is Milwaukee's most beloved neighborhood for residents. Here's why.

## What Makes Bay View Special

Kinnickinnic Avenue is the main strip, lined with independent businesses, excellent restaurants, and some of the city's best bars.

## Best Restaurants
Goodkind, Lazy Susan, Palomino, Crafty Cow

## Best Bars
Sugar Maple, Burnhearts, Palm Tavern, Enlightened Brewing

## Things to Do
South Shore Park, vintage shopping on KK, Colectivo Coffee`
  },
  {
    id: "cluster-7",
    title: "Walker's Point Milwaukee Guide: Food & Nightlife",
    slug: "walkers-point-milwaukee",
    type: "neighborhood",
    topicCategories: ["Neighborhoods", "Nightlife"],
    neighborhood: "Walker's Point",
    readTimeMinutes: 8,
    excerpt: "Walker's Point has Milwaukee's best restaurants and nightlife. Here's the complete guide to eating and drinking in MKE's most dynamic neighborhood.",
    featured: false,
    icon: "🍸",
    color: "#D06828",
    tags: ["walkers point", "nightlife", "restaurants"],
    parentSlug: "milwaukee-neighborhoods",
    body: `Walker's Point is Milwaukee's most exciting neighborhood for food and nightlife.

## Best Restaurants
Odd Duck, Snack Boys, Vanguard, Strange Town

## Best Bars
Bryant's Cocktail Lounge, At Random, Foundation, Comet Café

## Nightlife Scene
Second Street is the main bar strip. Fifth Street has the best restaurants.`
  },
  {
    id: "cluster-8",
    title: "Best Breweries in Milwaukee: Beer City Guide",
    slug: "best-breweries-milwaukee",
    type: "list",
    topicCategories: ["Breweries", "Bars"],
    readTimeMinutes: 9,
    excerpt: "Milwaukee was built on beer. Here's where to drink it today, from historic breweries to modern craft favorites.",
    featured: false,
    icon: "🍺",
    color: "#F0A623",
    tags: ["breweries", "beer", "craft beer"],
    parentSlug: "best-bars-milwaukee",
    body: `Milwaukee is Beer City. Here are the breweries worth visiting.

## Must-Visit Breweries

**Lakefront Brewery** - Essential Milwaukee experience. Tour includes beer, cheese, and a polka band on Fridays.

**Good City Brewing** - Modern taproom, excellent IPAs, East Side.

**Third Space Brewing** - Local favorite, Menomonee Valley.

**Enlightened Brewing** - Bay View neighborhood brewery.

**MobCraft Beer** - Crowdsourced recipes, unique brews.`
  },
  {
    id: "cluster-9",
    title: "Milwaukee Coffee Shops: Where to Work and Caffeinate",
    slug: "milwaukee-coffee-shops",
    type: "guide",
    topicCategories: ["Coffee", "Food & Drink"],
    readTimeMinutes: 7,
    excerpt: "The best coffee shops in Milwaukee for working, meeting, or just getting caffeinated. Local roasters and favorite spots.",
    featured: false,
    icon: "☕",
    color: "#9E7F4B",
    tags: ["coffee", "cafes", "work spots"],
    body: `Milwaukee's coffee scene punches above its weight. Here's where to go.

## Best Overall
**Colectivo Coffee** - Local roaster, multiple locations. Lake Drive is the flagship.

**Stone Creek Coffee** - Milwaukee roaster, Factory location has tours.

**Anodyne Coffee** - Walker's Point, excellent space for working.

## Best for Working
Colectivo (any location), Anodyne, Interval`
  },
  {
    id: "cluster-10",
    title: "What to Do in Milwaukee This Weekend",
    slug: "milwaukee-this-weekend",
    type: "guide",
    topicCategories: ["Events", "Things To Do"],
    readTimeMinutes: 5,
    excerpt: "What's happening in Milwaukee this weekend. Updated weekly with the best events, activities, and things to do.",
    featured: false,
    icon: "🎉",
    color: "#F0A623",
    tags: ["weekend", "events", "this weekend"],
    parentSlug: "milwaukee-events",
    body: `Find the best things to do in Milwaukee this weekend. Check our Events page for complete current listings.

## Typical Weekend Highlights
- Live music across multiple venues
- Restaurant specials and events
- Sports (Bucks, Brewers in season)
- Third Ward shopping and dining
- Bay View neighborhood exploration`
  },
  {
    id: "cluster-11",
    title: "Milwaukee Winter Activities: Cold Weather Guide",
    slug: "milwaukee-winter-activities",
    type: "guide",
    topicCategories: ["Things To Do", "Seasonal"],
    readTimeMinutes: 8,
    excerpt: "What to do in Milwaukee when it's freezing. Indoor activities, cozy bars, winter sports, and ways to embrace the cold.",
    featured: false,
    icon: "❄️",
    color: "#1E52A1",
    tags: ["winter", "seasonal", "indoor"],
    parentSlug: "things-to-do-in-milwaukee",
    body: `Milwaukee winters are cold. Here's how to enjoy them anyway.

## Indoor Activities
- Milwaukee Art Museum
- Discovery World
- Mitchell Park Domes
- Brewery tours (Lakefront is heated)

## Cozy Bars
- Bryant's Cocktail Lounge
- At Random
- Burnhearts

## Winter Sports
- Red Arrow Park ice skating (downtown)
- Cross-country skiing in county parks`
  },
  {
    id: "cluster-12",
    title: "Milwaukee Visitor Guide: First Time in the City",
    slug: "visiting-milwaukee",
    type: "guide",
    topicCategories: ["Guide", "Things To Do"],
    readTimeMinutes: 12,
    excerpt: "Everything you need to know for your first visit to Milwaukee. Where to stay, what to do, how to get around, and what to expect.",
    featured: false,
    icon: "✈️",
    color: "#2C5235",
    tags: ["visitor guide", "first time", "travel"],
    body: `Planning your first trip to Milwaukee? Here's everything you need to know.

## Quick Facts
- **Population:** 577,000 (city), 1.5 million (metro)
- **Best Time to Visit:** Summer (June-August) for festivals, Fall for pleasant weather
- **Getting Around:** Car helpful but not essential for tourist areas

## Where to Stay
**Third Ward** - Most walkable, best dining
**Downtown** - Near sports venues, business district
**East Side** - Budget-friendly, near UWM

## Must-Do Activities
1. Milwaukee Art Museum
2. Lakefront Trail
3. Third Ward exploration
4. Brewery tour
5. Local restaurant meal

## How Many Days?
3-4 days covers the highlights. A week allows deeper exploration.`
  }
];

// Helper function to get related posts - this will be called inside component
// where exploreArticles is available

// ICONS
const Icons = {
  Instagram: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><circle cx="12" cy="12" r="3.2"/><circle cx="18.4" cy="5.6" r="1.44"/></svg>,
  TikTok: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>,
  Facebook: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Clock: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  ChevronLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg>,
  ChevronRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>,
};

// MAIN COMPONENT
export function DiscoverMilwaukee({ initialPage = "home" }) {
  const router = useRouter();
  const [page, setPageState] = useState(initialPage);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle"); // idle, loading, success, error
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Sync page state with URL on mount and route changes
  useEffect(() => {
    const currentPage = ROUTE_TO_PAGE[router.pathname] || "home";
    setPageState(currentPage);
  }, [router.pathname]);
  
  // Navigation function that updates URL
  const setPage = (newPage) => {
    const route = PAGE_ROUTES[newPage.toLowerCase()] || "/";
    router.push(route, undefined, { shallow: false });
  };
  
  // Responsive hook
  const { isMobile, isTablet } = useResponsive();
  
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);
  
  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);
  
  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  
  // Global search state
  const [globalSearch, setGlobalSearch] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  
  // Events state - with Google Sheets integration
  const [events, setEvents] = useState(FALLBACK_EVENTS);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventsError, setEventsError] = useState(null);
  const [eventsView, setEventsView] = useState("week");
  const [selectedWeek, setSelectedWeek] = useState(getMonday(new Date()));
  const [eventsSearch, setEventsSearch] = useState("");
  const [eventsCategory, setEventsCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Explore state - with Google Sheets integration
  const [exploreArticles, setExploreArticles] = useState(FALLBACK_EXPLORE);
  const [exploreLoading, setExploreLoading] = useState(false);
  const [exploreError, setExploreError] = useState(null);
  const [exploreSearch, setExploreSearch] = useState("");
  const [exploreType, setExploreType] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Fetch events from Google Sheets (or regenerate fallback with current dates on mount)
  useEffect(() => {
    const fetchEvents = async () => {
      if (!GOOGLE_SHEETS_CONFIG.EVENTS.ENABLED) {
        console.log("Events Google Sheets integration disabled. Regenerating with current dates.");
        setEvents(FALLBACK_EVENTS);
        return;
      }
      
      setEventsLoading(true);
      setEventsError(null);
      
      try {
        const response = await fetch(getGoogleSheetsUrl(GOOGLE_SHEETS_CONFIG.EVENTS));
        const text = await response.text();
        const parsedEvents = parseEventsData(text);
        
        if (parsedEvents && parsedEvents.length > 0) {
          setEvents(parsedEvents);
          console.log(`Loaded ${parsedEvents.length} events from Google Sheets`);
        } else {
          console.warn("No events found in Google Sheet, using fallback");
          setEvents(FALLBACK_EVENTS);
        }
      } catch (error) {
        console.error("Failed to fetch events from Google Sheets:", error);
        setEventsError("Failed to load events. Showing cached data.");
        setEvents(FALLBACK_EVENTS);
      } finally {
        setEventsLoading(false);
      }
    };
    
    fetchEvents();
    
    if (GOOGLE_SHEETS_CONFIG.EVENTS.ENABLED && GOOGLE_SHEETS_CONFIG.EVENTS.REFRESH_INTERVAL > 0) {
      const interval = setInterval(fetchEvents, GOOGLE_SHEETS_CONFIG.EVENTS.REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }
  }, []);
  
  // Fetch explore articles from Google Sheets
  useEffect(() => {
    const fetchExplore = async () => {
      if (!GOOGLE_SHEETS_CONFIG.EXPLORE.ENABLED) {
        console.log("Explore Google Sheets integration disabled. Using fallback data.");
        return;
      }
      
      setExploreLoading(true);
      setExploreError(null);
      
      try {
        const response = await fetch(getGoogleSheetsUrl(GOOGLE_SHEETS_CONFIG.EXPLORE));
        const text = await response.text();
        const parsedArticles = parseExploreData(text);
        
        if (parsedArticles && parsedArticles.length > 0) {
          setExploreArticles(parsedArticles);
          console.log(`Loaded ${parsedArticles.length} articles from Google Sheets`);
        } else {
          console.warn("No articles found in Google Sheet, using fallback");
          setExploreArticles(FALLBACK_EXPLORE);
        }
      } catch (error) {
        console.error("Failed to fetch articles from Google Sheets:", error);
        setExploreError("Failed to load articles. Showing cached data.");
        setExploreArticles(FALLBACK_EXPLORE);
      } finally {
        setExploreLoading(false);
      }
    };
    
    fetchExplore();
    
    if (GOOGLE_SHEETS_CONFIG.EXPLORE.ENABLED && GOOGLE_SHEETS_CONFIG.EXPLORE.REFRESH_INTERVAL > 0) {
      const interval = setInterval(fetchExplore, GOOGLE_SHEETS_CONFIG.EXPLORE.REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }
  }, []);
  
  // Partners state - with Google Sheets integration
  const [partners, setPartners] = useState([]);
  const [partnersLoading, setPartnersLoading] = useState(false);
  
  // Neighborhoods state - with Google Sheets integration
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [neighborhoodsLoading, setNeighborhoodsLoading] = useState(false);
  
  // Fetch partners from Google Sheets
  useEffect(() => {
    const fetchPartners = async () => {
      if (!GOOGLE_SHEETS_CONFIG.PARTNERS.ENABLED) {
        console.log("Partners Google Sheets integration disabled.");
        return;
      }
      
      setPartnersLoading(true);
      
      try {
        const response = await fetch(getGoogleSheetsUrl(GOOGLE_SHEETS_CONFIG.PARTNERS));
        const text = await response.text();
        const parsedPartners = parsePartnersData(text);
        
        if (parsedPartners && parsedPartners.length > 0) {
          // Sort by order field
          parsedPartners.sort((a, b) => a.order - b.order);
          setPartners(parsedPartners);
          console.log(`Loaded ${parsedPartners.length} partners from Google Sheets`);
        }
      } catch (error) {
        console.error("Failed to fetch partners from Google Sheets:", error);
      } finally {
        setPartnersLoading(false);
      }
    };
    
    fetchPartners();
    
    if (GOOGLE_SHEETS_CONFIG.PARTNERS.ENABLED && GOOGLE_SHEETS_CONFIG.PARTNERS.REFRESH_INTERVAL > 0) {
      const interval = setInterval(fetchPartners, GOOGLE_SHEETS_CONFIG.PARTNERS.REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }
  }, []);
  
  // Fetch neighborhoods from Google Sheets
  useEffect(() => {
    const fetchNeighborhoods = async () => {
      if (!GOOGLE_SHEETS_CONFIG.NEIGHBORHOODS.ENABLED) {
        console.log("Neighborhoods Google Sheets integration disabled.");
        return;
      }
      
      setNeighborhoodsLoading(true);
      
      try {
        const response = await fetch(getGoogleSheetsUrl(GOOGLE_SHEETS_CONFIG.NEIGHBORHOODS));
        const text = await response.text();
        const parsedNeighborhoods = parseNeighborhoodsData(text);
        
        if (parsedNeighborhoods && parsedNeighborhoods.length > 0) {
          // Sort by order field
          parsedNeighborhoods.sort((a, b) => a.order - b.order);
          setNeighborhoods(parsedNeighborhoods);
          console.log(`Loaded ${parsedNeighborhoods.length} neighborhoods from Google Sheets`);
        }
      } catch (error) {
        console.error("Failed to fetch neighborhoods from Google Sheets:", error);
      } finally {
        setNeighborhoodsLoading(false);
      }
    };
    
    fetchNeighborhoods();
    
    if (GOOGLE_SHEETS_CONFIG.NEIGHBORHOODS.ENABLED && GOOGLE_SHEETS_CONFIG.NEIGHBORHOODS.REFRESH_INTERVAL > 0) {
      const interval = setInterval(fetchNeighborhoods, GOOGLE_SHEETS_CONFIG.NEIGHBORHOODS.REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }
  }, []);
  
  // Partner Intake Form state
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    fullName: "",
    emailAddress: "",
    phone: "",
    companyName: "",
    role: "",
    website: "",
    socialHandles: "",
    budget: "",
    goals: [],
    timing: "",
    partnershipInterest: [],
    notes: "",
    preferredContact: "",
    heardAbout: "",
    city: ""
  });

  // Event Submission Form state
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventFormSubmitted, setEventFormSubmitted] = useState(false);
  const [eventForm, setEventForm] = useState({
    // Contact Info
    submitterName: "",
    submitterEmail: "",
    submitterPhone: "",
    // Event Details
    title: "",
    venueName: "",
    venueAddress: "",
    neighborhood: "",
    // Date & Time
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    allDay: false,
    // Classification
    category: "",
    tags: [],
    costType: "paid",
    costDetails: "",
    // Description
    shortDescription: "",
    // Optional
    website: "",
    ticketLink: "",
    notes: ""
  });

  const handleEventFormChange = (field, value) => {
    setEventForm(prev => ({ ...prev, [field]: value }));
  };

  const handleEventTagChange = (tag) => {
    setEventForm(prev => {
      const current = prev.tags || [];
      if (current.includes(tag)) {
        return { ...prev, tags: current.filter(t => t !== tag) };
      } else {
        return { ...prev, tags: [...current, tag] };
      }
    });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    
    // Format date/time for Google Sheets
    const formatDateTime = (date, time, isAllDay) => {
      if (!date) return "";
      if (isAllDay) return `${date}T00:00:00`;
      return `${date}T${time || "00:00"}:00`;
    };
    
    const startDateTime = formatDateTime(eventForm.startDate, eventForm.startTime, eventForm.allDay);
    const endDateTime = formatDateTime(eventForm.endDate || eventForm.startDate, eventForm.endTime, eventForm.allDay);
    const tagsFormatted = eventForm.tags.join(", ");
    const slug = eventForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    
    // Google Sheets copy-paste row
    const googleSheetsRow = `${eventForm.title}\t${slug}\t${startDateTime}\t${endDateTime}\t${eventForm.allDay ? "TRUE" : "FALSE"}\t${eventForm.venueName}\t${eventForm.neighborhood}\t${eventForm.category}\t${tagsFormatted}\t${eventForm.costType}\t${eventForm.costDetails}\t${eventForm.shortDescription}\tFALSE`;
    
    // Submit to Formspree
    try {
      const response = await fetch("https://formspree.io/f/xvzzgqgp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _subject: `Event Submission: ${eventForm.title}`,
          submitterName: eventForm.submitterName,
          submitterEmail: eventForm.submitterEmail,
          submitterPhone: eventForm.submitterPhone || "Not provided",
          eventTitle: eventForm.title,
          venueName: eventForm.venueName,
          venueAddress: eventForm.venueAddress || "Not provided",
          neighborhood: eventForm.neighborhood,
          startDate: eventForm.startDate,
          startTime: eventForm.allDay ? "All Day" : eventForm.startTime,
          endDate: eventForm.endDate || eventForm.startDate,
          endTime: eventForm.allDay ? "All Day" : eventForm.endTime,
          allDay: eventForm.allDay ? "Yes" : "No",
          category: eventForm.category,
          tags: tagsFormatted || "None",
          costType: eventForm.costType,
          costDetails: eventForm.costDetails,
          shortDescription: eventForm.shortDescription,
          website: eventForm.website || "Not provided",
          ticketLink: eventForm.ticketLink || "Not provided",
          notes: eventForm.notes || "None",
          googleSheetsRow: googleSheetsRow
        })
      });
      
      if (response.ok) {
        setEventFormSubmitted(true);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const handlePartnerFormChange = (field, value) => {
    setPartnerForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, value) => {
    setPartnerForm(prev => {
      const current = prev[field] || [];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    
    // Submit to Formspree
    try {
      const response = await fetch("https://formspree.io/f/xkoogznd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _subject: `Partnership Inquiry from ${partnerForm.companyName}`,
          fullName: partnerForm.fullName,
          email: partnerForm.emailAddress,
          phone: partnerForm.phone || "Not provided",
          companyName: partnerForm.companyName,
          role: partnerForm.role,
          website: partnerForm.website || "Not provided",
          socialHandles: partnerForm.socialHandles || "Not provided",
          budget: partnerForm.budget,
          timing: partnerForm.timing,
          goals: partnerForm.goals.length > 0 ? partnerForm.goals.join(", ") : "None selected",
          partnershipInterest: partnerForm.partnershipInterest.length > 0 ? partnerForm.partnershipInterest.join(", ") : "None selected",
          preferredContact: partnerForm.preferredContact || "Not specified",
          heardAbout: partnerForm.heardAbout || "Not specified",
          city: partnerForm.city || "Not specified",
          notes: partnerForm.notes
        })
      });
      
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const navigateTo = (p) => {
    // Handle About page as external link (separate page)
    if (p.toLowerCase() === "about") {
      window.location.href = "/about";
      return;
    }
    setPage(p.toLowerCase());
    setSelectedEvent(null);
    setSelectedPost(null);
    setShowPartnerForm(false);
    setFormSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevWeek = () => { const d = new Date(selectedWeek); d.setDate(d.getDate() - 7); setSelectedWeek(d); };
  const goToNextWeek = () => { const d = new Date(selectedWeek); d.setDate(d.getDate() + 7); setSelectedWeek(d); };
  const goToThisWeek = () => setSelectedWeek(getMonday(new Date()));

  // Filter events (now using dynamic events state)
  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      if (eventsSearch && !e.title.toLowerCase().includes(eventsSearch.toLowerCase()) && !e.venueName.toLowerCase().includes(eventsSearch.toLowerCase())) return false;
      if (eventsCategory !== "All" && e.category !== eventsCategory) return false;
      if (!isWithinWeek(e.startDateTime, selectedWeek)) return false;
      return true;
    }).sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(a.startDateTime) - new Date(b.startDateTime);
    });
  }, [events, eventsSearch, eventsCategory, selectedWeek]);

  // Group by day
  const eventsByDay = useMemo(() => {
    const days = {};
    const mon = new Date(selectedWeek);
    for (let i = 0; i < 7; i++) {
      const d = new Date(mon); d.setDate(mon.getDate() + i);
      days[d.toDateString()] = { date: new Date(d), events: [] };
    }
    filteredEvents.forEach(e => {
      const key = new Date(e.startDateTime).toDateString();
      if (days[key]) days[key].events.push(e);
    });
    return days;
  }, [filteredEvents, selectedWeek]);

  // Filter explore (now using dynamic exploreArticles state)
  const filteredPosts = useMemo(() => {
    return exploreArticles.filter(p => {
      if (exploreSearch && !p.title.toLowerCase().includes(exploreSearch.toLowerCase())) return false;
      if (exploreType !== "All" && p.type !== exploreType.toLowerCase()) return false;
      return true;
    }).sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
  }, [exploreArticles, exploreSearch, exploreType]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || subscribeStatus === "loading") return;
    
    setSubscribeStatus("loading");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        console.error("Subscription error:", data.error);
        setSubscribeStatus("error");
        // Still show success to user (email might already exist)
        setTimeout(() => {
          setSubscribeStatus("success");
          setEmail("");
        }, 100);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeStatus("error");
    }
  };

  const categories = ["All", "Food & Drink", "Live Music", "Arts", "Sports", "Comedy", "Family", "Nightlife", "Outdoors", "Fitness", "Shopping"];
  const exploreTypes = ["All", "Pillar", "Guide", "List", "Neighborhood"];

  // Dynamic colors based on dark mode
  const colors = darkMode ? darkColors : lightColors;

  // Global search results
  const globalSearchResults = useMemo(() => {
    if (!globalSearch.trim()) return { events: [], articles: [] };
    const searchLower = globalSearch.toLowerCase();
    return {
      events: events.filter(e => 
        e.title.toLowerCase().includes(searchLower) || 
        e.venueName?.toLowerCase().includes(searchLower) ||
        e.neighborhood?.toLowerCase().includes(searchLower) ||
        e.category?.toLowerCase().includes(searchLower)
      ).slice(0, 5),
      articles: exploreArticles.filter(a => 
        a.title.toLowerCase().includes(searchLower) ||
        a.neighborhood?.toLowerCase().includes(searchLower)
      ).slice(0, 5)
    };
  }, [globalSearch, events, exploreArticles]);

  // Get current page SEO
  const currentSeo = PAGE_SEO[page] || PAGE_SEO.home;
  const structuredData = getStructuredData(page, events, exploreArticles);
  const currentYear = new Date().getFullYear();
  
  return (
    <div style={{ minHeight: "100vh", backgroundColor: darkMode ? colors.bodyBg : colors.cream, fontFamily: "system-ui, sans-serif", transition: "background-color 0.3s" }}>
      {/* Global Search Modal */}
      {showSearchModal && (
        <div style={{ 
          position: "fixed", 
          inset: 0, 
          backgroundColor: "rgba(0,0,0,0.8)", 
          zIndex: 100, 
          display: "flex", 
          alignItems: "flex-start", 
          justifyContent: "center", 
          paddingTop: "100px",
          padding: isMobile ? "60px 16px" : "100px 16px"
        }} onClick={() => setShowSearchModal(false)}>
          <div style={{ 
            backgroundColor: darkMode ? colors.cardBg : colors.white, 
            borderRadius: "20px", 
            width: "100%", 
            maxWidth: "600px",
            maxHeight: "70vh",
            overflow: "hidden"
          }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: "20px", borderBottom: `1px solid ${darkMode ? "#333" : colors.beige}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icons.Search style={{ color: colors.tan }} />
                <input 
                  type="text" 
                  placeholder="Search events, guides, neighborhoods..." 
                  value={globalSearch}
                  onChange={e => setGlobalSearch(e.target.value)}
                  autoFocus
                  style={{ 
                    flex: 1, 
                    border: "none", 
                    outline: "none", 
                    fontSize: "18px", 
                    backgroundColor: "transparent",
                    color: darkMode ? colors.black : colors.green1
                  }} 
                />
                <button onClick={() => setShowSearchModal(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}>
                  <span style={{ fontSize: "20px", color: colors.tan }}>✕</span>
                </button>
              </div>
            </div>
            <div style={{ padding: "20px", maxHeight: "50vh", overflowY: "auto" }}>
              {globalSearch.trim() ? (
                <>
                  {globalSearchResults.events.length > 0 && (
                    <div style={{ marginBottom: "24px" }}>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: colors.yellow, letterSpacing: "2px", marginBottom: "12px" }}>EVENTS</p>
                      {globalSearchResults.events.map((event, i) => (
                        <div 
                          key={event.id || i} 
                          onClick={() => { setSelectedEvent(event); navigateTo("events"); setShowSearchModal(false); setGlobalSearch(""); }}
                          style={{ 
                            padding: "12px", 
                            borderRadius: "10px", 
                            cursor: "pointer", 
                            marginBottom: "8px",
                            backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : colors.cream,
                            transition: "background-color 0.2s"
                          }}
                          onMouseOver={e => e.currentTarget.style.backgroundColor = darkMode ? "rgba(255,255,255,0.1)" : colors.beige}
                          onMouseOut={e => e.currentTarget.style.backgroundColor = darkMode ? "rgba(255,255,255,0.05)" : colors.cream}
                        >
                          <p style={{ fontWeight: "700", color: darkMode ? colors.black : colors.green1, marginBottom: "4px" }}>{event.title}</p>
                          <p style={{ fontSize: "13px", color: colors.tan }}>{event.venueName} • {event.category}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.articles.length > 0 && (
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: colors.yellow, letterSpacing: "2px", marginBottom: "12px" }}>GUIDES & ARTICLES</p>
                      {globalSearchResults.articles.map((article, i) => (
                        <div 
                          key={article.id || i} 
                          onClick={() => { setSelectedPost(article); navigateTo("explore"); setShowSearchModal(false); setGlobalSearch(""); }}
                          style={{ 
                            padding: "12px", 
                            borderRadius: "10px", 
                            cursor: "pointer", 
                            marginBottom: "8px",
                            backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : colors.cream,
                            transition: "background-color 0.2s"
                          }}
                          onMouseOver={e => e.currentTarget.style.backgroundColor = darkMode ? "rgba(255,255,255,0.1)" : colors.beige}
                          onMouseOut={e => e.currentTarget.style.backgroundColor = darkMode ? "rgba(255,255,255,0.05)" : colors.cream}
                        >
                          <p style={{ fontWeight: "700", color: darkMode ? colors.black : colors.green1, marginBottom: "4px" }}>{article.title}</p>
                          <p style={{ fontSize: "13px", color: colors.tan }}>{article.type} {article.neighborhood ? `• ${article.neighborhood}` : ""}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.events.length === 0 && globalSearchResults.articles.length === 0 && (
                    <div style={{ textAlign: "center", padding: "40px 20px" }}>
                      <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>🔍</span>
                      <p style={{ color: darkMode ? colors.black : colors.green1, fontWeight: "700", marginBottom: "8px" }}>No results found</p>
                      <p style={{ color: colors.tan, fontSize: "14px" }}>Try searching for something else</p>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <p style={{ color: colors.tan, fontSize: "14px" }}>Start typing to search...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Comprehensive SEO Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Robots & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://discover-milwaukee.com${currentSeo.canonical}`} />
        
        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2C5235" />
        <meta name="msapplication-TileColor" content="#2C5235" />
        
        {/* Geographic & Local SEO Tags */}
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />
        <meta name="geo.position" content="43.0389;-87.9065" />
        <meta name="ICBM" content="43.0389, -87.9065" />
        <meta name="language" content="en-US" />
        <meta name="audience" content="Milwaukee, Wisconsin, Midwest" />
        <meta name="coverage" content="Milwaukee, WI" />
        <meta name="distribution" content="local" />
        <meta name="rating" content="general" />
        
        {/* Author & Publisher */}
        <meta name="author" content="Discover Milwaukee" />
        <meta name="publisher" content="Discover Milwaukee" />
        <meta name="copyright" content={`© ${currentYear} Discover Milwaukee`} />
        
        {/* Open Graph / Facebook - Complete */}
        <meta property="og:type" content={currentSeo.ogType} />
        <meta property="og:url" content={`https://discover-milwaukee.com${currentSeo.canonical}`} />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Discover Milwaukee - Your Guide to Milwaukee Events & Things to Do" />
        
        {/* Twitter Card - Complete */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@discovermke" />
        <meta name="twitter:creator" content="@discovermke" />
        <meta name="twitter:title" content={currentSeo.title} />
        <meta name="twitter:description" content={currentSeo.description} />
        <meta name="twitter:image" content="https://discover-milwaukee.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Discover Milwaukee - Your Guide to Milwaukee Events & Things to Do" />
        
        {/* Additional SEO Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Discover MKE" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://docs.google.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data (JSON-LD) */}
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      
      {/* Banner */}
      <header role="banner">
        <div style={{ backgroundColor: darkMode ? colors.green1 : c.green1, color: darkMode ? colors.black : c.cream, padding: "10px 16px", textAlign: "center", fontSize: isMobile ? "12px" : "14px" }}>
          Your Weekly Guide to Everything Milwaukee — Delivered Free 📬
        </div>
      </header>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: darkMode ? colors.navBg : c.cream, borderBottom: `3px solid ${c.yellow}`, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "background-color 0.3s" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          <div onClick={() => { navigateTo("home"); setMobileMenuOpen(false); }} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: isMobile ? "16px" : "22px", fontWeight: "900", color: darkMode ? colors.navText : c.green1, letterSpacing: "1px", textTransform: "uppercase" }}>DISCOVER MILWAUKEE</span>
          </div>
          
          {/* Desktop Nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {["Home", "Explore", "Events", "Newsletter", "About"].map(item => (
                <span key={item} onClick={() => navigateTo(item)} style={{ color: page === item.toLowerCase() ? c.yellow : (darkMode ? colors.navText : c.green1), fontSize: "14px", fontWeight: "600", cursor: "pointer", textTransform: "uppercase", borderBottom: page === item.toLowerCase() ? `2px solid ${c.yellow}` : "2px solid transparent", padding: "6px 0" }}>
                  {item}
                </span>
              ))}
              
              {/* Partner Button - Highlighted */}
              <button 
                onClick={() => navigateTo("Partner")}
                style={{ 
                  backgroundColor: page === "partner" ? c.yellow : c.green1,
                  color: page === "partner" ? c.green1 : c.cream,
                  padding: "10px 20px",
                  borderRadius: "50px",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                }}
                onMouseOver={e => { if (page !== "partner") { e.currentTarget.style.backgroundColor = c.yellow; e.currentTarget.style.color = c.green1; }}}
                onMouseOut={e => { if (page !== "partner") { e.currentTarget.style.backgroundColor = c.green1; e.currentTarget.style.color = c.cream; }}}
              >
                Partner
              </button>
              
              {/* Search Button */}
              <button 
                onClick={() => setShowSearchModal(true)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  padding: "8px",
                  color: darkMode ? colors.navText : c.green1,
                  display: "flex",
                  alignItems: "center"
                }}
                aria-label="Search"
              >
                <Icons.Search />
              </button>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  padding: "8px",
                  fontSize: "20px"
                }}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          )}
          
          {/* Mobile Nav Icons */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Search Button */}
              <button 
                onClick={() => setShowSearchModal(true)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  padding: "8px",
                  color: darkMode ? colors.navText : c.green1
                }}
                aria-label="Search"
              >
                <Icons.Search />
              </button>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  padding: "8px",
                  fontSize: "18px"
                }}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
              
              {/* Hamburger */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
              >
                <div style={{ width: "24px", height: "2px", backgroundColor: darkMode ? colors.navText : c.green1, marginBottom: "6px", transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                <div style={{ width: "24px", height: "2px", backgroundColor: darkMode ? colors.navText : c.green1, marginBottom: "6px", opacity: mobileMenuOpen ? 0 : 1, transition: "all 0.3s" }} />
                <div style={{ width: "24px", height: "2px", backgroundColor: darkMode ? colors.navText : c.green1, transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobile && mobileMenuOpen && (
          <div style={{ backgroundColor: c.cream, borderTop: `1px solid ${c.beige}`, padding: "16px" }}>
            {["Home", "Explore", "Events", "Newsletter", "About"].map(item => (
              <div 
                key={item} 
                onClick={() => { navigateTo(item); setMobileMenuOpen(false); }} 
                style={{ 
                  padding: "14px 16px", 
                  color: page === item.toLowerCase() ? c.yellow : c.green1, 
                  fontSize: "16px", 
                  fontWeight: "600", 
                  cursor: "pointer", 
                  textTransform: "uppercase",
                  borderBottom: `1px solid ${c.beige}`,
                  backgroundColor: page === item.toLowerCase() ? c.green1 : "transparent"
                }}
              >
                {item}
              </div>
            ))}
            {/* Partner - Highlighted */}
            <div 
              onClick={() => { navigateTo("Partner"); setMobileMenuOpen(false); }} 
              style={{ 
                padding: "14px 16px", 
                marginTop: "8px",
                color: c.cream, 
                fontSize: "16px", 
                fontWeight: "700", 
                cursor: "pointer", 
                textTransform: "uppercase",
                backgroundColor: c.green1,
                borderRadius: "10px",
                textAlign: "center",
                border: page === "partner" ? `2px solid ${c.yellow}` : "none"
              }}
            >
              🤝 Partner With Us
            </div>
          </div>
        )}
      </nav>

      {/* HOME */}
      {page === "home" && (
        <>
          <section style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: isMobile ? "40px 16px" : "80px 16px" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "32px" : "48px", alignItems: "center" }}>
              <div>
                <p style={{ color: c.yellow, fontSize: isMobile ? "12px" : "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px" }}>THE ORIGINAL</p>
                <h1 style={{ fontSize: isMobile ? "32px" : "48px", fontWeight: "900", color: c.cream, lineHeight: 1.1, marginBottom: "20px", textTransform: "uppercase" }}>Your Insider's Guide to Milwaukee</h1>
                <p style={{ color: c.beige, fontSize: isMobile ? "16px" : "18px", lineHeight: 1.6, marginBottom: "28px" }}>The hidden gems. The local favorites. The spots only real Milwaukeeans know about. One email. Once a week. No fluff.</p>
                {subscribeStatus === "success" ? (
                  <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "16px 24px", marginBottom: "12px", maxWidth: "440px" }}>
                    <p style={{ color: c.yellow, fontSize: "15px", fontWeight: "700", margin: 0 }}>✓ You're in! Check your inbox to confirm.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", maxWidth: "440px", marginBottom: "12px" }}>
                    <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "16px 20px", borderRadius: "50px", border: "none", fontSize: "15px" }} />
                    <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "16px 28px", backgroundColor: c.yellow, color: c.green1, fontWeight: "bold", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                      {subscribeStatus === "loading" ? "..." : "Subscribe"}
                    </button>
                  </form>
                )}
                <p style={{ color: c.beige, fontSize: "13px", opacity: 0.8, marginBottom: "28px" }}>Delivered every Wednesday. Unsubscribe anytime.</p>
                <div 
                  onClick={() => { navigateTo("partner"); setShowPartnerForm(true); }} 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "16px", 
                    padding: "16px 20px", 
                    backgroundColor: "rgba(0,0,0,0.2)", 
                    borderRadius: "16px", 
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.2s"
                  }} 
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)"; }} 
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.2)"; }}
                >
                  <div style={{ backgroundColor: c.yellow, borderRadius: "12px", padding: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "24px" }}>📈</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: c.cream, fontSize: "15px", fontWeight: "700", marginBottom: "2px" }}>Brands & Partners</p>
                    <p style={{ color: c.beige, fontSize: "13px", opacity: 0.9 }}>22M+ views in 2025. Let's talk.</p>
                  </div>
                  <span style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", flexShrink: 0 }}>→</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "32px", width: "100%", maxWidth: "380px" }}>
                  <h3 style={{ color: c.cream, fontSize: "18px", fontWeight: "700", marginBottom: "20px", textAlign: "center" }}>What You'll Get</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                      { icon: "🎯", title: "Curated, Not Cluttered", desc: "We filter through the noise so you don't have to." },
                      { icon: "📍", title: "Actually Local", desc: "Written by people who live here and go to these places." },
                      { icon: "⚡", title: "Quick Read", desc: "Get the highlights in 5 minutes or less." }
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                        <div>
                          <h4 style={{ color: c.cream, fontSize: "15px", fontWeight: "700", marginBottom: "4px" }}>{item.title}</h4>
                          <p style={{ color: c.beige, fontSize: "13px", lineHeight: 1.4 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROMOTED EVENTS */}
          <section style={{ padding: "60px 16px", backgroundColor: c.white }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px", textTransform: "uppercase" }}>Don't Miss Out</p>
                <h2 style={{ fontSize: isMobile ? "24px" : "32px", fontWeight: "900", color: c.green1, textTransform: "uppercase", marginBottom: "8px" }}>This Week in Milwaukee</h2>
                <p style={{ color: c.tan, fontSize: "16px" }}>Handpicked events worth your time</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "20px" }}>
                {events.filter(e => e.featured).slice(0, 4).map((event, i) => {
                  const categoryIcons = {
                    "Arts": "🎨", "Sports": "🏀", "Food & Drink": "🍸", "Comedy": "🎤",
                    "Live Music": "🎵", "Family": "👨‍👩‍👧‍👦", "Nightlife": "🌙", "Outdoors": "🌲",
                    "Fitness": "💪", "Shopping": "🛍️"
                  };
                  const eventDate = new Date(event.startDateTime);
                  const dateStr = eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                  const timeStr = event.allDay ? "All Day" : eventDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
                  return (
                    <div key={event.id || i} onClick={() => { setSelectedEvent(event); navigateTo("events"); }} style={{ backgroundColor: c.cream, borderRadius: "16px", padding: "24px", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s", border: `2px solid transparent` }} onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; e.currentTarget.style.borderColor = c.yellow; }} onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.borderColor = "transparent"; }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                        <span style={{ fontSize: "32px" }}>{categoryIcons[event.category] || "📅"}</span>
                        <span style={{ backgroundColor: c.green1, color: c.cream, padding: "4px 10px", borderRadius: "50px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>{event.category}</span>
                      </div>
                      <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", marginBottom: "8px", lineHeight: 1.3 }}>{event.title}</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ color: c.tan, fontSize: "13px", fontWeight: "600" }}>{dateStr} • {timeStr}</p>
                        <p style={{ color: c.tan, fontSize: "12px" }}>{event.venueName}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ textAlign: "center", marginTop: "32px" }}>
                <button onClick={() => navigateTo("events")} style={{ padding: "14px 32px", backgroundColor: c.green1, color: c.cream, borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "700", fontSize: "14px", textTransform: "uppercase" }}>
                  View All Events →
                </button>
              </div>
            </div>
          </section>

          {/* POPULAR GUIDES - Internal Linking for SEO */}
          <section style={{ padding: isMobile ? "40px 16px" : "60px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px", textTransform: "uppercase" }}>Local Guides</p>
                <h2 style={{ fontSize: isMobile ? "24px" : "32px", fontWeight: "900", color: c.green1, textTransform: "uppercase", marginBottom: "8px" }}>Explore Milwaukee</h2>
                <p style={{ color: c.tan, fontSize: "16px" }}>In-depth guides written by locals</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
                {[
                  { title: "Things to Do", desc: "Complete activity guide", href: "/things-to-do-milwaukee", icon: "🎯" },
                  { title: "Best Restaurants", desc: "Top dining spots", href: "/best-restaurants-milwaukee", icon: "🍽️" },
                  { title: "New Restaurants", desc: "Latest openings", href: "/new-restaurants-milwaukee", icon: "✨" },
                  { title: "Best Brunch", desc: "Weekend favorites", href: "/best-brunch-milwaukee", icon: "🥞" },
                  { title: "Best Patios", desc: "Outdoor dining & drinks", href: "/best-patios-milwaukee", icon: "☀️" },
                  { title: "Breweries", desc: "Craft beer guide", href: "/milwaukee-breweries", icon: "🍺" },
                  { title: "Nightlife", desc: "Bars & late night", href: "/milwaukee-nightlife", icon: "🌙" },
                  { title: "This Weekend", desc: "What's happening now", href: "/this-weekend-milwaukee", icon: "📅" },
                ].map((guide, i) => (
                  <a key={i} href={guide.href} style={{ backgroundColor: c.white, borderRadius: "12px", padding: "20px", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s", display: "block", border: `2px solid transparent` }} onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)"; e.currentTarget.style.borderColor = c.yellow; }} onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; e.currentTarget.style.borderColor = "transparent"; }}>
                    <span style={{ fontSize: "28px", display: "block", marginBottom: "8px" }}>{guide.icon}</span>
                    <h3 style={{ color: c.green1, fontSize: "15px", fontWeight: "700", marginBottom: "4px" }}>{guide.title}</h3>
                    <p style={{ color: c.tan, fontSize: "13px", margin: 0 }}>{guide.desc}</p>
                  </a>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "12px" }}>
                {[
                  { title: "Third Ward", href: "/third-ward-milwaukee" },
                  { title: "Bay View", href: "/bay-view-milwaukee" },
                  { title: "Walker's Point", href: "/walkers-point-milwaukee" },
                  { title: "East Side", href: "/east-side-milwaukee" },
                  { title: "Downtown", href: "/downtown-milwaukee" },
                  { title: "Riverwest", href: "/riverwest-milwaukee" },
                  { title: "Brady Street", href: "/brady-street-milwaukee" },
                  { title: "Bronzeville", href: "/bronzeville-milwaukee" },
                  { title: "Sherman Park", href: "/sherman-park-milwaukee" },
                  { title: "South Side", href: "/south-side-milwaukee" },
                  { title: "Harbor District", href: "/harbor-district-milwaukee" },
                  { title: "Washington Heights", href: "/washington-heights-milwaukee" },
                ].map((hood, i) => (
                  <a key={i} href={hood.href} style={{ backgroundColor: c.green1, color: c.cream, padding: "12px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600", textAlign: "center", transition: "background-color 0.2s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = c.green2} onMouseOut={e => e.currentTarget.style.backgroundColor = c.green1}>
                    {hood.title} →
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF & TESTIMONIALS */}
          <section style={{ padding: isMobile ? "50px 16px" : "70px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {/* Stats Row */}
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>Trusted by Milwaukee</p>
                <div style={{ display: "flex", justifyContent: "center", gap: isMobile ? "40px" : "80px" }}>
                  {[
                    { number: "22M+", label: "Annual Views" },
                    { number: "7 Years", label: "Covering Milwaukee" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p style={{ color: c.cream, fontSize: isMobile ? "32px" : "40px", fontWeight: "900", marginBottom: "4px" }}>{stat.number}</p>
                      <p style={{ color: c.beige, fontSize: "14px" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonials */}
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ color: c.cream, fontSize: isMobile ? "24px" : "28px", fontWeight: "900", textAlign: "center", marginBottom: "32px", textTransform: "uppercase" }}>What Milwaukee Says</h2>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
                  {[
                    {
                      quote: "Finally, someone who actually knows Milwaukee. No tourist trap BS — just the real spots locals love.",
                      name: "Sarah K.",
                      title: "Bay View Resident",
                      emoji: "🍺"
                    },
                    {
                      quote: "I've lived here 10 years and Discover Milwaukee still shows me places I've never heard of. It's like having a cool friend who knows everyone.",
                      name: "Marcus T.",
                      title: "East Side",
                      emoji: "🏠"
                    },
                    {
                      quote: "The only newsletter I actually open every week. Short, useful, and makes me feel like I'm not missing out on the good stuff.",
                      name: "Jenny L.",
                      title: "Third Ward",
                      emoji: "📬"
                    }
                  ].map((testimonial, i) => (
                    <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ fontSize: "32px", display: "block", marginBottom: "16px" }}>{testimonial.emoji}</span>
                      <p style={{ color: c.cream, fontSize: "15px", lineHeight: 1.6, marginBottom: "20px", fontStyle: "italic" }}>"{testimonial.quote}"</p>
                      <div>
                        <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700" }}>{testimonial.name}</p>
                        <p style={{ color: c.beige, fontSize: "13px" }}>{testimonial.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: isMobile ? "40px 16px" : "60px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
                {[{ l: "Explore", d: "Guides & local favorites", i: "📚", p: "explore" }, { l: "Events", d: "What's happening this week", i: "📅", p: "events" }, { l: "Newsletter", d: "Get the weekly scoop", i: "📬", p: "newsletter" }].map(x => (
                  <div key={x.l} onClick={() => navigateTo(x.p)} style={{ backgroundColor: c.white, borderRadius: "16px", padding: isMobile ? "20px" : "28px", cursor: "pointer", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>{x.i}</span>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", marginBottom: "6px" }}>{x.l}</h3>
                    <p style={{ color: c.tan, fontSize: "14px" }}>{x.d}</p>
                  </div>
                ))}
              </div>
              <div 
                onClick={() => navigateTo("partner")} 
                style={{ 
                  backgroundColor: c.green1, 
                  borderRadius: "16px", 
                  padding: "24px 28px", 
                  cursor: "pointer", 
                  textAlign: "center", 
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px"
                }}
              >
                <span style={{ fontSize: "24px" }}>🤝</span>
                <h3 style={{ color: c.cream, fontSize: "18px", fontWeight: "800", margin: 0 }}>Partner With Us</h3>
                <span style={{ color: c.yellow, fontSize: "14px", fontWeight: "600" }}>→</span>
              </div>
            </div>
          </section>
        </>
      )}

      {/* EXPLORE */}
      {page === "explore" && !selectedPost && (
        <>
          <section style={{ background: `linear-gradient(135deg, ${c.blue1} 0%, ${c.blue2} 100%)`, padding: "60px 16px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ color: c.blue3, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>YOUR MILWAUKEE ENCYCLOPEDIA</p>
              <h1 style={{ fontSize: "44px", fontWeight: "900", color: c.cream, marginBottom: "12px", textTransform: "uppercase" }}>Explore Milwaukee</h1>
              <p style={{ fontSize: "18px", color: c.yellow, fontWeight: "600", marginBottom: "16px" }}>Guides, Lists & Local Knowledge</p>
              <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.6 }}>The definitive resource for things to do, places to eat, and neighborhoods to explore in Milwaukee. Written by locals, updated regularly.</p>
            </div>
          </section>
          
          {/* Pillar Pages Section */}
          <section style={{ padding: isMobile ? "32px 16px" : "48px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <h2 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: "900", color: c.green1, marginBottom: "24px", textAlign: "center" }}>Essential Milwaukee Guides</h2>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "20px", marginBottom: "20px" }}>
                {exploreArticles.filter(p => p.isPillar).slice(0, 4).map(p => (
                  <div key={p.id} onClick={() => setSelectedPost(p)} style={{ backgroundColor: p.color, borderRadius: "20px", padding: isMobile ? "24px" : "32px", cursor: "pointer", display: "flex", flexDirection: "column", minHeight: isMobile ? "auto" : "200px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "32px" }}>{p.icon}</span>
                      <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.white, padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase" }}>Pillar Guide</span>
                    </div>
                    <h3 style={{ color: c.white, fontSize: isMobile ? "18px" : "22px", fontWeight: "900", marginBottom: "10px", lineHeight: 1.2 }}>{p.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", lineHeight: 1.5, flex: 1 }}>{p.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
                      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>{p.readTimeMinutes} min read</span>
                      <span style={{ color: c.yellow, fontSize: "14px", fontWeight: "700" }}>Read Full Guide →</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fifth pillar as full width */}
              {exploreArticles.filter(p => p.isPillar)[4] && (
                <div onClick={() => setSelectedPost(exploreArticles.filter(p => p.isPillar)[4])} style={{ backgroundColor: exploreArticles.filter(p => p.isPillar)[4].color, borderRadius: "20px", padding: "32px", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px" }}>
                  <span style={{ fontSize: "48px" }}>{exploreArticles.filter(p => p.isPillar)[4].icon}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.white, padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase" }}>Pillar Guide</span>
                    <h3 style={{ color: c.white, fontSize: "22px", fontWeight: "900", margin: "8px 0", lineHeight: 1.2 }}>{exploreArticles.filter(p => p.isPillar)[4].title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", lineHeight: 1.5 }}>{exploreArticles.filter(p => p.isPillar)[4].excerpt}</p>
                  </div>
                  <span style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>Read Guide →</span>
                </div>
              )}
            </div>
          </section>

          {/* Visitor & Weekend Guides Section */}
          <section style={{ padding: isMobile ? "32px 16px" : "48px 16px", backgroundColor: c.white }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <h2 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: "900", color: c.green1, marginBottom: "8px", textAlign: "center" }}>Visitor & Weekend Guides</h2>
              <p style={{ color: c.tan, fontSize: "16px", textAlign: "center", marginBottom: "24px" }}>Planning a trip to Milwaukee? Start here.</p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: "16px" }}>
                {[
                  { title: "First Time in Milwaukee", desc: "Essential guide for first-time visitors", icon: "🎯", href: "/first-time-milwaukee", color: c.green1 },
                  { title: "Weekend in Milwaukee", desc: "Perfect 3-day itinerary", icon: "📅", href: "/weekend-in-milwaukee", color: c.blue1 },
                  { title: "Romantic Getaway", desc: "Couples weekend guide", icon: "💕", href: "/romantic-weekend-milwaukee", color: "#c44569" },
                  { title: "Family Weekend", desc: "Kid-friendly activities", icon: "👨‍👩‍👧‍👦", href: "/family-weekend-milwaukee", color: "#6c5ce7" },
                  { title: "Beer Lover's Guide", desc: "Brewery tours & beer bars", icon: "🍺", href: "/beer-lovers-milwaukee", color: "#d35400" },
                  { title: "Foodie Weekend", desc: "Culinary exploration", icon: "🍽️", href: "/foodie-weekend-milwaukee", color: "#e17055" },
                  { title: "Arts & Culture", desc: "Museums, theater & music", icon: "🎭", href: "/arts-culture-milwaukee", color: "#0984e3" },
                  { title: "Outdoor Adventure", desc: "Parks, trails & lake activities", icon: "🚴", href: "/outdoor-weekend-milwaukee", color: "#00b894" }
                ].map(guide => (
                  <a key={guide.href} href={guide.href} style={{ backgroundColor: guide.color, borderRadius: "16px", padding: "20px", textDecoration: "none", display: "block", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }} onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                    <span style={{ fontSize: "32px", display: "block", marginBottom: "8px" }}>{guide.icon}</span>
                    <h3 style={{ color: c.white, fontSize: "15px", fontWeight: "800", marginBottom: "4px" }}>{guide.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px" }}>{guide.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section style={{ padding: "24px 16px", backgroundColor: c.white, borderTop: `1px solid ${c.beige}`, borderBottom: `1px solid ${c.beige}` }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ flex: 1, maxWidth: "360px", position: "relative" }}>
                  <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: c.tan }}><Icons.Search /></span>
                  <input type="text" placeholder="Search all guides and articles..." value={exploreSearch} onChange={e => setExploreSearch(e.target.value)} style={{ width: "100%", padding: "12px 16px 12px 44px", borderRadius: "50px", border: `2px solid ${c.beige}`, fontSize: "14px", backgroundColor: c.cream }} />
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["All", "Pillar", "Guide", "List", "Neighborhood"].map(t => (
                    <button key={t} onClick={() => setExploreType(t)} style={{ padding: "8px 16px", borderRadius: "50px", border: "none", backgroundColor: exploreType === t ? c.green1 : c.cream, color: exploreType === t ? c.cream : c.green1, fontWeight: "600", fontSize: "13px", cursor: "pointer" }}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* All Posts Grid */}
          <section style={{ padding: "40px 16px 80px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "900", color: c.green1 }}>{exploreSearch || exploreType !== "All" ? "Search Results" : "All Guides & Articles"}</h2>
                <span style={{ color: c.tan, fontSize: "14px" }}>{filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {filteredPosts.map(p => (
                  <div key={p.id} onClick={() => setSelectedPost(p)} style={{ backgroundColor: c.white, borderRadius: "16px", overflow: "hidden", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }} onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
                    <div style={{ height: "100px", backgroundColor: p.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <span style={{ fontSize: "36px" }}>{p.icon}</span>
                      {p.isPillar && <span style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: c.yellow, color: c.green1, padding: "3px 8px", borderRadius: "50px", fontSize: "9px", fontWeight: "700" }}>PILLAR</span>}
                    </div>
                    <div style={{ padding: "18px" }}>
                      <div style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "center" }}>
                        <span style={{ backgroundColor: c.beige, color: c.green1, padding: "3px 10px", borderRadius: "50px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>{p.type}</span>
                        <span style={{ color: c.tan, fontSize: "11px" }}>{p.readTimeMinutes} min</span>
                      </div>
                      <h3 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", marginBottom: "6px", lineHeight: 1.3 }}>{p.title}</h3>
                      <p style={{ color: c.tan, fontSize: "12px", lineHeight: 1.4 }}>{p.excerpt.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* EXPLORE DETAIL - Full Article View */}
      {page === "explore" && selectedPost && (
        <section style={{ padding: "0 0 80px", backgroundColor: c.cream }}>
          {/* Article Header */}
          <div style={{ backgroundColor: selectedPost.color, padding: "60px 16px 80px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <button onClick={() => setSelectedPost(null)} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", background: "none", border: "none", cursor: "pointer", marginBottom: "24px" }}>
                <Icons.ChevronLeft /> Back to Explore
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "48px" }}>{selectedPost.icon}</span>
                <div>
                  <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.white, padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase" }}>{selectedPost.isPillar ? "Pillar Guide" : selectedPost.type}</span>
                  {selectedPost.lastUpdated && <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", marginLeft: "12px" }}>Updated {selectedPost.lastUpdated}</span>}
                </div>
              </div>
              <h1 style={{ color: c.white, fontSize: "36px", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>{selectedPost.title}</h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>{selectedPost.excerpt}</p>
              <div style={{ display: "flex", gap: "16px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
                <span>📖 {selectedPost.readTimeMinutes} min read</span>
                {selectedPost.tags && <span>🏷️ {selectedPost.tags.slice(0, 3).join(", ")}</span>}
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div style={{ maxWidth: "800px", margin: "-40px auto 0", padding: "0 16px" }}>
            <div style={{ backgroundColor: c.white, borderRadius: "20px", padding: "48px", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
              {selectedPost.body ? (
                <div style={{ color: c.green1, fontSize: "16px", lineHeight: 1.8 }}>
                  {selectedPost.body.split('\n\n').map((paragraph, idx) => {
                    // Handle headings
                    if (paragraph.startsWith('## ')) {
                      const text = paragraph.replace('## ', '');
                      if (text.startsWith('Quick Answer') || text.startsWith('Frequently Asked')) {
                        return <h2 key={idx} style={{ fontSize: "24px", fontWeight: "900", color: c.green1, marginTop: "40px", marginBottom: "20px", paddingTop: "20px", borderTop: `2px solid ${c.beige}` }}>{text}</h2>;
                      }
                      return <h2 key={idx} style={{ fontSize: "24px", fontWeight: "900", color: c.green1, marginTop: "40px", marginBottom: "20px" }}>{text}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={idx} style={{ fontSize: "20px", fontWeight: "800", color: c.green1, marginTop: "32px", marginBottom: "16px" }}>{paragraph.replace('### ', '')}</h3>;
                    }
                    // Handle tables
                    if (paragraph.includes('|') && paragraph.includes('---')) {
                      const rows = paragraph.split('\n').filter(r => r.trim() && !r.includes('---'));
                      return (
                        <div key={idx} style={{ overflowX: "auto", marginTop: "20px", marginBottom: "20px" }}>
                          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                            <thead>
                              <tr style={{ backgroundColor: c.beige }}>
                                {rows[0]?.split('|').filter(c => c.trim()).map((cell, i) => (
                                  <th key={i} style={{ padding: "12px", textAlign: "left", fontWeight: "700", borderBottom: `2px solid ${c.green1}` }}>{cell.trim()}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {rows.slice(1).map((row, rowIdx) => (
                                <tr key={rowIdx} style={{ backgroundColor: rowIdx % 2 === 0 ? c.cream : c.white }}>
                                  {row.split('|').filter(c => c.trim()).map((cell, cellIdx) => (
                                    <td key={cellIdx} style={{ padding: "12px", borderBottom: `1px solid ${c.beige}` }}>{cell.trim()}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    // Handle lists
                    if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(i => i.startsWith('- '));
                      return (
                        <ul key={idx} style={{ marginTop: "16px", marginBottom: "16px", paddingLeft: "24px" }}>
                          {items.map((item, i) => (
                            <li key={i} style={{ marginBottom: "8px", lineHeight: 1.6 }}>
                              {item.replace('- ', '').split('**').map((part, j) => 
                                j % 2 === 1 ? <strong key={j} style={{ fontWeight: "700" }}>{part}</strong> : part
                              )}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    // Handle numbered lists
                    if (paragraph.match(/^\d+\./m)) {
                      const items = paragraph.split('\n').filter(i => i.match(/^\d+\./));
                      return (
                        <ol key={idx} style={{ marginTop: "16px", marginBottom: "16px", paddingLeft: "24px" }}>
                          {items.map((item, i) => (
                            <li key={i} style={{ marginBottom: "12px", lineHeight: 1.6 }}>
                              {item.replace(/^\d+\.\s*/, '').split('**').map((part, j) => 
                                j % 2 === 1 ? <strong key={j} style={{ fontWeight: "700", color: c.green1 }}>{part}</strong> : part
                              )}
                            </li>
                          ))}
                        </ol>
                      );
                    }
                    // Handle bold text in paragraphs
                    if (paragraph.includes('**')) {
                      return (
                        <p key={idx} style={{ marginBottom: "16px", color: c.tan }}>
                          {paragraph.split('**').map((part, j) => 
                            j % 2 === 1 ? <strong key={j} style={{ fontWeight: "700", color: c.green1 }}>{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    // Regular paragraphs
                    return <p key={idx} style={{ marginBottom: "16px", color: c.tan }}>{paragraph}</p>;
                  })}
                </div>
              ) : (
                <p style={{ color: c.tan, fontSize: "16px", lineHeight: 1.8 }}>Full article content coming soon.</p>
              )}
            </div>
            
            {/* Related Posts */}
            {selectedPost.parentSlug && (
              <div style={{ marginTop: "48px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "900", color: c.green1, marginBottom: "20px" }}>Related Guides</h3>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "16px" }}>
                  {exploreArticles.filter(p => p.slug === selectedPost.parentSlug || p.parentSlug === selectedPost.parentSlug).filter(p => p.id !== selectedPost.id).slice(0, 4).map(p => (
                    <div key={p.id} onClick={() => { setSelectedPost(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ backgroundColor: c.white, borderRadius: "12px", padding: "16px", cursor: "pointer", display: "flex", gap: "12px", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                      <span style={{ fontSize: "28px" }}>{p.icon}</span>
                      <div>
                        <h4 style={{ color: c.green1, fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>{p.title}</h4>
                        <span style={{ color: c.tan, fontSize: "12px" }}>{p.readTimeMinutes} min read</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Newsletter CTA */}
            <div style={{ marginTop: "48px", backgroundColor: c.green1, borderRadius: "20px", padding: isMobile ? "24px" : "32px", textAlign: "center" }}>
              <h3 style={{ color: c.cream, fontSize: isMobile ? "18px" : "22px", fontWeight: "900", marginBottom: "12px" }}>Get More Milwaukee Tips</h3>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "20px" }}>Join our weekly newsletter for the best events, new restaurants, and local favorites.</p>
              {subscribeStatus === "success" ? (
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "14px 24px", maxWidth: "400px", margin: "0 auto" }}>
                  <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", margin: 0 }}>✓ You're in! Check your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", maxWidth: "400px", margin: "0 auto" }}>
                  <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "14px 18px", borderRadius: "50px", border: "none", fontSize: "14px" }} />
                  <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "14px 24px", backgroundColor: c.yellow, color: c.green1, fontWeight: "bold", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                    {subscribeStatus === "loading" ? "..." : "Subscribe"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* EVENTS */}
      {page === "events" && !selectedEvent && !showEventForm && (
        <>
          <section style={{ background: `linear-gradient(135deg, ${c.orange} 0%, ${c.yellow} 100%)`, padding: "60px 16px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>WHAT'S HAPPENING</p>
              <h1 style={{ fontSize: "44px", fontWeight: "900", color: c.green1, marginBottom: "12px", textTransform: "uppercase" }}>Milwaukee Events</h1>
              <p style={{ fontSize: "18px", color: c.green1, fontWeight: "600", marginBottom: "16px" }}>Your Social Calendar, Handled.</p>
              <p style={{ color: c.green1, fontSize: "16px", lineHeight: 1.6, opacity: 0.85 }}>Stop scrolling through Facebook events. We curate the stuff actually worth leaving your couch for.</p>
            </div>
          </section>
          <section style={{ padding: "24px 16px", backgroundColor: c.cream, borderBottom: `1px solid ${c.beige}` }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "16px" }}>
                <button onClick={goToPrevWeek} style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: c.white, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icons.ChevronLeft /></button>
                <span style={{ color: c.green1, fontWeight: "700", fontSize: "15px", minWidth: "200px", textAlign: "center" }}>Week of {formatDate(selectedWeek, "short")} – {formatDate(getSunday(selectedWeek), "short")}</span>
                <button onClick={goToNextWeek} style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: c.white, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icons.ChevronRight /></button>
                <button onClick={goToThisWeek} style={{ padding: "8px 16px", borderRadius: "50px", backgroundColor: c.yellow, color: c.green1, border: "none", fontWeight: "600", fontSize: "13px", cursor: "pointer" }}>This Week</button>
              </div>
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <div style={{ flex: 1, maxWidth: "320px", position: "relative" }}>
                  <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: c.tan }}><Icons.Search /></span>
                  <input type="text" placeholder="Search events..." value={eventsSearch} onChange={e => setEventsSearch(e.target.value)} style={{ width: "100%", padding: "12px 16px 12px 44px", borderRadius: "50px", border: `2px solid ${c.beige}`, fontSize: "14px" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setEventsCategory(cat)} style={{ padding: "8px 14px", borderRadius: "50px", border: "none", backgroundColor: eventsCategory === cat ? c.green1 : c.white, color: eventsCategory === cat ? c.cream : c.green1, fontWeight: "600", fontSize: "12px", cursor: "pointer" }}>{cat}</button>
                ))}
              </div>
            </div>
          </section>
          <section style={{ padding: "40px 16px 80px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {Object.values(eventsByDay).map(({ date, events }) => (
                <div key={date.toDateString()} style={{ marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span style={{ backgroundColor: isSameDay(date, new Date()) ? c.yellow : c.green1, color: isSameDay(date, new Date()) ? c.green1 : c.cream, padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: "700" }}>{formatDate(date, "day")}</span>
                    {isSameDay(date, new Date()) && <span style={{ color: c.yellow, fontSize: "13px", fontWeight: "600" }}>Today</span>}
                    <span style={{ color: c.tan, fontSize: "13px" }}>{events.length} events</span>
                  </div>
                  {events.length > 0 ? (
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "16px" }}>
                      {events.map(e => (
                        <div key={e.id} onClick={() => setSelectedEvent(e)} style={{ backgroundColor: c.white, borderRadius: "14px", padding: "18px", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                          <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                            <span style={{ backgroundColor: c.green1, color: c.cream, padding: "4px 10px", borderRadius: "50px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>{e.category}</span>
                            <span style={{ backgroundColor: e.costType === "free" ? c.green2 : c.yellow, color: e.costType === "free" ? c.white : c.green1, padding: "4px 10px", borderRadius: "50px", fontSize: "10px", fontWeight: "700" }}>{e.costDetails}</span>
                            {e.featured && <span style={{ fontSize: "14px" }}>⭐</span>}
                          </div>
                          <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", marginBottom: "6px" }}>{e.title}</h3>
                          <p style={{ color: c.tan, fontSize: "13px", lineHeight: 1.4, marginBottom: "10px" }}>{e.shortDescription}</p>
                          <div style={{ display: "flex", gap: "14px", color: c.green1, fontSize: "12px", flexWrap: "wrap" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Icons.Clock />{e.allDay ? "All Day" : formatDate(e.startDateTime, "time")}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Icons.MapPin />{e.venueName}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ backgroundColor: c.white, borderRadius: "12px", padding: "20px", textAlign: "center" }}>
                      <p style={{ color: c.tan, fontSize: "14px" }}>No events added yet for this day.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section style={{ padding: isMobile ? "40px 16px" : "60px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "900", color: c.cream, marginBottom: "12px", textTransform: "uppercase" }}>Have an Event to Share?</h2>
              <p style={{ color: c.beige, fontSize: "16px", marginBottom: "24px" }}>Hosting something the city should know about? Get it in front of 22M+ views.</p>
              <button onClick={() => { setShowEventForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ display: "inline-block", padding: "16px 32px", backgroundColor: c.yellow, color: c.green1, fontWeight: "bold", borderRadius: "50px", border: "none", cursor: "pointer", fontSize: "15px" }}>Submit Your Event →</button>
            </div>
          </section>
        </>
      )}

      {/* EVENT SUBMISSION FORM */}
      {page === "events" && showEventForm && (
        <section style={{ padding: "40px 16px 80px", backgroundColor: c.cream }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {!eventFormSubmitted ? (
              <>
                <button onClick={() => setShowEventForm(false)} style={{ display: "flex", alignItems: "center", gap: "6px", color: c.green1, fontSize: "14px", fontWeight: "600", background: "none", border: "none", cursor: "pointer", marginBottom: "24px" }}>
                  <Icons.ChevronLeft /> Back to Events
                </button>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                  <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>📅</span>
                  <h1 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "12px", textTransform: "uppercase" }}>Submit Your Event</h1>
                  <p style={{ color: c.tan, fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>Get your event in front of Milwaukee's most engaged audience. We review submissions daily.</p>
                </div>

                <form onSubmit={handleEventSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {/* Contact Info */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>👤</span> Your Information
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Your Name *</label>
                        <input type="text" required value={eventForm.submitterName} onChange={(e) => handleEventFormChange("submitterName", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Email *</label>
                        <input type="email" required value={eventForm.submitterEmail} onChange={(e) => handleEventFormChange("submitterEmail", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Phone (optional)</label>
                        <input type="tel" value={eventForm.submitterPhone} onChange={(e) => handleEventFormChange("submitterPhone", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🎉</span> Event Details
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Event Title *</label>
                        <input type="text" required value={eventForm.title} onChange={(e) => handleEventFormChange("title", e.target.value)} placeholder="e.g., Third Ward Art Walk" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Venue Name *</label>
                          <input type="text" required value={eventForm.venueName} onChange={(e) => handleEventFormChange("venueName", e.target.value)} placeholder="e.g., Fiserv Forum" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Neighborhood *</label>
                          <select required value={eventForm.neighborhood} onChange={(e) => handleEventFormChange("neighborhood", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                            <option value="">Select neighborhood</option>
                            <option value="Third Ward">Third Ward</option>
                            <option value="Walker's Point">Walker's Point</option>
                            <option value="Bay View">Bay View</option>
                            <option value="East Side">East Side</option>
                            <option value="Downtown">Downtown</option>
                            <option value="Riverwest">Riverwest</option>
                            <option value="Citywide">Citywide / Multiple</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Venue Address (optional)</label>
                        <input type="text" value={eventForm.venueAddress} onChange={(e) => handleEventFormChange("venueAddress", e.target.value)} placeholder="123 N Water St, Milwaukee, WI" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🕐</span> Date & Time
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                        <input type="checkbox" checked={eventForm.allDay} onChange={(e) => handleEventFormChange("allDay", e.target.checked)} style={{ width: "20px", height: "20px", accentColor: c.green1 }} />
                        <span style={{ fontSize: "14px", fontWeight: "600", color: c.green1 }}>This is an all-day event</span>
                      </label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Start Date *</label>
                          <input type="date" required value={eventForm.startDate} onChange={(e) => handleEventFormChange("startDate", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                        {!eventForm.allDay && (
                          <div>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Start Time *</label>
                            <input type="time" required={!eventForm.allDay} value={eventForm.startTime} onChange={(e) => handleEventFormChange("startTime", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                          </div>
                        )}
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>End Date (if multi-day)</label>
                          <input type="date" value={eventForm.endDate} onChange={(e) => handleEventFormChange("endDate", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                        {!eventForm.allDay && (
                          <div>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>End Time</label>
                            <input type="time" value={eventForm.endTime} onChange={(e) => handleEventFormChange("endTime", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Category & Cost */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🏷️</span> Category & Cost
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Category *</label>
                        <select required value={eventForm.category} onChange={(e) => handleEventFormChange("category", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                          <option value="">Select category</option>
                          <option value="Food & Drink">Food & Drink</option>
                          <option value="Live Music">Live Music</option>
                          <option value="Arts">Arts</option>
                          <option value="Sports">Sports</option>
                          <option value="Comedy">Comedy</option>
                          <option value="Family">Family</option>
                          <option value="Nightlife">Nightlife</option>
                          <option value="Outdoors">Outdoors</option>
                          <option value="Fitness">Fitness</option>
                          <option value="Shopping">Shopping</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "12px" }}>Tags (select all that apply)</label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                          {["free", "21+", "kid-friendly", "date night", "outdoor", "indoor", "charity"].map((tag) => (
                            <label key={tag} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", backgroundColor: eventForm.tags.includes(tag) ? c.beige : c.cream, borderRadius: "8px", cursor: "pointer", border: `2px solid ${eventForm.tags.includes(tag) ? c.green1 : c.beige}`, transition: "all 0.2s" }}>
                              <input type="checkbox" checked={eventForm.tags.includes(tag)} onChange={() => handleEventTagChange(tag)} style={{ width: "16px", height: "16px", accentColor: c.green1 }} />
                              <span style={{ fontSize: "13px", color: c.green1, fontWeight: "500" }}>{tag}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Cost Type *</label>
                          <select required value={eventForm.costType} onChange={(e) => handleEventFormChange("costType", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                            <option value="free">Free</option>
                            <option value="paid">Paid</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Cost Details *</label>
                          <input type="text" required value={eventForm.costDetails} onChange={(e) => handleEventFormChange("costDetails", e.target.value)} placeholder={eventForm.costType === "free" ? "Free" : "e.g., $15, $25-50"} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>📝</span> Description
                    </h2>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Short Description *</label>
                      <p style={{ fontSize: "12px", color: c.tan, marginBottom: "10px" }}>1-2 sentences that capture what makes this event worth attending.</p>
                      <textarea required value={eventForm.shortDescription} onChange={(e) => handleEventFormChange("shortDescription", e.target.value)} rows={3} placeholder="e.g., Free gallery walk featuring local artists, wine tastings, and good vibes." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, resize: "vertical", fontFamily: "inherit" }} />
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🔗</span> Links (Optional)
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Event Website or Info Page</label>
                        <input type="url" value={eventForm.website} onChange={(e) => handleEventFormChange("website", e.target.value)} placeholder="https://..." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Ticket Link</label>
                        <input type="url" value={eventForm.ticketLink} onChange={(e) => handleEventFormChange("ticketLink", e.target.value)} placeholder="https://..." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Anything else we should know?</label>
                        <textarea value={eventForm.notes} onChange={(e) => handleEventFormChange("notes", e.target.value)} rows={3} placeholder="Special instructions, recurring event info, etc." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, resize: "vertical", fontFamily: "inherit" }} />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <p style={{ fontSize: "13px", color: c.tan, marginBottom: "20px" }}>We review submissions daily and will reach out if we need more info.</p>
                    <button type="submit" style={{ padding: "18px 48px", backgroundColor: c.green1, color: c.cream, borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "900", fontSize: "16px", textTransform: "uppercase" }}>
                      Submit Event
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: c.green1, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <span style={{ fontSize: "40px", color: c.cream }}>✓</span>
                </div>
                <h2 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "16px", textTransform: "uppercase" }}>Event Submitted!</h2>
                <p style={{ color: c.tan, fontSize: "17px", lineHeight: 1.6, maxWidth: "500px", margin: "0 auto 32px" }}>Thanks for sharing your event with us. We'll review it and add it to our calendar if it's a good fit for our audience.</p>
                <button onClick={() => { setShowEventForm(false); setEventFormSubmitted(false); }} style={{ padding: "14px 32px", backgroundColor: c.cream, color: c.green1, borderRadius: "50px", border: `2px solid ${c.green1}`, cursor: "pointer", fontWeight: "700", fontSize: "14px" }}>
                  Back to Events
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* EVENT DETAIL */}
      {page === "events" && selectedEvent && (
        <section style={{ padding: "40px 16px 80px", backgroundColor: c.cream }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <button onClick={() => setSelectedEvent(null)} style={{ display: "flex", alignItems: "center", gap: "6px", color: c.green1, fontSize: "14px", fontWeight: "600", background: "none", border: "none", cursor: "pointer", marginBottom: "24px" }}>
              <Icons.ChevronLeft /> Back to Events
            </button>
            <div style={{ backgroundColor: c.green1, borderRadius: "20px", padding: "40px", marginBottom: "28px" }}>
              <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "6px 14px", borderRadius: "50px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase" }}>{selectedEvent.category}</span>
                <span style={{ backgroundColor: selectedEvent.costType === "free" ? c.green2 : "rgba(255,255,255,0.2)", color: c.white, padding: "6px 14px", borderRadius: "50px", fontSize: "12px", fontWeight: "700" }}>{selectedEvent.costDetails}</span>
              </div>
              <h1 style={{ color: c.cream, fontSize: "32px", fontWeight: "900", marginBottom: "16px", textTransform: "uppercase" }}>{selectedEvent.title}</h1>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", color: c.beige, fontSize: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Icons.Clock />{selectedEvent.allDay ? "All Day" : `${formatDate(selectedEvent.startDateTime, "time")} - ${formatDate(selectedEvent.endDateTime, "time")}`}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Icons.MapPin />{selectedEvent.venueName}, {selectedEvent.neighborhood}</span>
              </div>
            </div>
            <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "32px" }}>
              <p style={{ color: c.green1, fontSize: "17px", lineHeight: 1.7, marginBottom: "24px" }}>{selectedEvent.shortDescription}</p>
              {selectedEvent.tags && (
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {selectedEvent.tags.map(tag => (
                    <span key={tag} style={{ backgroundColor: c.beige, color: c.green1, padding: "6px 12px", borderRadius: "50px", fontSize: "12px", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      {page === "newsletter" && (
        <>
          <section style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: isMobile ? "50px 16px" : "80px 16px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>THE INSIDE SCOOP</p>
              <h1 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: "900", color: c.cream, marginBottom: "16px", textTransform: "uppercase", lineHeight: 1.1 }}>The Discover Milwaukee Newsletter</h1>
              <p style={{ fontSize: isMobile ? "18px" : "20px", color: c.yellow, fontWeight: "600", marginBottom: "20px" }}>Milwaukee's Best Stuff. In Your Inbox. Every Wednesday.</p>
              <p style={{ color: c.beige, fontSize: isMobile ? "14px" : "16px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 32px" }}>Look, we get it. Your inbox is a warzone. But this one's different. No fluff. No filler. Just the stuff actually worth knowing about in Milwaukee, delivered once a week.</p>
              
              {/* Email Signup Form at Top */}
              {subscribeStatus === "success" ? (
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "18px 28px", maxWidth: "500px", margin: "0 auto" }}>
                  <p style={{ color: c.yellow, fontSize: "16px", fontWeight: "700", margin: 0 }}>✓ You're in! Check your inbox to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", maxWidth: "500px", margin: "0 auto" }}>
                  <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "18px 24px", borderRadius: "50px", border: "none", fontSize: "16px" }} />
                  <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "18px 32px", backgroundColor: c.yellow, color: c.green1, fontWeight: "bold", fontSize: "16px", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                    {subscribeStatus === "loading" ? "..." : "Subscribe Free"}
                  </button>
                </form>
              )}
              <p style={{ color: c.beige, fontSize: "13px", marginTop: "12px", opacity: 0.8 }}>Join 10,000+ Milwaukee insiders. Unsubscribe anytime.</p>
            </div>
          </section>
          
          <section style={{ padding: isMobile ? "40px 16px" : "60px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: "900", color: c.green1, textAlign: "center", marginBottom: "32px" }}>What You'll Get (And What You Won't)</h2>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "16px" }}>
                {[
                  { i: "✅", t: "The Week's Best Events", d: "Curated picks for what's actually worth your time." },
                  { i: "✅", t: "New Restaurant & Bar Alerts", d: "Be the first to know what just opened." },
                  { i: "✅", t: "Hidden Gems & Local Favorites", d: "The spots your friends don't know about yet." },
                  { i: "✅", t: "Seasonal Guides", d: "Best patios, holiday markets, summer festivals." },
                  { i: "❌", t: "Spam", d: "We send once a week. That's it." },
                  { i: "❌", t: "Boring Corporate Content", d: "No stock photos. No PR fluff." }
                ].map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: c.white, borderRadius: "14px", padding: "20px", display: "flex", gap: "14px" }}>
                    <span style={{ fontSize: "22px" }}>{item.i}</span>
                    <div>
                      <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{item.t}</h3>
                      <p style={{ color: c.tan, fontSize: "13px" }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "60px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "900", color: c.cream, textAlign: "center", marginBottom: "12px" }}>Why People Actually Read This One</h2>
              <p style={{ color: c.beige, fontSize: isMobile ? "14px" : "16px", textAlign: "center", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>We're not trying to be everything to everyone. Just the go-to source for people who want to know what's happening in Milwaukee without doing the research themselves.</p>
              
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "12px" : "20px", marginBottom: "40px" }}>
                {[
                  { icon: "🎯", title: "Curated, Not Cluttered", desc: "We filter through the noise so you don't have to." },
                  { icon: "📍", title: "Actually Local", desc: "Written by people who live here and go to these places." },
                  { icon: "⚡", title: "Quick Read", desc: "Get the highlights in 5 minutes or less." }
                ].map((item, i) => (
                  <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "14px", padding: isMobile ? "16px" : "24px", textAlign: "center" }}>
                    <span style={{ fontSize: isMobile ? "28px" : "32px", display: "block", marginBottom: "12px" }}>{item.icon}</span>
                    <h3 style={{ color: c.cream, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ color: c.beige, fontSize: "13px", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: isMobile ? "20px" : "28px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 style={{ color: c.cream, fontSize: isMobile ? "16px" : "18px", fontWeight: "700", marginBottom: "16px", textAlign: "center" }}>Here's What a Typical Issue Looks Like</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "🎉 This Week's Must-Do Events (5-7 picks)",
                    "🍽️ Restaurant or Bar Spotlight",
                    "📍 Neighborhood Feature or Guide",
                    "🆓 Free Thing to Do This Week",
                    "📸 Quick Hits from Instagram"
                  ].map((item, i) => (
                    <div key={i} style={{ color: c.beige, fontSize: isMobile ? "14px" : "15px", padding: "12px 16px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: isMobile ? "50px 16px" : "80px 16px", backgroundColor: c.blue1 }}>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: isMobile ? "26px" : "32px", fontWeight: "900", color: c.cream, marginBottom: "16px", textTransform: "uppercase" }}>Stop Missing the Good Stuff</h2>
              <p style={{ color: c.beige, fontSize: isMobile ? "14px" : "16px", marginBottom: "32px" }}>One email. Once a week. Everything worth knowing about Milwaukee.</p>
              {subscribeStatus === "success" ? (
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "16px 24px", maxWidth: "460px", margin: "0 auto 16px" }}>
                  <p style={{ color: c.yellow, fontSize: "15px", fontWeight: "700", margin: 0 }}>✓ You're in! Check your inbox to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", maxWidth: "460px", margin: "0 auto 16px" }}>
                  <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "16px 20px", borderRadius: "50px", border: "none", fontSize: "15px" }} />
                  <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "16px 28px", backgroundColor: c.yellow, color: c.green1, fontWeight: "bold", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                    {subscribeStatus === "loading" ? "..." : "Subscribe Free"}
                  </button>
                </form>
              )}
              <p style={{ color: c.blue3, fontSize: "13px" }}>Delivered every Wednesday. No spam. Unsubscribe anytime.</p>
            </div>
          </section>
        </>
      )}

      {/* PARTNER */}
      {page === "partner" && !showPartnerForm && (
        <section style={{ padding: isMobile ? "40px 16px" : "80px 16px", backgroundColor: c.green1 }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
              <p style={{ color: c.yellow, fontSize: isMobile ? "12px" : "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>GROW WITH US</p>
              <h1 style={{ fontSize: isMobile ? "28px" : "40px", fontWeight: "900", color: c.cream, marginBottom: "16px", textTransform: "uppercase" }}>Partner With Discover Milwaukee</h1>
              <p style={{ fontSize: isMobile ? "16px" : "18px", color: c.beige, maxWidth: "650px", margin: "0 auto" }}>Want Locals to Actually Care About Your Brand? Good. So Do We.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: isMobile ? "20px" : "32px", marginBottom: isMobile ? "32px" : "48px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: c.cream, fontSize: isMobile ? "15px" : "17px", lineHeight: 1.7, textAlign: "center" }}>Discover Milwaukee isn't a billboard. We're where Milwaukee goes to decide where to eat, drink, hang out, and spend money. If your brand wants attention from real people, you're in the right place.</p>
            </div>

            {/* BRANDS WE'VE WORKED WITH */}
            <div style={{ marginBottom: isMobile ? "32px" : "48px" }}>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px", textTransform: "uppercase" }}>They Took the Leap. It Paid Off.</p>
                <h2 style={{ color: c.cream, fontSize: isMobile ? "22px" : "28px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px" }}>Brands That Trust Us</h2>
                <p style={{ color: c.beige, fontSize: isMobile ? "14px" : "15px", maxWidth: "500px", margin: "0 auto" }}>From neighborhood gems to household names — here's who's shown up with us.</p>
              </div>
              <div style={{ 
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: isMobile ? "8px" : "12px",
                padding: isMobile ? "12px" : "24px",
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden"
              }}>
                {partners.length > 0 ? (
                  partners.map((partner, i) => (
                    <a 
                      key={partner.id || i}
                      href={partner.website || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        width: isMobile ? "50px" : "80px",
                        height: isMobile ? "50px" : "80px",
                        backgroundColor: "rgba(255,255,255,0.95)", 
                        borderRadius: isMobile ? "8px" : "10px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        padding: isMobile ? "6px" : "8px",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        textDecoration: "none",
                        flexShrink: 0
                      }}
                      onMouseOver={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,1)"; e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseOut={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.95)"; e.currentTarget.style.transform = "scale(1)"; }}
                    >
                      {partner.logoUrl ? (
                        <img 
                          src={partner.logoUrl} 
                          alt={partner.name}
                          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        />
                      ) : (
                        <span style={{ color: c.green1, fontSize: isMobile ? "6px" : "10px", fontWeight: "700", textAlign: "center", padding: "2px" }}>{partner.name}</span>
                      )}
                    </a>
                  ))
                ) : (
                  Array.from({ length: isMobile ? 10 : 10 }, (_, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        width: isMobile ? "50px" : "80px",
                        height: isMobile ? "50px" : "80px",
                        backgroundColor: "rgba(255,255,255,0.08)", 
                        borderRadius: isMobile ? "8px" : "10px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        transition: "all 0.2s",
                        cursor: "default",
                        flexShrink: 0
                      }}
                      onMouseOver={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseOut={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "scale(1)"; }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? "6px" : "10px", fontWeight: "600" }}>LOGO</span>
                    </div>
                  ))
                )}
              </div>
              <p style={{ color: c.beige, fontSize: "13px", textAlign: "center", marginTop: "16px", fontStyle: "italic" }}>{partners.length > 0 ? `${partners.length} brands and counting.` : "Your logo could be here. Just saying."}</p>
            </div>
            <div style={{ marginBottom: isMobile ? "32px" : "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <span style={{ fontSize: "24px" }}>🚀</span>
                <h2 style={{ color: c.cream, fontSize: isMobile ? "20px" : "24px", fontWeight: "900", textTransform: "uppercase" }}>The Reach</h2>
              </div>
              <div style={{ textAlign: "center", padding: isMobile ? "24px" : "36px", background: `linear-gradient(135deg, ${c.yellow} 0%, ${c.orange} 100%)`, borderRadius: "20px", marginBottom: "24px" }}>
                <div style={{ fontSize: isMobile ? "36px" : "56px", fontWeight: "900", color: c.green1 }}>37.1 MILLION</div>
                <div style={{ fontSize: isMobile ? "14px" : "18px", color: c.green1, fontWeight: "700", letterSpacing: "2px" }}>VIEWS IN 2025</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? "10px" : "14px" }}>
                {[{ n: "Instagram", v: "13.4M" }, { n: "Facebook", v: "19.5M*" }, { n: "TikTok", v: "4.2M" }, { n: "TOTAL", v: "37.1M" }].map(p => (
                  <div key={p.n} style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "14px", padding: isMobile ? "14px" : "20px", textAlign: "center", border: p.n === "TOTAL" ? `2px solid ${c.yellow}` : "none" }}>
                    <div style={{ color: p.n === "TOTAL" ? c.yellow : c.cream, fontSize: isMobile ? "20px" : "26px", fontWeight: "900" }}>{p.v}</div>
                    <div style={{ color: c.beige, fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>{p.n}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: c.beige, fontSize: "11px", textAlign: "center", marginTop: "12px", opacity: 0.7 }}>*Projected based on numbers from 11/25 onward</p>
              
              {/* Quick CTA Box */}
              <div 
                onClick={() => { setShowPartnerForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{ 
                  marginTop: "24px",
                  background: `linear-gradient(135deg, ${c.yellow} 0%, ${c.orange} 100%)`,
                  borderRadius: "16px", 
                  padding: isMobile ? "16px 20px" : "24px 32px", 
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: "space-between",
                  gap: isMobile ? "12px" : "0",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: isMobile ? "24px" : "28px" }}>🚀</span>
                  <div>
                    <h3 style={{ color: c.green1, fontSize: isMobile ? "16px" : "20px", fontWeight: "900", margin: 0 }}>I've Seen Enough, Let's Partner</h3>
                    <p style={{ color: c.green1, fontSize: isMobile ? "12px" : "14px", margin: 0, opacity: 0.8 }}>Skip ahead and fill out our quick intake form</p>
                  </div>
                </div>
                <span style={{ color: c.green1, fontSize: "24px", fontWeight: "900", alignSelf: isMobile ? "flex-end" : "center" }}>→</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px", marginBottom: isMobile ? "32px" : "48px" }}>
              <div style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: isMobile ? "24px" : "32px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "20px" }}>👀</span>
                  <h3 style={{ color: c.cream, fontSize: isMobile ? "18px" : "20px", fontWeight: "900", textTransform: "uppercase" }}>Who You're Reaching</h3>
                </div>
                <div style={{ backgroundColor: c.yellow, borderRadius: "12px", padding: isMobile ? "14px" : "18px", marginBottom: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: "900", color: c.green1 }}>79.2%</div>
                  <div style={{ color: c.green1, fontSize: "13px", fontWeight: "600" }}>AGES 18–44</div>
                </div>
                <p style={{ color: c.cream, fontSize: "15px", marginBottom: "12px", fontWeight: "600" }}>Young professionals. Couples. Groups of friends.</p>
                <ul style={{ color: c.beige, fontSize: "14px", lineHeight: 1.8, paddingLeft: "18px" }}>
                  <li>Try new places</li><li>Go out during the week</li><li>Show up when something looks cool</li><li>Spend money locally</li>
                </ul>
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: isMobile ? "24px" : "32px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "20px" }}>🎯</span>
                  <h3 style={{ color: c.cream, fontSize: isMobile ? "18px" : "20px", fontWeight: "900", textTransform: "uppercase" }}>What Makes Us Different</h3>
                </div>
                <p style={{ color: c.cream, fontSize: "15px", marginBottom: "20px", lineHeight: 1.6 }}>We don't do boring. We don't do stock photos. And we definitely don't do "Hey guys, check this out" energy.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Native content that blends into feeds", "Storytelling that feels real", "Massive local trust", "Multi-platform amplification", "Content people actually share"].map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: c.beige, fontSize: "14px" }}>
                      <span style={{ color: c.yellow }}>✔</span>{p}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "20px", padding: "14px", backgroundColor: "rgba(240,166,35,0.15)", borderRadius: "10px", borderLeft: `3px solid ${c.yellow}` }}>
                  <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", margin: 0 }}>When we post about a business, people show up.</p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: isMobile ? "28px 20px" : "40px", border: `2px solid ${c.yellow}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "24px" }}>🤝</span>
                <h3 style={{ color: c.cream, fontSize: isMobile ? "20px" : "26px", fontWeight: "900", textTransform: "uppercase" }}>Let's Do Something That Works</h3>
              </div>
              <p style={{ color: c.beige, fontSize: isMobile ? "14px" : "16px", marginBottom: "24px" }}>If you want your brand seen by the people shaping Milwaukee's culture, we should talk.</p>
              <button onClick={() => { setShowPartnerForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ display: "inline-block", padding: isMobile ? "14px 28px" : "18px 40px", backgroundColor: c.yellow, color: c.green1, borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "900", fontSize: isMobile ? "14px" : "16px", textTransform: "uppercase" }}>Let's Partner Up →</button>
            </div>
          </div>
        </section>
      )}

      {/* PARTNER INTAKE FORM */}
      {page === "partner" && showPartnerForm && (
        <section style={{ padding: isMobile ? "32px 16px" : "60px 16px", backgroundColor: c.cream, minHeight: "100vh" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <button
              onClick={() => setShowPartnerForm(false)}
              style={{ display: "flex", alignItems: "center", gap: "6px", color: c.green1, fontSize: "14px", fontWeight: "600", background: "none", border: "none", cursor: "pointer", marginBottom: "24px" }}
            >
              <Icons.ChevronLeft /> Back to Partner Info
            </button>

            {!formSubmitted ? (
              <>
                <div style={{ textAlign: "center", marginBottom: isMobile ? "28px" : "40px" }}>
                  <h1 style={{ fontSize: isMobile ? "28px" : "36px", fontWeight: "900", color: c.green1, marginBottom: "16px", textTransform: "uppercase" }}>Let's Partner Up</h1>
                  <p style={{ color: c.tan, fontSize: isMobile ? "14px" : "16px", lineHeight: 1.6, maxWidth: "550px", margin: "0 auto" }}>Tell us a bit about your brand and what you're trying to accomplish. We'll follow up with the best-fit partnership options and current availability.</p>
                </div>

                <form onSubmit={handlePartnerSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  
                  {/* Contact Information Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: isMobile ? "20px" : "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>📋</span> Contact Information
                    </h2>
                    
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
                      <div style={{ gridColumn: isMobile ? "span 1" : "span 2" }}>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Full Name *</label>
                        <input type="text" required value={partnerForm.fullName} onChange={(e) => handlePartnerFormChange("fullName", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Email Address *</label>
                        <input type="email" required value={partnerForm.emailAddress} onChange={(e) => handlePartnerFormChange("emailAddress", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Phone Number</label>
                        <input type="tel" value={partnerForm.phone} onChange={(e) => handlePartnerFormChange("phone", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Company / Brand Name *</label>
                        <input type="text" required value={partnerForm.companyName} onChange={(e) => handlePartnerFormChange("companyName", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Role / Title *</label>
                        <select required value={partnerForm.role} onChange={(e) => handlePartnerFormChange("role", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                          <option value="">Select your role</option>
                          <option value="Owner / Founder">Owner / Founder</option>
                          <option value="Marketing Manager">Marketing Manager</option>
                          <option value="Marketing Director / VP">Marketing Director / VP</option>
                          <option value="General Manager">General Manager</option>
                          <option value="Operator">Operator</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Company Website</label>
                        <input type="url" value={partnerForm.website} onChange={(e) => handlePartnerFormChange("website", e.target.value)} placeholder="https://" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      
                      <div style={{ gridColumn: isMobile ? "span 1" : "span 2" }}>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Social Media Handles</label>
                        <input type="text" value={partnerForm.socialHandles} onChange={(e) => handlePartnerFormChange("socialHandles", e.target.value)} placeholder="@instagram, @tiktok, etc." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Budget Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: isMobile ? "20px" : "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>💰</span> Budget
                    </h2>
                    <p style={{ fontSize: "13px", color: c.tan, marginBottom: "16px" }}>This helps us recommend the right partnership options for your goals.</p>
                    
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>What budget range are you considering for promotion? *</label>
                    <select required value={partnerForm.budget} onChange={(e) => handlePartnerFormChange("budget", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                      <option value="">Select budget range</option>
                      <option value="$1,000 and under">$1,000 and under</option>
                      <option value="$1,000–$3,000">$1,000–$3,000</option>
                      <option value="$3,000–$10,000">$3,000–$10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>

                  {/* Goals Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🎯</span> Goals and Intent
                    </h2>
                    
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "12px" }}>What are you looking to drive right now? * (Select all that apply)</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {["Brand awareness", "Foot traffic or in-store visits", "Event promotion", "Product or service launch", "Hiring or recruiting", "Seasonal promotion", "Email or audience growth", "Not sure yet"].map((goal) => (
                        <label key={goal} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", backgroundColor: partnerForm.goals.includes(goal) ? c.beige : c.cream, borderRadius: "8px", cursor: "pointer", border: `2px solid ${partnerForm.goals.includes(goal) ? c.green1 : c.beige}`, transition: "all 0.2s" }}>
                          <input type="checkbox" checked={partnerForm.goals.includes(goal)} onChange={() => handleCheckboxChange("goals", goal)} style={{ width: "18px", height: "18px", accentColor: c.green1 }} />
                          <span style={{ fontSize: "14px", color: c.green1, fontWeight: "500" }}>{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Timing Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>📅</span> Timing
                    </h2>
                    
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>When are you looking to run a campaign? *</label>
                    <select required value={partnerForm.timing} onChange={(e) => handlePartnerFormChange("timing", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                      <option value="">Select timing</option>
                      <option value="ASAP (within the next 2 weeks)">ASAP (within the next 2 weeks)</option>
                      <option value="This month">This month</option>
                      <option value="Next month">Next month</option>
                      <option value="Next 2–3 months">Next 2–3 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>

                  {/* Partnership Interest Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🤝</span> Partnership Interest
                    </h2>
                    
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "12px" }}>What type of partnership are you interested in? (Optional)</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {["One-time feature", "Ongoing monthly partnership", "Giveaway collaboration", "Event partnership", "Category exclusivity", "Not sure yet"].map((interest) => (
                        <label key={interest} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", backgroundColor: partnerForm.partnershipInterest.includes(interest) ? c.beige : c.cream, borderRadius: "8px", cursor: "pointer", border: `2px solid ${partnerForm.partnershipInterest.includes(interest) ? c.green1 : c.beige}`, transition: "all 0.2s" }}>
                          <input type="checkbox" checked={partnerForm.partnershipInterest.includes(interest)} onChange={() => handleCheckboxChange("partnershipInterest", interest)} style={{ width: "18px", height: "18px", accentColor: c.green1 }} />
                          <span style={{ fontSize: "14px", color: c.green1, fontWeight: "500" }}>{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>📝</span> Tell Us More
                    </h2>
                    
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Anything else we should know? *</label>
                    <p style={{ fontSize: "12px", color: c.tan, marginBottom: "10px" }}>Share your goals, any offers or promotions, key dates, or anything that would help us understand what you're looking for.</p>
                    <textarea required value={partnerForm.notes} onChange={(e) => handlePartnerFormChange("notes", e.target.value)} rows={5} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, resize: "vertical", fontFamily: "inherit" }} />
                  </div>

                  {/* Optional Fields Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>✨</span> A Few More Details (Optional)
                    </h2>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Preferred contact method</label>
                        <select value={partnerForm.preferredContact} onChange={(e) => handlePartnerFormChange("preferredContact", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                          <option value="">Select preference</option>
                          <option value="Email">Email</option>
                          <option value="Text">Text</option>
                          <option value="Phone">Phone</option>
                        </select>
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>How did you hear about Discover Milwaukee?</label>
                        <select value={partnerForm.heardAbout} onChange={(e) => handlePartnerFormChange("heardAbout", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                          <option value="">Select option</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="TikTok">TikTok</option>
                          <option value="Referral">Referral</option>
                          <option value="Past partnership">Past partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>City or primary location</label>
                        <input type="text" value={partnerForm.city} onChange={(e) => handlePartnerFormChange("city", e.target.value)} placeholder="Milwaukee, WI" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <p style={{ fontSize: "13px", color: c.tan, marginBottom: "20px" }}>Limited sponsorship availability. Partnerships are intentionally capped to protect results.</p>
                    <button type="submit" style={{ padding: "18px 48px", backgroundColor: c.green1, color: c.cream, borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "900", fontSize: "16px", textTransform: "uppercase" }}>
                      Request Partnership Options
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: c.green1, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <span style={{ fontSize: "40px" }}>✓</span>
                </div>
                <h2 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "16px", textTransform: "uppercase" }}>Thanks for Reaching Out</h2>
                <p style={{ color: c.tan, fontSize: "17px", lineHeight: 1.6, maxWidth: "500px", margin: "0 auto 32px" }}>We received your info and will follow up shortly with availability and recommended partnership options.</p>
                <button onClick={() => { setShowPartnerForm(false); setFormSubmitted(false); }} style={{ padding: "14px 32px", backgroundColor: c.cream, color: c.green1, borderRadius: "50px", border: `2px solid ${c.green1}`, cursor: "pointer", fontWeight: "700", fontSize: "14px" }}>
                  Back to Partner Page
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ padding: isMobile ? "40px 16px" : "60px 16px", backgroundColor: c.green1, borderTop: `4px solid ${c.yellow}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Main Footer Content */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? "32px" : "40px", marginBottom: "40px", textAlign: isMobile ? "center" : "left" }}>
            {/* Brand Column */}
            <div>
              <div onClick={() => navigateTo("home")} style={{ cursor: "pointer", marginBottom: "12px" }}>
                <span style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: "900", color: c.cream, letterSpacing: "1px", textTransform: "uppercase" }}>DISCOVER MILWAUKEE</span>
              </div>
              <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, marginBottom: "16px", maxWidth: "280px", margin: isMobile ? "0 auto 16px" : "0 0 16px" }}>
                Your insider's guide to everything worth doing in Milwaukee. No fluff. Just the good stuff.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: isMobile ? "center" : "flex-start" }}>
                <a href="https://instagram.com/discovermilwaukee" target="_blank" rel="noopener noreferrer" style={{ color: c.beige, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.yellow} onMouseOut={e => e.currentTarget.style.color = c.beige}><Icons.Instagram /></a>
                <a href="https://tiktok.com/@discovermilwaukee" target="_blank" rel="noopener noreferrer" style={{ color: c.beige, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.yellow} onMouseOut={e => e.currentTarget.style.color = c.beige}><Icons.TikTok /></a>
                <a href="https://www.facebook.com/p/discovermilwaukee-100069844392448/" target="_blank" rel="noopener noreferrer" style={{ color: c.beige, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.yellow} onMouseOut={e => e.currentTarget.style.color = c.beige}><Icons.Facebook /></a>
              </div>
            </div>
            
            {/* Explore Column */}
            <div>
              <h4 style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Explore</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span onClick={() => navigateTo("events")} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Events Calendar</span>
                <span onClick={() => navigateTo("explore")} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>City Guides</span>
                <a href="/things-to-do-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Things to Do</a>
                <a href="/best-restaurants-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Best Restaurants</a>
                <span onClick={() => navigateTo("newsletter")} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Newsletter</span>
              </div>
            </div>
            
            {/* Company Column */}
            <div>
              <h4 style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Company</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="/about" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>About Us</a>
                <span onClick={() => navigateTo("partner")} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Partner With Us</span>
                <span onClick={() => { navigateTo("events"); setShowEventForm(true); }} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Submit an Event</span>
                <a href="mailto:contact@discover-milwaukee.com" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Contact Us</a>
              </div>
            </div>
            
            {/* Legal Column */}
            <div>
              <h4 style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Legal</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="/privacy" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Privacy Policy</a>
                <a href="/terms" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Terms of Service</a>
              </div>
            </div>
          </div>

          {/* Visitor Guides - SEO Internal Links */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", marginBottom: "24px" }}>
            <h4 style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: isMobile ? "center" : "left" }}>Visitor Guides</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? "12px" : "24px", justifyContent: isMobile ? "center" : "flex-start" }}>
              <a href="/first-time-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>First Time Visitor</a>
              <a href="/weekend-in-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Weekend Itinerary</a>
              <a href="/romantic-weekend-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Romantic Getaway</a>
              <a href="/family-weekend-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Family Weekend</a>
              <a href="/beer-lovers-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Beer Lover's Guide</a>
              <a href="/foodie-weekend-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Foodie Weekend</a>
              <a href="/arts-culture-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Arts & Culture</a>
              <a href="/outdoor-weekend-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Outdoor Adventure</a>
            </div>
          </div>

          {/* Popular Guides - SEO Internal Links */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", marginBottom: "24px" }}>
            <h4 style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: isMobile ? "center" : "left" }}>Popular Guides</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? "12px" : "24px", justifyContent: isMobile ? "center" : "flex-start" }}>
              <a href="/best-brunch-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Best Brunch</a>
              <a href="/best-patios-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Best Patios</a>
              <a href="/milwaukee-breweries" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Breweries</a>
              <a href="/milwaukee-nightlife" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Nightlife</a>
              <a href="/free-things-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Free Things</a>
              <a href="/milwaukee-date-ideas" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Date Ideas</a>
              <a href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Third Ward</a>
              <a href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Bay View</a>
              <a href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Walker's Point</a>
              <a href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>East Side</a>
              <a href="/downtown-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Downtown</a>
              <a href="/riverwest-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Riverwest</a>
              <a href="/brady-street-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Brady Street</a>
              <a href="/bronzeville-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Bronzeville</a>
              <a href="/sherman-park-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Sherman Park</a>
              <a href="/south-side-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>South Side</a>
              <a href="/harbor-district-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Harbor District</a>
              <a href="/washington-heights-milwaukee" style={{ color: c.beige, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Washington Heights</a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <p style={{ color: c.beige, fontSize: "13px", opacity: 0.8 }}>© 2026 Discover Milwaukee. All rights reserved.</p>
            <p style={{ color: c.beige, fontSize: "13px", opacity: 0.8 }}>Made with 🍺 in Milwaukee, WI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
