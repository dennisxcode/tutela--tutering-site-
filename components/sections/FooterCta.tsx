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
        <div className="mt-10 flex items-center justify-center gap-2 text-white">
          <Logo className="h-6 w-6" />
          <span className="font-display text-xl font-semibold italic leading-none">
            {t(content.meta.brand)}
          </span>
        </div>
      </div>
    </footer>
  );
}
