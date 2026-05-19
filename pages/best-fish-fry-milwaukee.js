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

const fishFrySpots = {
  bestOverall: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Brewer's Hill",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "The quintessential Milwaukee fish fry experience. Crispy beer-battered cod, house-made potato pancakes, coleslaw, rye bread, and applesauce—served alongside excellent craft beer. Friday nights feature live polka music, creating an atmosphere that's pure Wisconsin.",
      fishOptions: "Beer-battered cod, baked cod, lake perch",
      sides: "Potato pancakes, fries, coleslaw, rye bread, applesauce",
      insiderTip: "No reservations—arrive by 5pm or expect a wait. Grab a beer and enjoy the brewery tour while you wait.",
      bestFor: "First-timers, tourists, authentic Milwaukee experience",
      allYouCanEat: false,
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      description: "Beer-battered cod or perch that comes out in crunchy, deep-golden batter that locks in juiciness. The homemade tartar sauce gets mentions in every review for its zesty flavor. A neighborhood institution.",
      fishOptions: "Beer-battered cod, perch",
      sides: "Potato pancakes or fries, coleslaw, rye bread",
      insiderTip: "The tartar sauce is house-made and exceptional. Ask for extra.",
      bestFor: "Sports fans, neighborhood regulars, quality over quantity",
      allYouCanEat: false,
    },
  ],
  traditional: [
    {
      name: "Swingin' Door Exchange",
      neighborhood: "Downtown",
      priceRange: "$$",
      address: "219 E Michigan St, Milwaukee, WI 53202",
      description: "Feast on crispy, beer-battered cod or perch with all the must-haves in a setting where Friday fish fry makes any visitor feel like a local. Often recommended to out-of-towners for the authentic Milwaukee fish fry experience.",
      fishOptions: "Beer-battered cod, perch",
      sides: "Classic sides, coleslaw, rye bread",
      insiderTip: "Good for groups—the space is larger than most neighborhood taverns.",
      bestFor: "Visitors, downtown workers, groups",
      allYouCanEat: false,
    },
    {
      name: "Erv's Mug",
      neighborhood: "South Side",
      priceRange: "$$",
      address: "7001 W Oklahoma Ave, Milwaukee, WI 53219",
      description: "Renowned for its beer-battered lake perch—a treasured fish in Wisconsin fish fries. Erv's represents the neighborhood tavern fish fry at its finest: no pretense, just excellent fried fish.",
      fishOptions: "Lake perch (specialty), cod",
      sides: "Traditional sides",
      insiderTip: "Lake perch is the move here. It's what they're known for.",
      bestFor: "Perch lovers, neighborhood authenticity",
      allYouCanEat: false,
    },
    {
      name: "Maxie's Southern Comfort",
      neighborhood: "West Side",
      priceRange: "$$",
      address: "6732 W Fairview Ave, Milwaukee, WI 53213",
      description: "A unique twist on fish fry—beer-battered haddock with creamy coleslaw, fries, and house-made tartar sauce. The fish has a nice crispy exterior that isn't overly heavy or greasy. Southern hospitality meets Wisconsin tradition.",
      fishOptions: "Beer-battered haddock",
      sides: "Fries, creamy coleslaw, house-made tartar sauce",
      insiderTip: "The oyster happy hour is also excellent. Combine both for a seafood feast.",
      bestFor: "Southern food fans, oyster lovers, unique fish fry experience",
      allYouCanEat: false,
    },
  ],
  allYouCanEat: [
    {
      name: "Kegel's Inn",
      neighborhood: "West Allis",
      priceRange: "$$",
      address: "5901 W National Ave, West Allis, WI 53214",
      description: "A German-American institution since 1924 with one of the area's most popular all-you-can-eat fish fries. The old-world charm and generous portions make this a Friday night tradition for many Milwaukee families.",
      fishOptions: "Cod, perch",
      sides: "Potato pancakes, German potato salad, coleslaw, rye bread",
      insiderTip: "Make reservations—this place gets packed. The German specialties are also excellent.",
      bestFor: "Big appetites, families, German food lovers",
      allYouCanEat: true,
    },
    {
      name: "Serb Hall",
      neighborhood: "South Side",
      priceRange: "$-$$",
      address: "5101 W Oklahoma Ave, Milwaukee, WI 53219",
      description: "A Milwaukee institution serving all-you-can-eat fish fry since 1950. The banquet-hall atmosphere and family-style service make this a quintessential Milwaukee experience.",
      fishOptions: "Serbian-style breaded fish",
      sides: "Potato salad, coleslaw, bread",
      insiderTip: "Cash only. Come hungry—the portions are legendary.",
      bestFor: "Value seekers, large groups, Milwaukee tradition",
      allYouCanEat: true,
    },
  ],
  neighborhood: [
    {
      name: "Barnacle Bud's",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "1955 S Hilbert Ave, Milwaukee, WI 53207",
      description: "A nautical-themed neighborhood spot with solid fish fry and waterfront-adjacent vibes. The casual atmosphere and reasonable prices make it a Bay View favorite.",
      fishOptions: "Cod, perch",
      sides: "Fries, coleslaw",
      insiderTip: "Get there early for parking—the lot fills up fast on Fridays.",
      bestFor: "Bay View locals, casual dining",
      allYouCanEat: false,
    },
    {
      name: "Three Brothers",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2414 S St Clair St, Milwaukee, WI 53207",
      description: "Better known for Serbian cuisine, Three Brothers also serves an excellent fish fry on Fridays. The unique setting in a historic building adds to the charm.",
      fishOptions: "Breaded fish",
      sides: "Serbian-influenced sides",
      insiderTip: "Try the Serbian specialties alongside your fish fry for a unique experience.",
      bestFor: "Adventurous eaters, unique atmosphere",
      allYouCanEat: false,
    },
  ],
  upscale: [
    {
      name: "Harbor House",
      neighborhood: "Downtown Lakefront",
      priceRange: "$$$",
      address: "550 N Harbor Dr, Milwaukee, WI 53202",
      description: "An elevated take on fish fry with Lake Michigan views. Fresh seafood, refined preparations, and a stunning setting make this perfect for a special Friday occasion.",
      fishOptions: "Market fish, premium preparations",
      sides: "Elevated classic sides",
      insiderTip: "Request lakeside seating. The view is spectacular.",
      bestFor: "Special occasions, date nights, visitors wanting upscale",
      allYouCanEat: false,
    },
    {
      name: "St. Paul Fish Company",
      neighborhood: "Third Ward",
      priceRange: "$$$",
      address: "400 N Water St, Milwaukee, WI 53202",
      description: "Located in the Milwaukee Public Market, St. Paul Fish Company offers some of the freshest fish in the city. Their fish fry showcases quality seafood in a more refined preparation.",
      fishOptions: "Fresh market fish",
      sides: "Market sides",
      insiderTip: "Get the oysters to start—they're the best in Milwaukee.",
      bestFor: "Seafood purists, quality over quantity, Public Market visitors",
      allYouCanEat: false,
    },
  ],
};

const faqs = [
  {
    question: "What is a Wisconsin Friday fish fry?",
    answer: "The Friday fish fry is a beloved Wisconsin tradition with origins in Catholic dietary restrictions and German/Polish immigrant heritage. A classic fish fry includes beer-battered or breaded fish (usually cod or perch), potato pancakes or fries, coleslaw, rye bread, and tartar sauce. It's served at taverns, restaurants, and church halls across the state every Friday."
  },
  {
    question: "What fish is used in a Milwaukee fish fry?",
    answer: "Traditional Milwaukee fish fries feature cod (most common), lake perch (a Wisconsin favorite), haddock, walleye, or bluegill. Cod is typically beer-battered, while perch is often breaded. Lake perch is considered more premium and authentic to the Wisconsin tradition."
  },
  {
    question: "What comes with a fish fry in Milwaukee?",
    answer: "A complete Milwaukee fish fry includes the fried fish, potato pancakes (German influence) or french fries, creamy coleslaw, rye bread with butter, tartar sauce, and often a lemon wedge. Some places also serve applesauce. Beer is the traditional beverage pairing."
  },
  {
    question: "Where is the best fish fry in Milwaukee?",
    answer: "Top fish fry spots include Lakefront Brewery (classic experience with polka music), Steny's (excellent batter), Kegel's Inn (all-you-can-eat), and Serb Hall (legendary institution). The best fish fry often depends on whether you prefer atmosphere, value, or quality fish."
  },
  {
    question: "Is fish fry only on Fridays in Milwaukee?",
    answer: "While Friday is traditional (due to Catholic no-meat Fridays), many Milwaukee restaurants serve fish fry throughout the week. However, the full Friday night fish fry experience—with the crowds, the atmosphere, and often live music—is specifically a Friday tradition."
  },
  {
    question: "Where can I get all-you-can-eat fish fry in Milwaukee?",
    answer: "Popular all-you-can-eat fish fry spots include Kegel's Inn in West Allis and Serb Hall on the South Side. These spots are especially popular with big appetites and families. Reservations are recommended, especially at Kegel's."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Fish Fry in Milwaukee 2026: Complete Friday Fish Fry Guide",
    "description": "Discover the best Friday fish fry in Milwaukee, WI. Traditional taverns, all-you-can-eat spots, and the authentic Wisconsin fish fry experience.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-fish-fry-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Fish Fry in Milwaukee", "item": "https://www.discover-milwaukee.com/best-fish-fry-milwaukee" }
    ]
  }
};

export default function BestFishFryMilwaukee() {
  const FishFryCard = ({ spot }) => (
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
          {spot.allYouCanEat && (
            <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>ALL-YOU-CAN-EAT</span>
          )}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>FISH OPTIONS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.fishOptions}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>SIDES</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.sides}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
      {spot.address && (
        <p style={{ fontSize: "13px", color: "#777", marginBottom: 0 }}>{spot.address}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Fish Fry in Milwaukee 2026 | Friday Fish Fry Guide</title>
        <meta name="description" content="Find the best Friday fish fry in Milwaukee, WI. Traditional taverns, all-you-can-eat spots, beer-battered cod, lake perch, and authentic Wisconsin fish fry tradition." />
        <meta name="keywords" content="best fish fry milwaukee, friday fish fry milwaukee, wisconsin fish fry, beer battered cod milwaukee, lake perch milwaukee, all you can eat fish fry" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-fish-fry-milwaukee" />

        <meta property="og:title" content="Best Fish Fry in Milwaukee 2026 | Friday Fish Fry Guide" />
        <meta property="og:description" content="Milwaukee's definitive fish fry guide. Traditional taverns, all-you-can-eat spots, and the authentic Wisconsin Friday fish fry experience." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-fish-fry-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>WISCONSIN TRADITION</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Fish Fry in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              The Friday fish fry is more than a meal in Wisconsin—it's a cultural institution. Here's where to find the best in Milwaukee.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK NAVIGATION</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#all-you-can-eat" style={{ color: c.green2, fontSize: "14px" }}>All-You-Can-Eat</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#traditional" style={{ color: c.green2, fontSize: "14px" }}>Traditional</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Wisconsin Fish Fry Tradition Box */}
          <div style={{ backgroundColor: c.yellow, padding: "24px", borderRadius: "16px", marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>The Wisconsin Fish Fry Tradition</h2>
            <p style={{ color: c.green1, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
              The Friday fish fry dates back to Catholic dietary restrictions and was popularized by German and Polish immigrants in the 19th century. The Kashubes who settled on Jones Island were among the first to serve fried fish in taverns alongside local beer. Today, it's a beloved Wisconsin tradition served in taverns, restaurants, and church halls every Friday—and year-round in many spots.
            </p>
          </div>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These spots deliver the complete fish fry experience: excellent fish, perfect sides, and authentic atmosphere.
            </p>
            {fishFrySpots.bestOverall.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section id="all-you-can-eat" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>All-You-Can-Eat Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Come hungry. These spots serve unlimited fish for one price—a Milwaukee tradition for those with serious appetites.
            </p>
            {fishFrySpots.allYouCanEat.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section id="traditional" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Traditional Fish Fry Spots</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Classic preparations in settings that have been serving fish fry for generations.
            </p>
            {fishFrySpots.traditional.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section id="neighborhood" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local taverns where the fish fry is a weekly community gathering.
            </p>
            {fishFrySpots.neighborhood.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Upscale Fish Fry</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Elevated takes on the tradition for special Friday occasions.
            </p>
            {fishFrySpots.upscale.map((spot, i) => <FishFryCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/best-dive-bars-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Dive Bars</Link>
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
