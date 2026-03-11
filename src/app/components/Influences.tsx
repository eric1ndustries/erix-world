import ShelfItem from "./ShelfItem";

const influences = [
  {
    num: "1",
    type: "Book",
    name: "Ways of Seeing",
    author: "John Berger",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="4" width="22" height="28" stroke="#e8d5a3" strokeWidth="0.7" opacity="0.5" />
        <line x1="3" y1="11" x2="25" y2="11" stroke="#c17f3a" strokeWidth="0.6" />
        <line x1="6" y1="17" x2="22" y2="17" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.3" />
        <line x1="6" y1="21" x2="18" y2="21" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: "2",
    type: "Record",
    name: "There's a Riot Goin' On",
    author: "Sly & The Family Stone",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#e8d5a3" strokeWidth="0.7" opacity="0.5" />
        <circle cx="18" cy="18" r="8"  stroke="#c17f3a" strokeWidth="0.6" />
        <circle cx="18" cy="18" r="3"  stroke="#e8d5a3" strokeWidth="0.5" />
        <circle cx="18" cy="18" r="1"  fill="#e8d5a3" opacity="0.7" />
      </svg>
    ),
  },
  {
    num: "3",
    type: "Film",
    name: "Bicycle Thieves",
    author: "Vittorio De Sica",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="5" width="28" height="20" stroke="#e8d5a3" strokeWidth="0.7" opacity="0.5" />
        <polygon points="14,10 14,20 24,15" stroke="#c17f3a" strokeWidth="0.7" fill="none" />
        <line x1="3"  y1="28" x2="33" y2="28" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.3" />
        <line x1="6"  y1="32" x2="26" y2="32" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: "4",
    type: "Film",
    name: "A City of Sadness",
    author: "Hou Hsiao-hsien",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="5" width="28" height="20" stroke="#e8d5a3" strokeWidth="0.7" opacity="0.5" />
        <line x1="3"  y1="13" x2="31" y2="13" stroke="#c17f3a" strokeWidth="0.4" opacity="0.6" />
        <line x1="3"  y1="17" x2="31" y2="17" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.2" />
        <line x1="3"  y1="21" x2="31" y2="21" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.2" />
        <line x1="3"  y1="28" x2="33" y2="28" stroke="#e8d5a3" strokeWidth="0.3" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: "5",
    type: "Record",
    name: "Lady in Satin",
    author: "Billie Holiday",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M4 28 L18 6 L32 28 Z"  stroke="#e8d5a3" strokeWidth="0.7" fill="none" opacity="0.5" />
        <path d="M4 28 L18 12 L32 28 Z" stroke="#c17f3a" strokeWidth="0.5" fill="none" />
        <circle cx="18" cy="22" r="3" stroke="#e8d5a3" strokeWidth="0.5" fill="none" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Influences() {
  return (
    <section className="px-12 py-24 bg-ink relative overflow-hidden" id="influences">

      {/* Lined paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(232,224,208,0.03) 40px)",
        }}
      />

      {/* Section header */}
      <div
        className="relative flex justify-between items-baseline border-b pb-4 mb-14 reveal"
        style={{ borderColor: "rgba(232,224,208,0.1)" }}
      >
        <h2 className="font-display italic text-label text-4xl" style={{ fontWeight: 400 }}>
          The Shelf
        </h2>
        <span
          className="font-mono text-[9px] tracking-[0.25em]"
          style={{ color: "rgba(212,201,176,0.4)" }}
        >
          00{influences.length} Entries
        </span>
      </div>

      {/* Shelf grid */}
      <div
        className="relative grid grid-cols-5 gap-[1px] reveal"
        style={{ background: "rgba(232,224,208,0.05)" }}
      >
        {influences.map((item) => (
          <ShelfItem key={item.num} {...item} />
        ))}
      </div>
    </section>
  );
}