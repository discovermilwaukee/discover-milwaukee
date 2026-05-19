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

const lateNightSpots = {
  bestOverall: [
    {
      name: "Gyro Palace",
      neighborhood: "Walker's Point",
      style: "Greek & Mediterranean",
      priceRange: "$",
      address: "602 S 2nd St, Milwaukee, WI 53204",
      description: "Gyro Palace is Milwaukee's go-to late-night destination for authentic Greek food with a convenient drive-thru window. Their gyros are perfectly seasoned and piled high with fresh toppings, making them the ideal post-bar meal. The Walker's Point location puts you right in the heart of the nightlife district.",
      mustTry: "Classic Gyro Sandwich, Chicken Shawarma, Greek Fries",
      insiderTip: "The drive-thru is a lifesaver after midnight. Order extra tzatziki sauce - you'll want it.",
      bestFor: "Post-bar cravings, drive-thru convenience, gyro lovers",
      hoursNote: "Sun-Thu until 2:30am, Fri-Sat until 3:30am",
    },
    {
      name: "Oakland Gyros",
      neighborhood: "East Side",
      style: "Greek Fast Casual",
      priceRange: "$",
      address: "2867 N Oakland Ave, Milwaukee, WI 53211",
      description: "Oakland Gyros has been feeding Milwaukee's East Side late-night crowd for decades. Their massive gyro sandwiches and authentic Greek plates have earned legendary status among UWM students and night owls alike. The no-frills atmosphere is part of the charm.",
      mustTry: "Super Gyro, Falafel Plate, Baklava",
      insiderTip: "Order the Super Gyro if you're really hungry - it's enormous and worth every penny.",
      bestFor: "East Side crowds, college students, authentic Greek food",
      hoursNote: "Mon-Thu until 1am, Fri until 2:30am, Sat until 4am",
    },
    {
      name: "The Wicked Hop",
      neighborhood: "Third Ward",
      style: "American Gastropub",
      priceRange: "$$",
      address: "345 N Broadway, Milwaukee, WI 53202",
      description: "The Wicked Hop offers upscale pub fare in Milwaukee's trendy Third Ward, staying open late for those who want quality food after hours. Their diverse menu ranges from gourmet burgers to late-night breakfast items, all prepared with care even in the wee hours.",
      mustTry: "Crispy Chicken Sandwich, Loaded Cheese Curds, Bavarian Pretzel",
      insiderTip: "Their late-night menu kicks in after 10pm with perfect bar food options. The patio is great in summer.",
      bestFor: "Third Ward nightlife, quality late-night dining, brunch vibes at night",
      hoursNote: "Open until 2am daily",
    },
    {
      name: "Milwaukee Brat House",
      neighborhood: "Downtown",
      style: "German Pub",
      priceRange: "$$",
      address: "1013 N Old World 3rd St, Milwaukee, WI 53203",
      description: "Milwaukee Brat House delivers hearty German-American fare on Old World Third Street until the late hours. Their specialty brats, massive pretzels, and Wisconsin cheese curds are the perfect fuel after a Bucks or Brewers game, or any night out on the town.",
      mustTry: "Signature Brats, Jumbo Bavarian Pretzel, House Wings",
      insiderTip: "The kitchen stays open until 1am daily. Try the beer cheese with your pretzel.",
      bestFor: "Pre/post-game crowds, German pub atmosphere, Old World Third Street",
      hoursNote: "Kitchen open until 1am daily",
    },
    {
      name: "Steny's Tavern & Grill",
      neighborhood: "Walker's Point",
      style: "Sports Bar & Grill",
      priceRange: "$$",
      address: "800 S 2nd St, Milwaukee, WI 53204",
      description: "Steny's has been a Walker's Point institution since 1985, famous for their 14 different buffalo wing flavors and late-night food service. They offer a dedicated late-night menu on weekends, making them a reliable choice when hunger strikes after midnight.",
      mustTry: "Lucky 13 Wings, Signature Pizza, Late-Night Nachos",
      insiderTip: "Check out their late-night menu on Fridays and Saturdays - different from the regular menu but equally satisfying.",
      bestFor: "Wing lovers, sports fans, Walker's Point nightlife",
      hoursNote: "Fri-Sat late-night menu available, bar open until 2:30am",
    },
  ],
  lateNightPizza: [
    {
      name: "Ian's Pizza",
      neighborhood: "Multiple Locations",
      style: "Creative Pizza by the Slice",
      priceRange: "$",
      address: "2035 E North Ave, Milwaukee, WI 53202",
      description: "Ian's Pizza is a Madison import that's become essential to Milwaukee's late-night scene. Famous for creative slices like Mac & Cheese Pizza and seasonal specials, Ian's delivers exactly what you need after a night out. Multiple locations mean you're never too far from a late-night slice.",
      mustTry: "Mac & Cheese Pizza, Smoky the Bandit, Seasonal Specials",
      insiderTip: "The North Ave location stays open latest - until 2:30am on weekends. Always check what creative slices are available.",
      bestFor: "Creative pizza lovers, bar district accessibility, quick slices",
      hoursNote: "North Ave: Fri-Sat until 2:30am",
    },
    {
      name: "Pizza Shuttle",
      neighborhood: "East Side",
      style: "Classic Pizza Delivery",
      priceRange: "$",
      address: "1827 N Farwell Ave, Milwaukee, WI 53202",
      description: "Pizza Shuttle has been Milwaukee's late-night pizza lifeline since 1994. Their parking lot pickup option means you can grab fresh pizza until 3am even when the dining room is closed. Known for their huge menu and consistent quality at any hour.",
      mustTry: "Shuttle Special Pizza, Breadsticks, Buffalo Chicken Pizza",
      insiderTip: "After midnight, use parking lot pickup - they'll bring your order right to your car until 3am.",
      bestFor: "Delivery until 3am, parking lot pickup, East Side reliability",
      hoursNote: "Delivery and parking lot pickup until 3am daily",
    },
    {
      name: "Zayna's Pizza",
      neighborhood: "Brady Street",
      style: "New York Style Pizza",
      priceRange: "$",
      address: "714 E Brady St, Milwaukee, WI 53202",
      description: "Zayna's has been satisfying Milwaukee's late-night pizza cravings for over 30 years from their Brady Street location. Their extensive menu goes beyond pizza to include fried chicken, ribs, and more - perfect for groups who can't agree on what to eat at 2am.",
      mustTry: "New York Style Cheese Slice, BBQ Chicken Pizza, Wings",
      insiderTip: "They deliver until 3am on weekends. The variety of their menu makes them perfect for late-night group orders.",
      bestFor: "Brady Street location, diverse menu, delivery until 3am",
      hoursNote: "Sun-Thu until 2am, Fri-Sat until 3am",
    },
    {
      name: "Toppers Pizza",
      neighborhood: "East Side",
      style: "Pizza & Topperstix",
      priceRange: "$",
      address: "1903 E Kenilworth Pl, Milwaukee, WI 53202",
      description: "Toppers is the pizza chain that understands late-night cravings, staying open until 3am or even 4am on weekends. Their Topperstix (cheesy breadsticks) are legendary drunk food, and their loaded pizzas hit the spot at any hour.",
      mustTry: "Topperstix, Mac & Cheese Bacon Pizza, Buffalo Chicken Topper",
      insiderTip: "Thursday through Saturday they're open until 4am at the East Side location - latest pizza in the city.",
      bestFor: "Latest pizza hours in MKE, college crowd, Topperstix addiction",
      hoursNote: "Thu-Sat until 4am, other days until 3am",
    },
    {
      name: "Balistreri's Bluemound Inn",
      neighborhood: "Bluemound Road",
      style: "Milwaukee Thin Crust",
      priceRange: "$$",
      address: "6501 W Bluemound Rd, Milwaukee, WI 53213",
      description: "Voted Best Late-Night Food by Milwaukee Magazine, Balistreri's has been serving Milwaukee's best thin-crust pizza until the late hours since 1958. Their crispy, perfectly charred pizza is worth the drive to the Bluemound corridor.",
      mustTry: "Classic Thin Crust Pizza, Italian Beef Sandwich, Late-Night Specials",
      insiderTip: "Call ahead for late-night orders as they get busy. Their thin crust is legendary for good reason.",
      bestFor: "Milwaukee-style thin crust, award-winning late-night, west side location",
      hoursNote: "Open until 1am daily",
    },
  ],
  afterBarFood: [
    {
      name: "The Dogg Haus",
      neighborhood: "Brady Street",
      style: "Gourmet Hot Dogs",
      priceRange: "$",
      address: "1433 E Brady St, Milwaukee, WI 53202",
      description: "The Dogg Haus serves creative gourmet hot dogs on Brady Street until 3am on weekends. From classic Chicago dogs to loaded creations with unique toppings, this is the perfect late-night stop when you want something quick, delicious, and satisfying.",
      mustTry: "Chicago Dog, Bacon Wrapped Dog, Milwaukee Dog",
      insiderTip: "Open until 3am Friday and Saturday - perfect for the Brady Street bar crawl crowd.",
      bestFor: "Brady Street bar crawlers, quick bites, gourmet hot dogs",
      hoursNote: "Fri-Sat until 3am",
    },
    {
      name: "Taqueria La Brazita",
      neighborhood: "South Side",
      style: "Authentic Mexican",
      priceRange: "$",
      address: "33 Burnham St, Milwaukee, WI 53215",
      description: "Taqueria La Brazita is Milwaukee's true 24-hour Mexican food destination. This unassuming spot serves authentic tacos, burritos, and Mexican plates around the clock, making it the go-to for late-night or early-morning cravings any day of the week.",
      mustTry: "Al Pastor Tacos, Carne Asada Burrito, Tortas",
      insiderTip: "They're open 24/7 - one of the few truly round-the-clock options in Milwaukee. Cash is preferred.",
      bestFor: "True 24-hour dining, authentic Mexican, any-time tacos",
      hoursNote: "Open 24 hours daily",
    },
    {
      name: "Jalisco's Mexican Restaurant",
      neighborhood: "Walker's Point",
      style: "Traditional Mexican",
      priceRange: "$",
      address: "1035 S Cesar E Chavez Dr, Milwaukee, WI 53204",
      description: "Jalisco's has been serving Milwaukee since 1987 and is famous for their massive burritos and late-night hours. The Walker's Point location is perfectly positioned for after-bar Mexican food cravings, with authentic recipes that hit the spot every time.",
      mustTry: "Famous Burrito, Tacos de Carne Asada, Combo Plate",
      insiderTip: "Known as the 'Home of the Famous Burrito' - their burritos are huge and meant for sharing (or not).",
      bestFor: "Massive burritos, Walker's Point location, late-night Mexican",
      hoursNote: "Open until 1am daily",
    },
    {
      name: "Who's On Third",
      neighborhood: "Downtown",
      style: "Sports Bar & Grill",
      priceRange: "$$",
      address: "1007 N Old World 3rd St, Milwaukee, WI 53203",
      description: "Who's On Third won 1st Place Judge's Choice at WingFest and stays open late near Fiserv Forum. Their creative wing flavors like Scorpion Whiskey and late-night bar menu make them perfect for post-game or post-concert hunger.",
      mustTry: "Award-Winning Wings, Scorpion Whiskey Flavor, Loaded Nachos",
      insiderTip: "Perfect location near the arena for late-night food after Bucks or concerts at Fiserv Forum.",
      bestFor: "Post-event dining, award-winning wings, downtown location",
      hoursNote: "Kitchen open late, varies by night",
    },
    {
      name: "Sobelman's Pub & Grill",
      neighborhood: "Menomonee Valley",
      style: "Wisconsin Pub Food",
      priceRange: "$$",
      address: "1900 W St Paul Ave, Milwaukee, WI 53233",
      description: "Sobelman's is famous for their over-the-top Bloody Marys and massive burgers, with late-night service that caters to the after-bar crowd. Multiple locations across Milwaukee make them accessible no matter where your night takes you.",
      mustTry: "Signature Burger, Famous Bloody Mary, Cheese Curds",
      insiderTip: "The Bloody Mary is basically a meal itself - topped with cheese, bacon, and more. Great for late-night.",
      bestFor: "Burgers and Bloodies, multiple locations, Wisconsin pub atmosphere",
      hoursNote: "Kitchen typically open until midnight",
    },
  ],
  diners24Hour: [
    {
      name: "George Webb",
      neighborhood: "Multiple Locations",
      style: "Classic Wisconsin Diner",
      priceRange: "$",
      address: "812 N Old World 3rd St, Milwaukee, WI 53203",
      description: "George Webb is a Wisconsin institution, serving breakfast 24 hours a day since 1948. The downtown Old World Third Street location is the perfect late-night stop for pancakes, hash browns, and classic diner fare. No frills, just reliable comfort food whenever you need it.",
      mustTry: "Pancakes, Hash Browns, Breakfast Platter",
      insiderTip: "The promise of free burgers if the Brewers win 12 straight is a Milwaukee legend. Downtown location is most convenient.",
      bestFor: "24-hour breakfast, Wisconsin tradition, reliable and affordable",
      hoursNote: "Open 24 hours daily",
    },
    {
      name: "Omega Restaurant (Paul's Omega)",
      neighborhood: "South Side",
      style: "Greek-American Diner",
      priceRange: "$",
      address: "3473 S 27th St, Milwaukee, WI 53215",
      description: "Omega Restaurant, also known as Paul's Omega, is a Milwaukee tradition that's been serving comfort food 24 hours a day, every day of the year. Their jumbo four-egg omelettes and authentic Greek dishes make this the perfect destination for late-night or early-morning hunger.",
      mustTry: "Jumbo Omelettes, Greek Gyro Platter, Waffles",
      insiderTip: "Open 24/7/365 - one of the most reliable late-night spots in Milwaukee. The Greek options are excellent.",
      bestFor: "True 24-hour dining, Greek-American comfort food, breakfast any time",
      hoursNote: "Open 24 hours daily, 365 days a year",
    },
    {
      name: "Ma Fischer's",
      neighborhood: "East Side",
      style: "Classic American Diner",
      priceRange: "$",
      address: "2214 N Farwell Ave, Milwaukee, WI 53202",
      description: "Ma Fischer's has been an East Side institution for decades, serving classic diner fare in a no-frills atmosphere. Known for their breakfast items and friendly service, it's the quintessential Milwaukee diner experience. Verify current late-night hours as they may have changed.",
      mustTry: "Pancakes, Eggs Benedict, Hash Browns",
      insiderTip: "Call ahead to verify late-night hours as they may vary. A Milwaukee breakfast institution.",
      bestFor: "Classic diner experience, East Side location, breakfast favorites",
      hoursNote: "Hours vary - call to confirm late-night availability",
    },
    {
      name: "Denny's",
      neighborhood: "Multiple Locations",
      style: "National Diner Chain",
      priceRange: "$",
      address: "633 N Mayfair Rd, Wauwatosa, WI 53226",
      description: "When you need a reliable late-night meal, Denny's delivers the classic American diner experience. Their Grand Slam breakfast, extensive menu, and consistent hours make them a dependable choice when local spots are closed.",
      mustTry: "Grand Slam Breakfast, Moons Over My Hammy, Pancakes",
      insiderTip: "Not the most exciting option, but always reliable for late-night or early-morning hunger.",
      bestFor: "Reliability, familiar menu, consistent late-night hours",
      hoursNote: "Open 24 hours at most locations",
    },
  ],
  lateNightDelivery: [
    {
      name: "Toppers Pizza",
      neighborhood: "Multiple Locations",
      style: "Pizza Delivery Specialist",
      priceRange: "$",
      address: "Multiple Milwaukee Area Locations",
      description: "Toppers excels at late-night delivery, with some locations delivering until 4am on weekends. Their online ordering system and reliable delivery make them the go-to when you need food brought to your door in the wee hours. Topperstix are the perfect drunk food delivery.",
      mustTry: "Topperstix with Nacho Cheese, Loaded Tots, Build Your Own Pizza",
      insiderTip: "Order online for the best experience. They track deliveries so you know exactly when your food is arriving.",
      bestFor: "Latest delivery hours, online ordering, multiple locations",
      hoursNote: "Delivery until 3-4am depending on location",
    },
    {
      name: "Pizza Shuttle",
      neighborhood: "East Side",
      style: "Classic Pizza Delivery",
      priceRange: "$",
      address: "1827 N Farwell Ave, Milwaukee, WI 53202",
      description: "Pizza Shuttle has been delivering late-night pizza to Milwaukee's East Side since 1994. Their extensive delivery zone and late hours have made them essential to the late-night food scene. Large menu means everyone can find something they want.",
      mustTry: "Shuttle Special, Garlic Bread, Wings",
      insiderTip: "Delivery until 3am - they've been doing this longer than most and have it down to a science.",
      bestFor: "East Side delivery, extensive menu, reliable late-night service",
      hoursNote: "Delivery until 3am daily",
    },
    {
      name: "Zayna's Pizza",
      neighborhood: "Brady Street",
      style: "Multi-Cuisine Delivery",
      priceRange: "$",
      address: "714 E Brady St, Milwaukee, WI 53202",
      description: "Zayna's delivers more than just pizza until the late hours. Their menu includes fried chicken, ribs, sandwiches, and more - perfect for diverse late-night group orders. Over 30 years of late-night delivery experience in Milwaukee.",
      mustTry: "Pizza, Fried Chicken, Ribs, Wings",
      insiderTip: "Great for mixed orders when your group can't decide on one thing. Delivery available until 3am weekends.",
      bestFor: "Variety for group orders, delivery until 3am, more than just pizza",
      hoursNote: "Delivery Fri-Sat until 3am, Sun-Thu until 2am",
    },
    {
      name: "Ian's Pizza",
      neighborhood: "Multiple Locations",
      style: "Creative Pizza Delivery",
      priceRange: "$",
      address: "146 E Juneau Ave, Milwaukee, WI 53202",
      description: "Ian's delivers their creative pizza slices and whole pies to downtown Milwaukee until the late hours. Famous for unique flavor combinations, Ian's brings something different to the late-night delivery game.",
      mustTry: "Mac & Cheese Pizza, BBQ Chicken Bacon, Seasonal Specials",
      insiderTip: "Check their social media for daily specials - the creative slices rotate regularly.",
      bestFor: "Creative flavors, downtown delivery, unique pizza options",
      hoursNote: "Delivery hours vary by location, Downtown until 2am weekends",
    },
  ],
};

const faqs = [
  {
    question: "What restaurants are open 24 hours in Milwaukee?",
    answer: "Milwaukee has several true 24-hour dining options including George Webb (multiple locations), Omega Restaurant (Paul's Omega) on S 27th Street, Taqueria La Brazita on the South Side, and Denny's locations. These spots serve food around the clock, perfect for any late-night or early-morning craving.",
  },
  {
    question: "Where can I get late-night pizza delivery in Milwaukee?",
    answer: "For late-night pizza delivery, Toppers Pizza delivers until 4am on weekends at some locations. Pizza Shuttle delivers until 3am daily, Zayna's Pizza delivers until 3am on weekends, and Ian's Pizza offers delivery until 2am at their downtown location. These are your best bets for pizza delivered after midnight.",
  },
  {
    question: "What are the best after-bar food spots in Milwaukee?",
    answer: "Top after-bar food destinations include Gyro Palace in Walker's Point (open until 3:30am weekends with drive-thru), The Dogg Haus on Brady Street (gourmet hot dogs until 3am weekends), Oakland Gyros on the East Side (open until 4am Saturdays), and Taqueria La Brazita (24 hours). These spots are strategically located near Milwaukee's nightlife districts.",
  },
  {
    question: "Where can I find late-night food downtown Milwaukee?",
    answer: "Downtown Milwaukee late-night options include The Wicked Hop in the Third Ward (until 2am), Milwaukee Brat House on Old World Third (kitchen until 1am), George Webb downtown (24 hours), and Who's On Third near Fiserv Forum. Ian's Pizza downtown also serves until late on weekends.",
  },
  {
    question: "What's the latest a restaurant stays open in Milwaukee?",
    answer: "The latest traditional restaurants stay open in Milwaukee is around 3-4am. Toppers Pizza stays open until 4am Thursday-Saturday, Oakland Gyros until 4am on Saturdays, and Gyro Palace until 3:30am on weekends. For true round-the-clock dining, George Webb, Omega Restaurant, and Taqueria La Brazita operate 24 hours.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "20 Best Late Night Food Spots in Milwaukee: 24-Hour Diners, After-Bar Eats & More [2026]",
    "description": "Discover Milwaukee's best late night food from 24-hour diners to 3am pizza delivery. Find after-bar food, late-night tacos, and restaurants open past midnight.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/late-night-food-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Late Night Food Milwaukee", "item": "https://www.discover-milwaukee.com/late-night-food-milwaukee" }
    ]
  }
};

export default function LateNightFoodMilwaukee() {
  const SpotCard = ({ spot }) => (
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
          {spot.style && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{spot.style}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      {(spot.bestFor || spot.mustTry) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {spot.mustTry && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
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
      {spot.hoursNote && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Hours:</strong> {spot.hoursNote}</p>
        </div>
      )}
      {spot.insiderTip && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.2)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Pro tip:</strong> {spot.insiderTip}</p>
        </div>
      )}
      {spot.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>20 Best Late Night Food Milwaukee: 24-Hour Restaurants & After-Bar Eats [2026]</title>
        <meta name="description" content="Discover Milwaukee's best late night food spots open after midnight. From 24-hour diners like George Webb to 3am pizza delivery, find the best after hours restaurants in MKE." />
        <meta name="keywords" content="late night food milwaukee, after hours restaurants milwaukee, 24 hour food milwaukee, late night eats milwaukee, best late night pizza milwaukee, milwaukee restaurants open late, after bar food milwaukee, 24 hour diners milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/late-night-food-milwaukee" />

        <meta property="og:title" content="20 Best Late Night Food Spots in Milwaukee [2026]" />
        <meta property="og:description" content="Find Milwaukee's best late night food from 24-hour diners to 3am pizza delivery. Your guide to eating after hours in MKE." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/late-night-food-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-late-night-food.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-late-night-food.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>LATE NIGHT GUIDE 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Late Night Food in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              When hunger strikes after midnight, Milwaukee has you covered. From 24-hour diners to 3am pizza delivery, here's where to eat late.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#late-night-pizza" style={{ color: c.green2, fontSize: "14px" }}>Late Night Pizza</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#after-bar-food" style={{ color: c.green2, fontSize: "14px" }}>After-Bar Food</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#24-hour-diners" style={{ color: c.green2, fontSize: "14px" }}>24-Hour Diners</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#late-night-delivery" style={{ color: c.green2, fontSize: "14px" }}>Delivery</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Late Night</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The most reliable spots for quality food after hours. These places have earned their late-night reputations.
            </p>
            {lateNightSpots.bestOverall.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="late-night-pizza" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Late Night Pizza</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Where to get your slice fix when the craving hits late. Milwaukee's pizza scene stays open well past midnight.
            </p>
            {lateNightSpots.lateNightPizza.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="after-bar-food" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>After-Bar Food</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Perfect spots for post-bar cravings. Strategically located near Milwaukee's nightlife districts.
            </p>
            {lateNightSpots.afterBarFood.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="24-hour-diners" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>24-Hour Diners</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              True round-the-clock dining for any hour. These spots never close and always deliver comfort food.
            </p>
            {lateNightSpots.diners24Hour.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="late-night-delivery" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Late Night Delivery</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Food delivered to your door until the wee hours. When you can't go out, let the food come to you.
            </p>
            {lateNightSpots.lateNightDelivery.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-pizza-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Pizza →
              </Link>
              <Link href="/best-burgers-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Burgers →
              </Link>
              <Link href="/best-tacos-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Tacos →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Late Night Food Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New spots, extended hours, and Milwaukee food news.</p>
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
