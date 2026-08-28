---
name: Mohammad Hossein Dolatabadi — Homepage
description: A bilingual (EN/FA) developer portfolio framed by Persian architectural tessellation
colors:
  paper: "#F4EDDC"
  paper-deep: "#E8DEC4"
  paper-muted: "#CFE6E1"
  ink: "#241C14"
  ink-soft: "#55665D"
  teal: "#0E6B68"
  teal-soft: "#DCEEEC"
  brass: "#B08A3E"
  gilt: "#F0DDAF"
  logo-backing: "#FFFFFF"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2.1rem, 6.5vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  display-fa:
    fontFamily: "Vazirmatn, sans-serif"
    fontWeight: 700
  label:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    letterSpacing: "0.2em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.7
  body-fa:
    fontFamily: "Vazirmatn, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.9
  title:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "17px"
    fontWeight: 500
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.35
  tagline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.2rem)"
    lineHeight: 1.8
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12.5px"
    letterSpacing: "0.04em"
  fine-print:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
rounded:
  pill: "999px"
  logo: "8px"
  focus: "4px"
spacing:
  sm: "12px"
  md: "22px"
  lg: "44px"
  xl: "72px"
components:
  ledger-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "22px 6px"
  ledger-link-hover:
    backgroundColor: "{colors.paper-deep}"
  navlink:
    textColor: "{colors.paper}"
  navlink-hover:
    textColor: "{colors.gilt}"
  langbtn:
    backgroundColor: "transparent"
    textColor: "{colors.gilt}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: Mohammad Hossein Dolatabadi — Homepage

## Overview

**Creative North Star: "The Illuminated Ledger"**

The system reads a working developer's real, dated credentials the way an illuminated manuscript frames a name — a committed field of glazed color at the pages that matter most (the opening portrait, the closing colophon), plain parchment for the record itself. The girih ornament — portrait rosette, panel-edge frieze, section-heading stars, a near-subliminal field texture — is structural, borrowed from Persian architectural tessellation (star-and-polygon strapwork), not decoration bolted onto a generic template. It is scaled by hierarchy rather than scattered evenly: boldest at the portrait, quietest as the texture behind footer text. Everything else — the ledger-style resume rows, the two-typeface bilingual pairing — stays plain in service of it.

This replaced a prior dark-navy/gold "celestial" identity (a Three.js galaxy hero) that the site's owner explicitly rejected. The old look is anti-reference only; nothing about its palette, motion, or composition survives here except the underlying bilingual EN/FA content and RTL correctness, which are product truth, not style.

**Key Characteristics:**
- One committed saturated color (teal) carries the hero and footer; the resume body is plain warm parchment.
- Ornament is a real geometric vocabulary — lozenge rosette, 8-point star, strapwork frieze — drawn from girih tessellation's actual canonical tile shapes, not applied texture or a single decorative flourish.
- Ornament is hierarchical: the two-ring rosette (richest) marks the portrait; the frieze border marks a panel edge; the 8-point star marks a section heading; the small lozenge marks a ledger row. Scale of ornament tracks importance of the thing it marks.
- A ledger list, not a card grid, structures the resume: rows separated by brass hairlines, not boxed containers.
- Centered hero composition needs no LTR/RTL mirroring; the rosette, frieze, and field texture are all rotationally/bilaterally symmetric.

## Colors

Warm and mineral rather than neutral-gray: every "gray" role is tinted from ink or teal, never a true desaturated gray.

### Primary
- **Girih Teal** (#0E6B68): The one committed color. Fills the hero and footer bands in full — not an accent scattered over neutral ground, a field that owns the region. Historic reference: turquoise tilework glaze.

### Secondary
- **Old Brass** (#B08A3E): Decorative strapwork only — rosette tile fills/strokes, section-divider hairlines, the ledger row's seam mark. **Never carries text**: it fails 4.5:1 contrast against both Paper and Teal (measured 2.75:1 and 1.97:1 respectively).
- **Gilt** (#F0DDAF): The accent-text color reserved for use on the Teal field (name surname, "Explore" cue, nav hover, footer heading accent). Reads as gold leaf against the glaze. Passes 4.72:1 on Teal.

### Neutral
- **Parchment** (#F4EDDC): The resume body's ground. Also `html`/`body`'s base background — keep these in sync with this token; a stale value here was the one real regression caught during this build (the old dark background leaked through as a flash/gap before the fix).
- **Parchment Deep** (#E8DEC4): Ledger-row hover fill only.
- **Ink** (#241C14): Primary text on Parchment. Warm near-black, never pure black.
- **Ink Soft** (#55665D): Secondary/body text on Parchment (description paragraphs). Teal-tinted, passes 5.22:1.
- **Paper Muted** (#CFE6E1): The one text color used directly on Teal that isn't Gilt — reserved for low-emphasis copy (footer copyright line). Passes 4.83:1 on Teal.
- **Logo Backing** (#FFFFFF): Not a system color — a literal white padding behind transparent-background employer/school logos so dark-background PNGs/SVGs stay legible. Scoped to that one use; never a surface or text color.

### Named Rules
**The One Field Rule.** Teal is a whole-region fill (hero, footer), never a small accent chip or button color on Parchment. If a new element needs "the brand color" on the resume body, reach for Ink or leave it Brass-decorative — don't scatter Teal.

**The Brass Never Speaks Rule.** Brass is measured to fail text contrast on every background in this system. It never carries a label, a link, or a duration — decorative line-work and fills only.

## Typography

**Display Font:** Unbounded (Latin), with system-ui, sans-serif fallback
**Body Font:** Inter (Latin), with system-ui, sans-serif fallback
**Persian (display and body):** Vazirmatn — carries both roles for Farsi, since the geometric-weight distinction Unbounded/Inter provides in Latin doesn't have an equivalent dedicated pairing need in the Persian type market at this project's scale.

**Character:** Unbounded's blocky, generous geometric letterforms echo the rosette's constructed-from-tiles logic without literally quoting it. Inter stays a neutral workhorse for body copy — deliberately not used as a display face (see the calibration note against "Inter-as-display" as an AI-generated-interface default).

### Hierarchy
- **Display** (700, `clamp(2.1rem, 6.5vw, 4.8rem)`, line-height 1.1): The hero name only.
- **Headline** (500, `clamp(1.6rem, 4vw, 2.6rem)`, line-height 1.35): The footer's "Want to build something?" line — the only other headline-scale text besides the hero name.
- **Tagline** (400, `clamp(1rem, 2vw, 1.2rem)`, line-height 1.8): The one-line role/positioning statement directly under the hero name. Paper Muted on Teal.
- **Label** (500, 15px, letter-spacing 0.2em, uppercase in LTR): Section headings (Education, Work experience, etc.) — these ARE the heading, not a kicker above one.
- **Title** (500, 17px): Ledger row titles (employer/school/project name), skill titles.
- **Body** (400, 14.5px, line-height 1.7 LTR / 1.9 RTL): Ledger descriptions and skill text. Constrained to `max-width: 68ch`.
- **Caption** (400, 12.5px, letter-spacing 0.04em): Ledger duration labels, nav links.
- **Fine print** (400, 13px): Footer copyright line only.

### Named Rules
**The Label-Is-The-Heading Rule.** Section labels never sit above a separate larger heading — the tracked-caps label IS `<h2>`. Adding a bigger heading beneath one would resurrect the kicker pattern this system explicitly refuses.

## Layout

Single-column content within a fluid `clamp(20px, 6vw, 72px)` side padding, no fixed breakpoints — the grid (`repeat(auto-fit, minmax(260px,1fr))` for Skills) and fluid type scale carry responsiveness instead. The hero is a centered column (portrait → name → tagline → cue): centering it is deliberate, and is what makes RTL free — the rosette is rotationally symmetric, so nothing in the hero needs a mirror transform under `dir="rtl"`. Resume sections stack vertically as `<section>` blocks; each resume row is a full-width block, not a grid cell, so row height varies naturally with content instead of forcing uniform card height.

## Elevation & Depth

Mostly flat. The one deliberate depth cue is the portrait medallion's drop-shadow (`drop-shadow(0 10px 28px rgba(36,28,20,.28))` — real offset and blur, not a zero-offset glow). Ledger rows carry no shadow at all; separation comes from hairlines and the hover background fill, not elevation.

### Shadow Vocabulary
- **medallion** (`drop-shadow(0 10px 28px rgba(36,28,20,.28))`): The portrait's only shadow. Do not add shadows to ledger rows or nav — this system stays flat outside the one hero gesture.

### Named Rules
**The One Shadow Rule.** Exactly one element in the system carries a drop-shadow: the hero medallion. A page that starts adding card shadows has drifted back toward the card-grid template this build deliberately replaced.

## Shapes

Circles, lozenges (rhombi), and 8-point stars — girih tessellation's canonical tile vocabulary — never generic rounded rectangles as the form language. The rosette's tiles are simple four-point lozenges (`points="0,-13 7,0 0,13 -7,0"` outer, smaller inner ring) arranged with 12-fold rotational symmetry. The 8-point star (`starPoints(8, outerR, innerR)` — alternating-radius star polygon, the second canonical girih tile) marks section headings and repeats along the frieze border. Logo thumbnails use an 8px radius (soft, not pill, not sharp). The language toggle is the one pill-radius (999px) element in the system, reserved for that single small control per the "pills are for small controls" floor rule. Focus-ring corners use a 4px radius — a UA-affordance detail, not part of the component radius scale.

### Named Rules
**The Two-Tile Rule.** All ornament derives from exactly two girih primitives — the lozenge and the 8-point star. A third shape family (e.g. hexagons, muqarnas curves) would dilute the vocabulary; richer moments use more of the same two tiles at larger scale, not a new shape.

## Components

### Ledger Row (signature component)
Replaces a card grid deliberately — see Named Rule below. A `<li>` containing an `<a>` or `<div>` (`.ledger-link`): full-width block, `padding: 22px 6px`, `border-top: 1px solid rgba(176,138,62,.35)` (the last row in a list also gets a matching border-bottom to close it). No background, border-radius, or box-shadow at rest. Head row: a brass "seam" lozenge (9×9px, `rotate(45deg)`), the entity's logo (34×34px, 8px radius, white padding for transparent-background logos), the title, and the duration (Teal, 12.5px) right/end-aligned. Body: the description paragraph in Ink Soft.
- **Hover/Focus:** background fills Parchment Deep; title turns Teal; seam scales to 1.3× and recolors to Teal.

### Navigation
Sits inside the Teal hero field. Links: Paper by default, Gilt on hover/focus. The language toggle is a Gilt-text pill with a translucent Paper border, brightening to a solid Gilt border on hover. Nav auto-mirrors under `dir="rtl"` via standard flex-row direction — no manual RTL casework needed.

### Portrait Medallion (signature component)
A two-ring, 12-point girih rosette in SVG: an outer ring of 12 Paper lozenges (Brass-stroked) at radius 196, an inner ring of 12 Brass lozenges (Paper-stroked) at radius 158 offset 15°, a 15px Brass bezel ring at radius 140 flanked by two thin Paper hairlines, framing a circular-clipped portrait photo (native SVG `<clipPath>` + `<image>`, not an HTML `<img>` overlaid by CSS math). On mount, every tile animates in with a staggered scale+opacity "assemble" — the system's one authored motion moment.

### Frieze Border
A repeating horizontal band of small 8-point stars (outer radius 12, inner radius 5) joined by short Brass strapwork lines, tiled via an SVG `<pattern>` at 70×34px. Marks the inner edge of a Teal panel: sits at the bottom of the hero (closing it) and the top of the footer (opening it), so the two Teal fields read as a matched pair framing the parchment body between them — the manuscript-border device the "Illuminated Ledger" north star names directly. Paper-stroked stars at 0.55 opacity, Brass connector lines at 0.5 opacity — visible as a deliberate border, not a texture.

### Field Texture
A very low-opacity (0.07) full-bleed tiling of the same 8-point star (outer radius 30, inner radius 13) at 130×130px, Paper-stroked, filling each Teal panel behind its content (`z-index: -1` within the panel's own stacking context). Reads as a mineral/woven ground at a glance, not as a pattern someone would consciously notice — the frieze border is the "loud" expression of this vocabulary, the field texture is the quiet one. Do not raise its opacity past ~0.08–0.1 without re-checking Paper/Gilt-on-Teal contrast; it is deliberately calibrated to be negligible against the measured 4.72–5.42:1 ratios in Colors.

### Section Heading Bullet
A small solid-Teal 8-point star (16×16px, `starPoints(8, 7, 3)`) precedes every `<h2>` label — the frieze/rosette vocabulary carried down to the smallest heading-level mark. Ledger rows use the plainer lozenge "seam" instead (see Ledger Row) — the star is reserved for section-level headings, the lozenge for row-level items, per the Ornament Hierarchy characteristic in Overview.

## Do's and Don'ts

### Do:
- **Do** keep Teal as a whole-region fill (hero, footer) — never a small accent scattered on Parchment.
- **Do** keep Brass decorative-only; never assign it to text, links, or labels.
- **Do** structure repeated resume-style content as a ledger list (hairline-divided rows), never a grid of equal-size bordered cards.
- **Do** keep `src/index.css`'s `html, body` background in sync with the `paper` token — it's the one place a stale value silently reintroduces the old dark identity as a flash/gap.
- **Do** derive any new geometric ornament from the two established girih primitives (lozenge, 8-point star) rather than introducing a third shape family.
- **Do** match ornament scale to heading level: rosette for the portrait, frieze for a panel edge, star for a section heading, lozenge for a row — never the richest motif on the smallest element or vice versa.

### Don't:
- **Don't** add card-style borders, radius, or shadow to ledger rows — that resurrects the card-grid template this redesign specifically replaced.
- **Don't** use Brass for text under any circumstance — it is measured to fail contrast on every background in this system.
- **Don't** add a kicker/eyebrow label above a heading; the tracked-caps label already is the heading.
- **Don't** reintroduce dark-mode-only styling as the default — the physical-scene reasoning behind Committed-teal-on-parchment (a peer developer casually browsing, not a moody dark room) still applies to any new surface added to this site.
