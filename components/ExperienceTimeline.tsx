"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RESUME_DATA } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".gsap-exp-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="border-l-2 border-forest/20 ml-2 md:ml-4 space-y-16">
      {RESUME_DATA.experience.map((exp, index) => (
        <div key={index} className="relative pl-10 md:pl-16 gsap-exp-item group">
          {/* Timeline Dot */}
          <div className={`absolute -left-[11px] top-1.5 w-[20px] h-[20px] border-2 border-forest rounded-full transition-transform group-hover:scale-110 ${index === 0 ? 'bg-[#fffbf1]' : 'bg-forest'}`}></div>
          
          <h3 className="font-sans font-bold text-[22px] text-forest mb-1">
            {exp.company}
          </h3>
          <p className="font-sans text-textGray text-sm mb-2">{exp.date}</p>
          <p className="font-sans text-textMain text-lg">
            {exp.role}
          </p>
        </div>
      ))}
    </div>
  );
}
