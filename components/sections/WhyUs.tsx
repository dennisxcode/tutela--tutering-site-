"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhyUs() {
  const { t } = useLanguage();
  return (
    <Section id="why-us" title={t(content.whyUs.title)}>
      <dl className="mb-8 grid grid-cols-3 divide-x divide-ink/10">
        {content.stats.map((s, i) => (
          <div key={i} className="px-2 text-center">
            <dt className="text-3xl font-bold text-ink">{t(s.value)}</dt>
            <dd className="mt-1.5 text-xs text-body/60">{t(s.label)}</dd>
          </div>
        ))}
      </dl>
      <ul className="space-y-3">
        {content.whyUs.points.map((p, i) => (
          <li key={i} className="flex gap-2.5 text-base leading-relaxed text-body/90">
            <Check size={20} className="mt-0.5 shrink-0 text-ink" aria-hidden />
            {t(p)}
          </li>
        ))}
      </ul>
    </Section>
  );
}
