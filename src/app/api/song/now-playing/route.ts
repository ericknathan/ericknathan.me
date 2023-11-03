import { NextResponse } from "next/server";

import { spotifyRequests } from "@/lib/api/requests";
import { parseSong, wordBlocklist } from '@/lib/utils'

const notPlayingBody = {
  message: "No song is currently playing.",
  payload: {
    is_playing: false,
  },
};

export async function GET() {
  const response = await spotifyRequests.getNowPlaying();

  if (response.status === 204 || response.status >= 400) {
    return NextResponse.json(notPlayingBody);
  }

  const song = await response.json().catch(() => null);

  if (!song || song.item === null) {
    return NextResponse.json(notPlayingBody);
  }

  const title = song.item.name;
  const isBadSong = wordBlocklist.some((word) => title.includes(word));

  if (isBadSong) return NextResponse.json(notPlayingBody);

  return NextResponse.json({
    message: "",
    payload: parseSong(song),
  });
}
