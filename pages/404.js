import { DiscoverMilwaukee } from "../components/DiscoverMilwaukee";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const c = {
    green1: "#2C5235", green2: "#547F4B", yellow: "#F0A623", 
    cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B"
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: c.green1, fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Page Not Found | Discover Milwaukee</title>
        <meta name="description" content="Looks like you took a wrong turn. Let's get you back to discovering Milwaukee." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      {/* Nav */}
      <nav style={{ backgroundColor: c.cream, borderBottom: `3px solid ${c.yellow}`, padding: "0 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", height: "70px" }}>
          <Link href="/">
            <span style={{ fontSize: "22px", fontWeight: "900", color: c.green1, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer" }}>DISCOVER MILWAUKEE</span>
          </Link>
        </div>
      </nav>

      {/* 404 Content */}
      <div style={{ padding: "80px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span style={{ fontSize: "120px", display: "block", marginBottom: "20px" }}>🍺</span>
          <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>WELL, THIS IS AWKWARD</p>
          <h1 style={{ fontSize: "48px", fontWeight: "900", color: c.cream, marginBottom: "20px", textTransform: "uppercase", lineHeight: 1.1 }}>Page Not Found</h1>
          <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
            Looks like you wandered off the beaten path. Maybe you were looking for a hidden gem? 
            This ain't it. But don't worry — Milwaukee's got plenty of actual cool spots to discover.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <Link href="/">
              <span style={{ 
                display: "inline-block",
                padding: "16px 32px", 
                backgroundColor: c.yellow, 
                color: c.green1, 
                fontWeight: "bold", 
                borderRadius: "50px", 
                cursor: "pointer",
                fontSize: "16px",
                textTransform: "uppercase"
              }}>
                Take Me Home
              </span>
            </Link>
            
            <div style={{ display: "flex", gap: "24px", marginTop: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/events">
                <span style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "underline" }}>Browse Events</span>
              </Link>
              <Link href="/explore">
                <span style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "underline" }}>Explore Guides</span>
              </Link>
              <Link href="/newsletter">
                <span style={{ color: c.beige, fontSize: "14px", cursor: "pointer", textDecoration: "underline" }}>Get the Newsletter</span>
              </Link>
            </div>
          </div>

          {/* Popular Guides Section for SEO internal linking */}
          <div style={{ marginTop: "60px", textAlign: "left" }}>
            <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "20px", textTransform: "uppercase", textAlign: "center" }}>POPULAR GUIDES</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <Link href="/best-restaurants-milwaukee">
                <span style={{ display: "block", backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "background 0.2s" }}>Best Restaurants in Milwaukee</span>
              </Link>
              <Link href="/things-to-do-milwaukee">
                <span style={{ display: "block", backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "background 0.2s" }}>Things to Do in Milwaukee</span>
              </Link>
              <Link href="/best-brunch-milwaukee">
                <span style={{ display: "block", backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "background 0.2s" }}>Best Brunch Spots</span>
              </Link>
              <Link href="/milwaukee-breweries">
                <span style={{ display: "block", backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "background 0.2s" }}>Milwaukee Breweries</span>
              </Link>
              <Link href="/best-patios-milwaukee">
                <span style={{ display: "block", backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "background 0.2s" }}>Best Patios</span>
              </Link>
              <Link href="/free-things-milwaukee">
                <span style={{ display: "block", backgroundColor: "rgba(255,255,255,0.1)", color: c.cream, padding: "14px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "background 0.2s" }}>Free Things to Do</span>
              </Link>
            </div>

            <p style={{ color: c.yellow, fontSize: "12px", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", marginTop: "32px", textTransform: "uppercase", textAlign: "center" }}>NEIGHBORHOODS</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/third-ward-milwaukee"><span style={{ color: c.beige, fontSize: "14px", cursor: "pointer" }}>Third Ward</span></Link>
              <Link href="/bay-view-milwaukee"><span style={{ color: c.beige, fontSize: "14px", cursor: "pointer" }}>Bay View</span></Link>
              <Link href="/walkers-point-milwaukee"><span style={{ color: c.beige, fontSize: "14px", cursor: "pointer" }}>Walker's Point</span></Link>
              <Link href="/east-side-milwaukee"><span style={{ color: c.beige, fontSize: "14px", cursor: "pointer" }}>East Side</span></Link>
            </div>
          </div>

          <div style={{ marginTop: "40px", padding: "24px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "16px" }}>
            <p style={{ color: c.cream, fontSize: "15px", marginBottom: "8px", fontWeight: "600" }}>Think this page should exist?</p>
            <p style={{ color: c.beige, fontSize: "14px" }}>
              Hit us up at <a href="mailto:contact@discover-milwaukee.com" style={{ color: c.yellow }}>contact@discover-milwaukee.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
