import OrderConfirmation from "@/components/OrderConfirmation";
import Container from "@/components/Container";
import { auth } from "@clerk/nextjs/server";

export default async function OrderConfirmationPage() {
  await auth.protect();

  return (
    <Container>
      <OrderConfirmation />
    </Container>
  );
}
