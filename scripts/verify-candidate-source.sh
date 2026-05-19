#!/usr/bin/env bash
# Is THIS folder the real, complete source of the live site?
# Read-only. Run against any candidate folder you find.
#
#   scripts/verify-candidate-source.sh /path/to/candidate
#
# PASS  => folder has source for all 80 live pages + correct content markers.
# FAIL  => not the complete source (details printed). Do NOT deploy/merge it.

set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CAND="${1:?usage: verify-candidate-source.sh /path/to/candidate-folder}"
SNAP="$ROOT/baseline/2026-05-18"
fail=0

[ -d "$CAND" ] || { echo "❌ not a directory: $CAND"; exit 2; }
echo "Checking candidate: $CAND"

# 1. page-file coverage vs the full live route set captured in PAGE-STATUS.tsv
missing=0
while IFS=$'\t' read -r route code _; do
  [ "$code" = "200" ] || continue
  case "$route" in /) f="$CAND/pages/index.js" ;; *) f="$CAND/pages/$route.js" ;; esac
  if [ ! -f "$f" ]; then echo "  ✗ missing source: pages/${route#/}.js"; missing=$((missing+1)); fi
done < "$SNAP/PAGE-STATUS.tsv"
if [ "$missing" -gt 0 ]; then echo "  → $missing live pages have NO source here"; fail=1
else echo "  ✓ source present for every live (200) page"; fi

# 2. content markers
comp="$CAND/components/DiscoverMilwaukee.js"
if [ -f "$comp" ]; then
  grep -qF "37.1 MILLION" "$comp" || { echo "  ✗ component lacks '37.1 MILLION'"; fail=1; }
  grep -qF "22.1 MILLION" "$comp" && { echo "  ✗ component has STALE '22.1 MILLION'"; fail=1; }
else
  echo "  ✗ no components/DiscoverMilwaukee.js"; fail=1
fi

# 3. sitemap parity (live had 81 <loc>)
sm="$CAND/public/sitemap.xml"
if [ -f "$sm" ]; then
  n=$(grep -c '<loc>' "$sm" 2>/dev/null || echo 0)
  live=$(grep -c '<loc>' "$SNAP/seo/sitemap.xml")
  [ "$n" = "$live" ] || { echo "  ✗ sitemap has $n <loc>, live has $live"; fail=1; }
  [ "$n" = "$live" ] && echo "  ✓ sitemap <loc> count matches live ($n)"
else
  echo "  ✗ no public/sitemap.xml"; fail=1
fi

# 4. vercel link (informational)
if [ -f "$CAND/.vercel/project.json" ]; then
  grep -q 'prj_F8777My55Y0YJVpAfsxQZbDioDry' "$CAND/.vercel/project.json" \
    && echo "  ✓ .vercel linked to the discover-milwaukee project" \
    || echo "  ! .vercel present but different project"
else
  echo "  ! no .vercel/ link (not fatal; deploy was CLI)"
fi

echo
if [ "$fail" -eq 0 ]; then
  echo "✅ PASS — this looks like the complete real source."
  echo "   Next: build it, run scripts/verify-against-baseline.sh http://localhost:3000,"
  echo "   then (with approval) make it the GitHub source of truth."
else
  echo "❌ FAIL — NOT the complete source. Keep looking. Do not deploy/merge this."
fi
exit $fail
