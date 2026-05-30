# Tutela

A single-page, mobile-first **bilingual** marketing site for **Tutela** — Quebec
secondary-school **admission-exam tutoring**, run by students who *just passed
those exams*. It exists so parents get a clear, trustworthy picture of the service
(who teaches, what's covered, the price, the dates, how to enrol) and reach out on
WeChat — without the founder answering the same questions over and over.

**Live:** https://webtutela.vercel.app

- **Simplified Chinese by default**, with a **中文 / EN** toggle.
- Headlines are **language-aware**: Noto Serif SC for Chinese, Fraunces for English.
- **No backend** — the only contact path is the WeChat QR code.

## Design — "Le Passage"

The whole site is built on one idea: the brand's **pointed arch** is the threshold a
child passes through into secondary school. The hero arch *draws itself* on load
like an architect's blueprint, a small arch crowns every section, and a larger one
bookends the closing CTA. The look is a **printed prospectus crossed with an
architect's drawing** — warm, editorial, restrained.

- **The full design system is in [`DESIGN.md`](./DESIGN.md)** — hand it to an AI (or a
  designer) before any visual work.
- **The story of how the design evolved is in
  [`docs/DESIGN-JOURNAL.md`](./docs/DESIGN-JOURNAL.md)** — what worked, what didn't, and why.

## What's on the page

Hero (arch + CTA) → then numbered editorial sections:

1. **01 · Credibility** — class-size / subjects / schedule numbers, school names,
   tutor credentials (incl. the named math tutor), and the 24/7 support promise.
2. **02 · Subjects & grades** — Math / French / English, grades 3–5, 1-on-1 & special cases.
3. **03 · How it works** — schedule, online/offline, enrolment steps, and pricing
   ($15 / $30 / **$40 bundle**).
4. **04 · Why students improve** — the teaching philosophy, as a full-bleed deep-green manifesto.
5. **05 · The tutors** — Math (Chen Chen) / English / French credentials.
6. **06 · Key dates** — info session **June 19**, enrolment opens **June 26**.
7. **07 · FAQ** — real parent questions.
8. **Final CTA** — WeChat QR + scan hint + contact (Dennis).

A pinned **announcement ribbon** keeps the two key dates visible at all times.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — tokens: cream `#faf7f2`, deep-green ink `#1f4733`, terracotta
  accent `#c0532b` (CTA only), warm-charcoal body `#2b2b28`
- Fonts via `next/font`: **Noto Serif SC** (headlines), **Noto Sans SC** (body),
  **Fraunces** (wordmark, section numbers, EN headlines)
- **Lucide** icons (sparingly) · **Vercel Analytics**
- **Vitest** + React Testing Library

All copy lives in **`lib/content.ts`** as `{ zh, en }` pairs (single source of truth);
`lib/LanguageContext.tsx` holds the active locale (zh default, persisted to
`localStorage`, and reflected on `<html lang>`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # run the test suite
```

## Project structure

```
app/                 layout (fonts, metadata, JSON-LD) + page + globals.css
                     icon.svg (favicon), opengraph-image.png, robots.ts, sitemap.ts
components/          AnnouncementBar, TopBar, Logo, ArchDraw, EditorialSection,
                     CtaButton, LanguageToggle, WeChatCta
components/sections/ Hero, CredibilityBar, Subjects, HowItWorks, Manifesto,
                     Tutors, KeyDates, Faq, FinalCta
lib/content.ts       all bilingual copy (single source of truth)
lib/LanguageContext  language state + toggle + persistence
public/              WeChat QR image
__tests__/           content (incl. claim-safety), language, and page tests
docs/                DESIGN-JOURNAL.md + the design specs
DESIGN.md            the design system / brief
CLAUDE.md            project config for AI assistants
```

## Claim-safety (enforced by `__tests__/content.test.ts`)

Some wording is deliberately constrained to stay truthful and verifiable:

- The math tutor's credentials name only the **AMC** and **Waterloo (CEMC)** contests
  (no "#1" superlative); the results are described as publicly verifiable.
- The class **location** is described as *being finalized* — the site never claims
  classes are held at a named school, and implies no institutional affiliation.
- **Mock exams** are framed as *coming soon*, not as a finished product.
- No fabricated stats, testimonials, or photos of real people.

## Deploy

Vercel (`vercel --prod`); production is aliased to **webtutela.vercel.app**.
Commits are attributed to the owner only.

## Before-launch / nice-to-have

- A **custom domain** (e.g. `tutela.ca`).
- A real **parent testimonial** (the slot is designed, just not shown until real).
- Confirm the **info-session location** (currently "确认中 / being finalized").
