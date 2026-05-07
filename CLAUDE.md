# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**WeOps** — Senior DevOps/cloud infrastructure specialists (AWS, Azure, GCP), CI/CD pipelines, internal developer platforms.
Slogan: *"We turn messy operations into efficient systems."*

Target audiences: Direction TI/CTO · Équipes TI/DevOps · Responsables Produit/Opérations

## Site directives

- **Type**: Static single-page site with anchor-based section navigation (no framework, no CMS)
- **Layout**: Mobile-first
- **Language**: French primary, bilingual FR/EN — toggle persisted in `localStorage`, all strings in `js/main.js` translations object
- **Hosting**: TBD

## Structure

```
index.html          single-page entry point
css/style.css       all styles — CSS custom properties, mobile-first media queries
js/main.js          language toggle, nav scroll state, mobile menu
assets/fonts/       ClashGrotesk Variable (woff2 + woff)
assets/img/         SVG logos
docs/               brand assets from designer (source of truth for colors/fonts)
```

## Sections (in order)

1. **Hero** — tagline, slogan, CTA → #contact
2. **Services** (#services) — cloud infra, internal platforms, CI/CD, system reliability
3. **Pourquoi WeOps** (#pourquoi) — 4 differentiators
4. **À propos** (#apropos) — solo founder, culture
5. **Contact** (#contact) — `mailto:info@weops.ca` button only

## i18n

All translatable strings use `data-i18n="key"` attributes. Translations live in the `translations` object in `js/main.js`. Adding a new string requires: adding the attribute in `index.html` + both `fr` and `en` entries in `js/main.js`.

## Brand identity

### Colors
| Name | Hex |
|---|---|
| Terminal Black | `#131619` |
| Signal Violet | `#6630F9` |
| Protocol Slate | `#A6B6CC` |
| Runtime Mint | `#93FF8C` |

### Typography
- Headlines: **Clash Display**
- Highlight/accent: **Smooch Sans**
- Body: **Clash Display**

### Direction
Rétro-tech-moderne, structured, timeless. Visual rhythm through grids and repetition. Terminal/code aesthetic. Calm authority — no hype.

### Brand pillars
Clarté · Stabilité · Fiabilité

## Assets

- `docs/branding-weops-2026/` — logos (PNG/SVG/EPS/AI), ClashGrotesk font (web files at `FONT ClashGrotesk_Complete/Fonts/WEB/`), brand guide PDFs
- Logo variants: horizontal, vertical, tagline-side — in black, white, grey, green (#93FF8C), purple (#6630F9)
