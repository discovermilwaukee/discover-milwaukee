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
const PATH = "/things-to-do-with-kids-milwaukee";

// ---------------------------------------------------------------------------
// DATA. Every hour, price, date and address below was read on the venue's own
// website in November 2026 and confirmed by a second, independent check.
// A field is left out when the venue does not publish it. Do not fill gaps
// from memory: re-check the official site (the `website` on each listing).
// ---------------------------------------------------------------------------
const META = {
  title: "Things to Do with Kids in Milwaukee: Winter 2026-27 Family Guide",
  headline: "Things to Do with Kids in Milwaukee: Winter 2026-27 Family Guide",
  ogTitle: "Things to Do with Kids in Milwaukee: Winter 2026-27",
  description: "23 things to do with kids in Milwaukee this winter: museums, indoor play, sledding, snow tubing and holiday lights, with verified hours, prices and free days.",
  h1: "Things to Do with Kids in Milwaukee This Winter",
  kicker: "Winter 2026-27 · Verified November 2026",
  deck: "Museums, indoor play, sledding, snow tubing and holiday lights, with hours, prices and free days checked against each venue.",
  crumb: "Things to Do with Kids",
  datePublished: "2026-05-01",
  dateModified: "2026-11-05",
  verifiedLabel: "November 5, 2026",
  keyFacts: [["Top picks", "The Milwaukee County Zoo, Discovery World (science museum and aquarium on the lakefront), the Milwaukee Public Museum (dinosaurs and Streets of Old Milwaukee, open at 800 W. Wells St. through January 3, 2027), and the Betty Brinn Children's Museum for younger kids"], ["Covers", "23 winter picks, plus 4 summer spots to save for later"], ["Always free for kids", "The Milwaukee Art Museum is free for kids 12 and under"], ["Free outdoors", "Lakeshore State Park, where hiking and snowshoeing are allowed and the east trail is plowed. When there is snow, Milwaukee County Parks also lists 12 sled hills, with no fee listed"], ["Free days", "Zoo: November 7 and December 5, plus December 26–30. Betty Brinn: third Thursday of every month. Public Museum: December 3"], ["Rainy or snowy day", "Sky Zone, JB's on 41, and the Pettit National Ice Center"]],
  intro: ["Winter in Milwaukee is long, and kids still need somewhere to go. This guide covers 23 places that work from November through February: warm museums, places to burn off energy, parks and hills for snowy days, and the holiday lights that make the early dark worth it.", "Every hour, price and date here was checked against official sources in November 2026. One to plan around: the Milwaukee Public Museum closes its Wells Street building for good after January 3, 2027."],
  dealsTitle: "Free Days and Family Deals",
  dealsBlurb: "Ways to do this list for less.",
  moreBlurb: "Keep planning your family's winter in Milwaukee.",
  more: [["/rainy-day-milwaukee", "Indoor & Rainy Day Guide"], ["/winter-guide-milwaukee", "Winter Guide"], ["/christmas-milwaukee", "Christmas in Milwaukee"], ["/milwaukee-county-zoo", "Milwaukee County Zoo"], ["/milwaukee-public-museum", "Public Museum's Final Season"], ["/ice-skating-milwaukee", "Ice Skating"], ["/this-weekend-milwaukee", "This Weekend"]],
};

const SECTIONS = [
  {
    id: "indoor",
    title: "Indoor Favorites",
    blurb: "Museums, a conservatory and a free library room that work on the coldest day of the year.",
    items: [
        {
        name: "Milwaukee Public Museum",
        area: "Downtown",
        kind: "Natural History Museum",
        ages: "All ages",
        price: "$19–$25",
        status: "Last day at 800 W. Wells St.: Sunday, January 3, 2027.",
        description: "A beloved institution featuring the dramatic T-Rex encounter, the immersive Streets of Old Milwaukee, an indoor butterfly vivarium and a planetarium. This is its last winter on Wells Street: the museum's final day at 800 W. Wells St. is Sunday, January 3, 2027, before it moves to its new home, the Nature & Culture Museum of Wisconsin. An opening date for the new museum has not been set.",
        hours: "Wednesday–Monday 10 a.m.–5 p.m.; closed Tuesdays, Thanksgiving Day and Christmas Day; Christmas Eve until 3 p.m.",
        admission: "Adults $25; teens 14–17 $24; seniors 65+ $21; youth 4–13 $19; military and college $21; ages 3 and under free. Includes one Planetarium program. Milwaukee County residents get $2 off.",
        deals: "The final Kohl's Thank You Thursday free day is Dec. 3, 2026, 10 a.m.–5 p.m., with free access to the permanent exhibits. Reservations open seven days ahead and walk-up tickets are not guaranteed.",
        highlights: "Third Planet Dinosaur Exhibits, Butterfly Vivarium, Streets of Old Milwaukee, Daniel M. Soref Planetarium, Planetarium Palooza (through January 3, 2027)",
        tip: "Through January 3, 2027, Planetarium Palooza rotates the 20 greatest shows from the past 20 years, and one Planetarium program is included with admission.",
        bestFor: "Dinosaur enthusiasts, history lovers, science explorers",
        address: "800 W. Wells St., Milwaukee, WI 53233",
        website: "https://www.mpm.edu/",
      },
    {
        name: "Discovery World",
        area: "Lakefront",
        kind: "Science Museum & Aquarium",
        ages: "All ages",
        price: "$21–$25",
        description: "Perched on the shores of Lake Michigan, Discovery World combines a science and technology museum with the Reiman Aquarium. Kids can explore the aquarium, build in the Kohl's Design It! Lab, and learn about the Great Lakes through hands-on exhibits. The stingray and sturgeon Touch Tank was under maintenance in early November 2026.",
        hours: "Wednesday–Sunday 9 a.m.–4 p.m.; closed most Mondays and Tuesdays, plus Nov. 26 and Dec. 24–25. Also open Dec. 21–22, Dec. 28–29 and Jan. 18, 2027.",
        admission: "Adults $25; children 3–17 $21; seniors 60+ $21; military and college students with ID $19; ages 2 and under free. Winter break (Dec. 19–Jan. 3): adults $27; children and seniors $23; military and college $21. Prices can be higher on busy days, and there is a discount for buying online.",
        deals: "$7 Access Admission per person, up to five people, for Wisconsin residents in qualifying programs, in person only.",
        highlights: "Reiman Aquarium, Lake Michigan Tank, Caribbean Tank, Kohl's Design It! Lab, Great Lakes Exhibits",
        tip: "The Touch Tank, where kids can pet stingrays and sturgeon, was under maintenance in early November 2026, so check that it has reopened before you go. All children must be with a chaperone age 16 or older. Underground garage parking runs $10 for one hour up to $22 for five or more.",
        bestFor: "Curious minds, science enthusiasts, hands-on learners",
        address: "500 N. Harbor Dr., Milwaukee, WI 53202",
        website: "https://www.discoveryworld.org/",
      },
    {
        name: "Betty Brinn Children's Museum",
        area: "Lakefront",
        kind: "Children's Museum",
        ages: "Young children (under 1 free)",
        price: "$14–$15",
        description: "Hands-on play for babies, toddlers and young children. Kids can run a kid-sized post office and grocery store in Home Town, build in the Be A Maker Space, and solve puzzles in the Northwoods exhibit. The museum is in Museum Center Park, on the second level of the Miller Pavilion.",
        hours: "Wednesday–Monday 9 a.m.–4:30 p.m.; closed Tuesdays, Thanksgiving, Christmas Eve, Christmas Day and New Year's Day.",
        admission: "Adults and children $14 online, $15 at the museum; seniors 60+ $13 online, $14 at the museum; under 1 free. Prices can be higher during busy periods such as winter break.",
        deals: "Free for everyone on the third Thursday of every month, 9 a.m.–7 p.m. (Nov. 19 and Dec. 17, 2026; last entry 6:30 p.m.; no groups of 10 or more). Museums for All: $5 per person, up to four. Free for active military.",
        highlights: "Home Town, Be A Maker Space, Northwoods, Pocket Park for ages 4 and under",
        tip: "Parking is validated only in the Museum Center Park garage below the building.",
        bestFor: "Toddlers, preschoolers, early learners",
        address: "929 E. Wisconsin Ave., Milwaukee, WI 53202",
        website: "https://bbcmkids.org/",
      },
    {
        name: "Milwaukee Art Museum",
        area: "Lakefront",
        kind: "Art Museum",
        ages: "All ages (kids 12 and under free)",
        price: "Kids free",
        description: "The iconic Quadracci Pavilion with its moveable Burke Brise Soleil wings is a Milwaukee landmark. Thanks to an anonymous donor, kids 12 and under always receive free admission. Play Date with Art for ages 5 and under and Story Time in the Galleries every Saturday at 10:30 a.m. are included with admission.",
        hours: "Wednesday 10 a.m.–5 p.m.; Thursday 10 a.m.–8 p.m.; Friday–Sunday 10 a.m.–5 p.m.; closed Monday and Tuesday. Closed Thanksgiving Day, Christmas Day and New Year's Day; Christmas Eve until 3 p.m.",
        admission: "Adults $27; students, seniors 65+ and military $20; kids 12 and under free.",
        deals: "Pay-what-you-wish Thursdays 4–8 p.m. (not Thanksgiving, when the museum is closed, or Christmas Eve, when it closes at 3 p.m.). Bank of America cardholders free on the first full weekend of each month.",
        highlights: "Story Time in the Galleries (Saturdays 10:30 a.m.), Art Studio (Saturday–Sunday 10 a.m.–4 p.m.), Play Date with Art (Nov. 20 and Dec. 19, 2026; Jan. 2 and Jan. 22, 2027), Drop-in art making (weekends, plus daily Dec. 26–31, 2026), ArtPacks for Kids",
        tip: "Weather permitting, the wings open with the museum at 10am, close and reopen at noon, and close for the night at 10pm. Use the Kids Map to find the ArtPack station, where kids can borrow free activities.",
        bestFor: "Art appreciation, architectural wonder, creative families",
        address: "700 N. Art Museum Dr., Milwaukee, WI 53202",
        website: "https://mam.org/",
      },
    {
        name: "Mitchell Park Domes",
        kind: "Conservatory",
        price: "$6.50–$10",
        description: "Three glass domes: the Desert Dome, the Tropical Dome and a Show Dome that changes floral shows five times a year. The Show Dome is closed Nov. 9–20, 2026 for installation of the Holiday Show, which runs Nov. 21, 2026–Jan. 3, 2027. The Desert and Tropical domes stay open at full admission during the changeover.",
        hours: "Monday–Friday 9 a.m.–5 p.m. (last admission 4 p.m.); Saturday, Sunday and holidays 9 a.m.–4 p.m. (last admission 3 p.m.); Christmas Eve 9 a.m.–2 p.m.; closed Thanksgiving Day and Christmas Day.",
        admission: "Adults $10 ($9 for Milwaukee County residents); seniors 60+ $10 ($6.50 residents); juniors 3–12 $6.50; students and military $6.50; ages 2 and under free.",
        tip: "Tickets are sold at the door only, and parking is free. The 27th Street Viaduct is closed long-term; the Domes' site gives a detour via 35th Street.",
        bestFor: "A warm walk through desert and tropical plants on a cold day",
        address: "524 S. Layton Blvd., Milwaukee, WI 53215",
        website: "https://milwaukeedomes.org/",
      },
    {
        name: "Central Library: Betty Brinn Children's Room",
        area: "Downtown",
        kind: "Public Library",
        price: "Free",
        description: "A separate children's space entered from the center of Milwaukee Public Library's Central Library, with picture-book and special collections, a listening and learning area with a puppet stage, an activity center and computers. The library says its programs are free and open to everyone.",
        hours: "Central Library: Monday–Tuesday 10 a.m.–7 p.m.; Wednesday–Friday 10 a.m.–6 p.m.; Saturday 9 a.m.–5 p.m.; Sunday 10 a.m.–5 p.m. All library locations are closed Nov. 26–27, 2026.",
        admission: "Free.",
        tip: "Story time days and times are posted in the library's events calendar.",
        bestFor: "A free, warm stop downtown",
        address: "814 W. Wisconsin Ave., Milwaukee, WI 53233",
        website: "https://www.mpl.org/hours_locations/betty_brinn.php",
      },
    ],
  },
  {
    id: "active",
    title: "Burn Off Energy Indoors",
    blurb: "Trampolines, ice, bowling, laser tag and a water park for kids who need to move.",
    items: [
        {
        name: "Sky Zone Trampoline Park",
        area: "Waukesha",
        kind: "Trampoline Park",
        ages: "All ages (Little Leapers: 7 and under)",
        price: "From $31.99",
        description: "Bounce, flip, and play at Sky Zone's indoor trampoline park featuring wall-to-wall trampolines, foam pits, SkySlam basketball, and Ultimate Dodgeball. The Little Leapers program, Sundays 9–10am at the Waukesha park, provides a dedicated time for ages 7 and under.",
        hours: "Regular hours: Monday–Friday 4–8 p.m.; Saturday 10 a.m.–10 p.m.; Sunday 9 a.m.–8 p.m. Special hours posted so far: 10 a.m.–8 p.m. on Nov. 23, 24, 25, 27 and 30, 2026; closed Thanksgiving Day.",
        admission: "90-minute pass $31.99; 120-minute pass $33.99. Sky Zone socks are required and cost $6.99.",
        deals: "$12 Tuesday: a 90-minute walk-in jump for $12; socks not included.",
        highlights: "Wall-to-Wall Trampolines, SkySlam Basketball, Foam Zone, Ultimate Dodgeball, Little Leapers (Ages 7 & Under)",
        tip: "The Ninja Warrior Course was listed as closed when we checked.",
        bestFor: "Active kids, energy burning, birthday parties",
        address: "W229 N1420 Westwood Dr., Waukesha, WI 53186",
        website: "https://www.skyzone.com/milwaukee/",
      },
    {
        name: "Pettit National Ice Center",
        area: "Milwaukee",
        kind: "Indoor Ice Skating",
        ages: "All ages (3 and under free)",
        price: "$8–$10",
        description: "Skate where Olympic athletes train in this world-class facility that welcomes families of all skill levels. Public skating sessions run on the 400-meter Olympic Oval, and skate rentals are available.",
        hours: "Public skating sessions vary by day; check the Pettit's calendar. The last admission is sold 45 minutes before a session ends.",
        admission: "Adults 18–61 $10; seniors 62+ $9; teens 13–17 $9; youth 4–12 $8; ages 3 and under free. Skate rental $5.",
        highlights: "400-Meter Olympic Oval, Two International Rinks, Skate Rentals Available, Learn to Skate Programs",
        tip: "Skate helpers are $5, subject to availability, for novice and beginner skaters only. Dress warmly.",
        bestFor: "Ice skating enthusiasts, Olympic experience, birthday parties",
        address: "500 S. 84th St., Milwaukee, WI 53214",
        website: "https://thepettit.com/",
      },
    {
        name: "JB's on 41",
        area: "Milwaukee",
        kind: "Bowling & Arcade",
        price: "From $12.99",
        description: "JB's on 41 has 35 bowling lanes, an arcade, billiards and a sports bar with a food and drink menu.",
        hours: "Monday–Thursday 4–11 p.m.; Friday 4 p.m.–1 a.m.; Saturday 11 a.m.–1 a.m.; Sunday 11 a.m.–11 p.m. Special hours: Wednesday, Nov. 25, 11 a.m.–midnight; Friday, Nov. 27, 11 a.m.–1 a.m.",
        admission: "Family Unlimited (Saturday–Sunday 11 a.m.–3 p.m.) $12.99 per person, unlimited bowling with shoes. Night Strike (Sunday from 6 p.m., Monday–Thursday from 7 p.m.) $17.99, unlimited bowling with shoes. After Party (Friday–Saturday from 8 p.m.) $23.99, unlimited bowling, shoe rental not included. All walk-in only.",
        deals: "Half-price arcade play every Wednesday. Daily: buy two games, get the third 50% off, walk-in only.",
        highlights: "35 Bowling Lanes, Modern & Classic Arcade Games, Billiards, Party Packages",
        tip: "It opens at 4 p.m. on weekdays, so save it for after school or the weekend.",
        bestFor: "Family bowling, arcade lovers, all-weather fun",
        address: "4040 S. 27th St., Milwaukee, WI 53221",
        website: "https://www.bowlero.com/location/jbs-41",
      },
    {
        name: "WhirlyBall Brookfield",
        area: "Brookfield",
        kind: "Multi-Activity Center",
        ages: "WhirlyBall: 54 inches and taller; LaserTag: ages 7+",
        description: "An entertainment center combining WhirlyBall, LaserTag, bowling, HyperBowling and pop-up games, with The Pivot Room restaurant on site. Private event spaces make it a fit for groups.",
        hours: "Monday–Thursday 2–10 p.m.; Friday noon–11 p.m.; Saturday 10 a.m.–11 p.m.; Sunday 10 a.m.–9 p.m.",
        highlights: "WhirlyBall Courts, LaserTag, Bowling & HyperBowling, Pop-Up Games",
        tip: "There is no age limit for WhirlyBall, but players must be at least 54 inches tall. LaserTag players must be at least 7 years old. Walk-ins are accepted, and reservations are strongly encouraged.",
        bestFor: "Older kids, group outings, unique activities",
        address: "185 S. Moorland Rd., Brookfield, WI 53005",
        website: "https://www.whirlyball.com/brookfield",
      },
    {
        name: "Air City 360",
        area: "New Berlin",
        kind: "Indoor Adventure Park",
        description: "An indoor adventure park with an aerial ninja course, trampolines, rock walls, laser tag, extreme dodgeball, a toddler park and an arcade.",
        hours: "Monday, Wednesday and Thursday 3–8 p.m.; Friday 11 a.m.–10 p.m.; Saturday 10 a.m.–10 p.m.; Sunday 11 a.m.–8 p.m.; closed Tuesdays.",
        highlights: "Ninja Obstacle Courses, Trampolines & Extreme Dodgeball, Laser Tag Arena, Rock Walls, Toddler 180 Park, Arcade",
        tip: "Only Air City 360 grip socks are allowed on the attractions, every participant needs a waiver, and outside food and drinks are not allowed.",
        bestFor: "Active kids, rainy day adventures, birthday parties",
        address: "5320 S. Moorland Rd., New Berlin, WI 53151",
        website: "https://www.aircity360wi.com/",
      },
    {
        name: "Springs Water Park at The Ingleside Hotel",
        area: "Pewaukee",
        kind: "Indoor Water Park",
        ages: "Under 16 with an adult",
        description: "An indoor water park about 18 miles from Milwaukee with tube and body slides, a lazy river, an activity pool, a zero-depth area for small children, a hot tub and an arcade with more than 50 games. A limited number of day passes for non-hotel guests are sold based on capacity and must be bought online before you arrive.",
        hours: "Water park hours change by date; check the Rates & Hours calendar on the hotel's site.",
        admission: "Day pass prices change by date. Cash is not accepted. Towel rental for day guests is $1.",
        tip: "All children under 16 must be with an adult, one adult for every five children. Children under 6 are not allowed in the hot tub.",
        bestFor: "Swimming and slides in the middle of winter",
        address: "2810 Golf Rd., Pewaukee, WI 53072",
        website: "https://www.theinglesidehotel.com/waterpark",
      },
    ],
  },
  {
    id: "outdoors",
    title: "Winter Outdoors",
    blurb: "Parks, trails and a zoo that stay open through winter, plus tubing and sledding when there is snow.",
    items: [
        {
        name: "Milwaukee County Zoo",
        area: "Milwaukee",
        kind: "Zoo & Wildlife",
        ages: "All ages (playground areas for ages 2–5 and 6–12)",
        description: "Spanning 190 acres, the Milwaukee County Zoo is home to more than 2,400 animals representing over 340 species. In winter the seasonal shows, the Giraffe Experience and the Goat Yard are closed, but the animal buildings stay open on shorter hours and the free Zoo Playground is open year-round.",
        hours: "Through Feb. 28, 2027: weekdays 9:30 a.m.–2:30 p.m.; weekends 9:30 a.m.–4:30 p.m. March 1–May 28, 2027: daily 9:30 a.m.–4:30 p.m. Admissions close 45 minutes before closing. Closed Thanksgiving Day, Christmas Day and New Year's Day.",
        admission: "Tickets are sold by date through the zoo's ticket store, with separate Milwaukee County resident and non-resident prices and a lower rate online. Parking is $15 per vehicle plus service fee and tax.",
        deals: "Family Free Days on Nov. 7 and Dec. 5, 2026, and free daytime admission for everyone during Frosty Free Week, Dec. 26–30. Parking and attraction fees still apply, and 2027 free days are not yet posted.",
        highlights: "Zoo Playground (free, open year-round), Animal buildings, Carousel (weather permitting in winter), VR Gorilla Trek Experience, Giraffe Experience (seasonal, closed in winter), Safari Train (closed in November 2026 for track maintenance)",
        tip: "Animal buildings close 15 minutes before the zoo does. The front entry is under construction, with a temporary entrance just east of the main one.",
        bestFor: "Animal lovers, family outings, educational experiences",
        address: "10001 W. Bluemound Rd., Milwaukee, WI 53226",
        website: "https://milwaukeezoo.org/",
      },
    {
        name: "Lakeshore State Park",
        area: "Downtown / Lakefront",
        kind: "Urban State Park",
        price: "Free",
        description: "Wisconsin's only urban state park offers 22 acres of restored prairies, a 1.7-mile waterfront trail, and some of the best Lake Michigan and skyline views in the city. The paved, stroller-friendly paths connect to the Hank Aaron and Oak Leaf trails for extended adventures.",
        hours: "Open 6 a.m.–10 p.m. year-round.",
        admission: "Free; no vehicle admission sticker required.",
        highlights: "1.7-Mile Waterfront Trail, Restored Prairie Landscapes, Wildlife Viewing, Connects to Oak Leaf Trail",
        tip: "In winter, hiking and snowshoeing are allowed and only the east trail is plowed.",
        bestFor: "Urban nature walks, stroller outings, skyline photography",
        address: "500 N. Harbor Dr., Milwaukee, WI 53202",
        website: "https://dnr.wisconsin.gov/topic/parks/lakeshore",
      },
    {
        name: "Crystal Ridge Snow Tubing",
        area: "Franklin",
        kind: "Snow Tubing",
        ages: "36 inches and taller",
        price: "From $20",
        description: "Snow tubing on 19 lanes served by a Magic Carpet conveyor, alongside skiing, snowboarding and lessons. No opening date for the 2026–27 season had been posted when we checked; winter tickets were on sale and an open house was listed for Nov. 14, 2026.",
        hours: "Tubing: Monday–Thursday 4–8 p.m.; Friday 1–9 p.m.; Saturday and holidays 10 a.m.–9 p.m.; Sunday 10 a.m.–8 p.m. Holiday hours: Dec. 21–23 and Dec. 26–Jan. 2, 10 a.m.–9 p.m.; Dec. 24, 10 a.m.–2 p.m.; closed Dec. 25; Jan. 18 and Feb. 15, 2027, 10 a.m.–9 p.m.",
        admission: "Weeknight tubing (Monday–Thursday 4–8 p.m.) $30 at the window, from $20 online. Two-hour weekend ticket (Friday–Sunday and holidays) $49 at the window, from $29 online. Glow Tubing (Saturday nights in January, 9:15–11 p.m., online only) from $45.",
        tip: "Riders must be 36 inches or taller, everyone rides in their own tube, and a signed waiver is required. If a session sells out online, no walk-in tickets are sold.",
        bestFor: "A winter-only outing close to the city",
        address: "7011 S. Ballpark Dr., Franklin, WI 53132",
        website: "https://crystalridge.com/",
      },
    {
        name: "Milwaukee County Parks Sled Hills",
        area: "Countywide",
        kind: "Sledding",
        description: "Milwaukee County Parks lists 12 sled hills, three of them lighted for night sledding: Currie Park, Humboldt Park and Whitnall Park. The list also includes Brown Deer, Greene, Hales Corners, Indigenous Peoples' Park, Kletzsch, LaFollette, McCarty, McGovern and Wilson Recreation.",
        hours: "Daytime sledding when weather conditions permit. Currie, Humboldt and Whitnall are listed as lighted daily 4:30–8:30 p.m., in a county article last updated in June 2025.",
        admission: "The county lists no fee.",
        bestFor: "Outdoor fun whenever there is snow",
        address: "Lighted hills: Currie Park, 3535 N. Mayfair Rd.; Humboldt Park, 3000 S. Howell Ave.; Whitnall Park, 5879 S. 92nd St.",
        website: "https://mkecoparks.helpscoutdocs.com/article/259-are-there-any-sled-hills-in-the-parks",
      },
    {
        name: "Schlitz Audubon Nature Center",
        area: "Bayside",
        kind: "Nature Center",
        price: "$8–$12",
        description: "A nature center with six miles of hiking trails, including accessible boardwalks, through prairie, ponds, forest, ravines and Lake Michigan shoreline.",
        hours: "Daily 8:30 a.m.–5 p.m.; closed Thanksgiving, Christmas Eve, Christmas and New Year's Day.",
        admission: "Adults and teens $12; seniors 65+ and military $10; children 3–12 $8; ages 2 and under free.",
        bestFor: "Winter trail walks, with a building to warm up in",
        address: "1111 E. Brown Deer Rd., Milwaukee, WI 53217",
        website: "https://www.schlitzaudubon.org/",
      },
    {
        name: "Urban Ecology Center",
        area: "3 locations",
        kind: "Nature Centers",
        price: "Free",
        description: "Three free nature centers in city parks. Kids can ride a nature-themed slide and borrow an activity backpack for guided nature fun. The center's family page mentions snowshoeing, sledding and building snow forts in winter.",
        hours: "Tuesday–Thursday noon–6 p.m.; Friday noon–5 p.m.; Saturday 9 a.m.–3 p.m.; closed Sunday and Monday. The hours are the same at all three branches.",
        admission: "Free.",
        bestFor: "Free play, indoors and out",
        address: "Riverside Park: 1500 E. Park Pl., Milwaukee, WI 53211. Washington Park: 1859 N. 40th St., Milwaukee, WI 53208. Menomonee Valley: 3700 W. Pierce St., Milwaukee, WI 53215",
        website: "https://urbanecologycenter.org/",
      },
    {
        name: "Wehr Nature Center",
        area: "Franklin",
        kind: "Nature Center",
        price: "$5 parking",
        description: "A nature center with trails open dawn to dusk year-round and a visitor center with natural history displays, wildlife viewing and a nature store. Snowshoes are rented during business hours when conditions allow, first come, first served.",
        hours: "Trails: dawn to dusk, year-round. Visitor Center: daily 8:30 a.m.–4:30 p.m.; closed Thanksgiving, the Friday after, Christmas Eve, Christmas Day, the day after Christmas and New Year's Day.",
        admission: "No general admission is listed. Parking is $5 per vehicle per day; $4 for veterans or people with disabilities.",
        tip: "The parking lot is locked from 5 p.m. to 8 a.m., October through January.",
        bestFor: "Snowshoeing and winter trails",
        address: "9701 W. College Ave., Franklin, WI 53132",
        website: "https://www.wehrnaturecenter.com/",
      },
    ],
  },
  {
    id: "holidays",
    title: "Holiday Lights & Shows",
    blurb: "Free downtown lights, the zoo after dark, a West Allis tradition and theater made for kids.",
    items: [
        {
        name: "Milwaukee Holiday Lights Festival",
        area: "Downtown",
        kind: "Holiday Lights",
        price: "Free",
        status: "November 19, 2026 through January 1, 2027.",
        description: "Downtown Milwaukee lights up from November 19, 2026 through January 1, 2027, with displays in Cathedral Square Park, Zeidler Union Square, Pere Marquette Park and Red Arrow Park and along Wisconsin Avenue. The free Kickoff Extravaganza on Thursday, November 19 at Pere Marquette Park brings a dance party at 5:30pm, a show at 6:30pm and fireworks shortly before 7pm.",
        admission: "Free. Jingle Bus: $8 per person, before tax and fees.",
        deals: "Free Jingle Bus rides after the kickoff fireworks with a voucher reserved in advance at milwaukeeholidaylights.com.",
        highlights: "Holiday Shows, Jingle Bus Tours, More than half a million lights",
        tip: "The Jingle Bus is a 40-minute narrated tour that runs Fridays through Sundays, December 12–27, except Christmas Day, from 5 to 8:20pm, weather permitting. It leaves from the Warming House at the Milwaukee County Historical Society, 910 N. Dr. Martin Luther King Jr. Dr.",
        bestFor: "Holiday traditions, evening outings, festive atmosphere",
        address: "Kickoff: Pere Marquette Park, 900 N. Plankinton Ave., Milwaukee",
        website: "https://www.milwaukeedowntown.com/signature-events/milwaukee-holiday-lights-festival/",
      },
    {
        name: "Wild Lights at the Milwaukee County Zoo",
        area: "Milwaukee",
        kind: "Holiday Lights",
        status: "Select nights, November 20 through December 31, 2026.",
        description: "Wild Lights lights up the zoo on select nights from November 20 through December 31, 2026, from 5:30pm to 9pm; gates close at 8:15pm. November 22, December 6 and December 13 are drive-thru nights. Wild Lights is ticketed separately, including during Frosty Free Week.",
        hours: "Select nights 5:30–9 p.m.; gates close at 8:15 p.m.",
        bestFor: "Holiday activities, evening outings",
        address: "10001 W. Bluemound Rd., Milwaukee, WI 53226",
        website: "https://milwaukeezoo.org/visit/upcoming-events/",
      },
    {
        name: "Candy Cane Lane",
        area: "West Allis",
        kind: "Neighborhood Light Display",
        status: "November 27 through December 25, 2026.",
        description: "A neighborhood holiday light display that raises money for the MACC Fund. No admission charge is listed; donations are collected on 95th Street between Oklahoma and Manitoba, and credit cards are accepted on site.",
        hours: "Monday–Thursday 6–9 p.m.; Fridays 6–10 p.m.; Saturdays 5–10 p.m.; Sundays 5–9 p.m. Hours may change due to weather, traffic and other conditions.",
        bestFor: "A drive-or-walk holiday lights outing",
        address: "96th Street to 92nd Street, Montana Avenue to Oklahoma Avenue, West Allis",
        website: "http://candycanelanewi.com/",
      },
    {
        name: "First Stage",
        area: "Downtown",
        kind: "Children's Theater",
        ages: "The Grinch: ages 5+; Winnie-the-Pooh: ages 3+",
        description: "Professional theater for young audiences. Dr. Seuss's How the Grinch Stole Christmas! runs November 21–December 27, 2026, about 95 minutes with intermission. Winnie-the-Pooh: Forever Friends runs January 29–February 28, 2027, about 80 minutes.",
        hours: "Performance times vary by date. Sensory Friendly Performances: The Grinch on Saturday, Dec. 5 at 11 a.m.; Winnie-the-Pooh on Saturday, Feb. 13, 2027 at 1 p.m.",
        bestFor: "Indoor shows made for kids",
        address: "Todd Wehr Theater at the Marcus Performing Arts Center, 929 N. Water St., Milwaukee, WI 53202",
        website: "https://www.firststage.org/",
      },
    ],
  },
  {
    id: "summer",
    title: "When It Warms Up",
    blurb: "Summer spots to save for later, with what we could confirm about each today.",
    items: [
        {
        name: "Boerner Botanical Gardens & Margie's Garden",
        area: "Hales Corners",
        kind: "Botanical Garden & Children's Garden",
        price: "$6.50–$10",
        description: "Margie's Garden is the children's garden at Boerner Botanical Gardens. Boerner is on winter hours now, and its official pages do not say whether the outdoor gardens and Margie's Garden are open during them. The 2027 garden season opening date has not been posted.",
        hours: "Winter hours: Monday–Friday 10 a.m.–4 p.m.; closed Saturday and Sunday. Holiday Gift Fair: Sunday, Dec. 6, 10 a.m.–2 p.m.",
        admission: "Adults 18–59 $9 for Milwaukee County residents, $10 for non-residents; seniors 60+ $6.50 residents, $10 non-residents; juniors 3–12 $6.50; ages 2 and under free; students, military and persons with a disability $6.50.",
        bestFor: "Nature lovers, garden exploration",
        address: "9400 Boerner Dr., Hales Corners, WI 53130",
        website: "https://boernerbotanicalgardens.org/",
      },
    {
        name: "Northwestern Mutual Community Park",
        area: "Summerfest Grounds",
        kind: "Inclusive Playground",
        price: "Free",
        description: "A playground on the Summerfest grounds with inclusive play equipment, sensory rooms and nursing stations. It is free on non-event days.",
        tip: "We could not confirm winter hours, so check summerfest.com before going.",
        bestFor: "Toddlers, inclusive play, accessible recreation",
        website: "https://www.summerfest.com/community-park/",
      },
    {
        name: "American Family Field Tours",
        kind: "Stadium Tours",
        price: "$11–$16",
        description: "Walk-up tours of the Brewers' ballpark have ended for the 2026 season, and 2027 tour information is not yet posted. Private group tours can be reserved year-round.",
        admission: "Classic Ballpark Tour: adults $16; seniors 60+ $11; military $11; youth 3–12 $11; ages 2 and under free.",
        highlights: "75-90 Minute Stadium Tours, Dugout Access, Press Box Visit",
        tip: "Parking is free for tours, and tours are ADA and stroller accessible.",
        bestFor: "Sports fans, baseball families",
        website: "https://www.mlb.com/brewers/ballpark/tours",
      },
    {
        name: "Summerfest Children's Fest",
        area: "Summerfest Grounds",
        kind: "Music Festival",
        description: "Summerfest 2027 runs June 24–26, July 1–3 and July 8–10. In 2026, Shorewest Children's Fest Day offered free admission for everyone arriving between noon and 3pm. A 2027 Children's Fest date had not been announced when we checked.",
        bestFor: "Festival introduction, summer fun",
        website: "https://www.summerfest.com/",
      },
    ],
  },
];

const DEALS = [
  {
    name: "Milwaukee Art Museum",
    deal: "kids 12 and under are always free. Pay-what-you-wish Thursdays 4–8 p.m.",
  },
  {
    name: "Betty Brinn Children's Museum",
    deal: "free for everyone on the third Thursday of every month, 9 a.m.–7 p.m. (Nov. 19 and Dec. 17, 2026).",
  },
  {
    name: "Milwaukee Public Museum",
    deal: "final Kohl's Thank You Thursday free day on Dec. 3, 2026, 10 a.m.–5 p.m. Reserve tickets starting seven days ahead.",
  },
  {
    name: "Milwaukee County Zoo",
    deal: "Family Free Days Nov. 7 and Dec. 5, 2026, and free daytime admission during Frosty Free Week, Dec. 26–30. Parking and attraction fees still apply.",
  },
  {
    name: "Milwaukee Holiday Lights Festival",
    deal: "free, Nov. 19, 2026 through Jan. 1, 2027.",
  },
  {
    name: "Urban Ecology Center",
    deal: "free admission at all three branches.",
  },
  {
    name: "Central Library children's room",
    deal: "free.",
  },
  {
    name: "Lakeshore State Park",
    deal: "free, with no vehicle admission sticker required.",
  },
  {
    name: "Discovery World",
    deal: "$7 Access Admission per person, up to five people, for Wisconsin residents in qualifying programs, in person only.",
  },
  {
    name: "Sky Zone",
    deal: "$12 Tuesday: a 90-minute walk-in jump for $12; socks not included.",
  },
  {
    name: "JB's on 41",
    deal: "Family Unlimited bowling with shoes for $12.99 per person, Saturdays and Sundays 11 a.m.–3 p.m., walk-in only.",
  },
];

const faqs = [
  {
    question: "What are the best free things to do with kids in Milwaukee?",
    answer: "Milwaukee offers many free family activities including the Milwaukee Art Museum (free for kids 12 and under), Lakeshore State Park trails, Betty Brinn Children's Museum on the third Thursday of each month, the Milwaukee Public Museum's Kohl's Thank You Thursday on December 3, 2026, and free days at the Milwaukee County Zoo (Family Free Days on November 7 and December 5, 2026, plus Frosty Free Week, December 26-30). The Holiday Lights Festival downtown is also free, from November 19, 2026 through January 1, 2027.",
  },
  {
    question: "What are the best rainy day activities for kids in Milwaukee?",
    answer: "For rainy or snowy days, head to Discovery World for hands-on science and aquarium exhibits, Betty Brinn Children's Museum for younger kids, the Milwaukee Public Museum for dinosaurs and history (through January 3, 2027, its last day on Wells Street), or indoor play centers like Sky Zone, JB's on 41, and Air City 360. The Pettit National Ice Center offers indoor public skating on its Olympic oval.",
  },
  {
    question: "What can kids do outside in Milwaukee in winter?",
    answer: "Lakeshore State Park is free and open 6am to 10pm year-round, with hiking and snowshoeing allowed and the east trail plowed. When there is snow, Milwaukee County Parks lists 12 sled hills, and Crystal Ridge in Franklin has 19 lanes of snow tubing. Wehr Nature Center rents snowshoes when conditions allow, Schlitz Audubon Nature Center has six miles of trails open daily, and the Milwaukee County Zoo keeps its animal buildings and free playground open on shorter winter hours.",
  },
  {
    question: "What are the best activities for toddlers in Milwaukee?",
    answer: "Betty Brinn Children's Museum has Pocket Park, a sensory play space for children ages 4 and under. The Milwaukee County Zoo playground has a dedicated section for ages 2-5. Sky Zone's Little Leapers session, Sundays from 9 to 10am, is for ages 7 and under, and the Milwaukee Art Museum's Play Date with Art is for ages 5 and under.",
  },
  {
    question: "Where can kids see holiday lights in Milwaukee?",
    answer: "The Milwaukee Holiday Lights Festival is free downtown from November 19, 2026 through January 1, 2027. Wild Lights runs at the Milwaukee County Zoo on select nights from November 20 through December 31, 2026 and is ticketed separately. Candy Cane Lane in West Allis runs November 27 through December 25, 2026. The Mitchell Park Domes Holiday Show runs November 21, 2026 through January 3, 2027.",
  },
  {
    question: "What are the must-see Milwaukee attractions for first-time family visitors?",
    answer: "The best things to do with kids in Milwaukee are the Milwaukee County Zoo, Discovery World, and the Betty Brinn Children's Museum for younger kids. The Milwaukee Public Museum's dinosaurs and Streets of Old Milwaukee are also must-sees through January 3, 2027, the museum's last day at 800 W. Wells St. The Milwaukee Art Museum is free for kids 12 and under.",
  },
];

const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const ALL = SECTIONS.flatMap((s) => s.items);

export default function ThingsToDoWithKidsMilwaukee() {
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
