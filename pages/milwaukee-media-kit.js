import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewsletterCTA from "../components/NewsletterCTA";
import { fetchPartners } from "../lib/partners";

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

const HEADLINE_STATS = [
  { v: "37.1M", l: "Views in 2025" },
  { v: "235K+", l: "Followers" },
  { v: "79.2%", l: "Aged 18–44" },
  { v: "#38", l: "U.S. media market" },
];

const FOLLOWERS = [
  { n: "Instagram", v: "151K" },
  { n: "Facebook", v: "41K" },
  { n: "TikTok", v: "43K" },
];

const VIEWS = [
  { n: "Instagram", v: "13.4M" },
  { n: "Facebook", v: "19.5M*" },
  { n: "TikTok", v: "4.2M" },
];

const PACKAGES = [
  { t: "One-Time Feature", d: "A single, native post or story built for your launch, opening, or event — written and shot to blend into the feed, not interrupt it." },
  { t: "Ongoing Partnership", d: "A steady drumbeat of content across the season so Milwaukee sees your brand more than once. Consistency is what turns awareness into foot traffic." },
  { t: "Giveaway Collaboration", d: "A high-engagement giveaway that grows your following while putting your product in local hands. Great for fast list-building and buzz." },
  { t: "Event Partnership", d: "On-the-ground coverage and promotion for your event, grand opening, or activation — before, during, and after the doors open." },
  { t: "Sponsorship", d: "Own a recurring franchise like This Week in Milwaukee or the Festival Guide and stay top-of-mind with the locals planning their week." },
];

const FORMATS = [
  "Native in-feed Reels & TikToks",
  "Stories with swipe-through links",
  "Static & carousel posts",
  "Event day-of coverage",
  "Giveaways & collaborations",
  "Newsletter placement",
];

const MOVES = [
  { title: "37 Million Views That Go Somewhere", body: "Reach only counts if it acts. Ours does — 37.1M views a year from locals who use us to decide where to actually go." },
  { title: "You Inherit the Trust We've Earned", body: "Milwaukee already takes our word for it. Feature with us and that credibility points at you from day one — no warming up a cold audience." },
  { title: "They Show Up Ready to Spend", body: "Our audience is 79% ages 18–44 — locals who try new places, go out midweek, and spend money here. You're reaching the people who fill rooms and tabs." },
];

const DIFFERENTIATORS = [
  "Native content that blends into feeds",
  "Storytelling that feels real",
  "Massive local trust",
  "Multi-platform amplification",
  "Content people actually share",
];

const REELS = [
  {
    group: "National Brands",
    items: [
      { src: "/reels/red-bull.mp4", title: "Red Bull", views: 40783 },
      { src: "/reels/sunnyd-seltzers.mp4", title: "SunnyD Seltzers", views: null },
      { src: "/reels/daylenes-supper-club.mp4", title: "Daylene’s Supper Club", views: 17312 },
      { src: "/reels/oak-creek-grand-opening.mp4", title: "Grand Opening · Oak Creek", views: 30559 },
    ],
  },
  {
    group: "Series",
    items: [
      { src: "/reels/this-weekend-in-milwaukee.mp4", title: "This Weekend in Milwaukee", views: 10042 },
      { src: "/reels/may-date-night.mp4", title: "Date Night in Milwaukee", views: 74575 },
    ],
  },
  {
    group: "Restaurant Groups",
    items: [
      { src: "/reels/winter-dining.mp4", title: "Winter Dining Experiences", views: 63574 },
      { src: "/reels/hidden-gem.mp4", title: "Hidden Gem Feature", views: 103365 },
    ],
  },
  {
    group: "Professional Sports Teams",
    items: [
      { src: "/reels/april-date-night.mp4", title: "Date Night in Milwaukee", views: 116536 },
    ],
  },
  {
    group: "Festivals",
    items: [
      { src: "/reels/strawberry-festival.mp4", title: "Strawberry Festival · Cedarburg", views: 4504 },
      { src: "/reels/german-fest.mp4", title: "German Fest", views: 169396 },
    ],
  },
  {
    group: "Local Markets",
    items: [
      { src: "/reels/sauced-night-market.mp4", title: "SAUCED Night Market", views: 27004 },
    ],
  },
  {
    group: "Activity",
    items: [
      { src: "/reels/summerfest-scavenger-hunt.mp4", title: "Summerfest Scavenger Hunt", views: 13863 },
    ],
  },
];

function formatViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) {
    const k = n / 1000;
    return (k >= 100 ? Math.round(k).toString() : k.toFixed(1).replace(/\.0$/, "")) + "K";
  }
  return n.toString();
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is in the Discover Milwaukee media kit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Audience reach and demographics, per-platform following (Instagram, TikTok, Facebook), partnership package types, content formats, and the brands we have worked with. Discover Milwaukee reached 37.1 million views in 2025 with 235,000+ followers, 79.2% aged 18–44.",
      },
    },
    {
      "@type": "Question",
      name: "How big is Discover Milwaukee's following?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "235,000+ followers across Instagram (151K), Facebook (41K), and TikTok (43K), reaching 37.1 million views in 2025.",
      },
    },
    {
      "@type": "Question",
      name: "What advertising and partnership options are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One-time features, ongoing partnerships, giveaway collaborations, event partnerships, and sponsorships such as This Week in Milwaukee and the Festival Guide. Packages are tailored to your goals and budget — share your details in the partner intake form.",
      },
    },
    {
      "@type": "Question",
      name: "Does Discover Milwaukee work with national brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Discover Milwaukee works with both local Milwaukee businesses and national brands looking to enter or grow in the Milwaukee market through trusted local creators.",
      },
    },
    {
      "@type": "Question",
      name: "How do I advertise or market my business in Milwaukee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most efficient way to advertise in Milwaukee is through a trusted local platform whose audience already acts on its recommendations. Discover Milwaukee reaches 37.1 million views a year across Instagram, TikTok and Facebook. Submit the partner intake form to get a tailored plan.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to advertise with Discover Milwaukee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partnerships are tailored to your goals and budget, from entry-level one-time features to ongoing seasonal campaigns. Share your budget range in the partner intake form for a custom recommendation.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Discover Milwaukee Media Kit — Advertising & Brand Partnerships",
  serviceType: "Influencer marketing, sponsored content and advertising",
  url: `${SITE}/milwaukee-media-kit`,
  description:
    "Media kit for brands and agencies: 37.1M annual views, 235K+ followers across Instagram, TikTok and Facebook, 79.2% aged 18–44. Sponsored content, influencer marketing and event partnerships in the Milwaukee market.",
  provider: {
    "@type": "Organization",
    name: "Discover Milwaukee",
    url: SITE,
    logo: `${SITE}/logo.png`,
    sameAs: [
      "https://instagram.com/discovermilwaukee",
      "https://tiktok.com/@discovermilwaukee",
      "https://www.facebook.com/p/discovermilwaukee-100069844392448/",
    ],
  },
  areaServed: [
    { "@type": "City", name: "Milwaukee", containedInPlace: { "@type": "State", name: "Wisconsin" } },
    { "@type": "State", name: "Wisconsin" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Media Kit", item: `${SITE}/milwaukee-media-kit` },
  ],
};

function Kicker({ children, color = c.orange }) {
  return (
    <p style={{ color, fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 12px" }}>
      {children}
    </p>
  );
}

function SoundIcon({ on }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M19 5a9 9 0 0 1 0 14" />
        </>
      ) : (
        <path d="M17 9l6 6M23 9l-6 6" />
      )}
    </svg>
  );
}

function ReelCard({ src, title, views }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <div
      onClick={toggleSound}
      style={{ position: "relative", borderRadius: "16px", overflow: "hidden", aspectRatio: "9 / 16", backgroundColor: "#000", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 10px 26px rgba(0,0,0,0.28)", cursor: "pointer" }}
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {views != null && (
        <div style={{ position: "absolute", top: "12px", right: "12px", backgroundColor: c.yellow, color: c.green1, fontSize: "12px", fontWeight: 800, padding: "5px 10px", borderRadius: "50px" }}>
          {formatViews(views)} views
        </div>
      )}
      <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", alignItems: "center", gap: "5px", backgroundColor: "rgba(0,0,0,0.55)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "5px 9px", borderRadius: "50px" }}>
        <SoundIcon on={!muted} />
        {muted ? "Tap for sound" : "Sound on"}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "30px 14px 14px", background: "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0))" }}>
        <p style={{ color: "#fff", fontSize: "14px", fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{title}</p>
      </div>
    </div>
  );
}

export default function MediaKitPage() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners()
      .then(setPartners)
      .catch(() => setPartners([]));
  }, []);

  return (
    <div style={{ fontFamily: BODY, backgroundColor: c.cream, color: c.ink }}>
      <Head>
        <title>Milwaukee Media Kit | Advertising & Marketing in Milwaukee, WI</title>
        <meta
          name="description"
          content="Discover Milwaukee's media kit for brands & agencies: 37.1M annual views, 235K+ followers across Instagram, TikTok & Facebook, 79% aged 18–44. Advertising, influencer marketing, sponsored content & event partnerships across Milwaukee and Wisconsin."
        />
        <meta name="keywords" content="advertising in Milwaukee, marketing in Milwaukee, Milwaukee media kit, Milwaukee influencer marketing, Wisconsin advertising, Milwaukee advertising, how to advertise in Milwaukee" />
        <link rel="canonical" href={`${SITE}/milwaukee-media-kit`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Milwaukee Media Kit | Advertise With Discover Milwaukee" />
        <meta
          property="og:description"
          content="37.1M annual views. 235K+ followers. 79% aged 18–44. Reach the Milwaukee market through the city's most trusted local platform."
        />
        <meta property="og:url" content={`${SITE}/milwaukee-media-kit`} />
        <meta property="og:image" content={`${SITE}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      {/* HERO */}
      <header style={{ backgroundColor: c.cream, padding: "72px 16px 56px", borderBottom: `3px solid ${c.yellow}` }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <Kicker>Media Kit · 2026</Kicker>
          <h1 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.02, textTransform: "uppercase", color: c.green1, letterSpacing: "0.5px", margin: "0 0 18px" }}>
            The Milwaukee Media Kit
          </h1>
          <p style={{ color: c.blue2, fontSize: "clamp(17px, 2.4vw, 22px)", fontWeight: 600, maxWidth: "680px", margin: "0 auto 8px" }}>
            Reach the people who decide where Milwaukee eats, drinks, and spends.
          </p>
          <p style={{ color: c.tan, fontSize: "16px", maxWidth: "640px", margin: "0 auto 28px", lineHeight: 1.6 }}>
            Discover Milwaukee is the city&apos;s most-followed independent local platform. For brands — local or national — it&apos;s the fastest way into an engaged, ready-to-spend Milwaukee audience.
          </p>
          <Link
            href="/partner?apply=1"
            style={{ display: "inline-block", padding: "16px 40px", backgroundColor: c.green1, color: c.cream, borderRadius: "50px", textDecoration: "none", fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Start a Partnership →
          </Link>
        </div>
      </header>

      {/* HEADLINE STATS */}
      <section style={{ backgroundColor: c.green1, padding: "44px 16px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px" }}>
          {HEADLINE_STATS.map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(34px, 5vw, 52px)", color: c.yellow, lineHeight: 1 }}>{s.v}</div>
              <div style={{ color: c.beige, fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginTop: "8px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIENCE + PLATFORMS */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Kicker>The Audience</Kicker>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 44px)", textTransform: "uppercase", color: c.green1, margin: 0 }}>
            Locals Who Actually Show Up
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          <div style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "28px" }}>
            <h3 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "22px", textTransform: "uppercase", color: c.green1, margin: "0 0 18px" }}>Following by Platform</h3>
            {FOLLOWERS.map((p) => (
              <div key={p.n} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "12px 0", borderBottom: `1px solid ${c.beige}` }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: c.ink }}>{p.n}</span>
                <span style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "26px", color: c.orange }}>{p.v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0 0" }}>
              <span style={{ fontSize: "15px", fontWeight: 700, color: c.green1 }}>Total</span>
              <span style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "30px", color: c.green1 }}>235K+</span>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "28px" }}>
            <h3 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "22px", textTransform: "uppercase", color: c.green1, margin: "0 0 18px" }}>Views by Platform (2025)</h3>
            {VIEWS.map((p) => (
              <div key={p.n} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "12px 0", borderBottom: `1px solid ${c.beige}` }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: c.ink }}>{p.n}</span>
                <span style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "26px", color: c.blue2 }}>{p.v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0 0" }}>
              <span style={{ fontSize: "15px", fontWeight: 700, color: c.green1 }}>Total</span>
              <span style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "30px", color: c.green1 }}>37.1M</span>
            </div>
            <p style={{ color: c.tan, fontSize: "11px", marginTop: "12px", marginBottom: 0 }}>*Facebook projected from 11/25 onward.</p>
          </div>

          <div style={{ backgroundColor: c.yellow, borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "56px", color: c.green1, lineHeight: 1 }}>79.2%</div>
            <div style={{ color: c.green1, fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginTop: "6px" }}>Aged 18–44</div>
            <p style={{ color: c.green1, fontSize: "14px", lineHeight: 1.6, marginTop: "16px", marginBottom: 0 }}>
              Young professionals, couples, and groups of friends who try new places, go out midweek, and spend locally.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND WALL */}
      <section style={{ backgroundColor: "#fff", borderTop: `1px solid ${c.beige}`, borderBottom: `1px solid ${c.beige}`, padding: "56px 16px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <Kicker>Proof</Kicker>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(26px, 4vw, 40px)", textTransform: "uppercase", color: c.green1, margin: "0 0 28px" }}>
            Brands That Trust Us
          </h2>
          {partners.length > 0 ? (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
                {partners.map((p, i) => (
                  <a
                    key={p.id || i}
                    href={p.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "88px", height: "88px", backgroundColor: c.cream, border: `1px solid ${c.beige}`, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", textDecoration: "none", flexShrink: 0 }}
                  >
                    {p.logoUrl ? (
                      <img src={p.logoUrl} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    ) : (
                      <span style={{ color: c.green1, fontSize: "10px", fontWeight: 700, textAlign: "center" }}>{p.name}</span>
                    )}
                  </a>
                ))}
              </div>
              <p style={{ color: c.tan, fontSize: "14px", fontStyle: "italic", marginTop: "20px", marginBottom: 0 }}>
                {partners.length} brands and counting.
              </p>
            </>
          ) : (
            <p style={{ color: c.tan, fontSize: "15px", margin: 0 }}>
              From neighborhood gems to household names — see the full roster on our{" "}
              <Link href="/partner?apply=1" style={{ color: c.blue2, fontWeight: 600 }}>partner page</Link>.
            </p>
          )}
        </div>
      </section>

      {/* WHEN WE POST, MILWAUKEE MOVES */}
      <section style={{ backgroundColor: c.green1, padding: "64px 16px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Kicker color={c.yellow}>What Partnering Actually Does</Kicker>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 44px)", textTransform: "uppercase", color: c.cream, margin: "0 0 14px" }}>
              When We Post, Milwaukee Moves
            </h2>
            <p style={{ color: c.beige, fontSize: "17px", maxWidth: "620px", margin: "0 auto", lineHeight: 1.6 }}>
              Not impressions. Not &quot;engagement.&quot; Real people walking in, booking, and buying — that week.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {MOVES.map((b) => (
              <div key={b.title} style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "28px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <h3 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "20px", textTransform: "uppercase", color: c.yellow, margin: "0 0 10px", lineHeight: 1.15 }}>{b.title}</h3>
                <p style={{ color: c.beige, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "center" }}>
          <div>
            <Kicker>Why Us</Kicker>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(26px, 4vw, 40px)", textTransform: "uppercase", color: c.green1, margin: "0 0 16px" }}>
              What Makes Us Different
            </h2>
            <p style={{ color: c.ink, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
              We don&apos;t do boring. We don&apos;t do stock photos. And we definitely don&apos;t do &quot;Hey guys, check this out&quot; energy. We make content locals actually want to watch — and act on.
            </p>
          </div>
          <div style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderRadius: "16px", padding: "28px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {DIFFERENTIATORS.map((d) => (
                <li key={d} style={{ display: "flex", gap: "10px", padding: "11px 0", borderBottom: `1px solid ${c.beige}`, fontSize: "15px", fontWeight: 600, color: c.ink }}>
                  <span style={{ color: c.orange, fontWeight: 700 }}>—</span>{d}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "18px", padding: "16px", backgroundColor: c.beige, borderRadius: "10px", borderLeft: `4px solid ${c.orange}` }}>
              <p style={{ color: c.green1, fontSize: "15px", fontWeight: 700, margin: 0 }}>When we post about a business, people show up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEE THE WORK */}
      <section style={{ backgroundColor: c.green1, padding: "64px 16px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <Kicker color={c.yellow}>See the Work</Kicker>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 44px)", textTransform: "uppercase", color: c.cream, margin: 0 }}>
              Campaigns We&apos;ve Shot
            </h2>
            <p style={{ color: c.beige, fontSize: "16px", maxWidth: "620px", margin: "12px auto 0", lineHeight: 1.6 }}>
              Real partnerships across every kind of brand — with the view counts to match. This is what showing up on Milwaukee&apos;s feed actually looks like.
            </p>
          </div>
          {REELS.map((cat) => (
            <div key={cat.group} style={{ marginBottom: "52px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
                <h3 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(20px, 3vw, 26px)", textTransform: "uppercase", color: c.yellow, margin: 0, whiteSpace: "nowrap" }}>
                  {cat.group}
                </h3>
                <span style={{ flex: 1, height: "2px", backgroundColor: "rgba(255,255,255,0.15)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "18px" }}>
                {cat.items.map((r) => (
                  <ReelCard key={r.src} src={r.src} title={r.title} views={r.views} />
                ))}
              </div>
            </div>
          ))}
          <p style={{ color: c.beige, fontSize: "13px", fontStyle: "italic", textAlign: "center", margin: "4px 0 0", opacity: 0.7 }}>
            View counts as reported by Instagram. Tap any clip to hear the sound.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Kicker>Ways to Work Together</Kicker>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 44px)", textTransform: "uppercase", color: c.green1, margin: 0 }}>
            Partnership Packages
          </h2>
          <p style={{ color: c.tan, fontSize: "16px", maxWidth: "560px", margin: "12px auto 0", lineHeight: 1.6 }}>
            Every partnership is tailored to your goals and budget. Tell us what you&apos;re after and we&apos;ll build the right mix.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {PACKAGES.map((p) => (
            <div key={p.t} style={{ backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderLeft: `4px solid ${c.orange}`, borderRadius: "14px", padding: "26px" }}>
              <h3 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "21px", textTransform: "uppercase", color: c.green1, margin: "0 0 10px" }}>{p.t}</h3>
              <p style={{ color: c.ink, fontSize: "15px", lineHeight: 1.65, margin: 0 }}>{p.d}</p>
            </div>
          ))}
          <div style={{ backgroundColor: c.green1, borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "21px", textTransform: "uppercase", color: c.yellow, margin: "0 0 10px" }}>Content Formats</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {FORMATS.map((f) => (
                <li key={f} style={{ color: c.cream, fontSize: "14px", lineHeight: 1.9, display: "flex", gap: "8px" }}>
                  <span style={{ color: c.yellow }}>—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY MILWAUKEE strip */}
      <section style={{ backgroundColor: c.beige, padding: "56px 16px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <Kicker color={c.green2}>Why Milwaukee</Kicker>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(24px, 3.6vw, 36px)", textTransform: "uppercase", color: c.green1, margin: "0 0 14px" }}>
            A Market Worth Buying
          </h2>
          <p style={{ color: c.ink, fontSize: "16px", lineHeight: 1.7, margin: "0 0 20px" }}>
            A metro of more than 1.5 million people, the 38th-largest media market in the country, and a local audience that trusts local voices. See how brands win here.
          </p>
          <Link href="/milwaukee-influencer-marketing" style={{ color: c.blue2, fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
            Read: Marketing in the Milwaukee Market →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <Kicker>Questions</Kicker>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 44px)", textTransform: "uppercase", color: c.green1, margin: 0 }}>
            Advertising in Milwaukee, Answered
          </h2>
        </div>
        {faqSchema.mainEntity.map((q) => (
          <div key={q.name} style={{ borderBottom: `1px solid ${c.beige}`, padding: "20px 0" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: c.green1, margin: "0 0 8px" }}>{q.name}</h3>
            <p style={{ color: c.ink, fontSize: "15px", lineHeight: 1.65, margin: 0 }}>{q.acceptedAnswer.text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: c.green1, padding: "72px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <Kicker color={c.yellow}>Let&apos;s Talk</Kicker>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(30px, 5vw, 48px)", textTransform: "uppercase", color: c.cream, margin: "0 0 16px" }}>
            Put Your Brand in Front of Milwaukee
          </h2>
          <p style={{ color: c.beige, fontSize: "17px", lineHeight: 1.6, margin: "0 0 28px" }}>
            Tell us your goals and budget in the intake form — we&apos;ll come back with a tailored recommendation.
          </p>
          <Link
            href="/partner?apply=1"
            style={{ display: "inline-block", padding: "18px 44px", backgroundColor: c.yellow, color: c.green1, borderRadius: "50px", textDecoration: "none", fontWeight: 700, fontSize: "17px", textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Start a Partnership →
          </Link>
        </div>
      </section>

      <NewsletterCTA />
      <Footer />
    </div>
  );
}
