"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    // Simulated submit — no backend/API call wired up yet.
    console.log("Newsletter signup:", email);
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your email"
          className={`border bg-transparent px-3 py-2 text-sm rounded-l-(--radius) ${
            status === "error" ? "border-red-500" : "border-(--stone1)"
          }`}
        />
        <button
          type="submit"
          className="bg-(--moss) text-background px-4 py-2 text-sm rounded-r-(--radius) cursor-pointer transition-opacity duration-200 hover:opacity-90"
        >
          Join
        </button>
      </form>

      {status === "success" && (
        <span className="text-xs text-(--moss)">
          You're on the list — welcome in.
        </span>
      )}
      {status === "error" && (
        <span className="text-xs text-red-500">
          Please enter a valid email address.
        </span>
      )}
    </div>
  );
}
