import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function BrowseCollection() {
  return (
    <section className="border-t border-(--stone3)">
      <Container>
        <div className="flex">
          <div className="flex flex-col justify-center items-center text-center py-30 px-8 ml-auto w-full gap-8">
            <FadeIn delay={0}>
              <p className="max-w-162.5">
                See what&apos;s currently kept in the catalog.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/shop" className="primaryButton">
                Browse the collection
              </Link>
            </FadeIn>
          </div>
          <div className="bg-(--stone3)" />
        </div>
      </Container>
    </section>
  );
}
