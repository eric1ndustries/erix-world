const TMDB_API_KEY = process.env.TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

export async function searchMovie(title: string, year: number) {
  const query = encodeURIComponent(title);
  const res = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${TMDB_API_KEY}`);
  const data = await res.json();
  if (year && data.results?.length > 0) {
    const match = data.results.find(
      (movie: { release_date: string }) =>
        movie.release_date?.startsWith(String(year))
    );
    return match ?? data.results[0]; // fall back to first result if no year match
  }

  return data.results?.[0] ?? null
}

export async function getMovie(tmdbId: string) {
  const res = await fetch(`${BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}`);
  return res.json();
}

export async function getCoverImage(title: string, year: number): Promise<string | null> {
  const result = await searchMovie(title, year);
  return result?.poster_path ? `${IMAGE_BASE_URL}${result.poster_path}` : null;
}
