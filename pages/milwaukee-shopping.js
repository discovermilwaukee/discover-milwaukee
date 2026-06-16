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

const shoppingSpots = {
  bestOverall: [
    {
      name: "Milwaukee Public Market",
      neighborhood: "Historic Third Ward",
      type: "Indoor Market & Shopping",
      priceRange: "$$",
      address: "400 N Water St, Milwaukee, WI 53202",
      description: "The heart of Milwaukee's food and shopping scene, this iconic indoor market features 19 independently owned merchants offering everything from fresh seafood and artisan cheeses to gourmet spices and Milwaukee merchandise. Beyond food, you'll find unique gifts at Brew'd City, specialty oils at Oro di Oliva, and beautiful arrangements at Marius Bell Flowers.",
      highlights: ["St. Paul Fish Company lobster rolls", "West Allis Cheese & Sausage Shoppe", "The Spice House", "Oro di Oliva oils and vinegars"],
      insiderTip: "First 30 minutes of parking is free in the market lot. Head upstairs for seating with a view while you enjoy your market finds.",
      bestFor: "Foodies, gift shoppers, tourists seeking authentic Milwaukee",
      specialties: ["Local food vendors", "Artisan goods", "Milwaukee merchandise"],
    },
    {
      name: "Mayfair Mall",
      neighborhood: "Wauwatosa",
      type: "Premier Shopping Mall",
      priceRange: "$$$",
      address: "2500 N Mayfair Rd, Wauwatosa, WI 53226",
      description: "Wisconsin's premier shopping destination with over 160 retailers spanning luxury to mainstream. Anchored by Nordstrom, Macy's, and Crate & Barrel, Mayfair offers an upscale shopping experience with restaurants like The Cheesecake Factory and P.F. Chang's. The enclosed mall makes it perfect for year-round shopping regardless of Wisconsin weather.",
      highlights: ["Nordstrom", "Apple Store", "Sephora", "Pottery Barn", "LEGO Store"],
      insiderTip: "Visit during weekday mornings for the best parking and shortest lines. The Container Store and Barnes & Noble are worth the trip alone.",
      bestFor: "Serious shoppers, fashion-forward finds, rainy day activities",
      specialties: ["Designer fashion", "Home goods", "Electronics"],
    },
    {
      name: "Historic Third Ward",
      neighborhood: "Third Ward",
      type: "Shopping District",
      priceRange: "$$-$$$",
      address: "Broadway & Buffalo St, Milwaukee, WI 53202",
      description: "Milwaukee's most vibrant shopping district features converted warehouses now housing boutiques, galleries, and restaurants. The walkable neighborhood is home to dozens of independent shops, from fashion boutiques like Lela and Edie to streetwear at MODA3. The charming cobblestone streets and historic architecture make shopping here an experience in itself.",
      highlights: ["Cobblestone streets", "Independent boutiques", "Art galleries", "Riverfront dining"],
      insiderTip: "Park at the Milwaukee Public Market lot and walk the district. Most shops are within a few blocks of each other.",
      bestFor: "Boutique lovers, art enthusiasts, weekend exploring",
      specialties: ["Fashion boutiques", "Art galleries", "Home decor"],
    },
    {
      name: "Bayshore Town Center",
      neighborhood: "Glendale",
      type: "Lifestyle Center",
      priceRange: "$$",
      address: "5800 N Bayshore Dr, Glendale, WI 53217",
      description: "A revitalized open-air lifestyle center combining shopping, dining, and entertainment with a community-focused atmosphere. The Yard, a central green space, hosts free concerts and seasonal festivals. Major retailers include Target, Athleta, H&M, and Kohl's, with plenty of dining options for shopping breaks.",
      highlights: ["The Yard outdoor events", "Target", "Athleta", "Free family programming"],
      insiderTip: "Visit during summer for free outdoor concerts at The Yard. The open-air design is perfect for evening shopping when temperatures cool.",
      bestFor: "Families, outdoor shopping lovers, community events",
      specialties: ["Major retailers", "Family entertainment", "Outdoor dining"],
    },
  ],
  thirdWardShopping: [
    {
      name: "Lela Boutique",
      neighborhood: "Historic Third Ward",
      type: "Women's Fashion",
      priceRange: "$$-$$$",
      address: "321 N Broadway, Milwaukee, WI 53202",
      description: "Celebrating over 20 years of fashion, Lela combines carefully curated new designer collections with stylish vintage and consignment pieces. The 1,200 square foot boutique features emerging designers alongside established names, plus designer handbags and local jewelry. Personal styling is available for those seeking a complete wardrobe refresh.",
      highlights: ["New and consignment fashion", "Designer handbags", "Local jewelry", "Personal styling"],
      insiderTip: "Check their consignment section first for designer pieces at a fraction of retail. New arrivals come in weekly.",
      bestFor: "Fashion-forward women, sustainable shoppers, unique finds",
      specialties: ["Women's fashion", "Consignment", "Accessories"],
    },
    {
      name: "Edie Boutique",
      neighborhood: "Historic Third Ward",
      type: "Women's Fashion & Accessories",
      priceRange: "$$",
      address: "333 N Broadway, Milwaukee, WI 53202",
      description: "A one-stop shop for trendy, well-priced women's fashion with a fun, personal shopping experience. Edie stocks stylish shoes, gorgeous bags, and fashionable clothing that's current without breaking the bank. Part of a regional chain, this Third Ward location brings accessible fashion to Milwaukee's most stylish neighborhood.",
      highlights: ["Trendy clothing", "Affordable accessories", "Stylish footwear", "Personal service"],
      insiderTip: "Their jewelry section has statement pieces that make perfect gifts. Staff are exceptionally helpful with styling suggestions.",
      bestFor: "Budget-conscious fashionistas, gift seekers, trend hunters",
      specialties: ["Affordable fashion", "Accessories", "Jewelry"],
    },
    {
      name: "MODA3",
      neighborhood: "Historic Third Ward",
      type: "Streetwear & Sneakers",
      priceRange: "$$-$$$",
      address: "320 E Buffalo St, Milwaukee, WI 53202",
      description: "A Milwaukee institution since 2004, MODA3 is the go-to destination for sneakerheads and streetwear enthusiasts. They specialize in limited edition, hard-to-find footwear, clothing, and accessories from coveted brands. The curated selection keeps locals and visitors coming back for exclusive drops and one-of-a-kind pieces.",
      highlights: ["Limited edition sneakers", "Streetwear brands", "Exclusive releases", "Local favorite since 2004"],
      insiderTip: "Follow their Instagram for drop alerts on limited releases. Arrive early on release days as lines form quickly.",
      bestFor: "Sneakerheads, streetwear collectors, limited edition hunters",
      specialties: ["Sneakers", "Streetwear", "Limited editions"],
    },
    {
      name: "The District Row",
      neighborhood: "Historic Third Ward",
      type: "Women's Boutique",
      priceRange: "$$$",
      address: "249 N Water St, Milwaukee, WI 53202",
      description: "A newer addition to the Third Ward, this upscale women's boutique offers ready-to-wear collections, elegant dresses, on-trend denim, and vintage-inspired pieces. Founded by friends whose bond grew during the pandemic, the shop reflects their passion for fashion and personal styling. Private shopping parties available.",
      highlights: ["Ready-to-wear collections", "Elegant dresses", "Personal styling", "Private shopping parties"],
      insiderTip: "Book a private shopping party for a special occasion. Their cozy accessories including robes, blankets, and candles make perfect gifts.",
      bestFor: "Special occasions, elevated casual wear, girls' outings",
      specialties: ["Designer fashion", "Event dresses", "Luxury accessories"],
    },
    {
      name: "Retique",
      neighborhood: "Historic Third Ward",
      type: "Vintage & Consignment",
      priceRange: "$-$$",
      address: "190 N Broadway, Milwaukee, WI 53202",
      description: "Goodwill's boutique concept brings a curated vintage and consignment experience to the Third Ward. Unlike typical thrift stores, Retique carefully selects designer fashions, vintage finds, and brand-name accessories. The boutique vibe makes thrifting accessible for those seeking quality without sacrificing style or spending hours searching.",
      highlights: ["Curated vintage", "Designer consignment", "Brand-name accessories", "Boutique atmosphere"],
      insiderTip: "Check back frequently as new items are added daily. The vintage section often has hidden gems from past decades.",
      bestFor: "Vintage lovers, sustainable shoppers, budget-conscious fashionistas",
      specialties: ["Vintage fashion", "Designer consignment", "Accessories"],
    },
  ],
  vintageThrift: [
    {
      name: "Bandit MKE",
      neighborhood: "Brady Street",
      type: "Vintage Clothing",
      priceRange: "$$",
      address: "1224 E Brady St, Milwaukee, WI 53202",
      description: "After years of successful pop-up events across the Midwest, Bandit found a permanent home on Brady Street. The shop is filled with natural light and well-organized vintage clothing, shoes, jewelry, records, and sunglasses from the 1940s through early 2000s. Notably, clothing is organized by style rather than gender.",
      highlights: ["Vintage 40s-2000s", "Gender-neutral organization", "Vinyl records", "Vintage accessories"],
      insiderTip: "Sizes aren't on tags, so don't hesitate to try things on. The staff is incredibly helpful with finding pieces that fit your style.",
      bestFor: "Vintage enthusiasts, style explorers, sustainable fashion lovers",
      specialties: ["Vintage clothing", "Records", "Vintage accessories"],
    },
    {
      name: "Tip Top Atomic Shop",
      neighborhood: "Bay View",
      type: "Vintage & Retro",
      priceRange: "$$",
      address: "2343 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Voted Best Antique Store by Shepherd Express readers, Tip Top specializes in 1940s and 1950s vintage clothing alongside mid-century household furnishings. Find everything from cocktail shakers and starburst clocks to tiki mugs and Rockabilly clothing. New reproduction retro items round out the collection.",
      highlights: ["40s & 50s vintage", "Mid-century home goods", "Tiki collectibles", "Rockabilly fashion"],
      insiderTip: "Their selection of starburst clocks and atomic-era decor is unmatched. Great source for Halloween costume inspiration.",
      bestFor: "Mid-century enthusiasts, collectors, retro home decorators",
      specialties: ["1950s fashion", "Atomic-era decor", "Vintage housewares"],
    },
    {
      name: "Plume",
      neighborhood: "Bay View",
      type: "Vintage Boutique",
      priceRange: "$$",
      address: "3001 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "An elevated vintage boutique where clothing is neatly organized into sections labeled 'seasonal,' 'masculine,' and 'curvy babes.' Owners Maggie and Sheila travel the country sourcing pieces that appeal to diverse tastes and body types. Modern accessories complement the vintage collection.",
      highlights: ["Size-inclusive vintage", "Nationwide sourcing", "Modern accessories", "Curated collection"],
      insiderTip: "They offer worldwide shipping and have an active Instagram and Etsy shop if you can't visit in person.",
      bestFor: "Size-inclusive shopping, curated vintage, unique finds",
      specialties: ["Curated vintage", "Size-inclusive fashion", "Accessories"],
    },
    {
      name: "Alive and Fine",
      neighborhood: "Bay View",
      type: "Vintage Clothing & Art",
      priceRange: "$-$$",
      address: "2652 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Opened in 2016 by Whips singer Ashley Smith, this vintage shop specializes in clothing from the 1950s through 1990s. Beyond the racks, Alive and Fine hosts local artists and designers, featuring unique accessories and handmade items. The shop also hosts themed art shows throughout the year.",
      highlights: ["50s-90s vintage", "Local artist showcases", "Handmade accessories", "Art shows"],
      insiderTip: "Ask about upcoming art shows and events. The combination of vintage shopping and local art makes this a Bay View essential.",
      bestFor: "Art lovers, vintage collectors, supporting local artists",
      specialties: ["Vintage fashion", "Local art", "Community events"],
    },
    {
      name: "St. Vincent de Paul",
      neighborhood: "Multiple Locations",
      type: "Thrift Store",
      priceRange: "$",
      address: "2320 W Lincoln Ave, Milwaukee, WI 53215",
      description: "A Milwaukee thrift institution with multiple locations offering the best prices for those willing to hunt. The Lincoln Avenue and Bradley Road locations are particularly well-stocked. All proceeds support neighbors in need, making your shopping dollars work double duty.",
      highlights: ["Rock-bottom prices", "Large selection", "Furniture available", "Supports community"],
      insiderTip: "Visit mid-week for the freshest stock. The Bradley Road location (8010 N 76th St) has an excellent furniture selection.",
      bestFor: "Budget shoppers, treasure hunters, charitable shopping",
      specialties: ["Clothing", "Housewares", "Furniture"],
    },
  ],
  localBoutiques: [
    {
      name: "URSA",
      neighborhood: "Bay View",
      type: "Lifestyle Boutique",
      priceRange: "$$",
      address: "2534 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "A modern lifestyle boutique specializing in curated goods for your home and body. URSA brings a fresh, minimalist aesthetic to Bay View with carefully selected skincare, candles, ceramics, and home accessories. The bright, welcoming space makes for a relaxing shopping experience.",
      highlights: ["Curated skincare", "Home goods", "Ceramics", "Minimalist aesthetic"],
      insiderTip: "Their candle selection makes perfect gifts. The staff can help you find products suited to specific skin types and preferences.",
      bestFor: "Self-care enthusiasts, home decorators, gift givers",
      specialties: ["Skincare", "Home goods", "Candles"],
    },
    {
      name: "Il Bosco Eco Boutique",
      neighborhood: "Walker's Point",
      type: "Sustainable Home & Gifts",
      priceRange: "$$-$$$",
      address: "225 S 2nd St, Milwaukee, WI 53204",
      description: "Il Bosco (Italian for 'the forest') is an upscale eco-boutique committed to selling only sustainable goods. Features recycled, repurposed, and cruelty-free furniture, home furnishings, fine jewelry, and accessories. Two stunning 14-foot live plant walls over a koi pond create a serene shopping atmosphere.",
      highlights: ["Sustainable goods only", "Live plant walls", "Wisconsin art", "Eco-friendly home decor"],
      insiderTip: "The plant walls alone are worth a visit. Great source for unique, sustainable wedding and housewarming gifts.",
      bestFor: "Eco-conscious shoppers, unique gift seekers, plant lovers",
      specialties: ["Sustainable home goods", "Eco-friendly products", "Wisconsin art"],
    },
    {
      name: "GoodLand Home & Goods",
      neighborhood: "Downer Avenue",
      type: "Home & Gift Shop",
      priceRange: "$$",
      address: "2565 N Downer Ave, Milwaukee, WI 53211",
      description: "A female-owned home, lifestyle, and gift shop featuring 130+ independent brands including local makers and women-owned businesses. The curated selection includes mindfully-made goods, art, and dishware. Located between Boswell Books and Optix on Milwaukee's bustling Downer Avenue.",
      highlights: ["130+ indie brands", "Local makers", "Women-owned focus", "Mindfully-made goods"],
      insiderTip: "Combine with a visit to Boswell Books next door for a perfect Downer Avenue shopping afternoon.",
      bestFor: "Supporting small businesses, unique gifts, home decor",
      specialties: ["Indie brands", "Local goods", "Gifts"],
    },
    {
      name: "The Sophisticated Man Boutique",
      neighborhood: "Downtown",
      type: "Men's Fashion",
      priceRange: "$$$",
      address: "324 E Michigan St, Milwaukee, WI 53202",
      description: "One of Milwaukee's oldest and most respected men's boutiques with nearly 50 years of providing exceptional clothing and accessories. Specializing in fine European fashions including suits, sport coats, dress shirts, ties, and shoes. On-site tailoring ensures perfect fits for every customer.",
      highlights: ["European fashion", "On-site tailoring", "Classic suits", "Nearly 50 years in business"],
      insiderTip: "Schedule a consultation for personalized styling. Their tailoring services can transform an off-the-rack piece into a custom fit.",
      bestFor: "Professional wardrobes, special occasions, quality menswear",
      specialties: ["Men's suits", "European fashion", "Tailoring"],
    },
    {
      name: "Boswell Book Company",
      neighborhood: "Downer Avenue",
      type: "Independent Bookstore",
      priceRange: "$-$$",
      address: "2559 N Downer Ave, Milwaukee, WI 53211",
      description: "Rising from the ashes of the legendary Harry W. Schwartz Bookshops, Boswell is Milwaukee's beloved independent bookstore. Features new and second-hand books, a great kids section, cards, and more. Regular author events bring literary voices to Milwaukee, and an attached Starbucks makes for cozy browsing.",
      highlights: ["New and used books", "Author events", "Great kids section", "Starbucks attached"],
      insiderTip: "Check their events calendar for author readings and signings. The staff recommendations are always excellent.",
      bestFor: "Book lovers, literary events, family browsing",
      specialties: ["Books", "Author events", "Kids books"],
    },
  ],
  shoppingDistricts: [
    {
      name: "Kinnickinnic Avenue",
      neighborhood: "Bay View",
      type: "Neighborhood Shopping Street",
      priceRange: "$-$$",
      address: "S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Bay View's main commercial artery has transformed into Milwaukee's unofficial Vintage Shop Row. The walkable strip features fashion boutiques, thrift stores, record shops, and bookstores alongside excellent restaurants and coffee shops. Once the most traveled road between Milwaukee and Chicago, KK now draws shoppers seeking unique finds.",
      highlights: ["Vintage shops", "Record stores", "Independent boutiques", "Restaurant scene"],
      insiderTip: "Start at Oklahoma Avenue and walk north to catch all the shops. Many are closed Monday and Tuesday.",
      bestFor: "Vintage hunters, neighborhood exploring, independent shops",
      specialties: ["Vintage fashion", "Records", "Local boutiques"],
    },
    {
      name: "Downer Avenue",
      neighborhood: "East Side",
      type: "Historic Shopping District",
      priceRange: "$$",
      address: "N Downer Ave, Milwaukee, WI 53211",
      description: "Historic Downer Avenue is one of Milwaukee's most popular East Side business districts with every storefront now filled for the first time in over 18 years. The two-block corridor features specialty shops, restaurants, the Downer Theatre (celebrating its 100th birthday), and beloved Boswell Book Company.",
      highlights: ["Boswell Books", "Downer Theatre", "Specialty shops", "100% occupancy"],
      insiderTip: "Combine shopping with a movie at the historic Downer Theatre, then dinner at one of the neighborhood restaurants.",
      bestFor: "East Side exploration, independent shops, neighborhood dining",
      specialties: ["Bookstores", "Specialty retail", "Neighborhood dining"],
    },
    {
      name: "Southridge Mall",
      neighborhood: "Greendale",
      type: "Regional Shopping Mall",
      priceRange: "$$",
      address: "5300 S 76th St, Greendale, WI 53129",
      description: "Wisconsin's second-largest mall offers over 120 retailers, restaurants, and entertainment options. Anchored by Macy's, JCPenney, Dick's Sporting Goods, and TJ Maxx, with Round 1 Entertainment for family fun. Major redevelopment underway will add 800+ upscale apartments to create a true mixed-use destination.",
      highlights: ["120+ retailers", "Round 1 Entertainment", "Major redevelopment", "TJ Maxx"],
      insiderTip: "Dick's Sporting Goods and Golf Galaxy share a building here, making it a one-stop shop for sports enthusiasts.",
      bestFor: "Value shopping, family entertainment, south side convenience",
      specialties: ["Department stores", "Entertainment", "Value retail"],
    },
    {
      name: "Brady Street",
      neighborhood: "East Side",
      type: "Eclectic Shopping Street",
      priceRange: "$$",
      address: "E Brady St, Milwaukee, WI 53202",
      description: "Milwaukee's most eclectic neighborhood street mixes vintage shops, record stores, and independent boutiques with tattoo parlors, restaurants, and nightlife. The walkable strip connecting the East Side to the lakefront is perfect for a day of exploring. Bandit MKE and other unique shops call Brady Street home.",
      highlights: ["Bandit MKE vintage", "Record shops", "Restaurant scene", "Nightlife"],
      insiderTip: "Brady Street is best explored on foot. Park at one end and walk the full strip to catch everything.",
      bestFor: "Vintage shopping, nightlife, eclectic finds",
      specialties: ["Vintage", "Records", "Eclectic retail"],
    },
  ],
};

const faqs = [
  {
    question: "What's the best shopping area in Milwaukee?",
    answer: "The Historic Third Ward is Milwaukee's premier shopping destination, featuring converted warehouses housing boutiques, galleries, and the Milwaukee Public Market. For vintage and thrift, Bay View's Kinnickinnic Avenue has earned the nickname 'Vintage Shop Row' with stores like Tip Top Atomic Shop, Plume, and Alive and Fine.",
  },
  {
    question: "Where can I find vintage and thrift stores in Milwaukee?",
    answer: "Bay View's Kinnickinnic Avenue is Milwaukee's vintage shopping mecca with Tip Top Atomic Shop (1940s-50s), Plume (curated vintage), and Alive and Fine (50s-90s). Brady Street's Bandit MKE offers 40s-2000s vintage, while Retique in the Third Ward provides a boutique thrift experience. St. Vincent de Paul locations offer the best budget finds.",
  },
  {
    question: "What are the best malls in Milwaukee?",
    answer: "Mayfair Mall in Wauwatosa is Wisconsin's premier shopping center with Nordstrom, Apple, and 160+ retailers. Bayshore Town Center in Glendale offers an open-air lifestyle experience with The Yard for events. Southridge Mall in Greendale is the state's second-largest with 120+ stores and Round 1 Entertainment.",
  },
  {
    question: "Where should I shop for unique Milwaukee gifts?",
    answer: "Milwaukee Public Market's Brew'd City carries Milwaukee merchandise, while Urban Milwaukee: The Store offers city-themed gifts. GoodLand Home & Goods on Downer Avenue features 130+ indie brands including local makers. Il Bosco in Walker's Point has sustainable, Wisconsin-made goods.",
  },
  {
    question: "What boutiques are in Milwaukee's Third Ward?",
    answer: "The Historic Third Ward features Lela Boutique (women's fashion and consignment), Edie Boutique (trendy affordable fashion), MODA3 (streetwear and sneakers), The District Row (upscale women's boutique), and Retique (curated vintage). Most shops are within walking distance along Broadway and Buffalo Street.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Shopping Guide: Best Boutiques, Vintage Stores & Shopping Districts [2026]",
    "description": "Discover Milwaukee's best shopping from Third Ward boutiques to Bay View vintage shops. Complete guide to malls, unique stores, and local favorites.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-shopping"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Shopping", "item": "https://www.discover-milwaukee.com/milwaukee-shopping" }
    ]
  }
};

export default function MilwaukeeShopping() {
  const ShopCard = ({ shop }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{shop.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {shop.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{shop.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{shop.neighborhood}</span>
          {shop.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{shop.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{shop.description}</p>
      {(shop.bestFor || shop.highlights) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {shop.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{shop.bestFor}</p>
            </div>
          )}
          {shop.highlights && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>HIGHLIGHTS</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{shop.highlights.join(", ")}</p>
            </div>
          )}
        </div>
      )}
      {shop.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {shop.insiderTip}</p>
        </div>
      )}
      {shop.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{shop.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Milwaukee Shopping Guide: Best Boutiques, Vintage Stores & Malls [2026]</title>
        <meta name="description" content="Discover Milwaukee's best shopping from Third Ward boutiques to Bay View vintage stores. Complete guide to malls, unique shops, and local favorites in 2026." />
        <meta name="keywords" content="milwaukee shopping, boutiques milwaukee, vintage stores milwaukee, third ward shopping, where to shop milwaukee, milwaukee malls, bay view shopping, milwaukee thrift stores, kinnickinnic avenue shopping" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-shopping" />

        <meta property="og:title" content="Milwaukee Shopping Guide: Boutiques, Vintage & More [2026]" />
        <meta property="og:description" content="From Third Ward boutiques to Bay View vintage shops, discover Milwaukee's best shopping destinations and hidden gems." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-shopping" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-milwaukee-shopping.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-milwaukee-shopping.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>SHOPPING</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Milwaukee Shopping Guide
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From Third Ward boutiques to Bay View vintage shops, discover Milwaukee's best shopping destinations and hidden gems.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#third-ward" style={{ color: c.green2, fontSize: "14px" }}>Third Ward Boutiques</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#vintage-thrift" style={{ color: c.green2, fontSize: "14px" }}>Vintage & Thrift</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#local-boutiques" style={{ color: c.green2, fontSize: "14px" }}>Local Boutiques</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#shopping-districts" style={{ color: c.green2, fontSize: "14px" }}>Shopping Districts</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Shopping</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's must-visit shopping destinations, from iconic markets to premier malls and vibrant shopping districts.
            </p>
            {shoppingSpots.bestOverall.map((shop, i) => <ShopCard key={i} shop={shop} />)}
          </section>

          <section id="third-ward" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Third Ward Boutiques</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's most stylish shopping district features converted warehouses housing fashion boutiques, consignment shops, and streetwear destinations.
            </p>
            {shoppingSpots.thirdWardShopping.map((shop, i) => <ShopCard key={i} shop={shop} />)}
          </section>

          <section id="vintage-thrift" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Vintage & Thrift Stores</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Sustainable fashion and unique finds. Milwaukee's vintage scene rivals any city, with Bay View's Kinnickinnic Avenue earning the nickname "Vintage Shop Row."
            </p>
            {shoppingSpots.vintageThrift.map((shop, i) => <ShopCard key={i} shop={shop} />)}
          </section>

          <section id="local-boutiques" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Local Boutiques & Unique Shops</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Independent stores worth seeking out. These locally-owned shops offer everything from sustainable home goods to classic menswear.
            </p>
            {shoppingSpots.localBoutiques.map((shop, i) => <ShopCard key={i} shop={shop} />)}
          </section>

          <section id="shopping-districts" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Shopping Districts & Malls</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Neighborhood shopping streets and major shopping centers. From walkable vintage strips to Wisconsin's largest malls.
            </p>
            {shoppingSpots.shoppingDistricts.map((shop, i) => <ShopCard key={i} shop={shop} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/historic-third-ward" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Third Ward Guide →
              </Link>
              <Link href="/bay-view-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Bay View Guide →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Shopping & Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New shop openings, sales events, and Milwaukee shopping news.</p>
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
