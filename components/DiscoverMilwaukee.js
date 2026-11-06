// DISCOVER MILWAUKEE - COMPLETE WEBSITE WITH ALL PAGES
// All navigation works: Home, Explore, Events, Newsletter, Partner
// Events powered by Google Sheets - see GOOGLE_SHEETS_CONFIG below

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GUIDE_CATEGORIES } from "../lib/guides";
import { trackEvent } from "../lib/analytics";
import { mergeExtras } from "../lib/partnerExtras";
import { EVENTS as FALLBACK_EVENTS, eventPath } from "../lib/events";
import Nav from "./Nav";
import { onActivate, trapTab } from "../lib/a11y";

// Display typeface for home-page headlines (loaded in _document.js). Falls back
// to system-ui everywhere it isn't applied, so guide pages are untouched.
const DISPLAY_FONT = "'Anton', 'Anton Fallback', system-ui, -apple-system, sans-serif";
// Brand type system (free substitutes for the paid brand fonts).
// Scoped to the home page via an inline wrapper so guide pages are untouched.
const BODY_FONT = "'Jost', 'Jost Fallback', system-ui, -apple-system, 'Segoe UI', sans-serif";
const SCRIPT_FONT = "'Damion', 'Brush Script MT', cursive";

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
    description: "Advertise in Milwaukee with Discover Milwaukee: 37M+ yearly views on Instagram, TikTok & Facebook. Sponsored content, influencer marketing & brand partnerships.",
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
    "url": "https://www.discover-milwaukee.com",
    "logo": "https://www.discover-milwaukee.com/logo.png",
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
    "url": "https://www.discover-milwaukee.com",
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
    "url": "https://www.discover-milwaukee.com",
    "description": "Your insider's guide to Milwaukee events, restaurants, and things to do",
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.discover-milwaukee.com/events?search={search_term_string}",
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
        "item": "https://www.discover-milwaukee.com"
      },
      page !== "home" && {
        "@type": "ListItem",
        "position": 2,
        "name": page.charAt(0).toUpperCase() + page.slice(1),
        "item": `https://www.discover-milwaukee.com/${page}`
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
      "url": "https://www.discover-milwaukee.com"
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
        "url": "https://www.discover-milwaukee.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.discover-milwaukee.com/explore/${article.slug}`
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
  green1: "#2C5235", green2: "#547F4B", green2Dark: "#4F7746", blue1: "#1E52A1", blue2: "#0B77BD", blue2Dark: "#0A71B3", blue3: "#58ADC3", blue3Dark: "#317587",
  yellow: "#F0A623", yellowDark: "#94620A", orange: "#D06828", orangeDark: "#AB5521", cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B", tanDark: "#83693E",
  white: "#FFFFFF", black: "#000000",
  // UI specific
  navBg: "#F7F1E7", navText: "#2C5235", cardBg: "#FFFFFF", bodyBg: "#F7F1E7"
};

const darkColors = {
  green1: "#1a2f1f", green2: "#2d4a32", green2Dark: "#4f7746", blue1: "#1E52A1", blue2: "#0B77BD", blue2Dark: "#0A71B3", blue3: "#58ADC3", blue3Dark: "#317587",
  yellow: "#F0A623", yellowDark: "#94620A", orange: "#D06828", orangeDark: "#AB5521", cream: "#1a1a1a", beige: "#2a2a2a", tan: "#9E7F4B", tanDark: "#83693E",
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

// Events data lives in lib/events.js (shared with the event pages and the weekend page).

// Helper function to get the current week's Monday and Sunday
const getCurrentWeekRange = () => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const monday = new Date(now);
  const sunday = new Date(now);

  // Calculate Monday (if today is Sunday, go back 6 days; otherwise go back to Monday)
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  monday.setDate(now.getDate() - daysToMonday);
  monday.setHours(0, 0, 0, 0);

  // Calculate Sunday (end of week)
  const daysToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  sunday.setDate(now.getDate() + daysToSunday);
  sunday.setHours(23, 59, 59, 999);

  return { monday, sunday };
};

// Filter events to current week
const getThisWeekEvents = (events) => {
  const { monday, sunday } = getCurrentWeekRange();
  return events.filter(event => {
    const eventDate = new Date(event.startDateTime);
    return eventDate >= monday && eventDate <= sunday;
  });
};


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
  Instagram: () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><circle cx="12" cy="12" r="3.2"/><circle cx="18.4" cy="5.6" r="1.44"/></svg>,
  TikTok: () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>,
  Facebook: () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Clock: () => <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  MapPin: () => <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Search: () => <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  ChevronLeft: () => <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg>,
  ChevronRight: () => <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>,
};

// -----------------------------------------------------------------------------
// LINE ICON SET (home page) — one cohesive family that replaces every emoji.
// Editorial line art: 24px grid, 1.6px stroke, currentColor, round joins.
// -----------------------------------------------------------------------------
const lineProps = (size) => ({ "aria-hidden": true, focusable: "false", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" });
const LineIcons = {
  Compass: ({ size = 24 } = {}) => <svg {...lineProps(size)}><circle cx="12" cy="12" r="9"/><path d="M16.2 7.8l-2.1 5.3-5.3 2.1 2.1-5.3z"/></svg>,
  Utensils: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M6 3v6a2.2 2.2 0 0 0 4.4 0V3"/><path d="M8.2 11v10"/><path d="M16.5 3c-1.4 1-2.2 3.2-2.2 6 0 2.2.9 3.6 2.2 4.2V21"/></svg>,
  Taco: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M2.5 15.5a9.5 9.5 0 0 1 19 0Z"/><path d="M6 12.5l1 3M10 10.7l.5 4.8M14 10.7l-.5 4.8M18 12.5l-1 3"/></svg>,
  Pizza: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M3 6l9 15 9-15a20 20 0 0 0-18 0z"/><path d="M3 6a20 20 0 0 1 18 0"/><circle cx="10" cy="9.5" r="1"/><circle cx="14" cy="9.5" r="1"/><circle cx="12" cy="14" r="1"/></svg>,
  BeerMug: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M6 8h9v12H6z"/><path d="M15 10h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3"/><path d="M6 8a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3"/><path d="M9 5V4M12 5V4"/></svg>,
  Cocktail: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M4 5h16l-8 8z"/><path d="M12 13v6"/><path d="M8 21h8"/><path d="M15 8l3-3"/></svg>,
  Music: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>,
  Gem: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18"/><path d="M8.5 3 6 9l6 12 6-12-2.5-6"/></svg>,
  Car: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M5 11l1.6-4.2A2 2 0 0 1 8.5 5.5h7a2 2 0 0 1 1.9 1.3L19 11"/><rect x="3" y="11" width="18" height="5" rx="1.5"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="16.5" cy="18" r="1.6"/></svg>,
  Umbrella: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 3v2"/><path d="M3 12a9 9 0 0 1 18 0Z"/><path d="M12 12v6a2.5 2.5 0 0 0 5 0"/></svg>,
  Paw: ({ size = 24 } = {}) => <svg {...lineProps(size)}><circle cx="7" cy="9" r="1.6"/><circle cx="12" cy="7.5" r="1.7"/><circle cx="17" cy="9" r="1.6"/><path d="M12 12c-2.5 0-4.5 2-4.5 4a2.5 2.5 0 0 0 2.5 2.5c.9 0 1.3-.5 2-.5s1.1.5 2 .5a2.5 2.5 0 0 0 2.5-2.5c0-2-2-4-4.5-4z"/></svg>,
  Calendar: ({ size = 24 } = {}) => <svg {...lineProps(size)}><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 2.5v4M16 2.5v4"/></svg>,
  Buildings: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M3 21V8l6-3v16"/><path d="M9 21V10l6-3v14"/><path d="M15 21V12l6-3v12"/><path d="M2 21h20"/></svg>,
  Ticket: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4z"/><path d="M14 7v2M14 11v2M14 15v2"/></svg>,
  Sparkle: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 3.5v3M20.5 5h-3"/></svg>,
  Pin: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 21s-6.5-5.5-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  Bolt: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>,
  BookOpen: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 6C10.5 5 8 4.5 4 4.5V18c4 0 6.5.5 8 1.5"/><path d="M12 6c1.5-1 4-1.5 8-1.5V18c-4 0-6.5.5-8 1.5"/><path d="M12 6v13.5"/></svg>,
  Mail: ({ size = 24 } = {}) => <svg {...lineProps(size)}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  Briefcase: ({ size = 24 } = {}) => <svg {...lineProps(size)}><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12h18"/></svg>,
  Palette: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 3a9 9 0 1 0 0 18c1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="15.5" cy="8.5" r="1"/></svg>,
  Basketball: ({ size = 24 } = {}) => <svg {...lineProps(size)}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/><path d="M5.5 5.5C8 8 8 16 5.5 18.5M18.5 5.5C16 8 16 16 18.5 18.5"/></svg>,
  Mic: ({ size = 24 } = {}) => <svg {...lineProps(size)}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4M9 21h6"/></svg>,
  Users: ({ size = 24 } = {}) => <svg {...lineProps(size)}><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5.5"/><path d="M17 14.5a6 6 0 0 1 4 5.5"/></svg>,
  Moon: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"/></svg>,
  Tree: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 3l6 8h-3l3 5H6l3-5H6z"/><path d="M12 16v5"/></svg>,
  Dumbbell: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10"/></svg>,
  Bag: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M6 8h12l-1 12H7z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>,
  Star: ({ size = 24 } = {}) => <svg {...lineProps(size)}><path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z"/></svg>,
  Sun: ({ size = 24 } = {}) => <svg {...lineProps(size)}><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>,
};

// Explore page: presentation-only icon + brand-color override per category.
// Keyed by category id; resolved through the active theme. Never touches guide data/SEO.
const CAT_META = {
  "restaurants-cuisine": { Icon: LineIcons.Utensils, ck: "orange" },
  "cafes-sweets": { Icon: LineIcons.Sparkle, ck: "blue3" },
  "bars-nightlife": { Icon: LineIcons.Cocktail, ck: "blue2" },
  "activities-outdoors": { Icon: LineIcons.Compass, ck: "green2" },
  "attractions-museums": { Icon: LineIcons.Buildings, ck: "blue1" },
  "sports-game-days": { Icon: LineIcons.Basketball, ck: "orange" },
  "events-seasonal": { Icon: LineIcons.Calendar, ck: "yellow" },
  "neighborhoods": { Icon: LineIcons.Pin, ck: "blue3" },
  "plan-your-visit": { Icon: LineIcons.Compass, ck: "green1" },
  "milwaukee-stories": { Icon: LineIcons.BookOpen, ck: "tan" },
};
const catMeta = (id) => CAT_META[id] || { Icon: LineIcons.Star, ck: "green1" };

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
  const [expandedCategories, setExpandedCategories] = useState({});

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

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
        
        const mergedPartners = mergeExtras(parsedPartners || []);
        if (mergedPartners.length > 0) {
          setPartners(mergedPartners);
          console.log(`Loaded ${mergedPartners.length} partners (sheet + code extras)`);
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
  // /partner opens straight into the intake form (the pitch view stays reachable via "Back to Partner Info")
  const [showPartnerForm, setShowPartnerForm] = useState(initialPage === "partner");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Deep-link: /partner?apply=1 opens the intake form directly (media-kit & article CTAs)
  useEffect(() => {
    if (router.query.apply && page === "partner") {
      setShowPartnerForm(true);
    }
  }, [router.query.apply, page]);

  // Partner funnel analytics: page viewed -> form opened -> form submitted.
  // (The SPA swaps views client-side without always changing the URL, so a
  // plain pageview can undercount /partner; these custom events are the source of truth.)
  useEffect(() => {
    if (page === "partner") trackEvent("partner_page_view", { via: router.query.apply ? "deep_link" : "nav" });
  }, [page]);
  useEffect(() => {
    if (showPartnerForm) trackEvent("partner_form_opened", { via: router.query.apply ? "deep_link" : "direct" });
  }, [showPartnerForm]);
  const [partnerForm, setPartnerForm] = useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    socialHandles: "",
    budget: "",
    partnershipInterest: [],
    notes: "",
    heardAbout: "",
    heardAboutDetail: "",
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
          companyName: partnerForm.companyName,
          socialHandles: partnerForm.socialHandles || "Not provided",
          budget: partnerForm.budget ? `$${Number(partnerForm.budget).toLocaleString("en-US")}` : "Not provided",
          partnershipInterest: partnerForm.partnershipInterest.length > 0 ? partnerForm.partnershipInterest.join(", ") : "None selected",
          heardAbout: partnerForm.heardAbout || "Not specified",
          heardAboutDetail: partnerForm.heardAbout && partnerForm.heardAboutDetail ? partnerForm.heardAboutDetail : "Not provided",
          city: partnerForm.city || "Not specified",
          notes: partnerForm.notes || "Not provided"
        })
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        trackEvent("partner_form_submitted", {
          budget: partnerForm.budget ? Number(partnerForm.budget) : 0,
          interests: partnerForm.partnershipInterest.length,
          heardAbout: partnerForm.heardAbout || "unspecified"
        });
      } else {
        trackEvent("partner_form_error", { status: response.status });
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      trackEvent("partner_form_error", { status: "network" });
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const navigateTo = (p) => {
    // Handle About page as external link (separate page)
    if (p.toLowerCase() === "about") {
      window.location.href = "/about";
      return;
    }
    // Handle Festivals page as external link (separate page)
    if (p.toLowerCase() === "festivals") {
      window.location.href = "/milwaukee-festivals";
      return;
    }
    setPage(p.toLowerCase());
    setSelectedEvent(null);
    setSelectedPost(null);
    setShowPartnerForm(p.toLowerCase() === "partner");
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
    if (!globalSearch.trim()) return { events: [], articles: [], guides: [] };
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
      ).slice(0, 5),
      guides: GUIDE_CATEGORIES.flatMap(cat =>
        cat.guides
          .filter(g =>
            g.title.toLowerCase().includes(searchLower) ||
            g.desc.toLowerCase().includes(searchLower) ||
            cat.title.toLowerCase().includes(searchLower)
          )
          .map(g => ({ ...g, category: cat.title, categoryColor: cat.color }))
      ).slice(0, 8)
    };
  }, [globalSearch, events, exploreArticles]);

  // ---- Accessibility -------------------------------------------------------
  // Search dialog: remember what opened it so focus can return there on close.
  const searchReturnFocus = useRef(null);
  const openSearchModal = () => {
    searchReturnFocus.current = typeof document !== "undefined" ? document.activeElement : null;
    setShowSearchModal(true);
  };
  const closeSearchModal = () => {
    setShowSearchModal(false);
    if (searchReturnFocus.current && searchReturnFocus.current.focus) searchReturnFocus.current.focus();
  };
  useEffect(() => {
    if (!showSearchModal) return undefined;
    const onKey = (e) => { if (e.key === "Escape") closeSearchModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showSearchModal]);

  // Views swap in place without a page load. Move focus to the top of the new
  // content so keyboard and screen reader users land where sighted users look.
  const firstViewRender = useRef(true);
  useEffect(() => {
    if (firstViewRender.current) { firstViewRender.current = false; return; }
    const el = document.getElementById("main-content");
    if (el) el.focus({ preventScroll: true });
  }, [page, selectedEvent, selectedPost, showEventForm, showPartnerForm, eventFormSubmitted, formSubmitted]);

  // Events that have their own page (/events/<slug>) open it. Older events without one
  // fall back to the in-page detail view.
  const openEvent = (event, fromOtherPage) => {
    const path = eventPath(event);
    if (path) { window.location.href = path; return; }
    setSelectedEvent(event);
    if (fromOtherPage) navigateTo("events");
  };
  const EventTitle = ({ event, fromOtherPage }) => {
    const path = eventPath(event);
    return path
      ? <a href={path} className="card-title-link" onClick={(ev) => ev.stopPropagation()}>{event.title}</a>
      : <button type="button" className="card-title-btn" onClick={(ev) => { ev.stopPropagation(); openEvent(event, fromOtherPage); }}>{event.title}</button>;
  };

  // Spoken confirmation for form results (the visual confirmation replaces the form).
  const liveMessage = formSubmitted
    ? "Thanks for reaching out. Your partnership request was sent."
    : eventFormSubmitted
    ? "Event submitted. Thanks for sharing it with us."
    : subscribeStatus === "success"
    ? "You're subscribed. Check your inbox to confirm."
    : subscribeStatus === "error"
    ? "Sorry, the signup did not go through. Please try again."
    : "";

  // Get current page SEO
  const currentSeo = PAGE_SEO[page] || PAGE_SEO.home;
  const structuredData = getStructuredData(page, events, exploreArticles);
  const currentYear = new Date().getFullYear();
  
  return (
    <div style={{ minHeight: "100vh", backgroundColor: darkMode ? colors.bodyBg : colors.cream, fontFamily: "system-ui, sans-serif", transition: "background-color 0.3s" }}>
      {/* Global Search Modal */}
      {showSearchModal && (
        <div className="r-padding" style={{ 
          position: "fixed", 
          inset: 0, 
          backgroundColor: "rgba(0,0,0,0.8)", 
          zIndex: 100, 
          display: "flex", 
          alignItems: "flex-start", 
          justifyContent: "center", 
          paddingTop: "100px",
          "--r-padding-m": "60px 16px", "--r-padding-t": "100px 16px", "--r-padding-d": "100px 16px"
        }} onClick={closeSearchModal}>
          <div role="dialog" aria-modal="true" aria-label="Search" onKeyDown={trapTab} style={{ 
            backgroundColor: darkMode ? colors.cardBg : colors.white, 
            borderRadius: "20px", 
            width: "100%", 
            maxWidth: "600px",
            maxHeight: "70vh",
            overflow: "hidden"
          }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: "20px", borderBottom: `1px solid ${darkMode ? "#333" : colors.beige}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icons.Search style={{ color: colors.tanDark }} />
                <input 
                  type="search" 
                  aria-label="Search events, guides and neighborhoods"
                  placeholder="Search events, guides, neighborhoods..." 
                  value={globalSearch}
                  onChange={e => setGlobalSearch(e.target.value)}
                  autoFocus
                  style={{ 
                    flex: 1, 
                    border: "none", 
                    padding: "6px 8px",
                    borderRadius: "8px",
                    fontSize: "18px", 
                    backgroundColor: "transparent",
                    color: darkMode ? colors.black : colors.green1
                  }} 
                />
                <button type="button" aria-label="Close search" onClick={closeSearchModal} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}>
                  <span aria-hidden="true" style={{ fontSize: "20px", color: colors.tanDark }}>✕</span>
                </button>
              </div>
            </div>
            <div aria-live="polite" style={{ padding: "20px", maxHeight: "50vh", overflowY: "auto" }}>
              {globalSearch.trim() ? (
                <>
                  {globalSearchResults.guides.length > 0 && (
                    <div style={{ marginBottom: "24px" }}>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: colors.yellowDark, letterSpacing: "2px", marginBottom: "12px" }}>GUIDES</p>
                      {globalSearchResults.guides.map((guide) => (
                        <a
                          key={guide.href}
                          href={guide.href}
                          onClick={() => { setShowSearchModal(false); setGlobalSearch(""); }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px",
                            borderRadius: "10px",
                            marginBottom: "8px",
                            textDecoration: "none",
                            backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : colors.cream,
                            transition: "background-color 0.2s"
                          }}
                          onMouseOver={e => e.currentTarget.style.backgroundColor = darkMode ? "rgba(255,255,255,0.1)" : colors.beige}
                          onMouseOut={e => e.currentTarget.style.backgroundColor = darkMode ? "rgba(255,255,255,0.05)" : colors.cream}
                        >
                          <span aria-hidden="true" style={{ fontSize: "24px" }}>{guide.icon}</span>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontWeight: "700", color: darkMode ? colors.black : colors.green1, marginBottom: "2px" }}>{guide.title}</p>
                            <p style={{ fontSize: "13px", color: colors.tanDark, margin: 0 }}>{guide.desc}</p>
                          </div>
                          <span style={{ backgroundColor: colors.green1, color: colors.cream, padding: "4px 10px", borderRadius: "50px", fontSize: "10px", fontWeight: "600", whiteSpace: "nowrap" }}>{guide.category}</span>
                        </a>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.events.length > 0 && (
                    <div style={{ marginBottom: "24px" }}>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: colors.yellowDark, letterSpacing: "2px", marginBottom: "12px" }}>EVENTS</p>
                      {globalSearchResults.events.map((event, i) => (
                        <div 
                          key={event.id || i} 
                          role="button"
                          tabIndex={0}
                          onKeyDown={onActivate(() => { setShowSearchModal(false); setGlobalSearch(""); openEvent(event, true); })}
                          onClick={() => { setShowSearchModal(false); setGlobalSearch(""); openEvent(event, true); }}
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
                          <p style={{ fontSize: "13px", color: colors.tanDark }}>{event.venueName} • {event.category}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.articles.length > 0 && (
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: colors.yellowDark, letterSpacing: "2px", marginBottom: "12px" }}>ARTICLES</p>
                      {globalSearchResults.articles.map((article, i) => (
                        <div 
                          key={article.id || i} 
                          role="button"
                          tabIndex={0}
                          onKeyDown={onActivate(() => { setSelectedPost(article); navigateTo("explore"); setShowSearchModal(false); setGlobalSearch(""); })}
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
                          <p style={{ fontSize: "13px", color: colors.tanDark }}>{article.type} {article.neighborhood ? `• ${article.neighborhood}` : ""}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.events.length === 0 && globalSearchResults.articles.length === 0 && globalSearchResults.guides.length === 0 && (
                    <div style={{ textAlign: "center", padding: "40px 20px" }}>
                      <span style={{ display: "flex", justifyContent: "center", marginBottom: "16px", color: colors.tanDark }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></span>
                      <p style={{ color: darkMode ? colors.black : colors.green1, fontWeight: "700", marginBottom: "8px" }}>No results found</p>
                      <p style={{ color: colors.tanDark, fontSize: "14px" }}>Try searching for something else</p>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <p style={{ color: colors.tanDark, fontSize: "14px" }}>Start typing to search...</p>
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
        <link rel="canonical" href={`https://www.discover-milwaukee.com${currentSeo.canonical}`} />
        
        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.png" />
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
        <meta property="og:url" content={`https://www.discover-milwaukee.com${currentSeo.canonical}`} />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Discover Milwaukee - Your Guide to Milwaukee Events & Things to Do" />
        
        {/* Twitter Card - Complete */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@discovermke" />
        <meta name="twitter:creator" content="@discovermke" />
        <meta name="twitter:title" content={currentSeo.title} />
        <meta name="twitter:description" content={currentSeo.description} />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Discover Milwaukee - Your Guide to Milwaukee Events & Things to Do" />
        
        {/* Additional SEO Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Discover MKE" />
        
        {/* Fonts are self-hosted and declared in globals.css. They are deliberately not preloaded:
            on slow connections a preload competed with the first paint (about 0.1s), and the
            size-matched fallback fonts already keep the layout still while they load. */}
        {/* Preconnect for Performance */}
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
      
      <Nav onSearchClick={openSearchModal} />

      <div className="sr-only" role="status" aria-live="polite">{liveMessage}</div>

      <main id="main-content" tabIndex={-1}>

      {/* HOME */}
      {page === "home" && (
        <div style={{ fontFamily: BODY_FONT, backgroundColor: c.cream }}>
          {/* ===== EDITORIAL HERO / MASTHEAD ===== */}
          <section className="r-padding" style={{ position: "relative", overflow: "hidden", backgroundColor: c.cream, "--r-padding-m": "40px 16px 0", "--r-padding-t": "76px 16px 0", "--r-padding-d": "76px 16px 0" }}>
            <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
              {/* Nameplate: real brand mark + kicker */}
              <div className="dm-fade-up r-marginBottom" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", "--r-marginBottom-m": "22px", "--r-marginBottom-t": "30px", "--r-marginBottom-d": "30px" }}>
                <img src="/images/discover-milwaukee-logo.png" alt="Discover Milwaukee" width="96" height="96" className="r-width" style={{ "--r-width-m": "72px", "--r-width-t": "96px", "--r-width-d": "96px", height: "auto" }} />
                <p className="r-fontSize" style={{ color: c.tanDark, "--r-fontSize-m": "10px", "--r-fontSize-t": "12px", "--r-fontSize-d": "12px", fontWeight: "600", letterSpacing: "4px", textTransform: "uppercase", margin: 0 }}>The Original Milwaukee Insider · Est. 2018</p>
              </div>

              {/* Masthead headline — Anton with a Damion script accent */}
              <h1 className="dm-fade-up dm-delay-1 r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "38px", "--r-fontSize-t": "70px", "--r-fontSize-d": "70px", fontWeight: "400", color: c.green1, lineHeight: 1.03, letterSpacing: "0.5px", textTransform: "uppercase", margin: "0 auto", maxWidth: "840px" }}>
                The insider's guide to a city worth{" "}
                <span className="r-fontSize" style={{ fontFamily: SCRIPT_FONT, color: c.blue2, textTransform: "none", "--r-fontSize-m": "46px", "--r-fontSize-t": "84px", "--r-fontSize-d": "84px", letterSpacing: 0 }}>knowing</span>
              </h1>

              {/* Subdeck */}
              <p className="dm-fade-up dm-delay-2 r-fontSize r-margin" style={{ color: c.green2Dark, "--r-fontSize-m": "16px", "--r-fontSize-t": "19px", "--r-fontSize-d": "19px", lineHeight: 1.6, "--r-margin-m": "20px auto 0", "--r-margin-t": "26px auto 0", "--r-margin-d": "26px auto 0", maxWidth: "560px" }}>
                The hidden gems, the local favorites, and the openings worth your Saturday — chosen by people who actually live here and delivered in one five-minute email each week.
              </p>

              {/* Single email capture */}
              <div className="dm-fade-up dm-delay-3 r-margin" style={{ "--r-margin-m": "26px auto 0", "--r-margin-t": "30px auto 0", "--r-margin-d": "30px auto 0", maxWidth: "480px" }}>
                {subscribeStatus === "success" ? (
                  <div style={{ backgroundColor: c.green1, borderRadius: "10px", padding: "18px 24px" }}>
                    <p style={{ color: c.yellow, fontSize: "15px", fontWeight: "700", margin: 0 }}>You're in. Check your inbox to confirm.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="r-flexDirection" style={{ display: "flex", "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row", gap: "10px" }}>
                    <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required aria-label="Email address" style={{ flex: 1, padding: "16px 18px", borderRadius: "10px", border: `1px solid ${c.beige}`, backgroundColor: c.white, fontSize: "15px", color: c.green1, fontFamily: BODY_FONT }} />
                    <button type="submit" disabled={subscribeStatus === "loading"} className="dm-cta" style={{ padding: "16px 30px", color: "#20291F", fontWeight: "700", border: "none", borderRadius: "10px", fontSize: "15px", whiteSpace: "nowrap", fontFamily: BODY_FONT, cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                      {subscribeStatus === "loading" ? "Joining…" : "Get the Guide"}
                    </button>
                  </form>
                )}
                <p style={{ color: c.tanDark, fontSize: "12.5px", marginTop: "12px", letterSpacing: "0.3px" }}>Free forever · Every Wednesday · One-click unsubscribe</p>
              </div>

              {/* Trust strip — canonical stats, hairline dividers */}
              <div className="dm-fade-up dm-delay-4 r-gap r-margin r-padding" style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", "--r-gap-m": "22px", "--r-gap-t": "44px", "--r-gap-d": "44px", "--r-margin-m": "30px auto 0", "--r-margin-t": "40px auto 0", "--r-margin-d": "40px auto 0", "--r-padding-m": "24px 22px", "--r-padding-t": "28px 44px", "--r-padding-d": "28px 44px", borderTop: `2px solid ${c.yellow}`, borderBottom: `2px solid ${c.yellow}` }}>
                {[
                  { n: "37.1M+", l: "views a year" },
                  { n: "99", l: "local guides" },
                  { n: "8 yrs", l: "covering MKE" }
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span aria-hidden="true" className="r-height" style={{ width: "1px", "--r-height-m": "44px", "--r-height-t": "56px", "--r-height-d": "56px", backgroundColor: c.beige }} />}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: c.green1, "--r-fontSize-m": "36px", "--r-fontSize-t": "52px", "--r-fontSize-d": "52px", lineHeight: 1 }}>{s.n}</span>
                      <span className="r-fontSize" style={{ color: c.tanDark, "--r-fontSize-m": "12px", "--r-fontSize-t": "13px", "--r-fontSize-d": "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "8px" }}>{s.l}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* What you'll get — three points, custom line icons */}
              <div className="r-gridTemplateColumns r-gap r-margin" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(3, 1fr)", "--r-gridTemplateColumns-d": "repeat(3, 1fr)", "--r-gap-m": "20px", "--r-gap-t": "28px", "--r-gap-d": "28px", "--r-margin-m": "34px auto 0", "--r-margin-t": "48px auto 0", "--r-margin-d": "48px auto 0", maxWidth: "780px", textAlign: "left" }}>
                {[
                  { Icon: LineIcons.Sparkle, title: "Curated, not cluttered", desc: "We filter the noise so you don't have to." },
                  { Icon: LineIcons.Pin, title: "Actually local", desc: "Written by people who live here and go to these places." },
                  { Icon: LineIcons.Bolt, title: "A five-minute read", desc: "Just the highlights, every single week." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: c.blue2, flexShrink: 0, marginTop: "1px" }}><item.Icon size={26} /></span>
                    <div>
                      <h2 style={{ color: c.green1, fontSize: "15px", fontWeight: "700", marginBottom: "4px", fontFamily: BODY_FONT }}>{item.title}</h2>
                      <p style={{ color: c.tanDark, fontSize: "13.5px", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brands & partners CTA — prominent inquiry panel */}
              <div className="r-margin r-padding" style={{ "--r-margin-m": "40px auto 0", "--r-margin-t": "56px auto 0", "--r-margin-d": "56px auto 0", maxWidth: "640px", backgroundColor: c.green1, borderRadius: "16px", "--r-padding-m": "30px 22px", "--r-padding-t": "40px 44px", "--r-padding-d": "40px 44px", textAlign: "center" }}>
                <p className="r-fontSize" style={{ color: "#F1AF38", "--r-fontSize-m": "11px", "--r-fontSize-t": "12px", "--r-fontSize-d": "12px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 12px" }}>For Brands &amp; Partners</p>
                <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: c.cream, "--r-fontSize-m": "26px", "--r-fontSize-t": "36px", "--r-fontSize-d": "36px", fontWeight: "400", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.05, margin: "0 0 14px" }}>Reach 37.1M+ views a year</h2>
                <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", lineHeight: 1.6, margin: "0 auto 26px", maxWidth: "460px" }}>Put your brand in front of Milwaukee's most engaged local audience. Let's talk about working together.</p>
                <button onClick={() => { window.location.href = "/milwaukee-media-kit"; }} className="dm-cta r-padding r-fontSize" style={{ "--r-padding-m": "16px 30px", "--r-padding-t": "18px 40px", "--r-padding-d": "18px 40px", color: "#20291F", fontWeight: "700", border: "none", borderRadius: "50px", "--r-fontSize-m": "16px", "--r-fontSize-t": "17px", "--r-fontSize-d": "17px", cursor: "pointer", fontFamily: BODY_FONT }}>
                  Inquire About Partnering →
                </button>
              </div>
            </div>
          </section>

          {/* PROMOTED EVENTS */}
          <section className="r-padding" style={{ "--r-padding-m": "56px 16px", "--r-padding-t": "84px 16px", "--r-padding-d": "84px 16px", backgroundColor: c.white }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {/* Editorial section header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", borderBottom: `1px solid ${c.beige}`, paddingBottom: "20px", marginBottom: "36px" }}>
                <div>
                  <p style={{ color: c.orangeDark, fontSize: "12px", fontWeight: "600", letterSpacing: "3px", marginBottom: "10px", textTransform: "uppercase" }}>The Agenda</p>
                  <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "30px", "--r-fontSize-t": "46px", "--r-fontSize-d": "46px", fontWeight: "400", color: c.green1, textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1, margin: 0 }}>This Week in Milwaukee</h2>
                </div>
                {/* Sponsor */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: c.tanDark, fontSize: "10px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px" }}>Presented by</span>
                  <a href="https://nicoletlaw.com" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/nicolet-law-logo.png" alt="Nicolet Law - Accident & Injury Lawyers" style={{ height: "28px", width: "auto" }} />
                  </a>
                </div>
              </div>
              <div className="r-gridTemplateColumns r-gap" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(2, 1fr)", "--r-gridTemplateColumns-d": "repeat(4, 1fr)", "--r-gap-m": "16px", "--r-gap-t": "24px", "--r-gap-d": "24px" }}>
                {(() => {
                  // Get this week's events, prioritizing featured ones
                  const thisWeekEvents = getThisWeekEvents(events);
                  const featuredThisWeek = thisWeekEvents.filter(e => e.featured);
                  const displayEvents = featuredThisWeek.length >= 4
                    ? featuredThisWeek.slice(0, 4)
                    : [...featuredThisWeek, ...thisWeekEvents.filter(e => !e.featured)].slice(0, 4);
                  return displayEvents;
                })().map((event, i) => {
                  const eventCategoryIcons = {
                    "Arts": LineIcons.Palette, "Sports": LineIcons.Basketball, "Food & Drink": LineIcons.Cocktail, "Comedy": LineIcons.Mic,
                    "Live Music": LineIcons.Music, "Family": LineIcons.Users, "Nightlife": LineIcons.Moon, "Outdoors": LineIcons.Tree,
                    "Fitness": LineIcons.Dumbbell, "Shopping": LineIcons.Bag
                  };
                  const EventIcon = eventCategoryIcons[event.category] || LineIcons.Calendar;
                  const eventDate = new Date(event.startDateTime);
                  const dateStr = eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                  const timeStr = event.allDay ? "All Day" : eventDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
                  return (
                    <div key={event.id || i} onClick={() => openEvent(event, true)} className="dm-card" style={{ backgroundColor: c.cream, borderRadius: "12px", padding: "22px", cursor: "pointer", border: `1px solid ${c.beige}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <span style={{ color: c.green1 }}><EventIcon size={30} /></span>
                        <span style={{ color: c.tanDark, fontSize: "10px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "4px" }}>{event.category}</span>
                      </div>
                      <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px", lineHeight: 1.3, fontFamily: BODY_FONT }}><EventTitle event={event} fromOtherPage /></h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: "3px", borderTop: `1px solid ${c.beige}`, paddingTop: "12px" }}>
                        <p style={{ color: c.green2Dark, fontSize: "13px", fontWeight: "600" }}>{dateStr} · {timeStr}</p>
                        <p style={{ color: c.tanDark, fontSize: "12px" }}>{event.venueName}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ textAlign: "center", marginTop: "36px" }}>
                <button onClick={() => navigateTo("events")} style={{ padding: "13px 30px", backgroundColor: "transparent", color: c.green1, borderRadius: "8px", border: `1.5px solid ${c.green1}`, cursor: "pointer", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: BODY_FONT, transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.backgroundColor = c.green1; e.currentTarget.style.color = c.cream; }} onMouseOut={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = c.green1; }}>
                  View All Events →
                </button>
              </div>
            </div>
          </section>

          {/* POPULAR GUIDES - Internal Linking for SEO */}
          <section className="r-padding" style={{ "--r-padding-m": "56px 16px", "--r-padding-t": "84px 16px", "--r-padding-d": "84px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {/* Editorial section header */}
              <div style={{ borderBottom: `1px solid ${c.beige}`, paddingBottom: "20px", marginBottom: "32px" }}>
                <p style={{ color: c.orangeDark, fontSize: "12px", fontWeight: "600", letterSpacing: "3px", marginBottom: "10px", textTransform: "uppercase" }}>99 Local Guides</p>
                <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "30px", "--r-fontSize-t": "46px", "--r-fontSize-d": "46px", fontWeight: "400", color: c.green1, textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1, margin: "0 0 10px" }}>Explore Milwaukee</h2>
                <p style={{ color: c.tanDark, fontSize: "16px", margin: 0 }}>In-depth guides written by locals, updated for 2026.</p>
              </div>

              {/* Category Quick Links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                {[
                  { title: "Food & Dining", Icon: LineIcons.Utensils },
                  { title: "Bars & Nightlife", Icon: LineIcons.Cocktail },
                  { title: "Activities", Icon: LineIcons.Ticket },
                  { title: "Neighborhoods", Icon: LineIcons.Buildings },
                  { title: "Weekend Guides", Icon: LineIcons.Calendar },
                ].map((cat, i) => (
                  <a
                    key={i}
                    href="/explore"
                    onClick={(e) => { e.preventDefault(); navigateTo("explore"); }}
                    style={{ display: "flex", alignItems: "center", gap: "9px", padding: "10px 18px", backgroundColor: c.white, color: c.green1, border: `1px solid ${c.beige}`, borderRadius: "50px", textDecoration: "none", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = c.green1; e.currentTarget.style.color = c.cream; e.currentTarget.style.borderColor = c.green1; }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = c.white; e.currentTarget.style.color = c.green1; e.currentTarget.style.borderColor = c.beige; }}
                  >
                    <span style={{ display: "flex", color: "inherit" }}><cat.Icon size={18} /></span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "inherit", fontFamily: BODY_FONT }}>{cat.title}</span>
                  </a>
                ))}
              </div>

              {/* Featured Guides Grid */}
              <div className="r-gridTemplateColumns r-gap" style={{ display: "grid", "--r-gridTemplateColumns-m": "repeat(2, 1fr)", "--r-gridTemplateColumns-t": "repeat(3, 1fr)", "--r-gridTemplateColumns-d": "repeat(4, 1fr)", "--r-gap-m": "12px", "--r-gap-t": "16px", "--r-gap-d": "16px", marginBottom: "28px" }}>
                {[
                  { title: "Things to Do", desc: "Complete activity guide", href: "/things-to-do-milwaukee", Icon: LineIcons.Compass },
                  { title: "Best Restaurants", desc: "Top dining spots", href: "/best-restaurants-milwaukee", Icon: LineIcons.Utensils },
                  { title: "Best Tacos", desc: "Taco spots ranked", href: "/best-tacos-milwaukee", Icon: LineIcons.Taco },
                  { title: "Best Pizza", desc: "Pizza guide", href: "/best-pizza-milwaukee", Icon: LineIcons.Pizza },
                  { title: "Best Dive Bars", desc: "Classic dives", href: "/best-dive-bars-milwaukee", Icon: LineIcons.BeerMug },
                  { title: "Cocktail Bars", desc: "Craft cocktails", href: "/best-cocktail-bars-milwaukee", Icon: LineIcons.Cocktail },
                  { title: "Live Music", desc: "Where to see shows", href: "/live-music-milwaukee", Icon: LineIcons.Music },
                  { title: "Hidden Gems", desc: "Secret local spots", href: "/hidden-gems-milwaukee", Icon: LineIcons.Gem },
                  { title: "Day Trips", desc: "Nearby escapes", href: "/day-trips-milwaukee", Icon: LineIcons.Car },
                  { title: "Rainy Day", desc: "Indoor activities", href: "/rainy-day-milwaukee", Icon: LineIcons.Umbrella },
                  { title: "Dog Friendly", desc: "Pet-friendly spots", href: "/dog-friendly-milwaukee", Icon: LineIcons.Paw },
                  { title: "This Week", desc: "Events calendar", href: "/events", Icon: LineIcons.Calendar },
                ].map((guide, i) => (
                  <a key={i} href={guide.href} className="dm-card" style={{ backgroundColor: c.white, borderRadius: "12px", padding: "22px 20px", textDecoration: "none", border: `1px solid ${c.beige}`, display: "block" }}>
                    <span style={{ color: c.green1, display: "block", marginBottom: "14px" }}><guide.Icon size={30} /></span>
                    <h3 style={{ color: c.green1, fontSize: "15px", fontWeight: "700", marginBottom: "4px", fontFamily: BODY_FONT }}>{guide.title}</h3>
                    <p style={{ color: c.tanDark, fontSize: "13px", margin: 0 }}>{guide.desc}</p>
                  </a>
                ))}
              </div>

              {/* Browse All Guides Button */}
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <button
                  onClick={() => navigateTo("explore")}
                  style={{ padding: "14px 32px", backgroundColor: c.green1, color: c.cream, borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: BODY_FONT }}
                >
                  Browse All 99 Guides →
                </button>
              </div>

              {/* Neighborhood Links */}
              <div style={{ borderTop: `1px solid ${c.beige}`, paddingTop: "28px" }}>
                <p style={{ color: c.tanDark, fontSize: "12px", fontWeight: "600", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "2px" }}>Explore by Neighborhood</p>
                <div className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "repeat(2, 1fr)", "--r-gridTemplateColumns-t": "repeat(4, 1fr)", "--r-gridTemplateColumns-d": "repeat(4, 1fr)", gap: "10px" }}>
                  {[
                    { title: "Third Ward", href: "/third-ward-milwaukee" },
                    { title: "Bay View", href: "/bay-view-milwaukee" },
                    { title: "Walker's Point", href: "/walkers-point-milwaukee" },
                    { title: "East Side", href: "/east-side-milwaukee" },
                    { title: "Downtown", href: "/downtown-milwaukee" },
                    { title: "Riverwest", href: "/riverwest-milwaukee" },
                    { title: "Brady Street", href: "/brady-street-milwaukee" },
                    { title: "South Side", href: "/south-side-milwaukee" },
                  ].map((hood, i) => (
                    <a key={i} href={hood.href} style={{ backgroundColor: c.white, color: c.green1, padding: "13px 16px", borderRadius: "8px", border: `1px solid ${c.beige}`, textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s", fontFamily: BODY_FONT }} onMouseOver={e => { e.currentTarget.style.backgroundColor = c.green1; e.currentTarget.style.color = c.cream; }} onMouseOut={e => { e.currentTarget.style.backgroundColor = c.white; e.currentTarget.style.color = c.green1; }}>
                      <span>{hood.title}</span><span aria-hidden="true" style={{ color: c.yellow }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF — reach the city actually gives us */}
          <section className="r-padding" style={{ "--r-padding-m": "54px 16px", "--r-padding-t": "80px 16px", "--r-padding-d": "80px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <p style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px", textTransform: "uppercase" }}>Trusted Across Milwaukee</p>
                <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: c.cream, "--r-fontSize-m": "30px", "--r-fontSize-t": "44px", "--r-fontSize-d": "44px", fontWeight: "400", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>The City Is Already Watching</h2>
                <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "15px", "--r-fontSize-t": "17px", "--r-fontSize-d": "17px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>37.1 million views a year from locals who use us to decide where to actually go.</p>
              </div>

              {/* Reach breakdown — canonical numbers */}
              <div className="r-gridTemplateColumns r-gap" style={{ display: "grid", "--r-gridTemplateColumns-m": "repeat(2, 1fr)", "--r-gridTemplateColumns-t": "repeat(4, 1fr)", "--r-gridTemplateColumns-d": "repeat(4, 1fr)", "--r-gap-m": "12px", "--r-gap-t": "18px", "--r-gap-d": "18px", marginBottom: "16px" }}>
                {[
                  { n: "Instagram", v: "13.4M" },
                  { n: "Facebook", v: "19.5M*" },
                  { n: "TikTok", v: "4.2M" },
                  { n: "Total Reach", v: "37.1M" }
                ].map((p, i) => (
                  <div key={p.n} className={`dm-fade-up dm-delay-${i + 1} r-padding`} style={{ backgroundColor: p.n === "Total Reach" ? "rgba(240,166,35,0.12)" : "rgba(255,255,255,0.06)", borderRadius: "16px", "--r-padding-m": "18px", "--r-padding-t": "26px", "--r-padding-d": "26px", textAlign: "center", border: p.n === "Total Reach" ? `2px solid ${c.yellow}` : "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: p.n === "Total Reach" ? c.yellow : c.cream, "--r-fontSize-m": "26px", "--r-fontSize-t": "36px", "--r-fontSize-d": "36px", lineHeight: 1 }}>{p.v}</div>
                    <div style={{ color: c.beige, fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginTop: "8px" }}>{p.n}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: c.beige, fontSize: "11px", textAlign: "center", opacity: 0.9, marginBottom: "44px" }}>Views per year across our channels. *Facebook projected from 11/25 onward.</p>

              {/* Secondary conversion — lock in a subscriber */}
              <div className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "16px", "--r-padding-m": "28px 22px", "--r-padding-t": "44px", "--r-padding-d": "44px", textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
                <h3 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: c.cream, "--r-fontSize-m": "26px", "--r-fontSize-t": "34px", "--r-fontSize-d": "34px", fontWeight: "400", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>Get the good stuff first</h3>
                <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "15px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "460px", marginLeft: "auto", marginRight: "auto" }}>Join the locals who get Milwaukee's best each week — new spots, events, and hidden gems in one five-minute email.</p>
                {subscribeStatus === "success" ? (
                  <div style={{ backgroundColor: "rgba(255,255,255,0.12)", borderRadius: "10px", padding: "16px 24px", maxWidth: "460px", margin: "0 auto" }}>
                    <p style={{ color: c.yellow, fontSize: "15px", fontWeight: "700", margin: 0 }}>You're in. Check your inbox to confirm.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="r-flexDirection" style={{ display: "flex", "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row", gap: "10px", maxWidth: "460px", margin: "0 auto" }}>
                    <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required aria-label="Email address" style={{ flex: 1, padding: "16px 18px", borderRadius: "10px", border: "none", fontSize: "15px", fontFamily: BODY_FONT, color: c.green1 }} />
                    <button type="submit" disabled={subscribeStatus === "loading"} className="dm-cta" style={{ padding: "16px 30px", color: "#20291F", fontWeight: "700", border: "none", borderRadius: "10px", fontSize: "15px", whiteSpace: "nowrap", fontFamily: BODY_FONT, cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                      {subscribeStatus === "loading" ? "Joining…" : "Get the Guide"}
                    </button>
                  </form>
                )}
                <p style={{ color: c.beige, fontSize: "12px", opacity: 0.9, marginTop: "14px" }}>Free forever · Every Wednesday · One-click unsubscribe</p>
              </div>
            </div>
          </section>

          <section className="r-padding" style={{ "--r-padding-m": "56px 16px", "--r-padding-t": "80px 16px", "--r-padding-d": "80px 16px", backgroundColor: c.white }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(3, 1fr)", "--r-gridTemplateColumns-d": "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
                {[{ l: "Explore", d: "Guides & local favorites", Icon: LineIcons.BookOpen, p: "explore", href: "/explore" }, { l: "Events", d: "What's happening this week", Icon: LineIcons.Calendar, p: "events", href: "/events" }, { l: "Newsletter", d: "Get the weekly scoop", Icon: LineIcons.Mail, p: "newsletter", href: "/newsletter" }].map(x => (
                  <a key={x.l} href={x.href} onClick={(e) => { e.preventDefault(); navigateTo(x.p); }} className="dm-card r-padding" style={{ backgroundColor: c.cream, borderRadius: "12px", "--r-padding-m": "22px", "--r-padding-t": "28px", "--r-padding-d": "28px", cursor: "pointer", textDecoration: "none", display: "block", border: `1px solid ${c.beige}` }}>
                    <span style={{ color: c.green1, display: "block", marginBottom: "14px" }}><x.Icon size={30} /></span>
                    <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "6px", fontFamily: BODY_FONT }}>{x.l}</h3>
                    <p style={{ color: c.tanDark, fontSize: "14px", margin: 0 }}>{x.d}</p>
                  </a>
                ))}
              </div>
              <a
                href="/partner"
                onClick={(e) => { e.preventDefault(); navigateTo("partner"); }}
                style={{ backgroundColor: c.green1, borderRadius: "12px", padding: "24px 28px", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}
              >
                <span style={{ color: c.yellow, display: "flex" }}><LineIcons.Briefcase size={26} /></span>
                <h3 style={{ color: c.cream, fontSize: "18px", fontWeight: "700", margin: 0, fontFamily: BODY_FONT }}>Partner With Us</h3>
                <span aria-hidden="true" style={{ color: c.yellow, fontSize: "14px", fontWeight: "600" }}>→</span>
              </a>
            </div>
          </section>
        </div>
      )}

      {/* EXPLORE */}
      {page === "explore" && !selectedPost && (
        <div style={{ fontFamily: BODY_FONT }}>
          <section className="r-padding" style={{ backgroundColor: c.cream, "--r-padding-m": "48px 16px 36px", "--r-padding-t": "76px 16px 52px", "--r-padding-d": "76px 16px 52px", borderBottom: `1px solid ${c.beige}` }}>
            <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
              <p className="r-fontSize" style={{ color: c.orangeDark, "--r-fontSize-m": "11px", "--r-fontSize-t": "12px", "--r-fontSize-d": "12px", fontWeight: "600", letterSpacing: "4px", marginBottom: "16px", textTransform: "uppercase" }}>YOUR MILWAUKEE ENCYCLOPEDIA</p>
              <h1 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "40px", "--r-fontSize-t": "68px", "--r-fontSize-d": "68px", fontWeight: "400", color: c.green1, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.02 }}>Explore Milwaukee</h1>
              <p className="r-fontSize" style={{ "--r-fontSize-m": "16px", "--r-fontSize-t": "19px", "--r-fontSize-d": "19px", color: c.blue2Dark, fontWeight: "600", marginBottom: "18px", letterSpacing: "0.3px" }}>Guides, Lists & Local Knowledge</p>
              <p className="r-fontSize" style={{ color: c.green2Dark, "--r-fontSize-m": "16px", "--r-fontSize-t": "18px", "--r-fontSize-d": "18px", lineHeight: 1.6, maxWidth: "580px", margin: "0 auto" }}>The definitive resource for things to do, places to eat, and neighborhoods to explore in Milwaukee. Written by locals, updated regularly.</p>
            </div>
          </section>
          
          {/* Pillar Pages Section */}
          <section className="r-padding" style={{ "--r-padding-m": "32px 16px", "--r-padding-t": "48px 16px", "--r-padding-d": "48px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <p style={{ color: c.orangeDark, fontSize: "12px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>Start Here</p>
                <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "28px", "--r-fontSize-t": "40px", "--r-fontSize-d": "40px", fontWeight: "400", color: c.green1, textTransform: "uppercase", letterSpacing: "0.5px", margin: 0 }}>Essential Milwaukee Guides</h2>
              </div>
              <div className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(2, 1fr)", "--r-gridTemplateColumns-d": "repeat(2, 1fr)", gap: "20px", marginBottom: "20px" }}>
                {exploreArticles.filter(p => p.isPillar).slice(0, 4).map((p, i) => {
                  const bg = [c.green1, c.blue1, c.orangeDark, c.green2Dark][i % 4];
                  return (
                  <div key={p.id} onClick={() => setSelectedPost(p)} className="r-padding r-minHeight" style={{ backgroundColor: bg, borderRadius: "16px", "--r-padding-m": "24px", "--r-padding-t": "32px", "--r-padding-d": "32px", cursor: "pointer", display: "flex", flexDirection: "column", "--r-minHeight-m": "auto", "--r-minHeight-t": "200px", "--r-minHeight-d": "200px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <span style={{ color: c.cream }}><LineIcons.BookOpen size={28} /></span>
                      <span style={{ border: "1px solid rgba(247,241,231,0.4)", color: c.cream, padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Pillar Guide</span>
                    </div>
                    <h3 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: c.cream, "--r-fontSize-m": "20px", "--r-fontSize-t": "26px", "--r-fontSize-d": "26px", fontWeight: "400", marginBottom: "10px", lineHeight: 1.1, textTransform: "uppercase", letterSpacing: "0.3px" }}><button type="button" className="card-title-btn" onClick={(ev) => { ev.stopPropagation(); setSelectedPost(p); }}>{p.title}</button></h3>
                    <p style={{ color: c.cream, fontSize: "14px", lineHeight: 1.5, flex: 1 }}>{p.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
                      <span style={{ color: c.cream, fontSize: "12px" }}>{p.readTimeMinutes} min read</span>
                      <span style={{ color: c.cream, fontSize: "14px", fontWeight: "700" }}>Read Full Guide →</span>
                    </div>
                  </div>
                  );
                })}
              </div>
              {/* Fifth pillar as full width */}
              {exploreArticles.filter(p => p.isPillar)[4] && (
                <div onClick={() => setSelectedPost(exploreArticles.filter(p => p.isPillar)[4])} className="r-padding" style={{ backgroundColor: c.blue2Dark, borderRadius: "16px", "--r-padding-m": "24px", "--r-padding-t": "32px", "--r-padding-d": "32px", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px" }}>
                  <span style={{ color: c.cream, flexShrink: 0 }}><LineIcons.BookOpen size={isMobile ? 32 : 44} /></span>
                  <div style={{ flex: 1 }}>
                    <span style={{ border: "1px solid rgba(247,241,231,0.4)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Pillar Guide</span>
                    <h3 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: "#FFFFFF", "--r-fontSize-m": "20px", "--r-fontSize-t": "26px", "--r-fontSize-d": "26px", fontWeight: "400", margin: "10px 0", lineHeight: 1.1, textTransform: "uppercase", letterSpacing: "0.3px" }}><button type="button" className="card-title-btn" onClick={(ev) => { ev.stopPropagation(); setSelectedPost(exploreArticles.filter(p => p.isPillar)[4]); }}>{exploreArticles.filter(p => p.isPillar)[4].title}</button></h3>
                    <p style={{ color: c.cream, fontSize: "14px", lineHeight: 1.5 }}>{exploreArticles.filter(p => p.isPillar)[4].excerpt}</p>
                  </div>
                  <span style={{ color: c.cream, fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>Read Guide →</span>
                </div>
              )}
            </div>
          </section>

          {/* CATEGORY-BASED GUIDE SECTIONS */}
          {GUIDE_CATEGORIES.map((category, catIndex) => {
            const isExpanded = expandedCategories[category.id];
            const visibleGuides = isExpanded ? category.guides : category.guides.slice(0, isMobile ? 4 : 6);
            const hasMore = category.guides.length > (isMobile ? 4 : 6);
            const isFirstOfGroup = catIndex === 0 || GUIDE_CATEGORIES[catIndex - 1].group !== category.group;
            const meta = catMeta(category.id);
            const accent = c[meta.ck];
            // Same hue, darkened: used wherever text sits on, or is drawn in, the accent color.
            const accentAA = c[meta.ck + "Dark"] || accent;

            return (
              <React.Fragment key={category.id}>
              {isFirstOfGroup && (
                <div className="r-padding" style={{
                  "--r-padding-m": "28px 16px 0", "--r-padding-t": "44px 16px 0", "--r-padding-d": "44px 16px 0",
                  backgroundColor: catIndex % 2 === 0 ? c.white : c.cream
                }}>
                  <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ height: "3px", width: "32px", flex: "0 0 32px", backgroundColor: c.yellow, borderRadius: "2px" }} />
                    <h2 className="r-fontSize" style={{ "--r-fontSize-m": "13px", "--r-fontSize-t": "15px", "--r-fontSize-d": "15px", fontWeight: "900", color: c.green2Dark, letterSpacing: "2px", textTransform: "uppercase", margin: 0, whiteSpace: "nowrap" }}>
                      {category.group}
                    </h2>
                    <span style={{ height: "3px", flex: 1, backgroundColor: c.beige, borderRadius: "2px" }} />
                  </div>
                </div>
              )}
              <section
                id={category.id}
                className="r-padding" style={{
                  "--r-padding-m": "32px 16px", "--r-padding-t": "48px 16px", "--r-padding-d": "48px 16px",
                  backgroundColor: catIndex % 2 === 0 ? c.white : c.cream,
                  scrollMarginTop: "90px"
                }}
              >
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                  {/* Category Header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <span style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: accent,
                        color: c.cream,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <meta.Icon size={26} />
                      </span>
                      <div>
                        <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "22px", "--r-fontSize-t": "30px", "--r-fontSize-d": "30px", fontWeight: "400", color: c.green1, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.4px", lineHeight: 1.05 }}>
                          {category.title}
                        </h2>
                        <p style={{ color: c.tanDark, fontSize: "14px", margin: 0 }}>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span style={{
                      backgroundColor: accentAA,
                      color: c.cream,
                      padding: "6px 14px",
                      borderRadius: "50px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      {category.guides.length} guides
                    </span>
                  </div>

                  {/* Guide Cards Grid */}
                  <div className="r-gridTemplateColumns" style={{
                    display: "grid",
                    "--r-gridTemplateColumns-m": "repeat(2, 1fr)", "--r-gridTemplateColumns-t": "repeat(3, 1fr)", "--r-gridTemplateColumns-d": "repeat(6, 1fr)",
                    gap: "12px",
                    marginBottom: hasMore ? "20px" : "0"
                  }}>
                    {visibleGuides.map((guide, idx) => (
                      <a
                        key={guide.href}
                        href={guide.href}
                        style={{
                          backgroundColor: catIndex % 2 === 0 ? c.cream : c.white,
                          borderRadius: "12px",
                          padding: "16px",
                          textDecoration: "none",
                          display: "block",
                          transition: "all 0.2s",
                          border: `2px solid transparent`
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
                          e.currentTarget.style.borderColor = accent;
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor = "transparent";
                        }}
                      >
                        <span style={{ display: "block", width: "22px", height: "3px", borderRadius: "2px", backgroundColor: accent, marginBottom: "12px" }} />
                        <h3 style={{ color: c.green1, fontSize: "14px", fontWeight: "700", marginBottom: "4px", lineHeight: 1.3 }}>
                          {guide.title}
                        </h3>
                        <p style={{ color: c.tanDark, fontSize: "12px", margin: 0 }}>{guide.desc}</p>
                      </a>
                    ))}
                  </div>

                  {/* See All / Show Less Button */}
                  {hasMore && (
                    <div style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        aria-expanded={!!isExpanded}
                        onClick={() => toggleCategory(category.id)}
                        style={{
                          padding: "10px 24px",
                          backgroundColor: "transparent",
                          color: accentAA,
                          borderRadius: "50px",
                          border: `2px solid ${accentAA}`,
                          cursor: "pointer",
                          fontWeight: "700",
                          fontSize: "13px",
                          transition: "all 0.2s"
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.backgroundColor = accentAA;
                          e.currentTarget.style.color = c.cream;
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = accentAA;
                        }}
                      >
                        {isExpanded ? "Show Less" : `See All ${category.guides.length} Guides`} <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
                      </button>
                    </div>
                  )}
                </div>
              </section>
              </React.Fragment>
            );
          })}

          {/* Search Section */}
          <section style={{ padding: "48px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "26px", "--r-fontSize-t": "38px", "--r-fontSize-d": "38px", fontWeight: "400", color: c.cream, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Looking for Something Specific?
              </h2>
              <p style={{ color: c.beige, fontSize: "16px", marginBottom: "24px" }}>
                Search all {GUIDE_CATEGORIES.reduce((sum, cat) => sum + cat.guides.length, 0)}+ guides
              </p>
              <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
                <span style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", color: c.tan, fontSize: "18px" }}>
                  <Icons.Search />
                </span>
                <input
                  type="search"
                  aria-label="Search guides"
                  placeholder="Search guides (e.g., tacos, dive bars, Third Ward...)"
                  value={exploreSearch}
                  onChange={e => setExploreSearch(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "16px 20px 16px 52px",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "16px",
                    backgroundColor: c.cream,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
                  }}
                />
              </div>

              {/* Search Results */}
              <div aria-live="polite">
              {exploreSearch && (
                <div style={{ marginTop: "24px", textAlign: "left" }}>
                  {(() => {
                    const searchLower = exploreSearch.toLowerCase();
                    const matchingGuides = GUIDE_CATEGORIES.flatMap(cat =>
                      cat.guides.filter(g =>
                        g.title.toLowerCase().includes(searchLower) ||
                        g.desc.toLowerCase().includes(searchLower)
                      ).map(g => ({ ...g, category: cat.title, categoryColor: c[catMeta(cat.id).ck + "Dark"] || c[catMeta(cat.id).ck] }))
                    );

                    if (matchingGuides.length === 0) {
                      return (
                        <p style={{ color: c.beige, textAlign: "center", padding: "20px" }}>
                          No guides found for "{exploreSearch}". Try another search term.
                        </p>
                      );
                    }

                    return (
                      <div style={{
                        backgroundColor: c.cream,
                        borderRadius: "16px",
                        padding: "16px",
                        maxHeight: "300px",
                        overflowY: "auto"
                      }}>
                        <p style={{ color: c.tanDark, fontSize: "13px", marginBottom: "12px" }}>
                          {matchingGuides.length} result{matchingGuides.length !== 1 ? "s" : ""} found
                        </p>
                        {matchingGuides.map(guide => (
                          <a
                            key={guide.href}
                            href={guide.href}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "12px",
                              backgroundColor: c.white,
                              borderRadius: "10px",
                              marginBottom: "8px",
                              textDecoration: "none",
                              transition: "transform 0.2s"
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = "translateX(4px)"}
                            onMouseOut={e => e.currentTarget.style.transform = "translateX(0)"}
                          >
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: guide.categoryColor, flexShrink: 0 }} />
                            <div style={{ flex: 1 }}>
                              <h3 style={{ color: c.green1, fontSize: "15px", fontWeight: "700", marginBottom: "2px" }}>
                                {guide.title}
                              </h3>
                              <p style={{ color: c.tanDark, fontSize: "12px", margin: 0 }}>{guide.desc}</p>
                            </div>
                            <span style={{
                              backgroundColor: guide.categoryColor,
                              color: c.cream,
                              padding: "4px 10px",
                              borderRadius: "50px",
                              fontSize: "10px",
                              fontWeight: "600"
                            }}>
                              {guide.category}
                            </span>
                          </a>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section style={{ padding: "40px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="r-gridTemplateColumns" style={{
                display: "grid",
                "--r-gridTemplateColumns-m": "repeat(2, 1fr)", "--r-gridTemplateColumns-t": "repeat(auto-fit, minmax(150px, 1fr))", "--r-gridTemplateColumns-d": "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "16px",
                textAlign: "center"
              }}>
                {GUIDE_CATEGORIES.map(cat => {
                  const m = catMeta(cat.id);
                  const a = c[m.ck];
                  return (
                  <div
                    key={cat.id}
                    style={{
                      backgroundColor: c.white,
                      borderRadius: "12px",
                      padding: "22px 16px",
                      borderLeft: `4px solid ${a}`
                    }}
                  >
                    <span style={{ color: a, display: "inline-flex", marginBottom: "10px" }}><m.Icon size={26} /></span>
                    <p style={{ fontFamily: DISPLAY_FONT, color: c.green1, fontSize: "34px", fontWeight: "400", marginBottom: "4px", lineHeight: 1 }}>
                      {cat.guides.length}
                    </p>
                    <p style={{ color: c.tanDark, fontSize: "12px", margin: 0 }}>{cat.title}</p>
                  </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
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
                <span aria-hidden="true" style={{ fontSize: "48px" }}>{selectedPost.icon}</span>
                <div>
                  <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.white, padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase" }}>{selectedPost.isPillar ? "Pillar Guide" : selectedPost.type}</span>
                  {selectedPost.lastUpdated && <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", marginLeft: "12px" }}>Updated {selectedPost.lastUpdated}</span>}
                </div>
              </div>
              <h1 style={{ color: c.white, fontSize: "36px", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>{selectedPost.title}</h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>{selectedPost.excerpt}</p>
              <div style={{ display: "flex", gap: "16px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
                <span><span aria-hidden="true">📖 </span>{selectedPost.readTimeMinutes} min read</span>
                {selectedPost.tags && <span><span aria-hidden="true">🏷️ </span><span className="sr-only">Topics: </span>{selectedPost.tags.slice(0, 3).join(", ")}</span>}
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
                        <p key={idx} style={{ marginBottom: "16px", color: c.tanDark }}>
                          {paragraph.split('**').map((part, j) => 
                            j % 2 === 1 ? <strong key={j} style={{ fontWeight: "700", color: c.green1 }}>{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    // Regular paragraphs
                    return <p key={idx} style={{ marginBottom: "16px", color: c.tanDark }}>{paragraph}</p>;
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
                <div className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(2, 1fr)", "--r-gridTemplateColumns-d": "repeat(2, 1fr)", gap: "16px" }}>
                  {exploreArticles.filter(p => p.slug === selectedPost.parentSlug || p.parentSlug === selectedPost.parentSlug).filter(p => p.id !== selectedPost.id).slice(0, 4).map(p => (
                    <div key={p.id} onClick={() => { setSelectedPost(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ backgroundColor: c.white, borderRadius: "12px", padding: "16px", cursor: "pointer", display: "flex", gap: "12px", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                      <span aria-hidden="true" style={{ fontSize: "28px" }}>{p.icon}</span>
                      <div>
                        <h4 style={{ color: c.green1, fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}><button type="button" className="card-title-btn" onClick={(ev) => { ev.stopPropagation(); setSelectedPost(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{p.title}</button></h4>
                        <span style={{ color: c.tan, fontSize: "12px" }}>{p.readTimeMinutes} min read</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Newsletter CTA */}
            <div className="r-padding" style={{ marginTop: "48px", backgroundColor: c.green1, borderRadius: "20px", "--r-padding-m": "24px", "--r-padding-t": "32px", "--r-padding-d": "32px", textAlign: "center" }}>
              <h3 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "18px", "--r-fontSize-t": "22px", "--r-fontSize-d": "22px", fontWeight: "900", marginBottom: "12px" }}>Get More Milwaukee Tips</h3>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "20px" }}>Join our weekly newsletter for the best events, new restaurants, and local favorites.</p>
              {subscribeStatus === "success" ? (
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "14px 24px", maxWidth: "400px", margin: "0 auto" }}>
                  <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", margin: 0 }}><span aria-hidden="true">✓ </span>You're in! Check your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="r-flexDirection" style={{ display: "flex", "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row", gap: "12px", maxWidth: "400px", margin: "0 auto" }}>
                  <input type="email" aria-label="Email address" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "14px 18px", borderRadius: "50px", border: "none", fontSize: "14px" }} />
                  <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "14px 24px", backgroundColor: c.yellow, color: "#294D32", fontWeight: "bold", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
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
        <div style={{ fontFamily: BODY_FONT }}>
          {/* Sizes that differ by screen width live in CSS (pg-hero-* in globals.css), not in
              isMobile, so the server-rendered page is already the right size on phones. */}
          <section className="pg-hero" style={{ backgroundColor: c.cream, borderBottom: `1px solid ${c.beige}` }}>
            <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
              <p className="pg-hero-kicker" style={{ color: c.orangeDark, fontWeight: "600", letterSpacing: "4px", marginBottom: "16px", textTransform: "uppercase" }}>WHAT'S HAPPENING</p>
              <h1 className="pg-hero-title" style={{ fontFamily: DISPLAY_FONT, fontWeight: "400", color: c.green1, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.02 }}>Milwaukee Events</h1>
              <p className="pg-hero-sub" style={{ color: c.blue2Dark, fontWeight: "600", marginBottom: "18px", letterSpacing: "0.3px" }}>Your Social Calendar, Handled.</p>
              <p className="pg-hero-lede" style={{ color: c.green2Dark, lineHeight: 1.6, maxWidth: "580px", margin: "0 auto 24px" }}>Stop scrolling through Facebook events. We curate the stuff actually worth leaving your couch for.</p>
              {/* Sponsor */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: c.white, padding: "12px 24px", borderRadius: "50px", border: `1px solid ${c.beige}` }}>
                <span style={{ color: c.tanDark, fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px" }}>Presented by</span>
                <a href="https://nicoletlaw.com" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/nicolet-law-logo.png" alt="Nicolet Law - Accident & Injury Lawyers" style={{ height: "32px", width: "auto" }} />
                </a>
              </div>
            </div>
          </section>
          <section style={{ padding: "24px 16px", backgroundColor: c.cream, borderBottom: `1px solid ${c.beige}` }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "16px" }}>
                <button type="button" aria-label="Previous week" onClick={goToPrevWeek} style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: c.white, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icons.ChevronLeft /></button>
                <span aria-live="polite" style={{ color: c.green1, fontWeight: "700", fontSize: "15px", minWidth: "200px", textAlign: "center" }}>Week of {formatDate(selectedWeek, "short")} – {formatDate(getSunday(selectedWeek), "short")}</span>
                <button type="button" aria-label="Next week" onClick={goToNextWeek} style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: c.white, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icons.ChevronRight /></button>
                <button onClick={goToThisWeek} style={{ padding: "8px 16px", borderRadius: "50px", backgroundColor: c.yellow, color: "#294D32", border: "none", fontWeight: "600", fontSize: "13px", cursor: "pointer" }}>This Week</button>
              </div>
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <div style={{ flex: 1, maxWidth: "320px", position: "relative" }}>
                  <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: c.tan }}><Icons.Search /></span>
                  <input type="search" aria-label="Search events" placeholder="Search events..." value={eventsSearch} onChange={e => setEventsSearch(e.target.value)} style={{ width: "100%", padding: "12px 16px 12px 44px", borderRadius: "50px", border: `2px solid ${c.beige}`, fontSize: "14px" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {categories.map(cat => (
                  <button key={cat} type="button" aria-pressed={eventsCategory === cat} onClick={() => setEventsCategory(cat)} style={{ padding: "8px 14px", borderRadius: "50px", border: "none", backgroundColor: eventsCategory === cat ? c.green1 : c.white, color: eventsCategory === cat ? c.cream : c.green1, fontWeight: "600", fontSize: "12px", cursor: "pointer" }}>{cat}</button>
                ))}
              </div>
            </div>
          </section>
          <section style={{ padding: "40px 16px 80px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {(() => {
                const eventCategoryIcons = {
                  "Arts": LineIcons.Palette, "Sports": LineIcons.Basketball, "Food & Drink": LineIcons.Cocktail, "Comedy": LineIcons.Mic,
                  "Live Music": LineIcons.Music, "Family": LineIcons.Users, "Nightlife": LineIcons.Moon, "Outdoors": LineIcons.Tree,
                  "Fitness": LineIcons.Dumbbell, "Shopping": LineIcons.Bag
                };
                const eventCategoryColors = {
                  "Arts": c.tan, "Sports": c.orange, "Food & Drink": c.orange, "Comedy": c.blue3,
                  "Live Music": c.blue2, "Family": c.green2, "Nightlife": c.blue1, "Outdoors": c.green2,
                  "Fitness": c.green1, "Shopping": c.blue3
                };
                return Object.values(eventsByDay).map(({ date, events }) => (
                  <div key={date.toDateString()} style={{ marginBottom: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <h2 style={{ backgroundColor: isSameDay(date, new Date()) ? c.orangeDark : c.green1, color: c.cream, padding: "6px 14px", borderRadius: "50px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.5, margin: 0 }}>{formatDate(date, "day")}</h2>
                      {isSameDay(date, new Date()) && <span style={{ color: c.orangeDark, fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>Today</span>}
                      <span style={{ color: c.tanDark, fontSize: "12px", fontWeight: "600" }}>{events.length} {events.length === 1 ? "event" : "events"}</span>
                      <span style={{ flex: 1, height: "1px", backgroundColor: c.beige }} />
                    </div>
                    {events.length > 0 ? (
                      <div className="ev-grid">
                        {events.map(e => {
                          const EventIcon = eventCategoryIcons[e.category] || LineIcons.Calendar;
                          const accent = eventCategoryColors[e.category] || c.green1;
                          return (
                            <div key={e.id} onClick={() => openEvent(e, false)} className="dm-card" style={{ backgroundColor: c.white, borderRadius: "12px", padding: "22px", cursor: "pointer", border: `1px solid ${c.beige}`, borderLeft: `3px solid ${accent}` }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                                <span style={{ color: accent }}><EventIcon size={28} /></span>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                  {e.featured && <span style={{ color: c.orangeDark, fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>Featured</span>}
                                  <span style={{ color: c.tanDark, fontSize: "10px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px" }}>{e.category}</span>
                                </div>
                              </div>
                              <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "8px", lineHeight: 1.3, fontFamily: BODY_FONT }}><EventTitle event={e} /></h3>
                              <p style={{ color: c.tanDark, fontSize: "13px", lineHeight: 1.45, marginBottom: "14px" }}>{e.shortDescription}</p>
                              <div style={{ display: "flex", flexDirection: "column", gap: "5px", borderTop: `1px solid ${c.beige}`, paddingTop: "12px" }}>
                                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}><Icons.Clock />{e.allDay ? "All Day" : formatDate(e.startDateTime, "time")}<span style={{ color: c.tanDark, fontWeight: "500" }}>· {e.costType === "free" ? "Free" : "Ticketed"}</span></p>
                                <p style={{ color: c.tanDark, fontSize: "12px", display: "flex", alignItems: "center", gap: "6px" }}><Icons.MapPin />{e.venueName}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div style={{ backgroundColor: c.white, borderRadius: "12px", padding: "24px", textAlign: "center", border: `1px solid ${c.beige}` }}>
                        <p style={{ color: c.tanDark, fontSize: "14px" }}>No events added yet for this day.</p>
                      </div>
                    )}
                  </div>
                ));
              })()}
            </div>
          </section>
          <section className="r-padding" style={{ "--r-padding-m": "48px 16px", "--r-padding-t": "72px 16px", "--r-padding-d": "72px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <p className="r-fontSize" style={{ color: "#F1AF38", "--r-fontSize-m": "11px", "--r-fontSize-t": "12px", "--r-fontSize-d": "12px", fontWeight: "600", letterSpacing: "3px", marginBottom: "14px", textTransform: "uppercase" }}>Get On The Calendar</p>
              <h2 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, "--r-fontSize-m": "30px", "--r-fontSize-t": "44px", "--r-fontSize-d": "44px", fontWeight: "400", color: c.cream, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.05 }}>Have an Event to Share?</h2>
              <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "15px", "--r-fontSize-t": "17px", "--r-fontSize-d": "17px", lineHeight: 1.6, marginBottom: "28px" }}>Hosting something the city should know about? Get it in front of 37.1M+ views.</p>
              <button onClick={() => { setShowEventForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="dm-cta r-padding r-fontSize" style={{ display: "inline-block", "--r-padding-m": "16px 32px", "--r-padding-t": "18px 40px", "--r-padding-d": "18px 40px", color: "#20291F", fontWeight: "700", borderRadius: "50px", border: "none", cursor: "pointer", "--r-fontSize-m": "15px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px" }}>Submit Your Event →</button>
            </div>
          </section>
        </div>
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
                  <span aria-hidden="true" style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>📅</span>
                  <h1 style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "12px", textTransform: "uppercase" }}>Submit Your Event</h1>
                  <p style={{ color: c.tanDark, fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>Get your event in front of Milwaukee's most engaged audience. We review submissions daily.</p>
                </div>

                <form onSubmit={handleEventSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {/* Contact Info */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">👤</span> Your Information
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label htmlFor="ev-submitterName" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Your Name *</label>
                        <input id="ev-submitterName" type="text" required value={eventForm.submitterName} onChange={(e) => handleEventFormChange("submitterName", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div>
                        <label htmlFor="ev-submitterEmail" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Email *</label>
                        <input id="ev-submitterEmail" type="email" required value={eventForm.submitterEmail} onChange={(e) => handleEventFormChange("submitterEmail", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div style={{ gridColumn: "span 2" }}>
                        <label htmlFor="ev-submitterPhone" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Phone (optional)</label>
                        <input id="ev-submitterPhone" type="tel" value={eventForm.submitterPhone} onChange={(e) => handleEventFormChange("submitterPhone", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">🎉</span> Event Details
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label htmlFor="ev-title" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Event Title *</label>
                        <input id="ev-title" type="text" required value={eventForm.title} onChange={(e) => handleEventFormChange("title", e.target.value)} placeholder="e.g., Third Ward Art Walk" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label htmlFor="ev-venueName" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Venue Name *</label>
                          <input id="ev-venueName" type="text" required value={eventForm.venueName} onChange={(e) => handleEventFormChange("venueName", e.target.value)} placeholder="e.g., Fiserv Forum" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                        <div>
                          <label htmlFor="ev-neighborhood" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Neighborhood *</label>
                          <select id="ev-neighborhood" required value={eventForm.neighborhood} onChange={(e) => handleEventFormChange("neighborhood", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
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
                        <label htmlFor="ev-venueAddress" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Venue Address (optional)</label>
                        <input id="ev-venueAddress" type="text" value={eventForm.venueAddress} onChange={(e) => handleEventFormChange("venueAddress", e.target.value)} placeholder="123 N Water St, Milwaukee, WI" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">🕐</span> Date & Time
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                        <input type="checkbox" checked={eventForm.allDay} onChange={(e) => handleEventFormChange("allDay", e.target.checked)} style={{ width: "20px", height: "20px", accentColor: c.green1 }} />
                        <span style={{ fontSize: "14px", fontWeight: "600", color: c.green1 }}>This is an all-day event</span>
                      </label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label htmlFor="ev-startDate" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Start Date *</label>
                          <input id="ev-startDate" type="date" required value={eventForm.startDate} onChange={(e) => handleEventFormChange("startDate", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                        {!eventForm.allDay && (
                          <div>
                            <label htmlFor="ev-startTime" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Start Time *</label>
                            <input id="ev-startTime" type="time" required={!eventForm.allDay} value={eventForm.startTime} onChange={(e) => handleEventFormChange("startTime", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                          </div>
                        )}
                        <div>
                          <label htmlFor="ev-endDate" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>End Date (if multi-day)</label>
                          <input id="ev-endDate" type="date" value={eventForm.endDate} onChange={(e) => handleEventFormChange("endDate", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                        {!eventForm.allDay && (
                          <div>
                            <label htmlFor="ev-endTime" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>End Time</label>
                            <input id="ev-endTime" type="time" value={eventForm.endTime} onChange={(e) => handleEventFormChange("endTime", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Category & Cost */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">🏷️</span> Category & Cost
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label htmlFor="ev-category" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Category *</label>
                        <select id="ev-category" required value={eventForm.category} onChange={(e) => handleEventFormChange("category", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
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
                        <span id="ev-tags-label" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "12px" }}>Tags (select all that apply)</span>
                        <div role="group" aria-labelledby="ev-tags-label" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
                          <label htmlFor="ev-costType" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Cost Type *</label>
                          <select id="ev-costType" required value={eventForm.costType} onChange={(e) => handleEventFormChange("costType", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                            <option value="free">Free</option>
                            <option value="paid">Paid</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="ev-costDetails" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Cost Details *</label>
                          <input id="ev-costDetails" type="text" required value={eventForm.costDetails} onChange={(e) => handleEventFormChange("costDetails", e.target.value)} placeholder={eventForm.costType === "free" ? "Free" : "e.g., $15, $25-50"} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">📝</span> Description
                    </h2>
                    <div>
                      <label htmlFor="ev-shortDescription" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Short Description *</label>
                      <p style={{ fontSize: "12px", color: c.tanDark, marginBottom: "10px" }}>1-2 sentences that capture what makes this event worth attending.</p>
                      <textarea id="ev-shortDescription" required value={eventForm.shortDescription} onChange={(e) => handleEventFormChange("shortDescription", e.target.value)} rows={3} placeholder="e.g., Free gallery walk featuring local artists, wine tastings, and good vibes." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, resize: "vertical", fontFamily: "inherit" }} />
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">🔗</span> Links (Optional)
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label htmlFor="ev-website" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Event Website or Info Page</label>
                        <input id="ev-website" type="url" value={eventForm.website} onChange={(e) => handleEventFormChange("website", e.target.value)} placeholder="https://..." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div>
                        <label htmlFor="ev-ticketLink" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Ticket Link</label>
                        <input id="ev-ticketLink" type="url" value={eventForm.ticketLink} onChange={(e) => handleEventFormChange("ticketLink", e.target.value)} placeholder="https://..." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                      <div>
                        <label htmlFor="ev-notes" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Anything else we should know?</label>
                        <textarea id="ev-notes" value={eventForm.notes} onChange={(e) => handleEventFormChange("notes", e.target.value)} rows={3} placeholder="Special instructions, recurring event info, etc." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, resize: "vertical", fontFamily: "inherit" }} />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <p style={{ fontSize: "13px", color: c.tanDark, marginBottom: "20px" }}>We review submissions daily and will reach out if we need more info.</p>
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
                  <span aria-hidden="true" style={{ fontSize: "40px", color: c.cream }}>✓</span>
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
                <span style={{ backgroundColor: c.yellow, color: "#294D32", padding: "6px 14px", borderRadius: "50px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase" }}>{selectedEvent.category}</span>
                <span style={{ backgroundColor: selectedEvent.costType === "free" ? c.green2 : "rgba(255,255,255,0.2)", color: c.white, padding: "6px 14px", borderRadius: "50px", fontSize: "12px", fontWeight: "700" }}>{selectedEvent.costDetails || (selectedEvent.costType === "free" ? "Free" : "Ticketed")}</span>
              </div>
              <h1 className="r-fontSize" style={{ fontFamily: DISPLAY_FONT, color: c.cream, "--r-fontSize-m": "30px", "--r-fontSize-t": "44px", "--r-fontSize-d": "44px", fontWeight: "400", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.05 }}>{selectedEvent.title}</h1>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", color: c.beige, fontSize: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Icons.Clock />{selectedEvent.allDay ? "All Day" : `${formatDate(selectedEvent.startDateTime, "time")} - ${formatDate(selectedEvent.endDateTime, "time")}`}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Icons.MapPin />{selectedEvent.venueName}{selectedEvent.neighborhood ? `, ${selectedEvent.neighborhood}` : ""}</span>
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
          <section className="r-padding" style={{ background: `linear-gradient(135deg, ${c.green1} 0%, #355130 100%)`, "--r-padding-m": "50px 16px", "--r-padding-t": "80px 16px", "--r-padding-d": "80px 16px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ color: "#F1AF38", fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>THE INSIDE SCOOP</p>
              <h1 className="r-fontSize" style={{ "--r-fontSize-m": "32px", "--r-fontSize-t": "40px", "--r-fontSize-d": "40px", fontWeight: "900", color: c.cream, marginBottom: "16px", textTransform: "uppercase", lineHeight: 1.1 }}>The Discover Milwaukee Newsletter</h1>
              <p className="r-fontSize" style={{ "--r-fontSize-m": "18px", "--r-fontSize-t": "20px", "--r-fontSize-d": "20px", color: "#F1AF38", fontWeight: "600", marginBottom: "20px" }}>Milwaukee's Best Stuff. In Your Inbox. Every Wednesday.</p>
              <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 32px" }}>Look, we get it. Your inbox is a warzone. But this one's different. No fluff. No filler. Just the stuff actually worth knowing about in Milwaukee, delivered once a week.</p>
              
              {/* Email Signup Form at Top */}
              {subscribeStatus === "success" ? (
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "18px 28px", maxWidth: "500px", margin: "0 auto" }}>
                  <p style={{ color: c.yellow, fontSize: "16px", fontWeight: "700", margin: 0 }}><span aria-hidden="true">✓ </span>You're in! Check your inbox to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="r-flexDirection" style={{ display: "flex", "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row", gap: "12px", maxWidth: "500px", margin: "0 auto" }}>
                  <input type="email" aria-label="Email address" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "18px 24px", borderRadius: "50px", border: "none", fontSize: "16px" }} />
                  <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "18px 32px", backgroundColor: c.yellow, color: "#294D32", fontWeight: "bold", fontSize: "16px", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                    {subscribeStatus === "loading" ? "..." : "Subscribe Free"}
                  </button>
                </form>
              )}
              <p style={{ color: c.beige, fontSize: "13px", marginTop: "12px", opacity: 0.8 }}>Join 10,000+ Milwaukee insiders. Unsubscribe anytime.</p>
            </div>
          </section>
          
          <section className="r-padding" style={{ "--r-padding-m": "40px 16px", "--r-padding-t": "60px 16px", "--r-padding-d": "60px 16px", backgroundColor: c.cream }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 className="r-fontSize" style={{ "--r-fontSize-m": "24px", "--r-fontSize-t": "28px", "--r-fontSize-d": "28px", fontWeight: "900", color: c.green1, textAlign: "center", marginBottom: "32px" }}>What You'll Get (And What You Won't)</h2>
              <div className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(2, 1fr)", "--r-gridTemplateColumns-d": "repeat(2, 1fr)", gap: "16px" }}>
                {[
                  { i: "✅", t: "The Week's Best Events", d: "Curated picks for what's actually worth your time." },
                  { i: "✅", t: "New Restaurant & Bar Alerts", d: "Be the first to know what just opened." },
                  { i: "✅", t: "Hidden Gems & Local Favorites", d: "The spots your friends don't know about yet." },
                  { i: "✅", t: "Seasonal Guides", d: "Best patios, holiday markets, summer festivals." },
                  { i: "❌", t: "Spam", d: "We send once a week. That's it." },
                  { i: "❌", t: "Boring Corporate Content", d: "No stock photos. No PR fluff." }
                ].map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: c.white, borderRadius: "14px", padding: "20px", display: "flex", gap: "14px" }}>
                    <span role="img" aria-label={item.i === "✅" ? "Included:" : "Not included:"} style={{ fontSize: "22px" }}>{item.i}</span>
                    <div>
                      <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{item.t}</h3>
                      <p style={{ color: c.tanDark, fontSize: "13px" }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "60px 16px", backgroundColor: c.green1 }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "900", color: c.cream, textAlign: "center", marginBottom: "12px" }}>Why People Actually Read This One</h2>
              <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", textAlign: "center", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>We're not trying to be everything to everyone. Just the go-to source for people who want to know what's happening in Milwaukee without doing the research themselves.</p>
              
              <div className="r-gridTemplateColumns r-gap" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(3, 1fr)", "--r-gridTemplateColumns-d": "repeat(3, 1fr)", "--r-gap-m": "12px", "--r-gap-t": "20px", "--r-gap-d": "20px", marginBottom: "40px" }}>
                {[
                  { icon: "🎯", title: "Curated, Not Cluttered", desc: "We filter through the noise so you don't have to." },
                  { icon: "📍", title: "Actually Local", desc: "Written by people who live here and go to these places." },
                  { icon: "⚡", title: "Quick Read", desc: "Get the highlights in 5 minutes or less." }
                ].map((item, i) => (
                  <div key={i} className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "14px", "--r-padding-m": "16px", "--r-padding-t": "24px", "--r-padding-d": "24px", textAlign: "center" }}>
                    <span aria-hidden="true" className="r-fontSize" style={{ "--r-fontSize-m": "28px", "--r-fontSize-t": "32px", "--r-fontSize-d": "32px", display: "block", marginBottom: "12px" }}>{item.icon}</span>
                    <h3 style={{ color: c.cream, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ color: c.beige, fontSize: "13px", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", "--r-padding-m": "20px", "--r-padding-t": "28px", "--r-padding-d": "28px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "16px", "--r-fontSize-t": "18px", "--r-fontSize-d": "18px", fontWeight: "700", marginBottom: "16px", textAlign: "center" }}>Here's What a Typical Issue Looks Like</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "🎉 This Week's Must-Do Events (5-7 picks)",
                    "🍽️ Restaurant or Bar Spotlight",
                    "📍 Neighborhood Feature or Guide",
                    "🆓 Free Thing to Do This Week",
                    "📸 Quick Hits from Instagram"
                  ].map((item, i) => (
                    <div key={i} className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "15px", "--r-fontSize-d": "15px", padding: "12px 16px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="r-padding" style={{ "--r-padding-m": "50px 16px", "--r-padding-t": "80px 16px", "--r-padding-d": "80px 16px", backgroundColor: c.blue1 }}>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="r-fontSize" style={{ "--r-fontSize-m": "26px", "--r-fontSize-t": "32px", "--r-fontSize-d": "32px", fontWeight: "900", color: c.cream, marginBottom: "16px", textTransform: "uppercase" }}>Stop Missing the Good Stuff</h2>
              <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", marginBottom: "32px" }}>One email. Once a week. Everything worth knowing about Milwaukee.</p>
              {subscribeStatus === "success" ? (
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "16px 24px", maxWidth: "460px", margin: "0 auto 16px" }}>
                  <p style={{ color: c.yellow, fontSize: "15px", fontWeight: "700", margin: 0 }}><span aria-hidden="true">✓ </span>You're in! Check your inbox to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="r-flexDirection" style={{ display: "flex", "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row", gap: "12px", maxWidth: "460px", margin: "0 auto 16px" }}>
                  <input type="email" aria-label="Email address" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, padding: "16px 20px", borderRadius: "50px", border: "none", fontSize: "15px" }} />
                  <button type="submit" disabled={subscribeStatus === "loading"} style={{ padding: "16px 28px", backgroundColor: c.yellow, color: "#294D32", fontWeight: "bold", border: "none", borderRadius: "50px", cursor: subscribeStatus === "loading" ? "wait" : "pointer", opacity: subscribeStatus === "loading" ? 0.7 : 1 }}>
                    {subscribeStatus === "loading" ? "..." : "Subscribe Free"}
                  </button>
                </form>
              )}
              <p style={{ color: "#A3D2DE", fontSize: "13px" }}>Delivered every Wednesday. No spam. Unsubscribe anytime.</p>
            </div>
          </section>
        </>
      )}

      {/* PARTNER */}
      {page === "partner" && !showPartnerForm && (
        <section className="r-padding" style={{ "--r-padding-m": "40px 16px", "--r-padding-t": "80px 16px", "--r-padding-d": "80px 16px", backgroundColor: c.green1 }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div className="r-marginBottom" style={{ textAlign: "center", "--r-marginBottom-m": "32px", "--r-marginBottom-t": "48px", "--r-marginBottom-d": "48px" }}>
              <p className="r-fontSize" style={{ color: "#F1AF38", "--r-fontSize-m": "12px", "--r-fontSize-t": "14px", "--r-fontSize-d": "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>GROW WITH US</p>
              <h1 className="r-fontSize" style={{ "--r-fontSize-m": "28px", "--r-fontSize-t": "40px", "--r-fontSize-d": "40px", fontWeight: "900", color: c.cream, marginBottom: "16px", textTransform: "uppercase" }}>Partner With Discover Milwaukee</h1>
              <p className="r-fontSize" style={{ "--r-fontSize-m": "16px", "--r-fontSize-t": "18px", "--r-fontSize-d": "18px", color: c.beige, maxWidth: "650px", margin: "0 auto" }}>Get your brand in front of the Milwaukee locals who actually show up.</p>
            </div>
            <div className="r-padding r-marginBottom" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", "--r-padding-m": "20px", "--r-padding-t": "32px", "--r-padding-d": "32px", "--r-marginBottom-m": "32px", "--r-marginBottom-t": "48px", "--r-marginBottom-d": "48px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "15px", "--r-fontSize-t": "17px", "--r-fontSize-d": "17px", lineHeight: 1.7, textAlign: "center" }}>Discover Milwaukee isn't a billboard. We're where Milwaukee goes to decide where to eat, drink, hang out, and spend money. If your brand wants attention from real people, you're in the right place.</p>
            </div>

            {/* TOP CTA — reachable without scrolling */}
            <div className="r-marginBottom" style={{ textAlign: "center", "--r-marginBottom-m": "36px", "--r-marginBottom-t": "56px", "--r-marginBottom-d": "56px" }}>
              <button onClick={() => { setShowPartnerForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="r-padding r-fontSize" style={{ display: "inline-block", "--r-padding-m": "16px 32px", "--r-padding-t": "18px 44px", "--r-padding-d": "18px 44px", backgroundColor: c.yellow, color: "#294D32", borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "900", "--r-fontSize-m": "15px", "--r-fontSize-t": "17px", "--r-fontSize-d": "17px", textTransform: "uppercase", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
                Start Your Partnership →
              </button>
              <p style={{ color: c.beige, fontSize: "13px", marginTop: "12px" }}>Takes about a minute · No commitment</p>
              <p style={{ marginTop: "16px", fontSize: "14px" }}>
                <a href="/milwaukee-media-kit" style={{ color: "#F1AF38", fontWeight: "700", textDecoration: "none", margin: "0 10px" }}>View the Media Kit</a>
                <a href="/milwaukee-influencer-marketing" style={{ color: "#F1AF38", fontWeight: "700", textDecoration: "none", margin: "0 10px" }}>Milwaukee Marketing Guide</a>
              </p>
            </div>

            {/* BRANDS WE'VE WORKED WITH */}
            <div className="r-marginBottom" style={{ "--r-marginBottom-m": "32px", "--r-marginBottom-t": "48px", "--r-marginBottom-d": "48px" }}>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <p style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px", textTransform: "uppercase" }}>They Took the Leap. It Paid Off.</p>
                <h2 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "22px", "--r-fontSize-t": "28px", "--r-fontSize-d": "28px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px" }}>Brands That Trust Us</h2>
                <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "15px", "--r-fontSize-d": "15px", maxWidth: "500px", margin: "0 auto" }}>From neighborhood gems to household names — here's who's shown up with us.</p>
              </div>
              <div className="r-gap r-padding" style={{ 
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                "--r-gap-m": "8px", "--r-gap-t": "12px", "--r-gap-d": "12px",
                "--r-padding-m": "12px", "--r-padding-t": "24px", "--r-padding-d": "24px",
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
                      className="r-width r-height r-borderRadius r-padding" style={{ 
                        "--r-width-m": "50px", "--r-width-t": "80px", "--r-width-d": "80px",
                        "--r-height-m": "50px", "--r-height-t": "80px", "--r-height-d": "80px",
                        backgroundColor: "rgba(255,255,255,0.95)", 
                        "--r-borderRadius-m": "8px", "--r-borderRadius-t": "10px", "--r-borderRadius-d": "10px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        "--r-padding-m": "6px", "--r-padding-t": "8px", "--r-padding-d": "8px",
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
                        <span className="r-fontSize" style={{ color: c.green1, "--r-fontSize-m": "6px", "--r-fontSize-t": "10px", "--r-fontSize-d": "10px", fontWeight: "700", textAlign: "center", padding: "2px" }}>{partner.name}</span>
                      )}
                    </a>
                  ))
                ) : (
                  Array.from({ length: isMobile ? 10 : 10 }, (_, i) => (
                    <div 
                      key={i} 
                      className="r-width r-height r-borderRadius" style={{ 
                        "--r-width-m": "50px", "--r-width-t": "80px", "--r-width-d": "80px",
                        "--r-height-m": "50px", "--r-height-t": "80px", "--r-height-d": "80px",
                        backgroundColor: "rgba(255,255,255,0.08)", 
                        "--r-borderRadius-m": "8px", "--r-borderRadius-t": "10px", "--r-borderRadius-d": "10px", 
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
                      <span className="r-fontSize" style={{ color: "rgba(255,255,255,0.3)", "--r-fontSize-m": "6px", "--r-fontSize-t": "10px", "--r-fontSize-d": "10px", fontWeight: "600" }}>LOGO</span>
                    </div>
                  ))
                )}
              </div>
              <p style={{ color: c.beige, fontSize: "13px", textAlign: "center", marginTop: "16px", fontStyle: "italic" }}>{partners.length > 0 ? `${partners.length} brands and counting.` : "Your logo could be here. Just saying."}</p>
            </div>
            <div className="r-marginBottom" style={{ "--r-marginBottom-m": "32px", "--r-marginBottom-t": "48px", "--r-marginBottom-d": "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <span aria-hidden="true" style={{ fontSize: "24px" }}>🚀</span>
                <h2 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "20px", "--r-fontSize-t": "24px", "--r-fontSize-d": "24px", fontWeight: "900", textTransform: "uppercase" }}>The Reach</h2>
              </div>
              <div className="r-padding" style={{ textAlign: "center", "--r-padding-m": "24px", "--r-padding-t": "36px", "--r-padding-d": "36px", background: `linear-gradient(135deg, ${c.yellow} 0%, #D87437 100%)`, borderRadius: "20px", marginBottom: "24px" }}>
                <div className="r-fontSize" style={{ "--r-fontSize-m": "36px", "--r-fontSize-t": "56px", "--r-fontSize-d": "56px", fontWeight: "900", color: "#20291F" }}>37.1 MILLION</div>
                <div className="r-fontSize" style={{ "--r-fontSize-m": "14px", "--r-fontSize-t": "18px", "--r-fontSize-d": "18px", color: "#20291F", fontWeight: "700", letterSpacing: "2px" }}>VIEWS IN 2025</div>
              </div>
              <div className="r-gridTemplateColumns r-gap" style={{ display: "grid", "--r-gridTemplateColumns-m": "repeat(2, 1fr)", "--r-gridTemplateColumns-t": "repeat(4, 1fr)", "--r-gridTemplateColumns-d": "repeat(4, 1fr)", "--r-gap-m": "10px", "--r-gap-t": "14px", "--r-gap-d": "14px" }}>
                {[{ n: "Instagram", v: "13.4M" }, { n: "Facebook", v: "19.5M*" }, { n: "TikTok", v: "4.2M" }, { n: "TOTAL", v: "37.1M" }].map(p => (
                  <div key={p.n} className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "14px", "--r-padding-m": "14px", "--r-padding-t": "20px", "--r-padding-d": "20px", textAlign: "center", border: p.n === "TOTAL" ? `2px solid ${c.yellow}` : "none" }}>
                    <div className="r-fontSize" style={{ color: p.n === "TOTAL" ? c.yellow : c.cream, "--r-fontSize-m": "20px", "--r-fontSize-t": "26px", "--r-fontSize-d": "26px", fontWeight: "900" }}>{p.v}</div>
                    <div style={{ color: c.beige, fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>{p.n}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: c.beige, fontSize: "11px", textAlign: "center", marginTop: "12px", opacity: 0.9 }}>*Projected based on numbers from 11/25 onward</p>
              
              {/* Quick CTA Box */}
              <div 
                onClick={() => { setShowPartnerForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="r-padding r-flexDirection r-alignItems r-gap" style={{ 
                  marginTop: "24px",
                  background: `linear-gradient(135deg, ${c.yellow} 0%, #D87437 100%)`,
                  borderRadius: "16px", 
                  "--r-padding-m": "16px 20px", "--r-padding-t": "24px 32px", "--r-padding-d": "24px 32px", 
                  cursor: "pointer",
                  display: "flex",
                  "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row",
                  "--r-alignItems-m": "flex-start", "--r-alignItems-t": "center", "--r-alignItems-d": "center",
                  justifyContent: "space-between",
                  "--r-gap-m": "12px", "--r-gap-t": "0", "--r-gap-d": "0",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span aria-hidden="true" className="r-fontSize" style={{ "--r-fontSize-m": "24px", "--r-fontSize-t": "28px", "--r-fontSize-d": "28px" }}>🚀</span>
                  <div>
                    <h3 className="r-fontSize" style={{ color: "#20291F", "--r-fontSize-m": "16px", "--r-fontSize-t": "20px", "--r-fontSize-d": "20px", fontWeight: "900", margin: 0 }}><button type="button" className="card-title-btn" onClick={(ev) => { ev.stopPropagation(); setShowPartnerForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>I've Seen Enough, Let's Partner</button></h3>
                    <p className="r-fontSize" style={{ color: "#20291F", "--r-fontSize-m": "12px", "--r-fontSize-t": "14px", "--r-fontSize-d": "14px", margin: 0 }}>Skip ahead and fill out our quick intake form</p>
                  </div>
                </div>
                <span aria-hidden="true" className="r-alignSelf" style={{ color: "#20291F", fontSize: "24px", fontWeight: "900", "--r-alignSelf-m": "flex-end", "--r-alignSelf-t": "center", "--r-alignSelf-d": "center" }}>→</span>
              </div>
            </div>

            {/* WHY PARTNER WITH US — what partnering actually does */}
            <div className="r-marginBottom" style={{ "--r-marginBottom-m": "32px", "--r-marginBottom-t": "48px", "--r-marginBottom-d": "48px" }}>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <p style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px", textTransform: "uppercase" }}>What Partnering Actually Does</p>
                <h2 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "24px", "--r-fontSize-t": "32px", "--r-fontSize-d": "32px", fontWeight: "900", textTransform: "uppercase", marginBottom: "10px" }}>When We Post, Milwaukee Moves</h2>
                <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "15px", "--r-fontSize-t": "17px", "--r-fontSize-d": "17px", maxWidth: "620px", margin: "0 auto", lineHeight: 1.6 }}>Not impressions. Not "engagement." Real people walking in, booking, and buying — that week.</p>
              </div>
              <div className="r-gridTemplateColumns r-gap" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "repeat(3, 1fr)", "--r-gridTemplateColumns-d": "repeat(3, 1fr)", "--r-gap-m": "16px", "--r-gap-t": "24px", "--r-gap-d": "24px" }}>
                {[
                  { icon: "📈", title: "37 million views that go somewhere", body: "Reach only counts if it acts. Ours does — 37.1M views a year from locals who use us to decide where to actually go." },
                  { icon: "🤝", title: "You inherit the trust we've earned", body: "Milwaukee already takes our word for it. Feature with us and that credibility points at you from day one — no warming up a cold audience." },
                  { icon: "💸", title: "They show up ready to spend", body: "Our audience is 79% ages 18–44 — locals who try new places, go out midweek, and spend money here. You're reaching the people who fill rooms and tabs." }
                ].map((b, i) => (
                  <div key={i} className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", "--r-padding-m": "24px", "--r-padding-t": "28px", "--r-padding-d": "28px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span aria-hidden="true" style={{ fontSize: "28px" }}>{b.icon}</span>
                    <h3 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "17px", "--r-fontSize-t": "18px", "--r-fontSize-d": "18px", fontWeight: "900", margin: "14px 0 8px" }}>{b.title}</h3>
                    <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{b.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="r-gridTemplateColumns r-marginBottom" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "1fr 1fr", "--r-gridTemplateColumns-d": "1fr 1fr", gap: "24px", "--r-marginBottom-m": "32px", "--r-marginBottom-t": "48px", "--r-marginBottom-d": "48px" }}>
              <div className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", "--r-padding-m": "24px", "--r-padding-t": "32px", "--r-padding-d": "32px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <span aria-hidden="true" style={{ fontSize: "20px" }}>👀</span>
                  <h3 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "18px", "--r-fontSize-t": "20px", "--r-fontSize-d": "20px", fontWeight: "900", textTransform: "uppercase" }}>Who You're Reaching</h3>
                </div>
                <div className="r-padding" style={{ backgroundColor: c.yellow, borderRadius: "12px", "--r-padding-m": "14px", "--r-padding-t": "18px", "--r-padding-d": "18px", marginBottom: "20px", textAlign: "center" }}>
                  <div className="r-fontSize" style={{ "--r-fontSize-m": "32px", "--r-fontSize-t": "40px", "--r-fontSize-d": "40px", fontWeight: "900", color: c.green1 }}>79.2%</div>
                  <div style={{ color: "#294D32", fontSize: "13px", fontWeight: "600" }}>AGES 18–44</div>
                </div>
                <p style={{ color: c.cream, fontSize: "15px", marginBottom: "12px", fontWeight: "600" }}>Young professionals. Couples. Groups of friends.</p>
                <ul style={{ color: c.beige, fontSize: "14px", lineHeight: 1.8, paddingLeft: "18px" }}>
                  <li>Try new places</li><li>Go out during the week</li><li>Show up when something looks cool</li><li>Spend money locally</li>
                </ul>
              </div>
              <div className="r-padding" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", "--r-padding-m": "24px", "--r-padding-t": "32px", "--r-padding-d": "32px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <span aria-hidden="true" style={{ fontSize: "20px" }}>🎯</span>
                  <h3 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "18px", "--r-fontSize-t": "20px", "--r-fontSize-d": "20px", fontWeight: "900", textTransform: "uppercase" }}>What Makes Us Different</h3>
                </div>
                <p style={{ color: c.cream, fontSize: "15px", marginBottom: "20px", lineHeight: 1.6 }}>We don't do boring. We don't do stock photos. And we definitely don't do "Hey guys, check this out" energy.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Native content that blends into feeds", "Storytelling that feels real", "Massive local trust", "Multi-platform amplification", "Content people actually share"].map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: c.beige, fontSize: "14px" }}>
                      <span aria-hidden="true" style={{ color: c.yellow }}>✔</span>{p}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "20px", padding: "14px", backgroundColor: "rgba(240,166,35,0.15)", borderRadius: "10px", borderLeft: `3px solid ${c.yellow}` }}>
                  <p style={{ color: "#F9D9A0", fontSize: "14px", fontWeight: "700", margin: 0 }}>When we post about a business, people show up.</p>
                </div>
              </div>
            </div>
            <div className="r-padding" style={{ textAlign: "center", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", "--r-padding-m": "28px 20px", "--r-padding-t": "40px", "--r-padding-d": "40px", border: `2px solid ${c.yellow}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span aria-hidden="true" style={{ fontSize: "24px" }}>🤝</span>
                <h3 className="r-fontSize" style={{ color: c.cream, "--r-fontSize-m": "20px", "--r-fontSize-t": "26px", "--r-fontSize-d": "26px", fontWeight: "900", textTransform: "uppercase" }}>Let's Do Something That Works</h3>
              </div>
              <p className="r-fontSize" style={{ color: c.beige, "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", marginBottom: "24px" }}>If you want your brand seen by the people shaping Milwaukee's culture, we should talk.</p>
              <button onClick={() => { setShowPartnerForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="r-padding r-fontSize" style={{ display: "inline-block", "--r-padding-m": "14px 28px", "--r-padding-t": "18px 40px", "--r-padding-d": "18px 40px", backgroundColor: c.yellow, color: "#294D32", borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "900", "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", textTransform: "uppercase" }}>Let's Partner Up →</button>
            </div>
          </div>
        </section>
      )}

      {/* PARTNER INTAKE FORM */}
      {page === "partner" && showPartnerForm && (
        <section className="r-padding" style={{ "--r-padding-m": "32px 16px", "--r-padding-t": "60px 16px", "--r-padding-d": "60px 16px", backgroundColor: c.cream, minHeight: "100vh" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <button
              onClick={() => setShowPartnerForm(false)}
              style={{ display: "flex", alignItems: "center", gap: "6px", color: c.green1, fontSize: "14px", fontWeight: "600", background: "none", border: "none", cursor: "pointer", marginBottom: "24px" }}
            >
              <Icons.ChevronLeft /> Back to Partner Info
            </button>

            {!formSubmitted ? (
              <>
                <div className="r-marginBottom" style={{ textAlign: "center", "--r-marginBottom-m": "28px", "--r-marginBottom-t": "40px", "--r-marginBottom-d": "40px" }}>
                  <h1 className="r-fontSize" style={{ "--r-fontSize-m": "28px", "--r-fontSize-t": "36px", "--r-fontSize-d": "36px", fontWeight: "900", color: c.green1, marginBottom: "16px", textTransform: "uppercase" }}>Let's Partner Up</h1>
                  <p className="r-fontSize" style={{ color: c.tanDark, "--r-fontSize-m": "14px", "--r-fontSize-t": "16px", "--r-fontSize-d": "16px", lineHeight: 1.6, maxWidth: "550px", margin: "0 auto" }}>Tell us a bit about your brand and what you're trying to accomplish. We'll follow up with the best-fit partnership options and current availability.</p>
                </div>

                <form onSubmit={handlePartnerSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  
                  {/* About You Section */}
                  <div className="r-padding" style={{ backgroundColor: c.white, borderRadius: "16px", "--r-padding-m": "20px", "--r-padding-t": "28px", "--r-padding-d": "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">📋</span> About You
                    </h2>

                    <div className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "1fr 1fr", "--r-gridTemplateColumns-d": "1fr 1fr", gap: "16px" }}>
                      <div className="r-gridColumn" style={{ "--r-gridColumn-m": "span 1", "--r-gridColumn-t": "span 2", "--r-gridColumn-d": "span 2" }}>
                        <label htmlFor="pf-fullName" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Full Name *</label>
                        <input id="pf-fullName" type="text" required value={partnerForm.fullName} onChange={(e) => handlePartnerFormChange("fullName", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>

                      <div>
                        <label htmlFor="pf-companyName" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Company / Brand Name *</label>
                        <input id="pf-companyName" type="text" required value={partnerForm.companyName} onChange={(e) => handlePartnerFormChange("companyName", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>

                      <div>
                        <label htmlFor="pf-emailAddress" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Email Address *</label>
                        <input id="pf-emailAddress" type="email" required value={partnerForm.emailAddress} onChange={(e) => handlePartnerFormChange("emailAddress", e.target.value)} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>

                      <div className="r-gridColumn" style={{ "--r-gridColumn-m": "span 1", "--r-gridColumn-t": "span 2", "--r-gridColumn-d": "span 2" }}>
                        <label htmlFor="pf-socialHandles" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Social Media Handles <span style={{ color: c.tanDark, fontWeight: "400" }}>(optional)</span></label>
                        <input id="pf-socialHandles" type="text" value={partnerForm.socialHandles} onChange={(e) => handlePartnerFormChange("socialHandles", e.target.value)} placeholder="@instagram, @tiktok, etc." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Budget Section */}
                  <div className="r-padding" style={{ backgroundColor: c.white, borderRadius: "16px", "--r-padding-m": "20px", "--r-padding-t": "28px", "--r-padding-d": "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">💰</span> Budget
                    </h2>
                    <p style={{ fontSize: "13px", color: c.tanDark, marginBottom: "16px" }}>This helps us recommend the right partnership options for your goals.</p>
                    
                    <label htmlFor="pf-budget" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>What budget are you considering for promotion? *</label>
                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                      <span style={{ position: "absolute", left: "16px", fontSize: "15px", fontWeight: "600", color: c.tanDark, pointerEvents: "none" }}>$</span>
                      <input id="pf-budget" required type="number" min="0" step="1" inputMode="numeric" value={partnerForm.budget} onChange={(e) => handlePartnerFormChange("budget", e.target.value)} placeholder="Enter an amount" style={{ width: "100%", padding: "14px 16px 14px 30px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                    </div>
                  </div>

                  {/* Partnership Interest Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">🤝</span> Partnership Interest
                    </h2>
                    
                    <span id="pf-interest-label" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "12px" }}>What type of partnership are you interested in? (Optional)</span>
                    <div role="group" aria-labelledby="pf-interest-label" className="r-gridTemplateColumns" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "1fr 1fr", "--r-gridTemplateColumns-d": "1fr 1fr", gap: "10px" }}>
                      {[
                        { label: "One-time feature" },
                        { label: "Ongoing partnership" },
                        { label: "Giveaway collaboration" },
                        { label: "Event partnership" },
                        { label: "Sponsorship", hint: "e.g. This Week in Milwaukee, Festival Guide" },
                        { label: "Not sure yet" }
                      ].map((opt) => (
                        <label key={opt.label} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px", backgroundColor: partnerForm.partnershipInterest.includes(opt.label) ? c.beige : c.cream, borderRadius: "8px", cursor: "pointer", border: `2px solid ${partnerForm.partnershipInterest.includes(opt.label) ? c.green1 : c.beige}`, transition: "all 0.2s" }}>
                          <input type="checkbox" checked={partnerForm.partnershipInterest.includes(opt.label)} onChange={() => handleCheckboxChange("partnershipInterest", opt.label)} style={{ width: "18px", height: "18px", accentColor: c.green1, marginTop: "1px", flexShrink: 0 }} />
                          <span style={{ fontSize: "14px", color: c.green1, fontWeight: "500" }}>
                            {opt.label}
                            {opt.hint && <span style={{ display: "block", fontSize: "12px", color: c.tanDark, fontWeight: "400", marginTop: "2px" }}>{opt.hint}</span>}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">📝</span> Tell Us More
                    </h2>
                    
                    <label htmlFor="pf-notes" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>Anything else we should know? <span style={{ color: c.tanDark, fontWeight: "400" }}>(optional — but it helps us help you faster)</span></label>
                    <p style={{ fontSize: "12px", color: c.tanDark, marginBottom: "10px" }}>A sentence or two on your goals, any offers or promotions, or key dates goes a long way toward us recommending the right fit. Skip it if you'd rather just talk.</p>
                    <textarea id="pf-notes" value={partnerForm.notes} onChange={(e) => handlePartnerFormChange("notes", e.target.value)} rows={4} placeholder="Optional — tell us what you're hoping to accomplish." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, resize: "vertical", fontFamily: "inherit" }} />
                  </div>

                  {/* Optional Fields Section */}
                  <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "800", color: c.green1, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden="true">✨</span> A Few More Details (Optional)
                    </h2>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label htmlFor="pf-heardAbout" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>How did you hear about Discover Milwaukee?</label>
                        <select id="pf-heardAbout" value={partnerForm.heardAbout} onChange={(e) => setPartnerForm(prev => ({ ...prev, heardAbout: e.target.value, heardAboutDetail: "" }))} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream, cursor: "pointer" }}>
                          <option value="">Select option</option>
                          <option value="Google">Google</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="TikTok">TikTok</option>
                          <option value="Referral">Referral</option>
                          <option value="Past partnership">Past partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {partnerForm.heardAbout && (() => {
                        const src = partnerForm.heardAbout;
                        const isSocial = src === "Instagram" || src === "Facebook" || src === "TikTok";
                        const followUp = isSocial
                          ? { label: `Was there a specific ${src} post that brought you here?`, placeholder: "Paste the post link, or describe it (e.g. \"the best patios reel\")" }
                          : src === "Google"
                          ? { label: "What did you search for?", placeholder: "e.g. \"Milwaukee influencer marketing\"" }
                          : src === "Referral"
                          ? { label: "Who referred you?", placeholder: "A name or business is plenty" }
                          : src === "Past partnership"
                          ? { label: "Which past partnership?", placeholder: "e.g. a campaign, event, or year" }
                          : { label: "Tell us a bit more", placeholder: "Where did you come across us?" };
                        return (
                          <div style={{ paddingLeft: "16px", borderLeft: `3px solid ${c.beige}` }}>
                            <label htmlFor="pf-heardAboutDetail" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>{followUp.label} <span style={{ color: c.tan, fontWeight: "400" }}>(optional)</span></label>
                            <input id="pf-heardAboutDetail" type="text" value={partnerForm.heardAboutDetail} onChange={(e) => handlePartnerFormChange("heardAboutDetail", e.target.value)} placeholder={followUp.placeholder} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                          </div>
                        );
                      })()}
                      
                      <div>
                        <label htmlFor="pf-city" style={{ display: "block", fontSize: "13px", fontWeight: "600", color: c.green1, marginBottom: "6px" }}>City or primary location</label>
                        <input id="pf-city" type="text" value={partnerForm.city} onChange={(e) => handlePartnerFormChange("city", e.target.value)} placeholder="Milwaukee, WI" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: `2px solid ${c.beige}`, fontSize: "15px", backgroundColor: c.cream }} />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <p style={{ fontSize: "13px", color: c.tanDark, marginBottom: "20px" }}>Limited sponsorship availability. Partnerships are intentionally capped to protect results.</p>
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
                  <span aria-hidden="true" style={{ fontSize: "40px" }}>✓</span>
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

      </main>

      {/* FOOTER */}
      <footer className="r-padding" style={{ "--r-padding-m": "40px 16px", "--r-padding-t": "60px 16px", "--r-padding-d": "60px 16px", backgroundColor: c.green1, borderTop: `4px solid ${c.yellow}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Main Footer Content */}
          <div className="r-gridTemplateColumns r-gap r-textAlign" style={{ display: "grid", "--r-gridTemplateColumns-m": "1fr", "--r-gridTemplateColumns-t": "2fr 1fr 1fr 1fr", "--r-gridTemplateColumns-d": "2fr 1fr 1fr 1fr", "--r-gap-m": "32px", "--r-gap-t": "40px", "--r-gap-d": "40px", marginBottom: "40px", "--r-textAlign-m": "center", "--r-textAlign-t": "left", "--r-textAlign-d": "left" }}>
            {/* Brand Column */}
            <div>
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} style={{ cursor: "pointer", marginBottom: "12px", display: "inline-block", textDecoration: "none" }}>
                <span className="r-fontSize" style={{ "--r-fontSize-m": "18px", "--r-fontSize-t": "20px", "--r-fontSize-d": "20px", fontWeight: "900", color: c.cream, letterSpacing: "1px", textTransform: "uppercase" }}>DISCOVER MILWAUKEE</span>
              </a>
              <p className="r-margin" style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, marginBottom: "16px", maxWidth: "280px", "--r-margin-m": "0 auto 16px", "--r-margin-t": "0 0 16px", "--r-margin-d": "0 0 16px" }}>
                Your insider's guide to everything worth doing in Milwaukee. No fluff. Just the good stuff.
              </p>
              <div className="r-justifyContent" style={{ display: "flex", gap: "16px", "--r-justifyContent-m": "center", "--r-justifyContent-t": "flex-start", "--r-justifyContent-d": "flex-start" }}>
                <a href="https://instagram.com/discovermilwaukee" target="_blank" rel="noopener noreferrer" style={{ color: c.beige, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.yellow} onMouseOut={e => e.currentTarget.style.color = c.beige} aria-label="Discover Milwaukee on Instagram (opens in a new tab)"><Icons.Instagram /></a>
                <a href="https://tiktok.com/@discovermilwaukee" target="_blank" rel="noopener noreferrer" style={{ color: c.beige, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.yellow} onMouseOut={e => e.currentTarget.style.color = c.beige} aria-label="Discover Milwaukee on TikTok (opens in a new tab)"><Icons.TikTok /></a>
                <a href="https://www.facebook.com/p/discovermilwaukee-100069844392448/" target="_blank" rel="noopener noreferrer" style={{ color: c.beige, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.yellow} onMouseOut={e => e.currentTarget.style.color = c.beige} aria-label="Discover Milwaukee on Facebook (opens in a new tab)"><Icons.Facebook /></a>
              </div>
            </div>
            
            {/* Explore Column */}
            <div>
              <h2 style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Explore</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="/events" onClick={(e) => { e.preventDefault(); navigateTo("events"); }} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Events Calendar</a>
                <a href="/explore" onClick={(e) => { e.preventDefault(); navigateTo("explore"); }} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>City Guides</a>
                <a href="/things-to-do-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Things to Do</a>
                <a href="/best-restaurants-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Best Restaurants</a>
                <a href="/newsletter" onClick={(e) => { e.preventDefault(); navigateTo("newsletter"); }} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Newsletter</a>
              </div>
            </div>
            
            {/* Company Column */}
            <div>
              <h2 style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Company</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="/about" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>About Us</a>
                <a href="/partner" onClick={(e) => { e.preventDefault(); navigateTo("partner"); }} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Partner With Us</a>
                <a href="/events" onClick={(e) => { e.preventDefault(); navigateTo("events"); setShowEventForm(true); }} style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Submit an Event</a>
                <a href="mailto:contact@discover-milwaukee.com" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Contact Us</a>
              </div>
            </div>
            
            {/* Legal Column */}
            <div>
              <h2 style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Legal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="/privacy" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Privacy Policy</a>
                <a href="/terms" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Terms of Service</a>
                <a href="/accessibility" style={{ color: c.beige, fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = c.cream} onMouseOut={e => e.currentTarget.style.color = c.beige}>Accessibility</a>
              </div>
            </div>
          </div>

          {/* Visitor Guides - SEO Internal Links */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", marginBottom: "24px" }}>
            <h2 className="r-textAlign" style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", "--r-textAlign-m": "center", "--r-textAlign-t": "left", "--r-textAlign-d": "left" }}>Visitor Guides</h2>
            <div className="r-gap r-justifyContent" style={{ display: "flex", flexWrap: "wrap", "--r-gap-m": "12px", "--r-gap-t": "24px", "--r-gap-d": "24px", "--r-justifyContent-m": "center", "--r-justifyContent-t": "flex-start", "--r-justifyContent-d": "flex-start" }}>
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
            <h2 className="r-textAlign" style={{ color: "#F1AF38", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", "--r-textAlign-m": "center", "--r-textAlign-t": "left", "--r-textAlign-d": "left" }}>Popular Guides</h2>
            <div className="r-gap r-justifyContent" style={{ display: "flex", flexWrap: "wrap", "--r-gap-m": "12px", "--r-gap-t": "24px", "--r-gap-d": "24px", "--r-justifyContent-m": "center", "--r-justifyContent-t": "flex-start", "--r-justifyContent-d": "flex-start" }}>
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
          <div className="r-flexDirection" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", display: "flex", "--r-flexDirection-m": "column", "--r-flexDirection-t": "row", "--r-flexDirection-d": "row", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <p style={{ color: c.beige, fontSize: "13px", opacity: 0.8 }}>© 2026 Discover Milwaukee. All rights reserved.</p>
            <p style={{ color: c.beige, fontSize: "13px", opacity: 0.8, display: "flex", alignItems: "center", gap: "6px" }}>Made with <LineIcons.BeerMug size={15} /><span className="sr-only">beer</span> in Milwaukee, WI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
