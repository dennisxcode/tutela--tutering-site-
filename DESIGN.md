# Design System: Tutela

> Source of truth for generating new Tutela screens (Stitch or hand-built) that stay
> on-brand. Encodes the **original** production design — warm, restrained, editorial —
> not the rejected "taste-pass" experiment.
>
> **Adaptation note:** This skill defaults to cool Zinc/Slate neutrals and high motion.
> Tutela deliberately diverges: a **warm** cream/deep-green palette and **restrained**
> motion. This is an intentional brand decision (trust for Chinese-speaking parents),
> not an oversight. The single-accent, no-neon, no-Inter, distinctive-serif, and
> no-fabricated-data rules are all honored.

## 1. Visual Theme & Atmosphere

A warm, gallery-airy admissions-tutoring site that reads like a well-edited printed
prospectus, not a SaaS landing page. The mood is **calm, trustworthy, and classical** —
a nod to the Quebec grammar-school tradition (the brand mark is a pointed arch). Density
is low (airy, generous whitespace, one idea per section). Variance is modest and
**left-aligned**, never centered-hero or chaotic. Motion is **restrained** — small,
meaningful state transitions only, nothing cinematic. The chrome should disappear so
warmth, type, and the arch do the talking.

- **Density:** Art-Gallery Airy (≈3)
- **Variance:** Left-aligned, gently offset (≈3) — not centered, not chaotic
- **Motion:** Static-Restrained (≈2–3)

## 2. Color Palette & Roles

A single warm family — no cool/warm gray fluctuation, no second accent.

- **Cream Canvas** (`#faf7f2`) — Primary background surface (the "paper")
- **Pure Surface** (`#ffffff`) — Alternating section fill, chips, bordered cards
- **Deep Green Ink** (`#1f4733`) — Primary text, headings, the logo, and the dark
  footer. Functions as the near-black; **never use pure `#000000`.**
- **Warm Charcoal** (`#2b2b28`) — Body copy (often at 80–90% opacity for calm contrast)
- **Hairline Border** (`rgba(31,71,51,0.10–0.20)`) — 1px structural lines, chip and
  card outlines (deep-green ink at low alpha — borders share the ink hue, never gray)
- **Terracotta Accent** (`#c0532b`) — The **only** accent. Reserved for the primary CTA
  and active/focus states. Saturation is muted, not neon. Do not spread it across dots,
  rules, and labels — when everything is accent, nothing is.

Banned: purple/blue "AI" neon, glow shadows, gradients on headlines, cool grays,
any second accent.

## 3. Typography Rules

- **Wordmark / Display Serif:** `Fraunces` *italic, 600* — used **only** for the
  "Tutela" wordmark (top bar, footer, share card). A distinctive modern serif, allowed
  precisely because it has character; it carries the classical/analog brand voice.
- **Everything else:** `Noto Sans SC` (weights 400 / 500 / 700) — required because the
  primary audience reads Simplified Chinese, and it renders Latin cleanly too. Track
  headings slightly tight; hierarchy comes from **weight and color**, not giant sizes.
- **Body:** relaxed leading, comfortable measure inside a 42rem column; secondary text
  in Warm Charcoal at ~80% opacity.
- **Banned:** `Inter`; generic serifs (`Times New Roman`, `Georgia`, `Garamond`,
  `Palatino`); using Fraunces for body or for Chinese text (it only styles Latin —
  Chinese falls back to Noto, so keep Fraunces to short Latin brand moments).

## 4. The Hero

Left-aligned, single column, **never centered**. Order: small uppercase eyebrow
(`蒙特利尔 · …`, tracking-widest) → bold headline (Noto Sans SC, ~`2.25rem`/36px,
tight leading) → one-sentence subtitle → **one** primary CTA (`联系我`, terracotta)
sitting beside a neutral free-trial pill → a row of outlined fact-chips.

- **Brand motif, not stock photo:** a large, low-opacity **arch** (the logo shape) bleeds
  off the right edge on `md+` as an embossed compositional element. No photography of
  real people (deliberate — we never misrepresent who teaches).
- **CTA restraint:** exactly one primary CTA. The trial pill is informational (neutral
  outline), not a competing button.
- **No filler:** no "scroll to explore," scroll arrows, or bouncing chevrons.

## 5. Component Stylings

- **Buttons (CTA):** terracotta fill, white label, `rounded-lg`, semibold. Flat — **no
  outer glow**. Hover = gentle opacity shift; active = subtle tactile press. This is the
  only terracotta element on screen.
- **Chips / fact-pills:** white fill, hairline deep-green border, fully rounded. Quiet,
  ticket-like. Used for scannable facts (class size, subjects, schedule).
- **Cards / containers:** use sparingly and only when elevation earns it. Prefer hairline
  borders and whitespace over boxes. The dark footer panel is the one strong surface.
- **Lists (pricing, tutors, steps):** hairline-divided rows or simple bullets. Numbered
  steps use a deep-green (not terracotta) numeral badge.
- **FAQ accordion:** question is a full-width button with a chevron that rotates on open.
  Keep state changes legible.
- **Language toggle:** a two-option pill (`中文 / EN`) with the active side filled deep
  green; persists choice to `localStorage`, Chinese default.
- **WeChat contact card:** real QR on the dark footer with a long-press/scan hint (mobile
  users can't scan their own screen — always include the instruction).
- **Loading/empty/error:** skeletal placeholders matching layout; inline, plainly-worded
  errors. No circular spinners.

## 6. Layout Principles

- **42rem (`max-w-content`) centered measure** for all reading content — an editorial
  column, generous side padding, one idea per section.
- **Alternating surfaces** (cream ↔ white) to separate sections instead of heavy borders.
- Left-aligned section headings; hierarchy via weight/space, minimal decorative rules.
- No overlapping elements — every element owns its spatial zone (the hero arch is a
  low-opacity background motif, not stacked on text).
- CSS Grid for structure; avoid `calc()` percentage hacks.
- Full-height regions use `min-h-[100dvh]`, never `h-screen`.
- **Known tension:** the stats row is a 3-up equal layout (a pattern this skill normally
  discourages). It's acceptable here because it's three *data points*, not three feature
  cards — but if it ever grows, switch to hairline-divided figures rather than boxes.

## 7. Responsive Rules

- **Mobile-first.** The site is designed phone-first; everything collapses to one column
  below `768px`. No horizontal scroll, ever.
- Headlines scale modestly; body never below `1rem`. Comfortable line length on all sizes.
- Touch targets ≥ `44px` (CTA, toggle, accordion rows, QR).
- The desktop hero arch motif hides on small screens; content reflows to a clean stack.
- Section vertical rhythm tightens proportionally on mobile.

## 8. Motion & Interaction

Restrained and **meaningful** — motion communicates state, it does not decorate.

- Chevron rotation on FAQ open; gentle opacity/press feedback on the CTA.
- If reveal-on-scroll or animated accordions are ever added, keep them subtle (short,
  eased) and **respect `prefers-reduced-motion`** (show content immediately).
- Animate only `transform` and `opacity` (hardware-accelerated). Never animate
  `top/left/width/height`.
- No perpetual loops, no spring-bouncy cinematics — this audience wants clarity and calm,
  not choreography.

## 9. Anti-Patterns (Banned)

- No emojis anywhere.
- No `Inter`; no generic serifs (Fraunces is the only serif, for the wordmark only).
- No pure black `#000000` — Deep Green Ink is the near-black.
- No neon / outer-glow shadows; no gradient headlines; no oversaturated color.
- No second accent — terracotta is for the CTA and active states only.
- No stock photos of "tutors" or any misrepresentation of who teaches.
- **No fabricated data** — never invent enrolment counts, success rates, "98% pass," or
  testimonials. If there's no track record yet, lean on the tutors' own verifiable
  credentials (named contests only, e.g. AMC / Waterloo — no "#1" superlatives).
- No unconfirmed claims stated as fact — the class location stays "确认中 / being
  finalized" until confirmed; mock exams stay "即将推出 / coming soon."
- No `LABEL // YEAR` typography, no AI clichés ("Elevate", "Seamless", "Next-Gen").
- No filler UI text ("Scroll to explore", bouncing chevrons).
- No generic placeholder names; the one real personal touchpoint is **Dennis**, in the
  contact area only — everywhere else the voice is collective "we".
- No broken image links.
