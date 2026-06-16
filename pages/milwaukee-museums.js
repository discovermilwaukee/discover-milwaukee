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

const museums = {
  bestOverall: [
    {
      name: "Milwaukee Art Museum",
      neighborhood: "Downtown Lakefront",
      type: "Art Museum",
      priceRange: "$22 Adults",
      address: "700 N Art Museum Dr, Milwaukee, WI 53202",
      description: "The Milwaukee Art Museum is a world-class destination featuring the iconic Santiago Calatrava-designed Quadracci Pavilion with its stunning Burke Brise Soleil—movable wings that open and close daily. The museum houses over 30,000 works spanning antiquity to the present, including significant holdings of American decorative arts, German Expressionism, and folk art.",
      highlights: ["Burke Brise Soleil wings opening ceremony", "Collection spanning 5,000 years of art", "Lakefront location with stunning views", "Free admission for kids 12 and under"],
      insiderTip: "Visit at 10am, noon, or museum closing to watch the dramatic wings opening ceremony. Thursday evenings offer pay-what-you-wish admission from 4-8pm.",
      bestFor: "Architecture lovers, art enthusiasts, photographers, family outings",
      freeDay: "First Thursday of the month, plus two annual free days",
    },
    {
      name: "Milwaukee Public Museum",
      neighborhood: "Downtown",
      type: "Natural History",
      priceRange: "$19 Adults",
      address: "800 W Wells St, Milwaukee, WI 53233",
      description: "In its final year at the current location before moving to the new Nature & Culture Museum of Wisconsin in 2027, MPM is celebrating with 'Greatest Hits' exhibits and special programming. Experience the iconic Streets of Old Milwaukee, the immersive Costa Rican Rainforest, European Village, and the Puelicher Butterfly Vivarium featuring live butterflies.",
      highlights: ["Streets of Old Milwaukee", "Costa Rican Rainforest", "Butterfly Vivarium", "Daniel Soref Planetarium", "Third Planet dinosaur exhibits"],
      insiderTip: "2026 is the museum's final year in this building—don't miss the month-long celebrations honoring iconic exhibits. The planetarium shows are worth the extra ticket.",
      bestFor: "Families, natural history enthusiasts, nostalgic Milwaukee experiences",
      freeDay: "First Thursday of every month; Milwaukee County residents save $2 daily",
    },
    {
      name: "Discovery World",
      neighborhood: "Downtown Lakefront",
      type: "Science & Technology",
      priceRange: "$22 Adults",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Milwaukee's premier science and technology museum offers hands-on exhibits exploring the Great Lakes, innovation, and engineering. Home to the Reiman Aquarium with freshwater wonders, Les Paul's House of Sound celebrating Milwaukee's guitar pioneer, flight simulators, and the new Life of Water Freshwater Exhibit opening in 2026.",
      highlights: ["Reiman Aquarium", "Les Paul's House of Sound", "Great Lakes interactive model", "Flight and racing simulators", "Life of Water Freshwater Exhibit (2026)"],
      insiderTip: "May is Milwaukee Month with $15 admission for city residents. The rooftop deck offers incredible lake views—perfect after exploring exhibits.",
      bestFor: "Families with kids, science enthusiasts, Great Lakes admirers",
      freeDay: "Check website for special Milwaukee Month pricing in May",
    },
    {
      name: "Harley-Davidson Museum",
      neighborhood: "Menomonee Valley",
      type: "Specialty/History",
      priceRange: "$22 Adults, $8 Kids",
      address: "400 W Canal St, Milwaukee, WI 53201",
      description: "Celebrating over a century of the iconic American motorcycle brand born in Milwaukee, this 20-acre campus features over 450 motorcycles and artifacts. From vintage bikes to Elvis Presley's motorcycle, the museum traces Harley-Davidson's impact on American culture, engineering innovation, and the open road spirit.",
      highlights: ["450+ motorcycles on display", "Elvis Presley's Harley", "Engine Room experience", "Motorcycle customization exhibits", "The Garage restaurant"],
      insiderTip: "Allow 3-4 hours to fully explore. The outdoor areas and Sculpture Garden are free to visit. Rent a Harley for an authentic Milwaukee experience.",
      bestFor: "Motorcycle enthusiasts, American history buffs, unique Milwaukee experiences",
      freeDay: "None, but kids under 5 are free",
    },
    {
      name: "America's Black Holocaust Museum",
      neighborhood: "Bronzeville",
      type: "History Museum",
      priceRange: "$15 Adults",
      address: "401 W North Ave, Milwaukee, WI 53212",
      description: "Founded by lynching survivor Dr. James Cameron, this powerful museum chronicles the African American experience from pre-captivity in Africa through slavery, Jim Crow, the Civil Rights Movement, and contemporary issues. With 3,300+ exhibits, it's an essential destination for understanding American history and ongoing struggles for equality.",
      highlights: ["Middle Passage replica ship", "Lynching memorial", "Civil Rights timeline", "Dr. James Cameron's personal story", "Interactive educational exhibits"],
      insiderTip: "Discounted guided tours ($7/person) available Wednesdays for groups of 10 or more. Plan for an emotionally impactful visit—allow 2-3 hours.",
      bestFor: "History enthusiasts, educators, those seeking meaningful cultural experiences",
      freeDay: "Check website for community days",
    },
  ],
  artMuseums: [
    {
      name: "Charles Allis Art Museum",
      neighborhood: "East Side",
      type: "Art/Historic House",
      priceRange: "$15 Adults",
      address: "1801 N Prospect Ave, Milwaukee, WI 53202",
      description: "This 1911 Tudor-style mansion showcases the eclectic art collection of industrialist Charles Allis, featuring works from ancient civilizations to 19th-century French and American paintings. The intimate setting allows visitors to experience art as it was meant to be seen—in a home environment.",
      highlights: ["Asian ceramics and bronzes", "19th-century paintings", "Period furnishings", "Stained glass windows", "Garden views"],
      insiderTip: "Combined admission with Villa Terrace offers significant savings. Thursday evening hours until 8pm provide a quieter visit.",
      bestFor: "Art collectors, historic home enthusiasts, intimate museum experiences",
      freeDay: "First Wednesday of the month",
    },
    {
      name: "Villa Terrace Decorative Arts Museum",
      neighborhood: "North Shore",
      type: "Art/Historic House",
      priceRange: "$15 Adults",
      address: "2220 N Terrace Ave, Milwaukee, WI 53202",
      description: "This Italian Renaissance-style villa overlooking Lake Michigan houses an impressive collection of decorative arts from the 15th through 18th centuries. The Renaissance Garden, one of only a few authentic Italian gardens in America, is a destination unto itself with its terraced design descending to the lake.",
      highlights: ["Renaissance Garden", "Wrought iron collection", "Period furniture", "Lake Michigan views", "Cyril Colnik ironwork"],
      insiderTip: "The garden is spectacular in late spring through fall. Combined admission with Charles Allis is available. Great venue for special events.",
      bestFor: "Garden lovers, decorative arts enthusiasts, wedding photographers",
      freeDay: "First Wednesday of the month",
    },
    {
      name: "Haggerty Museum of Art",
      neighborhood: "Marquette University",
      type: "Art Museum",
      priceRange: "Free",
      address: "1234 W Tory Hill St, Milwaukee, WI 53233",
      description: "Marquette University's art museum offers free admission to view over 6,000 works spanning ancient to contemporary art. Known for rotating exhibitions that challenge and inspire, the Haggerty brings world-class art to Milwaukee's campus community and beyond.",
      highlights: ["Contemporary exhibitions", "Old Master paintings", "Marc Chagall works", "Free admission always", "University setting"],
      insiderTip: "Completely free and open to the public. Check the exhibition schedule before visiting—shows rotate regularly and are often excellent.",
      bestFor: "Budget-conscious art lovers, students, contemporary art enthusiasts",
      freeDay: "Always free",
    },
    {
      name: "Lynden Sculpture Garden",
      neighborhood: "River Hills",
      type: "Outdoor Sculpture",
      priceRange: "$12 Adults",
      address: "2145 W Brown Deer Rd, Milwaukee, WI 53217",
      description: "This 40-acre outdoor museum features over 50 monumental sculptures set among parkland, lake, and woodland. Works by Alexander Archipenko, Henry Moore, Barbara Hepworth, and Mark di Suvero create a unique dialogue between art and nature that changes with the seasons.",
      highlights: ["50+ monumental sculptures", "40 acres of gardens", "Henry Moore sculptures", "Seasonal art programming", "Nature trails"],
      insiderTip: "Bring comfortable walking shoes and allow 2 hours to explore. Different seasons offer dramatically different experiences—fall foliage is spectacular.",
      bestFor: "Outdoor enthusiasts, sculpture lovers, families seeking nature and art",
      freeDay: "Check website for community access days",
    },
  ],
  historyMuseums: [
    {
      name: "Pabst Mansion",
      neighborhood: "Near West Side",
      type: "Historic House",
      priceRange: "$18 Adults",
      address: "2000 W Wisconsin Ave, Milwaukee, WI 53233",
      description: "The grandest home in Milwaukee, this 1892 Flemish Renaissance Revival mansion was built for Captain Frederick Pabst of brewing fame. Featuring 37 rooms with original furnishings, ornate woodwork, and stained glass, it offers an immersive glimpse into Gilded Age Milwaukee.",
      highlights: ["Original Pabst family furnishings", "Ornate Flemish Renaissance woodwork", "Historic brewing memorabilia", "Seasonal specialty tours", "Gift shop with Pabst items"],
      insiderTip: "Book specialty tours in advance—the beer and champagne tours sell out quickly. The self-guided audio tour at noon is a great budget option.",
      bestFor: "Architecture enthusiasts, beer history buffs, Gilded Age fans",
      freeDay: "None, but family tours on Saturdays are more affordable",
    },
    {
      name: "Milwaukee County Historical Society",
      neighborhood: "Downtown",
      type: "History Museum",
      priceRange: "$7 Adults",
      address: "910 N Old World 3rd St, Milwaukee, WI 53203",
      description: "Located in a stunning 1913 Beaux-Arts building, this museum chronicles Milwaukee County's rich history through changing exhibits and permanent collections. The research library provides invaluable resources for genealogists and local history researchers.",
      highlights: ["Changing historical exhibits", "Research library", "Milwaukee brewing history", "Architectural landmark building", "Genealogy resources"],
      insiderTip: "The research library is a hidden gem for anyone tracing Milwaukee family history. Check for special lecture series and walking tours.",
      bestFor: "Local history buffs, genealogists, Milwaukee natives",
      freeDay: "Check website for community days",
    },
    {
      name: "Jewish Museum Milwaukee",
      neighborhood: "Lower East Side",
      type: "History/Cultural",
      priceRange: "$9 Adults",
      address: "1360 N Prospect Ave, Milwaukee, WI 53202",
      description: "This museum celebrates Jewish history, culture, and values through permanent and rotating exhibitions. Explore Milwaukee's significant Jewish community history alongside broader themes of immigration, tradition, and cultural identity.",
      highlights: ["Holocaust remembrance exhibits", "Milwaukee Jewish community history", "Cultural celebrations", "Educational programs", "Art exhibitions"],
      insiderTip: "The museum hosts excellent cultural events and lectures. Check the calendar for special programs coinciding with Jewish holidays.",
      bestFor: "Cultural enthusiasts, history buffs, those interested in immigration stories",
      freeDay: "Check website; military families always free",
    },
    {
      name: "Grohmann Museum",
      neighborhood: "Downtown/MSOE",
      type: "Art/Industry",
      priceRange: "$5 Adults",
      address: "1000 N Broadway, Milwaukee, WI 53202",
      description: "Home to the world's most comprehensive art collection depicting human labor, this MSOE museum features 2,000+ paintings and sculptures celebrating work from ancient times to the industrial age. The collection uniquely documents the evolution from handcrafts to machine power.",
      highlights: ["Man at Work collection", "Industrial Revolution art", "Rooftop sculpture garden", "Engineering history", "Award-winning exhibits"],
      insiderTip: "One of Milwaukee's most underrated museums. The rooftop sculpture garden offers downtown views. Extremely affordable admission.",
      bestFor: "Industrial history buffs, art lovers, engineering enthusiasts",
      freeDay: "Saturdays are free",
    },
    {
      name: "North Point Lighthouse Museum",
      neighborhood: "Lake Park",
      type: "Historic Site",
      priceRange: "$8 Adults",
      address: "2650 N Wahl Ave, Milwaukee, WI 53211",
      description: "Climb the 74 steps of this 1888 lighthouse for panoramic views of Lake Michigan and downtown Milwaukee. The museum chronicles Great Lakes maritime history and the lighthouse's role in guiding ships safely to Milwaukee's harbor.",
      highlights: ["Climb to the top", "Lake Michigan views", "Maritime history exhibits", "Historic lens display", "Lake Park setting"],
      insiderTip: "Only open weekends 1-4pm—plan accordingly. The surrounding Lake Park designed by Frederick Law Olmsted is worth exploring before or after.",
      bestFor: "Maritime history fans, photographers, lighthouse enthusiasts",
      freeDay: "None",
    },
  ],
  scienceMuseums: [
    {
      name: "Betty Brinn Children's Museum",
      neighborhood: "Downtown Lakefront",
      type: "Children's Museum",
      priceRange: "$15 Adults & Kids",
      address: "929 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "Milwaukee's premier hands-on museum for children ages 10 and under features interactive exhibits designed to inspire curiosity and learning through play. From a kid-sized Milwaukee neighborhood to water tables and building zones, every exhibit encourages discovery.",
      highlights: ["Hands-on learning exhibits", "Kid-sized Milwaukee neighborhood", "Water play area", "STEM activities", "Toddler-specific areas"],
      insiderTip: "Third Thursday of every month offers free admission 9am-7pm. Morning visits (before 10:30am) tend to be less crowded.",
      bestFor: "Families with young children, early childhood educators, grandparents with grandkids",
      freeDay: "Third Thursday of every month",
    },
    {
      name: "Milwaukee County Zoo",
      neighborhood: "West Side",
      type: "Zoo",
      priceRange: "$18 Adults",
      address: "10001 W Bluemound Rd, Milwaukee, WI 53226",
      description: "Home to over 2,000 animals representing 300+ species, Milwaukee County Zoo spans 190 acres of natural habitats. From African elephants to Australian kangaroos, polar bears to primates, the zoo offers year-round programming and seasonal special events.",
      highlights: ["2,000+ animals", "Adventure Africa exhibit", "Polar bear habitat", "Zoomobile rides", "Kohl's Wild Theater shows"],
      insiderTip: "Summer hours extend to 5pm. Kohl's Wild Theater offers free 15-minute conservation shows Tuesday-Sunday between Memorial Day and Labor Day.",
      bestFor: "Families, animal lovers, outdoor enthusiasts",
      freeDay: "Milwaukee County residents: first Wednesday of the month (limited capacity)",
    },
    {
      name: "MIAD Galleries",
      neighborhood: "Third Ward",
      type: "Art/Design",
      priceRange: "Free",
      address: "273 E Erie St, Milwaukee, WI 53202",
      description: "The Milwaukee Institute of Art & Design houses two museum-quality galleries showcasing contemporary art and design. The Frederick Layton Gallery and Brooks Stevens Gallery present rotating exhibitions featuring established and emerging artists alongside student work.",
      highlights: ["Contemporary art exhibitions", "Industrial design shows", "Student exhibitions", "Free admission", "Third Ward location"],
      insiderTip: "The Senior Exhibition (April-May) showcases exceptional student work. Check the calendar—opening receptions often feature the artists.",
      bestFor: "Contemporary art fans, design enthusiasts, free museum seekers",
      freeDay: "Always free",
    },
    {
      name: "Mitchell Gallery of Flight",
      neighborhood: "Airport",
      type: "Aviation",
      priceRange: "Free",
      address: "5300 S Howell Ave, Milwaukee, WI 53207",
      description: "Located inside Milwaukee Mitchell International Airport, this free museum celebrates southeast Wisconsin's aviation heritage. Named for General Billy Mitchell, the gallery features aircraft exhibits, historical displays, and artifacts from Milwaukee's aviation pioneers.",
      highlights: ["Aviation history exhibits", "General Billy Mitchell artifacts", "Milwaukee aviation pioneers", "Free admission", "No TSA required"],
      insiderTip: "Perfect for early airport arrivals or if picking someone up. Located before TSA security, so anyone can visit without a ticket.",
      bestFor: "Aviation enthusiasts, travelers, history buffs with time to spare",
      freeDay: "Always free",
    },
  ],
  uniqueMuseums: [
    {
      name: "National Bobblehead Hall of Fame & Museum",
      neighborhood: "Walker's Point",
      type: "Specialty",
      priceRange: "$5",
      address: "170 S 1st St, 2nd Floor, Milwaukee, WI 53204",
      description: "The world's only museum dedicated to bobbleheads houses thousands of nodding figures spanning sports, entertainment, politics, and pop culture. From vintage advertising bobbleheads to modern sports collectibles, this quirky museum celebrates an uniquely American art form.",
      highlights: ["World's largest bobblehead collection", "Sports Hall of Fame bobbleheads", "Vintage and rare pieces", "Custom bobblehead creation", "Gift shop with 500+ bobbleheads"],
      insiderTip: "Only $5 admission makes this an affordable add-on to any museum day. The gift shop is dangerous for collectors—budget accordingly.",
      bestFor: "Sports fans, pop culture enthusiasts, quirky museum seekers",
      freeDay: "None, but children under 5 are free",
    },
    {
      name: "Museum of Beer & Brewing",
      neighborhood: "Various Locations",
      type: "Virtual/Traveling",
      priceRange: "Varies",
      address: "Milwaukee, WI (traveling exhibits)",
      description: "This unique institution preserves and presents the proud history of beer and brewing through virtual exhibits and traveling displays. As befitting America's former brewing capital, the museum documents Milwaukee's transformation from a small frontier town to 'Beer City.'",
      highlights: ["Virtual brewery tours", "Brewing artifact collection", "Milwaukee brewing history", "Traveling exhibitions", "Educational programs"],
      insiderTip: "Check their website and social media for pop-up exhibit locations and special events around Milwaukee. Great pairing with actual brewery tours.",
      bestFor: "Beer enthusiasts, Milwaukee history buffs, virtual museum explorers",
      freeDay: "Virtual exhibits often free",
    },
    {
      name: "Lakefront Brewery Tour",
      neighborhood: "Riverwest",
      type: "Brewery Experience",
      priceRange: "$15",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "While not a traditional museum, Lakefront Brewery's legendary tour is a Milwaukee cultural institution. Learn about the city's brewing heritage while sampling beers in a former coal-fired power plant. The entertaining guides make this both educational and hilarious.",
      highlights: ["Entertaining brewery tours", "Beer sampling included", "Historic building", "Friday fish fry", "Milwaukee brewing culture"],
      insiderTip: "Friday tours sell out fast due to their famous fish fry. Book well in advance for weekend tours. The gift shop has excellent Milwaukee beer merch.",
      bestFor: "Beer lovers, Milwaukee visitors, fun group outings",
      freeDay: "None",
    },
    {
      name: "Eisner American Museum of Advertising & Design",
      neighborhood: "Downtown",
      type: "Advertising/Design",
      priceRange: "$5 Suggested",
      address: "208 N Water St, Milwaukee, WI 53202",
      description: "Explore the art of persuasion through this collection of historic advertisements, packaging, and design artifacts. From vintage Milwaukee beer ads to iconic American campaigns, the museum documents how advertising has shaped American culture.",
      highlights: ["Vintage advertising art", "Milwaukee brand history", "Design evolution", "Packaging exhibits", "Marketing memorabilia"],
      insiderTip: "Small but fascinating for anyone interested in design history. Often hosts special exhibits featuring Milwaukee's advertising heritage.",
      bestFor: "Marketing professionals, design enthusiasts, nostalgia seekers",
      freeDay: "Suggested donation only",
    },
  ],
};

const faqs = [
  {
    question: "Which Milwaukee museums offer free admission?",
    answer: "Several Milwaukee museums offer free admission: Haggerty Museum of Art (always free), MIAD Galleries (always free), and Mitchell Gallery of Flight (always free). Many others offer free days: Milwaukee Art Museum (first Thursday), Milwaukee Public Museum (first Thursday), Betty Brinn Children's Museum (third Thursday), Charles Allis and Villa Terrace (first Wednesday), and Grohmann Museum (Saturdays).",
  },
  {
    question: "What is the best museum in Milwaukee for families with kids?",
    answer: "For young children (under 10), Betty Brinn Children's Museum offers the best hands-on experience. Discovery World is excellent for older kids interested in science and technology. The Milwaukee Public Museum appeals to all ages with its dinosaurs, rainforest, and beloved Streets of Old Milwaukee exhibit. Milwaukee County Zoo is perfect for outdoor family adventures.",
  },
  {
    question: "When is Milwaukee Museum Days and what discounts are offered?",
    answer: "Milwaukee Museum Days runs annually in late January through early February (January 22 - February 1 in 2026). Over 26 museums participate with offers ranging from free admission to 15-25% off regular prices. It's the best time to experience multiple museums at reduced rates.",
  },
  {
    question: "Is the Milwaukee Art Museum worth visiting?",
    answer: "Absolutely. The Milwaukee Art Museum is a world-class destination featuring over 30,000 artworks and the iconic Santiago Calatrava-designed Quadracci Pavilion. The Burke Brise Soleil—the massive wing-like structure—opens daily at 10am, noon, and closing. With lakefront views and free admission for kids 12 and under, it's essential Milwaukee.",
  },
  {
    question: "What unique museums should I visit in Milwaukee?",
    answer: "Milwaukee offers several one-of-a-kind museums: the Harley-Davidson Museum celebrating motorcycle heritage, America's Black Holocaust Museum with its powerful Civil Rights history, the National Bobblehead Hall of Fame for pop culture fans, and Lakefront Brewery's legendary tour combining beer history with entertainment. The Grohmann Museum's collection of art depicting labor is unique in the world.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Museums Guide: 20 Best Museums & Cultural Attractions [2026]",
    "description": "Discover Milwaukee's best museums including the Milwaukee Art Museum, Discovery World, Harley-Davidson Museum, and more. Complete guide with admission prices, hours, and insider tips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-museums"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Museums", "item": "https://www.discover-milwaukee.com/milwaukee-museums" }
    ]
  }
};

export default function MilwaukeeMuseums() {
  const MuseumCard = ({ museum }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{museum.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {museum.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{museum.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{museum.neighborhood}</span>
          {museum.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{museum.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{museum.description}</p>
      {(museum.bestFor || museum.highlights) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {museum.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{museum.bestFor}</p>
            </div>
          )}
          {museum.highlights && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>HIGHLIGHTS</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{museum.highlights.join(", ")}</p>
            </div>
          )}
        </div>
      )}
      {museum.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {museum.insiderTip}</p>
        </div>
      )}
      {museum.freeDay && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.2)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Free admission:</strong> {museum.freeDay}</p>
        </div>
      )}
      {museum.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{museum.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Milwaukee Museums Guide: 20 Best Museums & Cultural Attractions [2026]</title>
        <meta name="description" content="Discover Milwaukee's best museums including the Milwaukee Art Museum, Discovery World, Harley-Davidson Museum, and more. Complete guide with admission prices, hours, free days, and insider tips for 2026." />
        <meta name="keywords" content="milwaukee museums, milwaukee art museum, discovery world milwaukee, things to do milwaukee, milwaukee attractions, harley davidson museum, milwaukee public museum, betty brinn, free museums milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-museums" />

        <meta property="og:title" content="Milwaukee Museums Guide: 20 Best Museums & Attractions [2026]" />
        <meta property="og:description" content="From the iconic Milwaukee Art Museum to Discovery World and Harley-Davidson Museum, explore Milwaukee's world-class museums and cultural institutions." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-museums" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-milwaukee-museums.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-milwaukee-museums.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>ARTS & CULTURE</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Milwaukee Museums: Complete Guide to 20 Must-Visit Cultural Attractions
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From the iconic winged Milwaukee Art Museum to the world's only Harley-Davidson Museum, discover Milwaukee's world-class museums and cultural institutions.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#must-visit" style={{ color: c.green2, fontSize: "14px" }}>Must-Visit</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#art-museums" style={{ color: c.green2, fontSize: "14px" }}>Art Museums</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#history-museums" style={{ color: c.green2, fontSize: "14px" }}>History</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#science-museums" style={{ color: c.green2, fontSize: "14px" }}>Science & Kids</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#unique-museums" style={{ color: c.green2, fontSize: "14px" }}>Unique</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section id="must-visit" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Must-Visit Museums</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's essential museum experiences—the destinations that define our city's cultural landscape.
            </p>
            {museums.bestOverall.map((museum, i) => <MuseumCard key={i} museum={museum} />)}
          </section>

          <section id="art-museums" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Art Museums & Galleries</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Fine art, decorative arts, and outdoor sculptures. Milwaukee's art scene spans centuries and styles.
            </p>
            {museums.artMuseums.map((museum, i) => <MuseumCard key={i} museum={museum} />)}
          </section>

          <section id="history-museums" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>History Museums</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Milwaukee's rich heritage and historic landmarks—from Gilded Age mansions to maritime history.
            </p>
            {museums.historyMuseums.map((museum, i) => <MuseumCard key={i} museum={museum} />)}
          </section>

          <section id="science-museums" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Science, Kids & Nature</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Hands-on learning and natural wonders. Perfect for families and curious minds of all ages.
            </p>
            {museums.scienceMuseums.map((museum, i) => <MuseumCard key={i} museum={museum} />)}
          </section>

          <section id="unique-museums" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Unique Milwaukee Museums</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              One-of-a-kind experiences you won't find elsewhere. From bobbleheads to brewing history.
            </p>
            {museums.uniqueMuseums.map((museum, i) => <MuseumCard key={i} museum={museum} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Milwaukee Festivals →
              </Link>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Restaurants →
              </Link>
              <Link href="/milwaukee-breweries" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Milwaukee Breweries →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Milwaukee Museum Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New exhibits, free admission days, and cultural events.</p>
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
