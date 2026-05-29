"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function CtaButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a
      href="#join"
      className={`inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 ${className}`}
    >
      {t(content.nav.join)}
    </a>
  );
}
