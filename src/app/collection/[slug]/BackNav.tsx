"use client";
import Link from "next/link";

export default function BackNav({ title }: { title: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 bg-ink/80 backdrop-blur-sm border-b border-bone/5">
      <Link
        href="/"
        className="flex items-center gap-3 group hoverable cursor-none"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          className="transition-transform duration-300 group-hover:-translate-x-1">
          <path d="M20 12H4M10 6l-6 6 6 6" stroke="#f0ece4" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-bone/40 group-hover:text-bone/70 transition-colors">
          Back
        </span>
      </Link>

      <span className="font-display text-sm tracking-widest text-bone/30 hidden md:block">{title}</span>

      <span className="font-display text-lg tracking-widest text-bone/60">ERIX</span>
    </div>
  );
}
