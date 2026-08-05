import Container from "./Container";

export default function HeroContact() {
  return (
    <section className="border-t border-(--stone3)">
      <Container>
        <div className="flex">
          <div className="flex flex-col justify-center items-center text-center py-[120px] px-8 ml-auto w-full gap-10">
            <span className="subTitle">Get in touch</span>
            <h1 className="heading text-[64px]">
              Questions before you keep something
            </h1>
            <p className="max-w-[650px]">
              We read every message ourselves, usually a reply within 2 business
              days.
            </p>
          </div>
          <div className="bg-(--stone3)" />
        </div>
      </Container>
    </section>
  );
}
