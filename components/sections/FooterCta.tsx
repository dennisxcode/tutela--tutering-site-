"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { WeChatCta } from "@/components/WeChatCta";
import { Logo } from "@/components/Logo";

export function FooterCta() {
  const { t } = useLanguage();
  return (
    <footer id="join" className="bg-ink text-white">
      <div className="mx-auto max-w-content px-5 py-16">
        <div className="rounded-3xl bg-white/[0.07] p-8 shadow-inner ring-1 ring-white/10">
          <WeChatCta />
          <p className="mt-5 text-center text-sm text-white/60">{t(content.footer.note)}</p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <span className="flex items-center gap-2 text-white">
            <Logo className="h-6 w-6" />
            <span className="font-display text-xl font-semibold italic leading-none tracking-tight">
              {t(content.meta.brand)}
            </span>
          </span>
          <p className="max-w-xs text-xs leading-relaxed text-white/45">
            {t(content.footer.privacy)}
          </p>
        </div>
      </div>
      <div className="border-t border-white/[0.08]">
        <p className="mx-auto max-w-content px-5 py-5 text-center text-xs text-white/35">
          {t(content.footer.copyright)}
        </p>
      </div>
    </footer>
  );
}
