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

const wingSpots = {
  institutions: [
    {
      name: "TomKen's",
      neighborhood: "West Allis",
      priceRange: "$$",
      address: "8001 W Greenfield Ave, West Allis, WI 53214",
      special: "Multiple Milwaukee Wingfest wins",
      wingStyle: "Big wings with a light breading that locks in crunch and holds sauce — built for rotating, ambitious flavors.",
      mustTry: "JB3 — jerk, bourbon, brown sugar and buffalo. The sauce TomKen's is known for.",
      vibe: "Classic Milwaukee wing institution, no pretense",
      insiderTip: "This is the benchmark locals measure other wings against. The Neighborhood Draft's owner came up here — that's the lineage.",
    },
    {
      name: "Spitfire's on State",
      neighborhood: "Washington Heights",
      priceRange: "$$",
      address: "5018 W State St, Milwaukee, WI 53208",
      special: "30+ house-made sauces",
      wingStyle: "Fried, sauced, then finished on the grill so the sauce cooks into the wing instead of just coating it.",
      mustTry: "Spicy Garlic, redipped. Regularly called one of the best wings in the state.",
      vibe: "Sports bar, deep sauce menu, dialed-in technique",
      insiderTip: "Ask for any sauce 'redipped' — it doubles the sauce-into-wing effect that makes this place.",
    },
    {
      name: "Club Garibaldi",
      neighborhood: "Bay View",
      priceRange: "$",
      address: "2501 S Superior St, Milwaukee, WI 53207",
      special: "Wednesday wing special",
      wingStyle: "Marinated for days, then grilled to order behind the bar with a semi-spicy dry rub. One flavor, done right.",
      mustTry: "The signature dry-rub wings — there's no long sauce list because there doesn't need to be.",
      vibe: "Classic Bay View corner tavern, live music, community",
      insiderTip: "Wednesday is the move. Go early — locals have known about this for years and it fills up.",
    },
  ],
  sauced: [
    {
      name: "O'Lydia's Bar & Grill",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "338 S 1st St, Milwaukee, WI 53204",
      special: "14 sauces · 10 wings ~$17",
      wingStyle: "Grilled then finished in the fryer for a beautifully crusty skin on meaty drums and flats.",
      mustTry: "The hot dry rub (garam-masala leaning — clove and coriander) or the Jameson Brown Sugar.",
      vibe: "Walker's Point bar & grill, big flavor range",
      insiderTip: "The dual grill-then-fry method is why the skin holds up. Get a dry rub and a wet sauce to compare.",
    },
    {
      name: "The Neighborhood Draft",
      neighborhood: "Washington Heights",
      priceRange: "$$",
      address: "5921 W Vliet St, Milwaukee, WI 53208",
      special: "10 wings ~$14",
      wingStyle: "Grilled with delicate charring and juicy meat — TomKen's DNA, new address.",
      mustTry: "Dragon Buffalo (coconut milk, ghost pepper, curry, buffalo) or the JB3.",
      vibe: "Neighborhood bar, serious about wings",
      insiderTip: "Owner came from TomKen's, so the flavor pedigree is real. The Dragon Buffalo is the sleeper.",
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      priceRange: "$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      special: "Wing of the Month · 6/$8, 12/$16",
      wingStyle: "Brined, fried, sauced, then baked — a multi-step process that gets them extra crisp and sticky.",
      mustTry: "Whatever the Wing of the Month is, plus anything from honey BBQ (mild) to Cajun (hot).",
      vibe: "Big Walker's Point sports tavern, game-day energy",
      insiderTip: "The Wing of the Month is where the kitchen experiments — ask before you order the usual.",
    },
  ],
  specialty: [
    {
      name: "Merge",
      neighborhood: "East Side",
      priceRange: "$$",
      address: "1932 E Kenilworth Pl, Milwaukee, WI 53202",
      special: "Korean double-fried",
      wingStyle: "Korean fried wings, double-fried for a shatter-crisp shell that stays crisp under sauce.",
      mustTry: "Pick from six flavors — the crispy-meets-juicy texture is the whole point.",
      vibe: "Modern, East Side, something different",
      insiderTip: "If you think you're tired of wings, double-fried Korean style resets the whole category.",
    },
    {
      name: "Buffalo Boss",
      neighborhood: "Sherman Park",
      priceRange: "$$",
      address: "3536 W Fond du Lac Ave (Sherman Phoenix), Milwaukee, WI 53216",
      special: "Plant-based + traditional",
      wingStyle: "Known for genuinely good vegan/impossible wings alongside traditional fried wings.",
      mustTry: "The plant-based wings — the spot locals send vegetarians without an apology.",
      vibe: "Sherman Phoenix, inclusive, flavor-first",
      insiderTip: "Even committed carnivores order the meatless ones here. Bring a mixed group with no compromise.",
    },
    {
      name: "Mangos Cafe",
      neighborhood: "East Side",
      priceRange: "$",
      address: "1682 N Van Buren St, Milwaukee, WI 53202",
      special: "Wings Wednesday",
      wingStyle: "Caribbean-leaning wings with bold, sweet-heat island flavors.",
      mustTry: "Tropical Rum or Mango Habanero. Hot BBQ if you want it simpler.",
      vibe: "Casual, colorful, island flavors downtown-adjacent",
      insiderTip: "Wednesday is the value play. The Mango Habanero is the one people come back for.",
    },
  ],
  elevated: [
    {
      name: "Camino",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "434 S 2nd St, Milwaukee, WI 53204",
      special: "8 wings ~$15 (with fries)",
      wingStyle: "Crispy-charred, very meaty drumettes with a spicy, smoky house dry rub and mild heat.",
      mustTry: "The dry-rub drums — and the order comes with a pound of fries.",
      vibe: "Walker's Point, fire pits and outdoor seating",
      insiderTip: "The go-to for many locals' 'all things chicken.' Grab a fire-pit table when the weather cooperates.",
    },
    {
      name: "Elsa's on the Park",
      neighborhood: "Downtown",
      priceRange: "$$$",
      address: "833 N Jefferson St, Milwaukee, WI 53202",
      special: "Date-night wings",
      wingStyle: "The upscale, dressed-up version of bar wings — the spot when wings need to be a date, not a dive.",
      mustTry: "The wings paired with one of the burgers Elsa's is equally known for.",
      vibe: "Stylish, dim, downtown institution",
      insiderTip: "This is wings without the sports-bar TVs. Reserve-ish energy; go for the room as much as the food.",
    },
  ],
};

const faqs = [
  {
    question: "Where are the best chicken wings in Milwaukee?",
    answer: "Local favorites include TomKen's (West Allis, multiple Wingfest wins), Spitfire's on State (30+ house sauces), Club Garibaldi (Bay View, days-marinated dry rub), O'Lydia's, The Neighborhood Draft, and Steny's. Each does a distinct style — there's no single 'best,' but these are the proven names.",
  },
  {
    question: "Who has the best wing night or cheap wings in Milwaukee?",
    answer: "Club Garibaldi runs a well-known Wednesday wing special in Bay View, Mangos Cafe does Wings Wednesday on the East Side, and Natty Oaks-style West Allis spots run dollar-ish wing nights. Steny's (6 for ~$8) and Camino (8 for ~$15 with fries) are strong everyday value.",
  },
  {
    question: "What are the best dry rub wings in Milwaukee?",
    answer: "Club Garibaldi's days-marinated, grilled dry-rub wings are a Bay View benchmark, Camino's spicy-smoky dry rub is a Walker's Point favorite, and O'Lydia's hot dry rub has a distinctive garam-masala lean.",
  },
  {
    question: "Where can I get Korean or vegan wings in Milwaukee?",
    answer: "Merge on the East Side does double-fried Korean-style wings with six flavors. For plant-based, Buffalo Boss at Sherman Phoenix is the go-to — its vegan/impossible wings are good enough that meat-eaters order them too.",
  },
  {
    question: "What's the best wing style in Milwaukee — fried or grilled?",
    answer: "Milwaukee does both well. Spitfire's fries then grills so the sauce cooks in; O'Lydia's grills then fries for crusty skin; Club Garibaldi grills to order. Steny's brines, fries, sauces and bakes. The technique is part of why the city's wing scene is taken seriously.",
  },
  {
    question: "Where are good wings near Fiserv Forum or downtown Milwaukee?",
    answer: "Elsa's on the Park (N. Jefferson St.) is the downtown, dressed-up option. Walker's Point spots like Camino, O'Lydia's and Steny's are a short trip from downtown and Fiserv Forum for a more classic wings-and-a-game setup.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Wings in Milwaukee 2026: Top Spots, Dry Rubs & Wing Nights",
    "description": "A researched guide to the best chicken wings in Milwaukee — proven spots by style, neighborhood, price and wing-night specials.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-18",
    "dateModified": "2026-05-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-wings-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Wings Milwaukee", "item": "https://www.discover-milwaukee.com/best-wings-milwaukee" }
    ]
  }
};

export default function BestWingsMilwaukee() {
  const WingCard = ({ spot }) => (
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
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.special}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.wingStyle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>VIBE</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.vibe}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
      <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>📍 {spot.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Wings in Milwaukee 2026 | Top Spots, Dry Rubs & Wing Nights</title>
        <meta name="description" content="The best chicken wings in Milwaukee, researched and proven. Top spots by style, neighborhood and price — dry rubs, Korean, vegan, plus wing-night specials." />
        <meta name="keywords" content="best wings milwaukee, chicken wings milwaukee, milwaukee wing night, best chicken wings milwaukee, wings near me milwaukee, dry rub wings milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-wings-milwaukee" />

        <meta property="og:title" content="Best Wings in Milwaukee 2026 | The Proven Spots" />
        <meta property="og:description" content="Milwaukee's best chicken wings by style, neighborhood and price — dry rubs, Korean, vegan, and the city's wing-night specials." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-wings-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Wings in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Milwaukee takes wings seriously — grilled, double-fried, dry-rubbed, sauce cooked right into the skin. Here are the proven spots, by style and neighborhood.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Wing nights, sauces and prices change. Always confirm current specials and hours with the spot before you go. Prices listed are approximate.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>The Milwaukee Wing Institutions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The proven names — award-winners and the spots locals measure everything else against.
            </p>
            {wingSpots.institutions.map((spot, i) => <WingCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Sauced & Technique-Driven</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Big sauce menus and multi-step methods — where the preparation is the point.
            </p>
            {wingSpots.sauced.map((spot, i) => <WingCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Standout & Different</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Korean double-fried, plant-based, Caribbean — Milwaukee wings beyond the buffalo default.
            </p>
            {wingSpots.specialty.map((spot, i) => <WingCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Elevated & Beyond the Bar</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              When wings need to be a little more than a sports-bar order.
            </p>
            {wingSpots.elevated.map((spot, i) => <WingCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-burgers-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Burgers</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Happy Hour</Link>
              <Link href="/milwaukee-bars" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Bars</Link>
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
