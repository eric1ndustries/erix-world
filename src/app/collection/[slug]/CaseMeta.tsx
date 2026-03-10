import { CaseStudy } from "../../../lib/cases";

export default function CaseMeta({ c }: { c: CaseStudy }) {
  return (
    <aside className="sticky top-32 h-fit border border-bone/10 p-8 flex flex-col gap-8">

      <div>
        <p className="font-mono text-[8px] tracking-[0.35em] uppercase text-bone/30 mb-3">Role</p>
        <p className="font-mono text-[11px] tracking-[0.1em] text-bone/70">{c.role}</p>
      </div>

      <div>
        <p className="font-mono text-[8px] tracking-[0.35em] uppercase text-bone/30 mb-3">Duration</p>
        <p className="font-mono text-[11px] tracking-[0.1em] text-bone/70">{c.duration}</p>
      </div>

      <div>
        <p className="font-mono text-[8px] tracking-[0.35em] uppercase text-bone/30 mb-3">Deliverables</p>
        <ul className="flex flex-col gap-2">
          {c.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 font-mono text-[10px] tracking-[0.1em] text-bone/60">
              <span className="text-accent mt-[1px]">—</span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* SVG ornament */}
      <div className="pt-4 border-t border-bone/10 flex justify-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#f0ece4" strokeWidth="0.4" strokeDasharray="3 3" className="spin" />
          <circle cx="32" cy="32" r="18" stroke="#8C1E77" strokeWidth="0.4" />
          <circle cx="32" cy="32" r="2" fill="#f0ece4" />
          <line x1="32" y1="2" x2="32" y2="62" stroke="#f0ece4" strokeWidth="0.3" opacity="0.15" />
          <line x1="2" y1="32" x2="62" y2="32" stroke="#f0ece4" strokeWidth="0.3" opacity="0.15" />
        </svg>
      </div>
    </aside>
  );
}
