import React, { useState } from "react";
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

const atAGlance = [
  { label: "Address", value: "700 N Art Museum Dr, Milwaukee, WI 53202 — on the downtown lakefront" },
  { label: "Hours (verified June 2026)", value: "Mon 10–5 · TUE CLOSED · Wed 10–5 · Thu 10–8 · Fri–Sun 10–5" },
  { label: "Admission start price", value: "Adults $27 · Seniors/Students/Military $20 · Kids 12 & under FREE · Members FREE" },
  { label: "Free / pay-what-you-wish", value: "Every Thursday 4–8 p.m. (pay-what-you-wish) + Bank of America cardholders free the first full weekend of every month" },
  { label: "Brise Soleil flap times", value: "Opens with the Museum (10 a.m.) · Closes and reopens at noon · Closes at 10 p.m. nightly (wings stay lit even on Mondays when the Museum is closed) — weather and wind permitting" },
  { label: "Architecture", value: "Three buildings: Saarinen War Memorial (1957) + David Kahler Building (1975) + Calatrava Quadracci Pavilion (2001)" },
  { label: "Collection size", value: "30,000+ works spanning antiquity to today across ~40 galleries" },
  { label: "Best for", value: "Architecture, photography, families, lakefront walks, rainy days, free Thursday-night dates" },
  { label: "Time needed", value: "2–3 hours minimum · 4+ hours for the full collection and a Café Calatrava (Lakeshore Café) lunch" },
  { label: "Parking", value: "Calatrava underground garage on site (1–2 hr: $10 · 3–6 hr: $14 · 12+ hr: $26) · Museum Center Park Garage early bird $10" },
];

const admissionTiers = [
  { tier: "Adult", price: "$27", note: "General admission, includes all special exhibitions" },
  { tier: "Senior (65+)", price: "$20", note: "Valid photo ID required" },
  { tier: "Student", price: "$20", note: "Valid student ID required (any age, any school)" },
  { tier: "Active Military", price: "$20", note: "Plus year-round Blue Star Museum free military family days each summer" },
  { tier: "Child 12 & under", price: "FREE", note: "Always free — no ticket needed" },
  { tier: "Member", price: "FREE", note: "Memberships start at $20 (Access program) / $75 individual" },
  { tier: "WI K–12 Teacher", price: "FREE", note: "Valid Wisconsin school ID required" },
  { tier: "Thursday 4–8 p.m.", price: "Pay-what-you-wish", note: "The single best deal at MAM — Thursday is also the only late night (open till 8)" },
];

const briseSoleil = [
  { label: "10:00 a.m. — Daily opening", value: "The 90-ton, 72-fin Burke Brise Soleil (217-foot wingspan) unfolds with the Museum's opening. This is the slowest, longest take — the wings rise from a closed clamshell to full extension over roughly 3.5 minutes." },
  { label: "12:00 noon — The midday flap", value: "The wings close completely and then reopen. This is the photographer's window — the only daytime moment when you can watch a full close-and-open cycle without leaving the lakefront." },
  { label: "10 p.m. — Nightly fold", value: "The wings fold back down at 10 p.m. every night, taking another ~3.5 minutes — they keep this lighting schedule even on Mondays when the Museum is closed." },
  { label: "Weather cancellations", value: "Sustained winds of 23 mph trigger an automatic safety lock via the wings' ultrasonic wind sensors — common on windy spring and fall days. Snow, ice, and lightning also cancel the flap. Call (414) 224-3200 the morning of if conditions look rough." },
];

const briseViewing = [
  "Cudahy Gardens / Reiman Bridge approach — the textbook frontal shot looking east, with the spars opening directly toward you.",
  "North side, from the War Memorial lawn — captures the wings against Lake Michigan with fewer crowds.",
  "From the Reiman Bridge itself — the underside-and-spine view is unusual and underrated.",
  "From Discovery World's lakefront promenade ~10 minutes south — pulls the whole Calatrava silhouette together against downtown.",
  "Boat or kayak from the lagoon — best on calm summer mornings; rent kayaks at the lagoon in season.",
];

const buildings = [
  {
    name: "Quadracci Pavilion (2001)",
    architect: "Santiago Calatrava",
    desc: "The white, winged reception hall that put MAM on the global map. Named TIME magazine's Number One design of 2001, this 142,050-square-foot building was Calatrava's first completed work in the United States. Houses Windhover Hall (the cathedral-like reception space under the wings), the auditorium, special-exhibition galleries, the MAM Store, and Café Calatrava (now branded the Lakeshore Café). The Reiman Bridge — Calatrava's pedestrian cable-stay span — connects the Pavilion across Lincoln Memorial Drive to downtown."
  },
  {
    name: "Kahler Building (1975)",
    architect: "David Kahler",
    desc: "The brutalist concrete galleries that hold most of the permanent collection. Reimagined and reopened in November 2015 after a $34M renovation that added 25,000 sq ft of gallery space (150,000 sq ft total) and reorganized the floors around natural lakefront light. This is where you find the bulk of the American, European, Modern, Contemporary, Folk & Self-Taught, and Decorative Arts galleries. Don't skip it — the Pavilion is the icon, but the Kahler is the museum."
  },
  {
    name: "War Memorial Center (1957)",
    architect: "Eero Saarinen",
    desc: "The original lakefront building — a floating cantilevered cross of poured concrete that Saarinen designed as both a memorial to fallen veterans and a home for the merged Layton Art Gallery and Milwaukee Art Institute collections. The building still serves both functions: it houses MAM galleries on the lower levels and the Milwaukee County War Memorial above. It became the Milwaukee Arts Center, then was renamed the Milwaukee Art Museum in 1980."
  },
];

const collections = [
  {
    name: "American Art (17th–20th c.)",
    desc: "Strong holdings from colonial portraiture through 19th-century landscape and the early 20th-century moderns. Includes works by Winslow Homer, John Singer Sargent, Mary Cassatt, Charles Sheeler, and the regionalist painters. Anchored by The Layton Collection — the museum's founding gift from Frederick Layton in 1888."
  },
  {
    name: "European Art (15th–20th c.)",
    desc: "Paintings, sculpture, prints, and drawings from the late Renaissance through the early 20th century. Old Master prints and drawings (a particularly deep strength), 19th-century French painting, and the German Expressionists that came in through the Bradley gift."
  },
  {
    name: "Modern & Contemporary",
    desc: "The Bradley Collection is the anchor — Margaret 'Peg' Bradley's 1975 gift of 600+ Modern works, including Fauvist paintings, German Expressionist canvases by Wassily Kandinsky and Ernst Ludwig Kirchner, and a major group of works by Georgia O'Keeffe. The Bradley Collection of Modern Art: A Bold Vision for Milwaukee retrospective marked its 50th anniversary in 2025–26."
  },
  {
    name: "American Folk & Self-Taught Art",
    desc: "One of the largest holdings of American folk and self-taught art in any general art museum, transformed by the 1989 Michael and Julie Hall Collection gift. Includes face jugs, weather vanes, quilts, decoys, Grandma Moses, Bill Traylor, Henry Darger, and the Wisconsin self-taught traditions."
  },
  {
    name: "American Decorative Arts (Chipstone partnership)",
    desc: "Since 1999, the Milwaukee-based Chipstone Foundation has partnered with MAM to display rotating selections of its American furniture, ceramics, and silver in dedicated galleries. The pottery and Pennsylvania-German collections are especially strong."
  },
  {
    name: "Photography, Prints & Drawings",
    desc: "Major photography holdings (with strengths in contemporary American work), and one of the deeper Old Master prints-and-drawings collections in the Midwest. The Print, Drawing, and Photography Study Center allows researchers and the public to view works on paper not on gallery view."
  },
  {
    name: "Indigenous & Native Art",
    desc: "MAM's permanent installation Homelands: Mnë'nának, Māēnāēwah, Tešišik centers Indigenous voices and works from the lands now called Wisconsin, including Menominee, Ho-Chunk, and Potawatomi artists. The complementary installation Knowledge Beings is also ongoing."
  },
];

const exhibitions = [
  {
    title: "Currents 40: Widline Cadet",
    dates: "Through August 9, 2026",
    desc: "The 40th installment in the Currents series highlighting an emerging contemporary artist. Cadet's photography and video work explores Haitian diasporic memory, family archives, and the visibility of Black women in image-making."
  },
  {
    title: "Gertrude Abercrombie: The Whole World Is a Mystery",
    dates: "Through July 19, 2026",
    desc: "A major retrospective of the Chicago Surrealist whose haunted self-portraits, moonlit landscapes, and dream tableaux made her a fixture of the jazz-age Chicago scene. Closes in mid-July — go early-summer if you can."
  },
  {
    title: "Gertrude & Friends: The Wisconsin Magic Realists",
    dates: "Through October 25, 2026",
    desc: "A companion show pairing Abercrombie with the Wisconsin Magic Realist circle — Marshall Glasier, John Wilde, Karl Priebe, and Dudley Huppler. The long run window means it pairs well with a fall return trip."
  },
  {
    title: "Seeking Revelation: German Romantic Prints and Drawings",
    dates: "June 19 – November 1, 2026",
    desc: "Opens June 19, drawing on MAM's deep European works-on-paper holdings to trace the Romantic search for the sublime through Caspar David Friedrich's circle and the Nazarenes. The summer's big print-and-drawing show."
  },
  {
    title: "The Layton Collection (ongoing)",
    dates: "Permanent installation",
    desc: "Frederick Layton's 1888 founding gift of 38 paintings — the original collection that became MAM. Reinstalled as a permanent gallery; required viewing for the institutional history."
  },
  {
    title: "Homelands: Mnë'nának, Māēnāēwah, Tešišik (ongoing)",
    dates: "Permanent installation",
    desc: "MAM's permanent installation of Indigenous art and material culture from the lands now called Wisconsin — Menominee (Māēnāēwah), Ho-Chunk, and Potawatomi (Mnë'nának) contributions."
  },
  {
    title: "Knowledge Beings (ongoing)",
    dates: "Permanent installation",
    desc: "Companion installation drawing on Indigenous epistemologies and contemporary Native artistic practice."
  },
];

const lakefrontPairings = [
  { name: "Discovery World", dist: "~10 min walk south", note: "Science and tech museum on the lakefront — pairs naturally with MAM for a full lakefront museum day. Both share the Lakefront Bike & Pedestrian Path." },
  { name: "Veterans Park", dist: "Immediately north", note: "92-acre lakefront park with paved trails, the lagoon (kayak rentals in summer), and an off-leash dog area. The Brise Soleil makes its best photo backdrop from the park's southwest corner." },
  { name: "Northwestern Mutual Tower & Commons", dist: "~5 min walk west", note: "The Mason Street side gives you the Tower's atrium garden, free to walk through during business hours — Milwaukee's most striking new skyscraper interior." },
  { name: "Lakefront Bike & Pedestrian Path / Oak Leaf Trail", dist: "Runs past the front door", note: "A 3.2-mile lakefront loop starts here, links to the Hank Aaron State Trail and Lakeshore State Park (22-acre prairie just south of Discovery World)." },
  { name: "Bradford Beach", dist: "~12 min drive / 25 min walk north", note: "Milwaukee's main public beach with the Beach Cantina, volleyball courts, and views back south toward the Calatrava silhouette." },
  { name: "Lakefront Brewery", dist: "~10 min drive northwest (across the river)", note: "Riverwest brewery with the legendary Friday fish fry and polka. A classic 'museum-then-fish-fry' pairing." },
  { name: "Cudahy Gardens", dist: "Immediately west of the Pavilion", note: "The Dan Kiley-designed formal gardens that frame the Calatrava approach. Best view of the wings from the foot of the gardens looking east." },
  { name: "Betty Brinn Children's Museum", dist: "~5 min walk west", note: "If you're traveling with kids under 10 who burn out of art galleries, this is the perfect chaser — and both are in the O'Donnell Park area." },
];

const tips = [
  "Buy tickets online in advance — same price, no admissions-desk line. The Thursday pay-what-you-wish window (4–8 p.m.) is the exception and is walk-up only.",
  "Tuesday is the closed day, not Monday. Plan around it — Monday is one of MAM's quieter days and a sneaky-good visit.",
  "If the Brise Soleil flap is the reason you're going, aim for the noon close-and-reopen on a calm-weather day. Sustained winds over 23 mph cancel it; the museum doesn't pre-announce — call ahead if winds look high.",
  "The Reiman Bridge entrance from downtown is the dramatic approach. Drive-in visitors arriving via the parking garage emerge into the Pavilion's lower level — fine, but you miss the cathedral moment.",
  "Lockers in the East End and Pavilion fit bags larger than 13×17 inches. Wheelchairs are free at the admissions desk; service animals welcome.",
  "Selfie sticks and drones are not allowed anywhere on campus. Flash photography is prohibited in the galleries.",
  "Members get free parking discounts at the Calatrava garage, 10% off at the MAM Store and Café, plus reciprocal admission at 500+ museums at the $250 Art Advocate level (and 1,000+ at the $500 Donor level) — a 2-day out-of-town museum trip almost pays for the membership.",
  "Lakefront Festival of Art weekend (June 12–14, 2026) is the busiest of the year — extended hours Fri & Sat until 7 p.m. mean an after-work or golden-hour visit is realistic for the first time.",
];

const faqs = [
  {
    question: "What day is the Milwaukee Art Museum closed?",
    answer: "The Milwaukee Art Museum is closed Tuesdays. Open hours are Monday 10 a.m.–5 p.m., Wednesday 10 a.m.–5 p.m., Thursday 10 a.m.–8 p.m. (the only late night), and Friday through Sunday 10 a.m.–5 p.m. This is one of the most common visitor mistakes — many other Milwaukee museums close Mondays, but MAM is the Tuesday-closed exception. Verified against mam.org/visit in June 2026."
  },
  {
    question: "How much does it cost to visit the Milwaukee Art Museum?",
    answer: "Adult admission is $27. Seniors (65+), students (any age with ID), and active military are $20. Children 12 and under are always free. Wisconsin K–12 teachers are free with valid school ID. Members are free at every level. Every Thursday from 4 to 8 p.m., admission is pay-what-you-wish — the best deal at MAM. Bank of America cardholders get free admission the first full weekend of every month through the Museums on Us program."
  },
  {
    question: "When do the Burke Brise Soleil (Calatrava wings) open and close?",
    answer: "The 90-ton, 72-fin Burke Brise Soleil (217-foot wingspan) opens with the Museum at 10 a.m., closes and reopens at noon, and folds back down at 10 p.m. every night — but ONLY when weather and wind conditions permit. Sustained winds of roughly 23 mph automatically lock the wings in their closed position via the ultrasonic sensors. Snow, ice, and lightning also cancel the flap. The wings keep their nightly fold schedule even on Mondays when the Museum is closed. The midday close-and-reopen at noon is the only full cycle you can watch in daylight without coming back. Call (414) 224-3200 the morning of your visit if winds look high."
  },
  {
    question: "Where should I stand to watch the wings open?",
    answer: "Five solid options: (1) Cudahy Gardens directly west of the Pavilion gives you the textbook frontal shot, with the spars rising toward you. (2) The Reiman Bridge — Calatrava's cable-stay pedestrian bridge — gives you a head-on view from the elevated approach. (3) The War Memorial lawn to the north captures the wings against Lake Michigan. (4) From Discovery World's lakefront promenade about 10 minutes south, you frame the whole Calatrava silhouette against the downtown skyline. (5) From a kayak on the lagoon on a calm summer morning — Veterans Park rents them in season."
  },
  {
    question: "How long should I plan to spend at the Milwaukee Art Museum?",
    answer: "Plan 2–3 hours minimum for the headline collection and the Calatrava architecture. Four-plus hours if you want to do the full Kahler Building (American, European, Modern, Folk, Decorative Arts), see the current special exhibitions, walk Cudahy Gardens, and eat lunch at the Lakeshore Café (formerly Café Calatrava). Architecture-only visitors can do the Pavilion exterior, Windhover Hall, and the Reiman Bridge in under an hour."
  },
  {
    question: "Where do I park at the Milwaukee Art Museum?",
    answer: "The Calatrava Underground Garage is the on-site option, accessed from Lincoln Memorial Drive or Michigan Street. Rates as of June 2026: free for 15 minutes or less, $7 for 15 minutes–1 hour, $10 for 1–2 hours, $12 for 2–3 hours, $14 for 3–6 hours, $16 for 6–12 hours, and $26 for 12+ hours. The garage is climate-controlled with accessible spaces and an elevator that connects to the Reiman Bridge level. The Museum Center Park Garage just to the west offers an early-bird $10 rate (enter by 10 a.m., exit by 9 p.m.) — often the cheapest all-day option. Members receive parking discounts."
  },
  {
    question: "Is Café Calatrava (or the Lakeshore Café) still open?",
    answer: "Yes — the on-site restaurant is currently branded Lakeshore Café (the older name 'Café Calatrava' is still used informally). Hours are Wednesday through Monday 10 a.m.–4:30 p.m., with hot kitchen service 11 a.m.–3 p.m. Closed Tuesday with the rest of the Museum. The menu features Valentine Coffee Roasters drip and espresso, Wisconsin-leaning seasonal plates, local beer, wine, and seasonal patio service. The lakefront tables on the north wall are the seats to ask for."
  },
  {
    question: "What exhibitions are at MAM in summer 2026?",
    answer: "As of June 2026: Gertrude Abercrombie: The Whole World Is a Mystery (through July 19), Gertrude & Friends: The Wisconsin Magic Realists (through October 25), Currents 40: Widline Cadet (through August 9), and Seeking Revelation: German Romantic Prints and Drawings (opens June 19, runs through November 1). Permanent ongoing installations include The Layton Collection, Homelands: Mnë'nának, Māēnāēwah, Tešišik, and Knowledge Beings. Verified against mam.org/exhibitions in June 2026 — confirm before going as runs can shift."
  },
  {
    question: "When is the Lakefront Festival of Art 2026?",
    answer: "Lakefront Festival of Art 2026 runs Friday, June 12 through Sunday, June 14, on the MAM campus. Hours are Friday and Saturday 10 a.m.–7 p.m. (new extended evening hours) and Sunday 10 a.m.–5 p.m. The festival hosts 145 juried artists from Milwaukee and across the country, plus live music, local food, and lakefront drinks. Tickets include access to both the festival and the Museum galleries. Advance online pricing starts at $22 (versus $27 at the gate), with 3-day passes at $40–$45 and free admission for kids 12 and under and Wisconsin K–12 teachers."
  },
  {
    question: "Is the Milwaukee Art Museum worth visiting? What's actually here besides the architecture?",
    answer: "Yes — the architecture is what gets you in the door, but the collection earns the ticket on its own. The Bradley Collection of Modern Art (600+ works gifted by Peg Bradley in 1975, including Kandinsky, Kirchner, and a major Georgia O'Keeffe group) is the headline. The American Folk & Self-Taught holdings (expanded by the 1989 Michael and Julie Hall Collection) are among the deepest of any US general art museum. The Chipstone Foundation partnership since 1999 brings rotating American decorative arts (furniture, ceramics, silver) into dedicated galleries. Plus 30,000+ total works spanning antiquity to the present, the permanent Homelands installation of Indigenous Wisconsin art, and one of the Midwest's strongest Old Master prints and drawings collections. The Quadracci Pavilion alone draws 400,000+ visitors a year — but it's the Kahler Building galleries that make MAM a real art museum, not just a photo stop."
  },
];

const structuredData = {
  museum: {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: "Milwaukee Art Museum",
    alternateName: "MAM",
    description: "The Milwaukee Art Museum is a world-class lakefront art museum housing 30,000+ works of art in three buildings designed by Eero Saarinen (1957), David Kahler (1975), and Santiago Calatrava (2001). Home of the iconic Burke Brise Soleil — the movable 90-ton, 72-fin wings with a 217-foot wingspan that open and close daily.",
    url: "https://mam.org",
    telephone: "+1-414-224-3200",
    image: "https://www.discover-milwaukee.com/images/milwaukee-art-museum-og.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "700 N Art Museum Dr",
      addressLocality: "Milwaukee",
      addressRegion: "WI",
      postalCode: "53202",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.040126,
      longitude: -87.896692,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "17:00" },
    ],
    priceRange: "$$",
    hasMap: "https://maps.google.com/?q=700+N+Art+Museum+Dr+Milwaukee+WI+53202",
    sameAs: [
      "https://en.wikipedia.org/wiki/Milwaukee_Art_Museum",
      "https://www.facebook.com/MilwaukeeArtMuseum",
      "https://www.instagram.com/milwaukeeartmuseum/",
    ],
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "Milwaukee Art Museum", item: "https://www.discover-milwaukee.com/milwaukee-art-museum" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Milwaukee Art Museum Summer 2026 Exhibitions",
    description: "Current and upcoming exhibitions on view at the Milwaukee Art Museum, summer 2026.",
    numberOfItems: exhibitions.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: exhibitions.map((ex, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "ExhibitionEvent",
        name: ex.title,
        description: ex.desc,
        location: {
          "@type": "Museum",
          name: "Milwaukee Art Museum",
          address: {
            "@type": "PostalAddress",
            streetAddress: "700 N Art Museum Dr",
            addressLocality: "Milwaukee",
            addressRegion: "WI",
            postalCode: "53202",
            addressCountry: "US",
          },
        },
      },
    })),
  },
};

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#brise-soleil", label: "Calatrava Wings" },
  { href: "#hours-admission", label: "Hours & Admission" },
  { href: "#buildings", label: "Buildings" },
  { href: "#collections", label: "Collections" },
  { href: "#exhibitions", label: "Exhibitions" },
  { href: "#cafe", label: "Café" },
  { href: "#lfoa", label: "Festival of Art" },
  { href: "#faq", label: "FAQ" },
];

export default function MilwaukeeArtMuseum() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Milwaukee Art Museum 2026 Guide | Hours, Calatrava Wings</title>
        <meta name="description" content="Milwaukee Art Museum 2026: verified hours, tickets, exhibits, Calatrava Brise Soleil times, Lakeshore Café, parking, and June 12–14 Lakefront Festival." />
        <meta name="keywords" content="milwaukee art museum, MAM milwaukee, calatrava wings milwaukee, burke brise soleil, milwaukee art museum hours, milwaukee art museum tickets, milwaukee art museum admission, quadracci pavilion, lakefront festival of art 2026, cafe calatrava, lakeshore cafe, milwaukee museums, things to do milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-art-museum" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Art Museum 2026 Guide | Hours, Calatrava Wings" key="og:title" />
        <meta property="og:description" content="Verified 2026 visitor guide to the Milwaukee Art Museum — hours, tickets, Brise Soleil flap times, exhibitions, parking, and the June 12–14 Lakefront Festival of Art." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-art-museum" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-art-museum-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee Art Museum — Calatrava wings, 30,000 works, lakefront icon. Verified 2026 visitor guide." key="og:image:alt" />
        <meta property="article:published_time" content="2026-06-07T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-07T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Museums & Attractions" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Art Museum 2026 Guide | Hours, Calatrava Wings" key="twitter:title" />
        <meta name="twitter:description" content="Verified 2026 visitor guide — hours, tickets, Brise Soleil flap times, exhibitions, parking, and the Lakefront Festival of Art." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-art-museum-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.museum) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED JUNE 7, 2026 · VERIFIED AGAINST MAM.ORG</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>The Milwaukee Art Museum</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              The definitive 2026 visitor guide to <strong>MAM</strong> — Santiago Calatrava's lakefront icon, the <strong>Burke Brise Soleil</strong> wings, 30,000+ works across three landmark buildings, and the <strong>Lakefront Festival of Art (June 12–14)</strong>. Hours, tickets, flap times, parking, café, and exhibitions, all audited against mam.org in June 2026.
            </p>
          </div>
        </header>

        <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.green1, borderBottom: `2px solid ${c.green2}`, padding: "12px 16px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", gap: "8px", maxWidth: "1000px", margin: "0 auto", whiteSpace: "nowrap" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "8px 14px", borderRadius: "8px", backgroundColor: "rgba(244,162,97,0.15)", border: `1px solid rgba(244,162,97,0.3)`, display: "inline-block", flexShrink: 0 }}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "880px", margin: "0 auto", padding: "40px 24px" }}>

          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Heads up:</strong> MAM is closed <strong>Tuesdays</strong> (not Mondays — a common mix-up with other Milwaukee museums). The Burke Brise Soleil only flaps when winds are under ~23 mph sustained — high-wind days, the wings stay locked closed for safety. Call (414) 224-3200 the morning of your visit if conditions look gusty.
            </p>
          </div>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee Art Museum at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>The essentials, verified against mam.org in June 2026.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="brise-soleil" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Burke Brise Soleil (Calatrava Wings)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The 90-ton, 72-fin movable sunscreen (217-foot wingspan) that put Milwaukee on the global architecture map. Calatrava's only completed U.S. building project at the time of its 2001 opening, and still the country's most theatrical museum entrance.</p>

            <div style={{ display: "grid", gap: "12px", marginBottom: "20px" }}>
              {briseSoleil.map((b) => (
                <div key={b.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px 18px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, letterSpacing: "1.2px", marginBottom: "6px", textTransform: "uppercase" }}>{b.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>{b.value}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "18px 20px", borderRadius: "12px", marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#b8860b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.2px" }}>Best Viewing & Photo Spots</p>
              <ul style={{ margin: 0, paddingLeft: "20px", color: c.green1, fontSize: "14px", lineHeight: 1.7 }}>
                {briseViewing.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </div>

            <div style={{ backgroundColor: c.green1, padding: "18px 20px", borderRadius: "12px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.yellow, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.2px" }}>Photo tip</p>
              <p style={{ fontSize: "14px", color: c.cream, margin: 0, lineHeight: 1.7 }}>
                The midday noon close-and-reopen is the only daytime full cycle. Set up at the foot of Cudahy Gardens 10 minutes early — the wings start moving on the dot. For golden hour, the 10 p.m. nightly fold drops the wings against a lit downtown skyline — year-round, even Mondays when the Museum is shut.
              </p>
            </div>
          </section>

          <section id="hours-admission" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Hours & Admission</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Verified against mam.org/visit in June 2026. Closed major holidays — call ahead for Thanksgiving, Christmas, and New Year's Day.</p>

            <div style={{ backgroundColor: c.green1, padding: "18px 20px", borderRadius: "12px", marginBottom: "20px", color: c.cream }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.yellow, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1.2px" }}>Hours</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
                <div><strong>Monday</strong><br/><span style={{ color: c.beige }}>10 a.m.–5 p.m.</span></div>
                <div><strong>Tuesday</strong><br/><span style={{ color: c.orange }}>CLOSED</span></div>
                <div><strong>Wednesday</strong><br/><span style={{ color: c.beige }}>10 a.m.–5 p.m.</span></div>
                <div><strong>Thursday</strong><br/><span style={{ color: c.yellow }}>10 a.m.–8 p.m.</span></div>
                <div><strong>Friday</strong><br/><span style={{ color: c.beige }}>10 a.m.–5 p.m.</span></div>
                <div><strong>Saturday</strong><br/><span style={{ color: c.beige }}>10 a.m.–5 p.m.</span></div>
                <div><strong>Sunday</strong><br/><span style={{ color: c.beige }}>10 a.m.–5 p.m.</span></div>
              </div>
            </div>

            <div style={{ overflowX: "auto", marginBottom: "20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.beige}` }}>
                <thead>
                  <tr style={{ backgroundColor: c.green2, color: c.cream }}>
                    <th style={{ padding: "12px 14px", textAlign: "left", fontSize: "13px", letterSpacing: "1px" }}>TIER</th>
                    <th style={{ padding: "12px 14px", textAlign: "left", fontSize: "13px", letterSpacing: "1px" }}>PRICE</th>
                    <th style={{ padding: "12px 14px", textAlign: "left", fontSize: "13px", letterSpacing: "1px" }}>NOTE</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionTiers.map((t, i) => (
                    <tr key={t.tier} style={{ borderTop: `1px solid ${c.beige}`, backgroundColor: i % 2 === 0 ? "white" : c.cream }}>
                      <td style={{ padding: "12px 14px", color: c.green1, fontWeight: 700, fontSize: "14px" }}>{t.tier}</td>
                      <td style={{ padding: "12px 14px", color: c.orange, fontWeight: 700, fontSize: "14px" }}>{t.price}</td>
                      <td style={{ padding: "12px 14px", color: "#555", fontSize: "13px", lineHeight: 1.5 }}>{t.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ backgroundColor: "rgba(244,162,97,0.12)", padding: "16px 18px", borderRadius: "12px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1.2px" }}>Free / Discounted Days</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>
                <strong>Pay-what-you-wish</strong> every Thursday 4–8 p.m. (walk-up only, no online tickets needed). <strong>Bank of America cardholders</strong> get free admission the first full weekend of every month through the Museums on Us program — just show your B of A debit or credit card and photo ID at the admissions desk.
              </p>
            </div>
          </section>

          <section id="buildings" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Three Buildings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Three architects, three eras, one campus. MAM is one of the only American art museums where the building history is a curriculum in 20th-century architecture all by itself.</p>
            <div style={{ display: "grid", gap: "14px" }}>
              {buildings.map((b) => (
                <div key={b.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "20px 22px", borderRadius: "14px" }}>
                  <h3 style={{ color: c.green1, fontSize: "20px", fontWeight: "800", margin: "0 0 4px" }}>{b.name}</h3>
                  <p style={{ color: c.orange, fontSize: "13px", fontWeight: "700", margin: "0 0 10px", letterSpacing: "0.5px" }}>{b.architect}</p>
                  <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="collections" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>The Collection (30,000+ Works)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>MAM grew from the 1957 merger of the Layton Art Gallery and the Milwaukee Art Institute — both founded in 1888. Today, it holds one of the country's strongest folk-art collections, the iconic Bradley Collection of Modern Art, and deep Old Master prints and drawings holdings.</p>
            <div style={{ display: "grid", gap: "12px" }}>
              {collections.map((col) => (
                <div key={col.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "18px 20px", borderRadius: "12px" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: "0 0 6px" }}>{col.name}</h3>
                  <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{col.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="exhibitions" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Summer 2026 Exhibitions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>On view as of June 2026 — verified against mam.org/exhibitions. All exhibitions are included with Museum admission and free for members.</p>
            <div style={{ display: "grid", gap: "12px" }}>
              {exhibitions.map((ex) => (
                <div key={ex.title} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "18px 20px", borderRadius: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: 0 }}>{ex.title}</h3>
                    <span style={{ backgroundColor: c.orange, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", whiteSpace: "nowrap" }}>{ex.dates}</span>
                  </div>
                  <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{ex.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="cafe" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Café Calatrava / Lakeshore Café</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The on-site restaurant in the Quadracci Pavilion — informally still called Café Calatrava by locals; currently branded the Lakeshore Café. Floor-to-ceiling lakefront windows, Wisconsin-leaning menu, Valentine Coffee Roasters drip and espresso.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.2px", marginBottom: "6px", textTransform: "uppercase" }}>Café hours</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Wed–Mon 10 a.m.–4:30 p.m. · Closed Tue · Hot kitchen 11 a.m.–3 p.m.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.2px", marginBottom: "6px", textTransform: "uppercase" }}>What to order</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>Valentine espresso · seasonal Wisconsin plates · local beer · house-made sweets · seasonal lakefront patio service</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.2px", marginBottom: "6px", textTransform: "uppercase" }}>The seats to ask for</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>The north-wall tables facing Lake Michigan — the patio when weather allows. Members get 10% off all dining purchases.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orange, letterSpacing: "1.2px", marginBottom: "6px", textTransform: "uppercase" }}>Admission needed?</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.5 }}>No — café access does not require Museum admission. You can come for coffee and the lakefront view alone.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>MAM Store & Membership</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The MAM Store sits inside the Quadracci Pavilion (members 10% off). Memberships are the cheapest way to visit more than twice a year.</p>

            <div style={{ backgroundColor: c.green1, padding: "20px 22px", borderRadius: "14px", color: c.cream, marginBottom: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.yellow, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.2px" }}>Membership Levels (2026)</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
                <div><strong style={{ color: c.yellow }}>Access — $20</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>Discounted tier for WIC, FoodShare, BadgerCare, or Medicaid participants.</span></div>
                <div><strong style={{ color: c.yellow }}>Student — $40</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>One full-time enrolled student; ID required.</span></div>
                <div><strong style={{ color: c.yellow }}>Individual — $75</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>One adult + children under 18.</span></div>
                <div><strong style={{ color: c.yellow }}>Family / Dual — $115</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>Two adults + children under 18.</span></div>
                <div><strong style={{ color: c.yellow }}>Art Advocate — $250</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>Adds reciprocal admission at 500+ museums, VIP festival access.</span></div>
                <div><strong style={{ color: c.yellow }}>Donor — $500</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>Reciprocal access at 1,000+ museums, curator events, travel.</span></div>
                <div><strong style={{ color: c.yellow }}>Patron — $800</strong><br/><span style={{ fontSize: "13px", color: c.beige }}>Adds Art in Bloom access, complimentary parking, private docent tours.</span></div>
              </div>
            </div>

            <div style={{ backgroundColor: "rgba(244,162,97,0.12)", padding: "16px 18px", borderRadius: "12px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1.2px" }}>Math check</p>
              <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.6 }}>
                A $115 Family/Dual membership pays for itself in three visits for two adults ($27 × 2 × 3 = $162). The $250 Art Advocate level adds reciprocal admission at 500+ museums — one 2-day out-of-town museum trip in Chicago or Minneapolis can effectively cover the upgrade.
              </p>
            </div>
          </section>

          <section id="lfoa" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Lakefront Festival of Art 2026</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>MAM's signature annual outdoor festival — and 2026 brings new extended evening hours for the first time.</p>

            <div style={{ backgroundColor: c.green2, padding: "22px 24px", borderRadius: "14px", color: c.cream, marginBottom: "16px" }}>
              <p style={{ fontSize: "13px", fontWeight: "700", color: c.yellow, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1.5px" }}>2026 Dates</p>
              <p style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 10px", color: c.cream }}>Friday, June 12 – Sunday, June 14, 2026</p>
              <p style={{ fontSize: "14px", margin: 0, color: c.beige, lineHeight: 1.6 }}>
                <strong style={{ color: c.cream }}>Fri & Sat 10 a.m.–7 p.m.</strong> (new extended evening hours), <strong style={{ color: c.cream }}>Sun 10 a.m.–5 p.m.</strong>. 145 juried artists from Milwaukee and around the country, live music, local food and drinks, lakefront in full color. Ticket pricing: $22 advance / $27 at the gate for single-day general admission, $40–$45 for a 3-day pass; kids 12 and under and Wisconsin K–12 teachers are free.
              </p>
            </div>

            <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Festival weekend is the busiest of MAM's year. The new Friday–Saturday 7 p.m. closing means an after-work or golden-hour visit is realistic for the first time — go Friday evening if you want to wander the festival, catch the wings on their evening close, and avoid the Saturday crush.
            </p>
          </section>

          <section style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking, Accessibility & Practical Tips</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Everything you wish you'd known before you arrived.</p>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 22px", borderRadius: "12px", marginBottom: "14px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>Parking</h3>
              <p style={{ color: "#444", fontSize: "14px", margin: "0 0 8px", lineHeight: 1.7 }}><strong>Calatrava Underground Garage</strong> (on-site, climate-controlled, accessible spaces): free for 15 min or less · $7 for under 1 hr · $10 (1–2 hr) · $12 (2–3 hr) · $14 (3–6 hr) · $16 (6–12 hr) · $26 (12+ hr). Enter from Lincoln Memorial Drive or Michigan Street.</p>
              <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}><strong>Museum Center Park Garage</strong> (alternative, just west): $10 early bird (enter by 10 a.m., exit by 9 p.m.) · $9 (30 min–1.5 hr) · $12 (1.5–3 hr) · $14 (3–7 hr). Weeknight $7 and weekend $10 evening rates available. Often the cheapest all-day option.</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 22px", borderRadius: "12px", marginBottom: "14px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>Accessibility</h3>
              <p style={{ color: "#444", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>Wheelchairs free at the admissions desk. Elevators to all Museum levels and to the Reiman Bridge. Service animals and mobility Segways permitted. Wheelchair- and stroller-accessible throughout. Lockers in the East End and Pavilion for bags larger than 13×17 inches. For specific accommodations (ASL tours, sensory-friendly hours, large-print materials), contact (414) 224-3200 or mam@mam.org in advance.</p>
            </div>

            <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 22px", borderRadius: "12px" }}>
              <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>Practical Tips</h3>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#444", fontSize: "14px", lineHeight: 1.8 }}>
                {tips.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Pair Your Visit: Lakefront Walks</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>MAM sits in the middle of Milwaukee's most walkable lakefront stretch. Pair the museum with one or two of these on the same day.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {lakefrontPairings.map((p) => (
                <div key={p.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, padding: "16px 18px", borderRadius: "12px" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{p.name}</h3>
                  <p style={{ color: c.orange, fontSize: "12px", fontWeight: "700", margin: "0 0 8px", letterSpacing: "0.5px" }}>{p.dist}</p>
                  <p style={{ color: "#555", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{p.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/milwaukee-museums" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>All Milwaukee Museums</Link>
              <Link href="/arts-culture-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Arts & Culture</Link>
              <Link href="/milwaukee-waterfront" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Lakefront Guide</Link>
              <Link href="/things-to-do-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do</Link>
              <Link href="/rainy-day-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Rainy Day Ideas</Link>
              <Link href="/milwaukee-date-ideas" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Date Ideas</Link>
              <Link href="/first-time-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>First Time in MKE</Link>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>With Kids</Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Tap a question to expand.</p>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", marginBottom: "10px", overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", textAlign: "left", backgroundColor: isOpen ? c.cream : "white", border: "none", padding: "16px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "700", color: c.green1 }}>
                    <span>{f.question}</span>
                    <span style={{ fontSize: "20px", color: c.orange, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.15s", fontWeight: "300" }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px", color: "#444", fontSize: "14px", lineHeight: 1.7, borderTop: `1px solid ${c.beige}` }}>
                      <p style={{ margin: "12px 0 0" }}>{f.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Museum openings, exhibition launches, lakefront festivals, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "13px", maxWidth: "700px", margin: "0 auto 10px", lineHeight: 1.6 }}>
            Hours, admission, exhibition dates, and parking rates verified against mam.org in June 2026. Museums change schedules — always call (414) 224-3200 the morning of your visit, especially for high-wind days when the Brise Soleil flap may be cancelled.
          </p>
          <p style={{ color: c.beige, fontSize: "14px", margin: 0 }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
