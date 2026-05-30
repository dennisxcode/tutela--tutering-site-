"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Philosophy() {
  const { t } = useLanguage();
  return (
    <Section
      id="philosophy"
      surface
      title={t(content.philosophy.title)}
      intro={t(content.philosophy.intro)}
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {content.philosophy.principles.map((p, i) => (
          <Reveal key={i} delay={i * 110}>
            <div className="h-full">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ink/5 font-display text-xl font-semibold italic text-ink">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-ink">{t(p.title)}</h3>
              <p className="mt-2 text-base leading-relaxed text-body/70">{t(p.body)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
