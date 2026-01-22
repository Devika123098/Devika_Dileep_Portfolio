"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.8 } });
      
      tl.from(".gsap-desk", { scaleX: 0, transformOrigin: "center bottom" })
        .from(".gsap-laptop", { y: 50, opacity: 0, scale: 0.9 }, "-=0.5")
        .from(".gsap-plant", { x: -30, opacity: 0, rotation: -10, transformOrigin: "bottom center" }, "-=0.6")
        .from(".gsap-lamp", { x: 30, opacity: 0, rotation: 10, transformOrigin: "bottom center" }, "-=0.7")
        .from(".gsap-bubble", { scale: 0, opacity: 0 }, "-=0.3");
    },
    { scope: containerRef }
  );

  const colors = {
    stroke: "#265f56",
    skin: "#f5d0b0",
    shirt: "#bcaaa4",
    plant: "#265f56",
    lampAccent: "#5099a7"
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[450px] mt-16 flex items-end justify-center overflow-hidden"
    >
      <div className="gsap-desk absolute w-screen left-1/2 -ml-[50vw] bottom-0 h-[24px] bg-[#c79b76] border-t-2 border-[#265f56] z-10"></div>

      <div className="relative w-full max-w-4xl h-full flex items-end justify-center mx-auto px-4 pb-[22px]">
        
        <div className="gsap-plant absolute left-2 md:left-20 bottom-[22px] z-20 w-[80px] md:w-[100px] hidden md:block">
          <svg viewBox="0 0 100 120" className="w-full h-auto drop-shadow-sm">
            <path d="M25 120 L20 90 L80 90 L75 120 Z" fill="#f0e6d2" stroke={colors.stroke} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M15 90 L85 90" stroke={colors.stroke} strokeWidth="2" strokeLinecap="round"/>
            <g fill="none" stroke={colors.plant} strokeWidth="2" strokeLinecap="round">
              <path d="M50 90 Q30 60 20 40" />
              <path d="M50 90 Q50 50 50 20" />
              <path d="M50 90 Q70 60 80 40" />
            </g>
            <g fill={colors.plant}>
              <ellipse cx="20" cy="40" rx="12" ry="6" transform="rotate(-30 20 40)" />
              <ellipse cx="50" cy="20" rx="10" ry="8" transform="rotate(-90 50 20)" />
              <ellipse cx="80" cy="40" rx="12" ry="6" transform="rotate(30 80 40)" />
            </g>
          </svg>
        </div>

        <div className="gsap-laptop z-30 relative flex flex-col items-center">
          
          <div className="w-[240px] h-[160px] bg-[#fbf6ef] border-2 border-[#265f56] rounded-t-xl relative z-10 flex items-center justify-center p-2">
            
            <div className="w-full h-full bg-white border border-[#265f56]/20 rounded overflow-hidden relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
                <svg width="120" height="100" viewBox="0 0 120 100">
                  <path d="M30 110 Q30 70 60 70 Q90 70 90 110" fill={colors.shirt} stroke={colors.stroke} strokeWidth="1.5" />
                  <circle cx="60" cy="40" r="22" fill={colors.skin} stroke={colors.stroke} strokeWidth="1.5" />
                  <path d="M60 18 C 40 18, 35 45, 38 45" fill="none" stroke={colors.stroke} strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M60 18 C 80 18, 85 45, 82 45" fill="none" stroke={colors.stroke} strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M52 14 Q60 5 68 14" fill="none" stroke={colors.stroke} strokeWidth="1.5" />
                  <circle cx="53" cy="40" r="2" fill={colors.stroke} />
                  <circle cx="67" cy="40" r="2" fill={colors.stroke} />
                  <path d="M56 48 Q60 52 64 48" fill="none" stroke={colors.stroke} strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M25 35 Q 20 25 30 15" fill="none" stroke={colors.stroke} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
                  <path d="M95 35 Q 100 25 90 15" fill="none" stroke={colors.stroke} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
                </svg>
              </div>
              <div className="gsap-bubble absolute top-4 right-4 bg-white border border-[#265f56] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none px-3 py-1 text-xs font-bold text-[#265f56] shadow-sm">
                Welcome
              </div>
            </div>
          </div>

          <div className="w-[280px] h-[14px] bg-[#fbf6ef] border-2 border-[#265f56] rounded-b-lg relative z-20 shadow-sm">
            <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-[40px] h-[4px] bg-[#dcdcdc] rounded-b-md border-b border-l border-r border-[#265f56]/30"></div>
          </div>
        </div>

        <div className="gsap-lamp absolute right-2 md:right-16 bottom-[22px] z-20 w-[70px] md:w-[90px] hidden md:block">
          <svg viewBox="0 0 100 150" className="w-full h-auto drop-shadow-sm">
            <path d="M20 150 L80 150 L75 140 L25 140 Z" fill="#f0e6d2" stroke={colors.stroke} strokeWidth="2" />
            <path d="M50 140 L30 80 L60 50" fill="none" stroke={colors.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M60 50 L20 60 L30 30 L60 50 Z" fill={colors.lampAccent} stroke={colors.stroke} strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="40" cy="50" r="5" fill="#fff" opacity="0.5"/>
          </svg>
        </div>

      </div>
    </div>
  );
}
