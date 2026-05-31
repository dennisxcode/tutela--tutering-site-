"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { LanguageToggle } from "@/components/LanguageToggle";
import { CtaButton } from "@/components/CtaButton";

export function GuidesHeader() {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <Logo className="h-7 w-7" />
          <span className="font-display text-2xl font-semibold italic leading-none">
            {t(content.meta.brand)}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <CtaButton href="/#join" className="hidden sm:inline-block" />
        </div>
      </div>
    </header>
  );
}
