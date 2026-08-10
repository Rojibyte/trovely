import Link from "next/link";
import Container from "@/components/Container";

export default function OrderConfirmationPage() {
  return (
    <Container>
      <section className="py-24 flex flex-col items-center gap-6 text-center">
        <span className="font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
          Order confirmed
        </span>
        <h1 className="font-heading text-3xl text-(--ink1)">
          Thank you — it's on its way.
        </h1>
        <p className="font-sans text-(--stone1) max-w-md">
          We've received your order and will send a confirmation email shortly.
          Most pieces ship within 3 business days.
        </p>
        <Link
          href="/shop"
          className="rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-6 py-4 transition-all duration-350 ease-out hover:opacity-90"
        >
          Continue Shopping
        </Link>
      </section>
    </Container>
  );
}
