"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

export function WhoItsFor({ num = "03" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection id="who" num={num} title={t(content.whoItsFor.title)} surface>
      <p className="max-w-xl text-base leading-relaxed text-body/85">
        {t(content.whoItsFor.body)}
      </p>
    </EditorialSection>
  );
}
