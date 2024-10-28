import { createTranslator } from "next-intl";
import Link from "next/link";

import { projectsCategories, projectsList } from "@/config";

import { FadeIn } from "@/components/animation";
import { Icon } from "@/components/ui";
import { Locale } from "@/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "./components";

interface ProjectsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function ProjectsPage(props: ProjectsPageProps) {
  const { locale } = await props.params;

  setRequestLocale(locale);

  const [userData, t] = await Promise.all([
    getTranslations("config.userData"),
    getTranslations("pages.projects"),
  ]);

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
      {Object.entries(projectsCategories).map(([category, categoryLabel]) => (
        <div key={category} className="mb-4 flex flex-col gap-4">
          <FadeIn
            as="h2"
            className="font-bold text-xl sm:text-2xl"
            delay={0.1}
            duration={0.5}
            startOnScrollIntersect
          >
            {categoryLabel}
          </FadeIn>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center md:grid-cols-1 lg:grid-cols-2">
            {projectsList
              .filter((project) => project.category === category)
              .map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </div>
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
    title: t("pages.projects.title"),
  };
}
