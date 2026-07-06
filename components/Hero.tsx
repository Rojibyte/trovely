export default function Hero() {
  return (
    <section className="fullContainer flex border-t border-b">
      <div className="flex flex-col flex-1 py-14 pr-8 gap-10">
        <span className="subTitle">New arrivals — spring catalog</span>
        <div className="heading1">Good things, well kept.</div>
        <p>
          A small, considered catalog of objects for the home, they are sourced,
          catalogued, and kept as they were meant to be.
        </p>
        <a href="http://" className="primaryButton">
          Browse the collection
        </a>
      </div>
      <div className="w-188 bg-(--stone3)"></div>
    </section>
  );
}
