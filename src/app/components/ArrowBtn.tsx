export default function ArrowBtn() {
  return (
    <svg
      className="card-svg-btn absolute top-6 right-6 w-12 h-12 opacity-0 -rotate-45 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="23" stroke="#f0ece4" strokeWidth="1" />
      <path d="M16 24h16M26 18l6 6-6 6" stroke="#f0ece4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
