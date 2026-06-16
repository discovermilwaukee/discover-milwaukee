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

const waterfrontSpots = {
  bestOverall: [
    {
      name: "Milwaukee Art Museum",
      neighborhood: "Downtown Lakefront",
      type: "Cultural Landmark",
      address: "700 N Art Museum Dr, Milwaukee, WI 53202",
      description: "The Milwaukee Art Museum stands as one of the city's most iconic landmarks, featuring Santiago Calatrava's stunning Quadracci Pavilion with its kinetic Burke Brise Soleil wings that open and close throughout the day. Perched on Lake Michigan's shore, the museum houses over 30,000 works spanning antiquity to present day. The lakefront setting and dramatic architecture make this a must-visit destination for art lovers and architecture enthusiasts alike.",
      highlights: ["Burke Brise Soleil wings open at 10am, noon, and close at 5pm", "Over 30,000 artworks in permanent collection", "Stunning lake views from multiple galleries"],
      insiderTip: "Visit on Thursday evenings for pay-what-you-wish admission from 4-8pm. The wings closing at sunset is particularly spectacular.",
      bestFor: "Art lovers, architecture enthusiasts, photography",
      bestTime: "Morning for wing opening, Thursday evenings for budget visits",
    },
    {
      name: "Discovery World",
      neighborhood: "Downtown Lakefront",
      type: "Science & Technology Museum",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Discovery World is Milwaukee's premier science and technology museum, located between the Milwaukee Art Museum and Summerfest Grounds. This interactive museum features hands-on exhibits exploring freshwater sciences, technology innovation, and the Great Lakes ecosystem. The aquarium showcases Lake Michigan marine life, while the tall ship Denis Sullivan offers sailing adventures on the lake.",
      highlights: ["Interactive freshwater and technology exhibits", "Great Lakes aquarium with native species", "Denis Sullivan tall ship sailing experiences"],
      insiderTip: "Book the Denis Sullivan sailing tour in advance during summer months. The rooftop deck offers excellent lake views not accessible from street level.",
      bestFor: "Families, science enthusiasts, interactive learning",
      bestTime: "Weekday mornings for smaller crowds, summer for sailing",
    },
    {
      name: "Milwaukee RiverWalk",
      neighborhood: "Downtown to Third Ward",
      type: "Urban Walkway",
      address: "Along Milwaukee River, Downtown Milwaukee",
      description: "The Milwaukee RiverWalk stretches 3.1 miles along both sides of the Milwaukee River, connecting the city's best restaurants, brewpubs, shops, and nightlife from the former North Avenue Dam through Downtown and the Historic Third Ward to Lake Michigan. This pedestrian pathway features public art installations, scenic bridges, and the famous Bronze Fonz statue celebrating Happy Days.",
      highlights: ["3.1 miles of scenic walkways", "Bronze Fonz statue photo opportunity", "RiverSculpture! outdoor art gallery with 20+ sculptures"],
      insiderTip: "Start at the Bronze Fonz near Wells Street, then walk south to the Third Ward for the best restaurant and bar selection. Evening walks offer beautiful city light reflections on the water.",
      bestFor: "Strolling, dining, photography, people watching",
      bestTime: "Late afternoon through evening, especially summer weekends",
    },
    {
      name: "Lakeshore State Park",
      neighborhood: "Downtown Lakefront",
      type: "Urban State Park",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Lakeshore State Park is a 22-acre urban oasis located on Lake Michigan's shores in the heart of downtown Milwaukee. Adjacent to Discovery World and the Summerfest Grounds, this unique state park offers stunning views of both the lake and city skyline. The park features a 1.7-mile paved accessible trail, fishing pier, marina, and connects to Milwaukee's extensive trail network.",
      highlights: ["1.7-mile paved accessible trail", "Fishing pier with lake access", "Connects to Hank Aaron and Oak Leaf trails"],
      insiderTip: "This is Wisconsin's only urban state park. The sunrise views facing east over Lake Michigan are spectacular, and the park is rarely crowded compared to other lakefront areas.",
      bestFor: "Trail running, cycling, fishing, skyline photography",
      bestTime: "Early morning for sunrise, weekday evenings for peaceful walks",
    },
    {
      name: "Veterans Park",
      neighborhood: "East Side Lakefront",
      type: "Lakefront Park",
      address: "1010 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      description: "Veterans Park is Milwaukee's primary connection between the city and Lake Michigan, hosting dozens of special events throughout the summer season. The expansive green space stretches along the lakefront with the Milwaukee Lakefront Trail running through it, offering stunning views of the lake and easy access to Bradford Beach, the Milwaukee Art Museum, and downtown attractions.",
      highlights: ["Host venue for lakefront festivals and events", "Kite flying and open recreation areas", "Direct trail connections to beaches and museums"],
      insiderTip: "Bring a kite on windy days—the open lakefront space is perfect for flying. The park also offers some of the best spots for watching July 4th fireworks over the lake.",
      bestFor: "Festivals, outdoor recreation, lakefront events",
      bestTime: "Summer weekends for events, any clear day for lake views",
    },
  ],
  lakefrontAttractions: [
    {
      name: "Henry Maier Festival Park (Summerfest Grounds)",
      neighborhood: "Downtown Lakefront",
      type: "Festival Venue",
      address: "200 N Harbor Dr, Milwaukee, WI 53202",
      description: "The 90-acre Henry Maier Festival Park sits on Milwaukee's southeastern lakefront, serving as the permanent home of Summerfest—the world's largest music festival. The grounds feature five large permanent stages and the 23,000-seat American Family Insurance Amphitheater. Beyond Summerfest, the park hosts ethnic festivals, concerts, and cultural events attracting 1.2 million visitors annually.",
      highlights: ["Home to world's largest music festival", "800+ performances across 12 stages during Summerfest", "Year-round concerts and ethnic festivals"],
      insiderTip: "Summerfest 2026 runs June 18-20, June 25-27, and July 2-4. For free lakefront access, visit during off-season or attend the free Sunday Family Fun Days at Northwestern Mutual Community Park.",
      bestFor: "Music lovers, festival enthusiasts, summer entertainment",
      bestTime: "June-September for festival season, summer evenings for concerts",
    },
    {
      name: "Milwaukee Lakefront Trail",
      neighborhood: "Lakefront Corridor",
      type: "Multi-Use Trail",
      address: "Lincoln Memorial Drive, Milwaukee, WI",
      description: "The Milwaukee Lakefront Trail is a stunning 3-mile paved path running along the shores of Lake Michigan through Veterans Park. This mostly flat trail offers breathtaking views of the lake, Milwaukee skyline, and iconic landmarks including the Milwaukee Art Museum. The impeccably maintained path connects to the Hank Aaron State Trail to the south and Oak Leaf Trail to the north.",
      highlights: ["3 miles of paved lakefront path", "Connects to 100+ miles of regional trails", "Views of Art Museum and downtown skyline"],
      insiderTip: "Rent a Bublr Bike at any lakefront station for an affordable way to explore the entire trail system. The path is particularly beautiful during golden hour when the Art Museum wings glow.",
      bestFor: "Jogging, cycling, walking, skating",
      bestTime: "Early morning for runners, sunset for photographers",
    },
    {
      name: "McKinley Beach & Park",
      neighborhood: "East Side",
      type: "Beach & Playground",
      address: "1750 N Lincoln Memorial Dr, Milwaukee, WI 53202",
      description: "McKinley Beach offers a quieter alternative to neighboring Bradford Beach, with a bay-shaped shoreline perfect for families. While not designated as a swimming beach, the park features an excellent playground, long stretches of paved trail ideal for beginning bikers, and beautiful picnic areas with lake views. Less crowded than other lakefront spots, it's a hidden gem for relaxation.",
      highlights: ["Large playground for all ages", "Quiet beach area for relaxation", "Paved trails for biking and walking"],
      insiderTip: "This is the locals' choice for avoiding Bradford Beach crowds. Pack a picnic and claim a spot near the playground where parents can relax while kids play.",
      bestFor: "Families with children, picnics, quiet beach day",
      bestTime: "Weekday afternoons, early summer mornings",
    },
    {
      name: "Milwaukee Kayak Company",
      neighborhood: "Downtown/Lakefront",
      type: "Water Recreation",
      address: "318 S Water St, Milwaukee, WI 53204",
      description: "Milwaukee Kayak Company offers the perfect way to experience the city from the water, with guided tours and rentals for both the Milwaukee River and Lake Michigan. Choose from river tours showcasing downtown architecture, full moon paddles for evening adventure, or lakefront expeditions with breathtaking sunsets. Their experienced guides share Milwaukee history and point out hidden gems along the waterways.",
      highlights: ["Guided kayak tours of river and lake", "Full moon paddle experiences", "Equipment rentals for self-guided exploration"],
      insiderTip: "Book the sunset paddle on Lake Michigan for the most memorable experience. The view of the city skyline as the sun sets behind it is unforgettable.",
      bestFor: "Adventure seekers, unique city perspectives, active visitors",
      bestTime: "May-September, sunset tours highly recommended",
    },
  ],
  riverwalkSpots: [
    {
      name: "Bronze Fonz Statue",
      neighborhood: "Downtown RiverWalk",
      type: "Public Art & Photo Spot",
      address: "117 E Wells St, Milwaukee, WI 53202",
      description: "The Bronze Fonz is a beloved 2008 public artwork by Gerald P. Sawyer depicting Henry Winkler as Arthur Fonzarelli from the 1970s sitcom Happy Days, which was set in Milwaukee. Standing 5 feet 6 inches tall in his signature leather jacket with a two-handed thumbs-up gesture, the statue has become Milwaukee's most-photographed attraction. During summer, patio furniture surrounds the Fonz for lounging.",
      highlights: ["Milwaukee's most iconic photo opportunity", "Summer patio seating around statue", "Recently restored in 2026"],
      insiderTip: "Visit during summer when outdoor furniture surrounds the statue, turning it into a proper hangout spot. The statue was recently restored after leaving the RiverWalk for the first time since 2008.",
      bestFor: "Photography, Happy Days fans, quick RiverWalk stop",
      bestTime: "Any time, but summer offers the best atmosphere",
    },
    {
      name: "Lakefront Brewery",
      neighborhood: "Riverwest",
      type: "Craft Brewery",
      priceRange: "$$",
      address: "1872 N Commerce St, Milwaukee, WI 53212",
      description: "Since 1987, Lakefront Brewery has been crafting Milwaukee's best beers, including the famous Riverwest Stein and gluten-free New Grist. The brewery features Milwaukee's longest patio right along the RiverWalk, offering stunning river views alongside fish fries, sausage flights, cheese curds, and beer-infused everything. Their entertaining brewery tours are legendary for combining education with fun.",
      highlights: ["Milwaukee's longest RiverWalk patio", "Award-winning craft beers since 1987", "Famous Friday fish fry"],
      insiderTip: "The brewery tour is one of Milwaukee's most entertaining—guides are known for their humor and generosity with samples. Book Friday tours early as they sell out for fish fry.",
      bestFor: "Beer lovers, Friday fish fry, outdoor drinking",
      bestTime: "Friday evenings for fish fry, summer afternoons for patio",
    },
    {
      name: "Riverwalk Boat Tours & Rentals",
      neighborhood: "Downtown RiverWalk",
      type: "Boat Tours & Rentals",
      priceRange: "$$-$$$",
      address: "Pere Marquette Park, Milwaukee, WI 53203",
      description: "Riverwalk Boat Tours offers self-captained pontoon boat rentals for groups of up to ten people, allowing you to explore Milwaukee's three rivers and lakefront at your own pace. No boating experience is required—just a sense of adventure. Choose from half-day or full-day rentals to cruise past downtown landmarks, under historic bridges, and out to Lake Michigan.",
      highlights: ["Self-captained pontoon rentals", "Explore three rivers and lakefront", "No boating experience required"],
      insiderTip: "Book online early for summer weekends as rentals sell out quickly. Pack a cooler with snacks and drinks—there's plenty of space on the pontoons.",
      bestFor: "Groups, unique city tour, celebration outings",
      bestTime: "Summer weekdays for availability, weekends for atmosphere",
    },
    {
      name: "Cafe Benelux",
      neighborhood: "Historic Third Ward",
      type: "European Cafe & Rooftop",
      priceRange: "$$",
      address: "346 N Broadway, Milwaukee, WI 53202",
      description: "Cafe Benelux is an urban grand cafe inspired by Belgium, the Netherlands, and Luxembourg, featuring Milwaukee's most unique rooftop patio with retractable glass walls. Located in the heart of the Third Ward along the RiverWalk, the cafe serves regional favorites like mussels and frites alongside a massive Belgian beer selection. Open from breakfast through midnight daily.",
      highlights: ["Award-winning rooftop with retractable walls", "Extensive Belgian beer selection", "Scratch-made menu breakfast to midnight"],
      insiderTip: "The rooftop is the main attraction—the retractable glass system means you can enjoy it even on cooler days. Weekend brunch with bottomless mimosas is extremely popular.",
      bestFor: "Rooftop dining, Belgian beer, Third Ward exploration",
      bestTime: "Weekend brunch, summer evenings for rooftop",
    },
    {
      name: "Milwaukee Boat Line Tours",
      neighborhood: "Downtown",
      type: "Sightseeing Cruises",
      priceRange: "$$",
      address: "101 W Michigan St, Milwaukee, WI 53203",
      description: "Milwaukee Boat Line continues a fifty-plus year tradition of showcasing Milwaukee's waterways aboard double-decker excursion vessels. Cruises travel along the Milwaukee River, through the harbor, and onto Lake Michigan with live narration about the city's history and architecture. Their fleet is approved for all Milwaukee waterways, offering the most comprehensive boat tour experience in the city.",
      highlights: ["Double-decker excursion boats", "River, harbor, and lake routes", "Live narrated tours with city history"],
      insiderTip: "The sunset cruise offers the best photography opportunities as the city skyline lights up. Upper deck seats fill first—arrive early to claim your spot.",
      bestFor: "First-time visitors, history buffs, scenic photography",
      bestTime: "Sunset cruises, summer season May-October",
    },
  ],
  beaches: [
    {
      name: "Bradford Beach",
      neighborhood: "East Side",
      type: "Public Beach",
      address: "2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
      description: "Bradford Beach is Milwaukee's most popular beach and was recognized as America's most accessible beach following 2020 improvements. The long stretch of soft sand features 35 volleyball courts, tiki hut shade structures, and cabana rentals. Wheelchair-accessible paths lead to the water, making it welcoming for visitors of all abilities. Beach bars and food vendors operate during summer season.",
      highlights: ["America's most accessible beach", "35 sand volleyball courts", "Tiki huts, cabanas, and beach bar"],
      insiderTip: "Arrive before 10am on weekends to secure parking and a prime spot. The volleyball courts are first-come-first-served and fill up quickly on nice days.",
      bestFor: "Beach volleyball, swimming, social beach day",
      bestTime: "June-August, weekday mornings for parking",
    },
    {
      name: "South Shore Beach",
      neighborhood: "Bay View",
      type: "Public Beach",
      address: "2900 S Shore Dr, Milwaukee, WI 53207",
      description: "South Shore Beach in Bay View underwent a major rehabilitation and reopened in September 2025 as a fully swimmable beach after decades of work. The restored beach features native vegetation, improved stormwater management, larger sand grains to reduce bacteria, and new public access infrastructure including trails and entry points. Beautiful views of downtown Milwaukee from the sandy shore.",
      highlights: ["Newly restored and reopened 2025", "Cleaner water with improved drainage", "Downtown skyline views"],
      insiderTip: "This is Bay View's local beach—less crowded than Bradford with a more neighborhood feel. The rehabilitation project made it one of the cleanest beaches in the Milwaukee area.",
      bestFor: "Swimming, Bay View locals, less crowded option",
      bestTime: "Summer season, weekday afternoons",
    },
    {
      name: "Atwater Beach",
      neighborhood: "Shorewood",
      type: "Public Beach",
      address: "4000 N Lake Dr, Shorewood, WI 53211",
      description: "Atwater Beach sits at the bottom of a scenic bluff in Shorewood, accessed by climbing down steps from Atwater Park. The soft sandy beach offers picturesque Lake Michigan views and a more intimate setting than Milwaukee's larger beaches. The Milwaukee Chapter of the Surfrider Foundation uses this beach as a training ground, as it catches good waves during storms.",
      highlights: ["Intimate bluff-side beach setting", "Less crowded than city beaches", "Popular spot for lake surfing"],
      insiderTip: "The stairs down to the beach mean this spot stays less crowded—worth the climb for a more peaceful beach day. Bring a bag you can carry, as there's no vehicle access to the sand.",
      bestFor: "Quiet beach day, surfing, scenic views",
      bestTime: "Summer season, any sunny day",
    },
  ],
  waterfrontDining: [
    {
      name: "Harbor House",
      neighborhood: "Downtown Lakefront",
      type: "New England Seafood",
      priceRange: "$$$",
      address: "550 N Harbor Dr, Milwaukee, WI 53202",
      description: "Harbor House is Milwaukee's premier lakefront seafood restaurant, offering unparalleled views of Lake Michigan and the city skyline from both indoor and outdoor seating. Fresh seafood is flown in daily from both coasts, with oysters as the specialty—over 10,000 sold monthly with different varieties available each day. The seasonal patio features a full bar and Adirondack chairs.",
      highlights: ["Lakefront views of lake and Art Museum", "10,000+ oysters served monthly", "Seasonal patio with full bar"],
      insiderTip: "Request a waterfront window table for the best views. Live music plays on the patio Sunday and Monday evenings 4-7pm during summer. Happy hour runs Mon-Fri 4-6pm.",
      bestFor: "Special occasions, seafood lovers, sunset dining",
      bestTime: "Sunset dinner, Sunday/Monday for live music",
    },
    {
      name: "The Dock at Bradford Beach",
      neighborhood: "East Side Lakefront",
      type: "Beach Bar & Grill",
      priceRange: "$$",
      address: "2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
      description: "The Dock at Bradford Beach brings the beach bar experience right to Lake Michigan's shore. This casual seasonal spot serves burgers, sandwiches, and beach fare alongside frozen cocktails and cold beers. With sand underfoot and lake views in every direction, it's the most laid-back dining experience on Milwaukee's lakefront. Live music and events throughout summer.",
      highlights: ["Beachfront dining on the sand", "Frozen cocktails and beach fare", "Live music and summer events"],
      insiderTip: "Come for sunset drinks rather than a full meal—the atmosphere is the main attraction. Parking can be challenging on weekends; consider biking via the lakefront trail.",
      bestFor: "Casual beach drinks, sunset watching, summer vibes",
      bestTime: "Summer afternoons and evenings, sunset",
    },
    {
      name: "Vault",
      neighborhood: "Downtown RiverWalk",
      type: "Cocktail Bar & Restaurant",
      priceRange: "$$$",
      address: "913 N Old World Third St, Milwaukee, WI 53203",
      description: "Vault offers sophisticated riverfront dining from a three-season terrace perched 50 feet above the Milwaukee River. Known for classic and prohibition-style cocktails, the elegant space features exposed brick and intimate ambiance. The elevated terrace provides one of the most unique dining perspectives on the RiverWalk with views up and down the river corridor.",
      highlights: ["Terrace 50 feet above river", "Prohibition-style craft cocktails", "Sophisticated atmosphere"],
      insiderTip: "Reservations are essential for terrace seating, especially during summer weekends. The craft cocktail menu changes seasonally—ask bartenders for recommendations.",
      bestFor: "Date night, cocktail enthusiasts, elevated dining",
      bestTime: "Evening cocktails, summer for terrace",
    },
    {
      name: "Blue Bat Kitchen & Tequeria",
      neighborhood: "Historic Third Ward",
      type: "Global Street Food",
      priceRange: "$$",
      address: "249 N Water St, Milwaukee, WI 53202",
      description: "Blue Bat Kitchen & Tequeria brings global street food flavors to Milwaukee's RiverWalk in a laid-back, colorful setting. The menu spans tacos, bowls, and shareable plates with influences from across Latin America. The patio overlooking the river is perfect for casual dining and margaritas with friends while watching boat traffic pass by.",
      highlights: ["Global street food menu", "RiverWalk patio seating", "Extensive tequila and mezcal selection"],
      insiderTip: "The bottomless brunch is popular among Third Ward locals. The RiverWalk-side patio fills up fast on nice days—arrive early or plan for a short wait.",
      bestFor: "Casual dining, tacos and margaritas, group meals",
      bestTime: "Weekend brunch, summer evening patio",
    },
    {
      name: "Barnacle Bud's",
      neighborhood: "Bay View",
      type: "Casual Waterfront",
      priceRange: "$",
      address: "1955 S Hilbert St, Milwaukee, WI 53207",
      description: "Barnacle Bud's is a beloved Bay View institution offering casual waterfront dining on the Kinnickinnic River. This no-frills spot serves fried fish, burgers, and cold beers on a spacious outdoor deck perfect for watching boats navigate the river. The laid-back atmosphere and affordable prices make it a favorite among locals seeking authentic waterfront vibes without the tourist crowds.",
      highlights: ["Large outdoor deck on the river", "Affordable casual fare", "Authentic local atmosphere"],
      insiderTip: "Cash only, so hit the ATM before you go. Arrive by boat if you can—there's dock space for customers. The fish fry on Fridays is a local tradition.",
      bestFor: "Budget-friendly waterfront, local experience, fish fry",
      bestTime: "Friday for fish fry, sunny afternoons year-round",
    },
  ],
};

const faqs = [
  {
    question: "What are the best free things to do on Milwaukee's waterfront?",
    answer: "Milwaukee offers many free waterfront activities: Walk the 3.1-mile RiverWalk and see the Bronze Fonz and public art sculptures, explore Lakeshore State Park's trails and fishing pier, enjoy Veterans Park and the Lakefront Trail, visit Bradford and McKinley beaches (free admission), and watch the Milwaukee Art Museum's wings open and close daily at 10am, noon, and 5pm from outside.",
  },
  {
    question: "When is the best time to visit Milwaukee's lakefront?",
    answer: "Summer (June-August) offers the best lakefront experience with warm weather for beaches, all outdoor dining venues open, Summerfest and ethnic festivals at Henry Maier Festival Park, and full water recreation options. However, fall provides beautiful foliage and fewer crowds, while spring brings wildflowers to lakefront parks. Even winter offers dramatic frozen lake views.",
  },
  {
    question: "Can you swim in Lake Michigan at Milwaukee beaches?",
    answer: "Yes, Bradford Beach and the newly restored South Shore Beach are designated swimming beaches with water quality testing from Memorial Day to Labor Day. The City of Milwaukee Health Department conducts daily sampling, and beach advisories are posted when bacteria levels are high. McKinley Beach is not designated for swimming but is great for wading and relaxation.",
  },
  {
    question: "Where can I rent kayaks or boats on Milwaukee's waterfront?",
    answer: "Milwaukee Kayak Company offers guided tours and kayak rentals for both the Milwaukee River and Lake Michigan. Riverwalk Boat Tours provides self-captained pontoon rentals for groups up to 10 people. Milwaukee Boat Line and Edelweiss Cruises offer narrated sightseeing tours. For sailing, Discovery World's Denis Sullivan tall ship provides public sailing experiences.",
  },
  {
    question: "What are the best waterfront restaurants with lake views in Milwaukee?",
    answer: "Harbor House offers the best Lake Michigan views with premium seafood and an outdoor patio. The Dock at Bradford Beach provides casual beachfront dining right on the sand. For river views, Lakefront Brewery features Milwaukee's longest RiverWalk patio, while Vault offers an elevated terrace 50 feet above the water. Cafe Benelux has a retractable rooftop perfect for year-round enjoyment.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Milwaukee Waterfront Guide: 20 Best Lakefront & Riverwalk Destinations [2026]",
    "description": "Explore Milwaukee's stunning waterfront along Lake Michigan and the Milwaukee River. Discover beaches, parks, dining, boat tours, and attractions from the Art Museum to the RiverWalk.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-waterfront"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Waterfront", "item": "https://www.discover-milwaukee.com/milwaukee-waterfront" }
    ]
  }
};

export default function MilwaukeeWaterfront() {
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
          {spot.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{spot.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      {(spot.bestFor || spot.bestTime) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {spot.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.bestFor}</p>
            </div>
          )}
          {spot.bestTime && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>BEST TIME</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.bestTime}</p>
            </div>
          )}
        </div>
      )}
      {spot.highlights && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>HIGHLIGHTS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.highlights.join(" | ")}</p>
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
        <title>Milwaukee Waterfront Guide 2026 | Lakefront, Riverwalk & Lake Michigan</title>
        <meta name="description" content="Explore Milwaukee's stunning waterfront along Lake Michigan and the Milwaukee River. Discover beaches, parks, boat tours, waterfront dining, and attractions from the Art Museum to the RiverWalk." />
        <meta name="keywords" content="milwaukee waterfront, milwaukee lakefront, milwaukee riverwalk, lake michigan milwaukee, things to do milwaukee lakefront, milwaukee beaches, milwaukee boat tours, milwaukee waterfront restaurants" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-waterfront" />

        <meta property="og:title" content="Milwaukee Waterfront Guide 2026 | Complete Lakefront & Riverwalk Guide" />
        <meta property="og:description" content="Milwaukee's ultimate waterfront guide. Beaches, parks, boat tours, waterfront dining, and attractions." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-waterfront" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-milwaukee-waterfront.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-milwaukee-waterfront.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>THINGS TO DO</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Milwaukee Waterfront Guide
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From the sparkling shores of Lake Michigan to the winding Milwaukee River, explore the best waterfront destinations in the city.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#must-visit" style={{ color: c.green2, fontSize: "14px" }}>Must-Visit</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#lakefront" style={{ color: c.green2, fontSize: "14px" }}>Lakefront Attractions</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#riverwalk" style={{ color: c.green2, fontSize: "14px" }}>RiverWalk</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#beaches" style={{ color: c.green2, fontSize: "14px" }}>Beaches</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#dining" style={{ color: c.green2, fontSize: "14px" }}>Waterfront Dining</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section id="must-visit" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Must-Visit Waterfront Destinations</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The essential Milwaukee waterfront experiences that showcase the best of our lakefront city.
            </p>
            {waterfrontSpots.bestOverall.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="lakefront" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Lakefront Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Parks, trails, and activities along Lake Michigan's stunning shoreline.
            </p>
            {waterfrontSpots.lakefrontAttractions.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="riverwalk" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>RiverWalk Highlights</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Dining, tours, and attractions along the Milwaukee River's scenic pathway.
            </p>
            {waterfrontSpots.riverwalkSpots.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="beaches" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Beaches</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Sandy shores and swimming spots on Lake Michigan for summer fun.
            </p>
            {waterfrontSpots.beaches.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section id="dining" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Waterfront Dining</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Restaurants with stunning water views for every occasion and budget.
            </p>
            {waterfrontSpots.waterfrontDining.map((spot, i) => <SpotCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Patios →
              </Link>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Festivals →
              </Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Things to Do →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Waterfront Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Beach openings, festivals, and lakefront events delivered to your inbox.</p>
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
