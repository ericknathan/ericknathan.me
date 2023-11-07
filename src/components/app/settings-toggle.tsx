"use client";

import { useLocale, useTranslations } from "next-intl";

import {
  ColorScheme,
  Theme,
  appColorSchemes,
  appLocales,
  appThemes,
} from "@/config";
import { useTheme } from "@/contexts";
import { cn } from "@/lib/utils";

import { Button, DropdownMenu, DynamicIcon, Icon } from "@/components/ui";
import { Link, usePathname } from "@/navigation";

interface SettingsToggleProps {
  onClose: () => void;
}

export function SettingsToggle({ onClose }: SettingsToggleProps) {
  const { setTheme, theme, setColorScheme, colorScheme } = useTheme();
  const currentLocale = useLocale();

  const pathname = usePathname();
  const t = useTranslations("components.settingsToggle");

  function onThemeChange(theme: Theme) {
    setTheme(theme);
    onClose();
  }

  function onColorSchemeChange(colorScheme: ColorScheme) {
    setColorScheme(colorScheme);
    onClose();
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0 z-50">
          <Icon.settings
            size={16}
            className="rotate-0 scale-100 transition-all"
          />
          <span className="sr-only">{t("name")}</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Label className="text-xs font-medium">
          {t("theme.title")}
        </DropdownMenu.Label>
        {appThemes.map(({ name, icon: iconName }) => (
          <DropdownMenu.Item
            key={name}
            onClick={() => onThemeChange(name)}
            checked={theme === name}
          >
            <DynamicIcon name={iconName} className="mr-2 h-4 w-4" />
            <span>{t(`theme.buttons.${name}` as any)}</span>
          </DropdownMenu.Item>
        ))}
        <DropdownMenu.Separator />
        <DropdownMenu.Label className="text-xs font-medium">
          {t("colorScheme.title")}
        </DropdownMenu.Label>
        {appColorSchemes.map(({ name }) => (
          <DropdownMenu.Item
            key={name}
            onClick={() => onColorSchemeChange(name)}
            checked={colorScheme === name}
          >
            <div
              className={cn(name, theme, "rounded w-4 h-4 mr-2 bg-primary")}
            />
            <span>{t(`colorScheme.buttons.${name}` as any)}</span>
          </DropdownMenu.Item>
        ))}
        <DropdownMenu.Separator />
        <DropdownMenu.Label className="text-xs font-medium">
          {t("language.title")}
        </DropdownMenu.Label>
        {appLocales.map(({ label: name, name: locale, icon: iconName }) => (
          <DropdownMenu.Item
            asChild
            key={locale}
            checked={locale === currentLocale}
          >
            <Link href={pathname} locale={locale}>
              <DynamicIcon name={iconName} className="rounded mr-2 w-4 h-4" />{" "}
              {name}
            </Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
