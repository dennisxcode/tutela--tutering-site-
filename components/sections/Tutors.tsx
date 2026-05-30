"use client";

import { Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Tutors() {
  const { t } = useLanguage();
  const lines = [content.tutors.math, content.tutors.english, content.tutors.french];
  return (
    <Section id="tutors" title={t(content.tutors.title)} icon={<Award size={22} />} surface>
      <ul className="space-y-3">
        {lines.map((line, i) => (
          <li key={i} className="flex gap-2 text-base leading-relaxed text-body/90">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink/40" aria-hidden />
            {t(line)}
          </li>
        ))}
      </ul>
    </Section>
  );
}
