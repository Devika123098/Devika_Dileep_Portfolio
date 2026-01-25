"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function NavbarComponent() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Work", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-300"
          >
            <span>Resume</span>
            <Icon icon="solar:arrow-right-up-linear" width={16} />
          </a>

        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
            >
              <Icon icon="solar:close-circle-linear" width={32} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-medium text-white hover:text-neutral-500 transition-colors tracking-tight"
                >
                  {item.name}
                </a>
              ))}
          
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-medium text-white hover:text-neutral-500 transition-colors tracking-tight"
              >
                Resume
              </a>
            </nav>

      
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}