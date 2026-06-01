"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

// Slim, always-visible ribbon carrying the two time-sensitive dates. Links down
// to the dedicated dates block.
export function AnnouncementBar() {
  const { t } = useLanguage();
  return (
    <div className="bg-ink text-cream">
      <a
        href="/#dates"
        className="mx-auto flex max-w-content items-center justify-center gap-2 px-5 py-2 text-center text-[13px] font-medium tracking-wide transition hover:opacity-90"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
        {t(content.announcement)}
      </a>
    </div>
  );
}
