import {
  ArrowUpFromLineIcon,
  ArrowUpRightIcon,
  BookOpenIcon,
  ChevronRightIcon,
  DownloadIcon,
  FolderDotIcon,
  GithubIcon,
  HomeIcon,
  LaptopIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  NewspaperIcon,
  SettingsIcon,
  ShieldAlertIcon,
  SunIcon,
  TwitchIcon,
  TwitterIcon,
  createLucideIcon,
  type LucideIcon,
  LucideProps,
  CheckIcon,
  DotIcon,
  XIcon
} from "lucide-react";

export const Icon = {
  arrowUpRight: ArrowUpRightIcon,
  alert: ShieldAlertIcon,
  folderDot: FolderDotIcon,
  github: GithubIcon,
  hamburger: MenuIcon,
  house: HomeIcon,
  linkedin: LinkedinIcon,
  moon: MoonIcon,
  newspaper: NewspaperIcon,
  twitch: TwitchIcon,
  twitter: TwitterIcon,
  sun: SunIcon,
  laptop: LaptopIcon,
  mail: MailIcon,
  chevronRight: ChevronRightIcon,
  settings: SettingsIcon,
  arrowUpFromLine: ArrowUpFromLineIcon,
  download: DownloadIcon,
  bookOpen: BookOpenIcon,
  check: CheckIcon,
  dotFilled: DotIcon,
  x: XIcon,
  spotify: createLucideIcon("Spotify", [
    [
      "path",
      {
        d: "M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z",
        fill: "#1ED760",
        stroke: "transparent",
        key: "spotify-icon",
      },
    ],
  ]),
  flagUs: ({ ...props }: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0H16V2L15 3L16 4V6L15 7L16 8V10L15 11L16 12V14L8 15L0 14V12L1 11L0 10V8L8 0Z"
        fill="#EEEEEE"
      />
      <path
        d="M7 2H16V4H7V2ZM7 6H16V8H8L7 6ZM0 10H16V12H0V10ZM0 14H16V16H0V14Z"
        fill="#D80027"
      />
      <path d="M0 0H8V8H0V0Z" fill="#0052B4" />
      <path
        d="M5.84375 7.59375L7.625 6.3125H5.4375L7.21875 7.59375L6.53125 5.5L5.84375 7.59375ZM3.3125 7.59375L5.09375 6.3125H2.90625L4.6875 7.59375L4 5.5L3.3125 7.59375ZM0.78125 7.59375L2.5625 6.3125H0.375L2.15625 7.59375L1.46875 5.5L0.78125 7.59375ZM5.84375 5.0625L7.625 3.78125H5.4375L7.21875 5.0625L6.53125 2.96875L5.84375 5.0625ZM3.3125 5.0625L5.09375 3.78125H2.90625L4.6875 5.0625L4 2.96875L3.3125 5.0625ZM0.78125 5.0625L2.5625 3.78125H0.375L2.15625 5.0625L1.46875 2.96875L0.78125 5.0625ZM5.84375 2.5L7.625 1.21875H5.4375L7.21875 2.5L6.53125 0.40625L5.84375 2.5ZM3.3125 2.5L5.09375 1.21875H2.90625L4.6875 2.5L4 0.40625L3.3125 2.5ZM0.78125 2.5L2.5625 1.21875H0.375L2.15625 2.5L1.46875 0.40625L0.78125 2.5Z"
        fill="#EEEEEE"
      />
    </svg>
  ),
  flagBr: ({ ...props }: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0H16V16H0V0Z" fill="#6DA544" />
      <path
        d="M8 3.13123L14.6094 7.99998L8 12.8687L1.39062 7.99998L8 3.13123Z"
        fill="#FFDA44"
      />
      <path
        d="M5.44373 6.90619C5.28824 7.2638 5.21151 7.65068 5.21873 8.04056L10.2812 9.59681C10.5043 9.27823 10.6576 8.91618 10.7312 8.53431C9.46248 6.49369 6.9906 6.02494 5.44685 6.90931L5.44373 6.90619Z"
        fill="#EEEEEE"
      />
      <path
        d="M7.99062 5.21876C7.53358 5.21991 7.08386 5.33369 6.68125 5.55001C6.12712 5.84898 5.69084 6.32713 5.44375 6.90626C6.39058 6.70521 7.37309 6.74954 8.29796 7.03505C9.22284 7.32055 10.0594 7.83774 10.7281 8.53751C10.8524 7.90487 10.7529 7.24871 10.4469 6.68126C10.2082 6.238 9.85361 5.86785 9.42103 5.61028C8.98845 5.35272 8.49407 5.2174 7.99062 5.21876ZM6.625 7.82814C6.14813 7.82654 5.67385 7.89821 5.21875 8.04063C5.22401 8.48683 5.33655 8.92521 5.54688 9.31876C5.71995 9.64061 5.95474 9.92519 6.23785 10.1562C6.52096 10.3873 6.84683 10.5603 7.19683 10.6654C7.54683 10.7704 7.9141 10.8055 8.27766 10.7685C8.64121 10.7316 8.99392 10.6233 9.31563 10.45C9.69757 10.2443 10.0261 9.95219 10.275 9.59689C9.83637 9.04925 9.28114 8.60631 8.64973 8.30034C8.01832 7.99436 7.32662 7.83305 6.625 7.82814Z"
        fill="#0052B4"
      />
    </svg>
  ),
};
export type IconType = LucideIcon;
export type IconName = keyof typeof Icon;

interface DynamicIconProps extends LucideProps {
  name: IconName;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = Icon[name];
  return <IconComponent {...props} />;
}

