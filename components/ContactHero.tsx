import Container from "./Container";
import FadeIn from "./FadeIn";

export default function ContactHero() {
  return (
    <Container>
      <div className="flex">
        <div className="flex flex-col justify-center items-center text-center py-[120px] px-8 ml-auto w-full gap-10">
          <FadeIn delay={0}>
            <span className="subTitle">Get in touch</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading text-[64px]">
              Questions before you keep something
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[650px]">
              We read every message ourselves, usually a reply within 2 business
              days.
            </p>
          </FadeIn>
        </div>
        <div className="bg-(--stone3)" />
      </div>
    </Container>
  );
}
