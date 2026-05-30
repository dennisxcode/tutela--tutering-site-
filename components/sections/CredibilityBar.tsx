"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

export function CredibilityBar() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="credibility"
      num="01"
      title={t(content.credibility.title)}
      intro={t(content.credibility.intro)}
      surface
    >
      <dl className="grid grid-cols-3 divide-x divide-ink/10">
        {content.stats.map((s, i) => (
          <div key={i} className="px-2 text-center first:pl-0 last:pr-0">
            <dt className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
              {t(s.value)}
            </dt>
            <dd className="mt-2 text-xs text-body/60">{t(s.label)}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        {content.credibility.items.map((it, i) => (
          <li key={i} className="flex gap-4 py-4 text-base leading-relaxed text-body/85">
            <span className="font-display text-sm italic text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            {t(it)}
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
}
