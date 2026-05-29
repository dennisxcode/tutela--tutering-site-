# Tutoring Marketing Site — Design Spec (v1)

**Date:** 2026-05-28
**Owner:** Dennis (Founder)
**Source PRD:** `/home/dennis/Downloads/tutoring-business-PRD.md`
**Status:** Approved for planning

---

## 1. Purpose

A single-page, mobile-first marketing site that gives Chinese-speaking parents a
clear, trustworthy, self-serve explanation of the tutoring service, so the founder
stops answering the same WeChat questions and the offer looks legitimate.

**Success:** a parent understands *who we are, what we prep for, the price, and how
to join* within 30 seconds, and is driven to two actions: **(a) join the WeChat
group / contact the founder**, and **(b) note the June 19 info session**.

---

## 2. Tech & architecture

- **Next.js (App Router) + Tailwind CSS + Lucide icons.**
- **Single page** (`app/page.tsx`) composed of section components; one scrolling
  page with anchor links and a sticky slim top bar.
- **Standalone project** at `/home/dennis/tutoring-site` (separate from the Inke repo).
- **Static, no backend** — no payments, login, booking, or DB. Deploys to Vercel.
- **Bilingual, client-side toggle.** Simplified Chinese is the default; a ZH/EN
  toggle in the top bar swaps all section copy. No i18n routing — copy stored as a
  single content object keyed by locale, toggled via React state (persist choice in
  `localStorage`). `<html lang>` updates with the toggle.
- **Font:** Noto Sans SC (Google/self-hosted), generous line-height for Chinese.
- **Mobile-first**, large tap targets, fast on mobile data.

### Component breakdown
Each section is its own component under `components/sections/`, fed from a central
`content.ts` (`{ zh, en }` per string). A `LanguageProvider` (React context) holds
the active locale and exposes `t(key)`.

- `TopBar` — logo/name, language toggle, primary CTA button.
- `Hero`, `WhoWeAre`, `WhatWeOffer`, `Tutors`, `HowItWorks`, `Pricing`,
  `WhoItsFor`, `InfoSession`, `Faq`, `FooterCta`.

---

## 3. Visual system (direction "B — Warm Trust")

| Token | Value | Use |
|---|---|---|
| Background | `#faf7f2` (cream) | page background |
| Heading | `#1f4733` (deep green) | titles, headings |
| Primary CTA | `#c0532b` (warm orange) | buttons, key accents |
| Body text | `#2b2b28` (near-black) | paragraphs |
| Card/surface | `#ffffff` | pricing card, FAQ items |

- Simple Lucide line icons per section; **no stock education clipart.**
- Plain, direct tone — no 成语, no exclamation overload, no AI "tells."
- Keep "Collège Jean-de-Brébeuf" in French spelling; never translate to Chinese.

---

## 4. Information architecture (PRD §6 order)

1. Hero (value prop + QR CTA + trust chips)
2. Who we are
3. What we offer (incl. mock-exams-coming note)
4. The tutors
5. How it works
6. Pricing
7. Who it's for (incl. special cases & 1-on-1)
8. Information session
9. FAQ
10. Contact / CTA footer

---

## 5. Claim safety (PRD §10) — how each is handled

1. **Math tutor** — name the confirmed contests, claim strong placement, **no "#1."**
   Founder confirmed AMC and Waterloo (CEMC) are accurate. Final wording in §6.
2. **Class location** — **not booked.** Framed as "正在确认中 / being finalized."
   Do **not** assert classes are at any school. Avoid implying institutional
   affiliation or endorsement (§10.5).
3. **Mock exams** — **not built yet but promised.** Framed as upcoming
   ("即将推出 / coming soon"), not as a live product.
4. **"Top schools including Collège Jean-de-Brébeuf"** — exact framing kept; do not
   upgrade to "all from Brébeuf."
5. **No institutional affiliation** — school name describes *where students study*,
   never a partnership or endorsement.

---

## 6. Content (bilingual, production-ready)

> ZH is default and authoritative; EN is the toggle translation.

### Hero
- **ZH:** 中学入学考试辅导 — 我们是刚刚考过入学考试的尖子生，帮助孩子顺利通过考试。
- **EN:** Secondary Admission Exam Tutoring — We're top students who just passed the admission exams, here to help your child pass theirs.
- Trust chips: `5–10 人小班 / Small classes of 5–10` · `数学 · 法语 · 英语 / Math · French · English` · `周六上午 / Saturday mornings`
- CTA: `扫码加入家长群 / Scan to join the parents' group`

### Who we are
- **ZH:** 我们是来自魁北克顶尖学校的中学生，包括 Collège Jean-de-Brébeuf。我们都参加过中学入学考试，知道考试考什么、怎么考，也明白孩子需要准备什么。我们用自己的经验来帮助孩子备考。
- **EN:** We're secondary students from top Quebec schools, including Collège Jean-de-Brébeuf. We've all taken the secondary admission exams ourselves — we know what they test, how they work, and what your child needs to prepare. We use that first-hand experience to help your child get ready.

### What we offer
- **ZH:** 我们主要提供针对中学入学考试的小组辅导，科目包括数学、法语、英语。课程适合小学三、四、五年级的学生，按年级和报名人数分组。除了入学考试备考，我们也提供一般学科辅导。
- **EN:** We focus on small-group tutoring for the secondary admission exams, covering Math, French, and English. Classes suit primary grades 3, 4, and 5, grouped by grade level and enrolment. Beyond admission prep, we also offer general academic tutoring.
- **Mock exams (coming):**
  - **ZH:** 我们还将提供基于近年入学考试内容设计的模拟测试，帮助孩子熟悉考试形式。（即将推出）
  - **EN:** We'll also provide practice exams modeled on recent admission-exam content to help children get familiar with the format. (Coming soon)

### The tutors
- **ZH:**
  - 数学导师：在 AMC（美国数学竞赛）及 Waterloo（CEMC）数学竞赛中名列前茅。
  - 英语导师：就读于 Brébeuf 最高级别的英语课程，成绩优异。
  - 法语导师：曾多次在 Brébeuf 的写作比赛中获奖。
- **EN:**
  - Math tutor: places among the top in the AMC (American Mathematics Competitions) and Waterloo (CEMC) math contests.
  - English tutor: enrolled in the highest level of English offered at Brébeuf, with excellent results.
  - French tutor: multiple-time winner of writing contests at Brébeuf.

### How it works
- **ZH:** 小组课程在每周六上午9点至12点进行。每组人数设定在5至10人，这样每个孩子都能得到足够的关注。我们提供线下和线上两种形式，会根据孩子的情况来安排。上课地点正在确认中，确定后会通知。
- **EN:** Group classes run every Saturday, 9:00 AM–12:00 PM. Each group is kept to 5–10 students so every child gets enough attention. We offer both in-person and online formats, arranged to suit your child. The class location is being finalized and will be announced once confirmed.

### Pricing
- Base rate: $15 / hour / subject.

| Subjects | Price / Saturday |
|---|---|
| 1 subject / 选 1 门 | $15 |
| 2 subjects / 选 2 门 | $30 |
| 3 subjects (bundle) / 选 3 门（套餐） | **$40** |

- Nudge — **ZH:** 建议参加全部三门课，效果更全面，也更划算。 **EN:** We recommend all three subjects — more complete preparation, better value.

### Who it's for
- **ZH:** 主要适合小学三、四、五年级，准备中学入学考试的学生。有特殊情况（例如 Sec 1 想转入 Sec 2）或想了解一对一辅导的家长，欢迎私信联系我们。
- **EN:** Best for primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases (e.g. a Sec 1 student transferring into Sec 2) or one-on-one tutoring, message us privately.

### Information session
- **ZH:** 说明会将于6月19日晚上7点至9点举行，欢迎所有家长参加。届时会介绍收费、课程安排、备考方式等详细信息，并设有问答环节。地点稍后确认；如有变动，我们会及时通知。
- **EN:** Our information session is on June 19, 7:00–9:00 PM — all parents welcome. We'll cover pricing, the class schedule, and how we prepare the children, with a Q&A. Location to be confirmed; we'll notify you of any changes.

### FAQ (PRD §8, with name/location fixes)
1. **ZH Q:** 你们是怎么收费的？ **A:** 小组课程 15$/小时/科目。选1门15$，选2门30$，选3门40$（套餐优惠）。一对一价格因导师而异，请私信。
   **EN Q:** How do you charge? **A:** Group classes are $15/hour/subject. 1 subject $15, 2 subjects $30, 3 subjects $40 (bundle). One-on-one pricing varies by tutor — please message us.
2. **ZH Q:** group class 通常是几个人？ **A:** 我们将每组人数设定在5至10人，这样每个孩子都能得到足够的关注，学习效果更好。
   **EN Q:** How many students are in a group class? **A:** We keep groups to 5–10 students so every child gets enough attention and learns better.
3. **ZH Q:** 上课地点在哪里？ **A:** 上课地点正在确认中。我们计划安排线下教室，同时也提供线上课程，具体细节确认后通知。
   **EN Q:** Where are the classes held? **A:** The location is being finalized. We plan to hold in-person classes and also offer online sessions; we'll share details once confirmed.
4. **ZH Q:** 授课是你亲自授课还是同学？ **A:** 授课由我们的导师团队负责，每位导师教自己的科目。
   **EN Q:** Do you teach personally, or other students? **A:** Classes are taught by our tutor team — each tutor teaches their own subject.
5. **ZH Q:** 你是哪个专业／几年级？ **A:** Collège Jean-de-Brébeuf 学生，拉丁语专业，Sec 4。
   **EN Q:** What's your program / grade? **A:** Collège Jean-de-Brébeuf student, Latin program, Sec 4.
6. **ZH Q:** 适合几年级的孩子？ **A:** 主要适合小学三、四、五年级，准备中学入学考试的学生。特殊情况请私信。
   **EN Q:** What grades is this for? **A:** Mainly primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases, please message us.

### Footer / CTA
- **ZH:** 扫码加入家长群 · 微信号：[待提供] · 有问题欢迎私信。
- **EN:** Scan to join the parents' group · WeChat ID: [to provide] · Message us with any questions.
- **WeChat QR:** founder will provide the image file. Until then, a clearly-labelled
  placeholder QR is used, plus a WeChat-ID text fallback. The QR/CTA repeats in the
  hero, sticky top bar, and footer.

---

## 7. Out of scope (v1, PRD §5.3)

Online payments / checkout · student accounts / login · booking system with live
calendars · automated mock-exam delivery · backend/contact-form server (WeChat QR is
the contact path).

---

## 8. Open items to confirm before launch

- **WeChat QR image** — replace placeholder with the real image; fill the WeChat ID.
- **Contest names** — AMC + Waterloo confirmed true by founder; keep as written.
- **Info-session location** — online vs in-person (currently "TBC").
- **Domain / hosting** — pick a domain; deploy to Vercel.
