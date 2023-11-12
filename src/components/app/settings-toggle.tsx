"use client";

import { useLocale, useTranslations } from "next-intl";

import {
  ColorScheme,
  Theme,
  appColorSchemesWithoutLocked,
  appLocales,
  appThemes,
  lockedColors,
} from "@/config";
import { useTheme } from "@/contexts";
import { cn } from "@/lib/utils";

import { Button, DropdownMenu, DynamicIcon, Icon } from "@/components/ui";
import { Link, usePathname } from "@/navigation";

interface SettingsToggleProps extends React.ComponentProps<typeof Button> {
  onClose: () => void;
}

export function SettingsToggle({
  onClose,
  className,
  ...props
}: SettingsToggleProps) {
  const { setTheme, theme, setColorScheme, colorScheme, unlockedColorSchemes } =
    useTheme();
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

  const enableThemeChange = !lockedColors.includes(colorScheme);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("h-9 w-9 px-0 z-50 group", className)}
          {...props}
        >
          <Icon.settings
            size={16}
            className="group-hover:rotate-90 group-data-[state='open']:rotate-90 transition-all"
          />
          <span className="sr-only">{t("name")}</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="data-[state=closed]:!animate-none min-w-[50vw] md:min-w-0"
        align="end"
      >
        <DropdownMenu.Label className="text-xs font-medium">
          {t("theme.title")}
        </DropdownMenu.Label>
        {appThemes.map(({ name, icon: iconName }) => (
          <DropdownMenu.Item
            key={name}
            onClick={() => onThemeChange(name)}
            checked={theme === name && enableThemeChange}
            disabled={!enableThemeChange}
          >
            <DynamicIcon name={iconName} className="mr-2 h-4 w-4" />
            <span>{t(`theme.buttons.${name}` as any)}</span>
          </DropdownMenu.Item>
        ))}
        <DropdownMenu.Separator />
        <DropdownMenu.Label className="text-xs font-medium">
          {t("colorScheme.title")}
        </DropdownMenu.Label>
        {[...appColorSchemesWithoutLocked, ...unlockedColorSchemes].map(
          ({ name }) => (
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
          )
        )}
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
