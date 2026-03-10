import Link from "next/link";

export default function NextCase({ slug, title, num }: { slug: string; title: string; num: string }) {
  return (
    <section className="border-t border-bone/10">
      <Link
        href={`/collection/${slug}`}
        className="group flex justify-between items-center px-10 py-16 hover:bg-bone/5 transition-colors duration-500 hoverable cursor-none"
      >
        <div>
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-bone/30 mb-3">Next Case Study</p>
          <h2
            className="font-display text-bone group-hover:text-accent transition-colors duration-300"
            style={{ fontSize: "clamp(40px, 8vw, 110px)", lineHeight: 0.9 }}
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col items-end gap-4">
          <span className="font-mono text-[9px] tracking-[0.2em] text-bone/30">{num}</span>
          {/* SVG arrow */}
          <svg
            width="56" height="56" viewBox="0 0 56 56" fill="none"
            className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
          >
            <circle cx="28" cy="28" r="27" stroke="#f0ece4" strokeWidth="0.8" opacity="0.3" />
            <path d="M20 28h16M30 22l6 6-6 6" stroke="#f0ece4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </Link>
    </section>
  );
}
