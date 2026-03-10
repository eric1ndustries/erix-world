const influences = [
  {
    type: "Book", name: "Ways of Seeing", author: "John Berger", num: "01",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="6" width="24" height="30" stroke="#f0ece4" strokeWidth="0.8" />
        <line x1="4" y1="14" x2="28" y2="14" stroke="#8C1E77" strokeWidth="0.6" />
        <line x1="8" y1="20" x2="24" y2="20" stroke="#f0ece4" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="24" x2="20" y2="24" stroke="#f0ece4" strokeWidth="0.4" opacity="0.4" />
      </svg>
    ),
  },
  {
    type: "Album", name: "My Beautiful Dark Twisted Fantasy", author: "Kanye West", num: "02",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#f0ece4" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="4" stroke="#8C1E77" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="1.5" fill="#f0ece4" />
      </svg>
    ),
  },
  {
    type: "Film", name: "Koyaanisqatsi", author: "Godfrey Reggio", num: "03",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="5" width="30" height="22" stroke="#f0ece4" strokeWidth="0.8" />
        <polygon points="16,11 16,21 27,16" stroke="#8C1E77" strokeWidth="0.8" fill="none" />
        <line x1="5" y1="30" x2="35" y2="30" stroke="#f0ece4" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="34" x2="28" y2="34" stroke="#f0ece4" strokeWidth="0.4" opacity="0.4" />
      </svg>
    ),
  },
  {
    type: "Exhibition", name: "Form & Object", author: "Bauhaus Archive", num: "04",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M8 32 L8 8 L32 8" stroke="#f0ece4" strokeWidth="0.8" />
        <path d="M8 24 L18 14 L24 20 L30 10" stroke="#8C1E77" strokeWidth="0.8" fill="none" />
        <circle cx="30" cy="10" r="2" fill="#8C1E77" />
      </svg>
    ),
  },
  {
    type: "Designer", name: "Virgil Abloh", author: "Off-White / LV", num: "05",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M20 6 L34 28 L6 28 Z" stroke="#f0ece4" strokeWidth="0.8" fill="none" />
        <path d="M20 14 L28 28 L12 28 Z" stroke="#8C1E77" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
];

export default function Influences() {
  return (
    <section className="px-10 py-28 bg-ink" id="influences">
      <p className="section-label reveal font-mono text-[9px] tracking-[0.35em] uppercase text-bone/40 mb-0 flex items-center gap-4
        after:flex-1 after:h-px after:bg-bone/20">
        Influences
      </p>

      <div className="grid grid-cols-5 gap-[1px] bg-white/5 border border-white/5 mt-12 reveal">
        {influences.map((item) => (
          <div
            key={item.num}
            className="relative bg-ink px-6 py-8 flex flex-col gap-4 hoverable cursor-none
              hover:bg-white/5 transition-colors duration-300 group"
          >
            <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.2em] text-bone/20">
              {item.num}
            </span>
            {item.icon}
            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-bone/40">{item.type}</span>
            <span className="font-display text-xl tracking-wide text-bone leading-tight">{item.name}</span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-bone/40">{item.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
