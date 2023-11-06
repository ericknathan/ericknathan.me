type SongType = "artist" | "playlist" | "album" | "show" | "episode" | "track";
type SongUri = `spotify:${SongType}:${string}`;
type ImageSize = 64 | 300 | 640;

type ExternalUrls = {
  spotify: string;
}

type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: SongUri;
};

export type RawSongModel = {
  timestamp: number;
  progress_ms: number;
  context: {
    external_urls: ExternalUrls;
    href: string;
    type: SongType;
    uri: SongUri;
  };
  item: {
    album: {
      album_type: "album" | "single" | "compilation";
      artists: Artist[];
      external_urls: ExternalUrls;
      href: string;
      id: string;
      images: {
        height: ImageSize;
        width: ImageSize;
        url: string;
      }[];
      is_playable: boolean;
      name: string;
      release_date: string;
      release_date_precision: "year" | "month" | "day";
      total_tracks: number;
      type: "album";
      uri: SongUri;
    };
    artists: Artist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: "track";
    uri: SongUri;
  };
  currently_playing_type: "track" | "episode" | "ad" | unknown;
  actions: {
    disallows: {
      resuming: boolean;
    };
  };
  is_playing: boolean;
};

export type SongModel = {
  is_playing?: boolean;
  id: string;
  title: string;
  album: string;
  artist: string;
  album_image_url: string;
  song_url: string;
  preview_url: string;
  explicit: boolean;
};
