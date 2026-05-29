"use client";

import { ShieldCheck, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhyUs() {
  const { t } = useLanguage();
  return (
    <Section id="why-us" title={t(content.whyUs.title)} icon={<ShieldCheck size={22} />}>
      <dl className="mb-7 grid grid-cols-3 gap-3">
        {content.stats.map((s, i) => (
          <div
            key={i}
            className="rounded-xl border border-ink/10 bg-white px-2 py-4 text-center"
          >
            <dt className="text-2xl font-bold text-ink">{t(s.value)}</dt>
            <dd className="mt-1 text-xs text-body/70">{t(s.label)}</dd>
          </div>
        ))}
      </dl>
      <ul className="space-y-3">
        {content.whyUs.points.map((p, i) => (
          <li key={i} className="flex gap-2.5 text-base leading-relaxed text-body/90">
            <Check size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            {t(p)}
          </li>
        ))}
      </ul>
    </Section>
  );
}
