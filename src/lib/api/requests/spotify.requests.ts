const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }).toString(),
    next: {
      revalidate: 60 * 30, // 1 hour
    },
  });

  return response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 3, // 3 seconds
    },
  });
};

const getFavoriteSongs = async () => {
  const { access_token } = await getAccessToken();

  return fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=8&offset=0",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: {
        revalidate: 60 * 60 * 24, // 1 day
      },
    }
  );
};

export const spotifyRequests = {
  getAccessToken,
  getNowPlaying,
  getFavoriteSongs,
};
