export function AmbientSilk() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[var(--color-canvas)]"
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="silk-app-peach" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fbe2d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fde9d9" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="silk-app-mint" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d7ebe1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e7f0ec" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="silk-app-sky" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d9e6ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e4ecf3" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="silk-app-cream" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f9f1e3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f4ebd9" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Peach ribbon — top */}
        <g className="ribbon-a" style={{ mixBlendMode: "multiply" }}>
          <path
            d="M-200 120 C 320 40, 720 220, 1120 110 C 1340 50, 1560 150, 1700 80 L 1700 320 C 1340 400, 980 280, 660 360 C 380 430, 100 320, -200 380 Z"
            fill="url(#silk-app-peach)"
          />
        </g>

        {/* Mint ribbon — upper middle */}
        <g className="ribbon-b" style={{ mixBlendMode: "multiply" }}>
          <path
            d="M-200 280 C 380 220, 760 400, 1180 300 C 1380 250, 1560 340, 1700 290 L 1700 520 C 1380 600, 1020 460, 700 540 C 420 600, 120 500, -200 560 Z"
            fill="url(#silk-app-mint)"
          />
        </g>

        {/* Sky ribbon — lower middle */}
        <g className="ribbon-c" style={{ mixBlendMode: "multiply" }}>
          <path
            d="M-200 460 C 340 400, 760 580, 1200 470 C 1400 420, 1560 510, 1700 470 L 1700 720 C 1380 780, 1000 640, 700 720 C 420 780, 120 680, -200 740 Z"
            fill="url(#silk-app-sky)"
          />
        </g>

        {/* Cream highlight — top sheen */}
        <g
          className="ribbon-a"
          style={{ mixBlendMode: "screen", animationDuration: "26s" }}
        >
          <path
            d="M-200 60 C 360 0, 760 140, 1180 60 C 1380 20, 1560 110, 1700 50 L 1700 200 C 1340 260, 1020 180, 720 220 C 440 260, 140 200, -200 240 Z"
            fill="url(#silk-app-cream)"
          />
        </g>

        {/* Bottom warm wash */}
        <g
          className="ribbon-b"
          style={{ mixBlendMode: "multiply", animationDuration: "30s" }}
        >
          <path
            d="M-200 720 C 320 660, 700 820, 1100 730 C 1340 680, 1540 760, 1700 720 L 1700 1000 L -200 1000 Z"
            fill="url(#silk-app-peach)"
          />
        </g>
      </svg>

      {/* Soft top and bottom vignette so content reads cleanly */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-canvas)]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)]/60 to-transparent" />
    </div>
  );
}
