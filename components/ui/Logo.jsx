export default function Logo({ className = '', showWord = true, compact = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="leafA" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399" />
            <stop offset="1" stopColor="#2E90FA" />
          </linearGradient>
        </defs>
        {/* upper leaf */}
        <path
          d="M24 6C13 9 7 17 7 27c10-1 17-7 17-21Z"
          stroke="url(#leafA)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* lower leaf */}
        <path
          d="M9 31c9 8 20 6 30-1-9-6-22-7-30 1Z"
          stroke="url(#leafA)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="2.2" fill="#34D399" />
      </svg>
      {showWord && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-fg">
            MARK POTENTIA
          </span>
          {!compact && (
            <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.28em] text-fg-dim">
              Power Infrastructure
            </span>
          )}
        </span>
      )}
    </span>
  );
}
