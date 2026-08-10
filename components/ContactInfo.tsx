import { FacebookIcon } from "./icons/lucide-facebook";
import { InstagramIcon } from "./icons/lucide-instagram";
import FadeIn from "./FadeIn";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <FadeIn delay={0}>
        <div className="flex flex-col gap-2 pb-6 border-b border-(--stone3)">
          <span className="font-mono uppercase text-(--stone1) text-xs tracking-[0.15em]">
            Email us directly
          </span>
          <a
            href="mailto:hello@trovely.co"
            className="font-sans text-(--ink1) text-base hover:underline"
          >
            hello@trovely.co
          </a>
          <span className="text-xs text-(--stone1)">
            For order issues, include your order number.
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-col gap-3">
          <span className="font-mono uppercase text-(--stone1) text-xs tracking-[0.15em]">
            Find us
          </span>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trovely on Instagram"
              className="text-(--ink1) hover:opacity-70 transition-opacity"
            >
              <InstagramIcon size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trovely on Facebook"
              className="text-(--ink1) hover:opacity-70 transition-opacity"
            >
              <FacebookIcon size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
