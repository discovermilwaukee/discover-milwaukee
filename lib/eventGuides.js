// Evergreen guides to suggest next to an event, by calendar category.
import { findGuideByHref } from "./guides";

const BY_CATEGORY = {
  "Food & Drink": ["/best-restaurants-milwaukee", "/best-happy-hour-milwaukee", "/new-restaurants-milwaukee"],
  "Live Music": ["/live-music-milwaukee", "/milwaukee-nightlife", "/best-happy-hour-milwaukee"],
  Arts: ["/milwaukee-museums", "/arts-culture-milwaukee", "/milwaukee-date-ideas"],
  Sports: ["/milwaukee-sports-bars", "/bucks-game-guide-milwaukee", "/best-happy-hour-milwaukee"],
  Comedy: ["/milwaukee-comedy-clubs", "/milwaukee-date-ideas", "/milwaukee-nightlife"],
  Family: ["/things-to-do-with-kids-milwaukee", "/free-things-milwaukee", "/winter-guide-milwaukee"],
  Nightlife: ["/milwaukee-nightlife", "/best-cocktail-bars-milwaukee", "/best-happy-hour-milwaukee"],
  Outdoors: ["/milwaukee-hiking-trails", "/winter-guide-milwaukee", "/free-things-milwaukee"],
  Fitness: ["/milwaukee-hiking-trails", "/free-things-milwaukee", "/winter-guide-milwaukee"],
  Shopping: ["/milwaukee-shopping", "/christmas-milwaukee", "/best-brunch-milwaukee"],
};

export function guidesForCategory(category) {
  return (BY_CATEGORY[category] || ["/things-to-do-milwaukee", "/free-things-milwaukee"])
    .map((href) => {
      const found = findGuideByHref(href);
      return found ? { href, title: found.guide.title, desc: found.guide.desc || "" } : null;
    })
    .filter(Boolean);
}
