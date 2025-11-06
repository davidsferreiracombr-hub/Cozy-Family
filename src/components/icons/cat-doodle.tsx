export function CatDoodle() {
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
        <path d="M19 26c0-6 3-12 13-12s13 6 13 12" />
        <path d="M13 46c0-9 6-16 18-16s18 7 18 16v4H13v-4z" />
        <path d="M24 51v4M40 51v4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
