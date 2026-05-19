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

const cheapEatsSpots = {
  bestOverall: [
    {
      name: "Conejito's Place",
      neighborhood: "Walker's Point",
      style: "No-Frills Authentic Mexican",
      priceRange: "$3-8",
      address: "539 W Virginia St, Milwaukee, WI 53204",
      description: "Voted #1 for Cheap Eats by Shepherd Express, Conejito's has been a Milwaukee institution for decades. Nothing on the menu exceeds $8, and the food is served on paper plates in a no-frills atmosphere. The chicken mole is legendary, and the portions are generous enough to leave you stuffed without emptying your wallet.",
      mustTry: "Chicken Mole, Tacos, Enchiladas",
      insiderTip: "Cash only. Come hungry because the portions are massive. The wait can be long on weekends, but it moves fast.",
      bestFor: "Budget seekers, authentic Mexican, cash-only dining",
      budgetTip: "Full meal with drink under $10",
    },
    {
      name: "Oscar's Pub & Grill",
      neighborhood: "Mitchell Park",
      style: "Classic Pub Fare",
      priceRange: "$8-14",
      address: "1712 W Pierce St, Milwaukee, WI 53204",
      description: "Oscar's has earned a devoted following for its outstanding burgers and incredible value. The pub atmosphere is welcoming, and the food consistently exceeds expectations for the price. Their $1 taco specials are legendary, and the craft beer selection pairs perfectly with their menu.",
      mustTry: "Oscar's Burger, $1 Tacos, Sweet Potato Fries",
      insiderTip: "Check their social media for $1 taco nights. The Pierce Street location is the original and has the best vibe.",
      bestFor: "Burger lovers, taco night deals, neighborhood pub vibes",
      budgetTip: "Load up on $1 taco nights for an ultra-cheap meal",
    },
    {
      name: "Transfer Pizzeria Cafe",
      neighborhood: "Historic Mitchell Street",
      style: "Artisan Pizza & Cafe",
      priceRange: "$7-15",
      address: "101 W Mitchell St, Milwaukee, WI 53204",
      description: "Transfer brings artisan-quality pizza to Milwaukee's South Side at prices that won't break the bank. Their weekday lunch deal of a one-topping pizza and soda for $6.95 is one of the best values in the city. The space is warm and inviting with exposed brick and local art.",
      mustTry: "Margherita Pizza, Lunch Special, Vegan Options",
      insiderTip: "The weekday lunch special (11am-3pm) is unbeatable: one-topping pizza plus soda for $6.95.",
      bestFor: "Pizza lovers, lunch deals, vegan-friendly options",
      budgetTip: "Lunch special under $7 with a drink",
    },
    {
      name: "Camino",
      neighborhood: "Walker's Point",
      style: "American Craft Beer & Eats",
      priceRange: "$5-14",
      address: "434 S 2nd St, Milwaukee, WI 53204",
      description: "Camino is Walker's Point's go-to spot for affordable pub food with a Latin twist. Their $5 burger Monday special features a half-pound beef patty with two slices of American cheese and fried onions on a brioche bun. The craft beer selection is excellent and reasonably priced.",
      mustTry: "$5 Monday Burger, Wednesday Burger Time, Wings",
      insiderTip: "Monday $5 burgers and Wednesday unlimited burger toppings for $10 are the best deals. Great patio in summer.",
      bestFor: "Burger deals, craft beer fans, Walker's Point crowds",
      budgetTip: "$5 burger on Mondays is one of the city's best deals",
    },
  ],
  tacosTaqueria: [
    {
      name: "Taqueria El Cabrito",
      neighborhood: "Walker's Point",
      style: "Traditional Mexican & Birria",
      priceRange: "$2-8",
      address: "1100 S 11th St, Milwaukee, WI 53204",
      description: "This cozy brick-walled diner is beloved for its slow-cooked goat meat (birria), which is the star of the menu. You can get a full meal with two tacos and a quesadilla for under $8, making it one of the best values on Milwaukee's South Side. The homemade tortillas and salsas are exceptional.",
      mustTry: "Birria Tacos, Quesadilla, Horchata",
      insiderTip: "The birria is the specialty here. Order it in tacos or as a plate. The homemade salsas range from mild to fiery.",
      bestFor: "Birria lovers, authentic Mexican, best bang for buck",
      budgetTip: "Two tacos and quesadilla under $8",
    },
    {
      name: "Taqueria Buenavista",
      neighborhood: "West Milwaukee",
      style: "Authentic Street Tacos",
      priceRange: "$2-10",
      address: "6000 W Burnham St, Milwaukee, WI 53219",
      description: "With multiple locations and food trucks around the city, Taqueria Buenavista has become a Milwaukee institution for affordable authentic Mexican food. Tacos are just $2-3 each, served on warm corn tortillas with perfect seasoning. The atmosphere is unpretentious and family-friendly.",
      mustTry: "Street Tacos, Tortas, Burritos",
      insiderTip: "They have food trucks at Chase & Oklahoma, 108th & National, and 92nd & Greenfield. The trucks often have shorter lines.",
      bestFor: "Authentic street tacos, family dining, multiple locations",
      budgetTip: "Tacos $2-3 each, full meal under $10",
    },
    {
      name: "Mazorca Tacos",
      neighborhood: "Walker's Point (Zocalo Food Park)",
      style: "Award-Winning Tacos",
      priceRange: "$4-12",
      address: "636 S 6th St, Milwaukee, WI 53204",
      description: "Located in the Zocalo Food Park, Mazorca has earned editor's pick status for their handmade tortillas grilled for extra crispness. The tacos, tortas, and burritos are made with exceptional care and quality ingredients. The food park setting makes it a fun outdoor dining experience.",
      mustTry: "Al Pastor Tacos, Carnitas, Handmade Tortillas",
      insiderTip: "The handmade tortillas are what set Mazorca apart. Get them grilled for extra crispiness. Open Wed-Sun only.",
      bestFor: "Handmade tortillas, food park vibes, quality over quantity",
      budgetTip: "Three tacos make a filling meal for under $15",
    },
    {
      name: "Guanajuato Mexican Restaurant",
      neighborhood: "Bay View",
      style: "Family-Style Mexican",
      priceRange: "$8-14",
      address: "2317 S Howell Ave, Milwaukee, WI 53207",
      description: "Serving authentic Mexican cuisine for over 30 years, Guanajuato is Milwaukee's reader-voted best overall taco spot. The warm, welcoming atmosphere and generous portions have made it a Bay View staple. Everything from the salsas to the tortillas is made fresh daily.",
      mustTry: "Tacos, Enchiladas, Combination Plates",
      insiderTip: "The lunch specials are an even better value. Ask for extra chips and salsa - they're happy to oblige.",
      bestFor: "Family dining, authentic flavors, Bay View locals",
      budgetTip: "Lunch specials under $10",
    },
    {
      name: "BelAir Cantina",
      neighborhood: "Multiple Locations",
      style: "Modern Mexican & Tacos",
      priceRange: "$2-14",
      address: "1935 N Water St, Milwaukee, WI 53202",
      description: "BelAir Cantina brings a modern twist to Mexican cuisine with creative tacos and an extensive tequila selection. Their Taco Tuesday, Wednesday, and Thursday deals offer $2 select tacos, making it one of the best recurring specials in the city. Multiple locations make it accessible from anywhere.",
      mustTry: "$2 Select Tacos, Baja Fish Taco, Margaritas",
      insiderTip: "$2 select tacos Tuesday-Thursday. Also locations on Downer Ave and in Wauwatosa.",
      bestFor: "Taco deals, modern atmosphere, date nights on a budget",
      budgetTip: "$2 tacos Tue-Thu can get you stuffed for under $10",
    },
  ],
  pizzaDeals: [
    {
      name: "Ian's Pizza",
      neighborhood: "Multiple Locations",
      style: "Creative Slices & Classics",
      priceRange: "$3-5/slice",
      address: "2035 E North Ave, Milwaukee, WI 53202",
      description: "Ian's Pizza brings affordable, craft-quality pizza to the people with creative slice options that change daily. Famous for inventions like Mac & Cheese Pizza, they offer slices ranging from $3-4.75. Three Milwaukee locations (North Ave, Downtown, Story Hill) make it accessible citywide.",
      mustTry: "Mac & Cheese Pizza, Daily Specials, Classic Cheese",
      insiderTip: "Check their social media for daily slice specials. The late-night hours make it perfect for after-bar cravings.",
      bestFor: "Creative slices, late night, multiple locations",
      budgetTip: "Two slices make a meal for under $10",
    },
    {
      name: "Zaffiro's Pizza",
      neighborhood: "Lower East Side",
      style: "Milwaukee Classic Thin Crust",
      priceRange: "$10-15",
      address: "1724 N Farwell Ave, Milwaukee, WI 53202",
      description: "A Milwaukee institution since 1954, Zaffiro's serves legendary thin-crust pizza that has earned devoted fans for generations. Their large two-topping pizza for $15 (dine-in only) is one of the best pizza deals in the city. The no-frills atmosphere keeps the focus on the food.",
      mustTry: "Classic Thin Crust, Two-Topping Large, Pitcher of Beer",
      insiderTip: "The $15 large two-topping is dine-in only. Split with a friend and add a pitcher for a cheap night out.",
      bestFor: "Milwaukee tradition, thin crust lovers, dine-in deals",
      budgetTip: "Large two-topping pizza $15 feeds two people",
    },
    {
      name: "Pizza Man",
      neighborhood: "Downer Ave / Wauwatosa",
      style: "Milwaukee Institution",
      priceRange: "$10-15",
      address: "2597 N Downer Ave, Milwaukee, WI 53211",
      description: "Pizza Man has been a Milwaukee favorite for decades, known for quality ingredients and a welcoming atmosphere. Their lunch special offers a 12-inch one-topping pizza with a soda for $13.95, and happy hour brings discounted apps and drinks.",
      mustTry: "Lunch Special, Any Specialty Pizza, Calzones",
      insiderTip: "Lunch special (11am-3pm): 12\" one-topping pizza + soda for $13.95. Happy hour 3-6pm has great deals.",
      bestFor: "Lunch deals, East Side dining, happy hour",
      budgetTip: "Lunch special under $14 with a drink",
    },
  ],
  ethnicFood: [
    {
      name: "Vientiane Noodle Shop",
      neighborhood: "Silver City",
      style: "Laotian & Thai",
      priceRange: "$8-14",
      address: "3422 W National Ave, Milwaukee, WI 53215",
      description: "This family-owned gem has been serving authentic Laotian cuisine for two decades. Their pho, pad Thai, and Southeast Asian specialties are made with care and served in generous portions. The spring roll dipping sauce alone is worth the visit.",
      mustTry: "Pho, Pad See Ew, Spring Rolls, Pad Thai",
      insiderTip: "The spring roll sauce is legendary. Try the pad see ew if you want something different from typical Thai.",
      bestFor: "Authentic Southeast Asian, pho lovers, hidden gem",
      budgetTip: "Large bowl of pho under $12 is a full meal",
    },
    {
      name: "Casablanca",
      neighborhood: "Brady Street",
      style: "Middle Eastern",
      priceRange: "$8-14",
      address: "728 E Brady St, Milwaukee, WI 53202",
      description: "A Brady Street institution since 1988, Casablanca serves authentic Middle Eastern fare at reasonable prices. The spicy chicken shawarma with fries for $11 is a bargain, and the atmosphere transforms from restaurant to hookah lounge after dark. Open until 2 AM.",
      mustTry: "Chicken Shawarma, Lamb Shank Couscous, Combination Appetizer",
      insiderTip: "The combination appetizer is perfect for sharing. Late-night menu available until 2 AM.",
      bestFor: "Middle Eastern, late night, Brady Street vibe",
      budgetTip: "Shawarma plate with fries $11",
    },
    {
      name: "Apollo Cafe",
      neighborhood: "Brady Street",
      style: "Greek & Mediterranean",
      priceRange: "$10-14",
      address: "1310 E Brady St, Milwaukee, WI 53202",
      description: "Apollo Cafe has been serving Greek favorites on Brady Street for years. Their gyros at $12.50 are packed with meat and served with fresh pita and tzatziki. The casual atmosphere and consistent quality have earned them a loyal following.",
      mustTry: "Gyros, Greek Salad, Spanakopita",
      insiderTip: "The gyro meat is sliced fresh from the spit. Pair it with a Greek salad for a complete meal under $15.",
      bestFor: "Greek food, Brady Street, gyro lovers",
      budgetTip: "Gyro meal under $13",
    },
    {
      name: "Doner Kebab",
      neighborhood: "North Side",
      style: "German-Style Doner",
      priceRange: "$10-14",
      address: "138 E Capitol Dr, Milwaukee, WI 53212",
      description: "Milwaukee's first dedicated doner kebab shop opened in late 2025, bringing authentic German-style doner to the city. The doner sandwiches are made with traditional preparation and served with fresh vegetables and house sauces. A unique addition to Milwaukee's ethnic food scene.",
      mustTry: "Doner Kebab Sandwich, Fries, House Sauces",
      insiderTip: "Opened by Ray and Elma Ramic in 2025. Try the traditional doner with all the fixings for the full experience.",
      bestFor: "German street food, unique eats, North Side dining",
      budgetTip: "Doner sandwich meal under $14",
    },
    {
      name: "Pho Saigon",
      neighborhood: "West Allis",
      style: "Vietnamese Pho & Noodles",
      priceRange: "$10-14",
      address: "10534 W Greenfield Ave, West Allis, WI 53214",
      description: "Pho Saigon serves steaming bowls of Vietnamese pho and noodle dishes that warm the soul without emptying your wallet. The rich, aromatic broth is simmered for hours, and the portions are generous. A perfect spot for a filling, affordable meal.",
      mustTry: "Pho with Rare Steak, Banh Mi, Vietnamese Coffee",
      insiderTip: "The large pho is enormous - perfect for sharing or taking leftovers home. Add extra sriracha and hoisin to taste.",
      bestFor: "Pho lovers, cold day comfort food, Vietnamese cuisine",
      budgetTip: "Large pho under $14 can feed two",
    },
  ],
  localFavorites: [
    {
      name: "Swingin' Door Exchange",
      neighborhood: "Downtown",
      style: "Historic Saloon & Eatery",
      priceRange: "$10-15",
      address: "219 E Michigan St, Milwaukee, WI 53202",
      description: "Opened in 1973 in the iconic Mackie Building, Swingin' Door Exchange is a downtown institution known for generous portions and reasonable prices. The menu features homemade soups, sandwiches, steaks, and daily features. The historic saloon atmosphere is quintessentially Milwaukee.",
      mustTry: "Burgers, Homemade Soups, Daily Features",
      insiderTip: "The daily features keep things interesting. Great spot for a business lunch or pre-game meal at reasonable prices.",
      bestFor: "Downtown lunch, historic atmosphere, generous portions",
      budgetTip: "Lunch entrees under $15",
    },
    {
      name: "Taqueria Los Comales",
      neighborhood: "Walker's Point",
      style: "Mexican Comfort Food",
      priceRange: "$8-14",
      address: "1306 S Cesar E Chavez Dr, Milwaukee, WI 53204",
      description: "A welcoming establishment offering cozy, lively atmosphere perfect for families and groups. The menu features comfort food classics including chilaquiles, taco trays, and burritos. The weekend breakfast draws crowds for their authentic Mexican morning dishes.",
      mustTry: "Chilaquiles, Taco Tray, Breakfast Burritos",
      insiderTip: "Weekend breakfast is spectacular. The chilaquiles are a perfect hangover cure. Family-friendly atmosphere.",
      bestFor: "Family dining, weekend breakfast, Mexican comfort food",
      budgetTip: "Breakfast plates under $12",
    },
    {
      name: "Carnitas Don Lucho",
      neighborhood: "Lincoln Village",
      style: "Weekend Carnitas Specialist",
      priceRange: "$8-15",
      address: "565 W Lincoln Ave, Milwaukee, WI 53207",
      description: "This weekend-only spot specializes in traditional Mexican carnitas prepared the old-fashioned way. The tender, flavorful pork is cooked in copper pots and served by the pound. Worth waking up early for - they open at 4 AM and often sell out by afternoon.",
      mustTry: "Carnitas by the Pound, Tacos, Tortas",
      insiderTip: "Opens at 4 AM Friday-Sunday and sells out fast. Get there early for the best selection. Weekend only!",
      bestFor: "Authentic carnitas, early birds, weekend tradition",
      budgetTip: "Carnitas by the pound to share is best value",
    },
    {
      name: "Kopp's Frozen Custard",
      neighborhood: "Glendale / Greenfield / Brookfield",
      style: "Milwaukee Custard & Burgers",
      priceRange: "$5-12",
      address: "5373 N Port Washington Rd, Glendale, WI 53217",
      description: "Founded in 1950, Kopp's is a Milwaukee institution for frozen custard and jumbo burgers. The daily flavor of custard draws devoted fans who track their favorites, and the burgers are made fresh with quality ingredients. Three locations serve the greater Milwaukee area.",
      mustTry: "Jumbo Burger, Daily Custard Flavor, Cheese Curds",
      insiderTip: "Check their website for the daily custard flavor. The jumbo burger is massive - consider the regular size.",
      bestFor: "Milwaukee tradition, frozen custard, family outings",
      budgetTip: "Burger and small custard under $12",
    },
    {
      name: "Ono Kine Grindz",
      neighborhood: "Wauwatosa",
      style: "Hawaiian Plate Lunch",
      priceRange: "$12-15",
      address: "7215 W North Ave, Wauwatosa, WI 53213",
      description: "Milwaukee's go-to spot for authentic Hawaiian food, Ono Kine Grindz serves generous plate lunches that transport you to the islands. The kalua pork, chicken katsu, and spam musubi are all prepared traditionally. Also a market for Hawaiian products and Kona coffee.",
      mustTry: "Kalua Pork Plate, Chicken Katsu, Spam Musubi",
      insiderTip: "The plate lunches come with two scoops of rice and mac salad - very filling. Limited hours, check before going.",
      bestFor: "Hawaiian food, unique cuisine, island flavors",
      budgetTip: "Plate lunch under $15 is extremely filling",
    },
  ],
};

const faqs = [
  {
    question: "What's the cheapest place to eat in Milwaukee?",
    answer: "Conejito's Place in Walker's Point is consistently voted Milwaukee's best cheap eats, with nothing on the menu over $8. Taqueria El Cabrito offers two tacos and a quesadilla for under $8. For deals, Camino has $5 burgers on Mondays, and BelAir Cantina offers $2 tacos Tuesday through Thursday.",
  },
  {
    question: "Where can I find the best cheap tacos in Milwaukee?",
    answer: "Milwaukee's South Side is taco heaven. Taqueria El Cabrito serves incredible birria tacos under $3 each. Taqueria Buenavista has multiple locations with $2-3 street tacos. Mazorca Tacos at Zocalo Food Park offers award-winning handmade tortilla tacos. BelAir Cantina's $2 taco specials run Tuesday through Thursday.",
  },
  {
    question: "What are the best pizza deals in Milwaukee?",
    answer: "Transfer Pizzeria offers a weekday lunch deal: one-topping pizza and soda for $6.95. Ian's Pizza sells creative slices for $3-4.75 at three locations. Zaffiro's has a large two-topping pizza for $15 dine-in. Pizza Man's lunch special is a 12-inch pizza with soda for $13.95.",
  },
  {
    question: "Where can I find cheap ethnic food in Milwaukee?",
    answer: "Vientiane Noodle Shop serves large bowls of pho under $14. Casablanca on Brady Street has shawarma plates for $11. Apollo Cafe offers gyros for $12.50. Doner Kebab on Capitol Drive serves authentic German-style doner under $14. Pho Saigon in West Allis has filling Vietnamese dishes at great prices.",
  },
  {
    question: "What are the best daily food specials in Milwaukee?",
    answer: "Monday: Camino $5 burgers. Tuesday-Thursday: BelAir Cantina $2 select tacos. Wednesday: Camino unlimited burger toppings for $10. Many spots offer lunch specials: Transfer ($6.95 pizza combo), Pizza Man ($13.95 pizza combo). Check Oscar's Pub for $1 taco night specials.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "20 Best Cheap Eats in Milwaukee: Budget Restaurants Under $15 [2026]",
    "description": "Discover Milwaukee's best budget-friendly restaurants with meals under $15. From $2 tacos to $5 burgers, find affordable dining across the city.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/cheap-eats-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Cheap Eats Milwaukee", "item": "https://www.discover-milwaukee.com/cheap-eats-milwaukee" }
    ]
  }
};

export default function CheapEatsMilwaukee() {
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
      {(spot.mustTry || spot.bestFor) && (
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
      {spot.budgetTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Budget tip:</strong> {spot.budgetTip}</p>
        </div>
      )}
      {spot.insiderTip && (
        <div style={{ backgroundColor: "rgba(45,90,74,0.05)", padding: "12px", borderRadius: "8px", marginTop: "12px", borderLeft: `3px solid ${c.orange}` }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {spot.insiderTip}</p>
        </div>
      )}
      {spot.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>20 Best Cheap Eats in Milwaukee: Budget Restaurants Under $15 [2026]</title>
        <meta name="description" content="Discover Milwaukee's best cheap eats and budget-friendly restaurants with meals under $15. From $2 tacos to $5 burgers, find affordable food across the city." />
        <meta name="keywords" content="cheap eats milwaukee, budget restaurants milwaukee, affordable food milwaukee, best cheap food milwaukee, milwaukee cheap restaurants, budget dining milwaukee, cheap tacos milwaukee, cheap pizza milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/cheap-eats-milwaukee" />

        <meta property="og:title" content="20 Best Cheap Eats in Milwaukee: Budget Restaurants Under $15 [2026]" />
        <meta property="og:description" content="From $2 tacos to $5 burgers, discover Milwaukee's best budget-friendly restaurants with meals under $15." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/cheap-eats-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-cheap-eats.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-cheap-eats.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>BUDGET DINING</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Cheap Eats in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee believes in good value. From South Side taquerias serving $2 tacos to iconic spots with $5 burger nights, here's where to eat well for less.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#tacos" style={{ color: c.green2, fontSize: "14px" }}>Tacos & Taquerias</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#pizza" style={{ color: c.green2, fontSize: "14px" }}>Pizza Deals</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#ethnic" style={{ color: c.green2, fontSize: "14px" }}>Ethnic Food</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#local-favorites" style={{ color: c.green2, fontSize: "14px" }}>Local Favorites</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Cheap Eats</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The spots that define budget dining in Milwaukee. These restaurants deliver exceptional value without compromising on flavor.
            </p>
            {cheapEatsSpots.bestOverall.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="tacos" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Tacos & Taquerias</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's South Side serves some of the best affordable tacos in the Midwest. Authentic flavors, rock-bottom prices.
            </p>
            {cheapEatsSpots.tacosTaqueria.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="pizza" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Pizza Deals</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              From creative slices to classic Milwaukee pies, pizza on a budget has never been better.
            </p>
            {cheapEatsSpots.pizzaDeals.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="ethnic" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Affordable Ethnic Food</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Global flavors at budget-friendly prices. Milwaukee's diverse food scene delivers world cuisine without the world prices.
            </p>
            {cheapEatsSpots.ethnicFood.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="local-favorites" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Local Favorites</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee institutions that deliver value and flavor. These are the spots where locals eat.
            </p>
            {cheapEatsSpots.localFavorites.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/best-tacos-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Tacos →
              </Link>
              <Link href="/best-fish-fry-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Fish Fry →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Food Deals</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Budget dining tips, daily specials, and cheap eats updates.</p>
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
