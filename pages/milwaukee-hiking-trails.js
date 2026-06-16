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

const hikingTrails = {
  bestOverall: [
    {
      name: "Oak Leaf Trail",
      location: "Milwaukee County-Wide",
      type: "Multi-Use Paved Trail",
      difficulty: "Easy to Moderate",
      distance: "135 miles total",
      address: "Multiple access points throughout Milwaukee County",
      description: "The Oak Leaf Trail is Milwaukee's crown jewel—a 135-mile paved multi-use trail system that encircles the entire county. This interconnected network connects all major parks in the Milwaukee County Park System, from lakefront beaches to river parkways to wooded nature preserves. More than half a million users explore these paths annually, making it one of the most beloved trail systems in the Midwest.",
      highlights: ["Connects to Lake Michigan shoreline", "Passes through 100+ parks", "Multiple scenic segments including Lake Park Loop and South Shore Line"],
      insiderTip: "Start at the Milwaukee Art Museum and follow the Lake Park Loop north for stunning lakefront views. The segment through Veterans Park, McKinley Park, and Bradford Beach is the most scenic stretch.",
      bestFor: "All skill levels, families, cyclists, runners",
      parkingInfo: "Free parking at numerous trailheads including Veterans Park, Lake Park, and South Shore Park",
    },
    {
      name: "Seven Bridges Trail",
      location: "Grant Park, South Milwaukee",
      type: "Unpaved Nature Trail",
      difficulty: "Moderate",
      distance: "2 miles loop",
      address: "100 E Hawthorne Ave, South Milwaukee, WI 53172",
      description: "Seven Bridges Trail is Milwaukee's most magical hiking experience. This historic WPA-era trail winds through a dramatic ravine on Lannon stone paths and staircases, crossing more than ten footbridges (despite its name) through an old-growth beech forest. The trail emerges onto the Lake Michigan shoreline for breathtaking views. Established in the 1920s and 30s with help from over 200 CCC workers, this trail feels like stepping into another world.",
      highlights: ["Historic Lannon stone staircases", "10+ wooden footbridges", "Lake Michigan beach access", "Old-growth beech trees"],
      insiderTip: "Arrive early on weekends—this is one of Milwaukee's most popular hikes. The south entrance near the Wulff Lodge offers the most dramatic descent into the ravine.",
      bestFor: "Nature lovers, photographers, history buffs, romantic walks",
      parkingInfo: "Free parking at Grant Park. Use the Seven Bridges trailhead lot near Wulff Lodge.",
    },
    {
      name: "Schlitz Audubon Nature Center",
      location: "Bayside",
      type: "Nature Preserve Trails",
      difficulty: "Easy to Moderate",
      distance: "6 miles of trails",
      address: "1111 E Brown Deer Rd, Milwaukee, WI 53217",
      description: "Schlitz Audubon offers six miles of trails through 185 acres of diverse habitats including forests, wetlands, restored prairies, ravines, bluffs, and Lake Michigan shoreline. The 60-foot observation tower provides panoramic views of the lake and surrounding woodlands. This environmental education center is a haven for birdwatchers and nature enthusiasts seeking a true wilderness experience within the metro area.",
      highlights: ["60-foot observation tower", "Lake Michigan bluff views", "Diverse ecosystems", "Excellent birding"],
      insiderTip: "The Lake Terrace Trail is the most popular (4.7-star rating), but don't miss the South Ravine Trail for a more secluded experience. Consider joining a guided night hike to spot nocturnal wildlife.",
      bestFor: "Birdwatchers, photographers, families, nature study",
      parkingInfo: "On-site parking. Admission: $8 adults, $5 ages 3-17, free for members. Trails open 8:30am-5:00pm.",
    },
    {
      name: "Wehr Nature Center",
      location: "Whitnall Park, Franklin",
      type: "Nature Preserve Trails",
      difficulty: "Easy to Moderate",
      distance: "5+ miles of trails",
      address: "9701 W College Ave, Franklin, WI 53132",
      description: "Wehr Nature Center features over five miles of nature trails through woodland, wetland, prairie, and oak savanna on 220 protected acres within Whitnall Park. The Lake Loop trail follows Mallard Lake's shoreline to a beautiful waterfall flowing into the Root River. The 1-mile All Abilities loop trail with boardwalk makes this accessible to visitors of all mobility levels.",
      highlights: ["Waterfall on Lake Loop", "1-mile accessible boardwalk", "Observation blind for wildlife viewing", "Prairie and oak savanna ecosystems"],
      insiderTip: "The waterfall is most impressive in spring after snowmelt or heavy rains. The interpretive exhibits along the prairie trails explain the difference between oak savanna and tallgrass prairie.",
      bestFor: "Families with young children, accessibility needs, nature education",
      parkingInfo: "Free parking. Visitor Center open 8:30am-4:30pm daily. Parking lot locked 5pm-8am October through January.",
    },
  ],
  lakefrontTrails: [
    {
      name: "Lake Park",
      location: "East Side Milwaukee",
      type: "Urban Park Trails",
      difficulty: "Easy to Moderate",
      distance: "3+ miles of trails",
      address: "3233 E Kenwood Blvd, Milwaukee, WI 53211",
      description: "Lake Park is a 138-acre Frederick Law Olmsted-designed masterpiece sitting on a mile-long bluff overlooking Lake Michigan. One of Milwaukee's first parks features winding trails through open meadows, wilder undergrowth, and dramatic ravines with intermittent streams. The North Point Lighthouse offers 84 steps to climb for spectacular views, and the Lake Park Waterfall (a restored WPA project) is a hidden gem.",
      highlights: ["North Point Lighthouse (climb 84 steps)", "Lake Park Waterfall", "Olmsted-designed landscape", "Oak Leaf Trail connection"],
      insiderTip: "Follow the path to the Locust Street Ravine for the most atmospheric hike. The lighthouse is open weekends year-round from 1-4pm—climb to the top for one of the best views in Milwaukee.",
      bestFor: "History lovers, lighthouse enthusiasts, scenic walks",
      parkingInfo: "Free street parking and small lots throughout the park. Lake Park Bistro offers dining.",
    },
    {
      name: "South Shore Park & Trail",
      location: "Bay View",
      type: "Lakefront Paved Trail",
      difficulty: "Easy",
      distance: "2.4 miles loop",
      address: "2900 S Shore Dr, Milwaukee, WI 53207",
      description: "South Shore Park offers a stunning 2.4-mile lakefront loop with sweeping views of Lake Michigan and the downtown skyline. The paved trail connects to the larger Oak Leaf Trail system and passes through several parks including Cupertino Park, Sheridan Park, and Warnimont Park. The park features a marina, beach, and pavilion, making it perfect for a full day outdoors.",
      highlights: ["Stunning lake and skyline views", "Marina access", "Beach and pavilion", "Connects to Oak Leaf Trail"],
      insiderTip: "The sunset views from South Shore are legendary—time your walk to end at the pavilion as the sun goes down. The trail is mostly flat with a slight incline midway through.",
      bestFor: "Sunset walks, runners, families with strollers",
      parkingInfo: "Free parking lot at South Shore Drive and Russell Avenue.",
    },
    {
      name: "Lakeshore State Park",
      location: "Downtown Milwaukee",
      type: "Urban State Park Trail",
      difficulty: "Easy",
      distance: "2.4 miles",
      address: "500 N Harbor Dr, Milwaukee, WI 53202",
      description: "Lakeshore State Park is a 22-acre urban oasis in the heart of downtown Milwaukee, adjacent to the Summerfest grounds and Discovery World. The accessible paved trails connect to both the Hank Aaron State Trail and Oak Leaf Trail, offering views of the Milwaukee skyline, harbor, and Lake Michigan. A small beach provides waterfront access, and the park is perfect for a quick nature break during downtown activities.",
      highlights: ["Downtown skyline views", "Small beach", "Connects to Hank Aaron State Trail", "Milwaukee Pierhead Lighthouse views"],
      insiderTip: "The Pebble Beach to Milwaukee Pierhead Lighthouse route via Hank Aaron State Trail is the most popular hike (4.6-star rating). No vehicle admission sticker required—it's free.",
      bestFor: "Downtown visitors, quick nature breaks, connecting trails",
      parkingInfo: "Metered parking nearby. Access from Discovery World or Summerfest grounds.",
    },
    {
      name: "Doctors Park",
      location: "Fox Point",
      type: "Bluff and Beach Trail",
      difficulty: "Moderate",
      distance: "0.8 miles loop",
      address: "1870 E Fox Ln, Fox Point, WI 53217",
      description: "Doctors Park delivers a secluded pebble beach, WPA-era stone jetties, and one of Milwaukee County's most scenic ravine hikes—all free of charge. The 55-acre park sits on Lake Michigan bluffs with trails descending through deep shade to the shoreline. The south-side ravine trail is particularly atmospheric, threading through forest before emerging at historic stone jetties perfect for photography.",
      highlights: ["WPA-era stone jetties", "Secluded pebble beach", "Dramatic ravine descent", "Part of Forked Aster Trail System"],
      insiderTip: "Take the south-side ravine trail for the most dramatic descent—reviewers describe feeling 'out at sea' once you reach the shore. Photographers favor the stone jetties at sunrise.",
      bestFor: "Beach seekers, photographers, peaceful walks",
      parkingInfo: "Free parking at bluff-top lot. Approximately 50 stairs down to shoreline.",
    },
    {
      name: "Bradford Beach to Veterans Park",
      location: "East Side Milwaukee",
      type: "Lakefront Paved Trail",
      difficulty: "Easy",
      distance: "2 miles one-way",
      address: "2400 N Lincoln Memorial Dr, Milwaukee, WI 53211",
      description: "This section of the Oak Leaf Trail connects Milwaukee's most beloved lakefront destinations. Starting at the Milwaukee Art Museum, the path follows the shoreline through Veterans Park, McKinley Park (home to Milwaukee's only public marina), and Bradford Beach—America's most accessible beach. The route ends at Lake Park and the North Point Lighthouse.",
      highlights: ["Milwaukee Art Museum views", "Bradford Beach (most accessible beach in America)", "McKinley Marina", "Beach volleyball courts"],
      insiderTip: "Bradford Beach features permanent concrete ramps and seasonal rollout mats providing beach wheelchair access. The Roundhouse Beer Garden at McKinley Marina is perfect for a mid-hike break.",
      bestFor: "Tourists, beach lovers, accessible outings",
      parkingInfo: "Paid parking at Bradford Beach and Veterans Park lots. Free street parking on Lincoln Memorial Drive.",
    },
  ],
  naturePreserves: [
    {
      name: "Havenwoods State Forest",
      location: "Northwest Milwaukee",
      type: "Urban State Forest",
      difficulty: "Easy",
      distance: "6+ miles of trails",
      address: "6141 N Hopkins St, Milwaukee, WI 53209",
      description: "Havenwoods is Wisconsin's only urban state forest, featuring 237 acres of grasslands, woods, and wetlands within city limits. Over six miles of trails include a 2.5-mile crushed limestone main path perfect for all abilities, plus grass trails for exploration. Four ponds, a 120-foot bridge, and abundant wildlife make this a true nature escape without leaving Milwaukee.",
      highlights: ["Wisconsin's only urban state forest", "120-foot bridge over wetlands", "Four ponds", "Free nature programs"],
      insiderTip: "Join the free Second Saturday Bird Walks or Candlelight Hikes for guided experiences. The 1.3-mile history trail explains the land's restoration from military base to forest.",
      bestFor: "Urban nature seekers, bird watching, free activities",
      parkingInfo: "Free parking. Open 6am-8pm daily. No admission fee.",
    },
    {
      name: "Riverside Park & Urban Ecology Center",
      location: "East Side Milwaukee",
      type: "Urban Nature Trail",
      difficulty: "Easy",
      distance: "2+ miles of trails",
      address: "1500 E Park Pl, Milwaukee, WI 53211",
      description: "Riverside Park, enhanced by the Urban Ecology Center, offers urban forest trails along the Milwaukee River. The center provides environmental education and outdoor programs while maintaining trails through restored natural areas. The park connects to the Oak Leaf Trail and features both paved and natural surface paths perfect for discovering wildlife in the heart of the city.",
      highlights: ["Urban Ecology Center programs", "Milwaukee River access", "Oak Leaf Trail connection", "Naturalist-led hikes available"],
      insiderTip: "The Urban Ecology Center offers free equipment lending including snowshoes, canoes, and fishing gear. Join their HKE MKE event for guided hikes throughout the year.",
      bestFor: "Families, environmental education, community events",
      parkingInfo: "Free parking. Urban Ecology Center open for equipment borrowing and programs.",
    },
    {
      name: "Whitnall Park",
      location: "Hales Corners",
      type: "County Park Trails",
      difficulty: "Easy to Moderate",
      distance: "5+ miles of trails",
      address: "5879 S 92nd St, Hales Corners, WI 53130",
      description: "Whitnall Park is the largest park in the Milwaukee County system, encompassing botanical gardens, nature center, golf course, and miles of diverse trails. The park is a top birding destination with trails winding through woodland, wetland, prairie, and oak savanna. Mountain bikers can tackle the 4-mile Kegel Alpha Trail with steep and rocky segments.",
      highlights: ["Boerner Botanical Gardens", "Wehr Nature Center access", "Top birding location", "Mountain biking trails"],
      insiderTip: "Combine your hike with a visit to Boerner Botanical Gardens (open late April to early November). The Beer Garden provides refreshments after your walk.",
      bestFor: "Full-day outings, gardeners, birders, mountain bikers",
      parkingInfo: "Free parking throughout the park. Multiple trailheads available.",
    },
    {
      name: "Menomonee River Parkway",
      location: "West Side Milwaukee",
      type: "River Parkway Trail",
      difficulty: "Easy",
      distance: "9 miles of trails",
      address: "Multiple access points along Menomonee River",
      description: "The Menomonee River Parkway stretches approximately 9 miles along the Menomonee River through two sections of greenway. The 4.5-mile loop trail (4.3-star rating) combines wide paved paths with grassy single-track trails running alongside the river. Unpaved trails are foot-traffic only, providing a more natural hiking experience.",
      highlights: ["River views throughout", "Mix of paved and natural trails", "Three mountain bike trails", "Wildlife corridor"],
      insiderTip: "The parkway contains three official mountain bike trails—Bubba's Woods, Hoyt, and Oak Hill—making it a significant destination for mountain bikers. Milwaukee County is adding 10 miles of new trails by 2026.",
      bestFor: "Trail runners, mountain bikers, dog walkers",
      parkingInfo: "Free parking at multiple access points. Dogs allowed on leash.",
    },
  ],
  urbanParks: [
    {
      name: "Estabrook Park",
      location: "Shorewood/Glendale",
      type: "River Park Trails",
      difficulty: "Easy",
      distance: "1.8-7.8 miles options",
      address: "4400 N Estabrook Dr, Milwaukee, WI 53211",
      description: "Estabrook Park offers multiple trail options along the Milwaukee River, from the easy 1.8-mile loop to the 7.8-mile Milwaukee River Trail connecting to Caesar's Park. The park features mature hardwood forest, river views, and connections to the Oak Leaf Trail system. A beer garden with live music provides the perfect post-hike reward.",
      highlights: ["Milwaukee River views", "Mature hardwood forest", "Estabrook Beer Garden", "Disc golf course"],
      insiderTip: "The Milwaukee River Loop Trail can get muddy after rain—wear appropriate footwear. The Beer Garden operates seasonally with live music and food trucks.",
      bestFor: "River walks, beer garden visits, disc golf players",
      parkingInfo: "Free parking. Park open 6am-10pm.",
    },
    {
      name: "Kletzsch Park",
      location: "Glendale",
      type: "River Park Trails",
      difficulty: "Easy to Moderate",
      distance: "3+ miles of trails",
      address: "6560 N Milwaukee River Pkwy, Glendale, WI 53217",
      description: "Kletzsch Park spans 141 acres along the Milwaukee River with hiking trails winding through grasslands, oak-maple woodlands, and floodplain forest. Part of the Forked Aster Trail System, the park offers both paved Oak Leaf Trail sections and natural surface paths. The River Glen Mountain Bike Trail adds variety for more adventurous visitors.",
      highlights: ["Milwaukee River frontage", "Forked Aster Trail stop", "Mountain bike trail", "Archery range"],
      insiderTip: "The floodplain forest trails hug the riverbanks and are particularly beautiful in fall. The park also features archery, disc golf, and a popular sledding hill in winter.",
      bestFor: "Nature walks, mountain biking, varied recreation",
      parkingInfo: "Free parking. Open 6am-10pm.",
    },
    {
      name: "Lake Park Ravine Trails",
      location: "East Side Milwaukee",
      type: "Ravine Nature Trails",
      difficulty: "Moderate",
      distance: "1.5 miles",
      address: "3233 E Kenwood Blvd, Milwaukee, WI 53211",
      description: "Within Lake Park, the ravine trails offer a wilder hiking experience through dramatic glacial ravines with intermittent streams. The Locust Street and Waterfall ravines are among Milwaukee's most distinctive natural features. These unpaved paths feel worlds away from the city while remaining easily accessible from the East Side neighborhoods.",
      highlights: ["Dramatic glacial ravines", "Intermittent streams", "Lake Park Waterfall", "Wild urban nature"],
      insiderTip: "The ravines are most dramatic in spring when streams flow strongest. Connect your ravine hike with the paved paths to create a varied loop experience.",
      bestFor: "Adventure seekers, geology enthusiasts, photographers",
      parkingInfo: "Free street parking and small lots throughout Lake Park.",
    },
    {
      name: "Three Bridges Park",
      location: "Menomonee Valley",
      type: "Urban Nature Trail",
      difficulty: "Easy",
      distance: "1.5 miles",
      address: "1500 W Canal St, Milwaukee, WI 53233",
      description: "Three Bridges Park represents Milwaukee's urban renewal success, transforming former industrial land into a vibrant green space along the Menomonee River. The park features paved trails, native plantings, and stunning views of three historic railroad bridges. Connected to the Hank Aaron State Trail, it's a perfect introduction to Milwaukee's growing trail network.",
      highlights: ["Three historic railroad bridges", "Industrial heritage", "Native prairie restoration", "Hank Aaron State Trail connection"],
      insiderTip: "The park is part of the Menomonee Valley's transformation and connects to numerous breweries and restaurants. Consider combining your walk with a visit to nearby craft breweries.",
      bestFor: "Urban explorers, history buffs, brewery hoppers",
      parkingInfo: "Free parking on Canal Street. Easy access from Hank Aaron State Trail.",
    },
  ],
  nearbyHikes: [
    {
      name: "Lapham Peak State Park",
      location: "Delafield (25 miles west)",
      type: "State Park Trails",
      difficulty: "Easy to Moderate",
      distance: "17+ miles of trails",
      address: "W329 N846 County Rd C, Delafield, WI 53018",
      description: "Lapham Peak is the single best hiking destination within 30 minutes of Milwaukee. The park features over 17 miles of trails ranging from easy to moderate, including a segment of the Ice Age National Scenic Trail. The 45-foot observation tower atop the highest point in Waukesha County (1,233 feet) offers panoramic views. A butterfly garden and three picnic areas enhance the experience.",
      highlights: ["45-foot observation tower", "Ice Age Trail segment", "Highest point in Waukesha County", "Butterfly garden"],
      insiderTip: "The 7.8-mile Ice Age Trail segment through Lapham Peak is spectacular, but the park's loop trails let you customize your distance. The tower is worth the climb for 360-degree views.",
      bestFor: "Serious hikers, Ice Age Trail enthusiasts, families",
      parkingInfo: "Vehicle admission sticker required. Park open 6am-9pm year-round.",
    },
    {
      name: "Kettle Moraine State Forest - Southern Unit",
      location: "30 miles southwest",
      type: "State Forest Trails",
      difficulty: "Easy to Difficult",
      distance: "100+ miles of trails",
      address: "S91 W39091 WI-59, Eagle, WI 53119",
      description: "The Southern Unit of Kettle Moraine State Forest covers over 22,000 acres of forested glacial hills, kettle lakes, and prairies with more than 100 miles of hiking, mountain biking, and horseback riding trails. Part of the Ice Age Trail passes through, following the path of the last continental glacier. The varied terrain offers challenges for all skill levels.",
      highlights: ["22,000 acres of forest", "Ice Age Trail access", "Kettle lakes and glacial features", "Horseback and mountain bike trails"],
      insiderTip: "September and early October are perfect for fall color hikes. The Nordic ski trails double as excellent hiking paths in warmer months.",
      bestFor: "Day hikers, backpackers, horseback riders, mountain bikers",
      parkingInfo: "State park vehicle admission sticker required. Multiple trailheads throughout the forest.",
    },
    {
      name: "Holy Hill - Ice Age Trail Segment",
      location: "Hubertus (45 minutes northwest)",
      type: "Ice Age Trail Segment",
      difficulty: "Moderate",
      distance: "7 miles one-way",
      address: "1525 Carmel Rd, Hubertus, WI 53033",
      description: "The Holy Hill segment of the Ice Age Trail meanders nearly seven miles through the northern Kettle Moraine State Forest to the iconic Holy Hill Basilica, perched atop one of Wisconsin's tallest kames. The 4.7-star rated trail (1,223 reviews) offers well-maintained paths with gradual inclines through beautiful hardwood forest. The basilica's scenic tower is open seasonally for additional views.",
      highlights: ["Historic Holy Hill Basilica", "One of Wisconsin's tallest kames", "Well-maintained Ice Age Trail", "Scenic tower climb available"],
      insiderTip: "Mid-October offers peak fall foliage. The Outdoor Stations of the Cross winds half a mile up the hillside with steep paths and stairs for those wanting extra challenge. Tower open May-October.",
      bestFor: "Fall hikers, pilgrims, Ice Age Trail through-hikers",
      parkingInfo: "Free parking at Holy Hill. Ice Age Trail parking at Donegal Road trailhead.",
    },
    {
      name: "Ice Age Trail - Delafield Segment",
      location: "Delafield (30 minutes west)",
      type: "Ice Age National Scenic Trail",
      difficulty: "Easy to Moderate",
      distance: "6.4 miles out-and-back",
      address: "Wisconsin Veterans Memorial Riverwalk, Delafield, WI",
      description: "The Delafield segment of the Ice Age Trail offers a scenic 6.4-mile out-and-back hike through one of Wisconsin's official Ice Age Trail Communities. For 3/4 mile, the trail coincides with the Wisconsin Veterans Memorial Riverwalk along the Bark River. The well-maintained path is accessible April through October and provides a taste of the 1,000-mile national scenic trail.",
      highlights: ["Ice Age Trail Community", "Bark River views", "Wisconsin Veterans Memorial Riverwalk", "Part of 1,000-mile national trail"],
      insiderTip: "The Mammoth Hike Challenge every October invites participants to hike segments and visit Ice Age Trail Communities. Delafield's downtown offers dining options to refuel after your hike.",
      bestFor: "Ice Age Trail samplers, river walks, historic sites",
      parkingInfo: "Free parking in downtown Delafield. Trail accessible year-round.",
    },
  ],
};

const faqs = [
  {
    question: "What is the best hiking trail in Milwaukee?",
    answer: "The Oak Leaf Trail is Milwaukee's premier trail system with 135 miles connecting all major parks. For a single hike, Seven Bridges Trail in Grant Park offers the most magical experience with historic Lannon stone paths, 10+ footbridges, and Lake Michigan views. Schlitz Audubon Nature Center provides the best nature preserve experience with 6 miles of trails and a 60-foot observation tower.",
  },
  {
    question: "Are Milwaukee hiking trails free?",
    answer: "Most Milwaukee hiking trails are completely free, including the Oak Leaf Trail, Seven Bridges Trail, all Milwaukee County parks, Havenwoods State Forest, and Lakeshore State Park. Some nature centers charge admission: Schlitz Audubon ($8 adults, $5 children) and state parks like Lapham Peak require a vehicle admission sticker ($8 daily or $28 annual for Wisconsin residents).",
  },
  {
    question: "What is the Oak Leaf Trail Milwaukee?",
    answer: "The Oak Leaf Trail is a 135-mile paved multi-use recreational trail system that encircles Milwaukee County. It connects all major parks in the county system, from lakefront beaches to river parkways. The trail is divided into scenic segments including the Lake Park Loop, South Shore Line, and Whitnall Park Loop. Over half a million people use the trails annually for hiking, biking, and running.",
  },
  {
    question: "Where can I hike along Lake Michigan in Milwaukee?",
    answer: "The best lakefront hiking includes: Lake Park with its dramatic ravines and North Point Lighthouse, Bradford Beach to Veterans Park along the Oak Leaf Trail, South Shore Park's 2.4-mile loop with skyline views, Doctors Park with its secluded beach and WPA-era stone jetties, Schlitz Audubon Nature Center's bluff trails, and Lakeshore State Park in downtown Milwaukee.",
  },
  {
    question: "What hiking trails are near Milwaukee within 30 minutes?",
    answer: "Within 30 minutes of downtown Milwaukee: Lapham Peak State Park (25 miles west) offers 17+ miles of trails and an observation tower, the Ice Age Trail Delafield Segment provides 6.4 miles along the Bark River, Kettle Moraine State Forest Southern Unit has 100+ miles of trails, and Holy Hill (45 minutes) features the scenic Ice Age Trail segment to the historic basilica.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "20 Best Hiking Trails in Milwaukee: Nature Walks, Lakefront Paths & Hidden Gems [2026]",
    "description": "Discover Milwaukee's best hiking trails from the 135-mile Oak Leaf Trail to Seven Bridges Trail, Schlitz Audubon Nature Center, and nearby state parks. Complete guide with trail lengths, difficulty levels, and insider tips.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-01",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/milwaukee-hiking-trails"
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
      { "@type": "ListItem", "position": 2, "name": "Milwaukee Hiking Trails", "item": "https://www.discover-milwaukee.com/milwaukee-hiking-trails" }
    ]
  }
};

export default function MilwaukeeHikingTrails() {
  const TrailCard = ({ trail }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{trail.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {trail.difficulty && <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{trail.difficulty}</span>}
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{trail.location}</span>
          {trail.type && <span style={{ backgroundColor: c.yellow, color: c.green1, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>{trail.type}</span>}
        </div>
      </div>
      {trail.distance && <p style={{ fontSize: "14px", color: c.green2, marginBottom: "12px", fontWeight: "600" }}>{trail.distance}</p>}
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{trail.description}</p>
      {(trail.bestFor || trail.highlights) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {trail.bestFor && (
            <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>BEST FOR</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{trail.bestFor}</p>
            </div>
          )}
          {trail.highlights && (
            <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>HIGHLIGHTS</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{trail.highlights.join(", ")}</p>
            </div>
          )}
        </div>
      )}
      {trail.insiderTip && (
        <div style={{ backgroundColor: c.yellow, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
          <p style={{ fontSize: "13px", color: c.green1, margin: 0 }}><strong>Insider tip:</strong> {trail.insiderTip}</p>
        </div>
      )}
      {trail.parkingInfo && (
        <p style={{ fontSize: "13px", color: "#666", marginTop: "12px", marginBottom: "4px" }}><strong>Parking:</strong> {trail.parkingInfo}</p>
      )}
      {trail.address && <p style={{ fontSize: "13px", color: "#777", marginTop: "8px", marginBottom: 0 }}>{trail.address}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>20 Best Hiking Trails in Milwaukee: Oak Leaf Trail, Nature Walks & More [2026]</title>
        <meta name="description" content="Discover Milwaukee's best hiking trails from the 135-mile Oak Leaf Trail to Seven Bridges, Schlitz Audubon, and lakefront paths. Complete guide with trail lengths, difficulty levels, and insider tips." />
        <meta name="keywords" content="milwaukee hiking trails, hiking near milwaukee, oak leaf trail milwaukee, best walks milwaukee, nature trails milwaukee, seven bridges trail, schlitz audubon, lakefront trail milwaukee, kettle moraine hiking" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-hiking-trails" />

        <meta property="og:title" content="20 Best Hiking Trails in Milwaukee: A Local's Guide [2026]" />
        <meta property="og:description" content="From the 135-mile Oak Leaf Trail to magical Seven Bridges and lakefront paths, discover Milwaukee's best hiking trails with insider tips and parking info." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-hiking-trails" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/og-hiking-trails.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/og-hiking-trails.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>OUTDOOR ACTIVITIES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              20 Best Hiking Trails in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From the 135-mile Oak Leaf Trail to magical ravine hikes, lakefront bluff trails, and nature preserves with observation towers. Here's where to explore Milwaukee on foot.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>EXPLORE BY TYPE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#lakefront" style={{ color: c.green2, fontSize: "14px" }}>Lakefront Trails</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nature-preserves" style={{ color: c.green2, fontSize: "14px" }}>Nature Preserves</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#urban-parks" style={{ color: c.green2, fontSize: "14px" }}>Urban Parks</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#nearby-hikes" style={{ color: c.green2, fontSize: "14px" }}>Nearby Hikes</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <NewsletterCTA />


          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Hiking Trails</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The must-hike trails that define Milwaukee's outdoor scene.
            </p>
            {hikingTrails.bestOverall.map((trail, i) => <TrailCard key={i} trail={trail} />)}
          </section>

          <section id="lakefront" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Lakefront Trails</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Stunning paths along Lake Michigan's shoreline.
            </p>
            {hikingTrails.lakefrontTrails.map((trail, i) => <TrailCard key={i} trail={trail} />)}
          </section>

          <section id="nature-preserves" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nature Preserves</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Protected natural areas with diverse ecosystems.
            </p>
            {hikingTrails.naturePreserves.map((trail, i) => <TrailCard key={i} trail={trail} />)}
          </section>

          <section id="urban-parks" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Urban Parks with Trails</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Green spaces with hiking right in the city.
            </p>
            {hikingTrails.urbanParks.map((trail, i) => <TrailCard key={i} trail={trail} />)}
          </section>

          <section id="nearby-hikes" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Nearby Hikes (Within 30 Minutes)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              State parks and trails just outside Milwaukee.
            </p>
            {hikingTrails.nearbyHikes.map((trail, i) => <TrailCard key={i} trail={trail} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-patios-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Best Patios →
              </Link>
              <Link href="/free-things-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Free Things to Do →
              </Link>
              <Link href="/milwaukee-beaches" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>
                Beaches Guide →
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Outdoor Event Alerts</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Trail openings, guided hikes, and Milwaukee outdoor events.</p>
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
