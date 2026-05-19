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

const happyHourSpots = {
  bestValue: [
    {
      name: "Aperitivo",
      neighborhood: "Third Ward",
      priceRange: "$$",
      address: "Third Ward, Milwaukee",
      happyHourTimes: "Check for current hours",
      description: "Italian-inspired small plates meet serious happy hour value. Wine and rail drinks for $5, draft beers for $4, plus $11 bar snacks including fried surf clams, steak forks, Margherita flatbread, and meatballs.",
      drinkSpecials: "$5 wine & rail drinks, $4 draft beers",
      foodSpecials: "$11 bar snacks - surf clams, steak forks, flatbread, meatballs",
      vibe: "Upscale casual, Italian-inspired",
      insiderTip: "The steak forks are an underrated steal. Perfect pre-dinner snack.",
    },
    {
      name: "Black Sheep",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "216 S 2nd St, Milwaukee, WI 53204",
      happyHourTimes: "Mon-Sat 4-6pm",
      description: "A Walker's Point staple with one of the best happy hour deals in the city. $10 cheese boards pair perfectly with $5 Stoli martinis, Four Roses Manhattans, wine pours, or house sangria.",
      drinkSpecials: "$5 Stoli martinis, Four Roses Manhattans, wine, sangria",
      foodSpecials: "$10 cheese boards",
      vibe: "Cozy, neighborhood, craft-focused",
      insiderTip: "The cheese board is generous enough to share. Great date spot.",
    },
    {
      name: "Odd Duck",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2352 S Kinnickinnic Ave, Milwaukee, WI 53207",
      happyHourTimes: "Tue-Sat 3-6pm",
      description: "Bay View's culinary anchor offers $5 draft beers and $8 wine glasses during happy hour. While the food specials rotate, the quality is always top-notch.",
      drinkSpecials: "$5 draft beer, $8 wine glasses",
      foodSpecials: "Rotating specials",
      vibe: "Creative, culinary, adventurous",
      insiderTip: "Sit at the bar to watch the open kitchen. Order whatever's seasonal.",
    },
  ],
  classic: [
    {
      name: "Von Trier's",
      neighborhood: "East Side",
      priceRange: "$-$$",
      address: "2235 N Farwell Ave, Milwaukee, WI 53211",
      happyHourTimes: "Daily 4-6pm",
      description: "A Milwaukee institution since 1978. The $7 happy hour includes your drink of choice plus free popcorn served all day, every day. German beer hall vibes in the heart of the East Side.",
      drinkSpecials: "$7 happy hour specials",
      foodSpecials: "Free popcorn all day",
      vibe: "German beer hall, classic Milwaukee",
      insiderTip: "The boot of beer is a Milwaukee tradition. Great outdoor biergarten in summer.",
    },
    {
      name: "Maxie's Southern Comfort",
      neighborhood: "West Side",
      priceRange: "$$",
      address: "6732 W Fairview Ave, Milwaukee, WI 53213",
      happyHourTimes: "Daily 4-6pm",
      description: "Southern hospitality meets Milwaukee happy hour. $1 off drinks, $1 off oysters, and select starters for $6. The oyster deal alone is worth the trip.",
      drinkSpecials: "$1 off all drinks",
      foodSpecials: "$1 off oysters, $6 select starters",
      vibe: "Southern comfort, neighborhood staple",
      insiderTip: "The oysters are the move. Combine with a whiskey cocktail for the full Southern experience.",
    },
    {
      name: "Miller Time Pub & Grill",
      neighborhood: "Downtown",
      priceRange: "$-$$",
      address: "509 W Wisconsin Ave, Milwaukee, WI 53203",
      happyHourTimes: "Mon-Thu 4-7pm",
      description: "Classic Milwaukee pub attached to the Miller Brewing legacy. Straightforward happy hour in the heart of downtown, perfect for after-work drinks.",
      drinkSpecials: "Happy hour pricing on beer and cocktails",
      foodSpecials: "Bar food specials",
      vibe: "Classic pub, downtown, after-work",
      insiderTip: "Great spot before a show at the Riverside or Pabst Theater.",
    },
  ],
  elevated: [
    {
      name: "Birch",
      neighborhood: "Bay View",
      priceRange: "$$$",
      address: "459 E Pleasant St, Milwaukee, WI 53202",
      happyHourTimes: "Tue-Fri 4-6pm (bar only)",
      description: "High-end tasting menu restaurant with a surprisingly accessible happy hour. Special pricing on select drinks and rotating menu items at the bar—a chance to taste Birch without the full commitment.",
      drinkSpecials: "Special pricing on select drinks",
      foodSpecials: "Rotating bar menu items",
      vibe: "Upscale, intimate, special occasion",
      insiderTip: "This is how you taste Birch on a budget. Sit at the bar and trust the bartender.",
    },
    {
      name: "DanDan",
      neighborhood: "Downtown",
      priceRange: "$$-$$$",
      address: "360 E Erie St, Milwaukee, WI 53202",
      happyHourTimes: "Check for current hours",
      description: "Modern Chinese cuisine with a happy hour that highlights their creative cocktails and shareable plates. The dan dan noodles are legendary anytime.",
      drinkSpecials: "Cocktail specials",
      foodSpecials: "Shareable plates",
      vibe: "Modern, bold, creative",
      insiderTip: "Even outside happy hour, the cocktail program is worth exploring.",
    },
  ],
  neighborhood: [
    {
      name: "Hooligan's Super Bar",
      neighborhood: "East Side",
      priceRange: "$",
      address: "2017 E North Ave, Milwaukee, WI 53202",
      happyHourTimes: "Daily",
      description: "The East Side's happy hour institution. Cheap drinks, no pretense, and a neighborhood vibe that's kept locals coming back for years.",
      drinkSpecials: "Budget-friendly drink specials",
      foodSpecials: "Bar snacks",
      vibe: "Dive-ish, neighborhood, no frills",
      insiderTip: "This is where you go when you want cheap drinks and good company.",
    },
    {
      name: "The Vanguard",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2659 S Kinnickinnic Ave, Milwaukee, WI 53207",
      happyHourTimes: "Check for current specials",
      description: "Craft sausages and cocktails in a fun, energetic setting. While known for their creative sausages, the drink specials make this a great happy hour destination.",
      drinkSpecials: "Cocktail and beer specials",
      foodSpecials: "Sausage deals",
      vibe: "Energetic, creative, fun",
      insiderTip: "Get a sausage flight to try multiple options. The Duck Bacon Jalapeño is popular.",
    },
    {
      name: "Bryant's Cocktail Lounge",
      neighborhood: "Walker's Point",
      priceRange: "$$-$$$",
      address: "1579 S 9th St, Milwaukee, WI 53204",
      happyHourTimes: "Early evening",
      description: "Milwaukee's oldest cocktail lounge, serving drinks since 1938. No menu—tell the bartender what you like and they'll create something perfect. Early evening is the best time to enjoy without crowds.",
      drinkSpecials: "No traditional happy hour, but early evening is less crowded",
      foodSpecials: "No food",
      vibe: "Historic, intimate, cocktail-focused",
      insiderTip: "There's no menu. Trust the bartender. Say 'something with bourbon' or 'light and refreshing.'",
    },
  ],
};

const faqs = [
  {
    question: "What are the best happy hour deals in Milwaukee?",
    answer: "Top Milwaukee happy hour deals include Aperitivo ($5 wine/rail, $4 drafts), Black Sheep ($5 craft cocktails, $10 cheese boards), Odd Duck ($5 draft, $8 wine), Von Trier's ($7 happy hour + free popcorn), and Maxie's ($1 off drinks and oysters)."
  },
  {
    question: "What time is happy hour in Milwaukee?",
    answer: "Most Milwaukee happy hours run from 4-6pm on weekdays. Some spots start as early as 3pm (Odd Duck) and some extend to 7pm (Miller Time Pub). Check individual restaurants as times vary and may change seasonally."
  },
  {
    question: "Where can I get cheap drinks in Milwaukee?",
    answer: "For budget-friendly drinks, try Hooligan's Super Bar (East Side), Von Trier's (includes free popcorn), or the many dive bars throughout the city. Happy hour at spots like Aperitivo and Black Sheep offer upscale drinks at lower prices."
  },
  {
    question: "Are there food specials during Milwaukee happy hours?",
    answer: "Yes! Many spots offer food specials alongside drink deals. Aperitivo has $11 bar snacks, Black Sheep offers $10 cheese boards, Maxie's has $1 off oysters and $6 starters, and most bars have discounted appetizers."
  },
  {
    question: "What Milwaukee bars have happy hour on weekends?",
    answer: "Weekend happy hours are less common, but Von Trier's runs daily happy hour, and many neighborhood bars offer consistent specials. Check individual restaurants as weekend happy hour availability varies."
  },
  {
    question: "Where is happy hour near Fiserv Forum?",
    answer: "Before Bucks or Brewers games, try Uncle Buck's rooftop (Deer District), Pilot Project (Pabst Brewery District), or Miller Time Pub & Grill (downtown). These spots are walkable to Fiserv Forum and American Family Field."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Happy Hour in Milwaukee 2026: Drink Specials Guide",
    "description": "Find the best happy hour deals in Milwaukee. $5 cocktails, food specials, and the best spots for after-work drinks.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-happy-hour-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Happy Hour Milwaukee", "item": "https://www.discover-milwaukee.com/best-happy-hour-milwaukee" }
    ]
  }
};

export default function BestHappyHourMilwaukee() {
  const HappyHourCard = ({ spot }) => (
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
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.happyHourTimes}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>DRINK SPECIALS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.drinkSpecials}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>FOOD SPECIALS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.foodSpecials}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Happy Hour in Milwaukee 2026 | Drink Specials & Deals</title>
        <meta name="description" content="Find the best happy hour deals in Milwaukee. $5 cocktails, cheap beer, food specials, and the best bars for after-work drinks. Complete guide with times and prices." />
        <meta name="keywords" content="happy hour milwaukee, best happy hour milwaukee, drink specials milwaukee, cheap drinks milwaukee, after work drinks milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-happy-hour-milwaukee" />

        <meta property="og:title" content="Best Happy Hour in Milwaukee 2026 | Drink Specials Guide" />
        <meta property="og:description" content="Milwaukee's best happy hour deals. $5 cocktails, food specials, and the best spots for after-work drinks." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-happy-hour-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED APRIL 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Happy Hour in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              $5 cocktails, discounted appetizers, and the best spots for after-work drinks. Your guide to drinking well for less.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Happy hour times and specials can change. Always verify current offerings with the restaurant. Prices listed are approximate and subject to change.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Value Happy Hours</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The spots where your dollar stretches furthest—quality drinks and food at happy hour prices.
            </p>
            {happyHourSpots.bestValue.map((spot, i) => <HappyHourCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Classic Milwaukee Happy Hours</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The institutions—spots that have been serving Milwaukee's after-work crowds for years.
            </p>
            {happyHourSpots.classic.map((spot, i) => <HappyHourCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Elevated Happy Hours</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              High-end spots with accessible happy hour pricing—taste the best for less.
            </p>
            {happyHourSpots.elevated.map((spot, i) => <HappyHourCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Favorites</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local spots with loyal followings and consistently good deals.
            </p>
            {happyHourSpots.neighborhood.map((spot, i) => <HappyHourCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Bar Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/rooftop-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Rooftop Bars</Link>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Cocktail Bars</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
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
