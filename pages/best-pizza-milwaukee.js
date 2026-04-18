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

const pizzaSpots = {
  bestOverall: [
    {
      name: "Santino's Little Italy",
      neighborhood: "Tosa Village",
      style: "Italian-American",
      priceRange: "$$",
      address: "7606 W State St, Wauwatosa, WI 53213",
      description: "Consistently ranked Milwaukee's best pizza. Santino's delivers exceptional pies in a cozy setting. The Agrigento and Diavolo pizzas get rave reviews, and everything from the sauce to the crust is made with care.",
      mustTry: "Agrigento Pizza, Diavolo, House Salad",
      insiderTip: "Reservations recommended for dinner. The lunch specials are a great value.",
      bestFor: "Special occasions, date nights, pizza purists",
    },
    {
      name: "Zaffiro's Pizza",
      neighborhood: "Multiple Locations",
      style: "Milwaukee Tavern-Style",
      priceRange: "$$",
      address: "1724 N Farwell Ave (Original), plus downtown and suburbs",
      description: "Milwaukee's favorite pizzeria since the 1950s. This Sicilian immigrant family has been serving thin-crust tavern-style pizza for over 70 years. The original Farwell location has the most authentic atmosphere.",
      mustTry: "Classic Tavern-Style with Sausage, Pepperoni",
      insiderTip: "The original Farwell location is tiny—go early or expect a wait.",
      bestFor: "Milwaukee tradition, tavern-style purists, history buffs",
    },
  ],
  neapolitan: [
    {
      name: "San Giorgio Pizzeria Napoletana",
      neighborhood: "Third Ward",
      style: "Authentic Neapolitan",
      priceRange: "$$-$$$",
      address: "207 E Buffalo St, Milwaukee, WI 53202",
      description: "The closest you'll get to Naples without a plane ticket. San Giorgio's exceptional attention to detail, imported ingredients, and wood-fired oven produce pizzas with that signature charred, chewy crust.",
      mustTry: "Margherita D.O.C., Diavola, any seasonal special",
      insiderTip: "Sit at the bar to watch the pizza-making process. It's mesmerizing.",
      bestFor: "Neapolitan purists, date nights, Third Ward visits",
    },
    {
      name: "Fixture Pizza Pub",
      neighborhood: "Bay View",
      style: "Wood-Fired Neapolitan",
      priceRange: "$$",
      address: "2379 S Howell Ave, Milwaukee, WI 53207",
      description: "Bay View's answer to Neapolitan pizza. The wood-fired oven and quality ingredients create excellent pies in a neighborhood pub setting. Great beer selection too.",
      mustTry: "Margherita, any seasonal special",
      insiderTip: "The outdoor seating is great in summer. Beer pairings are on point.",
      bestFor: "Bay View locals, craft beer lovers, casual pizza nights",
    },
  ],
  tavernStyle: [
    {
      name: "Transfer Pizzeria Café",
      neighborhood: "Walker's Point",
      style: "Cracker-Crust Tavern",
      priceRange: "$$",
      address: "101 W Mitchell St, Milwaukee, WI 53204",
      description: "Known for their unique cracker crust that offers a satisfying crunch with each bite. Transfer represents modern Milwaukee tavern-style with quality ingredients and craft beer.",
      mustTry: "Any pizza with their signature cracker crust, Local beers",
      insiderTip: "Great spot before a show at Turner Hall—it's right next door.",
      bestFor: "Pre-concert dining, cracker crust fans, Walker's Point nights",
    },
    {
      name: "Classic Slice",
      neighborhood: "Bay View",
      style: "NY Style / By the Slice",
      priceRange: "$",
      address: "2273 S Howell Ave, Milwaukee, WI 53207",
      description: "The best by-the-slice pizza in Milwaukee. Massive, foldable slices with that perfect NY-style chew. Perfect for late-night cravings or a quick lunch.",
      mustTry: "Cheese Slice, Pepperoni, any daily special",
      insiderTip: "Late night on weekends is when this place shines.",
      bestFor: "Late night eats, by-the-slice, budget-friendly pizza",
    },
  ],
  detroit: [
    {
      name: "Brute Pizza",
      neighborhood: "Walker's Point",
      style: "Detroit-Style",
      priceRange: "$$",
      address: "Walker's Point, Milwaukee",
      description: "Detroit-style pizza done right in Milwaukee. The thick, airy crust with those crispy, caramelized cheese edges (called frico) makes this a unique pizza experience.",
      mustTry: "Classic Detroit, any weekly special",
      insiderTip: "They sometimes sell out—get there earlier rather than later.",
      bestFor: "Detroit-style fans, something different, adventurous eaters",
    },
  ],
  neighborhood: [
    {
      name: "Balistreri's Italian American Ristorante",
      neighborhood: "Wauwatosa",
      style: "Italian-American Classic",
      priceRange: "$$",
      address: "812 N 68th St, Wauwatosa, WI 53213",
      description: "A Milwaukee institution since 1978. Balistreri's serves old-school Italian-American pizza and pasta in generous portions. The atmosphere is classic and the pizza is consistently excellent.",
      mustTry: "House Pizza, Baked Pastas",
      insiderTip: "Come hungry—portions are huge. Great for families.",
      bestFor: "Families, old-school Italian, generous portions",
    },
    {
      name: "Pizzeria Scotty",
      neighborhood: "Shorewood",
      style: "Traditional Pizzeria",
      priceRange: "$$",
      address: "3969 N Oakland Ave, Shorewood, WI 53211",
      description: "A Shorewood neighborhood favorite known for quality ingredients and consistent execution. Pizzeria Scotty hits that sweet spot between traditional and elevated.",
      mustTry: "Build your own with quality toppings",
      insiderTip: "Delivery is solid if you're in the East Side area.",
      bestFor: "Shorewood/East Side residents, delivery, consistent quality",
    },
    {
      name: "Amelia's Pizzeria",
      neighborhood: "Bay View",
      style: "Bay View Classic",
      priceRange: "$$",
      address: "Bay View, Milwaukee",
      description: "A Bay View pizza staple serving solid pies in a no-frills neighborhood setting. Exactly what you want from a neighborhood pizzeria.",
      mustTry: "House specials, classic combinations",
      insiderTip: "Good for carryout when you want reliable neighborhood pizza.",
      bestFor: "Bay View locals, carryout, casual pizza nights",
    },
    {
      name: "Sorella",
      neighborhood: "East Side",
      style: "Italian-American",
      priceRange: "$$-$$$",
      address: "2535 N Farwell Ave, Milwaukee, WI 53211",
      description: "More than just pizza—Sorella is a full Italian experience. But the pizzas are excellent, with quality ingredients and thoughtful combinations.",
      mustTry: "Seasonal pizzas, pasta dishes",
      insiderTip: "Great date night spot—the full Italian menu is excellent.",
      bestFor: "Date nights, full Italian dinner, East Side dining",
    },
  ],
  specialty: [
    {
      name: "Maggio's Wood Fired Pizza",
      neighborhood: "West Allis",
      style: "Wood-Fired",
      priceRange: "$$",
      address: "7210 W Greenfield Ave, West Allis, WI 53214",
      description: "Wood-fired pizza in West Allis with a focus on fresh ingredients and proper technique. The char and smoke from the wood oven add depth to every pie.",
      mustTry: "Wood-fired specialty pizzas",
      insiderTip: "Worth the trip to West Allis for wood-fired fans.",
      bestFor: "Wood-fired enthusiasts, West Side residents",
    },
  ],
};

const faqs = [
  {
    question: "What is tavern-style pizza?",
    answer: "Tavern-style pizza is a Milwaukee/Midwest tradition featuring a thin, cracker-like crust that's crispy and sturdy enough to hold toppings without flopping. It's typically cut into squares (party cut) rather than triangles. This style originated in the taverns of Milwaukee and Chicago, designed to be eaten while drinking at the bar."
  },
  {
    question: "What is the best pizza in Milwaukee?",
    answer: "Top-rated Milwaukee pizzerias include Santino's Little Italy (best overall), San Giorgio Pizzeria Napoletana (best Neapolitan), Zaffiro's (classic Milwaukee tavern-style), and Transfer Pizzeria (cracker crust). The best pizza depends on your preferred style—Milwaukee has excellent options across all categories."
  },
  {
    question: "Where can I get New York style pizza in Milwaukee?",
    answer: "Classic Slice in Bay View is the go-to for NY-style by-the-slice pizza with large, foldable slices. For full pies, several spots offer NY-influenced styles, though Milwaukee's native tavern-style is more common."
  },
  {
    question: "What is Milwaukee known for in pizza?",
    answer: "Milwaukee is known for tavern-style pizza—thin, crispy crust cut into squares (party cut). Zaffiro's, opened in the 1950s by Sicilian immigrants, is considered the quintessential Milwaukee pizzeria. The style is meant to be shared with drinks in a tavern setting."
  },
  {
    question: "Where is the best Neapolitan pizza in Milwaukee?",
    answer: "San Giorgio Pizzeria Napoletana in the Third Ward is widely considered the best Neapolitan pizza in Milwaukee. Their wood-fired oven and imported ingredients produce authentic Naples-style pizza. Fixture Pizza Pub in Bay View is another excellent option."
  },
  {
    question: "Is there Detroit-style pizza in Milwaukee?",
    answer: "Yes! Brute Pizza in Walker's Point specializes in Detroit-style pizza with that signature thick, airy crust and caramelized cheese edges (frico). They've developed a cult following for their unique approach."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Pizza in Milwaukee 2026: Complete Pizza Guide",
    "description": "Discover the best pizza in Milwaukee, from tavern-style classics to Neapolitan wood-fired pies. Complete guide by style and neighborhood.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-pizza-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Pizza in Milwaukee", "item": "https://www.discover-milwaukee.com/best-pizza-milwaukee" }
    ]
  }
};

export default function BestPizzaMilwaukee() {
  const PizzaCard = ({ spot }) => (
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
          <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{spot.style}</span>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
        </div>
      </div>
      {spot.address && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Pizza in Milwaukee 2026 | Top Pizzerias by Style</title>
        <meta name="description" content="Find the best pizza in Milwaukee, WI. Tavern-style, Neapolitan, Detroit, and NY-style pizzerias. Complete 2026 guide with insider tips from locals." />
        <meta name="keywords" content="best pizza milwaukee, pizza milwaukee, tavern style pizza milwaukee, neapolitan pizza milwaukee, pizzerias milwaukee, Zaffiro's pizza" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-pizza-milwaukee" />

        <meta property="og:title" content="Best Pizza in Milwaukee 2026 | Complete Pizza Guide" />
        <meta property="og:description" content="Milwaukee's definitive pizza guide. Tavern-style classics to wood-fired Neapolitan across every neighborhood." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-pizza-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>DISCOVER MILWAUKEE</Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
            </div>
          </div>
        </nav>

        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED APRIL 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Pizza in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From Milwaukee's signature tavern-style to authentic Neapolitan wood-fired—every style of pizza done right.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK NAVIGATION</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neapolitan" style={{ color: c.green2, fontSize: "14px" }}>Neapolitan</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#tavern-style" style={{ color: c.green2, fontSize: "14px" }}>Tavern-Style</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Pizza in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The pizzerias that consistently earn top marks across all categories—quality, consistency, and atmosphere.
            </p>
            {pizzaSpots.bestOverall.map((spot, i) => <PizzaCard key={i} spot={spot} />)}
          </section>

          <section id="neapolitan" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neapolitan & Wood-Fired</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Authentic Naples-style pizza with charred, chewy crusts from proper wood-fired ovens.
            </p>
            {pizzaSpots.neapolitan.map((spot, i) => <PizzaCard key={i} spot={spot} />)}
          </section>

          <section id="tavern-style" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Tavern-Style & By the Slice</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's signature style—thin, crispy crust cut into squares, plus great slice spots.
            </p>
            {pizzaSpots.tavernStyle.map((spot, i) => <PizzaCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Detroit-Style</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Thick, airy crust with those signature caramelized cheese edges.
            </p>
            {pizzaSpots.detroit.map((spot, i) => <PizzaCard key={i} spot={spot} />)}
          </section>

          <section id="neighborhood" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Pizzerias</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The reliable spots that anchor their neighborhoods with consistent, quality pizza.
            </p>
            {pizzaSpots.neighborhood.map((spot, i) => <PizzaCard key={i} spot={spot} />)}
            {pizzaSpots.specialty.map((spot, i) => <PizzaCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants</Link>
              <Link href="/best-burgers-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Burgers</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Happy Hour Guide</Link>
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
