import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { ScrollToTop } from "@/components/app/scroll-to-top";
import { Sidebar } from "@/components/app/sidebar/sidebar";
import { userData } from "@/config";
import { keywords } from "@/config/keywords";
import { ThemeProvider } from "@/contexts/theme.context";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: userData.name,
  },
  description: `${userData.name}: Front-end developer passionate about creating incredible digital experiences. Explore my portfolio and discover how my programming skills can boost your project. Discover my work and get in touch for collaborations or professional opportunities.`,
  authors: [
    {
      name: userData.name,
      url: "https://ericknathan.me",
    },
  ],
  metadataBase: new URL("https://ericknathan.me"),
  keywords: keywords,
  creator: userData.name,
  publisher: userData.name,
};

export const viewport: Viewport = {
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "relative flex flex-col md:flex-row [&:has([data-sidebar-open=true])]:overflow-hidden"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main className="relative w-full mt-10 md:mt-0">{children}</main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
