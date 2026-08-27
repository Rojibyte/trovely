import Image from "next/image";
import FadeIn from "./FadeIn";
import DurabilityBanner from "@/public/durability-img.jpg";

export default function DurabilityPhilosophy() {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center pr-20 ml-auto max-w-180 gap-9">
            <FadeIn delay={0}>
              <span className="subTitle">How it&apos;s kept</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading text-[48px]">
                Made to outlast the season
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Every listing includes what it&apos;s made of and how to care
                for it, so it stays in use, not in a drawer.
              </p>
            </FadeIn>
          </div>
          <Image
            alt="Durability Banner"
            src={DurabilityBanner}
            style={{ width: "100%", height: "800px" }}
          />
        </div>
      </section>
    </>
  );
}
