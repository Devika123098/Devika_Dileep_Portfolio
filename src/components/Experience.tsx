"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  accent: string;
  icon: string;
  isCurrent?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Web Interest Group Lead",
    company: "GTech Mulearn",
    period: "Present",
    description:
      "Leading the Web Interest Group, organizing sessions, and mentoring students in web development technologies and best practices.",
    accent: "#22c55e",
    icon: "solar:users-group-rounded-linear",
    isCurrent: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Integrion (Freelance)",
    period: "May 2025",
    description:
      "Developed a responsive waitlist website. Collaborated with stakeholders to ensure design fidelity and performance optimization.",
    accent: "#22c55e",
    icon: "solar:laptop-minimalistic-linear",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "MoniMind (Freelance)",
    period: "Feb – Mar 2025",
    description:
      "Converted Figma designs into a fully responsive web interface using React.js and Tailwind CSS.",
    accent: "#a855f7",
    icon: "solar:code-circle-linear",
  },
];

function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpointPx}px)`).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const update = () => setIsMobile(mq.matches);

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, [breakpointPx]);

  return isMobile;
}

export default function Experience() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile(768);

  const motionEnabled = !reducedMotion;

  const { container, item, viewportAmount } = useMemo(() => {
    const y = isMobile ? 10 : 16;
    const duration = isMobile ? 0.35 : 0.55;
    const stagger = isMobile ? 0.05 : 0.08;
    const viewportAmount = isMobile ? 0.12 : 0.25;

    const container: Variants = {
      hidden: {},
      show: { transition: { staggerChildren: stagger } },
    };

    const item: Variants = {
      hidden: { opacity: 0, y },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: [0.16, 1, 0.3, 1] },
      },
    };

    return { container, item, viewportAmount };
  }, [isMobile]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="experience"
        className="relative overflow-hidden border-y border-neutral-900 bg-[#050505] py-24 lg:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mb-12 border-b border-neutral-900 pb-8">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-[1px] w-8 bg-emerald-500" />
              <span>Experience</span>
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Building, leading, and shipping
            </h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Professional history and leadership roles—focused on performance, design fidelity, and
              clean systems.
            </p>
          </div>

          <m.ol
            variants={motionEnabled ? container : undefined}
            initial={motionEnabled ? "hidden" : false}
            whileInView={motionEnabled ? "show" : undefined}
            viewport={motionEnabled ? { once: true, amount: viewportAmount } : undefined}
            className="relative space-y-6"
          >
            <div className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-neutral-800 via-neutral-800/60 to-transparent" />

            {experiences.map((exp) => (
              <m.li
                key={exp.id}
                variants={motionEnabled ? item : undefined}
                style={{ ["--accent" as any]: exp.accent }}
                className="group relative pl-14"
              >
                <div className="absolute left-[10px] top-6">
                  <div
                    className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-950"
                    style={{
                      boxShadow: exp.isCurrent
                        ? `0 0 0 6px color-mix(in srgb, var(--accent) 18%, transparent)`
                        : undefined,
                      borderColor: exp.isCurrent
                        ? "color-mix(in srgb, var(--accent) 55%, #3f3f46)"
                        : undefined,
                    }}
                  />
                </div>

                <div className="rounded-2xl p-[1px] bg-gradient-to-b from-neutral-800/80 to-neutral-900/30">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/55 p-6 backdrop-blur transition-colors duration-300 group-hover:border-[color:var(--accent)]/45">
                    <div
                      className="pointer-events-none absolute -top-20 right-10 h-40 w-40 rounded-full blur-[60px] opacity-0 transition-opacity group-hover:opacity-25"
                      style={{ background: "var(--accent)" }}
                    />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 aspect-square items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-white">
                          <Icon icon={exp.icon} width={20} height={20} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className="text-lg font-semibold text-white tracking-tight">
                              {exp.title}
                            </h4>
                            <span className="hidden sm:inline text-neutral-700">•</span>
                            <p className="text-sm text-neutral-300">{exp.company}</p>

                            {exp.isCurrent && (
                              <span className="ml-0 sm:ml-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-emerald-300">
                                <span className="relative flex h-2 w-2">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                </span>
                                Current
                              </span>
                            )}
                          </div>

                          <p className="mt-2 text-sm leading-relaxed text-neutral-400 max-w-2xl">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      <time className="text-xs font-mono text-neutral-500 whitespace-nowrap">
                        {exp.period}
                      </time>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-xs text-neutral-500">
                      <span>Impact</span>
                      <span className="h-[1px] w-10 bg-neutral-800 group-hover:bg-[color:var(--accent)]/60 transition-colors" />
                      <span className="text-neutral-400">Leadership • UI build • Performance</span>
                    </div>
                  </div>
                </div>
              </m.li>
            ))}
          </m.ol>
        </div>
      </section>
    </LazyMotion>
  );
}