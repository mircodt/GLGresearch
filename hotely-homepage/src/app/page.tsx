import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Differentiators } from "@/components/sections/differentiators";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Omnichannel } from "@/components/sections/omnichannel";
import { Solutions } from "@/components/sections/solutions";
import { Setup } from "@/components/sections/setup";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Differentiators />
      <ProblemSolution />
      <Omnichannel />
      <Solutions />
      <Setup />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
