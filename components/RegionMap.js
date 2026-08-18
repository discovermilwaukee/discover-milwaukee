import React, { useState, useRef, useEffect, useCallback } from "react";
import { COUNTIES, VIEWBOX, project } from "../lib/regionMapData";

// Category colors + display order for the legend/dots. Keyed by the guide's
// section ids so a dot's color follows its section.
const CATEGORY = {
  "apple-orchards": { label: "Apple Orchards", color: "#C0392B" },
  "pumpkin-patches": { label: "Pumpkin Patches", color: "#E67E22" },
  "haunted-houses": { label: "Haunted Houses", color: "#6C3483" },
  "fall-color": { label: "Fall Color", color: "#B8860B" },
  "food-drink": { label: "Food & Drink", color: "#1F7A4D" },
  "day-trips": { label: "Day Trips", color: "#0B77BD" },
};
const ORDER = Object.keys(CATEGORY);

const c = { green1: "#2C5235", cream: "#F7F1E7", beige: "#EBDFC1", ink: "#20291F", tan: "#9E7F4B" };
const BODY = "'Jost', system-ui, -apple-system, sans-serif";
const DISPLAY = "'Anton', system-ui, -apple-system, sans-serif";

const W = VIEWBOX.w;
const H = VIEWBOX.h;

// 3D extrusion: every county sits on a stacked "base"; active ones lift off it.
const DEPTH = 11; // resting slab thickness (user units)
const LIFT = 16; // how far an active county rises off the board
const WALL = "#C9AC72"; // base tan for the extruded side walls

function darken(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const cl = (v) => Math.max(0, Math.min(255, Math.round(v * f)));
  return `rgb(${cl((n >> 16) & 255)},${cl((n >> 8) & 255)},${cl(n & 255)})`;
}

// Parse an SVG path "d" (M x,y x,y ... Z, possibly multi-subpath) into rings.
function parseRings(d) {
  return d
    .split("Z")
    .filter((s) => s.trim())
    .map((s) => {
      const pts = [];
      const re = /(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g;
      let m;
      while ((m = re.exec(s))) pts.push([parseFloat(m[1]), parseFloat(m[2])]);
      return pts;
    });
}
const COUNTY_RINGS = COUNTIES.map((co) => ({ name: co.name, rings: parseRings(co.d) }));
function countyOf(x, y) {
  for (const { name, rings } of COUNTY_RINGS) {
    let inside = false;
    for (const ring of rings) {
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
      }
    }
    if (inside) return name;
  }
  return null;
}

// Precompute the darkened side-wall shades once (deepest = darkest).
const WALL_STACK = [];
for (let k = DEPTH; k >= 1; k--) {
  const f = 0.86 - 0.36 * ((k - 1) / (DEPTH - 1));
  WALL_STACK.push({ k, fill: darken(WALL, f) });
}

const ARROWS = ["→", "↘", "↓", "↙", "←", "↖", "↑", "↗"];
function arrowFor(dx, dy) {
  let a = (Math.atan2(dy, dx) * 180) / Math.PI; // 0=E, 90=S(down), -90=N(up)
  if (a < 0) a += 360; // 0..360, clockwise from East
  return ARROWS[Math.round(a / 45) % 8];
}

export default function RegionMap({ items = [] }) {
  const [hovered, setHovered] = useState(null); // dot slug (mouse/focus)
  const [pinned, setPinned] = useState(null); // dot slug (tap)
  const [hoveredCounty, setHoveredCounty] = useState(null); // county name (mouse/focus)
  const [selectedCounty, setSelectedCounty] = useState(null); // county name (click/tap lock)
  const [filter, setFilter] = useState(null); // category id or null
  const [reduce, setReduce] = useState(false);
  const lastPointer = useRef("mouse");

  const active = hovered || pinned;
  const activeCounty = hoveredCounty || selectedCounty;

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on));
  }, []);

  const scrollToCard = useCallback((slug) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(slug);
    if (!el) return;
    const r = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
    const prev = el.style.boxShadow;
    el.style.transition = "box-shadow 0.25s ease";
    el.style.boxShadow = "0 0 0 3px #F0A623";
    window.setTimeout(() => { el.style.boxShadow = prev; }, 1700);
    setPinned(null);
  }, []);

  // Project every item; split into on-map dots vs off-map edge markers.
  const dots = [];
  const edges = [];
  for (const it of items) {
    const p = project(it.lng, it.lat);
    const meta = CATEGORY[it.category] || { label: it.categoryLabel || "", color: c.tan };
    const enriched = { ...it, x: p.x, y: p.y, color: meta.color, catLabel: meta.label };
    if (p.x >= 8 && p.x <= W - 8 && p.y >= 8 && p.y <= H - 8) dots.push(enriched);
    else edges.push(enriched);
  }

  // Group on-map dots by the county they fall in, so a lifted county carries
  // its pins up with it.
  const dotsByCounty = {};
  const looseDots = [];
  for (const d of dots) {
    const cn = countyOf(d.x, d.y);
    if (cn) (dotsByCounty[cn] || (dotsByCounty[cn] = [])).push(d);
    else looseDots.push(d);
  }

  const present = ORDER.filter((id) => items.some((it) => it.category === id));
  const dimmed = (cat) => filter && cat !== filter;

  const tip = active ? [...dots, ...edges].find((d) => d.slug === active) : null;
  const tipCounty = tip ? countyOf(tip.x, tip.y) : null;
  const tipLift = tip && tipCounty && activeCounty === tipCounty ? LIFT : 0;

  const handleClick = (slug) => {
    if (lastPointer.current === "touch") {
      setPinned((p) => (p === slug ? null : slug));
    } else {
      scrollToCard(slug);
    }
  };

  // Draw order: keep the active county last so it pops above its neighbors.
  const ordered = [...COUNTIES];
  if (activeCounty) {
    const i = ordered.findIndex((co) => co.name === activeCounty);
    if (i >= 0) ordered.push(ordered.splice(i, 1)[0]);
  }

  const renderDot = (d) => {
    const faded = dimmed(d.category);
    const isActive = active === d.slug;
    return (
      <g key={d.slug} opacity={faded ? 0.12 : 1} style={{ cursor: faded ? "default" : "pointer" }}
         tabIndex={faded ? -1 : 0} role="button" aria-label={`${d.name} — ${d.catLabel}`}
         onPointerDown={(e) => { lastPointer.current = e.pointerType || "mouse"; }}
         onClick={(e) => { e.stopPropagation(); if (!faded) handleClick(d.slug); }}
         onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !faded) { e.preventDefault(); scrollToCard(d.slug); } }}
         onFocus={() => { if (!faded) { setHovered(d.slug); const cn = countyOf(d.x, d.y); if (cn) setHoveredCounty(cn); } }}
         onBlur={() => { setHovered(null); setHoveredCounty(null); }}
         onPointerEnter={(e) => { if (e.pointerType === "mouse" && !faded) setHovered(d.slug); }}
         onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovered(null); }}>
        {isActive && <circle cx={d.x} cy={d.y} r="16" fill={d.color} opacity="0.25" />}
        <circle cx={d.x} cy={d.y} r={isActive ? 11 : 9} fill={d.color} stroke="#fff" strokeWidth="2.5" />
      </g>
    );
  };

  return (
    <div style={{ fontFamily: BODY }}>
      {/* Legend / filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
        <button
          type="button"
          onClick={() => setFilter(null)}
          aria-pressed={filter === null}
          style={chip(filter === null ? c.green1 : "#fff", filter === null ? "#fff" : c.ink, filter === null ? c.green1 : c.beige)}
        >
          All places
        </button>
        {present.map((id) => {
          const on = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter((f) => (f === id ? null : id))}
              aria-pressed={on}
              style={chip(on ? CATEGORY[id].color : "#fff", on ? "#fff" : c.ink, on ? CATEGORY[id].color : c.beige)}
            >
              <span aria-hidden style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: CATEGORY[id].color, marginRight: "7px", verticalAlign: "middle", border: on ? "1px solid #fff" : "none" }} />
              {CATEGORY[id].label}
            </button>
          );
        })}
      </div>

      <div style={{ position: "relative", maxWidth: "560px", margin: "0 auto" }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Raised relief map of southeastern Wisconsin counties with fall destinations marked"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px", border: `1px solid ${c.beige}`, touchAction: "manipulation" }}
          onClick={() => { setPinned(null); setSelectedCounty(null); }}
        >
          <defs>
            <radialGradient id="rm-bg" cx="50%" cy="36%" r="80%">
              <stop offset="0%" stopColor="#FBF6EC" />
              <stop offset="100%" stopColor="#ECE1CC" />
            </radialGradient>
            <linearGradient id="rm-face" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F1E7D3" />
            </linearGradient>
            <linearGradient id="rm-face-active" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="100%" stopColor="#FBEBCF" />
            </linearGradient>
          </defs>

          {/* Table surface */}
          <rect x="0" y="0" width={W} height={H} fill="url(#rm-bg)" />

          {/* Counties as extruded slabs */}
          {ordered.map((co) => {
            const isActive = activeCounty === co.name;
            const cDots = dotsByCounty[co.name] || [];
            return (
              <g
                key={co.name}
                style={{
                  cursor: "pointer",
                  transition: reduce ? "none" : "transform 0.3s cubic-bezier(.2,.8,.2,1), filter 0.3s ease",
                  transform: isActive ? `translateY(${-LIFT}px)` : "translateY(0)",
                  filter: isActive
                    ? "drop-shadow(0 20px 18px rgba(60,45,20,0.34))"
                    : "drop-shadow(0 3px 5px rgba(60,45,20,0.16))",
                }}
                onPointerEnter={(e) => { if (e.pointerType === "mouse") setHoveredCounty(co.name); }}
                onPointerLeave={(e) => { if (e.pointerType === "mouse") setHoveredCounty((p) => (p === co.name ? null : p)); }}
                onPointerDown={(e) => { lastPointer.current = e.pointerType || "mouse"; }}
                onClick={(e) => { e.stopPropagation(); setPinned(null); setSelectedCounty((p) => (p === co.name ? null : co.name)); }}
              >
                {/* Extruded side walls */}
                {WALL_STACK.map(({ k, fill }) => (
                  <path key={k} d={co.d} transform={`translate(0,${k})`} fill={fill} />
                ))}
                {/* Top face */}
                <path d={co.d} fill={isActive ? "url(#rm-face-active)" : "url(#rm-face)"} stroke={c.tan} strokeWidth={isActive ? 3 : 2.2} strokeLinejoin="round" />
                {/* Label */}
                <text x={co.lx} y={co.ly} textAnchor="middle" style={{ fontFamily: BODY, fontSize: "26px", fontWeight: 700, letterSpacing: "0.5px", fill: isActive ? "#8A7752" : "#B9A98A", pointerEvents: "none", textTransform: "uppercase" }}>
                  {co.name}
                </text>
                {/* Pins that ride with the county */}
                {cDots.map(renderDot)}
              </g>
            );
          })}

          {/* Any dots not resolved to a county (fallback) */}
          {looseDots.map(renderDot)}

          {/* Off-map edge markers (farther day trips), clamped to the border by direction */}
          {edges.map((d) => {
            const dx = d.x - W / 2;
            const dy = d.y - H / 2;
            const m = 22;
            const scale = Math.min((W / 2 - m) / (Math.abs(dx) || 1e-6), (H / 2 - m) / (Math.abs(dy) || 1e-6));
            const ex = W / 2 + dx * scale;
            const ey = H / 2 + dy * scale;
            const faded = dimmed(d.category);
            return (
              <g key={d.slug} opacity={faded ? 0.12 : 1} style={{ cursor: faded ? "default" : "pointer", filter: "drop-shadow(0 3px 4px rgba(60,45,20,0.25))" }}
                 tabIndex={faded ? -1 : 0} role="button" aria-label={`${d.name} — ${d.catLabel}, beyond the map`}
                 onPointerDown={(e) => { lastPointer.current = e.pointerType || "mouse"; }}
                 onClick={(e) => { e.stopPropagation(); if (!faded) handleClick(d.slug); }}
                 onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !faded) { e.preventDefault(); scrollToCard(d.slug); } }}
                 onFocus={() => !faded && setHovered(d.slug)} onBlur={() => setHovered(null)}
                 onPointerEnter={(e) => { if (e.pointerType === "mouse" && !faded) setHovered(d.slug); }}
                 onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovered(null); }}>
                <circle cx={ex} cy={ey} r="13" fill={d.color} stroke="#fff" strokeWidth="2.5" opacity="0.9" />
                <text x={ex} y={ey + 7} textAnchor="middle" style={{ fontFamily: BODY, fontSize: "18px", fontWeight: 700, fill: "#fff", pointerEvents: "none" }}>
                  {arrowFor(dx, dy)}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {tip && (
          <div
            role="status"
            style={{
              position: "absolute",
              left: `${(tip.x / W) * 100}%`,
              top: `${((tip.y - tipLift) / H) * 100}%`,
              transform: `translate(-50%, calc(-100% - 14px))`,
              width: "min(240px, 72vw)",
              background: "#fff",
              border: `1px solid ${c.beige}`,
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(32,41,31,0.18)",
              padding: "12px 14px",
              pointerEvents: "auto",
              zIndex: 5,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "5px" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: tip.color, flexShrink: 0 }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", color: tip.color }}>{tip.catLabel}</span>
            </div>
            <p style={{ margin: "0 0 4px", fontSize: "15px", fontWeight: 700, color: c.green1, fontFamily: DISPLAY, textTransform: "uppercase", letterSpacing: "0.4px", lineHeight: 1.15 }}>{tip.name}</p>
            {tip.where && <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#8a8a8a" }}>{tip.where}</p>}
            {tip.blurb && <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#4a4a4a", lineHeight: 1.5 }}>{tip.blurb}</p>}
            <button type="button" onClick={() => scrollToCard(tip.slug)} style={{ background: "none", border: "none", padding: 0, color: c.green1, fontWeight: 700, fontSize: "13px", cursor: "pointer", fontFamily: BODY }}>
              View details →
            </button>
          </div>
        )}
      </div>

      <p style={{ textAlign: "center", fontSize: "12px", color: "#999", margin: "12px 0 0" }}>
        Hover or tap a county to raise it; hover or tap a dot for a quick look, then click to jump to the full listing. Arrows on the edge point toward farther day trips. Dot positions are approximate.
      </p>
    </div>
  );
}

function chip(bg, color, border) {
  return {
    background: bg,
    color,
    border: `1px solid ${border}`,
    borderRadius: "999px",
    padding: "7px 14px",
    fontSize: "13px",
    fontWeight: 600,
    fontFamily: BODY,
    cursor: "pointer",
    lineHeight: 1,
  };
}
