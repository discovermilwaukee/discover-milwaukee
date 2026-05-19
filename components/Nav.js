import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const c = {
  green1: "#2C5235",
  green2: "#547F4B",
  cream: "#F7F1E7",
  beige: "#EBDFC1",
  yellow: "#F0A623",
};

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

export default function Nav() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const currentPage = router.pathname.replace("/", "") || "home";

  const navItems = ["Home", "Explore", "Events", "Festivals", "Newsletter", "About"];

  return (
    <>
      {/* Banner */}
      <header role="banner">
        <div style={{ backgroundColor: c.green1, color: c.cream, padding: "10px 16px", textAlign: "center", fontSize: isMobile ? "12px" : "14px" }}>
          Your Weekly Guide to Everything Milwaukee — Delivered Free 📬
        </div>
      </header>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: c.cream, borderBottom: `3px solid ${c.yellow}`, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center", textDecoration: "none" }}>
            <span style={{ fontSize: isMobile ? "16px" : "22px", fontWeight: "900", color: c.green1, letterSpacing: "1px", textTransform: "uppercase" }}>DISCOVER MILWAUKEE</span>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {navItems.map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = item === "Home" ? currentPage === "home" || currentPage === "" : currentPage === item.toLowerCase();
                return (
                  <Link
                    key={item}
                    href={href}
                    style={{
                      color: isActive ? c.yellow : c.green1,
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      borderBottom: isActive ? `2px solid ${c.yellow}` : "2px solid transparent",
                      padding: "6px 0",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                );
              })}

              {/* Partner Button - Highlighted */}
              <Link
                href="/partner"
                style={{
                  backgroundColor: currentPage === "partner" ? c.yellow : c.green1,
                  color: currentPage === "partner" ? c.green1 : c.cream,
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
              <Link
                href="/explore"
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
              </Link>
            </div>
          )}

          {/* Mobile Nav Icons */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Search Button */}
              <Link
                href="/explore"
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
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
              >
                <div style={{ width: "24px", height: "2px", backgroundColor: c.green1, marginBottom: "6px", transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                <div style={{ width: "24px", height: "2px", backgroundColor: c.green1, marginBottom: "6px", opacity: mobileMenuOpen ? 0 : 1, transition: "all 0.3s" }} />
                <div style={{ width: "24px", height: "2px", backgroundColor: c.green1, transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && mobileMenuOpen && (
          <div style={{ backgroundColor: c.cream, borderTop: `1px solid ${c.beige}`, padding: "16px" }}>
            {navItems.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = item === "Home" ? currentPage === "home" || currentPage === "" : currentPage === item.toLowerCase();
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    color: isActive ? c.yellow : c.green1,
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    borderBottom: `1px solid ${c.beige}`,
                    backgroundColor: isActive ? c.green1 : "transparent",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              );
            })}
            {/* Partner - Highlighted */}
            <Link
              href="/partner"
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
                border: currentPage === "partner" ? `2px solid ${c.yellow}` : "none",
                textDecoration: "none",
              }}
            >
              🤝 Partner With Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
