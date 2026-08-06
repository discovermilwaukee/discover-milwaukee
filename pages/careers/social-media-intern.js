import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const SITE = "https://www.discover-milwaukee.com";
const APPLY_EMAIL = "todd@discover-milwaukee.com";
const APPLY_MAILTO = `mailto:${APPLY_EMAIL}?subject=Social Media Intern Application`;

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

const DETAILS = [
  { k: "Role", v: "Social Media Intern" },
  { k: "Pay", v: "$20 / hour" },
  { k: "Hours", v: "10–15 / week" },
  { k: "Location", v: "Milwaukee, WI (hybrid)" },
  { k: "Term", v: "Fall–Winter 2026" },
  { k: "Apply by", v: "Aug 30, 2026" },
];

const RESPONSIBILITIES = [
  {
    title: "Content & Social Media",
    items: [
      "Shoot and edit native Reels and TikToks (Edits) that feel like they belong in the feed, not like an ad interrupting it.",
      "Design clean graphics, story templates, and carousels in Canva.",
      "Write captions in our voice and schedule and post across Instagram, TikTok, and Facebook.",
      "Monitor comments and DMs, engage the community, and flag trends worth jumping on fast.",
    ],
  },
  {
    title: "Brand Partnerships & Sales",
    items: [
      "Research and build a pipeline of local and national brands that should be marketing to Milwaukee.",
      "Reach out to prospects and help pitch our partnership packages and media kit.",
      "Help activate partnerships once they're signed — coordinating deliverables, giveaways, and event tie-ins.",
      "Track leads, follow-ups, and results so we always know what's working.",
      "Represent Discover Milwaukee professionally to the businesses we want to work with.",
    ],
  },
  {
    title: "Communications",
    items: [
      "Monitor our inboxes and partnership emails and respond promptly, warmly, and professionally.",
    ],
  },
  {
    title: "Production & Events",
    items: [
      "Get out to openings, festivals, and events around the city to capture content on the ground.",
      "Provide on-camera support and help run photoshoots and activations.",
    ],
  },
  {
    title: "Organization",
    items: [
      "Keep the content calendar moving and asset files organized so nothing slips.",
    ],
  },
];

const QUALIFICATIONS = [
  {
    title: "Logistics",
    items: [
      "Based in the Milwaukee area with reliable transportation to get to restaurants, stores, partners, and events around the city.",
      "Flexible availability for roughly 10–15 hours a week — with the potential to increase based on needs — including nights and weekends as needed to cover events.",
    ],
  },
  {
    title: "Mindset & Work Style",
    items: [
      "A genuine love for Milwaukee — you already know the neighborhoods, the spots, and what makes this city fun.",
      "A self-starter who's comfortable reaching out to businesses. You don't need sales experience, but you can't be shy about the ask.",
      "Flexible and adaptable — no two days look the same here. One day you're shooting at a restaurant, the next you're pitching a partner or covering an event, so you roll with a bit of a different task every day.",
      "Thrives in a fast-paced, trend-driven environment and juggles a few things at once.",
      "Takes feedback well and wants to get better every week.",
    ],
  },
  {
    title: "Skills & Tools",
    items: [
      "Experience managing and running brand social media accounts — planning, posting, and growing a page, whether it's your own, a business's, or a client's.",
      "Comfortable editing in Edits and designing in Canva.",
      "At ease on camera and behind it.",
      "Plugged into social trends and what's performing right now.",
      "Added bonus: filming experience on both iPhones and professional cameras — we shoot on a Sony a7S III.",
      "Bonus points for any sales, marketing, or communications coursework or experience.",
    ],
  },
];

const faqs = [
  {
    question: "Is the Discover Milwaukee social media internship paid?",
    answer: "Yes. This is a paid internship at $20 per hour for roughly 10–15 hours per week, with the potential to increase based on needs, based in Milwaukee.",
  },
  {
    question: "Is the internship remote or hybrid?",
    answer: "It's a hybrid role based in Milwaukee. Some of the work can be done remotely, but a lot of it happens out in the city — at openings, festivals, and events — so you'll need to be local and able to get around town.",
  },
  {
    question: "How long does the internship run?",
    answer: "It runs through the fall and winter of 2026, with a strong possibility of extending into the new year based on performance.",
  },
  {
    question: "Do I need sales experience to apply?",
    answer: "No. Part of this role is helping find and activate brand partnerships, but we care more about curiosity, hustle, and a willingness to reach out to businesses than a formal sales background.",
  },
  {
    question: "How do I apply for the Discover Milwaukee internship?",
    answer: `Email your resume to ${APPLY_EMAIL} with "Social Media Intern Application" and your name in the subject line, and be sure to send us links or files of social content you've created so we can see your creative ability. Applications are reviewed on a rolling basis through August 30, 2026.`,
  },
];

const jobDescriptionHTML = `
<p>Discover Milwaukee is the city's go-to guide for what to eat, drink, and do in MKE. In 2025 our content reached 37.1 million views, and we have built an audience of 235,000+ followers (79.2% aged 18–44) across Instagram, TikTok, and Facebook. We're hiring a part-time Social Media Intern for fall and winter 2026 to help create the content Milwaukee actually watches — and to help find and activate the brand partnerships that fund it.</p>
<p><strong>Pay:</strong> $20/hour. <strong>Hours:</strong> ~10–15/week, with potential to increase based on needs. <strong>Location:</strong> Milwaukee, WI (hybrid). <strong>Term:</strong> Fall–Winter 2026 with possible extension into the new year.</p>
<h3>Responsibilities</h3>
<p>This is a dynamic role — expect your responsibilities to shift based on what we need week to week.</p>
<p><strong>Content & Social Media:</strong> Shoot and edit native Reels and TikToks in Edits, design graphics in Canva, write captions in our voice, post across Instagram/TikTok/Facebook, and manage community engagement.</p>
<p><strong>Brand Partnerships & Sales:</strong> Research and build a pipeline of local and national brands, help pitch our partnership packages and media kit, activate signed partnerships (deliverables, giveaways, event tie-ins), and track leads and results.</p>
<p><strong>Communications:</strong> Monitor inboxes and partnership emails and respond professionally.</p>
<p><strong>Production & Events:</strong> Capture content on the ground at events, provide on-camera support, and help run shoots and activations.</p>
<h3>Qualifications</h3>
<p>Milwaukee-based with reliable transportation to get to restaurants, stores, partners, and events around the city, with availability on nights and weekends as needed. Flexible and adaptable — no two days look the same, so you're comfortable carrying a bit of a different task each day. A self-starter who loves the city and isn't shy about reaching out to businesses; experienced managing and running brand social media accounts (your own, a business's, or a client's); comfortable in Edits and Canva and on camera; and plugged into social trends. Filming experience on both iPhones and professional cameras (we shoot on a Sony a7S III) is an added bonus.</p>
<h3>How to Apply</h3>
<p>Email your resume to ${APPLY_EMAIL} with "Social Media Intern Application" and your name in the subject line. You must also send us links or files of social content you've created (posts, Reels, TikToks, or accounts you've run) so we can see your creative ability. Applications are reviewed on a rolling basis through August 30, 2026.</p>
`;

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Social Media Intern",
  description: jobDescriptionHTML,
  datePosted: "2026-08-03",
  validThrough: "2026-08-30",
  employmentType: ["PART_TIME", "INTERN"],
  hiringOrganization: {
    "@type": "Organization",
    name: "Discover Milwaukee",
    sameAs: SITE,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milwaukee",
      addressRegion: "WI",
      postalCode: "53202",
      addressCountry: "US",
    },
  },
  applicantLocationRequirements: {
    "@type": "AdministrativeArea",
    name: "Milwaukee, Wisconsin, United States",
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      value: 20,
      unitText: "HOUR",
    },
  },
  industry: "Media, Marketing & Advertising",
  directApply: false,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE}/careers/social-media-intern` },
    { "@type": "ListItem", position: 3, name: "Social Media Intern", item: `${SITE}/careers/social-media-intern` },
  ],
};

export default function SocialMediaIntern() {
  const ApplyButton = ({ style }) => (
    <a
      href={APPLY_MAILTO}
      style={{
        display: "inline-block",
        backgroundColor: c.yellow,
        color: c.ink,
        padding: "15px 36px",
        borderRadius: "999px",
        fontWeight: 700,
        textDecoration: "none",
        fontFamily: BODY,
        fontSize: "16px",
        ...style,
      }}
    >
      Apply — Email Your Resume →
    </a>
  );

  const ListBlock = ({ block }) => (
    <div style={{ marginBottom: "26px" }}>
      <h3 style={{ color: c.green2, fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 12px", fontFamily: BODY }}>
        {block.title}
      </h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {block.items.map((item, i) => (
          <li key={i} style={{ position: "relative", paddingLeft: "22px", marginBottom: "10px", color: "#4a4a4a", fontSize: "15px", lineHeight: 1.7, fontFamily: BODY }}>
            <span style={{ position: "absolute", left: 0, top: 0, color: c.orange, fontWeight: 700 }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <Head>
        <title>Social Media Intern (Milwaukee, Part-Time) | Discover Milwaukee Careers</title>
        <meta name="description" content="Discover Milwaukee is hiring a part-time Social Media Intern in Milwaukee for fall/winter 2026. $20/hour, 10–15 hrs/week. Create content and help activate brand partnerships. Email your resume to apply." />
        <meta name="keywords" content="social media intern Milwaukee, marketing internship Milwaukee, part-time social media job Milwaukee, content creator internship Milwaukee, Discover Milwaukee careers, brand partnerships intern Milwaukee" />
        <link rel="canonical" href={`${SITE}/careers/social-media-intern`} />

        <meta property="og:title" content="Social Media Intern — Discover Milwaukee (Part-Time, Fall/Winter 2026)" />
        <meta property="og:description" content="Join Milwaukee's biggest local lifestyle platform. Create content, find and activate brand partnerships. $20/hour, 10–15 hrs/week. Apply now." />
        <meta property="og:url" content={`${SITE}/careers/social-media-intern`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE}/og-best-patios.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh", fontFamily: BODY }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green2} 0%, ${c.green1} 100%)`, padding: "72px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.yellow, fontSize: "13px", fontWeight: 700, letterSpacing: "4px", marginBottom: "16px", fontFamily: BODY, textTransform: "uppercase" }}>We&apos;re Hiring · Fall–Winter 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(40px, 7vw, 68px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "18px", lineHeight: 1.05, letterSpacing: "1px" }}>
              Social Media Intern
            </h1>
            <p style={{ color: c.beige, fontSize: "19px", lineHeight: 1.6, maxWidth: "640px", margin: "0 auto 28px", fontFamily: BODY }}>
              Help create the content Milwaukee actually watches — and help us find and activate the brands that want in. Part-time, paid, and right in the middle of everything happening in MKE.
            </p>
            <ApplyButton />
          </div>
        </header>

        <div style={{ backgroundColor: "#fff", borderBottom: `1px solid ${c.beige}`, padding: "24px" }}>
          <div style={{ maxWidth: "980px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
            {DETAILS.map((d) => (
              <div key={d.k} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: c.tan, letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 4px", fontFamily: BODY }}>{d.k}</p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: c.green1, margin: 0, fontFamily: BODY }}>{d.v}</p>
              </div>
            ))}
          </div>
        </div>

        <main style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>
          <section style={{ marginBottom: "48px" }}>
            <p style={{ color: c.orange, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px", fontFamily: BODY }}>Who We Are</p>
            <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "16px", letterSpacing: "0.5px", lineHeight: 1.1 }}>
              Milwaukee&apos;s Front Row Seat
            </h2>
            <p style={{ color: "#4a4a4a", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px", fontFamily: BODY }}>
              Discover Milwaukee is the city&apos;s go-to guide for what to eat, drink, and do in MKE. When something&apos;s happening — a new restaurant, a festival, a patio worth the wait — we&apos;re the ones telling Milwaukee about it. In 2025 our content reached <strong>37.1 million views</strong>, and we&apos;ve built an audience of <strong>235,000+ followers</strong> across Instagram, TikTok, and Facebook, most of them locals aged 18–44 who actually go do the things we post.
            </p>
            <p style={{ color: "#4a4a4a", fontSize: "16px", lineHeight: 1.8, margin: 0, fontFamily: BODY }}>
              We&apos;re growing, and this internship sits at the center of two things that make us go: creating content people love, and building the brand partnerships that let us keep doing it. You&apos;ll get real reps in both.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <p style={{ color: c.orange, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px", fontFamily: BODY }}>The Role</p>
            <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "24px", letterSpacing: "0.5px", lineHeight: 1.1 }}>
              What You&apos;ll Do
            </h2>
            <p style={{ color: "#4a4a4a", fontSize: "16px", lineHeight: 1.8, marginBottom: "24px", fontFamily: BODY }}>
              This is a dynamic role — expect your responsibilities to shift based on what we need week to week. The list below is where you&apos;ll spend most of your time, but you should be ready to jump on whatever the moment calls for.
            </p>
            {RESPONSIBILITIES.map((block, i) => <ListBlock key={i} block={block} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <p style={{ color: c.orange, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px", fontFamily: BODY }}>The Fit</p>
            <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "24px", letterSpacing: "0.5px", lineHeight: 1.1 }}>
              What We&apos;re Looking For
            </h2>
            {QUALIFICATIONS.map((block, i) => <ListBlock key={i} block={block} />)}
          </section>

          <section id="apply" style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "40px 32px", borderRadius: "18px", textAlign: "center", marginBottom: "48px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.yellow, fontSize: "clamp(24px, 3.5vw, 32px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "14px", letterSpacing: "0.5px" }}>How to Apply</h2>
            <p style={{ color: c.cream, fontSize: "16px", lineHeight: 1.7, marginBottom: "10px", fontFamily: BODY, maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              Email your resume to <a href={APPLY_MAILTO} style={{ color: c.yellow, fontWeight: 700, textDecoration: "none" }}>{APPLY_EMAIL}</a> with <strong>&ldquo;Social Media Intern Application&rdquo;</strong> and your name in the subject line.
            </p>
            <p style={{ color: c.beige, fontSize: "15px", lineHeight: 1.7, marginBottom: "24px", fontFamily: BODY, maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              Along with your resume, <strong>send us links or files of social content you&apos;ve created</strong> — posts, Reels, TikToks, or accounts you&apos;ve run. This part isn&apos;t optional; we want to see your creative ability. Bonus points if you tell us one Milwaukee brand you&apos;d love to see us work with. Applications are reviewed on a rolling basis through <strong>August 30, 2026</strong>.
            </p>
            <ApplyButton />
          </section>

          <section id="faq" style={{ marginBottom: "48px", scrollMarginTop: "80px" }}>
            <h2 style={{ color: c.green1, fontSize: "clamp(28px, 4vw, 38px)", fontFamily: DISPLAY, fontWeight: 400, textTransform: "uppercase", marginBottom: "24px", letterSpacing: "0.5px" }}>Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "16px", backgroundColor: "#fff", padding: "22px", borderRadius: "14px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: 700, marginBottom: "8px", fontFamily: BODY }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0, fontFamily: BODY }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ textAlign: "center" }}>
            <p style={{ color: "#666", fontSize: "15px", fontFamily: BODY, marginBottom: "16px" }}>
              Curious what we build for the brands we partner with?
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/milwaukee-media-kit" style={{ color: c.blue2, fontWeight: 700, textDecoration: "none", fontFamily: BODY }}>View the Media Kit →</Link>
              <Link href="/milwaukee-influencer-marketing" style={{ color: c.blue2, fontWeight: 700, textDecoration: "none", fontFamily: BODY }}>Milwaukee Marketing Guide →</Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
