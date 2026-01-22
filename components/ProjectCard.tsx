"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  color?: string; // e.g. 'pinkCard', 'blueCard', 'cream'
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  link = "#",
  color = "cream",
  className = "",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: cardRef }
  );

  const bgColorClass =
    color === "pinkCard"
      ? "bg-pinkCard"
      : color === "blueCard"
      ? "bg-blueCard"
      : "bg-cream"; // default

  return (
    <article
      ref={cardRef}
      className={`group relative transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-hard-hover ${className}`}
    >
      <Link href={link} className="block h-full">
        <div
          className={`border border-forest rounded-card overflow-hidden shadow-hard h-full flex flex-col ${bgColorClass}`}
        >
          <div className="h-[250px] md:h-[320px] w-full flex items-center justify-center p-6 relative bg-white/50">
             {color === 'cream' && (
                 <div className="w-32 h-32 bg-gradient-to-tr from-orange-500 to-red-600 rounded-tl-full rounded-br-full transform rotate-45 group-hover:scale-110 transition-transform duration-500 shadow-lg"></div>
             )}
             {color === 'pinkCard' && (
                 <div className="w-[140px] h-[260px] bg-black rounded-[20px] border-4 border-forest shadow-xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex justify-center"><div className="w-16 h-4 bg-black rounded-b-lg"></div></div>
                    <div className="w-full h-full bg-white pt-8 px-2">
                        <div className="w-full h-8 bg-pink-100 mb-2 rounded"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-16 bg-pink-200 rounded"></div>
                            <div className="h-16 bg-pink-200 rounded"></div>
                        </div>
                    </div>
                </div>
             )}
             {color === 'blueCard' && (
                <>
                <div className="absolute top-10 left-10 w-24 h-24 bg-white border border-forest rounded-lg shadow-md transform -rotate-6 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                </div>
                <div className="absolute bottom-10 right-10 w-32 h-20 bg-white border border-forest rounded-lg shadow-md transform rotate-3 z-20 flex flex-col justify-center px-2 gap-2">
                    <div className="w-full h-2 bg-gray-100 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                </div>
                </>
             )}
          </div>

          <div className="p-8 border-t border-forest bg-cream flex-grow flex flex-col items-start w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-forest rounded-md text-[11px] font-bold text-forest uppercase bg-white tracking-wide"
                >
                  {tag}
                </span>
              ))}
              {tags.length === 0 && (
                <span className="px-3 py-1 border border-forest rounded-md text-[11px] font-bold text-forest uppercase bg-white tracking-wide">
                  Project
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-[28px] text-textMain mb-2 group-hover:underline underline-offset-4 decoration-1">
              {title}
            </h3>
            <p className="font-sans text-[16px] text-textGray mb-6">
              {description}
            </p>
            <span className="mt-auto inline-block px-5 py-2.5 rounded-full border border-forest text-forest text-[11px] font-bold uppercase tracking-widest group-hover:bg-forest group-hover:text-cream transition-colors">
              Explore Further
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
