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
  food: { label: "Food & Restaurants", color: "#e76f51" },
  lifestyle: { label: "Lifestyle & Local", color: "#2a9d8f" },
  sports: { label: "Sports", color: "#264653" },
  music: { label: "Music & Nightlife", color: "#9d4edd" },
  arts: { label: "Arts & Culture", color: "#e9c46a" },
  news: { label: "News & Personalities", color: "#457b9d" },
};

// Follower counts are used only to bucket and order creators into tiers.
// We intentionally display tiers, not exact counts, because follower numbers
// drift daily and our standard is to never publish a figure that could be wrong.
const creators = [
  // Food & Restaurants
  { handle: "mkeeeeeats", name: "Judy", category: "food", followers: 100028, bio: "Judy eats, drinks, and runs her way across the city, then hands you the receipts. A 2026 Brewers Ambassador with a feed full of where to go next." },
  { handle: "dudefoods", name: "Nick (DudeFoods)", category: "food", followers: 50985, bio: "Nick makes rad food and writes about it. Over-the-top recipes, deep Milwaukee roots, and creations you kind of have to see to believe." },
  { handle: "wisconsinfoodie", name: "Wisconsin Foodie", category: "food", followers: 31008, bio: "An Emmy-winning PBS and YouTube series that travels the Midwest telling the food stories from our own backyard. Wisconsin's table, on camera." },
  { handle: "jmattmke", name: "JMatt", category: "food", followers: 17198, bio: "Milwaukee content made for locals, plus a corgi named Reptar. JMatt founded #HashtagMKE and doubles as a social media coach and mental health advocate." },
  { handle: "justatastemke", name: "Ivon", category: "food", followers: 11922, bio: "Ivon tastes her way through Milwaukee and beyond, bilingual and always chasing the memorable plate. A Brewers Social Ambassador with eyes on the next great bite." },
  { handle: "hangrymke", name: "Jenna", category: "food", followers: 9072, bio: "Jenna structures her days around food, camera always eating first. She works through Milwaukee and beyond one hangry mission at a time." },
  { handle: "lofredrich", name: "Lori Fredrich", category: "food", followers: 8517, bio: "A Milwaukee food storyteller, dining concierge at OnMilwaukee, TMJ4 contributor, and author of the 'Wisconsin Field to Fork' cookbook. A pro's palate." },
  { handle: "ericaexploresmke", name: "Erica", category: "food", followers: 6202, bio: "Erica is always hunting the next thing to do in MKE, taco in one hand and a brewery flight in the other. Casual, curious, all over the city." },
  { handle: "noshmke", name: "NoshMKE", category: "food", followers: 4757, bio: "Eating everything in Milwaukee so you don't have to. NoshMKE is your stand-in at every table worth a visit." },
  { handle: "weezie_eats", name: "Anne", category: "food", followers: 4412, bio: "Anne runs on Midwest food adventures, eggs, burgers, and coffee included. A foodie's foodie working through the city's menu." },
  { handle: "howsheseesmke", name: "Elizabeth", category: "food", followers: 4094, bio: "Elizabeth champions Milwaukee small businesses and the people behind them. A local lens on the shops and spots worth your money." },
  { handle: "milwaukeefoodking", name: "Richard Winter", category: "food", followers: 2752, bio: "Dentist by day, MMA judge on the side, food obsessive always. Richard is on a quest to find the world's best bite, or make it himself." },

  // Lifestyle & Local
  { handle: "everydaydrew", name: "Drew", category: "lifestyle", followers: 41210, bio: "Drew is a Milwaukee-born style guy who turned everyday menswear into a following. Clean fits, local roots, and the eye that earned him 'Best Instagram Account of Milwaukee.'" },
  { handle: "milwaukeephoto", name: "Meg", category: "lifestyle", followers: 38800, bio: "Meg eats, drinks, and explores her way across Milwaukee with a camera and hiking-boot energy. Adventure is the whole point." },
  { handle: "colormesassy", name: "Gabi Loomis", category: "lifestyle", followers: 28107, bio: "Gabi is the chaos coordinator of three boys, making mom life cute with wearable outfits and Midwest gems. Real accent, real recs." },
  { handle: "lemontreecathy", name: "Cathy", category: "lifestyle", followers: 19125, bio: "Cathy is an MKE-based recipe maker, mom of four girls, and a wine-and-coffee devotee. Her feed is comfort food you'll actually cook." },
  { handle: "midwestgirladventures", name: "Tia", category: "lifestyle", followers: 4917, bio: "Tia will travel for food, coffee, and a hiking trail, every time. A Midwest adventurer mapping the good stuff." },
  { handle: "lifestyledbyleena", name: "Leena Emily", category: "lifestyle", followers: 2122, bio: "Leena brings everyday style to moms and millennials, fashion, music, travel, and wellness in one feed. Approachable looks with a creative streak." },

  // Sports
  { handle: "bturang1", name: "Brice Turang", category: "sports", followers: 64620, bio: "Brice Turang plays for the Brewers and lets his game and his faith do the talking. A homegrown look from inside the clubhouse." },
  { handle: "sophiaminnaert", name: "Sophia Minnaert", category: "sports", followers: 36316, bio: "Sophia covers the Brewers from the field and the booth, Pura Vida energy all season long. Milwaukee baseball from the inside." },
  { handle: "zorastephenson", name: "Zora Stephenson", category: "sports", followers: 20357, bio: "Zora is an NBC Sports reporter and play-by-play voice, twin mom, and a 'keep a-goin' optimist. Milwaukee sports told with heart." },
  { handle: "melaniericks", name: "Melanie Ricks", category: "sports", followers: 12329, bio: "Melanie works the Bucks sideline as reporter and host, closest seat in the house. Game-night Milwaukee, live." },
  { handle: "nathan.marzion", name: "Nathan Marzion", category: "sports", followers: 4007, bio: "Bucks in Six, every time. Nathan is a Marquette grad turned full-time Milwaukee hoops believer." },
  { handle: "frontrowamy", name: "Front Row Amy", category: "sports", followers: 3117, bio: "Front Row Amy is a fixture at the ballpark, baseball's favorite bubbler. Brewers superfandom in human form." },
  { handle: "eric_nehm", name: "Eric Nehm", category: "sports", followers: 1306, bio: "Eric covers the Bucks beat for The Athletic, the reporting locals trust. Deep, sourced, and steady all season." },

  // Music & Nightlife
  { handle: "ayaidk", name: "aya", category: "music", followers: 30307, bio: "aya writes songs and draws when the mood hits, a Milwaukee artist with a quiet, magnetic pull. Give the music a listen." },
  { handle: "jacob_slade_", name: "Jacob Slade", category: "music", followers: 21617, bio: "Jacob Slade makes ethereal sounds out of Milwaukee, WI. Atmospheric, homegrown, built for headphones." },
  { handle: "djshawna", name: "DJ Shawna", category: "music", followers: 13791, bio: "DJ Shawna is the official DJ of the Bucks, a six-time NBA All-Star DJ, speaker, and founder of Dare To Be. Booked for the moments that matter." },
  { handle: "websterx", name: "WebsterX", category: "music", followers: 10458, bio: "WebsterX is one of Milwaukee's defining voices in hip-hop, an artist and community builder who helped put the city's sound on the map." },
  { handle: "socialcig", name: "Social Cig", category: "music", followers: 10358, bio: "Social Cig is midwest indie skate rock, tour dates and all. Milwaukee's answer to a sweaty, joyful basement show." },
  { handle: "djbizzon", name: "DJ Bizzon", category: "music", followers: 8181, bio: "DJ Bizzon is a Milwaukee turntablist and Twitch Ambassador, self-proclaimed Yam Provider. Crate-digging energy on and offline." },

  // Arts & Culture
  { handle: "natevomhof", name: "Nate Vomhof", category: "arts", followers: 27942, bio: "Nate is a pharmacist by trade and a photographer by obsession, shooting Milwaukee, and Brutus the dog, in its best light." },
  { handle: "rockwaypottery", name: "MaryAnne Roethle", category: "arts", followers: 23251, bio: "MaryAnne throws beautiful, functional pottery out of Wauwatosa since 2019. Everyday objects made by hand, made local." },
  { handle: "mauriciopaints", name: "Mauricio Ramirez", category: "arts", followers: 17600, bio: "Mauricio is a visual artist and muralist blending realism, geometry, and color, on walls across Milwaukee and the country. Big, bold public art." },
  { handle: "shotbybasi", name: "Basi", category: "arts", followers: 11522, bio: "Basi shoots Milwaukee in stills and motion, a photographer and videographer with a booked calendar and a sharp eye." },
  { handle: "theuttkes", name: "Shannon & TJ Uttke", category: "arts", followers: 3806, bio: "Shannon and TJ are the Uttkes, Milwaukee photographers making real pictures of happy people. Genuine moments, beautifully kept." },
  { handle: "fred_the_artist", name: "Fred Kaems", category: "arts", followers: 3251, bio: "Fred Kaems is a Milwaukee muralist and a lover of life, husband and father first. Color on the walls, heart in the work." },
  { handle: "reginaldbaylorstudio", name: "Reginald Baylor", category: "arts", followers: 2137, bio: "Reginald Baylor is a Milwaukee artist known for bold, graphic work and a studio practice that's pure imagination. A local original." },

  // News & Personalities
  { handle: "charlieberens", name: "Charlie Berens", category: "news", followers: 1448702, bio: "Charlie Berens turned Wisconsin nice into a national act, the Manitowoc Minute, comedy specials, and tours that sell out. The state's funniest export, ope and all." },
  { handle: "datboyinc", name: "INCOGNITO", category: "news", followers: 108017, bio: "INCOGNITO is a national radio personality with deep Milwaukee roots, mic in hand and the city behind him. Full volume, all the time." },
  { handle: "tarikmoody", name: "Tarik Moody", category: "news", followers: 3572, bio: "Tarik runs digital at Radio Milwaukee and Hyfin, hosts Rhythm Lab Radio, and contributes to NPR Music. A tastemaker's tastemaker." },
  { handle: "promiseipromise", name: "PROMISE", category: "news", followers: 3282, bio: "PROMISE is an award-winning radio host, comedian, and community advocate. 'It's not a threat, it's a promise.'" },
  { handle: "briajonestv", name: "Bria Jones", category: "news", followers: 2704, bio: "Bria Jones is an Emmy-winning journalist and FOX6 Weekend WakeUp anchor. Milwaukee mornings, in good hands." },
];

const TIERS = [
  { id: "100k", label: "100K+ Followers", min: 100000 },
  { id: "50k", label: "50K–100K Followers", min: 50000 },
  { id: "25k", label: "25K–50K Followers", min: 25000 },
  { id: "10k", label: "10K–25K Followers", min: 10000 },
  { id: "under10k", label: "Under 10K Followers", min: 0 },
];

function tierFor(followers) {
  for (const t of TIERS) {
    if (followers >= t.min) return t.id;
  }
  return "under10k";
}

const FILTERS = [
  { id: "all", label: "All" },
  { id: "food", label: "Food & Restaurants" },
  { id: "lifestyle", label: "Lifestyle & Local" },
  { id: "sports", label: "Sports" },
  { id: "music", label: "Music & Nightlife" },
  { id: "arts", label: "Arts & Culture" },
  { id: "news", label: "News & Personalities" },
];

const PAGE_URL = "https://www.discover-milwaukee.com/milwaukee-influencers";
const OG_IMAGE = "https://www.discover-milwaukee.com/images/milwaukee-influencers-og.svg";

const faqs = [
  {
    q: "Who are the top social media influencers in Milwaukee?",
    a: "Milwaukee's creator scene spans food, lifestyle, sports, music, arts, and local media. Some of the most-followed include comedian Charlie Berens, radio personality INCOGNITO, food creator MKEeeeEats, Brewers infielder Brice Turang, and recipe maker DudeFoods. Our list features 43 verified Milwaukee-area creators organized by follower tier.",
  },
  {
    q: "How is this Milwaukee influencer list organized?",
    a: "Creators are grouped into follower tiers (100K+, 50K–100K, 25K–50K, 10K–25K, and under 10K) rather than by exact follower counts, since those numbers change daily. You can also filter the full list by category.",
  },
  {
    q: "How were these Milwaukee creators chosen?",
    a: "We focused on individual creators and personalities who are genuinely based in or closely tied to the Milwaukee area, across six categories. Each profile was verified against the creator's public Instagram before being included.",
  },
  {
    q: "Are these follower counts exact?",
    a: "No. We deliberately show follower tiers instead of exact numbers because counts shift constantly. The goal is an accurate sense of reach without publishing a figure that could be out of date the moment you read it.",
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Milwaukee Influencers & Creators: The Definitive 2026 List",
    description:
      "A curated guide to 43 of the top social media influencers and content creators in the Milwaukee area, organized by follower tier across food, lifestyle, sports, music, arts, and local media.",
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
    itemListElement: creators
      .slice()
      .sort((a, b) => b.followers - a.followers)
      .map((cr, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: cr.name,
          description: cr.bio,
          image: `https://www.discover-milwaukee.com/images/creators/${cr.handle}.jpg`,
          sameAs: `https://www.instagram.com/${cr.handle}/`,
        },
      })),
  },
};

function CreatorCard({ cr }) {
  const cat = CATEGORIES[cr.category];
  return (
    <a
      href={`https://www.instagram.com/${cr.handle}/`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        backgroundColor: "#fff",
        border: `1px solid ${c.beige}`,
        borderRadius: "16px",
        padding: "16px",
        textDecoration: "none",
        color: c.green1,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={`/images/creators/${cr.handle}.jpg`}
        alt={`${cr.name} (@${cr.handle})`}
        width={72}
        height={72}
        loading="lazy"
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
          border: `3px solid ${cat.color}`,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: "800", fontSize: "17px" }}>{cr.name}</span>
          <span style={{ color: c.green2, fontSize: "14px" }}>@{cr.handle}</span>
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
        <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5, color: "#3a4a44" }}>{cr.bio}</p>
      </div>
    </a>
  );
}

export default function MilwaukeeInfluencers() {
  const [filter, setFilter] = useState("all");

  const visible = creators.filter((cr) => filter === "all" || cr.category === filter);

  return (
    <>
      <Head>
        <title>Milwaukee Influencers & Creators: The 2026 List | Discover Milwaukee</title>
        <meta
          name="description"
          content="The definitive 2026 guide to Milwaukee's top social media influencers and creators — 43 verified locals across food, lifestyle, sports, music, arts, and media, organized by follower tier."
        />
        <meta
          name="keywords"
          content="Milwaukee influencers, Milwaukee content creators, Milwaukee Instagram, MKE influencers, Milwaukee food bloggers, Milwaukee social media"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Milwaukee Influencers & Creators: The 2026 List" key="og:title" />
        <meta
          property="og:description"
          content="43 verified Milwaukee-area creators across food, lifestyle, sports, music, arts, and media — organized by follower tier."
          key="og:description"
        />
        <meta property="og:url" content={PAGE_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Milwaukee Influencers & Creators: The 2026 List" key="twitter:title" />
        <meta
          name="twitter:description"
          content="43 verified Milwaukee-area creators across six categories, organized by follower tier."
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
            By the 414, for the 414. The 43 creators worth a follow — food, lifestyle, sports, music, arts, and the
            voices that keep Milwaukee talking. Grouped by reach, sorted by clout.
          </p>
        </div>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <NewsletterCTA />

        <section id="key-facts" style={{ margin: "8px 0 32px" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#2a3a34" }}>
            Milwaukee punches way above its weight online. From a comedian who made Wisconsin nice go national to the
            food creators logging every fish fry and old fashioned, this is the city's creator class in one place. We
            verified all 43 profiles against their public Instagram, then grouped them into follower tiers — because
            real numbers move daily, and we'd rather be accurate than precise. Filter by what you're into, or scroll
            the whole roster top to bottom.
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
            .filter((cr) => tierFor(cr.followers) === tier.id)
            .sort((a, b) => b.followers - a.followers);
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
                  <CreatorCard key={cr.handle} cr={cr} />
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
