import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "pt-BR"] as const;
type Locale = typeof locales[number];

const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

export { Link, redirect, usePathname, useRouter, locales, type Locale };
