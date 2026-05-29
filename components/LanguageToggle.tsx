"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const base = "px-3 py-1 text-sm font-semibold transition";
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-ink/30" role="group" aria-label="Language">
      <button
        onClick={() => setLocale("zh")}
        aria-pressed={locale === "zh"}
        className={`${base} ${locale === "zh" ? "bg-ink text-white" : "bg-white text-ink"}`}
      >
        中文
      </button>
      <button
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`${base} ${locale === "en" ? "bg-ink text-white" : "bg-white text-ink"}`}
      >
        EN
      </button>
    </div>
  );
}
