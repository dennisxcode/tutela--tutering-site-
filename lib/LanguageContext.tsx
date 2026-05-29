"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Bi } from "@/lib/content";

export type Locale = "zh" | "en";

type LanguageValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: (b: Bi) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "zh" || stored === "en") setLocale(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const value: LanguageValue = {
    locale,
    setLocale,
    toggle: () => setLocale((l) => (l === "zh" ? "en" : "zh")),
    t: (b: Bi) => b[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
