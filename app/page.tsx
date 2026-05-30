import { LanguageProvider } from "@/lib/LanguageContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { Subjects } from "@/components/sections/Subjects";
import { KeyDates } from "@/components/sections/KeyDates";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Philosophy } from "@/components/sections/Philosophy";
import { Tutors } from "@/components/sections/Tutors";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <LanguageProvider>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <TopBar />
      </div>
      <main>
        <Hero />
        <CredibilityBar />
        <Subjects />
        <KeyDates />
        <HowItWorks />
        <Philosophy />
        <Tutors />
        <Faq />
        <FinalCta />
      </main>
    </LanguageProvider>
  );
}
