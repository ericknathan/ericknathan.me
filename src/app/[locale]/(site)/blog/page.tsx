import { Locale } from "@/navigation";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { UnderConstructionPage } from "../../under-construction";

export const metadata: Metadata = {
  title: "Blog",
};

interface BlogPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function BlogPage(props: BlogPageProps) {
  const { locale } = await props.params;

  setRequestLocale(locale);

  return <UnderConstructionPage />;
}
