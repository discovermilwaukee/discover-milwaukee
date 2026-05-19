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

const ramenSpots = {
  bestOverall: [
    {
      name: "Kawa Ramen & Sushi",
      neighborhood: "East Side / Downtown",
      style: "Traditional Japanese Ramen",
      priceRange: "$$",
      address: "2321 N Murray Ave, Milwaukee, WI 53211 | 275 W Wisconsin Ave (3rd Street Market Hall)",
      description: "Kawa Ramen & Sushi stands as one of Milwaukee's most serious ramen operations, with their tonkotsu broth made from Berkshire pork bones sourced from a Wisconsin farm and simmered for over 12 hours. The kitchen staff was trained by a ramen chef brought directly from Japan, ensuring authentic technique and flavor. With locations on the East Side and inside 3rd Street Market Hall, Kawa offers accessibility without sacrificing quality.",
      mustTry: "Tonkotsu Ramen, Tori Paitan (chicken broth)",
      insiderTip: "The 3rd Street Market Hall location has counter seating where you can watch your ramen being prepared. The East Side location offers a more traditional sit-down experience.",
      bestFor: "Authentic ramen seekers, downtown lunch crowds, Japanese food purists",
      signatureBowls: ["Tonkotsu Ramen", "Tori Paitan", "Spicy Miso Ramen", "Shoyu Ramen"],
    },
    {
      name: "Momo Mee",
      neighborhood: "Harbor District",
      style: "Pan-Asian Handcrafted Noodles",
      priceRange: "$$",
      address: "110 E Greenfield Ave, Milwaukee, WI 53204",
      description: "Momo Mee showcases Chef Tony Ho's mastery of pan-Asian cuisines in Milwaukee's growing Harbor District. Their miso ramen at $19 layers complexity through a dashi chicken stock base enriched with white, brown, and red miso pastes, black sesame butter oil, and housemade chashu. The restaurant holds distinction as home to Wisconsin's first handcrafted xiao long bao soup dumplings, made in limited quantities daily.",
      mustTry: "Miso Ramen, Szechuan Beef Noodle Soup ($23), Xiao Long Bao",
      insiderTip: "The xiao long bao are made in limited quantities and available dine-in only. Arrive early to ensure availability.",
      bestFor: "Adventurous eaters, soup dumpling lovers, Harbor District dining",
      signatureBowls: ["Miso Ramen", "Szechuan Beef Noodle Soup", "Dan Dan Noodles", "Wonton Noodle Soup"],
    },
    {
      name: "Artisan Ramen",
      neighborhood: "Downtown (East Town)",
      style: "Creative Ramen & Asian Fusion",
      priceRange: "$$",
      address: "530 E Mason St, Milwaukee, WI 53202",
      description: "Since 2017, Artisan Ramen has been redefining ramen in Milwaukee's downtown East Town neighborhood. This women-owned establishment produces fresh noodles in-house daily, pairing them with customizable broth options including pork and vegetable bases. Their creative approach extends to sushi burritos, boba tea, and an impressive array of vegan and vegetarian ramen options that don't compromise on flavor.",
      mustTry: "Tonkotsu Ramen, Veggie Ramen, Spicy Miso",
      insiderTip: "They offer ramen classes for those wanting to learn the craft. Check their website for upcoming sessions.",
      bestFor: "Downtown workers, vegetarians, creative ramen fans, group dining",
      signatureBowls: ["Classic Tonkotsu", "Spicy Miso", "Veggie Ramen", "Black Garlic Ramen"],
    },
  ],
  authenticRamen: [
    {
      name: "Hungry Sumo Sushi Bar",
      neighborhood: "Bay View",
      style: "Traditional Japanese",
      priceRange: "$$",
      address: "2663 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Hungry Sumo has quickly become a Bay View institution, celebrated for its truly authentic atmosphere, fresh sushi, and what many consider to be the best ramen in Milwaukee. The intimate space captures the feeling of a neighborhood ramen shop in Japan, with careful attention to broth development and noodle texture. Their Sumo pork buns are a must-order appetizer.",
      mustTry: "House Ramen, Sumo Pork Buns, Spicy Tuna Roll",
      insiderTip: "The restaurant is quite small and can get busy. Visit early or make reservations for a smoother experience. Closed Sunday and Monday.",
      bestFor: "Authentic Japanese experience, Bay View locals, sushi and ramen combo",
      signatureBowls: ["Tonkotsu Ramen", "Miso Ramen", "Shoyu Ramen"],
    },
    {
      name: "Tanpopo Ramen & Sushi",
      neighborhood: "Hales Corners",
      style: "Family-Friendly Japanese",
      priceRange: "$$",
      address: "5191 S 108th St, Hales Corners, WI 53130",
      description: "What makes Tanpopo uniquely appealing is its drive-thru service—a rarity for ramen restaurants anywhere. This family-friendly spot offers a welcoming atmosphere and reasonable prices, with tonkotsu, miso, and shoyu bowls starting at just $13. The restaurant blends traditional Japanese charm with modern convenience, making quality ramen accessible to busy families.",
      mustTry: "Tonkotsu Ramen, Spicy Miso Ramen, California Roll",
      insiderTip: "The drive-thru is perfect for families with restless children who still want quality ramen without the sit-down commitment.",
      bestFor: "Families, suburban diners, drive-thru convenience, value seekers",
      signatureBowls: ["Tonkotsu Ramen", "Miso Ramen", "Shoyu Ramen", "Spicy Ramen"],
    },
    {
      name: "Osaka Ramen & Hibachi",
      neighborhood: "Brookfield / Pewaukee",
      style: "Street Kitchen Inspired",
      priceRange: "$$",
      address: "920 S Moorland Rd, Brookfield, WI 53005 | 2128 Silvernail Rd, Pewaukee, WI 53072",
      description: "Inspired by the street kitchens of Osaka, this fast-casual ramen spot serves broth cooked for over 18 hours. The Brookfield location opened in June 2025 and has already developed a cult following. Both locations offer counter-service convenience with sit-down quality, bringing authentic Japanese-inspired ramen and sizzling hibachi dishes to the western suburbs.",
      mustTry: "18-Hour Tonkotsu, Spicy Miso, Hibachi Combo",
      insiderTip: "The hibachi dishes make for a great complement to a ramen bowl if you're dining with a group with different cravings.",
      bestFor: "Suburban diners, quick lunch, hibachi fans, family outings",
      signatureBowls: ["18-Hour Tonkotsu", "Miso Ramen", "Spicy Garlic Ramen", "Veggie Ramen"],
    },
    {
      name: "Queen of Ramen",
      neighborhood: "Near West Side",
      style: "Late-Night Japanese",
      priceRange: "$",
      address: "1721 W Canal St, Milwaukee, WI 53233",
      description: "Queen of Ramen has become a favorite among locals and visitors with its commitment to quality and tradition. Open daily from 11 AM to 1 AM, this cozy spot offers authentic Japanese ramen dishes in a casual atmosphere ideal for late-night cravings. The extended hours make it the go-to destination for post-event dining near the entertainment district.",
      mustTry: "House Special Ramen, Spicy Tonkotsu",
      insiderTip: "Perfect for late-night ramen cravings after Bucks or concerts. The kitchen stays open until 1 AM daily.",
      bestFor: "Late-night dining, event crowds, budget-conscious diners",
      signatureBowls: ["Classic Tonkotsu", "Spicy Miso", "Shoyu Ramen", "Veggie Options"],
    },
  ],
  fusionRamen: [
    {
      name: "Easy Tyger",
      neighborhood: "Brady Street",
      style: "Asian Gastropub",
      priceRange: "$$",
      address: "1230 E Brady St, Milwaukee, WI 53202",
      description: "Easy Tyger blends Asian and American cuisines in a fun, casual atmosphere on Milwaukee's iconic Brady Street. Their tonkotsu ramen features richly flavored broth paired with perfectly textured noodles, while the pork belly bao showcases tender meat in soft bao dough. The restaurant offers gluten-free ramen options and an impressive craft cocktail program.",
      mustTry: "Tonkotsu Ramen, Pork Belly Bao, Craft Cocktails",
      insiderTip: "The bar features a wide array of spirits and unique craft cocktails that pair excellently with their ramen. Great date night spot.",
      bestFor: "Date nights, Brady Street crowds, cocktail lovers, fusion food fans",
      signatureBowls: ["Tonkotsu Ramen", "Spicy Ramen", "Gluten-Free Options"],
    },
    {
      name: "Kin by Rice n Roll",
      neighborhood: "Wauwatosa",
      style: "Modern Thai-Japanese",
      priceRange: "$$",
      address: "7484 W State St, Wauwatosa, WI 53213",
      description: "Kin is a small, family-run restaurant passionate about homemade cooking, serving varieties of Asian cuisine with a modernized look and authentic taste from Thailand and Japan. Chef Tony and Chef JJ spent hours developing their ramen recipes, working on each broth for more than eight hours. Their tonkotsu features creamy bone broth with braised pork belly, fresh egg noodles, nori, wood ear mushrooms, and soft-boiled egg.",
      mustTry: "Tonkotsu Ramen, Pad Thai, Fresh Sushi Rolls",
      insiderTip: "The name 'KIN' means 'eating' in Thai, 'family relationship' in English, and 'gold' in Japanese—reflecting their multi-cultural approach.",
      bestFor: "Tosa Village dining, Thai-Japanese fusion, family meals",
      signatureBowls: ["Tonkotsu Ramen", "Spicy Miso", "Veggie Ramen"],
    },
    {
      name: "Screaming Tuna Mequon (Lil' Tuna)",
      neighborhood: "Mequon",
      style: "Upscale Ramen & Sushi",
      priceRange: "$$$",
      address: "6300 W Mequon Rd, Mequon, WI 53092 (Mequon Public Market)",
      description: "The Lil' Tuna is the long-awaited baby sister of Screaming Tuna Milwaukee, located inside the Mequon Public Market. This concept from the team behind Milwaukee's #1 voted sushi restaurant serves ramen, wontons, sushi, and creative cocktails. The market setting allows for a more casual experience while maintaining the quality standards that made the original Screaming Tuna famous.",
      mustTry: "House Ramen, Signature Sushi Rolls, Wontons",
      insiderTip: "Visit during weekday lunch for shorter waits. The market setting means you can explore other vendors before or after your meal.",
      bestFor: "North Shore diners, market explorers, sushi-ramen combos",
      signatureBowls: ["House Ramen", "Tonkotsu", "Seasonal Specials"],
    },
    {
      name: "Taichi Bubble Tea and Ramen",
      neighborhood: "East Side",
      style: "Casual Ramen & Boba",
      priceRange: "$",
      address: "2028 E North Ave, Milwaukee, WI 53202",
      description: "Taichi opened in July 2024 as Wisconsin's first location of this Rochester, New York-based franchise, offering seven ramen varieties alongside an extensive bubble tea menu exceeding 50 options. The casual spot combines warm ramen bowls with freshly prepared poke bowls and creamy milk teas, making it perfect for a quick lunch or afternoon pick-me-up.",
      mustTry: "Classic Ramen, Signature Bubble Tea, Poke Bowl",
      insiderTip: "Free parking available. Try pairing your ramen with one of their 50+ bubble tea options for the full experience.",
      bestFor: "Students, bubble tea lovers, quick lunch, casual dining",
      signatureBowls: ["Tonkotsu Ramen", "Miso Ramen", "Spicy Ramen", "Veggie Ramen"],
    },
  ],
  casualRamen: [
    {
      name: "Hue Vietnamese Restaurant",
      neighborhood: "Bay View",
      style: "Vietnamese Noodles & Pho",
      priceRange: "$$",
      address: "2699 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Since 2010, Hue Vietnamese Restaurant has been delivering dishes that capture the fresh, nuanced fare of Hue, a city in Central Vietnam. While not traditional Japanese ramen, their big bowls of delicious pho and Vietnamese noodle soups offer a similar comforting experience. The restaurant moved into a beautiful new space and continues to serve some of Bay View's best spicy crab rangoons alongside their signature noodle dishes.",
      mustTry: "Beef and Meatball Pho, Spicy Crab Rangoons, Bun Bo Hue",
      insiderTip: "Their Friday Fish Fry is a unique Vietnamese-Wisconsin fusion worth trying. The new space is bright and modern.",
      bestFor: "Vietnamese food lovers, pho enthusiasts, Bay View crowds",
      signatureBowls: ["Beef Pho", "Chicken Pho", "Bun Bo Hue", "Vegetable Pho"],
    },
    {
      name: "Asian Fusion",
      neighborhood: "East Side",
      style: "Pan-Asian Noodles",
      priceRange: "$",
      address: "1609 E North Ave, Milwaukee, WI 53202",
      description: "Asian Fusion offers an accessible entry point to Asian noodle dishes with their diverse menu featuring Chinese dishes, seafood, salads, and steaming noodle soups. The casual atmosphere and reasonable prices make it a neighborhood favorite for students and families alike. Their ramen and noodle soup options provide comfort without breaking the bank.",
      mustTry: "House Noodle Soup, General Tso's Chicken, Fried Rice",
      insiderTip: "Great for takeout and delivery. The portions are generous and prices are very reasonable for the quality.",
      bestFor: "Budget dining, students, quick takeout, family meals",
      signatureBowls: ["Ramen", "Wonton Soup", "Noodle Soups"],
    },
    {
      name: "Fusion Poke",
      neighborhood: "East Side",
      style: "Ramen, Poke & Boba",
      priceRange: "$",
      address: "2500 N Oakland Ave, Milwaukee, WI 53211",
      description: "Located at the corner of North Avenue and Oakland Avenue near Back Bay Park, Fusion Poke serves poke bowls, ramen, smoothies, shaved ice, and boba tea. The bright, casual space is perfect for a quick, healthy meal. Their ramen options complement their signature poke bowls, offering a lighter take on the classic Japanese comfort food.",
      mustTry: "Build-Your-Own Poke Bowl, House Ramen, Boba Tea",
      insiderTip: "Perfect spot after a walk around the nearby UWM campus or Back Bay Park. The outdoor seating is great in warm weather.",
      bestFor: "Health-conscious diners, students, poke lovers, quick lunch",
      signatureBowls: ["House Ramen", "Miso Ramen", "Veggie Options"],
    },
  ],
};

const faqs = [
  {
    question: "What's the best ramen restaurant in Milwaukee?",
    answer: "Kawa Ramen & Sushi is consistently ranked among Milwaukee's best, with tonkotsu broth made from Berkshire pork bones simmered for 12+ hours. Momo Mee in the Harbor District and Hungry Sumo in Bay View are also top contenders for authentic Japanese ramen experience.",
  },
  {
    question: "Where can I find authentic Japanese ramen in Milwaukee?",
    answer: "For the most authentic experience, try Kawa Ramen & Sushi (East Side or 3rd Street Market Hall), Hungry Sumo in Bay View, or Tanpopo Ramen & Sushi in Hales Corners. These spots focus on traditional Japanese techniques with long-simmered broths and quality ingredients.",
  },
  {
    question: "What's the best late-night ramen in Milwaukee?",
    answer: "Queen of Ramen near the entertainment district stays open until 1 AM daily, making it perfect for post-event cravings. Easy Tyger on Brady Street also offers later hours on weekends with their Asian gastropub menu.",
  },
  {
    question: "Where can I get vegetarian or vegan ramen in Milwaukee?",
    answer: "Artisan Ramen downtown offers an impressive array of vegan and vegetarian ramen options with in-house made noodles. Momo Mee, Kin by Rice n Roll, and most other ramen spots also offer vegetable-based broths and meat-free toppings.",
  },
  {
    question: "Which Milwaukee ramen restaurant is best for families?",
    answer: "Tanpopo Ramen & Sushi in Hales Corners is uniquely family-friendly with its drive-thru service and welcoming atmosphere. Osaka Ramen & Hibachi locations in Brookfield and Pewaukee also offer casual, family-friendly environments with diverse menus.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "14 Best Ramen Restaurants in Milwaukee: From Authentic Tonkotsu to Creative Fusion [2026]",
    "description": "Discover Milwaukee's best ramen restaurants including Kawa Ramen & Sushi, Momo Mee, Artisan Ramen, and more. Authentic Japanese noodles, fusion bowls, and late-night spots.",
    "image": "https://www.discover-milwaukee.com/images/best-ramen-milwaukee.jpg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee", "logo": { "@type": "ImageObject", "url": "https://www.discover-milwaukee.com/logo.png" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-ramen-milwaukee",
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Best Ramen Milwaukee", "item": "https://www.discover-milwaukee.com/best-ramen-milwaukee" },
    ],
  },
};

export default function BestRamenMilwaukee() {
  const RamenCard = ({ spot }) => (
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
      {spot.signatureBowls && (
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>SIGNATURE BOWLS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.signatureBowls.join(", ")}</p>
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
        <title>14 Best Ramen in Milwaukee: Japanese Noodles, Tonkotsu & More [2026]</title>
        <meta name="description" content="Discover Milwaukee's best ramen restaurants from authentic tonkotsu at Kawa Ramen & Sushi to creative fusion bowls. Japanese noodles, late-night spots, and family-friendly options." />
        <meta name="keywords" content="best ramen Milwaukee, ramen restaurants Milwaukee, Japanese noodles Milwaukee, tonkotsu ramen Milwaukee, Kawa Ramen, Momo Mee, Artisan Ramen, Milwaukee noodle soup, Asian food Milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-ramen-milwaukee" />

        <meta property="og:title" content="14 Best Ramen in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From authentic tonkotsu at Kawa Ramen to creative fusion at Easy Tyger, find Milwaukee's best ramen restaurants." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-ramen-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-ramen-milwaukee.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="14 Best Ramen in Milwaukee [2026]" />
        <meta name="twitter:description" content="Discover Milwaukee's best ramen restaurants - from authentic Japanese tonkotsu to creative fusion bowls and late-night spots." />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-ramen-milwaukee.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>JAPANESE CUISINE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              14 Best Ramen in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From 12-hour tonkotsu broths to creative fusion bowls and late-night options, discover Milwaukee's best ramen restaurants.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#authentic" style={{ color: c.green2, fontSize: "14px" }}>Authentic Japanese</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#fusion" style={{ color: c.green2, fontSize: "14px" }}>Fusion Ramen</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#casual" style={{ color: c.green2, fontSize: "14px" }}>Casual & Noodles</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The ramen that puts Milwaukee on the map.
            </p>
            {ramenSpots.bestOverall.map((spot, i) => <RamenCard key={i} spot={spot} />)}
          </section>

          <section id="authentic" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Authentic Japanese Ramen</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Traditional techniques and time-honored recipes.
            </p>
            {ramenSpots.authenticRamen.map((spot, i) => <RamenCard key={i} spot={spot} />)}
          </section>

          <section id="fusion" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Fusion Ramen</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Creative takes on classic Japanese noodles.
            </p>
            {ramenSpots.fusionRamen.map((spot, i) => <RamenCard key={i} spot={spot} />)}
          </section>

          <section id="casual" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Casual Ramen & Noodles</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Approachable spots for everyday noodle cravings.
            </p>
            {ramenSpots.casualRamen.map((spot, i) => <RamenCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-sushi-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Sushi →
              </Link>
              <Link href="/best-thai-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Thai Food →
              </Link>
              <Link href="/best-asian-food-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Asian Cuisine →
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
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurant openings, food events, and the best of Milwaukee dining.</p>
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
