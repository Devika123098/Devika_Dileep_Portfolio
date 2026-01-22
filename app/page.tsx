"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroIllustration from "@/components/HeroIllustration";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/AboutSection";
import { RESUME_DATA } from "@/data";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".gsap-hero", {
        yPercent: 100,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      })
      .from(".gsap-tag", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.8")
      .from(".gsap-fade", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.5");

      gsap.utils.toArray('.gsap-title').forEach((title: any) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 95%"
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <header className="relative mb-32">
        <h1 className="font-display font-bold text-[42px] md:text-[68px] lg:text-[80px] leading-[1.1] text-forest mb-8 tracking-tighter mix-blend-multiply">
          <div className="overflow-hidden"><span className="gsap-hero block">I’m {RESUME_DATA.personalInfo.name.split(' ')[0]}, crafting</span></div>
          <div className="overflow-hidden"><span className="gsap-hero block">digital experiences*</span></div>
          <div className="overflow-hidden"><span className="gsap-hero block">that feel alive.</span></div>
        </h1>

        <div className="flex flex-wrap gap-3 mb-10">
          {RESUME_DATA.skills.slice(0, 3).map((skill) => (
            <div key={skill} className="gsap-tag px-4 py-[6px] border border-forest/30 rounded-full bg-cream text-forest text-[13px] font-sans uppercase font-medium tracking-wider hover:bg-forest hover:text-cream transition-colors cursor-default shadow-sm hover:shadow-hard-hover">
              {skill}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mb-12">
          <p className="gsap-fade text-[18px] md:text-[20px] text-textMain font-sans leading-relaxed">
            {RESUME_DATA.personalInfo.status}
          </p>
          <p className="gsap-fade text-[18px] md:text-[20px] text-textMain font-sans leading-relaxed">
            Based in {RESUME_DATA.personalInfo.location}
          </p>
          <p className="gsap-fade text-forest font-medium mt-5 font-sans text-[16px] opacity-80 italic">* frontend architecture & motion</p>
        </div>

        <HeroIllustration />
      </header>

      <section id="work" className="mb-40">
        <h2 className="font-display font-bold text-5xl md:text-[64px] text-forest mb-16 text-center md:text-left gsap-title">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.stack}
              link={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              color={project.color || (index % 3 === 0 ? 'cream' : index % 3 === 1 ? 'pinkCard' : 'blueCard')}
              className="h-full"
            />
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center py-16 opacity-30 select-none overflow-hidden">
        <div className="flex gap-4 items-center">
          <span className="text-forest text-2xl font-display font-bold">***</span>
          <div className="w-20 h-px bg-forest"></div>
          <span className="text-forest text-2xl font-display font-bold">***</span>
          <div className="w-20 h-px bg-forest"></div>
          <span className="text-forest text-2xl font-display font-bold">***</span>
        </div>
      </div>

      <AboutSection />

      <section className="mb-40">
        <h2 className="font-display font-bold text-5xl md:text-[64px] text-forest mb-16 gsap-title">Experience</h2>
        <ExperienceTimeline />
      </section>
    </div>
  );
}
