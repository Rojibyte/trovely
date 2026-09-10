import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-1/2 items-center justify-center">
      <SignIn />
    </div>
  );
}
