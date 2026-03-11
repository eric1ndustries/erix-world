"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 mix-blend-multiply">
      <a
        href="#"
        className="font-display italic text-xl tracking-wide text-ink"
        style={{ fontWeight: 400 }}
      >
        Erix World
      </a>

      <ul className="flex gap-8 list-none">
        {[
          { label: "Records",    href: "#collection" },
          { label: "Influences", href: "#influences" },
          { label: "Objects",    href: "#objects"    },
          { label: "Contact",    href: "#contact"    },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="font-mono text-[9px] tracking-[0.25em] uppercase text-faded hover:text-ink transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}