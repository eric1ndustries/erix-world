const items = ["Digital Media", "Merchandise", "Influences", "Visual Culture", "Case Studies", "Archive"];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-t border-b border-bone/10 py-3 overflow-hidden bg-ink">
      <div className="marquee-track flex whitespace-nowrap gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display text-[13px] tracking-[0.25em] text-bone/70 px-10 uppercase">
              {item}
            </span>
            <span className="text-accent px-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
