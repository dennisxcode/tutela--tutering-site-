# Tutela — Design Journal

How the Tutela site got to where it is: the things that were tried, rejected, and
kept, and the taste behind those calls. Written so a future collaborator (human or
AI) understands *why* the site looks the way it does — and doesn't re-make mistakes
we already ruled out.

---

## The arc, in one paragraph

We started from a plain, correct bilingual page; named the brand **Tutela** (Latin,
"guardianship"); gave it a characterful **Fraunces** wordmark and a pointed-arch
logo; layered in professionalism (credibility, dates, 24/7 support, share card).
Two redesigns were tried and **rejected** — a "subtraction" pass and a
Linear/Mercury-style structural redesign — because they read as *generic and
motion-slop*. The breakthrough was **"Le Passage"**: treat the arch as the literal
threshold into secondary school, set headlines in a **Chinese serif** for editorial
gravitas, and use **one meaningful motion** (the arch drawing itself) instead of a
carpet of fade-ups. The logo went **dot → keystone → arch-only** before it felt
non-arbitrary. Final polish: language-aware serif, the arch threaded through every
section, printed-ink texture, and naming the math tutor.

---

## What you disliked (and the lesson each time)

- **Plain, characterless type.** Early wordmark "looks like a normal font."
  → *Type needs personality.* Led to the Fraunces italic wordmark.
- **A serif mockup that looked "horrible."** That was Georgia in a preview image, not
  the real site font. → *Judge the real render, not a quick mockup.*
- **The "subtraction" taste pass** (removed icons, de-boxed, demoted orange, added
  scroll reveals + sliding toggle). You preferred the original warm version.
  → *Don't strip the warmth or change everything at once.*
- **The reference-inspired redesign felt "AI sloppy, motion-ish, nothing WOW."**
  → **The single most important lesson: generic fade-up-on-scroll reveals are the #1
  AI-slop tell.** "Premium" comes from one strong idea + typography + restraint, not
  from sprinkling motion on a card stack.
- **The orange dot on the logo felt "randomly added."** → *Every mark element must
  mean something.*
- **The keystone "still feels random."** Even a meaningful shape can read as arbitrary
  if it isn't obviously part of the form. → *When in doubt, simplify.* Became
  **arch-only**.

## What you liked

- The **warm palette** (cream / deep-green / terracotta) — explicitly chose to *keep
  and elevate* it rather than go cool/neutral.
- The **Fraunces italic wordmark** — character without shouting.
- The **"Tutela" name** and its Latin meaning.
- The **"Le Passage" concept** — the arch as a real architectural idea, not decoration.
- **Big Chinese serif headlines** (Noto Serif SC) — instant editorial gravitas.
- **Motion that *means* something** — the arch drawing itself on load ("more
  expressive," but purposeful).
- The **clean single-arch logo** — once it was just the arch, it stopped feeling random.
- **Exploiting the arch more** across the page (section crowns + CTA bookend).
- **Reference sites:** Linear, Superhuman, Mercury, GrowthMentor — for structure,
  trust architecture, and premium restraint (to *adapt*, never copy).
- **Trust moves:** naming the math tutor (Chen Chen, verifiable), the 24/7 support
  promise, the free trial.
- **Comparing safely** — building risky changes on a branch + Vercel preview so the
  live site never changed until you approved.

## Design principles that emerged (the taste, distilled)

1. **Distinctive and ownable beats polished-but-generic.** If it could be any startup,
   it's wrong.
2. **Motion must communicate.** The arch draws (you're entering); section rules draw
   (ruling a line); the FAQ eases open. No decorative fade-stacks. Ever.
3. **Restraint / invisible chrome.** Fewer boxes, one accent colour (terracotta = the
   CTA only), whitespace doing the work.
4. **Analog references.** Blueprint grid, registration ticks, letterpress grain,
   classical arch — it should feel made, not generated.
5. **Warm over cool.** The palette is a feature, not a default.
6. **Editorial serif = trust.** Serif Chinese headlines read prestigious and literary,
   which is what parents respond to.
7. **Honesty.** No fabricated stats, testimonials, or photos; verifiable claims only.

## Decision log

| Area | Tried | Outcome |
| --- | --- | --- |
| Brand name | peer/ascent/gateway/Latin options | **Tutela** (Latin, guardianship) |
| Wordmark | plain sans → Fraunces italic | **Fraunces italic** |
| Headlines | bold sans → Noto Serif SC → language-aware | **Serif SC (zh) / Fraunces (en)** |
| Layout | original → subtraction pass → Linear/Mercury → Le Passage | **Le Passage (editorial blueprint)** |
| Motion | static → generic scroll reveals → singular meaningful | **Arch draws + rule draws; reduced-motion safe** |
| Logo | arch + dot → arch + keystone → arch only | **Single pointed-arch stroke** |
| Hero | left-aligned block → arch-framed serif | **Arch frames the serif headline** |
| Trust | anonymous tutors → named + verifiable | **Named math tutor; 24/7; free trial** |
| Workflow | edit prod directly → branch + preview | **Branch + Vercel preview, merge on approval** |

## Where it stands

Live at **webtutela.vercel.app**. Still open, by choice: a custom domain, a real
testimonial, a concrete "we know the exam" proof, and a font-performance pass. See
[`DESIGN.md`](../DESIGN.md) for the system to build against.
