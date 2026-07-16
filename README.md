# Homepage

Personal site — [mhdolatabadi.ir](https://mhdolatabadi.ir)

A dark, single-page CV with a GPU-shaded spiral galaxy behind the hero,
in English and Persian.

## Run

```bash
npm install
npm start        # http://localhost:3000
npm run dev      # port 3001
npm run build
```

## Structure

```
src/
  Homepage.jsx   the whole site: content, 3D scene, styles
  App.js         renders <Homepage />
  index.js       React entry
  index.css      resets only
public/           images referenced by Homepage.jsx (paths in the IMG object)
```

## Editing content

Everything lives in `src/Homepage.jsx`:

- `DICT.en` / `DICT.fa` — every string, in both languages. Add a card to a
  section's `cards` array and it appears with a scroll reveal automatically.
- `IMG` — image paths, served from `public/`.
- `SOCIALS`, `EMAIL` — footer links.
- `C` — the colour palette (night lapis + gold).

The language button in the nav swaps `DICT` and flips the page to RTL with
`Vazirmatn`. English is the default.

## The galaxy

`Homepage.jsx` builds a `THREE.Points` cloud of 16,000 stars driven by a custom
shader. Angular speed falls off with radius, so the arms wind up and shear
instead of spinning rigidly. A slower nebula layer, a pulsing core and a fixed
star field sit behind it. Everything honours `prefers-reduced-motion`, and the
scene is disposed on unmount.

Tuning knobs, all near the top of the scene effect: `COUNT`, `BRANCHES`,
`RADIUS`, `uSize`, and the `speed` multiplier in the vertex shader.

## Notes

- Text over the galaxy sits on a direction-aware scrim plus layered text
  shadows — if you brighten the scene, check the hero copy still reads.
- Images in `public/` are compressed for their render size; re-compress if you
  swap them (`profile-picture.jpg` renders at 108px).
