import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProgramHero } from "@/components/sections/ProgramHero";
import { Subjects } from "@/components/sections/Subjects";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Tutors } from "@/components/sections/Tutors";
import { Manifesto } from "@/components/sections/Manifesto";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: `${content.program.title.zh} · 课程 | Tutela`,
  description: content.program.intro.zh,
  alternates: { canonical: "/program" },
  openGraph: {
    title: `${content.program.title.zh} | Tutela`,
    description: content.program.intro.zh,
    url: "/program",
    type: "website",
  },
};

// The deep page: what we teach in each class, how classes run, pricing, who it's
// for, the tutors, why students improve, and the FAQ.
export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <Subjects num="01" />
      <HowItWorks num="02" />
      <WhoItsFor num="03" />
      <Tutors num="04" />
      <Manifesto num="05" />
      <Faq num="06" />
    </>
  );
}
