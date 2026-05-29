"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function WeChatCta() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* unoptimized: Next's image optimizer rejects SVG; remove this when a raster QR replaces the placeholder */}
      <Image
        src="/wechat-qr-placeholder.svg"
        alt={t(content.footer.cta)}
        width={180}
        height={180}
        unoptimized
        className="rounded-lg border border-ink/15 bg-white p-2"
      />
      <p className="font-semibold text-ink">{t(content.footer.cta)}</p>
      <p className="text-sm text-body/70">
        {t(content.footer.wechatIdLabel)}: {t(content.footer.wechatId)}
      </p>
    </div>
  );
}
