import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewsletterCTA from "../components/NewsletterCTA";

const SITE = "https://www.discover-milwaukee.com";
const DISPLAY = "'Anton', system-ui, -apple-system, sans-serif";
const BODY = "'Jost', system-ui, -apple-system, sans-serif";

const c = {
  green1: "#2C5235",
  green2: "#547F4B",
  blue2: "#0B77BD",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  yellow: "#F0A623",
  orange: "#D06828",
  tan: "#9E7F4B",
  ink: "#20291F",
};

const MARKET_STATS = [
  { v: "1.5M+", l: "Metro population", src: "U.S. Census, 2024" },
  { v: "#38", l: "U.S. media market", src: "Nielsen DMA, 2024–25" },
  { v: "$78K", l: "Median household income", src: "U.S. Census, 2024" },
  { v: "$2.4B", l: "Annual visitor spending", src: "VISIT Milwaukee, 2024" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Milwaukee a good market for influencer marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Milwaukee is the 38th-largest U.S. media market with a metro population over 1.5 million and a median household income near $78,000. It is large enough to matter and small enough that a single trusted local voice can reach a meaningful share of the audience — which makes local creator partnerships unusually efficient.",
      },
    },
    {
      "@type": "Question",
      name: "How do brands reach the Milwaukee market on social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most efficient route is partnering with established local creators and platforms whose audiences already trust their recommendations. Discover Milwaukee, for example, reaches 37.1 million views a year across Instagram, TikTok, and Facebook with 235,000+ followers, 79.2% aged 18–44.",
      },
    },
    {
      "@type": "Question",
      name: "Why does local influencer marketing work better than national ads in Milwaukee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "National ad buys treat Milwaukee as a fraction of a larger plan and carry no local credibility. A trusted Milwaukee creator delivers native content to people who already act on that creator's recommendations, so the message lands as a tip from a friend rather than an interruption.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to advertise or market in Milwaukee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary by scope, from a single sponsored feature to an ongoing seasonal campaign. Local creator partnerships are typically far more cost-efficient than broad national media buys because the audience is targeted and already engaged. Share your budget in the partner intake form for a tailored plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can brands reach Wisconsin audiences beyond the city of Milwaukee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Milwaukee is the largest metro and media market in Wisconsin, so campaigns anchored in Milwaukee reach a statewide audience of young, active adults across southeastern Wisconsin and beyond.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Milwaukee Influencer Marketing: How Brands Reach the Milwaukee Market (2026)",
  description:
    "A guide for local and national brands on marketing in Milwaukee — market size, demographics, and how to reach the Milwaukee audience through trusted local influencers and social content.",
  author: { "@type": "Organization", name: "Discover Milwaukee", url: SITE },
  publisher: {
    "@type": "Organization",
    name: "Discover Milwaukee",
    logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
  },
  mainEntityOfPage: `${SITE}/milwaukee-influencer-marketing`,
  image: `${SITE}/logo.png`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Milwaukee Influencer Marketing", item: `${SITE}/milwaukee-influencer-marketing` },
  ],
};

function H2({ children }) {
  return (
    <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(26px, 4vw, 38px)", textTransform: "uppercase", color: c.green1, lineHeight: 1.08, margin: "48px 0 18px" }}>
      {children}
    </h2>
  );
}

function P({ children }) {
  return <p style={{ color: c.ink, fontSize: "17px", lineHeight: 1.75, margin: "0 0 18px" }}>{children}</p>;
}

export default function MilwaukeeInfluencerMarketing() {
  return (
    <div style={{ fontFamily: BODY, backgroundColor: c.cream, color: c.ink }}>
      <Head>
        <title>Milwaukee Influencer Marketing & Advertising Guide (2026)</title>
        <meta
          name="description"
          content="A guide for local & national brands on marketing and advertising in Milwaukee and Wisconsin: market size, demographics, and how to reach the Milwaukee audience through trusted local influencers and social content."
        />
        <meta name="keywords" content="marketing in Milwaukee, advertising in Milwaukee, Milwaukee influencer marketing, Wisconsin marketing, Wisconsin advertising, how to advertise in Milwaukee, Milwaukee marketing agency, reach the Milwaukee market" />
        <link rel="canonical" href={`${SITE}/milwaukee-influencer-marketing`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Milwaukee Influencer Marketing: How Brands Reach the Market (2026)" />
        <meta
          property="og:description"
          content="Market size, demographics, and how to reach the Milwaukee audience through trusted local influencers and social content."
        />
        <meta property="og:url" content={`${SITE}/milwaukee-influencer-marketing`} />
        <meta property="og:image" content={`${SITE}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      {/* HERO */}
      <header style={{ backgroundColor: c.cream, padding: "64px 16px 40px", borderBottom: `3px solid ${c.yellow}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: c.orange, fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 14px" }}>
            For Brands & Agencies
          </p>
          <h1 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(34px, 6vw, 60px)", lineHeight: 1.04, textTransform: "uppercase", color: c.green1, letterSpacing: "0.5px", margin: "0 0 18px" }}>
            Milwaukee Influencer Marketing
          </h1>
          <p style={{ color: c.blue2, fontSize: "clamp(17px, 2.4vw, 21px)", fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
            How local and national brands reach the Milwaukee market — and why a trusted local voice does it better than a national ad buy.
          </p>
        </div>
      </header>

      {/* MARKET STAT BAND */}
      <section style={{ backgroundColor: c.green1, padding: "40px 16px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px" }}>
          {MARKET_STATS.map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(30px, 4.5vw, 46px)", color: c.yellow, lineHeight: 1 }}>{s.v}</div>
              <div style={{ color: c.beige, fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "8px" }}>{s.l}</div>
              <div style={{ color: c.green2, fontSize: "11px", marginTop: "4px" }}>{s.src}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "16px 16px 56px" }}>
        <H2>Milwaukee is a market worth buying</H2>
        <P>
          Milwaukee is easy to overlook on a national media plan and expensive to ignore once you know the numbers. The metro area is home to more than 1.5 million people (U.S. Census Bureau, 2024) and ranks as the 38th-largest television market in the country (Nielsen DMA, 2024–25). Median household income in the metro is roughly $78,000 (U.S. Census Bureau, 2024), and the region&apos;s median age of about 39 skews toward working adults with money to spend. As the largest metro and media market in Wisconsin, Milwaukee is also the front door to reaching audiences across the state.
        </P>
        <P>
          It is also a city that spends on going out. Visitors alone poured an estimated $2.4 billion into the local economy in 2024 (VISIT Milwaukee), and the calendar — from Summerfest and the Wisconsin State Fair to a summer full of neighborhood festivals — keeps locals looking for the next place to eat, drink, and gather. That is the demand a brand is stepping into.
        </P>

        <H2>The shift to creator-led marketing</H2>
        <P>
          Advertising dollars have followed attention onto social feeds. The global influencer marketing industry was projected to reach roughly $32.5 billion in 2025, up from about $24 billion the year before (Influencer Marketing Hub, 2025 Benchmark Report). The reason is simple: audiences trust people more than they trust brands, and creator content lives natively in the feed instead of interrupting it.
        </P>
        <P>
          In a market the size of Milwaukee, that dynamic is amplified. The city is big enough to matter to a national brand and small enough that a single trusted local platform can reach a real share of the audience in a week — something no market of ten million can offer.
        </P>

        <H2>Why local trust beats a national ad buy</H2>
        <P>
          A national campaign treats Milwaukee as a rounding error and arrives with no local credibility. A trusted Milwaukee creator does the opposite: the recommendation lands like a tip from a friend, because to the audience it is one. When a local platform people already rely on says a place is worth visiting, they show up — that week, in person, ready to spend.
        </P>
        <P>
          That is the difference between reach and results. Impressions are easy to buy; walked-in customers are not. Local creator partnerships convert because the audience has already decided to take the creator&apos;s word for it.
        </P>

        <H2>How influencer marketing works in Milwaukee</H2>
        <P>
          The formats that perform here are native and specific: in-feed Reels and TikToks built to blend in, stories with direct links, day-of event coverage, giveaways that grow a following while putting product in local hands, and ongoing partnerships that keep a brand top-of-mind across a season. The goal is never a one-off shout — it is repeated, credible presence in the feeds where Milwaukee plans its week.
        </P>
        <P>
          For a running list of who is creating in this market, see our{" "}
          <Link href="/milwaukee-influencers" style={{ color: c.blue2, fontWeight: 600 }}>ranked guide to Milwaukee influencers and creators</Link>.
        </P>

        <H2>Working with Discover Milwaukee</H2>
        <P>
          Discover Milwaukee is the city&apos;s most-followed independent local platform, built by two Milwaukee natives since 2018. It reaches 37.1 million views a year across Instagram, TikTok, and Facebook, with 235,000+ followers and an audience that is 79.2% aged 18–44 — the young professionals, couples, and friend groups who fill rooms and tabs across the city. You can read more{" "}
          <Link href="/about" style={{ color: c.blue2, fontWeight: 600 }}>about who we are</Link>.
        </P>

        {/* FAQ */}
        <H2>Milwaukee marketing FAQs</H2>
        {faqSchema.mainEntity.map((q) => (
          <div key={q.name} style={{ borderBottom: `1px solid ${c.beige}`, padding: "18px 0" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: c.green1, margin: "0 0 8px" }}>{q.name}</h3>
            <p style={{ color: c.ink, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{q.acceptedAnswer.text}</p>
          </div>
        ))}

        {/* CTA CARD */}
        <div style={{ backgroundColor: c.green1, borderRadius: "18px", padding: "36px 28px", textAlign: "center", margin: "40px 0 8px" }}>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(24px, 4vw, 34px)", textTransform: "uppercase", color: c.cream, margin: "0 0 12px" }}>
            Ready to Reach Milwaukee?
          </h2>
          <p style={{ color: c.beige, fontSize: "16px", lineHeight: 1.6, margin: "0 0 24px" }}>
            Tell us your goals in the partner intake form — or view the full media kit first.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
            <Link href="/partner?apply=1" style={{ display: "inline-block", padding: "15px 32px", backgroundColor: c.yellow, color: c.green1, borderRadius: "50px", textDecoration: "none", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Start a Partnership →
            </Link>
            <Link href="/milwaukee-media-kit" style={{ display: "inline-block", padding: "15px 32px", backgroundColor: "transparent", color: c.cream, border: `2px solid ${c.yellow}`, borderRadius: "50px", textDecoration: "none", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>
              View the Media Kit
            </Link>
          </div>
        </div>

        <p style={{ color: c.tan, fontSize: "13px", lineHeight: 1.6, marginTop: "28px" }}>
          Sources: U.S. Census Bureau (2024 population, income, and age estimates); Nielsen DMA rankings (2024–25); VISIT Milwaukee (2024 tourism economic impact); Influencer Marketing Hub (2025 Benchmark Report). Audience figures are Discover Milwaukee&apos;s own 2025 analytics.
        </p>
      </article>

      <NewsletterCTA />
      <Footer />
    </div>
  );
}
