"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // your submit logic here — API call, Supabase insert, etc.
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email"
        className="border border-(--stone1) bg-transparent px-3 py-2 text-sm rounded-l-(--radius)"
      />
      <button
        type="submit"
        className="bg-(--moss) text-background px-4 py-2 text-sm rounded-r-(--radius)"
      >
        Join
      </button>
    </form>
  );
}
