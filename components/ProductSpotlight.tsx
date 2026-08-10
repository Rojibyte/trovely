import Link from "next/link";
import FadeIn from "./FadeIn";

export default function ProductSpotlight() {
  return (
    <section className="border-y border-(--stone3)">
      <div className="grid grid-cols-2">
        <div className="bg-bottom-left bg-cover bg-[url('https://images.pexels.com/photos/6962809/pexels-photo-6962809.jpeg')]" />
        <div className="flex flex-col justify-center items-end py-20 pl-16.25 mr-auto max-w-180 gap-9">
          <FadeIn delay={0}>
            <span className="subTitle text-right">Catalog favourite</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading text-[48px] text-right">
              Stoneware pitcher, hand-thrown
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-right">
              Our most kept piece for two seasons running. Thrown in small
              batches from a single stoneware body, each pitcher carries the
              maker&apos;s thumbprint at the base.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/shop" className="primaryButton">
              View this piece
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
