import React, { useState } from "react";
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

const navLinks = [
  { href: "#at-a-glance", label: "At a Glance" },
  { href: "#hours-admission", label: "Hours & Admission" },
  { href: "#exhibits", label: "Exhibits" },
  { href: "#rides", label: "Rides" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
];

const atAGlance = [
  { label: "Hours now (through Feb 28, 2027)", value: "Daily 9:30 a.m.–5 p.m." },
  { label: "Spring hours (March 1–May 28, 2027)", value: "Daily 9:30 a.m.–4:30 p.m." },
  { label: "Winter hours (Nov 1, 2026–Feb 28, 2027)", value: "Weekdays 9:30 a.m.–2:30 p.m.; Weekends 9:30–4:30" },
  { label: "Admission", value: "Flex pricing by date — exact prices are in the zoo's online ticket store; buying online saves $3 per ticket; kids 2 and under free" },
  { label: "Verified discounts", value: "Milwaukee County residents $12 adults / $9.50 kids (3–12) every Wednesday; groups of 15+ $14.75 adults & seniors / $11.75 children" },
  { label: "Parking", value: "$15 per vehicle + service fee & tax, paid by QR code in the lot (free for Zoo Pass members, who still register their plate)" },
  { label: "Kids 2 and under", value: "Free, every day" },
  { label: "Best season for outdoor exhibits", value: "Memorial Day–Labor Day (giraffe feeding, Sky Safari, Goat Yard)" },
  { label: "Family-friendly notes", value: "190 acres, 2,400+ animals, stroller rental $12.50, all paved paths" },
  { label: "Free admission days", value: "6 Family Free Days + Frosty Free Week (Dec 26–30)" },
];

const seasonPricing = [
  {
    season: "Peak Summer (Memorial Day weekend – Labor Day)",
    window: "May 23 – Sept 7, 2026 (season ended; summer 2027 hours not yet published)",
    rows: [
      { who: "Adult (13+)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Senior (60+)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Child (3–12)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Child (2 and under)", price: "Free" },
      { who: "Zoo Pass member", price: "Free admission + free parking" },
      { who: "Parking", price: "$15 per car" },
    ],
  },
  {
    season: "Shoulder (Sept 8 – Oct 31, 2026 — ended; spring shoulder runs March 1 – May 28, 2027)",
    window: "Early fall — daily 9:30 a.m.–4:30 p.m.",
    rows: [
      { who: "Adult (13+)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Senior (60+)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Child (3–12)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Child (2 and under)", price: "Free" },
      { who: "Zoo Pass member", price: "Free admission + free parking" },
      { who: "Parking", price: "$15 per car" },
    ],
  },
  {
    season: "Winter (Nov 1, 2026 – Feb 28, 2027)",
    window: "Weekdays 9:30 a.m.–2:30 p.m., weekends 9:30 a.m.–4:30 p.m. (admissions close 45 minutes before closing; animal buildings 15 minutes before). Closed Thanksgiving, Christmas and New Year's Day. March 1 – May 28, 2027: daily 9:30 a.m.–4:30 p.m.",
    rows: [
      { who: "Adult (13+)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Senior (60+)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Child (3–12)", price: "Flex pricing — see the zoo's online ticket store for your date" },
      { who: "Child (2 and under)", price: "Free" },
      { who: "Zoo Pass member", price: "Free admission + free parking" },
      { who: "Parking", price: "$15 per car" },
    ],
  },
];

const exhibits = [
  {
    name: "Adventure Africa (Elephant Habitat & Care Center)",
    what: "African savanna elephant Belle now anchors a 1.6-acre outdoor yard and a 20,000 sq ft Care Center; she has been the zoo's sole elephant since Ruth died in September 2025 and Brittany was euthanized in April 2026. The zoo has committed to continuing its elephant program in coordination with the AZA Species Survival Plan. Check the daily schedule at the gate for keeper enrichment talks.",
    best: "Morning enrichment talk (11:30 a.m. weekdays) — elephants are most active and you get keeper commentary.",
  },
  {
    name: "Adventure Africa Phase II — Dohmen Family Foundation Hippo Haven",
    what: "Underwater viewing of the Zoo's hippo, Happy, in a 60,000-gallon outdoor pool. Opened summer 2020 and open April through October only; in the cold months Happy is viewable indoors at the Robert Dohmen Hippo Indoor Haven inside the Rhino Care Center. Tied into the Adventure Africa complex with elephants.",
    best: "Mid-morning before crowds for the underwater windows. Hippos are most likely to swim past then.",
  },
  {
    name: "Adventure Africa Phase III — Ladish Co. Foundation Rhino Care Center",
    what: "Newest addition. Houses Eastern black rhinos in habitats reshaped from the former elephant and rhino footprint.",
    best: "Late morning — rhinos are typically out on warm days. Pair with the elephant talk next door.",
  },
  {
    name: "Florence Mila Borchert Big Cat Country",
    what: "Lions, jaguars, tigers and snow leopards in naturalistic rock-and-stream habitats with multi-level glass viewing. In the summer Animals in Action season (May 23–Sept 7 in 2026) the Big Cat Country feeding ran daily at 3:30 p.m.; the program is closed for the season now. The building also houses cheetahs, servals, spotted hyenas and red pandas.",
    best: "The 3:30 p.m. summer feeding is the move. Mornings if you want quiet viewing through glass.",
  },
  {
    name: "Stearns Family Apes of Africa",
    what: "Opened 1992. Western lowland gorillas and bonobos in West African rainforest habitats with elevated outdoor mesh passageways. Bonobo demonstrations Wednesdays at 3:45 p.m.",
    best: "Wednesday 3:45 p.m. for bonobo demo. Otherwise mid-morning when both groups are most social.",
  },
  {
    name: "Primates of the World",
    what: "Indoor building with orangutans, siamangs, black-handed spider monkeys, black-and-white colobus, De Brazza's monkeys, white-fronted marmosets and red-ruffed lemurs. Comes alive on cold or rainy days when guests cluster inside.",
    best: "Any winter day or rainy summer afternoon — heated, sheltered, never empty-feeling.",
  },
  {
    name: "Aquatic & Reptile Center",
    what: "Fish, reptiles, amphibians and invertebrates, anchored by the 55,000-gallon Amazon Flooded Forest aquarium (home to giant arapaima) and the Lake Wisconsin tank of native fish, plus green anaconda, king cobra, Gila monster and poison dart frogs. Walks visitors through aquatic and herp species across continents. Indoor, year-round.",
    best: "Hot afternoons (cool indoors) or rainy days. The 55,000-gallon Amazon Flooded Forest aquarium is the highlight.",
  },
  {
    name: "Small Mammals Building — PERMANENTLY CLOSED",
    what: "The Small Mammals Building closed permanently; its final public day was Sunday, Nov. 2, 2025. The Zoo retired the 1960s-era building under its “Our Zoo, Our Future” plan because it no longer met modern animal-care standards. Bats, rodents, marsupials, fennec foxes and other small mammal species that were on display here have been transferring to other AZA-accredited zoos, and the building will not reopen.",
    best: "Plan your visit around the other indoor buildings (Aquatic & Reptile Center, Primates of the World, the Mahler Family Aviary, Apes of Africa, Big Cat Country and the Rhino Care Center).",
  },
  {
    name: "Herb & Nada Mahler Family Aviary",
    what: "Walk-through indoor aviary with free-flying birds from around the world plus rockhopper and gentoo penguins; whooping cranes live in an adjacent outdoor habitat. Often the warmest building in the park — a winter favorite.",
    best: "January–February afternoons when outdoor exhibits are limited. Quiet weekday mornings are best for photography.",
  },
  {
    name: "Idabel Wilmot Borchert Flamingo Exhibit",
    what: "Caribbean and Chilean flamingos in an open outdoor habitat near the zoo entrance.",
    best: "Late morning when birds are most active and grouped together.",
  },
  {
    name: "Northwestern Mutual Family Farm",
    what: "Working dairy and farm complex with five breeds of dairy cattle, Nigerian dwarf goats, Kunekune and Guinea hog pigs, Sicilian donkeys and farm-life programming. The Goat Yard (Nigerian dwarf goats) is seasonal and free: in 2026 it ran daily May 23 through September and on October weekends, 10 a.m.–4:15 p.m., and is now closed for the season. There is no goat feeding.",
    best: "Late morning before farm animals nap. The Goat Yard is a kid magnet — free to enter, and there is no goat feeding.",
  },
  {
    name: "Modern Woodmen Otter Passage",
    what: "North American river otters in an outdoor habitat with underwater viewing windows. Opened 2018.",
    best: "Morning or right after a keeper enrichment feed — otters are most playful with fresh ice or toys.",
  },
  {
    name: "Giraffe Experience (presented by Miller Lite)",
    what: "Hand-feed giraffes from an elevated platform. Seasonal: weekends in May, daily Memorial Day weekend through Labor Day, then weekends in September — closed for the season now. Times: 10:30 a.m.–12:30 p.m. and 2–3:30 p.m. Cost: $5.",
    best: "Earlier session (10:30 a.m.) — shorter lines and giraffes are hungrier.",
  },
  {
    name: "Powerful Pollinators (2026 Summer Exhibit — ended Oct 4)",
    what: "Special interactive seasonal exhibit with animatronic pollinators. Ran May 23 – October 4, 2026 and is now closed; the 2027 summer exhibit has not been announced. $4 per person on top of zoo admission.",
    best: "Pair with the Family Farm next door — most pollinator content is hands-on for kids 4–10.",
  },
];

const rides = [
  { name: "Sky Safari (chairlift)", price: "$4 + tax per person", when: "Daily, March–November (weather permitting)", note: "Round-trip aerial ride over the camels, tigers, alpacas and jaguars (riders must be 3 or older; Zoo Pass discount) — great way to scout the layout when you arrive." },
  { name: "Safari Train", price: "$5 + tax per person", when: "Daily, March–November (weather permitting)", note: "Miniature train loop. Saves toddler legs late in the day. Note: the train is closed in November 2026 for track maintenance — it runs on the Nov. 7 Family Free Day and intermittent weekends as work progresses." },
  { name: "Penzeys Carousel", price: "$3 + tax per person", when: "Daily March–November; winter weather-permitting", note: "Hand-painted animal carousel near the entrance plaza." },
  { name: "Sky Adventure Zip Line", price: "$20 + tax", when: "Closed for the season (2026: Memorial Day weekend–Labor Day, plus weekends through Oct 4)", note: "400-foot zip line — adults and older kids only. Height/weight rules apply." },
  { name: "Sky Adventure Ropes Course", price: "$15 + tax", when: "Closed for the season (2026: Memorial Day weekend–Labor Day, plus weekends through Oct 4)", note: "Multi-element course beside the zip line. Combo zip + ropes is $30." },
  { name: "Sky Tykes (kid ropes course)", price: "$10 + tax", when: "May 23 – Sept 7", note: "Lower, safer course for small kids — same plaza as the big zip line." },
  { name: "ScooterPals (ride-on plush animal scooters)", price: "$5 activation + $0.35/min", when: "Daily, weather permitting", note: "Driver must be 16+. A for-fun ride (choose a rhino, bear, leopard, giraffe, lion or dinosaur) — not a mobility aid and not ADA accessible." },
  { name: "Virtual Reality Experience", price: "$6 ($5 for members)", when: "Daily, March–December", note: "Three VR adventures in multiple languages — the Gorilla Trek experience is the best one." },
  { name: "Stroller rental", price: "$12.50 + tax", when: "Daily at the U.S. Bank Gathering Place (cashless payment only)", note: "Wheelchairs are $10; mobility scooters $35. All first-come, first-served." },
];

const dailySchedule = [
  { time: "9:30 a.m.", item: "Zoo opens — entrance lines are shortest in the first 30 minutes" },
  { time: "10:30 a.m. – 12:30 p.m.", item: "Giraffe Experience session 1 ($5) — summer season only" },
  { time: "11:30 a.m.", item: "Elephant Habitat enrichment talk (Mon, Tue, Thu, Fri)" },
  { time: "12:00 p.m.", item: "Kohl's Wild Theater show (15 min, free) — summer only, closed Mondays" },
  { time: "1:45 p.m.", item: "Kohl's Wild Theater show #2 (15 min, free) — summer only" },
  { time: "2:00 – 3:30 p.m.", item: "Giraffe Experience session 2 ($5) — summer season only" },
  { time: "3:00 p.m.", item: "Harbor Seal training demo (daily); Big Cat Country feeding follows at 3:30 p.m. (daily)" },
  { time: "3:45 p.m.", item: "Bonobo demonstration (Wednesdays)" },
  { time: "Varies", item: "Animals in Action talks + Veterinary Views (Animal Health Center)" },
];

const events = [
  { name: "Egg Day", when: "Held Saturday, April 4, 2026 (2027 date not yet announced)", what: "Spring family event. Scavenger hunts, Bunny Parade at 10:30 a.m., noon and 1:30 p.m., face painting, Chalk the Zoo, Dixieland jazz, and egg-themed animal enrichment for lions, otters and elephants. New 2026 brunch buffet package: $70 adults / $36 kids 3–12 (includes admission, parking, train ride, animal encounter)." },
  { name: "Senior Safari", when: "Held June 16, 2026 (2027 date not yet announced)", what: "Free admission for guests 60+ (and caretakers). One of the year's most-attended free days." },
  { name: "Father's Day", when: "Held June 21, 2026 (Father's Day 2027 is June 20; offer not yet announced)", what: "Free admission for dads." },
  { name: "Zoo Ball (gala fundraiser)", when: "Held June 27, 2026 (2027 date not yet announced)", what: "Zoological Society's flagship adults-only gala. Ticketed, formal." },
  { name: "$4 on the 4th", when: "Held July 4, 2026 (2027 not yet announced)", what: "Independence Day promotion — $4 admission for everyone." },
  { name: "Military & Veterans Family Day", when: "Held July 5, 2026 (2027 date not yet announced)", what: "Free admission and free parking for military and veterans plus immediate family." },
  { name: "Kids Nights (members only)", when: "July 14–15, 2026 (the July 16 night was canceled)", what: "After-hours Zoo Pass member event with extended hours and family activities." },
  { name: "Birdies & Eagles Golf Tournament", when: "Held July 27, 2026 at Ozaukee Country Club (2027 date not yet announced)", what: "Annual Zoological Society golf fundraiser." },
  { name: "Snooze at the Zoo (overnight camping)", when: "Held August 13–15, 2026 (2027 dates not yet announced)", what: "Family overnight inside the zoo grounds — registration through the Zoological Society." },
  { name: "À La Carte at the Zoo", when: "Held August 20–23, 2026 — the festival's 40th year (2027 dates not yet announced)", what: "Multi-day food, music and dining festival across the park." },
  { name: "Zoo Brew", when: "Held Thursday, October 8, 2026 (21+; 2027 date not yet announced)", what: "Zoological Society's adults-only craft-beer tasting across three zones. Includes local and national breweries plus food. Tickets at gozoobrew.com." },
  { name: "Boo at the Zoo", when: "Held October 16–17 and 23–24, 2026 (now past) — Fridays 4:30–9 p.m., Saturdays 9:30 a.m.–9 p.m.", what: "Not-so-spooky family Halloween event. In 2026 it featured an all-day trick-or-treat trail, pumpkin animal enrichment, light shows, live entertainment and pumpkin-carving demos, with new daytime hours on both Saturdays (Boo tickets were the only valid admission on Oct. 17 and 24) and a new 21+ Spooky Safari night on Oct. 22. Tickets were online-only from $18 adults / $16 ages 3–12 with parking included; Zoo Pass members got 15% off." },
  { name: "Wild Lights", when: "Select nights Nov 20 – Dec 31, 2026 (closed Nov 23–26 and 29–30, Dec 1–2, 7–8, 14–15 and 24–25) — 5:30–9 p.m., admission gates close 8:15 p.m.", what: "Holiday light walk presented by We Energies Foundation. 2026 extras: three Drive Thru nights (Nov 22, Dec 6 and Dec 13, 5–9 p.m., $40 per carload, online only), the 21+ Cheers! night (Dec 10; $22 online / $25 at the Zoo), Dogs After Dark (Dec 16), Santa visits (Dec 9–12 and 16–23) and Zoo Year's Eve packages (Dec 31). Early-bird online tickets are $15 for adults and kids 3–12 through Nov 8 (2 and under free); every ticket includes parking and Zoo Pass members save 20%." },
  { name: "Frosty Free Week", when: "December 26–30, 2026", what: "Free daytime zoo admission for everyone — one of the best low-cost holiday-break activities in Milwaukee." },
];

const familyFreeDays = ["January 3, 2026", "February 7, 2026", "March 7, 2026", "October 3, 2026", "November 7, 2026", "December 5, 2026"];

const memberships = [
  { tier: "Individual", price: "$110", who: "One adult, 18+" },
  { tier: "Dual", price: "$135", who: "Two adults at the same address" },
  { tier: "One-Adult Household", price: "$155", who: "One adult + their kids/grandkids 17 and under" },
  { tier: "Two-Adult Household", price: "$180", who: "Two adults at the same address + their kids/grandkids 17 and under" },
  { tier: "Affiliate", price: "$355", who: "Household + 4 guests per visit + 4 one-time guest passes + education class certificate" },
  { tier: "Benefactor", price: "$460", who: "Household + 4 guests per visit + 6 one-time guest passes + class certificate + walking tour certificate" },
];

const faqs = [
  { question: "What are Milwaukee County Zoo's hours in 2026?", answer: "From November 1, 2026 through February 28, 2027 the zoo is open 9:30 a.m.–2:30 p.m. on weekdays and 9:30 a.m.–4:30 p.m. on weekends. From March 1 through May 28, 2027 it is open daily 9:30 a.m.–4:30 p.m. Summer 2026 hours (May 23–Sept 7) were daily 9:30 a.m.–5 p.m.; summer 2027 hours have not been published. Admissions close 45 minutes before closing and animal buildings 15 minutes before. The zoo is closed Thanksgiving Day, Christmas Day and New Year's Day. Always check milwaukeezoo.org before going — special events such as Wild Lights have their own evening hours." },
  { question: "How much does it cost to get into the Milwaukee County Zoo?", answer: "The zoo uses flex pricing — the price depends on the date, and exact prices are shown in the zoo's online ticket store. Buying online saves $3 per ticket, and kids 2 and under are always free. Milwaukee County residents pay $12 for adults and $9.50 for kids 3–12 every Wednesday, and groups of 15 or more pay $14.75 for adults and seniors and $11.75 for children with two weeks' notice. Parking is separate: $15 per vehicle plus a service fee and tax, paid by QR code in the lot." },
  { question: "Are there any free admission days at the Milwaukee County Zoo?", answer: "Yes. The remaining 2026 Family Free Days, sponsored by Tri City National Bank and FOX6, are November 7 and December 5 (earlier 2026 dates were January 3, February 7, March 7 and October 3). The zoo also offers free daytime admission December 26–30, 2026 during Frosty Free Week, which does not cover Wild Lights. Parking ($15 plus service fee and tax) and attraction fees still apply on free days. 2027 free-day dates have not been announced." },
  { question: "Where is the Milwaukee County Zoo and is it actually in Milwaukee?", answer: "The zoo is at 10001 W Bluemound Rd, Milwaukee, WI 53226, on the city's far west side next to the Zoo Interchange (I-94 / I-41 / I-894) and the Wauwatosa border. From downtown Milwaukee it's about 15–20 minutes by car. Bluemound Road is under construction through July 2027: use the temporary entrance just east of the main entrance and follow the signs. Parking is $15 per vehicle plus service fee and tax, paid by QR code after you park (free for Zoo Pass members, who still register their plate). MCTS CONNECT, Route 28 and Route 92 serve the zoo." },
  { question: "Do you still have elephants at the Milwaukee County Zoo?", answer: "Yes — one African savanna elephant, Belle. Brittany was euthanized in April 2026 and Ruth died in September 2025; Belle is currently the zoo's sole elephant. She lives in the Adventure Africa complex (opened 2019), with a 1.6-acre outdoor yard and a 20,000-square-foot Elephant Care Center. The zoo has committed to continuing its elephant program in coordination with the AZA Species Survival Plan. Check the daily schedule at the gate for current keeper enrichment talks." },
  { question: "What rides are at the Milwaukee County Zoo and how much do they cost?", answer: "Rides are not included in admission. The Sky Safari (chairlift) is $4. The Safari Train is $5 — it is closed for track maintenance for most of November 2026, running on the Nov. 7 Family Free Day and intermittent weekends. The Penzeys Carousel is $3. The Sky Adventure Zip Line is $20, the Ropes Course is $15, the zip + ropes combo is $30, and Sky Tykes for little kids is $10 — these are summer attractions and are closed for the season. The VR Experience is $6 ($5 for members) and runs daily March through December. All prices are plus tax. The Goat Yard at the Family Farm is free and seasonal; there is no goat feeding." },
  { question: "What animal demonstrations or feedings happen each day?", answer: "Animals in Action, Kohl's Wild Theater and the Giraffe Experience are summer programs and are closed for the season as of November 2026. In summer 2026 (May 23–Sept 7) the typical schedule included elephant enrichment talks Monday, Tuesday, Thursday and Friday at 11:30 a.m., Kohl's Wild Theater shows at noon and 1:45 p.m. (closed Mondays), a Harbor Seal training demo at 3 p.m., a Big Cat Country feeding at 3:30 p.m., bonobo demonstrations Wednesdays at 3:45 p.m., and Giraffe Experience feeding sessions for $5. Check milwaukeezoo.org for the 2027 schedule when it is posted." },
  { question: "When is the best time of year to visit the Milwaukee County Zoo?", answer: "Late spring through early fall (late May to early October) is peak season — the rides and seasonal programming like the Giraffe Experience, Goat Yard, Sky Adventure and Kohl's Wild Theater are all running. Visit on a weekday morning to dodge weekend crowds. Winter (November through February) is quieter, with shorter hours: the summer rides and seasonal experiences are closed, the outdoor Hippo Haven pool is closed (Happy the hippo is viewable indoors at the Rhino Care Center), and the bears and badger hibernate from mid-November to mid-March. The indoor buildings — Aquatic & Reptile Center, the Mahler Family Aviary, Apes of Africa, Primates of the World, Big Cat Country and the Rhino Care Center — make a solid cold-weather visit, and Wild Lights runs on select nights November 20 through December 31, 2026." },
  { question: "How much is a Zoo Pass membership and is it worth it?", answer: "Zoo Pass tiers as of February 2026: Individual $110, Dual $135, One-Adult Household $155, Two-Adult Household $180, Affiliate $355, Benefactor $460. Every tier includes free admission, free parking ($15/visit value), member discounts on rides and the VR Experience, and free or discounted admission at more than 150 zoos and aquariums. For a Milwaukee family of four, the Two-Adult Household tier ($180) pays for itself in roughly two visits once parking and admission are added up — and it covers free entry to Wild Lights member previews, Kids Nights and Family Free Days." },
  { question: "What is there to do near the Milwaukee County Zoo after the visit?", answer: "The zoo sits on the Milwaukee–Wauwatosa border. Within 5–10 minutes by car: Mayfair Mall (largest mall in metro Milwaukee), Hoyt Park & Pool (Menomonee River trails, summer pool), Wauwatosa Village (independent restaurants and bars along State Street and Harwood Ave., on the Menomonee River), North Avenue's stretch through Tosa (bars and breakfast spots), and Story Hill (where Maxie's Southern Comfort and Story Hill BKC sit at Bluemound). American Family Field / American Family Field is also a 7-minute drive east on Bluemound, making zoo + Brewers game a real day-double in summer." },
];

const structuredData = {
  attraction: {
    "@context": "https://schema.org",
    "@type": "Zoo",
    name: "Milwaukee County Zoo",
    description: "Milwaukee County Zoo — 190-acre AZA-accredited zoo home to more than 2,400 animals across 340+ species, including African savanna elephants, lions, snow leopards, gorillas, bonobos and Eastern black rhinos.",
    image: "https://www.discover-milwaukee.com/images/milwaukee-county-zoo-og.svg",
    url: "https://www.discover-milwaukee.com/milwaukee-county-zoo",
    telephone: "+1-414-771-3040",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10001 W Bluemound Rd",
      addressLocality: "Milwaukee",
      addressRegion: "WI",
      postalCode: "53226",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 43.0276, longitude: -88.0379 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "14:30", validFrom: "2026-11-01", validThrough: "2027-02-28" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "09:30", closes: "16:30", validFrom: "2026-11-01", validThrough: "2027-02-28" },
    ],
    priceRange: "$$",
    isAccessibleForFree: false,
    sameAs: ["https://www.milwaukeezoo.org", "https://www.zoosociety.org"],
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
      { "@type": "ListItem", position: 2, name: "Milwaukee County Zoo", item: "https://www.discover-milwaukee.com/milwaukee-county-zoo" },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Major Exhibits at Milwaukee County Zoo",
    description: "Major animal exhibits and habitats at Milwaukee County Zoo verified open as of November 2026.",
    numberOfItems: exhibits.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: exhibits.map((e, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "TouristAttraction",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#key-facts", "#faq"] },
        name: e.name,
        description: e.what,
        isAccessibleForFree: false,
        address: { "@type": "PostalAddress", streetAddress: "10001 W Bluemound Rd", addressLocality: "Milwaukee", addressRegion: "WI", postalCode: "53226", addressCountry: "US" },
      },
    })),
  },
};

export default function MilwaukeeCountyZoo() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Milwaukee County Zoo 2026 Guide | Hours, Tickets, Tips</title>
        <meta name="description" content="The definitive Milwaukee County Zoo 2026 guide: verified hours, flex-pricing tickets, every major exhibit, ride costs, animal demo times, events and parking." />
        <meta name="keywords" content="milwaukee county zoo, milwaukee zoo, milwaukee zoo hours, milwaukee zoo tickets, milwaukee zoo admission 2026, milwaukee zoo parking, adventure africa milwaukee, big cat country, apes of africa, wild lights milwaukee zoo, boo at the zoo, zoo brew milwaukee, zoo pass milwaukee, milwaukee with kids" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/milwaukee-county-zoo" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee County Zoo 2026 Guide | Hours, Tickets, Tips" key="og:title" />
        <meta property="og:description" content="Verified 2026 Milwaukee County Zoo guide — hours, flex-pricing tickets, exhibits, rides, animal demos, events and parking." key="og:description" />
        <meta property="og:url" content="https://www.discover-milwaukee.com/milwaukee-county-zoo" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/milwaukee-county-zoo-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Milwaukee County Zoo 2026 Guide — hours, tickets, exhibits, events." key="og:image:alt" />
        <meta property="article:published_time" content="2026-01-15T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-11-04T00:00:00-06:00" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="Things to Do" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee County Zoo 2026 Guide | Hours, Tickets, Tips" key="twitter:title" />
        <meta name="twitter:description" content="Verified 2026 guide — hours, flex pricing, every major exhibit, ride costs, demo times, events and parking." key="twitter:description" />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/milwaukee-county-zoo-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.attraction) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />
      <Breadcrumbs />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <main id="main-content" tabIndex={-1}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orangeLight, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>VERIFIED NOVEMBER 4, 2026 · 2,400+ ANIMALS · 190 ACRES</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.15 }}>Milwaukee County Zoo: The 2026 Visitor Guide</h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
              Everything you actually need before you go — <strong>verified hours</strong>, current <strong>flex-pricing tickets</strong>, every major exhibit and ride, animal demonstration times, the 2026 events calendar, and parking. Audited against milwaukeezoo.org and the Zoological Society of Milwaukee in November 2026.
            </p>
          </div>
        </header>

        <nav aria-label="On this page" style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.green1, borderBottom: `2px solid ${c.green2}`, padding: "12px 16px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", gap: "8px", maxWidth: "1000px", margin: "0 auto", whiteSpace: "nowrap" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "8px 14px", borderRadius: "8px", backgroundColor: "rgba(244,162,97,0.15)", border: `1px solid rgba(244,162,97,0.3)`, display: "inline-block", flexShrink: 0 }}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "40px 24px" }}>
          <NewsletterCTA />


          <div style={{ backgroundColor: c.yellow, padding: "20px", borderRadius: "12px", marginBottom: "40px" }}>
            <p style={{ color: c.green1, fontSize: "14px", fontWeight: "600", margin: 0 }}>
              <strong>Heads up:</strong> Milwaukee County Zoo uses flex pricing — admission rises on peak weekends and holidays. Animal demonstrations, daily show times and ride availability shift with weather and season. Every fact below was re-verified against milwaukeezoo.org and zoosociety.org in November 2026, but always confirm the day's schedule at the gate or on the zoo website before you go.
             Bluemound Road construction runs through July 2027 — use the temporary entrance just east of the main entrance; everyone enters through the U.S. Bank Gathering Place. Parking is now paid by QR code after you park (no entrance booths). By bus: MCTS CONNECT, Route 28 and Route 92 serve the zoo.</p>
          </div>


          <section id="key-facts" aria-labelledby="key-facts-heading" style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "20px 24px", borderRadius: "14px", marginBottom: "32px", scrollMarginTop: "80px" }}>
            <h2 id="key-facts-heading" style={{ color: c.orangeDark, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>Key Facts</h2>
            <dl style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: "10px 18px", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Venue</dt>
              <dd style={{ color: "#444", margin: 0 }}>Milwaukee County Zoo</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Address</dt>
              <dd style={{ color: "#444", margin: 0 }}>10001 W Bluemound Rd, Milwaukee, WI 53226</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Hours now (through Feb 28, 2027)</dt>
              <dd style={{ color: "#444", margin: 0 }}>Weekdays 9:30 a.m.–2:30 p.m.; weekends 9:30 a.m.–4:30 p.m.</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Admission (flex pricing)</dt>
              <dd style={{ color: "#444", margin: 0 }}>Flex pricing by date (see the zoo&apos;s ticket store) · online saves $3 per ticket · kids 2 & under free · county residents $12 adults / $9.50 kids on Wednesdays</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Kids 2 and under</dt>
              <dd style={{ color: "#444", margin: 0 }}>Free, every day</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Parking</dt>
              <dd style={{ color: "#444", margin: 0 }}>$15 per vehicle + service fee & tax, paid by QR code in the lot (free for Zoo Pass members, who still register their plate)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Family Free Days 2026</dt>
              <dd style={{ color: "#444", margin: 0 }}>Nov 7 and Dec 5 remain (Jan 3, Feb 7, Mar 7 and Oct 3 have passed)</dd>
              <dt style={{ color: c.green1, fontWeight: "700" }}>Notable</dt>
              <dd style={{ color: "#444", margin: 0 }}>Small Mammals Building permanently closed (last public day was Nov. 2, 2025); Belle is the sole elephant since April 2026</dd>
            </dl>
            <p style={{ fontSize: "11px", color: "#6d6d6d", margin: "14px 0 0" }}>
              Cross-reference verified <time dateTime="2026-11-04">2026-11-04</time> against each venue&apos;s own website and Milwaukee press.
            </p>
          </section>

          <section id="photos" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-main-entrance.jpg" alt="Milwaukee County Zoo Main Entrance gate and signage on Bluemound Road" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Main Entrance on West Bluemound Road.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-gorilla.jpg" alt="Western lowland gorilla foraging at the Milwaukee County Zoo Stearns Family Apes of Africa habitat" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>A gorilla in the Stearns Family Apes of Africa building.</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-jaguar.jpg" alt="Close-up portrait of a jaguar at the Milwaukee County Zoo big cat habitat" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>A jaguar at the Milwaukee County Zoo (Commons featured picture).</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <img src="/images/zoo/zoo-safari-train.jpg" alt="Milwaukee County Zoo miniature Safari Train carrying visitors through the zoo grounds" loading="lazy" width="800" height="500" style={{ width: "100%", aspectRatio: "8 / 5", objectFit: "cover", borderRadius: "12px", display: "block", backgroundColor: c.beige }} />
                <figcaption style={{ fontSize: "12px", color: "#666", marginTop: "8px", lineHeight: 1.4 }}>The Safari Train winding through the zoo grounds.</figcaption>
              </figure>
            </div>
            <p style={{ fontSize: "11px", color: "#6d6d6d", marginTop: "16px", lineHeight: 1.5 }}>
              Photos via Wikimedia Commons. Credits: Michael Barera (CC-BY-SA-4.0); Antigrandiose (CC-BY-SA-3.0); Cburnett (CC-BY-SA-3.0); David W. Feldbruegge (CC-BY-2.0).
            </p>
          </section>

          <section id="at-a-glance" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Milwaukee County Zoo at a Glance</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Fast answers to the questions most visitors ask before they go.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {atAGlance.map((s) => (
                <div key={s.label} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", color: c.green1, margin: 0, fontWeight: "600", lineHeight: 1.4 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="hours-admission" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Hours & Admission by Season</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The zoo runs three distinct seasons. Buying advance tickets at milwaukeezoo.org saves money over walk-up and skips the entrance line.</p>

            {seasonPricing.map((s) => (
              <div key={s.season} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "20px 22px", marginBottom: "16px" }}>
                <h3 style={{ color: c.green1, fontSize: "19px", fontWeight: "800", margin: "0 0 4px" }}>{s.season}</h3>
                <p style={{ color: c.green2, fontSize: "13px", fontWeight: "600", marginBottom: "14px" }}>{s.window}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "0", border: `1px solid ${c.beige}`, borderRadius: "10px", overflow: "hidden" }}>
                  {s.rows.map((r, i) => (
                    <React.Fragment key={r.who}>
                      <div style={{ backgroundColor: i % 2 === 0 ? c.cream : "white", padding: "10px 14px", fontSize: "13px", color: c.green1, fontWeight: "700", borderBottom: i < s.rows.length - 1 ? `1px solid ${c.beige}` : "none" }}>{r.who}</div>
                      <div style={{ backgroundColor: i % 2 === 0 ? c.cream : "white", padding: "10px 14px", fontSize: "13px", color: "#444", borderBottom: i < s.rows.length - 1 ? `1px solid ${c.beige}` : "none" }}>{r.price}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ backgroundColor: "rgba(244,208,63,0.18)", padding: "14px 16px", borderRadius: "10px", marginTop: "12px" }}>
              <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.6 }}>
                <strong>2026 Family Free Days</strong> (sponsored by Tri City National Bank &amp; FOX6): {familyFreeDays.join(" · ")}. Parking still $15 on free days. Plus <strong>Frosty Free Week Dec 26–30</strong> — free daytime admission for everyone.
              </p>
            </div>
          </section>

          <section id="exhibits" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Major Exhibits & Animal Areas</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>Exhibit status below was re-checked in November 2026. Indoor buildings stay open through winter; seasonal experiences (Giraffe Experience, Goat Yard, Sky Adventure, Animals in Action, Kohl's Wild Theater, the Zoo Expeditions shuttle) wind down between Labor Day and early October and are all closed for the season as of November 2026. The outdoor Hippo Haven pool is closed November through March, and the grizzly bears, brown bears and badger hibernate from mid-November to mid-March.</p>

            {exhibits.map((e) => (
              <div key={e.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "14px", padding: "18px 20px", marginBottom: "14px" }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>{e.name}</h3>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: "0 0 10px" }}>{e.what}</p>
                <div style={{ backgroundColor: "rgba(244,208,63,0.15)", padding: "10px 12px", borderRadius: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#886208", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Best Viewing Time</p>
                  <p style={{ fontSize: "13px", color: c.green1, margin: 0, lineHeight: 1.5 }}>{e.best}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="rides" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Rides, Sky Adventure & Extras</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>None of the rides are included in admission — most run $3–$5 a person and the Sky Adventure complex tops out at $30 for the zip + ropes combo. All prices are plus tax.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {rides.map((r) => (
                <div key={r.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 6px" }}>{r.name}</h3>
                  <p style={{ color: c.orangeDark, fontSize: "14px", fontWeight: "700", margin: "0 0 4px" }}>{r.price}</p>
                  <p style={{ color: c.green2, fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>{r.when}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{r.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Daily Animal Demonstrations & Feedings</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Typical summer (Memorial Day–Labor Day) schedule below — Animals in Action, Kohl's Wild Theater and the Giraffe Experience are closed for the season as of November 2026. The zoo varies these by season and weather — always check the day-of schedule at the entrance kiosk or at the building you want to visit.</p>

            <div style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", overflow: "hidden" }}>
              {dailySchedule.map((d, i) => (
                <div key={d.time + d.item} style={{ display: "grid", gridTemplateColumns: "180px 1fr", borderBottom: i < dailySchedule.length - 1 ? `1px solid ${c.beige}` : "none" }}>
                  <div style={{ backgroundColor: c.green1, color: c.yellow, padding: "12px 14px", fontSize: "13px", fontWeight: "700" }}>{d.time}</div>
                  <div style={{ padding: "12px 14px", fontSize: "14px", color: c.green1, lineHeight: 1.5 }}>{d.item}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Dining at the Zoo</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>The full-service option is <strong>Café 1892 and Coffee Shop</strong>, open daily year-round near the main entrance — sit-down seating, coffee and hot food. In summer, additional snack stands operate seasonally across the park (ice cream, pretzels, hot dogs, churros) including Crust & Copper (brick-oven pizza on Lake Evinrude), Wild Burger & Woody's Custard (near the Aquatic & Reptile Center), Bear Garden and Taco Caja (near the caribou), West End Snacks (West Entrance) and the Cedar Crest Ice Cream Parlor and Snack Barn in the Family Farm.</p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "0" }}>You're allowed to bring your own food and non-alcoholic drinks into the zoo — there are picnic tables throughout the grounds and several covered picnic shelters that can be reserved for groups. No outside alcohol. Each August, the four-day À La Carte at the Zoo festival (held Aug 20–23 in 2026) brings 30+ Milwaukee restaurants and live music on six stages to the park.</p>
          </section>

          <section id="events" style={{ marginBottom: "56px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>2026 Annual Events Calendar</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>2026 dates from milwaukeezoo.org and zoosociety.org, re-checked November 4, 2026. Everything through Boo at the Zoo has already taken place; still ahead are the Nov. 7 and Dec. 5 Family Free Days, Wild Lights (Nov. 20 – Dec. 31), Fantastic Forest (Dec. 1–31) and Frosty Free Week (Dec. 26–30). 2027 dates have not been announced.</p>

            {events.map((e) => (
              <div key={e.name} style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "800", margin: 0 }}>{e.name}</h3>
                  <span style={{ backgroundColor: c.green1, color: c.yellow, padding: "4px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>{e.when}</span>
                </div>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{e.what}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Zoo Pass Memberships (2026 Pricing)</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>Memberships are sold by the Zoological Society of Milwaukee. Every tier includes free zoo admission, free parking ($15/visit value), ride and VR discounts, and free or discounted admission at more than 150 zoos and aquariums nationwide. Pricing below reflects the Feb 2026 update.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {memberships.map((m) => (
                <div key={m.tier} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "16px" }}>
                  <h3 style={{ color: c.green1, fontSize: "16px", fontWeight: "800", margin: "0 0 4px" }}>{m.tier}</h3>
                  <p style={{ color: c.orangeDark, fontSize: "20px", fontWeight: "900", margin: "0 0 8px" }}>{m.price}</p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{m.who}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Parking, Accessibility, Strollers & Lockers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Parking</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>$15 per vehicle plus service fee and tax ($20 for oversized vehicles, buses and RVs). The Zoo switched to license-plate-based parking on April 21, 2026 and no longer uses the drive-up entrance booths: park first, then scan a QR code in the lot and pay by Apple Pay, Google Pay or credit card (parking ambassadors and Text-to-Pay are available). Parking cannot be pre-purchased yet. Free for Zoo Pass members, who must still register their license plate on every visit. Picnic-area parking is complimentary for group events. The main lots fill on summer Saturdays — arrive before 10:30 a.m. on peak days.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Accessibility</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>All main pathways are paved and ADA-accessible. Wheelchair rental $10. Mobility scooter rental $35 (limited supply — first come, first served). Service animals welcome; pet animals are not.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Strollers</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Stroller rental is $12.50 + tax (holds up to 2 children, 100 lb max) and wagons are $15.50 + tax, rented cashless at the U.S. Bank Gathering Place (kiosk inside in winter, Mobility Tent outside in summer). Bring your own if you prefer — paths are stroller-friendly.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Re-entry & Stamps</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Same-day re-entry is allowed — get a hand stamp from a team member at the Admissions entrance in the U.S. Bank Gathering Place if you need to go to your car for snacks, sunscreen or a stroller swap.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>Outside Food</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>Picnics are welcome — bring food and non-alcoholic drinks. Picnic shelters can be reserved for groups; no outside alcohol or glass.</p>
              </div>
              <div style={{ backgroundColor: c.cream, border: `1px solid ${c.beige}`, padding: "16px", borderRadius: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: c.orangeDark, letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>How Long to Plan</p>
                <p style={{ fontSize: "14px", color: c.green1, margin: 0, lineHeight: 1.5 }}>4–6 hours covers a complete adult-pace visit. With young kids and a Sky Safari, train and carousel ride, plan a full day. Winter visits often fit in 2.5–3 hours since outdoor exhibits are limited.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ color: c.green1, fontSize: "30px", fontWeight: "900", marginBottom: "8px" }}>Nearby in Wauwatosa & West Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>The zoo sits at the Milwaukee–Wauwatosa border on Bluemound Road, with several worthwhile stops within a 10-minute drive.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
              {[
                { name: "Mayfair Mall", detail: "~5 min north on Hwy 100 — the largest indoor mall in metro Milwaukee. Apple Store, food hall, year-round air-conditioned backup plan." },
                { name: "American Family Field", detail: "~7 min east on Bluemound (Story Hill exit). Pair a Brewers afternoon game with a morning zoo visit." },
                { name: "Wauwatosa Village", detail: "~10 min north along the Menomonee River. Walkable independent restaurants and bars (Leff's Lucky Town, Café Hollander) and shops along State Street and Harwood Ave." },
                { name: "Hoyt Park & Pool", detail: "~7 min northeast. Menomonee River trails, summer outdoor pool, and one of the area's best beer-garden patios at the Friends of Hoyt Park beer garden." },
                { name: "Story Hill / Bluemound dining", detail: "Bluemound between the zoo and downtown is dense with options — Maxie's Southern Comfort and Story Hill BKC both anchor the strip." },
                { name: "North Avenue (Tosa)", detail: "Five minutes north. Independent breakfast spots, coffee, and casual dinner restaurants — quieter than the Village strip." },
              ].map((n) => (
                <div key={n.name} style={{ backgroundColor: "white", border: `1px solid ${c.beige}`, borderRadius: "12px", padding: "14px" }}>
                  <h3 style={{ color: c.green1, fontSize: "15px", fontWeight: "800", margin: "0 0 6px" }}>{n.name}</h3>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{n.detail}</p>
                </div>
              ))}
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
                    <span aria-hidden="true" style={{ fontSize: "20px", color: c.orangeDark, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.15s", fontWeight: "300" }}>+</span>
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

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "22px", fontWeight: "900", marginBottom: "16px" }}>Keep Exploring Milwaukee</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/things-to-do-with-kids-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Things to Do With Kids</Link>
              <Link href="/family-weekend-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Family Weekend Guide</Link>
              <Link href="/milwaukee-museums" style={{ display: "block", backgroundColor: c.orange, color: "#1a3d34", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Museums</Link>
              <Link href="/milwaukee-public-museum" style={{ display: "block", backgroundColor: c.orange, color: "#1a3d34", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Milwaukee Public Museum</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Happy Hour Guide</Link>
            </div>
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>Family events, new restaurants, festival schedules and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </div>
        </main>

        <RelatedGuides />
      <Footer />
      </div>
    </>
  );
}
