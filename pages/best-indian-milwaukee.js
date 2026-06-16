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

const indianSpots = {
  bestOverall: [
    {
      name: "Saffron Modern Indian Dining",
      neighborhood: "Historic Third Ward",
      style: "Upscale Modern Indian",
      priceRange: "$$$",
      address: "223 N Water St, Milwaukee, WI 53202",
      description: "Saffron has redefined Indian dining in Milwaukee with its farm-to-table approach and contemporary presentation. Located in the heart of the Historic Third Ward, the restaurant elevates traditional Indian cuisine using new-age culinary techniques while maintaining authentic flavors. The elegant atmosphere and innovative menu make it perfect for special occasions.",
      mustTry: "Nihari Ribs, Bengali Fish Curry, Vegetable Koftas",
      insiderTip: "Request a table near the open kitchen to watch the chefs craft your dishes. The biryani preparations are exceptional.",
      bestFor: "Date nights, special occasions, modern Indian cuisine enthusiasts",
      signatureDishes: ["Chicken Tikka Masala", "Lamb Biryani", "Paneer Makhani", "Butter Chicken"],
    },
    {
      name: "Maharaja",
      neighborhood: "East Side",
      style: "Award-Winning Classic Indian",
      priceRange: "$$",
      address: "1550 N Farwell Ave, Milwaukee, WI 53202",
      description: "Voted 'Best of Milwaukee' for 19 consecutive years, Maharaja has earned its reputation as the city's premier Indian restaurant. Their signature chicken tikka masala and vegetable kadai are legendary, and the lunch buffet offers an incredible variety of authentic dishes from various regions of India. This is the gold standard for traditional Indian dining in Milwaukee.",
      mustTry: "Chicken Tikka Masala, Vegetable Kadai, Lamb Vindaloo",
      insiderTip: "The lunch buffet (Wednesday-Monday) is the best value in town. Arrive early on weekends as it gets packed.",
      bestFor: "Traditional Indian cuisine, lunch buffet, family gatherings",
      signatureDishes: ["Chicken Tikka Masala", "Vegetable Kadai", "Lamb Biryani", "Tandoori Chicken"],
    },
    {
      name: "Cafe India Bar & Grill",
      neighborhood: "Bay View",
      style: "Full-Service Indian with Bar",
      priceRange: "$$",
      address: "2201 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Cafe India has become a Bay View institution since expanding from its original Walker's Point takeout location. The full-service restaurant features a complete bar, outdoor hookah bar, and event space. Their extensive menu covers the full spectrum of Indian cuisine, from classic curries to tandoori specialties, all served in a welcoming atmosphere.",
      mustTry: "Lamb Biryani, Saag Paneer, Chicken Tikka Masala",
      insiderTip: "The hall can be booked for private events. Try their mango lassi with any spicy dish for perfect balance.",
      bestFor: "Groups, Bay View dining, full bar experience",
      signatureDishes: ["Lamb Biryani", "Saag Paneer", "Chicken Tikka Masala", "Tandoori Mixed Grill"],
    },
  ],
  northIndian: [
    {
      name: "Baithak of Punjab",
      neighborhood: "South Side",
      style: "Authentic Punjabi & Pakistani",
      priceRange: "$$",
      address: "4252 S Howell Ave, Milwaukee, WI 53207",
      description: "Baithak of Punjab brings the rich flavors of traditional Pakistani Punjabi cuisine to Milwaukee. The restaurant celebrates the very best of desi cooking with sizzling kebabs, fragrant biryanis, creamy lassi, and crispy samosas. Always packed with Indian and Pakistani families, which speaks volumes about its authenticity.",
      mustTry: "Tandoori Mixed Grill, Chicken Biryani, Haleem",
      insiderTip: "The place is always packed with Indian families on weekends, which tells you everything about authenticity. Come hungry.",
      bestFor: "Authentic Punjabi cuisine, family-style dining, kebab lovers",
      signatureDishes: ["Tandoori Mixed Grill", "Nihari", "Biryani", "Seekh Kebab"],
    },
    {
      name: "India Garden",
      neighborhood: "Wauwatosa",
      style: "North & South Indian Fusion",
      priceRange: "$$",
      address: "2930 N 117th St, Wauwatosa, WI 53222",
      description: "Operated by veterans of the Milwaukee Indian restaurant scene, India Garden delivers a modern interpretation of classic Indian dishes using only high-quality fresh ingredients. Their lunch buffet is legendary, and the dosa stretches nearly two feet long. The restaurant expertly bridges North and South Indian traditions.",
      mustTry: "Masala Dosa, Butter Chicken, Lamb Rogan Josh",
      insiderTip: "The masala dosa is about 2 feet long and comes with perfect chutneys and sambar. Don't skip it.",
      bestFor: "Lunch buffet, dosa lovers, Wauwatosa residents",
      signatureDishes: ["Masala Dosa", "Butter Chicken", "Lamb Rogan Josh", "Paneer Tikka"],
    },
    {
      name: "Bollywood Grill",
      neighborhood: "Lower East Side",
      style: "Fine Indian Cuisine",
      priceRange: "$$",
      address: "1038 N Jackson St, Milwaukee, WI 53202",
      description: "Established in 2013, Bollywood Grill (formerly Mayura Indian Restaurant) serves authentic Indian cuisine spanning the subcontinent. The restaurant specializes in South Indian, biryani, and grilled dishes, offering both dine-in and takeout in an inviting downtown atmosphere. Their vegetarian and gluten-free options are extensive.",
      mustTry: "Masala Dosa, Beef Korma, Chicken Biryani",
      insiderTip: "Closed Mondays. The Masala Dosa served with sambar and coconut chutney is a must-order.",
      bestFor: "Downtown lunch, vegetarian options, South Indian specialties",
      signatureDishes: ["Masala Dosa", "Beef Korma", "Chicken Biryani", "Lamb Vindaloo"],
    },
    {
      name: "Tandoor Restaurant",
      neighborhood: "West Allis",
      style: "Traditional Tandoori & Curry",
      priceRange: "$$",
      address: "1117 S 108th St, Milwaukee, WI 53214",
      description: "Tandoor Restaurant has been serving authentic Indian cuisine with a focus on naan, curry, and lassi drinks for years. The restaurant excels in lamb and goat dishes, offering delights like Lamb Saagwala and Goat Masala. Their lunch buffet is incredibly affordable with a wide variety of dishes to explore.",
      mustTry: "Lamb Saagwala, Goat Masala, Tandoori Chicken",
      insiderTip: "The lunch buffet is one of the best values in the city. Lamb and goat dishes are the specialty here.",
      bestFor: "Budget lunch buffet, tandoori specialties, West Allis dining",
      signatureDishes: ["Lamb Saagwala", "Goat Masala", "Tandoori Chicken", "Chicken Curry"],
    },
    {
      name: "Antique Indian Delight",
      neighborhood: "South Side",
      style: "Weekend Buffet Specialist",
      priceRange: "$$",
      address: "3933 S 76th St, Milwaukee, WI 53220",
      description: "Established in 2022, Antique Indian Delight has quickly become known for its authentic home-style cooking. Chef and Owner Pawan Saini brings traditional recipes from his native Punjab, with specialties like goat masala, shrimp masala, and fish tikka masala. The weekend lunch buffet draws crowds from across the city.",
      mustTry: "Goat Masala, Fish Tikka Masala, Shrimp Masala",
      insiderTip: "Weekend lunch buffet runs Friday through Sunday 11am-3pm. Get there early for the freshest selections.",
      bestFor: "Weekend buffet, authentic Punjabi dishes, goat curry lovers",
      signatureDishes: ["Goat Masala", "Shrimp Masala", "Fish Tikka Masala", "Butter Chicken"],
    },
  ],
  southIndian: [
    {
      name: "Chettinadu House",
      neighborhood: "Bay View",
      style: "South Indian & Indo-Chinese",
      priceRange: "$$",
      address: "2258 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Milwaukee's newest destination for authentic South Indian Chettinad cuisine, led by Chef Ameen Khan with over 12 years of training. The fusion menu features traditional curries like tikka masala, vindaloo, and dal tadka alongside tandoori-grilled meats and crispy dosa. The Indo-Chinese dishes like fried rice and gobi manchurian add unique variety.",
      mustTry: "Chettinad Chicken, Masala Dosa, Gobi Manchurian",
      insiderTip: "Opened in early 2026 in the former Sabor Tropical space. The Indo-Chinese fusion dishes are exceptional and hard to find elsewhere.",
      bestFor: "South Indian authentic, Indo-Chinese fusion, Bay View foodies",
      signatureDishes: ["Chettinad Chicken", "Masala Dosa", "Gobi Manchurian", "Biryani"],
    },
    {
      name: "Honest Milwaukee",
      neighborhood: "South Side",
      style: "Vegetarian South Indian Street Food",
      priceRange: "$",
      address: "3400 S 27th St, Milwaukee, WI 53215",
      description: "Honest Milwaukee stands out for its exceptional South Indian vegetarian cuisine, blending authentic flavors with modern culinary techniques. The Masala Dosa here is beautifully executed - delicately crisp, evenly golden, and light with an intricate lace-like texture. The generous portions and pure vegetarian menu make it a destination for health-conscious diners.",
      mustTry: "Masala Dosa, Paper Dosa, Bahubali Thali, Vada Pav",
      insiderTip: "The dosas are legendary - order the Paper Dosa for the crispiest experience. Everything is 100% vegetarian.",
      bestFor: "Vegetarians, dosa enthusiasts, authentic street food",
      signatureDishes: ["Masala Dosa", "Paper Dosa", "Dabang Dosa", "Paneer Manchurian"],
    },
    {
      name: "Bombay Sweets",
      neighborhood: "South Side",
      style: "Vegetarian with Sweets Counter",
      priceRange: "$",
      address: "3401 S 13th St, Milwaukee, WI 53215",
      description: "One of Milwaukee's first restaurants to offer a full array of traditional vegetarian Indian cuisine, Bombay Sweets has over 20 years of experience. The restaurant serves home-cooked style North and South Indian dishes alongside an impressive selection of in-house prepared Indian sweets and snacks. Perfect for those craving authentic vegetarian fare.",
      mustTry: "Aloo Paratha, Gulab Jamun, Samosas, South Indian Thali",
      insiderTip: "Don't leave without trying the sweets counter - the jalebi and gulab jamun are made fresh daily.",
      bestFor: "Vegetarians, Indian sweets, budget-friendly meals",
      signatureDishes: ["Masala Dosa", "Samosas", "Gulab Jamun", "Jalebi"],
    },
    {
      name: "Curry Hut Indian Cuisine",
      neighborhood: "East Side",
      style: "Casual Indian & Sweets",
      priceRange: "$",
      address: "1888 N Humboldt Ave, Milwaukee, WI 53202",
      description: "Curry Hut brings authentic Indian cuisine and sweets to Milwaukee's East Side near Brady Street. The casual atmosphere makes it perfect for quick lunches or relaxed dinners. Their menu spans regional Indian favorites with a selection of house-made sweets and desserts. Online ordering and delivery make it convenient for any occasion.",
      mustTry: "Chicken Tikka Masala, Samosa Chaat, Mango Lassi",
      insiderTip: "The East Side location opened in 2023 after the success of the original. Great for delivery orders.",
      bestFor: "Quick lunch, East Side residents, delivery orders",
      signatureDishes: ["Chicken Tikka Masala", "Samosa Chaat", "Biryani", "Kulfi"],
    },
  ],
  buffetOptions: [
    {
      name: "Maharaja",
      neighborhood: "East Side",
      style: "Premier Lunch Buffet",
      priceRange: "$$",
      address: "1550 N Farwell Ave, Milwaukee, WI 53202",
      description: "Maharaja's lunch buffet is legendary in Milwaukee, offering an incredible variety of dishes that rotate daily. From tandoori items to curries, rice dishes to fresh naan, the buffet showcases the full range of Indian cuisine. Available Wednesday through Monday, it's consistently voted the best Indian buffet in the city.",
      mustTry: "Lunch Buffet, Chicken Tikka, Fresh Naan",
      insiderTip: "Arrive before noon on weekends to beat the rush. The buffet selections change daily, so there's always something new.",
      bestFor: "All-you-can-eat value, variety seekers, lunch meetings",
      signatureDishes: ["Rotating Buffet Selection", "Tandoori Items", "Multiple Curries", "Fresh Breads"],
    },
    {
      name: "India Garden",
      neighborhood: "Wauwatosa",
      style: "Extensive Buffet Selection",
      priceRange: "$$",
      address: "2930 N 117th St, Wauwatosa, WI 53222",
      description: "India Garden's lunch buffet runs daily from 11:30am to 3:00pm, featuring special North and South Indian dishes. The spread includes vegetarian options, meat dishes, dosa, and an array of chutneys and accompaniments. The quality matches any a la carte dining experience at a fraction of the price.",
      mustTry: "Lunch Buffet, Dosa Station, Dessert Selection",
      insiderTip: "The buffet includes dosa and South Indian specialties that are hard to find at other buffets.",
      bestFor: "Wauwatosa lunch, South Indian buffet items, vegetarian variety",
      signatureDishes: ["Buffet Dosa", "Chana Masala", "Tandoori Chicken", "Rice Pudding"],
    },
    {
      name: "Tandoor Restaurant",
      neighborhood: "West Allis",
      style: "Value Lunch Buffet",
      priceRange: "$",
      address: "1117 S 108th St, Milwaukee, WI 53214",
      description: "Tandoor offers one of the most affordable Indian lunch buffets in the Milwaukee area without sacrificing quality. The buffet features dishes from both North and South India, including their specialty lamb and goat preparations. The generous portions and variety make it an excellent value.",
      mustTry: "Lunch Buffet, Lamb Dishes, Goat Curry",
      insiderTip: "One of the most affordable buffets in the area. The lamb and goat dishes at the buffet are exceptional.",
      bestFor: "Budget dining, West Allis lunch, lamb curry lovers",
      signatureDishes: ["Lamb Curry", "Goat Dishes", "Vegetable Selection", "Fresh Naan"],
    },
    {
      name: "Antique Indian Delight",
      neighborhood: "South Side",
      style: "Weekend Buffet Experience",
      priceRange: "$$",
      address: "3933 S 76th St, Milwaukee, WI 53220",
      description: "Antique Indian Delight's weekend buffet (Friday-Sunday, 11am-3pm) has become a destination for Indian food lovers. The spread features authentic home-style cooking with specialties like goat masala and fish tikka masala. The weekend-only schedule makes it feel like a special event.",
      mustTry: "Weekend Buffet, Goat Masala, Seafood Selection",
      insiderTip: "Weekend-only buffet means fresher preparations and more specialty items than daily buffets.",
      bestFor: "Weekend brunch, authentic home cooking, goat curry",
      signatureDishes: ["Goat Masala", "Fish Tikka Masala", "Weekend Special Items", "Fresh Breads"],
    },
  ],
};

const faqs = [
  {
    question: "What is the best Indian restaurant in Milwaukee?",
    answer: "Maharaja has been voted 'Best of Milwaukee' for 19 consecutive years and remains the gold standard for traditional Indian cuisine. For upscale modern Indian, Saffron in the Third Ward offers an innovative farm-to-table approach. Cafe India Bar & Grill in Bay View is excellent for groups and offers a full bar experience.",
  },
  {
    question: "Where can I find the best Indian buffet in Milwaukee?",
    answer: "Maharaja on the East Side offers the most acclaimed lunch buffet, available Wednesday through Monday. India Garden in Wauwatosa features both North and South Indian buffet items including dosa. Tandoor Restaurant in West Allis provides excellent value. Antique Indian Delight offers a weekend-only buffet (Friday-Sunday) with specialty items.",
  },
  {
    question: "What are the best South Indian restaurants in Milwaukee for dosa?",
    answer: "Honest Milwaukee on the South Side serves exceptional masala and paper dosas with perfect texture. Chettinadu House in Bay View offers authentic Chettinad cuisine with crispy dosas. India Garden's masala dosa stretches nearly two feet long. Bollywood Grill also serves excellent dosas with traditional accompaniments.",
  },
  {
    question: "Where can I find authentic North Indian curry in Milwaukee?",
    answer: "Baithak of Punjab serves authentic Punjabi and Pakistani cuisine with exceptional biryanis and kebabs. Maharaja's butter chicken and tikka masala are legendary. Antique Indian Delight specializes in Punjabi dishes like goat masala. India Garden offers a refined take on North Indian classics.",
  },
  {
    question: "What are the best vegetarian Indian restaurants in Milwaukee?",
    answer: "Bombay Sweets has served vegetarian Indian cuisine for over 20 years with an excellent sweets counter. Honest Milwaukee is 100% vegetarian with outstanding South Indian street food. Most Milwaukee Indian restaurants offer extensive vegetarian menus, with Saffron providing upscale vegetarian options including vegan and gluten-free dishes.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "14 Best Indian Restaurants in Milwaukee: From Curry to Dosa [2026]",
    "description": "Discover Milwaukee's best Indian restaurants including Maharaja, Saffron, and authentic South Indian spots. Find the perfect curry, biryani, dosa, and Indian buffet.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-indian-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Indian Milwaukee", "item": "https://www.discover-milwaukee.com/best-indian-milwaukee" }
    ]
  }
};

export default function BestIndianMilwaukee() {
  const IndianCard = ({ spot }) => (
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
        <title>14 Best Indian Restaurants in Milwaukee: Curry, Dosa & Buffet Guide [2026]</title>
        <meta name="description" content="Discover Milwaukee's best Indian restaurants from award-winning Maharaja to modern Saffron. Find authentic curry, dosa, biryani, and the best Indian buffet in the city." />
        <meta name="keywords" content="best indian milwaukee, indian restaurants milwaukee, curry milwaukee, indian buffet milwaukee, dosa milwaukee, biryani milwaukee, tikka masala milwaukee, tandoori milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-indian-milwaukee" />

        <meta property="og:title" content="14 Best Indian Restaurants in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From legendary Maharaja to modern Saffron and authentic South Indian dosa, find Milwaukee's best Indian restaurants for curry, biryani, and buffet." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-indian-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-best-indian.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-best-indian.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>INDIAN CUISINE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              14 Best Indian Restaurants in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From classic curry houses to modern Indian dining and authentic South Indian dosa. Your guide to the best Indian food in Milwaukee.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#north-indian" style={{ color: c.green2, fontSize: "14px" }}>North Indian</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#south-indian" style={{ color: c.green2, fontSize: "14px" }}>South Indian</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#buffet" style={{ color: c.green2, fontSize: "14px" }}>Buffet Options</a>
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
              <dd style={{ color: "#444", margin: 0 }}>Best Indian Restaurants in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Saffron Modern Indian Dining, Maharaja, Cafe India Bar & Grill, Baithak of Punjab, India Garden</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Indian Restaurants</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The Indian restaurants that define Milwaukee's culinary scene. Award-winning spots serving exceptional cuisine.
            </p>
            {indianSpots.bestOverall.map((spot, i) => <IndianCard key={i} spot={spot} />)}
          </section>

          <section id="north-indian" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>North Indian Specialties</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Rich curries, tender tandoori, and fragrant biryanis. The bold flavors of Punjab, Kashmir, and beyond.
            </p>
            {indianSpots.northIndian.map((spot, i) => <IndianCard key={i} spot={spot} />)}
          </section>

          <section id="south-indian" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>South Indian & Vegetarian</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Crispy dosas, vegetarian delights, and authentic regional cooking. Lighter, rice-based cuisine with complex spice profiles.
            </p>
            {indianSpots.southIndian.map((spot, i) => <IndianCard key={i} spot={spot} />)}
          </section>

          <section id="buffet" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Buffet Options</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              All-you-can-eat Indian feasts across Milwaukee. Sample multiple dishes and discover new favorites.
            </p>
            {indianSpots.buffetOptions.map((spot, i) => <IndianCard key={i} spot={spot} />)}
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Milwaukee Food Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurant openings, food events, and insider guides.</p>
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
