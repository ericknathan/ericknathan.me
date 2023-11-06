"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

import { ColorScheme, Theme, colors, themes } from "@/config";
import { disableAnimation, getSystemTheme } from "@/lib/utils";
import { ThemeScript } from "../lib/scripts/theme.script";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const localStorageKeys = {
  theme: "@ericknathan.me/theme",
  colorScheme: "@ericknathan.me/colorScheme",
};

function getLocalStorageTheme(key: string) {
  const isServer = typeof window === "undefined";

  if (isServer) return undefined;

  return localStorage.getItem(key);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    (getLocalStorageTheme(localStorageKeys.theme) as Theme) || getSystemTheme()
  );
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (getLocalStorageTheme(localStorageKeys.colorScheme) as ColorScheme) ||
      "blue"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKeys.theme, theme);
    localStorage.setItem(localStorageKeys.colorScheme, colorScheme);

    const attrs = [...themes, ...colors];
    document.documentElement.classList.remove(...attrs);
    document.documentElement.classList.add(theme, colorScheme);

    return disableAnimation();
  }, [theme, colorScheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colorScheme, setColorScheme }}
    >
      <ThemeScript
        enableSystem
        enableColorScheme
        defaultTheme="system"
        themeStorageKey={localStorageKeys.theme}
        colorStorageKey={localStorageKeys.colorScheme}
      />
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}
