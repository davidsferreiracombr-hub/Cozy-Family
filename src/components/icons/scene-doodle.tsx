export function SceneDoodle() {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 opacity-95"
    >
      <g
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="14" y="20" width="36" height="26" rx="6" />
        <path d="M20 30h24M20 36h24" />
      </g>
    </svg>
  );
}
