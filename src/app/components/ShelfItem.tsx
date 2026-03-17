"use client";
import Image from "next/image";

type ShelfItemProps = {
  num: string;
  type: string;
  name: string;
  author: string;
  icon: string;
};

export default function ShelfItem({ num, type, name, author, icon }: ShelfItemProps) {
  return (
    <div
      className="relative flex flex-col gap-3 px-7 py-9 cursor-none hoverable overflow-hidden transition-colors duration-300 hover:bg-white/[0.04]"
      style={{ background: "#1c1208" }}
    >
      {/* Ghost number */}
      <span
        className="absolute bottom-[-10px] right-3 font-display italic pointer-events-none select-none"
        style={{ fontSize: 80, color: "rgba(232,224,208,0.04)", lineHeight: 1 }}
        aria-hidden
      >
        {num}
      </span>

      <div className="mb-2 relative w-full aspect-square">
        <Image alt={icon} src={icon} fill />
      </div>

      <span className="font-mono text-[7px] tracking-[0.35em] uppercase text-amber/70">
        {type}
      </span>
      <span className="font-display text-label leading-tight" style={{ fontSize: 18, fontWeight: 400 }}>
        {name}
      </span>
      <span className="font-body italic text-aged/50 text-[13px]">
        {author}
      </span>
    </div>
  );
}