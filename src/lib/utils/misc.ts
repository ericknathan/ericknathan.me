import { RawSongModel, SongModel } from "@/models";

export const wordBlocklist = JSON.parse(
  process.env.WORD_BLOCKLIST || "[]"
) as string[];

export function parseSong(song: RawSongModel): SongModel {
  return {
    is_playing: song?.is_playing,
    id: song.item.id,
    title: song.item.name,
    album: song?.item.album.name,
    artist: song?.item.album.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    album_image_url: song?.item.album.images[0].url,
    song_url: song?.item.external_urls.spotify,
    preview_url: song?.item.preview_url,
  };
}
