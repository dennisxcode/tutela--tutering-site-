"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

export function KeyDates({ num = "03" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection id="dates" num={num} title={t(content.dates.title)} surface>
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.dates.items.map((d, i) => (
          <li key={i} className="grid gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <span className="font-serif text-2xl font-semibold text-accent">{t(d.date)}</span>
            <div>
              <p className="font-semibold text-ink">{t(d.label)}</p>
              <p className="mt-1 text-sm leading-relaxed text-body/70">{t(d.note)}</p>
            </div>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
}
