import Head from "next/head";
import Link from "next/link";

export default function TermsOfService() {
  const c = {
    green1: "#2C5235", green2: "#547F4B", yellow: "#F0A623", 
    cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B", white: "#FFFFFF"
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: c.cream, fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Terms of Service | Discover Milwaukee</title>
        <meta name="description" content="Terms of Service for Discover Milwaukee." />
      </Head>
      
      {/* Nav */}
      <nav style={{ backgroundColor: c.cream, borderBottom: `3px solid ${c.yellow}`, padding: "0 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", height: "70px" }}>
          <Link href="/">
            <span style={{ fontSize: "22px", fontWeight: "900", color: c.green1, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer" }}>DISCOVER MILWAUKEE</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ padding: "60px 16px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "900", color: c.green1, marginBottom: "24px" }}>Terms of Service</h1>
        <p style={{ color: c.tan, marginBottom: "32px" }}>Last updated: January 2026</p>
        
        <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "32px" }}>
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>The Short Version</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              Don't be a jerk. Use our site for what it's meant for — discovering cool stuff in Milwaukee. 
              Don't steal our content. Don't submit fake events. Don't use our platform for anything illegal or harmful.
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Content</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              All content on Discover Milwaukee (articles, guides, event listings, etc.) is owned by us unless otherwise stated. 
              Feel free to share links to our content. Don't copy and paste entire articles and claim them as your own. 
              That's not cool.
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Event Submissions</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              When you submit an event, you're telling us the info is accurate to the best of your knowledge. 
              We reserve the right to edit or remove any submission. We're not responsible if event details change 
              after we publish them — always double-check with the venue.
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Partnerships</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              Sponsored content is always clearly labeled. We only partner with brands we actually believe in. 
              If we recommend something, it's because we think it's worth your time — whether we're getting paid or not.
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Disclaimer</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              We do our best to keep information accurate and up-to-date, but things change. 
              Always verify details before making plans. We're not liable if that bar closed last week 
              or the event got cancelled.
            </p>
          </section>
          
          <section>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Questions?</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              Reach out at{" "}
              <a href="mailto:contact@discover-milwaukee.com" style={{ color: c.green1 }}>contact@discover-milwaukee.com</a>.
            </p>
          </section>
        </div>
        
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <Link href="/">
            <span style={{ color: c.green1, fontWeight: "600", cursor: "pointer" }}>← Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
