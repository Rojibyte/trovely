import type { Metadata } from "next";
import {
  Fraunces,
  Public_Sans,
  JetBrains_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trovely",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fraunces.variable,
        "font-sans",
        publicSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
