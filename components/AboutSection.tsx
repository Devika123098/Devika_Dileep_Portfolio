"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RESUME_DATA } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".about-card");
      
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.to(".sticker-float", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="mb-40 relative">
      <h2 className="font-display font-bold text-5xl md:text-[64px] text-forest mb-16 gsap-title text-center md:text-left">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(100px,auto)]">
        
        <div className="about-card col-span-1 md:col-span-8 md:row-span-2 bg-[#fffbf1] border border-forest rounded-card p-8 md:p-12 shadow-hard relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
          
          <h3 className="font-display font-bold text-3xl text-forest mb-6">Hello! I'm {RESUME_DATA.personalInfo.name.split(' ')[0]} 🌸</h3>
          <p className="font-sans text-lg md:text-xl text-textMain leading-relaxed mb-6">
            {RESUME_DATA.summary}
          </p>
          <p className="font-sans text-lg md:text-xl text-textMain leading-relaxed">
            I believe in code that feels human. My goal is to bridge the gap between <span className="font-bold text-forest">robust engineering</span> and <span className="font-bold text-forest">whimsical design</span>.
          </p>
          
          <div className="sticker-float absolute bottom-6 right-6 text-4xl rotate-12 opacity-80 cursor-default hover:scale-110 transition-transform">
             ✨
          </div>
        </div>

        <div className="about-card col-span-1 md:col-span-4 md:row-span-2 bg-forest rounded-card shadow-hard relative overflow-hidden flex items-center justify-center p-6">
             <div className="w-48 h-48 bg-cream rounded-full flex items-center justify-center relative border-4 border-cream/20">
                <svg width="100" height="100" viewBox="0 0 100 100" className="text-forest">
                    <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.2"/>
                    <circle cx="35" cy="40" r="5" fill="currentColor" />
                    <circle cx="65" cy="40" r="5" fill="currentColor" />
                    <path d="M35 60 Q50 75 65 60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <div className="sticker-float absolute -top-4 -right-2 text-4xl">👋</div>
             </div>
        </div>

        <div className="about-card col-span-1 md:col-span-6 bg-white border border-forest rounded-card p-6 shadow-hard flex flex-col justify-center">
            <h4 className="font-sans font-bold text-forest uppercase tracking-widest text-xs mb-4">Tech Arcade</h4>
            <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-cream border border-forest rounded-full text-forest text-sm font-medium hover:bg-forest hover:text-cream transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        <div className="about-card col-span-1 md:col-span-3 bg-pinkCard border border-forest rounded-card p-6 shadow-hard flex flex-col items-center justify-center text-center">
             <div className="text-4xl mb-2 sticker-float">📍</div>
             <p className="font-sans font-bold text-forest">{RESUME_DATA.personalInfo.location}</p>
             <p className="text-xs text-textGray mt-1">Coding from the tropics</p>
        </div>

        <div className="about-card col-span-1 md:col-span-3 bg-blueCard border border-forest rounded-card p-6 shadow-hard flex flex-col items-center justify-center text-center group cursor-pointer">
             <div className="w-3 h-3 bg-green-500 rounded-full mb-3 animate-pulse"></div>
             <p className="font-sans font-bold text-forest">{RESUME_DATA.personalInfo.availability}</p>
             <p className="text-xs text-textGray mt-1 group-hover:underline">Let's build together →</p>
        </div>

      </div>
    </section>
  );
}
