"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content, type Bi } from "@/lib/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";

const tutors: { label: Bi; line: Bi }[] = [
  { label: { zh: "数学", en: "Math" }, line: content.tutors.math },
  { label: { zh: "英语", en: "English" }, line: content.tutors.english },
  { label: { zh: "法语", en: "French" }, line: content.tutors.french },
];

export function Tutors() {
  const { t } = useLanguage();
  return (
    <Section
      id="tutors"
      title={t(content.tutors.title)}
      intro={t(content.subjects.special)}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {tutors.map((tt, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink">
                <Logo className="h-6 w-6 text-cream" />
              </span>
              <h3 className="text-lg font-bold text-ink">{t(tt.label)}</h3>
              <p className="text-sm leading-relaxed text-body/75">{t(tt.line)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
