import { IconName } from "@/components/ui";

export type UserSocialModel = {
  icon: IconName;
  name: string;
  href: string;
};

export const socials: UserSocialModel[] = [
  {
    icon: "github",
    name: "Github",
    href: "https://github.com/ericknathan",
  },
  {
    icon: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ericknathan",
  },
  {
    icon: "bluesky",
    name: "Bluesky",
    href: "https://bsky.app/profile/ericknathan.bsky.social",
  },
  {
    icon: "twitch",
    name: "Twitch",
    href: "https://www.twitch.tv/eriicknathan",
  },
  {
    icon: "mail",
    name: "Email",
    href: "mailto:erick.capito@hotmail.com",
  },
];

export const userData = {
  name: "Erick Nathan",
  linkedinUrl: socials.find((social) => social.name === "LinkedIn")?.href || "",
  twitter: {
    id: "1367639862325706758",
    username: "@onathannsz",
  },
  company: {
    name: "Pagtel",
    url: "https://pagtel.com.br",
  },
  birthDate: new Date("2005-08-14"),
  languages: ["english", "portuguese"],
};

export const stack = [
  "ReactJS",
  "NextJS",
  "Svelte",
  "Sveltekit",
  "NodeJS",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];
