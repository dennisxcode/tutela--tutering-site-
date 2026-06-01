import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { ArchDivider } from "@/components/ArchDivider";
import { KeyDates } from "@/components/sections/KeyDates";

// Lean, persuasive landing. Depth (the full curriculum, schedule, pricing,
// tutors, FAQ) lives on /program; general prep info lives on /guides. Chrome
// (nav + WeChat footer) is provided by the root layout.
export default function Page() {
  return (
    <>
      <Hero />
      <Advantages num="01" />
      <HomeOverview num="02" />
      <ArchDivider className="py-4" />
      <KeyDates num="03" />
    </>
  );
}
