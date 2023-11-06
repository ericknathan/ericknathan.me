import createMiddleware from "next-intl/middleware";
import { appLocales } from "./config";

export default createMiddleware({
  locales: appLocales.map((locale) => locale.name),

  defaultLocale: appLocales[0].name,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
