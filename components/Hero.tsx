import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-y border-(--stone3)">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-start py-14 pl-16.25 pr-8 ml-auto max-w-180 gap-9">
          <span className="subTitle">New arrivals — spring catalog</span>
          <h1 className="heading text-[64px]">Good things, well kept.</h1>
          <p>
            A small, considered catalog of objects for the home, they are
            sourced, catalogued, and kept as they were meant to be.
          </p>
          <Link href="/shop" className="primaryButton">
            Browse the collection
          </Link>
        </div>
        <div className="bg-(--stone3)" />
      </div>
    </section>
  );
}
