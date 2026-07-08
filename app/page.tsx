import ProductSpotlight from "@/components/ProductSpotlight";
import FeatureCollections from "@/components/FeatureCollections";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCollections />
      <ProductSpotlight />
      <TrustRow />
      <Testimonial />
    </>
  );
}
