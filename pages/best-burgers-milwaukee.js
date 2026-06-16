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

const burgerSpots = {
  bestOverall: [
    {
      name: "The Diplomat",
      neighborhood: "Walker's Point",
      style: "Smash Burger Perfection",
      priceRange: "$$",
      address: "815 S 5th St, Milwaukee, WI 53204",
      description: "The Diplomat's burger is widely considered Milwaukee's #1. Inspired by McDonald's famous double-decker but elevated with everything made in-house—the bun, pickles, and special sauce. This is a bucket-list burger that lives up to the hype.",
      mustTry: "Diplomac Burger, triple-blanched fries",
      insiderTip: "The triple-blanched fries are essential. Get them every time.",
      bestFor: "Burger purists, special occasions, food lovers",
      verified: "Open 2026",
    },
    {
      name: "Solly's Grille",
      neighborhood: "Glendale",
      style: "Legendary Butter Burger",
      priceRange: "$",
      address: "4629 N Port Washington Rd, Glendale, WI 53212",
      description: "Since 1936, Solly's has served the original Wisconsin butter burger—a generous pat of Wisconsin butter melting over each patty. This is Milwaukee history on a plate, served in a classic diner setting.",
      mustTry: "Original Butter Burger, onion rings",
      insiderTip: "Go for the double. The butter-to-meat ratio is perfect.",
      bestFor: "Wisconsin tradition, classic diners, butter lovers",
      verified: "Open since 1936",
    },
  ],
  classicStyle: [
    {
      name: "Kopp's Frozen Custard",
      neighborhood: "Multiple Locations",
      style: "Wisconsin Institution",
      priceRange: "$",
      address: "Glendale, Greenfield, Brookfield locations",
      description: "Kopp's delivers Milwaukee's most consistent burger—wide, thin patties with a perfect char contrasting the soft, toasted bun. Pair with their legendary frozen custard for the full Wisconsin experience.",
      mustTry: "Jumbo Burger, flavor-of-the-day custard",
      insiderTip: "Check the flavor calendar online. Some custard flavors are worth planning around.",
      bestFor: "Families, consistent quality, frozen custard",
      verified: "All locations open",
    },
    {
      name: "Oscar's Pub & Grill",
      neighborhood: "Multiple Locations",
      style: "Classic Pub Burger",
      priceRange: "$",
      address: "1712 W Pierce St, Milwaukee, WI 53204",
      description: "Oscar's has been serving Milwaukee some of its best pub burgers for decades. Fresh beef, simple preparations, and a no-frills atmosphere make this a local favorite.",
      mustTry: "Oscar's Burger, cheese curds",
      insiderTip: "The Pierce Street location is the original. Cash-friendly atmosphere.",
      bestFor: "Classic pub experience, value, late night",
      verified: "Open 2026",
    },
    {
      name: "Sobelman's Pub & Grill",
      neighborhood: "Multiple Locations",
      style: "Milwaukee Famous",
      priceRange: "$$",
      address: "1900 W St Paul Ave, Milwaukee, WI 53233",
      description: "Sobelman's built its reputation on massive burgers and even more massive Bloody Marys. The burgers are thick, juicy, and topped with creative combinations that have made national news.",
      mustTry: "Sobelman's Burger, Bloody Mary",
      insiderTip: "The Bloody Mary is a full meal with a burger-like amount of toppings. Share it.",
      bestFor: "Out-of-town visitors, Bloody Mary fans, generous portions",
      verified: "Open 2026",
    },
  ],
  upscale: [
    {
      name: "Saint Bibiana",
      neighborhood: "Downtown",
      style: "Italian-American Steakhouse",
      priceRange: "$$$",
      address: "733 N Van Buren St, Milwaukee, WI 53202",
      description: "The burger at this Italian-American steakhouse has developed a cult following. Perfectly seasoned beef with elegant toppings in a refined but welcoming atmosphere.",
      mustTry: "The Burger, any pasta",
      insiderTip: "Make a reservation. The bar is first-come for walk-ins.",
      bestFor: "Date nights, business dinners, food enthusiasts",
      verified: "Open 2026",
    },
    {
      name: "Wild Roots",
      neighborhood: "Bay View",
      style: "Duck Fat Burger",
      priceRange: "$$",
      address: "2820 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Wild Roots' Duck Fat Burger has an incredibly rich crust on the exterior. Best prepared medium rare to maintain juiciness and tenderness—this is a burger for people who appreciate technique.",
      mustTry: "Duck Fat Burger (medium rare)",
      insiderTip: "Order medium rare. Trust the kitchen on this one.",
      bestFor: "Adventurous eaters, brunch, Bay View dining",
      verified: "Open 2026",
    },
  ],
  neighborhood: [
    {
      name: "Swingin' Door Exchange",
      neighborhood: "Downtown",
      style: "Historic Tavern",
      priceRange: "$$",
      address: "219 E Michigan St, Milwaukee, WI 53202",
      description: "This historic downtown tavern serves solid burgers in a space that's been a Milwaukee gathering spot for over a century. Classic atmosphere meets quality comfort food.",
      mustTry: "House Burger, Wisconsin cheese curds",
      insiderTip: "Great for lunch during downtown business hours. Less crowded mid-week.",
      bestFor: "Downtown lunch, after-work drinks, history buffs",
      verified: "Open 2026",
    },
    {
      name: "The Fatty Patty",
      neighborhood: "West Allis",
      style: "No-Frills Smash Burger",
      priceRange: "$",
      address: "7401 W Greenfield Ave, West Allis, WI 53214",
      description: "The Fatty Patty keeps it simple—smash burgers done right with fresh ingredients and no pretense. The kind of neighborhood spot that rewards regulars with consistently great food.",
      mustTry: "Double Fatty, hand-cut fries",
      insiderTip: "Worth the drive to West Allis. The double is the sweet spot.",
      bestFor: "Smash burger fans, value seekers, casual dining",
      verified: "Open 2026",
    },
    {
      name: "Draft & Vessel",
      neighborhood: "Wauwatosa",
      style: "Modern Craft Bar",
      priceRange: "$$",
      address: "7479 Harwood Ave, Wauwatosa, WI 53213",
      description: "Draft & Vessel pairs quality burgers with an impressive rotating tap list. The modern craft beer bar atmosphere and creative menu make it a Wauwatosa favorite.",
      mustTry: "Burger, local craft beer on tap",
      insiderTip: "The tap list rotates frequently. Check what's new and pair with your burger.",
      bestFor: "Craft beer lovers, Wauwatosa dining, groups",
      verified: "Open 2026",
    },
    {
      name: "Camino",
      neighborhood: "Walker's Point",
      style: "Latin-Inspired Burger",
      priceRange: "$$",
      address: "434 S 2nd St, Milwaukee, WI 53204",
      description: "Camino puts a Latin twist on the burger with unique seasonings and toppings that set it apart from standard pub fare. Creative cooking in a vibrant atmosphere.",
      mustTry: "Camino Burger, tequila cocktails",
      insiderTip: "The brunch burger is excellent. Great patio in warm weather.",
      bestFor: "Creative burgers, cocktails, Walker's Point nights",
      verified: "Open 2026",
    },
  ],
};

const faqs = [
  {
    question: "What's the best burger in Milwaukee?",
    answer: "The Diplomat's Diplomac Burger is consistently ranked #1 in Milwaukee. However, for classic Wisconsin style, Solly's butter burger and Kopp's custard-paired option are legendary.",
  },
  {
    question: "What is a Wisconsin butter burger?",
    answer: "A butter burger features a generous pat of Wisconsin butter placed on top of the hot patty so it melts down over the meat. Solly's Grille, serving this since 1936, is credited as the originator.",
  },
  {
    question: "Where can I get the best cheap burger in Milwaukee?",
    answer: "Kopp's offers excellent value with their jumbo burgers. Oscar's Pub & Grill and The Fatty Patty in West Allis are also great budget-friendly options.",
  },
  {
    question: "What makes Milwaukee burgers unique?",
    answer: "Milwaukee's burger scene is defined by the butter burger tradition, German-influenced pub culture, and fresh Wisconsin dairy. Many spots also pair burgers with frozen custard—a regional specialty.",
  },
  {
    question: "Best burger for a date night?",
    answer: "Saint Bibiana offers an upscale burger experience in a refined setting. Wild Roots in Bay View is another excellent choice for an impressive but not stuffy dining experience.",
  },
];

export default function BestBurgersMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "14 Best Burgers in Milwaukee: From Butter Burgers to Smash Burgers [2026]",
    description: "Discover Milwaukee's best burgers including legendary butter burgers at Solly's, smash burgers at The Diplomat, and classic pub burgers across the city.",
    image: "https://www.discover-milwaukee.com/images/best-burgers-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/best-burgers-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Best Burgers Milwaukee", item: "https://www.discover-milwaukee.com/best-burgers-milwaukee" },
    ],
  };

  const renderSpot = (spot) => (
    <div key={spot.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{spot.neighborhood}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{spot.priceRange}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{spot.style}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Must Try:</strong> <span style={{ color: "#555" }}>{spot.mustTry}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{spot.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{spot.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{spot.address} | {spot.verified}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>14 Best Burgers in Milwaukee: Butter Burgers, Smash Burgers & More [2026]</title>
        <meta name="description" content="Discover Milwaukee's best burgers from legendary Solly's butter burgers to The Diplomat's smash burgers. Local favorites, upscale options, and classic pub burgers." />
        <meta name="keywords" content="best burgers Milwaukee, Milwaukee burger, butter burger Milwaukee, Solly's Milwaukee, The Diplomat Milwaukee, smash burger Milwaukee, Wisconsin burger" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-burgers-milwaukee" />
        <meta property="og:title" content="14 Best Burgers in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From legendary butter burgers to perfect smash patties, find Milwaukee's best burgers with our expert guide." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-burgers-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-burgers-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>14 Best Burgers in Milwaukee: From Butter Burgers to Perfect Smash Patties</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee takes its burgers seriously. This is the birthplace of the butter burger, where Wisconsin dairy meets fresh beef in a combination that's been perfected over generations. From classic diners serving since the 1930s to modern spots reinventing the smash burger, the city offers something for every burger lover.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              Whether you want the legendary butter burger experience at Solly's, the bucket-list-worthy Diplomac at The Diplomat, or a solid pub burger with local craft beer, this guide covers the best Milwaukee has to offer—all verified open and serving in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All restaurants verified open</p>
          </header>
          <NewsletterCTA />          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Burgers in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>The Diplomat, Solly's Grille, Kopp's Frozen Custard, Oscar's Pub & Grill, Sobelman's Pub & Grill</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Best Overall</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>The burgers that define Milwaukee's scene</p>
            {burgerSpots.bestOverall.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Classic Milwaukee Style</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Institutions serving time-tested recipes</p>
            {burgerSpots.classicStyle.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Upscale Burgers</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>When you want something special</p>
            {burgerSpots.upscale.map(renderSpot)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Neighborhood Favorites</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Local spots worth seeking out</p>
            {burgerSpots.neighborhood.map(renderSpot)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Milwaukee Burger Traditions</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>The Butter Burger</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Wisconsin's signature contribution to burger culture. A pat of local butter melts over the hot patty, creating a rich, indulgent experience. Solly's has served this since 1936.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Frozen Custard Pairing</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>Many Milwaukee burger spots also serve frozen custard—a richer, creamier version of ice cream. Kopp's is famous for this combination.</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px" }}>Friday Fish Fry Alternative</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>While Friday fish fry is a Wisconsin tradition, many burger spots also excel on Fridays. It's your call—surf or turf.</p>
              </div>
            </div>
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
              <Link href="/best-fish-fry-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Fish Fry</Link>
              <Link href="/best-tacos-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Tacos</Link>
              <Link href="/best-restaurants-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>All Restaurants</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's best burgers since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
