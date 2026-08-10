import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    value: "international-shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries. Rates and delivery times are calculated at checkout based on your location.",
  },
  {
    value: "return-policy",
    question: "What's your return policy?",
    answer:
      "Returns are accepted within 14 days of delivery, provided the item is unused and in its original condition.",
  },
] as const;

export default function ContactFAQ() {
  return (
    <div className="flex flex-col gap-3 pt-6 border-t border-(--stone3)">
      <FadeIn delay={0}>
        <span className="font-mono uppercase text-(--stone1) text-xs tracking-[0.15em]">
          Common questions
        </span>
      </FadeIn>
      <Accordion multiple className="flex-col gap-0">
        {faqs.map((faq, index) => (
          <FadeIn key={faq.value} delay={0.1 + index * 0.1}>
            <AccordionItem
              value={faq.value}
              className="px-0 first:border-b border-(--stone3)"
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </FadeIn>
        ))}
      </Accordion>
    </div>
  );
}
