"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

export function Subjects() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="subjects"
      num="02"
      title={t(content.subjects.title)}
      intro={t(content.subjects.intro)}
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.subjects.list.map((s, i) => (
          <li
            key={i}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="font-serif text-xl font-semibold text-ink sm:w-24 sm:shrink-0">
              {t(s.name)}
            </span>
            <span className="text-base leading-relaxed text-body/75">{t(s.blurb)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-2 text-sm leading-relaxed text-body/70">
        <p>{t(content.subjects.grades)}</p>
        <p>{t(content.subjects.special)}</p>
      </div>
    </EditorialSection>
  );
}
