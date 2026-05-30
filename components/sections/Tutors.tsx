"use client";

import { Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function Tutors() {
  const { t } = useLanguage();
  const lines = [content.tutors.math, content.tutors.english, content.tutors.french];
  return (
    <Section id="tutors" title={t(content.tutors.title)} icon={<Award size={20} />} surface>
      <ul className="space-y-3">
        {lines.map((line, i) => (
          <li
            key={i}
            className="rounded-xl border-l-4 border-accent bg-ink/[0.03] px-5 py-4 text-base leading-relaxed text-body/90"
          >
            {t(line)}
          </li>
        ))}
      </ul>
    </Section>
  );
}
