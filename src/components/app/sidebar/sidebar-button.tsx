"use client";

import { usePathname, Link } from "@/navigation";

import { cn } from "@/lib/utils";

import { Button, Icon, IconName } from "@/components/ui";

export type SidebarButtonProps = {
  name: string;
  href: string;
  label: string;
  icon: IconName;
  disabled?: boolean;
}

export function SidebarButton(data: SidebarButtonProps) {
  const { href, label, icon, disabled } = data;

  const pathname = usePathname();
  const isActive = pathname === href;
  const isInternalLink = href.startsWith("/");

  const ButtonIcon = Icon[icon];

  return (
    <Button
      variant="ghost"
      className={cn("group w-full text-start gap-2", {
        "bg-accent": isActive,
        "cursor-default opacity-50 pointer-events-none": disabled,
      })}
      asChild
      disabled={disabled}
    >
      <Link
        href={href}
        target={isInternalLink ? "_self" : "_blank"}
        rel="noopener noreferrer"
      >
        <ButtonIcon size={16} />
        <span className="w-full">{label}</span>
        {!isInternalLink && (
          <Icon.arrowUpRight className="opacity-75" size={16} />
        )}
      </Link>
    </Button>
  );
}
