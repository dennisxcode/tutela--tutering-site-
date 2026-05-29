# Tutoring Marketing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, mobile-first, bilingual (Simplified-Chinese-default + EN toggle) Next.js marketing site for a Quebec secondary-admission-exam tutoring service.

**Architecture:** One scrolling Next.js App Router page composed of focused section components. All copy lives in a single typed `content.ts` object keyed `{ zh, en }`; a React context (`LanguageProvider`) holds the active locale and exposes a `t()` helper. No backend — the contact path is a WeChat QR image. Claim-safety rules from the spec (§5) are enforced by unit tests on the content object.

**Tech Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · Lucide React · Vitest + React Testing Library (jsdom) · next/font (Noto Sans SC).

**Spec:** `docs/superpowers/specs/2026-05-28-tutoring-site-design.md`

**Design tokens (direction B):** background `#faf7f2` · heading/ink `#1f4733` · CTA/accent `#c0532b` · body text `#2b2b28` · surface `#ffffff`.

---

## File Structure

```
tutoring-site/
  package.json                 # deps + scripts
  tsconfig.json
  next.config.mjs
  postcss.config.mjs
  tailwind.config.ts           # design-token colors
  vitest.config.ts             # jsdom + react
  vitest.setup.ts              # jest-dom matchers
  app/
    layout.tsx                 # font, <html lang>, metadata, LanguageProvider
    globals.css                # tailwind directives + base
    page.tsx                   # assembles all sections
  lib/
    content.ts                 # bilingual content + types (single source of copy)
    LanguageContext.tsx        # provider + useLanguage() hook
  components/
    Section.tsx                # shared section shell (id, icon, heading)
    LanguageToggle.tsx         # ZH/EN switch
    CtaButton.tsx              # warm-orange CTA → #join
    WeChatCta.tsx              # QR image + WeChat-ID fallback (reused)
    TopBar.tsx                 # sticky bar: brand, toggle, CTA
    sections/
      Hero.tsx
      WhoWeAre.tsx
      WhatWeOffer.tsx          # incl. mock-exams-coming note
      Tutors.tsx
      HowItWorks.tsx
      Pricing.tsx
      WhoItsFor.tsx
      InfoSession.tsx
      Faq.tsx
      FooterCta.tsx
  public/
    wechat-qr-placeholder.svg  # labelled placeholder until real QR provided
  __tests__/
    content.test.ts            # completeness + claim-safety guards
    LanguageContext.test.tsx   # default locale, toggle, persistence
    page.smoke.test.tsx        # renders in both languages
```

---

### Task 1: Scaffold project, tooling, and Tailwind tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `vitest.config.ts`, `vitest.setup.ts`, `app/globals.css`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "tutoring-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "lucide-react": "0.424.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "6.4.8",
    "@testing-library/react": "16.0.0",
    "@types/node": "20.14.14",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "@vitejs/plugin-react": "4.3.1",
    "autoprefixer": "10.4.19",
    "jsdom": "24.1.1",
    "postcss": "8.4.40",
    "tailwindcss": "3.4.7",
    "typescript": "5.5.4",
    "vitest": "2.0.5"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
```

- [ ] **Step 4: Create `postcss.config.mjs`**

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

- [ ] **Step 5: Create `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf7f2",
        ink: "#1f4733",
        accent: "#c0532b",
        body: "#2b2b28",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "42rem" },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 6: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

- [ ] **Step 7: Create `vitest.setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 8: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { background-color: #faf7f2; color: #2b2b28; }
```

- [ ] **Step 9: Install dependencies**

Run: `cd /home/dennis/tutoring-site && npm install`
Expected: dependencies install, `node_modules/` created, no error exit.

- [ ] **Step 10: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "chore: scaffold Next.js + Tailwind + Vitest tooling"
```

---

### Task 2: Bilingual content model with claim-safety tests (TDD)

**Files:**
- Create: `lib/content.ts`
- Test: `__tests__/content.test.ts`

- [ ] **Step 1: Write the failing test**

`__tests__/content.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { content, type Bi } from "@/lib/content";

// Collect every {zh, en} leaf in the content tree.
function collectBi(node: unknown, acc: Bi[] = []): Bi[] {
  if (Array.isArray(node)) {
    node.forEach((n) => collectBi(n, acc));
  } else if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    if (typeof obj.zh === "string" && typeof obj.en === "string") {
      acc.push(obj as Bi);
    } else {
      Object.values(obj).forEach((v) => collectBi(v, acc));
    }
  }
  return acc;
}

describe("content completeness", () => {
  it("every bilingual leaf has non-empty zh and en", () => {
    const leaves = collectBi(content);
    expect(leaves.length).toBeGreaterThan(20);
    for (const leaf of leaves) {
      expect(leaf.zh.trim().length).toBeGreaterThan(0);
      expect(leaf.en.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("claim safety (spec §5)", () => {
  it("math tutor names AMC + Waterloo and makes no #1 superlative", () => {
    const zh = content.tutors.math.zh;
    expect(zh).toContain("AMC");
    expect(zh).toContain("Waterloo");
    expect(zh).not.toMatch(/第一|排名第一|#1/);
    expect(content.tutors.math.en.toLowerCase()).not.toContain("#1");
  });

  it("location is framed as being finalized, not asserted at a school", () => {
    expect(content.howItWorks.body.zh).toContain("确认中");
    expect(content.faq[2].a.zh).toContain("确认中");
  });

  it("mock exams are framed as upcoming, not live", () => {
    expect(content.whatWeOffer.mockExams.zh).toContain("即将");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd /home/dennis/tutoring-site && npx vitest run __tests__/content.test.ts`
Expected: FAIL — cannot resolve module `@/lib/content`.

- [ ] **Step 3: Write `lib/content.ts`**

```ts
export type Bi = { zh: string; en: string };

export const content = {
  meta: {
    title: { zh: "中学入学考试辅导", en: "Secondary Admission Exam Tutoring" },
    description: {
      zh: "由刚刚考过入学考试的尖子生提供的中学入学考试小组辅导。",
      en: "Small-group secondary admission exam tutoring by students who just aced the exams.",
    },
    brand: { zh: "入学考试辅导", en: "Admission Exam Tutoring" },
  },
  nav: {
    join: { zh: "加入家长群", en: "Join the group" },
  },
  hero: {
    tag: { zh: "中学入学考试备考", en: "Secondary admission exam prep" },
    title: { zh: "中学入学考试辅导", en: "Secondary Admission Exam Tutoring" },
    subtitle: {
      zh: "我们是刚刚考过入学考试的尖子生，帮助孩子顺利通过考试。",
      en: "We're top students who just passed the admission exams, here to help your child pass theirs.",
    },
    cta: { zh: "扫码加入家长群", en: "Scan to join the parents' group" },
    chips: [
      { zh: "5–10 人小班", en: "Small classes of 5–10" },
      { zh: "数学 · 法语 · 英语", en: "Math · French · English" },
      { zh: "周六上午授课", en: "Saturday mornings" },
    ],
  },
  whoWeAre: {
    title: { zh: "关于我们", en: "Who we are" },
    body: {
      zh: "我们是来自魁北克顶尖学校的中学生，包括 Collège Jean-de-Brébeuf。我们都参加过中学入学考试，知道考试考什么、怎么考，也明白孩子需要准备什么。我们用自己的经验来帮助孩子备考。",
      en: "We're secondary students from top Quebec schools, including Collège Jean-de-Brébeuf. We've all taken the secondary admission exams ourselves — we know what they test, how they work, and what your child needs to prepare. We use that first-hand experience to help your child get ready.",
    },
  },
  whatWeOffer: {
    title: { zh: "我们提供什么", en: "What we offer" },
    body: {
      zh: "我们主要提供针对中学入学考试的小组辅导，科目包括数学、法语、英语。课程适合小学三、四、五年级的学生，按年级和报名人数分组。除了入学考试备考，我们也提供一般学科辅导。",
      en: "We focus on small-group tutoring for the secondary admission exams, covering Math, French, and English. Classes suit primary grades 3, 4, and 5, grouped by grade level and enrolment. Beyond admission prep, we also offer general academic tutoring.",
    },
    mockExams: {
      zh: "我们还将提供基于近年入学考试内容设计的模拟测试，帮助孩子熟悉考试形式。（即将推出）",
      en: "We'll also provide practice exams modeled on recent admission-exam content to help children get familiar with the format. (Coming soon)",
    },
  },
  tutors: {
    title: { zh: "导师团队", en: "The tutors" },
    math: {
      zh: "数学导师：在 AMC（美国数学竞赛）及 Waterloo（CEMC）数学竞赛中名列前茅。",
      en: "Math tutor: places among the top in the AMC (American Mathematics Competitions) and Waterloo (CEMC) math contests.",
    },
    english: {
      zh: "英语导师：就读于 Brébeuf 最高级别的英语课程，成绩优异。",
      en: "English tutor: enrolled in the highest level of English offered at Brébeuf, with excellent results.",
    },
    french: {
      zh: "法语导师：曾多次在 Brébeuf 的写作比赛中获奖。",
      en: "French tutor: multiple-time winner of writing contests at Brébeuf.",
    },
  },
  howItWorks: {
    title: { zh: "上课方式", en: "How it works" },
    body: {
      zh: "小组课程在每周六上午9点至12点进行。每组人数设定在5至10人，这样每个孩子都能得到足够的关注。我们提供线下和线上两种形式，会根据孩子的情况来安排。上课地点正在确认中，确定后会通知。",
      en: "Group classes run every Saturday, 9:00 AM–12:00 PM. Each group is kept to 5–10 students so every child gets enough attention. We offer both in-person and online formats, arranged to suit your child. The class location is being finalized and will be announced once confirmed.",
    },
  },
  pricing: {
    title: { zh: "收费", en: "Pricing" },
    rows: [
      { label: { zh: "选 1 门", en: "1 subject" }, price: "$15" },
      { label: { zh: "选 2 门", en: "2 subjects" }, price: "$30" },
      { label: { zh: "选 3 门（套餐）", en: "3 subjects (bundle)" }, price: "$40" },
    ],
    note: {
      zh: "建议参加全部三门课，效果更全面，也更划算。",
      en: "We recommend all three subjects — more complete preparation, better value.",
    },
  },
  whoItsFor: {
    title: { zh: "适合谁", en: "Who it's for" },
    body: {
      zh: "主要适合小学三、四、五年级，准备中学入学考试的学生。有特殊情况（例如 Sec 1 想转入 Sec 2）或想了解一对一辅导的家长，欢迎私信联系我们。",
      en: "Best for primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases (e.g. a Sec 1 student transferring into Sec 2) or one-on-one tutoring, message us privately.",
    },
  },
  infoSession: {
    title: { zh: "说明会", en: "Information session" },
    body: {
      zh: "说明会将于6月19日晚上7点至9点举行，欢迎所有家长参加。届时会介绍收费、课程安排、备考方式等详细信息，并设有问答环节。地点稍后确认；如有变动，我们会及时通知。",
      en: "Our information session is on June 19, 7:00–9:00 PM — all parents welcome. We'll cover pricing, the class schedule, and how we prepare the children, with a Q&A. Location to be confirmed; we'll notify you of any changes.",
    },
  },
  faq: {
    title: { zh: "常见问题", en: "FAQ" },
  },
  footer: {
    cta: { zh: "扫码加入家长群", en: "Scan to join the parents' group" },
    wechatIdLabel: { zh: "微信号", en: "WeChat ID" },
    wechatId: { zh: "（待提供）", en: "(to provide)" },
    note: { zh: "有问题欢迎私信。", en: "Message us with any questions." },
  },
};

export type Content = typeof content;
```

- [ ] **Step 4: Add the FAQ array to `lib/content.ts`** (separate export so the test's `content.faq[2]` index resolves)

Replace the `faq: { title: ... }` block above with:

```ts
  faq: [
    {
      q: { zh: "你们是怎么收费的？", en: "How do you charge?" },
      a: {
        zh: "小组课程 15$/小时/科目。选1门15$，选2门30$，选3门40$（套餐优惠）。一对一价格因导师而异，请私信。",
        en: "Group classes are $15/hour/subject. 1 subject $15, 2 subjects $30, 3 subjects $40 (bundle). One-on-one pricing varies by tutor — please message us.",
      },
    },
    {
      q: { zh: "group class 通常是几个人？", en: "How many students are in a group class?" },
      a: {
        zh: "我们将每组人数设定在5至10人，这样每个孩子都能得到足够的关注，学习效果更好。",
        en: "We keep groups to 5–10 students so every child gets enough attention and learns better.",
      },
    },
    {
      q: { zh: "上课地点在哪里？", en: "Where are the classes held?" },
      a: {
        zh: "上课地点正在确认中。我们计划安排线下教室，同时也提供线上课程，具体细节确认后通知。",
        en: "The location is being finalized. We plan to hold in-person classes and also offer online sessions; we'll share details once confirmed.",
      },
    },
    {
      q: { zh: "授课是你亲自授课还是同学？", en: "Do you teach personally, or other students?" },
      a: {
        zh: "授课由我们的导师团队负责，每位导师教自己的科目。",
        en: "Classes are taught by our tutor team — each tutor teaches their own subject.",
      },
    },
    {
      q: { zh: "你是哪个专业／几年级？", en: "What's your program / grade?" },
      a: {
        zh: "Collège Jean-de-Brébeuf 学生，拉丁语专业，Sec 4。",
        en: "Collège Jean-de-Brébeuf student, Latin program, Sec 4.",
      },
    },
    {
      q: { zh: "适合几年级的孩子？", en: "What grades is this for?" },
      a: {
        zh: "主要适合小学三、四、五年级，准备中学入学考试的学生。特殊情况请私信。",
        en: "Mainly primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases, please message us.",
      },
    },
  ] as { q: Bi; a: Bi }[],
```

Note: `faq` is now an array (the FAQ section reads `content.faq` and maps; the heading "常见问题/FAQ" is hard-coded in the `Faq` component in Task 8).

- [ ] **Step 5: Run test to verify it passes**

Run: `cd /home/dennis/tutoring-site && npx vitest run __tests__/content.test.ts`
Expected: PASS (3 describe blocks, all assertions green).

- [ ] **Step 6: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: bilingual content model with claim-safety tests"
```

---

### Task 3: Language context with persistence (TDD)

**Files:**
- Create: `lib/LanguageContext.tsx`
- Test: `__tests__/LanguageContext.test.tsx`

- [ ] **Step 1: Write the failing test**

`__tests__/LanguageContext.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";

function Probe() {
  const { locale, toggle, t } = useLanguage();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="word">{t({ zh: "你好", en: "hello" })}</span>
      <button onClick={toggle}>switch</button>
    </div>
  );
}

describe("LanguageContext", () => {
  beforeEach(() => localStorage.clear());

  it("defaults to zh", () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByTestId("locale").textContent).toBe("zh");
    expect(screen.getByTestId("word").textContent).toBe("你好");
  });

  it("toggles to en and persists the choice", () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    fireEvent.click(screen.getByText("switch"));
    expect(screen.getByTestId("locale").textContent).toBe("en");
    expect(screen.getByTestId("word").textContent).toBe("hello");
    expect(localStorage.getItem("locale")).toBe("en");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd /home/dennis/tutoring-site && npx vitest run __tests__/LanguageContext.test.tsx`
Expected: FAIL — cannot resolve `@/lib/LanguageContext`.

- [ ] **Step 3: Write `lib/LanguageContext.tsx`**

```tsx
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Bi } from "@/lib/content";

export type Locale = "zh" | "en";

type LanguageValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: (b: Bi) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "zh" || stored === "en") setLocale(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const value: LanguageValue = {
    locale,
    setLocale,
    toggle: () => setLocale((l) => (l === "zh" ? "en" : "zh")),
    t: (b: Bi) => b[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd /home/dennis/tutoring-site && npx vitest run __tests__/LanguageContext.test.tsx`
Expected: PASS (both tests green).

- [ ] **Step 5: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: language context with zh default and localStorage persistence"
```

---

### Task 4: Shared UI primitives + WeChat placeholder

**Files:**
- Create: `public/wechat-qr-placeholder.svg`, `components/Section.tsx`, `components/CtaButton.tsx`, `components/LanguageToggle.tsx`, `components/WeChatCta.tsx`

- [ ] **Step 1: Create `public/wechat-qr-placeholder.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="WeChat QR placeholder">
  <rect width="200" height="200" fill="#ffffff" stroke="#1f4733" stroke-width="2"/>
  <rect x="20" y="20" width="40" height="40" fill="#1f4733"/>
  <rect x="140" y="20" width="40" height="40" fill="#1f4733"/>
  <rect x="20" y="140" width="40" height="40" fill="#1f4733"/>
  <rect x="80" y="80" width="40" height="40" fill="#c0532b"/>
  <text x="100" y="115" font-family="sans-serif" font-size="9" fill="#ffffff" text-anchor="middle">QR</text>
  <text x="100" y="195" font-family="sans-serif" font-size="9" fill="#1f4733" text-anchor="middle">placeholder — replace</text>
</svg>
```

- [ ] **Step 2: Create `components/Section.tsx`**

```tsx
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  icon,
  children,
  surface = false,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  surface?: boolean;
}) {
  return (
    <section id={id} className={surface ? "bg-white" : ""}>
      <div className="mx-auto max-w-content px-5 py-12">
        <div className="mb-5 flex items-center gap-2 text-ink">
          <span aria-hidden>{icon}</span>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/CtaButton.tsx`**

```tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function CtaButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a
      href="#join"
      className={`inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 ${className}`}
    >
      {t(content.nav.join)}
    </a>
  );
}
```

- [ ] **Step 4: Create `components/LanguageToggle.tsx`**

```tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const base = "px-3 py-1 text-sm font-semibold transition";
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-ink/30" role="group" aria-label="Language">
      <button
        onClick={() => setLocale("zh")}
        aria-pressed={locale === "zh"}
        className={`${base} ${locale === "zh" ? "bg-ink text-white" : "bg-white text-ink"}`}
      >
        中文
      </button>
      <button
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`${base} ${locale === "en" ? "bg-ink text-white" : "bg-white text-ink"}`}
      >
        EN
      </button>
    </div>
  );
}
```

- [ ] **Step 5: Create `components/WeChatCta.tsx`**

```tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function WeChatCta() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src="/wechat-qr-placeholder.svg"
        alt={t(content.footer.cta)}
        width={180}
        height={180}
        className="rounded-lg border border-ink/15 bg-white p-2"
      />
      <p className="font-semibold text-ink">{t(content.footer.cta)}</p>
      <p className="text-sm text-body/70">
        {t(content.footer.wechatIdLabel)}: {t(content.footer.wechatId)}
      </p>
    </div>
  );
}
```

- [ ] **Step 6: Verify it typechecks**

Run: `cd /home/dennis/tutoring-site && npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: shared UI primitives (section, CTA, toggle, WeChat block)"
```

---

### Task 5: Top bar + hero + who-we-are + what-we-offer sections

**Files:**
- Create: `components/TopBar.tsx`, `components/sections/Hero.tsx`, `components/sections/WhoWeAre.tsx`, `components/sections/WhatWeOffer.tsx`

- [ ] **Step 1: Create `components/TopBar.tsx`**

```tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { LanguageToggle } from "@/components/LanguageToggle";
import { CtaButton } from "@/components/CtaButton";

export function TopBar() {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3">
        <span className="font-bold text-ink">{t(content.meta.brand)}</span>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <CtaButton className="hidden sm:inline-block" />
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create `components/sections/Hero.tsx`**

```tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-content px-5 pb-12 pt-14">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink">
        {t(content.hero.tag)}
      </p>
      <h1 className="mb-4 text-4xl font-bold leading-tight text-ink">
        {t(content.hero.title)}
      </h1>
      <p className="mb-7 text-lg leading-relaxed text-body/90">
        {t(content.hero.subtitle)}
      </p>
      <CtaButton className="!px-6 !py-3 !text-base" />
      <ul className="mt-8 flex flex-wrap gap-2">
        {content.hero.chips.map((chip, i) => (
          <li
            key={i}
            className="rounded-full border border-ink/20 bg-white px-3 py-1 text-sm text-ink"
          >
            {t(chip)}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/WhoWeAre.tsx`**

```tsx
"use client";

import { Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhoWeAre() {
  const { t } = useLanguage();
  return (
    <Section id="who" title={t(content.whoWeAre.title)} icon={<Users size={22} />} surface>
      <p className="text-base leading-relaxed text-body/90">{t(content.whoWeAre.body)}</p>
    </Section>
  );
}
```

- [ ] **Step 4: Create `components/sections/WhatWeOffer.tsx`**

```tsx
"use client";

import { BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhatWeOffer() {
  const { t } = useLanguage();
  return (
    <Section id="offer" title={t(content.whatWeOffer.title)} icon={<BookOpen size={22} />}>
      <p className="text-base leading-relaxed text-body/90">{t(content.whatWeOffer.body)}</p>
      <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-body/90">
        {t(content.whatWeOffer.mockExams)}
      </p>
    </Section>
  );
}
```

- [ ] **Step 5: Verify it typechecks**

Run: `cd /home/dennis/tutoring-site && npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: top bar, hero, who-we-are, what-we-offer sections"
```

---

### Task 6: Tutors + how-it-works + pricing sections

**Files:**
- Create: `components/sections/Tutors.tsx`, `components/sections/HowItWorks.tsx`, `components/sections/Pricing.tsx`

- [ ] **Step 1: Create `components/sections/Tutors.tsx`**

```tsx
"use client";

import { Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Tutors() {
  const { t } = useLanguage();
  const lines = [content.tutors.math, content.tutors.english, content.tutors.french];
  return (
    <Section id="tutors" title={t(content.tutors.title)} icon={<Award size={22} />} surface>
      <ul className="space-y-3">
        {lines.map((line, i) => (
          <li key={i} className="flex gap-2 text-base leading-relaxed text-body/90">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
            {t(line)}
          </li>
        ))}
      </ul>
    </Section>
  );
}
```

- [ ] **Step 2: Create `components/sections/HowItWorks.tsx`**

```tsx
"use client";

import { CalendarClock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <Section id="how" title={t(content.howItWorks.title)} icon={<CalendarClock size={22} />}>
      <p className="text-base leading-relaxed text-body/90">{t(content.howItWorks.body)}</p>
    </Section>
  );
}
```

- [ ] **Step 3: Create `components/sections/Pricing.tsx`**

```tsx
"use client";

import { Tag } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Pricing() {
  const { t } = useLanguage();
  return (
    <Section id="pricing" title={t(content.pricing.title)} icon={<Tag size={22} />} surface>
      <ul className="divide-y divide-ink/10 overflow-hidden rounded-xl border border-ink/15">
        {content.pricing.rows.map((row, i) => {
          const isBundle = i === content.pricing.rows.length - 1;
          return (
            <li
              key={i}
              className={`flex items-center justify-between px-4 py-3 ${isBundle ? "bg-accent/5" : ""}`}
            >
              <span className="text-body/90">{t(row.label)}</span>
              <span className={`font-bold ${isBundle ? "text-accent" : "text-ink"}`}>{row.price}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-body/80">{t(content.pricing.note)}</p>
    </Section>
  );
}
```

- [ ] **Step 4: Verify it typechecks**

Run: `cd /home/dennis/tutoring-site && npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: tutors, how-it-works, pricing sections"
```

---

### Task 7: Who-it's-for + info-session + FAQ + footer sections

**Files:**
- Create: `components/sections/WhoItsFor.tsx`, `components/sections/InfoSession.tsx`, `components/sections/Faq.tsx`, `components/sections/FooterCta.tsx`

- [ ] **Step 1: Create `components/sections/WhoItsFor.tsx`**

```tsx
"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhoItsFor() {
  const { t } = useLanguage();
  return (
    <Section id="who-for" title={t(content.whoItsFor.title)} icon={<GraduationCap size={22} />}>
      <p className="text-base leading-relaxed text-body/90">{t(content.whoItsFor.body)}</p>
    </Section>
  );
}
```

- [ ] **Step 2: Create `components/sections/InfoSession.tsx`**

```tsx
"use client";

import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function InfoSession() {
  const { t } = useLanguage();
  return (
    <Section id="session" title={t(content.infoSession.title)} icon={<CalendarDays size={22} />} surface>
      <p className="text-base leading-relaxed text-body/90">{t(content.infoSession.body)}</p>
    </Section>
  );
}
```

- [ ] **Step 3: Create `components/sections/Faq.tsx`**

```tsx
"use client";

import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Faq() {
  const { t, locale } = useLanguage();
  const title = locale === "zh" ? "常见问题" : "FAQ";
  return (
    <Section id="faq" title={title} icon={<HelpCircle size={22} />}>
      <dl className="space-y-5">
        {content.faq.map((item, i) => (
          <div key={i}>
            <dt className="font-semibold text-ink">{t(item.q)}</dt>
            <dd className="mt-1 text-base leading-relaxed text-body/85">{t(item.a)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
```

- [ ] **Step 4: Create `components/sections/FooterCta.tsx`**

```tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { WeChatCta } from "@/components/WeChatCta";

export function FooterCta() {
  const { t } = useLanguage();
  return (
    <footer id="join" className="bg-ink text-white">
      <div className="mx-auto max-w-content px-5 py-14">
        <div className="rounded-2xl bg-white/5 p-8">
          <WeChatCta />
          <p className="mt-4 text-center text-sm text-white/70">{t(content.footer.note)}</p>
        </div>
      </div>
    </footer>
  );
}
```

Note: `WeChatCta` text is dark-on-light inside its own white card, so it stays readable on the dark footer.

- [ ] **Step 5: Verify it typechecks**

Run: `cd /home/dennis/tutoring-site && npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: who-its-for, info-session, FAQ, footer sections"
```

---

### Task 8: Assemble layout + page, render smoke test, build, push

**Files:**
- Create: `app/layout.tsx`, `app/page.tsx`, `__tests__/page.smoke.test.tsx`

- [ ] **Step 1: Write the failing smoke test**

`__tests__/page.smoke.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "@/app/page";

describe("home page", () => {
  beforeEach(() => localStorage.clear());

  it("renders the Chinese hero by default", () => {
    render(<Page />);
    expect(screen.getAllByText("中学入学考试辅导").length).toBeGreaterThan(0);
  });

  it("switches to English when EN is selected", () => {
    render(<Page />);
    fireEvent.click(screen.getByText("EN"));
    expect(screen.getByText("Secondary Admission Exam Tutoring")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd /home/dennis/tutoring-site && npx vitest run __tests__/page.smoke.test.tsx`
Expected: FAIL — cannot resolve `@/app/page`.

- [ ] **Step 3: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

// CJK fonts: do NOT pass `subsets` and set `preload: false`, otherwise
// next/font errors ("Missing selected font subset") at build.
const noto = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: content.meta.title.zh,
  description: content.meta.description.zh,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={noto.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Create `app/page.tsx`**

```tsx
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { Tutors } from "@/components/sections/Tutors";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { InfoSession } from "@/components/sections/InfoSession";
import { Faq } from "@/components/sections/Faq";
import { FooterCta } from "@/components/sections/FooterCta";

export default function Page() {
  return (
    <main>
      <TopBar />
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <Tutors />
      <HowItWorks />
      <Pricing />
      <WhoItsFor />
      <InfoSession />
      <Faq />
      <FooterCta />
    </main>
  );
}
```

- [ ] **Step 5: Run smoke test to verify it passes**

Run: `cd /home/dennis/tutoring-site && npx vitest run __tests__/page.smoke.test.tsx`
Expected: PASS (both tests green).

- [ ] **Step 6: Run the full test suite**

Run: `cd /home/dennis/tutoring-site && npm test`
Expected: all test files pass (content, LanguageContext, page smoke).

- [ ] **Step 7: Production build**

Run: `cd /home/dennis/tutoring-site && npm run build`
Expected: build completes, route `/` compiled, no type or lint errors.

- [ ] **Step 8: Commit and push**

```bash
cd /home/dennis/tutoring-site
git add -A
git commit -m "feat: assemble layout + page, add render smoke test"
git push
```

---

### Task 9: Manual verification + handoff notes

- [ ] **Step 1: Run dev server and eyeball it**

Run: `cd /home/dennis/tutoring-site && npm run dev`
Open `http://localhost:3000`. Check on a narrow (mobile) viewport:
- Hero, trust chips, CTA visible above-ish the fold.
- ZH/EN toggle swaps all sections; refresh preserves the choice (localStorage).
- Pricing bundle row is accent-highlighted; FAQ readable; footer QR placeholder shows.
- Colors match tokens (cream bg, green headings, orange CTA).

- [ ] **Step 2: Confirm the launch checklist is documented**

Verify the spec §8 open items remain accurate (WeChat QR image + ID, info-session location, domain/hosting). These are intentionally NOT blockers for the build — they are pre-launch swaps. No code change needed; this step is a checklist confirmation.

---

## Pre-launch swaps (not part of the build)

- Replace `public/wechat-qr-placeholder.svg` with the real QR (keep the filename or update the `src` in `components/WeChatCta.tsx`), and set `content.footer.wechatId`.
- Decide info-session location wording once finalized.
- Choose a domain and deploy to Vercel (`vercel` / connect the GitHub repo).
