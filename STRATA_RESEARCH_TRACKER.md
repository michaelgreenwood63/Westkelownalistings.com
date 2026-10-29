# West Kelowna Strata Complex Research Tracker

Source: MLS "Property Agent Single Line" exports Michael provided 2026-10-27 (`West K strata complexs 1.pdf` + `Page 2 west k strata complexs.pdf`), 199 individual active-listing rows deduplicated down to unique buildings/complexes by base street address.

**75 unique strata/resort complexes identified** (71 from the original MLS PDF export + 2 added 2026-10-28: Paradise Estates and Boucherie Beach Cottages, both provided directly by Michael as named tourist-commercial STR-exemption properties + 2 added 2026-10-29: Knights View Estates and The Pointe, found via a live-DDF scan of all 647 active West Kelowna listings cross-referenced against this tracker — see note below). This is the master checklist for building out individual complex pages on westkelownalistings.com, following the same real-research-only pattern used on ownlowermission.com, ownglenmore.com, ownacademyway.com, etc. — never invent building names, unit counts, year built, or lease details. If it cannot be verified, leave it out or flag it as unconfirmed.

**2026-10-29 live-DDF scan note:** pulled all 647 currently-active West Kelowna listings via `/api/listings`, grouped by civic address, and diffed against every address already in this tracker. Most addresses with 3+ listings not already tracked turned out to be manufactured home parks (Sierras Westside, Crystal Springs, Pinewood Villa, Westview Village, Paradise Mobile Home Park, plus unnamed/generic manufactured-home addresses) — those belong to kelownamanufactured.com's park directory, not this site's strata-complexes page, so they were deliberately skipped here. Two genuine new non-manufactured-home strata/lot communities were found and built: Knights View Estates (bare-land strata lots) and The Pointe (freehold 55+ gated community). The 3 previously-blocked rows were also rechecked against the same live pull — all 3 still have zero active listings, unchanged.

**Columns:** Title = Freehold/Leasehold per MLS data (note: Leasehold here could be WFN land or another land-lease arrangement — confirm which during research, do not assume WFN). # Listings = how many active MLS listings were in the source export for that address (a rough proxy for building size/activity, not a hard unit count). Status = research/build progress.

### Lakeview Heights (8 complexes)

| Status | Address | Title | # Listings | Page URL | Notes |
|---|---|---|---|---|---|
| ✅ Page live | 2760 Olalla Road | Freehold | 9 | `/residences-at-lakeview-village` | Combined with 2780 Olalla Road as one dev: "The Residences at Lakeview Village", 14 live listings matched |
| ✅ Page live | 2780 Olalla Road | Freehold | 5 | `/residences-at-lakeview-village` | See 2760 Olalla Road — same page, "The Residences at Lakeview Village" |
| ✅ Page live | 2100 Campbell Place | Leasehold | 3 | `/shelter-bay` | Shelter Bay. Leasehold per MLS but NOT confirmed WFN (Lakeview Heights isn't WFN reserve land) — flagged as unconfirmed lease arrangement on page |
| ✅ Page live | 2777 Casa Loma Road | Freehold | 2 | `/casa-loma-lakeshore-resort` | Casa Loma Lakeshore Resort — confirmed 47 suites, hotel zoning, boat slips, backs onto a provincial park (unnamed/unconfirmed which one) |
| ✅ Page live | 4026 Pritchard Drive N | Freehold | 2 | `/barona-beach` | Barona Beach — confirmed pool/hot tub/gym/dock/beach |
| ✅ Page live | 4024 Pritchard Drive | Freehold | 1 | `/barona-beach` | Confirmed same complex as 4026/4034 Pritchard Dr N (Barona Beach) via matching remarks. Freehold. |
| ✅ Page live | 2754 Cameron Road | Freehold | 1 | `/2754-cameron-road` | No distinct name found. Freehold, rancher + daylight walkout basement, NO age restriction. |
| ✅ Page live | 4034 Pritchard Drive | Freehold | 1 | `/barona-beach` | Confirmed same complex as 4024/4026 Pritchard Dr N (Barona Beach) via explicit remarks: "1 of only 4 complexes allowing short-term rentals in West Kelowna." Freehold. |
| ✅ Page live | 2526 Lakeview Cove Road | Unconfirmed | 0 | `/paradise-estates` | Paradise Estates — NOT from the MLS PDF export, provided directly by Michael 2026-10-28 as one of the named tourist-commercial STR-exemption properties. No active MLS listing to verify title type/unit count/amenities against — page built honestly hedged, flagged as unconfirmed on-page. |

### Shannon Lake (20 complexes)

| Status | Address | Title | # Listings | Page URL | Notes |
|---|---|---|---|---|---|
| ✅ Page live | 2735 Shannon Lake Road | Freehold | 5 | `/west-61` | West 61, new townhome community by the golf course/regional park |
| ✅ Page live | 2490 Tuscany Drive | Freehold | 4 | `/era-shannon-lake` | ERA — townhomes backing onto golf course, one unit confirmed built 2016 |
| ✅ Page live | 2120 Shannon Ridge Drive | Freehold | 4 | `/2120-shannon-ridge-drive` | No distinct marketed name found — generic "Shannon Lake condo" in listings. Fitness room + guest suite confirmed. |
| ✅ Page live | 2509 Paramount Peak Drive | Freehold | 3 | `/paramount-peak` | Paramount Peak at Tallus Ridge — new-build freehold, "Redtail" floor plan confirmed |
| ✅ Page live | 1990 Upper Sundance Drive | Freehold | 3 | `/sundance-ridge` | Sundance Ridge — confirmed outdoor pool/hot tub |
| ✅ Page live | 2470 Tuscany Drive | Freehold | 2 | `/eagle-terrace-tuscany-drive` | Real name confirmed: Eagle Terrace. Overlooks Shannon Lake Golf Course, marketed to downsizers. |
| ✅ Page live | 2780 Auburn Road | Freehold | 2 | `/terravita-auburn-road` | Terravita — gated community beside Shannon Lake Golf Course. Combined with 2760+2770 Auburn Road, same complex, 3 civic addresses confirmed via matching MLS remarks. |
| ✅ Page live | 2770 Auburn Road | Freehold | 2 | `/terravita-auburn-road` | Same complex as 2780/2760 Auburn Road — see that row. Terravita. |
| ✅ Page live | 2760 Auburn Road | Freehold | 2 | `/terravita-auburn-road` | Same complex as 2780/2770 Auburn Road — see that row. Terravita. |
| ✅ Page live | 2749 Shannon Lake Road | Freehold | 1 | `/2749-shannon-lake-road` | No distinct building name found. Freehold, lakefront, ~120ft shared dock. Separate from West 61 (2735 Shannon Lake Road). |
| ✅ Page live | 2161 Upper Sundance Drive | Freehold | 1 | `/2161-upper-sundance-drive` | No distinct name found. Freehold, one-level/no-stairs unit. Separate from Sundance Ridge (1990) and 2210 Upper Sundance. |
| ✅ Page live | 3275 Broadview Road | Freehold | 1 | `/creekside-park-broadview-road` | Real name confirmed: Creekside Park. Freehold, small 3-level townhome development. |
| ✅ Page live | 2175 Shannon Ridge Drive | Freehold | 1 | `/2175-shannon-ridge-drive` | No distinct name found. Freehold. Separate from 2120 Shannon Ridge Drive (different civic number). |
| ✅ Page live | 2283 Shannon Heights Court | Freehold | 1 | `/2283-shannon-heights-court` | No distinct name found. Freehold, intimate 20-home complex bordering golf course, pet-friendly. |
| ✅ Page live | 2218 Golf Course Drive | Freehold | 1 | `/2218-golf-course-drive` | No distinct name found. Freehold. Separate complex from 2226 Golf Course Drive. |
| ✅ Page live | 2226 Golf Course Drive | Freehold | 1 | `/2226-golf-course-drive` | No distinct name found. Freehold. Separate complex from 2218 Golf Course Drive. |
| ✅ Page live | 2210 Upper Sundance Drive | Freehold | 1 | `/2210-upper-sundance-drive` | No distinct name found. Freehold. Separate from Sundance Ridge (1990) and 2161 Upper Sundance. |
| ✅ Page live | 2377 Shannon Woods Drive | Freehold | 1 | `/shannon-woods` | Real name confirmed: Shannon Woods. Freehold, gated, NO age restriction (unlike several nearby 45+/55+ complexes). |
| ✅ Page live | 2523 Shannon View Drive | Freehold | 1 | `/2523-shannon-view-drive` | No distinct name found. Freehold. |
| ✅ Page live | 2750 Auburn Road | Freehold | 1 | `/terravita-auburn-road` | Confirmed same complex as 2760/2770/2780 Auburn Rd (Terravita) via "Welcome to Terravita" in remarks. Freehold. |

### West Kelowna Estates (4 complexes)

| Status | Address | Title | # Listings | Page URL | Notes |
|---|---|---|---|---|---|
| ✅ Page live | 3000 Ariva Drive | Leasehold | 4 | `/ariva` | Real name confirmed: Ariva. Leasehold, resort-style amenities (bistro, lounge, gym, pool, pickleball). WFN not confirmed, do not assume. |
| ✅ Page live | 1818 Peak Point Court | Freehold | 3 | `/lakeview-terraces-peak-point-court` | Real name confirmed: Lakeview Terraces. Freehold, Gold Tommie Award winner, Rose Valley. |
| ✅ Page live | 1870 Rosealee Lane | Freehold | 1 | `/kara-vista-rosealee-lane` | Real name confirmed: Kara Vista. Freehold, hillside, designed around natural landscape. |
| ✅ Page live | 1451 Rose Meadow Drive | Freehold | 1 | `/1451-rose-meadow-drive` | No distinct name found. Freehold, end-unit townhome. |

### Westbank Centre (39 complexes)

| Status | Address | Title | # Listings | Page URL | Notes |
|---|---|---|---|---|---|
| ✅ Page live | 3645 Gosset Road | Leasehold | 39 | `/3645-gosset-road` | Confirmed WFN (developer explicitly references WFN business license requirement for STR). PRE-SALE, not built — 4-storey/39-unit, construction Summer 2026, completion Nov 2027. |
| ✅ Page live | 2301 Carrington Road | Freehold | 7 | `/centro-carrington-road` | Real name confirmed via MLS remarks: Centro. Freehold. |
| ✅ Page live | 3833 Brown Road | Freehold | 6 | `/miravista-brown-road` | Real name confirmed via MLS remarks: Miravista. Freehold. |
| ✅ Page live | 4205 Gellatly Road | Freehold | 5 | `/the-cove-gellatly-road` | Real name confirmed: The Cove. Freehold, lakeview resort-style marketing. |
| ✅ Page live | 4025 Gellatly Road | Freehold | 5 | `/carbury-gellatly-road` | Real name confirmed: Carbury. Built 2025, freehold, Glen Canyon/Gellatly Bay area. |
| ✅ Page live | 2250 Louie Drive | Leasehold | 5 | `/westlake-gardens-louie-drive` | Real name confirmed: Westlake Gardens. Built 1998, gated rancher half-duplexes. Leasehold (WFN not confirmed, do not assume). |
| ✅ Page live | 2345 Butt Road | Leasehold | 5 | `/abode-butt-road` | Real name confirmed: ABODE. Leasehold (WFN not confirmed, do not assume). Targeted at first-time buyers/downsizers. |
| ✅ Page live | 3533 Carrington Road | Leasehold | 5 | `/aria-carrington-road` | Real name confirmed: Aria, on Two Eagles Golf Course. Combined with 3521 Carrington Road (same complex, 2 civic addresses) on one page. Leasehold — some units have paid-out land lease (no PTT/Spec Tax), others pay ongoing lease. WFN not explicitly confirmed in remarks, hedged in copy. |
| ✅ Page live | 3359 Cougar Road | Leasehold | 4 | `/tesoro-arca-cougar-road` | Real name confirmed: Tesoro Arca. Leasehold (WFN not confirmed, do not assume). Known for oversized RV garages. |
| ✅ Page live | 3521 Carrington Road | Leasehold | 4 | `/aria-carrington-road` | Same complex as 3533 Carrington Road — see that row. Combined onto one page (/aria-carrington-road) since both addresses are the same building (Aria). |
| ✅ Page live | 2210 Louie Drive | Leasehold | 3 | `/grandview-terrace-louie-drive` | Real name confirmed: Grandview Terrace. Leasehold, WFN not confirmed. Distinct from Westlake Gardens (2250 Louie Drive). |
| ✅ Page live | 3545 Carrington Road | Leasehold | 3 | `/aria-carrington-road` | Confirmed same complex as 3521/3533 Carrington Rd (Aria) via remarks: "Aria is a development of 3 beautiful buildings." Leasehold, WFN not confirmed. |
| ✅ Page live | 3220 Skyview Lane | Leasehold | 3 | `/copper-sky-skyview-lane` | Real name confirmed: Copper Sky. Combined with 3211 Skyview Lane, same complex (same amenity building described in both). Resort-style amenities (pool/hot tub/steam/sauna/gym/sport courts). Leasehold, WFN not confirmed. Now also covers 3205 + 3229 Skyview Lane (merged, same complex confirmed via remarks). |
| ✅ Page live | 3645 Carrington Road | Freehold | 3 | `/lakewind-carrington-road` | Real name confirmed: Lakewind. Freehold apartment near Two Eagles Golf Course. |
| ✅ Page live | 2070 Boucherie Road | Leasehold | 2 | `/tuscany-villas-boucherie-road` | Real name confirmed: Tuscany Villas. Leasehold (WFN not confirmed, do not assume). Lake/mountain views, poolside, dual-primary layouts. |
| ✅ Page live | 3211 Skyview Lane | Leasehold | 2 | `/copper-sky-skyview-lane` | Same complex as 3220 Skyview Lane — see that row. Copper Sky. |
| ✅ Page live | 3890 Brown Road | Freehold | 2 | `/monticello-brown-road` | Real name confirmed: Monticello. 55+ community, clubhouse/workshop/community garden/guest suite, pet-friendly. |
| ✅ Page live | 2250 Majoros Road | Freehold | 2 | `/neo-majoros-road` | Real name confirmed: NEO. Built Green® Platinum certified, rooftop solar panels, HRV system. Freehold. |
| ✅ Page live | 2433 Ingram Road | Freehold | 2 | `/2433-ingram-road` | No distinct marketed name found. Freehold bare land strata, includes a 55+ section. |
| ⚠️ Blocked | 3050 Seclusion Bay Road | Leasehold/Other | 2 | `/3050-seclusion-bay-road` | No active listings in the live DDF feed (the 2 listings from the Oct PDF export appear to have sold/expired) and no PublicRemarks text available to research from — insufficient material to build a verified page right now. Revisit if new listings appear, or research via web search specifically. |
| ✅ Page live | 2151 Madera Court | Leasehold | 1 | `/sonoma-pines` | Part of Sonoma Pines (confirmed via remarks: "Many Sonoma Pines walkouts..."). See Sonoma Pines row below for full notes. |
| ✅ Page live | 2100 Boucherie Road | Freehold | 1 | `/bay-vista-boucherie-road` | Real name confirmed: Bay Vista. Freehold, gated, semi-detached. Distinct from Tuscany Villas (2070 Boucherie Road). |
| ✅ Page live | 2135 Madera Court | Leasehold | 1 | `/sonoma-pines` | Same street as confirmed Sonoma Pines address (2151 Madera Court) — no active listing to directly verify this specific unit, included on the Sonoma Pines page on the strength of the street-level confirmation. |
| ⚠️ Blocked | 2150 Alvarado Trail | Leasehold | 1 | `/2150-alvarado-trail` | No active listing in the live feed, no PublicRemarks to research from, and web search budget was exhausted this session. Could not confirm whether this is Sonoma Pines or a separate complex — do not assume, needs a fresh pass. |
| ✅ Page live | 2160 Serrento Lane | Leasehold | 1 | `/sonoma-pines` | No active listing for this exact unit, but Serrento Lane itself is confirmed Sonoma Pines via 2148 Serrento Lane's remarks ("Welcome to Sonoma Pines"). Included on the Sonoma Pines page on street-level evidence. |
| ✅ Page live | 2400 Hawks Boulevard | Leasehold | 1 | `/hawks-landing-boulevard` | Real name confirmed: Hawks Landing. Half-duplex townhomes, ~2000 sqft. One listing noted "No PTT" + CMHC-approved 5% down — flagged on page as needing per-unit confirmation, not assumed universal. WFN not confirmed. |
| ✅ Page live | 3825 Glen Canyon Drive | Freehold | 1 | `/3825-glen-canyon-drive` | No distinct name found. Freehold, low strata fees, backs onto ravine. |
| ✅ Page live | 3843 Sonoma Pines Drive | Leasehold | 1 | `/sonoma-pines` | No active listing for this exact unit right now, but the street itself is literally "Sonoma Pines Drive" — unambiguous. Included on the new combined Sonoma Pines community page. |
| ✅ Page live | 2330 Butt Road | Leasehold | 1 | `/sun-village-butt-road` | Real name confirmed: Sun Village. 45+ gated community. Several units marketed with prepaid/paid-off lease (per-unit, not building-wide). WFN not confirmed, do not assume. |
| ✅ Page live | 2085 Candalera Lane | Leasehold | 1 | `/sonoma-pines` | Confirmed Sonoma Pines via remarks: "Welcome to Sonoma Pines, one of West Kelowna's most sought-after communities... on Two Eagles Golf Course." |
| ✅ Page live | 3871 Sonoma Pines Drive | Leasehold | 1 | `/sonoma-pines` | Confirmed via remarks, one-level living with garage, split-bedroom design. |
| ✅ Page live | 3842 Old Okanagan Highway | Freehold | 1 | `/mira-vista-old-okanagan-highway` | Real name found: "Mira Vista" per remarks — NOT merged with the existing Miravista/3833 Brown Road page since it's a different street and the name match alone is weak evidence; page explicitly flags the ambiguity rather than assuming they're the same complex. |
| ✅ Page live | 3767 Brown Road | Freehold | 1 | `/lakeview-place-brown-road` | Real name confirmed: Lakeview Place. Small 55+ community, only 26 units per remarks. Freehold. |
| ✅ Page live | 3205 Skyview Lane | Leasehold | 1 | `/copper-sky-skyview-lane` | Confirmed Copper Sky ("Building One" referenced explicitly in remarks) — merged into the existing Copper Sky page, which now covers 3205/3211/3220/3229 Skyview Lane. |
| ✅ Page live | 3815 Brown Road | Freehold | 1 | `/leisure-terrace-brown-road` | Real name confirmed: Leisure Terrace. 55+ community. Freehold. |
| ✅ Page live | 3870 Brown Road | Freehold | 1 | `/monticello-brown-road` | Confirmed Monticello ("Welcome to Monticello!" in remarks) — merged into the existing Monticello page, which now covers 3870 + 3890 Brown Road. |
| ✅ Page live | 2477 Ingram Road | Freehold | 1 | `/2477-ingram-road` | No distinct marketed name found — described in remarks only as a "well-maintained 55+ adult-oriented complex." Freehold. |
| ✅ Page live | 3229 Skyview Lane | Leasehold | 1 | `/copper-sky-skyview-lane` | Confirmed Copper Sky Resort per remarks — merged into the existing Copper Sky page. |
| ✅ Page live | 2549 Boucherie Road | Unconfirmed | 0 | `/boucherie-beach-cottages` | Boucherie Beach Cottages — NOT from the MLS PDF export, provided directly by Michael 2026-10-28 as one of the named tourist-commercial STR-exemption properties. No active MLS listing to verify title type/unit count/amenities against — page built honestly hedged, flagged as unconfirmed on-page. |
| ✅ Page live | 4074 Gellatly Road | Freehold | 3 | `/the-pointe-gellatly-road` | The Pointe — found via 2026-10-29 live-DDF scan, not the original PDF export. Real name confirmed via remarks ("Welcome to The Pointe", "this much-loved gated 55+ community"). Freehold, NO lease payments explicitly stated. Confirmed amenities: indoor heated pool, library, exercise room, billiards room, hall w/ kitchen, outdoor BBQ, active clubhouse social calendar. Homes are detached walk-out ranchers, not condo units. |

### Westside Road (2 complexes)

| Status | Address | Title | # Listings | Page URL | Notes |
|---|---|---|---|---|---|
| ⚠️ Blocked | 4215 Westside Road | Freehold | 1 | `/4215-westside-road` | Zero active listings currently (sold since original MLS export snapshot) and no PublicRemarks available to research from. Revisit if a new listing appears. |
| ✅ Page live | 1045 Bear Creek Lane | Freehold | 4 | `/knights-view-estates` | Knights View Estates — found via 2026-10-29 live-DDF scan, not the original PDF export. Real name confirmed via remarks ("Welcome to Knights View Estates"). Gated bare-land strata of 9 estate lots, each min. ~2.48 acres, freehold (not leasehold), serviced (water/electrical/gas/cable), accessed via paved private strata road. This is land for sale, not completed homes — buyers build to design guidelines. |

---

## Status legend
- ⬜ Not started
- 🔍 Researching
- ✅ Page live
- ⚠️ Blocked (needs info only Michael has, or couldn't verify key facts)

## WFN leasehold note
Many "Leasehold" entries above are likely on Westbank First Nation land (reserves Tsinstikeptum 9 & 10), which is the subject of the existing `/wfn-leasehold` guide page. During research, confirm WFN status per building (don't assume from "Leasehold" alone) and cross-link to `/wfn-leasehold` where applicable.