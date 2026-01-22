import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devika Dileep - Frontend Developer",
  description:
    "Portfolio of Devika Dileep, a Frontend Developer and Architecture Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} antialiased font-sans bg-cream bg-grid-pattern overflow-x-hidden text-textMain`}
      >
        <Navbar />
        <main className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-40 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
