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
// { strong } is a fully-bold pull line; { p } may be a string or JSX (for
// inline emphasis).
const body = [
  { p: "A few weeks ago, I was walking through the Historic Third Ward on one of those summer afternoons. The patios were busy, people wandered in and out of shops, and families and friends were sharing meals and drinks on the local patios. It felt alive, and honestly, it made me stop for a second just to take it all in." },
  { p: "Then I looked down Broadway." },
  { p: (<>I saw the concrete ramps, the overpasses, and the stretch of I-794 cutting through the middle of it all. I remember standing there thinking, <em>Have we just gotten used to this?</em> found myself wondering what this part of the city could feel like if it brought people together instead of dividing them.</>) },
  { p: "That question stayed with me long after I left. It’s the reason I started writing this." },

  { h2: "Why I’m Writing This", id: "why-im-writing-this" },
  { p: "Before I go any further, I want to be clear about something." },
  { p: "I’m not an urban planner, a transportation engineer, or an economist. The people who do those jobs know far more than I ever will, and I genuinely hope WisDOT, city leaders, developers, neighborhood organizations, business owners, and residents continue asking hard questions before any decision is made." },
  { p: "My perspective comes from years of exploring Milwaukee through Discover Milwaukee." },
  { p: "Our goal has always been simple; help people experience this city beyond the places they already know." },
  { p: "Over the years, that’s taken us into many neighborhood, introduced us to thousands of local business owners, and shown us how connected Milwaukee feels when people experience it on foot instead of through a windshield." },
  { p: "That’s why this conversation feels so important to me." },
  { p: "Not because I believe I have the right answer." },
  { p: "Because I believe Milwaukee deserves the biggest vision we can imagine for its future." },

  { h2: "More Than a Highway", id: "more-than-a-highway" },
  { p: "When I heard Mayor Cavalier Johnson say he believes the elevated portion of I-794 should stay, I wasn’t surprised. And honestly, I don’t think he’s wrong to be asking the questions he’s asking." },
  { p: "Traffic matters. Construction impacts matter. Taxpayer dollars matter. If Milwaukee removes I-794 without a clear vision for what comes next, it’s a risk we shouldn’t ignore. I think everyone, whether they support removing it or preserving it, should be able to agree on that. To be clear, my support for this project hinges on the thorough planning and careful execution to ensure this project is a success, with little to no speed bumps." },
  { p: "If this ends with years of vacant land, delayed development, or another stretch of surface parking, the people who opposed removing the highway will have every reason to say, “We told you so.” That’s exactly why this decision deserves to be approached carefully. The opportunity is enormous, but so is the responsibility to get it right." },
  { p: "At the same time, I kept coming back to one question." },
  { strong: "What happens if we don’t?" },
  { p: "Choosing to keep something exactly as it is is still a decision. And whatever we decide here will shape Milwaukee long after all of us are gone." },
  { p: "At Discover Milwaukee, we spend every day encouraging people to experience this city the way we’ve come to know it. Start on the RiverWalk. Grab lunch in the Historic Third Ward. Walk to the lakefront. Catch a Brewers game. Have dinner in Walker’s Point. The best days in Milwaukee aren’t spent in one neighborhood. They’re spent discovering how they all connect." },
  { p: "The best cities simply invite you to keep walking. That’s usually when the best parts of a city happen. You duck into a coffee shop because it looked interesting. You wander down a street you hadn’t planned on taking. You find a local restaurant you’ll end up telling your friends about for weeks. None of it was on your itinerary. That’s what I love about exploring cities, and it’s something I’ve always believed Milwaukee could do even better." },
  { p: "Milwaukee already has everything it needs: an incredible lakefront, distinct neighborhoods, independent businesses that give every block its own personality, a food scene that continues to surprise people, and festivals that people travel here to experience. What we sometimes lack isn’t character. It’s connection." },

  { h2: "The Opportunity in Front of Us", id: "the-opportunity-in-front-of-us" },
  { p: "Most of the conversation around I-794 has focused on traffic, and that’s understandable. Nobody enjoys sitting in traffic. But when I think about the cities I’ve loved visiting, I honestly can’t remember how quickly I got through them. I remember how they made me feel. I remember wandering. I remember discovering places I never planned to visit. I remember wanting to stay longer than I intended." },
  { p: "That’s what sticks with people." },
  { p: "I’m not qualified to estimate the economic impact of redeveloping this corridor, and I won’t pretend to be. I’ll leave those projections to people who dedicate their careers to that work. What I do know is that cities today compete for something bigger than traffic flow. They compete for families deciding where to live, entrepreneurs deciding where to invest, and visitors deciding whether they’ll come back." },
  { strong: "Cities compete for people. Not just cars." },
  { p: "One thing I genuinely appreciate about the Mayor’s perspective is that it reminds us not to rush into a decision this significant. We should challenge assumptions, scrutinize every proposal, and expect a real plan. But I also hope we ask questions that don’t fit neatly into a traffic model." },
  { p: "Will this make Milwaukee feel more connected? Will it create new opportunities for local businesses? Will it encourage people to spend another hour downtown instead of heading home? Will it inspire someone graduating from college here to build a life here the way I did?" },
  { p: "Those questions are harder to answer, but that doesn’t make them less important." },
  { p: "My hope is that WisDOT approaches this as more than a transportation project. I hope they see it as one of the biggest city-building decisions Milwaukee has faced in decades." },

  { h2: "What This Could Mean for Milwaukee", id: "what-this-could-mean-for-milwaukee" },
  { p: "This is the part of the conversation I keep coming back to, because I don’t think it’s talked about nearly enough." },
  { p: "For me, the opportunity isn’t simply removing a highway. It’s asking what becomes possible if we rethink one of the most valuable pieces of land in our city." },
  { p: "Imagine if downtown, the Historic Third Ward, East Town, and the lakefront felt less like separate destinations and more like one connected experience. Imagine someone spending an afternoon in Milwaukee and naturally wandering from one neighborhood to the next without ever feeling like they’d crossed an invisible barrier." },
  { p: "That kind of connectivity changes the way people experience a city." },
  { p: "It means more people walking into local businesses they hadn’t planned on visiting. It means more reasons to linger after dinner instead of heading home. It creates opportunities for housing, offices, parks, gathering spaces, and the kind of development that brings energy to a city long after the workday ends." },
  { p: "None of that is guaranteed, and I don’t think anyone should pretend otherwise." },
  { p: "If Milwaukee chooses this path, it has to be done thoughtfully. It has to be supported by a real vision, strong leadership, private investment, and a commitment to creating something worthy of the opportunity. Otherwise, the critics will have been right." },
  { p: "But I also believe it’s fair to ask another question." },
  { p: "If we rebuild I-794 largely as it exists today, what opportunities are we choosing not to create?" },
  { p: "Maybe I’m looking at this through the lens of Discover Milwaukee, but I’ve spent years encouraging people to explore every corner of this city. Time and time again, I’ve watched someone visit one neighborhood and unexpectedly discover another because they simply kept walking." },
  { p: "That’s the Milwaukee I think about when I picture the future." },
  { p: "Not one that’s defined by a highway, but one that’s more connected than it is today. One where our neighborhoods feel stitched together instead of separated, where investment builds on investment, and where the physical layout of our city reflects the pride so many of us already have in it." },
  { p: "To me, that’s what’s really at stake." },

  { h2: "The Milwaukee We Leave Behind", id: "the-milwaukee-we-leave-behind" },
  { p: "I don’t pretend to know what the final answer should be. Maybe every study will conclude that keeping I-794 is ultimately the right decision. If that’s where we land after asking every difficult question, I’ll respect it." },
  { p: "But I hope we don’t settle for the safest answer simply because it’s familiar." },
  { p: "Sixteen years ago, Milwaukee gave me an opportunity. It gave me an education, lifelong friends, my wife, Discover Milwaukee, and a place to build a family. Maybe that’s why this conversation means so much to me." },
  { p: "When people look back on this moment years from now, I don’t think they’ll remember the traffic projections or the public meetings. They’ll remember what Milwaukee chose to become." },
  { p: "I hope it’s a city that’s more connected, more welcoming, and more confident than the one that welcomed me." },
  { strong: "I believe Milwaukee is worth betting on." },
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
              Sixteen years ago, I came to Milwaukee to attend UW-Milwaukee. I had no idea I’d end up building my life here. That’s why the conversation around I-794 feels so personal to me. To me, this has never really been about a highway. It’s about the future of a city that has given me so much.
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
          <figure style={{ margin: "0 0 28px" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Rendering of a revitalized I-794 corridor in downtown Milwaukee"
              style={{ width: "100%", display: "block", borderRadius: "16px", backgroundColor: c.green1, aspectRatio: "4096 / 2160" }}
            >
              <source src="/videos/i-794-revitalization.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption style={{ color: c.green2, fontSize: "13px", fontStyle: "italic", textAlign: "center", margin: "10px 0 0" }}>
              A rendering of what a revitalized I-794 corridor could look like. Video: John Everitt.
            </figcaption>
          </figure>

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
