"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { FadeIn } from "../animation";
import { Button, Icon } from "../ui";

export function ScrollToTop() {
  const shouldReduceMotion = useReducedMotion();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [musicSong, setMusicSong] = useState<HTMLAudioElement>();
  const [chimeSong, setChimeSong] = useState<HTMLAudioElement>();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (documentHeight < windowHeight) return;

    const musicSong = new Audio("/audio/elevator-music.mp3");
    const chimeSong = new Audio("/audio/elevator-chime.mp3");

    musicSong.loop = true;
    chimeSong.volume = 0.5;

    setMusicSong(musicSong);
    setChimeSong(chimeSong);

    function toggleVisible() {
      if (!musicSong?.paused) return;

      const scrolled = document.documentElement.scrollTop;
      let minScrolled =
        windowWidth > 640 ? 300 : documentHeight - windowHeight - 300;

      if (scrolled > minScrolled) {
        setIsVisible(true);
      } else if (scrolled <= minScrolled) {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, [shouldReduceMotion]);

  const scrollToTopElevator = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      musicSong?.play();
      chimeSong?.pause();

      window.requestAnimationFrame(scrollToTopElevator);
      window.scrollTo(0, c - 4);
      setIsVisible(false);
    } else {
      if (musicSong) {
        musicSong?.pause();
        musicSong.currentTime = 0;
      }
      chimeSong?.play();
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (!isVisible) return null;

  return (
    <FadeIn to="top" className="fixed bottom-4 right-4 z-50">
      <Button
        size="icon"
        variant="outline"
        onClick={shouldReduceMotion ? scrollToTop : scrollToTopElevator}
        className="bg-background"
      >
        <Icon.arrowUpFromLine size={20} />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </FadeIn>
  );
}
