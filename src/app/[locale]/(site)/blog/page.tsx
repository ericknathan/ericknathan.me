import { Locale } from "@/navigation";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { UnderConstructionPage } from "../../under-construction";

export const metadata: Metadata = {
  title: "Blog",
};

interface BlogPageProps {
  params: {
    locale: Locale;
  };
}

export default function BlogPage({ params: { locale } }: BlogPageProps) {
  unstable_setRequestLocale(locale);

  return <UnderConstructionPage />;
}
