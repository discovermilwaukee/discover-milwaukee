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

const speakeasies = {
  bestOverall: [
    {
      name: "Shanghai",
      neighborhood: "Lower East Side",
      style: "Absinthe & Craft Cocktails",
      priceRange: "$$$",
      address: "2238 N Farwell Ave, Milwaukee, WI 53202",
      description: "Voted the #1 speakeasy in America by USA Today readers in 2025, Shanghai is Milwaukee's crown jewel of hidden bars. Tucked away in Black Cat Alley behind the historic Oriental Theatre, this intimate absinthe bar offers a rotating menu of seasonal craft cocktails in a space that was once a cleaning closet. The recent expansion now accommodates up to 45 guests while maintaining its mysterious, prohibition-era allure.",
      mustTry: "Classic Absinthe Service, Seasonal Craft Cocktails",
      insiderTip: "Reservations are required. Look for the metal gate with the Shanghai logo and ring the call box for entry.",
      bestFor: "Date nights, cocktail connoisseurs, absinthe enthusiasts",
      howToFind: "Enter Black Cat Alley behind the Oriental Theatre. Look for a metal gate with the Shanghai logo and ring the call box.",
    },
    {
      name: "Bryant's Cocktail Lounge",
      neighborhood: "Walker's Point",
      style: "Classic Cocktail Institution",
      priceRange: "$$",
      address: "1579 S 9th St, Milwaukee, WI 53204",
      description: "Milwaukee's oldest cocktail lounge has been serving drinks since 1938, predating the modern speakeasy revival by decades. With over 450 cocktails—most unique to Bryant's—this dimly lit, intimate space feels like stepping into another era. The bartenders don't work from a menu; tell them what you like and they'll craft something perfect. The upstairs Velvet Lounge offers an even more exclusive experience.",
      mustTry: "Pink Squirrel (invented here), Bartender's Choice",
      insiderTip: "There's no cocktail menu. Trust the bartender—describe flavors you enjoy and let them create something special.",
      bestFor: "Cocktail history buffs, romantic evenings, craft cocktail lovers",
      howToFind: "No secret entrance, but the unmarked exterior and dim lighting give it speakeasy authenticity.",
    },
    {
      name: "At Random",
      neighborhood: "Bay View",
      style: "Ice Cream Cocktail Lounge",
      priceRange: "$$",
      address: "2501 S Delaware Ave, Milwaukee, WI 53207",
      description: "At Random is a Bay View institution known for their legendary ice cream cocktails served in an authentic mid-century atmosphere unchanged since the 1960s. The kitschy decor, velvet booths, and swizzle stick collection create a time-capsule experience. Their specialty ice cream drinks—like the Pink Squirrel and Grasshopper—are made with real ice cream and are dangerously delicious.",
      mustTry: "Pink Squirrel, Grasshopper, Golden Cadillac",
      insiderTip: "They specialize in ice cream cocktails—don't skip them. Cash only, so hit the ATM first.",
      bestFor: "Retro vibes, ice cream cocktail lovers, Bay View locals",
      howToFind: "Corner of Russell and Delaware in Bay View. The vintage neon sign marks the spot.",
    },
    {
      name: "The Tin Widow",
      neighborhood: "Walker's Point",
      style: "Gin & Whiskey Haven",
      priceRange: "$$",
      address: "703 S 2nd St, Milwaukee, WI 53204",
      description: "The Tin Widow boasts Milwaukee's largest gin collection (200+ varieties) and one of the city's most impressive whiskey selections (250+ bottles). The eclectic, vintage-decorated space feels like stumbling into a 1970s collector's den—walls stacked with vintage portraits, thrift-store finds, and watchful owls. Open every day at 7pm, this is a beverages-only establishment that takes its spirits seriously.",
      mustTry: "Gin Flight, Whiskey Flight, Classic Martini",
      insiderTip: "No food served, so eat before you go. The bartenders are experts—ask for recommendations based on your preferences.",
      bestFor: "Gin enthusiasts, whiskey collectors, serious cocktail drinkers",
      howToFind: "Look for the understated entrance on S 2nd Street. The speakeasy vibe starts at the door.",
    },
  ],
  hiddenBars: [
    {
      name: "Don's TV & Repair",
      neighborhood: "Walker's Point",
      style: "Retro Speakeasy & Diner",
      priceRange: "$$",
      address: "1100 S 1st St, Milwaukee, WI 53204",
      description: "Walk through what appears to be a legitimate vintage TV repair shop—complete with old televisions and repair equipment—and you'll find a password-protected door leading to one of Milwaukee's most creative hidden bars. Inside, the retro throwback atmosphere pairs perfectly with their famous smash burgers, boozy milkshakes, and Fruity Pebble pancakes. It's part speakeasy, part diner, all fun.",
      mustTry: "Smash Burger, Boozy Milkshake, Fruity Pebble Pancakes",
      insiderTip: "The password changes regularly. Check their website or social media, or just ask nicely at the front.",
      bestFor: "Unique experiences, late-night dining, Instagram-worthy spots",
      howToFind: "Enter through the TV repair shop storefront. Look for the password-protected door at the back.",
    },
    {
      name: "SafeHouse",
      neighborhood: "Downtown",
      style: "Spy-Themed Restaurant & Bar",
      priceRange: "$$",
      address: "779 N Front St, Milwaukee, WI 53202",
      description: "Since 1966, SafeHouse has been Milwaukee's most legendary spy-themed destination. Finding the entrance requires locating the red door in a downtown alley, then either knowing the password or completing a 'clearance test' that might involve dancing, hula hooping, or making animal noises. Inside, espionage artifacts, secret passages, and theatrical flair create an unforgettable experience.",
      mustTry: "Mission Impossible Burger, Spy-Themed Cocktails",
      insiderTip: "Don't know the password? That's part of the fun—the clearance test is a Milwaukee rite of passage. No friendly agent has ever been turned away.",
      bestFor: "Families, tourists, group outings, unique Milwaukee experiences",
      howToFind: "Find the red door in the Front Street alley. Ring the bell and either give the password or complete your clearance test.",
    },
    {
      name: "The Loon Room",
      neighborhood: "Third Ward",
      style: "Underground Cocktail & Fondue Lounge",
      priceRange: "$$$",
      address: "724 N Milwaukee St, Milwaukee, WI 53202",
      description: "Hidden beneath Third Coast Provisions, The Loon Room is a sophisticated, rustic cocktail lounge that feels like a well-kept secret. The intimate space specializes in craft cocktails and shareable snacks like Wisconsin cheese fondue and fried cheese curds. The speakeasy light outside signals when they're open—a charming throwback to prohibition-era traditions.",
      mustTry: "Classic Cocktails, Wisconsin Cheese Fondue, Fried Cheese Curds",
      insiderTip: "Look for the speakeasy light outside—if it's on, they're open. No light means you'll have to come back another time.",
      bestFor: "Date nights, intimate gatherings, fondue lovers",
      howToFind: "Enter through Third Coast Provisions or look for the separate basement entrance. The speakeasy light indicates when open.",
    },
    {
      name: "Oak's Lounge",
      neighborhood: "West Allis",
      style: "Seasonal Bourbon Lounge",
      priceRange: "$$",
      address: "11505 W National Ave, West Allis, WI 53214",
      description: "Tucked in the basement of Natty Oaks Pub & Eatery, Oak's Lounge is a bourbon-forward 1940s throwback that operates seasonally from September through spring. The intimate space seats about 10 at the bar and features brick walls, wooden paneling, and vintage family photos dating back to the 1940s. It's cash only and only open when the light's on at the back of the restaurant.",
      mustTry: "Bourbon Old Fashioned, Whiskey Selection",
      insiderTip: "Cash only—ATMs on site. If the light's on at the back of Natty Oaks, the door's open.",
      bestFor: "Bourbon enthusiasts, intimate conversations, off-the-beaten-path experiences",
      howToFind: "Look for the light at the back of Natty Oaks restaurant. If it's on, head down to the basement.",
    },
    {
      name: "Leo Lounge",
      neighborhood: "Lower East Side",
      style: "Glam Vintage Cocktail Lounge",
      priceRange: "$$",
      address: "1758 N Water St, Milwaukee, WI 53202",
      description: "Named for the fifth zodiac sign, Leo Lounge is a glam, feminine-forward speakeasy located above Tauro Cocina. The soft pink decor, vintage aesthetic, and artwork by local female artists create a sophisticated atmosphere. Entry requires knowing the password (hint: it's tied to the lounge's name) or coming during Tauro Cocina's restaurant hours.",
      mustTry: "Woman-Hattan, Seasonal Craft Cocktails",
      insiderTip: "The password relates to the lounge's name. During restaurant hours, you can access through Tauro Cocina; otherwise, use the side door.",
      bestFor: "Girls' nights, special occasions, Instagram-worthy aesthetics",
      howToFind: "Enter through Tauro Cocina during restaurant hours, or use the side door entrance with the password.",
    },
  ],
  cocktailLounges: [
    {
      name: "Blu",
      neighborhood: "Downtown",
      style: "Rooftop Martini Bar",
      priceRange: "$$$",
      address: "424 E Wisconsin Ave, Floor 23, Milwaukee, WI 53202",
      description: "Perched on the 23rd floor of the iconic Pfister Hotel, Blu offers breathtaking panoramic views of downtown Milwaukee and Lake Michigan alongside their signature martinis. The sophisticated atmosphere, extensive wine list, and live music on Friday and Saturday nights make this an elevated speakeasy experience in every sense. Their BluTender program even donates to charity.",
      mustTry: "Signature Martini, Classic Cocktails, Wine Selection",
      insiderTip: "Come at sunset for the best views. Live music on Friday and Saturday nights adds to the atmosphere.",
      bestFor: "Special occasions, out-of-town guests, sunset cocktails",
      howToFind: "Take the elevator to the 23rd floor of The Pfister Hotel.",
    },
    {
      name: "Tied House",
      neighborhood: "Third Ward",
      style: "Market-Fresh Craft Cocktails",
      priceRange: "$$",
      address: "124 N Water St, Milwaukee, WI 53202",
      description: "This historic Third Ward cocktail bar focuses on innovative, market-fresh cocktails that change with the seasons. The intimate, vintage-inspired space honors Milwaukee's brewing heritage while pushing cocktail boundaries. Every ingredient is carefully sourced, and the bartenders treat mixology as a craft. The patio is perfect for warm weather drinks.",
      mustTry: "Seasonal Cocktails, House Creations",
      insiderTip: "Ask what's fresh—the menu changes based on available ingredients. The patio is a hidden gem in summer.",
      bestFor: "Craft cocktail enthusiasts, Third Ward dates, seasonal drink lovers",
      howToFind: "Historic building on N Water Street in the Third Ward. Look for the understated signage.",
    },
    {
      name: "Boone & Crockett",
      neighborhood: "Walker's Point",
      style: "Craft Cocktail Bar",
      priceRange: "$$",
      address: "818 S Water St, Milwaukee, WI 53204",
      description: "Boone & Crockett's bartenders explore adventurous palates with classically crafted cocktails made from shelf to glass. The space combines taxidermy decor with a laid-back atmosphere, and there's no table service—guests order at the bar. Taco Moto operates on-site for food. The outdoor space transforms into 'Twas the Nite during the holiday season.",
      mustTry: "Bartender's Choice, Classic Cocktails",
      insiderTip: "No table service—order at the bar. Grab tacos from Taco Moto while you're there.",
      bestFor: "Adventurous drinkers, casual evenings, Walker's Point nightlife",
      howToFind: "Look for the distinctive signage on S Water Street. The outdoor area is hard to miss.",
    },
    {
      name: "Stir",
      neighborhood: "Downtown",
      style: "Riverfront Cocktail Lounge",
      priceRange: "$$",
      address: "112 W Wisconsin Ave, Milwaukee, WI 53233",
      description: "Located directly on the Milwaukee River in downtown, Stir has been crafting cocktails for over a decade. The lounge features a full bar, pool tables, and a sophisticated atmosphere that draws both locals and visitors. The riverfront location adds ambiance, especially in warmer months.",
      mustTry: "House Cocktails, Classic Martini",
      insiderTip: "Request a seat by the windows for river views. The pool tables add a fun, casual element.",
      bestFor: "Downtown professionals, after-work drinks, riverfront ambiance",
      howToFind: "Located on W Wisconsin Ave with direct river access. Look for the lounge signage.",
    },
  ],
  secretEntrances: [
    {
      name: "The Dark Room at Saint Kate",
      neighborhood: "Downtown",
      style: "Hidden Fine Dining & Cocktails",
      priceRange: "$$$$",
      address: "139 E Kilbourn Ave, Milwaukee, WI 53202",
      description: "Hidden within The Studio at Saint Kate hotel, The Dark Room is a speakeasy-inspired fine dining space offering a 14-course omakase experience. The intimate, dramatic atmosphere sets the stage for featured steaks, seafood, and craft cocktails. This is Milwaukee's most upscale hidden dining experience—perfect for those seeking something truly special.",
      mustTry: "14-Course Omakase, Featured Steaks, Craft Cocktails",
      insiderTip: "Reservations required. This is an experience, not just a meal—plan for a full evening.",
      bestFor: "Special celebrations, fine dining enthusiasts, memorable experiences",
      howToFind: "Enter through The Studio at Saint Kate hotel. Private dining reservations required.",
    },
    {
      name: "Foundation Tiki Bar",
      neighborhood: "Riverwest",
      style: "Hidden Tiki Paradise",
      priceRange: "$$",
      address: "2718 N Bremen St, Milwaukee, WI 53212",
      description: "Behind an unassuming Riverwest facade lies a full-tilt tiki paradise in the tradition of Trader Vic's and classic 1950s Polynesian-pop establishments. Since 1995, Foundation has transported guests to the tropics with an immersive decor experience and a lengthy drink menu featuring both classic and reimagined tiki cocktails. The transformation from ordinary exterior to exotic interior is part of the magic.",
      mustTry: "Mai Tai, Zombie, Blue Hawaiian, Singapore Sling",
      insiderTip: "The outside doesn't give it away—trust the location and walk in. Reservations recommended for large groups.",
      bestFor: "Tiki enthusiasts, tropical escapism, Riverwest adventures",
      howToFind: "Unassuming exterior on N Bremen Street in Riverwest. The magic reveals itself inside.",
    },
    {
      name: "Swingin' Door Exchange",
      neighborhood: "Downtown",
      style: "Historic Prohibition-Era Saloon",
      priceRange: "$$",
      address: "219 E Michigan St, Milwaukee, WI 53202",
      description: "Located in the historic Mackie Building (completed in 1879), Swingin' Door Exchange opened as the Grain Exchange Tavern in 1933—the year Prohibition was repealed. The stunning Victorian architecture, stained-glass windows, and wood-paneled walls create an authentic step back in time. The swinging doors that give it its name add to the classic saloon atmosphere.",
      mustTry: "Friday Fish Fry, Classic Cocktails, Daily Specials",
      insiderTip: "No reservations—first come, first served. The historic architecture alone is worth the visit.",
      bestFor: "History buffs, classic Milwaukee, Friday fish fry",
      howToFind: "Enter through the iconic swinging doors in the historic Mackie Building on E Michigan Street.",
    },
  ],
};

const faqs = [
  {
    question: "What is Milwaukee's best speakeasy?",
    answer: "Shanghai in Black Cat Alley was voted the #1 speakeasy in America by USA Today readers in 2025. For a more classic cocktail experience, Bryant's Cocktail Lounge has been serving since 1938 with over 450 unique cocktails. Don's TV & Repair offers the most theatrical hidden entrance through a fake TV repair shop.",
  },
  {
    question: "Do I need a password to enter Milwaukee speakeasies?",
    answer: "Some speakeasies require passwords: Don's TV & Repair changes theirs regularly (check social media), SafeHouse lets you complete a fun 'clearance test' if you don't know it, and Leo Lounge's password relates to its name. Most others—like Bryant's, Shanghai, and At Random—don't require passwords but may need reservations.",
  },
  {
    question: "What should I wear to a Milwaukee speakeasy?",
    answer: "Most Milwaukee speakeasies are upscale casual—think nice jeans and a button-down or a cocktail dress. Blu at The Pfister and The Dark Room at Saint Kate warrant dressier attire. Dive-style spots like At Random and Foundation are more casual. When in doubt, dress a bit nicer than you would for a regular bar.",
  },
  {
    question: "Do I need reservations for Milwaukee speakeasies?",
    answer: "Shanghai requires reservations due to its small size. The Dark Room at Saint Kate requires private dining reservations. The Loon Room, Bryant's, and most others accept walk-ins but can get busy on weekends. For groups of 4+, calling ahead is always recommended, especially on Friday and Saturday nights.",
  },
  {
    question: "Which Milwaukee speakeasies have the best cocktails?",
    answer: "Bryant's Cocktail Lounge invented the Pink Squirrel and offers 450+ cocktails with no menu—just trust the bartender. The Tin Widow has Milwaukee's largest gin (200+) and whiskey (250+) collections. Shanghai specializes in absinthe service and seasonal craft cocktails. Tied House focuses on innovative, market-fresh ingredients.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    headline: "14 Best Speakeasies & Hidden Bars in Milwaukee: A Local's Guide [2026]",
    description: "Discover Milwaukee's best speakeasies and hidden bars, from the #1 rated Shanghai to classic cocktail lounges like Bryant's. Find secret entrances, passwords, and insider tips.",
    image: "https://www.discover-milwaukee.com/images/milwaukee-speakeasies.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee" },
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    mainEntityOfPage: "https://www.discover-milwaukee.com/milwaukee-speakeasies",
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Milwaukee Speakeasies", item: "https://www.discover-milwaukee.com/milwaukee-speakeasies" },
    ],
  },
};

export default function MilwaukeeSpeakeasies() {
  const SpeakeasyCard = ({ spot }) => (
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
      {spot.howToFind && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>How to find it:</strong> {spot.howToFind}</p>
        </div>
      )}
      {spot.insiderTip && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.3)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {spot.insiderTip}</p>
        </div>
      )}
      {spot.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>14 Best Speakeasies & Hidden Bars in Milwaukee: Secret Bars Guide [2026]</title>
        <meta name="description" content="Discover Milwaukee's best speakeasies and hidden bars including Shanghai (#1 in America), Bryant's Cocktail Lounge, Don's TV & Repair, and more secret cocktail spots." />
        <meta name="keywords" content="milwaukee speakeasies, hidden bars milwaukee, secret bars milwaukee, cocktail bars milwaukee, best speakeasy milwaukee, shanghai milwaukee, bryant's cocktail lounge, don's tv repair milwaukee, safehouse milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-speakeasies" />

        <meta property="og:title" content="14 Best Speakeasies & Hidden Bars in Milwaukee [2026]" />
        <meta property="og:description" content="From the #1 rated Shanghai to classic Bryant's Cocktail Lounge, discover Milwaukee's best speakeasies, hidden bars, and secret cocktail spots." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-speakeasies" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-speakeasies.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-speakeasies.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>NIGHTLIFE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              14 Best Speakeasies & Hidden Bars in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee's speakeasy scene is thriving. From secret entrances to password-protected doors, discover the city's best hidden cocktail spots.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#hidden-bars" style={{ color: c.green2, fontSize: "14px" }}>Hidden Bars</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#cocktail-lounges" style={{ color: c.green2, fontSize: "14px" }}>Cocktail Lounges</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#secret-entrances" style={{ color: c.green2, fontSize: "14px" }}>Secret Entrances</a>
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
              <dd style={{ color: "#444", margin: 0 }}>Best Speakeasies in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Shanghai, Bryant's Cocktail Lounge, At Random, The Tin Widow, Don's TV & Repair</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Speakeasies</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's most acclaimed hidden cocktail bars—the spots that have earned national recognition and local devotion.
            </p>
            {speakeasies.bestOverall.map((spot, i) => <SpeakeasyCard key={i} spot={spot} />)}
          </section>

          <section id="hidden-bars" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>True Hidden Bars</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Secret spots with passwords, hidden doors, and mysterious entrances that make finding them half the fun.
            </p>
            {speakeasies.hiddenBars.map((spot, i) => <SpeakeasyCard key={i} spot={spot} />)}
          </section>

          <section id="cocktail-lounges" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Upscale Cocktail Lounges</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Sophisticated spots with speakeasy ambiance and craft cocktail expertise.
            </p>
            {speakeasies.cocktailLounges.map((spot, i) => <SpeakeasyCard key={i} spot={spot} />)}
          </section>

          <section id="secret-entrances" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Unique Secret Entrances</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Bars with the most memorable ways in—from historic swinging doors to hidden tiki paradises.
            </p>
            {speakeasies.secretEntrances.map((spot, i) => <SpeakeasyCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-cocktail-bars-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Cocktail Bars →
              </Link>
              <Link href="/date-ideas-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Date Ideas →
              </Link>
              <Link href="/best-rooftop-bars-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Rooftop Bars →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Nightlife Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New speakeasies, cocktail events, and Milwaukee nightlife news.</p>
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
