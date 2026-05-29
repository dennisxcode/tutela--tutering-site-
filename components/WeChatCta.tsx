"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function WeChatCta() {
  const { t } = useLanguage();
  // Note: WeChatCta is used inside the dark FooterCta; text colors are white for contrast.
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src="/wechat-qr.png"
        alt={t(content.footer.cta)}
        width={200}
        height={272}
        className="rounded-lg border border-ink/15 bg-white p-2"
      />
      <p className="font-semibold text-white">{t(content.footer.cta)}</p>
      <p className="max-w-xs text-sm text-white/70">{t(content.footer.scanHint)}</p>
      <p className="text-sm text-white/70">
        {t(content.footer.contactLabel)}: {content.footer.contactName}
      </p>
    </div>
  );
}
