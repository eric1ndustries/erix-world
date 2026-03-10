export default function Hero() {
  return (
    <section className="h-screen grid grid-rows-[1fr_auto] px-10 pb-10 relative overflow-hidden">
      {/* Floating SVG */}
      <div className="absolute top-1/2 right-[6%] -translate-y-1/2 hero-svg opacity-0">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle
            cx="90" cy="90" r="88"
            stroke="#f0ece4" strokeWidth="0.5"
            strokeDasharray="4 4"
            className="spin"
          />
          <circle cx="90" cy="90" r="60" stroke="#8C1E77" strokeWidth="0.5" />
          <circle cx="90" cy="90" r="3" fill="#f0ece4" />
          <line x1="90" y1="2" x2="90" y2="178" stroke="#f0ece4" strokeWidth="0.3" opacity="0.2" />
          <line x1="2" y1="90" x2="178" y2="90" stroke="#f0ece4" strokeWidth="0.3" opacity="0.2" />
          <text
            x="90" y="94"
            textAnchor="middle"
            fontFamily="Courier Prime"
            fontSize="7"
            letterSpacing="3"
            fill="#f0ece4"
            opacity="0.5"
          >
            CURATED
          </text>
        </svg>
      </div>

      <div /> {/* spacer */}

      {/* Headline */}
      <div className="pb-6 hero-headline opacity-0 translate-y-14">
        <h1 className="font-display leading-[0.9] tracking-tight text-bone"
          style={{ fontSize: "clamp(80px, 16vw, 220px)" }}>
          DIGITAL<br />
          <span className="font-serif italic text-accent"
            style={{ fontSize: "clamp(70px, 14vw, 190px)" }}>
            Archive
          </span>
        </h1>
      </div>

      {/* Sub bar */}
      <div className="flex justify-between items-end border-t border-bone/20 pt-5 hero-sub opacity-0">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase max-w-[280px] leading-relaxed text-bone/60">
          A curated collection of digital media, merchandise &amp; the forces that shaped it.
        </p>
        <p className="font-mono text-[11px] tracking-[0.1em] text-bone/40">VOL. I — 2024</p>
      </div>
    </section>
  );
}
