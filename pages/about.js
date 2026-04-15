import React from "react";
import Head from "next/head";
import Link from "next/link";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const milestones = [
  { year: "2012", event: "Jordan & Todd meet at UW-Milwaukee" },
  { year: "2018", event: "Discover Milwaukee launches" },
  { year: "2020", event: "Reached 100K followers" },
  { year: "2023", event: "Launched weekly newsletter" },
  { year: "2025", event: "37M+ annual views" },
  { year: "2026", event: "Expanded to full digital platform" },
];

const values = [
  {
    title: "Actually Local",
    description: "We live here. We raise our family here. Every recommendation comes from real experience, not a press release.",
    icon: "🏠",
  },
  {
    title: "Independent",
    description: "No public funding. No tourism board backing. Just us. That independence lets us highlight what's actually worth your time.",
    icon: "✊",
  },
  {
    title: "Authentic",
    description: "We don't overhype. We don't pretend Milwaukee is something it's not. We show exactly what makes it great.",
    icon: "💯",
  },
  {
    title: "Current",
    description: "Milwaukee moves fast. New restaurants, new events, new energy. We stay on top of it so you don't miss out.",
    icon: "⚡",
  },
];

const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Discover Milwaukee",
    "alternateName": "Discover MKE",
    "url": "https://discover-milwaukee.com",
    "logo": "https://discover-milwaukee.com/logo.png",
    "description": "Milwaukee's independent local guide for events, restaurants, and things to do. Founded in 2018 by Jordan and Todd, two UW-Milwaukee graduates who fell in love with the city.",
    "foundingDate": "2018",
    "founders": [
      {
        "@type": "Person",
        "name": "Jordan"
      },
      {
        "@type": "Person",
        "name": "Todd"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://instagram.com/discovermilwaukee",
      "https://tiktok.com/@discovermilwaukee",
      "https://facebook.com/discovermilwaukee"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Milwaukee",
      "sameAs": "https://en.wikipedia.org/wiki/Milwaukee"
    }
  },
  aboutPage: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Discover Milwaukee",
    "description": "Learn about Discover Milwaukee - founded by two UW-Milwaukee graduates who wanted to give Milwaukee the storytelling it deserves.",
    "url": "https://discover-milwaukee.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Discover Milwaukee"
    }
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://discover-milwaukee.com/about" }
    ]
  }
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Discover Milwaukee | Our Story</title>
        <meta name="description" content="Discover Milwaukee was founded in 2018 by Jordan and Todd, two UW-Milwaukee graduates who believe Milwaukee deserves better storytelling. Independent, local, and authentic." />
        <meta name="keywords" content="about discover milwaukee, discover milwaukee founders, milwaukee local guide, milwaukee blog, who runs discover milwaukee" />
        <link rel="canonical" href="https://discover-milwaukee.com/about" />

        <meta property="og:title" content="About Discover Milwaukee | Our Story" />
        <meta property="og:description" content="Founded by two people who genuinely love this city. Learn the story behind Milwaukee's favorite local guide." />
        <meta property="og:url" content="https://discover-milwaukee.com/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Discover Milwaukee" />
        <meta name="twitter:description" content="The story behind Milwaukee's independent local guide." />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.aboutPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        {/* Navigation */}
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>
              DISCOVER MILWAUKEE
            </Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
              <Link href="/partner" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Partner</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px" }}>SINCE 2018</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "900", marginBottom: "24px", lineHeight: 1.1 }}>
              Milwaukee Deserved<br />Better Storytelling.
            </h1>
            <p style={{ color: c.beige, fontSize: "20px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              So we built it.
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>

          {/* Intro */}
          <section style={{ marginBottom: "60px" }}>
            <p style={{ color: c.green1, fontSize: "20px", lineHeight: 1.8, marginBottom: "24px" }}>
              Not surface-level lists. Not the same recycled recommendations. Not content that felt like it was written from the outside looking in.
            </p>
            <p style={{ color: c.green1, fontSize: "20px", lineHeight: 1.8, marginBottom: "24px" }}>
              We wanted something real. Something that actually reflected the energy, culture, and pride of this city.
            </p>
            <p style={{ color: c.green2, fontSize: "18px", lineHeight: 1.8 }}>
              That's why Discover Milwaukee exists.
            </p>
          </section>

          {/* Our Story */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "900", marginBottom: "24px" }}>Our Story</h2>

            <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "32px", border: `1px solid ${c.beige}`, marginBottom: "32px" }}>
              <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
                Discover Milwaukee wasn't created in a boardroom or backed by a large organization. It started as a passion project between two people who genuinely love this city.
              </p>
              <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
                <strong style={{ color: c.green1 }}>University of Wisconsin–Milwaukee</strong> is where everything began for us. Jordan and Todd met there in 2012 as students, and Milwaukee quickly became more than just a place we lived.
              </p>
              <p style={{ color: c.green1, fontSize: "18px", fontWeight: "600", lineHeight: 1.8, marginBottom: "20px" }}>
                It became home.
              </p>
              <div style={{ borderLeft: `4px solid ${c.yellow}`, paddingLeft: "20px", marginBottom: "20px" }}>
                <p style={{ color: c.green1, fontSize: "17px", lineHeight: 2, margin: 0 }}>
                  It's where we built our careers.<br />
                  It's where we got married.<br />
                  It's where we started our family.
                </p>
              </div>
              <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
                Over time, our connection to Milwaukee only got deeper. We weren't just living here; we were experiencing it. The neighborhoods, the small businesses, the restaurants, the festivals, the people who make this city what it is.
              </p>
              <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
                And the more we experienced, the more we realized something was missing.
              </p>
              <p style={{ color: c.green1, fontSize: "18px", fontWeight: "700", lineHeight: 1.8 }}>
                Milwaukee didn't lack great places or great people.<br />
                It lacked a platform that truly captured them.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Our Journey</h2>
            <div style={{ position: "relative", paddingLeft: "30px", borderLeft: `3px solid ${c.yellow}` }}>
              {milestones.map((milestone, i) => (
                <div key={i} style={{ marginBottom: "24px", position: "relative" }}>
                  <div style={{
                    position: "absolute",
                    left: "-41px",
                    top: "4px",
                    width: "20px",
                    height: "20px",
                    backgroundColor: c.yellow,
                    borderRadius: "50%",
                    border: `3px solid ${c.cream}`
                  }} />
                  <span style={{ color: c.orange, fontSize: "14px", fontWeight: "700" }}>{milestone.year}</span>
                  <p style={{ color: c.green1, fontSize: "16px", fontWeight: "600", margin: "4px 0 0 0" }}>{milestone.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Do */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "900", marginBottom: "16px" }}>What We Do</h2>
            <p style={{ color: "#555", fontSize: "18px", lineHeight: 1.8, marginBottom: "24px" }}>
              At its core, Discover Milwaukee is about one thing: <strong style={{ color: c.green1 }}>showing the city the way it actually is.</strong>
            </p>

            <div style={{ backgroundColor: c.green1, borderRadius: "16px", padding: "28px", marginBottom: "24px" }}>
              <p style={{ color: c.beige, fontSize: "14px", fontWeight: "600", letterSpacing: "2px", marginBottom: "16px" }}>WE HIGHLIGHT</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {[
                  "Local restaurants and hidden gems",
                  "Events happening right now",
                  "The people and businesses shaping Milwaukee",
                  "The culture that makes this city different"
                ].map((item, i) => (
                  <li key={i} style={{ color: c.cream, fontSize: "17px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: c.yellow }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ color: c.green1, fontSize: "18px", fontWeight: "600", lineHeight: 1.8 }}>
              We don't just post content.<br />
              We tell the story of Milwaukee in real time.
            </p>
          </section>

          {/* What Makes Us Different */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "900", marginBottom: "16px" }}>What Makes Us Different</h2>
            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "24px" }}>
              There's a common misconception that Discover Milwaukee is similar to organizations like Visit Milwaukee. While we share the same goal of celebrating and promoting the city, we are fundamentally different.
            </p>

            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "28px", border: `2px solid ${c.orange}`, marginBottom: "24px" }}>
              <p style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>
                We are <span style={{ color: c.orange }}>not</span> a tourism board.<br />
                We do <span style={{ color: c.orange }}>not</span> receive public funding.<br />
                We are <span style={{ color: c.orange }}>not</span> backed by a larger institution.
              </p>
              <p style={{ color: c.green1, fontSize: "17px", fontWeight: "600", margin: 0 }}>
                Everything you see—every post, every guide, every recommendation—is built by us.
              </p>
            </div>

            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "16px" }}>
              That independence matters. It allows us to:
            </p>
            <ul style={{ margin: "0 0 24px 0", padding: 0, listStyle: "none" }}>
              {[
                "Highlight what's actually worth seeing, not what's being pushed",
                "Move quickly and stay relevant",
                "Stay connected to the community, not removed from it"
              ].map((item, i) => (
                <li key={i} style={{ color: c.green1, fontSize: "16px", marginBottom: "10px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: c.yellow, fontSize: "18px" }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <p style={{ color: c.green1, fontSize: "17px", fontWeight: "600" }}>
              We're not trying to check a box. We're trying to represent Milwaukee the right way.
            </p>
          </section>

          {/* Values */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>What We Stand For</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {values.map((value, i) => (
                <div key={i} style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", border: `1px solid ${c.beige}` }}>
                  <span style={{ fontSize: "32px", display: "block", marginBottom: "12px" }}>{value.icon}</span>
                  <h3 style={{ color: c.green1, fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>{value.title}</h3>
                  <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why It Matters */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "900", marginBottom: "16px" }}>Why It Matters</h2>
            <div style={{ backgroundColor: c.beige, borderRadius: "16px", padding: "32px" }}>
              <p style={{ color: c.green1, fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>
                Milwaukee is one of the most underrated cities in the country.
              </p>
              <p style={{ color: c.green1, fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
                The culture is strong. The food scene is growing fast. The community is real.
              </p>
              <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
                But too often, it gets overlooked or misunderstood.
              </p>
              <p style={{ color: c.green1, fontSize: "17px", fontWeight: "600", lineHeight: 1.8 }}>
                We're here to change that. Not by overhyping it. Not by pretending it's something it's not. But by showing exactly what makes it great.
              </p>
            </div>
          </section>

          {/* Built Here */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ color: c.green1, fontSize: "32px", fontWeight: "900", marginBottom: "16px" }}>Built Here. Built By Us.</h2>
            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
              Discover Milwaukee has grown into a platform reaching hundreds of thousands of people across social and beyond.
            </p>
            <p style={{ color: "#555", fontSize: "17px", lineHeight: 1.8, marginBottom: "20px" }}>
              But at the end of the day, it's still rooted in the same thing it started with: <strong style={{ color: c.green1 }}>two people who love this city and want to see it get the recognition it deserves.</strong>
            </p>
            <div style={{ borderLeft: `4px solid ${c.yellow}`, paddingLeft: "20px" }}>
              <p style={{ color: c.green1, fontSize: "20px", fontWeight: "700", lineHeight: 1.6, margin: 0 }}>
                Milwaukee isn't just where we live.<br />
                It's part of who we are.
              </p>
              <p style={{ color: c.green2, fontSize: "17px", marginTop: "12px", marginBottom: 0 }}>
                And Discover Milwaukee is our way of sharing that with everyone else.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section style={{ marginBottom: "60px" }}>
            <div style={{ backgroundColor: c.green1, borderRadius: "20px", padding: "40px", textAlign: "center" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "24px" }}>
                {[
                  { number: "37M+", label: "Annual Views" },
                  { number: "7+", label: "Years Running" },
                  { number: "100K+", label: "Newsletter Subscribers" },
                  { number: "2", label: "Founders, Still Here" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p style={{ color: c.yellow, fontSize: "36px", fontWeight: "900", marginBottom: "4px" }}>{stat.number}</p>
                    <p style={{ color: c.beige, fontSize: "14px", margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ textAlign: "center" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "16px" }}>Join the Community</h2>
            <p style={{ color: "#666", fontSize: "17px", marginBottom: "24px" }}>
              Get weekly Milwaukee updates, new restaurant alerts, and event picks.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.green1, color: c.cream, padding: "14px 28px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", fontSize: "15px" }}>
                Subscribe to Newsletter
              </Link>
              <Link href="/partner" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 28px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", fontSize: "15px" }}>
                Partner With Us
              </Link>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px", marginBottom: "16px" }}>© 2026 Discover Milwaukee. Built in MKE.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Home</Link>
            <Link href="/explore" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Explore</Link>
            <Link href="/events" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Events</Link>
            <Link href="/newsletter" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Newsletter</Link>
            <Link href="/partner" style={{ color: c.cream, fontSize: "14px", textDecoration: "none" }}>Partner</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
