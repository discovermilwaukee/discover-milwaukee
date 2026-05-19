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

const dogFriendlySpots = {
  breweries: [
    {
      name: "Lakefront Brewery",
      neighborhood: "Brewer's Hill",
      type: "Brewery & Beer Garden",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "One of Milwaukee's most popular breweries with a large outdoor patio and dog-friendly beer garden. Great beer, Friday fish fry, and plenty of space for your pup to hang out.",
      dogPolicy: "Dogs welcome on outdoor patio and beer garden",
      amenities: "Outdoor seating, water available on request",
      insiderTip: "The beer garden fills up on nice days—arrive early with your dog to claim a good spot.",
      bestFor: "Beer lovers, Friday fish fry, nice weather days",
    },
    {
      name: "Black Husky Brewing",
      neighborhood: "Riverwest",
      type: "Brewery Taproom",
      address: "909 E Locust St, Milwaukee, WI 53212",
      description: "A small, family-owned brewery in Riverwest with a cozy taproom that welcomes dogs inside. The intimate setting makes it feel like you're drinking in someone's living room—with better beer.",
      dogPolicy: "Dogs welcome inside the taproom",
      amenities: "Indoor-friendly, cozy atmosphere",
      insiderTip: "This is one of the few places where dogs can hang inside. Great for rainy or cold days.",
      bestFor: "Craft beer enthusiasts, bad weather, intimate vibes",
    },
    {
      name: "Third Space Brewing",
      neighborhood: "Menomonee Valley",
      type: "Brewery & Large Patio",
      address: "1505 W St Paul Ave, Milwaukee, WI 53233",
      description: "Spacious brewery with a large, dog-friendly outdoor patio. Third Space has become a favorite for dog owners thanks to its relaxed vibe and generous outdoor space.",
      dogPolicy: "Dogs welcome on outdoor patio",
      amenities: "Large patio, water bowls often available",
      insiderTip: "Great pre-game spot before Bucks or Brewers games. The patio can handle big groups with dogs.",
      bestFor: "Large dogs, groups, pre-game drinks",
    },
    {
      name: "Broken Bat Brewing",
      neighborhood: "Third Ward",
      type: "Brewery Taproom",
      address: "231 E Buffalo St, Milwaukee, WI 53202",
      description: "Baseball-themed brewery in the Third Ward that welcomes well-behaved pups inside the taproom. Sports memorabilia and good beer make this a fun hangout.",
      dogPolicy: "Well-behaved dogs welcome inside",
      amenities: "Indoor taproom access",
      insiderTip: "Indoor dog-friendly in the Third Ward—rare. Great for sports fans with dogs.",
      bestFor: "Sports fans, Third Ward visits, indoor-friendly",
    },
  ],
  barsRestaurants: [
    {
      name: "Camp Bar",
      neighborhood: "Third Ward",
      type: "Bar & Restaurant",
      address: "525 E Menomonee St, Milwaukee, WI 53202",
      description: "A two-story camping-themed bar with a dog-friendly patio. Fire pits, cozy seating, and a fun vibe. They even have s'mores kits—though those are for humans.",
      dogPolicy: "Dogs welcome on patio (two levels)",
      amenities: "Fire pits, outdoor seating, water available",
      insiderTip: "The rooftop patio is dog-friendly too. Great for sunset drinks with your pup.",
      bestFor: "Groups, date night with dogs, camping vibes",
    },
    {
      name: "The Red Lion Pub",
      neighborhood: "East Side",
      type: "British Pub",
      address: "1850 N Water St, Milwaukee, WI 53202",
      description: "Classic British pub with ample dog-friendly patio seating—around twenty tables. The pub grub and beer selection make this a favorite for East Side dog owners.",
      dogPolicy: "Dogs welcome on large patio (~20 tables)",
      amenities: "Large patio, traditional pub fare",
      insiderTip: "One of the biggest dog-friendly patios on the East Side. Great for big dogs.",
      bestFor: "East Side residents, British pub fans, large dogs",
    },
    {
      name: "Art*Bar",
      neighborhood: "Riverwest",
      type: "Art Bar",
      address: "722 E Burleigh St, Milwaukee, WI 53212",
      description: "Riverwest institution that lets dogs inside, not just on the patio. The eclectic, artsy vibe extends to welcoming all kinds of pups.",
      dogPolicy: "Dogs welcome inside and on patio",
      amenities: "Indoor access, outdoor patio",
      insiderTip: "One of the few bars that truly allows dogs inside. Very Riverwest.",
      bestFor: "Riverwest hangouts, indoor dog access, artsy vibes",
    },
    {
      name: "Colectivo Coffee",
      neighborhood: "Multiple Locations",
      type: "Coffee Shop",
      address: "Various locations throughout Milwaukee",
      description: "All Colectivo locations offer some form of dog-friendly outdoor seating. The Colectivo Lakefront location is especially popular, built in the historic Milwaukee River Flushing Station with a giant pet-friendly patio.",
      dogPolicy: "Dogs welcome on outdoor patios at all locations",
      amenities: "Outdoor seating, coffee, beer & wine at some locations",
      insiderTip: "The Lakefront location has the biggest patio and serves beer. Perfect summer hangout.",
      bestFor: "Coffee runs, morning walks, lakefront views",
    },
  ],
  specialSpots: [
    {
      name: "Salty Paws",
      neighborhood: "Third Ward",
      type: "Dog Ice Cream Parlor",
      address: "Third Ward, Milwaukee",
      description: "A dog-focused ice cream parlor with pick-your-own dog treats and a large selection of dog ice cream flavors. Yes, they have human treats too—but this is really about the pups.",
      dogPolicy: "Extremely dog-friendly—it's literally for dogs",
      amenities: "Dog ice cream, treats, dog-focused products",
      insiderTip: "Bring your dog here after a walk along the Riverwalk. They've earned it.",
      bestFor: "Spoiling your dog, special treats, Instagram moments",
    },
  ],
  parks: [
    {
      name: "Estabrook Park Dog Exercise Area",
      neighborhood: "Shorewood",
      type: "Off-Leash Dog Park",
      address: "4400 N Estabrook Dr, Milwaukee, WI 53211",
      description: "One of Milwaukee's most popular off-leash dog parks with acres of fenced space, water access to the Milwaukee River, and separate areas for large and small dogs.",
      dogPolicy: "Off-leash (within designated fenced area)",
      amenities: "River access, separate small dog area, shade, benches",
      insiderTip: "The river access is amazing in summer—dogs love it. Bring towels.",
      bestFor: "Active dogs, water-loving dogs, socialization",
    },
    {
      name: "Runway Dog Exercise Area",
      neighborhood: "Bay View",
      type: "Off-Leash Dog Park",
      address: "1214 E Bay St, Milwaukee, WI 53207",
      description: "Bay View's popular dog park with great lake views and a laid-back vibe. The park includes separate areas for large and small dogs.",
      dogPolicy: "Off-leash (within designated fenced area)",
      amenities: "Lake views, separate areas by size, benches",
      insiderTip: "Come at sunset for beautiful lake views while your dog plays.",
      bestFor: "Bay View residents, views, socializing",
    },
    {
      name: "Currie Park Dog Exercise Area",
      neighborhood: "East Side",
      type: "Off-Leash Dog Park",
      address: "3535 N Mayfair Rd, Milwaukee",
      description: "Large off-leash area on Milwaukee's East Side with plenty of space for dogs to run. A favorite for active dogs who need room to roam.",
      dogPolicy: "Off-leash (within designated fenced area)",
      amenities: "Large space, parking nearby",
      insiderTip: "Great for high-energy dogs who need to run. Less crowded than Estabrook.",
      bestFor: "High-energy dogs, active play, less crowds",
    },
  ],
  trails: [
    {
      name: "Oak Leaf Trail",
      neighborhood: "Citywide",
      type: "Multi-Use Trail",
      address: "Multiple access points throughout Milwaukee County",
      description: "Over 100 miles of paved trails throughout Milwaukee County. Dogs must be on leash, but the variety of scenery—lake, river, parks—makes this great for dog walks.",
      dogPolicy: "Dogs on leash required",
      amenities: "Paved paths, water fountains at some points, multiple access",
      insiderTip: "The lakefront section is especially beautiful. Early morning is best for quieter walks.",
      bestFor: "Long walks, exploring the city, exercise",
    },
    {
      name: "Lakefront Trail",
      neighborhood: "Downtown to Bay View",
      type: "Lakefront Path",
      address: "Along Lake Michigan from downtown through Bay View",
      description: "Miles of paved lakefront paths perfect for walking or running with your dog. Lake Michigan views the entire way.",
      dogPolicy: "Dogs on leash required",
      amenities: "Lake views, benches, water fountains",
      insiderTip: "Start at Veterans Park and walk south through Bay View for the best views.",
      bestFor: "Scenic walks, lake views, exercise",
    },
  ],
};

const faqs = [
  {
    question: "What bars in Milwaukee allow dogs inside?",
    answer: "Black Husky Brewing, Broken Bat Brewing, and Art*Bar are among the few Milwaukee bars that allow dogs inside the actual establishment. Most other dog-friendly bars welcome dogs on outdoor patios only."
  },
  {
    question: "Where are the best dog parks in Milwaukee?",
    answer: "Popular Milwaukee dog parks include Estabrook Park Dog Exercise Area (has river access), Runway Dog Exercise Area in Bay View (lake views), and Currie Park. All have fenced, off-leash areas with separate sections for small dogs."
  },
  {
    question: "Are dogs allowed on Milwaukee restaurant patios?",
    answer: "Many Milwaukee restaurants welcome dogs on outdoor patios, including Camp Bar, The Red Lion Pub, Lakefront Brewery, and most Colectivo locations. Always call ahead to confirm current dog policies."
  },
  {
    question: "What breweries in Milwaukee are dog-friendly?",
    answer: "Dog-friendly Milwaukee breweries include Lakefront Brewery, Third Space Brewing, Black Husky Brewing (dogs allowed inside), and Broken Bat Brewing. Most welcome dogs on outdoor patios; Black Husky and Broken Bat also allow well-behaved dogs inside."
  },
  {
    question: "Is there a dog ice cream shop in Milwaukee?",
    answer: "Yes! Salty Paws in the Third Ward is a dog-focused ice cream parlor with dog ice cream flavors and treats. It's the perfect stop after a Riverwalk walk."
  },
  {
    question: "Can I take my dog on the Milwaukee lakefront?",
    answer: "Yes! Dogs on leash are welcome on the Oak Leaf Trail and Lakefront Trail. These paved paths run along Lake Michigan with beautiful views. Some beach areas have restrictions—check local rules."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dog-Friendly Milwaukee 2026: Bars, Restaurants & Parks",
    "description": "Complete guide to dog-friendly Milwaukee. Breweries, patios, dog parks, and trails that welcome your pup.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/dog-friendly-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Dog-Friendly Milwaukee", "item": "https://www.discover-milwaukee.com/dog-friendly-milwaukee" }
    ]
  }
};

export default function DogFriendlyMilwaukee() {
  const DogFriendlyCard = ({ spot }) => (
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
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.type}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>DOG POLICY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.dogPolicy}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>AMENITIES</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.amenities}</p>
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
        <title>Dog-Friendly Milwaukee 2026 | Bars, Restaurants & Dog Parks</title>
        <meta name="description" content="Complete guide to dog-friendly Milwaukee. Breweries, restaurant patios, dog parks, and walking trails that welcome your pup. Indoor and outdoor options." />
        <meta name="keywords" content="dog friendly milwaukee, dog friendly bars milwaukee, dog parks milwaukee, pet friendly restaurants milwaukee, dog friendly patios milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/dog-friendly-milwaukee" />

        <meta property="og:title" content="Dog-Friendly Milwaukee 2026 | Bars, Restaurants & Parks" />
        <meta property="og:description" content="Milwaukee's complete dog-friendly guide. Breweries, patios, dog parks, and trails that welcome your pup." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/dog-friendly-milwaukee" />
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
              Dog-Friendly Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Bring your best friend everywhere. Breweries, patios, parks, and trails that welcome well-behaved pups.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Dog-Friendly Breweries</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Craft beer and canine companions—Milwaukee does both well.
            </p>
            {dogFriendlySpots.breweries.map((spot, i) => <DogFriendlyCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bars & Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Patios and spots that welcome your pup while you grab a bite or drink.
            </p>
            {dogFriendlySpots.barsRestaurants.map((spot, i) => <DogFriendlyCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Special Dog Spots</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Places made especially for dogs (and their humans).
            </p>
            {dogFriendlySpots.specialSpots.map((spot, i) => <DogFriendlyCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Off-Leash Dog Parks</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Fenced areas where your dog can run free and socialize.
            </p>
            {dogFriendlySpots.parks.map((spot, i) => <DogFriendlyCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Walking Trails</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Scenic paths for on-leash adventures throughout the city.
            </p>
            {dogFriendlySpots.trails.map((spot, i) => <DogFriendlyCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Patios</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/free-things-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Free Things to Do</Link>
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New openings, events, and insider tips every Wednesday.</p>
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
