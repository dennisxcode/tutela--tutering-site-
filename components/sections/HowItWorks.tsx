"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="how"
      num="03"
      title={t(content.howItWorks.title)}
      intro={t(content.howItWorks.body)}
      surface
    >
      <ol className="space-y-5">
        {content.enrol.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="font-display text-lg italic text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5 text-base leading-relaxed text-body/90">{t(step)}</span>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="mb-4 font-serif text-xl font-semibold text-ink">
          {t(content.pricing.title)}
        </h3>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {content.pricing.rows.map((row, i) => {
            const isBundle = i === content.pricing.rows.length - 1;
            return (
              <li key={i} className="flex items-center justify-between py-4">
                <span className={`text-body/90 ${isBundle ? "font-semibold text-ink" : ""}`}>
                  {t(row.label)}
                </span>
                <span className="font-serif text-xl font-semibold text-ink">{row.price}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-body/70">{t(content.pricing.note)}</p>
      </div>
    </EditorialSection>
  );
}
