"use client";

import Link from "next/link";
import FaceIcon from "@/components/icons/FaceIcon";
import { RESUME_DATA } from "@/data";

export default function Footer() {
  return (
    <footer
      id="about"
      className="w-full bg-[#0f2926] text-[#fffbf1] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="mb-10">
              <FaceIcon />
            </div>

            <h2 className="font-sans font-medium text-[28px] md:text-[36px] leading-[1.2] max-w-xl">
              From collaborating on a cool project to discussing the next big
              thing happening in design, feel free to drop me a line.
            </h2>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-2">
            <div className="h-px w-full bg-[#fffbf1]/20 mb-8 md:hidden"></div>
            <p className="font-display font-bold text-[20px] mb-6">
              Open to receive critique 🤍
            </p>
            <div className="flex gap-8 text-[18px]">
              <a
                href={`mailto:${RESUME_DATA.personalInfo.email}`}
                className="border-b-2 border-[#fffbf1] hover:text-gray-300 transition-colors"
              >
                Email
              </a>
              <a
                href={RESUME_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-b-2 border-[#fffbf1] hover:text-gray-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={RESUME_DATA.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="border-b-2 border-[#fffbf1] hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-[#fffbf1]/10 pt-8">
          <p className="text-[12px] opacity-60 font-sans tracking-wide">
            © Copyright {new Date().getFullYear()} {RESUME_DATA.personalInfo.name}
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-btnBlue rounded-[10px] flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg group cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:animate-bounce"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
