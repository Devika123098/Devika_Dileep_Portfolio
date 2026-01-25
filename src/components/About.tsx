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

type TechItem = { name: string; icon: string };

const techCategories: Record<"languages" | "frameworks" | "tools", TechItem[]> = {
  languages: [
    { name: "Python", icon: "logos:python" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "C", icon: "logos:c" },
    { name: "PHP", icon: "logos:php" },
  ],
  frameworks: [
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  ],
  tools: [
    { name: "Figma", icon: "logos:figma" },
    { name: "VS Code", icon: "logos:visual-studio-code" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "mdi:github" },
    { name: "MySQL", icon: "logos:mysql" },
  ],
};

const categoryMeta = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks & Libraries" },
  { key: "tools", label: "Tools & Platforms" },
] as const;
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

export default function About() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile(768);

  const motionEnabled = useMemo(() => !(reduced || isMobile), [reduced, isMobile]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const initialState = motionEnabled ? "hidden" : "show";

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="relative overflow-hidden border-t border-neutral-900 bg-[#050505] py-24 lg:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:gap-20">
          <m.div
            variants={fadeUp}
            initial={initialState}
            whileInView={motionEnabled ? "show" : undefined}
            animate={!motionEnabled ? "show" : undefined}
            viewport={motionEnabled ? { once: true, amount: 0.35 } : undefined}
            className="w-full lg:w-[45%] space-y-8"
          >
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-[1px] w-8 bg-emerald-500" />
              <span>About</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
                Final‑year CS student crafting{" "}
                <span className="text-neutral-400">responsive</span>,<br />
                <span className="text-neutral-500">frontend architecture.</span>
              </h2>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
                Experienced in converting Figma designs into high‑performance frontend solutions using
                modern technologies. I focus on clean code, thoughtful motion, and{" "}
                <span className="text-neutral-200">accessible, user‑first interfaces</span> that feel
                as good as they look.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 text-xs text-neutral-300">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Focus</p>
                <p className="mt-1 font-medium text-neutral-100">
                  Frontend architecture & interaction design
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Currently</p>
                <p className="mt-1 font-medium text-neutral-100">
                  Final‑year CS · Building with Next.js & Tailwind
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 text-sm text-neutral-300">
              {[
                "Translate product ideas and Figma files into production‑ready UIs.",
                "Design component systems that scale across pages and features.",
                "Obsessed with micro‑interactions, performance, and accessibility.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="mt-[2px] text-emerald-400"
                    width={18}
                  />
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </m.div>
          <m.div
            variants={fadeUp}
            initial={initialState}
            whileInView={motionEnabled ? "show" : undefined}
            animate={!motionEnabled ? "show" : undefined}
            viewport={motionEnabled ? { once: true, amount: 0.25 } : undefined}
            className="w-full lg:w-[55%]"
          >
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur">
              <div className="flex items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                <div className="space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
                    Tech Stack
                  </p>
                  <p className="text-xs text-neutral-400">
                    Tools I use to design, build, and ship frontend experiences.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/40">
                  <Icon icon="solar:code-circle-linear" width={20} />
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {categoryMeta.map((category) => (
                  <div
                    key={category.key}
                    className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 transition-colors hover:border-emerald-500/50"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                        {category.label}
                      </p>
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        className="text-neutral-600 group-hover:text-emerald-400 transition-colors"
                        width={16}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {techCategories[category.key].map((tech) => (
                        <div
                          key={tech.name}
                          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-[11px] font-medium text-neutral-200 shadow-sm transition-transform duration-200 group-hover:translate-y-[-1px]"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900">
                            <Icon icon={tech.icon} width={14} />
                          </span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Always learning · Currently exploring animation & 3D UI.</span>
                <span className="hidden sm:inline text-emerald-400/80">
                  Prefer clean, composable React over one‑off hacks.
                </span>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}