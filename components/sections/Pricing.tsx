"use client";

import { Tag } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Pricing() {
  const { t } = useLanguage();
  return (
    <Section id="pricing" title={t(content.pricing.title)} icon={<Tag size={20} />} surface>
      <div className="overflow-hidden rounded-2xl border border-ink/12 shadow-sm">
        {content.pricing.rows.map((row, i) => {
          const isBundle = i === content.pricing.rows.length - 1;
          return (
            <div
              key={i}
              className={`flex items-center justify-between px-5 py-4 ${
                i !== 0 ? "border-t border-ink/10" : ""
              } ${isBundle ? "bg-accent/6" : ""}`}
            >
              <span className={`text-base ${isBundle ? "font-semibold text-body" : "text-body/85"}`}>
                {t(row.label)}
              </span>
              <span
                className={`text-lg font-bold tabular-nums ${
                  isBundle ? "text-accent" : "text-ink"
                }`}
              >
                {row.price}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-body/70">{t(content.pricing.note)}</p>
    </Section>
  );
}
