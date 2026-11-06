// Sitemap for individual event pages. Generated on request from lib/events.js so it never
// lists an event that is over. The hand-maintained /sitemap.xml covers everything else.
import { eventsWithPages, eventPath, chicagoNow, hasEnded } from "../lib/events";

const SITE = "https://www.discover-milwaukee.com";

export async function getServerSideProps({ res }) {
  const now = chicagoNow();
  const urls = eventsWithPages()
    .filter((e) => !hasEnded(e, now))
    .map((e) => `  <url>\n    <loc>${SITE}${eventPath(e)}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.6</priority>\n  </url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();
  return { props: {} };
}

export default function EventsSitemap() {
  return null;
}
