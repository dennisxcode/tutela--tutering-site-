"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { WeChatCta } from "@/components/WeChatCta";
import { Logo } from "@/components/Logo";

export function FooterCta() {
  const { t } = useLanguage();
  return (
    <footer id="join" className="bg-ink text-white">
      <div className="mx-auto max-w-content px-5 py-14">
        <div className="rounded-2xl bg-white/5 p-8">
          <WeChatCta />
          <p className="mt-4 text-center text-sm text-white/70">{t(content.footer.note)}</p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
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
        <p className="mx-auto max-w-content px-5 pt-5 pb-24 text-center text-xs text-white/40 sm:pb-5">
          {t(content.footer.copyright)}
        </p>
      </div>
    </footer>
  );
}
