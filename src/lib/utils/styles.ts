import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function disableAnimation() {
  const css = document.createElement("style");

  return () => {
    // Force restyle
    (() => {
      css.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css);
      return window.getComputedStyle(document.body);
    })();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
}

export function getSystemTheme(e?: MediaQueryList | MediaQueryListEvent) {
  if (!e) e = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = e.matches;
  const systemTheme = isDark ? "dark" : "light";
  return systemTheme;
}
