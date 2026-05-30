"use client";

import { Gift } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";
import { ParallaxArch } from "@/components/ParallaxArch";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-cream">
      <ParallaxArch className="pointer-events-none absolute right-[-22%] top-[-8%] h-[34rem] w-[34rem] text-ink/[0.06] sm:right-[-8%] md:right-[3%]" />
      <div className="relative mx-auto max-w-content px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <p
          className="rise mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          style={{ animationDelay: "0ms" }}
        >
          {t(content.hero.tag)}
        </p>
        <h1
          className="rise max-w-[18ch] text-[clamp(2.4rem,7vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-ink"
          style={{ animationDelay: "80ms" }}
        >
          {t(content.hero.title)}
        </h1>
        <p
          className="rise mt-6 max-w-xl text-lg leading-relaxed text-body/80 sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {t(content.hero.subtitle)}
        </p>
        <div
          className="rise mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <CtaButton className="!px-6 !py-3 !text-base" />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3.5 py-2 text-sm font-medium text-ink">
            <Gift size={15} className="text-accent" aria-hidden />
            {t(content.hero.trial)}
          </span>
        </div>
        <ul
          className="rise mt-10 flex flex-wrap gap-2.5"
          style={{ animationDelay: "320ms" }}
        >
          {content.hero.chips.map((chip, i) => (
            <li
              key={i}
              className="rounded-full border border-ink/15 bg-white/60 px-3.5 py-1.5 text-sm text-ink/80"
            >
              {t(chip)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
