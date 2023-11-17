import { FadeIn } from "@/components/animation";
import { AuthContextProvider } from "@/contexts";
import { Locale } from "@/navigation";
import { createTranslator, useTranslations } from "next-intl";
import { GuestbookForm } from "./components/guestbook-form";
import { MessagesList } from "./components/messages-list";

interface GuestbookPageProps {
  params: {
    locale: Locale;
  };
}

export default function GestbookPage() {
  const t = useTranslations("pages.guestbook");

  return (
    <AuthContextProvider>
      <div className="container max-w-4xl py-14 flex flex-col gap-6 min-h-[101vh]">
        <FadeIn
          as="h1"
          className="font-bold text-2xl sm:text-3xl"
          duration={0.5}
        >
          {t("title")}
        </FadeIn>
        <FadeIn as="p" delay={0.2} duration={0.5} className="opacity-80">
          {t("description")}
        </FadeIn>
        <FadeIn duration={0.5} delay={0.3}>
          <GuestbookForm />
        </FadeIn>
        <MessagesList />
      </div>
    </AuthContextProvider>
  );
}

export async function generateMetadata({
  params: { locale },
}: GuestbookPageProps) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pages.guestbook.title"),
    description: t("pages.guestbook.description"),
  };
}
