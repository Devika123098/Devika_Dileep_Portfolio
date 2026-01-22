export default function FaceIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="#fffbf1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="40" cy="40" r="35" />
      {/* Bangs */}
      <path d="M20 30 Q40 20 60 30" />
      {/* Bun */}
      <circle cx="40" cy="15" r="8" fill="#0f2926" />
      {/* Glasses */}
      <circle cx="30" cy="45" r="8" />
      <circle cx="50" cy="45" r="8" />
      <line x1="38" y1="45" x2="42" y2="45" />
      {/* Smile */}
      <path d="M35 60 Q40 65 45 60" />
    </svg>
  );
}
