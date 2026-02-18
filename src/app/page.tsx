import ErixWorld from "@/components/svgs/ErixWorld";

export default function HomeWorld() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_#9d4edd_0%,_#240046_45%,_#03001c_100%)]">
        <ErixWorld 
          width={500} 
          height={500}
          className="hover:scale-105 transition-transform"
        />
    </div>
  );
}
