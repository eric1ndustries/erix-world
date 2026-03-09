// components/RecordCard/RecordCard.tsx
import { ReactNode } from "react";
import RecordFrame from "@/components/SVGs/RecordFrame";

type RecordCardProps = {
  artwork?: ReactNode;
  className?: string;
};

export default function RecordCard({ artwork, className = "" }: RecordCardProps) {
  return (
    <div className={`group relative cursor-pointer w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 ${className}`}>
      {/* Vinyl */}
      <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[80%] h-[80%]
        rounded-full overflow-hidden
        transition-all duration-300 ease-out
        group-hover:translate-x-[15%] group-hover:rotate-3
      ">
        {!artwork && <div className="w-full h-full rounded-full bg-black" />}
        {artwork}
      </div>

      {/* Sleeve frame */}
      <RecordFrame className="relative z-10 w-full h-full" />
    </div>
  );
}