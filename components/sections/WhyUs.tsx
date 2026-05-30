"use client";

import { ShieldCheck, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhyUs() {
  const { t } = useLanguage();
  return (
    <Section id="why-us" title={t(content.whyUs.title)} icon={<ShieldCheck size={20} />}>
      <dl className="mb-8 grid grid-cols-3 gap-3">
        {content.stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl bg-ink/[0.05] px-2 py-5 text-center shadow-sm"
          >
            <dt className="text-3xl font-bold tracking-tight text-ink">{t(s.value)}</dt>
            <dd className="mt-1.5 text-xs leading-snug text-body/60">{t(s.label)}</dd>
          </div>
        ))}
      </dl>
      <ul className="space-y-3.5">
        {content.whyUs.points.map((p, i) => (
          <li key={i} className="flex gap-3 text-base leading-relaxed text-body/90">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
              <Check size={12} className="text-accent" aria-hidden />
            </span>
            {t(p)}
          </li>
        ))}
      </ul>
    </Section>
  );
}
