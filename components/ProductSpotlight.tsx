export default function ProductSpotlight() {
  return (
    <section className="border-y border-(--stone3)">
      <div className="grid grid-cols-2">
        <div className="bg-(--stone3)" />
        <div className="flex flex-col justify-center items-end py-14 pl-16.25 mr-auto max-w-180 gap-9">
          <span className="subTitle text-right">Catalog favourite</span>
          <h2 className="heading text-[48px] text-right">
            Stoneware pitcher, hand-thrown
          </h2>
          <p className="text-right">
            Our most kept piece for two seasons running. Thrown in small batches
            from a single stoneware body, each pitcher carries the maker&apos;s
            thumbprint at the base.
          </p>
          <a href="#" className="primaryButton">
            View this piece
          </a>
        </div>
      </div>
    </section>
  );
}
