"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider enableSystem disableTransitionOnChange {...props}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </NextThemesProvider>
  );
}
