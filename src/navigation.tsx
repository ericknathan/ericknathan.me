import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "pt-BR"] as const;
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

export { Link, redirect, usePathname, useRouter };
