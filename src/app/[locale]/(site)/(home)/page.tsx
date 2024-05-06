import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

import { experiencesList, projectsList } from "@/config";

import { FadeIn } from "@/components/animation";
import { PresentationHead } from "@/components/app";
import { Button, Icon } from "@/components/ui";
import { Locale } from "@/navigation";
import { ExperiencesGrid, ProjectCard, SectionTitle } from "./components";

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);

  const [userData, t] = await Promise.all([
    getTranslations("config.userData"),
    getTranslations("pages.home"),
  ]);

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <PresentationHead />
      <FadeIn className="grid w-full gap-2 card" duration={0.5}>
        <SectionTitle
          title={t("about.title")}
          link={t("about.link")}
          href="/about"
        />
        <p className="leading-relaxed text-muted-foreground">
          {t("about.userDescription")}
        </p>
      </FadeIn>
      <div className="grid xl:grid-cols-2 gap-[inherit]">
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <SectionTitle
            title={t("experiences.title")}
            link={t("experiences.link")}
            href={userData("linkedinUrl")}
          />

          <ExperiencesGrid
            experiencesList={experiencesList.filter(
              ({ type }) => type === "work"
            )}
          />
          <FadeIn
            to="top"
            startOnScrollIntersect
            className="w-full"
            delay={0.2}
          >
            <Button className="w-full" asChild>
              <Link
                href={userData("cvUrl")}
                download
                target="_blank"
                prefetch={false}
              >
                {t("experiences.downloadCv")}{" "}
                <Icon.download size={16} className="ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </FadeIn>
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <SectionTitle title={t("education.title")} />

          <ExperiencesGrid
            experiencesList={experiencesList.filter(
              ({ type }) => type === "educational"
            )}
          />
        </FadeIn>
      </div>
      <FadeIn>
        <div className="card">
          <SectionTitle
            title={t("projects.title")}
            link={t("projects.link")}
            href="/projects"
          />
          <div className="flex flex-col gap-8 mt-8">
            {projectsList
              .filter((project) => project.highlight)
              .map((project, index) => (
                <ProjectCard project={project} index={index} key={project.id} />
              ))}
          </div>
          <footer></footer>
        </div>
      </FadeIn>
    </div>
  );
}
