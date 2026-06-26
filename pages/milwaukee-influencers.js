import React, { useState } from "react";
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

const CATEGORIES = {
  food: { label: "Food & Drink", color: "#e76f51" },
  lifestyle: { label: "Lifestyle & Family", color: "#2a9d8f" },
  sports: { label: "Sports", color: "#264653" },
  music: { label: "Music & Nightlife", color: "#9d4edd" },
  arts: { label: "Arts & Culture", color: "#e9c46a" },
  news: { label: "Personalities & Media", color: "#457b9d" },
};

// `rank` is the creator's combined Instagram + TikTok following, used only to
// order the roster and bucket it into tiers. We deliberately display tiers, not
// exact counts, because follower numbers drift daily and our standard is to never
// publish a figure that could be wrong.
const creators = [
  { ig: "herodw_", tt: "herodw", name: "Hero DW", category: "news", rank: 8500000, bio: "A Wisconsin comedian and content creator whose skits and social experiments rack up millions of views. Big-hearted comedy with Midwest roots." },
  { ig: "trixiemattel", tt: "trixie", name: "Trixie Mattel", category: "music", rank: 7200000, bio: "Milwaukee-born and Wisconsin-raised, Trixie Mattel went from local stages to winning RuPaul's Drag Race, selling out music tours, and building a cosmetics empire. The 414's biggest drag superstar." },
  { ig: "tristanj22", tt: "tristanjass22", name: "TJass (Tristan Jass)", category: "sports", rank: 5600000, bio: "A Kenosha-bred basketball creator whose between-the-legs layups built a global following. Southeast Wisconsin's hooper-turned-internet phenomenon." },
  { ig: "charlieberens", tt: "charlieberens", name: "Charlie Berens", category: "news", rank: 4548702, bio: "Charlie Berens turned Wisconsin nice into a national act, the Manitowoc Minute, comedy specials, and tours that sell out. The state's funniest export, ope and all." },
  { ig: "lakeyah", tt: "lakeyah", name: "Lakeyah", category: "music", rank: 3200000, bio: "A Milwaukee-born rapper signed to Quality Control and Motown, turning city grit into national bars. Homegrown talent on a much bigger stage." },
  { ig: "schizophrenichippie", tt: "schizophrenichippie", name: "Kody Green", category: "lifestyle", rank: 1753000, bio: "A Wisconsin mental-health advocate living openly with schizophrenia and reaching millions with honesty and hope. Hard conversations, handled with heart." },
  { ig: "emiliexfosters", tt: "emiliexfosters", name: "Emilie Rackovan", category: "lifestyle", rank: 971900, bio: "A Milwaukee mom sharing the real, joyful story of fostering and adoption. Family life with the camera rolling." },
  { ig: "itsmyaap", tt: "myamyaa8", name: "Myaap", category: "music", rank: 840600, bio: "A Milwaukee rapper with a fast-rising following and a sound built for the city. 414 energy, full volume." },
  { ig: "khloekuriatnyk", tt: "khloekuriatnyk", name: "Khloe Kuriatnyk", category: "lifestyle", rank: 638500, bio: "A Milwaukee creator sharing style, motherhood, and everyday life with a loyal following. Relatable, polished, and all MKE." },
  { ig: "414bigfrank", tt: "414bigfrank23", name: "Big Frank", category: "music", rank: 617400, bio: "One of Milwaukee's hottest rappers and a driving force behind the city's signature 'lowend' clap sound. His breakout 'Backpack' went viral nationwide, but he's 414 to the core — area code right there in the name." },
  { ig: "ike_wynter", tt: "ike_wynter", name: "Ike Wynter", category: "arts", rank: 517600, bio: "A Milwaukee eco-artist who turns reclaimed and salvaged wood into striking sculptures — from pop-culture pieces like SpongeBob and the Rugrats to custom work for the likes of Mike Tyson, NFL players, and the Brewers. Featured on NBC Nightly News and TMJ4, he's Milwaukee craftsmanship with a national audience." },
  { ig: "realbalanced", tt: "realbalanced", name: "Sara Nelson", category: "food", rank: 450800, bio: "The Wisconsin recipe developer behind Real Balanced, making low-carb and keto cooking actually doable. Tested recipes, no fuss." },
  { ig: "violetsaretommy", tt: "violetsaretommy", name: "Tommy Violet", category: "news", rank: 272600, bio: "Milwaukee's self-styled 'unofficial Mayor' — a musician and creator who turns everyday city life into a love letter to the 414. If it's happening in Milwaukee, Tommy's probably there." },
  { ig: "imcertifiedtrapper", tt: "imcertifiedtrapper", name: "Certified Trapper", category: "music", rank: 220925, bio: "A Wisconsin rapper whose offbeat style broke out online. Viral hooks, homegrown origin." },
  { ig: "discovermilwaukee", tt: "discovermilwaukee", name: "Discover Milwaukee", category: "news", rank: 192300, bio: "That's us — Jordan & Todd, the duo behind Discover Milwaukee and your insider's guide to the city. A 2026 Brewers Social Ambassador and former Milwaukee Bucks Ambassador, we cover the events, eats, and people who make the 414 worth talking about, reaching hundreds of thousands across Instagram, TikTok, and Facebook. Hi from this side of the screen." },
  { ig: "reynoldsgareth", tt: "reynoldsgareth", name: "Gareth Reynolds", category: "news", rank: 151500, bio: "A Wisconsin-bred comedian, actor, and co-host of the hit history-comedy podcast 'The Dollop.' Stand-up wit with Midwest DNA." },
  { ig: "s.u.n.n.y.lou", tt: "s.u.n.n.y.lou", name: "Sunny Lou", category: "music", rank: 126500, bio: "A Milwaukee-born audio engineer, DJ, and songwriter at the center of the city's underground hip-hop scene. The sound behind a lot of records you already know." },
  { ig: "mkeeeeeats", tt: "mkeeeeeats", name: "Judy (MKEeeeEats)", category: "food", rank: 120628, bio: "Judy eats, drinks, and runs her way across the city, then hands you the receipts. A 2026 Brewers Ambassador with a feed full of where to go next." },
  { ig: "datboyinc", tt: "datboyinc", name: "INCOGNITO", category: "news", rank: 118117, bio: "INCOGNITO is a national radio personality with deep Milwaukee roots, mic in hand and the city behind him. Full volume, all the time." },
  { ig: "andreaboehlke", tt: "andreaboehlke", name: "Andrea Boehlke", category: "news", rank: 77797, bio: "A Wisconsin-raised TV host and three-time 'Survivor' competitor turned media personality. Random Lake roots, national screen time." },
  { ig: "kristinbrey", tt: "asgoeswisconsin", name: "Kristin Brey", category: "news", rank: 74700, bio: "The voice behind 'As Goes Wisconsin,' cutting through the noise on state politics with sharp, no-spin commentary. Wisconsin's plain-talk host." },
  { ig: "lill.waukee", tt: "lillwaukee", name: "Lillwaukee", category: "food", rank: 69200, bio: "A Milwaukee food account hunting the city's best plates and hidden gems. Your next craving probably lives here." },
  { ig: "djaymando", tt: "djaymando", name: "DJay Mando", category: "music", rank: 64400, bio: "A high-energy Milwaukee DJ who's spun for the Bucks and the Packers. When the building needs to move, he's the one on the ones and twos." },
  { ig: "sophinlaw", tt: "sophinlaw", name: "Soph in Law", category: "news", rank: 61700, bio: "A Milwaukee lawyer turned creator with sharp, funny takes on local culture, the city's housing crunch, and where to eat next. Equal parts counsel and content." },
  { ig: "dudefoods", tt: "dudefoods", name: "Nick (DudeFoods)", category: "food", rank: 59858, bio: "Nick makes rad food and writes about it. Over-the-top recipes, deep Milwaukee roots, and creations you kind of have to see to believe." },
  { ig: "milwaukeeuncut", tt: "milwaukeeuncutpod", name: "Milwaukee Uncut", category: "news", rank: 55300, bio: "A Milwaukee podcast going deep with the people shaping the city — unfiltered conversations, local lens." },
  { ig: "wisconsincheeseplease", tt: "wisconsincheeseplease", name: "Sam Buschman", category: "food", rank: 47676, bio: "A Wisconsin creator celebrating the state's one true love: cheese. Curds, pairings, and dairy-state pride." },
  { ig: "mkemaniaci", tt: "mkemaniaci", name: "Maniaci", category: "news", rank: 43400, bio: "A Milwaukee personality and creator with a fast-growing audience and a feel for what the city's talking about." },
  { ig: "everydaydrew", tt: "", name: "Drew", category: "lifestyle", rank: 41210, bio: "Drew is a Milwaukee-born style guy who turned everyday menswear into a following. Clean fits, local roots, and an eye that earned him 'Best Instagram Account of Milwaukee.'" },
  { ig: "milwaukeephoto", tt: "milwaukeephoto", name: "Meg in MKE", category: "lifestyle", rank: 41204, bio: "Meg eats, drinks, and explores her way across Milwaukee with a camera and hiking-boot energy. Adventure is the whole point." },
  { ig: "sophiaminnaert", tt: "", name: "Sophia Minnaert", category: "sports", rank: 36316, bio: "Sophia covers the Brewers from the field and the booth, Pura Vida energy all season long. Milwaukee baseball from the inside." },
  { ig: "jacob_slade_", tt: "jacob_slade_", name: "Jacob Slade", category: "music", rank: 34217, bio: "Jacob Slade makes ethereal sounds out of Milwaukee, WI. Atmospheric, homegrown, built for headphones." },
  { ig: "tjjdysart", tt: "tjdysart", name: "TJ Dysart", category: "news", rank: 32100, bio: "A WISN-12 News reporter covering Milwaukee's biggest stories, on air and all over your feed. Breaking news with a familiar face." },
  { ig: "wisconsinfoodie", tt: "wisconsinfoodie", name: "Wisconsin Foodie", category: "food", rank: 32063, bio: "An Emmy-winning PBS and YouTube series that travels the Midwest telling the food stories from our own backyard. Wisconsin's table, on camera." },
  { ig: "ayaidk", tt: "", name: "aya", category: "music", rank: 30307, bio: "aya writes songs and draws when the mood hits, a Milwaukee artist with a quiet, magnetic pull. Give the music a listen." },
  { ig: "natevomhof", tt: "natevomhof", name: "Nate Vomhof", category: "arts", rank: 29534, bio: "Nate is a pharmacist by trade and a photographer by obsession, shooting Milwaukee, and Brutus the dog, in its best light." },
  { ig: "colormesassy", tt: "", name: "Gabi Loomis", category: "lifestyle", rank: 28107, bio: "Gabi is the chaos coordinator of three boys, making mom life cute with wearable outfits and Midwest gems. Real accent, real recs." },
  { ig: "rockwaypottery", tt: "", name: "MaryAnne Roethle", category: "arts", rank: 23251, bio: "MaryAnne throws beautiful, functional pottery out of Wauwatosa since 2019. Everyday objects made by hand, made local." },
  { ig: "zorastephenson", tt: "zorastephenson", name: "Zora Stephenson", category: "sports", rank: 21684, bio: "Zora is an NBC Sports reporter and play-by-play voice, twin mom, and a 'keep a-goin' optimist. Milwaukee sports told with heart." },
  { ig: "djshawna", tt: "djshawna", name: "DJ Shawna", category: "music", rank: 19794, bio: "DJ Shawna is the official DJ of the Bucks, a six-time NBA All-Star DJ, speaker, and founder of Dare To Be. Booked for the moments that matter." },
  { ig: "lemontreecathy", tt: "", name: "Cathy", category: "lifestyle", rank: 19125, bio: "Cathy is an MKE-based recipe maker, mom of four girls, and a wine-and-coffee devotee. Her feed is comfort food you'll actually cook." },
  { ig: "mauriciopaints", tt: "", name: "Mauricio Ramirez", category: "arts", rank: 17600, bio: "Mauricio is a visual artist and muralist blending realism, geometry, and color, on walls across Milwaukee and the country. Big, bold public art." },
  { ig: "cookingwithkelli", tt: "cookingwith.kelli", name: "Kelli Calkins", category: "food", rank: 16536, bio: "A Milwaukee home cook sharing approachable recipes and kitchen wins. Real food, made doable." },
  { ig: "silversspots", tt: "silversspots", name: "Silversspots", category: "food", rank: 15000, bio: "On a mission to become the king of Milwaukee food reviews, one plate at a time. Honest takes, DMs open for your next rec." },
  { ig: "melaniericks", tt: "", name: "Melanie Ricks", category: "sports", rank: 12329, bio: "Melanie works the Bucks sideline as reporter and host, closest seat in the house. Game-night Milwaukee, live." },
  { ig: "munchinginmilwaukee", tt: "munchinginmilwaukee", name: "Munching in Milwaukee", category: "food", rank: 12253, bio: "Eating across Milwaukee one spot at a time, with the recs to prove it. The city's menu, sampled." },
  { ig: "socialcig", tt: "socialcig", name: "Social Cig", category: "music", rank: 12137, bio: "Social Cig is midwest indie skate rock, tour dates and all. Milwaukee's answer to a sweaty, joyful basement show." },
  { ig: "justatastemke", tt: "", name: "Ivon", category: "food", rank: 11922, bio: "Ivon tastes her way through Milwaukee and beyond, bilingual and always chasing the memorable plate. A Brewers Social Ambassador with eyes on the next great bite." },
  { ig: "shotbybasi", tt: "", name: "Basi", category: "arts", rank: 11522, bio: "Basi shoots Milwaukee in stills and motion, a photographer and videographer with a booked calendar and a sharp eye." },
  { ig: "midwestgirladventures", tt: "midwestgirladventures", name: "Tia", category: "lifestyle", rank: 10722, bio: "Tia will travel for food, coffee, and a hiking trail, every time. A Midwest adventurer mapping the good stuff." },
  { ig: "websterx", tt: "", name: "WebsterX", category: "music", rank: 10458, bio: "WebsterX is one of Milwaukee's defining voices in hip-hop, an artist and community builder who helped put the city's sound on the map." },
];

const CREATOR_COUNT = creators.length;

const TIERS = [
  { id: "1m", label: "1 Million+ Followers", min: 1000000 },
  { id: "500k", label: "500K – 1M Followers", min: 500000 },
  { id: "250k", label: "250K – 500K Followers", min: 250000 },
  { id: "100k", label: "100K – 250K Followers", min: 100000 },
  { id: "50k", label: "50K – 100K Followers", min: 50000 },
  { id: "25k", label: "25K – 50K Followers", min: 25000 },
  { id: "10k", label: "10K – 25K Followers", min: 10000 },
];

function tierFor(rank) {
  for (const t of TIERS) {
    if (rank >= t.min) return t.id;
  }
  return "10k";
}

const FILTERS = [
  { id: "all", label: "All" },
  { id: "food", label: "Food & Drink" },
  { id: "lifestyle", label: "Lifestyle & Family" },
  { id: "sports", label: "Sports" },
  { id: "music", label: "Music & Nightlife" },
  { id: "arts", label: "Arts & Culture" },
  { id: "news", label: "Personalities & Media" },
];

const PAGE_URL = "https://www.discover-milwaukee.com/milwaukee-influencers";
const OG_IMAGE = "https://www.discover-milwaukee.com/images/milwaukee-influencers-og.svg";

const igUrl = (h) => `https://www.instagram.com/${h}/`;
const ttUrl = (h) => `https://www.tiktok.com/@${h}`;

const faqs = [
  {
    q: "Who are the biggest social media influencers in Milwaukee?",
    a: "Ranked by combined Instagram and TikTok following, the biggest Milwaukee-area creators include comedian Hero DW, Milwaukee-born drag superstar Trixie Mattel, basketball creator TJass (Tristan Jass), 'Wisconsin nice' comedian Charlie Berens, and rapper Lakeyah. Our full list ranks 51 verified Milwaukee-area creators by their total reach across both platforms.",
  },
  {
    q: "How is this Milwaukee influencer list ranked?",
    a: "Every creator is ranked by their combined Instagram + TikTok following, then grouped into tiers (1 Million+, 500K–1M, 250K–500K, 100K–250K, 50K–100K, 25K–50K, and 10K–25K). We show tiers instead of exact follower counts because those numbers change daily, and we'd rather be accurate than precise.",
  },
  {
    q: "How were these Milwaukee creators chosen and verified?",
    a: "We focused on individual creators and personalities genuinely based in or closely tied to the Milwaukee area, across six categories. Each profile was verified against the creator's public Instagram and TikTok before being included, and every listing links directly to those accounts so you can confirm and follow.",
  },
  {
    q: "Do these creators include professional athletes?",
    a: "No. We intentionally leave out pro athletes, who are expected to carry large followings, and instead highlight the sports reporters, hosts, superfans, and creators who cover Milwaukee teams. The goal is to surface the people building an audience through their content, not their roster spot.",
  },
  {
    q: "Are the follower counts on this page exact?",
    a: "No. We deliberately show follower tiers instead of exact numbers because counts shift constantly across Instagram and TikTok. The tiers give an accurate sense of reach without publishing a figure that could be out of date the moment you read it.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Milwaukee Influencers & Creators: The Definitive 2026 List",
    description:
      "A curated, ranked guide to 51 of the top social media influencers and content creators in the Milwaukee area, ordered by combined Instagram + TikTok following across food, lifestyle, sports, music, arts, and local media.",
    image: OG_IMAGE,
    author: { "@type": "Organization", name: "Discover Milwaukee" },
    publisher: {
      "@type": "Organization",
      name: "Discover Milwaukee",
      logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/images/logo.png" },
    },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com/" },
      { "@type": "ListItem", position: 2, name: "Milwaukee Influencers", item: PAGE_URL },
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Milwaukee Influencers & Creators",
    description:
      "Milwaukee-area social media influencers and content creators ranked by combined Instagram and TikTok following.",
    numberOfItems: CREATOR_COUNT,
    itemListElement: creators.map((cr, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: cr.name,
        description: cr.bio,
        image: `https://www.discover-milwaukee.com/images/creators/${cr.ig}.jpg`,
        sameAs: cr.tt ? [igUrl(cr.ig), ttUrl(cr.tt)] : [igUrl(cr.ig)],
      },
    })),
  },
};

function PlatformLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        border: `1.5px solid ${c.green1}`,
        borderRadius: "20px",
        padding: "5px 12px",
        fontSize: "12px",
        fontWeight: "700",
        color: c.green1,
        textDecoration: "none",
        backgroundColor: "#fff",
      }}
    >
      {label}
    </a>
  );
}

function CreatorCard({ cr }) {
  const cat = CATEGORIES[cr.category];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        backgroundColor: "#fff",
        border: `1px solid ${c.beige}`,
        borderRadius: "16px",
        padding: "16px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <a href={igUrl(cr.ig)} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
        <img
          src={`/images/creators/${cr.ig}.jpg`}
          alt={`${cr.name} (@${cr.ig})`}
          width={72}
          height={72}
          loading="lazy"
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            border: `3px solid ${cat.color}`,
          }}
        />
      </a>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
          <a
            href={igUrl(cr.ig)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: "800", fontSize: "17px", color: c.green1, textDecoration: "none" }}
          >
            {cr.name}
          </a>
          <span style={{ color: c.green2, fontSize: "14px" }}>@{cr.ig}</span>
        </div>
        <span
          style={{
            display: "inline-block",
            margin: "6px 0 8px",
            backgroundColor: cat.color,
            color: "#fff",
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            padding: "3px 10px",
            borderRadius: "20px",
          }}
        >
          {cat.label}
        </span>
        <p style={{ margin: "0 0 12px", fontSize: "14px", lineHeight: 1.5, color: "#3a4a44" }}>{cr.bio}</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PlatformLink href={igUrl(cr.ig)} label="Instagram" />
          {cr.tt ? <PlatformLink href={ttUrl(cr.tt)} label="TikTok" /> : null}
        </div>
      </div>
    </div>
  );
}

export default function MilwaukeeInfluencers() {
  const [filter, setFilter] = useState("all");

  const visible = creators.filter((cr) => filter === "all" || cr.category === filter);

  return (
    <>
      <Head>
        <title>Milwaukee Influencers & Creators: The Ranked 2026 List | Discover Milwaukee</title>
        <meta
          name="description"
          content="The definitive 2026 ranking of Milwaukee's top social media influencers and creators — 51 verified locals ranked by combined Instagram + TikTok following, with direct links to every profile, across food, lifestyle, sports, music, arts, and media."
        />
        <meta
          name="keywords"
          content="Milwaukee influencers, Milwaukee content creators, Milwaukee TikTok, Milwaukee Instagram, MKE influencers, top Milwaukee creators, Milwaukee food bloggers, Wisconsin influencers, Milwaukee social media"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Milwaukee Influencers & Creators: The Ranked 2026 List" key="og:title" />
        <meta
          property="og:description"
          content="51 verified Milwaukee-area creators ranked by combined Instagram + TikTok following, with links to every profile — food, lifestyle, sports, music, arts, and media."
          key="og:description"
        />
        <meta property="og:url" content={PAGE_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Influencers & Creators: The Ranked 2026 List" key="twitter:title" />
        <meta
          name="twitter:description"
          content="51 verified Milwaukee-area creators ranked by combined Instagram + TikTok following, with links to every profile."
          key="twitter:description"
        />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        <meta property="article:published_time" content="2026-06-25" key="article:published_time" />
        <meta property="article:modified_time" content="2026-06-25" key="article:modified_time" />
        <meta property="article:author" content="Discover Milwaukee" key="article:author" />
        <meta property="article:section" content="People" key="article:section" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }} />
      </Head>

      <Nav />

      <header
        style={{
          background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`,
          color: c.cream,
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "13px",
              color: c.yellow,
              fontWeight: "700",
              margin: "0 0 12px",
            }}
          >
            Updated June 2026
          </p>
          <h1 style={{ fontSize: "40px", lineHeight: 1.1, margin: "0 0 16px", fontWeight: "900" }}>
            Milwaukee Influencers &amp; Creators
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.5, margin: 0, opacity: 0.95 }}>
            By the 414, for the 414. {CREATOR_COUNT} creators worth a follow — ranked by their combined Instagram and
            TikTok reach, with links to every profile. Food, lifestyle, sports, music, arts, and the voices that keep
            Milwaukee talking.
          </p>
        </div>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <NewsletterCTA />

        <section id="key-facts" style={{ margin: "8px 0 32px" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#2a3a34" }}>
            Milwaukee punches way above its weight online. This is the city's creator class in one place —{" "}
            {CREATOR_COUNT} verified influencers and personalities, ranked by their combined Instagram and TikTok
            following and grouped into tiers, from Milwaukee-born drag superstar Trixie Mattel and viral comedian Hero
            DW down to the neighborhood food accounts and local reporters worth knowing. We verified every profile
            against its public Instagram and TikTok, linked them directly, and left out pro athletes on purpose. Filter
            by what you're into, or scroll the whole roster top to bottom.
          </p>
        </section>

        {/* Category filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                style={{
                  border: `2px solid ${c.green1}`,
                  backgroundColor: active ? c.green1 : "transparent",
                  color: active ? c.cream : c.green1,
                  borderRadius: "50px",
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Tiered listing */}
        {TIERS.map((tier) => {
          const inTier = visible
            .filter((cr) => tierFor(cr.rank) === tier.id)
            .sort((a, b) => b.rank - a.rank);
          if (inTier.length === 0) return null;
          return (
            <section key={tier.id} id={tier.id} style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  color: c.green1,
                  borderBottom: `3px solid ${c.yellow}`,
                  paddingBottom: "8px",
                  marginBottom: "20px",
                }}
              >
                {tier.label}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {inTier.map((cr) => (
                  <CreatorCard key={cr.ig} cr={cr} />
                ))}
              </div>
            </section>
          );
        })}

        {/* FAQ */}
        <section id="faq" style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "900", color: c.green1, marginBottom: "24px" }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${c.beige}`,
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "16px",
              }}
            >
              <h3 style={{ fontSize: "17px", fontWeight: "800", color: c.green1, margin: "0 0 10px" }}>{f.q}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#3a4a44", margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: c.green2 }}>
            Know a Milwaukee creator who belongs here?{" "}
            <Link href="/partner" style={{ color: c.green1, fontWeight: "700" }}>
              Get in touch
            </Link>
            .
          </p>
        </section>
      </main>

      <footer style={{ backgroundColor: c.green1, color: c.cream, textAlign: "center", padding: "32px 24px" }}>
        <p style={{ margin: 0, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
      </footer>
    </>
  );
}
