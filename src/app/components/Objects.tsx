const objects = [
  {
    name: "ARCHIVE TEE", price: "$48 USD",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
        <path d="M20 16 L8 28 L20 34 L20 64 L60 64 L60 34 L72 28 L60 16 L50 22 C48 26 32 26 30 22 Z"
          stroke="#f0ece4" strokeWidth="1" fill="none" />
        <circle cx="40" cy="44" r="6" stroke="#8C1E77" strokeWidth="0.8" />
        <line x1="40" y1="38" x2="40" y2="50" stroke="#8C1E77" strokeWidth="0.5" />
        <line x1="34" y1="44" x2="46" y2="44" stroke="#8C1E77" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    name: "GRID PRINT", price: "$120 USD",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="12" width="56" height="56" stroke="#f0ece4" strokeWidth="1" />
        <rect x="20" y="20" width="40" height="40" stroke="#8C1E77" strokeWidth="0.5" fill="none" />
        <circle cx="40" cy="40" r="12" stroke="#f0ece4" strokeWidth="0.8" fill="none" />
        <circle cx="40" cy="40" r="3" fill="#f0ece4" />
      </svg>
    ),
  },
  {
    name: "ZINE VOL.I", price: "$28 USD",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
        <rect x="14" y="10" width="36" height="48" stroke="#f0ece4" strokeWidth="1" />
        <rect x="30" y="14" width="36" height="48" stroke="#f0ece4" strokeWidth="0.5" fill="#0f0f0f" />
        <line x1="34" y1="26" x2="60" y2="26" stroke="#8C1E77" strokeWidth="0.8" />
        <line x1="34" y1="34" x2="58" y2="34" stroke="#f0ece4" strokeWidth="0.4" opacity="0.4" />
        <line x1="34" y1="40" x2="54" y2="40" stroke="#f0ece4" strokeWidth="0.4" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Objects() {
  return (
    <section className="px-10 py-28 bg-ink" id="objects">
      <p className="section-label reveal font-mono text-[9px] tracking-[0.35em] uppercase text-bone/40 mb-12 flex items-center gap-4
        after:flex-1 after:h-px after:bg-bone/20">
        Objects
      </p>

      <div className="grid grid-cols-3 gap-[2px] reveal">
        {objects.map((item) => (
          <div
            key={item.name}
            className="border border-bone/10 px-8 py-12 flex flex-col items-center gap-6
              hover:border-bone/40 hover:bg-bone/5 transition-all duration-300 hoverable cursor-none"
          >
            {item.icon}
            <span className="font-display text-3xl tracking-wide text-bone text-center">{item.name}</span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-bone/50">{item.price}</span>
            <button className="font-mono text-[9px] tracking-[0.3em] uppercase border border-bone/30 px-6 py-2.5
              hover:bg-bone hover:text-ink transition-all duration-200 hoverable cursor-none">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
