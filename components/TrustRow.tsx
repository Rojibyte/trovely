import Container from "./Container";

export default function TrustRow() {
  return (
    <Container>
      <section className="py-[80px]">
        <h4 className="font-sans text-[14px] text-center mb-8 uppercase text-(--stone1) tracking-[0.15em]">
          Why keep with Trovely
        </h4>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="border-t-[0.5px] border-(--stone3) pt-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <span className="font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
                No. 01
              </span>
              <span className="font-heading text-xl">Provenance</span>
              <p>
                Every piece is sourced and catalogued with its material, maker,
                and origin.
              </p>
            </div>
          </div>
          <div className="border-t-[0.5px] border-(--stone3) pt-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <span className="font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
                No. 02
              </span>
              <span className="font-heading text-xl">Considered shipping</span>
              <p>
                Packed with care, shipped slowly and deliberately, not rushed.
              </p>
            </div>
          </div>
          <div className="border-t-[0.5px] border-(--stone3) pt-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <span className="font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
                No. 03
              </span>
              <span className="font-heading text-xl">Kept, not disposable</span>
              <p>
                Objects chosen to last, with notes on how to care for each one.
              </p>
            </div>
          </div>
          <div className="border-t-[0.5px] border-(--stone3) pt-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <span className="font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
                No. 04
              </span>
              <span className="font-heading text-xl">In your hands</span>
              <p>Easy returns within 30 days, no questions about why.</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
