import Container from "./Container";

export default function Founder() {
  return (
    <section className="py-20 bg-(--stone4) border-t border-(--stone3)">
      <Container>
        <div className="flex flex-col justify-center items-center gap-8 m-auto w-137.5">
          <h4 className="font-sans text-[14px] text-center uppercase text-(--stone1) tracking-[0.15em]">
            From the founder
          </h4>
          <h3 className="font-heading text-2xl leading-10 text-center text-(--ink1)">
            &quot;I started Trovely because I kept buying things I didn&apos;t
            need and returning them within a week. This is the list of things I
            didn&apos;t return.&quot;
          </h3>
          <div className="w-12.5 h-[0.5px] bg-(--stone2)"></div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-sans text-xs tracking-[0.15em] text-(--ink1)">
              Russell Sprout
            </span>
            <span className="text-mono text-[11px] tracking-[0.15em] text-(--stone1)">
              — Founder, Trovely
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
