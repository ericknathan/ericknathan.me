export type RawSongModel = {
  is_playing?: boolean;
  item: {
    id: string;
    name: string;
    album: {
      name: string;
      artists: { name: string }[];
      images: { url: string }[];
    };
    external_urls: { spotify: string };
    preview_url: string;
  };
}


export type SongModel = {
  is_playing?: boolean;
  id: string;
  title: string;
  album: string;
  artist: string;
  album_image_url: string;
  song_url: string;
  preview_url: string;
};
