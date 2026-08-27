import Image from "next/image";
import FadeIn from "./FadeIn";
import SourcingBanner from "@/public/sourcing-img.jpg";

export default function SourcingPhilosophy() {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-2">
          <Image
            alt="SourcingPhilosophy Banner"
            src={SourcingBanner}
            style={{ width: "100%", height: "800px" }}
          />
          <div className="flex flex-col justify-center items-start pl-20 mr-auto max-w-180 gap-9">
            <FadeIn delay={0}>
              <span className="subTitle text-left">Where it starts</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading text-[48px] text-left">
                Sourced, not sourced-out
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-left">
                Every object begins with a maker, not a catalog request. We
                visit, ask questions, and only list what we&apos;d keep
                ourselves.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
