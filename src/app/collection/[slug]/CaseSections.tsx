import { Section } from "../../../lib/cases";

function TextSection({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="reveal py-16 border-b border-bone/10">
      <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-accent mb-6">{heading}</p>
      <p className="font-serif italic text-bone/70 leading-relaxed" style={{ fontSize: "clamp(16px, 1.6vw, 22px)" }}>
        {body}
      </p>
    </div>
  );
}

function StatRow({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="reveal py-16 border-b border-bone/10 grid grid-cols-4 gap-px bg-bone/5">
      {stats.map((s) => (
        <div key={s.label} className="bg-ink px-6 py-8 flex flex-col gap-3">
          <span className="font-display text-bone" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
            {s.value}
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-bone/40">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function ImageFull({ caption, accent }: { caption: string; accent: string }) {
  return (
    <div className="reveal py-6 border-b border-bone/10">
      {/* Placeholder canvas — swap for next/image */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center"
        style={{ height: "clamp(300px, 55vw, 680px)", background: accent }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-10">
          <circle cx="100" cy="100" r="90" stroke="#f0ece4" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="55" stroke="#8C1E77" strokeWidth="0.5" fill="none" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="#f0ece4" strokeWidth="0.3" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#f0ece4" strokeWidth="0.3" />
        </svg>
        {/* Replace this div with: <Image src={...} fill alt={caption} className="object-cover" /> */}
        <span className="absolute bottom-4 right-4 font-mono text-[8px] tracking-[0.2em] text-bone/20 uppercase">
          Add Image Here
        </span>
      </div>
      <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone/30 mt-4">{caption}</p>
    </div>
  );
}

function ImageSplit({ caption1, caption2, accent1, accent2 }: {
  caption1: string; caption2: string; accent1: string; accent2: string;
}) {
  return (
    <div className="reveal py-6 border-b border-bone/10 grid grid-cols-2 gap-2">
      {[{ c: caption1, a: accent1 }, { c: caption2, a: accent2 }].map(({ c, a }, i) => (
        <div key={i}>
          <div
            className="w-full flex items-center justify-center relative overflow-hidden"
            style={{ height: "clamp(200px, 30vw, 420px)", background: a }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-10">
              <rect x="10" y="10" width="80" height="80" stroke="#f0ece4" strokeWidth="0.5" fill="none" transform={`rotate(${i * 20} 50 50)`} />
              <circle cx="50" cy="50" r="30" stroke="#8C1E77" strokeWidth="0.5" fill="none" />
            </svg>
            <span className="absolute bottom-3 right-3 font-mono text-[7px] tracking-[0.2em] text-bone/20 uppercase">Add Image</span>
          </div>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone/30 mt-3">{c}</p>
        </div>
      ))}
    </div>
  );
}

function Pullquote({ quote }: { quote: string }) {
  return (
    <div className="reveal py-20 border-b border-bone/10 relative">
      <span className="absolute left-0 top-10 font-display text-bone/5 select-none pointer-events-none"
        style={{ fontSize: "clamp(80px, 14vw, 180px)", lineHeight: 1 }}>
        &quot;
      </span>
      <blockquote
        className="font-serif italic text-bone relative z-10 pl-6 border-l-2 border-accent"
        style={{ fontSize: "clamp(22px, 3.5vw, 48px)", lineHeight: 1.3 }}
      >
        {quote}
      </blockquote>
    </div>
  );
}

export default function CaseSections({ sections }: { sections: Section[] }) {
  return (
    <div className="flex flex-col">
      {sections.map((s, i) => {
        switch (s.type) {
          case "text":        return <TextSection key={i} {...s} />;
          case "stat-row":    return <StatRow key={i} {...s} />;
          case "image-full":  return <ImageFull key={i} {...s} />;
          case "image-split": return <ImageSplit key={i} {...s} />;
          case "pullquote":   return <Pullquote key={i} {...s} />;
        }
      })}
    </div>
  );
}
