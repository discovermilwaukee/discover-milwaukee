#!/usr/bin/env bash
# CI guard — fails the build if the source regresses to an incomplete/stale state.
# Catches the exact failure class that wiped SEO pages: missing landing pages,
# stale reach stat, shrunken sitemap. Runs on every PR (see .github/workflows).
# Read-only; no network. Exit non-zero => block the merge.

set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
fail=0
say() { printf '%s\n' "$1"; }

# 1. The 19 SEO landing pages that were once lost must all exist as source.
CRITICAL="best-bbq-milwaukee best-breakfast-milwaukee best-chinese-milwaukee \
best-indian-milwaukee best-ramen-milwaukee best-steakhouses-milwaukee \
best-vietnamese-milwaukee cheap-eats-milwaukee late-night-food-milwaukee \
milwaukee-comedy-clubs milwaukee-farmers-markets milwaukee-hiking-trails \
milwaukee-karaoke-bars milwaukee-museums milwaukee-shopping \
milwaukee-speakeasies milwaukee-sports-bars milwaukee-waterfront \
things-to-do-with-kids-milwaukee"
missing=0
for r in $CRITICAL; do
  [ -f "pages/$r.js" ] || { say "  ✗ missing critical SEO page: pages/$r.js"; missing=$((missing+1)); }
done
[ "$missing" -eq 0 ] && say "  ✓ all 19 critical SEO landing pages present" || fail=1

# 2. Total page count must not collapse (known-good = 84 .js under pages/).
PCOUNT=$(find pages -name '*.js' | wc -l | tr -d ' ')
if [ "$PCOUNT" -lt 84 ]; then
  say "  ✗ page count regressed: $PCOUNT (expected >= 84)"; fail=1
else
  say "  ✓ page count OK ($PCOUNT >= 84)"
fi

# 3. Sitemap must not shrink below the known-good 81 URLs.
LOC=$(grep -c '<loc>' public/sitemap.xml 2>/dev/null || echo 0)
if [ "$LOC" -lt 81 ]; then
  say "  ✗ sitemap regressed: $LOC <loc> (expected >= 81)"; fail=1
else
  say "  ✓ sitemap OK ($LOC <loc> >= 81)"
fi

# 4. Reach stat: must be the live value, never the stale-copy value.
if grep -qF "22.1 MILLION" components/DiscoverMilwaukee.js; then
  say "  ✗ STALE COPY MARKER '22.1 MILLION' present"; fail=1
fi
if grep -qF "37.1 MILLION" components/DiscoverMilwaukee.js; then
  say "  ✓ reach stat '37.1 MILLION' present"
else
  say "  ✗ reach stat '37.1 MILLION' missing"; fail=1
fi

# 5. Nav.js must exist (was absent from the old incomplete source).
[ -f components/Nav.js ] && say "  ✓ components/Nav.js present" \
  || { say "  ✗ components/Nav.js missing"; fail=1; }

echo
if [ "$fail" -eq 0 ]; then
  echo "✅ CI GUARD PASSED — source is complete, no regression."
else
  echo "❌ CI GUARD FAILED — this change would regress the site. Merge blocked."
fi
exit $fail
