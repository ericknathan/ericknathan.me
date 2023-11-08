import type { Metadata, Viewport } from "next";
import { createTranslator } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { appLocales, keywords, userData, websiteUrl } from "@/config";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/themes.css";

import { EasterEggs, ScrollToTop, Sidebar } from "@/components/app";
import { InternalizationProvider, ThemeProvider } from "@/contexts";
import { Analytics } from "@/lib/scripts/analytics.script";

const inter = Inter({ subsets: ["latin"] });
const locales = appLocales.map((locale) => locale.name);

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "relative flex flex-col md:flex-row [&:has([data-sidebar-open=true])]:overflow-hidden overflow-x-hidden"
        )}
      >
        <InternalizationProvider locale={locale}>
          <ThemeProvider>
            <Sidebar />
            <main className="relative w-full mt-10 md:mt-0 md:ml-72">
              {children}
            </main>
            <ScrollToTop />
          </ThemeProvider>
          <EasterEggs />
        </InternalizationProvider>

        <Analytics />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps): Promise<Metadata> {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  let languages: Record<string, URL> = {};

  locales.map((loc) => {
    languages[loc] = new URL(`${websiteUrl}/${loc}`);
  });

  const title = `${userData.name} - ${t('config.userData.role')}`

  return {
    title: {
      template: "%s",
      default: title,
    },
    description: t("config.metadata.description"),
    authors: [
      {
        name: userData.name,
        url: websiteUrl,
      },
    ],
    metadataBase: new URL(websiteUrl),
    keywords: keywords,
    creator: userData.name,
    publisher: userData.name,
    alternates: {
      canonical: websiteUrl,
      languages,
    },
    twitter: {
      title: title,
      description: t("config.metadata.description"),
      siteId: userData.twitter.id,
      creator: userData.twitter.username,
      creatorId: userData.twitter.id,
      card: "summary_large_image",
    },
    openGraph: {
      type: "website",
      title: title,
      description: t("config.metadata.description"),
      url: "/opengraph-image"
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#020817",
};
