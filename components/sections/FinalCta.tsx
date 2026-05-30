"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { WeChatCta } from "@/components/WeChatCta";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  const { t } = useLanguage();
  return (
    <footer id="join" className="bg-ink text-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {t(content.finalCta.heading)}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">{t(content.finalCta.subtitle)}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-sm rounded-2xl bg-white/5 p-8">
            <WeChatCta />
            <p className="mt-4 text-center text-sm text-white/70">{t(content.footer.note)}</p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <span className="flex items-center gap-2 text-white">
              <Logo className="h-6 w-6" />
              <span className="font-display text-xl font-semibold italic leading-none">
                {t(content.meta.brand)}
              </span>
            </span>
            <p className="max-w-xs text-xs leading-relaxed text-white/50">
              {t(content.footer.privacy)}
            </p>
          </div>
        </Reveal>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-5 py-5 text-center text-xs text-white/40">
          {t(content.footer.copyright)}
        </p>
      </div>
    </footer>
  );
}
