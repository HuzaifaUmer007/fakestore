# A.O. Book Marketing: redesign concept

A bold, animated one-page redesign of **awoniyioluwatobi.vercel.app**, built with Next.js 15 (App Router, static export), GSAP + ScrollTrigger and Lenis smooth scroll.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes a static site to /out, ready for Vercel/Netlify/any host
```

## Structure

| File | What it holds |
| --- | --- |
| `app/data.ts` | Every fact on the page: packages, portfolio, team, reviews, links |
| `app/page.tsx` | The page markup (server-rendered) |
| `app/Motion.tsx` | All motion: loader, hero timeline, sticky sideways gallery, scroll-lit text, stack, magnetic buttons |
| `app/globals.css` | Design tokens (oxblood + gold from the logo) and all styles |
| `app/credits/page.tsx` | Photo credits for the Wikimedia stand-ins (`noindex`) |
| `public/img/` | All images, local WebP files (nothing is hotlinked) |

## Sections

Loader → nav → hero (founder plate, spinning tagline ring, stickers, count-ups, ticker) → portfolio (sticky sideways gallery) → services & team → mission story (scroll-lit text, collage, stats) → 4-step process stack → pricing board + packages → Starter Kit → reviews marquee → contact (WhatsApp card + chat preview) → closing line → footer → phone dock.

## Facts used (all from the live site, read 15 Nov 2026)

- Business name, tagline "Marketing · Visibility · Growth", founder and three team members with their roles.
- Packages: Book Launch Essentials $75 (3-day), Full Launch Campaign $150 (5-day), Full Team Package $250 (7-day); Starter Kit $7.30 on Selar.
- Portfolio: The Pivot (#1 in Counseling Children), Skinny Pretty Outgoing & Rich, two Richard Simonian titles, The You That Is True, SaaS Pricing eBook, ghostwritten self-help manuscript, Ruvna case study.
- Six testimonials, shortened but not reworded. Names are shown as first name + last initial.
- Contact: WhatsApp +234 816 459 7604, Upwork, Facebook, Instagram, LinkedIn, Selar.

Nothing is estimated or invented. Two copy fixes: the old site's "Everything in Starter / Standard" now names the real tiers ("Everything in Book Launch Essentials / Full Launch Campaign").
The personal Gmail address is deliberately left off the page. WhatsApp and Upwork are the contact routes.

## Photos

- New logo mark (A + O with an open book) generated with OpenAI gpt-image-2 for this concept; the owner should approve it or keep their original logo.
- Owner's own images (approved for reuse): founder portrait, portfolio mockups, Starter Kit cover.
- Stand-ins to replace (Wikimedia Commons, credited at `/credits/`): the four process-step photos (notebook, library shelves, typewriter keys, library aisle).

## Before this goes live

- Remove `robots: { index: false }` in `app/layout.tsx`; add canonical URL, `sitemap.xml`, `robots.txt`, and an `og:image` (1200×630).
- Get each reviewer's OK for their quote.
- Shorten or drop the loader and preload the hero image to bring mobile LCP under 2.5 s (now 5.3 s with the loader; CLS is 0).
- Move to a custom domain and plan separate service pages.
