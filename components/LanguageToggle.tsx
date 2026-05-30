"use client";

import { useLanguage } from "@/lib/LanguageContext";

// The active indicator slides between the two options — the motion *is* the
// message: you moved from one language to the other.
export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  return (
    <div
      className="relative inline-flex rounded-full border border-ink/30 p-0.5"
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden
        className={`absolute inset-y-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-out ${
          locale === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <button
        onClick={() => setLocale("zh")}
        aria-pressed={locale === "zh"}
        className={`relative z-10 w-14 py-1 text-center text-sm font-semibold transition-colors ${
          locale === "zh" ? "text-white" : "text-ink"
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`relative z-10 w-14 py-1 text-center text-sm font-semibold transition-colors ${
          locale === "en" ? "text-white" : "text-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
