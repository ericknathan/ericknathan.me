"use client";

import { useTheme } from "next-themes";

import { Button, Icon } from "@/components/ui";

export function SettingsToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-9 px-0"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon.sun
        size={16}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon.moon
        size={16}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
