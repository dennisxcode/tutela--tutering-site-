"use client";

import { Gift } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      {/* warm radial glow behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(192,83,43,0.08) 0%, transparent 70%)",
        }}
      />

      {/* decorative arch — larger, more architectural */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 hidden h-96 w-96 -translate-y-1/2 text-ink/[0.06] md:block lg:right-[4%]"
      >
        <path d="M8 28 Q8 10 16 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M24 28 Q24 10 16 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <circle cx="16" cy="4" r="2" className="fill-accent/30" />
      </svg>

      <div className="relative mx-auto max-w-content px-5 pb-14 pt-16">
        {/* eyebrow tag */}
        <span className="mb-5 inline-flex items-center rounded-full border border-accent/25 bg-accent/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          {t(content.hero.tag)}
        </span>

        <h1 className="mb-5 text-[2.75rem] font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
          {t(content.hero.title)}
        </h1>

        <p className="mb-8 max-w-sm text-lg leading-relaxed text-body/80">
          {t(content.hero.subtitle)}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <CtaButton className="!px-7 !py-3.5 !text-base" />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Gift size={15} aria-hidden />
            {t(content.hero.trial)}
          </span>
        </div>

        <ul className="mt-9 flex flex-wrap gap-2">
          {content.hero.chips.map((chip, i) => (
            <li
              key={i}
              className="rounded-full border border-ink/15 bg-white/70 px-3.5 py-1.5 text-sm text-ink/80 shadow-sm backdrop-blur-sm"
            >
              {t(chip)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
