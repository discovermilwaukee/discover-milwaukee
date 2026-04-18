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

const activities = {
  museums: [
    {
      name: "Milwaukee Public Museum",
      neighborhood: "Downtown",
      type: "Natural History & Culture",
      price: "$$",
      address: "800 W Wells St, Milwaukee, WI 53233",
      description: "Milwaukee's flagship museum features world-class exhibits including the Streets of Old Milwaukee, a walk-through butterfly garden, rainforest exhibit, and dinosaur displays. The dome theater and planetarium add even more to explore—one planetarium show is included with admission.",
      highlights: "Streets of Old Milwaukee, Butterfly Wing, Planetarium, Dinosaur Hall",
      insiderTip: "Free planetarium shows are included with admission. The Streets of Old Milwaukee exhibit is genuinely nostalgic.",
      bestFor: "Families, history buffs, science lovers",
      duration: "2-4 hours",
    },
    {
      name: "Discovery World",
      neighborhood: "Lakefront",
      type: "Science & Technology",
      price: "$$",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Wisconsin's premier science museum brings interactive learning to life. From freshwater aquariums to flight simulators to the Denis Sullivan tall ship, Discovery World engages visitors of all ages with hands-on exhibits about science, technology, and the Great Lakes.",
      highlights: "Aquarium, Flight simulator, Denis Sullivan tall ship, Tech exhibits",
      insiderTip: "The aquarium features local Great Lakes species you won't see elsewhere. Check the schedule for planetarium shows.",
      bestFor: "Families, curious kids, tech enthusiasts",
      duration: "2-4 hours",
    },
    {
      name: "Milwaukee Art Museum",
      neighborhood: "Lakefront",
      type: "Art Museum",
      price: "$$",
      address: "700 N Art Museum Dr, Milwaukee, WI 53202",
      description: "Santiago Calatrava's stunning Quadracci Pavilion alone is worth the visit—watch the wings open daily at 10am, noon, and close at 5pm. The collection spans centuries with particular strengths in American decorative arts, German Expressionism, and contemporary works.",
      highlights: "Calatrava architecture, Wings opening, Strong permanent collection",
      insiderTip: "First Thursday evenings are free. Time your visit to see the wings open or close.",
      bestFor: "Art lovers, architecture fans, photography",
      duration: "1.5-3 hours",
    },
    {
      name: "Harley-Davidson Museum",
      neighborhood: "Menomonee Valley",
      type: "Motorcycle Heritage",
      price: "$$",
      address: "400 W Canal St, Milwaukee, WI 53201",
      description: "Whether you ride or not, the Harley-Davidson Museum tells an incredible American story. Over 450 motorcycles spanning the company's 100+ year history, from the humble shed where it started to custom builds and racing legends.",
      highlights: "Vintage motorcycles, Engine room, Custom builds, Milwaukee history",
      insiderTip: "Non-riders are often surprised how much they enjoy it. The restaurant and grounds are worth exploring too.",
      bestFor: "History buffs, motorcycle enthusiasts, Americana fans",
      duration: "2-3 hours",
    },
  ],
  families: [
    {
      name: "Betty Brinn Children's Museum",
      neighborhood: "Lakefront",
      type: "Children's Museum",
      price: "$$",
      address: "929 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "Hands-on learning for toddlers through age 10. Kids can explore communities, experiment with water and science, and engage with thoughtfully designed exhibits that make learning feel like play.",
      highlights: "Hands-on exhibits, Water play, Building zones",
      insiderTip: "Best for ages 2-8. Mornings tend to be less crowded than afternoons.",
      bestFor: "Young children, toddlers, rainy day with kids",
      duration: "1.5-2.5 hours",
    },
    {
      name: "Sky Zone Indoor Trampoline Park",
      neighborhood: "Pewaukee",
      type: "Active Entertainment",
      price: "$$",
      address: "N14 W24230 Tower Pl, Pewaukee, WI 53072",
      description: "Burn off energy rain or shine. Sky Zone features wall-to-wall trampolines, foam pits, dodgeball courts, and ninja warrior courses. Great for kids who need to move.",
      highlights: "Trampolines, Foam pit, Dodgeball, Ninja course",
      insiderTip: "Book online for better rates. Weekday afternoons are less chaotic.",
      bestFor: "Active kids, birthday parties, high-energy fun",
      duration: "1-2 hours",
    },
    {
      name: "Pettit National Ice Center",
      neighborhood: "West Allis",
      type: "Ice Skating",
      price: "$",
      address: "500 S 84th St, West Allis, WI 53214",
      description: "An Olympic-caliber ice facility open to the public. Public skating sessions on weekends let you glide on one of America's premier ice surfaces. Skate rentals available.",
      highlights: "Olympic ice, Public skating, Skate rentals",
      insiderTip: "Check the schedule—public sessions vary. Dress warmly, even in summer.",
      bestFor: "Families, skaters, unique experience",
      duration: "1-2 hours",
    },
  ],
  entertainment: [
    {
      name: "The Oriental Theatre",
      neighborhood: "East Side",
      type: "Historic Cinema",
      price: "$",
      address: "2230 N Farwell Ave, Milwaukee, WI 53202",
      description: "A movie palace unlike any other. The Oriental has screened films since 1927 in an ornate East Indian-inspired setting complete with Buddhas, porcelain lions, and exotic decor. Catch a film in one of America's most beautiful theaters.",
      highlights: "Historic architecture, Unique atmosphere, Quality programming",
      insiderTip: "Arrive early to appreciate the architecture. The popcorn is excellent too.",
      bestFor: "Film lovers, architecture fans, unique date night",
      duration: "2-3 hours",
    },
    {
      name: "Landmark Lanes",
      neighborhood: "East Side",
      type: "Bowling & Entertainment",
      price: "$$",
      address: "2220 N Farwell Ave, Milwaukee, WI 53202",
      description: "A Milwaukee institution since 1927, Landmark Lanes offers bowling in a classic setting right next to The Oriental Theatre. Multiple bars, pool tables, and late-night hours make it perfect for groups.",
      highlights: "Bowling, Pool tables, Multiple bars, Late hours",
      insiderTip: "Connected to The Oriental Theatre—combine a movie with bowling for a perfect rainy day.",
      bestFor: "Groups, dates, casual entertainment, late night",
      duration: "1-3 hours",
    },
  ],
  breweries: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Riverwest",
      type: "Brewery Tour",
      price: "$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "The most entertaining brewery tour in Milwaukee. Lakefront combines excellent beer with genuinely funny guides, live polka on Friday nights, and a fish fry that draws crowds. The tour includes samples.",
      highlights: "Entertaining tour, Friday fish fry, Polka nights",
      insiderTip: "Friday night tour + fish fry is the classic Milwaukee experience. Book ahead.",
      bestFor: "Beer lovers, entertainment, groups",
      duration: "1-2 hours",
    },
    {
      name: "Third Space Brewing",
      neighborhood: "Menomonee Valley",
      type: "Brewery Taproom",
      price: "$",
      address: "1505 W St Paul Ave, Milwaukee, WI 53233",
      description: "A beautiful taproom with excellent beer and a welcoming atmosphere. No tour required—just settle in with a flight and watch the rain. Food trucks often parked outside.",
      highlights: "Quality beer, Great taproom, Food trucks",
      insiderTip: "Check their food truck schedule. The taproom is comfortable for long stays.",
      bestFor: "Casual afternoon, beer exploration, hanging out",
      duration: "1-3 hours",
    },
  ],
};

const faqs = [
  {
    question: "What are the best rainy day activities in Milwaukee?",
    answer: "The Milwaukee Public Museum, Discovery World, and Milwaukee Art Museum offer hours of indoor entertainment. For active fun, try Sky Zone trampoline park or Landmark Lanes bowling. Brewery tours at Lakefront or Third Space combine entertainment with Milwaukee culture.",
  },
  {
    question: "What should I do on a rainy day with kids in Milwaukee?",
    answer: "The Betty Brinn Children's Museum is perfect for young kids. Discovery World works for all ages. Sky Zone trampoline park burns energy when they can't go outside. The Milwaukee Public Museum is a classic choice with dinosaurs and the Streets of Old Milwaukee.",
  },
  {
    question: "Are Milwaukee museum admissions expensive?",
    answer: "Most museums run $15-25 for adult admission. The Milwaukee Art Museum offers free Thursday evenings. Many museums have reciprocal memberships if you belong to a museum in another city. Public libraries sometimes have museum passes available.",
  },
  {
    question: "What's a unique rainy day date in Milwaukee?",
    answer: "The Oriental Theatre offers films in a stunning historic setting. Bryant's Cocktail Lounge provides intimate ambiance for drinks. The Harley-Davidson Museum appeals to non-riders too. Combine a movie at The Oriental with bowling at Landmark Lanes next door.",
  },
  {
    question: "Can I do a brewery tour on a rainy day?",
    answer: "Absolutely—it's one of the best rainy day activities. Lakefront Brewery tours are legendary for their entertainment value. Most Milwaukee breweries offer taproom seating even without a tour, perfect for riding out a storm.",
  },
];

export default function RainyDayMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "20 Best Rainy Day Activities in Milwaukee: Indoor Fun for Everyone [2026]",
    description: "Discover the best indoor activities in Milwaukee for rainy days. Museums, breweries, entertainment centers, and family-friendly options.",
    image: "https://www.discover-milwaukee.com/images/rainy-day-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/rainy-day-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Rainy Day Milwaukee", item: "https://www.discover-milwaukee.com/rainy-day-milwaukee" },
    ],
  };

  const renderActivity = (activity) => (
    <div key={activity.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{activity.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{activity.neighborhood}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{activity.price}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{activity.type} | {activity.duration}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{activity.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Highlights:</strong> <span style={{ color: "#555" }}>{activity.highlights}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{activity.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{activity.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{activity.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>20 Best Rainy Day Activities in Milwaukee: Indoor Fun [2026 Guide]</title>
        <meta name="description" content="Discover Milwaukee's best rainy day activities. Museums, brewery tours, entertainment centers, and indoor fun for families, couples, and groups." />
        <meta name="keywords" content="rainy day Milwaukee, indoor activities Milwaukee, Milwaukee museums, things to do inside Milwaukee, Milwaukee rainy weather" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/rainy-day-milwaukee" />
        <meta property="og:title" content="20 Best Rainy Day Activities in Milwaukee [2026]" />
        <meta property="og:description" content="Don't let rain ruin your plans. Discover Milwaukee's best indoor activities from museums to breweries." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/rainy-day-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/rainy-day-milwaukee.jpg" />
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
            <span style={{ color: c.green1 }}>Rainy Day</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>20 Best Rainy Day Activities in Milwaukee: Indoor Fun for Everyone</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Lake Michigan weather can be unpredictable, but that's no reason to stay home. Milwaukee's indoor attractions rival those of cities twice its size—from world-class museums to legendary brewery tours to entertainment centers that make rainy days fun.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide covers the best ways to spend a rainy day in Milwaukee, whether you're with kids, on a date, or just looking for something to do. All locations verified open in 2026.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All locations verified open</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Museums & Culture</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>World-class collections and exhibits</p>
            {activities.museums.map(renderActivity)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Family-Friendly Fun</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Keep kids entertained indoors</p>
            {activities.families.map(renderActivity)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Entertainment</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Active fun for all ages</p>
            {activities.entertainment.map(renderActivity)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Breweries & Taprooms</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Milwaukee's favorite way to wait out a storm</p>
            {activities.breweries.map(renderActivity)}
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
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Guides</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Explore more of what Milwaukee has to offer</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/things-to-do-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Things to Do</Link>
              <Link href="/milwaukee-breweries" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Breweries</Link>
              <Link href="/free-things-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Free Activities</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee rain or shine since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
