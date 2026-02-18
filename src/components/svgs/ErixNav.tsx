import Image from "next/image";

interface ErixNavProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  rotate?: number; // degrees
  filter?: string; // e.g., "grayscale(100%)" or "invert(50%)"
}

export default function ErixNav({
  width = 100,
  height = 100,
  className = "",
  alt = "ErixNav",
  rotate = 0,
  filter,
}: ErixNavProps) {
  const style: React.CSSProperties = {
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    filter,
  };

  return (
    <Image
      src="/assets/erixnav.svg"
      width={width}
      height={height}
      className={className}
      style={style}
      alt={alt}
    />
  );
}
