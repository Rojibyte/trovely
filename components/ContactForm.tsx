"use client";

import { useState, FormEvent } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError(true);
      setSubmitted(false);
      return;
    }

    setEmailError(false);

    // Simulated submit — no backend wired up yet.
    console.log("Contact form submitted:", { name, email, message });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
      <Field>
        <FieldLabel
          htmlFor="name"
          className="text-base text-sans font-extralight capitalize"
        >
          Name
        </FieldLabel>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-(--stone5) border border-(--stone3) rounded-lg px-4 py-3"
        />
      </Field>

      <Field>
        <FieldLabel
          htmlFor="email"
          className="text-base text-sans font-extralight capitalize"
        >
          Email
        </FieldLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError(false);
          }}
          className={`bg-(--stone5) border rounded-lg px-4 py-3 ${
            emailError ? "border-(--error)" : "border-(--stone3)"
          }`}
        />
        {emailError && (
          <span className="text-(--error) text-xs mt-1 font-extralight tracking-[0.06em]">
            Please enter a valid email address.
          </span>
        )}
      </Field>

      <Field>
        <FieldLabel
          htmlFor="message"
          className="text-base text-sans font-extralight capitalize"
        >
          Message
        </FieldLabel>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="bg-(--stone5) border border-(--stone3) rounded-lg px-4 py-3"
        />
      </Field>

      <button
        type="submit"
        className="w-fit rounded-lg bg-(--action) text-background font-sans text-sm font-medium px-6 py-3 cursor-pointer transition-all duration-350 ease-out hover:opacity-90"
      >
        Send Message
      </button>

      {submitted && (
        <div className="border border-(--success) bg-(--success)/12 text-(--success) text-base font-extralight tracking-[0.06em] rounded-lg px-4 py-3">
          Message sent! we&apos;ll reply within 2 business days.
        </div>
      )}
    </form>
  );
}
