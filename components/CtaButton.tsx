"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function CtaButton({
  className = "",
  href = "#join",
}: {
  className?: string;
  href?: string;
}) {
  const { t } = useLanguage();
  return (
    <a
      href={href}
      className={`inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 ${className}`}
    >
      {t(content.nav.contact)}
    </a>
  );
}
