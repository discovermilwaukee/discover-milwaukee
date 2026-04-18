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

const foodTrucks = {
  mexican: [
    {
      name: "El Chido Street Tacos",
      style: "Authentic Street Tacos",
      priceRange: "$",
      description: "Considered the best taco truck Milwaukee has to offer. El Chido specializes in authentic street tacos with marinated pork, grilled chicken, and seasoned beef. Simple, fresh, and exactly what you'd find on the streets of Mexico City.",
      mustTry: "Al Pastor, Carne Asada tacos, horchata",
      insiderTip: "Follow them on social media for daily location updates. The carnitas sells out fast.",
      bestFor: "Authentic tacos, late-night eats, quick lunch",
    },
    {
      name: "Pina Mexican Eats",
      style: "West-Central Mexican",
      priceRange: "$",
      description: "Serving dishes from west-central Mexico with a focus on home-style cooking (estilo casera). The enchiladas and traditional preparations transport you to an abuela's kitchen.",
      mustTry: "Enchiladas, tacos, pozole (when available)",
      insiderTip: "The specials often feature family recipes not on the regular menu.",
      bestFor: "Authentic Mexican, family recipes, comfort food",
    },
    {
      name: "Tacos El Charrito",
      style: "Classic Taqueria",
      priceRange: "$",
      description: "A Milwaukee favorite for classic taqueria fare. Tacos El Charrito keeps it simple with quality ingredients and authentic preparations that have built a loyal following.",
      mustTry: "Tacos, tortas, quesadillas",
      insiderTip: "Perfect for feeding a group. Order the variety to share.",
      bestFor: "Groups, variety, traditional flavors",
    },
  ],
  specialty: [
    {
      name: "Cottonwood Trailer Pie",
      style: "Wood-Fired Pizza",
      priceRange: "$$",
      description: "A wood-fired pizza oven on wheels serving handmade pizzas cooked in a 900-degree oven in about 5 minutes. Fresh ingredients and authentic technique make this a standout in the Milwaukee food truck scene.",
      mustTry: "Margherita, seasonal specials, any vegetable topping",
      insiderTip: "The simplest pizzas are often the best. Let the wood fire and quality ingredients shine.",
      bestFor: "Pizza lovers, events, quality ingredients",
    },
    {
      name: "Modern Maki",
      style: "Sushi & Asian Fusion",
      priceRange: "$$",
      description: "Founded by Chef Marco Garcia and Marilupe Moreno, Modern Maki brings sushi and Asian fusion to the streets. Fresh rolls and creative combinations prove food trucks can deliver quality Japanese food.",
      mustTry: "Signature rolls, poke bowls",
      insiderTip: "Pre-order for events. They tend to draw lines at popular locations.",
      bestFor: "Sushi on-the-go, office lunches, creative Asian fusion",
    },
    {
      name: "Roll MKE",
      style: "Gourmet Sandwiches & Wraps",
      priceRange: "$",
      description: "Creative sandwiches and wraps with global influences. Roll MKE has become a Milwaukee favorite for their inventive flavor combinations and satisfying hand-held format.",
      mustTry: "Signature sandwiches, daily specials",
      insiderTip: "Try a different flavor each visit. The variety is what makes them great.",
      bestFor: "Unique flavors, easy eating, lunch on-the-go",
    },
  ],
  comfort: [
    {
      name: "Fully Loaded",
      style: "Loaded Fries & Comfort",
      priceRange: "$",
      description: "Exactly what the name promises—loaded fries, nachos, and comfort food piled high with toppings. Perfect for sharing or for when you need serious sustenance.",
      mustTry: "Loaded fries, nachos, daily specials",
      insiderTip: "Split an order—the portions are generous. Perfect for groups.",
      bestFor: "Sharing, comfort food, late night",
    },
    {
      name: "Farmers Daughter Food Truck",
      style: "Farm-to-Truck",
      priceRange: "$$",
      description: "Bringing farm-fresh ingredients to street food. The Farmers Daughter focuses on quality sourcing and scratch cooking, elevating the food truck experience with seasonal menus.",
      mustTry: "Seasonal specials, sandwiches, fresh salads",
      insiderTip: "Follow for seasonal menu updates. Spring and summer bring the best produce.",
      bestFor: "Quality ingredients, health-conscious, local sourcing",
    },
    {
      name: "Munch Mobile",
      style: "Comfort Classics",
      priceRange: "$",
      description: "Comfort food done right from a food truck. Munch Mobile serves up satisfying classics that hit the spot when you need reliable, filling fare.",
      mustTry: "Signature sandwiches, sides",
      insiderTip: "Great for corporate events and office lunches.",
      bestFor: "Office catering, reliable comfort food, groups",
    },
  ],
  bbq: [
    {
      name: "Sweet Smoke BBQ",
      style: "Texas-Style BBQ",
      priceRange: "$$",
      description: "Bringing real barbecue to Milwaukee's streets with slow-smoked brisket, ribs, and all the fixings. Sweet Smoke has built a reputation for authentic smoke and tender meat.",
      mustTry: "Brisket, pulled pork, mac and cheese",
      insiderTip: "Arrive early—they can sell out, especially the brisket. Worth the planning.",
      bestFor: "BBQ enthusiasts, meat lovers, Texas-style flavor",
    },
    {
      name: "Wilma's Smokehouse",
      style: "Southern BBQ",
      priceRange: "$$",
      description: "Southern-style barbecue with all the soul food sides you'd expect. Wilma's brings smoke, spice, and hospitality to every stop.",
      mustTry: "Smoked meats, collard greens, cornbread",
      insiderTip: "The sides are as good as the meats. Don't skip them.",
      bestFor: "Soul food, Southern comfort, generous portions",
    },
  ],
};

const locations = [
  {
    name: "Milwaukee County Courthouse",
    schedule: "Thursdays during lunch",
    description: "Multiple trucks gather for the downtown lunch crowd. Great variety and easy access.",
  },
  {
    name: "N. 91st St & W. Calumet Road",
    schedule: "Foodie Fridays",
    description: "Industrial park location with multiple trucks. Perfect for adventurous lunch breaks.",
  },
  {
    name: "Various Breweries",
    schedule: "Weekends",
    description: "Many Milwaukee breweries host food trucks on weekends. Check brewery social media for schedules.",
  },
  {
    name: "Summer Festivals",
    schedule: "Seasonal",
    description: "Major festivals and events feature food truck roundups. Summerfest, ethnic festivals, and neighborhood events are prime food truck hunting grounds.",
  },
];

const faqs = [
  {
    question: "Where can I find food trucks in Milwaukee?",
    answer: "Food trucks regularly gather at the Milwaukee County Courthouse on Thursdays and in the industrial park at N. 91st St & W. Calumet Road for Foodie Fridays. Many breweries host food trucks on weekends, and summer festivals feature extensive food truck lineups.",
  },
  {
    question: "How do I find out where a specific food truck is?",
    answer: "Most Milwaukee food trucks use social media (Instagram and Facebook) to post their daily or weekly locations. Following your favorites is the best way to track them down.",
  },
  {
    question: "Can I hire a food truck for an event?",
    answer: "Yes! Most Milwaukee food trucks offer catering and event services. Contact them directly through their social media or websites for booking inquiries.",
  },
  {
    question: "What's the best food truck in Milwaukee?",
    answer: "It depends on what you're craving. El Chido is considered the best for tacos, Cottonwood Trailer Pie for pizza, and Sweet Smoke BBQ for barbecue. The beauty of the scene is the variety.",
  },
  {
    question: "Are food trucks cheaper than restaurants?",
    answer: "Generally, yes. Most food truck meals run $8-15 for a satisfying portion. You're paying for quality food without the overhead of a brick-and-mortar location.",
  },
];

export default function FoodTrucksMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Food Trucks in Milwaukee: Complete Guide [2026]",
    description: "Discover Milwaukee's best food trucks from authentic tacos to wood-fired pizza. Where to find them, what to order, and insider tips.",
    image: "https://www.discover-milwaukee.com/images/food-trucks-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/food-trucks-milwaukee",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Explore", item: "https://www.discover-milwaukee.com/explore" },
      { "@type": "ListItem", position: 3, name: "Food Trucks Milwaukee", item: "https://www.discover-milwaukee.com/food-trucks-milwaukee" },
    ],
  };

  const renderTruck = (truck) => (
    <div key={truck.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{truck.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{truck.style}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{truck.priceRange}</span>
        </div>
      </div>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{truck.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Must Try:</strong> <span style={{ color: "#555" }}>{truck.mustTry}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{truck.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{truck.insiderTip}</span>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Food Trucks in Milwaukee: Complete Guide [2026]</title>
        <meta name="description" content="Discover Milwaukee's best food trucks from authentic tacos at El Chido to wood-fired pizza at Cottonwood. Where to find them, what to order, and insider tips." />
        <meta name="keywords" content="Milwaukee food trucks, best food trucks Milwaukee, El Chido tacos, Milwaukee street food, food truck locations Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/food-trucks-milwaukee" />
        <meta property="og:title" content="Best Food Trucks in Milwaukee [2026 Guide]" />
        <meta property="og:description" content="From authentic tacos to wood-fired pizza, discover Milwaukee's best food trucks and where to find them." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/food-trucks-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/food-trucks-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
          <nav style={{ marginBottom: "24px", fontSize: "0.9rem" }}>
            <Link href="/" style={{ color: c.green2, textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px", color: "#999" }}>/</span>
            <Link href="/explore" style={{ color: c.green2, textDecoration: "none" }}>Explore</Link>
            <span style={{ margin: "0 8px", color: "#999" }}>/</span>
            <span style={{ color: c.green1 }}>Food Trucks</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>Best Food Trucks in Milwaukee: Your Complete Guide</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee's food truck scene has exploded with nearly 100 trucks serving everything from authentic street tacos to wood-fired pizza. These mobile kitchens bring quality, creativity, and convenience to every corner of the city.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              Whether you're hunting down lunch downtown, looking for catering for your next event, or just craving something different, this guide covers the best food trucks Milwaukee has to offer—plus where to find them.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All trucks verified active</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Mexican & Tacos</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Authentic street food on wheels</p>
            {foodTrucks.mexican.map(renderTruck)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Specialty & Unique</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Creative concepts you won't find elsewhere</p>
            {foodTrucks.specialty.map(renderTruck)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Comfort Food</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Satisfying classics done right</p>
            {foodTrucks.comfort.map(renderTruck)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>BBQ & Smoked Meats</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Low and slow on the go</p>
            {foodTrucks.bbq.map(renderTruck)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Where to Find Food Trucks</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              {locations.map((loc, index) => (
                <div key={index} style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                  <h3 style={{ color: c.green1, marginBottom: "4px" }}>{loc.name}</h3>
                  <p style={{ color: c.orange, fontSize: "0.9rem", marginBottom: "8px" }}>{loc.schedule}</p>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>{loc.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ backgroundColor: c.beige, borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "16px" }}>Food Truck Tips</h2>
            <ul style={{ color: "#555", lineHeight: "2", paddingLeft: "20px" }}>
              <li><strong>Follow on social media</strong> — Most trucks post daily locations on Instagram and Facebook</li>
              <li><strong>Bring cash</strong> — While many accept cards, cash is always appreciated and sometimes faster</li>
              <li><strong>Arrive early</strong> — Popular items sell out, especially at lunch rushes</li>
              <li><strong>Check brewery schedules</strong> — Many breweries host food trucks on weekends</li>
              <li><strong>Book for events</strong> — Most trucks offer catering for private events</li>
            </ul>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px", fontSize: "1.1rem" }}>{faq.question}</h3>
                <p style={{ color: "#555", lineHeight: "1.7" }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ backgroundColor: c.green1, borderRadius: "12px", padding: "32px", textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Food Guides</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Explore more of Milwaukee's culinary scene</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/best-tacos-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Tacos</Link>
              <Link href="/best-restaurants-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Restaurants</Link>
              <Link href="/milwaukee-breweries" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Breweries</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best food trucks since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
