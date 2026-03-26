import Link from "next/link";

const records = [
  {
    slug:   "visual-systems",
    side:   "Side A — 001",
    title:  "Visual\nSystems",
    meta:   "Brand Identity / 2024",
    bg:     "#2a1e10",
    span:   "col-span-5 h-[440px]",
    shape: (
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.12 }}
        viewBox="0 0 300 440" preserveAspectRatio="xMidYMid slice">
        <circle cx="150" cy="220" r="160" stroke="#e8d5a3" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="220" r="100" stroke="#c17f3a" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="220" r="40"  stroke="#e8d5a3" strokeWidth="0.5" fill="none"/>
        <line x1="0"   y1="220" x2="300" y2="220" stroke="#e8d5a3" strokeWidth="0.3"/>
        <line x1="150" y1="0"   x2="150" y2="440" stroke="#e8d5a3" strokeWidth="0.3"/>
      </svg>
    ),
  },
  {
    slug:   "digital-release",
    side:   "Side A — 002",
    title:  "Digital\nRelease",
    meta:   "Art Direction / 2024",
    bg:     "#1a1e2a",
    span:   "col-span-4 h-[440px]",
    shape: (
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.12 }}
        viewBox="0 0 240 440" preserveAspectRatio="xMidYMid slice">
        <rect x="20" y="60" width="200" height="320" stroke="#e8d5a3" strokeWidth="0.5" fill="none" transform="rotate(8 120 220)"/>
        <rect x="40" y="100" width="160" height="240" stroke="#c17f3a" strokeWidth="0.5" fill="none" transform="rotate(-5 120 220)"/>
      </svg>
    ),
  },
  {
    slug:   "merch-drop",
    side:   "Side A — 003",
    title:  "Merch\nDrop",
    meta:   "Product / 2023",
    bg:     "#1a2a1e",
    span:   "col-span-3 h-[440px]",
    shape: (
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.12 }}
        viewBox="0 0 180 440" preserveAspectRatio="xMidYMid slice">
        <polygon points="90,20 170,420 10,420"   stroke="#e8d5a3" strokeWidth="0.5" fill="none"/>
        <polygon points="90,80 148,380 32,380"   stroke="#c17f3a" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    slug:   "editorial",
    side:   "Side B — 001",
    title:  "Editorial",
    meta:   "Photography / Layout / 2023",
    bg:     "#2a1010",
    span:   "col-span-7 h-[320px]",
    shape: (
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.10 }}
        viewBox="0 0 560 320" preserveAspectRatio="xMidYMid slice">
        <path d="M0 160 Q140 40 280 160 T560 160"  stroke="#e8d5a3" strokeWidth="0.6" fill="none"/>
        <path d="M0 160 Q140 280 280 160 T560 160" stroke="#c17f3a" strokeWidth="0.6" fill="none"/>
        <path d="M0 100 Q140 20 280 100 T560 100"  stroke="#e8d5a3" strokeWidth="0.3" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    slug:   "sound-and-image",
    side:   "Side B — 002",
    title:  "Sound &\nImage",
    meta:   "Multimedia / 2023",
    bg:     "#1e1a10",
    span:   "col-span-5 h-[320px]",
    shape: (
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.10 }}
        viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
        <line x1="0"   y1="0"   x2="400" y2="320" stroke="#e8d5a3" strokeWidth="0.5"/>
        <line x1="400" y1="0"   x2="0"   y2="320" stroke="#c17f3a" strokeWidth="0.5"/>
        <circle cx="200" cy="160" r="100" stroke="#e8d5a3" strokeWidth="0.4" fill="none"/>
        <circle cx="200" cy="160" r="60"  stroke="#c17f3a" strokeWidth="0.4" fill="none"/>
      </svg>
    ),
  },
];

export default function Collection() {
  return (
    <section className="section-padding" id="collection">

      {/* Section header */}
      <div className="flex justify-between items-baseline border-b border-ink/10 pb-4 mb-14 reveal">
        <h2 className="font-display italic text-ink text-4xl" style={{ fontWeight: 400 }}>
          The Records
        </h2>
        <span className="font-mono text-[9px] tracking-[0.25em] text-faded/50">
          00{records.length} Entries
        </span>
      </div>

      {/* Crate grid */}
      <div className="grid grid-cols-12 gap-[3px] reveal">
        {records.map((rec) => (
          <Link
            key={rec.slug}
            href={`/records/${rec.slug}`}
            className={`relative overflow-hidden group cursor-none ${rec.span}`}
            style={{ background: rec.bg }}
          >
            {/* Abstract SVG */}
            {rec.shape}

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(to top, rgba(28,18,8,0.85) 0%, rgba(28,18,8,0.1) 55%, transparent 100%)" }}
            />

            {/* Hover pill */}
            <div className="absolute top-4 right-4 z-20 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <svg width="80" height="28" viewBox="0 0 80 28">
                <rect x="0.5" y="0.5" width="79" height="27" rx="13.5"
                  stroke="#e8d5a3" strokeOpacity="0.4" fill="rgba(28,18,8,0.5)"/>
                <text x="40" y="18" textAnchor="middle"
                  fontFamily="DM Mono, monospace" fontSize="7" letterSpacing="2"
                  fill="#e8d5a3" opacity="0.8">
                  VIEW
                </text>
              </svg>
            </div>

            {/* Card content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-amber/80 mb-1.5">
                {rec.side}
              </p>
              <h3
                className="font-display text-paper leading-none mb-2.5 transition-colors duration-300 group-hover:text-label"
                style={{ fontSize: "clamp(20px, 2.8vw, 36px)", fontWeight: 400 }}
              >
                {rec.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h3>
              <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-aged/50">
                {rec.meta}
              </p>
            </div>

            {/* Subtle scale on hover */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03] z-0"
              style={{ background: rec.bg }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}