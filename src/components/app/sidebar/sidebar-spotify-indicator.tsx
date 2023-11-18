"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { songRequests } from "@/lib/api/requests";
import { cn } from "@/lib/utils";
import { SongModel } from "@/models";

import { Icon } from "@/components/ui";
import { useMediaQuery } from "@/hooks";

export function SidebarSpotifyIndicator() {
  const [songData, setSongData] = useState<SongModel | undefined>();
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("components.spotifyIndicator");

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioDuration = audioRef.current?.duration;
  const isMobile = useMediaQuery('(max-width: 768px)');

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
    if(songData?.explicit || isMobile) return;
    
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

  const Element = songData?.is_playing ? motion.a : motion.div;

  return (
    <Element
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
        "flex gap-2 items-center h-14 flex-1 md:w-[13rem] group transition-colors",
        songData?.is_playing
          ? "md:hover:bg-muted md:focus-visible:bg-muted"
          : "pointer-events-none"
      )}
      aria-label={
        songData?.is_playing
          ? t("playing")
              .replace("%TITLE%", songData.title)
              .replace("%ARTIST%", songData.artist)
          : t("nothing")
      }
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
    >
      {!!songData && songData?.is_playing ? (
        <>
          <div className="overflow-hidden absolute w-8 h-auto rounded-sm left-0 bottom-3 md:group-hover:w-full md:group-hover:bottom-full md:group-focus-visible:w-full md:group-focus-visible:bottom-full transition-all border-0 border-transparent md:group-hover:border-muted md:group-hover:border-[0.5rem] md:group-hover:rounded-b-none md:group-focus-visible:border-muted md:group-focus-visible:border-[0.5rem] md:group-focus-visible:rounded-b-none duration-300">
            <Image
              src={songData.album_image_url}
              alt={`Album cover of ${songData.title}`}
              width={250}
              height={250}
              className={cn(
                songData.explicit &&
                  "blur-sm group-hover:blur-none transition-all"
              )}
            />
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={audioDuration}
              aria-label={`Song progress: ${songData.title}`}
              aria-valuenow={audioDuration}
              className={cn(
                "h-1 absolute bottom-0 bg-primary transition-all w-0 ease-linear",
                isPlayingAudio ? "w-full" : "w-0"
              )}
              style={{
                transitionDuration: isPlayingAudio ? `${audioDuration}s` : "0s",
              }}
            />
          </div>
          <div className="h-full justify-center flex flex-col max-w-[inherit] leading-none overflow-hidden ml-10 md:group-hover:ml-2 md:group-focus-visible:ml-2 transition-all duration-300">
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
              {songData.explicit && (
                <span className="text-red-500 px-1 inline-flex items-center justify-center border border-red-500 rounded-full text-[0.65rem] ml-1">
                  <Icon.alert className="h-2 w-2 mr-1" />
                  Explicit
                </span>
              )}
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
          <Icon.spotify className="h-6 w-6" />
          <p className="text-sm font-medium">{t("nothing")}</p>
        </>
      ) : null}
    </Element>
  );
}

export const dynamic = 5; // 5 seconds
