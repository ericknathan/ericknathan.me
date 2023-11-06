"use client";

import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { navbarSections } from "@/config";
import { cn } from "@/lib/utils";

import { Button, Icon } from "@/components/ui";
import { SettingsToggle } from "../settings-toggle";
import { SidebarButton } from "./sidebar-button";
import { SidebarIdentification } from "./sidebar-identification";
import { SidebarSpotifyIndicator } from "./sidebar-spotify-indicator";

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations("config.navbarSections");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = navbarSections.map((section) => ({
    title: t(`${section.name}.title` as any),
    buttons: section.buttons.map((button) => ({
      ...button,
      label: !button.label
        ? t(`${section.name}.buttons.${button.name}` as any)
        : button.label,
    })),
  }));

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    function keyboardEvents(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", keyboardEvents);
    return () => document.removeEventListener("keydown", keyboardEvents);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <aside
      className="fixed top-0 flex flex-col w-full md:w-72 border-r md:h-[100dvh] z-50 border-b md:border-b-0"
      data-sidebar-open={isMenuOpen}
    >
      <header className="flex md:hidden z-50 bg-background justify-between py-3 px-8 border-b">
        <SidebarIdentification />
        <Button variant="outline" size="icon" onClick={handleToggleMenu}>
          <Icon.hamburger size={16} />
        </Button>
      </header>
      <div
        className={cn(
          "h-full flex flex-col w-full bg-background rounded-b-md z-50 transition-all overflow-hidden duration-500",
          isMenuOpen
            ? "max-md:h-[70vh] max-md:border-b"
            : "max-md:h-0 max-md:-mb-1"
        )}
      >
        <div className="hidden md:flex w-full">
          <SidebarIdentification />
        </div>

        <ul className="border-b p-3 flex-1 overflow-x-auto">
          {sections.map(({ title, buttons }, index) => (
            <li className="w-full" key={`${title}-${index}`}>
              {title.trim() !== "" && (
                <p className="px-3 pt-5 pb-2 text-xs font-semibold text-muted-foreground">
                  {title}
                </p>
              )}
              {buttons
                .sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0))
                .map((buttonProps) => (
                  <SidebarButton key={buttonProps.name} {...buttonProps} />
                ))}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center px-3 gap-3 relative">
          <SidebarSpotifyIndicator />
          <SettingsToggle onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>
      <div
        className={cn(
          "bg-background/50 w-screen h-[calc(30vh_-_4rem)] backdrop-blur-sm fixed bottom-0 z-20 transition-all duration-500 md:transition-none",
          isMenuOpen
            ? "max-md:opacity-100 max-md:pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={handleToggleMenu}
      />
    </aside>
  );
}
