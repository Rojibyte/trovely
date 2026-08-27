import Link from "next/link";
import FadeIn from "./FadeIn";
import Image from "next/image";
import HeroBanner from "@/public/hero-banner.jpg";

export default function Hero() {
  return (
    <section className="border-b border-(--stone3)">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center py-20 pl-16.25 pr-8 ml-auto max-w-180 gap-9">
          <FadeIn delay={0}>
            <span className="subTitle">New arrivals — spring catalog</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading text-[64px]">Good things, well kept.</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              A small, considered catalog of objects for the home, they are
              sourced, catalogued, and kept as they were meant to be.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/shop" className="primaryButton">
              Browse the collection
            </Link>
          </FadeIn>
        </div>
        <Image
          alt="artistic-aerial-view-of-unfinished-ceramic-pottery"
          src={HeroBanner}
          priority
        />
      </div>
    </section>
  );
}
