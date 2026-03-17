# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Leonardo AI tutorial blog for **LeonardoAI.VIP** (https://leonardoai.vip). Built with Next.js 16 App Router, deployed on Cloudflare Workers with D1 (SQLite) database via OpenNext adapter.

- **GitHub Repo**: https://github.com/coolcbq/leonardoai-vip.git
- **Live Site**: https://leonardoai.vip
- **Package Manager**: npm (NOT pnpm)

## Commands

```bash
npm run dev                # Dev server (requires local D1: npm run db:migrate:local first)
npm run build              # Production build
npm run lint               # ESLint
npm run deploy             # Build + deploy to Cloudflare Workers
npm run db:migrate:local   # Apply D1 migrations locally
npm run db:migrate:remote  # Apply D1 migrations to production
```

No test framework is configured.

## Tech Stack

- **Framework**: Next.js 16 App Router + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 (amber gold color scheme — NO blue/purple/green)
- **Database**: Cloudflare D1 (SQLite) + Drizzle ORM
- **Deployment**: Cloudflare Workers via `@opennextjs/cloudflare`
- **Markdown**: `marked` library for blog content rendering
- **Fonts**: System font stack (`"Inter", system-ui, -apple-system, sans-serif`) — NO Google Fonts

## Architecture

### Data Flow
All database access goes through `lib/db.ts` → `getDb()` which obtains the Cloudflare D1 binding via `getCloudflareContext()` and returns a Drizzle ORM instance.

### Database Schema (`lib/schema.ts`)
Three SQLite tables via Drizzle ORM:
- **posts** — Blog articles (title, slug, content as Markdown, excerpt, category, meta_title, meta_description, keywords, published_at, updated_at, is_published)
- **friendLinks** — Partner links (title, url, description, sort_order, is_active)
- **contacts** — Contact form submissions (name, email, subject, message, is_read)

### Key Patterns
- **`export const dynamic = "force-dynamic"`**: REQUIRED on pages that query D1. D1 bindings are only available at runtime on Cloudflare Workers, not at build time.
- **Category slug mapping**: URLs use slugs (`prompt-engineering`), database stores display names (`Prompt Engineering`).
- **SEO**: `lib/seo.ts` provides `generatePageMetadata()`. `components/JsonLd.tsx` provides structured data.
- **Contact form**: `components/ContactForm.tsx` is client-side with a honeypot field (`website`).
- **Blog rendering**: Content stored as Markdown in D1, rendered with `marked`.

### Content Categories
8 categories for Leonardo AI tutorial content:
- Getting Started, Prompt Engineering, Image Generation, AI Canvas
- Video & Motion, Advanced Techniques, Style Guides, Tips & Tricks

## Deployment & Infrastructure

### Cloudflare Configuration
- **Workers Name**: `leonardoai-vip`
- **D1 Database**: `leonardoai-vip-db` (ID: `c8aacb1c-74de-46c3-bfdb-c61e04e3a344`)
- **Domain Routing**: Via `routes` in `wrangler.jsonc` (NOT custom_domains)

### GitHub Actions (CI/CD)
1. **`deploy.yml`** — Auto-deploy on push to main
2. **`daily-article.yml`** — Daily article generation at 09:00 Beijing time (Qwen API)

### GitHub Secrets
| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token for deployment and D1 access |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `QWEN_API_KEY` | 通义千问 DashScope API key for article generation |
| `D1_DATABASE_ID` | D1 database ID |

## SEO Configuration

- **Google AdSense**: Client ID `ca-pub-5066440472869180`
- **Google Analytics**: Tracking ID `G-CJG4YHDZT5`
- **Sitemap**: Dynamic at `app/sitemap.ts`
- **Robots.txt**: `app/robots.ts`, allows all crawlers, blocks `/api/`
- **Target Keywords**: leonardo ai tutorial, leonardo ai prompts, ai image generation, ai art guide, leonardo ai tips
- **Keyword Density**: 1-2%
- **Internal Links**: Every article links to 2-3 related articles + categories + contact

### Partner Links (user-specified only)
- https://raoedits.top (Rao Edits)
- https://jobe23.com (Jobe23)
- https://aidetector.ink (AI Detector)
- https://cluely.cc (Cluely)
- https://cluelyai.net (Cluely AI)

## Known Issues & Fixes

### Google Fonts build failure
Do NOT use `next/font/google`. Using system font stack in `globals.css`.

### Cloudflare custom_domains API conflict
Use `routes` in `wrangler.jsonc` instead of custom_domains.

### D1 bindings at build time
Pages using `getDb()` MUST have `export const dynamic = "force-dynamic"`. Without this, Next.js tries to prerender at build time when D1 is unavailable.

### Cloudflare Workers image optimization
Cloudflare Workers does NOT support Next.js `/_next/image` route. Config MUST use `images: { unoptimized: true }` in `next.config.ts`.

### Image verification requirement
All image URLs (especially Unsplash) MUST be verified via HEAD request before use. `scripts/generate-article.js` has built-in verification functions.

## Color Scheme

Amber gold luxury dark theme — **NEVER use blue, purple, or green**:
- Primary: `#D4A853` (amber gold) / `#F5E6C8` (champagne)
- Warm: `#B8942E`
- Background: `#0A0A0A` (pure black)
- Card: `#141414` / Hover: `#1C1C1C`
- Border: `#262626`
- Text: `#FAFAFA` (primary) / `#888888` (secondary) / `#555555` (muted)
- Gradients: `from-[#D4A853] to-[#F5E6C8]`

## Key File Paths
| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout — Header, Footer, GA, AdSense, Organization JSON-LD |
| `app/page.tsx` | Homepage — queries D1 for posts, partner links |
| `app/sitemap.ts` | Dynamic sitemap |
| `app/robots.ts` | Robots.txt config |
| `app/opengraph-image.tsx` | Edge-rendered OG image |
| `components/Header.tsx` | Responsive nav with mobile menu |
| `components/Footer.tsx` | Footer with partner links |
| `components/Hero.tsx` | Homepage hero section |
| `components/JsonLd.tsx` | JSON-LD structured data helpers |
| `components/ContactForm.tsx` | Client-side contact form with honeypot |
| `components/BlogCard.tsx` | Blog article preview card |
| `components/CategoryCard.tsx` | Category card for categories page |
| `lib/db.ts` | D1 database connection via Drizzle |
| `lib/schema.ts` | Drizzle ORM table definitions |
| `lib/seo.ts` | SEO metadata generation utility |
| `scripts/generate-article.js` | Auto article generation script (Qwen API → D1) |
| `wrangler.jsonc` | Cloudflare Workers + D1 config |
