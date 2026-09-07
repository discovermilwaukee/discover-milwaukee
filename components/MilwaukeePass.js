import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import {
  MEMBER,
  PRICE,
  CATEGORIES,
  PARTNERS,
  SEED_REDEMPTIONS,
  FEATURED,
  PARTNER_DASHBOARD,
  PARTNER_BENEFITS,
} from "../lib/passData";

// =============================================================================
// Milwaukee Annual Pass — DEMO (clickable prototype, no real backend)
// =============================================================================

const DISPLAY = "'Anton', sans-serif";
const BODY = "'Jost', sans-serif";
const SCRIPT = "'Damion', cursive";

const C = {
  ink: "#0e1116",
  ink2: "#5a6472",
  line: "#e7e9ee",
  bg: "#f6f7f9",
  card: "#ffffff",
  brand: "#0a5cff",
  brand2: "#00b3a4",
  gold: "#e8b23a",
  good: "#12a150",
  danger: "#e5484d",
  wallet: "#111318",
};

const CATEGORY_GRADIENTS = {
  Attractions: ["#2b6cff", "#5aa0ff"],
  "Food & Drink": ["#ff7a3d", "#ffb347"],
  Family: ["#12a150", "#4fd18b"],
  Entertainment: ["#8b3dff", "#c07aff"],
  Sports: ["#e5484d", "#ff8087"],
  Museums: ["#0a7d8c", "#37c2cf"],
  Experiences: ["#c78a17", "#f2c65b"],
  Wellness: ["#0aa1a1", "#5fd6d0"],
  Shopping: ["#d6417a", "#ff8fb3"],
  Seasonal: ["#3f6fd8", "#7aa8ff"],
};
const gradientFor = (cat) => CATEGORY_GRADIENTS[cat] || ["#3a4252", "#6b7688"];

const REDEEM_KEY = "mke_pass_redeemed_v1";

const formatMoney = (n) =>
  "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

function timeAgo(ts) {
  const secs = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  const days = Math.floor(secs / 86400);
  if (days >= 1) return days === 1 ? "1 day ago" : `${days} days ago`;
  const hrs = Math.floor(secs / 3600);
  if (hrs >= 1) return hrs === 1 ? "1 hour ago" : `${hrs} hours ago`;
  const mins = Math.floor(secs / 60);
  if (mins >= 1) return mins === 1 ? "1 minute ago" : `${mins} minutes ago`;
  return "just now";
}

function makeCode() {
  return "MKE-" + Math.floor(10000 + Math.random() * 90000);
}

// ---- hooks ----------------------------------------------------------------
function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const on = () => setM(window.innerWidth < 768);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return m;
}

function useInView(options) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      });
    }, options || { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [seen, options]);
  return [ref, seen];
}

function useCountUp(target, run, ms = 1100) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return val;
}

function Reveal({ children, delay = 0, style }) {
  const [ref, seen] = useInView();
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(18px)",
        transition: `opacity .6s ease ${delay}ms, transform .6s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ---- decorative bits ------------------------------------------------------
function FauxQR({ size = 120, seed = "MKE" }) {
  // Deterministic pseudo-QR grid from a seed string.
  const n = 11;
  const cells = useMemo(() => {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    const arr = [];
    for (let i = 0; i < n * n; i++) {
      h = (h * 1103515245 + 12345) & 0x7fffffff;
      arr.push((h >> 6) & 1);
    }
    return arr;
  }, [seed]);
  const isFinder = (r, c) =>
    (r < 3 && c < 3) || (r < 3 && c > n - 4) || (r > n - 4 && c < 3);
  const px = size / n;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <rect width={size} height={size} fill="#fff" />
      {cells.map((v, i) => {
        const r = Math.floor(i / n);
        const c = i % n;
        if (isFinder(r, c)) return null;
        return v ? (
          <rect key={i} x={c * px} y={r * px} width={px} height={px} fill="#0e1116" />
        ) : null;
      })}
      {[[0, 0], [0, n - 3], [n - 3, 0]].map(([r, c], k) => (
        <g key={k}>
          <rect x={c * px} y={r * px} width={px * 3} height={px * 3} fill="#0e1116" />
          <rect x={c * px + px * 0.5} y={r * px + px * 0.5} width={px * 2} height={px * 2} fill="#fff" />
          <rect x={c * px + px} y={r * px + px} width={px} height={px} fill="#0e1116" />
        </g>
      ))}
    </svg>
  );
}

function Barcode({ code }) {
  const bars = useMemo(() => {
    let h = 7;
    for (let i = 0; i < code.length; i++) h = (h * 31 + code.charCodeAt(i)) >>> 0;
    const arr = [];
    for (let i = 0; i < 44; i++) {
      h = (h * 1103515245 + 12345) & 0x7fffffff;
      arr.push(1 + ((h >> 4) % 4));
    }
    return arr;
  }, [code]);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 1, height: 46 }}>
      {bars.map((w, i) => (
        <span
          key={i}
          style={{ width: w, height: "100%", background: i % 2 ? "#0e1116" : "transparent" }}
        />
      ))}
    </div>
  );
}

// ---- the digital pass card ------------------------------------------------
function PassCard({ member, redeemedCount, savingsTotal, compact }) {
  return (
    <div className={`passcard ${compact ? "passcard--compact" : ""}`}>
      <div className="passcard-shine" />
      <div className="passcard-row">
        <div>
          <div className="passcard-brand">DISCOVER MILWAUKEE</div>
          <div className="passcard-title">Annual Pass</div>
        </div>
        <div className="passcard-chip">✦</div>
      </div>

      <div className="passcard-name">{member.name}</div>
      <div className="passcard-num">{member.number}</div>

      <div className="passcard-foot">
        <div>
          <div className="passcard-lbl">Status</div>
          <div className="passcard-val">
            <span className="dot" /> {member.status}
          </div>
        </div>
        <div>
          <div className="passcard-lbl">Member since</div>
          <div className="passcard-val">{member.since}</div>
        </div>
        <div>
          <div className="passcard-lbl">Valid through</div>
          <div className="passcard-val">{member.validThrough.replace(/,.*/, "")}</div>
        </div>
      </div>

      {!compact && (
        <div className="passcard-stats">
          <div>
            <b>{redeemedCount}</b> perks used
          </div>
          <div>
            <b>{formatMoney(savingsTotal)}</b> saved
          </div>
        </div>
      )}
    </div>
  );
}

function CardMedia({ partner, height = 150, rounded = 16 }) {
  const [a, b] = gradientFor(partner.category);
  return (
    <div
      style={{
        height,
        borderRadius: rounded,
        background: `linear-gradient(135deg, ${a}, ${b})`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120px 120px at 80% 20%, rgba(255,255,255,.28), transparent), radial-gradient(160px 160px at 10% 90%, rgba(0,0,0,.18), transparent)",
        }}
      />
      <span style={{ fontSize: height > 130 ? 62 : 40, filter: "drop-shadow(0 6px 12px rgba(0,0,0,.25))" }}>
        {partner.emoji}
      </span>
      <span
        style={{
          position: "absolute",
          top: 10,
          left: 12,
          fontFamily: BODY,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#fff",
          background: "rgba(0,0,0,.22)",
          padding: "4px 9px",
          borderRadius: 999,
          backdropFilter: "blur(4px)",
        }}
      >
        {partner.category}
      </span>
    </div>
  );
}

// ===========================================================================
export default function MilwaukeePass() {
  const isMobile = useIsMobile();
  const [mode, setMode] = useState("members"); // 'members' | 'business'
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null); // partner detail modal
  const [exploreView, setExploreView] = useState("list"); // 'list' | 'map'
  const [mapPin, setMapPin] = useState(null);
  const [mobileTab, setMobileTab] = useState("explore");

  // redemption flow
  const [redeem, setRedeem] = useState(null); // {step:'confirm'|'success', partner, code, at}
  const [redemptions, setRedemptions] = useState({}); // { [id]: {code, at} }
  const [hydrated, setHydrated] = useState(false);

  // lead + waitlist
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");
  const [waitEmail, setWaitEmail] = useState("");
  const [waitStatus, setWaitStatus] = useState("");

  // ---- localStorage hydrate/persist ----
  useEffect(() => {
    let stored = null;
    try {
      stored = JSON.parse(localStorage.getItem(REDEEM_KEY) || "null");
    } catch (e) {
      stored = null;
    }
    if (stored && typeof stored === "object" && Object.keys(stored).length) {
      setRedemptions(stored);
    } else {
      const seeded = {};
      SEED_REDEMPTIONS.forEach((s) => {
        seeded[s.id] = {
          code: makeCode(),
          at: Date.now() - s.daysAgo * 86400000,
        };
      });
      setRedemptions(seeded);
      try {
        localStorage.setItem(REDEEM_KEY, JSON.stringify(seeded));
      } catch (e) {}
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next) => {
    setRedemptions(next);
    try {
      localStorage.setItem(REDEEM_KEY, JSON.stringify(next));
    } catch (e) {}
  }, []);

  // ---- derived ----
  const partnerById = useMemo(() => {
    const m = {};
    PARTNERS.forEach((p) => (m[p.id] = p));
    return m;
  }, []);

  const totalPotential = useMemo(
    () => PARTNERS.reduce((s, p) => s + p.savings, 0),
    []
  );

  const filtered = useMemo(
    () => (category === "All" ? PARTNERS : PARTNERS.filter((p) => p.category === category)),
    [category]
  );

  const redeemedList = useMemo(() => {
    return Object.entries(redemptions)
      .map(([id, r]) => ({ partner: partnerById[id], ...r }))
      .filter((x) => x.partner)
      .sort((a, b) => b.at - a.at);
  }, [redemptions, partnerById]);

  const savingsUsed = useMemo(
    () => redeemedList.reduce((s, x) => s + x.partner.savings, 0),
    [redeemedList]
  );

  // ---- value counter (animated) ----
  const [counterRef, counterSeen] = useInView({ threshold: 0.4 });
  const counterVal = useCountUp(totalPotential, counterSeen);

  // ---- redemption actions ----
  const openRedeemConfirm = (partner) => {
    setRedeem({ step: "confirm", partner });
  };
  const confirmRedeem = () => {
    if (!redeem?.partner) return;
    const p = redeem.partner;
    const existing = redemptions[p.id];
    const code = existing?.code || makeCode();
    const at = Date.now();
    const next = { ...redemptions, [p.id]: { code, at } };
    persist(next);
    setRedeem({ step: "success", partner: p, code, at });
  };
  const closeRedeem = () => setRedeem(null);

  const resetDemo = () => {
    const seeded = {};
    SEED_REDEMPTIONS.forEach((s) => {
      seeded[s.id] = { code: makeCode(), at: Date.now() - s.daysAgo * 86400000 };
    });
    persist(seeded);
  };

  const submitLead = (e) => {
    e.preventDefault();
    setLeadStatus("sending");
    setTimeout(() => setLeadStatus("done"), 900);
  };
  const submitWaitlist = (e) => {
    e.preventDefault();
    if (!waitEmail.trim()) return;
    setWaitStatus("sending");
    setTimeout(() => setWaitStatus("done"), 900);
  };

  // ---- smooth scroll for bottom nav ----
  const scrollTo = (id) => {
    setMobileTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isRedeemed = (id) => !!redemptions[id];

  // =========================================================================
  return (
    <div style={{ fontFamily: BODY, color: C.ink, background: C.bg, minHeight: "100vh" }}>
      <DemoBanner />

      {/* mode toggle */}
      <div className="modewrap">
        <div className="modetoggle" role="tablist" aria-label="View mode">
          <button
            role="tab"
            aria-selected={mode === "members"}
            className={mode === "members" ? "on" : ""}
            onClick={() => setMode("members")}
          >
            For Members
          </button>
          <button
            role="tab"
            aria-selected={mode === "business"}
            className={mode === "business" ? "on" : ""}
            onClick={() => setMode("business")}
          >
            For Businesses
          </button>
        </div>
      </div>

      {mode === "members" ? (
        <MembersView
          isMobile={isMobile}
          hydrated={hydrated}
          member={MEMBER}
          price={PRICE}
          totalPotential={totalPotential}
          counterRef={counterRef}
          counterVal={counterVal}
          categories={CATEGORIES}
          category={category}
          setCategory={setCategory}
          filtered={filtered}
          featured={FEATURED}
          partnerById={partnerById}
          exploreView={exploreView}
          setExploreView={setExploreView}
          mapPin={mapPin}
          setMapPin={setMapPin}
          isRedeemed={isRedeemed}
          onOpen={setSelected}
          onRedeem={openRedeemConfirm}
          redeemedList={redeemedList}
          savingsUsed={savingsUsed}
          resetDemo={resetDemo}
          waitEmail={waitEmail}
          setWaitEmail={setWaitEmail}
          waitStatus={waitStatus}
          submitWaitlist={submitWaitlist}
        />
      ) : (
        <BusinessView
          isMobile={isMobile}
          benefits={PARTNER_BENEFITS}
          dashboard={PARTNER_DASHBOARD}
          price={PRICE}
          onLead={() => {
            setLeadStatus("");
            setLeadOpen(true);
          }}
        />
      )}

      <SiteFooter />

      {/* partner detail modal */}
      {selected && (
        <PartnerModal
          partner={selected}
          redeemed={redemptions[selected.id]}
          onClose={() => setSelected(null)}
          onRedeem={() => {
            const p = selected;
            setSelected(null);
            openRedeemConfirm(p);
          }}
        />
      )}

      {/* redemption flow modal */}
      {redeem && (
        <RedeemModal
          redeem={redeem}
          member={MEMBER}
          onConfirm={confirmRedeem}
          onClose={closeRedeem}
        />
      )}

      {/* business lead modal */}
      {leadOpen && (
        <LeadModal
          status={leadStatus}
          onSubmit={submitLead}
          onClose={() => setLeadOpen(false)}
        />
      )}

      {/* mobile bottom nav */}
      {mode === "members" && (
        <nav className="bottomnav" aria-label="Sections">
          {[
            { id: "explore", label: "Explore", icon: "🔎" },
            { id: "map", label: "Map", icon: "📍" },
            { id: "featured", label: "Featured", icon: "⭐" },
            { id: "mypass", label: "My Pass", icon: "🎟️" },
            { id: "profile", label: "Profile", icon: "👤" },
          ].map((t) => (
            <button
              key={t.id}
              className={mobileTab === t.id ? "on" : ""}
              onClick={() => scrollTo(t.id)}
            >
              <span className="bn-ico">{t.icon}</span>
              <span className="bn-lbl">{t.label}</span>
            </button>
          ))}
        </nav>
      )}

      <PassStyles />
    </div>
  );
}

// ===========================================================================
function DemoBanner() {
  return (
    <div className="demobanner">
      <span className="demodot" />
      Interactive demo — sample partners &amp; offers shown for illustration. Not a live product.
    </div>
  );
}

// ---------------------------------------------------------------------------
function MembersView(props) {
  const {
    isMobile,
    member,
    price,
    totalPotential,
    counterRef,
    counterVal,
    categories,
    category,
    setCategory,
    filtered,
    featured,
    partnerById,
    exploreView,
    setExploreView,
    mapPin,
    setMapPin,
    isRedeemed,
    onOpen,
    onRedeem,
    redeemedList,
    savingsUsed,
    resetDemo,
    waitEmail,
    setWaitEmail,
    waitStatus,
    submitWaitlist,
  } = props;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow">Milwaukee, all year</span>
              <h1 className="hero-h1">
                One pass.
                <br />
                A whole city of perks.
              </h1>
              <p className="hero-sub">
                The <b>Milwaukee Annual Pass</b> unlocks members-only discounts, free
                admissions, and buy-one-get-one deals at the city&apos;s best attractions,
                restaurants, and experiences — all year long.
              </p>
              <div className="hero-cta">
                <a href="#pricing" className="btn btn-primary">
                  Get the Pass · {formatMoney(price)}/yr
                </a>
                <a href="#explore" className="btn btn-ghost">
                  Browse perks
                </a>
              </div>
              <div className="hero-trust">
                <span>✓ {PARTNERS.length}+ local partners</span>
                <span>✓ {formatMoney(totalPotential)}+ in value</span>
                <span>✓ 100% local</span>
              </div>
            </Reveal>
          </div>
          <div className="hero-card">
            <Reveal delay={120}>
              <div className="hero-card-float">
                <PassCard
                  member={member}
                  redeemedCount={redeemedList.length}
                  savingsTotal={savingsUsed}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE COUNTER */}
      <section ref={counterRef} className="valueband">
        <div className="valueband-inner">
          <div className="counter">{formatMoney(counterVal)}+</div>
          <div className="counter-lbl">in potential annual value for a {formatMoney(price)} pass</div>
          <div className="counter-note">
            That&apos;s {Math.round(totalPotential / price)}× the price back — if you use just a
            handful of perks, the Pass pays for itself.
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="section">
        <SectionHead kicker="Featured this week" title="Fresh picks for members" />
        <div className="featured-row">
          {featured.map((f, i) => {
            const p = partnerById[f.partnerId];
            if (!p) return null;
            return (
              <Reveal key={f.partnerId} delay={i * 90} style={{ minWidth: 0 }}>
                <button className="featured-card" onClick={() => onOpen(p)}>
                  <div className="featured-media">
                    <CardMedia partner={p} height={168} rounded={0} />
                    <span className="ribbon">{f.ribbon}</span>
                  </div>
                  <div className="featured-body">
                    <span className="tagline">{f.tag}</span>
                    <h3>{p.name}</h3>
                    <p>{p.benefit}</p>
                    <div className="featured-foot">
                      <span className="save-pill">Save {formatMoney(p.savings)}</span>
                      <span className="arrow">View →</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* EXPLORE */}
      <section id="explore" className="section">
        <div className="explore-head">
          <SectionHead
            kicker="The perks"
            title="Explore what your Pass unlocks"
            noMargin
          />
          <div className="viewtoggle">
            <button
              className={exploreView === "list" ? "on" : ""}
              onClick={() => setExploreView("list")}
            >
              ☰ List
            </button>
            <button
              className={exploreView === "map" ? "on" : ""}
              onClick={() => setExploreView("map")}
            >
              📍 Map
            </button>
          </div>
        </div>

        {/* category filter rail */}
        <div className="catrail">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${category === cat ? "chip-on" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {exploreView === "list" ? (
          <div className="grid">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 8) * 45} style={{ minWidth: 0 }}>
                <PartnerCard
                  partner={p}
                  redeemed={isRedeemed(p.id)}
                  onOpen={() => onOpen(p)}
                  onRedeem={() => onRedeem(p)}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <MapView
            id="map"
            partners={filtered}
            activePin={mapPin}
            setPin={setMapPin}
            onOpen={onOpen}
          />
        )}
      </section>

      {/* hidden anchor target for bottom-nav "map" when in list mode */}
      {exploreView === "list" && <div id="map" style={{ position: "relative", top: -80 }} />}

      {/* MY PASS / savings tracker */}
      <section id="mypass" className="section">
        <SectionHead kicker="Your membership" title="My Pass" />
        <div className="mypass-grid">
          <div className="mypass-card-col" id="profile">
            <PassCard
              member={member}
              redeemedCount={redeemedList.length}
              savingsTotal={savingsUsed}
            />
            <div className="wallet-actions">
              <button className="wallet-btn">＋ Add to Apple Wallet</button>
              <button className="wallet-btn ghost" onClick={resetDemo}>
                ↺ Reset demo
              </button>
            </div>
          </div>

          <div className="tracker">
            <div className="tracker-top">
              <div>
                <div className="tracker-big">{formatMoney(savingsUsed)}</div>
                <div className="tracker-lbl">saved so far this year</div>
              </div>
              <div className="tracker-badge">
                {savingsUsed >= price ? "Pass paid off ✓" : `${formatMoney(price - savingsUsed)} to break even`}
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(100, (savingsUsed / price) * 100)}%` }}
              />
              <span className="progress-mark" title="Break-even" />
            </div>
            <div className="progress-scale">
              <span>{formatMoney(0)}</span>
              <span>Pass cost {formatMoney(price)}</span>
            </div>

            <h4 className="tracker-h4">Perks you&apos;ve redeemed</h4>
            {redeemedList.length === 0 ? (
              <p className="muted">No perks redeemed yet — tap any card to redeem your first.</p>
            ) : (
              <ul className="redeemed-list">
                {redeemedList.map((x) => (
                  <li key={x.partner.id} onClick={() => onOpen(x.partner)}>
                    <span className="rl-emoji">{x.partner.emoji}</span>
                    <span className="rl-main">
                      <b>{x.partner.name}</b>
                      <small>{x.partner.benefit}</small>
                    </span>
                    <span className="rl-right">
                      <b>+{formatMoney(x.partner.savings)}</b>
                      <small>{timeAgo(x.at)}</small>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <SectionHead kicker="How it works" title="Three taps to savings" />
        <div className="steps">
          {[
            { n: "1", t: "Get your Pass", d: "Join online and your digital membership card lands in your phone instantly." },
            { n: "2", t: "Find a perk", d: "Browse partners by category or map, and pick a deal you want to use." },
            { n: "3", t: "Show & save", d: "Tap redeem, show the confirmation screen at the counter, and enjoy." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="step">
                <div className="step-n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING / WAITLIST */}
      <section id="pricing" className="section pricing">
        <div className="pricecard">
          <span className="soon">Launching Soon</span>
          <h2 className="price-h2">Milwaukee Annual Pass</h2>
          <div className="price-amt">
            {formatMoney(price)}
            <span>/year</span>
          </div>
          <p className="price-sub">
            One flat price. {formatMoney(totalPotential)}+ in perks across {PARTNERS.length}+ local
            spots. No per-visit fees, ever.
          </p>
          <ul className="price-list">
            <li>✓ Unlimited access to every member perk</li>
            <li>✓ New partners added all year</li>
            <li>✓ Digital card — always in your pocket</li>
            <li>✓ Supports local Milwaukee businesses</li>
          </ul>

          {waitStatus === "done" ? (
            <div className="wait-done">
              🎉 You&apos;re on the list! We&apos;ll email you the moment the Pass goes live.
            </div>
          ) : (
            <form className="waitform" onSubmit={submitWaitlist}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={waitEmail}
                onChange={(e) => setWaitEmail(e.target.value)}
                aria-label="Email for waitlist"
              />
              <button type="submit" className="btn btn-primary" disabled={waitStatus === "sending"}>
                {waitStatus === "sending" ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
          )}
          <p className="price-fine">
            No payment collected — this is a demo. Join the waitlist to be notified at launch.
          </p>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
function SectionHead({ kicker, title, noMargin }) {
  return (
    <div className="sechead" style={noMargin ? { marginBottom: 0 } : undefined}>
      <span className="sechead-kicker">{kicker}</span>
      <h2 className="sechead-title">{title}</h2>
    </div>
  );
}

function PartnerCard({ partner, redeemed, onOpen, onRedeem }) {
  return (
    <div className={`pcard ${redeemed ? "pcard--done" : ""}`}>
      <button className="pcard-media" onClick={onOpen} aria-label={`View ${partner.name}`}>
        <CardMedia partner={partner} height={140} rounded={0} />
        {redeemed && <span className="redeemed-flag">✓ Redeemed</span>}
      </button>
      <div className="pcard-body">
        <div className="pcard-top">
          <h3>{partner.name}</h3>
          <span className="save-pill sm">Save {formatMoney(partner.savings)}</span>
        </div>
        <p className="pcard-desc">{partner.description}</p>
        <div className="pcard-benefit">🎟️ {partner.benefit}</div>
        <div className="pcard-actions">
          <button className="mini ghost" onClick={onOpen}>
            Details
          </button>
          <button className="mini primary" onClick={onRedeem} disabled={redeemed}>
            {redeemed ? "Redeemed" : "Redeem"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
function MapView({ partners, activePin, setPin, onOpen }) {
  // Normalize coords to a bounding box for the mock map.
  const box = useMemo(() => {
    const lats = partners.map((p) => p.coords[0]);
    const lngs = partners.map((p) => p.coords[1]);
    return {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
    };
  }, [partners]);

  const pos = (p) => {
    const { minLat, maxLat, minLng, maxLng } = box;
    const x = maxLng === minLng ? 50 : ((p.coords[1] - minLng) / (maxLng - minLng)) * 84 + 8;
    const y = maxLat === minLat ? 50 : (1 - (p.coords[0] - minLat) / (maxLat - minLat)) * 78 + 10;
    return { left: `${x}%`, top: `${y}%` };
  };

  const active = partners.find((p) => p.id === activePin);

  return (
    <div className="mapwrap">
      <div className="mapcanvas">
        {/* faux streets + lake */}
        <div className="map-lake" />
        <div className="map-grid" />
        <div className="map-river" />
        <span className="map-label map-label--lake">Lake Michigan</span>
        {partners.map((p) => (
          <button
            key={p.id}
            className={`pin ${activePin === p.id ? "pin-on" : ""}`}
            style={pos(p)}
            onClick={() => setPin(p.id)}
            aria-label={p.name}
          >
            <span className="pin-emoji">{p.emoji}</span>
          </button>
        ))}
      </div>
      {active && (
        <div className="map-detail">
          <span className="md-emoji">{active.emoji}</span>
          <div className="md-main">
            <b>{active.name}</b>
            <small>{active.benefit}</small>
          </div>
          <div className="md-right">
            <span className="save-pill sm">Save {formatMoney(active.savings)}</span>
            <button className="mini primary" onClick={() => onOpen(active)}>
              View
            </button>
          </div>
        </div>
      )}
      {!active && <div className="map-hint">Tap a pin to see the perk.</div>}
    </div>
  );
}

// ---------------------------------------------------------------------------
function PartnerModal({ partner, redeemed, onClose, onRedeem }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <CardMedia partner={partner} height={190} rounded={0} />
        <div className="modal-body">
          <div className="modal-top">
            <div>
              <h3 className="modal-title">{partner.name}</h3>
              <p className="modal-desc">{partner.description}</p>
            </div>
            <span className="save-pill">Save {formatMoney(partner.savings)}</span>
          </div>

          <div className="benefit-box">
            <div className="benefit-box-lbl">Member benefit</div>
            <div className="benefit-box-main">🎟️ {partner.benefit}</div>
            <div className="benefit-box-cost">
              You pay: <b>{partner.memberCost}</b>
              <span className="strike">Retail {formatMoney(partner.retailValue)}</span>
            </div>
          </div>

          <dl className="meta">
            <div>
              <dt>Location</dt>
              <dd>{partner.address}</dd>
            </div>
            <div>
              <dt>Usage</dt>
              <dd>{partner.usageLimit}</dd>
            </div>
            <div>
              <dt>Terms</dt>
              <dd>{partner.terms}</dd>
            </div>
          </dl>

          <button className="btn btn-primary full" onClick={onRedeem} disabled={redeemed}>
            {redeemed ? "✓ Already redeemed" : "Redeem this perk"}
          </button>
          {redeemed && (
            <p className="muted center">
              Code {redeemed.code} · redeemed {timeAgo(redeemed.at)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
function RedeemModal({ redeem, member, onConfirm, onClose }) {
  const { step, partner, code } = redeem;
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal redeem" onClick={(e) => e.stopPropagation()}>
        {step === "confirm" ? (
          <>
            <div className="redeem-emoji">{partner.emoji}</div>
            <h3 className="redeem-title">Redeem at {partner.name}?</h3>
            <div className="benefit-box tight">
              <div className="benefit-box-main">🎟️ {partner.benefit}</div>
            </div>
            <p className="redeem-warn">
              ⚠️ Only tap confirm <b>in front of the staff member</b>. This marks the perk as used
              for your membership year.
            </p>
            <div className="redeem-actions">
              <button className="btn btn-ghost" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={onConfirm}>
                Confirm redemption
              </button>
            </div>
          </>
        ) : (
          <div className="success">
            <div className="check-ring">
              <svg viewBox="0 0 52 52" width="72" height="72">
                <circle className="check-c" cx="26" cy="26" r="24" fill="none" />
                <path className="check-k" fill="none" d="M14 27l8 8 16-18" />
              </svg>
            </div>
            <h3 className="redeem-title">Perk redeemed!</h3>
            <p className="success-sub">Show this screen to the staff at {partner.name}.</p>

            <div className="ticket">
              <div className="ticket-head">
                <span>DISCOVER MILWAUKEE · ANNUAL PASS</span>
                <span className="ticket-live">
                  <span className="dot" /> VALID
                </span>
              </div>
              <div className="ticket-benefit">{partner.benefit}</div>
              <div className="ticket-code">{code}</div>
              <Barcode code={code} />
              <div className="ticket-foot">
                <span>{member.name} · {member.number}</span>
                <span>{new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}</span>
              </div>
            </div>

            <button className="btn btn-primary full" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
function BusinessView({ benefits, dashboard, price, onLead }) {
  const [chartRef, chartSeen] = useInView({ threshold: 0.3 });
  const maxV = Math.max(...dashboard.monthly.map((m) => m.v));

  return (
    <>
      <section className="hero hero--biz">
        <div className="hero-inner biz">
          <Reveal>
            <span className="eyebrow light">For Milwaukee businesses</span>
            <h1 className="hero-h1 light">
              Fill seats.
              <br />
              Win regulars.
            </h1>
            <p className="hero-sub light">
              Put your business inside a membership locals actually use. Members discover you,
              redeem an offer, and come back at full price. You only give a perk to real,
              new customers — and you see every redemption.
            </p>
            <div className="hero-cta">
              <button className="btn btn-white" onClick={onLead}>
                Become a partner
              </button>
              <a href="#dashboard" className="btn btn-ghost light">
                See the dashboard
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHead kicker="Why partner" title="What your business gets" />
        <div className="benefit-grid">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 70}>
              <div className="benefit-tile">
                <span className="bt-emoji">{b.emoji}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard" className="section">
        <SectionHead kicker="Partner dashboard" title="See exactly what you're getting" />
        <div className="dash">
          <div className="dash-head">
            <div>
              <div className="dash-name">{dashboard.name}</div>
              <div className="dash-offer">🎟️ {dashboard.offer}</div>
            </div>
            <span className="dash-tag">{dashboard.tag}</span>
          </div>

          <div className="dash-stats">
            {dashboard.stats.map((s) => (
              <div key={s.label} className="dstat">
                <div className="dstat-v">{s.value}</div>
                <div className="dstat-l">{s.label}</div>
                <div className="dstat-t">{s.trend}</div>
              </div>
            ))}
          </div>

          <div className="dash-chart" ref={chartRef}>
            <div className="dchart-head">Redemptions by month</div>
            <div className="bars">
              {dashboard.monthly.map((m, i) => (
                <div key={m.m} className="barcol">
                  <div
                    className="bar"
                    style={{
                      height: chartSeen ? `${(m.v / maxV) * 100}%` : "0%",
                      transitionDelay: `${i * 70}ms`,
                    }}
                  >
                    <span className="bar-v">{m.v}</span>
                  </div>
                  <span className="bar-m">{m.m}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="dash-note">Sample analytics for illustration.</p>
        </div>
      </section>

      {/* HOW IT WORKS (biz) */}
      <section className="section">
        <SectionHead kicker="How it works" title="Simple to run, easy to track" />
        <div className="steps">
          {[
            { n: "1", t: "Set your offer", d: "Pick a perk that turns first-timers into regulars. Pause or change it anytime." },
            { n: "2", t: "Members redeem", d: "They show a confirmation screen — no POS integration, nothing to install." },
            { n: "3", t: "Track & grow", d: "Watch redemptions, new customers, and attributed spend in your dashboard." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="step">
                <div className="step-n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="biz-cta">
          <h2>Ready to reach Milwaukee&apos;s most engaged locals?</h2>
          <p>Tell us about your business and we&apos;ll show you how the Pass can work for you.</p>
          <button className="btn btn-primary lg" onClick={onLead}>
            Become a partner
          </button>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
function LeadModal({ status, onSubmit, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal lead" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {status === "done" ? (
          <div className="lead-done">
            <div className="check-ring sm">
              <svg viewBox="0 0 52 52" width="60" height="60">
                <circle className="check-c" cx="26" cy="26" r="24" fill="none" />
                <path className="check-k" fill="none" d="M14 27l8 8 16-18" />
              </svg>
            </div>
            <h3>Thanks — we&apos;ll be in touch!</h3>
            <p className="muted">This is a demo, so no message was actually sent.</p>
            <button className="btn btn-primary full" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Become a partner</h3>
            <p className="modal-desc">
              A few details and we&apos;ll reach out with next steps.
            </p>
            <form className="leadform" onSubmit={onSubmit}>
              <label>
                Business name
                <input required placeholder="Lakefront Social" />
              </label>
              <label>
                Your name
                <input required placeholder="Jordan Rivera" />
              </label>
              <label>
                Email
                <input type="email" required placeholder="you@business.com" />
              </label>
              <label>
                What perk might you offer?
                <textarea rows={3} placeholder="e.g. Free appetizer with an entrée" />
              </label>
              <button type="submit" className="btn btn-primary full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Submit"}
              </button>
              <p className="price-fine">Demo only — no information is stored or sent.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
function SiteFooter() {
  return (
    <footer className="passfoot">
      <div className="passfoot-inner">
        <div className="passfoot-brand">Discover Milwaukee</div>
        <p>
          The Milwaukee Annual Pass is a concept demo. Partners, offers, values, and analytics shown
          are illustrative samples, not live commitments.
        </p>
        <div className="passfoot-links">
          <Link href="/">← Back to Discover Milwaukee</Link>
        </div>
      </div>
    </footer>
  );
}

// ===========================================================================
function PassStyles() {
  return (
    <style jsx global>{`
      /* ---------- layout ---------- */
      .section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 46px 20px;
      }
      .sechead {
        margin-bottom: 22px;
      }
      .sechead-kicker {
        font-family: ${BODY};
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${C.brand};
      }
      .sechead-title {
        font-family: ${DISPLAY};
        font-size: clamp(26px, 4.4vw, 40px);
        line-height: 1.02;
        margin: 6px 0 0;
        letter-spacing: 0.01em;
      }

      /* ---------- demo banner ---------- */
      .demobanner {
        background: #14161c;
        color: #cdd3dd;
        font-family: ${BODY};
        font-size: 12.5px;
        letter-spacing: 0.02em;
        text-align: center;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .demodot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${C.gold};
        box-shadow: 0 0 0 0 rgba(232, 178, 58, 0.6);
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(232, 178, 58, 0.55); }
        70% { box-shadow: 0 0 0 8px rgba(232, 178, 58, 0); }
        100% { box-shadow: 0 0 0 0 rgba(232, 178, 58, 0); }
      }

      /* ---------- mode toggle ---------- */
      .modewrap {
        display: flex;
        justify-content: center;
        padding: 16px 16px 0;
      }
      .modetoggle {
        display: inline-flex;
        background: #eceef2;
        border-radius: 999px;
        padding: 4px;
        gap: 2px;
      }
      .modetoggle button {
        border: 0;
        background: transparent;
        font-family: ${BODY};
        font-weight: 600;
        font-size: 14px;
        color: ${C.ink2};
        padding: 9px 20px;
        border-radius: 999px;
        cursor: pointer;
        transition: all 0.25s;
      }
      .modetoggle button.on {
        background: ${C.ink};
        color: #fff;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
      }

      /* ---------- buttons ---------- */
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-family: ${BODY};
        font-weight: 600;
        font-size: 15px;
        padding: 13px 22px;
        border-radius: 12px;
        border: 1px solid transparent;
        cursor: pointer;
        text-decoration: none;
        transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
      }
      .btn:active { transform: translateY(1px); }
      .btn-primary {
        background: ${C.brand};
        color: #fff;
        box-shadow: 0 8px 20px rgba(10, 92, 255, 0.28);
      }
      .btn-primary:hover { box-shadow: 0 10px 26px rgba(10, 92, 255, 0.38); }
      .btn-primary:disabled { background: #9fb4d8; box-shadow: none; cursor: default; }
      .btn-ghost {
        background: rgba(255, 255, 255, 0.7);
        color: ${C.ink};
        border-color: ${C.line};
      }
      .btn-ghost.light { background: rgba(255, 255, 255, 0.12); color: #fff; border-color: rgba(255,255,255,0.3); }
      .btn-white { background: #fff; color: ${C.ink}; }
      .btn.full { width: 100%; }
      .btn.lg { padding: 16px 30px; font-size: 16px; }

      /* ---------- hero ---------- */
      .hero {
        background: radial-gradient(1000px 500px at 75% -10%, #eaf1ff, transparent),
          linear-gradient(180deg, #ffffff, ${C.bg});
        padding: 30px 20px 40px;
      }
      .hero--biz {
        background: linear-gradient(135deg, #0b1b3a, #0a5cff 140%);
      }
      .hero-inner {
        max-width: 1120px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        gap: 34px;
        align-items: center;
      }
      .hero-inner.biz { grid-template-columns: 1fr; max-width: 760px; text-align: center; }
      .eyebrow {
        display: inline-block;
        font-family: ${BODY};
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: ${C.brand};
        background: #e7efff;
        padding: 6px 12px;
        border-radius: 999px;
        margin-bottom: 14px;
      }
      .eyebrow.light { color: #cfe0ff; background: rgba(255, 255, 255, 0.12); }
      .hero-h1 {
        font-family: ${DISPLAY};
        font-size: clamp(38px, 7vw, 66px);
        line-height: 0.96;
        margin: 0 0 16px;
        letter-spacing: 0.01em;
      }
      .hero-h1.light { color: #fff; }
      .hero-sub {
        font-size: 17px;
        line-height: 1.55;
        color: ${C.ink2};
        max-width: 520px;
        margin: 0 0 24px;
      }
      .hero-inner.biz .hero-sub { margin-left: auto; margin-right: auto; }
      .hero-sub.light { color: #d5e0f5; }
      .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }
      .hero-inner.biz .hero-cta { justify-content: center; }
      .hero-trust {
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
        margin-top: 22px;
        font-size: 13.5px;
        font-weight: 600;
        color: ${C.ink2};
      }
      .hero-card { display: flex; justify-content: center; }
      .hero-card-float { animation: floaty 6s ease-in-out infinite; }
      @keyframes floaty {
        0%, 100% { transform: translateY(0) rotate(-1.5deg); }
        50% { transform: translateY(-12px) rotate(1.5deg); }
      }

      /* ---------- pass card ---------- */
      .passcard {
        position: relative;
        width: 340px;
        max-width: 100%;
        border-radius: 20px;
        padding: 22px;
        color: #fff;
        background: linear-gradient(135deg, #10203f 0%, #0a5cff 90%);
        box-shadow: 0 24px 60px rgba(8, 30, 70, 0.4);
        overflow: hidden;
        isolation: isolate;
      }
      .passcard--compact { width: 300px; padding: 18px; }
      .passcard-shine {
        position: absolute;
        top: -60%;
        left: -20%;
        width: 60%;
        height: 220%;
        background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.22), transparent);
        transform: rotate(18deg);
        animation: shine 5.5s ease-in-out infinite;
      }
      @keyframes shine {
        0%, 100% { left: -30%; }
        50% { left: 120%; }
      }
      .passcard-row { display: flex; justify-content: space-between; align-items: flex-start; }
      .passcard-brand { font-family: ${BODY}; font-size: 10.5px; letter-spacing: 0.2em; opacity: 0.8; }
      .passcard-title { font-family: ${DISPLAY}; font-size: 26px; letter-spacing: 0.01em; }
      .passcard-chip {
        width: 40px; height: 30px; border-radius: 7px;
        background: linear-gradient(135deg, #ffe08a, #caa23c);
        color: #6a4e07; display: flex; align-items: center; justify-content: center;
        font-size: 15px;
      }
      .passcard-name { font-family: ${BODY}; font-weight: 600; font-size: 19px; margin-top: 26px; }
      .passcard-num { font-family: ${BODY}; letter-spacing: 0.16em; font-size: 15px; opacity: 0.9; margin-top: 2px; }
      .passcard-foot { display: flex; gap: 18px; margin-top: 22px; }
      .passcard-lbl { font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.7; }
      .passcard-val { font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; }
      .passcard-val .dot {
        width: 7px; height: 7px; border-radius: 50%; background: #4cf0a0;
        box-shadow: 0 0 8px #4cf0a0;
      }
      .passcard-stats {
        display: flex; gap: 20px; margin-top: 18px; padding-top: 14px;
        border-top: 1px solid rgba(255, 255, 255, 0.18); font-size: 13px;
      }
      .passcard-stats b { font-size: 16px; }

      /* ---------- value band ---------- */
      .valueband {
        background: ${C.ink};
        color: #fff;
        text-align: center;
        padding: 52px 20px;
      }
      .counter {
        font-family: ${DISPLAY};
        font-size: clamp(54px, 12vw, 104px);
        line-height: 1;
        background: linear-gradient(120deg, #7fb0ff, #4cf0a0);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .counter-lbl { font-size: 16px; color: #c7cede; margin-top: 6px; }
      .counter-note { font-size: 14px; color: #9aa4b8; margin-top: 12px; max-width: 520px; margin-left: auto; margin-right: auto; }

      /* ---------- featured ---------- */
      .featured-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
      }
      .featured-card {
        text-align: left;
        border: 1px solid ${C.line};
        background: ${C.card};
        border-radius: 18px;
        overflow: hidden;
        cursor: pointer;
        padding: 0;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .featured-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12); }
      .featured-media { position: relative; }
      .ribbon {
        position: absolute; top: 12px; right: 12px;
        background: ${C.gold}; color: #3a2c05;
        font-family: ${BODY}; font-weight: 700; font-size: 10.5px;
        letter-spacing: 0.06em; text-transform: uppercase;
        padding: 5px 10px; border-radius: 999px;
      }
      .featured-body { padding: 16px; }
      .tagline { font-size: 12px; font-weight: 700; color: ${C.brand}; letter-spacing: 0.05em; text-transform: uppercase; }
      .featured-body h3 { font-family: ${DISPLAY}; font-size: 22px; margin: 6px 0 4px; }
      .featured-body p { font-size: 14px; color: ${C.ink2}; margin: 0 0 12px; }
      .featured-foot { display: flex; align-items: center; justify-content: space-between; }
      .arrow { font-weight: 600; color: ${C.brand}; font-size: 14px; }

      /* ---------- save pill ---------- */
      .save-pill {
        background: #e7f7ee; color: ${C.good};
        font-weight: 700; font-size: 13px;
        padding: 6px 12px; border-radius: 999px; white-space: nowrap;
      }
      .save-pill.sm { font-size: 11.5px; padding: 4px 9px; }

      /* ---------- explore ---------- */
      .explore-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
      .viewtoggle { display: inline-flex; background: #eceef2; border-radius: 10px; padding: 3px; }
      .viewtoggle button {
        border: 0; background: transparent; font-family: ${BODY}; font-weight: 600; font-size: 13px;
        color: ${C.ink2}; padding: 8px 14px; border-radius: 8px; cursor: pointer;
      }
      .viewtoggle button.on { background: #fff; color: ${C.ink}; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }

      .catrail {
        display: flex; gap: 9px; overflow-x: auto; padding: 4px 2px 14px;
        scrollbar-width: none; -webkit-overflow-scrolling: touch;
      }
      .catrail::-webkit-scrollbar { display: none; }
      .chip {
        flex: 0 0 auto; border: 1px solid ${C.line}; background: #fff;
        font-family: ${BODY}; font-weight: 600; font-size: 13.5px; color: ${C.ink2};
        padding: 9px 16px; border-radius: 999px; cursor: pointer; transition: all 0.18s; white-space: nowrap;
      }
      .chip:hover { border-color: ${C.brand}; color: ${C.brand}; }
      .chip-on { background: ${C.ink}; color: #fff; border-color: ${C.ink}; }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        gap: 18px;
      }

      /* ---------- partner card ---------- */
      .pcard {
        border: 1px solid ${C.line}; background: ${C.card}; border-radius: 16px; overflow: hidden;
        display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s;
      }
      .pcard:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1); }
      .pcard--done { opacity: 0.94; }
      .pcard-media { position: relative; border: 0; padding: 0; cursor: pointer; display: block; }
      .redeemed-flag {
        position: absolute; top: 10px; right: 10px; background: ${C.good}; color: #fff;
        font-weight: 700; font-size: 11px; padding: 5px 10px; border-radius: 999px;
      }
      .pcard-body { padding: 15px; display: flex; flex-direction: column; gap: 9px; flex: 1; }
      .pcard-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
      .pcard-top h3 { font-family: ${DISPLAY}; font-size: 19px; margin: 0; line-height: 1.05; }
      .pcard-desc { font-size: 13.5px; color: ${C.ink2}; margin: 0; }
      .pcard-benefit {
        font-size: 13.5px; font-weight: 600; background: #f2f6ff; color: #16408f;
        padding: 9px 11px; border-radius: 10px;
      }
      .pcard-actions { display: flex; gap: 8px; margin-top: auto; }
      .mini {
        flex: 1; border-radius: 10px; font-family: ${BODY}; font-weight: 600; font-size: 13.5px;
        padding: 10px; cursor: pointer; border: 1px solid ${C.line}; transition: all 0.15s;
      }
      .mini.ghost { background: #fff; color: ${C.ink}; }
      .mini.ghost:hover { border-color: ${C.ink}; }
      .mini.primary { background: ${C.brand}; color: #fff; border-color: ${C.brand}; }
      .mini.primary:disabled { background: #e7f7ee; color: ${C.good}; border-color: #cfead9; cursor: default; }

      /* ---------- map ---------- */
      .mapwrap { border: 1px solid ${C.line}; border-radius: 18px; overflow: hidden; background: #fff; }
      .mapcanvas {
        position: relative; height: 440px;
        background: #dfe7ef;
        overflow: hidden;
      }
      .map-lake {
        position: absolute; right: 0; top: 0; bottom: 0; width: 26%;
        background: linear-gradient(120deg, #9cc4e6, #7fb0d8);
      }
      .map-river {
        position: absolute; left: 46%; top: 0; bottom: 0; width: 3.5%;
        background: #9cc4e6; transform: skewX(-8deg);
      }
      .map-grid {
        position: absolute; inset: 0;
        background-image: linear-gradient(#c7d2de 1px, transparent 1px),
          linear-gradient(90deg, #c7d2de 1px, transparent 1px);
        background-size: 46px 46px; opacity: 0.7;
      }
      .map-label { position: absolute; font-family: ${BODY}; font-weight: 600; font-size: 12px; color: #4a6b86; }
      .map-label--lake { right: 5%; top: 46%; transform: rotate(90deg); letter-spacing: 0.1em; }
      .pin {
        position: absolute; transform: translate(-50%, -100%); border: 0; background: transparent;
        cursor: pointer; transition: transform 0.15s;
      }
      .pin:hover { transform: translate(-50%, -110%) scale(1.08); z-index: 3; }
      .pin-emoji {
        display: flex; align-items: center; justify-content: center;
        width: 40px; height: 40px; border-radius: 50% 50% 50% 4px;
        background: #fff; box-shadow: 0 6px 14px rgba(0, 0, 0, 0.28);
        font-size: 20px; transform: rotate(45deg);
        border: 2px solid #fff;
      }
      .pin-emoji > * { transform: rotate(-45deg); }
      .pin-on .pin-emoji { background: ${C.brand}; box-shadow: 0 8px 20px rgba(10, 92, 255, 0.5); }
      .map-detail {
        display: flex; align-items: center; gap: 12px; padding: 14px 16px;
        border-top: 1px solid ${C.line};
      }
      .md-emoji { font-size: 28px; }
      .md-main { flex: 1; display: flex; flex-direction: column; }
      .md-main small { color: ${C.ink2}; font-size: 13px; }
      .md-right { display: flex; align-items: center; gap: 10px; }
      .map-hint { text-align: center; padding: 14px; color: ${C.ink2}; font-size: 14px; }

      /* ---------- my pass / tracker ---------- */
      .mypass-grid { display: grid; grid-template-columns: 340px 1fr; gap: 26px; align-items: start; }
      .mypass-card-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }
      .wallet-actions { display: flex; flex-direction: column; gap: 8px; width: 340px; max-width: 100%; }
      .wallet-btn {
        border: 0; border-radius: 12px; padding: 13px; font-family: ${BODY}; font-weight: 600;
        font-size: 14px; cursor: pointer; background: ${C.wallet}; color: #fff;
      }
      .wallet-btn.ghost { background: #fff; color: ${C.ink2}; border: 1px solid ${C.line}; }
      .tracker { background: #fff; border: 1px solid ${C.line}; border-radius: 18px; padding: 22px; }
      .tracker-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
      .tracker-big { font-family: ${DISPLAY}; font-size: 42px; line-height: 1; color: ${C.good}; }
      .tracker-lbl { font-size: 13.5px; color: ${C.ink2}; }
      .tracker-badge {
        background: #eef2f7; color: ${C.ink}; font-weight: 600; font-size: 12.5px;
        padding: 7px 12px; border-radius: 999px; white-space: nowrap;
      }
      .progress {
        position: relative; height: 12px; background: #eef2f7; border-radius: 999px;
        margin: 18px 0 6px; overflow: hidden;
      }
      .progress-fill {
        height: 100%; border-radius: 999px;
        background: linear-gradient(90deg, ${C.brand}, ${C.good});
        transition: width 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
      }
      .progress-scale { display: flex; justify-content: space-between; font-size: 12px; color: ${C.ink2}; }
      .tracker-h4 { font-family: ${DISPLAY}; font-size: 18px; margin: 20px 0 10px; }
      .muted { color: ${C.ink2}; font-size: 14px; }
      .muted.center { text-align: center; }
      .redeemed-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      .redeemed-list li {
        display: flex; align-items: center; gap: 12px; padding: 11px 12px;
        background: ${C.bg}; border-radius: 12px; cursor: pointer; transition: background 0.15s;
      }
      .redeemed-list li:hover { background: #eef2f7; }
      .rl-emoji { font-size: 22px; }
      .rl-main { flex: 1; display: flex; flex-direction: column; }
      .rl-main small { color: ${C.ink2}; font-size: 12.5px; }
      .rl-right { text-align: right; display: flex; flex-direction: column; }
      .rl-right b { color: ${C.good}; }
      .rl-right small { color: ${C.ink2}; font-size: 12px; }

      /* ---------- steps ---------- */
      .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
      .step { background: #fff; border: 1px solid ${C.line}; border-radius: 16px; padding: 24px; }
      .step-n {
        width: 40px; height: 40px; border-radius: 12px; background: ${C.brand}; color: #fff;
        display: flex; align-items: center; justify-content: center; font-family: ${DISPLAY};
        font-size: 20px; margin-bottom: 14px;
      }
      .step h3 { font-family: ${DISPLAY}; font-size: 21px; margin: 0 0 6px; }
      .step p { color: ${C.ink2}; font-size: 14.5px; margin: 0; line-height: 1.5; }

      /* ---------- pricing ---------- */
      .pricing { display: flex; justify-content: center; }
      .pricecard {
        background: #fff; border: 1px solid ${C.line}; border-radius: 24px;
        padding: 34px; max-width: 520px; width: 100%; text-align: center;
        box-shadow: 0 30px 70px rgba(0, 0, 0, 0.08);
      }
      .soon {
        display: inline-block; background: ${C.gold}; color: #3a2c05; font-weight: 700;
        font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
        padding: 6px 14px; border-radius: 999px; margin-bottom: 16px;
      }
      .price-h2 { font-family: ${DISPLAY}; font-size: 30px; margin: 0; }
      .price-amt { font-family: ${DISPLAY}; font-size: 66px; line-height: 1; margin: 10px 0; color: ${C.brand}; }
      .price-amt span { font-family: ${BODY}; font-size: 20px; color: ${C.ink2}; font-weight: 600; }
      .price-sub { color: ${C.ink2}; font-size: 15px; margin: 0 auto 18px; max-width: 380px; }
      .price-list { list-style: none; padding: 0; margin: 0 0 22px; text-align: left; display: inline-block; }
      .price-list li { font-size: 15px; padding: 6px 0; color: ${C.ink}; }
      .waitform { display: flex; gap: 8px; }
      .waitform input {
        flex: 1; border: 1px solid ${C.line}; border-radius: 12px; padding: 13px 14px;
        font-family: ${BODY}; font-size: 15px; outline: none;
      }
      .waitform input:focus { border-color: ${C.brand}; box-shadow: 0 0 0 3px rgba(10,92,255,0.12); }
      .wait-done {
        background: #e7f7ee; color: ${C.good}; font-weight: 600; padding: 16px;
        border-radius: 14px; font-size: 15px;
      }
      .price-fine { font-size: 12px; color: ${C.ink2}; margin-top: 12px; }

      /* ---------- business ---------- */
      .benefit-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      .benefit-tile { background: #fff; border: 1px solid ${C.line}; border-radius: 16px; padding: 20px; height: 100%; }
      .bt-emoji { font-size: 30px; }
      .benefit-tile h3 { font-family: ${DISPLAY}; font-size: 18px; margin: 12px 0 6px; }
      .benefit-tile p { color: ${C.ink2}; font-size: 13.5px; margin: 0; line-height: 1.5; }

      .dash { background: #fff; border: 1px solid ${C.line}; border-radius: 20px; padding: 24px; }
      .dash-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; margin-bottom: 20px; }
      .dash-name { font-family: ${DISPLAY}; font-size: 26px; }
      .dash-offer { color: ${C.ink2}; font-weight: 600; font-size: 14px; margin-top: 4px; }
      .dash-tag {
        background: #eef2f7; color: ${C.ink2}; font-weight: 700; font-size: 11px;
        letter-spacing: 0.06em; text-transform: uppercase; padding: 6px 12px; border-radius: 999px; white-space: nowrap;
      }
      .dash-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .dstat { background: ${C.bg}; border-radius: 14px; padding: 16px; }
      .dstat-v { font-family: ${DISPLAY}; font-size: 30px; line-height: 1; }
      .dstat-l { font-size: 13px; color: ${C.ink2}; margin-top: 4px; }
      .dstat-t { font-size: 12px; color: ${C.good}; font-weight: 600; margin-top: 4px; }
      .dash-chart { margin-top: 22px; }
      .dchart-head { font-family: ${BODY}; font-weight: 600; font-size: 14px; color: ${C.ink2}; margin-bottom: 12px; }
      .bars { display: flex; align-items: flex-end; gap: 14px; height: 180px; padding-top: 20px; }
      .barcol { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; }
      .bar {
        width: 100%; max-width: 54px; border-radius: 8px 8px 0 0;
        background: linear-gradient(180deg, ${C.brand}, #4c8bff);
        position: relative; transition: height 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
        min-height: 2px;
      }
      .bar-v { position: absolute; top: -20px; left: 0; right: 0; text-align: center; font-weight: 700; font-size: 13px; }
      .bar-m { margin-top: 8px; font-size: 13px; color: ${C.ink2}; font-weight: 600; }
      .dash-note { font-size: 12px; color: ${C.ink2}; margin-top: 14px; text-align: right; }

      .biz-cta {
        background: linear-gradient(135deg, #0b1b3a, #0a5cff 150%);
        border-radius: 24px; padding: 46px 28px; text-align: center; color: #fff;
      }
      .biz-cta h2 { font-family: ${DISPLAY}; font-size: clamp(26px, 5vw, 40px); margin: 0 0 10px; }
      .biz-cta p { color: #d5e0f5; font-size: 16px; margin: 0 0 22px; }

      /* ---------- modals ---------- */
      .modal-backdrop {
        position: fixed; inset: 0; z-index: 1000;
        background: rgba(10, 14, 22, 0.55);
        backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center; padding: 20px;
        animation: fade 0.2s ease;
      }
      @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
      .modal {
        background: #fff; border-radius: 20px; width: 100%; max-width: 460px;
        max-height: 90vh; overflow-y: auto; position: relative;
        box-shadow: 0 40px 90px rgba(0, 0, 0, 0.4);
        animation: pop 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      @keyframes pop { from { transform: translateY(24px) scale(0.97); opacity: 0; } to { transform: none; opacity: 1; } }
      .modal.sheet { overflow: hidden; }
      .modal.sheet .modal-body { padding: 20px; }
      .modal-x {
        position: absolute; top: 12px; right: 12px; z-index: 2;
        width: 34px; height: 34px; border-radius: 50%; border: 0;
        background: rgba(255, 255, 255, 0.9); font-size: 15px; cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
      .modal-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
      .modal-title { font-family: ${DISPLAY}; font-size: 26px; margin: 0; }
      .modal-desc { color: ${C.ink2}; font-size: 14.5px; margin: 4px 0 0; }
      .benefit-box {
        background: #f2f6ff; border-radius: 14px; padding: 16px; margin: 16px 0;
      }
      .benefit-box.tight { margin: 14px 0; }
      .benefit-box-lbl { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${C.brand}; }
      .benefit-box-main { font-size: 17px; font-weight: 600; margin-top: 4px; }
      .benefit-box-cost { margin-top: 8px; font-size: 14px; color: ${C.ink2}; display: flex; gap: 10px; align-items: baseline; flex-wrap: wrap; }
      .benefit-box-cost b { color: ${C.ink}; font-size: 16px; }
      .strike { text-decoration: line-through; opacity: 0.6; }
      .meta { display: flex; flex-direction: column; gap: 12px; margin: 4px 0 18px; }
      .meta dt { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${C.ink2}; }
      .meta dd { margin: 3px 0 0; font-size: 14px; }

      /* redeem */
      .modal.redeem { max-width: 420px; padding: 26px; text-align: center; }
      .redeem-emoji { font-size: 52px; }
      .redeem-title { font-family: ${DISPLAY}; font-size: 26px; margin: 10px 0; }
      .redeem-warn {
        background: #fff6e5; color: #7a5a00; border-radius: 12px; padding: 12px 14px;
        font-size: 13.5px; line-height: 1.5; text-align: left;
      }
      .redeem-actions { display: flex; gap: 10px; margin-top: 18px; }
      .redeem-actions .btn { flex: 1; }
      .success-sub { color: ${C.ink2}; font-size: 14.5px; margin: 0 0 18px; }
      .check-ring { display: flex; justify-content: center; margin-bottom: 6px; }
      .check-c { stroke: ${C.good}; stroke-width: 3; stroke-dasharray: 151; stroke-dashoffset: 151; animation: draw 0.5s ease forwards; }
      .check-k { stroke: ${C.good}; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 48; stroke-dashoffset: 48; animation: draw 0.4s 0.4s ease forwards; }
      @keyframes draw { to { stroke-dashoffset: 0; } }
      .ticket {
        border: 2px dashed ${C.line}; border-radius: 16px; padding: 18px; margin: 6px 0 18px;
        text-align: left; background: linear-gradient(180deg, #fff, #fbfcfe);
      }
      .ticket-head { display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; letter-spacing: 0.08em; color: ${C.ink2}; font-weight: 700; }
      .ticket-live { display: flex; align-items: center; gap: 5px; color: ${C.good}; }
      .ticket-live .dot { width: 7px; height: 7px; border-radius: 50%; background: ${C.good}; box-shadow: 0 0 8px ${C.good}; }
      .ticket-benefit { font-weight: 600; font-size: 15px; margin: 12px 0 8px; }
      .ticket-code { font-family: ${DISPLAY}; font-size: 30px; letter-spacing: 0.08em; margin-bottom: 12px; }
      .ticket-foot { display: flex; justify-content: space-between; font-size: 11px; color: ${C.ink2}; margin-top: 12px; gap: 10px; }

      /* lead */
      .modal.lead { padding: 26px; }
      .leadform { display: flex; flex-direction: column; gap: 12px; margin-top: 16px; }
      .leadform label { font-size: 13px; font-weight: 600; color: ${C.ink2}; display: flex; flex-direction: column; gap: 6px; }
      .leadform input, .leadform textarea {
        border: 1px solid ${C.line}; border-radius: 12px; padding: 12px 13px;
        font-family: ${BODY}; font-size: 15px; color: ${C.ink}; outline: none; resize: vertical;
      }
      .leadform input:focus, .leadform textarea:focus { border-color: ${C.brand}; box-shadow: 0 0 0 3px rgba(10,92,255,0.12); }
      .lead-done { text-align: center; }
      .lead-done h3 { font-family: ${DISPLAY}; font-size: 24px; margin: 8px 0; }
      .check-ring.sm { margin-bottom: 4px; }

      /* ---------- footer ---------- */
      .passfoot { background: ${C.ink}; color: #aeb6c4; margin-top: 20px; }
      .passfoot-inner { max-width: 1120px; margin: 0 auto; padding: 40px 20px; text-align: center; }
      .passfoot-brand { font-family: ${DISPLAY}; font-size: 24px; color: #fff; }
      .passfoot-inner p { max-width: 560px; margin: 12px auto; font-size: 13.5px; line-height: 1.6; }
      .passfoot-links a { color: #7fb0ff; text-decoration: none; font-weight: 600; }

      /* ---------- bottom nav (mobile) ---------- */
      .bottomnav { display: none; }

      /* ---------- responsive ---------- */
      @media (max-width: 900px) {
        .featured-row { grid-template-columns: 1fr; }
        .benefit-grid { grid-template-columns: repeat(2, 1fr); }
        .mypass-grid { grid-template-columns: 1fr; }
        .mypass-card-col { align-items: stretch; }
        .wallet-actions { width: 100%; }
        .steps { grid-template-columns: 1fr; }
      }
      @media (max-width: 767px) {
        .hero-inner { grid-template-columns: 1fr; text-align: center; }
        .hero-copy .eyebrow, .hero-cta, .hero-trust { justify-content: center; }
        .hero-sub { margin-left: auto; margin-right: auto; }
        .hero-card { margin-top: 10px; }
        .featured-row { grid-template-columns: 1fr; }
        .dash-stats { grid-template-columns: repeat(2, 1fr); }
        .explore-head { flex-direction: column; align-items: stretch; }
        .waitform { flex-direction: column; }
        .section { padding: 34px 16px 34px; }
        body { padding-bottom: 68px; }
        .bottomnav {
          display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 900;
          background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(10px);
          border-top: 1px solid ${C.line}; padding: 6px 4px calc(6px + env(safe-area-inset-bottom));
        }
        .bottomnav button {
          flex: 1; border: 0; background: transparent; cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          font-family: ${BODY}; color: ${C.ink2}; padding: 6px 2px;
        }
        .bottomnav button.on { color: ${C.brand}; }
        .bn-ico { font-size: 19px; }
        .bn-lbl { font-size: 10.5px; font-weight: 600; }
      }
      @media (max-width: 420px) {
        .benefit-grid { grid-template-columns: 1fr; }
        .dash-stats { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}
