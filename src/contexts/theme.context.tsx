"use client";

import { MotionConfig } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ColorScheme, Theme } from "@/config";
import { MEDIA, disableAnimation, getSystemTheme } from "@/lib/utils";
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

  function handleChangeTheme(theme: Theme, colorScheme: ColorScheme) {
    localStorage.setItem(localStorageKeys.theme, theme);
    localStorage.setItem(localStorageKeys.colorScheme, colorScheme);

    document.documentElement.className = `${theme} ${colorScheme}`;
    return disableAnimation();
  }

  useEffect(() => {
    return handleChangeTheme(theme, colorScheme);
  }, [theme, colorScheme]);

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e);
      handleChangeTheme(resolved, colorScheme);
    },
    [theme, colorScheme]
  );

  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== localStorageKeys.theme || e.key !== localStorageKeys.colorScheme) {
        return;
      }

      const theme = e.newValue || getSystemTheme();
      setTheme(theme);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colorScheme, setColorScheme }}
    >
      <ThemeScript
        enableSystem
        enableColorScheme
        defaultTheme="system"
        themeStorageKey={localStorageKeys.theme}
      />
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}
