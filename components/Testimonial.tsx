import Container from "./Container";
import NewsletterSignup from "./NewsletterSignUp";
import FadeIn from "./FadeIn";

export default function Testimonial() {
  return (
    <section className="py-20 bg-(--stone4)">
      <Container>
        <div className="flex flex-col justify-center items-center gap-8 mb-8 m-auto w-137.5">
          <FadeIn delay={0}>
            <h4 className="font-sans text-[14px] text-center uppercase text-(--stone1) tracking-[0.15em]">
              Kept by our customers
            </h4>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="font-heading text-2xl leading-10 text-center text-(--ink1)">
              &quot;I own three pitchers now. Each one sits somewhere different
              in the house and somehow all three are the piece I reach
              for.&quot;
            </h3>
          </FadeIn>
          <div className="w-12.5 h-[0.5px] bg-(--stone2)"></div>
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-sans text-xs tracking-[0.15em] text-(--ink1)">
                Maribel S.
              </span>
              <span className="text-mono text-[11px] tracking-[0.15em] text-(--stone1)">
                On the stoneware pitcher
              </span>
            </div>
          </FadeIn>
        </div>
        <div className="flex justify-between items-center border-t-[0.5px] border-(--stone3) pt-8">
          <FadeIn>
            <span className="text-sans text-base font-extralight">
              Get first look at new catalog entries.
            </span>
          </FadeIn>
          <NewsletterSignup />
        </div>
      </Container>
    </section>
  );
}
