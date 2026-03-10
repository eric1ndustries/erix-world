import { CaseStudy } from "../../../lib/cases";

export default function CaseHero({ c }: { c: CaseStudy }) {
  return (
    <section className="min-h-screen grid grid-rows-[1fr_auto] px-10 pb-10 pt-32 relative overflow-hidden border-b border-bone/10">

      {/* Index number — giant ghost */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-bone select-none pointer-events-none"
        style={{ fontSize: "clamp(160px, 28vw, 380px)", opacity: 0.04, lineHeight: 1 }}
        aria-hidden
      >
        {c.num}
      </span>

      {/* Meta row */}
      <div className="self-end">
        <div className="flex items-center gap-6 mb-8 case-fade" style={{ animationDelay: "0.1s" }}>
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-bone/40">{c.num}</span>
          <span className="w-12 h-px bg-bone/20" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent">{c.category}</span>
          <span className="w-12 h-px bg-bone/20" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-bone/30">{c.year}</span>
        </div>

        <h1
          className="font-display text-bone leading-[0.88] tracking-tight case-fade"
          style={{ fontSize: "clamp(64px, 13vw, 180px)", animationDelay: "0.2s" }}
        >
          {c.title}
        </h1>

        <p
          className="font-serif italic text-bone/50 mt-5 case-fade"
          style={{ fontSize: "clamp(18px, 2vw, 28px)", animationDelay: "0.35s" }}
        >
          {c.subtitle}
        </p>
      </div>

      {/* Bottom strip */}
      <div
        className="flex justify-between items-end border-t border-bone/10 pt-6 mt-10 case-fade"
        style={{ animationDelay: "0.5s" }}
      >
        {/* Tags */}
        <div className="flex gap-3">
          {c.tags.map((tag) => (
            <span key={tag} className="font-mono text-[9px] tracking-[0.25em] uppercase border border-bone/20 px-3 py-1.5 text-bone/50">
              {tag}
            </span>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-bone/30">Scroll</span>
          <div className="w-px h-10 bg-bone/20 relative overflow-hidden">
            <div className="w-full bg-accent absolute top-0 scroll-line" style={{ height: "40%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
