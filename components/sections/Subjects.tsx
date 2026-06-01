"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

// The curriculum: each core subject with a one-line framing and a concrete list
// of what we actually cover in class — the "what WE teach" the page is built on.
export function Subjects({ num = "01" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="subjects"
      num={num}
      title={t(content.subjects.title)}
      intro={t(content.subjects.intro)}
    >
      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {content.subjects.list.map((s, i) => (
          <div key={i} className="py-7 sm:flex sm:gap-8">
            <div className="sm:w-40 sm:shrink-0">
              <h3 className="font-serif text-2xl font-semibold text-ink">{t(s.name)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body/65">{t(s.blurb)}</p>
            </div>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:mt-0 sm:flex-1 sm:grid-cols-2">
              {s.covers.map((c, j) => (
                <li key={j} className="flex items-start gap-2 text-[0.95rem] leading-relaxed text-body/80">
                  <Check size={15} className="mt-1 shrink-0 text-accent" aria-hidden />
                  {t(c)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-2 text-sm leading-relaxed text-body/70">
        <p>{t(content.subjects.grades)}</p>
        <p>{t(content.subjects.special)}</p>
      </div>
    </EditorialSection>
  );
}
