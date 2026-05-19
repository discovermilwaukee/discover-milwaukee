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

const golfCourses = {
  premiumPublic: [
    {
      name: "Erin Hills",
      area: "Erin (45 min NW of Milwaukee)",
      access: "Public — premium",
      tag: "Championship",
      address: "7169 County Road O, Erin, WI 53027",
      overview: "Dramatic, treeless glacial terrain that played host to the 2017 U.S. Open and the 2025 U.S. Women's Open. A walking-only, links-style bucket-list course with caddies and fescue-framed fairways.",
      signature: "The wide, rolling fairways and deep native grass — championship golf you can actually book a tee time on.",
      accessNote: "Public, walking only. Standard green fee approaches ~$300; caddies recommended. Reserve well in advance.",
      insiderTip: "It is walking-only with no carts — either hire a caddie or be ready to carry. Book early; major-championship demand keeps the tee sheet tight.",
    },
    {
      name: "The Bog",
      area: "Saukville (~25 min N of Milwaukee)",
      access: "Public — daily fee",
      tag: "Championship",
      address: "Saukville, WI (Cedarburg Bog area)",
      overview: "An Arnold Palmer Signature design opened in 1995, winding through 297 acres of woods, wetlands and rolling hills. Rated among the top Arnold Palmer courses you can play and a Golf Digest Wisconsin top-10.",
      signature: "118 bunkers, several with steep, penalizing lips, set against genuine wetland scenery.",
      accessNote: "Public daily-fee. Plays from roughly 5,110 to 7,221 yards across multiple tees.",
      insiderTip: "Play it from a tee that matches your game honestly — the bunkering punishes ego. The practice facility is strong, so warm up.",
    },
    {
      name: "Washington County Golf Course",
      area: "Hartford (~35 min NW of Milwaukee)",
      access: "Public — municipal",
      tag: "Championship",
      address: "Hartford, WI",
      overview: "An Arthur Hills design that opened in 1997 and has been ranked among the very top municipal courses in the nation by Golf Digest. Big, modern championship layout at a public price.",
      signature: "A 7,000+ yard Arthur Hills routing that has hosted U.S. Open local qualifying and Wisconsin PGA events.",
      accessNote: "Public, county-run. Par 72, roughly 7,048 yards from the tips.",
      insiderTip: "This is the area's best big-course value — championship pedigree without private-club money. Book ahead on weekends; locals know it well.",
    },
  ],
  countyValue: [
    {
      name: "Brown Deer Park Golf Course",
      area: "North Milwaukee",
      access: "Public — county",
      tag: "Public",
      address: "7625 N Range Line Rd, Milwaukee, WI",
      overview: "Milwaukee County's flagship 'tournament' course. Hosted the PGA Tour's Greater Milwaukee Open from 1994 to 2009 — the site of Tiger Woods' 1996 professional debut, where he made an ace in the final round.",
      signature: "Tree-lined, mature parkland golf with real PGA Tour history at a public-course price.",
      accessNote: "Milwaukee County Parks. 18 holes, par 71, ~6,759 yards.",
      insiderTip: "Play the same closing stretch the pros did and tell people you teed it up where Tiger turned pro. County resident card rates make it a bargain.",
    },
    {
      name: "Dretzka Park Golf Course",
      area: "Northwest Milwaukee",
      access: "Public — county",
      tag: "Public",
      address: "12020 W Bradley Rd, Milwaukee, WI",
      overview: "One of the longest and most respected layouts in the Milwaukee County system — a true championship-length parkland course at municipal pricing.",
      signature: "Nearly 6,800 yards of rolling, wooded parkland; a real test that holds up against far pricier tracks.",
      accessNote: "Milwaukee County Parks. 18 holes, par 72, ~6,809 yards.",
      insiderTip: "The strongest pure test in the county system after Brown Deer. Walk it for the full value play; carts are available.",
    },
    {
      name: "Oakwood Park Golf Course",
      area: "Franklin",
      access: "Public — county",
      tag: "Public",
      address: "3600 W Oakwood Rd, Franklin, WI",
      overview: "The longest course in the Milwaukee County Parks system at over 7,000 yards — a championship-distance regulation course on the south side.",
      signature: "Length. From the back tees it stretches past 7,000 yards, rare for a municipal course.",
      accessNote: "Milwaukee County Parks. 18 holes, par 72, ~7,074 yards.",
      insiderTip: "Do not play the tips just because you can — the right tee box turns a slog into a great-value round. Great spot to log a lot of holes cheaply.",
    },
    {
      name: "Whitnall Park Golf Course",
      area: "Hales Corners / Franklin",
      access: "Public — county",
      tag: "Public",
      address: "Whitnall Park, Milwaukee County, WI",
      overview: "Classic Milwaukee County parkland golf with rolling terrain and mature, tree-lined fairways — a longtime local favorite within the Whitnall Park grounds.",
      signature: "Old-school county parkland character: shade, slopes and a comfortable, walkable rhythm.",
      accessNote: "Milwaukee County Parks. 18 holes, par 71, ~6,508 yards.",
      insiderTip: "Pair a round here with the surrounding Whitnall Park — one of the prettiest park settings of any county course. Twilight rates are the move.",
    },
  ],
  privateClubs: [
    {
      name: "Milwaukee Country Club",
      area: "River Hills",
      access: "Private — members & guests",
      tag: "Private — member/guest",
      address: "8000 N Range Line Rd, River Hills, WI",
      overview: "Widely regarded as the most exclusive private club in Wisconsin and a Golf Digest America's 100 Greatest course. A 1929 Colt & Alison design along the Milwaukee River, with later restoration work by Tom Doak.",
      signature: "A genuine architectural treasure — Colt & Alison routing with river views reopened by Doak's tree work.",
      accessNote: "Private — members & guests only. Access typically requires a member host.",
      insiderTip: "If you ever get a member invite, take it without hesitation — this is the top of the Wisconsin private ladder. Otherwise it is admire-from-afar.",
    },
    {
      name: "Blue Mound Golf & Country Club",
      area: "Wauwatosa",
      access: "Private — members & guests",
      tag: "Private — member/guest",
      address: "Wauwatosa, WI",
      overview: "Founded in 1903 with a 1926 Seth Raynor design — one of Raynor's rare, well-preserved Midwest layouts. Hosted the 1933 PGA Championship (Gene Sarazen) and a 1955 Western Amateur won by Jack Nicklaus.",
      signature: "A textbook set of Raynor template holes — Redan, Biarritz, Alps, Road — and superb green complexes.",
      accessNote: "Private — members & guests only. Recognized by Golf Digest among the most fun private courses to play.",
      insiderTip: "If you play golf architecture, this is the local must-see — a clinic in Raynor templates. Tree-thinning restorations have brought the strategy back.",
    },
    {
      name: "Ozaukee Country Club",
      area: "Mequon",
      access: "Private — members & guests",
      tag: "Private — member/guest",
      address: "10823 N River Rd, Mequon, WI",
      overview: "Founded in 1922, a member-owned club regarded as one of the best-designed and best-conditioned courses in the Milwaukee area and the standout in the Mequon corridor.",
      signature: "Consistently excellent conditioning and a strong, member-favorite design north of the city.",
      accessNote: "Private — members & guests only. Member-owned, serving the greater Milwaukee region.",
      insiderTip: "The best-conditioned private turf in the Mequon area by most local accounts — worth angling for a guest round if you know a member.",
    },
    {
      name: "North Shore Country Club",
      area: "Mequon",
      access: "Private — members & guests",
      tag: "Private — member/guest",
      address: "3100 W Country Club Dr, Mequon, WI",
      overview: "A well-rounded private club known for generously wide fairways, large greens and effective use of elevation change — an enjoyable members' course in the North Shore suburbs.",
      signature: "Wide corridors, big greens and rolling elevation — playable but with real shape.",
      accessNote: "Private — members & guests only.",
      insiderTip: "More forgiving off the tee than some of its private neighbors — a fun guest round rather than a grind. Bring your putter; the greens are large.",
    },
  ],
  quickRound: [
    {
      name: "Lake Park Golf Course",
      area: "East Side Milwaukee (near downtown)",
      access: "Public — county par-3",
      tag: "Par-3",
      address: "Lake Park, Milwaukee, WI",
      overview: "An 18-hole par-3 course tucked into historic Lake Park on Milwaukee's East Side — the most convenient real golf to downtown and a quick, low-commitment loop.",
      signature: "A scenic, walkable par-3 in an Olmsted-designed park minutes from downtown.",
      accessNote: "Milwaukee County Parks, pay-as-you-play. 18 holes, par 54.",
      insiderTip: "The closest golf to downtown and Lake Michigan — perfect for a fast after-work nine or short-game work without a full-round commitment.",
    },
    {
      name: "Grant Park Golf Course",
      area: "South Milwaukee",
      access: "Public — county",
      tag: "Public",
      address: "Grant Park, South Milwaukee, WI",
      overview: "A shorter par-68 county regulation course along Lake Michigan bluffs in South Milwaukee — manageable length with genuine lakeside parkland scenery.",
      signature: "Lakeside bluff parkland at a fraction of premium-course pricing.",
      accessNote: "Milwaukee County Parks. 18 holes, par 68, ~5,213 yards.",
      insiderTip: "A friendly length for beginners and improving players — score-able without being a pushover, with lake views as a bonus.",
    },
    {
      name: "Greenfield Park Golf Course",
      area: "West Allis",
      access: "Public — county",
      tag: "Public",
      address: "Greenfield Park, West Allis, WI",
      overview: "A west-suburban county course at a comfortable par 69 — a relaxed, accessible 18 holes that is easy to fit into a half-day.",
      signature: "Approachable length and an easygoing pace on the west side.",
      accessNote: "Milwaukee County Parks. 18 holes, par 69, ~6,009 yards.",
      insiderTip: "A solid pick for beginners, juniors and a quick west-side round. Twilight pricing makes a casual late loop very cheap.",
    },
    {
      name: "Ironwood Golf Course",
      area: "Sussex (~25 min W of Milwaukee)",
      access: "Public — daily fee",
      tag: "Public",
      address: "W270N6166 Moraine Dr, Sussex, WI 53089",
      overview: "A 27-hole daily-fee facility in Sussex with three distinct nine-hole layouts (Birr, Callow and Meath) that can be mixed for variety — flexible scheduling for a quick nine or a full 18.",
      signature: "Three nines you can combine, so the course rarely feels the same twice.",
      accessNote: "Public daily-fee, 27 holes. Mix-and-match nines.",
      insiderTip: "The three-nine setup is ideal when you only have time for nine — ask which combo is playing fastest that day.",
    },
  ],
};

const faqs = [
  {
    question: "What are the best public golf courses near Milwaukee?",
    answer: "For premium public golf, Erin Hills (host of the 2017 U.S. Open and 2025 U.S. Women's Open) and The Bog (an Arnold Palmer design in Saukville) are the headliners. Washington County Golf Course in Hartford is an Arthur Hills design ranked among the top municipal courses in the country. Closer in, Milwaukee County's Brown Deer Park is a former PGA Tour venue you can play at a public price.",
  },
  {
    question: "Can you play Erin Hills?",
    answer: "Yes. Erin Hills is a public-access course about 45 minutes northwest of Milwaukee in Erin, WI, even though it has hosted the U.S. Open and U.S. Women's Open. It is walking only — no carts — so you either carry your own bag or hire a caddie, and standard green fees approach roughly $300. Book well in advance, as tee times are limited and in high demand.",
  },
  {
    question: "What are the best private country clubs in Milwaukee?",
    answer: "Milwaukee Country Club in River Hills is widely considered the most exclusive in Wisconsin and a Golf Digest America's 100 Greatest course (Colt & Alison, 1929). Blue Mound Golf & Country Club in Wauwatosa is a historic 1926 Seth Raynor design that hosted the 1933 PGA Championship. Ozaukee Country Club and North Shore Country Club, both in Mequon, are top member-owned clubs. All are private — members and guests only.",
  },
  {
    question: "What is the cheapest or best value golf in Milwaukee County?",
    answer: "The Milwaukee County Parks system runs more than a dozen public courses with very affordable rates, especially with a county resident card and at twilight. Dretzka Park and Oakwood Park (Franklin) deliver championship length cheaply, Brown Deer Park offers PGA Tour history, and Whitnall, Greenfield and Grant Parks are friendly, low-cost regulation rounds.",
  },
  {
    question: "What is the best golf course for beginners near Milwaukee?",
    answer: "Shorter county courses are the easiest entry: Grant Park (par 68) in South Milwaukee and Greenfield Park (par 69) in West Allis are manageable lengths at low cost. Lake Park's 18-hole par-3 course on the East Side is ideal for true beginners and short-game practice without committing to a full round.",
  },
  {
    question: "Where can you golf near downtown Milwaukee?",
    answer: "The closest real golf to downtown is Lake Park Golf Course, an 18-hole par-3 inside historic Lake Park on the East Side near Lake Michigan — perfect for a quick loop. Brown Deer Park to the north and Grant Park to the south are short drives for a full 18, and several other Milwaukee County courses ring the city.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Golf Courses in Milwaukee 2026: Public, Municipal & Private",
    "description": "A researched guide to the best golf in the Milwaukee area — premium public, value Milwaukee County municipal courses, and top private country clubs.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-05-18",
    "dateModified": "2026-05-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-golf-milwaukee"
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
      { "@type": "ListItem", "position": 2, "name": "Best Golf Milwaukee", "item": "https://www.discover-milwaukee.com/best-golf-milwaukee" }
    ]
  }
};

export default function BestGolfMilwaukee() {
  const GolfCard = ({ spot }) => (
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
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.access}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.area}</span>
        </div>
      </div>
      <p style={{ color: c.yellow, backgroundColor: c.green1, display: "inline-block", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>{spot.tag}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.overview}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>SIGNATURE / KNOWN FOR</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.signature}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>ACCESS</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.accessNote}</p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(244,208,63,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "4px" }}>INSIDER TIP</p>
        <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
      </div>
      <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>📍 {spot.address}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Golf Courses in Milwaukee 2026 | Public & Private</title>
        <meta name="description" content="The best golf in the Milwaukee area, researched. Premium public courses like Erin Hills and The Bog, value Milwaukee County municipal courses, and top private country clubs." />
        <meta name="keywords" content="golf milwaukee, best golf courses milwaukee, public golf milwaukee, private country clubs milwaukee, erin hills, milwaukee county golf" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-golf-milwaukee" />

        <meta property="og:title" content="Best Golf Courses in Milwaukee 2026 | Public & Private" />
        <meta property="og:description" content="Milwaukee-area golf by access and value — Erin Hills, The Bog, Milwaukee County municipal courses, and the top private country clubs." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-golf-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />
      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED MAY 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Golf in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              From a U.S. Open host to one of the best municipal systems in the country to historic private clubs — here is the Milwaukee-area golf that is worth your round, by access and value.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "48px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Note:</strong> Course details, green fees, tee-time policies and access rules change. Always confirm current rates, hours and booking requirements with the course before you go. Private clubs generally require a member host.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Premium Public & Daily-Fee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Championship-caliber courses anyone can book — including a U.S. Open host and an Arnold Palmer design.
            </p>
            {golfCourses.premiumPublic.map((spot, i) => <GolfCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee County Municipal & Value</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The county parks system — affordable, plentiful, and home to a former PGA Tour venue.
            </p>
            {golfCourses.countyValue.map((spot, i) => <GolfCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Top Private & Member Clubs</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The historic, architecturally significant clubs — members and guests only, but worth knowing.
            </p>
            {golfCourses.privateClubs.map((spot, i) => <GolfCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best for a Quick Round & Beginners</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Par-3, shorter regulation and flexible nine-hole golf — easy to fit in and friendly for newer players.
            </p>
            {golfCourses.quickRound.map((spot, i) => <GolfCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things To Do</Link>
              <Link href="/day-trips-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Day Trips</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Happy Hour</Link>
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
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurants, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
