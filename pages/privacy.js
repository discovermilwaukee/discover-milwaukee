import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  const c = {
    green1: "#2C5235", green2: "#547F4B", yellow: "#F0A623", 
    cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B", white: "#FFFFFF"
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: c.cream, fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Privacy Policy | Discover Milwaukee</title>
        <meta name="description" content="Privacy Policy for Discover Milwaukee - how we collect, use, and protect your information." />
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
        <h1 style={{ fontSize: "36px", fontWeight: "900", color: c.green1, marginBottom: "24px" }}>Privacy Policy</h1>
        <p style={{ color: c.tan, marginBottom: "32px" }}>Last updated: January 2026</p>
        
        <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "32px" }}>
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>What We Collect</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              When you subscribe to our newsletter, we collect your email address. When you submit an event or partner inquiry, 
              we collect the information you provide in those forms. We also use standard analytics to understand how people 
              use our site (page views, etc.).
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>How We Use It</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              Your email is used to send you our weekly newsletter. That's it. We don't sell your information to third parties. 
              We don't spam you with random stuff. Event and partner form submissions are used solely to respond to your inquiries.
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Newsletter</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              Our newsletter is powered by Beehiiv. When you subscribe, your email is stored in our Beehiiv account. 
              You can unsubscribe at any time by clicking the unsubscribe link in any email. It's that easy.
            </p>
          </section>
          
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Cookies</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              We use basic cookies to remember your preferences (like dark mode) and for analytics. 
              Nothing creepy. No tracking you around the internet.
            </p>
          </section>
          
          <section>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>Questions?</h2>
            <p style={{ color: c.tan, lineHeight: 1.7 }}>
              If you have any questions about this privacy policy, hit us up at{" "}
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
