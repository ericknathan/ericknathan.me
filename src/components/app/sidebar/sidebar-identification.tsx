import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface SidebarIdentificationProps {
  pathname: string;
  messages: {
    name: string;
    role: string;
    avatarUrl: string;
    avatarAltDescription: string;
  }
}

export function SidebarIdentification({
  pathname,
  messages
}: SidebarIdentificationProps) {
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
          src={messages.avatarUrl}
          alt={messages.avatarAltDescription}
          className="rounded-md"
          width={36}
          height={36}
        />
        <div className="flex flex-col justify-between h-full">
          <p className="text-sm font-medium">{messages.name}</p>
          <p className="text-xs text-muted-foreground">{messages.role}</p>
        </div>
      </div>
    </Link>
  );
}
