import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-1/2 items-center justify-center">
      <SignUp />
    </div>
  );
}
