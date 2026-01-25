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

type Project = {
  id: number;
  icon: string;
  badge: string;
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  accent: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    icon: "solar:laptop-minimalistic-linear",
    badge: "Freelance",
    title: "Waitlist Website",
    description:
      "Responsive waitlist website for Integrion with clean UI, strong performance, and conversion-focused layout.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/IntegrionHQ/website-v1",
    accent: "#22c55e",
    featured: true,
  },
  {
    id: 2,
    icon: "solar:card-search-linear",
    badge: "Freelance",
    title: "MoniMind Web App",
    description:
      "Converted Figma into a responsive, user-friendly UI with consistent design system and clean components.",
    tech: ["React", "Tailwind CSS"],
    repo: "https://github.com/Devika123098/monimind-frontend",
    accent: "#a855f7",
  },
  {
    id: 3,
    icon: "solar:shield-check-linear",
    badge: "Major Project",
    title: "Smart Voting System",
    description:
      "Secure online voting platform using face recognition verification with OpenCV-powered authentication.",
    tech: ["Django", "Tailwind", "OpenCV"],
    repo: "https://github.com/Devika123098/smart-voting",
    accent: "#60a5fa",
  },
  {
    id: 4,
    icon: "solar:palette-linear",
    badge: "UI/UX",
    title: "Advyka Tech Fest",
    description:
      "Designed UI in Figma and developed the frontend for a college technical festival website.",
    tech: ["Figma", "React", "Tailwind"],
    repo: "https://github.com/Devika123098/advyka2",
    accent: "#e5e7eb",
  },
  {
    id: 5,
    icon: "solar:chat-round-dots-linear",
    badge: "AI Experiment",
    title: "GenZ Chatbot",
    description:
      "Gen Z slang chatbot with celebrity gossip. Built with Flask and Gemini AI API integration.",
    tech: ["HTML/CSS", "Flask", "Gemini AI"],
    repo: "https://github.com/Devika123098/GenZ-ChatBot",
    accent: "#fb923c",
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

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-[11px] font-medium text-neutral-200">
      {label}
    </span>
  );
}

function ProjectCard({
  p,
  motionEnabled,
  item,
  enableHover,
}: {
  p: Project;
  motionEnabled: boolean;
  item: Variants;
  enableHover: boolean;
}) {
  return (
    <m.article
      variants={motionEnabled ? item : undefined}
      whileHover={motionEnabled && enableHover ? { y: -6 } : undefined}
      transition={
        motionEnabled && enableHover
          ? { type: "spring", stiffness: 260, damping: 22 }
          : undefined
      }
      style={{ ["--accent" as any]: p.accent }}
      className="group relative"
    >
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-neutral-800/80 to-neutral-900/30">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/50 p-6 backdrop-blur transition-colors duration-300 group-hover:border-[color:var(--accent)]/40">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-[60px] opacity-0 group-hover:opacity-25 transition-opacity"
            style={{ background: "var(--accent)" }}
          />

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-white">
                <Icon icon={p.icon} width={20} height={20} />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {p.badge}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-200 hover:border-neutral-600 transition-colors"
              >
                Repo
                <Icon
                  icon="solar:arrow-right-up-linear"
                  width={14}
                  height={14}
                  className="text-neutral-400 group-hover:text-[color:var(--accent)] transition-colors"
                />
              </a>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-200 hover:border-neutral-600 transition-colors"
                >
                  Live
                  <Icon
                    icon="solar:link-minimalistic-2-linear"
                    width={14}
                    height={14}
                  />
                </a>
              )}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <h4 className="text-xl font-semibold tracking-tight text-white">
              {p.title}
            </h4>

            <p className="text-sm leading-relaxed text-neutral-400">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {p.tech.map((t) => (
                <TechChip key={t} label={t} />
              ))}
            </div>

            <div className="pt-3">
              <span className="inline-flex items-center gap-2 text-xs text-neutral-500">
                Explore details
                <span className="h-[1px] w-10 bg-neutral-800 group-hover:bg-[color:var(--accent)]/60 transition-colors" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </m.article>
  );
}

export default function Projects() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile(768);
  const motionEnabled = !reducedMotion;
  const { container, item } = useMemo(() => {
    const y = isMobile ? 8 : 14;
    const duration = isMobile ? 0.35 : 0.55;
    const stagger = isMobile ? 0.03 : 0.06;

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

    return { container, item };
  }, [isMobile]);

  const enableHover = !isMobile; 

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#050505] py-24 lg:py-32 border-t border-neutral-900"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-neutral-900 pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
                <span className="h-[1px] w-8 bg-emerald-500" />
                <span>Selected Work</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Projects that show how I build
              </h3>
              <p className="text-sm text-neutral-400 max-w-xl">
                Freelance and academic work focused on performance, clean UI systems, and strong UX.
              </p>
            </div>

            <a
              href="https://github.com/Devika123098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              View GitHub{" "}
              <Icon icon="solar:arrow-right-up-linear" width={14} height={14} />
            </a>
          </div>

          <div className="mt-10 space-y-6">
            {featured && (
              <m.div
                variants={item}
                initial={motionEnabled ? "hidden" : false}
                whileInView={motionEnabled ? "show" : undefined}
                viewport={
                  motionEnabled ? { once: true, amount: isMobile ? 0.15 : 0.2 } : undefined
                }
              >
                <ProjectCard
                  p={featured}
                  motionEnabled={motionEnabled}
                  item={item}
                  enableHover={enableHover}
                />
              </m.div>
            )}

            <m.div
              variants={motionEnabled ? container : undefined}
              initial={motionEnabled ? "hidden" : false}
              whileInView={motionEnabled ? "show" : undefined}
              viewport={
                motionEnabled ? { once: true, amount: isMobile ? 0.12 : 0.18 } : undefined
              }
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {rest.map((p) => (
                <ProjectCard
                  key={p.id}
                  p={p}
                  motionEnabled={motionEnabled}
                  item={item}
                  enableHover={enableHover}
                />
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}