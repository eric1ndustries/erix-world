import VinylPlayer from "./VinylPlayer";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 border-b border-ink/15 relative overflow-hidden">

      {/* ── Left column ── */}
      <div className="flex flex-col justify-between px-12 pt-36 pb-14 border-r border-ink/10">

        <div>
          <p className="hero-eyebrow font-mono text-[9px] tracking-[0.35em] uppercase text-faded mb-7">
            Vol. I &nbsp;—&nbsp; Digital Archive &nbsp;—&nbsp; 2024
          </p>

          <h1
            className="hero-title font-display text-ink leading-[0.92]"
            style={{ fontSize: "clamp(72px, 11vw, 160px)", fontWeight: 400 }}
          >
            Erix<br />
            {/* <em className="italic text-rust">Digger's</em><br /> */}
            World
          </h1>
        </div>

        <div className="hero-bottom flex flex-col gap-0">
          <p className="font-body italic text-faded leading-relaxed max-w-[300px] mb-8"
            style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}>
            A living archive of digital media, found objects &amp; the music that never left the room.
          </p>
          <div className="w-10 h-px bg-amber mb-5" />
          <p className="font-mono text-[9px] tracking-[0.18em] text-faded/60 leading-loose">
            Funk · Disco · R&amp;B · Italian Neorealism<br />
            Japanese New Wave · Taiwanese Cinema
          </p>
        </div>
      </div>

      {/* ── Right column — vinyl player ── */}
      <div className="relative flex flex-col items-center justify-center bg-ink/[0.02] px-12 pt-36 pb-14">
        <div className="hero-vinyl">
          <VinylPlayer />
        </div>

        {/* Side label */}
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-[0.3em] uppercase text-faded/30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Digital Archive
        </span>
      </div>
    </section>
  );
}