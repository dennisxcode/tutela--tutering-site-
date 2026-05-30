"use client";

import { ListChecks } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "@/components/Section";

export function EnrolSteps() {
  const { t } = useLanguage();
  return (
    <Section
      id="enrol"
      title={t(content.enrol.title)}
      icon={<ListChecks size={20} />}
      surface
    >
      <ol className="space-y-4">
        {content.enrol.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-sm">
              {i + 1}
            </span>
            <span className="pt-1 text-base leading-relaxed text-body/90">{t(step)}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
