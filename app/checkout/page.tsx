import CheckoutForm from "@/components/Checkout";
import { auth } from "@clerk/nextjs/server";

export default async function CheckoutPage() {
  await auth.protect();

  return (
    <>
      <CheckoutForm />
    </>
  );
}
