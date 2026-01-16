import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  const c = {
    green1: "#2C5235", green2: "#547F4B", yellow: "#F0A623", 
    cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B"
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: c.green1, fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Something Went Wrong | Discover Milwaukee</title>
        <meta name="description" content="We hit a snag. Our team is on it." />
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

      {/* 500 Content */}
      <div style={{ padding: "80px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span style={{ fontSize: "120px", display: "block", marginBottom: "20px" }}>🔧</span>
          <p style={{ color: c.yellow, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>TECHNICAL DIFFICULTIES</p>
          <h1 style={{ fontSize: "48px", fontWeight: "900", color: c.cream, marginBottom: "20px", textTransform: "uppercase", lineHeight: 1.1 }}>Something Broke</h1>
          <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
            Our bad. Something went sideways on our end. We're probably already fixing it 
            (or grabbing a beer and then fixing it). Try again in a few?
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <button 
              onClick={() => window.location.reload()}
              style={{ 
                padding: "16px 32px", 
                backgroundColor: c.yellow, 
                color: c.green1, 
                fontWeight: "bold", 
                borderRadius: "50px", 
                cursor: "pointer",
                fontSize: "16px",
                textTransform: "uppercase",
                border: "none"
              }}
            >
              Try Again
            </button>
            
            <Link href="/">
              <span style={{ 
                display: "inline-block",
                padding: "16px 32px", 
                backgroundColor: "transparent", 
                color: c.cream, 
                fontWeight: "bold", 
                borderRadius: "50px", 
                cursor: "pointer",
                fontSize: "16px",
                border: `2px solid ${c.cream}`
              }}>
                Go Home Instead
              </span>
            </Link>
          </div>
          
          <div style={{ marginTop: "60px", padding: "24px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "16px" }}>
            <p style={{ color: c.cream, fontSize: "15px", marginBottom: "8px", fontWeight: "600" }}>Still broken?</p>
            <p style={{ color: c.beige, fontSize: "14px" }}>
              Let us know at <a href="mailto:contact@discover-milwaukee.com" style={{ color: c.yellow }}>contact@discover-milwaukee.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
