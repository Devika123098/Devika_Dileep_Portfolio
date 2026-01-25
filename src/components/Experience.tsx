"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";

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

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
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
        {/* Header */}
        <div className="mb-12 border-b border-neutral-900 pb-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="h-[1px] w-8 bg-emerald-500" />
            <span>Experience</span>
          </div>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Building, leading, and shipping
          </h3>
          <p className="mt-2 text-sm text-neutral-400 max-w-xl">
            Professional history and leadership roles—focused on performance, design fidelity, and clean systems.
          </p>
        </div>
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative space-y-6"
        >
          <div className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-neutral-800 via-neutral-800/60 to-transparent" />

          {experiences.map((exp) => (
            <motion.li
              key={exp.id}
              variants={item}
              style={{ ["--accent" as any]: exp.accent }}
              className="group relative pl-14"
            >
              <div className="absolute left-[10px] top-6">
                <div
                  className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-950"
                  style={{
                    boxShadow: exp.isCurrent ? `0 0 0 6px color-mix(in srgb, var(--accent) 18%, transparent)` : undefined,
                    borderColor: exp.isCurrent ? "color-mix(in srgb, var(--accent) 55%, #3f3f46)" : undefined,
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-white">
                        <Icon icon={exp.icon} width={20} />
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
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}