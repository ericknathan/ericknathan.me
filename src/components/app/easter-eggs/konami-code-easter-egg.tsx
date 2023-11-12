"use client";

import { toast } from "@/hooks";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import Confetti from "react-confetti";

const konamiKeys = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiCodeEasterEgg() {
  const t = useTranslations("components.konamiCodeEasterEgg");

  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (!konamiKeys.includes(key)) return setKeysPressed([]);

      setKeysPressed((prev) => [...prev, key].slice(-konamiKeys.length));
    };

    const checkKonamiCode = () => {
      if (JSON.stringify(keysPressed) === JSON.stringify(konamiKeys)) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
        setShowConfetti(true);
        toast({
          title: t("notification.title"),
          description: t("notification.description"),
          duration: 10000,
          playSound: true
        })
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    checkKonamiCode();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keysPressed]);

  if (showConfetti)
    return (
      <Confetti
        recycle={false}
        numberOfPieces={700}
        gravity={0.2}
        onConfettiComplete={() => setShowConfetti(false)}
      />
    );

  return null;
}
