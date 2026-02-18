export default function NavOverlay({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/80 backdrop-blur
      transition-opacity duration-300
      ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-xl"
      >
        ✕
      </button>

      <div className="h-full flex items-center justify-center text-white text-3xl space-y-8 flex-col">
        <a href="/explorer">Explorer</a>
        <a href="/about">About</a>
        <a href="/resume">Resume</a>
      </div>
    </div>
  );
}
