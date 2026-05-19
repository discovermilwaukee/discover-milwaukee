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

const comedyVenues = {
  bestOverall: [
    {
      name: "The Laughing Tap",
      neighborhood: "Downtown / East Town",
      type: "Dedicated Comedy Club",
      priceRange: "$$",
      address: "761 N Jefferson St, Milwaukee, WI 53202",
      description: "Milwaukee's premier dedicated comedy club reopened in March 2026 at a stunning new downtown location in the historic George Watts building. The Laughing Tap presents professional live stand-up comedy every week, featuring both touring headliners and the best regional talent. The intimate venue creates the perfect atmosphere for comedy, with a full bar serving Wisconsin craft beer and spirits.",
      highlights: ["Weekly professional shows", "Full bar with Wisconsin craft beer", "Intimate venue setting", "National touring acts"],
      insiderTip: "Arrive early to snag seats near the front. The Wednesday open mic is free and a great way to see rising local talent.",
      bestFor: "Comedy purists, date nights, catching national headliners",
      showSchedule: "Thursday-Saturday headliner shows at 7:30pm & 9:30pm, Wednesday open mic at 8pm",
    },
    {
      name: "Milwaukee Improv",
      neighborhood: "Brookfield",
      type: "National Chain Comedy Club",
      priceRange: "$$$",
      address: "20110 Lower Union St, Brookfield, WI 53045",
      description: "Wisconsin's premiere comedy club opened in 2021 at The Corners of Brookfield and has quickly become the go-to venue for nationally touring comedians. The state-of-the-art facility features two showrooms including the Main Showroom and The Lab, with a combined capacity of 402. Full dinner menu and craft cocktails make this a complete night out experience.",
      highlights: ["National touring headliners", "Full dinner menu", "Two showrooms", "VIP seating available"],
      insiderTip: "Book VIP seats for the best sightlines and premium service. The brownie-salted caramel Mason Jar dessert is legendary.",
      bestFor: "National headliners, corporate events, special occasions",
      showSchedule: "Thursday 7:30pm, Friday 7pm & 9:30pm, Saturday 6pm & 9pm, Sunday 7pm",
    },
    {
      name: "ComedySportz Milwaukee",
      neighborhood: "Walker's Point",
      type: "Improv Comedy Theater",
      priceRange: "$$",
      address: "420 S 1st St, Milwaukee, WI 53204",
      description: "The original home for improv comedy in Milwaukee, ComedySportz has been making audiences laugh for decades with their signature competitive improv format. Two teams of players compete head-to-head in improv games while a referee keeps score. It's all-ages entertainment that's fast-paced, family-friendly, and completely made up on the spot based on audience suggestions.",
      highlights: ["All-ages shows", "Interactive audience participation", "Full bar and restaurant", "Friday fish fry"],
      insiderTip: "Sit in the front rows if you want to be part of the action. The cheese curds and Friday fish fry are excellent.",
      bestFor: "Families, groups, interactive entertainment, first dates",
      showSchedule: "Friday & Saturday matches at 7:30pm & 10pm, check website for weeknight shows",
    },
    {
      name: "Keg Stand Up at Lakefront Brewery",
      neighborhood: "Riverwest",
      type: "Brewery Comedy Show",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "Milwaukee's #1 comedy show transforms Lakefront Brewery's Beer Hall into an intimate comedy venue once a month on Sunday evenings. Produced by Milwaukee Comedy, this long-running monthly show pairs fresh laughs with fresh craft beer in one of the city's most beloved breweries. The unique setting and quality lineup have made this a must-attend event for comedy fans.",
      highlights: ["Monthly Sunday shows", "Full craft beer lineup", "Historic brewery setting", "Top regional talent"],
      insiderTip: "Tickets sell out fast so buy in advance. The brewery's full cocktail menu is available during the show.",
      bestFor: "Beer lovers, unique comedy experiences, Sunday night plans",
      showSchedule: "Once monthly on Sunday at 7pm, $15 advance / $20 door",
    },
  ],
  dedicatedClubs: [
    {
      name: "Turner Hall Ballroom",
      neighborhood: "Downtown",
      type: "Historic Theater Venue",
      priceRange: "$$-$$$",
      address: "1040 N Vel R. Phillips Ave, Milwaukee, WI 53203",
      description: "This National Historic Landmark hosts an eclectic mix of entertainment including some of the best touring stand-up comedians. The intimate ballroom setting creates perfect sightlines from every seat, and the venue's rich history adds to the experience. Recent 2026 bookings include Maria Bamford, Mae Martin, Akaash Singh, and Ron Funches.",
      highlights: ["National touring comedians", "Historic landmark venue", "Excellent acoustics", "Part of Pabst Theater Group"],
      insiderTip: "Check the Pabst Theater Group calendar regularly as comedy shows often sell out quickly. General admission means arrive early for best spots.",
      bestFor: "Touring headliners, intimate theater experience, comedy fans",
      showSchedule: "Varies by show, typically 7pm or 8pm start times",
    },
    {
      name: "Riverside Theater",
      neighborhood: "Downtown",
      type: "Large Theater Venue",
      priceRange: "$$$",
      address: "116 W Wisconsin Ave, Milwaukee, WI 53203",
      description: "One of Milwaukee's most opulent theaters, the Riverside hosts major touring comedians in a stunning 2,500-seat venue. The ornate architecture and excellent acoustics create a memorable experience for bigger comedy acts. 2026 shows include Kevin James in May and Ben Schwartz & Friends in October.",
      highlights: ["Major touring acts", "Ornate historic theater", "2,500 seat capacity", "Premium sound system"],
      insiderTip: "Orchestra seats offer the best experience for comedy shows. The venue is connected to downtown hotels for easy access.",
      bestFor: "Major headliners, special comedy events, theater experience",
      showSchedule: "Varies by show, check Pabst Theater Group calendar",
    },
    {
      name: "Pabst Theater",
      neighborhood: "Downtown",
      type: "Historic Theater Venue",
      priceRange: "$$$",
      address: "144 E Wells St, Milwaukee, WI 53202",
      description: "Milwaukee's crown jewel of theaters hosts select comedy performances throughout the year. The intimate 1,400-seat venue has hosted legends across all entertainment genres. Daniel Sloss brings his BITTER show here in November 2026. The acoustics and sightlines are impeccable.",
      highlights: ["Prestigious venue", "Perfect acoustics", "Historic architecture", "Select comedy bookings"],
      insiderTip: "Subscribe to the Pabst Theater Group newsletter to get early access to comedy show tickets before they sell out.",
      bestFor: "Special comedy events, intimate theater setting, discerning fans",
      showSchedule: "Select comedy shows throughout the year",
    },
    {
      name: "Fiserv Forum",
      neighborhood: "Deer District",
      type: "Arena Venue",
      priceRange: "$$$-$$$$",
      address: "1111 Vel R. Phillips Ave, Milwaukee, WI 53203",
      description: "Milwaukee's premier arena hosts the biggest comedy tours that have outgrown traditional comedy clubs. The state-of-the-art facility offers excellent sightlines and sound throughout. 2026 highlights include the We Them Ones Comedy Tour in April featuring Mike Epps, and Matt Rife's Stay Golden World Tour in November.",
      highlights: ["Arena-scale comedy tours", "State-of-the-art facility", "Major headliners", "Full concessions"],
      insiderTip: "Floor seats offer the best experience for comedy shows. The Deer District has plenty of pre-show dining and drinks options.",
      bestFor: "Major comedy tours, arena experiences, big-name comedians",
      showSchedule: "Select major comedy tours throughout the year",
    },
  ],
  barComedy: [
    {
      name: "Cask Comedy at Great Lakes Distillery",
      neighborhood: "Walker's Point",
      type: "Distillery Comedy Night",
      priceRange: "$$",
      address: "616 W Virginia St, Milwaukee, WI 53204",
      description: "One of Milwaukee's longest-running monthly comedy shows pairs stand-up with hand-crafted spirits at Wisconsin's first craft distillery since Prohibition. Sip on local spirits surrounded by the barrels they aged in while enjoying the best regional and national comedy talent. Food from Fox Den is available throughout the show.",
      highlights: ["Monthly comedy series", "Craft spirits tasting", "Unique barrel room setting", "Food available"],
      insiderTip: "Try a flight of spirits before the show starts. The intimate setting means every seat is great, but arrive early to grab a spot near the stage.",
      bestFor: "Whiskey lovers, unique venue experience, monthly comedy fix",
      showSchedule: "Monthly shows, doors at 7pm, show at 8pm, $15 tickets",
    },
    {
      name: "Dandy",
      neighborhood: "Washington Heights",
      type: "Bar Comedy Night",
      priceRange: "$$",
      address: "5020 W Vliet St, Milwaukee, WI 53208",
      description: "This Washington Heights cocktail bar hosts A Dandy Comedy Show, one of Milwaukee Comedy's regular monthly professional shows. The intimate bar setting creates an up-close comedy experience with excellent craft cocktails. It's a neighborhood gem that brings quality stand-up to the west side.",
      highlights: ["Monthly professional shows", "Craft cocktails", "Intimate neighborhood setting", "Quality regional acts"],
      insiderTip: "The cocktail menu is excellent, so come early to enjoy a drink before the show. Street parking is easy to find.",
      bestFor: "West side residents, craft cocktail fans, intimate comedy",
      showSchedule: "Monthly shows, check Milwaukee Comedy for dates",
    },
    {
      name: "Shank Hall",
      neighborhood: "East Side",
      type: "Music Venue with Comedy",
      priceRange: "$$",
      address: "1434 N Farwell Ave, Milwaukee, WI 53202",
      description: "This legendary East Side music venue occasionally hosts stand-up comedy shows in their intimate 300-person capacity room. The club atmosphere is perfect for comedy, with great sightlines and a full bar. 2026 shows include Zoltan Kaszas in June.",
      highlights: ["Intimate club setting", "300 person capacity", "Full bar", "Established venue"],
      insiderTip: "Check their calendar for comedy bookings as they mix in stand-up shows between music acts. The front tables fill up fast.",
      bestFor: "East Side comedy fans, intimate venue experience, club atmosphere",
      showSchedule: "Select comedy shows throughout the year, typically 8pm",
    },
    {
      name: "The Interchange Co-Op",
      neighborhood: "Near West Side",
      type: "Community Space Comedy",
      priceRange: "$",
      address: "628 N 10th St, Milwaukee, WI 53233",
      description: "Home to The Roundabout comedy open mic, this community-focused venue brings affordable comedy to Milwaukee's Near West Side. The welcoming atmosphere makes it perfect for both new comedians cutting their teeth and audiences looking for raw, authentic stand-up at a great price.",
      highlights: ["Weekly open mic", "Community focused", "Affordable admission", "Welcoming atmosphere"],
      insiderTip: "Sign up at 7:30pm if you want to perform. Great place to see tomorrow's Milwaukee comedy stars today.",
      bestFor: "Budget-friendly comedy, supporting local talent, casual nights out",
      showSchedule: "Open mic signup 7:30pm, show at 8pm, hosted by Alecia Altstaetter & Erik Koconis",
    },
    {
      name: "Rounding Third Bar",
      neighborhood: "Bluemound Corridor",
      type: "Sports Bar Comedy Night",
      priceRange: "$",
      address: "6317 W Bluemound Rd, Milwaukee, WI 53213",
      description: "This west side sports bar hosts regular comedy open mics that have become a staple of Milwaukee's comedy scene. The casual bar atmosphere is perfect for enjoying some laughs with a cold beer. It's a great spot to catch emerging comedians in a no-pressure environment.",
      highlights: ["Regular open mic nights", "Sports bar atmosphere", "Affordable drinks", "Casual vibe"],
      insiderTip: "The open mic nights draw a mix of new and experienced comedians. Arrive early for the best seats near the stage.",
      bestFor: "West side comedy fans, casual nights, discovering new talent",
      showSchedule: "Check social media for open mic schedule",
    },
  ],
  openMicNights: [
    {
      name: "Bremen Cafe - Monday Mass",
      neighborhood: "Riverwest",
      type: "Legendary Open Mic",
      priceRange: "$",
      address: "901 E Clarke St, Milwaukee, WI 53212",
      description: "Monday Mass at Bremen Cafe is Milwaukee's oldest continuously running comedy open mic. Every Monday from 8-10pm, more than 40 comics take the stage in a two-hour marathon of stand-up. Hosted by Raegan Niemela and Luise Noe, this is where Milwaukee's comedy community gathers to work on new material and support each other.",
      highlights: ["Milwaukee's oldest comedy open mic", "40+ comics per night", "Free admission", "Legendary status"],
      insiderTip: "Come as an audience member to witness the full spectrum of Milwaukee comedy, from nervous first-timers to polished professionals testing new bits.",
      bestFor: "Aspiring comedians, comedy enthusiasts, Monday night plans",
      showSchedule: "Every Monday 8-10pm, free admission",
    },
    {
      name: "The Laughing Tap - Laughs On Tap",
      neighborhood: "Downtown / East Town",
      type: "Club Open Mic",
      priceRange: "$",
      address: "761 N Jefferson St, Milwaukee, WI 53202",
      description: "The Laughing Tap's weekly Wednesday open mic gives aspiring comedians 3-4 minutes of stage time in a real comedy club setting. It's free to attend and free to perform, with $1 off drinks all night. This is the stepping stone for many comedians who later headline the club's weekend shows.",
      highlights: ["Real comedy club stage", "Free to perform", "3-4 minute sets", "$1 off drinks"],
      insiderTip: "Sign up early as spots fill fast. Watching from the audience is a great way to scout tomorrow's headliners.",
      bestFor: "Aspiring comedians, Wednesday night entertainment, supporting new talent",
      showSchedule: "Every Wednesday at 8pm, free admission, $1 off drinks",
    },
    {
      name: "The Irresponsible Open Mic at Bremen Cafe",
      neighborhood: "Riverwest",
      type: "Music & Comedy Open Mic",
      priceRange: "$",
      address: "901 E Clarke St, Milwaukee, WI 53212",
      description: "Beyond Monday Mass, Bremen Cafe hosts additional open mic nights that feature a mix of comedy and music. The laid-back Riverwest atmosphere is perfect for experimental performances and cross-genre acts. It's a great complement to the more structured Monday comedy night.",
      highlights: ["Mixed format open mic", "Comedy and music", "Riverwest atmosphere", "Experimental performances"],
      insiderTip: "The mixed format means you never know what you're going to get. Perfect for adventurous entertainment seekers.",
      bestFor: "Variety entertainment, Riverwest locals, eclectic tastes",
      showSchedule: "Check Bremen Cafe calendar for dates",
    },
  ],
};

const faqs = [
  {
    question: "What is the best comedy club in Milwaukee?",
    answer: "The Laughing Tap is Milwaukee's premier dedicated comedy club, featuring weekly professional stand-up shows in their new downtown location at 761 N Jefferson St. For national touring acts, Milwaukee Improv in Brookfield is Wisconsin's top comedy club destination. ComedySportz Milwaukee offers a unique improv experience that's been entertaining audiences for decades.",
  },
  {
    question: "Where can I see stand-up comedy in Milwaukee this weekend?",
    answer: "For weekend stand-up, The Laughing Tap has Thursday-Saturday shows, Milwaukee Improv runs Thursday through Sunday, and ComedySportz has Friday and Saturday matches. Check the Pabst Theater Group calendar for touring comedians at Turner Hall Ballroom, Riverside Theater, or Pabst Theater.",
  },
  {
    question: "Are there free comedy shows in Milwaukee?",
    answer: "Yes! The Laughing Tap hosts a free open mic every Wednesday with $1 off drinks. Bremen Cafe's Monday Mass is a free legendary open mic running from 8-10pm. The Roundabout at The Interchange Co-Op also offers affordable comedy open mics.",
  },
  {
    question: "What are the best open mic comedy nights in Milwaukee?",
    answer: "Monday Mass at Bremen Cafe is Milwaukee's oldest and most respected comedy open mic, featuring 40+ comedians every Monday from 8-10pm. The Laughing Tap's Wednesday open mic offers real club stage experience. The Roundabout at The Interchange Co-Op is another solid option for aspiring comedians.",
  },
  {
    question: "Can I see comedy and drink craft beer in Milwaukee?",
    answer: "Absolutely! Keg Stand Up at Lakefront Brewery combines monthly comedy with craft beer in the historic Beer Hall. Cask Comedy at Great Lakes Distillery pairs stand-up with craft spirits. The Laughing Tap features an excellent Wisconsin craft beer selection at all their shows.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "12 Best Comedy Clubs in Milwaukee: Stand-Up, Improv & Open Mics [2026]",
    "description": "Discover Milwaukee's best comedy clubs and shows, from The Laughing Tap and Milwaukee Improv to legendary open mics and brewery comedy nights.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-comedy-clubs"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Comedy Clubs", "item": "https://www.discover-milwaukee.com/milwaukee-comedy-clubs" }
    ]
  }
};

export default function MilwaukeeComedyClubs() {
  const VenueCard = ({ venue }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{venue.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {venue.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{venue.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{venue.neighborhood}</span>
          {venue.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{venue.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{venue.description}</p>
      {(venue.bestFor || venue.showSchedule) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {venue.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{venue.bestFor}</p>
            </div>
          )}
          {venue.showSchedule && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>SHOW SCHEDULE</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{venue.showSchedule}</p>
            </div>
          )}
        </div>
      )}
      {venue.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {venue.insiderTip}</p>
        </div>
      )}
      {venue.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{venue.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>12 Best Comedy Clubs in Milwaukee: Stand-Up, Improv & Open Mics [2026]</title>
        <meta name="description" content="Discover Milwaukee's best comedy clubs including The Laughing Tap, Milwaukee Improv, and ComedySportz. Find stand up comedy shows, open mic nights, and brewery comedy events." />
        <meta name="keywords" content="milwaukee comedy clubs, comedy shows milwaukee, stand up comedy milwaukee, open mic comedy milwaukee, milwaukee improv, laughing tap milwaukee, comedysportz milwaukee, comedy bars milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-comedy-clubs" />

        <meta property="og:title" content="12 Best Comedy Clubs in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From The Laughing Tap to legendary open mics at Bremen Cafe, find Milwaukee's best comedy clubs, stand-up shows, and improv nights." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-comedy-clubs" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-comedy-clubs.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-comedy-clubs.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>ENTERTAINMENT</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              12 Best Comedy Clubs in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's comedy scene is thriving in 2026, from dedicated clubs to legendary open mics. Here's where to catch the best laughs in the city.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#dedicated-clubs" style={{ color: c.green2, fontSize: "14px" }}>Dedicated Clubs & Theaters</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#bar-comedy" style={{ color: c.green2, fontSize: "14px" }}>Bar Comedy</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#open-mics" style={{ color: c.green2, fontSize: "14px" }}>Open Mics</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Comedy Venues</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's top comedy destinations for stand-up, improv, and unique comedy experiences.
            </p>
            {comedyVenues.bestOverall.map((venue, i) => <VenueCard key={i} venue={venue} />)}
          </section>

          <section id="dedicated-clubs" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Dedicated Comedy Clubs & Theaters</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Professional venues for touring comedians and headliners, from intimate theaters to arena shows.
            </p>
            {comedyVenues.dedicatedClubs.map((venue, i) => <VenueCard key={i} venue={venue} />)}
          </section>

          <section id="bar-comedy" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Bars & Venues with Comedy Nights</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Breweries, bars, and unique spaces hosting regular comedy. Pair your laughs with great drinks.
            </p>
            {comedyVenues.barComedy.map((venue, i) => <VenueCard key={i} venue={venue} />)}
          </section>

          <section id="open-mics" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Open Mic Nights</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Where Milwaukee's comedy community gathers and new talent emerges. Catch tomorrow's stars today.
            </p>
            {comedyVenues.openMicNights.map((venue, i) => <VenueCard key={i} venue={venue} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-nightlife" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Nightlife Guide →
              </Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Date Ideas →
              </Link>
              <Link href="/milwaukee-live-music" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Comedy Show Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New shows, touring headliners, and Milwaukee comedy news.</p>
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
