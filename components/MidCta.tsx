"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

// A second call-to-action mid-page, so a convinced parent doesn't have to
// scroll all the way to the footer.
export function MidCta() {
  const { t } = useLanguage();
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-5 py-10 text-center">
        <p className="text-base font-medium text-ink">{t(content.hero.trial)}</p>
        <CtaButton className="!px-6 !py-3 !text-base" />
      </div>
    </div>
  );
}
