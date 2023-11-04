"use client";

import { userData, websiteSourceCode } from "@/config";
import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(" ");
      console.log(
        "%c Hey, you here? 👀",
        "font-size: 2rem; font-weight: bold;"
      );
      console.log(`💻 Check out website source code at ${websiteSourceCode}`);
      console.log(
        "How about giving me an opportunity to work with you or at your company? 👉👈"
      );
      console.log(
        `If you're interested, please contact me at ${userData.linkedinUrl}`
      );
      console.log("Have a great day! 👋😁");
      console.log(" ");

      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    }
  }, []);

  return null;
}
