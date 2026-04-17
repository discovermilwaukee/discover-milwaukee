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

// Festival data organized by month
const festivalsByMonth = {
  june: [
    {
      name: "PrideFest Milwaukee",
      dates: "June 4-6, 2026",
      venue: "Henry Maier Festival Park",
      price: "$15-20",
      description: "Milwaukee's LGBTQ+ pride celebration kicks off the summer festival season on the lakefront. Live entertainment across multiple stages, vendors, community organizations, and a powerful celebration of diversity.",
      highlight: "Opening ceremony and the famous Pride Parade",
      tags: ["LGBTQ+", "Music", "Community"],
      featured: true,
    },
    {
      name: "Polish Fest",
      dates: "June 12-14, 2026",
      venue: "Henry Maier Festival Park",
      price: "$15-20",
      description: "America's largest Polish festival! Five entertainment stages featuring polka bands, folk dancers, and contemporary Polish-American artists. Authentic cuisine including pierogi, kielbasa, and pączki.",
      highlight: "Pierogi eating contest and traditional polka dancing",
      tags: ["Cultural", "Food", "Music"],
      featured: true,
    },
    {
      name: "Lakefront Festival of Art",
      dates: "June 13-15, 2026",
      venue: "Milwaukee Art Museum",
      price: "$18-22",
      description: "145 juried artists showcase paintings, sculpture, jewelry, ceramics, and photography against the stunning backdrop of the Calatrava-designed museum. Includes museum admission.",
      highlight: "Meet the artists and watch live demonstrations",
      tags: ["Art", "Family", "Lakefront"],
      featured: true,
    },
    {
      name: "Summerfest - Weekend 1",
      dates: "June 18-20, 2026",
      venue: "Henry Maier Festival Park",
      price: "$30+",
      description: "The World's Largest Music Festival begins! 800+ acts perform across 12 stages over three weekends. 2026 headliners include Ed Sheeran and Post Malone. 75 acres of music, food, and lakefront fun.",
      highlight: "American Family Insurance Amphitheater headliner shows",
      tags: ["Music", "Food", "Lakefront"],
      featured: true,
    },
    {
      name: "Juneteenth Day Celebration",
      dates: "June 19, 2026",
      venue: "N. Dr. Martin Luther King Jr. Drive",
      price: "Free",
      description: "54+ years of tradition! Milwaukee's Juneteenth celebration is one of the nation's oldest and largest, drawing 170,000+ participants for a parade, live music, food, and cultural celebration in Bronzeville.",
      highlight: "The parade down MLK Drive and community performances",
      tags: ["Cultural", "Free", "Family", "Historic"],
      featured: true,
    },
    {
      name: "Summerfest - Weekend 2",
      dates: "June 25-27, 2026",
      venue: "Henry Maier Festival Park",
      price: "$30+",
      description: "Summerfest continues with another stacked weekend. 2026 features Garth Brooks and Jelly Roll headlining the amphitheater. Over 45 food vendors and countless local acts on community stages.",
      highlight: "Friday night fireworks over Lake Michigan",
      tags: ["Music", "Food", "Lakefront"],
      featured: true,
    },
    {
      name: "Cedarburg Strawberry Festival",
      dates: "June 27-28, 2026",
      venue: "Downtown Cedarburg",
      price: "Free admission",
      description: "100,000 visitors flock to historic Cedarburg for strawberry shortcake, strawberry-topped everything, 300+ artists, and small-town charm. The Art on the Avenue showcase features top regional artists.",
      highlight: "Fresh strawberry shortcake and the Cedar Creek art area",
      tags: ["Food", "Art", "Family", "Free"],
      featured: false,
    },
  ],
  july: [
    {
      name: "Summerfest - Weekend 3",
      dates: "July 2-4, 2026",
      venue: "Henry Maier Festival Park",
      price: "$30+",
      description: "The Summerfest finale culminates with July 4th fireworks! Muse headlines the amphitheater. Children's Fest on July 4th offers free admission noon-3pm for kids.",
      highlight: "July 4th fireworks spectacular over Lake Michigan",
      tags: ["Music", "Fireworks", "Family"],
      featured: true,
    },
    {
      name: "Bastille Days",
      dates: "July 9-12, 2026",
      venue: "Cathedral Square Park",
      price: "Free admission",
      description: "40th anniversary! Milwaukee's French-themed festival transforms downtown into a Parisian celebration. The 43-foot Eiffel Tower replica, French/Cajun cuisine, and the famous Storm the Bastille 5K run.",
      highlight: "Storm the Bastille 5K and the massive Eiffel Tower",
      tags: ["Cultural", "Free", "Food", "Running"],
      featured: true,
    },
    {
      name: "Festa Italiana",
      dates: "July 10-12, 2026",
      venue: "Henry Maier Festival Park",
      price: "$13-15",
      description: "Celebrate Italian culture with gondola rides, bocce tournaments, pizza-eating contests, and the most authentic Italian food in the Midwest. Kids 12 & under enter free!",
      highlight: "Grape stomp competition and authentic Sicilian cannoli",
      tags: ["Cultural", "Food", "Family"],
      featured: true,
    },
    {
      name: "Lake Country Art Festival",
      dates: "July 11, 2026",
      venue: "Naga-Waukee Park, Delafield",
      price: "Free admission",
      description: "50th anniversary celebration! 100-120 juried artists display work in a beautiful park setting west of Milwaukee. Live music, food, and children's activities.",
      highlight: "Scenic park setting along Nagawicka Lake",
      tags: ["Art", "Free", "Family", "Outdoor"],
      featured: false,
    },
    {
      name: "Port Fish Day",
      dates: "July 17-19, 2026",
      venue: "Port Washington Harbor",
      price: "Free admission",
      description: "The world's largest one-day outdoor fish fry! Four music stages, parade, classic car show, and fresh Lake Michigan fish prepared every way imaginable in charming Port Washington.",
      highlight: "All-you-can-eat fish fry and harbor fireworks",
      tags: ["Food", "Free", "Family", "Lakefront"],
      featured: false,
    },
    {
      name: "German Fest",
      dates: "July 24-26, 2026",
      venue: "Henry Maier Festival Park",
      price: "$15-20",
      description: "Milwaukee's German heritage celebration! Traditional food (schnitzel, brats, pretzels), polka music, massive beer gardens, and gemütlichkeit on the lakefront. One of Milwaukee's most beloved festivals.",
      highlight: "The world's largest glockenspiel and beer barrel races",
      tags: ["Cultural", "Food", "Beer", "Music"],
      featured: true,
    },
    {
      name: "Taste of Wisconsin",
      dates: "July 24-26, 2026",
      venue: "HarborPark, Kenosha",
      price: "Free admission",
      description: "30+ food vendors, 80+ live musical performances across four stages on the Kenosha lakefront. Bounce houses, rock climbing walls, and stunning Lake Michigan views.",
      highlight: "Lakefront setting and diverse Wisconsin cuisine",
      tags: ["Food", "Free", "Music", "Family"],
      featured: false,
    },
  ],
  august: [
    {
      name: "Black Arts Fest MKE",
      dates: "August 1, 2026",
      venue: "Henry Maier Festival Park",
      price: "$10-15",
      description: "Celebrating Black art, music, poetry, dance, and fashion. Local and national artists showcase African American culture and creativity in a vibrant one-day celebration on the lakefront.",
      highlight: "Live performances and emerging artist showcases",
      tags: ["Cultural", "Art", "Music"],
      featured: true,
    },
    {
      name: "Wisconsin State Fair",
      dates: "August 6-16, 2026",
      venue: "Wisconsin State Fair Park, West Allis",
      price: "$15-18",
      description: "175th anniversary! 11 days of legendary cream puffs, carnival rides, farm animals, grandstand concerts, and fair food classics. Over one million visitors expected.",
      highlight: "Original cream puffs - over 400,000 sold each year",
      tags: ["Family", "Food", "Entertainment", "Agriculture"],
      featured: true,
    },
    {
      name: "Irish Fest",
      dates: "August 13-16, 2026",
      venue: "Henry Maier Festival Park",
      price: "$20-25",
      description: "Recognized by the Smithsonian as North America's largest Irish cultural event! 18 entertainment stages featuring Celtic music, Irish dance, cultural exhibits, and authentic cuisine.",
      highlight: "The Scattering ceremony and world-class Celtic bands",
      tags: ["Cultural", "Music", "Food"],
      featured: true,
    },
    {
      name: "Milwaukee Dragon Boat Festival",
      dates: "August 15, 2026",
      venue: "Lakeshore State Park",
      price: "Free admission",
      description: "Dragon boat races, martial arts demonstrations, Asian crafts, and cultural performances. A unique lakefront festival celebrating Asian heritage and the ancient sport of dragon boat racing.",
      highlight: "Watch competitive dragon boat races on the harbor",
      tags: ["Cultural", "Free", "Outdoor", "Sports"],
      featured: false,
    },
    {
      name: "Mexican Fiesta",
      dates: "August 21-23, 2026",
      venue: "Henry Maier Festival Park",
      price: "$15-20",
      description: "Vibrant celebration of Mexican culture! Mariachi music, traditional Folklorico dancing, lucha libre wrestling, authentic cuisine, and familia fun. One of Milwaukee's most colorful festivals.",
      highlight: "Folklorico dance performances and mariachi competitions",
      tags: ["Cultural", "Music", "Food", "Family"],
      featured: true,
    },
  ],
  fall: [
    {
      name: "Indian Summer Festival",
      dates: "September 11-13, 2026",
      venue: "Henry Maier Festival Park",
      price: "$15-18",
      description: "Celebrating Native American culture with traditional dance competitions (powwow), music, art, and authentic cuisine. Storytelling, craft demonstrations, and intertribal gatherings.",
      highlight: "Grand Entry powwow ceremony and traditional dance competitions",
      tags: ["Cultural", "Music", "Art", "Family"],
      featured: true,
    },
    {
      name: "Oktoberfest at Old Heidelberg Park",
      dates: "September 18-20, 2026",
      venue: "Old Heidelberg Park, Glendale",
      price: "$10-15",
      description: "Authentic German Oktoberfest celebration! Import beers, traditional brats and pretzels, polka bands, and gemütlichkeit in Milwaukee's German tradition.",
      highlight: "Keg tapping ceremony and stein-holding competitions",
      tags: ["Cultural", "Beer", "Food", "21+"],
      featured: false,
    },
    {
      name: "Holiday Folk Fair International",
      dates: "November 20-22, 2026",
      venue: "Wisconsin State Fair Park",
      price: "$15",
      description: "Celebrate Milwaukee's incredible diversity! 50+ ethnic groups showcase traditional food, dance, crafts, and customs from around the world. A beloved Milwaukee tradition for over 75 years.",
      highlight: "Taste cuisines from 50+ countries under one roof",
      tags: ["Cultural", "Food", "Family", "Indoor"],
      featured: true,
    },
  ],
};

// Festival highlights for quick reference
const festivalHighlights = {
  ethnicFestivals: ["Polish Fest", "Festa Italiana", "German Fest", "Irish Fest", "Mexican Fiesta", "Indian Summer"],
  freeFestivals: ["Juneteenth Day", "Bastille Days", "Cedarburg Strawberry Festival", "Port Fish Day", "Dragon Boat Festival"],
  familyFriendly: ["Wisconsin State Fair", "Holiday Folk Fair", "Lakefront Festival of Art", "Summerfest Children's Day"],
  foodFocused: ["Festa Italiana", "German Fest", "Polish Fest", "Wisconsin State Fair", "Port Fish Day"],
};

const faqs = [
  {
    question: "What is Milwaukee known for in terms of festivals?",
    answer: "Milwaukee is called 'The City of Festivals' and hosts over 20 major ethnic and cultural festivals annually, mostly at Henry Maier Festival Park on the lakefront. The city is famous for Summerfest (the world's largest music festival), plus beloved ethnic festivals like Polish Fest, Irish Fest, German Fest, Festa Italiana, and Mexican Fiesta that celebrate Milwaukee's diverse immigrant heritage."
  },
  {
    question: "Where are most Milwaukee festivals held?",
    answer: "Most major Milwaukee festivals take place at Henry Maier Festival Park (also called 'the Summerfest grounds'), a 75-acre permanent festival venue on the Lake Michigan lakefront. The park features multiple stages, food vendor areas, and stunning lake views. Other festivals occur at Cathedral Square Park, State Fair Park, and various neighborhood locations."
  },
  {
    question: "When is Summerfest 2026?",
    answer: "Summerfest 2026 runs three weekends: June 18-20, June 25-27, and July 2-4. The festival features 800+ musical acts across 12 stages. Headliners for 2026 include Ed Sheeran, Post Malone, Garth Brooks, Jelly Roll, and Muse. Children's Fest on July 4th offers free noon-3pm admission for kids."
  },
  {
    question: "Are Milwaukee festivals family-friendly?",
    answer: "Yes! Most Milwaukee festivals are very family-friendly with dedicated children's areas, kid-appropriate entertainment, and family pricing. Wisconsin State Fair, Holiday Folk Fair, and Summerfest's Children's Day are especially great for families. Many festivals offer free admission for children under 12."
  },
  {
    question: "What ethnic festivals does Milwaukee have?",
    answer: "Milwaukee hosts numerous ethnic festivals celebrating its diverse heritage: Polish Fest (June), Festa Italiana (July), German Fest (July), Irish Fest (August), Mexican Fiesta (August), Indian Summer/Native American festival (September), Black Arts Fest (August), Bastille Days/French (July), and Holiday Folk Fair (November) featuring 50+ ethnic groups."
  },
  {
    question: "What are the free festivals in Milwaukee?",
    answer: "Several major Milwaukee festivals offer free admission: Juneteenth Day Celebration, Bastille Days, Cedarburg Strawberry Festival, Port Fish Day, Milwaukee Dragon Boat Festival, and Taste of Wisconsin. Many paid festivals also offer free admission days or hours for children."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Festivals 2026: Complete Guide to Summerfest, Ethnic Fests & More",
    "description": "Complete guide to Milwaukee's famous festival season. Summerfest, Polish Fest, German Fest, Irish Fest, State Fair, and 20+ annual celebrations. Dates, prices, and insider tips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-16",
    "mainEntityOfPage": "https://discover-milwaukee.com/milwaukee-festivals"
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
  eventList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Milwaukee Festivals 2026",
    "description": "Annual festivals and cultural celebrations in Milwaukee, Wisconsin",
    "numberOfItems": Object.values(festivalsByMonth).flat().length,
    "itemListElement": Object.values(festivalsByMonth).flat().map((fest, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Festival",
        "name": fest.name,
        "description": fest.description,
        "location": fest.venue
      }
    }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Festivals Guide", "item": "https://discover-milwaukee.com/milwaukee-festivals" }
    ]
  }
};

export default function MilwaukeeFestivals() {
  const FestivalCard = ({ festival }) => (
    <div style={{
      backgroundColor: festival.featured ? "white" : c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: festival.featured ? `2px solid ${c.orange}` : `1px solid ${c.beige}`,
      position: "relative",
    }}>
      {festival.featured && (
        <span style={{
          position: "absolute",
          top: "-10px",
          right: "20px",
          backgroundColor: c.orange,
          color: "white",
          padding: "4px 12px",
          borderRadius: "12px",
          fontSize: "11px",
          fontWeight: "700",
        }}>FEATURED</span>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{festival.name}</h3>
        <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "700" }}>{festival.price}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <span style={{ backgroundColor: c.green1, color: c.cream, padding: "4px 12px", borderRadius: "16px", fontSize: "12px", fontWeight: "600" }}>{festival.dates}</span>
        <span style={{ backgroundColor: c.green2, color: c.cream, padding: "4px 12px", borderRadius: "16px", fontSize: "12px", fontWeight: "600" }}>{festival.venue}</span>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{festival.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, marginBottom: "4px", letterSpacing: "0.5px" }}>DON'T MISS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{festival.highlight}</p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {festival.tags.map((tag, i) => (
          <span key={i} style={{ backgroundColor: c.beige, color: c.green1, padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "600" }}>{tag}</span>
        ))}
      </div>
    </div>
  );

  const MonthSection = ({ month, festivals, monthLabel }) => (
    <section id={month} style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <div style={{ backgroundColor: c.orange, width: "4px", height: "32px", borderRadius: "2px" }}></div>
        <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", margin: 0 }}>{monthLabel}</h2>
        <span style={{ backgroundColor: c.beige, color: c.green1, padding: "4px 12px", borderRadius: "16px", fontSize: "13px", fontWeight: "600" }}>{festivals.length} festivals</span>
      </div>
      {festivals.map((festival, i) => <FestivalCard key={i} festival={festival} />)}
    </section>
  );

  return (
    <>
      <Head>
        <title>Milwaukee Festivals 2026: Summerfest, German Fest, Irish Fest & More | Complete Guide</title>
        <meta name="description" content="Complete guide to Milwaukee festivals 2026. Summerfest dates, Polish Fest, German Fest, Irish Fest, State Fair, and 20+ annual celebrations. The City of Festivals awaits!" />
        <meta name="keywords" content="milwaukee festivals 2026, summerfest 2026, german fest milwaukee, irish fest milwaukee, polish fest, festa italiana, wisconsin state fair, milwaukee events" />
        <link rel="canonical" href="https://discover-milwaukee.com/milwaukee-festivals" />

        <meta property="og:title" content="Milwaukee Festivals 2026 | Complete Guide to the City of Festivals" />
        <meta property="og:description" content="Your guide to 20+ Milwaukee festivals including Summerfest, ethnic fests, and the State Fair. Dates, prices, and insider tips." />
        <meta property="og:url" content="https://discover-milwaukee.com/milwaukee-festivals" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.eventList) }} />
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
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>THE CITY OF FESTIVALS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Milwaukee Festivals 2026
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 24px" }}>
              From the world's largest music festival to beloved ethnic celebrations, Milwaukee hosts 20+ major festivals each year. Here's your complete guide to festival season.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.cream, padding: "8px 16px", borderRadius: "20px", fontSize: "14px" }}>20+ Annual Festivals</span>
              <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.cream, padding: "8px 16px", borderRadius: "20px", fontSize: "14px" }}>Henry Maier Festival Park</span>
              <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: c.cream, padding: "8px 16px", borderRadius: "20px", fontSize: "14px" }}>June - November</span>
            </div>
          </div>
        </header>

        {/* Quick Navigation */}
        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px", position: "sticky", top: "56px", zIndex: 90 }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "12px", letterSpacing: "1px" }}>JUMP TO MONTH</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <a href="#june" style={{ backgroundColor: c.green1, color: c.cream, padding: "8px 16px", borderRadius: "20px", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>June</a>
              <a href="#july" style={{ backgroundColor: c.green2, color: c.cream, padding: "8px 16px", borderRadius: "20px", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>July</a>
              <a href="#august" style={{ backgroundColor: c.orange, color: "white", padding: "8px 16px", borderRadius: "20px", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>August</a>
              <a href="#fall" style={{ backgroundColor: c.yellow, color: c.green1, padding: "8px 16px", borderRadius: "20px", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>Fall</a>
              <a href="#faq" style={{ backgroundColor: c.beige, color: c.green1, padding: "8px 16px", borderRadius: "20px", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Festival Quick Stats */}
          <section style={{ marginBottom: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", textAlign: "center", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "32px", fontWeight: "900", color: c.orange, marginBottom: "4px" }}>20+</p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Annual Festivals</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", textAlign: "center", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "32px", fontWeight: "900", color: c.green1, marginBottom: "4px" }}>800+</p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Summerfest Acts</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", textAlign: "center", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "32px", fontWeight: "900", color: c.green2, marginBottom: "4px" }}>75</p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Acre Fest Grounds</p>
              </div>
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", textAlign: "center", border: `1px solid ${c.beige}` }}>
                <p style={{ fontSize: "32px", fontWeight: "900", color: c.yellow, marginBottom: "4px" }}>6</p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Free Festivals</p>
              </div>
            </div>
          </section>

          {/* Ethnic Festivals Highlight */}
          <section style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", marginBottom: "48px", border: `1px solid ${c.beige}` }}>
            <h2 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", marginBottom: "16px" }}>Milwaukee's Famous Ethnic Festivals</h2>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
              Milwaukee's immigrant communities created a unique festival tradition. Each ethnic festival celebrates heritage through authentic food, music, dance, and cultural exhibits—all on the beautiful lakefront.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {festivalHighlights.ethnicFestivals.map((name, i) => (
                <span key={i} style={{ backgroundColor: c.green1, color: c.cream, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>{name}</span>
              ))}
            </div>
          </section>

          {/* Monthly Festival Listings */}
          <MonthSection month="june" festivals={festivalsByMonth.june} monthLabel="June 2026" />
          <MonthSection month="july" festivals={festivalsByMonth.july} monthLabel="July 2026" />
          <MonthSection month="august" festivals={festivalsByMonth.august} monthLabel="August 2026" />
          <MonthSection month="fall" festivals={festivalsByMonth.fall} monthLabel="Fall 2026" />

          {/* Practical Info */}
          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", marginBottom: "48px" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "20px" }}>Festival Tips & Practical Info</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              <div>
                <h3 style={{ color: c.cream, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Getting There</h3>
                <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                  Henry Maier Festival Park is at 200 N. Harbor Dr. Free parking is limited—take the free shuttle from park & rides, rideshare, or bike the Lakefront Trail directly to the gates.
                </p>
              </div>
              <div>
                <h3 style={{ color: c.cream, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Saving Money</h3>
                <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                  Many festivals offer weekday discounts, afternoon admission deals, or free entry for kids. Check festival websites for promo codes and sponsor deals.
                </p>
              </div>
              <div>
                <h3 style={{ color: c.cream, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>What to Bring</h3>
                <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                  Sunscreen, comfortable shoes, cash (some vendors don't take cards), a light jacket for lakefront breezes, and an empty stomach for all the food!
                </p>
              </div>
              <div>
                <h3 style={{ color: c.cream, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>Stay Connected</h3>
                <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                  Download festival apps for schedules and maps. Henry Maier Festival Park has free WiFi. Follow @VisitMilwaukee for live updates.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "16px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* More Guides */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
              <Link href="/events" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Events Calendar</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do</Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Breweries</Link>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.yellow, color: c.green1, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Restaurants</Link>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section style={{ backgroundColor: c.orange, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Never Miss a Festival</h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px", marginBottom: "20px" }}>Get festival announcements, lineup reveals, and ticket deals every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: "white", color: c.orange, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to the City of Festivals.</p>
        </footer>
      </div>
    </>
  );
}
