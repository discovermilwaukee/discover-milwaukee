#!/usr/bin/env python3
"""Regenerate lib/regionMapData.js — SE Wisconsin county geometry for RegionMap.

Downloads US county GeoJSON, filters to the 7 SEWRPC counties, simplifies with
Douglas-Peucker, projects (equirectangular) into an SVG viewBox, and emits the
county paths, label positions, projection constants, and viewBox. The exported
project(lng,lat) uses the same constants so item dots align with the paths.

Usage: python3 scripts/build-region-map.py
"""
import json, math, os, urllib.request

SRC_URL = "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json"
CACHE = "/tmp/us-counties-fips.json"
OUT = os.path.join(os.path.dirname(__file__), "..", "lib", "regionMapData.js")

# SE Wisconsin (state FIPS 55), county code -> display name
WANT = {
    "079": "Milwaukee", "133": "Waukesha", "089": "Ozaukee", "131": "Washington",
    "101": "Racine", "059": "Kenosha", "127": "Walworth",
}

if not os.path.exists(CACHE):
    urllib.request.urlretrieve(SRC_URL, CACHE)
data = json.load(open(CACHE))

feats = {}
for f in data["features"]:
    p = f["properties"]
    if p.get("STATE") == "55" and p.get("COUNTY") in WANT:
        feats[WANT[p["COUNTY"]]] = f["geometry"]
assert len(feats) == len(WANT), f"missing: {set(WANT.values()) - set(feats)}"


def rings_of(geom):
    t, c = geom["type"], geom["coordinates"]
    if t == "Polygon":
        return [c[0]]
    if t == "MultiPolygon":
        return [poly[0] for poly in c]
    return []


allpts, county_rings = [], {}
for name, geom in feats.items():
    rs = rings_of(geom)
    county_rings[name] = rs
    for r in rs:
        allpts.extend(r)

lats = [p[1] for p in allpts]
lat0 = (min(lats) + max(lats)) / 2
k = math.cos(math.radians(lat0))
axs = [p[0] * k for p in allpts]
axMin, axMax = min(axs), max(axs)
latMin, latMax = min(lats), max(lats)
W, pad = 1000.0, 26.0
S = (W - 2 * pad) / (axMax - axMin)
H = (latMax - latMin) * S + 2 * pad


def proj(lng, lat):
    return (pad + (lng * k - axMin) * S, pad + (latMax - lat) * S)


def dp(points, tol):
    def d(p, a, b):
        (x, y), (x1, y1), (x2, y2) = p, a, b
        dx, dy = x2 - x1, y2 - y1
        if dx == 0 and dy == 0:
            return math.hypot(x - x1, y - y1)
        t = max(0, min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)))
        return math.hypot(x - (x1 + t * dx), y - (y1 + t * dy))

    def rec(pts):
        if len(pts) < 3:
            return pts
        a, b = pts[0], pts[-1]
        idx, mx = 0, 0
        for i in range(1, len(pts) - 1):
            dd = d(pts[i], a, b)
            if dd > mx:
                idx, mx = i, dd
        if mx > tol:
            return rec(pts[:idx + 1])[:-1] + rec(pts[idx:])
        return [a, b]

    return rec(points)


def fmt(v):
    s = f"{v:.1f}"
    return s.rstrip("0").rstrip(".") if "." in s else s


counties = []
for name, rings in county_rings.items():
    subpaths, bx, by = [], [], []
    for r in rings:
        pr = dp([proj(lng, lat) for lng, lat in r], 1.4)
        if len(pr) < 3:
            continue
        subpaths.append("M" + " ".join(f"{fmt(x)},{fmt(y)}" for x, y in pr) + "Z")
        bx += [x for x, y in pr]
        by += [y for x, y in pr]
    counties.append({"name": name, "d": "".join(subpaths),
                     "lx": round((min(bx) + max(bx)) / 2, 1),
                     "ly": round((min(by) + max(by)) / 2, 1)})

counties.sort(key=lambda c: (round(c["ly"] / 50), c["lx"]))
proj_const = {"k": round(k, 6), "axMin": round(axMin, 6),
              "latMax": round(latMax, 6), "S": round(S, 4), "pad": pad}

js = "// AUTO-GENERATED (scripts/build-region-map.py). SE Wisconsin county geometry.\n"
js += "// Equirectangular projection; project(lng,lat) matches the county paths.\n"
js += f"export const VIEWBOX = {{ w: {round(W,1)}, h: {round(H,1)} }};\n\n"
js += "export const PROJ = " + json.dumps(proj_const) + ";\n\n"
js += "export function project(lng, lat) {\n"
js += "  return {\n"
js += "    x: PROJ.pad + (lng * PROJ.k - PROJ.axMin) * PROJ.S,\n"
js += "    y: PROJ.pad + (PROJ.latMax - lat) * PROJ.S,\n"
js += "  };\n}\n\n"
js += "export const COUNTIES = [\n"
for c in counties:
    js += "  " + json.dumps(c, separators=(",", ":")) + ",\n"
js += "];\n"

open(os.path.abspath(OUT), "w").write(js)
print(f"wrote {OUT}: {len(counties)} counties, viewBox {round(W,1)}x{round(H,1)}")
