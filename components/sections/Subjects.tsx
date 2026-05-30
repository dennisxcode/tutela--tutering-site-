"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Subjects() {
  const { t } = useLanguage();
  return (
    <Section
      id="subjects"
      eyebrow={t(content.whatWeOffer.title)}
      title={t(content.subjects.title)}
      intro={t(content.subjects.intro)}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {content.subjects.list.map((s, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="text-lg font-bold text-ink">{t(s.name)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body/70">{t(s.blurb)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-6 space-y-2 text-sm leading-relaxed text-body/70">
          <p>{t(content.subjects.grades)}</p>
          <p>{t(content.subjects.special)}</p>
        </div>
      </Reveal>
    </Section>
  );
}
