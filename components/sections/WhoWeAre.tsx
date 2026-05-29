"use client";

import { Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function WhoWeAre() {
  const { t } = useLanguage();
  return (
    <Section id="who" title={t(content.whoWeAre.title)} icon={<Users size={22} />} surface>
      <p className="text-base leading-relaxed text-body/90">{t(content.whoWeAre.body)}</p>
    </Section>
  );
}
