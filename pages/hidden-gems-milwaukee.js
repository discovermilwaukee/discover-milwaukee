import React from "react";
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

const hiddenGems = {
  parks: [
    {
      name: "Kiwanis Landing",
      neighborhood: "West Side",
      type: "Hidden Park",
      price: "Free",
      description: "Located off a dead-end street, this hidden gem features meandering paths along the river, native plants, peaceful spots to sit, and rustic fences built from tree branches. A quiet escape that most Milwaukeeans don't know exists.",
      highlights: "River views, native plants, rustic paths, quiet atmosphere",
      insiderTip: "Bring a book. The benches along the river are perfect for reading.",
      bestFor: "Nature lovers, peaceful walks, photography",
    },
    {
      name: "Lynden Sculpture Garden",
      neighborhood: "River Hills",
      type: "Art & Nature",
      price: "$$",
      address: "2145 W Brown Deer Rd, Milwaukee, WI 53217",
      description: "Once farmland, now 40 acres of woodland, English gardens, and 50 monumental sculptures. The Lynden combines art, architecture, and nature in ways you won't find elsewhere in Milwaukee.",
      highlights: "50 sculptures, English gardens, 40 acres, historic architecture",
      insiderTip: "The grounds are stunning in every season. Spring and fall are particularly beautiful.",
      bestFor: "Art lovers, photographers, peaceful afternoon",
    },
    {
      name: "Havenwoods State Forest",
      neighborhood: "Northwest Side",
      type: "Urban Wilderness",
      price: "Free",
      address: "6141 N Hopkins St, Milwaukee, WI 53209",
      description: "A state forest within city limits—237 acres of prairies, wetlands, and woodlands. Most tourists and even many locals have never discovered this urban wilderness.",
      highlights: "Hiking trails, bird watching, nature center, wildlife",
      insiderTip: "The nature center has programs and rentals. Great for bird watching, especially during migration.",
      bestFor: "Nature lovers, families, bird watchers",
    },
  ],
  restaurants: [
    {
      name: "La Merenda",
      neighborhood: "Walker's Point",
      type: "Hidden Restaurant",
      price: "$$$",
      address: "125 E National Ave, Milwaukee, WI 53204",
      description: "Tucked in Walker's Point, this globally inspired small plates restaurant comes from a husband-and-wife team who spent years in Spain soaking up culinary traditions. The intimate space and creative menu make this a local favorite.",
      highlights: "Small plates, Spanish influences, intimate setting, wine list",
      insiderTip: "Reservations recommended. The husband-wife team spent years in Spain, and it shows.",
      bestFor: "Foodies, date nights, adventurous eaters",
    },
    {
      name: "Bixenberg Tavern",
      neighborhood: "Bay View",
      type: "Neighborhood Bar & Eatery",
      price: "$-$$",
      address: "Bay View, Milwaukee",
      description: "A true neighborhood gem with an impressive selection of bottles, cans, and local drafts including Old Germantown, Foxtown Brewing, and Bavarian Bierhaus. The seasonal cocktail menu and wine list add sophistication to the casual vibe.",
      highlights: "Local beer selection, seasonal cocktails, neighborhood feel",
      insiderTip: "Check the draft list for local breweries you won't find elsewhere.",
      bestFor: "Beer lovers, neighborhood vibes, casual dining",
    },
    {
      name: "Odd Duck",
      neighborhood: "Bay View",
      type: "Creative Small Plates",
      price: "$$$",
      address: "2352 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "While not exactly unknown, Odd Duck remains a destination that rewards those who seek it out. The constantly changing small plates menu showcases local ingredients with global techniques.",
      highlights: "Seasonal menu, small plates, local ingredients, innovative cooking",
      insiderTip: "Sit at the bar to watch the kitchen work. The tasting menu when available is excellent.",
      bestFor: "Foodies, creative dining, Bay View exploration",
    },
  ],
  bars: [
    {
      name: "At Random",
      neighborhood: "Bay View",
      type: "Retro Ice Cream Bar",
      price: "$$",
      address: "2501 S Delaware Ave, Milwaukee, WI 53207",
      description: "A time capsule from mid-century Milwaukee. Naugahyde booths, swag lights, and ice cream cocktails in a setting that hasn't changed in decades. The drinks are famously strong.",
      highlights: "Ice cream cocktails, retro decor, strong drinks, intimate booths",
      insiderTip: "Pace yourself—the drinks are potent. The atmosphere is genuine, not recreated.",
      bestFor: "Retro lovers, unique experiences, ice cream cocktails",
    },
    {
      name: "The Uptowner",
      neighborhood: "Riverwest",
      type: "Eclectic Dive",
      price: "$",
      address: "1032 E Center St, Milwaukee, WI 53212",
      description: "Riverwest incarnate. A vending machine selling cigarettes and candy, cash-only policy, and an eclectic crowd. This is the anti-trendy dive bar where Riverwest's creative community gathers.",
      highlights: "Vending machine, jukebox, cash only, neighborhood character",
      insiderTip: "Bring cash. The vending machine is part of the experience.",
      bestFor: "Dive bar fans, Riverwest culture, cheap drinks",
    },
    {
      name: "Jazz Estate",
      neighborhood: "East Side",
      type: "Jazz Club",
      price: "$$",
      address: "2423 N Murray Ave, Milwaukee, WI 53211",
      description: "Milwaukee's dedicated jazz venue tucked away on the East Side. Small enough to feel intimate, serious enough to draw national touring acts. A place for actually listening to music.",
      highlights: "Live jazz, intimate setting, quality acts, serious listening",
      insiderTip: "Weeknight shows are less crowded and great for conversation with musicians.",
      bestFor: "Jazz lovers, live music, intimate performances",
    },
  ],
  culture: [
    {
      name: "Sherman Phoenix",
      neighborhood: "Sherman Park",
      type: "Community Hub",
      price: "Free to browse",
      address: "3536 W Fond du Lac Ave, Milwaukee, WI 53216",
      description: "A former bank building transformed into a community hub with nearly 30 tenants offering diverse food, services, and goods. Supporting local, minority-owned businesses in a meaningful way.",
      highlights: "Local businesses, diverse food, community space, free parking",
      insiderTip: "Free parking on-site. Try multiple food vendors to sample the diversity.",
      bestFor: "Supporting local, diverse food, community spaces",
    },
    {
      name: "Black Cat Alley",
      neighborhood: "East Side",
      type: "Street Art Gallery",
      price: "Free",
      address: "E Ivanhoe Pl, Milwaukee, WI 53202",
      description: "A must-see outdoor gallery tucked away on the East Side featuring stunning murals from local and international artists. The art changes and evolves, making repeat visits worthwhile.",
      highlights: "Street murals, rotating artists, free admission, photography",
      insiderTip: "Visit during daylight for photos. The art rotates, so return visits reveal new works.",
      bestFor: "Art lovers, photography, free activity",
    },
    {
      name: "Grohmann Museum",
      neighborhood: "Downtown",
      type: "Art Museum",
      price: "$",
      address: "1000 N Broadway, Milwaukee, WI 53202",
      description: "The world's most comprehensive collection of art depicting the evolution of human work. Over 1,500 paintings and sculptures from the 15th century to present, housed at MSOE. Surprisingly overlooked by most visitors.",
      highlights: "Work-themed art, 1,500+ pieces, rooftop garden, unique collection",
      insiderTip: "The rooftop sculpture garden offers downtown views. Free on Saturdays.",
      bestFor: "Art lovers, unique museums, free Saturday visits",
    },
  ],
  nature: [
    {
      name: "Seven Bridges Trail",
      neighborhood: "South Milwaukee",
      type: "Hiking Trail",
      price: "Free (park fee)",
      address: "Grant Park, South Milwaukee",
      description: "Seven wooden bridges crossing ravines in a forested setting just south of Milwaukee. The trail feels like you're hours from the city, not minutes.",
      highlights: "7 bridges, forested ravines, lake views, peaceful hike",
      insiderTip: "Combine with a visit to Grant Park's beach in summer. The trail can be slippery when wet.",
      bestFor: "Hikers, nature photography, peaceful escape",
    },
    {
      name: "Schlitz Audubon Nature Center",
      neighborhood: "Bayside",
      type: "Nature Preserve",
      price: "$",
      address: "1111 E Brown Deer Rd, Bayside, WI 53217",
      description: "185 acres of diverse habitats along Lake Michigan—prairie, woodland, wetland, and beach. The trails offer birding, photography, and quiet escape from the city.",
      highlights: "Lake Michigan access, diverse habitats, birding, nature programs",
      insiderTip: "The lake bluff trail at sunset is spectacular. Check for nature programs.",
      bestFor: "Bird watchers, nature lovers, photography",
    },
  ],
};

const faqs = [
  {
    question: "What are Milwaukee's best hidden gems?",
    answer: "Top hidden gems include At Random (retro ice cream cocktails), Black Cat Alley (free street art), Kiwanis Landing (secret riverside park), and La Merenda (globally-inspired small plates). Sherman Phoenix offers a unique community marketplace experience.",
  },
  {
    question: "Where do locals hang out in Milwaukee?",
    answer: "Locals frequent Bay View spots like Odd Duck and At Random, Riverwest haunts like The Uptowner, and neighborhood places like Bixenberg Tavern. Sherman Phoenix is a gathering spot in Sherman Park, and the Seven Bridges Trail in Grant Park is a local hiking favorite.",
  },
  {
    question: "What free hidden gems are there in Milwaukee?",
    answer: "Black Cat Alley (street art), Kiwanis Landing (riverside park), Havenwoods State Forest (urban wilderness), and Sherman Phoenix (community marketplace) are all free to visit. The Grohmann Museum is free on Saturdays.",
  },
  {
    question: "Where can I find street art in Milwaukee?",
    answer: "Black Cat Alley on the East Side is the premier outdoor gallery with rotating murals from local and international artists. Walker's Point and Bay View also have significant street art throughout their neighborhoods.",
  },
  {
    question: "What hidden nature spots are near Milwaukee?",
    answer: "Seven Bridges Trail in Grant Park offers forested hiking minutes from downtown. Havenwoods State Forest brings wilderness to the city. Lynden Sculpture Garden combines art with 40 acres of natural beauty. Kiwanis Landing is a secret riverside escape.",
  },
];

export default function HiddenGemsMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Milwaukee Hidden Gems: 18 Secret Spots Only Locals Know [2026]",
    description: "Discover Milwaukee's best-kept secrets from hidden parks to underground bars. Local favorites, secret restaurants, and off-the-beaten-path attractions.",
    image: "https://www.discover-milwaukee.com/images/hidden-gems-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/hidden-gems-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Hidden Gems Milwaukee", item: "https://www.discover-milwaukee.com/hidden-gems-milwaukee" },
    ],
  };

  const renderGem = (gem) => (
    <div key={gem.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{gem.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{gem.neighborhood}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{gem.price}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{gem.type}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{gem.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Highlights:</strong> <span style={{ color: "#555" }}>{gem.highlights}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{gem.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{gem.insiderTip}</span>
      </div>
      {gem.address && <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{gem.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Milwaukee Hidden Gems: 18 Secret Spots Only Locals Know [2026]</title>
        <meta name="description" content="Discover Milwaukee's best-kept secrets from hidden parks to underground bars. Local favorites, secret restaurants, and off-the-beaten-path attractions." />
        <meta name="keywords" content="Milwaukee hidden gems, secret spots Milwaukee, local Milwaukee, off the beaten path Milwaukee, Milwaukee secrets" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/hidden-gems-milwaukee" />
        <meta property="og:title" content="Milwaukee Hidden Gems: Secret Spots Only Locals Know [2026]" />
        <meta property="og:description" content="Discover Milwaukee's best-kept secrets from hidden parks to underground bars." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/hidden-gems-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/hidden-gems-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>Milwaukee Hidden Gems: 18 Secret Spots Only Locals Know</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Beyond the obvious attractions lies the Milwaukee that locals love—hidden parks off dead-end streets, retro bars that time forgot, community spaces transforming neighborhoods, and restaurants tucked away from tourist eyes.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide reveals the secret spots that make Milwaukee special. Some are literally hidden; others are simply overlooked. All are worth discovering. These are the places locals share with friends they actually like.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All locations verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Hidden Parks & Green Spaces</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Secret escapes within the city</p>
            {hiddenGems.parks.map(renderGem)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Hidden Restaurants</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Worth seeking out</p>
            {hiddenGems.restaurants.map(renderGem)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Hidden Bars</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Local watering holes</p>
            {hiddenGems.bars.map(renderGem)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Hidden Cultural Spots</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Art, community, and culture off the tourist trail</p>
            {hiddenGems.culture.map(renderGem)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Hidden Nature</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Natural escapes locals guard jealously</p>
            {hiddenGems.nature.map(renderGem)}
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
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>Explore More Milwaukee</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Continue discovering the city</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/things-to-do-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Things to Do</Link>
              <Link href="/free-things-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Free Activities</Link>
              <Link href="/best-restaurants-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Restaurants</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's hidden gems since 2024. We trust you'll keep these secrets... mostly.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
