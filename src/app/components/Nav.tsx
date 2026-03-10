"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-10 py-7">
      <a href="#" className="font-display text-xl tracking-widest text-bone">
        ERIX
      </a>
      <ul className="flex flex-col items-end gap-1 list-none">
        {["Collection", "Influences", "Objects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone/40 hover:text-bone/100 transition-opacity duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
