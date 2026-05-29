"use client";

import { Gift } from "lucide-react";
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
      <div className="flex flex-wrap items-center gap-3">
        <CtaButton className="!px-6 !py-3 !text-base" />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
          <Gift size={15} aria-hidden />
          {t(content.hero.trial)}
        </span>
      </div>
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
