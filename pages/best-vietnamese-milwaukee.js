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

const vietnameseSpots = {
  bestOverall: [
    {
      name: "Pho Viet",
      neighborhood: "Greenfield",
      style: "Classic Vietnamese Pho House",
      priceRange: "$",
      address: "5475 S 27th St, Greenfield, WI 53221",
      description: "Pho Viet has earned legendary status among Milwaukee pho lovers for its perfectly crafted broth that simmers for hours to achieve deep, complex flavors. The restaurant is known for scorching hot bowls with extremely fresh toppings and a perfected recipe that keeps locals coming back. This is the gold standard for traditional Vietnamese pho in the Milwaukee area.",
      mustTry: "Pho Dac Biet (Special Combo Pho), Bun Bo Hue",
      insiderTip: "Come early on weekends as the restaurant fills up quickly. The broth quality is worth the wait.",
      bestFor: "Pho purists, authentic Vietnamese experience, family dining",
      signatureDishes: ["Pho Dac Biet", "Bun Bo Hue", "Banh Mi", "Vietnamese Iced Coffee"],
    },
    {
      name: "Hue Vietnamese Restaurant",
      neighborhood: "Bay View",
      style: "Modern Vietnamese Kitchen",
      priceRange: "$$",
      address: "2699 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Hue brings a modern touch to Vietnamese classics in the heart of Bay View. Known for big bowls of fragrant pho, spicy crab rangoons, and vegetable dishes like mi xao with sweet and slightly spicy noodles. The restaurant also operates an Asian Kitchen Food Truck for festivals and events, spreading Vietnamese flavors throughout Milwaukee.",
      mustTry: "Pho Tai, Spicy Crab Rangoons, Mi Xao",
      insiderTip: "Their Friday Fish Fry is a unique Vietnamese-Wisconsin fusion worth trying. Great for vegetarians too.",
      bestFor: "Bay View dining, modern Vietnamese, Friday Fish Fry fusion",
      signatureDishes: ["Pho Tai", "Mi Xao", "Crab Rangoons", "Vermicelli Bowls"],
    },
    {
      name: "Xankia",
      neighborhood: "Downtown",
      style: "Vietnamese-American Fusion",
      priceRange: "$",
      address: "222 W Wells St, Milwaukee, WI 53203",
      description: "Xankia has been serving banh mi in Milwaukee since 2010 and relocated to downtown in a sleek new space. Everything is made from scratch with fresh ingredients, from their aromatic pho noodle soup to their famous Vietnamese sandwiches. The restaurant represents the best of Vietnamese-American cuisine in a convenient downtown location.",
      mustTry: "Banh Mi Dac Biet, Pho Noodle Soup, Boba Tea",
      insiderTip: "Open late on Thursday through Saturday until midnight. Perfect for post-event downtown dining.",
      bestFor: "Downtown lunch, banh mi lovers, late-night Vietnamese",
      signatureDishes: ["Banh Mi Varieties", "Pho", "Boba Tea", "Spring Rolls"],
    },
    {
      name: "Saigon Baguette",
      neighborhood: "East Side",
      style: "Fast-Casual Vietnamese",
      priceRange: "$",
      address: "2338 N Farwell Ave, Milwaukee, WI 53211",
      description: "Saigon Baguette opened in spring 2025 and quickly became an East Side favorite for fresh, vibrant Vietnamese cuisine. The fast-casual format serves crispy banh mi on perfectly toasted baguettes, savory pho, creamy Vietnamese coffee, and refreshing boba drinks. Over a dozen pho varieties ensure something for everyone.",
      mustTry: "Classic Banh Mi, Pho Bo, Vietnamese Iced Coffee",
      insiderTip: "Counter service with meals in to-go containers makes this perfect for quick lunch or takeout dinner.",
      bestFor: "Quick lunch, East Side convenience, banh mi and boba",
      signatureDishes: ["Banh Mi", "Pho Varieties", "Clay Pot Rice", "Bubble Tea"],
    },
  ],
  bestPho: [
    {
      name: "Pho Spot MKE",
      neighborhood: "Downtown",
      style: "Authentic 10-Hour Broth",
      priceRange: "$$",
      address: "275 W Wisconsin Ave, Milwaukee, WI 53203 (3rd Street Market Hall)",
      description: "Owners Shim and Mauly founded Pho Spot MKE to share authentic Vietnamese pho with Milwaukee. Their signature beef pho features a 10-hour broth cooked low and slow to extract flavors from beef bones, meats, and five-spice. Hand-rolled egg rolls and the loaded dac biet banh mi round out a menu that celebrates Vietnamese tradition.",
      mustTry: "Beef Pho with Oxtail, Dac Biet Banh Mi, Fresh Spring Rolls",
      insiderTip: "Located on the far western side of 3rd Street Market Hall. The oxtail upgrade transforms the pho experience.",
      bestFor: "Downtown pho, market hall dining, authentic broth",
      signatureDishes: ["Beef Pho with Brisket", "Oxtail Pho", "Dac Biet Banh Mi", "Crispy Egg Rolls"],
    },
    {
      name: "Pho Cali",
      neighborhood: "South Side",
      style: "Family-Owned Classic",
      priceRange: "$",
      address: "4756 S 27th St, Milwaukee, WI 53221",
      description: "Pho Cali is Milwaukee's beloved family-owned authentic Vietnamese restaurant known for comforting bowls of noodles and flavorful grilled plates. The restaurant offers great value with consistent quality and generous portions. Open late until 10:30 PM, it's perfect for satisfying late-night pho cravings.",
      mustTry: "Pho Dac Biet, Grilled Pork Vermicelli, Broken Rice Plates",
      insiderTip: "Large portions mean you can share appetizers. The grilled pork is exceptionally well-seasoned.",
      bestFor: "Late night pho, family meals, generous portions",
      signatureDishes: ["Pho Dac Biet", "Com Tam", "Bun Thit Nuong", "Vietnamese Coffee"],
    },
    {
      name: "Pho Ever",
      neighborhood: "Hales Corners",
      style: "The Bible of Pho",
      priceRange: "$",
      address: "5740 S 108th St, Hales Corners, WI 53130",
      description: "Pho Ever has earned a cult following with what reviewers call 'the Bible of pho' - offerings described as the best pho in the realm. The restaurant welcomes both reservations and walk-ins, serving meticulously crafted bowls in a welcoming atmosphere. Worth the drive to Hales Corners for serious pho devotees.",
      mustTry: "House Special Pho, Rare Beef Pho, Spring Rolls",
      insiderTip: "Closed Tuesdays. Weekend brunch crowds can be substantial, so arrive early or call ahead.",
      bestFor: "Pho pilgrimages, suburban Vietnamese, dedicated pho experience",
      signatureDishes: ["Special Combo Pho", "Rare Beef Pho", "Chicken Pho", "Appetizer Platters"],
    },
    {
      name: "Vientiane Noodle Shop",
      neighborhood: "Silver City",
      style: "Laotian-Vietnamese Fusion",
      priceRange: "$",
      address: "3422 W National Ave, Milwaukee, WI 53215",
      description: "For two decades, Vientiane Noodle Shop has served the rich and diverse flavors of Laotian and Vietnamese cuisine to the Silver City community. Their pho and noodle dishes are meticulously prepared with time-honored traditional recipes and the freshest ingredients. The Laotian specialty bee boun is a must-try alongside their excellent pho.",
      mustTry: "Pho Bo, Bee Boun (Laotian specialty), Pad Thai",
      insiderTip: "This is technically a Laotian restaurant but their pho rivals dedicated Vietnamese spots. Closed Mondays.",
      bestFor: "Laotian-Vietnamese fusion, Silver City dining, noodle variety",
      signatureDishes: ["Pho", "Bee Boun", "Pad Thai", "Laotian Specialties"],
    },
    {
      name: "Pho Saigon",
      neighborhood: "West Allis",
      style: "Consistent Excellence",
      priceRange: "$",
      address: "10534 W Greenfield Ave, West Allis, WI 53214",
      description: "Pho Saigon has built a loyal following in West Allis with consistently excellent Vietnamese cuisine. The restaurant delivers reliable, comforting pho with rich broth and quality ingredients. A neighborhood staple that proves great Vietnamese food exists throughout the Milwaukee metro area.",
      mustTry: "Pho Tai Nam, Banh Mi, Vietnamese Iced Coffee",
      insiderTip: "Open Monday through Saturday until 9 PM. Less crowded than downtown options with equal quality.",
      bestFor: "West Allis dining, consistent quality, neighborhood gem",
      signatureDishes: ["Pho Tai Nam", "Banh Mi", "Vermicelli Bowls", "Spring Rolls"],
    },
  ],
  banhMiShops: [
    {
      name: "Xankia",
      neighborhood: "Downtown",
      style: "OG Milwaukee Banh Mi",
      priceRange: "$",
      address: "222 W Wells St, Milwaukee, WI 53203",
      description: "Xankia has been the banh mi authority in Milwaukee since 2010, originally operating out of Pacific Produce before moving to their downtown location. Their Vietnamese sandwiches feature perfectly toasted baguettes, fresh vegetables, and flavorful proteins. The balance of flavors and textures defines what banh mi should be.",
      mustTry: "Banh Mi Dac Biet, Grilled Pork Banh Mi, Lemongrass Chicken Banh Mi",
      insiderTip: "The dac biet (special) with multiple meats is the way to go for first-timers.",
      bestFor: "Classic banh mi, downtown lunch, Vietnamese sandwich perfection",
      signatureDishes: ["Banh Mi Dac Biet", "Grilled Pork Banh Mi", "Tofu Banh Mi", "Pho"],
    },
    {
      name: "Rollup MKE",
      neighborhood: "Bay View",
      style: "Build-Your-Own Vietnamese",
      priceRange: "$",
      address: "2144 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Rollup MKE brings a fresh, customizable approach to Vietnamese cuisine in Bay View. Build your own banh mi, spring rolls, noodle bowls, and salads with your choice of proteins and fresh ingredients. The concept is perfect for diners who want to craft their perfect Vietnamese meal.",
      mustTry: "Custom Banh Mi, Fresh Spring Rolls, Noodle Bowls",
      insiderTip: "Upgrade to steak or shrimp on your banh mi for just a dollar more. The spring rolls are exceptionally fresh.",
      bestFor: "Customizable Vietnamese, Bay View lunch, healthy options",
      signatureDishes: ["Build-Your-Own Banh Mi", "Fresh Spring Rolls", "Vermicelli Bowls", "Vietnamese Salads"],
    },
    {
      name: "Pho Spot MKE",
      neighborhood: "Downtown",
      style: "Loaded Banh Mi",
      priceRange: "$$",
      address: "275 W Wisconsin Ave, Milwaukee, WI 53203 (3rd Street Market Hall)",
      description: "Beyond their famous pho, Pho Spot MKE serves an exceptional dac biet banh mi loaded with pork belly, head cheese, Vietnamese ham, chicken liver pate, mayo, cilantro, cucumber, jalapenos, pickled carrots and daikon, and Maggi sauce. It's a fully-loaded Vietnamese sandwich experience.",
      mustTry: "Dac Biet Banh Mi, Crispy Egg Rolls, Pho",
      insiderTip: "The banh mi is massive - consider sharing if you're also getting pho.",
      bestFor: "Loaded banh mi, market hall convenience, complete Vietnamese experience",
      signatureDishes: ["Dac Biet Banh Mi", "Pork Belly Banh Mi", "Pho", "Spring Rolls"],
    },
    {
      name: "Saigon Baguette",
      neighborhood: "East Side",
      style: "Fresh Baguette Specialists",
      priceRange: "$",
      address: "2338 N Farwell Ave, Milwaukee, WI 53211",
      description: "Saigon Baguette has quickly earned recognition for having the best banh mi in the greater Milwaukee area. Their secret is the perfectly toasted baguette with a perfect balance of flavors and fresh ingredients. The fast-casual format means you can grab excellent Vietnamese sandwiches quickly.",
      mustTry: "Classic Banh Mi, Lemongrass Chicken Banh Mi, Thai Tea",
      insiderTip: "Their baguettes are toasted to perfection - crispy outside, soft inside. Don't miss the Vietnamese coffee.",
      bestFor: "East Side lunch, quick banh mi, coffee and boba",
      signatureDishes: ["Classic Banh Mi", "Grilled Pork Banh Mi", "Vietnamese Coffee", "Bubble Tea"],
    },
  ],
  fullMenu: [
    {
      name: "Mekong Cafe",
      neighborhood: "Washington Heights",
      style: "Thai-Laotian-Vietnamese Fusion",
      priceRange: "$$",
      address: "5930 W North Ave, Milwaukee, WI 53208",
      description: "Mekong Cafe serves an extensive menu spanning Thai, Laotian, and Vietnamese cuisines, making it perfect for groups with different cravings. The restaurant includes a small grocery store section where you can pick up Asian ingredients. Authentic preparations and generous portions have made it a neighborhood institution.",
      mustTry: "Pho, Pad Thai, Laotian Specialties, Curry Dishes",
      insiderTip: "Browse the grocery section for hard-to-find Vietnamese ingredients and snacks.",
      bestFor: "Group dining, cuisine variety, Asian grocery shopping",
      signatureDishes: ["Pho", "Pad Thai", "Laotian Dishes", "Thai Curries"],
    },
    {
      name: "BaoBao Cuisine",
      neighborhood: "South Side",
      style: "Authentic Vietnamese Comfort",
      priceRange: "$",
      address: "4624 S 27th St, Milwaukee, WI 53221",
      description: "BaoBao Cuisine opened in April 2024 and quickly became a South Side favorite for authentic Vietnamese comfort food. The restaurant offers great food in a cozy atmosphere with quick service and friendly staff. From pho to vermicelli bowls to specialty plates, the menu covers Vietnamese classics.",
      mustTry: "Pho, Banh Mi, Vermicelli Bowls, Vietnamese Coffee",
      insiderTip: "Cozy atmosphere makes this great for a relaxed meal. Service is quick despite the homestyle cooking.",
      bestFor: "Comfort food, South Side dining, friendly atmosphere",
      signatureDishes: ["Pho", "Banh Mi", "Vermicelli Bowls", "Rice Plates"],
    },
    {
      name: "Pho 414",
      neighborhood: "Hmong Town",
      style: "Hmong-Vietnamese Hidden Gem",
      priceRange: "$",
      address: "8340 W Appleton Ave, Milwaukee, WI 53218",
      description: "Located in Milwaukee's vibrant Hmong Town neighborhood, Pho 414 offers authentic Hmong and Vietnamese dishes in a unique cultural setting. The menu features traditional pho alongside crispy pork belly, fried rice, and Hmong specialties. A true hidden gem with spicy dishes that pack serious heat.",
      mustTry: "Pho, Crispy Pork Belly, Fried Rice, Spicy Specialties",
      insiderTip: "This is a true hidden gem - the cafeteria-style setting belies incredible food quality. Spice levels are authentic.",
      bestFor: "Hidden gem seekers, Hmong cuisine, spicy food lovers",
      signatureDishes: ["Pho", "Crispy Pork Belly", "Hmong Dishes", "Asian Specialties"],
    },
    {
      name: "Pho L'amour Cafe",
      neighborhood: "Brookfield",
      style: "Upscale Vietnamese",
      priceRange: "$$",
      address: "16960 W Greenfield Ave Suite 2, Brookfield, WI 53005",
      description: "Pho L'amour Cafe brings elevated Vietnamese cuisine to the western suburbs. The restaurant is known for meticulous attention to detail in both food preparation and presentation. A full menu of Vietnamese classics is executed with care, making it worth the drive for suburban Milwaukee residents.",
      mustTry: "Pho Dac Biet, Spring Rolls, Vietnamese Coffee",
      insiderTip: "Great for those in the western suburbs who want quality Vietnamese without the drive downtown.",
      bestFor: "Suburban dining, elevated Vietnamese, full menu variety",
      signatureDishes: ["Pho Varieties", "Spring Rolls", "Vermicelli Bowls", "Vietnamese Specialties"],
    },
  ],
};

const faqs = [
  {
    question: "What's the best pho in Milwaukee?",
    answer: "Pho Viet in Greenfield is consistently ranked #1 for their perfectly crafted broth and fresh toppings. Pho Spot MKE at 3rd Street Market Hall is excellent for downtown, with their 10-hour broth. Pho Ever in Hales Corners has earned cult status as 'the Bible of pho.'",
  },
  {
    question: "Where can I find the best banh mi in Milwaukee?",
    answer: "Xankia downtown has been serving Milwaukee's best banh mi since 2010 with perfectly balanced flavors. Saigon Baguette on the East Side is known for their perfectly toasted baguettes. Pho Spot MKE offers a loaded dac biet banh mi that's a meal in itself.",
  },
  {
    question: "What Vietnamese restaurants are open late in Milwaukee?",
    answer: "Xankia downtown is open until midnight Thursday through Saturday. Pho Cali on S 27th Street stays open until 10:30 PM. For late-night pho cravings, these are your best options in the Milwaukee area.",
  },
  {
    question: "Where is Milwaukee's Vietnamese restaurant district?",
    answer: "The S 27th Street corridor in the South Side and Greenfield areas has the highest concentration of Vietnamese restaurants, including Pho Viet, Pho Cali, and BaoBao Cuisine. Downtown also has excellent options like Xankia and Pho Spot MKE at 3rd Street Market Hall.",
  },
  {
    question: "Are there vegetarian options at Milwaukee Vietnamese restaurants?",
    answer: "Yes! Most Milwaukee Vietnamese restaurants offer vegetarian pho with vegetable broth, tofu banh mi, and fresh spring rolls with vegetables. Hue in Bay View and Rollup MKE in Bay View are particularly good for vegetarian Vietnamese options.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "15 Best Vietnamese Restaurants in Milwaukee: Pho, Banh Mi & More [2026]",
    "description": "Discover Milwaukee's best Vietnamese food including top-rated pho at Pho Viet, authentic banh mi at Xankia, and hidden gems throughout the city.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-vietnamese-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Vietnamese in Milwaukee", "item": "https://www.discover-milwaukee.com/best-vietnamese-milwaukee" }
    ]
  }
};

export default function BestVietnameseMilwaukee() {
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
        <title>15 Best Vietnamese Restaurants in Milwaukee: Pho, Banh Mi & More [2026]</title>
        <meta name="description" content="Discover Milwaukee's best Vietnamese food from legendary pho at Pho Viet to authentic banh mi at Xankia. Complete guide to pho, banh mi, and Vietnamese restaurants across the city." />
        <meta name="keywords" content="best vietnamese milwaukee, pho milwaukee, banh mi milwaukee, vietnamese restaurants milwaukee, vietnamese food milwaukee, best pho milwaukee, milwaukee pho restaurants, vietnamese cuisine milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-vietnamese-milwaukee" />

        <meta property="og:title" content="15 Best Vietnamese Restaurants in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From legendary pho at Pho Viet to perfect banh mi at Xankia, find Milwaukee's best Vietnamese restaurants." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-vietnamese-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-best-vietnamese.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-best-vietnamese.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>VIETNAMESE CUISINE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              15 Best Vietnamese Restaurants in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From steaming bowls of pho with hours-simmered broth to crispy banh mi on perfectly toasted baguettes. Your guide to authentic Vietnamese food in MKE.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#best-pho" style={{ color: c.green2, fontSize: "14px" }}>Best Pho</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#banh-mi" style={{ color: c.green2, fontSize: "14px" }}>Banh Mi Shops</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#full-menu" style={{ color: c.green2, fontSize: "14px" }}>Full Menu</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Vietnamese Restaurants in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Pho Viet, Hue Vietnamese Restaurant, Xankia, Saigon Baguette, Pho Spot MKE</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Vietnamese</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The restaurants that define Milwaukee's Vietnamese food scene with exceptional quality across the board.
            </p>
            {vietnameseSpots.bestOverall.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="best-pho" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Pho in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Where to find the most soul-warming bowls in the city, from 10-hour broths to family recipes perfected over decades.
            </p>
            {vietnameseSpots.bestPho.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="banh-mi" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Banh Mi Shops</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's top Vietnamese sandwich destinations, from OG spots to newcomers with perfectly toasted baguettes.
            </p>
            {vietnameseSpots.banhMiShops.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="full-menu" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Full Menu Vietnamese</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Restaurants with extensive Vietnamese menus, fusion options, and cuisine variety for groups with different cravings.
            </p>
            {vietnameseSpots.fullMenu.map((spot, i) => <SpotCard key={i} spot={spot} />)}
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
              <Link href="/best-ramen-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Ramen →
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
