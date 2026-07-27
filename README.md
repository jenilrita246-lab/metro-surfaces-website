# Metro Surfaces — Website

Rebuild of [metrosurfaces.in](https://www.metrosurfaces.in) as a Next.js site with a
"dark architectural luxury" theme drawn from the brand mark: deep maroon, warm bone,
ash-grey panels on a near-black canvas.

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

To check the production build:

```bash
npm run build
```

## Where to edit things

Almost everything you'll want to change lives in two files — no component editing needed.

| What | File |
| --- | --- |
| Phone, WhatsApp, email, hours, nav, stats | `src/lib/site.ts` |
| Products, features, values, application sectors, specs | `src/lib/products.ts` |

Everything else reads from those. Change the phone number in `site.ts` and it updates
the header, footer, contact page, floating WhatsApp button and enquiry form at once.

### Swapping images

Images live in `public/`. Replace a file with your own of the same name and it appears
everywhere that product is shown:

```
public/hero-ambient.webp          — homepage hero background
public/products/acrycore.webp     — Acrycore Sheets
public/products/laminates.webp    — Premium Laminates
public/products/louvers.webp      — Decorative Louvers
public/products/cane.webp         — Cane Wallpaper
public/applications/*.webp        — installed / in-situ shots
```

Keep replacements as WebP and under ~300 KB. The originals pulled from the old
site were 2.5 MB PNGs; they're now 68–156 KB with no visible loss.

Or point `image:` in `src/lib/products.ts` at a new filename.

## Structure

```
src/
  app/                 route per page + sitemap, robots, favicon, OG image
  components/
    motion/            Reveal, SplitWords, Magnetic, Counter — the animation primitives
    sections/          Hero, ProductShowcase, ApplicationShowcase, Values, Stats, ...
    Header · Footer · Logo · Marquee · SmoothScroll · WhatsAppFab
  lib/                 site.ts (business details) · products.ts (catalogue) · cn.ts
```

## Notes

- **Brand mark** is inline SVG in `src/components/Logo.tsx`, rebuilt as clean vectors so
  it inherits theme colours. The original supplied file is kept at `public/logo.svg`
  (a 1600-path trace with black text — unusable on a dark background).
- **Enquiry form** (`/contact`) has no backend. It composes a structured message and
  hands it to WhatsApp or the visitor's mail client. Nothing is stored or transmitted
  by the site itself.
- **Motion** respects `prefers-reduced-motion` — smooth scroll never starts and
  animations collapse to near-instant for visitors who ask for less movement.
- **TypeScript 7** ships a native compiler without the legacy API Next reads directly,
  so `next.config.ts` enables `experimental.useTypeScriptCli` to type-check via the CLI.

## Deploying

The site builds to fully static pages, so it works on any host. Easiest is Vercel:
push the repo, import it, done. Set the production domain to `metrosurfaces.in` and
update `site.url` in `src/lib/site.ts` if the domain ever changes — it drives canonical
URLs, the sitemap and social share cards.
