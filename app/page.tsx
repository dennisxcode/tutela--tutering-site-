import { LanguageProvider } from "@/lib/LanguageContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { Subjects } from "@/components/sections/Subjects";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Manifesto } from "@/components/sections/Manifesto";
import { Tutors } from "@/components/sections/Tutors";
import { KeyDates } from "@/components/sections/KeyDates";
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
        <Advantages />
        <Subjects />
        <HowItWorks />
        <Manifesto />
        <Tutors />
        <KeyDates />
        <Faq />
        <FinalCta />
      </main>
    </LanguageProvider>
  );
}
