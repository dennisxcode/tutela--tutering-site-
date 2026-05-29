import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

// CJK fonts: do NOT pass `subsets` and set `preload: false`, otherwise
// next/font errors ("Missing selected font subset") at build.
const noto = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: content.meta.title.zh,
  description: content.meta.description.zh,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={noto.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
