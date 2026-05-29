# Tutela — Project Configuration

Marketing website for **Tutela**, a Quebec secondary-school **admission-exam tutoring**
service run by high-performing students from top Quebec schools (incl. Collège
Jean-de-Brébeuf). Single scrolling page, mobile-first.

## Audience
- **Primary:** Chinese-speaking parents of primary grades 3–5 in the Montreal /
  Quebec area, evaluating admission-exam prep for their child.
- The page is **Simplified Chinese by default** with a live **中文 / EN** toggle.
  Chinese is the language that matters; English is a courtesy/secondary view.

## Tech Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens below)
- **Lucide** icons
- Fonts via `next/font`: **Noto Sans SC** (body, all text) + **Fraunces** (the
  "Tutela" wordmark only — italic, for brand character)
- **Vitest** + React Testing Library

## Content & i18n
- **All copy lives in `lib/content.ts`** as `{ zh, en }` pairs — single source of truth.
- `lib/LanguageContext.tsx` holds the active locale (zh default), persists to
  `localStorage`, and exposes `t()`. Components never hardcode copy.
- No backend. The only contact path is the **WeChat QR code** in the footer.

## Voice rules (strict)
- Speak as **"we"** everywhere. The team is collective; do not center one person.
- The founder, **Dennis**, appears **only in the contact area**. The CTA is the
  single personal touchpoint: **联系我 / "Contact me."** Parents contact Dennis,
  who adds them to the parents' group.
- **No personal Q&A** targeting the founder in the FAQ.

## Claim-safety rules (enforced by `__tests__/content.test.ts` — do not break)
- **Math tutor:** name only the **AMC** and **Waterloo (CEMC)** contests. No "#1 /
  排名第一 / 第一" superlatives.
- **Location:** must be framed as *being finalized* — keep **"确认中"** (zh) /
  **"being finalized"** (en) in `howItWorks.body` and the location FAQ. The site
  must **not** claim classes are held at any named school or imply affiliation.
- **Mock exams:** framed as upcoming — keep **"即将推出"** (zh) / **"coming soon"** (en).
- **Never fabricate** student results, enrolment numbers, testimonials, or photos
  of real people. If there's no track record yet, lean on the tutors' *own*
  verifiable credentials instead.

## Brand
- Name: **Tutela** (Latin, "guardianship"). Wordmark = Fraunces italic.
- Logo: a pointed arch (ascent + shelter) with a warm-orange apex dot — see
  `components/Logo.tsx` and `app/icon.svg` (favicon).
- Design tokens (Tailwind `theme.extend.colors`):
  - `cream #faf7f2` (background) · `ink #1f4733` (deep green, headings/logo)
  - `accent #c0532b` (warm orange, CTA/accents) · `body #2b2b28`
  - `max-w-content` = 42rem.

## Workflow
- **Dev:** `npm run dev` · **Build:** `npm run build` · **Test:** `npm test`
- **Deploy:** Vercel production (`vercel --prod --yes`); live at
  `https://webtutela.vercel.app`.
- **Git:** repo `github.com/dennisxcode/tutoring-site`, branch `main`. Commit only
  when asked. **Attribute commits to Dennis only — no Claude co-author trailer.**

## House style
- Provide only changed code; avoid full-file rewrites unless necessary.
- Skip conversational filler.
