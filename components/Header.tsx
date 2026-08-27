import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Container from "./Container";
import Link from "next/link";

export default function Header() {
  return (
    <section className="border-b border-(--stone3)">
      <Container>
        <header className="grid grid-cols-3 py-8">
          <nav className="flex justify-start items-center gap-12 w-full">
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
          <h1 className="font-heading text-[32px] tracking-[0.06em] w-full text-center">
            <Link href="/">Trovely</Link>
          </h1>
          <nav className="flex justify-end items-center gap-12 w-full">
            {/* <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search transition-all duration-200 hover:stroke-(--ochre)"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button> */}
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-bag transition-all duration-200 hover:stroke-(--ochre)"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
            <Show when="signed-out">
              <Popover>
                <PopoverTrigger className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user transition-all duration-200 hover:stroke-(--ochre)"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex gap-4">
                    <SignInButton>
                      <button className="primaryButton cursor-pointer">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="primaryButton cursor-pointer">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </PopoverContent>
              </Popover>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </nav>
        </header>
      </Container>
    </section>
  );
}
