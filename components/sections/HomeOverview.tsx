"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

// Home-page overview of what we offer, with the three subjects as a teaser and a
// clear route into the full /program page (where the real "what we cover" lives).
export function HomeOverview({ num = "02" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="offer"
      num={num}
      title={t(content.whatWeOffer.title)}
      intro={t(content.whatWeOffer.body)}
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.subjects.list.map((s, i) => (
          <li key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="font-serif text-xl font-semibold text-ink sm:w-24 sm:shrink-0">
              {t(s.name)}
            </span>
            <span className="text-base leading-relaxed text-body/75">{t(s.blurb)}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/program"
        className="group mt-8 inline-flex items-center gap-2 font-serif text-lg font-semibold text-ink transition hover:text-accent"
      >
        {t(content.ui.viewProgram)}
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    </EditorialSection>
  );
}
