const tracks = [
  { side: "A1", title: "Visual Systems"  },
  { side: "A2", title: "Digital Release" },
  { side: "A3", title: "Merch Drop"      },
  { side: "B1", title: "Editorial"       },
  { side: "B2", title: "Sound & Image"   },
  { side: "B3", title: "Influences"      },
];

export default function Marquee() {
  const doubled = [...tracks, ...tracks];

  return (
    <div className="border-t border-b border-ink/10 py-3 overflow-hidden bg-ink">
      <div className="tracklist-inner flex whitespace-nowrap">
        {doubled.map((track, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-mono text-[9px] tracking-[0.2em] text-amber/70 px-3">
              {track.side}
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-aged/60 pr-8">
              — {track.title}
            </span>
            <span className="text-amber/50 pr-8">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}