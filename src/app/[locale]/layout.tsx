import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { keywords, userName } from "@/config";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/themes.css";

import { EasterEggs, ScrollToTop, Sidebar } from "@/components/app";
import { InternalizationProvider, ThemeProvider } from "@/contexts";

const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "pt-BR"];

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: userName,
  },
  description: `${userName}: Front-end developer passionate about creating incredible digital experiences. Explore my portfolio and discover how my programming skills can boost your project. Discover my work and get in touch for collaborations or professional opportunities.`,
  authors: [
    {
      name: userName,
      url: "https://ericknathan.me",
    },
  ],
  metadataBase: new URL("https://ericknathan.me"),
  keywords: keywords,
  creator: userName,
  publisher: userName,
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={cn(
          inter.className,
          "relative flex flex-col md:flex-row [&:has([data-sidebar-open=true])]:overflow-hidden overflow-x-hidden"
        )}
      >
        <InternalizationProvider locale={locale}>
          <ThemeProvider>
            <Sidebar />
            <main className="relative w-full mt-10 md:mt-0 md:ml-72">{children}</main>
            <ScrollToTop />
          </ThemeProvider>

          <Analytics />

          <EasterEggs />
        </InternalizationProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
