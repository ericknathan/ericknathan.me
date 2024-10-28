import type { Metadata, Viewport } from "next";
import { createTranslator } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { appLocales, keywords, userData, websiteUrl } from "@/config";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/themes.css";

import { EasterEggs, ScrollToTop } from "@/components/app";
import {
  InternalizationProvider,
  ThemeProvider,
  ToasterProvider,
} from "@/contexts";
import { Analytics } from "@/lib/scripts/analytics.script";

const inter = Inter({ subsets: ["latin"] });
const locales = appLocales.map((locale) => locale.name);

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const { locale } = await props.params;
  const { children } = props;

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  setRequestLocale(locale);

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
            {children}
            <ScrollToTop />
            <ToasterProvider />
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

export async function generateMetadata(
  props: RootLayoutProps
): Promise<Metadata> {
  const { locale } = await props.params;

  const messages = (await import(`/messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  let languages: Record<string, URL> = {};

  locales.map((loc) => {
    languages[loc] = new URL(`${websiteUrl}/${loc}`);
  });

  const title = `${userData.name} - ${t("config.userData.role")}`;

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
      url: "/opengraph-image",
    },
    applicationName: title,
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#020817",
};
