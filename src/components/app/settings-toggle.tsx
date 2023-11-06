"use client";

import { useTheme } from "next-themes";

import { Button, DropdownMenu, Icon } from "@/components/ui";
import { Link, usePathname } from '@/navigation'

export function SettingsToggle() {
  const { setTheme } = useTheme();

  const pathname = usePathname();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
          <Icon.settings
            size={16}
            className="rotate-0 scale-100 transition-all"
          />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Label className="text-xs font-medium">
          Theme
        </DropdownMenu.Label>
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          <Icon.sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          <Icon.moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Label className="text-xs font-medium">
          Language
        </DropdownMenu.Label>
        <DropdownMenu.Item asChild>
          <Link href={pathname} locale="en">
            <Icon.flagUs className="rounded w-4 h-4 mr-2" /> English
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link href={pathname} locale="pt-BR">
            <Icon.flagBr className="rounded w-4 h-4 mr-2" /> Português
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
