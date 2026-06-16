import React, { useState } from "react";
import Link from "next/link";

const cta = {
  ink: "#171513",
  green: "#1d5c3f",
  gold: "#d99b1f",
  cream: "#faf6ef",
  beige: "#ece4d6",
};

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <aside aria-labelledby="newsletter-cta-heading" style={{ background: `linear-gradient(135deg, ${cta.ink} 0%, ${cta.green} 100%)`, color: cta.cream, padding: "24px 28px", borderRadius: "16px", marginBottom: "28px", border: `2px solid ${cta.gold}` }}>
      <p style={{ color: cta.gold, fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>📬 The weekly Milwaukee scoop</p>
      <h2 id="newsletter-cta-heading" style={{ color: cta.cream, fontSize: "20px", fontWeight: "900", margin: "0 0 8px", lineHeight: 1.25 }}>Discover what&apos;s happening in Milwaukee</h2>
      <p style={{ color: cta.beige, fontSize: "14px", lineHeight: 1.55, margin: "0 0 14px" }}>Join 10,000+ Milwaukee insiders. The best events, new restaurant openings, hidden gems, and local favorites — delivered free every Wednesday.</p>
      <form onSubmit={handleSubscribe} style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <label htmlFor="newsletter-cta-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>Email address</label>
        <input
          id="newsletter-cta-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === "loading"}
          style={{ flex: "1 1 240px", minWidth: "200px", padding: "10px 14px", borderRadius: "8px", border: "none", fontSize: "14px", color: cta.ink, backgroundColor: cta.cream }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{ background: cta.gold, color: cta.ink, border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", cursor: status === "loading" ? "not-allowed" : "pointer", whiteSpace: "nowrap" }}
        >
          {status === "loading" ? "Joining…" : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p style={{ color: cta.gold, fontSize: "13px", margin: "10px 0 0", fontWeight: "600" }}>✓ You&apos;re in. Check your inbox to confirm.</p>
      )}
      {status === "error" && (
        <p style={{ color: "#ffb3b3", fontSize: "13px", margin: "10px 0 0" }}>Something went wrong — try again, or sign up at <Link href="/newsletter" style={{ color: cta.gold, textDecoration: "underline" }}>discover-milwaukee.com/newsletter</Link>.</p>
      )}
      <p style={{ color: cta.beige, fontSize: "11px", margin: "12px 0 0", opacity: 0.7 }}>Powered by Beehiiv. No spam, ever.</p>
    </aside>
  );
}
