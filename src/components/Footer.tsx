import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white tracking-tight">
              Devika Dileep
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              Frontend Developer • Kollam, Kerala
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/Devika123098"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" width={22} />
            </a>
            <a
              href="https://linkedin.com/in/devika-dileep-/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" width={22} />
            </a>
            <a
              href="mailto:devikadileep39@gmail.com"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
              aria-label="Email"
            >
              <Icon icon="solar:letter-linear" width={22} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-900 pt-6 text-center text-[10px] font-mono leading-relaxed text-neutral-700">
          © 2026 Devika Dileep. Built with Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
}