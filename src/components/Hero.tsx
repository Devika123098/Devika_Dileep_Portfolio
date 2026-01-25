"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  Variants,
} from "framer-motion";

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const fadeUp: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: reduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
  };

  return (
    <LazyMotion features={domAnimation}>
      <header className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] pt-32 md:pt-40 lg:pt-44">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03] invert"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] opacity-30 motion-safe:animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <m.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <m.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-emerald-500/50" />
              <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase">
                Architecture & Code
              </span>
            </m.div>

            <m.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]"
            >
              Designing <br />
              <span className="text-neutral-500 italic font-light">Digital</span> <br />
              Structures
            </m.h1>

            <m.p
              variants={fadeUp}
              className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-light"
            >
              I&apos;m{" "}
              <span className="text-white font-medium underline underline-offset-8 decoration-emerald-500/30">
                Devika Dileep
              </span>
              . A frontend developer building high-performance interfaces with an
              architect&apos;s eye for detail.
            </m.p>

            <m.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 items-center pt-4"
            >
              <div className="flex gap-4">
                {[
                  { icon: "mdi:github", href: "https://github.com/Devika123098" },
                  {
                    icon: "mdi:linkedin",
                    href: "https://linkedin.com/in/devika-dileep-/",
                  },
                  {
                    icon: "solar:letter-linear",
                    href: "mailto:devikadileep39@gmail.com",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:border-emerald-500/50 hover:text-white transition-all duration-300"
                  >
                    <Icon icon={social.icon} width={22} />
                  </a>
                ))}
              </div>
            </m.div>
          </m.div>
          <m.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[3/4] group">
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t border-r border-emerald-500/40 z-20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b border-l border-emerald-500/40 z-20" />

              <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-sm border border-neutral-800">
                <Image
                  src="/devika_dileep.webp"
                  alt="Devika Dileep"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute bottom-0 right-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] mb-2">
                    Portfolio 2026
                  </p>
                  <h3 className="text-white text-2xl font-light italic">
                    Kerala, IN
                  </h3>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </header>
    </LazyMotion>
  );
};

export default Hero;
