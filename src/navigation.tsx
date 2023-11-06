import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { appLocales } from "./config";

const locales = appLocales.map(({ name: locale }) => locale);
type Locale = (typeof locales)[number];

const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

export { Link, locales, redirect, usePathname, useRouter, type Locale };
