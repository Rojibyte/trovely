import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";

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
                <div className="h-80 bg-center bg-cover bg-[url('https://images.pexels.com/photos/30654318/pexels-photo-30654318.jpeg')]"></div>
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Ceramics
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <div className="h-80 bg-center bg-cover bg-[url('https://images.pexels.com/photos/30002543/pexels-photo-30002543.jpeg')]"></div>
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Textiles
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <div className="h-80 bg-center bg-cover bg-[url('https://images.pexels.com/photos/5425129/pexels-photo-5425129.jpeg')]"></div>
                <div className="flex justify-center items-center py-6 font-heading text-2xl border-t border-(--stone2)">
                  Home
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/shop">
              <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
                <div className="h-80 bg-center bg-cover bg-[url('https://images.pexels.com/photos/22610760/pexels-photo-22610760.jpeg')]"></div>
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
