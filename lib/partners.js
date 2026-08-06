// Client-side fetch of the same "Partners" Google Sheet the SPA uses, so the
// media-kit page can show the live brand wall. Public sheet, gviz JSON endpoint.
const MASTER_SHEET_ID = "1wIilEQVQFczUdUGf3MqpTpUguPvRPqUgWvP16ahFQ6g";
const SHEET_NAME = "Partners";

// Sheet holds a couple of imgur *album* links (imgur.com/a/…) that don't render
// as <img>. Rewrite the known ones to their resolved direct image URLs.
const LOGO_URL_OVERRIDES = {
  "https://imgur.com/a/KCmxiJi": "https://i.imgur.com/McmmDgj.png",
  "https://imgur.com/a/vcLifPq": "https://i.imgur.com/idFTfW0.jpeg",
};

export async function fetchPartners() {
  const url = `https://docs.google.com/spreadsheets/d/${MASTER_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
  const res = await fetch(url);
  const text = await res.text();
  const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/)?.[1];
  if (!jsonString) return [];

  const data = JSON.parse(jsonString);
  let headers = data.table.cols.map((col) => col.label?.toLowerCase().replace(/\s+/g, "") || "");
  const rows = data.table.rows || [];
  if (headers.every((h) => !h) && rows.length > 0) {
    headers = rows[0].c?.map((cell) => (cell?.v || cell?.f || "").toString().toLowerCase().replace(/\s+/g, "")) || [];
    rows.shift();
  }

  const headerMap = { logourl: "logoUrl" };
  const partners = rows.map((row, index) => {
    const partner = {};
    row.c?.forEach((cell, i) => {
      const header = headers[i];
      let value = cell?.v ?? cell?.f ?? "";
      if (header === "order") value = parseInt(value) || index;
      partner[headerMap[header] || header] = value;
    });
    partner.id = partner.id || `partner-${index}`;
    partner.order = partner.order ?? index;
    if (partner.logoUrl && LOGO_URL_OVERRIDES[partner.logoUrl]) {
      partner.logoUrl = LOGO_URL_OVERRIDES[partner.logoUrl];
    }
    return partner;
  });

  return partners.filter((p) => p.name).sort((a, b) => a.order - b.order);
}
