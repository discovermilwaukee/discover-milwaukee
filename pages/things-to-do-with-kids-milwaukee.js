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

const familyActivities = {
  bestOverall: [
    {
      name: "Milwaukee County Zoo",
      neighborhood: "West Milwaukee",
      type: "Zoo & Wildlife",
      priceRange: "$$",
      address: "10001 W Bluemound Rd, Milwaukee, WI 53226",
      description: "Spanning nearly 200 wooded acres, the Milwaukee County Zoo is home to over 2,000 mammals, birds, fish, amphibians, and reptiles in specialized habitats. With educational wildlife shows, interactive experiences, and attractions for all ages, it remains one of the most beloved family destinations in Wisconsin.",
      highlights: ["Feed a Giraffe Experience", "Safari Train Ride", "Zoo Playground", "Seal & Sea Lion Shows", "VR Gorilla Trek Experience"],
      insiderTip: "Visit on Family Free Days (January 3, February 7, March 7, October 3, November 7, December 5) for free admission. Arrive early on weekends to beat the crowds.",
      bestFor: "Animal lovers, full-day family outings, educational experiences",
      ageRange: "All ages (playground divided: 2-5 years & 6-12 years)",
    },
    {
      name: "Discovery World",
      neighborhood: "Third Ward / Lakefront",
      type: "Science Museum & Aquarium",
      priceRange: "$$",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Perched on the shores of Lake Michigan, Discovery World combines a science museum with an aquarium featuring over 150 hands-on exhibits. Kids can explore robotics, engineering, and marine life while learning about Great Lakes conservation and innovation through interactive experiences.",
      highlights: ["Touch Tanks with Stingrays & Sturgeon", "Lake Michigan Aquarium", "Innovation Labs", "Live Theater Shows", "Reiman Aquarium"],
      insiderTip: "The touch tanks are a must-do for younger kids. Plan 3-4 hours to fully explore both the science exhibits and aquarium areas.",
      bestFor: "Curious minds, science enthusiasts, hands-on learners",
      ageRange: "Ages 3-12 (best engagement)",
    },
    {
      name: "Betty Brinn Children's Museum",
      neighborhood: "Downtown",
      type: "Children's Museum",
      priceRange: "$$",
      address: "929 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "Milwaukee's only museum designed specifically for young children, Betty Brinn inspires wonder through hands-on exhibits and imaginative play experiences. With educational programs, workshops, and interactive learning environments, it helps children develop fundamental skills in a fun, engaging setting.",
      highlights: ["Hands-On Exhibits", "Imaginative Play Areas", "Educational Workshops", "Early Learning Programs", "Interactive Play Stations"],
      insiderTip: "Best for ages 10 and under. Visit on weekday mornings for smaller crowds. Dynamic pricing applies during spring and winter breaks.",
      bestFor: "Toddlers, preschoolers, early learners",
      ageRange: "Ages 0-10 (children under 1 free)",
    },
    {
      name: "Milwaukee Public Museum",
      neighborhood: "Downtown",
      type: "Natural History Museum",
      priceRange: "$$",
      address: "800 W Wells St, Milwaukee, WI 53233",
      description: "A beloved institution featuring the dramatic T-Rex encounter, the immersive Streets of Old Milwaukee, an indoor butterfly vivarium, and world-class planetarium. With dinosaur exhibits, cultural displays from 33 European cultures, and hands-on discovery areas, it offers endless exploration for curious families.",
      highlights: ["Third Planet Dinosaur Exhibits", "Butterfly Vivarium", "Streets of Old Milwaukee", "Daniel M. Soref Planetarium", "Dino Days of Summer (July-August)"],
      insiderTip: "The museum will be open through all of 2026 before moving to a new location. Don't miss Dino Days of Summer (July 11-August 6) for special dinosaur programming.",
      bestFor: "Dinosaur enthusiasts, history lovers, science explorers",
      ageRange: "All ages (planetarium best for ages 5+)",
    },
    {
      name: "Milwaukee Art Museum",
      neighborhood: "Lakefront",
      type: "Art Museum",
      priceRange: "$",
      address: "700 N Art Museum Dr, Milwaukee, WI 53202",
      description: "The iconic Quadracci Pavilion with its moveable Burke Brise Soleil wings is a Milwaukee landmark. Thanks to a generous endowment, kids 12 and under always receive free admission. Family-focused programs include Kohl's Family Sundays, Play Date with Art, and Story Time in the Galleries.",
      highlights: ["Windhover Hall Architecture", "Kohl's Family Sundays", "Free Family Guides & SketchPacks", "Story Time in Galleries", "ArtPacks for Kids"],
      insiderTip: "Watch the wings open at 10am and close at 8pm (or noon if museum closes at 5pm). Pick up free exploration tools at the front desk for kids.",
      bestFor: "Art appreciation, architectural wonder, creative families",
      ageRange: "All ages (kids 12 and under FREE)",
    },
  ],
  museums: [
    {
      name: "Discovery World",
      neighborhood: "Third Ward / Lakefront",
      type: "Science Museum & Aquarium",
      priceRange: "$$",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Milwaukee's premier science and technology center combines hands-on exhibits with Great Lakes aquarium experiences. Kids can touch stingrays, explore innovation labs, and learn about Lake Michigan ecology through immersive, interactive displays spanning multiple floors.",
      highlights: ["150+ Hands-On Exhibits", "Caribbean Reef Touch Tank", "Sturgeon Touch Tank", "Great Lakes Exhibits", "STEM Learning Labs"],
      insiderTip: "Check the daily schedule for live science demonstrations. The sailing simulators and robotics labs are favorites with older kids.",
      bestFor: "STEM learners, marine life enthusiasts, interactive exploration",
      ageRange: "Ages 3-14 (something for everyone)",
    },
    {
      name: "Betty Brinn Children's Museum",
      neighborhood: "Downtown",
      type: "Children's Museum",
      priceRange: "$$",
      address: "929 E Wisconsin Ave, Milwaukee, WI 53202",
      description: "Located in Museum Center Park on the second level of the Miller Pavilion, Betty Brinn is dedicated to early childhood development through play. The exhibits are designed to spark curiosity and build foundational skills in a safe, imaginative environment.",
      highlights: ["Word Headquarters", "Home Town", "Be A Maker Studio", "Sensory Play Areas", "Educational Workshops"],
      insiderTip: "Open Wednesday through Monday, 9am-4:30pm. Closed Tuesdays. Admission is $15 for adults and children, with children under 1 free.",
      bestFor: "Toddlers, preschoolers, imaginative play",
      ageRange: "Ages 0-10",
    },
    {
      name: "Milwaukee Public Museum",
      neighborhood: "Downtown",
      type: "Natural History Museum",
      priceRange: "$$",
      address: "800 W Wells St, Milwaukee, WI 53233",
      description: "One of the nation's largest natural history museums, featuring life-sized dinosaur replicas, the beloved Streets of Old Milwaukee, and a state-of-the-art planetarium. Walk through recreated European villages, explore ancient cultures, and stand beneath towering T-Rex bones.",
      highlights: ["T-Rex Encounter", "European Village (33 Cultures)", "Planetarium Shows", "Live Butterfly Vivarium", "Ancient Americas Exhibits"],
      insiderTip: "The Digistar 6 planetarium projection system offers incredible 3D journeys through space. Book planetarium shows early on weekends.",
      bestFor: "History buffs, dinosaur fans, world cultures exploration",
      ageRange: "All ages",
    },
    {
      name: "Milwaukee Art Museum",
      neighborhood: "Lakefront",
      type: "Art Museum",
      priceRange: "$",
      address: "700 N Art Museum Dr, Milwaukee, WI 53202",
      description: "Beyond its stunning architecture, the Milwaukee Art Museum offers exceptional family programming. Monthly Play Date with Art sessions, weekly Story Time in the Galleries, and semi-annual Kohl's Family Sundays provide creative experiences for children of all ages.",
      highlights: ["Burke Brise Soleil Wings", "Costumes for Dress-Up", "Picture Books in Galleries", "SketchPacks for Drawing", "Winter Break Fun (Dec 26-29)"],
      insiderTip: "Kohl's Family Sundays feature hands-on stations, performances, and themed activities. Check the calendar for upcoming dates.",
      bestFor: "Creative kids, art appreciation, rainy day activities",
      ageRange: "All ages (kids 12 and under FREE)",
    },
  ],
  outdoorActivities: [
    {
      name: "Milwaukee County Zoo",
      neighborhood: "West Milwaukee",
      type: "Zoo & Wildlife Park",
      priceRange: "$$",
      address: "10001 W Bluemound Rd, Milwaukee, WI 53226",
      description: "Nearly 200 wooded acres of animal habitats, educational shows, and family attractions. From the popular giraffe feeding experience to the Safari Train and carousel, there's something to delight every age. The zoo playground features separate areas for different age groups.",
      highlights: ["Giraffe Feeding Experience", "Kohl's Wild Theater Shows", "Safari Train", "Carousel", "Two-Section Playground"],
      insiderTip: "Summer hours (May 23-Sept 7) are 9:30am-5pm daily. Other seasons have shorter weekday hours. Parking is $15 per car.",
      bestFor: "Full-day family adventures, animal encounters, outdoor exploration",
      ageRange: "All ages",
    },
    {
      name: "Bradford Beach",
      neighborhood: "East Side / Lakefront",
      type: "Beach & Recreation",
      priceRange: "Free",
      address: "2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
      description: "Named one of Travel Channel's top 11 city beaches, Bradford Beach underwent major improvements making it one of the most accessible beaches in America. Soft sand perfect for building, 35 sand volleyball courts, tiki huts for shade, and cabana rentals create a full beach experience.",
      highlights: ["Accessible Beach Access", "35 Sand Volleyball Courts", "Tiki Hut Rentals", "Cabana Rentals", "Lifeguards on Duty (Summer)"],
      insiderTip: "Arrive early on hot summer weekends to secure a good spot. Bring sand toys for younger kids who love to dig and build.",
      bestFor: "Summer fun, beach lovers, active families",
      ageRange: "All ages",
    },
    {
      name: "Boerner Botanical Gardens & Margie's Garden",
      neighborhood: "Hales Corners",
      type: "Botanical Garden & Children's Garden",
      priceRange: "$",
      address: "9400 Boerner Dr, Hales Corners, WI 53130",
      description: "Margie's Garden is a whimsical 3-acre children's garden within Boerner Botanical Gardens. Kids can explore an enchanted floral village with a playhouse, fiddlehead path, twig hut, mushroom-chair rings, sound garden, bug sculptures, and hidden cardinal quest.",
      highlights: ["Enchanted Village Playhouse", "Cardinal Quest (Find 4 Hidden Cardinals)", "Sound Garden", "Bug Garden with Sculptures", "Amphitheater Performances"],
      insiderTip: "Margie's Garden opens May 1st for the season. Pack a picnic and plan 2-3 hours for unstructured play and exploration.",
      bestFor: "Nature lovers, imaginative play, garden exploration",
      ageRange: "Ages 2-12",
    },
    {
      name: "Lakeshore State Park",
      neighborhood: "Downtown / Lakefront",
      type: "Urban State Park",
      priceRange: "Free",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Wisconsin's only urban state park offers 22 acres of restored prairies, a 1.7-mile waterfront trail, and some of the best Lake Michigan and skyline views in the city. The paved, stroller-friendly paths connect to the Hank Aaron and Oak Leaf trails for extended adventures.",
      highlights: ["1.7-Mile Waterfront Trail", "Restored Prairie Landscapes", "Skyline Views", "Wildlife Viewing", "Connects to Oak Leaf Trail"],
      insiderTip: "Perfect for a morning walk or bike ride. The park conducts over 100 educational programs annually in partnership with local schools.",
      bestFor: "Urban nature walks, stroller outings, skyline photography",
      ageRange: "All ages",
    },
    {
      name: "Northwestern Mutual Community Park",
      neighborhood: "Third Ward / Summerfest Grounds",
      type: "Inclusive Playground",
      priceRange: "Free",
      address: "200 N Harbor Dr, Milwaukee, WI 53202",
      description: "One of Wisconsin's most accessible playgrounds, this 54,000-square-foot community park features inclusive play equipment for children ages 2-12. The Giggle Grounds toddler area, sensory rooms, nursing stations, and wheelchair-accessible ramps ensure every child can play.",
      highlights: ["Inclusive Play Equipment", "Giggle Grounds (Ages 6 months-2 years)", "Sensory Rooms", "Nursing Stations", "Musical Play Pieces"],
      insiderTip: "FREE Sunday Family Fun Days on June 7, July 19, August 9, and September 13, 2026 from 10am-2pm. Opens March 7 for the season.",
      bestFor: "Toddlers, inclusive play, accessible recreation",
      ageRange: "Ages 6 months-12 years",
    },
  ],
  indoorFun: [
    {
      name: "Sky Zone Trampoline Park",
      neighborhood: "Waukesha / Brown Deer",
      type: "Trampoline Park",
      priceRange: "$$",
      address: "W229N1420 Westwood Dr, Waukesha, WI 53186",
      description: "Bounce, flip, and play at Sky Zone's indoor trampoline parks featuring wall-to-wall trampolines, foam pits, SkySlam basketball, and Ultimate Dodgeball. The Little Leapers program (Saturdays 9-10am) provides a dedicated time for ages 7 and under.",
      highlights: ["Wall-to-Wall Trampolines", "SkySlam Basketball", "Foam Zone", "Ultimate Dodgeball", "Little Leapers (Ages 7 & Under)"],
      insiderTip: "Tuesday special: 90 minutes of jump time for $12. Family jump packages include 4 passes, pizza, and unlimited drinks.",
      bestFor: "Active kids, energy burning, birthday parties",
      ageRange: "All ages (Little Leapers: 7 and under)",
    },
    {
      name: "JB's on 41",
      neighborhood: "Milwaukee",
      type: "Bowling & Arcade",
      priceRange: "$$",
      address: "3049 S 92nd St, Milwaukee, WI 53227",
      description: "Milwaukee's premier family entertainment destination features 35 top-quality bowling lanes, an arcade packed with modern and classic video games, and HyperBowling (high-tech interactive bowling). Great for family outings, birthday parties, and rainy day adventures.",
      highlights: ["35 Bowling Lanes", "HyperBowling", "Modern & Classic Arcade Games", "Full-Service Restaurant", "Party Packages"],
      insiderTip: "Check for family bowling specials and cosmic bowling nights with blacklights and music. Reserve lanes in advance on weekends.",
      bestFor: "Family bowling nights, arcade lovers, all-weather fun",
      ageRange: "All ages",
    },
    {
      name: "Pettit National Ice Center",
      neighborhood: "State Fair Park Area",
      type: "Ice Skating Facility",
      priceRange: "$",
      address: "500 S 84th St, Milwaukee, WI 53214",
      description: "Home to Olympic-level ice facilities, the Pettit Center offers year-round public skating on international-size rinks and a 400-meter speed skating oval. Skate where Olympic athletes train in this world-class facility that welcomes families of all skill levels.",
      highlights: ["400-Meter Olympic Oval", "Two International Rinks", "Year-Round Skating", "Skate Rentals Available", "Learn to Skate Programs"],
      insiderTip: "Youth admission (ages 4-12) is $7.50, with skate rentals for $5. Children 3 and under are free. Great for birthday parties!",
      bestFor: "Ice skating enthusiasts, Olympic experience, year-round activity",
      ageRange: "Ages 4+ (ages 3 and under free)",
    },
    {
      name: "WhirlyBall Brookfield",
      neighborhood: "Brookfield",
      type: "Multi-Activity Center",
      priceRange: "$$",
      address: "3419 N 124th St, Brookfield, WI 53005",
      description: "A 45,000-square-foot entertainment center combining WhirlyBall (bumper cars meets lacrosse), laser tag, bowling, and pop-up games like ping pong and Giant Jenga. The multi-level laser tag arena and multiple event spaces make it perfect for groups.",
      highlights: ["WhirlyBall Courts", "Multi-Level Laser Tag", "12 Bowling Lanes", "Pop-Up Games", "Three Outdoor Patios"],
      insiderTip: "WhirlyBall is best for kids 10+ due to the bumper car driving. Younger kids will love the laser tag and bowling options.",
      bestFor: "Older kids, group outings, unique activities",
      ageRange: "Ages 5+ (WhirlyBall: 10+)",
    },
    {
      name: "Air City 360",
      neighborhood: "New Berlin",
      type: "Indoor Adventure Park",
      priceRange: "$$",
      address: "3015 S 163rd St, New Berlin, WI 53151",
      description: "An action-packed indoor adventure park featuring ninja courses, laser tag, mini bowling, a multi-level playground, arcade games, and a cafe. With activities spanning all energy levels and ages, it's perfect for burning off steam on rainy days.",
      highlights: ["Ninja Obstacle Courses", "Laser Tag Arena", "Mini Bowling", "Multi-Level Playground", "Arcade & Cafe"],
      insiderTip: "Book party packages in advance for the best value. The ninja courses are challenging and fun for competitive kids.",
      bestFor: "Active kids, rainy day adventures, birthday parties",
      ageRange: "Ages 3-14",
    },
  ],
  seasonalEvents: [
    {
      name: "Milwaukee Holiday Lights Festival",
      neighborhood: "Downtown",
      type: "Holiday Event",
      priceRange: "Free",
      address: "Downtown Milwaukee (Cathedral Square to Pere Marquette Park)",
      description: "From November 19 through January 1, downtown Milwaukee sparkles with over 500,000 brilliant lights, dazzling decorations, glittering chandeliers, and larger-than-life ornaments. Free shows, Santa photo opportunities, and festive displays create holiday magic for families.",
      highlights: ["500,000+ Holiday Lights", "Santa Photos", "Horse-Drawn Carriage Rides", "Holiday Shows", "Jingle Bus Tours"],
      insiderTip: "The lights are on nightly from dusk. Visit on a weeknight for smaller crowds and easier parking. Cathedral Square has the best displays.",
      bestFor: "Holiday traditions, evening outings, festive atmosphere",
      ageRange: "All ages",
    },
    {
      name: "Summerfest Children's Fest",
      neighborhood: "Summerfest Grounds",
      type: "Music Festival",
      priceRange: "Free",
      address: "200 N Harbor Dr, Milwaukee, WI 53202",
      description: "On June 20, 2026, Children's Fest offers free admission from noon to 3pm at the world's largest music festival. Splash pads, playgrounds, and special kids' activities create a family-friendly experience at the legendary lakefront festival grounds.",
      highlights: ["Free Admission (Noon-3pm)", "Splash Pads", "Playground Activities", "Live Kids Entertainment", "Special Activities"],
      insiderTip: "Arrive right at noon to maximize your free time. Bring swimsuits for the splash pads and sunscreen for outdoor activities.",
      bestFor: "Festival introduction, summer fun, free family activities",
      ageRange: "All ages",
    },
    {
      name: "Milwaukee County Zoo Winter Events",
      neighborhood: "West Milwaukee",
      type: "Seasonal Zoo Events",
      priceRange: "$$",
      address: "10001 W Bluemound Rd, Milwaukee, WI 53226",
      description: "The zoo transforms for special seasonal events including winter wonderland experiences and holiday celebrations. Reduced crowds and unique seasonal programming make winter visits magical for families seeking something different.",
      highlights: ["Holiday Decorations", "Seasonal Animal Programs", "Reduced Crowds", "Indoor Exhibits", "Special Programming"],
      insiderTip: "Free Family Days in winter (January 3, February 7) offer admission-free visits. Many animals are active in cooler weather.",
      bestFor: "Off-season visits, holiday activities, budget-friendly outings",
      ageRange: "All ages",
    },
    {
      name: "American Family Field Tours & Brewers Games",
      neighborhood: "Miller Park Way",
      type: "Stadium Experience",
      priceRange: "$$",
      address: "1 Brewers Way, Milwaukee, WI 53214",
      description: "Take a behind-the-scenes tour of the Brewers' home stadium or catch a family-friendly baseball game. Tours include the dugout, luxury suites, press box, and Bob Uecker's broadcast booth. The retractable roof means games happen rain or shine.",
      highlights: ["75-90 Minute Stadium Tours", "Dugout Access", "Press Box Visit", "Bernie Brewer's Slide", "Family-Friendly Atmosphere"],
      insiderTip: "Walk-up tours at 10:15am, 11:15am, 12:15pm, and 1:15pm during the season. Free parking for tours. ADA and stroller accessible.",
      bestFor: "Sports fans, baseball families, unique Milwaukee experience",
      ageRange: "All ages",
    },
  ],
};

const faqs = [
  {
    question: "What are the best free things to do with kids in Milwaukee?",
    answer: "Milwaukee offers many free family activities including the Milwaukee Art Museum (free for kids 12 and under), Lakeshore State Park trails, Bradford Beach, Northwestern Mutual Community Park playground, and free zoo days at Milwaukee County Zoo (January 3, February 7, March 7, October 3, November 7, December 5). The Holiday Lights Festival downtown is also free from November through January.",
  },
  {
    question: "What are the best rainy day activities for kids in Milwaukee?",
    answer: "For rainy days, head to Discovery World for hands-on science and aquarium exhibits, Betty Brinn Children's Museum for younger kids, Milwaukee Public Museum for dinosaurs and history, or indoor play centers like Sky Zone, JB's on 41, and Air City 360. The Pettit National Ice Center offers year-round ice skating regardless of weather.",
  },
  {
    question: "What are the best activities for toddlers in Milwaukee?",
    answer: "Betty Brinn Children's Museum is specifically designed for ages 0-10. The Northwestern Mutual Community Park has Giggle Grounds for ages 6 months-2 years. The Milwaukee County Zoo playground has a dedicated section for ages 2-5. Margie's Garden at Boerner Botanical Gardens offers whimsical outdoor exploration perfect for toddlers.",
  },
  {
    question: "When is the best time to visit Milwaukee with kids?",
    answer: "Summer (June-August) offers beaches, outdoor festivals, and extended zoo hours. However, Milwaukee's indoor attractions make it great year-round. Spring and fall have smaller crowds at major attractions. Winter brings the Holiday Lights Festival, free zoo days, and cozy museum visits.",
  },
  {
    question: "What are the must-see Milwaukee attractions for first-time family visitors?",
    answer: "First-time visitors should prioritize Milwaukee County Zoo, Discovery World, the Milwaukee Art Museum (iconic architecture, free for kids), and Bradford Beach in summer. For a unique Milwaukee experience, catch a Brewers game at American Family Field or take a stadium tour. The Milwaukee Public Museum's dinosaurs and Streets of Old Milwaukee are also must-sees.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "25 Best Things to Do with Kids in Milwaukee: A Complete Family Guide [2026]",
    "description": "Discover Milwaukee's best family activities including the Milwaukee County Zoo, Discovery World, museums, beaches, and seasonal events. Your complete guide to kid-friendly attractions.",
    "image": "https://www.discover-milwaukee.com/images/things-to-do-with-kids-milwaukee.jpg",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee", "logo": { "@type": "ImageObject", "url": "https://www.discover-milwaukee.com/logo.png" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/things-to-do-with-kids-milwaukee",
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
      { "@type": "ListItem", "position": 2, "name": "Things to Do with Kids Milwaukee", "item": "https://www.discover-milwaukee.com/things-to-do-with-kids-milwaukee" },
    ],
  },
};

export default function ThingsToDoWithKidsMilwaukee() {
  const ActivityCard = ({ activity }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{activity.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {activity.priceRange && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{activity.priceRange}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{activity.neighborhood}</span>
          {activity.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{activity.type}</span>}
        </div>
      </div>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{activity.description}</p>
      {(activity.bestFor || activity.ageRange) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {activity.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{activity.bestFor}</p>
            </div>
          )}
          {activity.ageRange && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>AGES</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{activity.ageRange}</p>
            </div>
          )}
        </div>
      )}
      {activity.highlights && (
        <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green1, marginBottom: "4px" }}>HIGHLIGHTS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{activity.highlights.join(", ")}</p>
        </div>
      )}
      {activity.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Pro tip:</strong> {activity.insiderTip}</p>
        </div>
      )}
      {activity.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{activity.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>25 Best Things to Do with Kids in Milwaukee: Family Activities Guide [2026]</title>
        <meta name="description" content="Discover Milwaukee's best family activities including the Milwaukee County Zoo, Discovery World, museums, beaches, and more. Complete guide to things to do with kids in Milwaukee." />
        <meta name="keywords" content="things to do with kids milwaukee, family activities milwaukee, milwaukee kids attractions, family fun milwaukee, milwaukee family activities, milwaukee children's activities, kid-friendly milwaukee, milwaukee with kids" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/things-to-do-with-kids-milwaukee" />

        <meta property="og:title" content="25 Best Things to Do with Kids in Milwaukee [2026]" />
        <meta property="og:description" content="From the Milwaukee County Zoo to Discovery World and seasonal festivals, find the best family activities in Milwaukee." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/things-to-do-with-kids-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/things-to-do-with-kids-milwaukee.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/things-to-do-with-kids-milwaukee.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>FAMILY ACTIVITIES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              25 Best Things to Do with Kids in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From the world-class zoo to hands-on museums and outdoor adventures, Milwaukee is a surprisingly fantastic city for families.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#museums" style={{ color: c.green2, fontSize: "14px" }}>Museums</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#outdoor" style={{ color: c.green2, fontSize: "14px" }}>Outdoor Activities</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#indoor" style={{ color: c.green2, fontSize: "14px" }}>Indoor Fun</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#seasonal" style={{ color: c.green2, fontSize: "14px" }}>Seasonal Events</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Family Attractions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The must-visit destinations every Milwaukee family should experience.
            </p>
            {familyActivities.bestOverall.map((activity, i) => <ActivityCard key={i} activity={activity} />)}
          </section>

          <section id="museums" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Museums & Learning Adventures</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Interactive exhibits and educational experiences for curious minds.
            </p>
            {familyActivities.museums.map((activity, i) => <ActivityCard key={i} activity={activity} />)}
          </section>

          <section id="outdoor" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Outdoor Activities & Parks</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Beaches, gardens, and nature adventures for active families.
            </p>
            {familyActivities.outdoorActivities.map((activity, i) => <ActivityCard key={i} activity={activity} />)}
          </section>

          <section id="indoor" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Indoor Fun & Entertainment</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Perfect for rainy days or year-round family fun.
            </p>
            {familyActivities.indoorFun.map((activity, i) => <ActivityCard key={i} activity={activity} />)}
          </section>

          <section id="seasonal" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Seasonal Events & Festivals</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Special experiences throughout the year.
            </p>
            {familyActivities.seasonalEvents.map((activity, i) => <ActivityCard key={i} activity={activity} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/free-things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Free Activities →
              </Link>
              <Link href="/rainy-day-activities-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Rainy Day Fun →
              </Link>
              <Link href="/milwaukee-festivals" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Festivals →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Family Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Kid-friendly events, seasonal activities, and Milwaukee family fun.</p>
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
