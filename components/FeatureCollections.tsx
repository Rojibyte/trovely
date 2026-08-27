import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";
import CeramicsImg from "@/public/ceramics-img.jpg";
import TextilesImg from "@/public/textiles-img.jpg";
import HomeImg from "@/public/home-img.jpg";
import GardenImg from "@/public/garden-img.jpg";

export default function FeatureCollections() {
  return (
    <Container>
      <section className="py-20">
        <FadeIn>
          <h2 className="heading text-[48px] text-center mb-8">
            Featured Collections
          </h2>
        </FadeIn>
        <div className="grid grid-cols-4 gap-7.5">
          <FadeIn delay={0}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <Image
                  alt="ceramic collection"
                  src={CeramicsImg}
                  className="h-80 object-cover"
                />
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Ceramics
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <Image
                  alt="textiles collection"
                  src={TextilesImg}
                  className="h-80 object-cover"
                />
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Textiles
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <Image
                  alt="home collection"
                  src={HomeImg}
                  className="h-80 object-cover"
                />
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Home
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <Image
                  alt="garden collection"
                  src={GardenImg}
                  className="h-80 object-cover"
                />
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Garden
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Container>
  );
}
