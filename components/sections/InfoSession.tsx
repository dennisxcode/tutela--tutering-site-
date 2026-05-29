"use client";

import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function InfoSession() {
  const { t } = useLanguage();
  return (
    <Section id="session" title={t(content.infoSession.title)} icon={<CalendarDays size={22} />} surface>
      <p className="text-base leading-relaxed text-body/90">{t(content.infoSession.body)}</p>
    </Section>
  );
}
