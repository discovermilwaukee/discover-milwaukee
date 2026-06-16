import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

import NewsletterCTA from "../components/NewsletterCTA";
const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const karaokeSpots = {
  bestOverall: [
    {
      name: "Landmark Lanes - Moon Room",
      neighborhood: "East Side",
      type: "Classic Karaoke Bar",
      priceRange: "$",
      address: "2220 N Farwell Ave, Milwaukee, WI 53202",
      description: "For 97 years, Landmark Lanes has been Milwaukee's entertainment destination, and their Moon Room karaoke is legendary. Hosted by the iconic 'Rockin' Roy,' this is consistently rated the best karaoke bar in Milwaukee on Google, Yelp, TripAdvisor, and by Shepherd Express readers. The combination of vintage bowling alley vibes, affordable drinks, and an enthusiastic crowd makes every performance feel like a headline act.",
      highlights: ["Legendary host Rockin' Roy", "Free karaoke nights", "Vintage East Side atmosphere", "Full bar with drink specials"],
      insiderTip: "Arrive by 8:30 PM on Tuesdays or Thursdays to get your name on the list early. The crowd gets rowdy after 10 PM in the best way.",
      bestFor: "First-timers, groups, classic karaoke experience",
      karaokeNights: "Tuesdays & Thursdays, 9 PM - 2 AM",
    },
    {
      name: "AMPED Private Suite Karaoke",
      neighborhood: "Juneau Town",
      type: "Private Room Karaoke",
      priceRange: "$$$",
      address: "910 W Juneau Ave, Milwaukee, WI 53233",
      description: "Milwaukee's first and best private suite karaoke bar offers a premium singing experience across 9,000 square feet of dedicated karaoke space. With eight standard suites and two premier suites, state-of-the-art AV equipment, and a user-friendly karaoke system, AMPED brings the authentic KTV experience to Wisconsin. The colorful decor and full bar service make this perfect for celebrations.",
      highlights: ["10 private karaoke suites", "State-of-the-art sound systems", "Full bar and three lounges", "Professional meeting space by day"],
      insiderTip: "Book your 2-hour session at least a week in advance for weekend nights. You can cancel without penalty up to 24 hours before your reservation.",
      bestFor: "Private parties, date nights, corporate events, birthdays",
      karaokeNights: "Thu 5:30 PM - 9:30 PM, Fri 3:30 PM - 12 AM, Sat 3:30 PM - 1:30 AM",
    },
    {
      name: "Bremen Cafe",
      neighborhood: "Riverwest",
      type: "Neighborhood Karaoke",
      priceRange: "$",
      address: "901 E Clarke St, Milwaukee, WI 53212",
      description: "Bremen Cafe is the heart of Riverwest's creative community, and their Tuesday karaoke nights embody the neighborhood's eclectic spirit. This laid-back venue welcomes singers of all skill levels with open arms and cheap drinks. The intimate setting creates a supportive atmosphere where regulars cheer on newcomers and everyone gets their moment in the spotlight.",
      highlights: ["Supportive Riverwest community", "Affordable drinks", "Live music venue", "Open mic culture"],
      insiderTip: "Stay for the whole night - the song selection gets more adventurous as the evening progresses. Local musicians often join in.",
      bestFor: "Creative types, Riverwest locals, budget-friendly nights out",
      karaokeNights: "Tuesdays, 10 PM - 1:30 AM",
    },
  ],
  privateRooms: [
    {
      name: "AMPED Private Suite Karaoke",
      neighborhood: "Juneau Town",
      type: "Premium Private Suites",
      priceRange: "$$$",
      address: "910 W Juneau Ave, Milwaukee, WI 53233",
      description: "The gold standard for private karaoke in Milwaukee. AMPED features ten dedicated karaoke suites ranging from intimate spaces for small groups to premier rooms that can accommodate larger parties. Each suite is outfitted with professional-grade audio equipment, colorful furniture, and an intuitive song selection system with thousands of tracks spanning every genre and decade.",
      highlights: ["8 standard suites + 2 premier suites", "Professional AV equipment", "Extensive song library", "Food and drink service to rooms"],
      insiderTip: "The premier suites are worth the upgrade for larger groups. Request the song list in advance to plan your setlist.",
      bestFor: "Bachelorette parties, corporate team building, milestone birthdays",
      karaokeNights: "Thu 5:30 PM - 9:30 PM, Fri 3:30 PM - 12 AM, Sat 3:30 PM - 1:30 AM",
    },
    {
      name: "Round1 Bowling & Arcade",
      neighborhood: "Greendale",
      type: "Family Entertainment Center",
      priceRange: "$$",
      address: "5200 S 76th St, Greendale, WI 53129",
      description: "Part of Japan's largest entertainment chain, Round1 brings authentic Japanese-style private karaoke rooms to the Milwaukee area. Located in Southridge Mall, this family-friendly venue offers private karaoke alongside bowling, arcade games, and more. The rooms feature Japanese karaoke technology with an extensive song library including both English and Japanese tracks.",
      highlights: ["Japanese-style karaoke rooms", "All-ages friendly", "Combined with bowling and arcade", "Extensive J-Pop library"],
      insiderTip: "Book karaoke as part of a full Round1 experience. The combination of bowling, arcade games, and karaoke makes for an epic night out.",
      bestFor: "Families, anime fans, J-Pop enthusiasts, group outings",
      karaokeNights: "Daily, 10 AM - 2 AM",
    },
    {
      name: "Hi Hat Garage",
      neighborhood: "Brady Street",
      type: "Cocktail Lounge with Private Karaoke",
      priceRange: "$$",
      address: "1701 N Arlington Pl, Milwaukee, WI 53202",
      description: "Hi Hat Lounge's connected Garage space offers a more intimate karaoke experience with Milwaukee's Moonlight-Karaoke hosting weekly sessions. The venue combines Hi Hat's exceptional cocktail program with a welcoming karaoke atmosphere. The tucked-away Brady Street location provides a sophisticated backdrop for singing your heart out.",
      highlights: ["Expert craft cocktails", "Intimate atmosphere", "Skilled bartenders", "Brady Street location"],
      insiderTip: "Start at Hi Hat Lounge for cocktails, then move to the Garage for karaoke. The bartenders here are among the city's best.",
      bestFor: "Cocktail enthusiasts, Brady Street crowds, date nights",
      karaokeNights: "Wednesdays, 9 PM - Close",
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      type: "Sports Bar Karaoke",
      priceRange: "$$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      description: "Established in 1985, Steny's is a beloved Walker's Point institution known for their legendary wings and Bloody Marys. Their karaoke nights bring the same energy that makes this sports bar a Milwaukee favorite. With a lively atmosphere and a crowd that's there to have fun, Steny's delivers a classic American bar karaoke experience.",
      highlights: ["Famous wings to fuel your performance", "Legendary Bloody Marys", "Game day shuttle service", "Walker's Point institution"],
      insiderTip: "Order wings before you sing - you'll need the energy. The crowd is especially lively on Wednesdays.",
      bestFor: "Sports fans, wing lovers, Walker's Point regulars",
      karaokeNights: "Wednesdays, 9 PM - Close",
    },
  ],
  barKaraoke: [
    {
      name: "Art Bar",
      neighborhood: "Riverwest",
      type: "Art Gallery Bar",
      priceRange: "$",
      address: "722 E Burleigh St, Milwaukee, WI 53212",
      description: "Art Bar is a coffee shop, bar, and art gallery rolled into one uniquely Riverwest experience. Their Wednesday karaoke nights attract a creative crowd in a space surrounded by rotating local art exhibits. The eclectic atmosphere encourages bold song choices, and the supportive regulars make even nervous first-timers feel like stars.",
      highlights: ["Rotating local art exhibits", "Coffee shop by day", "Singer/songwriter performances", "Creative Riverwest crowd"],
      insiderTip: "Check out the current art exhibit before karaoke starts. The gallery rotates every 6-8 weeks with new local artists.",
      bestFor: "Artists, creatives, Riverwest explorers, unique venues",
      karaokeNights: "Wednesdays, 9 PM - Close",
    },
    {
      name: "Wicked Hop",
      neighborhood: "Third Ward",
      type: "Historic Pub",
      priceRange: "$$",
      address: "345 N Broadway, Milwaukee, WI 53202",
      description: "For over 20 years, the Wicked Hop has been a Third Ward staple serving up local and imported beers alongside quality pub grub. Their Sunday night karaoke is the perfect way to close out the weekend in one of Milwaukee's most vibrant neighborhoods. The spacious venue and energetic crowd create an ideal karaoke environment.",
      highlights: ["20+ years in Third Ward", "Extensive beer selection", "Classic pub atmosphere", "DJs and trivia nights"],
      insiderTip: "Sunday karaoke is less crowded than weeknight spots, meaning more stage time for you. Great for karaoke newbies.",
      bestFor: "Third Ward visitors, Sunday funday crowds, beer lovers",
      karaokeNights: "Sundays, 9 PM - Close",
    },
    {
      name: "Nomad World Pub",
      neighborhood: "Brady Street",
      type: "Global Pub",
      priceRange: "$$",
      address: "1401 E Brady St, Milwaukee, WI 53202",
      description: "Known as Milwaukee's home for televised soccer and a haven for travelers, Nomad World Pub brings international energy to their karaoke nights. Located on historic Brady Street, this lively venue features great drink specials during karaoke including $3 shots and $5 draft cocktails. The diverse crowd ensures an eclectic mix of song choices.",
      highlights: ["International soccer headquarters", "Brady Street location", "Drink specials during karaoke", "Diverse, welcoming crowd"],
      insiderTip: "Check if there's a big soccer match before karaoke - the energy from fans sticking around makes for an incredible sing-along atmosphere.",
      bestFor: "Soccer fans, Brady Street crowds, international vibes",
      karaokeNights: "Thursdays, 9 PM - Close",
    },
    {
      name: "Coach's Pub N Grill",
      neighborhood: "South Side",
      type: "Sports Bar",
      priceRange: "$",
      address: "5356 S 13th St, Milwaukee, WI 53221",
      description: "Coach's has long been a South Side favorite for its laid-back atmosphere, recreational sports leagues, and the legendary Big Boy burger. Their Monday night karaoke kicks off the week with a fun, no-pressure environment. The loyal neighborhood crowd makes everyone feel welcome, whether you're a seasoned performer or grabbing the mic for the first time.",
      highlights: ["Famous Big Boy burger", "Monday night tradition", "Sports leagues community", "Neighborhood favorite"],
      insiderTip: "Monday karaoke comes with food specials. Fuel up with the Big Boy burger before taking the stage.",
      bestFor: "South Side locals, Monday night singers, sports bar crowds",
      karaokeNights: "Mondays, 8 PM - Close",
    },
    {
      name: "Amelia's Bar & Restaurant",
      neighborhood: "Near Bay View",
      type: "Aviation-Themed Bar",
      priceRange: "$",
      address: "724 E Layton Ave, Milwaukee, WI 53207",
      description: "Themed after Amelia Earhart and located near Mitchell International Airport, Amelia's offers late-night karaoke alongside their popular pizza menu. Happy Hour drinks are served until closing, making this an affordable destination for singing and snacking. The unique aviation theme and friendly staff create a memorable karaoke experience.",
      highlights: ["Amelia Earhart theme", "Great pizza menu", "Happy Hour until close", "Airport-adjacent location"],
      insiderTip: "Order a pizza to share while waiting for your turn. Their late-night kitchen keeps the party going.",
      bestFor: "Late-night crowds, pizza lovers, unique themed bars",
      karaokeNights: "Friday & Saturday, 9 PM - Close",
    },
  ],
  asianKTV: [
    {
      name: "Red Maple MKE",
      neighborhood: "Walker's Point",
      type: "Japanese Dive Bar",
      priceRange: "$$",
      address: "100 W Maple St, Milwaukee, WI 53204",
      description: "Red Maple brings Japanese izakaya culture to Milwaukee's Walker's Point neighborhood. The interior features Japanese street art, red couches, waving lucky cats, and spectacular murals of dragons and peacocks. Wednesday karaoke nights pair perfectly with their specialty Japanese-themed cocktails including Cherry Blossom Old Fashioneds, sake bombs, and an impressive selection of Japanese whiskeys and beers.",
      highlights: ["Authentic Japanese dive bar aesthetic", "Specialty Japanese cocktails", "Japanese whiskey selection", "Live music Thursdays, DJs weekends"],
      insiderTip: "Try a sake bomb before singing - it's tradition. The Cherry Blossom Old Fashioned is perfect for sipping between songs.",
      bestFor: "Japanese culture enthusiasts, cocktail lovers, Walker's Point nightlife",
      karaokeNights: "Wednesdays, 9 PM - Close",
    },
    {
      name: "Round1 Bowling & Arcade",
      neighborhood: "Greendale",
      type: "Japanese Entertainment Center",
      priceRange: "$$",
      address: "5200 S 76th St, Greendale, WI 53129",
      description: "Round1 is part of Japan's largest entertainment company, bringing authentic Japanese arcade and karaoke culture to the Milwaukee area. Their private karaoke rooms feature Japanese technology with extensive libraries of J-Pop, K-Pop, anime openings, and Western hits. The all-ages environment makes this perfect for families or groups wanting an authentic Asian KTV experience without traveling to a major city.",
      highlights: ["Authentic Japanese karaoke technology", "Extensive J-Pop and K-Pop library", "Anime song selection", "All-ages entertainment"],
      insiderTip: "The Japanese song selection is impressive - browse the J-Pop section for authentic picks. Great for anime conventions afterparties.",
      bestFor: "Anime fans, J-Pop/K-Pop enthusiasts, families, Japanese culture lovers",
      karaokeNights: "Daily, 10 AM - 2 AM",
    },
  ],
};

const faqs = [
  {
    question: "What is the best karaoke bar in Milwaukee?",
    answer: "Landmark Lanes' Moon Room is consistently rated #1 for karaoke in Milwaukee, with legendary host Rockin' Roy running shows every Tuesday and Thursday from 9 PM to 2 AM. For private room karaoke, AMPED is Milwaukee's premier destination with ten dedicated suites and professional-grade equipment.",
  },
  {
    question: "Where can I find private karaoke rooms in Milwaukee?",
    answer: "AMPED Private Suite Karaoke at 910 W Juneau Ave is Milwaukee's first and best private karaoke venue, featuring eight standard suites and two premier suites. Round1 at Southridge Mall in Greendale also offers Japanese-style private karaoke rooms as part of their entertainment complex.",
  },
  {
    question: "What nights have karaoke in Milwaukee?",
    answer: "Milwaukee offers karaoke every night of the week: Mondays at Coach's Pub, Tuesdays at Landmark Lanes and Bremen Cafe, Wednesdays at Art Bar, Red Maple, and Hi Hat, Thursdays at Landmark Lanes and Nomad World Pub, Fridays and Saturdays at AMPED and Amelia's, and Sundays at Wicked Hop.",
  },
  {
    question: "Is there Asian KTV or Japanese-style karaoke in Milwaukee?",
    answer: "Yes! Red Maple MKE offers Japanese-themed karaoke nights on Wednesdays in an authentic izakaya setting. Round1 at Southridge Mall provides Japanese-style private karaoke rooms with extensive J-Pop, K-Pop, and anime song libraries using authentic Japanese karaoke technology.",
  },
  {
    question: "Where can I do karaoke for free in Milwaukee?",
    answer: "Most bar karaoke in Milwaukee is free to participate. Landmark Lanes offers free karaoke on Tuesdays and Thursdays. Other free options include Bremen Cafe, Art Bar, Nomad World Pub, and Wicked Hop. You'll just need to buy drinks at these venues.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "15 Best Karaoke Bars in Milwaukee: Private Rooms, Open Mic & Asian KTV [2026]",
    "description": "Discover Milwaukee's best karaoke spots from Landmark Lanes' legendary Moon Room to private suites at AMPED. Find open mic nights, Japanese KTV, and the perfect spot to sing your heart out.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-karaoke-bars"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Karaoke Bars", "item": "https://www.discover-milwaukee.com/milwaukee-karaoke-bars" }
    ]
  }
};

export default function MilwaukeeKaraokeBars() {
  const KaraokeCard = ({ spot }) => (
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
          {spot.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.neighborhood}</span>
          {spot.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{spot.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      {(spot.bestFor || spot.karaokeNights) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {spot.karaokeNights && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>KARAOKE SCHEDULE</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.karaokeNights}</p>
            </div>
          )}
          {spot.bestFor && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.bestFor}</p>
            </div>
          )}
        </div>
      )}
      {spot.highlights && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>HIGHLIGHTS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.highlights.join(" • ")}</p>
        </div>
      )}
      {spot.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Pro tip:</strong> {spot.insiderTip}</p>
        </div>
      )}
      {spot.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>15 Best Karaoke Bars in Milwaukee: Private Rooms & Open Mic [2026]</title>
        <meta name="description" content="Find Milwaukee's best karaoke bars including private rooms at AMPED, legendary Landmark Lanes, and Japanese KTV. Complete guide with schedules, locations, and insider tips." />
        <meta name="keywords" content="milwaukee karaoke bars, karaoke near me milwaukee, private karaoke rooms milwaukee, karaoke night milwaukee, best karaoke milwaukee, asian ktv milwaukee, japanese karaoke milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-karaoke-bars" />

        <meta property="og:title" content="15 Best Karaoke Bars in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From legendary Landmark Lanes to private suites at AMPED, find Milwaukee's best karaoke spots with schedules, locations, and insider tips." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-karaoke-bars" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-karaoke-bars.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-karaoke-bars.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>NIGHTLIFE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              15 Best Karaoke Bars in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From legendary dive bar karaoke to sleek private suites, Milwaukee has a spot for every singer. Grab the mic and find your stage.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#private-rooms" style={{ color: c.green2, fontSize: "14px" }}>Private Rooms</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#bar-karaoke" style={{ color: c.green2, fontSize: "14px" }}>Bar Karaoke</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#asian-ktv" style={{ color: c.green2, fontSize: "14px" }}>Asian KTV</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Karaoke</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The karaoke spots that define Milwaukee's singing scene. These venues deliver the full experience.
            </p>
            {karaokeSpots.bestOverall.map((spot, i) => <KaraokeCard key={i} spot={spot} />)}
          </section>

          <section id="private-rooms" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Private Karaoke Rooms</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Sing without stage fright in your own private suite. Perfect for parties, dates, and group celebrations.
            </p>
            {karaokeSpots.privateRooms.map((spot, i) => <KaraokeCard key={i} spot={spot} />)}
          </section>

          <section id="bar-karaoke" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bar Karaoke & Open Mic</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Classic bar karaoke with crowds ready to cheer you on. Grab a drink, sign up, and take the stage.
            </p>
            {karaokeSpots.barKaraoke.map((spot, i) => <KaraokeCard key={i} spot={spot} />)}
          </section>

          <section id="asian-ktv" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Asian KTV & Japanese Karaoke</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Authentic Asian karaoke culture in Milwaukee. J-Pop, K-Pop, anime songs, and izakaya vibes.
            </p>
            {karaokeSpots.asianKTV.map((spot, i) => <KaraokeCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Bars →
              </Link>
              <Link href="/milwaukee-nightlife" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Nightlife Guide →
              </Link>
              <Link href="/live-music-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Live Music →
              </Link>
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Milwaukee Nightlife Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Karaoke nights, bar events, and Milwaukee nightlife news.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free →
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>Explore by Neighborhood</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/third-ward-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Third Ward</Link>
                <Link href="/bay-view-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Bay View</Link>
                <Link href="/walkers-point-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>Walker's Point</Link>
                <Link href="/east-side-milwaukee" style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>East Side</Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ color: c.beige, fontSize: "14px", marginBottom: "12px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
                <Link href="/things-to-do-milwaukee" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Things to Do</Link>
                <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
                <Link href="/about" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>About</Link>
                <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
