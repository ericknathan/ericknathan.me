import { createTranslator, useTranslations } from "next-intl";

import { FadeIn } from "@/components/animation";
import { Sections } from "./sections";

interface AboutPageProps {
  params: {
    locale: string;
  }
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  const t = useTranslations("pages.about");

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <FadeIn as="h1" className="font-bold text-2xl sm:text-3xl" duration={0.5}>
        {t("title")}
      </FadeIn>
      <Sections locale={locale} />
    </div>
  );
}

export async function generateMetadata({
  params: { locale },
}: AboutPageProps) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pages.about.title"),
  };
}