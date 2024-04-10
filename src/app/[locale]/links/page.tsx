import { FadeIn } from "@/components/animation";
import { PresentationHead } from "@/components/app";
import { Button, Icon } from "@/components/ui";
import { socials } from "@/config";
import { Locale } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

interface LinksPageProps {
  params: {
    locale: Locale;
  };
}

const links = [
  { name: "Website", href: "/", icon: "newspaper" },
  ...socials,
] as const;

export default function LinksPage({ params: { locale } }: LinksPageProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className="container w-fit mx-auto py-10 flex flex-col justify-center h-screen gap-8">
      <PresentationHead />
      <div className="grid gap-2">
        {links.map((social, index) => (
          <FadeIn
            key={social.name}
            delay={0.1 + index * 0.1}
            className="w-full"
          >
            <SocialButton {...social} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function SocialButton(social: (typeof socials)[number]) {
  const IconComponent = Icon[social.icon];

  return (
    <Button variant="ghost" className="bg-black/40 gap-2 h-14 w-full" asChild>
      <Link href={social.href}>
        <IconComponent size={16} /> {social.name}
      </Link>
    </Button>
  );
}
