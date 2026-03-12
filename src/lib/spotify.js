export const getAccessToken = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID?.trim();
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET?.trim();
  
  if (!client_id || !client_secret) {
    console.warn("Spotify Client ID or Secret is missing in environment variables.");
    return null;
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
      next: { revalidate: 3600 },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    return null;
  }
};

export const getArtistAlbums = async () => {
  const tokenData = await getAccessToken();
  if (!tokenData || !tokenData.access_token) return [];

  const ARTIST_ID = (process.env.SPOTIFY_ARTIST_ID || "0pO2eJn9QBtNRVdLxI1nrE").trim();
  // Changed limit to 40 to bust the Next.js Vercel Data Cache from the previously poisoned builds
  const ALBUMS_ENDPOINT = `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&limit=40&market=IN`;

  try {
    const response = await fetch(ALBUMS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    
    if (!data.items) return [];

    const formattedData = data.items.map((album) => ({
      id: album.id,
      title: album.name,
      year: parseInt(album.release_date.substring(0, 4)),
      language: "Unknown",
      album: album.album_type === "single" ? "Single Release" : album.name,
      spotifyUrl: album.external_urls.spotify,
      youtubeUrl: "",
      coverUrl: album.images[0]?.url || "/images/placeholder-album.jpg",
      previewUrl: "",
      description: `Released on ${album.release_date}.`
    }));

    const uniqueAlbums = [];
    const names = new Set();
    for (const item of formattedData) {
      if (!names.has(item.title)) {
        names.add(item.title);
        uniqueAlbums.push(item);
      }
    }

    return uniqueAlbums;
  } catch (error) {
    console.error("Error fetching Spotify albums:", error);
    return [];
  }
};
