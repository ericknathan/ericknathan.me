import { FadeIn } from "@/components/animation";
import { uses } from "@/config";
import { cn } from "@/lib/utils";
import { Locale } from "@/navigation";
import { createTranslator } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

interface UsesPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function UsesPage(props: UsesPageProps) {
  const { locale } = await props.params;

  setRequestLocale(locale);

  const t = await getTranslations("pages.uses");

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <div className="flex flex-col gap-2">
        <FadeIn
          as="h1"
          className="font-bold text-2xl sm:text-3xl"
          delay={0.1}
          duration={0.5}
        >
          {t("title")}
        </FadeIn>
        <FadeIn as="p" delay={0.2} duration={0.5}>
          <span className="opacity-80">{t("description")}</span>
        </FadeIn>
      </div>
      {uses.map(({ title, items }) => (
        <section
          id={title.toLowerCase()}
          key={title}
          className="flex flex-col gap-4"
        >
          <FadeIn
            as="h2"
            className="font-bold text-xl sm:text-2xl"
            delay={0.1}
            duration={0.5}
            startOnScrollIntersect
          >
            {t(`categories.${title}` as any)}
          </FadeIn>
          <FadeIn
            as="ul"
            delay={0.1}
            duration={0.5}
            to="top"
            startOnScrollIntersect
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors",
                    "focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={cn(
                      "p-2 flex items-center justify-center rounded-lg relative overflow-hidden",
                      item.invert && "dark:invert"
                    )}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="z-10"
                      loading="lazy"
                    />
                    <Image
                      src={item.icon}
                      alt=""
                      width={8}
                      height={8}
                      className="blur-lg absolute inset-0 w-[125%] h-[125%] opacity-80 z-0"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{item.name}</span>
                </Link>
              </li>
            ))}
          </FadeIn>
        </section>
      ))}
    </div>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  const messages = (await import(`/messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pages.uses.title"),
    description: t("pages.uses.description"),
  };
}
