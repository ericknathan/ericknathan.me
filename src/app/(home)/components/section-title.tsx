import { Button, Icon } from "@/components/ui";
import Link from "next/link";

interface SectionTitleProps {
  title: string;
  link: string;
  href: string;
}

export function SectionTitle({ title, link, href }: SectionTitleProps) {
  return (
    <header className="flex justify-between items-center">
      <h2 className="font-semibold leading-none tracking-tight text-xl">
        {title}
      </h2>
      <Button size="sm" variant="link" className="-mr-3" asChild>
        <Link href={href}>
          {link}
          <Icon.chevronRight size={14} />
        </Link>
      </Button>
    </header>
  );
}
