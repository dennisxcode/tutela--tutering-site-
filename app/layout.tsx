import type { Metadata } from "next";
import { Noto_Sans_SC, Fraunces } from "next/font/google";
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

// Display serif used only for the "Tutela" wordmark — gives the brand
// some character. Latin-only, so a subset is fine here.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: content.meta.title.zh,
  description: content.meta.description.zh,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${noto.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
