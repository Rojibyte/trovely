import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="border-t border-(--stone3)">
      <Container>
        <footer className="grid grid-cols-3 py-8">
          <nav className="flex justify-start items-center gap-10 w-full">
            <Link
              href="/shop"
              className="transition-colors duration-200 hover:text-(--ochre)"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-(--ochre)"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-(--ochre)"
            >
              Contact
            </Link>
          </nav>
          <h1 className="font-heading text-[32px] tracking-[0.06em] text-center">
            <Link href="/">Trovely</Link>
          </h1>
          <div className="flex justify-end items-center gap-4">
            <a href="http://">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook transition-all duration-200 hover:stroke-(--ochre)"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="http://">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram transition-all duration-200 hover:stroke-(--ochre)"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <span className="font-heading text-(--stone1)">© 2026</span>
          </div>
        </footer>
      </Container>
    </div>
  );
}
