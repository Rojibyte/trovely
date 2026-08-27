import Container from "./Container";
import FadeIn from "./FadeIn";

export default function AboutHero() {
  return (
    <section className="border-b border-(--stone3)">
      <Container>
        <div className="flex">
          <div className="flex flex-col justify-center items-center text-center py-40 px-8 ml-auto w-full gap-10">
            <FadeIn delay={0}>
              <span className="subTitle">About Trovely</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading text-[64px]">
                A small catalog, kept with care.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-162.5">
                Trovely started as a personal list of objects worth keeping.
                It&apos;s grown slowly, one maker at a time, and stayed small on
                purpose.
              </p>
            </FadeIn>
          </div>
          <div className="bg-(--stone3)" />
        </div>
      </Container>
    </section>
  );
}
