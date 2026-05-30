"use client";

import { Tag } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Pricing() {
  const { t } = useLanguage();
  return (
    <Section id="pricing" title={t(content.pricing.title)} icon={<Tag size={22} />} surface>
      <ul className="divide-y divide-ink/10 overflow-hidden rounded-xl border border-ink/15">
        {content.pricing.rows.map((row, i) => {
          const isBundle = i === content.pricing.rows.length - 1;
          return (
            <li
              key={i}
              className={`flex items-center justify-between px-4 py-3 ${isBundle ? "bg-ink/[0.04]" : ""}`}
            >
              <span className="text-body/90">{t(row.label)}</span>
              <span className="font-bold text-ink">{row.price}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-body/80">{t(content.pricing.note)}</p>
    </Section>
  );
}
