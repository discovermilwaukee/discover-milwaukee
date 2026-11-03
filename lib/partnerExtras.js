// Partners added in code (logos hosted in /public/images/partners) and merged
// with the live "Partners" Google Sheet. Use this for brands whose logos we
// host ourselves; negative `order` values put them at the front of the wall.
export const EXTRA_PARTNERS = [
  { id: "extra-fox-one", name: "FOX One", logoUrl: "/images/partners/fox-one.svg", website: "https://www.fox.com/fox-one/", category: "trusted", order: -3 },
  { id: "extra-mlb", name: "MLB", logoUrl: "/images/partners/mlb.svg", website: "https://www.mlb.com/", category: "trusted", order: -2 },
  { id: "extra-nike-diamond", name: "Nike Diamond", logoUrl: "/images/partners/nike-diamond.svg", website: "https://www.nike.com/baseball", category: "trusted", order: -1 },
];

// Logo overrides for sheet rows whose hosted image is poor (e.g. a JPEG with a
// white background). Keyed by lowercased partner name; file lives in /public.
export const LOGO_OVERRIDES = {
  "milwaukee brewers": "/images/partners/brewers.svg",
};

// Merge sheet partners with the code-side extras (sheet wins on name collisions),
// apply logo overrides, and sort by order.
export function mergeExtras(partners = []) {
  partners = partners.map((p) => {
    const key = (p.name || "").trim().toLowerCase();
    return LOGO_OVERRIDES[key] ? { ...p, logoUrl: LOGO_OVERRIDES[key] } : p;
  });
  const names = new Set(partners.map((p) => (p.name || "").trim().toLowerCase()));
  const extras = EXTRA_PARTNERS.filter((e) => !names.has(e.name.toLowerCase()));
  return [...partners, ...extras].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
