"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { LanguageToggle } from "@/components/LanguageToggle";
import { CtaButton } from "@/components/CtaButton";
import { Logo } from "@/components/Logo";

export function TopBar() {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 shadow-[0_1px_0_0_rgba(31,71,51,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5">
        <span className="flex items-center gap-2 text-ink">
          <Logo className="h-7 w-7" />
          <span className="font-display text-2xl font-semibold italic leading-none tracking-tight">
            {t(content.meta.brand)}
          </span>
        </span>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <CtaButton className="hidden sm:inline-block" />
        </div>
      </div>
    </header>
  );
}
