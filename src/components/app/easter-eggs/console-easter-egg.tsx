"use client";

import { userData, websiteSourceCode } from "@/config";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export function ConsoleEasterEgg() {
  const t = useTranslations("components.consoleEasterEgg");

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      const now = new Date().getHours();
      const time: 'day' | 'afternoon' | 'night' = now < 12 ? 'day' : now < 18 ? 'afternoon' : 'night';

      console.log(" ");
      console.log(
        `%c ${t("title")}`,
        "font-size: 2rem; font-weight: bold;"
      );
      console.log(t("source", { url: websiteSourceCode }));
      console.log(
        t("job")
      );
      console.log(
        t("contact", { url: userData.linkedinUrl })
      );
      console.log(t("thanks", { time }));
      console.log(" ");

      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    }
  }, [t]);

  return null;
}
