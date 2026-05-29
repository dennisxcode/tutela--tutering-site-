"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhoItsFor() {
  const { t } = useLanguage();
  return (
    <Section id="who-for" title={t(content.whoItsFor.title)} icon={<GraduationCap size={22} />}>
      <p className="text-base leading-relaxed text-body/90">{t(content.whoItsFor.body)}</p>
    </Section>
  );
}
