"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";
import { Logo } from "@/components/Logo";

export function GuidesFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-16 text-center">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t(content.finalCta.heading)}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-body/70">{t(content.finalCta.subtitle)}</p>
        <div className="mt-6 flex justify-center">
          <CtaButton href="/#join" className="!px-6 !py-3 !text-base" />
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-ink">
          <Logo className="h-5 w-5" />
          <span className="font-display text-lg font-semibold italic leading-none">
            {t(content.meta.brand)}
          </span>
        </div>
        <p className="mt-3 text-xs text-body/50">{t(content.footer.copyright)}</p>
      </div>
    </footer>
  );
}
