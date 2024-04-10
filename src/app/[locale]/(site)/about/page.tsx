import { createTranslator } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/animation";
import { Locale, locales } from "@/navigation";
import { Sections } from "./sections";

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export default async function AboutPage({
  params: { locale },
}: AboutPageProps) {
  unstable_setRequestLocale(locale);

  if (!locales.includes(locale)) {
    return notFound();
  }

  const t = await getTranslations("pages.about");

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <FadeIn as="h1" className="font-bold text-2xl sm:text-3xl" duration={0.5}>
        {t("title")}
      </FadeIn>
      <Sections locale={locale} />
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: AboutPageProps) {
  const messages = (await import(`/messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pages.about.title"),
  };
}
