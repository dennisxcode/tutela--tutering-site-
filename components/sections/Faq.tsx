"use client";

import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Faq() {
  const { t, locale } = useLanguage();
  const title = locale === "zh" ? "常见问题" : "FAQ";
  return (
    <Section id="faq" title={title} icon={<HelpCircle size={22} />}>
      <dl className="space-y-5">
        {content.faq.map((item, i) => (
          <div key={i}>
            <dt className="font-semibold text-ink">{t(item.q)}</dt>
            <dd className="mt-1 text-base leading-relaxed text-body/80">{t(item.a)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
