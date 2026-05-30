"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { WeChatCta } from "@/components/WeChatCta";
import { Logo } from "@/components/Logo";
import { Arch } from "@/components/Arch";

export function FinalCta() {
  const { t } = useLanguage();
  return (
    <footer id="join" className="grain relative overflow-hidden bg-ink text-white">
      <div className="relative z-10 mx-auto max-w-content px-5 py-24 text-center sm:py-32">
        <Arch strokeWidth={2.5} className="mx-auto mb-8 h-16 w-auto text-white/40" />
        <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-[2.5rem]">
          {t(content.finalCta.heading)}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-white/70">{t(content.finalCta.subtitle)}</p>

        <div className="mx-auto mt-12 max-w-sm rounded-2xl bg-white/5 p-8">
          <WeChatCta />
          <p className="mt-4 text-center text-sm text-white/70">{t(content.footer.note)}</p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
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
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-5 py-5 text-center text-xs text-white/40">
          {t(content.footer.copyright)}
        </p>
      </div>
    </footer>
  );
}
