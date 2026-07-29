# Metro Surfaces — Website

Rebuild of [metrosurfaces.in](https://www.metrosurfaces.in) as a Next.js site with a
"warm editorial minimal" theme drawn from the brand mark: deep maroon and warm greys
on a bone paper canvas.

The home page leads with a split editorial hero — type on the left, a linked stack of
material swatches on the right — rather than a full-bleed photo banner. Hovering a
product row opens its swatch and vice versa; both halves read from the same
`products` array.

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
public/hero-ambient.webp          — unused since the banner was replaced; kept as a spare
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
  (a 1600-path trace, not reliably recolourable).
- **Theme tokens** all live in the `@theme` block of `src/app/globals.css` — `paper-*`
  for surfaces, `ink-*` for text, `maroon*` for the accent. Components reference only
  those names, so the palette can be retuned in one file.
- **Imagery on a light canvas** takes a caption band, not a full veil: these product
  photographs are high-key, and a paper scrim across the whole image bleaches it. Text
  over a photo sits on a `from-paper from-N%` gradient base instead.
- **Enquiry form** (`/contact`) has no backend. It composes a structured message and
  hands it to WhatsApp or the visitor's mail client. Nothing is stored or transmitted
  by the site itself.
- **Motion** respects `prefers-reduced-motion` — smooth scroll never starts and
  animations collapse to near-instant for visitors who ask for less movement.
- **TypeScript 7** ships a native compiler without the legacy API Next reads directly,
  so `next.config.ts` enables `experimental.useTypeScriptCli` to type-check via the CLI.

## Deploying

Live at https://metro-surfaces-website.vercel.app — Vercel builds every push to `main`.

The site builds to fully static pages, so it works on any host. Update `site.url` in
`src/lib/site.ts` if the domain ever changes — it drives canonical URLs, the sitemap
and social share cards.

### Commits must be authored by `jenilrita246-lab`

Vercel refuses to build a push whose **git commit author** isn't a member of the
project's team, failing with:

> Git author &lt;name&gt; must have access to the project on Vercel to create deployments.

Nothing reaches the build step when this happens, so it looks like a broken build but
is purely authorization. Set the author for this repo after any fresh clone:

```bash
git config user.name "jenilrita246-lab" && git config user.email "260600634+jenilrita246-lab@users.noreply.github.com"
```

This lives in `.git/config`, which is not committed — a new clone silently reverts to
your global identity. Check a deploy with:

```bash
gh api repos/jenilrita246-lab/metro-surfaces-website/commits/$(git rev-parse HEAD)/status --jq '.state'
```

### The custom domain

`metrosurfaces.in` is **not** served from this Vercel account — it still points at the
old site. Pointing it here is a DNS change at the registrar, not just adding the domain
in Vercel's project settings.
