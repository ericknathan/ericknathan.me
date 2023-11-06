"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Link, usePathname } from "@/navigation";

export function SidebarIdentification() {
  const pathname = usePathname();
  const userData = useTranslations("config.userData");

  return (
    <Link
      href="/"
      className={cn(
        "w-full md:border-b md:px-3 overflow-hidden transition-all flex items-center duration-500",
        pathname === "/"
          ? "h-0 border-transparent opacity-0 pointer-events-none"
          : "md:h-[4.875rem]"
      )}
      tabIndex={pathname === "/" ? -1 : 0}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={userData("avatarUrl")}
          alt={userData("avatarAltDescription")}
          className="rounded-md"
          width={36}
          height={36}
        />
        <div className="flex flex-col justify-between h-full">
          <p className="text-sm font-medium">{userData("name")}</p>
          <p className="text-xs text-muted-foreground">{userData("role")}</p>
        </div>
      </div>
    </Link>
  );
}
