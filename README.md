# Tutoring Site

A single-page, mobile-first **bilingual** marketing website for a Quebec
secondary-school **admission-exam tutoring** service, run by high-performing
students from top Quebec schools.

The page is **Simplified Chinese by default** (the parents' main language) with a
**中文 / EN toggle**. It exists so parents get a clear, trustworthy explanation of
the service — who teaches, what's covered, the price, and how to join — without
the founder answering the same questions repeatedly in WeChat.

## What's on the page

A single scrolling page with these sections, in order:

1. **Hero** — value proposition + "join the parents' group" call-to-action
2. **Who we are** — student tutors from top Quebec schools
3. **What we offer** — admission prep + subjects + a note that mock exams are coming
4. **The tutors** — Math / English / French credentials
5. **How it works** — Saturday group sessions, small groups, in-person/online
6. **Pricing** — $15 (1 subject) / $30 (2) / **$40 bundle** (3)
7. **Who it's for** — primary grades 3–5, plus special cases & 1-on-1
8. **Information session** — June 19, 7–9 PM
9. **FAQ** — real parent questions
10. **Contact** — WeChat QR code + WeChat ID

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens: cream background, deep-green headings, warm-orange CTA)
- **Lucide** icons
- **Noto Sans SC** via `next/font`
- **Vitest** + React Testing Library for tests

All copy lives in one place — `lib/content.ts` — as `{ zh, en }` pairs. A small
React context (`lib/LanguageContext.tsx`) holds the active language and persists
the choice in `localStorage`. There is **no backend**: the contact path is the
WeChat QR code.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # run the test suite
```

## Project structure

```
app/                 layout (font, metadata) + page (assembles the sections)
components/          shared UI (TopBar, Section, CtaButton, LanguageToggle, WeChatCta)
components/sections/ the 10 page sections
lib/content.ts       all bilingual copy (single source of truth)
lib/LanguageContext  language state + toggle + persistence
public/              WeChat QR image (currently a placeholder)
__tests__/           content, language, and page render tests
docs/                the design spec and implementation plan
```

## Before launch — things to swap in

These are intentionally left as placeholders:

- **WeChat QR code** — replace `public/wechat-qr-placeholder.svg` with the real QR
  image, and set the real WeChat ID in `lib/content.ts` (`footer.wechatId`).
- **Information-session location** — confirm online vs in-person.
- **Domain** — choose a domain and deploy (e.g. to Vercel).

## A note on accuracy

Some claims are deliberately worded to stay truthful and verifiable:

- The math tutor's credentials name the **AMC** and **Waterloo (CEMC)** contests
  (no unverifiable "#1 in Quebec" superlative).
- The class **location** is described as *being finalized* — the site does not
  claim classes are held at any school, and implies no institutional affiliation.
- **Mock exams** are framed as *coming*, not as a finished product.

The test suite (`__tests__/content.test.ts`) enforces these wording rules so they
can't be accidentally broken later. The full reasoning lives in
`docs/superpowers/specs/2026-05-28-tutoring-site-design.md`.
