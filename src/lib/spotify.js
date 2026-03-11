export const getAccessToken = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  
  if (!client_id || !client_secret) {
    console.warn("Spotify Client ID or Secret is missing in environment variables.");
    return { error: 'Missing ENV Keys' };
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
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    return { error: error.message };
  }
};

export const getArtistAlbums = async () => {
  const tokenData = await getAccessToken();
  if (!tokenData || !tokenData.access_token) {
    return [{
      id: "err_token",
      title: "Vercel ENV Missing or Token Error",
      year: 2024,
      language: "Debug",
      album: tokenData?.error || "Unknown Error",
      spotifyUrl: "",
      youtubeUrl: "",
      coverUrl: "/images/ConcertAndLights.png",
      previewUrl: "",
      description: "Please check your Vercel Environment Variables. SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET might be missing."
    }];
  }

  const ARTIST_ID = process.env.SPOTIFY_ARTIST_ID || "0pO2eJn9QBtNRVdLxI1nrE";
  const ALBUMS_ENDPOINT = `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&limit=50&market=IN&cacheBust=${Date.now()}`;

  try {
    const response = await fetch(ALBUMS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      cache: "no-store",
    });
    const data = await response.json();
    
    if (!data.items) {
      return [{
        id: "err_albums",
        title: "Album Fetch Error",
        year: 2024,
        language: "Debug",
        album: "API Failed",
        spotifyUrl: "",
        youtubeUrl: "",
        coverUrl: "/images/ConcertAndLights.png",
        previewUrl: "",
        description: JSON.stringify(data)
      }];
    }

    const formattedData = data.items.map((album) => ({
      id: album.id,
      title: album.name,
      year: parseInt(album.release_date.substring(0, 4)),
      language: "Unknown",
      album: album.album_type === "single" ? "Single Release" : album.name,
      spotifyUrl: album.external_urls.spotify,
      youtubeUrl: "",
      coverUrl: album.images[0]?.url || "/images/ConcertAndLights.png",
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
    return [{
      id: "err_catch",
      title: "Fetch Exception",
      year: 2024,
      language: "Debug",
      album: "Try Catch Error",
      spotifyUrl: "",
      youtubeUrl: "",
      coverUrl: "/images/ConcertAndLights.png",
      previewUrl: "",
      description: error.message
    }];
  }
};
