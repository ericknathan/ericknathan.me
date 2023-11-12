"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { storageKeys, userData, websiteSourceCode } from "@/config";
import { toast } from "@/hooks";

export function ConsoleEasterEgg() {
  const t = useTranslations("components.consoleEasterEgg");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    const now = new Date().getHours();
    const time: "day" | "afternoon" | "night" =
      now < 12 ? "day" : now < 18 ? "afternoon" : "night";

    console.log(" ");
    console.log(`%c ${t("title")}`, "font-size: 2rem; font-weight: bold;");
    console.log(t("source", { url: websiteSourceCode }));
    console.log(t("job"));
    console.log(t("contact", { url: userData.linkedinUrl }));
    console.log(t("thanks", { time }));
    console.log(" ");

    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};

    function showEasterEggUnlockedAlert() {
      if (sessionStorage.getItem(storageKeys.unlockedConsoleEasterEgg)) return;

      toast({
        title: t('notification.title'),
        description: t('notification.description'),
        duration: 10000,
        playSound: true,
      });

      sessionStorage.setItem(storageKeys.unlockedConsoleEasterEgg, "true");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "F12" ||
        ((event.ctrlKey || event.metaKey) &&
          (event.shiftKey || event.altKey) &&
          (event.key === "I" || event.key === "J" || event.key === "C"))
      ) {
        showEasterEggUnlockedAlert();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [t]);

  return null;
}
