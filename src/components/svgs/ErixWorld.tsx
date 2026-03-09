// components/SVGs/ErixWorld.tsx
import ErixSVG from "@/assets/erixworld.svg";

interface ErixWorldProps {
  className?: string;
  rotate?: number;
  filter?: string;
}

export default function ErixWorld({ className = "", rotate = 0, filter }: ErixWorldProps) {
  return (
    <ErixSVG
      className={`w-full h-full ${className}`}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter,
      }}
    />
  );
}