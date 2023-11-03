import { IconName } from "@/components/ui";

export type UserDataModel = {
  name: string;
  role: string;
  birthDate: Date;
  location: string;
  interests: string[];
  pronouns: string;
  avatarUrl: string;
  avatarAltDescription: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  company: {
    name: string;
    url: string;
  };
  languages: {
    name: string;
    proficiency: string;
  }[];
  stack: string[];
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
  birthDate: new Date("2005-08-14"),
  location: "São Paulo, Brazil",
  interests: ["Listen Music", "Travel", "Play Games", "Watch Live Coding"],
  pronouns: "he/him",
  avatarUrl: "https://github.com/ericknathan.png",
  avatarAltDescription:
    "A boy with curly hair smiling, wearing business clothes with a cyan tie.",
  description:
    "Hello, my name is Erick Nathan, I am a dedicated front-end developer, with extensive experience in technologies such as NodeJS and ReactJS, and a track record with notable clients such as Uber Chip, Correios Celular and Carrefour, specializing in robust and user-friendly solutions to the user, prioritizing scalability, accessibility and optimized performance.",
  githubUrl: socials.find((social) => social.name === "Github")?.href || "",
  linkedinUrl: socials.find((social) => social.name === "LinkedIn")?.href || "",
  company: {
    name: "Pagtel",
    url: "https://pagtel.com.br",
  },
  languages: [
    {
      name: "English",
      proficiency: "Professional working",
    },
    {
      name: "Portuguese",
      proficiency: "Native or bilingual",
    },
  ],
  stack: [
    "ReactJS",
    "NextJS",
    "Svelte",
    "Sveltekit",
    "NodeJS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ],
};
