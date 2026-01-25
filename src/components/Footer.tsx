import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white tracking-tight">Devika Dileep</p>
          <p className="text-xs text-neutral-600 mt-1">Frontend Developer • Kollam, Kerala</p>
        </div>

        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/Devika123098"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" width={24} />
          </a>
          <a
            href="https://linkedin.com/in/devika-dileep-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" width={24} />
          </a>
          <a
            href="mailto:devikadileep39@gmail.com"
            className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full"
            aria-label="Email"
          >
            <Icon icon="solar:letter-linear" width={24} />
          </a>
        </div>

        <div className="text-[10px] text-neutral-700 font-mono">© 2026 Devika Dileep. Built with Next.js & Tailwind.</div>
      </div>
    </footer>
  );
}