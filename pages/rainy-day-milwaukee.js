import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedGuides from "../components/RelatedGuides";
import NewsletterCTA from "../components/NewsletterCTA";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261", orangeLight: "#f7ba8a", orangeDark: "#ac520c",
  yellow: "#f4d03f",
};

const SITE = "https://www.discover-milwaukee.com";
const PATH = "/rainy-day-milwaukee";

// ---------------------------------------------------------------------------
// DATA. Every hour, price, date and address below was read on the venue's own
// website in November 2026 and confirmed by a second, independent check.
// A field is left out when the venue does not publish it. Do not fill gaps
// from memory: re-check the official site (the `website` on each listing).
// ---------------------------------------------------------------------------
const META = {
  title: "21 Indoor Things to Do in Milwaukee: Winter & Rainy Days",
  headline: "21 Indoor Things to Do in Milwaukee for Winter and Rainy Days (2026-27)",
  ogTitle: "21 Indoor Things to Do in Milwaukee This Winter",
  description: "Indoor things to do in Milwaukee for winter 2026-27 and rainy days: museums, the Domes, bowling, arcade bars and brewery tours, with verified hours and prices.",
  h1: "21 Indoor Things to Do in Milwaukee for Winter and Rainy Days",
  kicker: "Winter 2026-27 · Verified November 2026",
  deck: "Museums, the Domes, climbing, bowling, arcade bars and brewery tours, with hours and prices checked against each venue.",
  crumb: "Indoor & Rainy Day Guide",
  datePublished: "2026-04-18",
  dateModified: "2026-11-05",
  verifiedLabel: "November 5, 2026",
  keyFacts: [["Covers", "21 indoor things to do in Milwaukee for winter 2026-27 and rainy days"], ["Closing soon", "The Milwaukee Public Museum's last day at 800 W. Wells St. is January 3, 2027"], ["Free days", "Betty Brinn Children's Museum: third Thursday of every month. Milwaukee Public Museum: December 3, 2026"], ["Lowest prices", "Grohmann Museum $5; America's Black Holocaust Museum $7; Mitchell Park Domes $10"], ["Open daily", "Harley-Davidson Museum, Mitchell Park Domes, Pabst Mansion, Milwaukee Public Market"], ["Closed days", "Milwaukee Art Museum: Monday and Tuesday. Discovery World: most Mondays and Tuesdays. Betty Brinn and the Public Museum: Tuesday"]],
  intro: ["Lake Michigan weather can be unpredictable, and winter here is long. That is no reason to stay home. This guide covers 21 places to spend a cold, wet or snowy day indoors in Milwaukee, whether you have kids in tow, a date to plan or an afternoon to fill.", "One thing to know first: the Milwaukee Public Museum closes its Wells Street building for good after January 3, 2027, so this is the last winter to see it there."],
  dealsTitle: "Free and Low-Cost Days",
  dealsBlurb: "Ways to do this list for less.",
  moreBlurb: "Keep planning your winter in Milwaukee.",
  more: [["/winter-guide-milwaukee", "Winter Guide"], ["/things-to-do-with-kids-milwaukee", "With Kids"], ["/milwaukee-public-museum", "Public Museum's Final Season"], ["/ice-skating-milwaukee", "Ice Skating"], ["/milwaukee-museums", "Museums"], ["/milwaukee-breweries", "Breweries"]],
};

const SECTIONS = [
  {
    id: "museums",
    title: "Museums & Culture",
    blurb: "Eight places to spend a cold afternoon indoors, from a tropical dome to a house full of motorcycles.",
    items: [
        {
        name: "Milwaukee Public Museum",
        area: "Downtown",
        kind: "Natural History & Culture",
        duration: "2-4 hours",
        price: "$25",
        status: "Last day at 800 W. Wells St.: Sunday, January 3, 2027.",
        description: "In its final weeks at 800 W. Wells St., the Milwaukee Public Museum still has the Streets of Old Milwaukee, a walk-through butterfly garden, the Rainforest and the dinosaur diorama in The Third Planet. Its last day in this building is January 3, 2027. The dome theater and planetarium add even more to explore, and one planetarium show is included with admission.",
        hours: "Wednesday–Monday 10 a.m.–5 p.m.; closed Tuesdays, Thanksgiving Day and Christmas Day; Christmas Eve until 3 p.m.",
        admission: "Adults $25; teens 14–17 $24; seniors 65+ $21; youth 4–13 $19; military and college $21; ages 3 and under free. Includes one Planetarium program.",
        deals: "Milwaukee County residents get $2 off. The final Kohl's Thank You Thursday free day is Dec. 3, 2026, 10 a.m.–5 p.m.; free tickets can be reserved starting one week ahead, and walk-up tickets are not guaranteed.",
        highlights: "Streets of Old Milwaukee, Puelicher Butterfly Wing, Planetarium, The Third Planet dinosaur diorama",
        tip: "One Planetarium program is included with admission, first come, first served; giant dome films cost $6 extra. The Streets of Old Milwaukee exhibit is genuinely nostalgic.",
        bestFor: "Families, history buffs, science lovers",
        address: "800 W. Wells St., Milwaukee, WI 53233",
        website: "https://www.mpm.edu/",
      },
    {
        name: "Discovery World",
        area: "Lakefront",
        kind: "Science & Technology",
        duration: "2-4 hours",
        price: "$25",
        description: "Milwaukee's lakefront science museum brings interactive learning to life. From the Reiman Aquarium to a flight simulator to Les Paul's House of Sound, Discovery World engages visitors of all ages with hands-on exhibits about science, technology, and the Great Lakes.",
        hours: "Wednesday–Sunday 9 a.m.–4 p.m.; closed most Mondays and Tuesdays, plus Nov. 26 and Dec. 24–25. Also open Dec. 21–22, Dec. 28–29 and Jan. 18, 2027.",
        admission: "Adults $25; children 3–17 $21; seniors 60+ $21; military and college students with ID $19; ages 2 and under free. Winter break (Dec. 19–Jan. 3): adults $27; children and seniors $23; military and college $21.",
        deals: "$7 Access Admission per person, up to five people, for qualifying Wisconsin residents, in person only. Full-price tickets cost less when you buy online.",
        highlights: "Reiman Aquarium, Flight simulator, Les Paul's House of Sound, All Aboard model railroad",
        tip: "The Caribbean Tunnel and the Freshwater Touch Tank were under maintenance in early November 2026, so check before you promise the kids stingrays.",
        bestFor: "Families, curious kids, tech enthusiasts",
        address: "500 N. Harbor Dr., Milwaukee, WI 53202",
        website: "https://www.discoveryworld.org/",
      },
    {
        name: "Milwaukee Art Museum",
        area: "Lakefront",
        kind: "Art Museum",
        duration: "1.5-3 hours",
        price: "$27",
        description: "Santiago Calatrava's stunning Quadracci Pavilion alone is worth the visit. Weather permitting, the wings open with the museum at 10am, close and reopen at noon, and close for the night at 10pm. The collection spans centuries with particular strengths in American decorative arts, German Expressionism, and contemporary works.",
        hours: "Wednesday 10 a.m.–5 p.m.; Thursday 10 a.m.–8 p.m.; Friday–Sunday 10 a.m.–5 p.m.; closed Monday and Tuesday. Closed Thanksgiving Day, Christmas Day and New Year's Day; Christmas Eve until 3 p.m.",
        admission: "Adults $27; students, seniors 65+ and military $20; kids 12 and under free.",
        deals: "Pay-what-you-wish Thursdays 4–8 p.m. (not Thanksgiving, when the museum is closed, or Christmas Eve, when it closes at 3 p.m.). Bank of America cardholders free on the first full weekend of each month. Through Nov. 22, 2026: 25% off visits after 3 p.m.",
        highlights: "Calatrava architecture, Wings opening, Strong permanent collection",
        tip: "Time your visit to see the wings open or close.",
        bestFor: "Art lovers, architecture fans, photography",
        address: "700 N. Art Museum Dr., Milwaukee, WI 53202",
        website: "https://mam.org/",
      },
    {
        name: "Harley-Davidson Museum",
        area: "Menomonee Valley",
        kind: "Motorcycle Heritage",
        duration: "2-3 hours",
        price: "$24–$26",
        description: "Whether you ride or not, the Harley-Davidson Museum tells an incredible American story. More than 450 motorcycles and artifacts span the company's history, from Serial Number One, the oldest known Harley-Davidson, to custom bikes and board-track racers.",
        hours: "Daily 10 a.m.–5 p.m.; hours may vary on select holidays.",
        admission: "Adults $24 online, $26 at the door; seniors 65+, students and U.S. military $20 online, $22 at the door; children 5–17 $8 online, $10 at the door; under 5 free.",
        highlights: "Vintage motorcycles, Engine room, Custom builds, Milwaukee history",
        tip: "Non-riders are often surprised how much they enjoy it. Parking is free, and MOTOR Restaurant on the grounds is open 11 a.m.–5 p.m. Sunday–Wednesday and 11 a.m.–8 p.m. Thursday–Saturday.",
        bestFor: "History buffs, motorcycle enthusiasts, Americana fans",
        address: "400 W. Canal St., Milwaukee, WI 53203",
        website: "https://www.harley-davidson.com/us/en/museum.html",
      },
    {
        name: "Mitchell Park Domes",
        kind: "Conservatory",
        price: "$10",
        description: "Three glass conservatory domes: a Tropical Dome, a Desert Dome and a Show Dome that changes five times a year. The Show Dome is closed Nov. 9–20, 2026 for installation of the Holiday Show, which runs Nov. 21, 2026–Jan. 3, 2027; the other two domes stay open at full admission during the changeover.",
        hours: "Monday–Friday 9 a.m.–5 p.m. (last admission 4 p.m.); Saturday, Sunday and holidays 9 a.m.–4 p.m. (last admission 3 p.m.); Christmas Eve 9 a.m.–2 p.m.; closed Thanksgiving Day and Christmas Day.",
        admission: "Adults $10 ($9 for Milwaukee County residents); seniors 60+ $10 ($6.50 residents); juniors 3–12 $6.50; students, military and adults with disabilities $6.50; ages 2 and under free.",
        tip: "Tickets are sold at the door only, and parking is free.",
        bestFor: "Families, couples, anyone who wants to be warm",
        address: "524 S. Layton Blvd., Milwaukee, WI 53215",
        website: "https://milwaukeedomes.org/",
      },
    {
        name: "Grohmann Museum",
        area: "Downtown / MSOE",
        kind: "Art Museum",
        price: "$5",
        description: "Art museum on the MSOE campus holding the Man at Work collection: more than 2,000 paintings, sculptures and works on paper on the evolution of human work. The rooftop sculpture garden is closed for renovations through the winter.",
        hours: "Monday–Friday 9 a.m.–5 p.m.; Saturday noon–6 p.m.; Sunday 1–4 p.m. Closed Nov. 26, 2026.",
        admission: "General admission $5; students and seniors $3; children under 12 free. Special exhibitions included.",
        bestFor: "Adults, art and history fans, a low-cost stop",
        address: "1000 N. Broadway, Milwaukee, WI 53202",
        website: "https://www.msoe.edu/grohmann-museum/",
      },
    {
        name: "America's Black Holocaust Museum",
        area: "Bronzeville",
        kind: "History Museum",
        price: "$7",
        description: "A historical and memorial museum about the Black Holocaust in America: the four-hundred-year history of captured Africans and their descendants.",
        hours: "Tuesday–Thursday 10 a.m.–5 p.m.; Friday–Saturday 10 a.m.–3 p.m.; closed Sunday and Monday.",
        admission: "Adults 18 and up $7; children 3–17 $5; under 3 free.",
        bestFor: "Adults, teens, history-minded groups",
        address: "401 W. North Ave., Milwaukee, WI 53212",
        website: "https://www.abhmuseum.org/",
      },
    {
        name: "Pabst Mansion",
        kind: "Historic House Tours",
        description: "Tours of the Pabst family mansion. This season's holiday programming includes Christmas at the Pabst Mansion, Twilight Tours and a Holiday Mimosa Tour; dates are on the mansion's ticket page.",
        hours: "Sunday–Thursday 10 a.m.–4 p.m.; Friday–Saturday 10 a.m.–5 p.m. (subject to change).",
        tip: "Check in at the Visitor Center & Gift Shop in The Marq building next door.",
        bestFor: "Couples, history and architecture fans, holiday visitors",
        address: "2000 W. Wisconsin Ave., Milwaukee, WI 53233",
        website: "https://www.pabstmansion.com/",
      },
    ],
  },
  {
    id: "family",
    title: "Family Fun",
    blurb: "Places for kids to play, jump, skate and climb when they can't go outside.",
    items: [
        {
        name: "Betty Brinn Children's Museum",
        area: "Lakefront",
        kind: "Children's Museum",
        duration: "1.5-2.5 hours",
        price: "$14–$15",
        description: "Hands-on play for babies, toddlers and young children. Kids can run a kid-sized post office and grocery store in Home Town, build in the Be A Maker Space, and solve puzzles in the Northwoods exhibit.",
        hours: "Wednesday–Monday 9 a.m.–4:30 p.m.; closed Tuesdays, Thanksgiving, Christmas Eve, Christmas Day and New Year's Day.",
        admission: "Adults and children $14 online, $15 at the museum; seniors 60+ $13 online, $14 at the museum; under 1 free. Prices can be higher during busy periods such as winter break.",
        deals: "Free for everyone on the third Thursday of every month, 9 a.m.–7 p.m. (last entry 6:30 p.m.; no groups of 10 or more). Museums for All: $5 per person, up to four. Free for active military.",
        highlights: "Home Town, Be A Maker Space, Northwoods, Pocket Park for ages 4 and under",
        tip: "Socks are required for the climber.",
        bestFor: "Young children, toddlers, rainy day with kids",
        address: "929 E. Wisconsin Ave., Milwaukee, WI 53202",
        website: "https://bbcmkids.org/",
      },
    {
        name: "Sky Zone Waukesha",
        area: "Waukesha",
        kind: "Trampoline Park",
        duration: "1.5-2 hours",
        price: "From $31.99",
        description: "Burn off energy whatever the weather. Sky Zone has open-jump trampolines, a foam zone, dodgeball, a zip line and a warped wall. Great for kids who need to move.",
        hours: "Regular hours: Monday–Friday 4–8 p.m.; Saturday 10 a.m.–10 p.m.; Sunday 9 a.m.–8 p.m. Special hours posted so far: 10 a.m.–8 p.m. on Nov. 23, 24, 25, 27 and 30, 2026; closed Thanksgiving Day; members-only night Monday, Nov. 16. December holiday hours were not yet posted when we checked.",
        admission: "90-minute pass $31.99; 120-minute pass $33.99. SkySocks are required and sold in the park.",
        deals: "$12 Tuesday: a 90-minute walk-in jump for $12 when you mention the promo at the front desk; socks ($6.99) not included.",
        highlights: "Trampolines, Foam Zone, Dodgeball, Zip line",
        tip: "The Ninja Warrior Course was listed as closed when we checked. Children under 13 cannot be left without a parent or guardian.",
        bestFor: "Active kids, birthday parties, high-energy fun",
        address: "W229 N1420 Westwood Dr., Waukesha, WI 53186",
        website: "https://www.skyzone.com/milwaukee/",
      },
    {
        name: "Pettit National Ice Center",
        area: "Milwaukee",
        kind: "Indoor Ice Skating",
        duration: "1-2 hours",
        price: "$8–$10",
        description: "An Olympic-caliber ice facility open to the public. Public skating sessions on the 400-meter Olympic Oval run several days a week, including weekend afternoons. Skate rentals available.",
        hours: "Public skating times change week to week; check the Pettit's public skating page. The last admission is sold 45 minutes before a session ends.",
        admission: "Adults 18–61 $10; seniors 62+ $9; teens 13–17 $9; youth 4–12 $8; ages 3 and under free. Skate rental $5.",
        highlights: "Olympic ice, Public skating, Skate rentals",
        tip: "Check the schedule before you go, since public sessions vary. Dress warmly.",
        bestFor: "Families, skaters, unique experience",
        address: "500 S. 84th St., Milwaukee, WI 53214",
        website: "https://thepettit.com/",
      },
    {
        name: "Adventure Rock",
        area: "3 locations",
        kind: "Indoor Climbing",
        description: "Indoor climbing gyms at three locations, with Fundamentals of Climbing programs for first-timers and a 10-visit day pass.",
        tip: "Hours and day-pass prices are in the gym's booking portal, so check there before you go.",
        bestFor: "Active adults, teens, families with older kids",
        address: "2220 N. Commerce St., Milwaukee; 613 S. 2nd St., Milwaukee (Walker's Point); 21250 W. Capitol Dr., Brookfield",
        website: "https://adventurerock.com/",
      },
    ],
  },
  {
    id: "entertainment",
    title: "Movies, Games & Shows",
    blurb: "East Side classics, an arcade bar and live theater.",
    items: [
        {
        name: "The Oriental Theatre",
        area: "East Side",
        kind: "Historic Cinema",
        duration: "2-3 hours",
        description: "A movie palace unlike any other. The Oriental has screened films since 1927 in an ornate East Indian-inspired setting complete with Buddhas, porcelain lions, and exotic decor. Catch a film in one of America's most beautiful theaters.",
        hours: "Showtimes vary by film; see the What's Playing page on the theater's site.",
        highlights: "Historic architecture, Unique atmosphere, Quality programming",
        tip: "Arrive early to appreciate the architecture. The theater is cashless. December 2026 brings White Christmas (Dec. 11–17) and It's a Wonderful Life (Dec. 18–24).",
        bestFor: "Film lovers, architecture fans, unique date night",
        address: "2230 N. Farwell Ave., Milwaukee, WI 53202",
        website: "https://mkefilm.org/historic-theaters/the-oriental-theatre/",
      },
    {
        name: "Landmark Lanes",
        area: "East Side",
        kind: "Bowling & Bar Games",
        duration: "1-3 hours",
        price: "$6–$7 a game",
        description: "A Milwaukee institution since 1927, Landmark Lanes offers bowling in a classic setting right next to The Oriental Theatre. Multiple bars, pool tables, and late-night hours make it perfect for groups.",
        hours: "Bar and arcade: Monday–Friday 5 p.m.–2 a.m.; Saturday–Sunday noon–2 a.m. Bowling starts at 5 p.m. on weekdays and noon on weekends. 21+ after 9 p.m.",
        admission: "Bowling $6 per person per game Sunday–Thursday, $7 Friday–Saturday; shoe rental $3.",
        deals: "Happy Hour Bowling: $4 games Monday–Thursday 5–7 p.m. (shoes extra). Cosmic Bowling Fridays and Saturdays 8–11 p.m.",
        highlights: "Bowling, Pool tables, Multiple bars, Late hours",
        tip: "Next door to The Oriental Theatre, so you can combine a movie with bowling. Lanes are first come, first served, and it's 21+ after 9pm.",
        bestFor: "Groups, dates, casual entertainment, late night",
        address: "2220 N. Farwell Ave., Milwaukee, WI 53202",
        website: "https://www.landmarklanes.com/",
      },
    {
        name: "Up-Down Arcade Bar",
        area: "Brady Street",
        kind: "Arcade Bar",
        price: "25¢ games",
        description: "Arcade bar with more than 60 arcade games from the '80s and '90s, pinball and four skee-ball alleys, plus house-made pizza by the slice. Must be 21+ to enter, except during monthly Sunday family hours, 10 a.m.–2 p.m. (remaining 2026 dates: Nov. 8 and Dec. 6).",
        hours: "Monday–Thursday 3 p.m.–2 a.m.; Friday 3 p.m.–2:30 a.m.; Saturday 11 a.m.–2:30 a.m.; Sunday 11 a.m.–2 a.m.",
        admission: "All games cost 25 cents (tokens).",
        bestFor: "Adults 21+, groups, dates",
        address: "615 E. Brady St., Milwaukee, WI 53202",
        website: "https://updownarcadebar.com/milwaukee",
      },
    {
        name: "Milwaukee Repertory Theater",
        area: "Downtown",
        kind: "Live Theater",
        description: "Professional theater with a full winter schedule: Heist (Nov. 17–Dec. 20, 2026), A Christmas Carol at the Pabst Theater (Dec. 2–24), JP Coletta's Rock 'N' Roll Piano Man in the Stackner Cabaret (Nov. 6, 2026–Jan. 3, 2027), John Proctor Is the Villain (Jan. 12–Feb. 7, 2027), MKE MVP (Jan. 16–Feb. 28, 2027), Twelve Angry Men (Feb. 2–28, 2027) and The Cherry Tortured (Feb. 26–Mar. 28, 2027).",
        hours: "Performance times vary by show. Ticket office: 414-224-9490, Tuesday–Sunday noon to showtime; closed Mondays.",
        bestFor: "Couples, adults, groups",
        address: "Associated Bank Theater Center, 108 E. Wells St., Milwaukee, WI 53202",
        website: "https://www.milwaukeerep.com/",
      },
    ],
  },
  {
    id: "drinks",
    title: "Brewery Tours, Tastings & the Market",
    blurb: "Milwaukee's favorite way to wait out the weather.",
    items: [
        {
        name: "Lakefront Brewery",
        area: "On the Milwaukee River",
        kind: "Brewery Tour",
        duration: "1-2 hours",
        price: "Tours $13–$16",
        description: "The most entertaining brewery tour in Milwaukee. Lakefront combines excellent beer with genuinely funny guides, live polka on Friday nights, and a fish fry that draws crowds. The tour includes samples.",
        hours: "Tours, with times that vary by season: Monday–Thursday 5 and 6:30 p.m.; Friday from noon to 7 p.m. at set times; Saturday noon to 6 p.m., roughly every half hour; Sunday noon and 2 p.m.",
        admission: "Tour $13 Monday–Thursday, $16 Friday–Sunday; children under 13 free. Includes four 8-oz pours and a souvenir pint glass. 21+ unless with a parent or legal guardian.",
        highlights: "Entertaining tour, Friday fish fry, Polka nights",
        tip: "Friday night tour plus fish fry is the classic Milwaukee experience: the fish fry starts at 4 p.m., with live polka from 5 to 8 p.m. Book ahead.",
        bestFor: "Beer lovers, entertainment, groups",
        address: "1872 N. Commerce St., Milwaukee, WI 53212",
        website: "https://lakefrontbrewery.com/",
      },
    {
        name: "Third Space Brewing",
        area: "Menomonee Valley",
        kind: "Brewery Taproom",
        duration: "1-3 hours",
        price: "No cover",
        description: "A beautiful taproom with excellent beer and a welcoming atmosphere. No tour required: just settle in with a pint. If you do want one, tours run Saturdays at 2:00 and 3:15pm.",
        hours: "Tap room: Monday–Thursday 4–9 p.m.; Friday 2–10 p.m.; Saturday noon–10 p.m.; Sunday noon–6 p.m.",
        admission: "No admission. Saturday tours last about 40 minutes and include a pint glass and two pours.",
        deals: "Happy Fridays: $3 pints of Happy Place, Fridays 5–6 p.m.",
        highlights: "Quality beer, Great taproom, Saturday tours",
        tip: "Tuesday is trivia night at 6:30pm.",
        bestFor: "Casual afternoon, beer exploration, hanging out",
        address: "1505 W. St. Paul Ave., Milwaukee, WI 53233",
        website: "https://thirdspacebrewing.com/",
      },
    {
        name: "Best Place at the Historic Pabst Brewery",
        area: "Brewery District",
        kind: "Beer History Tour",
        price: "Tours $14",
        description: "Guided 60-minute Beer History Tour of the former Pabst brewery, with one pint of beer or soda included. A Brewery District walking tour with three beers runs Fridays and Saturdays at 1 and 3 p.m.",
        hours: "Beer History Tour: Monday, Thursday, Friday and Sunday at noon, 2 and 4 p.m.; Tuesday at 11 a.m. and 1 p.m.; Saturday at 11 a.m., noon, 2 and 4 p.m.",
        admission: "Beer History Tour: adults $14; seniors 60+, military and students $12; kids under 13 free. Walking tour: adults $25; seniors, military and students $23.",
        tip: "Tours can be cancelled for special events, so book on the site before you go.",
        bestFor: "Adults, groups, beer history fans",
        address: "917 W. Juneau Ave., Milwaukee, WI 53233",
        website: "https://bestplacemilwaukee.com/",
      },
    {
        name: "Great Lakes Distillery",
        area: "Walker's Point",
        kind: "Distillery & Tasting Room",
        description: "Distillery with a tasting room serving cocktails, beer and wine. Tours and a bottle-your-own experience are booked online.",
        hours: "Tasting room: Monday–Thursday noon–9 p.m.; Friday noon–midnight; Saturday 11 a.m.–midnight; Sunday 11 a.m.–7 p.m.",
        tip: "Tour times and prices are shown in the distillery's online booking system.",
        bestFor: "Adults 21+, couples, groups",
        address: "616 W. Virginia St., Milwaukee, WI 53204",
        website: "https://www.greatlakesdistillery.com/",
      },
    {
        name: "Milwaukee Public Market",
        area: "Third Ward",
        kind: "Indoor Market",
        description: "Indoor market with 19 independently owned merchants, plus hands-on and demonstration cooking classes listed on its site.",
        hours: "Monday–Saturday 10 a.m.–8 p.m.; Sunday 10 a.m.–6 p.m.",
        bestFor: "Groups, couples, lunch between museums",
        address: "400 N. Water St., Milwaukee, WI 53202",
        website: "https://milwaukeepublicmarket.org/",
      },
    ],
  },
];

const DEALS = [
  {
    name: "Betty Brinn Children's Museum",
    deal: "free for everyone on the third Thursday of every month, 9 a.m.–7 p.m.",
  },
  {
    name: "Milwaukee Public Museum",
    deal: "final Kohl's Thank You Thursday free day on Dec. 3, 2026, 10 a.m.–5 p.m. Reserve free tickets starting one week ahead.",
  },
  {
    name: "Milwaukee Art Museum",
    deal: "pay-what-you-wish Thursdays 4–8 p.m., except Thanksgiving and Christmas Eve. Kids 12 and under are always free.",
  },
  {
    name: "Grohmann Museum",
    deal: "$5 general admission; children under 12 free.",
  },
  {
    name: "America's Black Holocaust Museum",
    deal: "$7 adults; $5 ages 3–17.",
  },
  {
    name: "Mitchell Park Domes",
    deal: "$10 adults, $9 for Milwaukee County residents, with free parking.",
  },
  {
    name: "Discovery World",
    deal: "$7 Access Admission per person, up to five people, for qualifying Wisconsin residents, in person only.",
  },
  {
    name: "Landmark Lanes",
    deal: "$4 bowling games Monday–Thursday 5–7 p.m.",
  },
  {
    name: "Sky Zone Waukesha",
    deal: "$12 Tuesday: a 90-minute walk-in jump for $12 when you mention the promo.",
  },
  {
    name: "Third Space Brewing",
    deal: "no admission charge, and $3 pints of Happy Place on Fridays 5–6 p.m.",
  },
];

const faqs = [
  {
    question: "What are the best indoor things to do in Milwaukee in winter?",
    answer: "The Milwaukee Art Museum, Discovery World, and the Milwaukee Public Museum (through January 3, 2027, its last day on Wells Street) offer hours of indoor entertainment. For somewhere warm, the Mitchell Park Domes keep a Tropical Dome and a Desert Dome open all winter. For active fun, try Sky Zone in Waukesha or bowling at Landmark Lanes. Brewery tours at Lakefront Brewery or Best Place at the Historic Pabst Brewery add some Milwaukee history.",
  },
  {
    question: "What should I do on a rainy day with kids in Milwaukee?",
    answer: "The Betty Brinn Children's Museum is built for young children. Discovery World works for all ages. Sky Zone burns energy when they can't go outside. The Milwaukee Public Museum is a classic choice with its dinosaur diorama and the Streets of Old Milwaukee, but only through January 3, 2027, its last day on Wells Street.",
  },
  {
    question: "How much do Milwaukee museums cost?",
    answer: "Adult admission is $14 online at Betty Brinn Children's Museum, $24 online at the Harley-Davidson Museum, $25 at the Milwaukee Public Museum and at Discovery World ($27 at Discovery World Dec. 19–Jan. 3), and $27 at the Milwaukee Art Museum. The Grohmann Museum is $5, America's Black Holocaust Museum is $7 and the Mitchell Park Domes are $10. The Milwaukee Art Museum is pay-what-you-wish on Thursdays from 4 to 8pm (except Thanksgiving and Christmas Eve), and kids 12 and under are always free.",
  },
  {
    question: "What is free to do indoors in Milwaukee?",
    answer: "Betty Brinn Children's Museum is free for everyone on the third Thursday of every month from 9am to 7pm. The Milwaukee Public Museum's final Kohl's Thank You Thursday free day is December 3, 2026. Kids 12 and under are always free at the Milwaukee Art Museum, and Third Space Brewing's tap room has no admission charge.",
  },
  {
    question: "Which Milwaukee museums are open on Mondays?",
    answer: "The Harley-Davidson Museum, the Mitchell Park Domes and the Pabst Mansion are open daily. The Milwaukee Public Museum, Betty Brinn Children's Museum and the Grohmann Museum are open Mondays. The Milwaukee Art Museum and America's Black Holocaust Museum are closed Mondays, and Discovery World is closed most Mondays in fall and winter.",
  },
  {
    question: "What's a unique indoor date in Milwaukee?",
    answer: "The Oriental Theatre offers films in a stunning historic setting. Bryant's Cocktail Lounge provides intimate ambiance for drinks. The Harley-Davidson Museum appeals to non-riders too. Combine a movie at The Oriental with bowling at Landmark Lanes next door, or play 25-cent arcade games at Up-Down on Brady Street.",
  },
  {
    question: "Can I do a brewery tour in winter?",
    answer: "Yes. Lakefront Brewery runs tours every day of the week, at $13 Monday through Thursday and $16 Friday through Sunday. Best Place at the Historic Pabst Brewery runs its 60-minute Beer History Tour six days a week for $14. Third Space Brewing gives tours on Saturdays at 2:00 and 3:15pm.",
  },
];

const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const ALL = SECTIONS.flatMap((s) => s.items);

export default function RainyDayMilwaukee() {
  const url = `${SITE}${PATH}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: META.headline,
    description: META.description,
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: { "@type": "Organization", name: "Discover Milwaukee", logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` } },
    datePublished: META.datePublished,
    dateModified: META.dateModified,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Explore", item: `${SITE}/explore` },
      { "@type": "ListItem", position: 3, name: META.crumb, item: url },
    ],
  };
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: META.headline,
    numberOfItems: ALL.length,
    itemListElement: ALL.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristAttraction",
        name: a.name,
        description: a.description,
        ...(a.address ? { address: a.address } : {}),
        ...(a.website ? { url: a.website } : {}),
      },
    })),
  };

  const label = { color: c.green1, fontWeight: 700 };
  const body = { color: "#444" };

  const Card = ({ a }) => (
    <article id={slug(a.name)} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", scrollMarginTop: "90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "10px" }}>
        <h3 style={{ fontSize: "1.4rem", color: c.green1, margin: 0, lineHeight: 1.25 }}>{a.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {a.area && <span style={{ backgroundColor: c.beige, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1 }}>{a.area}</span>}
          {a.price && <span style={{ backgroundColor: c.orange, padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", color: c.green1, fontWeight: 600 }}>{a.price}</span>}
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", color: c.green2, margin: "0 0 10px", fontStyle: "italic" }}>
        {[a.kind, a.ages, a.duration].filter(Boolean).join(" | ")}
      </p>
      {a.status && (
        <p style={{ backgroundColor: c.yellow, color: c.green1, fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.5, padding: "10px 14px", borderRadius: "8px", margin: "0 0 14px" }}>{a.status}</p>
      )}
      <p style={{ ...body, lineHeight: 1.7, margin: "0 0 16px" }}>{a.description}</p>
      {(a.hours || a.admission || a.deals) && (
        <dl style={{ display: "grid", gridTemplateColumns: "minmax(88px, auto) 1fr", gap: "8px 14px", fontSize: "0.92rem", lineHeight: 1.55, margin: "0 0 16px" }}>
          {a.hours && <><dt style={label}>Hours</dt><dd style={{ ...body, margin: 0 }}>{a.hours}</dd></>}
          {a.admission && <><dt style={label}>Cost</dt><dd style={{ ...body, margin: 0 }}>{a.admission}</dd></>}
          {a.deals && <><dt style={label}>Deals</dt><dd style={{ ...body, margin: 0 }}>{a.deals}</dd></>}
        </dl>
      )}
      {(a.highlights || a.bestFor) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.9rem", lineHeight: 1.55 }}>
          {a.highlights && <div><strong style={label}>Highlights:</strong> <span style={body}>{a.highlights}</span></div>}
          {a.bestFor && <div><strong style={label}>Best for:</strong> <span style={body}>{a.bestFor}</span></div>}
        </div>
      )}
      {a.tip && (
        <div style={{ marginTop: "12px", padding: "12px", backgroundColor: c.cream, borderRadius: "8px", borderLeft: `3px solid ${c.orangeDark}`, fontSize: "0.92rem", lineHeight: 1.55 }}>
          <strong style={label}>Good to know:</strong> <span style={body}>{a.tip}</span>
        </div>
      )}
      <p style={{ fontSize: "0.85rem", color: "#666", margin: "12px 0 0", lineHeight: 1.6 }}>
        {a.address}
        {a.address && a.website && <span aria-hidden="true"> · </span>}
        {a.website && (
          <a href={a.website} target="_blank" rel="noopener noreferrer" aria-label={`${a.name} website (opens in a new tab)`} style={{ color: c.green2, fontWeight: 600, textDecoration: "underline" }}>
            Website <span aria-hidden="true">↗</span>
          </a>
        )}
      </p>
    </article>
  );

  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={META.ogTitle} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" key="og:type" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      </Head>

      <Nav />
      <Breadcrumbs />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <main id="main-content" tabIndex={-1}>
          <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "56px 20px", textAlign: "center" }}>
            <div style={{ maxWidth: "820px", margin: "0 auto" }}>
              <p style={{ color: c.orangeLight, fontSize: "14px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 12px" }}>{META.kicker}</p>
              <h1 style={{ color: c.cream, fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.2, margin: "0 0 16px" }}>{META.h1}</h1>
              <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>{META.deck}</p>
            </div>
          </header>

          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 20px 40px" }}>
            <nav aria-label="On this page" style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 20px", marginBottom: "28px" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: c.green1, margin: "0 0 10px" }}>On this page</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: "15px" }}>
                {SECTIONS.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} style={{ color: c.green2, fontWeight: 600, textDecoration: "underline" }}>{s.title}</a></li>
                ))}
                {DEALS.length > 0 && <li><a href="#deals" style={{ color: c.green2, fontWeight: 600, textDecoration: "underline" }}>{META.dealsTitle}</a></li>}
                <li><a href="#faq" style={{ color: c.green2, fontWeight: 600, textDecoration: "underline" }}>FAQ</a></li>
              </ul>
            </nav>

            <section aria-labelledby="key-facts-heading" style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "22px 24px", marginBottom: "28px" }}>
              <h2 id="key-facts-heading" style={{ color: c.orangeDark, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
              <dl style={{ display: "grid", gridTemplateColumns: "minmax(120px, auto) 1fr", gap: "10px 18px", fontSize: "15px", lineHeight: 1.55, margin: 0 }}>
                {META.keyFacts.map(([k, v]) => (
                  <div key={k} style={{ display: "contents" }}>
                    <dt style={label}>{k}</dt>
                    <dd style={{ ...body, margin: 0 }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <p style={{ fontSize: "12px", color: "#666", margin: "14px 0 0", lineHeight: 1.5 }}>
                Verified <time dateTime={META.dateModified}>{META.verifiedLabel}</time> against official sources, in most cases the venue&apos;s own website. Hours and prices change, so check the venue&apos;s site before you go.
              </p>
            </section>

            {META.intro.map((p, i) => (
              <p key={i} style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.8, margin: "0 0 16px" }}>{p}</p>
            ))}

            <NewsletterCTA />

            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} style={{ marginBottom: "44px", scrollMarginTop: "90px" }}>
                <h2 id={`${s.id}-heading`} style={{ fontSize: "1.8rem", color: c.green1, margin: "0 0 8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>{s.title}</h2>
                <p style={{ color: "#555", lineHeight: 1.6, margin: "0 0 22px" }}>{s.blurb}</p>
                {s.items.map((a) => <Card key={a.name} a={a} />)}
              </section>
            ))}

            {DEALS.length > 0 && (
              <section id="deals" aria-labelledby="deals-heading" style={{ marginBottom: "44px", scrollMarginTop: "90px" }}>
                <h2 id="deals-heading" style={{ fontSize: "1.8rem", color: c.green1, margin: "0 0 8px", paddingBottom: "12px", borderBottom: `2px solid ${c.orange}` }}>{META.dealsTitle}</h2>
                <p style={{ color: "#555", lineHeight: 1.6, margin: "0 0 18px" }}>{META.dealsBlurb}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "10px" }}>
                  {DEALS.map((d) => (
                    <li key={d.name} style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "14px 18px", borderLeft: `4px solid ${c.green1}`, lineHeight: 1.55 }}>
                      <a href={`#${slug(d.name)}`} style={{ color: c.green1, fontWeight: 700, textDecoration: "underline" }}>{d.name}</a>
                      <span style={body}>: {d.deal}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section id="faq" aria-labelledby="faq-heading" style={{ marginBottom: "44px", scrollMarginTop: "90px" }}>
              <h2 id="faq-heading" style={{ fontSize: "1.6rem", color: c.green1, margin: "0 0 22px" }}>Frequently Asked Questions</h2>
              {faqs.map((f) => (
                <div key={f.question} style={{ marginBottom: "16px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
                  <h3 style={{ color: c.green1, margin: "0 0 8px", fontSize: "1.1rem", lineHeight: 1.35 }}>{f.question}</h3>
                  <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>{f.answer}</p>
                </div>
              ))}
            </section>

            <section aria-labelledby="more-guides-heading" style={{ backgroundColor: c.green1, borderRadius: "12px", padding: "32px", textAlign: "center", marginBottom: "16px" }}>
              <h2 id="more-guides-heading" style={{ color: "#fff", margin: "0 0 12px" }}>More Milwaukee Guides</h2>
              <p style={{ color: c.beige, margin: "0 0 20px" }}>{META.moreBlurb}</p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                {META.more.map(([href, text]) => (
                  <Link key={href} href={href} style={{ backgroundColor: c.orange, color: c.green1, padding: "12px 24px", borderRadius: "25px", textDecoration: "none", fontWeight: 600 }}>{text}</Link>
                ))}
              </div>
            </section>
          </div>
        </main>

        <RelatedGuides />
        <Footer />
      </div>
    </>
  );
}
