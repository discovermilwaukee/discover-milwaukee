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

const venueSpots = {
  largeVenues: [
    {
      name: "Fiserv Forum",
      neighborhood: "Downtown/Deer District",
      style: "Major Arena",
      capacity: "17,500",
      address: "1111 Vel R. Phillips Ave, Milwaukee, WI 53203",
      description: "Home of the Milwaukee Bucks and the city's premier arena for major concerts. World-class acoustics and production bring the biggest names in music to Milwaukee. The surrounding Deer District offers pre-show dining and drinks.",
      typicalActs: "Taylor Swift, Drake, Beyoncé, major touring acts",
      insiderTip: "Arrive early to explore the Deer District. The rooftop bars have great pre-show atmosphere.",
      bestFor: "Stadium shows, major artists, bucket-list concerts",
    },
    {
      name: "American Family Insurance Amphitheater",
      neighborhood: "Summerfest Grounds",
      style: "Outdoor Amphitheater",
      capacity: "23,000",
      address: "200 N Harbor Dr, Milwaukee, WI 53202",
      description: "Milwaukee's largest outdoor venue, home to Summerfest's biggest headliners. The lakefront setting and summer atmosphere create unforgettable concert experiences. This is where summer and music collide.",
      typicalActs: "Major touring acts, Summerfest headliners",
      insiderTip: "Lawn seats offer more freedom to move. Bring a blanket for comfort.",
      bestFor: "Summer concerts, outdoor festivals, Summerfest",
    },
    {
      name: "The Rave / Eagles Club",
      neighborhood: "Near West Side",
      style: "Multi-Venue Complex",
      capacity: "Various (400-4,000)",
      address: "2401 W Wisconsin Ave, Milwaukee, WI 53233",
      description: "A historic building with multiple venues under one roof—from the intimate Eagles Ballroom to the grand Eagles Club. The Gothic architecture and diverse booking make this a Milwaukee institution for mid-size acts.",
      typicalActs: "Rock, metal, electronic, hip-hop, touring acts",
      insiderTip: "Check which room your show is in. Each space has a different feel and capacity.",
      bestFor: "Rock shows, diverse lineups, unique venue experience",
    },
  ],
  midSize: [
    {
      name: "The Pabst Theater",
      neighborhood: "Downtown",
      style: "Historic Theater",
      capacity: "1,339",
      address: "144 E Wells St, Milwaukee, WI 53202",
      description: "Built in 1895 and beautifully restored, The Pabst is one of America's most beautiful concert venues. The acoustics are exceptional, and the ornate interior makes every show feel special. Part of Milwaukee's Pabst Theater Group.",
      typicalActs: "Indie, folk, comedy, classical, diverse touring acts",
      insiderTip: "Every seat has great sightlines. The balcony offers the best acoustics.",
      bestFor: "Acoustic performances, intimate major acts, beautiful setting",
    },
    {
      name: "Riverside Theater",
      neighborhood: "Downtown",
      style: "Historic Theater",
      capacity: "2,450",
      address: "116 W Wisconsin Ave, Milwaukee, WI 53203",
      description: "Another gem in the Pabst Theater Group, the Riverside offers a larger capacity while maintaining that historic theater charm. Perfect for acts that have outgrown clubs but want an intimate feel.",
      typicalActs: "Rock, pop, country, comedy, diverse national acts",
      insiderTip: "The orchestra pit area offers the closest views. Arrive early for rail spots.",
      bestFor: "Mid-size touring acts, variety shows, comedy",
    },
    {
      name: "Turner Hall Ballroom",
      neighborhood: "Downtown",
      style: "Historic Ballroom",
      capacity: "900",
      address: "1040 N Vel R. Phillips Ave, Milwaukee, WI 53203",
      description: "A standing-room venue with incredible energy. The historic ballroom setting creates an intimate atmosphere for rock, indie, and alternative acts. Part of the Pabst Theater Group family.",
      typicalActs: "Indie rock, alternative, hip-hop, electronic",
      insiderTip: "Balcony offers a great view and less crowd pressure. Get there early for floor shows.",
      bestFor: "High-energy shows, standing room concerts, indie acts",
    },
  ],
  intimate: [
    {
      name: "Shank Hall",
      neighborhood: "East Side",
      style: "Legendary Club",
      capacity: "200",
      address: "1434 N Farwell Ave, Milwaukee, WI 53202",
      description: "Milwaukee's premier small club, Shank Hall has hosted legendary intimate performances for over three decades. The small room means you're always close to the stage. A must-visit for serious music fans.",
      typicalActs: "Blues, folk, indie, singer-songwriters, local acts",
      insiderTip: "The front row is feet from the stage. Come early for the best spots.",
      bestFor: "Intimate shows, discovering artists, serious music fans",
    },
    {
      name: "Linneman's Riverwest Inn",
      neighborhood: "Riverwest",
      style: "Neighborhood Bar/Venue",
      capacity: "100",
      address: "1001 E Locust St, Milwaukee, WI 53212",
      description: "Part neighborhood bar, part music venue, Linneman's is where you discover your next favorite artist. The Poet's Monday open mic and diverse booking make this a Riverwest institution.",
      typicalActs: "Local and touring singer-songwriters, folk, indie, poetry",
      insiderTip: "Poet's Monday is legendary. Come for the music, stay for the community.",
      bestFor: "Local music, poetry, neighborhood vibes",
    },
    {
      name: "Cactus Club",
      neighborhood: "Bay View",
      style: "Dive Bar Venue",
      capacity: "150",
      address: "2496 S Wentworth Ave, Milwaukee, WI 53207",
      description: "A Bay View institution, the Cactus Club books everything from punk to jazz in a no-frills room that's all about the music. Low stage, cheap drinks, real community—this is Milwaukee's underground.",
      typicalActs: "Punk, rock, experimental, local bands, touring underground acts",
      insiderTip: "Check the calendar for all-ages matinee shows. Great for discovering new sounds.",
      bestFor: "Underground music, punk, discovering local bands",
    },
    {
      name: "Vivarium",
      neighborhood: "Walker's Point",
      style: "Gallery/Venue",
      capacity: "175",
      address: "235 S 2nd St, Milwaukee, WI 53204",
      description: "An experimental arts space doubling as a music venue, Vivarium hosts electronic, ambient, and avant-garde performances in an intimate gallery setting. For adventurous listeners.",
      typicalActs: "Electronic, experimental, ambient, art performances",
      insiderTip: "Follow them on social media—shows sell out and aren't always widely promoted.",
      bestFor: "Experimental music, electronic, art-minded audiences",
    },
  ],
  jazzBlues: [
    {
      name: "Jazz Estate",
      neighborhood: "East Side",
      style: "Jazz Club",
      capacity: "100",
      address: "2423 N Murray Ave, Milwaukee, WI 53211",
      description: "Milwaukee's dedicated jazz venue, the Jazz Estate brings in national touring acts alongside local talent. The small room creates an intimate atmosphere perfect for appreciating the art form.",
      typicalActs: "Jazz, blues, fusion, local and touring musicians",
      insiderTip: "Weeknight shows are often less crowded. Great for actually listening.",
      bestFor: "Jazz purists, intimate performances, serious listening",
    },
    {
      name: "Caroline's Jazz Club",
      neighborhood: "Third Ward",
      style: "Upscale Jazz",
      capacity: "120",
      address: "401 S 2nd St, Milwaukee, WI 53204",
      description: "Caroline's brings New York jazz club elegance to Milwaukee's Third Ward. Quality cocktails, intimate seating, and excellent bookings make this a sophisticated evening destination.",
      typicalActs: "Jazz standards, contemporary jazz, special events",
      insiderTip: "Make a dinner reservation for the full experience. The food matches the music.",
      bestFor: "Date nights, sophisticated evenings, jazz appreciation",
    },
  ],
};

const festivals = [
  {
    name: "Summerfest",
    dates: "Late June - Early July",
    description: "The world's largest music festival featuring hundreds of acts across 12 stages on Milwaukee's lakefront. Multiple weekends of non-stop music.",
  },
  {
    name: "Milwaukee Jazz Festival",
    dates: "August",
    description: "Free jazz performances on the lakefront featuring local and national artists.",
  },
  {
    name: "LIVE @ the Lakefront",
    dates: "Summer Wednesdays",
    description: "Free summer concert series on the lakefront featuring diverse musical acts.",
  },
];

const faqs = [
  {
    question: "What's the best concert venue in Milwaukee?",
    answer: "It depends on what you're looking for. The Pabst Theater offers the most beautiful historic setting with great acoustics. For major acts, Fiserv Forum provides the full arena experience. For intimate shows, Shank Hall is legendary.",
  },
  {
    question: "Where can I see live music for free in Milwaukee?",
    answer: "LIVE @ the Lakefront offers free summer concerts. Many brewery taprooms host free live music weekends. Jazz in the Park and various neighborhood festivals also feature free performances.",
  },
  {
    question: "What's the best venue for seeing local bands?",
    answer: "Cactus Club in Bay View and Linneman's Riverwest Inn are the heartbeat of Milwaukee's local scene. Both book diverse local acts and offer intimate settings to discover new music.",
  },
  {
    question: "How do I get tickets to Summerfest?",
    answer: "General admission and reserved seating for headliners are available through Summerfest's official website. Some weekday afternoons offer discounted general admission.",
  },
  {
    question: "Where's the best jazz in Milwaukee?",
    answer: "Jazz Estate on the East Side is Milwaukee's dedicated jazz venue. Caroline's in the Third Ward offers an upscale jazz club experience with dinner service.",
  },
];

export default function LiveMusicMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Milwaukee Live Music Guide: Best Venues, Clubs & Concerts [2026]",
    description: "Discover Milwaukee's best live music venues from historic theaters like The Pabst to intimate clubs like Shank Hall. Complete guide to concerts, jazz, and local music.",
    image: "https://www.discover-milwaukee.com/images/live-music-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/live-music-milwaukee",
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
      { "@type": "ListItem", position: 3, name: "Live Music Milwaukee", item: "https://www.discover-milwaukee.com/live-music-milwaukee" },
    ],
  };

  const renderVenue = (venue) => (
    <div key={venue.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{venue.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{venue.neighborhood}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{venue.capacity}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>{venue.style}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{venue.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem" }}>
        <div><strong style={{ color: c.green1 }}>Typical Acts:</strong> <span style={{ color: "#555" }}>{venue.typicalActs}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{venue.bestFor}</span></div>
      </div>
      <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}` }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{venue.insiderTip}</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>{venue.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Milwaukee Live Music Guide: Best Venues & Concerts [2026]</title>
        <meta name="description" content="Discover Milwaukee's best live music venues from historic Pabst Theater to intimate clubs like Shank Hall. Complete guide to concerts, jazz, festivals & local music." />
        <meta name="keywords" content="live music Milwaukee, Milwaukee concerts, Pabst Theater, Summerfest, Milwaukee venues, jazz Milwaukee, local music Milwaukee, The Rave Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/live-music-milwaukee" />
        <meta property="og:title" content="Milwaukee Live Music Guide: Best Venues & Concerts [2026]" />
        <meta property="og:description" content="From arena shows to intimate clubs, discover the best live music Milwaukee has to offer." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/live-music-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/live-music-milwaukee.jpg" />
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
            <span style={{ color: c.green1 }}>Live Music</span>
          </nav>

          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>Milwaukee Live Music Guide: Venues, Clubs & Concerts</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee punches above its weight as a live music city. Home to Summerfest—the world's largest music festival—the city also boasts historic theaters, legendary small clubs, and a thriving local scene that feeds into the national touring circuit.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              From arena shows at Fiserv Forum to discovering your next favorite band at Cactus Club, this guide covers every corner of Milwaukee's music scene. Whether you're chasing major headliners or supporting local artists, the city delivers.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026 | All venues verified active</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Major Venues</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Arena shows and large-scale concerts</p>
            {venueSpots.largeVenues.map(renderVenue)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Historic Theaters</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Beautiful venues with exceptional sound</p>
            {venueSpots.midSize.map(renderVenue)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Intimate Clubs</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Where you discover your next favorite artist</p>
            {venueSpots.intimate.map(renderVenue)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Jazz & Blues</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>For serious listening</p>
            {venueSpots.jazzBlues.map(renderVenue)}
          </section>

          <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Music Festivals</h2>
            <div style={{ display: "grid", gap: "20px" }}>
              {festivals.map((fest, index) => (
                <div key={index} style={{ padding: "16px", backgroundColor: c.cream, borderRadius: "8px" }}>
                  <h3 style={{ color: c.green1, marginBottom: "4px" }}>{fest.name}</h3>
                  <p style={{ color: c.orange, fontSize: "0.9rem", marginBottom: "8px" }}>{fest.dates}</p>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>{fest.description}</p>
                </div>
              ))}
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
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>More Milwaukee Entertainment</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Discover more ways to experience Milwaukee's nightlife</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/milwaukee-nightlife" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Nightlife Guide</Link>
              <Link href="/milwaukee-festivals" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Festivals</Link>
              <Link href="/events" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Events</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Discovering Milwaukee's live music scene since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
