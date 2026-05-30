"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <Section
      id="how"
      eyebrow={t(content.enrol.title)}
      title={t(content.howItWorks.title)}
      intro={t(content.howItWorks.body)}
    >
      {/* enrolment steps */}
      <ol className="mt-2 space-y-4">
        {content.enrol.steps.map((step, i) => (
          <Reveal key={i} delay={i * 90}>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5 text-base leading-relaxed text-body/90">{t(step)}</span>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* pricing */}
      <Reveal delay={120}>
        <div className="mt-12">
          <h3 className="mb-3 text-lg font-bold text-ink">{t(content.pricing.title)}</h3>
          <ul className="divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/15 bg-white">
            {content.pricing.rows.map((row, i) => {
              const isBundle = i === content.pricing.rows.length - 1;
              return (
                <li
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 ${
                    isBundle ? "bg-ink/[0.04]" : ""
                  }`}
                >
                  <span className="text-body/90">{t(row.label)}</span>
                  <span className="font-bold text-ink">{row.price}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-body/70">{t(content.pricing.note)}</p>
        </div>
      </Reveal>
    </Section>
  );
}
