"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

export function MidCta() {
  const { t } = useLanguage();
  return (
    <div className="bg-ink">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-5 py-12 text-center">
        <p className="text-base font-medium text-white/80">{t(content.hero.trial)}</p>
        <CtaButton className="!bg-accent !px-7 !py-3.5 !text-base" />
      </div>
    </div>
  );
}
