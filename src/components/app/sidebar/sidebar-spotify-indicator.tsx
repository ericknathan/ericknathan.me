"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { songRequests } from "@/lib/api/requests";
import { cn } from "@/lib/utils";
import { SongModel } from "@/models";

import { Icon } from "@/components/ui";

export function SidebarSpotifyIndicator() {
  const [songData, setSongData] = useState<SongModel | undefined>();
  const shouldReduceMotion = useReducedMotion();

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioDuration = audioRef.current?.duration;

  useEffect(() => {
    async function getSongData() {
      try {
        const nowPlayingSong = await songRequests.getNowPlaying();
        setSongData(nowPlayingSong.payload);
      } catch (error) {}
    }

    getSongData();

    const interval = setInterval(() => {
      if (document.hasFocus()) {
        getSongData();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function playPreview() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.1;
    audio.play();
    setIsPlayingAudio(true);
  }

  function stopPreview() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlayingAudio(false);
  }

  return (
    <motion.a
      href={songData?.song_url}
      target="_blank"
      rel="noopener noreferrer"
      key={songData?.title || "nothing-playing"}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        transform: shouldReduceMotion ? "translateX(0)" : "translateX(-1rem)",
      }}
      animate={{ opacity: 1, transform: "translateX(0)" }}
      exit={{
        opacity: shouldReduceMotion ? 1 : 0,
        transform: shouldReduceMotion ? "translateX(0)" : "translateX(1rem)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "flex gap-2 items-center h-14 w-[13rem] group transition-colors",
        songData?.is_playing
          ? "md:hover:bg-muted md:focus-visible:bg-muted"
          : "pointer-events-none"
      )}
      aria-label={
        songData?.is_playing
          ? `Currently playing ${songData?.title} by ${songData?.artist}`
          : "Nothing is playing"
      }
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
    >
      {!!songData && songData?.is_playing ? (
        <>
          <div className="absolute w-8 h-auto rounded-sm left-0 bottom-3 md:group-hover:w-full md:group-hover:bottom-full md:group-focus-visible:w-full md:group-focus-visible:bottom-full transition-all border-0 border-transparent md:group-hover:border-muted md:group-hover:border-[0.5rem] md:group-hover:rounded-b-none md:group-focus-visible:border-muted md:group-focus-visible:border-[0.5rem] md:group-focus-visible:rounded-b-none duration-300">
            <Image
              src={songData.album_image_url}
              alt={`Album cover of ${songData.title}`}
              width={250}
              height={250}
            />
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={audioDuration}
              aria-label={`Song progress: ${songData.title}`}
              aria-valuenow={audioDuration}
              className="h-1 absolute bottom-0 bg-primary transition-all w-0 ease-linear"
              style={{
                transitionDuration: isPlayingAudio ? `${audioDuration}s` : "0s",
                width: isPlayingAudio ? "100%" : "0%",
              }}
            />
          </div>
          <div className="max-w-[inherit] leading-none overflow-hidden ml-10 md:group-hover:ml-2 md:group-focus-visible:ml-2 transition-all duration-300">
            <p
              className="text-sm font-semibold truncate w-full mr-2 transition-all duration-1000"
              title={songData.title}
            >
              {songData.title}
            </p>
            <small
              className="text-xs truncate text-muted-foreground w-full"
              title={songData.artist}
            >
              {songData.artist}
            </small>
          </div>

          <audio
            ref={audioRef}
            className="hidden"
            src={songData?.preview_url}
          />
        </>
      ) : songData?.is_playing === false ? (
        <>
          <Icon.spotify size={24} />
          <p className="text-sm font-medium">Nothing is playing</p>
        </>
      ) : null}
    </motion.a>
  );
}

export const dynamic = 5; // 5 seconds
