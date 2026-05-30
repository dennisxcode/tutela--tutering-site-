# Tutela Homepage Redesign — Design Spec

**Date:** 2026-05-29
**Branch:** `redesign-v2` → Vercel preview (production untouched until approved)

## Goal
Rebuild the Tutela single-page site with the *structural, trust, and motion* patterns of
Linear / Superhuman / Mercury / GrowthMentor — adapted, not copied — while keeping the
warm Tutela brand and **every fact** from the current production site.

## Confirmed decisions
- **Visual identity:** keep & elevate the warm brand — Cream `#faf7f2`, Deep Green Ink
  `#1f4733`, Terracotta `#c0532b` (CTA only), Fraunces italic wordmark, arch mark.
  Add Mercury-grade whitespace and Linear-grade vertical rhythm.
- **Motion:** *more expressive* — staggered scroll-reveals (fade + rise) and a **parallax
  arch** motif. Hardware-accelerated (transform/opacity only), `prefers-reduced-motion`
  safe (no motion → content shown immediately).
- **Dates:** **both** a pinned top announcement ribbon AND a dedicated dates block in §4.
- **Build:** new branch + preview URL; merge to prod only on approval.
- **Bilingual:** zh default + 中文/EN toggle preserved.
- **No photos of real people** — tutor section uses qualification cards + arch avatars.
- **No fabricated testimonials/stats** — testimonial slot designed but not shown until real.

## Patterns extracted → adaptation
- One repeated primary CTA (`联系我`) in nav, hero, mid, final (Linear).
- Credibility bar directly under hero: schools + tutor quals + recency + small-group
  numbers (Mercury/GrowthMentor) — proof through specificity, not logos we don't have.
- Calm spacing, one idea per section, weight/colour hierarchy over giant type.
- Trust via transparency: named contests (AMC/Waterloo, no "#1"), exact schedule, honest
  "确认中" location, "即将推出" mock exams, 免费试听 risk-reversal.

## Homepage structure (8 sections) + fact mapping
0. **Announcement ribbon** (pinned): `6/19 说明会 · 6/26 开放报名`.
1. **Hero + CTA** — eyebrow (蒙特利尔 · 中学入学考试备考), headline, subtitle, 免费试听 pill,
   chips (5–10 人小班 / 数学·法语·英语 / 周六上午), single `联系我`. Parallax arch.
2. **Credibility bar** — stats (5–10 / 3 科目 / 周六) + 魁北克顶尖中学 incl. Brébeuf +
   tutor quals (AMC·Waterloo / Brébeuf 英语 / 法语写作赛) + "刚考过同样的考试".
   *(current 为什么选择我们 stats + 导师 credentials, surfaced as trust)*
3. **Subjects / grades** — 数学·法语·英语; grades 3–5; general tutoring; mock exams
   (即将推出); who-it's-for + special cases (Sec1→Sec2) + 1-on-1 (private). *(我们提供什么
   + 适合谁)*
4. **How tutoring works** — 线上+线下; 周六 9–12; location 确认中; **dedicated dates block**
   (说明会 6/19, 报名 6/26); 报名流程 steps; **pricing** $15/$30/$40 bundle + note.
   *(上课方式 + 说明会 + 报名流程 + 收费)*
5. **Why students improve — teaching philosophy** — peer tutors who just passed know the
   real exam; small groups = attention; practice on real-format mock exams. Built only
   from existing true material. *(关于我们 + 为什么选择我们 points)*
6. **Meet the tutors** — three qualification cards (Math / English / French) + 1-on-1
   private note. Arch-initial avatars, no photos. *(导师团队)*
7. **FAQ** — all 8 current items, animated accordion.
8. **Final CTA** — WeChat QR + scan hint + contact = Dennis + privacy + copyright.
   *(current footer)*

## Components
- `Reveal.tsx` — IntersectionObserver fade+rise wrapper; `delay` prop for stagger;
  reduced-motion → immediate.
- `ParallaxArch.tsx` — scroll-linked transform on the arch mark (rAF, disabled on reduced
  motion / small screens).
- `AnnouncementBar.tsx`, `Section.tsx` (airy wrapper w/ reveal), and section components:
  `Hero`, `CredibilityBar`, `Subjects`, `HowItWorks`, `Philosophy`, `Tutors`, `Faq`,
  `FinalCta`.
- `lib/content.ts` — extend with credibility/philosophy/dates/announcement copy; keep all
  existing keys so nothing is lost.

## Claim-safety (unchanged, still test-enforced)
Keep `确认中`/`being finalized` in howItWorks + location FAQ; AMC + Waterloo with no "#1";
mock exams `即将推出`/`coming soon`. No invented numbers, results, or testimonials.

## Out of scope
Custom domain, analytics dashboards, real testimonials/photos (pending real assets).
