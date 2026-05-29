"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

// Always-visible action bar on mobile so a convinced parent can reach out from
// anywhere on the page. Hidden on larger screens, where the top-bar CTA stays
// in view.
export function StickyCta() {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-3">
        <span className="text-sm font-medium text-accent">{t(content.hero.trial)}</span>
        <CtaButton />
      </div>
    </div>
  );
}
