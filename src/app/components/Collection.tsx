import ArrowBtn from "./ArrowBtn";

const cases = [
  {
    num: "001", cat: "Case Study", title: "VISUAL\nSYSTEMS", meta: "Brand Identity / Motion / 2024",
    bg: "#1a1614", span: "col-span-7 row-span-2 h-[520px]",
    shape: (
      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="120" stroke="#f0ece4" strokeWidth="0.5" fill="none" />
        <circle cx="150" cy="150" r="80" stroke="#8C1E77" strokeWidth="0.5" fill="none" />
        <circle cx="150" cy="150" r="40" stroke="#f0ece4" strokeWidth="0.5" fill="none" />
        <line x1="30" y1="150" x2="270" y2="150" stroke="#f0ece4" strokeWidth="0.3" />
        <line x1="150" y1="30" x2="150" y2="270" stroke="#f0ece4" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    num: "002", cat: "Case Study", title: "DIGITAL\nRELEASE", meta: "Art Direction / 2024",
    bg: "#2a1f1a", span: "col-span-5 h-[256px]",
    shape: (
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="20" y="20" width="160" height="160" stroke="#f0ece4" strokeWidth="0.5" fill="none" transform="rotate(15 100 100)" />
        <rect x="40" y="40" width="120" height="120" stroke="#8C1E77" strokeWidth="0.5" fill="none" transform="rotate(30 100 100)" />
      </svg>
    ),
  },
  {
    num: "003", cat: "Case Study", title: "MERCH\nDROP", meta: "Product / Identity / 2023",
    bg: "#141820", span: "col-span-5 h-[262px]",
    shape: (
      <svg width="200" height="200" viewBox="0 0 200 200">
        <polygon points="100,10 190,190 10,190" stroke="#f0ece4" strokeWidth="0.5" fill="none" />
        <polygon points="100,40 165,170 35,170" stroke="#8C1E77" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  },
  {
    num: "004", cat: "Case Study", title: "EDITORIAL", meta: "Photography / Layout / 2023",
    bg: "#0d1a14", span: "col-span-4 h-[300px]",
    shape: (
      <svg width="200" height="200" viewBox="0 0 200 200">
        <line x1="0" y1="0" x2="200" y2="200" stroke="#f0ece4" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="0" y2="200" stroke="#8C1E77" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" stroke="#f0ece4" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  },
  {
    num: "005", cat: "Case Study", title: "SOUND & IMAGE", meta: "Multimedia / Campaign / 2023",
    bg: "#1e1a14", span: "col-span-8 h-[300px]",
    shape: (
      <svg width="400" height="200" viewBox="0 0 400 200">
        <path d="M0 100 Q100 20 200 100 T400 100" stroke="#f0ece4" strokeWidth="0.5" fill="none" />
        <path d="M0 100 Q100 180 200 100 T400 100" stroke="#8C1E77" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  },
];

export default function Collection() {
  return (
    <section className="px-10 py-28" id="collection">
      <p className="section-label reveal font-mono text-[9px] tracking-[0.35em] uppercase text-bone/40 mb-10 flex items-center gap-4
        after:flex-1 after:h-px after:bg-bone/20">
        Selected Work
      </p>

      <div className="grid grid-cols-12 gap-[2px] reveal">
        {cases.map((c) => (
          <div
            key={c.num}
            className={`relative overflow-hidden group hoverable cursor-none ${c.span}`}
            style={{ background: c.bg }}
          >
            {/* Abstract SVG bg */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              {c.shape}
            </div>

            <ArrowBtn />

            <div className="absolute inset-0 flex flex-col justify-end p-7 z-10">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-dust/70 mb-2">
                {c.cat} — {c.num}
              </p>
              <h2 className="font-display text-bone leading-none tracking-wide mb-3"
                style={{ fontSize: "clamp(24px, 3vw, 42px)" }}>
                {c.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="font-mono text-[9px] tracking-[0.2em] text-dust/50">{c.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
