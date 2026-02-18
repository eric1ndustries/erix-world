import Image from "next/image";

interface ErixWorldProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  rotate?: number; // degrees
  filter?: string; // e.g., "grayscale(100%)" or "invert(50%)"
}

export default function ErixWorld({
  width = 100,
  height = 100,
  className = "",
  alt = "ErixWorld",
  rotate = 0,
  filter,
}: ErixWorldProps) {
  const style: React.CSSProperties = {
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    filter,
  };

  return (
    <Image
      src="/assets/erixworld.svg"
      width={width}
      height={height}
      className={className}
      style={style}
      alt={alt}
    />
  );
}
