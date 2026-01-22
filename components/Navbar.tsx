"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RibbonLogo from "@/components/icons/RibbonLogo";
export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: navRef }
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 pt-8 pb-4 bg-cream/90 backdrop-blur-sm transition-transform duration-500"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group" onClick={() => { setIsMobileMenuOpen(false); document.body.style.overflow = "auto"; }}>
            <RibbonLogo className="group-hover:scale-110 transition-transform" />
          </Link>

          <div className="hidden md:flex gap-10 items-center text-textMain font-sans text-[17px] font-medium tracking-wide">
            <Link href="/#work" className="nav-link relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-forest after:transition-[width] after:duration-300 hover:after:w-full">
              Work
            </Link>

            <Link href="/#about" className="nav-link relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-forest after:transition-[width] after:duration-300 hover:after:w-full">
              About Me
            </Link>
            <Link href="/resume.pdf" target="_blank" className="nav-link relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-forest after:transition-[width] after:duration-300 hover:after:w-full">
              Resume
            </Link>
          </div>

          <button 
            className="md:hidden text-forest z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            )}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
         <div className="flex flex-col gap-8 text-center">
            <Link 
                href="/#work" 
                className="font-display font-bold text-4xl text-forest hover:text-btnBlue transition-colors"
                onClick={toggleMobileMenu}
            >
                Work
            </Link>
            <Link 
                href="/#about" 
                className="font-display font-bold text-4xl text-forest hover:text-btnBlue transition-colors"
                onClick={toggleMobileMenu}
            >
                About Me
            </Link>
            <Link 
                href="/resume.pdf" 
                className="font-display font-bold text-4xl text-forest hover:text-btnBlue transition-colors"
                onClick={toggleMobileMenu}
            >
                Resume
            </Link>
         </div>
      </div>
    </>
  );
}
