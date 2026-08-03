import React from "react";
import { useRouter } from "next/router";
import { getRelatedGuides } from "../lib/guides";

// Auto "Related Guides" — sibling guides from the same taxonomy category.
// Self-detects the current route; renders nothing off-taxonomy. Plain <a>
// tags keep the links crawlable in the static prerender.
const c = {
  green1: "#2C5235",
  yellow: "#F0A623",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  tan: "#9E7F4B",
  white: "#FFFFFF",
};

export default function RelatedGuides() {
  const router = useRouter();
  const { category, related } = getRelatedGuides(router.pathname, 6);
  if (!category || related.length === 0) return null;

  return (
    <section
      aria-label="Related guides"
      style={{ backgroundColor: c.cream, borderTop: `1px solid ${c.beige}`, padding: "44px 16px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            color: c.yellow,
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "1px",
            textTransform: "uppercase",
            margin: "0 0 4px",
          }}
        >
          More in {category.title}
        </p>
        <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: 900, margin: "0 0 20px" }}>
          Related Milwaukee Guides
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
          }}
        >
          {related.map((g) => (
            <a
              key={g.href}
              href={g.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: c.white,
                border: `1px solid ${c.beige}`,
                borderRadius: "12px",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "22px", lineHeight: 1 }} aria-hidden="true">
                {g.icon}
              </span>
              <span>
                <span style={{ display: "block", color: c.green1, fontWeight: 700, fontSize: "15px" }}>
                  {g.title}
                </span>
                <span style={{ display: "block", color: c.tan, fontSize: "12px" }}>{g.desc}</span>
              </span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: "22px" }}>
          <a
            href={`/explore#${category.id}`}
            style={{ color: c.green1, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}
          >
            Browse all {category.title} guides →
          </a>
        </div>
      </div>
    </section>
  );
}
