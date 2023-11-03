import { IconName } from "@/components/ui/icon";
import { socials } from "./user";

export type NavbarSectionModel = {
  title?: string;
  buttons: {
    icon: IconName;
    label: string;
    href: string;
    disabled?: boolean;
  }[];
};

export const navbarSections: NavbarSectionModel[] = [
  {
    buttons: [
      {
        icon: "house",
        label: "Home",
        href: "/",
      },
    ],
  },
  {
    title: "Me",
    buttons: [
      {
        icon: "bookOpen",
        label: "About me",
        href: "/about",
      },
      {
        icon: "newspaper",
        label: "Blog",
        href: "/blog",
        disabled: true,
      },
      {
        icon: "folderDot",
        label: "Projects",
        href: "/projects",
      },
      {
        icon: "laptop",
        label: "Setup",
        href: "/setup",
        disabled: true,
      },
    ],
  },
  {
    title: "Socials",
    buttons: socials.map((social) => ({
      icon: social.icon,
      label: social.name,
      href: social.href,
    })),
  }
];
