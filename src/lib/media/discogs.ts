const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN;
const BASE_URL = "https://api.discogs.com";

type SearchOptions = {
  title: string;
  creator: string;
  catno?: string;
  year?: number;
  country?: string;
};

const headers = {
  Authorization: `Discogs token=${DISCOGS_TOKEN}`,
  "User-Agent": "ErixWorld/1.0",
};

export async function searchRelease(options: SearchOptions) {
  const params = new URLSearchParams({ 
    type: "release",
    q: options.catno ?? `${options.title} ${options.creator}`
  });

  if (options.catno)   params.set("catno", options.catno);
  if (options.year)    params.set("year", String(options.year));
  if (options.country) params.set("country", options.country);
  

  const res = await fetch(`${BASE_URL}/database/search?${params}&type=release`, { headers });
  const data = await res.json();
  return data.results?.[0] ?? null;
}

export async function getCoverImage(options: SearchOptions): Promise<string | null> {
  const result = await searchRelease(options);
  return result?.cover_image ?? null;
}