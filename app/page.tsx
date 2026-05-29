import { LanguageProvider } from "@/lib/LanguageContext";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyUs } from "@/components/sections/WhyUs";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { Tutors } from "@/components/sections/Tutors";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { MidCta } from "@/components/MidCta";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { InfoSession } from "@/components/sections/InfoSession";
import { Faq } from "@/components/sections/Faq";
import { FooterCta } from "@/components/sections/FooterCta";

export default function Page() {
  return (
    <LanguageProvider>
      <TopBar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhyUs />
        <WhatWeOffer />
        <Tutors />
        <HowItWorks />
        <Pricing />
        <MidCta />
        <WhoItsFor />
        <InfoSession />
        <Faq />
        <FooterCta />
      </main>
    </LanguageProvider>
  );
}
