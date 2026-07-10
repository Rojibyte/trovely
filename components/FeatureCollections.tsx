import Container from "./Container";

export default function FeatureCollections() {
  return (
    <Container>
      <section className="py-20">
        <h2 className="heading text-[48px] text-center mb-8">
          Featured Collections
        </h2>
        <div className="grid grid-cols-4 gap-7.5">
          <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
            <div className="h-80"></div>
            <div className="flex justify-center items-center py-6 font-heading text-2xl">
              Ceramics
            </div>
          </div>
          <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
            <div className="h-80"></div>
            <div className="flex justify-center items-center py-6 font-heading text-2xl">
              Textiles
            </div>
          </div>
          <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
            <div className="h-80"></div>
            <div className="flex justify-center items-center py-6 font-heading text-2xl">
              Home
            </div>
          </div>
          <div className="bg-(--stone4) border-[0.5px] border-(--stone2)">
            <div className="h-80"></div>
            <div className="flex justify-center items-center py-6 font-heading text-2xl">
              Garden
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
