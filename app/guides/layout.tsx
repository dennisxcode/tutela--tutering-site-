import { LanguageProvider } from "@/lib/LanguageContext";
import { GuidesHeader } from "@/components/guides/GuidesHeader";
import { GuidesFooter } from "@/components/guides/GuidesFooter";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <GuidesHeader />
      <main className="bg-cream">{children}</main>
      <GuidesFooter />
    </LanguageProvider>
  );
}
