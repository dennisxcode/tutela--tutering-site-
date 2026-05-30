"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content, type Bi } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";
import { Logo } from "@/components/Logo";

const tutors: { label: Bi; line: Bi }[] = [
  { label: { zh: "数学", en: "Math" }, line: content.tutors.math },
  { label: { zh: "英语", en: "English" }, line: content.tutors.english },
  { label: { zh: "法语", en: "French" }, line: content.tutors.french },
];

export function Tutors() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="tutors"
      num="05"
      title={t(content.tutors.title)}
      intro={t(content.subjects.special)}
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {tutors.map((tt, i) => (
          <li key={i} className="flex items-start gap-4 py-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink">
              <Logo className="h-5 w-5 text-cream" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">{t(tt.label)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body/75">{t(tt.line)}</p>
            </div>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
}
