"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function KeyDates() {
  const { t } = useLanguage();
  return (
    <Section id="dates" surface center title={t(content.dates.title)}>
      <div className="grid gap-4 sm:grid-cols-2">
        {content.dates.items.map((d, i) => (
          <Reveal key={i} delay={i * 110}>
            <div className="h-full rounded-2xl border border-ink/10 border-t-2 border-t-accent bg-cream/50 p-6 text-left">
              <p className="text-2xl font-bold text-ink">{t(d.date)}</p>
              <p className="mt-1 font-semibold text-ink/90">{t(d.label)}</p>
              <p className="mt-2 text-sm leading-relaxed text-body/70">{t(d.note)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
