"use client";

import { Gift } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";
import { ArchDraw } from "@/components/ArchDraw";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="blueprint relative overflow-hidden bg-cream">
      {/* drafting registration ticks */}
      <span className="absolute left-5 top-5 h-3.5 w-3.5 border-l border-t border-ink/20" aria-hidden />
      <span className="absolute right-5 top-5 h-3.5 w-3.5 border-r border-t border-ink/20" aria-hidden />
      <span className="absolute bottom-5 left-5 h-3.5 w-3.5 border-b border-l border-ink/20" aria-hidden />
      <span className="absolute bottom-5 right-5 h-3.5 w-3.5 border-b border-r border-ink/20" aria-hidden />

      <div className="relative mx-auto flex min-h-[92vh] max-w-content flex-col items-center justify-center px-5 py-24 text-center">
        {/* the arch, drawn on load, framing the headline */}
        <ArchDraw className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-auto -translate-x-1/2 -translate-y-[52%] text-ink/[0.28]" />

        <div className="relative">
          <p
            className="rise mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent"
            style={{ animationDelay: "300ms" }}
          >
            {t(content.hero.tag)}
          </p>
          <h1
            className="rise mx-auto max-w-[14ch] font-serif text-[clamp(2.6rem,7.5vw,4.25rem)] font-semibold leading-[1.08] tracking-tight text-ink"
            style={{ animationDelay: "450ms" }}
          >
            {t(content.hero.title)}
          </h1>
          <p
            className="rise mx-auto mt-7 max-w-md text-lg leading-relaxed text-body/80"
            style={{ animationDelay: "600ms" }}
          >
            {t(content.hero.subtitle)}
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "750ms" }}
          >
            <CtaButton className="!px-6 !py-3 !text-base" />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3.5 py-2 text-sm font-medium text-ink">
              <Gift size={15} className="text-accent" aria-hidden />
              {t(content.hero.trial)}
            </span>
          </div>
          <ul
            className="rise mt-9 flex flex-wrap justify-center gap-2.5"
            style={{ animationDelay: "900ms" }}
          >
            {content.hero.chips.map((chip, i) => (
              <li
                key={i}
                className="rounded-full border border-ink/15 bg-white/50 px-3.5 py-1.5 text-sm text-ink/80"
              >
                {t(chip)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
