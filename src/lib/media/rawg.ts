const RAWG_API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export async function searchGame(title: string) {
  const query = encodeURIComponent(title);
  const res = await fetch(`${BASE_URL}/games?search=${query}&key=${RAWG_API_KEY}`);
  const data = await res.json();
  return data.results?.[0] ?? null;
}

export async function getGame(rawgId: string) {
  const res = await fetch(`${BASE_URL}/games/${rawgId}?key=${RAWG_API_KEY}`);
  return res.json();
}

export async function getCoverImage(title: string): Promise<string | null> {
  const result = await searchGame(title);
  return result?.background_image ?? null;
}
