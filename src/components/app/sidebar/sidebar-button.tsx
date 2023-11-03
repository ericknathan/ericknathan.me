"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button, IconName } from "@/components/ui";

interface SidebarButtonProps {
  data: {
    href: string;
    label: string;
    icon: IconName;
    disabled?: boolean;
  };
}

export function SidebarButton({ data }: SidebarButtonProps) {
  const { href, label, icon, disabled } = data;

  const pathname = usePathname();
  const isActive = pathname === href;
  const isInternalLink = href.startsWith("/");

  const Icon = Icon[icon];

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
        <Icon size={16} />
        <span className="w-full">{label}</span>
        {!isInternalLink && (
          <Icon.arrowUpRight className="opacity-75" size={16} />
        )}
      </Link>
    </Button>
  );
}
