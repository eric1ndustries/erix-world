import ErixNav from "../svgs/ErixNav";

type NavbarButtonProps = {
  onClick: () => void;
};

export default function NavbarButton({ onClick }: NavbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 z-50 hover:scale-105 transition-transform"
    >
      {/* your SVG component */}
      <ErixNav width={80} height={80} />
    </button>
  );
}
