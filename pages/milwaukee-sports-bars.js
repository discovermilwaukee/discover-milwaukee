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

const sportsBars = {
  bestOverall: [
    {
      name: "Tom's Watch Bar",
      neighborhood: "Deer District",
      style: "Ultimate Sports Viewing Destination",
      priceRange: "$$",
      address: "1134 N Vel R Phillips Ave, Milwaukee, WI 53203",
      description: "Tom's Watch Bar is the crown jewel of Milwaukee sports viewing, located steps from Fiserv Forum in the heart of the Deer District. With over 100 high-definition screens including a massive central stadium screen delivering a 360-degree viewing experience, this is where serious sports fans gather. Every seat has a perfect sightline, and the audio system ensures you hear every play.",
      mustTry: "Game Day Nachos, Signature Burgers, Craft Beer Selection",
      insiderTip: "Arrive at least 90 minutes before Bucks games for the best seats. The outdoor patio offers views of the Fiserv Forum plaza action.",
      bestFor: "Bucks watch parties, major sporting events, playoff atmospheres",
      tvCount: "100+ screens with 360-degree stadium screen",
    },
    {
      name: "Who's On Third",
      neighborhood: "Downtown",
      style: "Award-Winning Sports Bar",
      priceRange: "$$",
      address: "1007 N Old World 3rd St, Milwaukee, WI 53203",
      description: "Who's On Third has earned its reputation as one of Milwaukee's premier sports destinations, winning 1st Place Judge's Choice at WingFest. Located on historic Old World Third Street near Fiserv Forum, this energetic bar strikes the perfect balance between lively game-day atmosphere and comfortable neighborhood pub. Their shuttle service to Brewers games makes it a complete sports experience.",
      mustTry: "Award-Winning Wings, Scorpion Whiskey Wings, Storm'n Gorman Sauce",
      insiderTip: "Take advantage of the free shuttle to Brewers games. The upstairs area offers a slightly quieter viewing experience during packed games.",
      bestFor: "Pre-game crowds, award-winning wings, downtown accessibility",
      tvCount: "50+ TVs throughout two floors",
    },
    {
      name: "Major Goolsby's",
      neighborhood: "Downtown",
      style: "Milwaukee Sports Institution",
      priceRange: "$$",
      address: "340 W Kilbourn Ave, Milwaukee, WI 53203",
      description: "Since the early 1970s, Major Goolsby's has been a downtown Milwaukee staple and remains family owned. This legendary sports bar features over 60 HDTVs including four colossal video walls, ensuring you won't miss a single play from any seat. The walls are adorned with autographed memorabilia and celebrity photos spanning decades of Milwaukee sports history.",
      mustTry: "Famous Burgers, Cheese Curds, Wisconsin Craft Beers",
      insiderTip: "Check out the memorabilia collection before the game starts. The back room offers a more intimate viewing experience for big matchups.",
      bestFor: "Sports history buffs, large groups, playoff watching",
      tvCount: "60+ HDTVs with 4 massive video walls",
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      style: "14 Buffalo Flavors & Game Day Energy",
      priceRange: "$$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      description: "Established in 1985, Steny's has grown from a small corner tap to a beloved Milwaukee institution. Their wings come in 14 unique buffalo sauce variations, from mild to face-melting. With 16+ HD TVs and a giant 10-foot big screen with full audio throughout, plus shuttle service to games, Steny's delivers the complete sports bar experience.",
      mustTry: "Lucky 13 Wings, Legendary Bloody Marys, Friday Fish Fry",
      insiderTip: "The shuttle service runs to most major sporting events. Their Bloody Mary bar on weekends is legendary.",
      bestFor: "Walker's Point crowds, wing lovers, game day shuttles",
      tvCount: "16+ HDTVs plus 10-foot projection screen",
    },
  ],
  deerDistrict: [
    {
      name: "The Spread",
      neighborhood: "Deer District",
      style: "Vintage-Inspired Sports Bar & Grill",
      priceRange: "$$",
      address: "N Martin Luther King Jr Dr & W Juneau Ave, Milwaukee, WI 53203",
      description: "The Spread opened in March 2026 as Milwaukee's newest sports bar destination, bringing vintage-inspired decor and wall-to-wall TVs to the Deer District. Located at the intersection of MLK Jr. Drive and Juneau Avenue, it's within easy walking distance of Fiserv Forum. Classic sports memorabilia adorns the walls while modern screens ensure perfect viewing of every game.",
      mustTry: "Signature Wings, Smash Burgers, Game Day Cocktails",
      insiderTip: "This is the newest addition to Deer District - perfect for those wanting a fresh spot without the established crowds.",
      bestFor: "Bucks games, NCAA tournament, vintage sports atmosphere",
      tvCount: "Wall-to-wall TVs throughout",
    },
    {
      name: "Drink Wisconsinbly Pub",
      neighborhood: "Deer District",
      style: "Wisconsin-Themed Corner Bar",
      priceRange: "$$",
      address: "320 W Highland Ave, Milwaukee, WI 53203",
      description: "Drink Wisconsinbly moved to its current location across from Fiserv Forum in 2019 and is now the corner bar of the Deer District. This Wisconsin-themed pub celebrates local culture with products from Wisconsin-based breweries, wineries, and distilleries. The perfect spot to embrace your Wisconsin pride while cheering on the Bucks, Brewers, or Packers.",
      mustTry: "Wisconsin Craft Beers, Old Fashioned, Local Cheese Curds",
      insiderTip: "Grab Wisconsin-themed merchandise at the attached gift shop. Their Wisconsin Old Fashioned is made the proper brandy way.",
      bestFor: "Wisconsin pride, local craft beverages, Deer District energy",
      tvCount: "Multiple screens with sports coverage",
    },
    {
      name: "Good City Brewing - Deer District",
      neighborhood: "Deer District",
      style: "Craft Brewery with Sports Viewing",
      priceRange: "$$",
      address: "333 W Juneau Ave, Milwaukee, WI 53203",
      description: "Good City Brewing's Deer District location sits directly across from Fiserv Forum, featuring 32 taps of craft beer and a spacious industrial-chic taproom. The wall of garage doors opens onto the outdoor concourse for perfect October playoff weather. With seating for 200 and a dog-friendly patio, it's ideal for catching games while enjoying small-batch, hand-crafted beers.",
      mustTry: "Motto Mosaic Pale Ale, Density IPA, Wood-Fired Pizza",
      insiderTip: "The garage doors open up on game days creating an indoor-outdoor experience. Dog-friendly patio is a bonus.",
      bestFor: "Craft beer lovers, pre-game gatherings, casual atmosphere",
      tvCount: "Multiple screens with full game audio",
    },
    {
      name: "Copper on King",
      neighborhood: "Old World Third Street",
      style: "Elevated Sports Bar Experience",
      priceRange: "$$",
      address: "1019 N Martin Luther King Jr Dr, Milwaukee, WI 53203",
      description: "Copper on King opened in one of Milwaukee's oldest and most historic buildings on Old World Third Street, replacing longtime bar Buck Bradley's while preserving the building's character. The newly renovated space features copper details throughout, from light fixtures to Moscow mule mugs. The elevated menu goes beyond typical bar fare with items like jambalaya and short ribs.",
      mustTry: "Moscow Mule, Smash Burgers, Short Ribs, Chicken Wings",
      insiderTip: "Request the booth seating for a more intimate game-watching experience. The copper Moscow mule mugs are Instagram-worthy.",
      bestFor: "Elevated pub food, craft cocktails, historic atmosphere",
      tvCount: "Multiple screens throughout the venue",
    },
    {
      name: "Milwaukee Brat House",
      neighborhood: "Old World Third Street",
      style: "German Pub Meets Sports Bar",
      priceRange: "$$",
      address: "1013 N Old World 3rd St, Milwaukee, WI 53203",
      description: "Milwaukee Brat House serves authentic Wisconsin bratwurst alongside quality wings in a German pub atmosphere on Old World Third Street. They offer free shuttle service to all Brewers home games and Summerfest, making it a perfect starting point for any Milwaukee sporting event. The rooftop deck provides additional viewing space during warm weather.",
      mustTry: "Signature Bratwurst, Buffalo Wings, Tiger Style Wings",
      insiderTip: "Take the free Brewers shuttle from here. The rooftop deck is the best-kept secret for warm-weather game watching.",
      bestFor: "Pre-game meals, Wisconsin brats, rooftop viewing",
      tvCount: "TVs on both floors plus rooftop",
    },
  ],
  brewersBars: [
    {
      name: "Kelly's Bleachers",
      neighborhood: "Story Hill",
      style: "Legendary Brewers Pre-Game Spot",
      priceRange: "$$",
      address: "5218 W Bluemound Rd, Milwaukee, WI 53208",
      description: "Kelly's Bleachers has been serving Milwaukee fans for decades and is THE legendary pre- and post-Brewers game destination. Located near American Family Field, it offers free shuttle service to the ballpark. But it's not just a baseball bar - Kelly's is a haven for Packers, Bucks, and Badgers fans with seemingly endless TVs and a lively atmosphere year-round.",
      mustTry: "Game Day Specials, Cold Beer Selection, Bar Food Classics",
      insiderTip: "Get here at least 2 hours before first pitch for parking and to soak in the atmosphere. The shuttle runs continuously.",
      bestFor: "Brewers games, shuttle service, pre-game energy",
      tvCount: "Numerous TVs throughout the venue",
    },
    {
      name: "J&B's Sports Bar & Blue Ribbon Taproom",
      neighborhood: "Story Hill",
      style: "The #1 Brewers Pre-Game Destination",
      priceRange: "$$",
      address: "5230 W Bluemound Rd, Milwaukee, WI 53208",
      description: "J&B's proudly calls itself the #1 pre- and post-destination for all American Family Field events. The newly renovated back bar called The Taproom features two bowling lanes and can accommodate private parties up to 150 people. Known for having Milwaukee's best chicken strips, this is where Brewers fans gather before and after every game.",
      mustTry: "Famous Chicken Strips, Craft Beer Selection, Game Day Apps",
      insiderTip: "Book The Taproom for large group watch parties. The bowling lanes add entertainment between innings.",
      bestFor: "Large groups, Brewers shuttle, private parties",
      tvCount: "Multiple screens plus private party room TVs",
    },
    {
      name: "4th Base Restaurant",
      neighborhood: "West Milwaukee",
      style: "Walking Distance from American Family Field",
      priceRange: "$$",
      address: "5117 W National Ave, West Milwaukee, WI 53214",
      description: "Established in 1977, 4th Base Restaurant is one of Milwaukee's oldest sports restaurants and one of the few within walking distance of American Family Field. This is Milwaukee's go-to spot for burgers, steak sandwiches, drinks, and game-day action before, during, and after every Brewers game. The atmosphere is pure baseball nostalgia.",
      mustTry: "Signature Burgers, Steak Sandwiches, Classic Bar Fare",
      insiderTip: "Walk to the game from here and avoid shuttle crowds. Great for families looking for a pre-game meal.",
      bestFor: "Walking to Brewers games, family dining, baseball tradition",
      tvCount: "Multiple screens for game coverage",
    },
    {
      name: "Magoo's on the Mound",
      neighborhood: "Story Hill",
      style: "Spacious Sports Bar with Free Shuttle",
      priceRange: "$$",
      address: "5841 W Bluemound Rd, Milwaukee, WI 53213",
      description: "Magoo's on the Mound is a spacious sports bar offering a free shuttle to Brewers games at American Family Field. The venue features big-screen TVs with state-of-the-art AV capabilities, plus entertainment options like darts, pool, and air hockey. Shuttles start 90 minutes before game time, giving you plenty of time to enjoy the pre-game atmosphere.",
      mustTry: "Appetizer Platters, Draft Beer Selection, Game Day Specials",
      insiderTip: "Arrive early - the shuttle fills up fast on weekend games. The pool tables are great entertainment during rain delays.",
      bestFor: "Free Brewers shuttle, game room entertainment, large groups",
      tvCount: "Big screens with full AV system",
    },
    {
      name: "McGinn's Sports Bar",
      neighborhood: "Story Hill",
      style: "Creative Wings & Shuttles",
      priceRange: "$$",
      address: "5901 W Bluemound Rd, Milwaukee, WI 53213",
      description: "McGinn's Sports Bar serves big, meaty wings with creative flavors that go beyond standard bar fare. Located on the Bluemound Road corridor, they offer shuttles to every Milwaukee Brewers game and concerts at American Family Field, as well as Marquette Men's Basketball home games. The sweet maple bourbon and Jamaican jerk wings are legendary.",
      mustTry: "Sweet Maple Bourbon Wings, Jamaican Jerk Dry Rub, Free Popcorn",
      insiderTip: "They serve free popcorn - perfect for snacking while waiting for the shuttle. Check their website for current shuttle schedule.",
      bestFor: "Creative wings, Marquette basketball, concert shuttle",
      tvCount: "Many TVs throughout the bar",
    },
  ],
  neighborhoodSportsBars: [
    {
      name: "Champion's Pub",
      neighborhood: "East Side",
      style: "Classic Neighborhood Tavern Since 1956",
      priceRange: "$",
      address: "2417 N Bartlett Ave, Milwaukee, WI 53211",
      description: "Established in 1956 by James & Bette Champion, this third-generation family business is a beloved East Side institution. Champion's Pub serves themed eats and shows games on multiple TVs, with a special energy during Packers games. The spacious enclosed yard with games and ample patio seating makes it perfect for sunny afternoon games.",
      mustTry: "Themed Game Day Specials, Wisconsin Beer Selection",
      insiderTip: "The backyard is a hidden gem for summer viewing. Bring the family - it's one of the more relaxed sports bar atmospheres.",
      bestFor: "Packers games, East Side neighborhood feel, outdoor viewing",
      tvCount: "Multiple TVs with full sports coverage",
    },
    {
      name: "Nomad World Pub",
      neighborhood: "Brady Street",
      style: "Soccer Haven & World Sports",
      priceRange: "$$",
      address: "1401 E Brady St, Milwaukee, WI 53202",
      description: "Located in the heart of Brady Street, Nomad World Pub is Milwaukee's home for televised soccer matches and international sports. With an impressive selection of beers and friendly, attentive staff, it's perfect for catching Premier League, Champions League, or World Cup matches. The pub atmosphere attracts a diverse crowd of sports fans from around the world.",
      mustTry: "International Beer Selection, Pub Fare, Match Day Specials",
      insiderTip: "This is THE spot for early morning Premier League matches. Arrive early for big European fixtures.",
      bestFor: "Soccer fans, international sports, Brady Street nightlife",
      tvCount: "Multiple screens for simultaneous matches",
    },
    {
      name: "Pete's Pub",
      neighborhood: "Brady Street",
      style: "Laid-Back Neighborhood Sports Pub",
      priceRange: "$$",
      address: "1234 E Brady St, Milwaukee, WI 53202",
      description: "Pete's Pub is a laid-back neighborhood pub and restaurant in a historical building in the heart of Brady Street. They're dedicated to bringing live sports action, featuring nearly every Formula One Grand Prix and WWE events with lively sound and drink specials. The pool table and outdoor sidewalk seating add to the relaxed neighborhood vibe.",
      mustTry: "Pub Classics, Draft Beers, Game Day Apps",
      insiderTip: "One of the few Milwaukee bars showing F1 races live with sound. WWE events draw a fun crowd.",
      bestFor: "Formula 1, WWE events, casual sports viewing",
      tvCount: "Multiple TVs with dedicated sound",
    },
    {
      name: "Coach's Pub'n'Grill",
      neighborhood: "South Side",
      style: "Scratch Kitchen Sports Bar",
      priceRange: "$",
      address: "5356 S 13th St, Milwaukee, WI 53221",
      description: "Coach's Pub'n'Grill is a South Side gem where food is made from scratch and sports are always on. This neighborhood sports bar has built a loyal following with quality food, reasonable prices, and a welcoming atmosphere. Multiple TVs ensure you can catch any game, whether it's the Bucks, Brewers, Packers, or Badgers.",
      mustTry: "Made-From-Scratch Menu Items, Daily Specials",
      insiderTip: "The homemade food sets this apart from chain sports bars. Great value for the quality.",
      bestFor: "South Side locals, homemade food, value pricing",
      tvCount: "Multiple televisions throughout",
    },
    {
      name: "Miller Time Pub & Grill",
      neighborhood: "Downtown",
      style: "Authentic Miller Time Experience",
      priceRange: "$$",
      address: "509 W Wisconsin Ave, Milwaukee, WI 53203",
      description: "Located in the Hilton Milwaukee on the corner of 5th and Wisconsin Avenue, Miller Time Pub delivers the authentic Miller Time experience. With 18 TVs throughout, sports enthusiasts can catch every game in this downtown sports bar. The convenient downtown location makes it perfect for visitors and business travelers looking to catch a game.",
      mustTry: "Miller Beer Selection, Classic Pub Food, Wisconsin Cheese Curds",
      insiderTip: "Perfect for out-of-town visitors staying downtown. The Miller beer selection is comprehensive.",
      bestFor: "Downtown convenience, hotel guests, Miller beer fans",
      tvCount: "18 TVs throughout",
    },
  ],
  watchPartyVenues: [
    {
      name: "Third Space Brewing",
      neighborhood: "Menomonee Valley",
      style: "Craft Brewery Watch Party Destination",
      priceRange: "$$",
      address: "1505 W St Paul Ave, Milwaukee, WI 53233",
      description: "Third Space Brewing offers a massive space accommodating up to 480 people with both indoor and outdoor options. Games are frequently projected on the big screen, making this a popular destination for Brewers and Bucks playoff watch parties. The award-winning craft beers and regular events like live music and trivia add to the atmosphere.",
      mustTry: "Happy Place Midwest Pale Ale, Upward Spiral IPA, Brewery Tours",
      insiderTip: "The outdoor beer garden fills up fast for playoff games. Bring lawn chairs for the best outdoor viewing.",
      bestFor: "Large watch parties, craft beer, outdoor viewing",
      tvCount: "Big screen projection plus additional screens",
    },
    {
      name: "District Fore Social",
      neighborhood: "Third Ward",
      style: "Golf Simulators & Sports Viewing",
      priceRange: "$$$",
      address: "233 E Chicago St, Milwaukee, WI 53202",
      description: "District Fore Social combines premium golf simulators with a full sports bar experience in Milwaukee's Historic Third Ward. Beyond the simulators, they offer darts, great food including New York style pizza, and multiple screens for watching games. The signature wings and gourmet pizzas keep you fueled between simulator sessions.",
      mustTry: "Signature Wings, New York Style Pizza, Craft Cocktails",
      insiderTip: "Book simulator time during halftime of big games. The private event spaces are perfect for corporate watch parties.",
      bestFor: "Golf simulators between games, Third Ward location, upscale sports entertainment",
      tvCount: "Multiple screens plus simulator screens",
    },
    {
      name: "The Beer Garden at Deer District",
      neighborhood: "Deer District",
      style: "Outdoor Plaza Watch Parties",
      priceRange: "$$",
      address: "1111 Vel R Phillips Ave, Milwaukee, WI 53203",
      description: "The Beer Garden at Deer District features a large outdoor screen, weather-proof roof, and all the game day amenities you need. Located within the Fiserv Forum entertainment block, this is where the famous Deer District playoff watch parties happen. When the Bucks are deep in the playoffs, this plaza transforms into one of the most electric sports viewing experiences in the country.",
      mustTry: "Draft Beer Selection, Game Day Specials",
      insiderTip: "For playoff games, arrive 3+ hours early. The energy during Bucks playoff runs is absolutely electric.",
      bestFor: "Bucks playoff watch parties, outdoor atmosphere, championship energy",
      tvCount: "Large outdoor screen plus plaza screens",
    },
    {
      name: "Lakefront Brewery",
      neighborhood: "Riverwest",
      style: "Iconic Brewery with Game Day Vibes",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "Lakefront Brewery is an iconic Milwaukee destination that transforms into a sports viewing hotspot during big games. The expansive beer hall and riverside patio create a unique atmosphere for catching Brewers, Bucks, or Packers games. Their award-winning beers, including the famous Riverwest Stein, pair perfectly with game day energy.",
      mustTry: "Riverwest Stein, Friday Fish Fry, Brewery Tour",
      insiderTip: "Book a brewery tour before afternoon games for the complete Milwaukee experience. The patio is perfect for summer day games.",
      bestFor: "Brewery experience, large groups, Milwaukee tradition",
      tvCount: "Multiple screens in beer hall",
    },
  ],
};

const faqs = [
  {
    question: "Where is the best place to watch Bucks games in Milwaukee?",
    answer: "Tom's Watch Bar in the Deer District is the premier Bucks viewing destination with over 100 screens and a 360-degree stadium screen. The Deer District plaza itself hosts official watch parties during playoff runs. Who's On Third and Major Goolsby's are excellent downtown alternatives with extensive TV setups.",
  },
  {
    question: "Which sports bars near American Family Field offer free shuttles to Brewers games?",
    answer: "Several bars on the Bluemound Road corridor offer free shuttles: Kelly's Bleachers, J&B's Sports Bar & Blue Ribbon Taproom, Magoo's on the Mound, and McGinn's Sports Bar. Milwaukee Brat House downtown also offers free shuttle service. Shuttles typically start 90 minutes before game time.",
  },
  {
    question: "What are the best sports bars in the Deer District?",
    answer: "The Deer District offers several excellent options: Tom's Watch Bar (100+ screens), The Spread (opened March 2026), Drink Wisconsinbly Pub (Wisconsin-themed), Good City Brewing (craft beer focus), and The Beer Garden for outdoor viewing. All are walking distance to Fiserv Forum.",
  },
  {
    question: "Where can I watch Packers games in Milwaukee?",
    answer: "Champion's Pub on the East Side has legendary Packers game energy. Major Goolsby's downtown offers 60+ TVs with four video walls. Steny's Tavern & Grill, Kelly's Bleachers, and most neighborhood sports bars throughout Milwaukee show every Packers game with full audio.",
  },
  {
    question: "What sports bars have the most TVs in Milwaukee?",
    answer: "Tom's Watch Bar leads with 100+ screens including a 360-degree stadium screen. Major Goolsby's has 60+ HDTVs with four massive video walls. Who's On Third features 50+ TVs across two floors. Miller Time Pub has 18 TVs, and Steny's Tavern has 16+ HDTVs plus a giant 10-foot projection screen.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "20 Best Sports Bars in Milwaukee: Where to Watch Bucks, Brewers & Packers Games [2026]",
    "description": "Discover Milwaukee's best sports bars from the Deer District to neighborhood gems. Find the perfect spot to watch Bucks, Brewers, and Packers games with big screens, great food, and electric atmospheres.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-sports-bars"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Sports Bars", "item": "https://www.discover-milwaukee.com/milwaukee-sports-bars" }
    ]
  }
};

export default function MilwaukeeSportsBars() {
  const SportsBarCard = ({ bar }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{bar.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {bar.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{bar.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{bar.neighborhood}</span>
          {bar.style && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{bar.style}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{bar.description}</p>
      {(bar.bestFor || bar.mustTry) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {bar.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.bestFor}</p>
            </div>
          )}
          {bar.mustTry && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>MUST TRY</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{bar.mustTry}</p>
            </div>
          )}
        </div>
      )}
      {bar.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {bar.insiderTip}</p>
        </div>
      )}
      {bar.tvCount && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}><strong>Screens:</strong> {bar.tvCount}</p>
      )}
      {bar.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "8px", marginBottom: 0 }}>{bar.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>20 Best Sports Bars in Milwaukee: Bucks, Brewers & Packers Watch Spots [2026]</title>
        <meta name="description" content="Discover Milwaukee's best sports bars for watching Bucks, Brewers, and Packers games. From Deer District hotspots to neighborhood gems, find your perfect game day destination." />
        <meta name="keywords" content="milwaukee sports bars, where to watch bucks games, brewers bars milwaukee, best bars to watch sports milwaukee, deer district bars, packers bars milwaukee, sports bars near fiserv forum, sports bars near american family field" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-sports-bars" />

        <meta property="og:title" content="20 Best Sports Bars in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From Deer District megabars to neighborhood gems, find Milwaukee's best spots for watching Bucks, Brewers, and Packers games." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-sports-bars" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-sports-bars.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-sports-bars.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>SPORTS & NIGHTLIFE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Sports Bars in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From Deer District watch parties to legendary neighborhood taverns, here's where Milwaukee watches the Bucks, Brewers, and Packers.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#deer-district" style={{ color: c.green2, fontSize: "14px" }}>Deer District</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#brewers-bars" style={{ color: c.green2, fontSize: "14px" }}>Brewers Bars</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood Spots</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#watch-party" style={{ color: c.green2, fontSize: "14px" }}>Watch Party Venues</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Sports Bars in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Tom's Watch Bar, Who's On Third, Major Goolsby's, Steny's Tavern & Grill, The Spread</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Sports Bars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The premier destinations for watching any game in Milwaukee. Big screens, great food, and electric atmospheres.
            </p>
            {sportsBars.bestOverall.map((bar, i) => <SportsBarCard key={i} bar={bar} />)}
          </section>

          <section id="deer-district" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Deer District & Downtown</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Perfect for Bucks games and the downtown sports scene. All within walking distance of Fiserv Forum.
            </p>
            {sportsBars.deerDistrict.map((bar, i) => <SportsBarCard key={i} bar={bar} />)}
          </section>

          <section id="brewers-bars" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Brewers Bars Near American Family Field</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Pre-game spots with shuttle service to the ballpark. The Bluemound Road corridor is your gateway to Brewers games.
            </p>
            {sportsBars.brewersBars.map((bar, i) => <SportsBarCard key={i} bar={bar} />)}
          </section>

          <section id="neighborhood" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Sports Bars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local favorites with authentic Milwaukee character. These are where regulars gather for every big game.
            </p>
            {sportsBars.neighborhoodSportsBars.map((bar, i) => <SportsBarCard key={i} bar={bar} />)}
          </section>

          <section id="watch-party" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Watch Party Venues & Big Screens</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Large spaces perfect for playoff viewing and special events. When the stakes are high, these venues deliver.
            </p>
            {sportsBars.watchPartyVenues.map((bar, i) => <SportsBarCard key={i} bar={bar} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Bars →
              </Link>
              <Link href="/best-wings-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Wings →
              </Link>
              <Link href="/breweries-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Breweries →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Game Day Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Watch parties, specials, and Milwaukee sports news delivered weekly.</p>
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
