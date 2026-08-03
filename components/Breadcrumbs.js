import React from "react";
import { useRouter } from "next/router";
import { findGuideByHref } from "../lib/guides";

// Visible, crawlable breadcrumb trail (Home > Category > Guide). No JSON-LD:
// guide pages already emit their own BreadcrumbList schema, so this stays
// presentation/internal-linking only to avoid duplicate structured data.
const c = {
  green1: "#2C5235",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  tan: "#9E7F4B",
};

export default function Breadcrumbs() {
  const router = useRouter();
  const found = findGuideByHref(router.pathname);
  if (!found) return null;
  const { guide, category } = found;

  return (
    <nav
      aria-label="Breadcrumb"
      style={{ backgroundColor: c.cream, borderBottom: `1px solid ${c.beige}` }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "12px 16px",
          fontSize: "13px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <a href="/" style={{ color: c.green1, textDecoration: "none", fontWeight: 600 }}>
          Home
        </a>
        <span aria-hidden="true" style={{ color: c.tan }}>
          ›
        </span>
        <a
          href={`/explore#${category.id}`}
          style={{ color: c.green1, textDecoration: "none", fontWeight: 600 }}
        >
          {category.title}
        </a>
        <span aria-hidden="true" style={{ color: c.tan }}>
          ›
        </span>
        <span style={{ color: c.tan }} aria-current="page">
          {guide.title}
        </span>
      </div>
    </nav>
  );
}
