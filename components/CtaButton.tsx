"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function CtaButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a
      href="#join"
      className={`inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:opacity-90 active:scale-[0.98] ${className}`}
    >
      {t(content.nav.contact)}
    </a>
  );
}
