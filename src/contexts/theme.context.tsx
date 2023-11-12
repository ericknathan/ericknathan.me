"use client";

import { MotionConfig } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  AppColorScheme,
  ColorScheme,
  Theme,
  appColorSchemesWithoutLocked,
  colors,
  storageKeys,
  themes,
} from "@/config";
import { toast } from "@/hooks";
import { ThemeScript } from "@/lib/scripts";
import {
  disableAnimation,
  getLocalStorageItem,
  getSystemTheme,
} from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;

  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;

  unlockedColorSchemes: AppColorScheme[];
  unlockColorScheme: (colorScheme: ColorScheme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const t = useTranslations("components.themeEasterEgg");

  const [theme, setTheme] = useState<Theme>(
    (getLocalStorageItem(storageKeys.theme) as Theme) || getSystemTheme()
  );
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (getLocalStorageItem(storageKeys.colorScheme) as ColorScheme) || "blue"
  );
  const [unlockedColorSchemes, setUnlockedColorSchemes] = useState<
    ColorScheme[]
  >(JSON.parse(getLocalStorageItem(storageKeys.unlockedColorSchemes) || "[]"));

  const unlockColorScheme = useCallback((colorScheme: ColorScheme, extraDescription?: string) => {
    const unlockedColorSchemes: ColorScheme[] = JSON.parse(
      localStorage.getItem(storageKeys.unlockedColorSchemes) || "[]"
    );

    if (!unlockedColorSchemes.includes(colorScheme)) {
      const newUnlockedColorSchemes = [...unlockedColorSchemes, colorScheme];
      setUnlockedColorSchemes(newUnlockedColorSchemes);
      localStorage.setItem(
        storageKeys.unlockedColorSchemes,
        JSON.stringify(newUnlockedColorSchemes)
      );
      toast({
        title: t("notification.title"),
        description:
          t("notification.description", { colorScheme }) + extraDescription,
        duration: 10000,
      });
    }
  }, [t]);

  const registerUsedColorScheme = useCallback((newColorScheme: ColorScheme) => {
    const colorSchemesAlreadyUsed = JSON.parse(
      localStorage.getItem(storageKeys.colorSchemesAlreadyUsed) || "[]"
    );
    if (!colorSchemesAlreadyUsed.includes(newColorScheme)) {
      const newColorSchemesAlreadyUsed = [
        ...colorSchemesAlreadyUsed,
        newColorScheme,
      ];
      localStorage.setItem(
        storageKeys.colorSchemesAlreadyUsed,
        JSON.stringify(newColorSchemesAlreadyUsed)
      );

      if (
        newColorSchemesAlreadyUsed.length ===
        appColorSchemesWithoutLocked.length
      ) {
        unlockColorScheme("dracula", "🦇🦇🦇");
        setTheme("dark");
      }
    }
  }, [unlockColorScheme]);

  useEffect(() => {
    localStorage.setItem(storageKeys.theme, theme);
    localStorage.setItem(storageKeys.colorScheme, colorScheme);

    const attrs = [...themes, ...colors];
    document.documentElement.classList.remove(...attrs);
    document.documentElement.classList.add(theme, colorScheme);

    registerUsedColorScheme(colorScheme);

    return disableAnimation();
  }, [theme, colorScheme, registerUsedColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colorScheme,
        setColorScheme,
        unlockedColorSchemes: unlockedColorSchemes.map((name) => ({ name })),
        unlockColorScheme,
      }}
    >
      <ThemeScript
        enableSystem
        enableColorScheme
        defaultTheme="system"
        themeStorageKey={storageKeys.theme}
        colorStorageKey={storageKeys.colorScheme}
      />
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}
