// Shared event tracking. Fans a named event out to every analytics provider
// that happens to be loaded, so call sites never need to know which ones are on.
//
//   trackEvent("partner_form_opened", { source: "hero" })
//
// Providers:
//   - Vercel Web Analytics (custom events; Pro plan) via @vercel/analytics
//   - Microsoft Clarity (custom events + tags) when NEXT_PUBLIC_CLARITY_ID is set
//   - Google Analytics 4 when NEXT_PUBLIC_GA_ID is set
import { track } from "@vercel/analytics";

export function trackEvent(name, props = {}) {
  if (typeof window === "undefined") return;
  try {
    track(name, props);
  } catch (_) {}
  try {
    if (typeof window.clarity === "function") {
      window.clarity("event", name);
      Object.entries(props).forEach(([k, v]) => {
        if (v !== undefined && v !== null) window.clarity("set", `${name}.${k}`, String(v));
      });
    }
  } catch (_) {}
  try {
    if (typeof window.gtag === "function") window.gtag("event", name, props);
  } catch (_) {}
}
