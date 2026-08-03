import React from "react";
import { GUIDE_CATEGORIES } from "../lib/guides";

const c = {
  green1: "#2C5235",
  green2: "#547F4B",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  yellow: "#F0A623",
  tan: "#9E7F4B",
};

// Preserve the taxonomy's group order (Eat & Drink, Things to Do, Neighborhoods, Plan Your Visit)
const GROUPS = GUIDE_CATEGORIES.reduce((acc, cat) => {
  let g = acc.find((x) => x.group === cat.group);
  if (!g) {
    g = { group: cat.group, categories: [] };
    acc.push(g);
  }
  g.categories.push(cat);
  return acc;
}, []);

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Events", href: "/events" },
  { label: "Festivals", href: "/milwaukee-festivals" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "About", href: "/about" },
  { label: "Partner", href: "/partner" },
  { label: "Advertise", href: "/milwaukee-media-kit" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: c.green1, color: c.cream, padding: "48px 16px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Brand */}
        <div style={{ marginBottom: "32px" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "22px", fontWeight: 900, color: c.cream, letterSpacing: "1px", textTransform: "uppercase" }}>
              Discover Milwaukee
            </span>
          </a>
          <p style={{ color: c.beige, fontSize: "14px", margin: "8px 0 0", maxWidth: "520px", lineHeight: 1.5 }}>
            Your insider&apos;s guide to everything Milwaukee — restaurants, bars, neighborhoods, events and the best things to do in MKE.
          </p>
        </div>

        {/* Guide directory grouped by taxonomy */}
        <nav aria-label="Guide directory" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px", borderTop: `1px solid ${c.green2}`, paddingTop: "28px" }}>
          {GROUPS.map((group) => (
            <div key={group.group}>
              <h2 style={{ color: c.yellow, fontSize: "13px", fontWeight: 900, letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 14px" }}>
                {group.group}
              </h2>
              {group.categories.map((cat) => (
                <div key={cat.id} style={{ marginBottom: "16px" }}>
                  <h3 style={{ color: c.beige, fontSize: "13px", fontWeight: 700, margin: "0 0 6px" }}>
                    {cat.title}
                  </h3>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {cat.guides.map((guide) => (
                      <li key={guide.href} style={{ margin: "0 0 4px" }}>
                        <a
                          href={guide.href}
                          style={{ color: c.cream, fontSize: "13px", textDecoration: "none", opacity: 0.9, lineHeight: 1.4 }}
                        >
                          {guide.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div style={{ borderTop: `1px solid ${c.green2}`, marginTop: "24px", paddingTop: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <nav aria-label="Site" style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
            {SITE_LINKS.map((link) => (
              <a key={link.href} href={link.href} style={{ color: c.cream, fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
            {LEGAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} style={{ color: c.beige, fontSize: "14px", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </nav>
          <p style={{ color: c.beige, fontSize: "13px", margin: 0 }}>
            © 2026 Discover Milwaukee. Your insider&apos;s guide to MKE.
          </p>
        </div>
      </div>
    </footer>
  );
}
