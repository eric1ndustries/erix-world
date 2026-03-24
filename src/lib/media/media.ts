// src/lib/media.ts
import { getCoverImage as getDiscogsCover } from "./discogs";
import { getCoverImage as getTmdbCover } from "./tmdb";
import { getCoverImage as getRawgCover } from "./rawg";

export async function getCoverImage(
  type: string,
  title: string,
  creator: string,
  year: number,
): Promise<string | null> {
  switch (type.toLowerCase()) {
    case "music": return getDiscogsCover({ title, creator });
    case "movie": return getTmdbCover(title, year);
    case "game":  return getRawgCover(title);
    default:      return null;
  }
}
