"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { LanguageToggle } from "@/components/LanguageToggle";
import { CtaButton } from "@/components/CtaButton";

export function TopBar() {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3">
        <span className="font-bold text-ink">{t(content.meta.brand)}</span>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <CtaButton className="hidden sm:inline-block" />
        </div>
      </div>
    </header>
  );
}
