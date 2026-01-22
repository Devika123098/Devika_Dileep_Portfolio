export default function RibbonLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M24 18 C 24 18, 10 10, 10 20 C 10 30, 22 24, 24 18" fill="currentColor" />
      <path d="M24 18 C 24 18, 38 10, 38 20 C 38 30, 26 24, 24 18" fill="currentColor" />
      <circle cx="24" cy="18" r="3" fill="currentColor" />
      <path d="M24 18 L 14 32 L 20 28 L 24 18" fill="currentColor" />
      <path d="M24 18 L 34 32 L 28 28 L 24 18" fill="currentColor" />
    </svg>
  );
}
