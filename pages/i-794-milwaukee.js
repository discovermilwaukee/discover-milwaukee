import React from "react";
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
  ink: "#26302c",
};

// The article, exactly as written. Section headers become <h2> anchors;
// { strong } is a fully-bold pull line; everything else is a paragraph.
const body = [
  { p: "A few weeks ago, I was walking through the Historic Third Ward on a beautiful summer afternoon." },
  { p: "Patios were full. Families pushed strollers toward the lakefront. Visitors wandered from shop to shop, stopping every few steps to take photos. It was one of those days that reminds me exactly why I fell in love with Milwaukee." },
  { p: "Then I looked up." },
  { p: "Concrete ramps." },
  { p: "Overpasses." },
  { p: "A highway running through the middle of one of the most vibrant parts of our city." },
  { p: "It made me wonder whether we’ve become so used to it that we’ve stopped asking if there’s a better way." },

  { h2: "Before We Decide", id: "before-we-decide" },
  { p: "Before I go any further, I want to be clear about something." },
  { p: "I’m not an urban planner." },
  { p: "I’m not a transportation engineer." },
  { p: "I’m not an economist." },
  { p: "Those experts have an essential role in this conversation, and I genuinely hope WisDOT, city leaders, developers, neighborhood organizations, business owners, and residents continue asking difficult questions before any decision is made." },
  { p: "My perspective comes from somewhere else." },
  { p: "Sixteen years ago, I came to Milwaukee to attend the University of Wisconsin-Milwaukee. I never expected this city would become so much more than the place where I earned a degree." },
  { p: "It’s where I met my wife." },
  { p: "It’s where I built my career." },
  { p: "It’s where we started Discover Milwaukee, a passion project that has grown into one of the largest independent platforms dedicated to telling Milwaukee’s story." },
  { p: "And today, it’s where we’re raising our family." },
  { p: "Over the years, Discover Milwaukee has highlighted thousands of local businesses, neighborhoods, restaurants, festivals, parks, and experiences, reaching millions of people and helping many see Milwaukee in a completely different light." },
  { p: "Our mission has always been simple." },
  { p: "Help people discover why Milwaukee is worth falling in love with." },
  { p: "Somewhere along the way, I realized I wasn’t just documenting this city anymore." },
  { p: "I was investing in it." },
  { p: "When you spend years walking neighborhoods instead of simply driving between them, talking with the people behind local businesses, and introducing visitors to corners of Milwaukee they never knew existed, you begin to see the city differently." },
  { p: "You stop seeing destinations." },
  { p: "You start seeing connections." },
  { p: "That’s where this perspective comes from." },
  { p: "Not from traffic counts or engineering reports." },
  { p: "From sixteen years of building a life here and wanting the next generation to inherit a city that’s even stronger than the one that gave my family so much." },

  { h2: "More Than a Traffic Debate", id: "more-than-a-traffic-debate" },
  { p: "When Mayor Cavalier Johnson recently shared that he believes keeping the elevated portion of I-794 is the right path, I understood where he was coming from." },
  { p: "His concerns about traffic, neighborhood impacts, taxpayer dollars, and the uncertainty surrounding redevelopment deserve to be taken seriously. They’re exactly the questions a mayor should be asking." },
  { p: "I respect that." },
  { p: "If Milwaukee ever decides to remove I-794, it cannot simply tear something down and hope for the best." },
  { p: "If the result is years of empty lots, stalled investment, or another sea of surface parking, then the critics will have been right." },
  { p: "And if you’re wondering whether Milwaukee really needs another construction project, trust me, I understand. At this point, detours are practically a fifth season in Wisconsin." },
  { p: "But I also think there’s another question that deserves just as much attention." },
  { strong: "What happens if we don’t?" },
  { p: "Because rebuilding what we’ve always had is still a decision." },
  { p: "One that could shape Milwaukee for another fifty years." },

  { h2: "The Milwaukee We Already Believe In", id: "the-milwaukee-we-already-believe-in" },
  { p: "At Discover Milwaukee, we spend every day encouraging people to experience this city the way we’ve come to know it." },
  { p: "Start on the RiverWalk." },
  { p: "Grab lunch in the Historic Third Ward." },
  { p: "Walk to the lakefront." },
  { p: "Catch a Brewers game." },
  { p: "Have dinner in Walker’s Point." },
  { p: "The best days in Milwaukee aren’t spent in one neighborhood." },
  { p: "They’re spent discovering how they all come together." },
  { p: "That’s why this conversation feels so important." },
  { p: "Today, some of Milwaukee’s most vibrant neighborhoods are connected on a map but separated by infrastructure." },
  { p: "The best cities don’t ask you to think about getting from one neighborhood to another." },
  { p: "They simply invite you to keep walking." },
  { p: "Before you know it, you’ve found a coffee shop you weren’t looking for, wandered into a local boutique, discovered a park, or stumbled across a restaurant you’ll recommend to everyone back home." },
  { p: "That’s how people fall in love with cities." },
  { p: "Milwaukee already has everything it needs to create those moments." },
  { p: "An incredible lakefront." },
  { p: "Distinct neighborhoods." },
  { p: "Independent businesses that give every block its own personality." },
  { p: "A food scene that continues to surprise people." },
  { p: "World-class festivals." },
  { p: "What we often lack isn’t character." },
  { p: "It’s connectivity." },

  { h2: "A Chance to Think Bigger", id: "a-chance-to-think-bigger" },
  { p: "The conversation around I-794 has largely centered on traffic." },
  { p: "That’s understandable." },
  { p: "Nobody wants a longer commute." },
  { p: "I don’t either." },
  { p: "But traffic isn’t what makes people fall in love with cities." },
  { p: "Places do." },
  { p: "Neighborhoods do." },
  { p: "Public spaces do." },
  { p: "The feeling that there’s always one more block worth exploring does." },
  { p: "I’m not qualified to estimate the long-term economic impact of redeveloping this corridor, and I won’t pretend to be." },
  { p: "What I do know is that every thriving city I’ve visited gives people a reason to stay just a little longer." },
  { p: "One more coffee." },
  { p: "One more walk." },
  { p: "One more store." },
  { p: "One more meal." },
  { p: "One more memory." },
  { p: "Imagine if downtown, the Historic Third Ward, and the lakefront felt less like separate destinations and more like one continuous experience." },
  { p: "Imagine visitors discovering one more local business because they simply kept walking." },
  { p: "That’s not just good urban design." },
  { p: "That’s good for Milwaukee." },

  { h2: "The Question I Hope We Ask", id: "the-question-i-hope-we-ask" },
  { p: "One thing I appreciate about the Mayor’s perspective is that it forces us to ask difficult questions." },
  { p: "We should." },
  { p: "Traffic studies matter." },
  { p: "Engineering matters." },
  { p: "Economic analysis matters." },
  { p: "But I hope we ask another set of questions too." },
  { p: "Will this make Milwaukee feel more connected?" },
  { p: "Will it help local businesses thrive?" },
  { p: "Will it encourage people to stay downtown a little longer?" },
  { p: "Will it make someone choose Milwaukee over another city?" },
  { p: "Those questions are harder to measure." },
  { p: "That doesn’t make them less important." },
  { p: "Cities compete for people." },
  { p: "Not just cars." },
  { p: "My hope is that WisDOT approaches this as more than a transportation project." },
  { p: "I hope they see it as one of the most significant city-building opportunities Milwaukee has faced in decades." },
  { p: "Whether the final decision is to remove I-794 or preserve it, I hope it’s guided by the boldest thinking we have to offer, not simply the safest." },

  { h2: "The Milwaukee We Leave Behind", id: "the-milwaukee-we-leave-behind" },
  { p: "I don’t pretend to know what the final answer should be." },
  { p: "Maybe every study will conclude that keeping I-794 is ultimately the right decision." },
  { p: "If that’s where we land, I’ll respect it." },
  { p: "But I hope we arrive there because we challenged ourselves to imagine everything Milwaukee could become, not because we were afraid to ask the question." },
  { p: "Sixteen years ago, Milwaukee gave me an opportunity." },
  { p: "It gave me an education." },
  { p: "It gave me a career." },
  { p: "It gave me my wife." },
  { p: "It gave us Discover Milwaukee." },
  { p: "It gave us a place to build our family." },
  { p: "Maybe that’s why I care so much about this decision." },
  { p: "I want the next generation to inherit a Milwaukee that’s even more connected, more welcoming, and more confident than the one that welcomed me." },
  { p: "Because in the end, this conversation isn’t really about a highway." },
  { p: "It’s about whether we believe Milwaukee is worth building for." },
  { p: "I do." },
  { p: "Now let’s build like we believe it." },
];

const sections = body.filter((b) => b.h2).map((b) => ({ href: `#${b.id}`, label: b.h2 }));

const relatedLinks = [
  { href: "/things-to-do-milwaukee", label: "Things to Do in Milwaukee" },
  { href: "/milwaukee-waterfront", label: "Milwaukee Lakefront & Waterfront Guide" },
  { href: "/brewers-game-guide-milwaukee", label: "Brewers Game Guide" },
  { href: "/best-restaurants-milwaukee", label: "Best Restaurants in Milwaukee" },
  { href: "/milwaukee-public-market", label: "Historic Third Ward: Milwaukee Public Market" },
  { href: "/milwaukee-festivals", label: "Milwaukee Festivals" },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "OpinionNewsArticle",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "#article-deck"] },
    headline: "Milwaukee Has a Rare Opportunity. Let’s Not Waste It.",
    alternativeHeadline: "Why the I-794 debate is really a debate about Milwaukee’s future",
    description:
      "Discover Milwaukee co-founder Todd Spence on the I-794 debate — why removing the elevated freeway could reconnect downtown, the Historic Third Ward and the lakefront.",
    image: "https://www.discover-milwaukee.com/images/i-794-milwaukee-og.svg",
    author: {
      "@type": "Person",
      name: "Todd Spence",
      jobTitle: "Co-Founder, Discover Milwaukee",
      worksFor: { "@type": "Organization", name: "Discover Milwaukee", url: "https://www.discover-milwaukee.com" },
    },
    publisher: {
      "@type": "Organization",
      name: "Discover Milwaukee",
      logo: { "@type": "ImageObject", url: "https://www.discover-milwaukee.com/favicon.png" },
    },
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    articleSection: "Opinion",
    keywords:
      "I-794, I-794 Milwaukee, I-794 removal, I-794 teardown, Cavalier Johnson, WisDOT, Historic Third Ward, Milwaukee lakefront, downtown Milwaukee",
    about: [
      { "@type": "Thing", name: "Interstate 794" },
      { "@type": "Place", name: "Milwaukee, Wisconsin" },
    ],
    mainEntityOfPage: "https://www.discover-milwaukee.com/i-794-milwaukee",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", position: 2, name: "I-794 Milwaukee", item: "https://www.discover-milwaukee.com/i-794-milwaukee" },
    ],
  },
};

export default function I794Milwaukee() {
  return (
    <>
      <Head>
        <title>I-794 Milwaukee: Remove or Rebuild? Our Take | Discover MKE</title>
        <meta
          name="description"
          content="Should Milwaukee remove I-794? Discover Milwaukee co-founder Todd Spence on why the elevated freeway debate is really about reconnecting downtown, the Third Ward and the lakefront."
        />
        <meta
          name="keywords"
          content="I-794 Milwaukee, I-794 removal, I-794 teardown, should Milwaukee remove I-794, I-794 debate, Cavalier Johnson I-794, WisDOT I-794, I-794 elevated freeway, Historic Third Ward highway, downtown Milwaukee lakefront, Milwaukee freeway removal, I-794 redevelopment, freeway teardown Milwaukee"
        />
        <link rel="canonical" href="https://www.discover-milwaukee.com/i-794-milwaukee" />

        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:title" content="Milwaukee Has a Rare Opportunity. Let’s Not Waste It." key="og:title" />
        <meta
          property="og:description"
          content="A Discover Milwaukee co-founder on the I-794 debate — and why it’s really a conversation about the future of Milwaukee."
          key="og:description"
        />
        <meta property="og:url" content="https://www.discover-milwaukee.com/i-794-milwaukee" key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:image" content="https://www.discover-milwaukee.com/images/i-794-milwaukee-og.svg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta
          property="og:image:alt"
          content="Opinion: the I-794 debate is really a debate about the future of Milwaukee — Discover Milwaukee."
          key="og:image:alt"
        />
        <meta property="article:published_time" content="2026-07-14T00:00:00-05:00" key="article:published_time" />
        <meta property="article:modified_time" content="2026-07-14T00:00:00-05:00" key="article:modified_time" />
        <meta property="article:author" content="Todd Spence" key="article:author" />
        <meta property="article:section" content="Opinion" key="article:section" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="I-794 Milwaukee: Remove or Rebuild? Our Take" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Should Milwaukee remove I-794? Why the elevated freeway debate is really about reconnecting downtown, the Third Ward and the lakefront."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://www.discover-milwaukee.com/images/i-794-milwaukee-og.svg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <Nav />

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px 52px", textAlign: "center" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "13px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>
              Opinion · July 14, 2026 · I-794 &amp; the Future of Milwaukee
            </p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5.2vw, 52px)", fontWeight: "900", marginBottom: "22px", lineHeight: 1.15 }}>
              Milwaukee Has a Rare Opportunity. Let’s Not Waste It.
            </h1>
            <p id="article-deck" style={{ color: c.beige, fontSize: "18px", lineHeight: 1.7, fontStyle: "italic", maxWidth: "720px", margin: "0 auto 24px" }}>
              Sixteen years ago, Milwaukee became home. It’s where I earned my degree, met my wife, built my career, started Discover Milwaukee, and where my wife and I are now raising our family. I’m not writing this as an urban planner, a transportation engineer, or an economist. I’m writing as someone whose life was built here and who believes the conversation around I-794 is really a conversation about the future of Milwaukee.
            </p>
            <div style={{ borderTop: `1px solid rgba(244,162,97,0.35)`, paddingTop: "18px", maxWidth: "420px", margin: "0 auto" }}>
              <p style={{ color: c.cream, fontSize: "16px", fontWeight: "700", margin: "0 0 2px" }}>By Todd Spence</p>
              <p style={{ color: c.beige, fontSize: "14px", fontStyle: "italic", margin: 0 }}>Co-Founder, Discover Milwaukee</p>
            </div>
          </div>
        </header>

        <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.green1, borderBottom: `2px solid ${c.green2}`, padding: "12px 16px", overflowX: "auto", WebkitOverflowScrolling: "touch" }} aria-label="In this article">
          <div style={{ display: "flex", gap: "8px", maxWidth: "1000px", margin: "0 auto", whiteSpace: "nowrap" }}>
            {sections.map((link) => (
              <a key={link.href} href={link.href} style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "8px 14px", borderRadius: "8px", backgroundColor: "rgba(244,162,97,0.15)", border: `1px solid rgba(244,162,97,0.3)`, display: "inline-block", flexShrink: 0 }}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 24px" }}>
          <NewsletterCTA />

          <article>
            {body.map((item, i) => {
              if (item.h2) {
                return (
                  <h2
                    key={i}
                    id={item.id}
                    style={{ color: c.green1, fontSize: "clamp(24px, 3.4vw, 30px)", fontWeight: "900", lineHeight: 1.25, margin: "44px 0 18px", scrollMarginTop: "70px" }}
                  >
                    {item.h2}
                  </h2>
                );
              }
              if (item.strong) {
                return (
                  <p key={i} style={{ color: c.green1, fontSize: "22px", fontWeight: "900", lineHeight: 1.5, margin: "0 0 22px" }}>
                    {item.strong}
                  </p>
                );
              }
              return (
                <p key={i} style={{ color: c.ink, fontSize: "18px", lineHeight: 1.75, margin: "0 0 20px" }}>
                  {item.p}
                </p>
              );
            })}
          </article>

          <section aria-labelledby="related-heading" style={{ marginTop: "48px", padding: "28px", backgroundColor: "#fff", border: `1px solid ${c.beige}`, borderRadius: "16px" }}>
            <h2 id="related-heading" style={{ color: c.green1, fontSize: "20px", fontWeight: "900", margin: "0 0 16px" }}>Keep Exploring Milwaukee</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "block", padding: "12px 16px", backgroundColor: c.cream, borderRadius: "10px", color: c.green1, fontWeight: "600", fontSize: "15px", textDecoration: "none", border: `1px solid ${c.beige}` }}>
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: "28px", backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New openings, weekend picks, neighborhood deep-dives and the stories shaping Milwaukee — free every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>Subscribe Free</Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", margin: "0 0 8px" }}>© 2026 Discover Milwaukee. Your insider’s guide to MKE.</p>
          <p style={{ color: c.beige, fontSize: "12px", margin: 0, opacity: 0.75, maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            This is an opinion column by Todd Spence, co-founder of Discover Milwaukee. The views expressed are his own. Discover Milwaukee supports an open, fact-driven public conversation about I-794 and welcomes perspectives from WisDOT, city leaders, neighborhood organizations, business owners and residents.
          </p>
        </footer>
      </div>
    </>
  );
}
