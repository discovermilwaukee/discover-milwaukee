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

const restaurants = [
  {
    name: "Mader's German Restaurant",
    cuisine: "German",
    priceRange: "$$",
    address: "1041 N Old World 3rd St, Milwaukee, WI 53203",
    description: "A Milwaukee institution since 1902. Mader's is the real deal—authentic German cuisine in a stunning Old World setting filled with medieval armor, stained glass, and Bavarian artifacts. The schnitzel and sauerbraten are legendary.",
    mustTry: "Wiener Schnitzel, Sauerbraten, German beer selection",
    bestFor: "Tourists, special occasions, German food lovers",
    insiderTip: "The Knight's Bar downstairs has great happy hour deals and fewer crowds.",
  },
  {
    name: "Elsa's on the Park",
    cuisine: "American",
    priceRange: "$$",
    address: "833 N Jefferson St, Milwaukee, WI 53202",
    description: "A Cathedral Square institution known for great burgers and an even better scene. The patio overlooking the park is prime real estate during Jazz in the Park. Classic Milwaukee vibes.",
    mustTry: "Burgers, Friday fish fry, people watching",
    bestFor: "After-work drinks, jazz nights, casual dinners",
    insiderTip: "Thursday evenings in summer for free Jazz in the Park right outside.",
  },
  {
    name: "Safe House",
    cuisine: "American",
    priceRange: "$$",
    address: "779 N Front St, Milwaukee, WI 53202",
    description: "Milwaukee's legendary spy-themed restaurant and bar. You'll need a password to enter (or perform a silly act). The Cold War decor is elaborate, and it's genuinely fun for groups. A must-do for visitors.",
    mustTry: "Theme experience, creative cocktails, shareable apps",
    bestFor: "First-time visitors, bachelor/bachelorette parties, fun nights out",
    insiderTip: "The password changes—if you don't know it, you'll have to entertain the doorman.",
  },
  {
    name: "Screaming Tuna",
    cuisine: "Japanese/Sushi",
    priceRange: "$$$",
    address: "106 W Seeboth St, Milwaukee, WI 53204",
    description: "High-end sushi and Japanese fare in a sleek downtown setting. Fresh fish, creative rolls, and a sophisticated atmosphere make it a go-to for sushi lovers.",
    mustTry: "Omakase, specialty rolls, sake flights",
    bestFor: "Date nights, sushi aficionados, celebrations",
    insiderTip: "Sit at the sushi bar for the best experience.",
  },
  {
    name: "Mo's Irish Pub",
    cuisine: "Pub Fare",
    priceRange: "$",
    address: "142 W Wisconsin Ave, Milwaukee, WI 53203",
    description: "The go-to pre and post-game spot for Bucks and Brewers fans. Multiple floors, tons of TVs, and an electric atmosphere on game days. True Milwaukee sports bar energy.",
    mustTry: "Game day atmosphere, beer specials, pub grub",
    bestFor: "Game days, large groups, sports fans",
    insiderTip: "Arrive early on Bucks game nights—it gets packed fast.",
  },
  {
    name: "The Pabst Mansion",
    cuisine: "Historic Tour (nearby)",
    priceRange: "$",
    address: "2000 W Wisconsin Ave, Milwaukee, WI 53233",
    description: "While not a restaurant, this stunning Gilded Age mansion built by brewing magnate Captain Frederick Pabst is a must-see. Ornate interiors showcase Milwaukee's brewing heritage.",
    mustTry: "Guided tours, holiday events",
    bestFor: "History buffs, architecture lovers, rainy day activities",
    insiderTip: "Holiday tours in December are magical but book up fast.",
  },
];

const attractions = [
  {
    name: "Fiserv Forum",
    type: "Sports & Entertainment",
    description: "Home of the Milwaukee Bucks (2021 NBA Champions) and Marquette Golden Eagles. Also hosts major concerts, WWE events, and more. The Deer District outside is always buzzing.",
    highlights: ["Bucks games", "Concerts", "Deer District bars"],
  },
  {
    name: "Milwaukee Theatre District",
    type: "Performing Arts",
    description: "Centered around the Marcus Performing Arts Center, Milwaukee's theater district hosts Broadway tours, the Milwaukee Symphony, and local productions. The Riverside and Pabst theaters are historic gems.",
    highlights: ["Broadway shows", "Symphony", "Historic theaters"],
  },
  {
    name: "Cathedral Square Park",
    type: "Public Space",
    description: "Downtown's cultural heart. Home to Jazz in the Park (Thursdays in summer), farmers markets, and community events. Surrounded by restaurants with great patios.",
    highlights: ["Jazz in the Park", "Farmers markets", "Festivals"],
  },
  {
    name: "Old World Third Street",
    type: "Historic District",
    description: "Milwaukee's German heritage lives on in this historic street. Mader's, the Wisconsin Cheese Mart, and several German beer halls keep the tradition alive.",
    highlights: ["German restaurants", "Beer halls", "Historic buildings"],
  },
  {
    name: "Pere Marquette Park",
    type: "Public Space",
    description: "A beautiful riverfront park perfect for a lunchtime stroll. Home to the iconic bronze deer statue and seasonal ice skating rink.",
    highlights: ["Riverwalk access", "Ice skating (winter)", "Events"],
  },
];

const nightlife = [
  {
    name: "The Deer District",
    type: "Entertainment District",
    description: "The plaza surrounding Fiserv Forum has become Milwaukee's go-to gathering spot. Multiple bars and restaurants, outdoor concerts, and electric energy on game nights.",
    vibe: "High energy, sports fans, concerts",
  },
  {
    name: "Water Street",
    type: "Bar District",
    description: "Milwaukee's legendary bar strip. College crowds, pub crawls, and late-night energy. Not fancy, but always a scene.",
    vibe: "Young crowd, bar crawls, late night",
  },
  {
    name: "Blu at the Pfister",
    type: "Upscale Lounge",
    description: "Rooftop bar atop the historic Pfister Hotel with stunning city views. Craft cocktails in a sophisticated setting.",
    vibe: "Upscale, romantic, great views",
  },
  {
    name: "Milwaukee Ale House",
    type: "Brewpub",
    description: "Craft beers brewed on-site in a beautiful riverwalk location. Great patio for people watching.",
    vibe: "Casual, craft beer focused, riverfront",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Downtown Milwaukee Neighborhood Guide 2026",
    "description": "Your complete guide to Downtown Milwaukee. Fiserv Forum, theater district, German heritage on Old World Third Street, and the best restaurants, bars, and attractions.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee", "logo": { "@type": "ImageObject", "url": "https://discover-milwaukee.com/logo.png" } },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-15",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://discover-milwaukee.com/explore" },
      { "@type": "ListItem", "position": 3, "name": "Downtown Milwaukee", "item": "https://discover-milwaukee.com/downtown-milwaukee" },
    ],
  },
};

const VenueCard = ({ venue, showCuisine = true }) => (
  <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
      <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{venue.name}</h3>
      {venue.priceRange && <span style={{ color: c.orange, fontWeight: "700" }}>{venue.priceRange}</span>}
    </div>
    {showCuisine && venue.cuisine && <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "12px" }}>{venue.cuisine}</p>}
    <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{venue.description}</p>
    {venue.mustTry && (
      <div style={{ backgroundColor: `${c.orange}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{venue.mustTry}</p>
      </div>
    )}
    {venue.insiderTip && (
      <div style={{ backgroundColor: `${c.green2}15`, padding: "12px", borderRadius: "8px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{venue.insiderTip}</p>
      </div>
    )}
    {venue.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{venue.address}</p>}
  </div>
);

const AttractionCard = ({ attraction }) => (
  <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
      <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{attraction.name}</h3>
      <span style={{ backgroundColor: c.orange, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px" }}>{attraction.type}</span>
    </div>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{attraction.description}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {attraction.highlights.map((h, i) => (
        <span key={i} style={{ backgroundColor: c.beige, color: c.green1, fontSize: "12px", padding: "4px 10px", borderRadius: "20px" }}>{h}</span>
      ))}
    </div>
  </div>
);

export default function DowntownMilwaukee() {
  return (
    <>
      <Head>
        <title>Downtown Milwaukee Guide 2026 | Fiserv Forum, Restaurants & Nightlife</title>
        <meta name="description" content="Explore Downtown Milwaukee: Fiserv Forum, theater district, German heritage on Old World Third Street, best restaurants, bars, and attractions. Your complete guide to Milwaukee's center." />
        <meta name="keywords" content="downtown Milwaukee, Fiserv Forum, Deer District, Milwaukee restaurants, Old World Third Street, Milwaukee nightlife, things to do downtown Milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/downtown-milwaukee" />

        <meta property="og:title" content="Downtown Milwaukee Neighborhood Guide 2026" />
        <meta property="og:description" content="Your complete guide to Downtown Milwaukee. Sports, entertainment, German heritage, and the best places to eat and drink." />
        <meta property="og:url" content="https://discover-milwaukee.com/downtown-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-downtown.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>NEIGHBORHOOD GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Downtown Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              The heart of Milwaukee—home to the Bucks, world-class theaters, German heritage on Old World Third Street, and the energy of a city on the rise.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>JUMP TO</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#restaurants" style={{ color: c.green2, fontSize: "14px" }}>Where to Eat</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#attractions" style={{ color: c.green2, fontSize: "14px" }}>Attractions</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nightlife" style={{ color: c.green2, fontSize: "14px" }}>Nightlife</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>The Vibe</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
              Downtown Milwaukee is where the city comes together. Since the Bucks' championship run and the opening of Fiserv Forum, downtown has experienced a renaissance. The Deer District buzzes with energy on game nights, the theater district draws culture seekers, and Old World Third Street keeps Milwaukee's German heritage alive with beer halls and schnitzel. It's business and pleasure, history and progress, all in one walkable area.
            </p>
          </section>

          <section id="restaurants" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Where to Eat & Drink</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From German institutions to sports bars to spy-themed adventures, downtown has something for every appetite.
            </p>
            {restaurants.map((r, i) => <VenueCard key={i} venue={r} />)}
          </section>

          <section id="attractions" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Top Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Sports, arts, history—downtown is packed with things to do.
            </p>
            {attractions.map((a, i) => <AttractionCard key={i} attraction={a} />)}
          </section>

          <section id="nightlife" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nightlife</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From rowdy sports bars to rooftop lounges, downtown keeps the party going.
            </p>
            {nightlife.map((n, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{n.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{n.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{n.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Vibe: {n.vibe}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Neighborhoods</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/third-ward-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Third Ward →</Link>
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Bay View →</Link>
              <Link href="/walkers-point-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Walker's Point →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Downtown events, new openings, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>Explore More Neighborhoods</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Walker's Point</Link>
                <Link href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>East Side</Link>
                <Link href="/riverwest-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Riverwest</Link>
                <Link href="/brady-street-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Brady Street</Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "12px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
                <Link href="/things-to-do-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
                <Link href="/about" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>About</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
