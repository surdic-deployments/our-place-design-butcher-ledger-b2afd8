---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Home page surface brief

Scope: `/` (home page only). Visitor mode: Persuade. Audience: local diners and visitors in Fürth/Nürnberg. German-first copy. One of four parallel new visual-world explorations requested by the user alongside the three already-shipped worlds (`main` — Sign Painter's Board; `design/modern-luxury` — Film Noir cinematic; `design/pit-room` — kraft-paper BBQ-joint). This branch (`design/butcher-ledger`) was built from the `design/modern-luxury` working tree (that branch's tip was this worktree's base commit) and fully replaces its visual system — nothing from modern-luxury (noir palette, scene tags, letterbox/film-grain cinematic layer, parallax) survives.

## Direction contract

THESIS: "Butcher Shop Ledger" — a vintage butcher-counter and ledger-book identity: ink-stamp typography, ruled ledger paper, and monochrome-line butcher's cut-chart illustrations, instead of Pit Room's full-color woodcut art. Reads as more restrained and graphic — closer to an apothecary label or a printed price chart than an illustrated storybook panel.

OWN-WORLD: Bone/cream ledger paper (`--bone-50` background, `--bone-100` ruled card surface with a faint repeating horizontal rule pattern standing in for ledger lines), near-black ink (`--ink-900` display type and line art), one sparing accent — oxblood red (`--oxblood-600`) — used only for stamps, the CTA, and cut-chart highlight callouts. Display face: Bitter (a serif slab suited to old ledger/stamp printing, distinct from the other three worlds' Alfa Slab One / Rye / Italiana). Body: PT Serif. A third face, Special Elite (a typewriter/stamp face), is used exclusively for stamps, price-ticket text, and category labels — never for body copy or headings. Structural devices: a circular dashed-feeling rubber ink-stamp mark (`.stamp`, rotated -4deg, `mix-blend-mode: multiply` so it reads as pressed ink) for tags/proof points/prices-as-stand, and an order-ticket perforation rule (`.perf-line`, a CSS `mask-image` row of punched circles) used as a receipt-tear divider inside cards and under headings.

Deliberate departure from Pit Room's torn-paper section-seam motif: this world's section transitions are clean, flat color changes (a ledger page has crisp rule lines, not organic tears) — the perforation motif is reserved for ticket/receipt-shaped elements within a single section, not reused as a cross-section-seam device. This sidesteps the exact class of paint-order/orientation bugs the Pit Room build's torn edges went through, by construction.

STORY: A visitor sees the specificity of an actual butcher's price chart — real primal cuts named and located on a chart, not a generic "smoked meat" illustration — and reads "this kitchen knows meat," then books via one solid ink-stamp-red CTA.

FIRST VIEWPORT: Ledger-paper hero with faint ruled-line background, bold slab headline, a large circular ink-stamp graphic ("Hickory Geräuchert & Gezogen · Fürth · Fachwerkhaus") as the hero's visual anchor in place of an illustration, and a solid oxblood CTA button with a genuine soft blurred lift/press shadow (never a flat hard-offset block). No kicker/eyebrow precedes the headline — location and building-type facts live inside the stamp graphic itself, not a separate label above the H1.

FORM: Builder-committed direction, one of four the user asked for in parallel after explicitly requesting more directions to test; no concept-seed roll was run (same environment-forced code-led condition as every other branch in this project: no image-generation tool is available, so `.impeccable/config.json`'s `buildPath: "comp"` has no effect and no `.impeccable/build/` state exists).

FINISH: unreviewed and undocumented is unfinished; this build goes through the finish-review cycle before being considered done. DESIGN.md is untouched — it documents `main`'s Sign Painter's Board system; this branch has its own system and does not claim to update project-wide documentation.

## Signature illustrations

Two shared, parameterized cut-chart components (`CutChartIllustration`, `animal: "pig" | "cow"`) rather than three bespoke illustrations — appropriate here since the device itself (a butcher's primal-cut chart) is meant to look like one consistent chart family, not three unrelated pieces of art:
- Baby Back Rib Platter → pig chart, ribs primal highlighted.
- Smokehouse Burger → cow chart, chuck primal highlighted (ground beef is traditionally a chuck cut).
- Dry-Aged Tomahawk → cow chart, rib primal highlighted (a tomahawk is a bone-in ribeye).

A dedicated `TicketIllustration` (reservation-stub graphic: circular ink stamp over a perforated tear line, wordmark below) anchors the Visit section, replacing both the sign-painter world's signpost arrow and Pit Room's hanging sign.

## Motion

Matches the restrained-but-real standard set by Pit Room: line illustrations draw themselves on via `stroke-dasharray` reveal as they scroll into view; sections otherwise settle with a simple fade-up; the CTA lifts on hover and presses on `:active` via a real blurred shadow, never a flat offset block. Respects `prefers-reduced-motion` throughout.

## Open decisions / TODOs

- Real Resmio reservation (and takeaway) URL — placeholder href + visible pending state until supplied.
- Final approved German copy/tagline — reused verbatim from the other three builds' working copy, flagged as proposed not final.
- Hours conflict across listings — shown with a "Stand: [date]" label, not a live open/closed indicator.
