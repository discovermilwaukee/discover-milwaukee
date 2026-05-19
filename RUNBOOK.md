# Discover Milwaukee — Runbook & Change Protocol

**Read this before changing or deploying anything.** A stale local copy was deployed
twice on 2026-05-18 and silently regressed the reach stat and would have 404'd ~60 SEO
pages. This runbook exists so that never happens again.

---

## 1. Source of truth — ⚠️ NO COMPLETE SOURCE EXISTS YET

| | |
|---|---|
| **Only complete artifact** | Vercel deployment `dpl_3WxSNZJbEJWHTjGbvfyJdJVv2s92` (prod, 2026-05-02) |
| **Closest (INCOMPLETE) source** | `github.com/discovermilwaukee/discover-milwaukee` @ `main` (`fdf951c`, 2026-04-19) |
| **Full rendered capture** | `baseline/2026-05-18/pages-html/` (all 80 live pages as HTML) |
| **Live domain** | https://www.discover-milwaukee.com |

**GitHub `main` is NOT the source of truth — it is incomplete.** Verified 2026-05-18:

- Live production serves **80 working pages**. GitHub `main` can rebuild only **~61**.
- **19 live, ranking SEO pages have NO source anywhere** (not GitHub, not Downloads):
  `best-bbq / best-breakfast / best-chinese / best-indian / best-ramen /
  best-steakhouses / best-vietnamese / cheap-eats / late-night-food /
  milwaukee-comedy-clubs / milwaukee-farmers-markets / milwaukee-hiking-trails /
  milwaukee-karaoke-bars / milwaukee-museums / milwaukee-shopping /
  milwaukee-speakeasies / milwaukee-sports-bars / milwaukee-waterfront /
  things-to-do-with-kids` (all `-milwaukee`). They exist only as deployed build
  output, now also captured as rendered HTML in `baseline/2026-05-18/pages-html/`.
- The tag `known-good-2026-05-02` → `fdf951c` is a useful anchor but marks an
  **incomplete** tree. The only *complete* known-good is the deployment itself.
- Pre-existing bug (noted, not yet fixed by request): `/best-wings-milwaukee` is in
  `sitemap.xml` but returns **404**.

➡️ **The true complete source is presumed to be on whatever machine ran the
2026-05-02 CLI deploy. Recovering it is a prerequisite to any consolidation or
deploy.** See §7.

### ⛔ Do NOT use these — they are stale and WILL regress the site
`/Users/toddspence/Downloads/discover-milwaukee-site*` (all 14 copies). They predate
the repo: only ~9 pages (no SEO landing pages), say "22.1 MILLION", old partner form.

### ⛔ Do NOT deploy or "consolidate to GitHub" until the real source is found
GitHub is missing 19 ranking pages; deploying from it would 404 them. Until §7 is
done, the only safe production action is rollback (§4).

### ⛔ Do NOT use these — they are stale and WILL regress the site
`/Users/toddspence/Downloads/discover-milwaukee-site*` (all 14 copies). They predate
the repo: only ~9 pages (no SEO landing pages), say "22.1 MILLION", old partner form.

---

## 2. Baseline snapshot

`baseline/2026-05-18/` is the frozen reference of live production:

- `pages-html/` — rendered HTML of all 61 routes (HTTP 200 at capture)
- `seo/` — live sitemap.xml (81 `<loc>`), robots.txt, site.webmanifest, og-image.svg
- `seo-inventory.tsv` — per-page title / meta-desc length / canonical / og:image / JSON-LD
- `MANIFEST.txt` + `MANIFEST.sha` — provenance + sha1 of every file

### Invariants — must not change unless intentional
- 61 routes, all HTTP 200
- Sitemap: 81 `<loc>` URLs
- All 61 pages carry JSON-LD structured data
- Canonical on every page except `/privacy` and `/terms`
- Reach stat reads **"37.1 MILLION"** (22.1M ⇒ you are on a stale copy — STOP)
- Per-page titles/descriptions exactly as in `seo-inventory.tsv`

---

## 3. Change protocol (every edit, no exceptions)

```bash
git fetch && git checkout -b change/<short-name> known-good-2026-05-02
# ...make ONLY the targeted edit...
git diff            # MUST show only the intended lines. Bigger? STOP.
npm install && npx next build     # must succeed
```

**Pre-deploy regression gate** — re-capture and diff against the baseline:

```bash
scripts/verify-against-baseline.sh   # (see section 5) — only intended diffs allowed
```

Only deploy if the only differences are the ones you intended.

---

## 4. Deploy & rollback

Vercel project is **not Git-connected**; production deploys are manual CLI
(`vercel`, logged in as `discovermilwaukee`, scope `todd-spences-projects`).

**Deploy** (from a clean checkout of the intended commit):
```bash
vercel deploy --prod --yes
vercel inspect discover-milwaukee.com    # confirm `id` == the new deployment
# if custom domain didn't move:
vercel promote <new-deployment-url> --yes
```
Then re-run the regression gate against the **live** site, and:
```bash
git tag known-good-$(date +%F) <commit> && git push --tags
```

**Rollback (instant, exact):**
```bash
vercel promote https://discover-milwaukee-9r8irwp52-todd-spences-projects.vercel.app --yes
# restores dpl_3WxSNZJbEJWHTjGbvfyJdJVv2s92 byte-for-byte
```

---

## 5. Deploy log

| Date | Commit | Deployment | Note |
|---|---|---|---|
| 2026-05-02 | (CLI, no git meta) ≈ fdf951c | `dpl_3WxSNZJbEJWHTjGbvfyJdJVv2s92` | **KNOWN-GOOD baseline** |
| 2026-05-18 | stale Downloads copy 13 | `dpl_7oACW3F8…` / `dpl_7VEJcDX2…` | ⚠️ regressed SEO/stats — **rolled back** |
| 2026-05-18 | — | `dpl_3WxSNZJbEJWHTjGbvfyJdJVv2s92` | rolled back to known-good (current) |

---

## 6. Root-cause fix (recommended, not yet done)

Connect the Vercel project to this GitHub repo so production deploys come from
commits (every deployment then carries a commit SHA; rollbacks map to commits).
Until then, the hard rule: **never deploy with uncommitted changes; tag every deploy.**

---

## 7. SOURCE RECOVERY (blocking — owner: user)

The complete source of the 19 source-less live pages must be located before any
consolidation/deploy. It is presumed to be on the machine that ran the
**2026-05-02** `vercel` deploy.

**What you're looking for** — a project folder that has ALL of:
- `pages/best-bbq-milwaukee.js` (and the other 18 names listed in §1) — i.e. ~80
  page files, not ~60
- `components/DiscoverMilwaukee.js` containing `37.1 MILLION` (not 22.1M)
- a `.vercel/` folder linked to project `prj_F8777My55Y0YJVpAfsxQZbDioDry`, and/or
  shell history showing `vercel deploy --prod` around 2026-05-02
- `public/sitemap.xml` with **81** `<loc>` entries (the live count), not 60

Likely places: another folder on this Mac outside `~/Downloads`, a different
computer, or whoever performed the May deploy.

**How to verify a candidate** (non-destructive):
```bash
scripts/verify-candidate-source.sh "/path/to/candidate-folder"
```
It reports PASS only if the folder contains source for all 80 live pages and its
content matches `baseline/2026-05-18/`. Do not deploy or merge anything until a
candidate PASSES.

If no real source is ever found, fallback is reconstructing the 19 pages from
`baseline/2026-05-18/pages-html/` (reverse-engineered, not original code).
