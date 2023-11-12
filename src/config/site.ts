import { IconName } from "@/components/ui/icon";
import { socials } from "./user";

export type NavbarSectionModel = {
  name: string;
  buttons: {
    icon: IconName;
    name: string;
    href: string;
    disabled?: boolean;
    label?: string;
  }[];
};

export const websiteSourceCode =
  "https://github.com/ericknathan/ericknathan.me";

export const websiteUrl = "https://ericknathan.me";

export const openGraphDefaultCover = `${websiteUrl}/images/about/code-in-the-dark.jpg`;

export const navbarSections: NavbarSectionModel[] = [
  {
    name: "home",
    buttons: [
      {
        icon: "house",
        name: "home",
        href: "/",
      },
    ],
  },
  {
    name: "me",
    buttons: [
      {
        icon: "bookOpen",
        name: "aboutMe",
        href: "/about",
      },
      {
        icon: "newspaper",
        name: "blog",
        href: "/blog",
        disabled: true,
      },
      {
        icon: "folderDot",
        name: "projects",
        href: "/projects",
      },
      {
        icon: "laptop",
        name: "setup",
        href: "/setup",
        disabled: true,
      },
    ],
  },
  {
    name: "socials",
    buttons: socials.map((social) => ({
      icon: social.icon,
      name: social.name,
      href: social.href,
      label: social.name,
    })),
  },
];

export type AppLocale = {
  label: string;
  name: string;
  icon: IconName;
};

export const appLocales: AppLocale[] = [
  { label: "English", name: "en", icon: "flagUs" },
  { label: "Português", name: "pt-BR", icon: "flagBr" },
];

export const storageKeys = {
  theme: "@ericknathan.me/theme",
  colorScheme: "@ericknathan.me/colorScheme",
  colorSchemesAlreadyUsed: "@ericknathan.me/colorSchemesAlreadyUsed",
  unlockedColorSchemes: "@ericknathan.me/unlockedColorSchemes",
  unlockedConsoleEasterEgg: "@ericknathan.me/unlockedConsoleEasterEgg",
};
