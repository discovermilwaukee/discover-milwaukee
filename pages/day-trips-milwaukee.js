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

const dayTrips = {
  underOneHour: [
    {
      name: "Racine & Wind Point",
      distance: "30 minutes",
      type: "Lakefront Town",
      description: "The kringle capital of America and home to the stunning Wind Point Lighthouse. Racine offers Lake Michigan beaches, Frank Lloyd Wright architecture (Wingspread and SC Johnson campus tours), and authentic Danish bakeries.",
      highlights: "Kringle pastries, Wind Point Lighthouse, North Beach, SC Johnson tour",
      mustDo: "Get a kringle from O&H Danish Bakery, visit Wind Point Lighthouse at sunset",
      insiderTip: "The SC Johnson campus tour (free) showcases Frank Lloyd Wright's corporate architecture masterpiece.",
      bestFor: "Architecture fans, beach lovers, pastry enthusiasts",
      bestSeason: "Year-round (summer for beaches)",
    },
    {
      name: "Cedarburg",
      distance: "25 minutes",
      type: "Historic Small Town",
      description: "A charming small town with a historic downtown filled with shops, galleries, wine bars, and restaurants. The covered bridge, century-old buildings, and walkable main street make this feel like a New England village in Wisconsin.",
      highlights: "Cedar Creek Winery, covered bridge, historic downtown, antique shops",
      mustDo: "Wine tasting at Cedar Creek, walk the covered bridge, explore downtown shops",
      insiderTip: "The Strawberry Festival in June and Wine & Harvest Festival in September are worth planning around.",
      bestFor: "Couples, wine lovers, antique hunters",
      bestSeason: "Fall for colors, summer for festivals",
    },
    {
      name: "Port Washington",
      distance: "30 minutes",
      type: "Harbor Town",
      description: "A picturesque harbor town on Lake Michigan with a historic lighthouse, marina, and charming downtown. The 1860 Light Station offers tours, and the downtown has quality restaurants and shops.",
      highlights: "1860 Light Station, marina views, downtown shops, lakefront parks",
      mustDo: "Tour the lighthouse, walk the breakwater, lunch downtown",
      insiderTip: "The fish fry at Smith Bros. Fish Shanty is one of the best in the region.",
      bestFor: "Lighthouse lovers, peaceful escape, photography",
      bestSeason: "Summer and fall",
    },
  ],
  oneToTwoHours: [
    {
      name: "Lake Geneva",
      distance: "1 hour",
      type: "Resort Town",
      description: "Wisconsin's premier resort destination with a stunning lake, historic mansions, and the famous 26-mile Shore Path that circles the entire lake. Upscale shopping, dining, and lake activities make this a year-round destination.",
      highlights: "Shore Path, lake cruises, downtown shopping, mansion tours",
      mustDo: "Walk a section of the Shore Path, take a lake cruise, explore downtown",
      insiderTip: "The Shore Path passes through private property by historic easement. It's free and offers stunning views of lakeside mansions.",
      bestFor: "Couples, active travelers, luxury seekers",
      bestSeason: "Summer for water activities, winter for snow",
    },
    {
      name: "Madison",
      distance: "1.5 hours",
      type: "State Capital",
      description: "Wisconsin's capital city offers big-city culture in a scenic setting between two lakes. The State Capitol, UW campus, State Street, and thriving food scene make Madison worth more than a day trip—but you can get a great taste in one.",
      highlights: "State Capitol, Dane County Farmers Market, State Street, Memorial Union Terrace",
      mustDo: "Tour the Capitol, walk State Street, sunset at Memorial Union Terrace",
      insiderTip: "The Saturday Dane County Farmers Market (around the Capitol Square) is the largest producer-only market in the US.",
      bestFor: "Foodies, culture seekers, college town vibes",
      bestSeason: "Fall for football, summer for terrace season",
    },
    {
      name: "Sheboygan",
      distance: "1 hour",
      type: "Bratwurst & Beaches",
      description: "The bratwurst capital of America, Sheboygan also offers excellent Lake Michigan beaches, the John Michael Kohler Arts Center, and access to Kohler—home of the famous plumbing company and spa.",
      highlights: "Beaches, bratwurst, Kohler Arts Center, Kohler spa",
      mustDo: "Eat a Sheboygan-style bratwurst, visit Kohler Arts Center, walk the beach",
      insiderTip: "Sheboygan-style bratwurst uses a specific double brat in a hard roll. Get the authentic experience.",
      bestFor: "Beach lovers, food enthusiasts, spa seekers",
      bestSeason: "Summer for beaches",
    },
    {
      name: "Kettle Moraine State Forest",
      distance: "45 minutes - 1.5 hours",
      type: "Natural Area",
      description: "Glacial landscapes created some of Wisconsin's most unique terrain. The Northern and Southern units offer hiking, mountain biking, horseback riding, and stunning views of glacial features like kettles and moraines.",
      highlights: "Ice Age Trail, Parnell Tower, glacial terrain, forest trails",
      mustDo: "Hike a section of the Ice Age Trail, climb Parnell Tower for views",
      insiderTip: "The Southern Unit is closer but the Northern Unit is more dramatic. Both are excellent.",
      bestFor: "Hikers, nature lovers, mountain bikers",
      bestSeason: "Fall for colors, spring for wildflowers",
    },
  ],
  twoToThreeHours: [
    {
      name: "Devil's Lake State Park",
      distance: "2 hours",
      type: "State Park",
      description: "Wisconsin's most-visited state park for good reason. Dramatic 500-foot quartzite bluffs rise above a pristine lake, offering world-class hiking and rock climbing. The views from the bluff trails are the best in southern Wisconsin.",
      highlights: "Bluff trails, swimming, rock climbing, stunning views",
      mustDo: "Hike the East Bluff Trail, swim in the lake, watch sunset from the bluffs",
      insiderTip: "Arrive early on weekends—the park can hit capacity by late morning in summer. The East Bluff Trail is most dramatic.",
      bestFor: "Hikers, swimmers, photographers",
      bestSeason: "Summer for swimming, fall for colors",
    },
    {
      name: "Wisconsin Dells",
      distance: "2 hours",
      type: "Family Entertainment",
      description: "The Waterpark Capital of the World lives up to its name with dozens of indoor and outdoor waterparks. Beyond the water, you'll find boat tours through dramatic rock formations on the Wisconsin River.",
      highlights: "Waterparks, Dells boat tours, family attractions, themed restaurants",
      mustDo: "Upper Dells boat tour for natural beauty, any waterpark for family fun",
      insiderTip: "The Upper Dells boat tour shows the natural beauty that made this area famous before the waterparks arrived.",
      bestFor: "Families, thrill seekers, waterpark enthusiasts",
      bestSeason: "Summer (indoor parks are year-round)",
    },
    {
      name: "Spring Green & Taliesin",
      distance: "2.5 hours",
      type: "Architecture & Arts",
      description: "Frank Lloyd Wright's home and studio Taliesin anchors this artistic community in the scenic Driftless Area. The American Players Theatre and House on the Rock add to the cultural offerings in Wisconsin's most creative region.",
      highlights: "Taliesin tours, American Players Theatre, House on the Rock, Driftless scenery",
      mustDo: "Take a Taliesin tour, catch a show at APT (summer), explore the Driftless",
      insiderTip: "American Players Theatre performs under the stars in an outdoor amphitheater. Bring a blanket and picnic.",
      bestFor: "Architecture lovers, theater goers, scenic drives",
      bestSeason: "Summer for APT, fall for colors",
    },
  ],
  worthTheTrip: [
    {
      name: "Door County",
      distance: "3 hours",
      type: "Peninsula Resort Area",
      description: "Wisconsin's Cape Cod stretches into Lake Michigan with charming villages, cherry orchards, lighthouses, and scenic beauty. While better as a weekend trip, a long day can hit the highlights.",
      highlights: "Fish boils, lighthouses, state parks, villages, cherry everything",
      mustDo: "Attend a fish boil, visit Cave Point, explore at least two villages",
      insiderTip: "Pick a section (south for accessibility, north for wilderness) rather than trying to cover everything. Cave Point is essential.",
      bestFor: "Nature lovers, foodies, romantic getaways",
      bestSeason: "Summer and fall",
    },
    {
      name: "Chicago",
      distance: "1.5 hours (Amtrak available)",
      type: "Major City",
      description: "America's third-largest city is an easy day trip via car or the Amtrak Hiawatha line. World-class museums, architecture, food, and culture await just 90 miles south.",
      highlights: "Art Institute, architecture, deep dish pizza, neighborhoods",
      mustDo: "Architecture boat tour, Art Institute, explore a neighborhood",
      insiderTip: "The Amtrak Hiawatha runs multiple times daily from Milwaukee Intermodal Station to Chicago Union Station. Skip the driving stress.",
      bestFor: "Museum lovers, foodies, architecture fans",
      bestSeason: "Year-round (avoid winter driving)",
    },
  ],
};

const faqs = [
  {
    question: "What's the best day trip from Milwaukee?",
    answer: "For natural beauty, Devil's Lake State Park offers dramatic bluffs and hiking. For small-town charm, Cedarburg is just 25 minutes away. Lake Geneva delivers upscale resort vibes with the famous Shore Path. Madison offers big-city culture in 90 minutes.",
  },
  {
    question: "Can I do Door County as a day trip from Milwaukee?",
    answer: "It's possible but ambitious—Door County is 3 hours each way. A long day hitting the southern peninsula highlights works, but Door County is better enjoyed as a weekend trip to truly appreciate the pace.",
  },
  {
    question: "What day trips work in winter?",
    answer: "Madison's indoor attractions and food scene work year-round. Lake Geneva has winter activities. Chicago via Amtrak avoids winter driving. Cedarburg's shops and restaurants are cozy in any season.",
  },
  {
    question: "Best day trip for families from Milwaukee?",
    answer: "Wisconsin Dells has endless family entertainment. Devil's Lake offers swimming and easy trails. Sheboygan has beaches and the hands-on Above & Beyond Children's Museum. Door County (if you have the time) has family-friendly activities everywhere.",
  },
  {
    question: "Can I take Amtrak for a day trip?",
    answer: "Yes! The Amtrak Hiawatha runs multiple times daily between Milwaukee and Chicago, making car-free day trips easy. The train takes about 90 minutes and drops you at Union Station in downtown Chicago.",
  },
];

export default function DayTripsMilwaukee() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "15 Best Day Trips from Milwaukee: Complete Guide [2026]",
    description: "Discover the best day trips from Milwaukee from Lake Geneva to Door County. Natural beauty, charming towns, and adventure within 3 hours of the city.",
    image: "https://www.discover-milwaukee.com/images/day-trips-milwaukee.jpg",
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/logo.png" } },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: "https://www.discover-milwaukee.com/day-trips-milwaukee",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Explore", item: "https://www.discover-milwaukee.com/explore" },
      { "@type": "ListItem", position: 3, name: "Day Trips Milwaukee", item: "https://www.discover-milwaukee.com/day-trips-milwaukee" },
    ],
  };

  const renderTrip = (trip) => (
    <div key={trip.name} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0 }}>{trip.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{trip.distance}</span>
          <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "#fff" }}>{trip.type}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, marginBottom: "8px", fontStyle: "italic" }}>Best season: {trip.bestSeason}</p>
      <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>{trip.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem", marginBottom: "12px" }}>
        <div><strong style={{ color: c.green1 }}>Highlights:</strong> <span style={{ color: "#555" }}>{trip.highlights}</span></div>
        <div><strong style={{ color: c.green1 }}>Best For:</strong> <span style={{ color: "#555" }}>{trip.bestFor}</span></div>
      </div>
      <div style={{ padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orange}`, marginBottom: "12px" }}>
        <strong style={{ color: c.green1 }}>Must Do:</strong> <span style={{ color: "#555" }}>{trip.mustDo}</span>
      </div>
      <div style={{ padding: "12px", backgroundColor: c.beige, borderRadius: "8px" }}>
        <strong style={{ color: c.green1 }}>Insider Tip:</strong> <span style={{ color: "#555" }}>{trip.insiderTip}</span>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>15 Best Day Trips from Milwaukee: Complete Guide [2026]</title>
        <meta name="description" content="Discover the best day trips from Milwaukee including Lake Geneva, Door County, Devil's Lake, and Madison. Natural beauty and charming towns within 3 hours." />
        <meta name="keywords" content="day trips from Milwaukee, Milwaukee road trips, Lake Geneva, Door County, Devil's Lake, Wisconsin day trips" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/day-trips-milwaukee" />
        <meta property="og:title" content="15 Best Day Trips from Milwaukee [2026 Guide]" />
        <meta property="og:description" content="From Lake Geneva to Door County, discover the best day trips from Milwaukee." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/day-trips-milwaukee" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/day-trips-milwaukee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", color: c.green1, marginBottom: "16px", lineHeight: "1.2" }}>15 Best Day Trips from Milwaukee: Your Complete Escape Guide</h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              Milwaukee's location makes it a perfect home base for exploring Wisconsin and beyond. Within a few hours, you can reach dramatic state parks, charming small towns, world-class architecture, and even another major city via train.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.8" }}>
              This guide covers the best day trips organized by distance, from 30-minute escapes to destinations worth the longer drive. Each offers something Milwaukee can't—and that's what makes them worth the trip.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "12px" }}>Last updated: April 2026</p>
          </header>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Under 1 Hour</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Quick escapes for any day</p>
            {dayTrips.underOneHour.map(renderTrip)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>1-2 Hours</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>The sweet spot for day trips</p>
            {dayTrips.oneToTwoHours.map(renderTrip)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>2-3 Hours</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Worth getting up early for</p>
            {dayTrips.twoToThreeHours.map(renderTrip)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.8rem", color: c.green1, marginBottom: "8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>Worth the Trip</h2>
            <p style={{ color: "#666", marginBottom: "24px" }}>Longer drives for bigger rewards</p>
            {dayTrips.worthTheTrip.map(renderTrip)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.6rem", color: c.green1, marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <h3 style={{ color: c.green1, marginBottom: "8px", fontSize: "1.1rem" }}>{faq.question}</h3>
                <p style={{ color: "#555", lineHeight: "1.7" }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ backgroundColor: c.green1, borderRadius: "12px", padding: "32px", textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>Plan Your Milwaukee Visit</h2>
            <p style={{ color: c.beige, marginBottom: "20px" }}>Explore more of what Milwaukee and Wisconsin offer</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/things-to-do-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Things to Do</Link>
              <Link href="/weekend-in-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Weekend Guide</Link>
              <Link href="/outdoor-weekend-milwaukee" style={{ backgroundColor: c.orange, color: "#fff", padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: "500" }}>Outdoor Activities</Link>
            </div>
          </section>

          <footer style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
            <p>Exploring beyond Milwaukee since 2024. All information verified and regularly updated.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
