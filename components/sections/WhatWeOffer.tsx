"use client";

import { BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhatWeOffer() {
  const { t } = useLanguage();
  return (
    <Section id="offer" title={t(content.whatWeOffer.title)} icon={<BookOpen size={22} />}>
      <p className="text-base leading-relaxed text-body/90">{t(content.whatWeOffer.body)}</p>
      <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-body/90">
        {t(content.whatWeOffer.mockExams)}
      </p>
    </Section>
  );
}
