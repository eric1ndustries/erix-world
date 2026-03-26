const objects = [
  {
    name: "Archive Tee",
    price: "$48 USD",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path
          d="M18 14 L6 26 L18 32 L18 60 L54 60 L54 32 L66 26 L54 14 L44 20 C42 25 30 25 28 20 Z"
          stroke="#1c1208" strokeWidth="0.8" fill="none"
        />
        <circle cx="36" cy="42" r="7"  stroke="#c17f3a" strokeWidth="0.6" />
        <line x1="36" y1="35" x2="36" y2="49" stroke="#c17f3a" strokeWidth="0.4" />
        <line x1="29" y1="42" x2="43" y2="42" stroke="#c17f3a" strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    name: '7" Print',
    price: "$120 USD",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <rect x="8"  y="8"  width="56" height="56" stroke="#1c1208" strokeWidth="0.8" fill="none" />
        <circle cx="36" cy="36" r="20" stroke="#1c1208" strokeWidth="0.5" fill="none" />
        <circle cx="36" cy="36" r="12" stroke="#c17f3a" strokeWidth="0.5" fill="none" />
        <circle cx="36" cy="36" r="4"  stroke="#1c1208" strokeWidth="0.5" fill="none" />
        <circle cx="36" cy="36" r="1.5" fill="#1c1208" />
      </svg>
    ),
  },
  {
    name: "Zine Vol. I",
    price: "$28 USD",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <rect x="10" y="8"  width="34" height="46" stroke="#1c1208" strokeWidth="0.8" fill="none" />
        <rect x="28" y="12" width="34" height="46" stroke="#1c1208" strokeWidth="0.5" fill="#d4c9b0" />
        <line x1="32" y1="24" x2="56" y2="24" stroke="#c17f3a" strokeWidth="0.7" />
        <line x1="32" y1="32" x2="54" y2="32" stroke="#1c1208" strokeWidth="0.3" opacity="0.4" />
        <line x1="32" y1="38" x2="50" y2="38" stroke="#1c1208" strokeWidth="0.3" opacity="0.4" />
        <line x1="32" y1="44" x2="52" y2="44" stroke="#1c1208" strokeWidth="0.3" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Objects() {
  return (
    <section className="section-padding bg-aged" id="objects">

      {/* Section header */}
      <div className="flex justify-between items-baseline border-b border-ink/15 pb-4 mb-14 reveal">
        <h2 className="font-display italic text-ink text-4xl" style={{ fontWeight: 400 }}>
          Objects
        </h2>
        <span className="font-mono text-[9px] tracking-[0.25em] text-faded/50">
          00{objects.length} Items
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[3px] reveal">
        {objects.map((item) => (
          <div
            key={item.name}
            className="relative flex flex-col items-center gap-5 px-8 py-12 bg-paper
              overflow-hidden cursor-none hoverable group
              transition-colors duration-300 hover:bg-label"
          >
            {/* Amber top rule — slides in on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber
              scale-x-0 group-hover:scale-x-100 transition-transform duration-500
              origin-left" />

            {item.icon}

            <span className="font-display italic text-ink text-center"
              style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400 }}>
              {item.name}
            </span>

            <span className="font-mono text-[10px] tracking-[0.2em] text-faded">
              {item.price}
            </span>

            <button
              className="mt-2 font-mono text-[8px] tracking-[0.3em] uppercase
                border border-ink/25 px-6 py-2.5 bg-transparent text-ink
                hover:bg-ink hover:text-paper hover:border-ink
                transition-all duration-200 cursor-none"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
