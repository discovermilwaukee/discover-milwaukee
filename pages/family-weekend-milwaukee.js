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

const attractions = [
  {
    name: "Milwaukee County Zoo",
    ages: "All Ages",
    description: "One of the country's best zoos with 2,500+ animals. The Adventure Africa exhibit, ape houses, and seasonal train rides are highlights. Plan for half a day minimum.",
    address: "10001 W Bluemound Rd",
    tip: "Visit early—animals are most active in the morning. Wednesday is $4.25 admission day.",
    mustDo: "Feed the giraffes at the new African exhibit.",
  },
  {
    name: "Discovery World",
    ages: "Ages 3+",
    description: "Hands-on science and technology museum on the lakefront. The freshwater aquarium, ship simulator, and flight exhibits are kid favorites. Easy to spend 3-4 hours here.",
    address: "500 N Harbor Dr",
    tip: "The Denis Sullivan tall ship tours run in summer—don't miss it.",
    mustDo: "Touch a shark in the aquarium.",
  },
  {
    name: "Betty Brinn Children's Museum",
    ages: "Ages 0-10",
    description: "Interactive play museum perfect for younger kids. The Word Headquarters exhibit and outdoor Pocket Park are standouts. Right next to Discovery World.",
    address: "929 E Wisconsin Ave",
    tip: "Get the combo ticket with Discovery World and save.",
    mustDo: "The miniature grocery store where kids can 'shop'.",
  },
  {
    name: "Milwaukee Public Museum",
    ages: "All Ages",
    description: "Classic natural history museum with the famous Streets of Old Milwaukee exhibit, butterfly garden, and dinosaur hall. A Milwaukee institution for generations.",
    address: "800 W Wells St",
    tip: "The new museum opens in 2027 near Fiserv Forum—visit the historic building while you can.",
    mustDo: "Walk through the Streets of Old Milwaukee at night (it's dim inside).",
  },
  {
    name: "Milwaukee Art Museum",
    ages: "All Ages",
    description: "The Calatrava wings are magical for kids. Free family programming on weekends. The Kohl's Art Generation Gallery is designed specifically for families.",
    address: "700 N Art Museum Dr",
    tip: "Watch the wings open at 10am—kids love it.",
    mustDo: "Kohl's Art Generation family workshops on weekends.",
  },
];

const restaurants = [
  {
    name: "Kopp's Frozen Custard",
    type: "Custard & Burgers",
    description: "Milwaukee's legendary frozen custard. Get the flavor of the day (it changes daily) and a Kopp's burger. Three locations—Glendale is closest to downtown.",
    kidFriendly: "Walk-up window, outdoor seating, quick service.",
  },
  {
    name: "Lakefront Brewery",
    type: "Brewery/Restaurant",
    description: "Family-friendly during lunch hours. Legendary Friday fish fry (served all day). Kids can have root beer while parents enjoy craft beer.",
    kidFriendly: "Great outdoor space, Friday fish fry, root beer.",
  },
  {
    name: "Blue's Egg",
    type: "Breakfast/Brunch",
    description: "Milwaukee's favorite brunch spot with creative dishes and a fun, bustling atmosphere. Kids menu available. Expect a wait on weekends.",
    kidFriendly: "Kids menu, colorful atmosphere, hash browns for days.",
  },
  {
    name: "Milwaukee Public Market",
    type: "Food Hall",
    description: "Perfect for picky eaters—everyone finds something. Cheese curds, pretzels, tacos, sushi, and more. Grab a table upstairs overlooking the market.",
    kidFriendly: "Something for everyone, self-paced, cheese curds.",
  },
  {
    name: "Sprecher Brewing",
    type: "Brewery/Restaurant",
    description: "Famous for their root beer and cream soda. The tour is family-friendly and includes unlimited soda samples for kids (beer for adults).",
    kidFriendly: "Root beer tour, soda samples, casual atmosphere.",
  },
];

const outdoors = [
  {
    name: "Veterans Park",
    activity: "Lakefront Play",
    description: "Beautiful lakefront park with playgrounds, kite flying, and stunning views. The park connects to the Milwaukee Riverwalk.",
    highlights: ["Playground", "Kite flying", "Lakefront paths"],
  },
  {
    name: "Bradford Beach",
    activity: "Beach Day",
    description: "Milwaukee's main beach with sand volleyball, lifeguards in summer, and food vendors. A true urban beach experience.",
    highlights: ["Swimming", "Sand play", "Concessions"],
  },
  {
    name: "Lake Park",
    activity: "Nature & Play",
    description: "Frederick Law Olmsted-designed park with trails, a lighthouse, and excellent playgrounds. The biergarten is family-friendly.",
    highlights: ["Playground", "Lighthouse", "Biergarten"],
  },
  {
    name: "Bublr Bikes",
    activity: "Family Biking",
    description: "Milwaukee's bike share system has stations throughout the city. The Oak Leaf Trail along the lakefront is flat and safe for families.",
    highlights: ["Lakefront trail", "Easy rentals", "Car-free paths"],
  },
];

const rainyDay = [
  { name: "Milwaukee Public Museum", why: "Hours of indoor exploration" },
  { name: "Discovery World", why: "Interactive exhibits keep kids engaged" },
  { name: "Betty Brinn Children's Museum", why: "Perfect for younger kids" },
  { name: "Bowlero Lanes", why: "Classic bowling fun" },
  { name: "Sky Zone", why: "Trampoline park in nearby Brookfield" },
  { name: "Safe House", why: "Spy-themed restaurant kids love" },
];

const hotels = [
  { name: "Potawatomi Hotel", feature: "Indoor pool, arcade, attached casino shows", price: "$$$" },
  { name: "Hilton Garden Inn Downtown", feature: "Indoor pool, free breakfast, walkable", price: "$$" },
  { name: "DoubleTree by Hilton", feature: "Cookies at check-in, pool, lakefront location", price: "$$" },
  { name: "Residence Inn Downtown", feature: "Suites with kitchens, breakfast included", price: "$$" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Family Weekend in Milwaukee: Best Things to Do with Kids (2026)",
    "description": "Plan the perfect family weekend in Milwaukee. Top kid-friendly attractions, restaurants, outdoor activities, and hotels for families.",
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
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://discover-milwaukee.com/explore" },
      { "@type": "ListItem", "position": 3, "name": "Family Weekend", "item": "https://discover-milwaukee.com/family-weekend-milwaukee" },
    ],
  },
};

export default function FamilyWeekendMilwaukee() {
  return (
    <>
      <Head>
        <title>Family Weekend in Milwaukee: Best Things to Do with Kids (2026)</title>
        <meta name="description" content="Plan the perfect family weekend in Milwaukee. Discover kid-friendly attractions, restaurants, outdoor activities, and hotels. The ultimate Milwaukee with kids guide." />
        <meta name="keywords" content="Milwaukee with kids, family weekend Milwaukee, kid friendly Milwaukee, things to do Milwaukee kids, Milwaukee zoo, Discovery World" />
        <link rel="canonical" href="https://discover-milwaukee.com/family-weekend-milwaukee" />

        <meta property="og:title" content="Family Weekend in Milwaukee: Best Things to Do with Kids" />
        <meta property="og:description" content="Plan the perfect family weekend in Milwaukee with our guide to kid-friendly attractions, restaurants, and activities." />
        <meta property="og:url" content="https://discover-milwaukee.com/family-weekend-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://discover-milwaukee.com/og-family.jpg" />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>FAMILY GUIDE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Milwaukee with Kids
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From world-class museums to legendary frozen custard, Milwaukee is a surprisingly great family destination. Here's how to make the most of your family weekend.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Top Kid-Friendly Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee has excellent attractions for all ages. These are the must-visits for families.
            </p>
            {attractions.map((a, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "16px", border: `1px solid ${c.beige}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: 0 }}>{a.name}</h3>
                  <span style={{ backgroundColor: c.green2, color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px" }}>{a.ages}</span>
                </div>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{a.description}</p>
                <div style={{ backgroundColor: `${c.orange}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>DON'T MISS</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{a.mustDo}</p>
                </div>
                <div style={{ backgroundColor: `${c.green2}15`, padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{a.tip}</p>
                </div>
                <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{a.address}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Family-Friendly Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Where to eat with kids in tow—no fancy tablecloths required.
            </p>
            {restaurants.map((r, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}`, marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", margin: 0 }}>{r.name}</h3>
                  <span style={{ color: c.green2, fontSize: "12px", fontWeight: "600" }}>{r.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" }}>{r.description}</p>
                <p style={{ color: c.orange, fontSize: "13px", fontWeight: "600", margin: 0 }}>Kid-Friendly: {r.kidFriendly}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Outdoor Activities</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's lakefront and parks are perfect for families who need to burn energy.
            </p>
            <div style={{ display: "grid", gap: "16px" }}>
              {outdoors.map((o, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>{o.name}</h3>
                  <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>{o.activity}</p>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{o.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {o.highlights.map((h, j) => (
                      <span key={j} style={{ backgroundColor: c.beige, color: c.green1, fontSize: "12px", padding: "4px 10px", borderRadius: "20px" }}>{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Rainy Day Options</h2>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
                Wisconsin weather can be unpredictable. Here are backup plans:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                {rainyDay.map((r, i) => (
                  <div key={i} style={{ backgroundColor: c.beige, padding: "12px", borderRadius: "8px" }}>
                    <p style={{ color: c.green1, fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>{r.name}</p>
                    <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>{r.why}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Family-Friendly Hotels</h2>
            <div style={{ display: "grid", gap: "12px" }}>
              {hotels.map((h, i) => (
                <div key={i} style={{ backgroundColor: "white", padding: "16px 20px", borderRadius: "12px", border: `1px solid ${c.beige}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{h.name}</h3>
                    <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{h.feature}</p>
                  </div>
                  <span style={{ color: c.orange, fontWeight: "700" }}>{h.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Weekend Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/weekend-in-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Weekend Itinerary →</Link>
              <Link href="/free-things-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Free Things to Do →</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Things to Do →</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Plan Your Family Trip</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Get weekly updates on family events and kid-friendly activities.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>Explore Milwaukee</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/things-to-do-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/free-things-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Free Activities</Link>
                <Link href="/washington-heights-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Washington Heights (Zoo)</Link>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
