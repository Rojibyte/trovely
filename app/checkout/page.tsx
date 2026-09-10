import CheckoutForm from "@/components/Checkout";
import Container from "@/components/Container";
import { auth } from "@clerk/nextjs/server";

export default async function CheckoutPage() {
  await auth.protect();

  return (
    <Container>
      <CheckoutForm />
    </Container>
  );
}
