#!/usr/bin/env bash
# Regression gate: re-capture live (or a given base URL) and diff against the
# frozen baseline. Exit non-zero on ANY drift so it can gate a deploy.
#
# Usage:
#   scripts/verify-against-baseline.sh                 # checks live production
#   scripts/verify-against-baseline.sh http://localhost:3000
#
# Pass ⇒ the only acceptable state. Any reported diff must be an intended change.

set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE_URL="${1:-https://www.discover-milwaukee.com}"
SNAP="$ROOT/baseline/2026-05-18"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
fail=0

echo "Verifying $BASE_URL against baseline $SNAP"

# --- routes from the repo (source of truth) ---
git -C "$ROOT" ls-files pages \
  | grep -vE '_app\.js|_document\.js|^pages/api/|404\.js|500\.js' \
  | sed -E 's#^pages/##; s#\.js$##; s#^index$#/#' > "$TMP/routes.txt"

# --- 1. every route 200 ---
while IFS= read -r r; do
  [ -z "$r" ] && continue
  url="$BASE_URL/$r"; [ "$r" = "/" ] && url="$BASE_URL/"
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 20 "$url")
  if [ "$code" != "200" ]; then echo "  ✗ $r -> $code"; fail=1; fi
done < "$TMP/routes.txt"

# --- 2. SEO assets byte-identical to baseline ---
for f in robots.txt site.webmanifest sitemap.xml; do
  curl -s -L --max-time 20 "$BASE_URL/$f" -o "$TMP/$f"
  if ! diff -q "$SNAP/seo/$f" "$TMP/$f" >/dev/null 2>&1; then
    echo "  ✗ $f drifted from baseline:"; diff "$SNAP/seo/$f" "$TMP/$f" | head -6; fail=1
  fi
done

# --- 3. content invariants ---
curl -s -L --max-time 20 "$BASE_URL/partner" -o "$TMP/partner.html"
chunk=$(grep -oE '/_next/static/chunks/[^"]+\.js' "$TMP/partner.html" | sort -u \
  | while read -r c; do curl -s "$BASE_URL$c" -o "$TMP/c.js"; \
      grep -qF "Request Partnership Options" "$TMP/c.js" && { cp "$TMP/c.js" "$TMP/comp.js"; echo "$c"; }; done | head -1)
if [ -f "$TMP/comp.js" ]; then
  grep -qF "37.1 MILLION" "$TMP/comp.js" || { echo "  ✗ reach stat != '37.1 MILLION'"; fail=1; }
  grep -qF "22.1 MILLION" "$TMP/comp.js" && { echo "  ✗ STALE COPY DETECTED ('22.1 MILLION')"; fail=1; }
else
  echo "  ✗ could not locate partner component chunk"; fail=1
fi

if [ "$fail" -eq 0 ]; then
  echo "✅ PASS — live matches baseline (no unintended drift)"
else
  echo "❌ FAIL — drift above is unintended unless you explicitly changed it"
fi
exit $fail
