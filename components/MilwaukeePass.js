import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  MEMBER,
  PRICE,
  PARTNERS,
  PARTNER_DASHBOARD,
  PARTNER_BENEFITS,
  AUDIENCE,
  PARTNER_ASSURANCES,
  PROVEN_STATS,
  PROVEN_SOURCES,
  PROVEN_NOTE,
  ACQUISITION_FLOW,
  ESTIMATOR_PRESETS,
  PARTNER_COMPARISON,
  PARTNER_TESTIMONIALS,
  PARTNER_FAQ,
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

const formatMoney = (n) =>
  "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

// Derive up to two initials from a business name for monogram media.
function monogram(name) {
  if (!name) return "";
  const words = name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w));
  if (words.length === 0) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

// ---- inline line-icon set (no emoji) --------------------------------------
const ICON_PATHS = {
  search: "M11 4a7 7 0 105.29 12.11l3.3 3.3 1.41-1.41-3.3-3.3A7 7 0 0011 4zm0 2a5 5 0 110 10 5 5 0 010-10z",
  mappin: "M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 4.5A2.5 2.5 0 1112 11.5 2.5 2.5 0 0112 6.5z",
  star: "M12 2.5l2.9 6.06 6.6.72-4.9 4.48 1.34 6.5L12 17.02 5.06 20.26l1.34-6.5L1.5 9.28l6.6-.72L12 2.5z",
  card: "M3 6a2 2 0 012-2h14a2 2 0 012 2v2H3V6zm0 4h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8zm3 5h6v2H6v-2z",
  user: "M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 6v1h18v-1c0-3.5-4-6-9-6z",
  ticket: "M4 6a2 2 0 00-2 2v2a2 2 0 010 4v2a2 2 0 002 2h16a2 2 0 002-2v-2a2 2 0 010-4V8a2 2 0 00-2-2H4zm11 1v10M9 7v2M9 11v2M9 15v2",
  plus: "M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z",
  refresh: "M12 5V2L7 6l5 4V7a5 5 0 11-5 5H5a7 7 0 107-7z",
  list: "M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z",
  contactless: "M8.5 6.5a8 8 0 010 11M12 4a12 12 0 010 16M5 9a4 4 0 010 6",
  dollar: "M12 2v20M8 17a4 4 0 004 3c2.2 0 4-1.3 4-3.2 0-2.2-2-3-4-3.6s-4-1.4-4-3.6C8 5.8 9.8 4.5 12 4.5A4 4 0 0116 7",
  plug: "M9 2v6M15 2v6M7 8h10v3a5 5 0 01-10 0V8zm5 8v6",
  target: "M12 12m-9 0a9 9 0 1018 0 9 9 0 10-18 0M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0M12 12m-1 0a1 1 0 102 0 1 1 0 10-2 0",
  calendar: "M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z",
  compass: "M12 3a9 9 0 100 18 9 9 0 000-18zm3.5 5.5l-2 5-5 2 2-5 5-2z",
  users: "M9 11a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h10M17 13a3.5 3.5 0 100-7M16 19h6v-1c0-2.2-2-4-5-4.5",
  speaker: "M3 10v4h4l5 4V6L7 10H3zm13-3a6 6 0 010 10M18.5 4.5a10 10 0 010 15",
  chart: "M4 20V4M4 20h16M8 20v-6M12 20V8M16 20v-9M20 20v-4",
  sliders: "M4 8h9M17 8h3M4 16h3M11 16h9M15 6v4M8 14v4",
  receipt: "M6 2h12v20l-2-1.5L14 22l-2-1.5L10 22l-2-1.5L6 22V2zm3 5h6M9 11h6M9 15h4",
};

function Icon({ name, size = 24, stroke = 2, className, style }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      <path d={d} />
    </svg>
  );
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

// Split a display stat like "$2.5B", "37.1M", "235K+", "79.2%" into parts so we
// can animate just the number and keep the prefix/suffix intact.
function parseStat(str) {
  const m = String(str).match(/^([^\d.-]*)([\d,.]+)(.*)$/);
  if (!m) return { prefix: "", num: null, suffix: String(str), decimals: 0 };
  const numRaw = m[2].replace(/,/g, "");
  const decimals = (numRaw.split(".")[1] || "").length;
  return { prefix: m[1], num: parseFloat(numRaw), suffix: m[3], decimals };
}

function fmtNum(n, decimals) {
  const fixed = n.toFixed(decimals);
  const [intPart, frac] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return frac != null ? `${withCommas}.${frac}` : withCommas;
}

// Count-up that preserves currency prefixes, unit suffixes, and decimals.
function AnimatedStat({ value, run, ms = 1300 }) {
  const { prefix, num, suffix, decimals } = useMemo(() => parseStat(value), [value]);
  const [display, setDisplay] = useState(
    num == null ? String(value) : `${prefix}${fmtNum(0, decimals)}${suffix}`
  );
  useEffect(() => {
    if (num == null || !run) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${fmtNum(num * eased, decimals)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [num, run, ms, prefix, suffix, decimals]);
  return <>{display}</>;
}

// Eases toward a moving target -- used so estimator outputs glide as sliders move.
function useTween(target, ms = 550) {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef(null);
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    const from = fromRef.current;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = from + (target - from) * eased;
      fromRef.current = cur;
      setVal(cur);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, ms]);
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
        <div className="passcard-chip"><Icon name="contactless" size={22} stroke={2.2} /></div>
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
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: height > 130 ? 46 : 32,
          lineHeight: 1,
          letterSpacing: ".02em",
          color: "#fff",
          textShadow: "0 6px 14px rgba(0,0,0,.28)",
          zIndex: 1,
        }}
      >
        {monogram(partner.name)}
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
  const [mode, setMode] = useState("members"); // 'members' | 'business'

  // lead + waitlist
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");
  const [waitEmail, setWaitEmail] = useState("");
  const [waitStatus, setWaitStatus] = useState("");

  const totalPotential = useMemo(
    () => PARTNERS.reduce((s, p) => s + p.savings, 0),
    []
  );

  // ---- value counter (animated) ----
  const [counterRef, counterSeen] = useInView({ threshold: 0.4 });
  const counterVal = useCountUp(totalPotential, counterSeen);

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
          member={MEMBER}
          price={PRICE}
          totalPotential={totalPotential}
          counterRef={counterRef}
          counterVal={counterVal}
          waitEmail={waitEmail}
          setWaitEmail={setWaitEmail}
          waitStatus={waitStatus}
          submitWaitlist={submitWaitlist}
        />
      ) : (
        <BusinessView
          benefits={PARTNER_BENEFITS}
          dashboard={PARTNER_DASHBOARD}
          price={PRICE}
          totalPotential={totalPotential}
          onLead={() => {
            setLeadStatus("");
            setLeadOpen(true);
          }}
        />
      )}

      <SiteFooter />

      {/* business lead modal */}
      {leadOpen && (
        <LeadModal
          status={leadStatus}
          onSubmit={submitLead}
          onClose={() => setLeadOpen(false)}
        />
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
// One curated example per major category — a taste, not a directory.
const SAMPLE_IDS = [
  "rivergate-kitchen", // Food & Drink
  "cedar-hollow-gardens", // Attractions
  "wildwood-zoo", // Family
  "lakeside-gallery", // Museums
  "greenside-golf", // Experiences
  "stillwater-float", // Wellness
];

function MembersView(props) {
  const {
    member,
    price,
    totalPotential,
    counterRef,
    counterVal,
    waitEmail,
    setWaitEmail,
    waitStatus,
    submitWaitlist,
  } = props;

  const samples = SAMPLE_IDS.map((id) => PARTNERS.find((p) => p.id === id)).filter(Boolean);

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
                The <b>Milwaukee Annual Pass</b> is one simple membership that unlocks
                members-only discounts, free admissions, and buy-one-get-one deals at the
                city&apos;s best restaurants, attractions, and experiences — all year long.
              </p>
              <div className="hero-cta">
                <a href="#pricing" className="btn btn-primary">
                  Get the Pass · {formatMoney(price)}/yr
                </a>
                <a href="#perks" className="btn btn-ghost">
                  See sample perks
                </a>
              </div>
              <div className="hero-trust">
                <span>✓ One flat yearly price</span>
                <span>✓ {formatMoney(totalPotential)}+ in perks</span>
                <span>✓ 100% local</span>
              </div>
            </Reveal>
          </div>
          <div className="hero-card">
            <Reveal delay={120}>
              <div className="hero-card-float">
                <PassCard member={member} redeemedCount={8} savingsTotal={214} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE COUNTER */}
      <section ref={counterRef} className="valueband">
        <div className="valueband-inner">
          <div className="counter">{formatMoney(counterVal)}+</div>
          <div className="counter-lbl">in real perks across the city, for one {formatMoney(price)} pass</div>
          <div className="counter-note">
            Use just a handful of perks a year and the Pass more than pays for itself.
          </div>
        </div>
      </section>

      {/* SAMPLE PERKS */}
      <section id="perks" className="section">
        <SectionHead
          kicker="A taste of what's inside"
          title="Sample perks from around the city"
        />
        <div className="samples">
          {samples.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} style={{ minWidth: 0 }}>
              <div className="sample-card">
                <CardMedia partner={p} height={132} rounded={0} />
                <div className="sample-body">
                  <span className="sample-cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  <div className="sample-benefit">
                    <Icon name="ticket" size={16} /> {p.benefit}
                  </div>
                  <div className="sample-foot">
                    <span className="save-pill sm">Save {formatMoney(p.savings)}</span>
                    <span className="sample-cost">You pay {p.memberCost}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="samples-note">
          Plus {PARTNERS.length - samples.length}+ more perks across dining, family, museums,
          wellness, sports, shopping, and seasonal events — with new partners added all year.
          <span className="samples-fine"> Sample listings shown for illustration.</span>
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <SectionHead kicker="How it works" title="Three taps to savings" />
        <div className="steps">
          {[
            { n: "1", t: "Get your Pass", d: "Join online and your digital membership card lands in your phone instantly." },
            { n: "2", t: "Pick a perk", d: "Open your Pass, choose a deal you want, and tap to redeem." },
            { n: "3", t: "Show & save", d: "Show the confirmation screen at the counter and enjoy your perk." },
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
              You&apos;re on the list! We&apos;ll email you the moment the Pass goes live.
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
function SectionHead({ kicker, title, sub, noMargin }) {
  return (
    <div className="sechead" style={noMargin ? { marginBottom: 0 } : undefined}>
      <span className="sechead-kicker">{kicker}</span>
      <h2 className="sechead-title">{title}</h2>
      {sub && <p className="sechead-sub">{sub}</p>}
    </div>
  );
}

function CompareCell({ v }) {
  if (v === true) return <span className="cmp-yes">✓</span>;
  if (v === false) return <span className="cmp-no">—</span>;
  return <span className="cmp-txt">{v}</span>;
}

function ImpactEstimator({ onLead }) {
  const [presetKey, setPresetKey] = useState(ESTIMATOR_PRESETS[0].key);
  const [redemptions, setRedemptions] = useState(ESTIMATOR_PRESETS[0].redemptions);
  const [ticket, setTicket] = useState(ESTIMATOR_PRESETS[0].ticket);

  const choose = (p) => {
    setPresetKey(p.key);
    setRedemptions(p.redemptions);
    setTicket(p.ticket);
  };

  const annualVisits = redemptions * 12;
  const annualSpend = redemptions * ticket * 12;
  const visitsTween = useTween(annualVisits);
  const spendTween = useTween(annualSpend);

  return (
    <section className="section">
      <SectionHead
        kicker="The value to your business · run your own numbers"
        title="Estimate your year in the Pass"
        sub="Set the numbers that fit your business. Every projection is simple math on the values you choose -- not a promise or an average."
      />
      <div className="est">
        <div className="est-controls">
          <div className="est-presets" role="tablist" aria-label="Business type">
            {ESTIMATOR_PRESETS.map((p) => (
              <button
                key={p.key}
                type="button"
                role="tab"
                aria-selected={presetKey === p.key}
                className={presetKey === p.key ? "on" : ""}
                onClick={() => choose(p)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <label className="est-field">
            <span className="est-field-top">
              <span>Members who redeem / month</span>
              <b>{redemptions}</b>
            </span>
            <input
              type="range"
              min="5"
              max="150"
              step="5"
              value={redemptions}
              aria-label="Members who redeem per month"
              onChange={(e) => setRedemptions(Number(e.target.value))}
            />
          </label>

          <label className="est-field">
            <span className="est-field-top">
              <span>Average spend per visit</span>
              <b>{formatMoney(ticket)}</b>
            </span>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={ticket}
              aria-label="Average spend per visit"
              onChange={(e) => setTicket(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="est-out">
          <div className="est-metric">
            <div className="est-v">{fmtNum(Math.round(visitsTween), 0)}</div>
            <div className="est-l">Member visits a year</div>
          </div>
          <div className="est-metric est-metric--hero">
            <div className="est-v">{formatMoney(Math.round(spendTween))}</div>
            <div className="est-l">Attributed spend a year</div>
          </div>
          <button type="button" className="btn btn-dark est-cta" onClick={onLead}>
            Claim your free spot
          </button>
        </div>
      </div>
      <p className="est-note">
        Illustrative estimate based entirely on the numbers you set &mdash; redemptions &times;
        average ticket &times; 12 months. Not a guarantee of results.
      </p>
    </section>
  );
}

function BusinessView({ benefits, dashboard, price, totalPotential, onLead }) {
  const [chartRef, chartSeen] = useInView({ threshold: 0.3 });
  const [audRef, audSeen] = useInView({ threshold: 0.4 });
  const [provenRef, provenSeen] = useInView({ threshold: 0.35 });
  const [openFaq, setOpenFaq] = useState(0);
  const [chartView, setChartView] = useState("monthly");

  // Curate benefits to distinct value props -- "No POS" lives in assurances and
  // "repeat exposure" is covered by acquisition + the funnel, so we drop both here.
  const benefitTiles = useMemo(
    () => benefits.filter((b) => b.icon !== "receipt" && b.icon !== "refresh"),
    [benefits]
  );

  const cumulative = useMemo(
    () =>
      dashboard.monthly.reduce((acc, m, i) => {
        acc.push({ m: m.m, v: (i ? acc[i - 1].v : 0) + m.v });
        return acc;
      }, []),
    [dashboard.monthly]
  );
  const chartData = chartView === "monthly" ? dashboard.monthly : cumulative;
  const maxV = Math.max(...chartData.map((m) => m.v));

  return (
    <>
      {/* HERO */}
      <section className="hero hero--biz">
        <div className="hero-inner biz">
          <Reveal>
            <span className="eyebrow light">For Milwaukee businesses</span>
            <span className="free-badge">100% free to join</span>
            <h1 className="hero-h1 light">
              Milwaukee&apos;s audience.
              <br />
              Zero cost to you.
            </h1>
            <p className="hero-sub light">
              The Milwaukee Annual Pass is a membership locals buy to save all year at local
              businesses. You list one perk — free — and it puts your business in front of thousands
              of engaged locals. You only ever give a perk to a real customer who walks in.
            </p>
            <div className="hero-cta">
              <button className="btn btn-white" onClick={onLead}>
                Claim your free spot
              </button>
              <a href="#what" className="btn btn-ghost light">
                How it works
              </a>
            </div>
            <div className="hero-trust light-trust">
              <span>✓ Free to join</span>
              <span>✓ No POS integration</span>
              <span>✓ Live all year</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLAR 1 — WHAT IT IS */}
      <section id="what" className="section">
        <SectionHead kicker="Start here" title="What the Milwaukee Annual Pass is" />
        <div className="define">
          <div className="define-lead">
            <p>
              The Milwaukee Annual Pass is a <b>{formatMoney(price)}-a-year membership</b> that
              locals buy from Discover Milwaukee. One pass unlocks a full year of members-only perks
              — discounts, free admissions, and buy-one-get-one deals — at local businesses across
              the city.
            </p>
            <p>
              <b>Your business lists one perk, for free.</b> It lives inside the Pass all year. When
              a member walks in and shows their redemption screen, you honor the perk in person.
              That&apos;s the whole model — no fee, no software, no risk.
            </p>
          </div>
          <div className="define-cards">
            <div className="define-card">
              <span className="define-role">The member</span>
              <p>Pays {formatMoney(price)} once, then saves all year at the local spots they love.</p>
            </div>
            <div className="define-card">
              <span className="define-role">Discover Milwaukee</span>
              <p>Promotes the Pass to our local audience and sends those members through your door.</p>
            </div>
            <div className="define-card highlight">
              <span className="define-role">Your business</span>
              <p>Appears in the Pass free, and only ever gives a perk to a real customer who shows up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2a — THE VALUE TO YOU: the market already exists */}
      <section ref={provenRef} className="section">
        <SectionHead
          kicker="The value to your business · proven behavior"
          title="Built around proven consumer behavior"
          sub="The Annual Pass isn't a bet on an untested idea. It's built on how people already spend — locally, and in response to rewards."
        />
        <div className="proven">
          {PROVEN_STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 70} style={{ minWidth: 0 }}>
              <div className="proven-tile">
                <div className="proven-v">
                  <AnimatedStat value={s.v} run={provenSeen} ms={1200 + i * 120} />
                </div>
                <div className="proven-l">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="proven-note">{PROVEN_NOTE}</p>
        <p className="proven-src">{PROVEN_SOURCES}</p>
      </section>

      {/* PILLAR 2b — THE VALUE TO YOU: we already reach that market */}
      <section ref={audRef} className="reachband">
        <div className="reachband-inner">
          <span className="reach-kicker">The value to your business · the audience</span>
          <h2 className="reach-title">You&apos;re not starting from zero.</h2>
          <p className="reach-sub">
            Discover Milwaukee already reaches the people you want walking through your door.
          </p>
          <div className="reach-grid">
            {AUDIENCE.map((a, i) => (
              <div
                key={a.l}
                className="reach-stat"
                style={{
                  opacity: audSeen ? 1 : 0,
                  transform: audSeen ? "translateY(0)" : "translateY(14px)",
                  transition: `all .6s ease ${i * 90}ms`,
                }}
              >
                <div className="reach-v">
                  <AnimatedStat value={a.v} run={audSeen} ms={1200 + i * 120} />
                </div>
                <div className="reach-l">{a.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR 2c — THE VALUE TO YOU: how you capture it */}
      <section className="section">
        <SectionHead
          kicker="The value to your business · how you win"
          title="Behavior you can turn into customers"
          sub="The Milwaukee Annual Pass turns those behaviors into measurable customer acquisition."
        />
        <div className="model-copy">
          <p>
            Instead of offering a public discount to everyone, participating businesses create{" "}
            <b>one controlled, exclusive benefit</b> available only to verified Annual Pass members.
          </p>
          <p>
            <b>You control the offer. We bring the audience. The platform tracks the redemption.</b>{" "}
            You gain the opportunity to turn that visit into a paying customer — and a repeat one.
          </p>
        </div>
        <div className="pipeline">
          {ACQUISITION_FLOW.map((step, i) => (
            <Reveal key={step} delay={i * 80} style={{ minWidth: 0 }}>
              <div className="pipe-step">
                <span className="pipe-node">{step}</span>
                {i < ACQUISITION_FLOW.length - 1 && <span className="pipe-arrow">→</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLAR 2d — THE VALUE TO YOU: run your own numbers */}
      <ImpactEstimator onLead={onLead} />

      {/* PILLAR 3 — WHAT YOU GET: benefits */}
      <section className="section">
        <SectionHead kicker="What you get" title="Everything a partner unlocks" />
        <div className="benefit-grid">
          {benefitTiles.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 70}>
              <div className="benefit-tile">
                <span className="bt-ico"><Icon name={b.icon} size={24} stroke={1.9} /></span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLAR 3 — WHAT YOU GET: dashboard */}
      <section id="dashboard" className="section">
        <SectionHead kicker="What you get · your dashboard" title="See exactly what you're getting" />
        <div className="dash">
          <div className="dash-head">
            <div>
              <div className="dash-name">{dashboard.name}</div>
              <div className="dash-offer"><Icon name="ticket" size={16} /> {dashboard.offer}</div>
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
            <div className="dchart-head">
              <span>{chartView === "monthly" ? "Redemptions by month" : "Redemptions, running total"}</span>
              <div className="dchart-toggle" role="tablist" aria-label="Chart view">
                <button
                  type="button"
                  role="tab"
                  aria-selected={chartView === "monthly"}
                  className={chartView === "monthly" ? "on" : ""}
                  onClick={() => setChartView("monthly")}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={chartView === "cumulative"}
                  className={chartView === "cumulative" ? "on" : ""}
                  onClick={() => setChartView("cumulative")}
                >
                  Cumulative
                </button>
              </div>
            </div>
            <div className="bars">
              {chartData.map((m, i) => (
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

      {/* PILLAR 4 — WHY IT'S A SMART MOVE: assurances */}
      <section className="section">
        <SectionHead
          kicker="Why it's a smart move · no risk"
          title="Nothing to lose, a whole year to gain"
          sub="No fee, no hardware, no cannibalized sales. The Pass is built so partnering is all upside."
        />
        <div className="assure-grid">
          {PARTNER_ASSURANCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 80} style={{ minWidth: 0 }}>
              <div className="assure-tile">
                <span className="assure-ico"><Icon name={a.icon} size={22} /></span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLAR 4 — WHY IT'S A SMART MOVE: comparison */}
      <section className="section">
        <SectionHead
          kicker="Why it's a smart move · how it compares"
          title="A better deal than the marketing you're already buying"
        />
        <div className="cmp-wrap">
          <table className="cmp">
            <thead>
              <tr>
                <th />
                {PARTNER_COMPARISON.columns.map((c, i) => (
                  <th key={c} className={i === 0 ? "cmp-us" : ""}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PARTNER_COMPARISON.rows.map((r) => (
                <tr key={r.label}>
                  <td className="cmp-rowhead">{r.label}</td>
                  {r.vals.map((v, i) => (
                    <td key={i} className={i === 0 ? "cmp-us" : ""}><CompareCell v={v} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="cmp-note">Illustrative comparison for this demo.</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <SectionHead kicker="What partners say" title="Local businesses, real results" />
        <div className="quotes">
          {PARTNER_TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} style={{ minWidth: 0 }}>
              <figure className="quote">
                <div className="quote-mark">&ldquo;</div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="quote-avatar">{t.initials}</span>
                  <span>
                    <b>{t.name}</b>
                    <small>{t.business}</small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="quotes-note">Illustrative testimonials for this demo.</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <SectionHead kicker="Getting started" title="Live in three simple steps" />
        <div className="steps">
          {[
            { n: "1", t: "Post your offer", d: "Pick a perk that turns first-timers into regulars. It's free to list and runs for the full calendar year." },
            { n: "2", t: "Members redeem", d: "They show a confirmation screen at the counter — no POS integration, nothing to install." },
            { n: "3", t: "Watch it grow", d: "Track redemptions, new customers, and attributed spend right in your dashboard." },
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

      {/* FAQ */}
      <section className="section">
        <SectionHead kicker="Questions?" title="The honest answers" />
        <div className="faq">
          {PARTNER_FAQ.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className={`faq-item ${open ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="biz-cta">
          <span className="scarcity">Limited partner spots per category</span>
          <h2>Claim your spot before a competitor does.</h2>
          <p>
            It&apos;s free to join and takes minutes to set up. Tell us about your business and
            we&apos;ll get your offer in front of Milwaukee.
          </p>
          <button className="btn btn-white lg" onClick={onLead}>
            Become a partner — free
          </button>
          <div className="cta-trust">No fee · No POS · A full calendar year of exposure</div>
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
      .sechead-sub {
        font-family: ${BODY};
        font-size: 15px;
        color: ${C.ink2};
        line-height: 1.55;
        margin: 12px 0 0;
        max-width: 620px;
      }

      /* ---------- sample perks (members) ---------- */
      .samples {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .sample-card {
        background: #fff;
        border: 1px solid ${C.line};
        border-radius: 18px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: 0 6px 20px rgba(20,24,40,0.05);
      }
      .sample-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
      .sample-cat {
        font-family: ${BODY};
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${C.brand};
      }
      .sample-body h3 { font-family: ${DISPLAY}; font-size: 22px; margin: 0; letter-spacing: 0.01em; }
      .sample-benefit {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: ${C.ink};
        line-height: 1.45;
      }
      .sample-foot {
        margin-top: auto;
        padding-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }
      .sample-cost { font-family: ${BODY}; font-size: 13px; font-weight: 600; color: ${C.ink2}; }
      .samples-note {
        margin: 22px auto 0;
        max-width: 680px;
        text-align: center;
        font-size: 14.5px;
        color: ${C.ink2};
        line-height: 1.6;
      }
      .samples-fine { display: block; margin-top: 6px; font-size: 12px; color: #9aa2b1; }

      /* ---------- what it is (business) ---------- */
      .define { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 34px; align-items: start; }
      .define-lead p { font-size: 16px; line-height: 1.6; color: ${C.ink}; margin: 0 0 16px; }
      .define-lead p:last-child { margin-bottom: 0; }
      .define-cards { display: flex; flex-direction: column; gap: 12px; }
      .define-card {
        background: #fff;
        border: 1px solid ${C.line};
        border-radius: 14px;
        padding: 16px 18px;
      }
      .define-card.highlight {
        border-color: ${C.brand};
        box-shadow: 0 0 0 1px ${C.brand} inset;
        background: #f2f6ff;
      }
      .define-role {
        display: block;
        font-family: ${BODY};
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${C.brand};
        margin-bottom: 6px;
      }
      .define-card p { margin: 0; font-size: 14.5px; line-height: 1.5; color: ${C.ink2}; }
      .cmp-note { font-size: 12px; color: ${C.ink2}; margin-top: 12px; text-align: center; }

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
      .btn-dark { background: ${C.ink}; color: #fff; }
      .btn-dark:hover { box-shadow: 0 10px 26px rgba(14, 17, 22, 0.28); }
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

      /* ---------- save pill ---------- */
      .save-pill {
        background: #e7f7ee; color: ${C.good};
        font-weight: 700; font-size: 13px;
        padding: 6px 12px; border-radius: 999px; white-space: nowrap;
      }
      .save-pill.sm { font-size: 11.5px; padding: 4px 9px; }

      /* ---------- misc ---------- */
      .muted { color: ${C.ink2}; font-size: 14px; }
      .muted.center { text-align: center; }

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
      .benefit-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
      .benefit-tile { background: #fff; border: 1px solid ${C.line}; border-radius: 16px; padding: 20px; height: 100%; transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
      .benefit-tile:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(10,92,255,.10); border-color: #cfd9f7; }
      .bt-ico {
        display: inline-flex; align-items: center; justify-content: center;
        width: 46px; height: 46px; border-radius: 13px;
        background: linear-gradient(135deg, #eaf1ff, #dbe7ff); color: ${C.brand};
      }
      .benefit-tile h3 { font-family: ${DISPLAY}; font-size: 18px; margin: 12px 0 6px; }
      .benefit-tile p { color: ${C.ink2}; font-size: 13.5px; margin: 0; line-height: 1.5; }

      .dash { background: #fff; border: 1px solid ${C.line}; border-radius: 20px; padding: 24px; }
      .dash-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; margin-bottom: 20px; }
      .dash-name { font-family: ${DISPLAY}; font-size: 26px; }
      .dash-offer { color: ${C.ink2}; font-weight: 600; font-size: 14px; margin-top: 4px; display: inline-flex; align-items: center; gap: 7px; }
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
      .dchart-head {
        font-family: ${BODY}; font-weight: 600; font-size: 14px; color: ${C.ink2}; margin-bottom: 12px;
        display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
      }
      .dchart-toggle {
        display: inline-flex; background: ${C.bg}; border: 1px solid ${C.line};
        border-radius: 999px; padding: 3px;
      }
      .dchart-toggle button {
        border: 0; background: none; cursor: pointer; font-family: ${BODY}; font-weight: 700;
        font-size: 12px; letter-spacing: 0.02em; color: ${C.ink2};
        padding: 6px 14px; border-radius: 999px; transition: color 0.2s, background 0.2s, box-shadow 0.2s;
      }
      .dchart-toggle button.on { background: #fff; color: ${C.brand}; box-shadow: 0 2px 8px rgba(10,92,255,0.14); }
      .dchart-toggle button:focus-visible { outline: 2px solid ${C.brand}; outline-offset: 2px; }
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
      .biz-cta p { color: #d5e0f5; font-size: 16px; margin: 0 auto 22px; max-width: 520px; }
      .scarcity {
        display: inline-block; background: rgba(255, 255, 255, 0.14); color: #ffe08a;
        font-weight: 700; font-size: 12.5px; letter-spacing: 0.05em;
        padding: 7px 14px; border-radius: 999px; margin-bottom: 16px;
      }
      .cta-trust { margin-top: 16px; font-size: 13px; color: #b8c6e6; font-weight: 600; letter-spacing: 0.02em; }

      /* ---------- business: free badge + hero trust ---------- */
      .free-badge {
        display: inline-block; background: #4cf0a0; color: #063a25;
        font-family: ${BODY}; font-weight: 800; font-size: 12px; letter-spacing: 0.08em;
        text-transform: uppercase; padding: 6px 13px; border-radius: 999px;
        margin: 0 0 16px 8px; box-shadow: 0 6px 18px rgba(76, 240, 160, 0.35);
      }
      .hero-trust.light-trust { color: #cfe0ff; }

      /* ---------- business: audience reach band ---------- */
      .reachband {
        background:
          radial-gradient(600px 300px at 85% -20%, rgba(76, 240, 160, 0.14), transparent),
          ${C.ink};
        color: #fff; text-align: center; padding: 54px 20px;
      }
      .reachband-inner { max-width: 1000px; margin: 0 auto; }
      .reach-kicker {
        font-family: ${BODY}; font-size: 12px; font-weight: 700; letter-spacing: 0.14em;
        text-transform: uppercase; color: #7fb0ff;
      }
      .reach-title { font-family: ${DISPLAY}; font-size: clamp(28px, 5vw, 46px); margin: 8px 0 6px; }
      .reach-sub { color: #aeb6c4; font-size: 16px; margin: 0 auto 30px; max-width: 520px; }
      .reach-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
      .reach-stat {
        background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 16px; padding: 22px 12px;
      }
      .reach-v {
        font-family: ${DISPLAY}; font-size: clamp(30px, 5vw, 46px); line-height: 1;
        background: linear-gradient(120deg, #7fb0ff, #4cf0a0);
        -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
      }
      .reach-l { font-size: 13px; color: #c7cede; margin-top: 8px; }

      /* ---------- business: assurances ---------- */
      .assure-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      .assure-tile {
        background: #fff; border: 1px solid ${C.line}; border-radius: 16px; padding: 22px; height: 100%;
        border-top: 3px solid ${C.good};
      }
      .assure-ico {
        display: inline-flex; align-items: center; justify-content: center;
        width: 46px; height: 46px; border-radius: 13px;
        background: linear-gradient(135deg, #e6f7ee, #d6f2e2); color: ${C.good};
      }
      .assure-tile h3 { font-family: ${DISPLAY}; font-size: 19px; margin: 12px 0 6px; }
      .assure-tile p { color: ${C.ink2}; font-size: 13.5px; margin: 0; line-height: 1.5; }

      /* ---------- business: proven behavior stats ---------- */
      .proven { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
      .proven-tile {
        background: #fff; border: 1px solid ${C.line}; border-radius: 16px;
        padding: 22px 18px; height: 100%; text-align: center;
        border-top: 3px solid ${C.brand};
      }
      .proven-v {
        font-family: ${DISPLAY}; font-size: clamp(30px, 4vw, 44px); line-height: 1;
        color: ${C.brand}; letter-spacing: 0.01em;
      }
      .proven-l { margin-top: 10px; font-size: 13px; color: ${C.ink2}; line-height: 1.45; }
      .proven-note { margin: 18px 0 0; font-size: 12.5px; color: ${C.ink2}; font-style: italic; line-height: 1.5; }
      .proven-src { margin: 8px 0 0; font-size: 11.5px; color: #9aa2b1; line-height: 1.5; }

      /* ---------- business: acquisition pipeline ---------- */
      .model-copy { max-width: 720px; }
      .model-copy p { font-size: 16px; line-height: 1.6; color: ${C.ink}; margin: 0 0 14px; }
      .model-copy p:last-child { margin-bottom: 0; }
      .pipeline {
        display: flex; flex-wrap: wrap; align-items: center; gap: 10px;
        margin-top: 24px;
      }
      .pipe-step { display: flex; align-items: center; gap: 10px; }
      .pipe-node {
        background: ${C.ink}; color: #fff; border-radius: 999px;
        font-family: ${BODY}; font-weight: 700; font-size: 13.5px;
        padding: 11px 18px; white-space: nowrap;
      }
      .pipe-arrow { color: ${C.brand}; font-size: 20px; font-weight: 700; }
      .pipe-node { transition: transform .18s ease, box-shadow .18s ease; }
      .pipe-node:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(14,17,22,.18); }

      /* ---------- business: impact estimator ---------- */
      .est {
        display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 22px;
        background: #fff; border: 1px solid ${C.line}; border-radius: 22px;
        padding: 26px; box-shadow: 0 18px 50px rgba(14,17,22,.06);
      }
      .est-controls { display: flex; flex-direction: column; gap: 22px; }
      .est-presets {
        display: inline-flex; flex-wrap: wrap; gap: 6px; background: ${C.bg};
        border: 1px solid ${C.line}; border-radius: 14px; padding: 5px;
      }
      .est-presets button {
        flex: 1 1 auto; border: 0; background: none; cursor: pointer;
        font-family: ${BODY}; font-weight: 700; font-size: 13px; color: ${C.ink2};
        padding: 9px 14px; border-radius: 10px; white-space: nowrap;
        transition: color 0.2s, background 0.2s, box-shadow 0.2s;
      }
      .est-presets button.on { background: #fff; color: ${C.brand}; box-shadow: 0 3px 10px rgba(10,92,255,0.14); }
      .est-presets button:focus-visible { outline: 2px solid ${C.brand}; outline-offset: 2px; }
      .est-field { display: flex; flex-direction: column; gap: 12px; }
      .est-field-top {
        display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
        font-size: 14px; font-weight: 600; color: ${C.ink2};
      }
      .est-field-top b { font-family: ${DISPLAY}; font-size: 26px; color: ${C.ink}; }
      .est-field input[type="range"] {
        -webkit-appearance: none; appearance: none; width: 100%; height: 6px;
        border-radius: 999px; background: ${C.line}; cursor: pointer;
      }
      .est-field input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%;
        background: ${C.brand}; border: 3px solid #fff; box-shadow: 0 3px 10px rgba(10,92,255,0.4); cursor: pointer;
      }
      .est-field input[type="range"]::-moz-range-thumb {
        width: 22px; height: 22px; border-radius: 50%; border: 3px solid #fff;
        background: ${C.brand}; box-shadow: 0 3px 10px rgba(10,92,255,0.4); cursor: pointer;
      }
      .est-field input[type="range"]:focus-visible { outline: 2px solid ${C.brand}; outline-offset: 4px; }
      .est-out {
        display: flex; flex-direction: column; justify-content: center; gap: 14px;
        background: linear-gradient(160deg, #0b1b3a, #0a5cff 220%);
        border-radius: 18px; padding: 26px; color: #fff;
      }
      .est-metric { text-align: left; }
      .est-v { font-family: ${DISPLAY}; font-size: clamp(34px, 6vw, 54px); line-height: 1; }
      .est-metric--hero .est-v {
        background: linear-gradient(120deg, #7fb0ff, #4cf0a0);
        -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
      }
      .est-l { font-size: 13px; color: #c7cede; margin-top: 6px; font-weight: 600; letter-spacing: 0.02em; }
      .est-cta { margin-top: 6px; align-self: flex-start; }
      .est-note { margin: 14px 0 0; font-size: 12px; color: ${C.ink2}; font-style: italic; line-height: 1.5; }

      /* ---------- business: comparison table ---------- */
      .cmp-wrap { overflow-x: auto; border: 1px solid ${C.line}; border-radius: 18px; background: #fff; }
      .cmp { width: 100%; border-collapse: collapse; min-width: 620px; }
      .cmp th, .cmp td {
        padding: 15px 14px; text-align: center; font-size: 14px; border-bottom: 1px solid ${C.line};
      }
      .cmp thead th { font-family: ${BODY}; font-weight: 700; font-size: 13.5px; color: ${C.ink2}; }
      .cmp .cmp-rowhead { text-align: left; font-weight: 600; color: ${C.ink}; white-space: nowrap; }
      .cmp .cmp-us {
        background: linear-gradient(180deg, #eef4ff, #f7faff);
        position: relative;
      }
      .cmp thead .cmp-us { color: ${C.brand}; font-weight: 800; }
      .cmp tbody tr:last-child td { border-bottom: 0; }
      .cmp-crown { display: block; color: ${C.gold}; font-size: 13px; margin-bottom: 2px; }
      .cmp-yes { color: ${C.good}; font-weight: 800; font-size: 17px; }
      .cmp-no { color: #c2c8d2; font-weight: 700; }
      .cmp-txt { color: ${C.ink2}; font-size: 13px; }

      /* ---------- business: testimonials ---------- */
      .quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
      .quote {
        background: #fff; border: 1px solid ${C.line}; border-radius: 18px; padding: 24px;
        margin: 0; position: relative; height: 100%; display: flex; flex-direction: column;
      }
      .quote-mark {
        font-family: ${DISPLAY}; font-size: 54px; line-height: 0.6; color: ${C.brand}; opacity: 0.25;
      }
      .quote blockquote {
        margin: 10px 0 18px; font-size: 16px; line-height: 1.55; color: ${C.ink}; flex: 1;
      }
      .quote figcaption { display: flex; align-items: center; gap: 10px; }
      .quote-avatar {
        width: 42px; height: 42px; border-radius: 50%; flex: none;
        background: linear-gradient(135deg, ${C.brand}, #4c8bff); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-family: ${DISPLAY}; font-size: 15px; letter-spacing: .02em;
      }
      .quote figcaption b { display: block; font-size: 14px; }
      .quote figcaption small { color: ${C.ink2}; font-size: 12.5px; }
      .quotes-note { font-size: 12px; color: ${C.ink2}; margin-top: 14px; text-align: center; }

      /* ---------- business: FAQ ---------- */
      .faq { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
      .faq-item {
        background: #fff; border: 1px solid ${C.line}; border-radius: 14px; padding: 4px 18px;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .faq-item.open { border-color: ${C.brand}; box-shadow: 0 8px 24px rgba(10, 92, 255, 0.08); }
      .faq-q {
        display: flex; align-items: center; justify-content: space-between; gap: 14px;
        font-family: inherit; color: inherit; text-align: left; width: 100%;
        background: none; border: 0; cursor: pointer;
        font-weight: 600; font-size: 16px; padding: 16px 0;
      }
      .faq-q:focus-visible { outline: 2px solid ${C.brand}; outline-offset: 3px; border-radius: 6px; }
      .faq-toggle { color: ${C.brand}; font-size: 22px; font-weight: 700; flex: 0 0 auto; }
      .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
      .faq-item.open .faq-a { max-height: 260px; }
      .faq-a p { color: ${C.ink2}; font-size: 14.5px; line-height: 1.6; margin: 0 0 16px; }

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
      .modal-x {
        position: absolute; top: 12px; right: 12px; z-index: 2;
        width: 34px; height: 34px; border-radius: 50%; border: 0;
        background: rgba(255, 255, 255, 0.9); font-size: 15px; cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
      .modal-title { font-family: ${DISPLAY}; font-size: 26px; margin: 0; }
      .modal-desc { color: ${C.ink2}; font-size: 14.5px; margin: 4px 0 0; }
      .check-ring { display: flex; justify-content: center; margin-bottom: 6px; }
      .check-c { stroke: ${C.good}; stroke-width: 3; stroke-dasharray: 151; stroke-dashoffset: 151; animation: draw 0.5s ease forwards; }
      .check-k { stroke: ${C.good}; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 48; stroke-dashoffset: 48; animation: draw 0.4s 0.4s ease forwards; }
      @keyframes draw { to { stroke-dashoffset: 0; } }

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

      /* ---------- responsive ---------- */
      @media (max-width: 900px) {
        .benefit-grid { grid-template-columns: repeat(2, 1fr); }
        .assure-grid { grid-template-columns: repeat(2, 1fr); }
        .reach-grid { grid-template-columns: repeat(2, 1fr); }
        .proven { grid-template-columns: repeat(3, 1fr); }
        .quotes { grid-template-columns: 1fr; }
        .steps { grid-template-columns: 1fr; }
        .samples { grid-template-columns: repeat(2, 1fr); }
        .define { grid-template-columns: 1fr; gap: 24px; }
        .est { grid-template-columns: 1fr; }
      }
      @media (max-width: 767px) {
        .hero-inner { grid-template-columns: 1fr; text-align: center; }
        .hero-copy .eyebrow, .hero-cta, .hero-trust { justify-content: center; }
        .hero-sub { margin-left: auto; margin-right: auto; }
        .hero-card { margin-top: 10px; }
        .dash-stats { grid-template-columns: repeat(2, 1fr); }
        .waitform { flex-direction: column; }
        .section { padding: 34px 16px 34px; }
      }
      @media (max-width: 420px) {
        .benefit-grid { grid-template-columns: 1fr; }
        .assure-grid { grid-template-columns: 1fr; }
        .proven { grid-template-columns: repeat(2, 1fr); }
        .dash-stats { grid-template-columns: 1fr; }
        .reach-grid { grid-template-columns: repeat(2, 1fr); }
        .free-badge { margin-left: 0; }
        .samples { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}
