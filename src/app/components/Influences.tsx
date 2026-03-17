import ShelfItem from "./ShelfItem";
import { createClient } from "@component/lib/supabase/server";
import { getCoverImage } from "@component/lib/media/media";

type NowPlayingItem = {
  id: string;
  type: string;
  title: string;
  creator: string;
  year: number | null;
  notes: string | null;
  updated_at: string;
  coverImage: string;
}

export default async function Influences() {
  const supabase = await createClient();
  const { data: entries, error } = await supabase
    .from("now_playing")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) console.error("Shelf fetch error:", error);
  
  const items = await Promise.all(
    (entries ?? []).map(async (item, index) => ({
      ...item,
      num: String(index + 1).padStart(2, "0"),
      coverImage: await getCoverImage(item.type, item.title, item.creator),
    }))
  );

  return (
    <section className="px-12 py-24 bg-ink relative overflow-hidden" id="influences">

      {/* Lined paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(232,224,208,0.03) 40px)",
        }}
      />

      {/* Section header */}
      <div
        className="relative flex justify-between items-baseline border-b pb-4 mb-14 reveal"
        style={{ borderColor: "rgba(232,224,208,0.1)" }}
      >
        <h2 className="font-display italic text-label text-4xl" style={{ fontWeight: 400 }}>
          The Shelf: Now Playing
        </h2>
        <span
          className="font-mono text-[9px] tracking-[0.25em]"
          style={{ color: "rgba(212,201,176,0.4)" }}
        >
          00{items.length} Entries
        </span>
      </div>

      {/* Shelf grid */}
      <div
        className="relative grid grid-cols-5 gap-[1px] reveal"
        style={{ background: "rgba(232,224,208,0.05)" }}
      >
        {items.map((item: NowPlayingItem, index: number) => (
          <ShelfItem
            key={item.id}
            num={String(index + 1).padStart(2, "0")}
            type={item.type}
            name={item.title}
            author={item.creator}
            icon={item.coverImage}
          />
        ))}
      </div>
    </section>
  );
}