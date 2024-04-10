import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface InternalizationProviderProps {
  children: React.ReactNode;
  locale: string;
}

export async function InternalizationProvider({
  children,
  locale,
}: InternalizationProviderProps) {
  let messages;
  try {
    messages = (await import(`/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Sao_Paulo"
    >
      {children}
    </NextIntlClientProvider>
  );
}
