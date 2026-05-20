# Mekluc Freight — Website

Production website for **Mekluc Freight** — AEO-accredited freight forwarder based in Sandton, Johannesburg.

- **Live** : https://meklucfreight.co.za (production) · https://mekluc-freight.pages.dev (Cloudflare preview)
- **Stack** : Astro 5 · TypeScript · Tailwind CSS · pnpm
- **Hosting** : Cloudflare Pages (CDN edge, free tier)
- **DNS** : ZA-DNS (record A switched to Cloudflare; MX records intact for Microsoft 365)

---

## Quick start

```bash
pnpm install        # install dependencies
pnpm dev            # dev server on http://localhost:4321
pnpm build          # production build -> dist/
pnpm preview        # preview production build locally
```

---

## Project structure

```
src/
├── pages/                  # Astro pages (file-based routing, 23 pages)
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── services/           # 6 service pages
│   ├── solutions/          # 3 sector solutions
│   └── ...
├── layouts/
│   └── BaseLayout.astro    # Global wrapper (header, footer, FAB)
├── components/
│   ├── sections/           # Section components (PageHeader, etc.)
│   ├── layout/             # Layout components (Breadcrumb, SectionTOC)
│   └── global/             # Floating actions, modals
├── styles/
│   └── global.css          # Design tokens (V3.5: Fraunces + IBM Plex Sans + Mono)
├── lib/
│   └── site.ts             # Single source of truth (contact, accreditations, social)
└── i18n/                   # Translations (EN default, FR + AF planned V2)

public/
├── images/
│   ├── hero/               # 15 WebP optimized hero images
│   ├── sections/           # Section illustrations
│   ├── logos/              # Mekluc + accreditation logos (AEO, etc.)
│   └── backgrounds/        # Texture backgrounds
├── _headers                # Cloudflare Pages security headers
├── _redirects              # Cloudflare Pages redirects (legacy URLs)
└── favicon.ico
```

---

## Deployment (Cloudflare Pages)

**Automatic deploy** : every push to `main` branch triggers Cloudflare Pages rebuild + redeploy.

Build settings on Cloudflare Pages dashboard:
- **Framework preset** : Astro
- **Build command** : `pnpm build`
- **Build output directory** : `dist`
- **Root directory** : (leave empty if repo root = this folder, otherwise `code/01_website`)
- **Node version** : 20 (set via env var `NODE_VERSION=20`)
- **Install command** : `pnpm install`

---

## Brand & content rules

⚠️ **Anti-fraud notice** : NEVER mention banking detail changes in any email-based content.
⚠️ **Accreditation numbers** : never published — "available to verified clients on request" only.
⚠️ **CIPC history** : never mentioned (the company is fully compliant today, that's what matters).
⚠️ **Internal corporate name vs brand** : public brand = **Mekluc Freight** only.
⚠️ **Unconfirmed phone numbers** : never publish until validated by Deo Gracia.

---

## Image optimization

```bash
node scripts/optimize-hero-images.mjs
```

Converts PNG hero images to WebP (-94% size). Reads from `public/images/hero/`, `sections/`, `team/`, `backgrounds/`. Original PNGs can be safely deleted after.

---

## Maintainers

- **Deo Gracia Mandtoumbi** — Co-owner, Programme Director (technical lead)
- **Anne-Marie Mandtoumbi** — Founder, CEO

---

## License

Proprietary. (c) 2026 Mekluc Freight. All rights reserved.
