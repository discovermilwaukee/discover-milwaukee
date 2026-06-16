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

const chineseSpots = {
  bestOverall: [
    {
      name: "DanDan",
      neighborhood: "Third Ward",
      style: "Modern Chinese-American",
      priceRange: "$$",
      address: "360 E Erie St, Milwaukee, WI 53202",
      description: "DanDan has become Milwaukee's most celebrated Chinese restaurant since opening by chefs Dan Jacobs and Dan Van Rite. The stylish Third Ward spot serves refined takes on Chinese-American classics alongside authentic dim sum and handmade noodles. Their annual Dim Sum Give Some event has raised over $120,000 for charity while bringing all-star chefs from across the country to Milwaukee.",
      mustTry: "Xiao Long Bao, Dan Dan Noodles, Kung Pao Chicken",
      insiderTip: "Reservations recommended, especially on weekends. The bar area is great for walk-ins with full menu access.",
      bestFor: "Special occasions, date nights, modern Chinese cuisine",
      signatureDishes: ["Xiao Long Bao", "Crispy Pork Belly", "Kung Pao Chicken", "Hand-Pulled Noodles"],
    },
    {
      name: "Momo Mee",
      neighborhood: "Harbor District",
      style: "Pan-Asian Noodles & Dumplings",
      priceRange: "$$",
      address: "110 E Greenfield Ave, Milwaukee, WI 53204",
      description: "Momo Mee won Best Chinese Restaurant in Best of Milwaukee and continues to draw crowds for their handcrafted noodles and famous xiao long bao. The name says it all: Momo means dumplings and Mee means noodles. Every dumpling is individually handcrafted, made fresh daily, never frozen, and served straight from the bamboo steamer bursting with rich, hot broth.",
      mustTry: "Xiao Long Bao, Dan Dan Noodles, Bao Buns",
      insiderTip: "Due to limited seating, make an online reservation. The kitchen views let you watch dumplings being crafted.",
      bestFor: "Dumpling enthusiasts, noodle lovers, authentic soup dumplings",
      signatureDishes: ["Xiao Long Bao", "Dan Dan Noodles", "Miso Ramen", "Pot Stickers"],
    },
    {
      name: "Sze Chuan Restaurant",
      neighborhood: "West Allis",
      style: "Authentic Sichuan",
      priceRange: "$$",
      address: "11102 W National Ave, West Allis, WI 53227",
      description: "Hands down the best, most authentic Chinese food in the Milwaukee area. The chef-owners are originally from Sichuan province in southwest China and bring genuine regional flavors to every dish. Nestled in West Allis amidst a lively strip of Asian businesses, this establishment is renowned for its vibrant Sichuan flavors and extensive menu.",
      mustTry: "Mapo Tofu, Pork Dumplings in Chile Oil, Fish in Chile Pepper Soup",
      insiderTip: "Ask for the authentic Sichuan menu if you want the real heat. They can adjust spice levels for newcomers.",
      bestFor: "Spice lovers, authentic regional cuisine, Sichuan specialists",
      signatureDishes: ["Mapo Tofu", "Beef Tendon in Chili Sauce", "Braised Pork Belly", "Kung Pao Chicken"],
    },
    {
      name: "Fortune Restaurant",
      neighborhood: "West Allis",
      style: "Authentic Cantonese",
      priceRange: "$$",
      address: "2945 S 108th St, Milwaukee, WI 53227",
      description: "Frank Lai's Fortune Restaurant has been an award-winning favorite since 1994, offering the most authentic Cantonese food in Milwaukee. Ask for the red menu (Chinese) rather than the green menu (American) for more gourmet options including duck feet with Chinese mushrooms and crispy skin chicken that rivals anything you'd find in Hong Kong.",
      mustTry: "Crispy Skin Chicken, Spicy Shrimp, Duck Feet with Mushrooms",
      insiderTip: "Request the red Chinese menu for authentic dishes not on the standard American menu.",
      bestFor: "Cantonese cuisine purists, authentic Hong Kong flavors, special banquets",
      signatureDishes: ["Crispy Skin Chicken", "Lobster Cantonese", "House Delight", "Peking Duck"],
    },
  ],
  authenticChinese: [
    {
      name: "Jing's",
      neighborhood: "Third Ward",
      style: "Shanghai Cuisine",
      priceRange: "$$",
      address: "207 E Buffalo St, Milwaukee, WI 53202",
      description: "Jing's specializes in Shanghai cuisine and was named one of Milwaukee's Top 30 Restaurants by the Milwaukee Journal Sentinel. The soup dumplings come out piping hot and bursting with flavor, while the dan dan noodles and pork lo mein showcase authentic Shanghai preparation methods. Located in the historic Marshall Building in the Third Ward.",
      mustTry: "Soup Dumplings, Dan Dan Noodles, Spicy Shanghai Chicken",
      insiderTip: "Their Shanghai-style duck is a standout. Available for dine-in, pick-up, and delivery.",
      bestFor: "Shanghai cuisine, soup dumplings, Third Ward dining",
      signatureDishes: ["Soup Dumplings", "Shanghai Duck", "Pork Lo Mein", "Dan Dan Noodles"],
    },
    {
      name: "Emperor of China",
      neighborhood: "Brady Street",
      style: "Regional Chinese",
      priceRange: "$$",
      address: "1010 E Brady St, Milwaukee, WI 53202",
      description: "A family-run institution on Brady Street since 1986, Emperor of China serves regional Chinese cuisines that closely approximate authentic Chinese cooking rather than Americanized versions. The extensive menu features duck, chicken, beef, pork, seafood, and vegetarian options with diverse regional origins. Traditional Chinese elements like vases and dividers add to the authentic atmosphere.",
      mustTry: "Peking Duck, House Special Lo Mein, General Tso's Chicken",
      insiderTip: "Complimentary ice cream and chocolate fortune cookies come after meals. Ask about daily specials.",
      bestFor: "Brady Street dining, family meals, authentic regional dishes",
      signatureDishes: ["Peking Duck", "Szechuan Beef", "Mongolian Lamb", "Vegetable Delight"],
    },
    {
      name: "China Gourmet",
      neighborhood: "Downtown",
      style: "Upscale Cantonese",
      priceRange: "$$$",
      address: "117 E Wells St, Milwaukee, WI 53202",
      description: "China Gourmet has served Asian cuisine in Milwaukee's Downtown since the 1980s, relocating here in 1996. Distinguished among Milwaukee Chinese restaurants for unusual entrees including half-dozen lamb dishes, it's located near The Riverside Theatre and Milwaukee City Hall. The restaurant has withstood the city's competitive restaurant landscape for more than four decades.",
      mustTry: "Hunan Lamb, Black Bean Salmon, Lobster Cantonese",
      insiderTip: "Perfect for pre-theater dining with its proximity to Riverside Theatre. Upscale atmosphere for business dinners.",
      bestFor: "Business dinners, pre-theater meals, upscale Chinese",
      signatureDishes: ["Hunan Lamb", "Black Bean Salmon", "Egg Fu Young", "House Special Seafood"],
    },
    {
      name: "Asian Fusion",
      neighborhood: "Lower East Side",
      style: "Pan-Chinese with Korean & Taiwanese",
      priceRange: "$$",
      address: "1609 E North Ave Suite B, Milwaukee, WI 53202",
      description: "Asian Fusion is an upbeat, traditional Chinese restaurant and bubble tea shoppe with Korean, Thai, Taiwanese and Japanese influences. The menu showcases traditional regional Chinese dishes including Sichuan-style favorites while incorporating Chinese-American and Korean elements. Late-night hours make it a go-to spot for East Side nightlife crowds.",
      mustTry: "Kung Pao Chicken, Bubble Tea, Mapo Tofu",
      insiderTip: "Open until 1-2am most nights, perfect for late-night cravings. The bubble tea selection is extensive.",
      bestFor: "Late-night dining, bubble tea, East Side crowds",
      signatureDishes: ["Sichuan Specialties", "Bubble Tea", "Korean-Chinese Fusion", "Crispy Chicken"],
    },
    {
      name: "Fusion Cafe",
      neighborhood: "West Allis",
      style: "Northern Chinese",
      priceRange: "$$",
      address: "1427 S 108th St, West Allis, WI 53214",
      description: "Fusion Cafe offers authentic Northern Chinese cuisine with outstanding handmade dumplings and noodle dishes. Their northern style foods really stand out with dumplings and noodle/soup noodle dishes that are specifically from northern China. The bubble tea selection adds a modern touch to traditional preparations.",
      mustTry: "Handmade Dumplings, Noodle Soup, Bubble Tea",
      insiderTip: "The northern-style dishes are the specialty here. Try the handmade dumplings over American-Chinese options.",
      bestFor: "Northern Chinese specialties, handmade dumplings, affordable authentic",
      signatureDishes: ["Handmade Dumplings", "Northern Noodles", "Bubble Tea", "Stir-Fried Specialties"],
    },
  ],
  dimSum: [
    {
      name: "J.J. Chen's Eatery",
      neighborhood: "West Allis",
      style: "Cantonese Dim Sum",
      priceRange: "$$",
      address: "10722 W Oklahoma Ave, West Allis, WI 53227",
      description: "J.J. Chen's Eatery consistently ranks among the best dim sum restaurants in Milwaukee, offering authentic Cantonese dishes, sizzling Szechwan specials, and mouth-watering dim sum. The extensive menu features traditional favorites alongside creative interpretations. Customers praise the consistent quality, flavorful preparations, and generous portions.",
      mustTry: "Dim Sum Selection, Fried Rice, Szechwan Chicken",
      insiderTip: "Best for dim sum during lunch hours. Large portions mean leftovers are common.",
      bestFor: "Traditional dim sum, Cantonese classics, family gatherings",
      signatureDishes: ["Shu Mai", "Har Gow", "Char Siu Bao", "Turnip Cake"],
    },
    {
      name: "Easy Tyger",
      neighborhood: "Lower East Side",
      style: "Asian Gastropub Dim Sum",
      priceRange: "$$",
      address: "1230 E Brady St, Milwaukee, WI 53202",
      description: "Easy Tyger blends Asian and American cuisines in a fun, casual Brady Street atmosphere with a focus on seasonal and locally inspired ingredients. Their dim sum menu features exceptional bao buns that customers rave about, along with creative ramen selections. The gastropub approach brings a modern twist to traditional dim sum.",
      mustTry: "Pork Belly Bao, Ramen, Dim Sum Selection",
      insiderTip: "The bao buns are legendary. Great happy hour specials on dim sum items.",
      bestFor: "Modern dim sum, Brady Street nightlife, creative Asian fusion",
      signatureDishes: ["Pork Belly Bao", "Crispy Chicken Bao", "House Ramen", "Edamame"],
    },
    {
      name: "Dumpling & Bao House",
      neighborhood: "Hales Corners",
      style: "Traditional Dumplings",
      priceRange: "$$",
      address: "5191 S 108th St, Hales Corners, WI 53130",
      description: "Dumpling & Bao House focuses exclusively on what they do best: exceptional handmade dumplings and bao buns. Located in Hales Corners, this spot has earned a loyal following for their commitment to traditional dumpling-making techniques. Each piece is crafted fresh with attention to authentic flavors and textures.",
      mustTry: "Pork Dumplings, Bao Buns, Pan-Fried Dumplings",
      insiderTip: "Call ahead for large orders as everything is made fresh. Worth the drive from Milwaukee proper.",
      bestFor: "Dumpling specialists, traditional preparations, takeout",
      signatureDishes: ["Steamed Dumplings", "Bao Buns", "Pan-Fried Pot Stickers", "Soup Dumplings"],
    },
    {
      name: "Confucius House",
      neighborhood: "Hales Corners",
      style: "Cantonese & Dim Sum",
      priceRange: "$$",
      address: "5394 S 108th St, Hales Corners, WI 53130",
      description: "Confucius House Chinese Restaurant offers authentic Chinese cuisine with Hunan, Szechuan, and Cantonese specialties. Their dim sum selection provides traditional Cantonese favorites alongside an extensive menu of Chinese classics. The restaurant serves the greater Milwaukee area with convenient delivery and carry-out options.",
      mustTry: "Dim Sum Platter, General Tso's Chicken, Szechuan Beef",
      insiderTip: "Great for delivery with consistent quality. Lunch specials offer excellent value.",
      bestFor: "Suburban dining, delivery, traditional Cantonese",
      signatureDishes: ["Dim Sum Selection", "Cantonese Roast Duck", "Hot and Sour Soup", "Kung Pao Shrimp"],
    },
  ],
  takeoutFavorites: [
    {
      name: "King's Wok",
      neighborhood: "Glendale",
      style: "Cantonese, Hunan & Szechuan",
      priceRange: "$$",
      address: "6969 N Port Washington Rd, Milwaukee, WI 53217",
      description: "King's Wok operates multiple locations across the Milwaukee area, emphasizing Cantonese, Hunan, and Szechuan cuisines. Known for fresh ingredients and consistent quality, their menu includes vegetarian and traditional favorites like Sesame Chicken, Fried Rice, and Lo Mein. The Glendale location offers both dine-in and convenient takeout.",
      mustTry: "Sesame Chicken, Fried Rice, Lo Mein",
      insiderTip: "Multiple locations mean you're never far from a King's Wok. Consistent quality across all spots.",
      bestFor: "Quick takeout, family favorites, multiple locations",
      signatureDishes: ["Sesame Chicken", "Beef with Broccoli", "Lo Mein", "Egg Rolls"],
    },
    {
      name: "Cheng Wong Restaurant",
      neighborhood: "West Milwaukee",
      style: "Traditional Chinese-American",
      priceRange: "$$",
      address: "1631 Miller Park Way, Milwaukee, WI 53214",
      description: "Cheng Wong Restaurant is a beloved family-run destination for authentic Chinese cuisine in Milwaukee. Known for its warm, welcoming atmosphere, the extensive menu features dishes prepared fresh with every order, never reheated or microwaved. Favorites include General Tso's chicken, shrimp fried rice, and classic egg rolls.",
      mustTry: "General Tso's Chicken, Shrimp Fried Rice, Egg Rolls",
      insiderTip: "Everything is cooked to order, so expect slightly longer waits for fresh, never-reheated food.",
      bestFor: "Fresh cooked-to-order, family dining, neighborhood Chinese",
      signatureDishes: ["General Tso's Chicken", "Shrimp Fried Rice", "Crab Rangoon", "Mongolian Beef"],
    },
    {
      name: "Lucky Liu's",
      neighborhood: "East Side",
      style: "Chinese-Japanese Fusion",
      priceRange: "$$",
      address: "1664 N Van Buren St, Milwaukee, WI 53202",
      description: "Lucky Liu's is a family-owned restaurant serving Chinese and Japanese fusion cuisine with dine-in, carry-out, and delivery options. The East Side location makes it convenient for downtown residents and workers. Extended hours and delivery availability through DoorDash make it a reliable choice for Chinese food cravings.",
      mustTry: "Orange Chicken, Sushi Rolls, Fried Rice",
      insiderTip: "Open late for delivery. Great option when you want both Chinese and Japanese options.",
      bestFor: "Delivery, late night, Chinese-Japanese fusion",
      signatureDishes: ["Orange Chicken", "California Roll", "Lo Mein", "Egg Drop Soup"],
    },
    {
      name: "Bento Xpert",
      neighborhood: "Downtown",
      style: "Taiwanese Street Food",
      priceRange: "$$",
      address: "1125 N 9th St, Unit F, Milwaukee, WI 53233",
      description: "Bento Xpert is a family-owned business serving authentic Taiwanese and Chinese cuisines as well as street food. Located in Eleven25, a renovated historic Pabst building with a contemporary food court, they serve bento specials, five-spice Taiwanese popcorn chicken, Gua Bao, and famous three-cup chicken.",
      mustTry: "Five Spices Chicken, Gua Bao, Three-Cup Chicken, Taiwanese Pork Chop",
      insiderTip: "Hidden gem in the Eleven25 food hall. The Taiwanese popcorn chicken is exceptional.",
      bestFor: "Lunch, Taiwanese specialties, bento boxes",
      signatureDishes: ["Taiwanese Popcorn Chicken", "Gua Bao", "Bento Boxes", "Pork Chop Rice"],
    },
    {
      name: "China East",
      neighborhood: "Wauwatosa",
      style: "Classic Chinese-American",
      priceRange: "$$",
      address: "6810 W State St, Wauwatosa, WI 53213",
      description: "China East serves classic Chinese-American dishes in Wauwatosa with generous portions at fair prices. The menu includes all the favorites from crab rangoon to sweet and sour chicken, making it a reliable neighborhood choice for families and takeout orders. Convenient location on State Street with ample parking.",
      mustTry: "Crab Rangoon, Sweet & Sour Chicken, Fried Prawns",
      insiderTip: "Good value for large group orders. Call ahead for big takeout orders.",
      bestFor: "Family takeout, classic Chinese-American, Wauwatosa dining",
      signatureDishes: ["Crab Rangoon", "Sweet & Sour Chicken", "Beef with Broccoli", "Egg Foo Young"],
    },
  ],
};

const faqs = [
  {
    question: "What's the best Chinese restaurant in Milwaukee?",
    answer: "DanDan in the Third Ward is widely considered Milwaukee's best Chinese restaurant, offering modern takes on Chinese-American classics alongside authentic dim sum. For the most authentic Sichuan cuisine, Sze Chuan Restaurant in West Allis is the top choice. Momo Mee in the Harbor District wins for best handmade noodles and soup dumplings.",
  },
  {
    question: "Where can I find authentic dim sum in Milwaukee?",
    answer: "The best dim sum options in Milwaukee include DanDan in the Third Ward, J.J. Chen's Eatery in West Allis for traditional Cantonese dim sum, Easy Tyger on Brady Street for modern interpretations, and Momo Mee for exceptional soup dumplings. Dumpling & Bao House in Hales Corners specializes exclusively in dumplings and bao.",
  },
  {
    question: "What are the best soup dumplings (xiao long bao) in Milwaukee?",
    answer: "Momo Mee serves the best soup dumplings in Milwaukee, with each xiao long bao individually handcrafted, made fresh daily, never frozen, and served straight from the bamboo steamer. DanDan and Jing's also offer excellent soup dumplings with authentic preparation methods.",
  },
  {
    question: "Where can I find authentic Sichuan food in Milwaukee?",
    answer: "Sze Chuan Restaurant in West Allis is the undisputed champion for authentic Sichuan cuisine. The chef-owners are from Sichuan province and specialize in classic dishes like mapo tofu, pork dumplings in chile oil, and fish in chile pepper soup. Asian Fusion on the East Side also offers Sichuan-style dishes.",
  },
  {
    question: "What Chinese restaurants are open late in Milwaukee?",
    answer: "Asian Fusion on the Lower East Side stays open until 1-2am most nights, making it perfect for late-night cravings. Lucky Liu's on the East Side offers late delivery options. For delivery-focused late-night Chinese food, several restaurants deliver through apps like DoorDash and Uber Eats until midnight or later.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "18 Best Chinese Restaurants in Milwaukee: Dim Sum, Authentic Sichuan & More [2026]",
    "description": "Discover Milwaukee's best Chinese restaurants from DanDan's modern Chinese-American cuisine to authentic Sichuan at Sze Chuan Restaurant. Dim sum, soup dumplings, and neighborhood favorites.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-chinese-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Chinese in Milwaukee", "item": "https://www.discover-milwaukee.com/best-chinese-milwaukee" }
    ]
  }
};

export default function BestChineseMilwaukee() {
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
      {spot.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {spot.insiderTip}</p>
        </div>
      )}
      {spot.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>18 Best Chinese Restaurants in Milwaukee: Dim Sum, Sichuan & More [2026]</title>
        <meta name="description" content="Discover Milwaukee's best Chinese restaurants from DanDan's modern cuisine to authentic Sichuan at Sze Chuan Restaurant. Dim sum, soup dumplings, and neighborhood favorites all verified open in 2026." />
        <meta name="keywords" content="best chinese milwaukee, chinese restaurants milwaukee, dim sum milwaukee, authentic chinese food milwaukee, soup dumplings milwaukee, sichuan food milwaukee, chinese takeout milwaukee, DanDan milwaukee, Momo Mee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-chinese-milwaukee" />

        <meta property="og:title" content="18 Best Chinese Restaurants in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From DanDan's celebrated dim sum to authentic Sichuan cuisine and neighborhood takeout favorites, discover Milwaukee's best Chinese food." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-chinese-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-best-chinese.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-best-chinese.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <Nav />

        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>CHINESE CUISINE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Chinese Restaurants in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From modern dim sum to authentic Sichuan heat, Milwaukee's Chinese food scene delivers exceptional options for every craving.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#authentic" style={{ color: c.green2, fontSize: "14px" }}>Authentic Chinese</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#dim-sum" style={{ color: c.green2, fontSize: "14px" }}>Dim Sum & Dumplings</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#takeout" style={{ color: c.green2, fontSize: "14px" }}>Takeout Favorites</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />
          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Chinese Restaurants in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>DanDan, Momo Mee, Sze Chuan Restaurant, Fortune Restaurant, Jing's</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Chinese Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's top Chinese restaurants that excel in every category—from modern interpretations to authentic regional cuisine.
            </p>
            {chineseSpots.bestOverall.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="authentic" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Authentic Chinese Cuisine</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Regional specialties and traditional preparations from Shanghai, Sichuan, Canton, and beyond.
            </p>
            {chineseSpots.authenticChinese.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="dim-sum" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Dim Sum & Dumplings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The best spots for traditional dim sum, soup dumplings, and handmade bao buns in Milwaukee.
            </p>
            {chineseSpots.dimSum.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="takeout" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Takeout Favorites</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Reliable neighborhood spots for Chinese takeout and delivery across the Milwaukee area.
            </p>
            {chineseSpots.takeoutFavorites.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Patios →
              </Link>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Brunch →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Milwaukee Food Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurant openings, food events, and insider recommendations.</p>
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
