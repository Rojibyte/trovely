import BrowseCollection from "@/components/BrowseCollection";
import DurabilityPhilosophy from "@/components/DurabilityPhilosophy";
import Founder from "@/components/Founder";
import AboutHero from "@/components/AboutHero";
import SourcingPhilosophy from "@/components/SourcingPhilosophy";

export default function About() {
  return (
    <>
      <AboutHero />
      <SourcingPhilosophy />
      <DurabilityPhilosophy />
      <Founder />
      <BrowseCollection />
    </>
  );
}
