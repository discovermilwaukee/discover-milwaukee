import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GUIDE_CATEGORIES } from "../lib/guides";
import { trapTab } from "../lib/a11y";

const c = {
  green1: "#2C5235",
  green2: "#547F4B",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  yellow: "#F0A623",
  // Darker / lighter variants of the brand yellow and tan for text, so small type
  // meets 4.5:1 contrast on cream (Dark) and on the dark green (Light).
  yellowDark: "#94620A",
  yellowLight: "#F1AF38",
  tan: "#9E7F4B",
  tanDark: "#83693E",
};

// Group the taxonomy into its 4 top-level buckets, preserving order
const GUIDE_GROUPS = GUIDE_CATEGORIES.reduce((acc, cat) => {
  let g = acc.find((x) => x.group === cat.group);
  if (!g) {
    g = { group: cat.group, categories: [] };
    acc.push(g);
  }
  g.categories.push(cat);
  return acc;
}, []);

const SearchIcon = () => (
  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

export default function Nav({ onSearchClick }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [navSearchOpen, setNavSearchOpen] = useState(false);
  const [navSearch, setNavSearch] = useState("");
  const lastFocus = useRef(null);
  const openSearch = () => {
    setMobileMenuOpen(false);
    if (onSearchClick) onSearchClick();
    else {
      lastFocus.current = typeof document !== "undefined" ? document.activeElement : null;
      setNavSearchOpen(true);
    }
  };
  // Close the search dialog and hand focus back to whatever opened it.
  const closeSearch = () => {
    setNavSearchOpen(false);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  };
  const closeTimer = useRef(null);

  const navSearchResults = navSearch.trim()
    ? GUIDE_CATEGORIES.flatMap((cat) =>
        cat.guides
          .filter((g) => {
            const q = navSearch.toLowerCase();
            return (
              g.title.toLowerCase().includes(q) ||
              (g.desc && g.desc.toLowerCase().includes(q)) ||
              cat.title.toLowerCase().includes(q)
            );
          })
          .map((g) => ({ ...g, category: cat.title, icon: cat.icon }))
      )
    : [];
  const openGuides = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setGuidesOpen(true);
  };
  const scheduleCloseGuides = () => {
    closeTimer.current = setTimeout(() => setGuidesOpen(false), 150);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Escape closes whichever layer is open (search dialog, Guides menu, mobile menu).
  useEffect(() => {
    if (!navSearchOpen && !guidesOpen && !mobileMenuOpen) return undefined;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (navSearchOpen) closeSearch();
      else if (guidesOpen) setGuidesOpen(false);
      else setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [navSearchOpen, guidesOpen, mobileMenuOpen]);

  const currentPage = router.pathname.replace("/", "") || "home";

  const navItems = [
    { label: "Explore", href: "/explore" },
    { label: "Events", href: "/events" },
    { label: "Festivals", href: "/milwaukee-festivals" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      {/* Banner */}
      <header role="banner">
        <div style={{ backgroundColor: c.green1, color: c.cream, padding: "10px 16px", textAlign: "center", fontSize: isMobile ? "12px" : "14px" }}>
          Your Weekly Guide to Everything Milwaukee — Delivered Free
        </div>
      </header>

      {/* Nav */}
      <nav aria-label="Main" style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.cream, borderBottom: `3px solid ${c.yellow}`, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center", textDecoration: "none" }}>
            <span style={{ fontSize: isMobile ? "16px" : "22px", fontWeight: "900", color: c.green1, letterSpacing: "1px", textTransform: "uppercase" }}>DISCOVER MILWAUKEE</span>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {/* Guides mega-menu trigger */}
              <div onMouseEnter={openGuides} onMouseLeave={scheduleCloseGuides}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={guidesOpen}
                  aria-controls="guides-menu"
                  onClick={() => (guidesOpen ? setGuidesOpen(false) : openGuides())}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: guidesOpen ? c.yellowDark : c.green1,
                    fontSize: "14px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    borderBottom: guidesOpen ? `2px solid ${c.yellow}` : "2px solid transparent",
                    padding: "6px 0",
                    fontFamily: "inherit",
                  }}
                >
                  Guides
                  <span aria-hidden="true" style={{ fontSize: "10px", transform: guidesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                </button>
              </div>

              {navItems.map((item) => {
                const isActive = item.href === "/" ? currentPage === "home" || currentPage === "" : currentPage === item.href.replace("/", "");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      color: isActive ? c.yellowDark : c.green1,
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      borderBottom: isActive ? `2px solid ${c.yellow}` : "2px solid transparent",
                      padding: "6px 0",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Partner Button - Highlighted */}
              <Link
                href="/milwaukee-media-kit"
                style={{
                  backgroundColor: currentPage === "milwaukee-media-kit" ? c.yellow : c.green1,
                  color: currentPage === "milwaukee-media-kit" ? "#20291F" : c.cream,
                  padding: "10px 20px",
                  borderRadius: "50px",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Partner
              </Link>

              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  color: c.green1,
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="Search"
              >
                <SearchIcon />
              </button>
            </div>
          )}

          {/* Mobile Nav Icons */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  color: c.green1,
                }}
                aria-label="Search"
              >
                <SearchIcon />
              </button>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
              >
                <span aria-hidden="true" style={{ display: "block", width: "24px", height: "2px", backgroundColor: c.green1, marginBottom: "6px", transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                <span aria-hidden="true" style={{ display: "block", width: "24px", height: "2px", backgroundColor: c.green1, marginBottom: "6px", opacity: mobileMenuOpen ? 0 : 1, transition: "all 0.3s" }} />
                <span aria-hidden="true" style={{ display: "block", width: "24px", height: "2px", backgroundColor: c.green1, transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
              </button>
            </div>
          )}
        </div>

        {/* Guides Mega-Menu Panel (desktop) */}
        {!isMobile && guidesOpen && (
          <div
            id="guides-menu"
            onMouseEnter={openGuides}
            onMouseLeave={scheduleCloseGuides}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: c.cream,
              borderBottom: `3px solid ${c.yellow}`,
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              zIndex: 45,
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 16px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px" }}>
              {GUIDE_GROUPS.map((group) => (
                <div key={group.group}>
                  <p style={{ color: c.yellowDark, fontSize: "12px", fontWeight: "900", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 14px" }}>
                    {group.group}
                  </p>
                  {group.categories.map((cat) => (
                    <div key={cat.id} style={{ marginBottom: "14px" }}>
                      <Link
                        href={`/explore#${cat.id}`}
                        onClick={() => setGuidesOpen(false)}
                        style={{ display: "flex", alignItems: "center", gap: "6px", color: c.green1, fontSize: "13px", fontWeight: "700", textDecoration: "none", marginBottom: "6px" }}
                      >
                        <span aria-hidden="true">{cat.icon}</span>{cat.title}
                      </Link>
                      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        {cat.guides.slice(0, 4).map((g) => (
                          <Link
                            key={g.href}
                            href={g.href}
                            onClick={() => setGuidesOpen(false)}
                            style={{ color: c.tanDark, fontSize: "12px", textDecoration: "none" }}
                          >
                            {g.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobile && mobileMenuOpen && (
          <div id="mobile-menu" style={{ backgroundColor: c.cream, borderTop: `1px solid ${c.beige}`, padding: "16px" }}>
            {navItems.map((item) => {
              const isActive = item.href === "/" ? currentPage === "home" || currentPage === "" : currentPage === item.href.replace("/", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    color: isActive ? c.yellowLight : c.green1,
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    borderBottom: `1px solid ${c.beige}`,
                    backgroundColor: isActive ? c.green1 : "transparent",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Guides browse */}
            <div style={{ borderTop: `1px solid ${c.beige}`, marginTop: "4px", paddingTop: "4px" }}>
              {GUIDE_GROUPS.map((group) => (
                <div key={group.group}>
                  <p style={{ color: c.yellowDark, fontSize: "11px", fontWeight: "900", letterSpacing: "1px", textTransform: "uppercase", margin: "12px 16px 4px" }}>
                    {group.group}
                  </p>
                  {group.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/explore#${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", color: c.green1, fontSize: "15px", fontWeight: "600", textDecoration: "none" }}
                    >
                      <span aria-hidden="true">{cat.icon}</span>{cat.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Partner - Highlighted */}
            <Link
              href="/milwaukee-media-kit"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 16px",
                marginTop: "8px",
                color: c.cream,
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                textTransform: "uppercase",
                backgroundColor: c.green1,
                borderRadius: "10px",
                textAlign: "center",
                border: currentPage === "milwaukee-media-kit" ? `2px solid ${c.yellow}` : "none",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"></path>
                <path d="M3 12.5h18"></path>
              </svg>
              Partner With Us
            </Link>
          </div>
        )}
      </nav>

      {/* Search Modal (guide search — used on pages without the full DiscoverMilwaukee modal) */}
      {navSearchOpen && (
        <div
          onClick={closeSearch}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 100,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: isMobile ? "60px 16px" : "100px 16px",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search guides"
            onKeyDown={trapTab}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: c.cream,
              borderRadius: "20px",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "70vh",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ padding: "20px", borderBottom: `1px solid ${c.beige}`, display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: c.tanDark, display: "flex" }}><SearchIcon /></span>
              <input
                type="search"
                autoFocus
                aria-label="Search guides"
                placeholder="Search guides (e.g., tacos, dive bars, Third Ward...)"
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                style={{ flex: 1, border: "none", fontSize: "18px", backgroundColor: "transparent", color: c.green1, padding: "6px 8px", borderRadius: "8px" }}
              />
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", fontSize: "20px", color: c.tanDark }}
              >
                ✕
              </button>
            </div>
            <div aria-live="polite" style={{ padding: "16px 20px", maxHeight: "50vh", overflowY: "auto" }}>
              {!navSearch.trim() ? (
                <p style={{ color: c.tanDark, fontSize: "14px", textAlign: "center", padding: "20px" }}>
                  Start typing to search all {GUIDE_CATEGORIES.reduce((sum, cat) => sum + cat.guides.length, 0)}+ guides.
                </p>
              ) : navSearchResults.length === 0 ? (
                <p style={{ color: c.tanDark, fontSize: "14px", textAlign: "center", padding: "20px" }}>
                  No guides found for &quot;{navSearch}&quot;. Try another search term.
                </p>
              ) : (
                <>
                  <p style={{ color: c.tanDark, fontSize: "13px", margin: "0 0 12px" }}>
                    {navSearchResults.length} result{navSearchResults.length !== 1 ? "s" : ""} found
                  </p>
                  {navSearchResults.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      onClick={() => { setNavSearchOpen(false); setNavSearch(""); }}
                      style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", borderRadius: "12px", textDecoration: "none", color: c.green1 }}
                    >
                      <span aria-hidden="true" style={{ fontSize: "18px" }}>{g.icon}</span>
                      <span>
                        <span style={{ display: "block", fontSize: "14px", fontWeight: "700" }}>{g.title}</span>
                        <span style={{ display: "block", fontSize: "12px", color: c.tanDark }}>{g.category}</span>
                      </span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
