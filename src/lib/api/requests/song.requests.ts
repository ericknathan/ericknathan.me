import { parseSong, wordBlocklist } from "@/lib/utils";
import { RawSongModel, SongModel } from "@/models";
import { api } from "..";
import { spotifyRequests } from "./spotify.requests";

export const songRequests = {
  getNowPlaying: () => api.get<SongModel>("/song/now-playing"),
  getFavoriteSongs: async () => {
    try {
      const response = await spotifyRequests.getFavoriteSongs();

      const song = await response.json();

      const favoriteSongs: SongModel[] = song.items
        .filter(
          (song: RawSongModel["item"]) =>
            !wordBlocklist.some((word) => song.name.includes(word))
        )
        .slice(0, 3)
        .map((song: RawSongModel["item"]) =>
          parseSong({
            item: song,
          })
        );

      return favoriteSongs;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
