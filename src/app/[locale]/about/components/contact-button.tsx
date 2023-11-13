import { Button, Icon } from "@/components/ui";
import { socials } from "@/config";
import Link from "next/link";

export function ContactButton(social: (typeof socials)[0]) {
  const ButtonIcon = Icon[social.icon];

  return (
    <Button asChild variant="outline" className="min-w-fit flex-1">
      <Link className="!text-inherit !no-underline" href={social.href}>
        <ButtonIcon size={16} className="mr-2" />
        {social.name}
      </Link>
    </Button>
  );
}