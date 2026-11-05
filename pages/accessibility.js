import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SITE = "https://www.discover-milwaukee.com";
const CONTACT = "contact@discover-milwaukee.com";

export default function AccessibilityStatement() {
  const c = {
    green1: "#2C5235", green2: "#547F4B", yellow: "#F0A623",
    cream: "#F7F1E7", beige: "#EBDFC1", tan: "#9E7F4B", tanDark: "#83693E", ink: "#20291F", white: "#FFFFFF"
  };
  const h2 = { fontSize: "20px", fontWeight: "700", color: c.green1, marginBottom: "12px" };
  const p = { color: c.ink, lineHeight: 1.7, marginBottom: "12px" };
  const ul = { color: c.ink, lineHeight: 1.7, paddingLeft: "22px", margin: "0 0 12px" };
  const li = { marginBottom: "6px" };
  const link = { color: c.green1, textDecoration: "underline", fontWeight: 600 };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: c.cream, fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Accessibility Statement | Discover Milwaukee</title>
        <meta name="description" content="How Discover Milwaukee works to make this site usable for everyone: the standard we follow, what we have tested, known limitations, and how to reach us if something does not work for you." />
        <link rel="canonical" href={`${SITE}/accessibility`} />
      </Head>

      <Nav />

      <main id="main-content" tabIndex={-1} style={{ padding: "60px 16px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "900", color: c.green1, marginBottom: "24px" }}>Accessibility Statement</h1>
        <p style={{ color: c.tanDark, marginBottom: "32px" }}>Last reviewed: November 5, 2026</p>

        <div style={{ backgroundColor: c.white, borderRadius: "16px", padding: "32px" }}>
          <section style={{ marginBottom: "32px" }}>
            <h2 style={h2}>Our Commitment</h2>
            <p style={p}>
              Milwaukee is for everyone, and this site should be too. We want every guide, event listing and form here to
              work for people who use screen readers, keyboards, screen magnifiers, captions or other assistive technology.
            </p>
            <p style={{ ...p, marginBottom: 0 }}>
              The standard we work toward is the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={h2}>What We Have Done</h2>
            <p style={p}>In November 2026 we reviewed and updated every page on this site. That work included:</p>
            <ul style={ul}>
              <li style={li}>Text and background colors that meet the contrast levels in the standard.</li>
              <li style={li}>A &ldquo;Skip to main content&rdquo; link, clear page regions and an orderly heading outline on every page.</li>
              <li style={li}>Menus, search, event listings, filters and forms that work with a keyboard alone, with a visible focus outline.</li>
              <li style={li}>Text labels on form fields, buttons and icons.</li>
              <li style={li}>Captions on video clips that include speech, plus sound and pause buttons on every clip.</li>
              <li style={li}>Animations and autoplaying video that switch off when your device is set to reduce motion.</li>
              <li style={li}>Pages that can be zoomed and that reflow on small screens.</li>
            </ul>
            <p style={{ ...p, marginBottom: 0 }}>
              We check our work with automated accessibility testing on every page at phone and desktop sizes, and with
              keyboard-only testing of the main tasks on the site.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={h2}>Known Limitations</h2>
            <p style={p}>We do not claim this site is perfect. Here is what we know about today:</p>
            <ul style={{ ...ul, marginBottom: 0 }}>
              <li style={li}>Automated testing does not catch everything, and we have not yet tested every page with every screen reader, browser and device.</li>
              <li style={li}>Some short video clips on our Media Kit page are set to music with no speech. They do not have a text description of what they show.</li>
              <li style={li}>The regional maps on some seasonal guides are visual. Every place shown on a map is also listed in text on the same page.</li>
              <li style={li}>We link to many outside websites, such as restaurants, venues and ticket sellers. We do not control how accessible those sites are.</li>
              <li style={li}>We publish new guides often. If a new page slips below our standard, we want to hear about it.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={h2}>Tell Us If Something Does Not Work</h2>
            <p style={p}>
              If you run into a barrier on this site, email us at{" "}
              <a href={`mailto:${CONTACT}`} style={link}>{CONTACT}</a>. It helps to include:
            </p>
            <ul style={ul}>
              <li style={li}>The address of the page.</li>
              <li style={li}>What you were trying to do and what happened.</li>
              <li style={li}>The device, browser and any assistive technology you were using.</li>
            </ul>
            <p style={{ ...p, marginBottom: 0 }}>
              If you cannot get the information you need from a page, tell us what you are looking for and we will send it
              to you another way.
            </p>
          </section>

          <section>
            <h2 style={h2}>About This Statement</h2>
            <p style={{ ...p, marginBottom: 0 }}>
              This statement describes this website only. It is reviewed when the site changes in ways that affect
              accessibility. See also our <Link href="/privacy" style={link}>Privacy Policy</Link> and{" "}
              <Link href="/terms" style={link}>Terms of Service</Link>.
            </p>
          </section>
        </div>

        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <Link href="/" style={{ color: c.green1, fontWeight: "600", textDecoration: "none" }}>
            <span aria-hidden="true">← </span>Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
