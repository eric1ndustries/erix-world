const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN;
const BASE_URL = "https://api.discogs.com";

const headers = {
  Authorization: `Discogs token=${DISCOGS_TOKEN}`,
  "User-Agent": "ErixWorld/1.0",
};

export async function searchRelease(title: string, creator: string) {
  const query = encodeURIComponent(`${title} ${creator}`);
  const res = await fetch(`${BASE_URL}/database/search?q=${query}&type=release`, { headers });
  const data = await res.json();
  return data.results?.[0] ?? null;
}

export async function getRelease(discogsId: string) {
  const res = await fetch(`${BASE_URL}/releases/${discogsId}`, { headers });
  return res.json();
}

export async function getCoverImage(title: string, creator: string): Promise<string | null> {
  const result = await searchRelease(title, creator);
  return result?.cover_image ?? null;
}
