import { createTranslator, useTranslations } from "next-intl";
import Link from "next/link";

import { projectsList } from "@/config";

import { FadeIn } from "@/components/animation";
import { Icon } from "@/components/ui";
import { ProjectCard } from "./components";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/navigation";

interface ProjectsPageProps {
  params: {
    locale: Locale;
  };
}

export default function ProjectsPage({ params: { locale } }: ProjectsPageProps) {
  const userData = useTranslations("config.userData");
  const t = useTranslations("pages.projects");

  unstable_setRequestLocale(locale);

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
          <span className="opacity-80">
            {t.rich("description", {
              github: (chunks) => (
                <Link
                  href={userData("githubUrl")}
                  className="link underline brightness-110"
                  target="_blank"
                >
                  {chunks} <Icon.github size={16} className="inline-block" />
                </Link>
              ),
            })}
          </span>{" "}
        </FadeIn>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center md:grid-cols-1 lg:grid-cols-2">
        {projectsList.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pages.projects.title"),
  };
}
