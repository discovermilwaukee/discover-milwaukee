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

const breakfastSpots = {
  bestOverall: [
    {
      name: "Blue's Egg + Bakery",
      neighborhood: "Wauwatosa",
      style: "Creative American Breakfast",
      priceRange: "$$",
      address: "317 N 76th St, Milwaukee, WI 53213",
      description: "Blue's Egg has earned its reputation as Milwaukee's most beloved breakfast destination, consistently voted best breakfast and brunch in the city. Their legendary hash browns are the stuff of local legend, and the in-house bakery turns out fresh pastries daily. Creative twists on classics like their inventive egg dishes pair perfectly with freshly baked bread. Expect a wait on weekends—it's worth it.",
      mustTry: "Legendary Hash Browns, Build Your Own Omelet, Fresh Bakery Pastries",
      insiderTip: "Make a reservation through Tock for parties up to 6 to skip the weekend wait. The bakery items sell out early.",
      bestFor: "Breakfast purists, creative egg dishes, weekend brunch crowds",
    },
    {
      name: "Uncle Wolfie's Breakfast Tavern",
      neighborhood: "Brewers Hill / Downtown",
      style: "Elevated Comfort Breakfast",
      priceRange: "$$",
      address: "234 E Vine St, Milwaukee, WI 53212",
      description: "Uncle Wolfie's brings inventive comfort to Milwaukee's brunch scene with two vibrant locations. Their menu elevates classic breakfast fare with creative twists—think Bananas Foster Oatmeal and Sweet Potato Pie French Toast. The smash burgers for brunch and inventive Benedicts have earned a devoted following. House Bloody Marys with a beer chaser are a local tradition.",
      mustTry: "Bananas Foster Oatmeal, Sweet Potato Pie French Toast, House Bloody Mary",
      insiderTip: "The Broadway location in Downtown is newer and often has shorter waits than the original Brewers Hill spot.",
      bestFor: "Creative brunch lovers, inventive cocktails, hip atmosphere",
    },
    {
      name: "Cafe Benelux",
      neighborhood: "Third Ward",
      style: "European-Inspired Breakfast",
      priceRange: "$$",
      address: "346 N Broadway, Milwaukee, WI 53202",
      description: "Located in the heart of the vibrant Third Ward, Cafe Benelux brings Belgian and Dutch influences to Milwaukee's breakfast scene. Everything is made from scratch with organic, locally sourced ingredients. Their authentic Liege waffles are the real deal, and the massive Belgian beer selection makes this a unique brunch destination. The rooftop patio is Milwaukee's best.",
      mustTry: "Authentic Liege Waffle, Belgian-Style Breakfast, Famous Bloody Mary",
      insiderTip: "Grab a seat on the rooftop patio in warm weather—it's one of Milwaukee's best outdoor dining spots.",
      bestFor: "European flair, rooftop dining, Third Ward exploring",
    },
    {
      name: "Honeypie Cafe",
      neighborhood: "Bay View",
      style: "Elevated Diner Fare",
      priceRange: "$$",
      address: "2643 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Honeypie utilizes Wisconsin ingredients to craft stunning elevated diner fare that feels like it came from grandma's kitchen—if grandma happened to be a trained chef. The pie is the specialty of the house (save room!), but the breakfast menu holds its own with hearty, locally-sourced dishes that showcase the best of Wisconsin produce and dairy.",
      mustTry: "Any Seasonal Pie, Scratch-Made Breakfast, Local Coffee",
      insiderTip: "Always save room for pie—it's not just a name, it's a mission. The seasonal flavors rotate and sell out.",
      bestFor: "Pie lovers, farm-to-table fans, Bay View locals",
    },
    {
      name: "Story Hill BKC",
      neighborhood: "Story Hill",
      style: "Upper Midwest Inspired",
      priceRange: "$$$",
      address: "5100 W Bluemound Rd, Milwaukee, WI 53208",
      description: "From the team behind Blue's Egg, Story Hill BKC is a wine shop and restaurant hybrid that serves some of Milwaukee's best breakfasts. As a multi-year James Beard Foundation Semifinalist, they offer Upper Midwest-inspired dishes for weekend brunch with global technique. The curated bottle shop selection of wines adds a unique shopping element.",
      mustTry: "Weekend Brunch Menu, Wine Pairing, Upper Midwest Specialties",
      insiderTip: "Come for brunch Saturday or Sunday (9am-2pm), then browse their excellent wine and craft beer selection.",
      bestFor: "Wine lovers, upscale brunch, James Beard-caliber dining",
    },
  ],
  classicDiners: [
    {
      name: "Miss Katie's Diner",
      neighborhood: "Near Marquette",
      style: "Classic 1950s Diner",
      priceRange: "$",
      address: "1900 W Clybourn St, Milwaukee, WI 53233",
      description: "Miss Katie's has been serving classic American comfort food since 1985, and the '50s throwback atmosphere transports you to a simpler time. Located just two blocks from Marquette campus, this beloved institution is known for its huge omelet selection and generous portions. The full bar and all-day breakfast make it perfect for any appetite.",
      mustTry: "Build Your Own Omelet, Classic Breakfast Platter, Diner Favorites",
      insiderTip: "Open Monday-Friday 8am-8pm. The portions are massive—come hungry or plan to take half home.",
      bestFor: "Classic diner experience, huge omelets, Marquette area dining",
    },
    {
      name: "Ma Fischer's",
      neighborhood: "Lower East Side",
      style: "24-Hour Diner Institution",
      priceRange: "$",
      address: "2214 N Farwell Ave, Milwaukee, WI 53202",
      description: "Serving Milwaukee's iconic East Side since 1932, Ma Fischer's is a true 24-hour diner that never closes. Get the requisite eggs, waffles, and pancakes, plus big cheesy omelets any time of day or night. The classic small-town diner feel with friendly staff has made this a neighborhood institution for nearly a century.",
      mustTry: "Fluffy Pancakes, Cheesy Omelets, Full Menu Available 24/7",
      insiderTip: "Open 24 hours, 7 days a week. Perfect for late-night breakfast cravings or early morning fuel.",
      bestFor: "Night owls, classic diner fare, East Side locals",
    },
    {
      name: "George Webb",
      neighborhood: "Multiple Locations",
      style: "Milwaukee Diner Chain",
      priceRange: "$",
      address: "812 N Old World 3rd St, Milwaukee, WI 53203",
      description: "George Webb is a Milwaukee institution—the local diner chain that's been serving burgers and breakfast to generations of Milwaukeeans. The downtown Old World Third Street location is open 24 hours, making it perfect for post-game celebrations or late-night cravings. No frills, just reliable diner food at honest prices.",
      mustTry: "Classic Breakfast, George Webb Burger, Coffee",
      insiderTip: "The downtown location is open 24 hours. Multiple locations throughout Milwaukee mean there's always one nearby.",
      bestFor: "Quick breakfast, late night, budget-friendly dining",
    },
    {
      name: "Comet Cafe",
      neighborhood: "Lower East Side",
      style: "Retro Diner with Craft Touches",
      priceRange: "$$",
      address: "1947 N Farwell Ave, Milwaukee, WI 53202",
      description: "A Milwaukee staple since 2005, Comet Cafe serves scratch-made comfort food with a creative edge. Breakfast is served until 3pm daily, and the menu includes classics alongside vegan options for those who love bacon in spirit only. The retro atmosphere and craft beer selection elevate this beyond typical diner fare.",
      mustTry: "Bacon Pancakes, Vegan Options, Craft Beer Selection",
      insiderTip: "No reservations—first come, first served. During peak hours expect a wait. Breakfast served until 3pm.",
      bestFor: "Creative comfort food, vegan-friendly, East Side vibes",
    },
  ],
  trendyBrunchSpots: [
    {
      name: "Black Sheep",
      neighborhood: "Walker's Point",
      style: "Wine Bar Brunch",
      priceRange: "$$$",
      address: "216 S 2nd St, Milwaukee, WI 53204",
      description: "Black Sheep is a relaxed yet upscale wine tap bar in Walker's Point that's become famous for its Nutella waffles and pancake-battered cheese curds. Weekend brunch starts at 10am with Milwaukee's first DJ brunch featuring music from noon to 4pm on Sundays. The industrial-chic space with exposed brick and original wood flooring sets the mood.",
      mustTry: "Nutella Waffles, Pancake-Battered Cheese Curds, Brunch Cocktails",
      insiderTip: "Sunday DJ brunch from noon-4pm is a vibe. Gluten-free, vegetarian, and vegan options available.",
      bestFor: "Wine lovers, trendy brunch scene, Walker's Point crowds",
    },
    {
      name: "Sweet Diner",
      neighborhood: "Third Ward",
      style: "Modern Upscale Diner",
      priceRange: "$$",
      address: "300 N Broadway, Milwaukee, WI 53202",
      description: "SweetDiner redefines the classic brunch experience with a bright, modern setting in the Historic Third Ward. The menu blends comfort and style with options like Creme Brulee French Toast, Mediterranean Eggs Benedict, and Chicken & Waffles. It's where Instagram-worthy presentation meets serious culinary skill.",
      mustTry: "Creme Brulee French Toast, Chicken & Waffles, Cinnamon Roll French Toast",
      insiderTip: "The Third Ward location is perfect for combining brunch with a visit to the Milwaukee Public Market.",
      bestFor: "Instagram-worthy brunch, Third Ward exploring, modern twists",
    },
    {
      name: "The Wicked Hop",
      neighborhood: "Third Ward",
      style: "Bloody Mary Destination",
      priceRange: "$$",
      address: "345 N Broadway, Milwaukee, WI 53202",
      description: "The Wicked Hop is rumored to have Milwaukee's best Bloody Mary, which immediately propels it to the top of many breakfast lists. Over 20 years in the Third Ward, they've perfected Bloody Marys, burgers, and brunch. The breakfast tacos and crispy cheese curds are must-orders alongside their signature cocktails.",
      mustTry: "Milwaukee's Best Bloody Mary, Breakfast Tacos, Crispy Cheese Curds",
      insiderTip: "Weekend brunch starts at 9am. Come for the Bloody Mary, stay for the full brunch experience.",
      bestFor: "Bloody Mary enthusiasts, Third Ward brunch, casual atmosphere",
    },
    {
      name: "Toast Milwaukee",
      neighborhood: "Walker's Point",
      style: "Hip Multi-Level Brunch",
      priceRange: "$$",
      address: "231 S 2nd St, Milwaukee, WI 53204",
      description: "Toast has a chilled-out vibe with hip, trendy ambiance spread across multiple levels of mismatched seating. Their signature mimosa flights let you sample various flavors, and the cinnamon roll pancakes are legendary. Post-church crowds mix with creatives in this quintessential Milwaukee brunch destination.",
      mustTry: "Cinnamon Roll Pancakes, Mimosa Flight, Rise & Shine with Braised Brisket",
      insiderTip: "Reservations recommended on weekends. Gluten-free, vegetarian, and vegan options available.",
      bestFor: "Mimosa flights, trendy atmosphere, group brunch",
    },
    {
      name: "Engine Company No. 3",
      neighborhood: "Walker's Point",
      style: "Farm-to-Table in a Fire Station",
      priceRange: "$$",
      address: "217 W National Ave, Milwaukee, WI 53204",
      description: "Housed in a renovated historic fire station, Engine Company No. 3 brings a unique tapas-style brunch experience to Walker's Point. Their philosophy centers on preserving the family farm way of life through close partnerships with Wisconsin's best producers. The Spanish influences create a brunch menu unlike anywhere else in Milwaukee.",
      mustTry: "Tapas-Style Brunch Plates, Locally Sourced Eggs, Seasonal Specialties",
      insiderTip: "The building's history as a fire station adds unique character. Perfect for adventurous brunch eaters.",
      bestFor: "Farm-to-table dining, unique atmosphere, Spanish influences",
    },
  ],
  neighborhoodGems: [
    {
      name: "Mad Rooster Cafe",
      neighborhood: "West Milwaukee",
      style: "Farm-Themed Scratch Kitchen",
      priceRange: "$$",
      address: "4401 W Greenfield Ave, West Milwaukee, WI 53214",
      description: "Mad Rooster is housed in a kitschy big red barn and sources many ingredients from local farms. Established in 2013, they've built a reputation for fresh, from-scratch cooking including family-recipe Greek yogurt and their own signature coffee blend. The creative Benedicts and French toast options make this worth the drive.",
      mustTry: "Avocado Salmon Benedict, Banana Foster French Toast, Fresh Squeezed OJ",
      insiderTip: "Open Monday-Friday 7am-3pm. The farmhouse atmosphere is kid-friendly and welcoming.",
      bestFor: "Families, farm-fresh ingredients, unique Benedicts",
    },
    {
      name: "Wonderland Diner",
      neighborhood: "Riverwest",
      style: "Artsy Retro Diner",
      priceRange: "$$",
      address: "732 E Burleigh St, Milwaukee, WI 53212",
      description: "Wonderland is a charming retro-style diner in Riverwest featuring vintage decor, old-fashioned diner chairs, and a larger-than-life mural. The menu boasts signature dishes like the Elote Omelette and Country Fried Steak, alongside unique vegan options. The relaxed yet lively neighborhood feel makes it a Riverwest favorite.",
      mustTry: "Elote Omelette, Country Fried Steak, Vegan Mac",
      insiderTip: "Reservations only for groups of 6-15. Otherwise, walk in and soak up the artsy Riverwest vibe.",
      bestFor: "Riverwest locals, artsy atmosphere, vegan-friendly options",
    },
    {
      name: "Centraal Grand Cafe & Tappery",
      neighborhood: "Bay View",
      style: "European-Inspired All-Day",
      priceRange: "$$",
      address: "2306 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Cafe Centraal brings Lowlands Europe to Bay View with a full brunch menu served every day starting at 8am. Fresh ingredients cooked from scratch with a focus on local purveyors for eggs, dairy, bread, honey, syrup, and meats. The robust brunch cocktail program and European-inspired menu set it apart.",
      mustTry: "European-Style Brunch, Brunch Cocktails, Local Ingredients",
      insiderTip: "Open early at 8am every day—perfect for early risers in Bay View.",
      bestFor: "European flair, Bay View brunch, craft beer lovers",
    },
    {
      name: "Cafe Hollander",
      neighborhood: "East Side (Downer Ave)",
      style: "Dutch-Belgian Breakfast",
      priceRange: "$$",
      address: "2608 N Downer Ave, Milwaukee, WI 53211",
      description: "Cafe Hollander brings European flair to Milwaukee's East Side with Dutch American Pancakes and Belgian Waffles. The Cinnamon Streusel French Toast earns consistent raves. Four locations across Milwaukee make this a reliable go-to for weekend brunch with a euro-style menu and house-made cheese curds.",
      mustTry: "Cinnamon Streusel French Toast, Belgian Waffle, Brew City Benedict",
      insiderTip: "Breakfast is served Monday-Friday 8am-11am and Saturday-Sunday 8am-2pm. Multiple locations available.",
      bestFor: "European breakfast, multiple locations, consistent quality",
    },
  ],
  specialtyBreakfast: [
    {
      name: "Golden Nest Pancakes & Cafe",
      neighborhood: "Wauwatosa",
      style: "Pancake Specialist",
      priceRange: "$$",
      address: "11250 W Burleigh St, Wauwatosa, WI 53222",
      description: "Golden Nest makes some of the top pancakes in Milwaukee, including their signature red velvet pancakes. Classic and California-inspired dishes are freshly prepared with local ingredients. The coffee and espresso bar, weekday specials, and creative pancake flavors have earned a devoted following.",
      mustTry: "Signature Red Velvet Pancakes, California-Inspired Benedicts, Skillets",
      insiderTip: "Open weekdays 7am-2pm, weekends 7am-3pm. The red velvet pancakes are worth the trip to Wauwatosa.",
      bestFor: "Pancake lovers, creative flavors, California-inspired dishes",
    },
    {
      name: "Mimosa",
      neighborhood: "Franklin / Brookfield",
      style: "Fresh & Local Brunch",
      priceRange: "$$",
      address: "9405 S 27th St, Franklin, WI 53132",
      description: "Commonly called the best brunch in Milwaukee, Mimosa serves everything fresh and local—from cage-free eggs to organic Colectivo coffee. The Churro French Toast, Chocolate Almberry Pancakes, and Grandma's Benedict (with pulled chicken and chorizo gravy) showcase their creative approach to breakfast classics.",
      mustTry: "Churro French Toast, Chicken and Waffles, Fresh Blueberry Pancakes",
      insiderTip: "Two locations in Franklin and Brookfield. Open daily 7:30am-2:30pm. Everything is made fresh.",
      bestFor: "Fresh local ingredients, creative pancakes, family brunch",
    },
    {
      name: "Tupelo Honey",
      neighborhood: "Downtown / Third Ward",
      style: "Southern-Inspired Breakfast",
      priceRange: "$$",
      address: "511 N Broadway, Suite 100, Milwaukee, WI 53202",
      description: "Tupelo Honey brings Southern hospitality and scratch-made comfort food to Milwaukee's breakfast scene. Fluffy buttermilk biscuits, stone-ground goat cheese grits, and apple cider bacon represent the best of Southern breakfast tradition. The weekend brunch draws crowds for their famous fried chicken.",
      mustTry: "Fluffy Buttermilk Biscuits, Stone-Ground Grits, Fried Chicken",
      insiderTip: "Weekend breakfast starts at 9am. The Southern-style brunch is perfect for those missing home cooking.",
      bestFor: "Southern comfort, biscuits and grits, downtown dining",
    },
    {
      name: "Beans & Barley",
      neighborhood: "East Side",
      style: "Vegetarian-Friendly Breakfast",
      priceRange: "$$",
      address: "1901 E North Ave, Milwaukee, WI 53202",
      description: "An iconic East Side fixture since 1973, Beans & Barley serves vegetarian and non-vegetarian options for breakfast with a health-conscious approach. Find buttermilk pancakes alongside nourishing grain bowls and inventive signatures like stuffed golden hash browns. The attached market makes this a unique breakfast destination.",
      mustTry: "Stuffed Hash Browns, Breakfast Burritos, Three-Egg Omelets",
      insiderTip: "Weekday breakfast 8am-11am. Browse the market for local and organic groceries after your meal.",
      bestFor: "Vegetarians, health-conscious diners, East Side shopping",
    },
  ],
};

const faqs = [
  {
    question: "What is the best breakfast spot in Milwaukee?",
    answer: "Blue's Egg + Bakery is consistently voted Milwaukee's best breakfast and brunch, known for legendary hash browns and creative egg dishes. Uncle Wolfie's Breakfast Tavern is a close second with inventive comfort food like Bananas Foster Oatmeal and Sweet Potato Pie French Toast.",
  },
  {
    question: "Where can I get 24-hour breakfast in Milwaukee?",
    answer: "Ma Fischer's on the East Side has been serving 24-hour breakfast since 1932—Milwaukee's original all-night diner. George Webb's downtown location on Old World Third Street is also open 24 hours for classic diner fare any time of day or night.",
  },
  {
    question: "What are the best pancakes in Milwaukee?",
    answer: "Golden Nest Pancakes & Cafe in Wauwatosa specializes in creative pancakes including signature red velvet. Mimosa in Franklin is known for fresh blueberry pancakes and Churro French Toast. Comet Cafe's bacon pancakes and Toast Milwaukee's cinnamon roll pancakes are also local favorites.",
  },
  {
    question: "Where should I go for brunch in Milwaukee's Third Ward?",
    answer: "The Third Ward offers excellent brunch options: Cafe Benelux for European-inspired dishes and Milwaukee's best rooftop, Sweet Diner for modern upscale diner fare, and The Wicked Hop for Milwaukee's best Bloody Mary. All are within walking distance of the Milwaukee Public Market.",
  },
  {
    question: "What are the best breakfast spots with vegan options in Milwaukee?",
    answer: "Comet Cafe offers extensive vegan options alongside their comfort food menu. Beans & Barley on the East Side specializes in vegetarian-friendly breakfast. Wonderland Diner in Riverwest features unique vegan options including vegan mac. Black Sheep also offers gluten-free, vegetarian, and vegan alternatives.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
    "headline": "20 Best Breakfast Spots in Milwaukee: From Classic Diners to Trendy Brunch [2026]",
    "description": "Discover Milwaukee's best breakfast restaurants including Blue's Egg, Uncle Wolfie's, classic diners, trendy brunch spots, and neighborhood gems serving the city's finest morning meals.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-breakfast-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Breakfast Milwaukee", "item": "https://www.discover-milwaukee.com/best-breakfast-milwaukee" }
    ]
  }
};

export default function BestBreakfastMilwaukee() {
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
        <title>20 Best Breakfast in Milwaukee: Diners, Brunch Spots & Pancakes [2026]</title>
        <meta name="description" content="Discover Milwaukee's best breakfast spots from legendary Blue's Egg to 24-hour diners, trendy brunch spots, and specialty pancake houses. Your complete guide to breakfast in Milwaukee." />
        <meta name="keywords" content="best breakfast milwaukee, breakfast spots milwaukee, where to eat breakfast milwaukee, milwaukee diners, brunch milwaukee, pancakes milwaukee, best brunch milwaukee, milwaukee breakfast restaurants" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-breakfast-milwaukee" />

        <meta property="og:title" content="20 Best Breakfast Spots in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From legendary Blue's Egg to 24-hour diners and trendy brunch spots, find Milwaukee's best breakfast restaurants." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-breakfast-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/best-breakfast-milwaukee.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/best-breakfast-milwaukee.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>BREAKFAST & BRUNCH</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Breakfast in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              Milwaukee takes breakfast seriously. From legendary hash browns to 24-hour diners and DJ brunch, here's where to start your day.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#classic-diners" style={{ color: c.green2, fontSize: "14px" }}>Classic Diners</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#trendy-brunch" style={{ color: c.green2, fontSize: "14px" }}>Trendy Brunch</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#neighborhood-gems" style={{ color: c.green2, fontSize: "14px" }}>Neighborhood Gems</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#specialty" style={{ color: c.green2, fontSize: "14px" }}>Specialty Breakfast</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orange, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Topic</dt>
              <dd style={{ color: "#444", margin: 0 }}>Best Breakfast in Milwaukee</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Top picks</dt>
              <dd style={{ color: "#444", margin: 0 }}>Blue's Egg + Bakery, Uncle Wolfie's Breakfast Tavern, Cafe Benelux, Honeypie Cafe, Story Hill BKC</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#999", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-06-10">2026-06-10</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>



          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Breakfast in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The breakfast spots that define Milwaukee's morning dining scene. These are the places locals line up for every weekend.
            </p>
            {breakfastSpots.bestOverall.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="classic-diners" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Classic Diners</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Old-school breakfast done right at Milwaukee institutions. No frills, just reliable comfort food and friendly service.
            </p>
            {breakfastSpots.classicDiners.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="trendy-brunch" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Trendy Brunch Spots</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Hip, modern brunch destinations with creative menus and Instagram-worthy plates. Where Milwaukee's brunch scene shines.
            </p>
            {breakfastSpots.trendyBrunchSpots.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="neighborhood-gems" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Neighborhood Gems</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Local favorites worth seeking out across Milwaukee's diverse neighborhoods. Less scene, more community.
            </p>
            {breakfastSpots.neighborhoodGems.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="specialty" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Specialty Breakfast</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Pancakes, waffles, Southern comfort, and unique specialties. When you know exactly what you're craving.
            </p>
            {breakfastSpots.specialtyBreakfast.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-brunch-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Brunch →
              </Link>
              <Link href="/best-coffee-shops-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Coffee Shops →
              </Link>
              <Link href="/best-bakeries-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Bakeries →
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
