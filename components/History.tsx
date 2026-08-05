export default function History() {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-2">
          <div className="bg-(--stone3)" />
          <div className="flex flex-col justify-center items-start py-[120px] pl-20 mr-auto max-w-180 gap-9">
            <span className="subTitle text-left">Where it starts</span>
            <h2 className="heading text-[48px] text-left">
              Sourced, not sourced-out
            </h2>
            <p className="text-left">
              Every object begins with a maker, not a catalog request. We visit,
              ask questions, and only list what we&apos;d keep ourselves.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-start py-[120px] pr-20 ml-auto max-w-180 gap-9">
            <span className="subTitle">How it&apos;s kept</span>
            <h1 className="heading text-[48px]">Made to outlast the season</h1>
            <p>
              Every listing includes what it&apos;s made of and how to care for
              it, so it stays in use, not in a drawer.
            </p>
          </div>
          <div className="bg-(--stone3)" />
        </div>
      </section>
    </>
  );
}
