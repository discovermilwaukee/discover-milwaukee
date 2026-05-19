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

const farmersMarkets = {
  bestOverall: [
    {
      name: "Fondy Farmers Market",
      neighborhood: "Lindsay Heights",
      type: "Traditional Outdoor Market",
      address: "2200 W. Fond du Lac Avenue, Milwaukee, WI 53206",
      description: "Milwaukee's oldest and most culturally diverse farmers market, Fondy has served the community since 1916. Located in the heart of Lindsay Heights, this market brings together Hmong family farmers, African American growers, and Latino vendors creating an authentic multicultural marketplace. The market is renowned for its incredibly fresh produce at affordable prices and its strong commitment to food accessibility.",
      highlights: ["100+ years of history", "Most diverse vendor mix in Milwaukee", "Accepts SNAP/EBT, WIC, Senior FMNP"],
      insiderTip: "Come early Saturday morning for the best selection of heirloom tomatoes and Asian vegetables. The Hmong farmers often sell out by noon.",
      bestFor: "Authentic multicultural experience, budget-friendly produce, historic market atmosphere",
      schedule: "May 10-June 28: Saturdays 9 AM-12 PM | July 5-Oct 30: Thu, Sat, Sun 7 AM-2 PM | Nov 1-15: Saturdays 9 AM-12 PM",
      season: "May through November",
    },
    {
      name: "West Allis Farmers Market",
      neighborhood: "West Allis",
      type: "Large Regional Market",
      address: "6501 W. National Avenue, West Allis, WI 53214",
      description: "One of the largest farmers markets in Wisconsin, the West Allis Farmers Market has been a beloved institution since 1919. With over 100 vendor stalls spread across a massive outdoor space, this market offers everything from fresh produce and meats to flowers, baked goods, and artisan crafts. The three-day-per-week schedule makes it incredibly accessible.",
      highlights: ["100+ vendor stalls", "Three days per week", "Over 100 years of operation"],
      insiderTip: "Thursday afternoons are less crowded than Saturday. Look for the cheese curds from local dairy farms—they're squeaky fresh.",
      bestFor: "One-stop shopping, large selection, flexible schedule",
      schedule: "Tuesday 12-5 PM, Thursday 12-5 PM, Saturday 1-5 PM",
      season: "May through November",
    },
    {
      name: "Cathedral Square Market (East Town Market)",
      neighborhood: "Downtown / East Town",
      type: "Urban Outdoor Market",
      address: "825 N. Jefferson Street, Milwaukee, WI 53202",
      description: "Set in beautiful Cathedral Square Park in the heart of downtown Milwaukee, this market combines farm-fresh produce with an urban festival atmosphere. Over 80 Wisconsin farmers, craftsmen, bakers, and chefs gather each Sunday to offer seasonal, fresh, and unique items. Live entertainment and prepared food options make this a destination, not just a shopping trip.",
      highlights: ["80+ Wisconsin vendors", "Live entertainment weekly", "Heart of downtown location"],
      insiderTip: "Arrive early for the best pastry selection from local bakers. Grab a coffee and enjoy the live music while you shop.",
      bestFor: "Downtown shoppers, tourists, combining market with city exploration",
      schedule: "Sundays 9 AM-1 PM",
      season: "June through September",
    },
    {
      name: "Oak Creek Farmers Market",
      neighborhood: "Oak Creek",
      type: "Modern Community Market",
      address: "361 W. Town Square Way, Oak Creek, WI 53154 (Drexel Town Square)",
      description: "One of the fastest-growing markets in the Milwaukee area, Oak Creek Farmers Market features over 100 rotating vendors in the beautiful Drexel Town Square setting. The market has expanded its community programming to include FoodShare programs and partnerships with local organizations to increase food accessibility.",
      highlights: ["100+ rotating vendors", "Modern town square setting", "Strong community programming"],
      insiderTip: "The prepared food vendors here are exceptional. Come hungry and make a morning of it exploring different cuisines.",
      bestFor: "Families, south suburbs, combination shopping and dining experience",
      schedule: "Saturdays 9 AM-1 PM (except July 4)",
      season: "May through October",
    },
  ],
  weekendMarkets: [
    {
      name: "Shorewood Farmers Market",
      neighborhood: "Shorewood",
      type: "Community Market with Winter Season",
      address: "Estabrook Park, 4100 Estabrook Parkway, Shorewood, WI 53211",
      description: "A beloved North Shore institution, Shorewood Farmers Market operates in beautiful Estabrook Park during summer and moves indoors to The Atrium for a winter market. The market features carefully curated vendors offering premium produce, artisan foods, and locally made goods in a picturesque park setting.",
      highlights: ["Both summer and winter markets", "Premium vendor curation", "Beautiful park setting"],
      insiderTip: "The winter market at The Atrium (2107 E. Capitol Drive) runs January through March and is perfect for cabin fever season.",
      bestFor: "North Shore residents, year-round market access, quality over quantity",
      schedule: "Summer: Sundays 9:30 AM-1 PM (June-October) | Winter: Sundays 9 AM-1 PM (January-March)",
      season: "Year-round (summer outdoors, winter indoors)",
    },
    {
      name: "Riverwest Gardeners Market",
      neighborhood: "Riverwest",
      type: "Community Garden Market",
      address: "2700 N. Pierce Street, Milwaukee, WI 53212",
      description: "Born from the neighborhood's strong gardening culture, Riverwest Gardeners Market showcases hyper-local produce from backyard gardeners alongside professional farmers. The market has a distinctly artistic, community-oriented vibe that reflects Riverwest's creative spirit. Winter markets continue at Amorphic Brewery.",
      highlights: ["Hyper-local gardener vendors", "Artistic neighborhood vibe", "Winter market at local brewery"],
      insiderTip: "Look for unusual heirloom varieties that home gardeners grow but commercial farms don't. The tomato selection in August is extraordinary.",
      bestFor: "Supporting neighborhood growers, unique varieties, Riverwest community connection",
      schedule: "Sundays 10 AM-2 PM (no market July 5)",
      season: "June through October (winter market at Amorphic Brewery)",
    },
    {
      name: "Greenfield Farmers Market",
      neighborhood: "Greenfield",
      type: "Sunday Community Market",
      address: "Konkel Park, 5151 W. Layton Avenue, Greenfield, WI 53220",
      description: "The Greenfield Farmers Market has expanded significantly for 2026 with more vendors, live music, and special programming including a Makers Market on the first Sunday of each month featuring artisan vendors. The park setting provides ample space for families to spread out and enjoy the market experience.",
      highlights: ["Expanded vendor lineup for 2026", "Monthly Makers Market", "Live music weekly"],
      insiderTip: "Plan your visit for the first Sunday of the month to catch both the farmers market and the Makers Market with 20+ artisan vendors.",
      bestFor: "Southwest suburb families, artisan shopping, Sunday morning outings",
      schedule: "Sundays 10 AM-2 PM",
      season: "May through October",
    },
    {
      name: "Fox Point Farmers Market",
      neighborhood: "Fox Point",
      type: "North Shore Premium Market",
      address: "7330 N. Santa Monica Boulevard, Fox Point, WI 53217",
      description: "A charming North Shore market featuring Wisconsin farmers and food producers in an upscale village setting. The market offers weekly live music, plant diagnostics, and monthly story time for children. Leashed dogs are welcome, making it perfect for a Saturday morning family outing.",
      highlights: ["Weekly live music 10 AM-12 PM", "Plant diagnostics available", "Dog-friendly"],
      insiderTip: "The honey vendors here source from local North Shore apiaries. Try the wildflower varieties that change with the season.",
      bestFor: "North Shore families, specialty foods, leisurely Saturday mornings",
      schedule: "Saturdays 8 AM-12 PM",
      season: "June through September",
    },
    {
      name: "Tosa Farmers Market",
      neighborhood: "Wauwatosa",
      type: "Village Market",
      address: "7720 Harwood Avenue, Wauwatosa, WI 53213",
      description: "Located in the charming Village of Wauwatosa, this not-for-profit market brings together locally-grown produce and food products crafted by local artisans. The market maintains a curated vendor list to ensure quality and variety while supporting local business sponsorships that keep it running.",
      highlights: ["Not-for-profit community focus", "Village location with shops nearby", "Curated vendor selection"],
      insiderTip: "Combine your market visit with breakfast at one of the Village's excellent cafes. The area has great coffee and pastry options.",
      bestFor: "Wauwatosa residents, combining shopping with Village exploration, quality produce",
      schedule: "Saturdays (check website for times)",
      season: "June through October (closed July 4)",
    },
  ],
  weekdayMarkets: [
    {
      name: "South Milwaukee Downtown Market",
      neighborhood: "South Milwaukee",
      type: "Thursday Evening Market",
      address: "Bucyrus Commons, 1101 Milwaukee Avenue, South Milwaukee, WI 53172",
      description: "A vibrant community gathering featuring food vendors, local artisans, and live music every Thursday evening. The Bucyrus Commons civic space creates a festival-like atmosphere where families can enjoy dinner from food vendors while shopping for produce and handmade goods.",
      highlights: ["Evening hours perfect for after-work shopping", "Live music weekly", "Family-friendly festival atmosphere"],
      insiderTip: "This is as much a community gathering as a market. Bring the family, grab dinner from food vendors, and enjoy the live music.",
      bestFor: "After-work shopping, family evenings out, community connection",
      schedule: "Thursdays 3 PM-7 PM",
      season: "June through October",
    },
    {
      name: "West Allis Farmers Market (Weekday)",
      neighborhood: "West Allis",
      type: "Weekday Market",
      address: "6501 W. National Avenue, West Allis, WI 53214",
      description: "The same great West Allis Farmers Market experience available Tuesday and Thursday afternoons for those who can't make weekend markets. With over 100 vendor stalls, you'll find the same extensive selection of produce, meats, dairy, and artisan goods.",
      highlights: ["Same vendors as Saturday", "Less crowded than weekends", "Afternoon hours"],
      insiderTip: "Tuesday and Thursday have the same vendors but far fewer crowds. If you know what you want, weekdays are much faster.",
      bestFor: "Busy weekend schedules, avoiding crowds, efficient shopping",
      schedule: "Tuesday 12-5 PM, Thursday 12-5 PM",
      season: "May through November",
    },
    {
      name: "Fondy Farmers Market (Weekday)",
      neighborhood: "Lindsay Heights",
      type: "Multi-Day Market",
      address: "2200 W. Fond du Lac Avenue, Milwaukee, WI 53206",
      description: "During peak season (July through October), Fondy expands to three days per week including Thursday and Sunday. The weekday market offers the same incredible diversity of vendors and produce at Milwaukee's most historic market.",
      highlights: ["Extended summer hours", "Same diverse vendor mix", "Early morning availability"],
      insiderTip: "Thursday morning is ideal for restaurant-quality produce at wholesale prices. Many local chefs shop here.",
      bestFor: "Serious home cooks, restaurant-quality produce, avoiding Saturday crowds",
      schedule: "July-October: Thursday 7 AM-2 PM, Sunday 7 AM-2 PM",
      season: "July through October (expanded schedule)",
    },
  ],
  yearRoundMarkets: [
    {
      name: "Milwaukee Winter Farmers Market",
      neighborhood: "Capitol Drive",
      type: "Indoor Winter Market",
      address: "The Table, 5305 W. Capitol Drive, Milwaukee, WI 53216",
      description: "When outdoor markets close, Milwaukee Winter Farmers Market keeps the local food movement going strong. Located in a beautifully converted former church space called 'The Table,' this market brings together 40-50 local vendors offering fresh produce, meats, cheese, prepared foods, and artisan goods throughout the cold months.",
      highlights: ["40-50 local vendors", "Beautiful converted church space", "SNAP/EBT accepted"],
      insiderTip: "The microgreens and mushroom vendors here are exceptional. Stock up on these winter staples that are grown locally year-round.",
      bestFor: "Year-round local food access, winter produce, supporting local agriculture in off-season",
      schedule: "Saturdays (November through April)",
      season: "November through April",
    },
    {
      name: "Milwaukee Public Market",
      neighborhood: "Historic Third Ward",
      type: "Year-Round Indoor Market",
      address: "400 N. Water Street, Milwaukee, WI 53202",
      description: "Milwaukee Public Market is a year-round indoor marketplace featuring 19 independently owned merchants offering everything from local cheese curds to diverse ethnic foods. While not a traditional farmers market, it provides consistent access to local and artisan foods 365 days a year. The market celebrated its 20th anniversary in 2025.",
      highlights: ["Open year-round", "19 independent merchants", "Cooking classes available"],
      insiderTip: "The Madame Kuony Demonstration Kitchen hosts cooking classes with local chefs. Book in advance for hands-on culinary experiences.",
      bestFor: "Year-round local food shopping, tourists, rainy day market experience",
      schedule: "Monday-Saturday 10 AM-8 PM, Sunday 10 AM-6 PM",
      season: "Year-round",
    },
    {
      name: "Shorewood Winter Farmers Market",
      neighborhood: "Shorewood",
      type: "Indoor Winter Market",
      address: "The Atrium, 2107 E. Capitol Drive, Shorewood, WI 53211",
      description: "The Shorewood Farmers Market continues through winter at The Atrium, providing North Shore residents with access to local vendors during the coldest months. The indoor setting maintains the community feel of the summer market while keeping everyone warm.",
      highlights: ["Extension of summer market vendors", "Climate-controlled indoor setting", "North Shore location"],
      insiderTip: "Many summer vendors participate in the winter market, so you can maintain relationships with your favorite farmers year-round.",
      bestFor: "North Shore residents, continuity with summer vendors, winter local food access",
      schedule: "Sundays 9 AM-1 PM",
      season: "January through March",
    },
  ],
  neighborhoodMarkets: [
    {
      name: "Walker Square Farmers Market",
      neighborhood: "Walker's Point",
      type: "Bilingual Community Market",
      address: "Walker Square, 1031 S. 9th Street, Milwaukee, WI 53204",
      description: "A bilingual (English/Spanish) neighborhood market featuring primarily Hmong family farmers, live music, and morning wellness activities. This intimate market serves the diverse Walker's Point community with fresh, affordable produce in a welcoming park setting. Recently revived with grant support, it's a true neighborhood gathering place.",
      highlights: ["Bilingual English/Spanish market", "Hmong family farmers", "Live music and wellness activities"],
      insiderTip: "Arrive at 10 AM for the morning fitness activities, then stay for shopping and live music that runs noon to 2 PM.",
      bestFor: "Walker's Point residents, supporting Hmong farmers, community connection",
      schedule: "Sundays 10 AM-2 PM",
      season: "July through September",
    },
    {
      name: "Greendale Downtown Market",
      neighborhood: "Greendale",
      type: "Historic Village Market",
      address: "5710 Broad Street, Greendale, WI 53129",
      description: "Set in Greendale's charming historic downtown—one of America's original planned communities—this market features 30-40 vendors from around Wisconsin. The unique village setting with its distinctive architecture makes the market experience feel like stepping back in time while enjoying modern local food.",
      highlights: ["Historic village setting", "30-40 Wisconsin vendors", "Charming downtown architecture"],
      insiderTip: "Explore Greendale's unique shops and bakeries after the market. The village was designed in the 1930s and has incredible mid-century architecture.",
      bestFor: "Architecture lovers, southwest suburbs, combining market with village exploration",
      schedule: "Saturdays 8 AM-12 PM",
      season: "June through October",
    },
    {
      name: "Cudahy Farmers Market",
      neighborhood: "Cudahy",
      type: "Community Market",
      address: "4700 S. Packard Avenue, Cudahy, WI 53110 (near City Hall)",
      description: "A neighborhood market serving the Cudahy community with fresh produce and local goods. The market accepts SNAP/EBT, WIC, Senior FMNP, and Wisconsin Community Cash, making fresh food accessible to all community members regardless of income level.",
      highlights: ["Accepts multiple food assistance programs", "Convenient City Hall location", "Focus on food accessibility"],
      insiderTip: "If you use SNAP/EBT benefits, many Milwaukee-area markets now double your dollars through various programs. Ask about SNAP Match when you arrive.",
      bestFor: "Cudahy residents, food assistance program users, neighborhood convenience",
      schedule: "Seasonal (check local listings for 2026 times)",
      season: "June through October",
    },
  ],
};

const faqs = [
  {
    question: "What is the best farmers market in Milwaukee?",
    answer: "Fondy Farmers Market is Milwaukee's oldest and most culturally diverse market, operating since 1916. For size and selection, West Allis Farmers Market offers 100+ vendor stalls three days per week. Cathedral Square Market downtown provides the best combination of vendors and urban atmosphere.",
  },
  {
    question: "Are there year-round farmers markets in Milwaukee?",
    answer: "Yes! Milwaukee Public Market in the Third Ward operates year-round. For traditional farmers market shopping in winter, the Milwaukee Winter Farmers Market at The Table (5305 W. Capitol Drive) runs November through April, and Shorewood Winter Farmers Market operates January through March at The Atrium.",
  },
  {
    question: "Which Milwaukee farmers markets accept SNAP/EBT?",
    answer: "Many Milwaukee farmers markets accept SNAP/EBT benefits including Fondy Farmers Market, Milwaukee Winter Farmers Market, Walker Square Farmers Market, Cudahy Farmers Market, and Oak Creek Farmers Market. Several also participate in SNAP Match programs that double your benefits.",
  },
  {
    question: "When do Milwaukee farmers markets open for the 2026 season?",
    answer: "Most outdoor farmers markets begin in May or June. West Allis and Oak Creek Farmers Markets open in early May. Fondy begins mid-May. Cathedral Square Market and most neighborhood markets start in June and run through September or October.",
  },
  {
    question: "What can I buy at Milwaukee farmers markets?",
    answer: "Milwaukee farmers markets offer fresh fruits and vegetables, locally raised meats and poultry, artisan cheeses, fresh eggs, baked goods, honey, maple syrup, flowers, plants, prepared foods, and handmade crafts. Many markets also feature food vendors, live music, and community programming.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "16 Best Farmers Markets in Milwaukee: Fresh Local Produce & More [2026 Guide]",
    "description": "Discover Milwaukee's best farmers markets including Fondy, West Allis, Cathedral Square, and year-round indoor markets. Complete 2026 schedules, locations, and insider tips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-farmers-markets"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Farmers Markets", "item": "https://www.discover-milwaukee.com/milwaukee-farmers-markets" }
    ]
  }
};

export default function MilwaukeeFarmersMarkets() {
  const MarketCard = ({ market }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{market.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{market.season}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{market.neighborhood}</span>
          {market.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{market.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{market.description}</p>
      {(market.bestFor || market.schedule) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {market.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{market.bestFor}</p>
            </div>
          )}
          {market.schedule && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>SCHEDULE</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{market.schedule}</p>
            </div>
          )}
        </div>
      )}
      {market.highlights && (
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>HIGHLIGHTS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{market.highlights.join(" | ")}</p>
        </div>
      )}
      {market.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {market.insiderTip}</p>
        </div>
      )}
      {market.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{market.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>16 Best Farmers Markets in Milwaukee: Local Produce, Schedules & Tips [2026]</title>
        <meta name="description" content="Discover Milwaukee's best farmers markets including Fondy, West Allis, and Cathedral Square. Complete 2026 schedules, year-round markets, and insider tips for fresh local produce." />
        <meta name="keywords" content="milwaukee farmers markets, farmers market milwaukee, local produce milwaukee, weekend markets milwaukee, west allis farmers market, fondy farmers market, milwaukee winter farmers market, fresh produce milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-farmers-markets" />

        <meta property="og:title" content="16 Best Farmers Markets in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From historic Fondy to year-round indoor markets, discover Milwaukee's best farmers markets with complete schedules and insider tips." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-farmers-markets" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-farmers-markets.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-farmers-markets.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>SHOPPING & MARKETS</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              16 Best Farmers Markets in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From the historic Fondy Farmers Market to modern community markets, discover where to find the freshest local produce in Milwaukee.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#weekend" style={{ color: c.green2, fontSize: "14px" }}>Weekend Markets</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#weekday" style={{ color: c.green2, fontSize: "14px" }}>Weekday Markets</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#year-round" style={{ color: c.green2, fontSize: "14px" }}>Year-Round</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Farmers Markets</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The premier markets that define Milwaukee's local food scene. These are the must-visit destinations for any farmers market enthusiast.
            </p>
            {farmersMarkets.bestOverall.map((market, i) => <MarketCard key={i} market={market} />)}
          </section>

          <section id="weekend" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Weekend Markets</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Saturday and Sunday markets perfect for weekend outings with the family or a leisurely morning of shopping.
            </p>
            {farmersMarkets.weekendMarkets.map((market, i) => <MarketCard key={i} market={market} />)}
          </section>

          <section id="weekday" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Weekday Markets</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Markets for those who can't make weekends work. Fewer crowds, same great local produce.
            </p>
            {farmersMarkets.weekdayMarkets.map((market, i) => <MarketCard key={i} market={market} />)}
          </section>

          <section id="year-round" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Year-Round & Winter Markets</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Indoor markets that keep local food available through winter. No need to hibernate from fresh produce.
            </p>
            {farmersMarkets.yearRoundMarkets.map((market, i) => <MarketCard key={i} market={market} />)}
          </section>

          <section id="neighborhood" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Community Markets</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local markets serving specific Milwaukee communities with fresh produce and neighborhood connection.
            </p>
            {farmersMarkets.neighborhoodMarkets.map((market, i) => <MarketCard key={i} market={market} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/best-coffee-shops-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Coffee Shops →
              </Link>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Milwaukee Festivals →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Market Season Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Market openings, seasonal produce updates, and Milwaukee food events.</p>
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
