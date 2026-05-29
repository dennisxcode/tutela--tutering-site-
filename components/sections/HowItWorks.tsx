"use client";

import { CalendarClock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <Section id="how" title={t(content.howItWorks.title)} icon={<CalendarClock size={22} />}>
      <p className="text-base leading-relaxed text-body/90">{t(content.howItWorks.body)}</p>
    </Section>
  );
}
