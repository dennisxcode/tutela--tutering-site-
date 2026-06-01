"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { SegmentedArch } from "@/components/SegmentedArch";

// A short, warm "who we are" statement — the home page's own editorial moment,
// set large in serif like an opening note in a prospectus. Distinct from the
// numbered sections and from the /program teasers below it.
export function WhoWeAre() {
  const { t } = useLanguage();
  return (
    <section id="about" className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-28">
        <SegmentedArch strokeWidth={1.8} className="mb-6 h-9 w-8 text-ink/35" />
        <p className="mb-5 font-display text-lg italic text-accent">{t(content.whoWeAre.title)}</p>
        <p className="font-serif text-[1.6rem] leading-[1.6] tracking-tight text-ink sm:text-[2rem] sm:leading-[1.55]">
          {t(content.whoWeAre.body)}
        </p>
      </div>
    </section>
  );
}
