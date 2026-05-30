"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

// Section 01 — our advantages, as proper editorial entries (serif label + a line
// of explanation each), with the key numbers up top. Replaces the old hero pills.
export function Advantages() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="advantages"
      num="01"
      title={t(content.advantages.title)}
      intro={t(content.advantages.intro)}
      surface
    >
      <dl className="mb-12 grid grid-cols-3 divide-x divide-ink/10">
        {content.stats.map((s, i) => (
          <div key={i} className="px-2 text-center first:pl-0 last:pr-0">
            <dt className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
              {t(s.value)}
            </dt>
            <dd className="mt-2 text-xs text-body/60">{t(s.label)}</dd>
          </div>
        ))}
      </dl>
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.advantages.items.map((it, i) => (
          <li key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-6">
            <h3 className="font-serif text-lg font-semibold text-ink sm:w-44 sm:shrink-0">
              {t(it.title)}
            </h3>
            <p className="text-base leading-relaxed text-body/75">{t(it.body)}</p>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
}
