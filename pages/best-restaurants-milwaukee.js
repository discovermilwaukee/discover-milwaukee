import React from "react";
import Head from "next/head";
import Link from "next/link";

// Brand colors matching main site
const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

// Restaurant data with full SEO details
const restaurants = {
  michelinContenders: [
    {
      name: "Sanford Restaurant",
      neighborhood: "East Side",
      cuisine: "American Fine Dining",
      priceRange: "$$$$",
      address: "1547 N Jackson St, Milwaukee, WI 53202",
      description: "Milwaukee's most refined dining experience and the city's strongest Michelin contender. Chef Justin Aprahamian delivers impeccable tasting menus with precision and creativity that rivals any major city. The intimate 40-seat dining room sets the stage for dishes that showcase Wisconsin ingredients at their finest.",
      mustTry: "Chef's Tasting Menu, Foie Gras preparation",
      bestFor: "Special occasions, anniversary dinners, impressing out-of-town guests",
      reservation: "Essential - book 2-3 weeks ahead",
    },
    {
      name: "DanDan",
      neighborhood: "Downtown",
      cuisine: "Modern Chinese",
      priceRange: "$$$",
      address: "360 E Erie St, Milwaukee, WI 53202",
      description: "A bold, modern take on Chinese cuisine that has earned national recognition. Chefs Dan Jacobs and Dan Van Rite deliver big flavors with sharp execution. The dan dan noodles are legendary, but the entire menu showcases creative technique and authentic flavors.",
      mustTry: "Dan Dan Noodles, Sichuan Wontons, Crispy Eggplant",
      bestFor: "Adventurous eaters, group dining, date nights",
      reservation: "Recommended for weekends",
    },
    {
      name: "Amilinda",
      neighborhood: "Downtown",
      cuisine: "Spanish & Portuguese",
      priceRange: "$$$$",
      address: "315 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "Spanish and Portuguese-inspired dishes focused on simplicity and the highest quality ingredients. Chef Gregory Leon creates an intimate, personal experience where each dish tells a story. The multi-course tasting menu changes with the seasons.",
      mustTry: "Seasonal Tasting Menu, Iberico Ham, Wood-fired preparations",
      bestFor: "Romantic dinners, food enthusiasts, celebration meals",
      reservation: "Essential - limited seating",
    },
    {
      name: "Birch",
      neighborhood: "Bay View",
      cuisine: "Contemporary American Tasting Menu",
      priceRange: "$$$$",
      address: "459 E Pleasant St, Milwaukee, WI 53202",
      description: "An intimate tasting menu experience that feels closest to Michelin-style dining in Milwaukee. Minimalist presentations, thoughtful pairings, and a chef-driven approach create an unforgettable evening. The small dining room means every detail is curated.",
      mustTry: "Full Tasting Menu with wine pairings",
      bestFor: "Serious foodies, milestone celebrations, culinary experiences",
      reservation: "Essential - book well in advance",
    },
  ],
  newRestaurants: [
    {
      name: "Cassis",
      neighborhood: "Third Ward",
      cuisine: "European Bistro",
      priceRange: "$$$",
      address: "Third Ward, Milwaukee, WI",
      description: "A European-inspired concept that has quickly become one of the most talked-about new restaurants in Milwaukee. The bistro atmosphere and refined menu transport you to the French Riviera while remaining distinctly Milwaukee.",
      mustTry: "Steak Frites, Seasonal seafood",
      bestFor: "Date nights, business dinners, wine enthusiasts",
      reservation: "Recommended",
    },
    {
      name: "Nakama",
      neighborhood: "Downtown",
      cuisine: "High-End Sushi & Japanese",
      priceRange: "$$$$",
      address: "Downtown Milwaukee, WI",
      description: "A high-end sushi experience raising expectations for Japanese dining in Milwaukee. Pristine fish, omakase options, and an atmosphere that matches the quality of the food make this the new standard for sushi in the city.",
      mustTry: "Omakase experience, Specialty rolls",
      bestFor: "Sushi lovers, special occasions, impressing clients",
      reservation: "Highly recommended",
    },
    {
      name: "Aya",
      neighborhood: "Walker's Point",
      cuisine: "Modern Middle Eastern",
      priceRange: "$$",
      address: "Walker's Point, Milwaukee, WI",
      description: "A modern Middle Eastern restaurant bringing bold flavors and a unique perspective to Milwaukee's dining scene. Fresh ingredients, vibrant spices, and shareable plates make this a standout for group dining.",
      mustTry: "Mezze platters, Lamb dishes, House-made pita",
      bestFor: "Group dinners, adventurous eaters, vegetarian-friendly options",
      reservation: "Recommended for weekends",
    },
  ],
  localFavorites: [
    {
      name: "Odd Duck",
      neighborhood: "Bay View",
      cuisine: "Global Small Plates",
      priceRange: "$$",
      address: "2352 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Globally inspired small plates with a focus on creativity and consistency. The ever-changing menu keeps regulars coming back to discover new flavors. Bay View's anchor restaurant that helped define the neighborhood's culinary identity.",
      mustTry: "Rotating seasonal menu, Chef's selections",
      bestFor: "Adventurous diners, food lovers, casual but elevated dining",
      reservation: "Recommended",
    },
    {
      name: "La Merenda",
      neighborhood: "Walker's Point",
      cuisine: "International Small Plates",
      priceRange: "$$",
      address: "125 E National Ave, Milwaukee, WI 53204",
      description: "A neighborhood staple offering international small plates in a casual but vibrant setting. The menu spans continents, with dishes that surprise and satisfy. Perfect for those who want variety and quality without pretension.",
      mustTry: "Tapas selection, Seasonal specials",
      bestFor: "Casual dates, groups wanting variety, neighborhood dining",
      reservation: "Walk-ins welcome, reservations help on weekends",
    },
    {
      name: "Morel",
      neighborhood: "Walker's Point",
      cuisine: "Farm-to-Table American",
      priceRange: "$$$",
      address: "430 S 2nd St, Milwaukee, WI 53204",
      description: "A farm-to-table restaurant rooted in Wisconsin ingredients and seasonal menus. Chef relationships with local farmers shine through in every dish. The rotating menu means each visit offers something new.",
      mustTry: "Seasonal tasting menu, Local protein preparations",
      bestFor: "Farm-to-table enthusiasts, seasonal dining, Wisconsin pride",
      reservation: "Recommended",
    },
  ],
};

// FAQ data for schema markup
const faqs = [
  {
    question: "Are there Michelin star restaurants in Milwaukee?",
    answer: "Milwaukee does not currently have Michelin-starred restaurants as the Michelin Guide does not cover Wisconsin. However, several restaurants including Sanford, Birch, Amilinda, and DanDan are considered Michelin-quality and would likely earn recognition if the guide expanded to the region."
  },
  {
    question: "What is the best restaurant in Milwaukee?",
    answer: "The top restaurants in Milwaukee include Sanford (fine dining), DanDan (modern Chinese), Amilinda (Spanish/Portuguese), and Odd Duck (small plates). The 'best' depends on what you're looking for - Sanford for special occasions, DanDan for bold flavors, or Odd Duck for creative casual dining."
  },
  {
    question: "What are the best new restaurants in Milwaukee in 2026?",
    answer: "The most talked-about new Milwaukee restaurants in 2026 include Cassis (European bistro), Nakama (high-end sushi), and Aya (modern Middle Eastern). These openings are redefining dining expectations in the city."
  },
  {
    question: "What Milwaukee neighborhoods have the best restaurants?",
    answer: "Milwaukee's top dining neighborhoods include Bay View (Odd Duck, Birch), Walker's Point (La Merenda, Morel, Aya), Third Ward (Cassis, Café Benelux), Downtown (DanDan, Amilinda), and the East Side (Sanford). Each neighborhood offers a distinct dining personality."
  },
  {
    question: "Do you need reservations at Milwaukee's best restaurants?",
    answer: "For Milwaukee's top fine dining restaurants like Sanford, Birch, and Amilinda, reservations are essential and should be made 2-3 weeks in advance for weekends. Casual spots like Odd Duck and La Merenda accept walk-ins but reservations are recommended, especially on Friday and Saturday nights."
  },
  {
    question: "What is the most expensive restaurant in Milwaukee?",
    answer: "Sanford, Birch, and Amilinda are Milwaukee's most upscale dining options, with tasting menus ranging from $100-$175+ per person before drinks. Nakama's omakase experience is also at the higher end for sushi. These prices reflect the quality and experience comparable to major city fine dining."
  },
];

// Structured data for the page
const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Restaurants in Milwaukee 2026: Complete Guide to MKE Dining",
    "description": "Discover Milwaukee's best restaurants for 2026, including Michelin-quality fine dining, new openings, and local favorites across every neighborhood.",
    "author": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Milwaukee",
      "url": "https://discover-milwaukee.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://discover-milwaukee.com/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
    "mainEntityOfPage": "https://discover-milwaukee.com/best-restaurants-milwaukee"
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
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Restaurants in Milwaukee",
    "description": "Curated list of the best restaurants in Milwaukee, WI for 2026",
    "numberOfItems": restaurants.michelinContenders.length + restaurants.newRestaurants.length + restaurants.localFavorites.length,
    "itemListElement": [
      ...restaurants.michelinContenders.map((r, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Restaurant",
          "name": r.name,
          "address": r.address,
          "priceRange": r.priceRange,
          "servesCuisine": r.cuisine
        }
      })),
    ]
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Best Restaurants in Milwaukee", "item": "https://discover-milwaukee.com/best-restaurants-milwaukee" }
    ]
  }
};

export default function BestRestaurantsMilwaukee() {
  const RestaurantCard = ({ restaurant }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{restaurant.name}</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{restaurant.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>{restaurant.cuisine}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{restaurant.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{restaurant.bestFor}</p>
        </div>
      </div>
      {restaurant.address && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{restaurant.address}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Restaurants in Milwaukee 2026 | Top MKE Dining Guide</title>
        <meta name="description" content="Discover Milwaukee's best restaurants for 2026. From Michelin-quality fine dining at Sanford to trendy new spots like Cassis and Nakama. Complete guide with neighborhoods, prices, and what to order." />
        <meta name="keywords" content="best restaurants Milwaukee, Milwaukee restaurants, fine dining Milwaukee, where to eat Milwaukee, Milwaukee food guide, best restaurants MKE, Milwaukee dining 2026" />
        <link rel="canonical" href="https://discover-milwaukee.com/best-restaurants-milwaukee" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Restaurants in Milwaukee 2026 | Complete Dining Guide" />
        <meta property="og:description" content="Milwaukee's definitive restaurant guide. Michelin-quality fine dining, new openings, and local favorites across every neighborhood." />
        <meta property="og:url" content="https://discover-milwaukee.com/best-restaurants-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-best-restaurants.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Best Restaurants in Milwaukee - Fine dining and local favorites" />
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content="2026-04-15" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Restaurants in Milwaukee 2026" />
        <meta name="twitter:description" content="Milwaukee's definitive restaurant guide for 2026." />
        <meta name="twitter:image" content="https://discover-milwaukee.com/og-best-restaurants.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        {/* Navigation */}
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>
              DISCOVER MILWAUKEE
            </Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED APRIL 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Restaurants in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's food scene is no longer a secret—it's one of the fastest-growing culinary destinations in the Midwest. From Michelin-quality tasting menus to hidden neighborhood gems.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK LINKS</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#michelin-contenders" style={{ color: c.green2, fontSize: "14px" }}>Michelin Contenders</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#new-restaurants" style={{ color: c.green2, fontSize: "14px" }}>New in 2026</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#local-favorites" style={{ color: c.green2, fontSize: "14px" }}>Local Favorites</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Michelin Contenders */}
          <section id="michelin-contenders" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Michelin Star Contenders in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee doesn't have Michelin stars yet—but these restaurants are operating at that level. If the guide ever expands to Wisconsin, expect to see these names on the list.
            </p>
            {restaurants.michelinContenders.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
          </section>

          {/* New Restaurants */}
          <section id="new-restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best New Restaurants in Milwaukee (2026)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's growth is being fueled by exciting new openings that are redefining expectations. These are the restaurants generating buzz right now.
            </p>
            {restaurants.newRestaurants.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
            <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginTop: "24px" }}>
              <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
                Looking for more new openings? Check out our complete <Link href="/new-restaurants-milwaukee" style={{ color: c.green1, fontWeight: "800" }}>New Restaurants in Milwaukee</Link> guide, updated weekly.
              </p>
            </div>
          </section>

          {/* Local Favorites */}
          <section id="local-favorites" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Staple Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These are the places locals consistently go back to. Not chasing trends—just delivering excellent food and experiences year after year.
            </p>
            {restaurants.localFavorites.map((r, i) => <RestaurantCard key={i} restaurant={r} />)}
          </section>

          {/* By Category */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Best Milwaukee Restaurants by Category</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Best Date Night</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  <li>Sanford Restaurant</li>
                  <li>Amilinda</li>
                  <li>Birch</li>
                  <li>Cassis</li>
                </ul>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Best Sushi</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  <li>Nakama</li>
                </ul>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Best for Groups</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#555" }}>
                  <li>DanDan</li>
                  <li>Odd Duck</li>
                  <li>La Merenda</li>
                  <li>Aya</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/new-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                New Restaurants 2026 →
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Brunch Spots →
              </Link>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Patios →
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* Final CTA */}
          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurant openings, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        {/* Footer with Enhanced Cross-Linking */}
        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Food & Drink Guides */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>More Food & Drink Guides</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <Link href="/new-restaurants-milwaukee" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "10px 16px", borderRadius: "20px", fontSize: "13px", textDecoration: "none" }}>New Restaurants</Link>
                <Link href="/best-brunch-milwaukee" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "10px 16px", borderRadius: "20px", fontSize: "13px", textDecoration: "none" }}>Best Brunch</Link>
                <Link href="/best-patios-milwaukee" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "10px 16px", borderRadius: "20px", fontSize: "13px", textDecoration: "none" }}>Best Patios</Link>
                <Link href="/milwaukee-breweries" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "10px 16px", borderRadius: "20px", fontSize: "13px", textDecoration: "none" }}>Breweries</Link>
                <Link href="/milwaukee-coffee-shops" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "10px 16px", borderRadius: "20px", fontSize: "13px", textDecoration: "none" }}>Coffee Shops</Link>
              </div>
            </div>

            {/* Neighborhood Guides */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>Explore by Neighborhood</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Walker's Point</Link>
                <Link href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>East Side</Link>
              </div>
            </div>

            {/* Site Navigation */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "12px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
                <Link href="/things-to-do-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
                <Link href="/about" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>About</Link>
                <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
