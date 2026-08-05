import Link from "next/link";
import Container from "./Container";

export default function BrowseCollection() {
  return (
    <section className="border-y border-(--stone3)">
      <Container>
        <div className="flex">
          <div className="flex flex-col justify-center items-center text-center py-[120px] px-8 ml-auto w-full gap-8">
            <p className="max-w-[650px]">
              See what&apos;s currently kept in the catalog.
            </p>
            <Link href="/shop" className="primaryButton">
              Browse the collection
            </Link>
          </div>
          <div className="bg-(--stone3)" />
        </div>
      </Container>
    </section>
  );
}
