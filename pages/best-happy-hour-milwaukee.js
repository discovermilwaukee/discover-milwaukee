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
      neighborhood: "Historic Third Ward",
      priceRange: "$$",
      address: "311 N Plankinton Ave, Milwaukee, WI 53203",
      happyHourTimes: "Tue–Thu 4–6 p.m.; Fri 4–5 p.m. (closed Sun & Mon)",
      description: "Italian-inspired aperitivo bar in the Pritzlaff Building (corner of Plankinton & St. Paul). The happy hour is a flat-$8 menu — four rotating wine pours, four rotating cocktails, and five rotating small plates (hummus & pitas, skewers, flatbreads). Dine-in only.",
      drinkSpecials: "$8 across the menu — 4 rotating wines, 4 rotating cocktails",
      foodSpecials: "$8 small plates — 5 rotating items (hummus & pitas, skewers, flatbreads)",
      vibe: "Upscale-casual Italian aperitivo, Third Ward",
      insiderTip: "Friday's window is one hour only (4–5 p.m.) — show up at 4 sharp or you'll miss it. Dine-in only; no to-go on the HH menu.",
    },
    {
      name: "Black Sheep",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "216 S 2nd St, Milwaukee, WI 53204",
      happyHourTimes: "Mon–Sat 4–6 p.m. (Fri extends 11 a.m.–6 p.m. with +$4 drafts)",
      description: "Walker's Point staple. $5 Stoli martinis, $5 Four Roses Manhattans, $5 house wine pours (red or white), $5 house-made sangria. The $10 cheese board pairs perfectly — but it's only available Mon–Thu.",
      drinkSpecials: "$5 Stoli martinis, $5 Four Roses Manhattans, $5 house wine, $5 house-made sangria · Fri extended HH adds $4 drafts",
      foodSpecials: "$10 cheese board — Mon–Thu only (not Fri/Sat)",
      vibe: "Cozy, neighborhood, craft-focused",
      insiderTip: "The cheese board is the move — but go Mon–Thu. Friday's extended HH (11 a.m.–6 p.m.) is the longest window in this guide; pair the $4 drafts with the regular menu.",
    },
    {
      name: "Odd Duck",
      neighborhood: "Walker's Point",
      priceRange: "$$",
      address: "939 S 2nd St, Milwaukee, WI 53204",
      happyHourTimes: "Tue–Sat 3–6 p.m.",
      description: "Chef-driven Walker's Point restaurant (relocated from Bay View in 2022). $5 draft beers and $8 glasses of wine at the bar. The small-plates menu (always available) is what locals pair with the HH drinks — no separate HH food menu.",
      drinkSpecials: "$5 draft beer, $8 wine by the glass",
      foodSpecials: "No formal HH food menu — order from the ever-changing small-plates list",
      vibe: "Creative, culinary, adventurous",
      insiderTip: "Sit at the bar to watch the open kitchen. Order whatever's marked seasonal on the small-plates list.",
    },
  ],
  classic: [
    {
      name: "Von Trier",
      neighborhood: "Lower East Side",
      priceRange: "$-$$",
      address: "2235 N Farwell Ave, Milwaukee, WI 53211",
      happyHourTimes: "Daily 4–6 p.m.",
      description: "Milwaukee's German beer-hall fixture at Farwell & North since 1978. $7 happy hour menu on cocktails and mixed drinks. Free popcorn served with drinks all day, every day. Outdoor biergarten in summer.",
      drinkSpecials: "$7 happy-hour menu (cocktails and mixed drinks)",
      foodSpecials: "Free popcorn with drinks, all day",
      vibe: "German beer hall, classic Milwaukee",
      insiderTip: "The biergarten is the right call on warm Fridays — get there before 4 p.m. or grab one of the inside booths.",
    },
    {
      name: "Maxie's Southern Comfort",
      neighborhood: "West Side",
      priceRange: "$$",
      address: "6732 W Fairview Ave, Milwaukee, WI 53213",
      happyHourTimes: "Mon–Sat 4–6 p.m.",
      description: "Branded \"Milwaukee's Happiest Happy Hour.\" $1 off all drinks (beer, wine, cocktails), $2 fresh-shucked oysters, and $9 select appetizers including fried green tomatoes, PEI mussels, peel-N-eat shrimp, Kentucky Nuggets, Creole chicken meatballs, and gumbo. Just completed a 2026 refresh with co-owner Dan Sidner back as GM.",
      drinkSpecials: "$1 off all drinks (the \"Buck Off!\" deal)",
      foodSpecials: "$2 fresh-shucked oysters · $9 select apps (green tomatoes, mussels, peel-N-eat shrimp, Kentucky Nuggets, Creole meatballs, gumbo)",
      vibe: "Southern comfort, neighborhood staple",
      insiderTip: "$2 oysters with a whiskey cocktail is the move. The Kentucky Nuggets are the sleeper.",
    },
    {
      name: "Miller Time Pub & Grill",
      neighborhood: "Westown",
      priceRange: "$-$$",
      address: "509 W Wisconsin Ave, Milwaukee, WI 53203",
      happyHourTimes: "Mon–Thu 4–7 p.m. (+ late-night 10 p.m.–midnight)",
      description: "Classic downtown pub attached to the Hilton Milwaukee City Center, with Miller Brewing branding throughout. Straightforward post-work happy hour plus a late-night window — and game-day specials when the Brewers or Bucks are home.",
      drinkSpecials: "$3 rail drinks, $3 Miller drafts, $5 house wine · Late-night 10 p.m.–midnight: $3 Miller High Life taps and shots · Game-day: $5 Miller Lite drafts during Brewers/Bucks home games, $6 pints during basketball games",
      foodSpecials: "$2 off appetizers",
      vibe: "Classic pub, downtown, after-work + late-night",
      insiderTip: "Great spot before a show at the Riverside or Pabst Theater — and the late-night window is one of the only downtown HH options after 10 p.m.",
    },
  ],
  elevated: [
    {
      name: "Birch",
      neighborhood: "Brewer's Hill",
      priceRange: "$$$",
      address: "459 E Pleasant St, Milwaukee, WI 53202",
      happyHourTimes: "Tue–Fri 4–6 p.m. (bar only)",
      description: "High-end tasting-menu restaurant on the Brewer's Hill / Lower East Side border with a bar-only happy hour — a chance to experience Birch without the full prix-fixe commitment.",
      drinkSpecials: "Bar happy-hour menu — call (414) 921-4250 to confirm current pricing",
      foodSpecials: "Bar-only menu items — call to confirm current pricing",
      vibe: "Upscale, intimate, special occasion",
      insiderTip: "Sit at the bar and trust the bartender. Reservations not required at the bar during HH. Specific HH pricing rotates — call to confirm before you go.",
    },
    {
      name: "Bryant's Cocktail Lounge",
      neighborhood: "Historic Mitchell Street",
      priceRange: "$$",
      address: "1579 S 9th St, Milwaukee, WI 53204",
      happyHourTimes: "Sun–Thu, approximately 5–7 p.m. (call to confirm)",
      description: "Milwaukee's oldest cocktail lounge, in business since 1938. No printed cocktail menu — tell the bartender what you like and they'll build something. Quiet, cocktail-focused happy hour with $5 Old Fashioneds and Depression-era cocktails. No food served.",
      drinkSpecials: "Approx. $5 Old Fashioneds and Depression-era cocktails (call to confirm)",
      foodSpecials: "No food served — drinks only",
      vibe: "Historic, intimate, cocktail-focused",
      insiderTip: "There's no menu — describe a flavor or mood (\"something bourbon-forward,\" \"light and refreshing\") and the bartender takes it from there. HH days/times have shifted with ownership tweaks — phone (414) 383-2620 before you head out.",
    },
  ],
  neighborhood: [
    {
      name: "Hooligan's Super Bar",
      neighborhood: "Lower East Side",
      priceRange: "$",
      address: "2017 E North Ave, Milwaukee, WI 53202",
      happyHourTimes: "Mon–Fri 4–7 p.m.",
      description: "East Side neighborhood institution at Farwell & North. ~30 taps and 99+ bottles and cans, all $1 off during HH. Mixers and rail drinks $2 off. Half-priced appetizers across the menu.",
      drinkSpecials: "$1 off all draft beers, $1 off bottles/cans, $1 off wine, $2 off mixers and rail drinks",
      foodSpecials: "Half-priced appetizers",
      vibe: "Dive-ish, neighborhood, no frills",
      insiderTip: "Half-priced apps + $1 off taps for three hours is the best beer-and-bar-food value on the East Side. Pair with the smoky paprika aioli wings.",
    },
    {
      name: "The Vanguard",
      neighborhood: "Bay View",
      priceRange: "$$",
      address: "2659 S Kinnickinnic Ave, Milwaukee, WI 53207",
      happyHourTimes: "All hours of operation — daily drink deals (no traditional fixed HH window)",
      description: "Craft sausage spot with a rotating daily drink program in place of a fixed happy hour. The bourbon-of-the-day deal is the value play, and Pabst / Rhinelander / Milwaukee Classic Lager cans are always $2.",
      drinkSpecials: "Daily bourbon: $2 shot / $3 mixed / $4 pour Sun–Thu (up $1 each Fri–Sat) · $2 cans of PBR, Rhinelander, Milwaukee Classic Lager (always)",
      foodSpecials: "Daily themed sausage specials (Meatball Monday and similar — themes shift)",
      vibe: "Energetic, creative, fun",
      insiderTip: "The bourbon-of-the-day pricing changes daily — ask the bartender what's on. The Duck Bacon Jalapeño sausage is a longtime favorite.",
    },
  ],
};

const faqs = [
  {
    question: "What are the best happy hour deals in Milwaukee?",
    answer: "Top Milwaukee happy hour deals include Aperitivo (flat $8 wines, cocktails and small plates Tue–Thu 4–6 p.m. + Fri 4–5 p.m.), Black Sheep ($5 Stoli martinis / Four Roses Manhattans / wine / sangria + $10 cheese board Mon–Thu), Odd Duck ($5 draft, $8 wine Tue–Sat 3–6 p.m.), Maxie's ($2 oysters, $9 select apps, $1 off all drinks Mon–Sat 4–6 p.m.), Hooligan's ($1 off taps/bottles/wine, $2 off mixers, half-price apps Mon–Fri 4–7 p.m.), and Von Trier ($7 happy-hour menu + free popcorn, daily 4–6 p.m.)."
  },
  {
    question: "What time is happy hour in Milwaukee?",
    answer: "Most Milwaukee happy hours run Mon–Fri (or Mon–Sat) from 4–6 p.m. The earliest starter is Odd Duck (3 p.m. Tue–Sat). The longest weekday window is Miller Time Pub (4–7 p.m. Mon–Thu, plus a 10 p.m.–midnight late-night window). Black Sheep runs an extended Friday HH from 11 a.m.–6 p.m. The shortest window is Aperitivo's Friday slot (4–5 p.m. only). Times shift — call ahead for the venue you're targeting."
  },
  {
    question: "Where can I get cheap drinks in Milwaukee?",
    answer: "For budget-friendly drinks, Hooligan's Super Bar on the East Side ($1 off taps/bottles/wine, $2 off mixers Mon–Fri 4–7 p.m.) is the value pick. The Vanguard's $2 cans of PBR, Rhinelander and Milwaukee Classic Lager are always on. Miller Time Pub's $3 rails, $3 Miller drafts and $5 house wine downtown are dependable. For upscale-at-a-discount, Aperitivo's flat-$8 HH menu (Tue–Thu 4–6 p.m. + Fri 4–5 p.m.) and Black Sheep's $5 cocktails are the moves."
  },
  {
    question: "Are there food specials during Milwaukee happy hours?",
    answer: "Yes. Aperitivo has $8 rotating small plates (Tue–Thu 4–6, Fri 4–5). Black Sheep has a $10 cheese board (Mon–Thu only). Maxie's has $2 fresh-shucked oysters and $9 select apps (fried green tomatoes, PEI mussels, Kentucky Nuggets, Creole meatballs, gumbo). Hooligan's serves half-priced appetizers. Miller Time Pub has $2 off appetizers. Von Trier offers free popcorn with drinks all day."
  },
  {
    question: "What Milwaukee bars have happy hour on weekends?",
    answer: "Von Trier runs its $7 happy-hour menu daily (including Sat and Sun). Black Sheep runs an extended Friday HH from 11 a.m.–6 p.m. and continues regular HH Saturday 4–6 p.m. Maxie's, Odd Duck, and Hooligan's run their HH on Saturday. The Vanguard's daily drink deals are always on. Most other spots are weekday-only (Mon–Thu or Mon–Fri)."
  },
  {
    question: "Where is happy hour near Fiserv Forum?",
    answer: "Walking distance from Fiserv Forum in the Deer District / Westown: Uncle Buck's Fishbowl on N Dr Martin Luther King Jr Dr has a Tue–Fri 4–7 p.m. HH ($5 tap beer, wine and rail mixers) — but the HH is NOT available during Fiserv Forum events, so plan around your game time. Pilot Project Brewing in the Pabst Brewery District (1128 N 9th St) runs Mon–Thu specials including $5 select drinks and a $10 app-plus-drink combo. Miller Time Pub & Grill at 5th & Wisconsin (Mon–Thu 4–7 p.m.) adds $5 Miller Lite drafts during Brewers/Bucks home games."
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
    "dateModified": "2026-06-07",
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
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
      {spot.address && (
        <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>📍 {spot.address}</p>
      )}
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 7, 2026 · 10 VERIFIED SPOTS</p>
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
              <strong>Heads up:</strong> Every spot below was verified against the venue's own website or recent menu in June 2026 — but happy-hour times, prices and food specials shift frequently with seasons, ownership changes, and game-day schedules. Always call ahead before you go, especially for the Sunday/Monday options (most HH is weekday) and for any Fiserv Forum game-night plans (some downtown HHs are suspended on event nights).
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
