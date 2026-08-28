# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is Mohammad Hossein Dolatabadi's broader professional network — peers, potential collaborators, and the wider tech/CS community — not a narrowly optimized job-hunting funnel. Secondary audience naturally includes recruiters/employers who land here, but the site is not tuned hard for conversion to that one path.

## Product Purpose

A personal portfolio/resume site: introduces Mohammad Hossein, surfaces his education and work history, technical interests, and gives visitors an easy way to reach him or find him elsewhere (email, GitHub, LinkedIn, etc.). Success is a visitor coming away with an accurate, memorable impression and, if relevant, making contact.

## Positioning

A backend-leaning full-stack developer (Node.js/Nest.js, Vue/React) and computer engineering student at Sharif University of Technology, with real shipped work across several student-run tech events and a data-oriented company (Sahab). The site distinguishes itself by pairing that concrete track record with a bilingual (Persian/English) presentation, native to both audiences rather than an English site with a token translation.

## Operating Context

Single-page personal site, bilingual EN/FA with full RTL support and a manual language toggle (no auto-detection). Content is organized into: hero/intro, Education, Work experience, Student works, Skills/interests, and a Contact footer with email + social links.

## Capabilities and Constraints

- React 17 + Create React App (react-scripts 5), deployed as a static SPA (see `public/deploy.sh`).
- Bilingual content lives in a single in-file dictionary (`DICT.en` / `DICT.fa`) in `src/Homepage.jsx` — both languages must stay in sync in meaning, even if wording is tightened during the redesign.
- Real content only: no placeholder/lorem-ipsum sections. Card entries (schools, employers, student projects) are factual with real dates and, where applicable, real links — these facts must be preserved; wording may be tightened but claims/dates/links must not be invented or altered.
- Real assets already on hand — see Evidence on Hand.
- The user explicitly disliked the prior dark-navy/gold/celestial visual identity (Three.js galaxy hero) — treat it as anti-reference, not a constraint to preserve.
- The user flagged the profile photo as "too small" and wants a stronger visual presence in the hero — a durable signal for the new-work visual direction, not just a pixel tweak.

## Brand Commitments

- Name/identity: "Mohammad Hossein Dolatabadi", short-form monogram "MH" used in nav.
- Contact email: m.h.dolatabadi.a@gmail.com (also the domain owner per `og:url`: mhdolatabadi.ir).
- Social presence: GitHub, LinkedIn, Stack Overflow, Twitter, Telegram, Instagram (see `SOCIALS` in `src/Homepage.jsx`).

## Evidence on Hand

- Real profile photo: `public/profile-picture.jpg`.
- Real institution/employer logos: `public/sharif.svg`, `public/sampad.svg`, `public/weblite.svg`, `public/sahab.jpeg`, and event logos (`hardwar2.jpg`, `gamein.jpeg`, `datadays.jpeg`, `loc.jpeg`, `wss.jpg`, `aic.jpg`).
- Real, dated resume content (education, work, six student projects, three skills blurbs) in both EN and FA — see `DICT` in `src/Homepage.jsx`. No testimonials, press, or case studies exist; do not fabricate any.

## Product Principles

1. Bilingual is a first-class feature, not an afterthought — EN and FA must feel equally native, including RTL layout correctness.
2. Every claim on the site is a real, factual credential — the redesign changes presentation, never invents content.
3. The visual identity should feel distinctly personal/crafted, not a generic template — this was the core complaint about the previous galaxy hero.
4. Broad professional visibility over hard conversion — the design should read as confident and credible to peers and collaborators first, recruiters second.

## Accessibility & Inclusion

No formal standard mandated by the user; the current implementation already targets WCAG AA-equivalent practices (verified contrast, keyboard focus states, `prefers-reduced-motion` support, semantic landmarks) — the redesign must not regress these.
