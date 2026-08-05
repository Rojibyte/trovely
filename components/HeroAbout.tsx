import Container from "./Container";

export default function HeroAbout() {
  return (
    <section className="border-y border-(--stone3)">
      <Container>
        <div className="flex">
          <div className="flex flex-col justify-center items-center text-center py-[120px] px-8 ml-auto w-full gap-10">
            <span className="subTitle">About Trovely</span>
            <h1 className="heading text-[64px]">
              A small catalog, kept with care.
            </h1>
            <p className="max-w-[650px]">
              Trovely started as a personal list of objects worth keeping.
              It&apos;s grown slowly, one maker at a time, and stayed small on
              purpose.
            </p>
          </div>
          <div className="bg-(--stone3)" />
        </div>
      </Container>
    </section>
  );
}
