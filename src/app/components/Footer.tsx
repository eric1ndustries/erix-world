export default function Footer() {
  return (
    <footer
      className="bg-ink px-12 py-16 grid grid-cols-3 items-end border-t"
      style={{ borderColor: "rgba(232,224,208,0.08)" }}
    >
      {/* Ghost wordmark */}
      <span
        className="font-display italic leading-none select-none"
        style={{ fontSize: 52, color: "rgba(232,224,208,0.07)", fontWeight: 400 }}
        aria-hidden
      >
        Erix<br />World
      </span>

      {/* Centre ornament */}
      <div className="flex flex-col items-center gap-4">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle
            cx="24" cy="24" r="22"
            stroke="#e8d5a3" strokeWidth="0.4"
            strokeDasharray="3 3"
            className="spin-slow"
          />
          <circle cx="24" cy="24" r="14" stroke="#c17f3a" strokeWidth="0.4" />
          <circle cx="24" cy="24" r="2"  fill="#e8d5a3" opacity="0.4" />
        </svg>
        <p className="font-mono text-[8px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(232,224,208,0.2)" }}>
          Cat. No. EW-001
        </p>
      </div>

      {/* Right copy */}
      <div className="text-right font-mono text-[8px] tracking-[0.2em] leading-[2.4]"
        style={{ color: "rgba(232,224,208,0.25)" }}>
        <p>© 2024 Erix World</p>
        <p>All Rights Reserved</p>
        <p className="mt-2" style={{ opacity: 0.5 }}>Built with intention.</p>
      </div>
    </footer>
  );
}
