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
      icon={<ListChecks size={22} />}
      surface
    >
      <ol className="space-y-4">
        {content.enrol.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-0.5 text-base leading-relaxed text-body/90">{t(step)}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
