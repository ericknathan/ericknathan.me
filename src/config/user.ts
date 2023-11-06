import { IconName } from "@/components/ui";

export type UserDataModel = {
  name: string;
  role: string;
  linkedinUrl: string;
  company: {
    name: string;
    url: string;
  };
};

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
    icon: "twitter",
    name: "X/Twitter",
    href: "https://twitter.com/onathannsz",
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

export const userData: UserDataModel = {
  name: "Erick Nathan",
  role: "Front-end developer",
  linkedinUrl: socials.find((social) => social.name === "LinkedIn")?.href || "",
  company: {
    name: "Pagtel",
    url: "https://pagtel.com.br",
  },
};

export const userName = "Erick Nathan";
export const userBirthDate = new Date("2005-08-14");
export const userLanguages = ["english", "portuguese"];
