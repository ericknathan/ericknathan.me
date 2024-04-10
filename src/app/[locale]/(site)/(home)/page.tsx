import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

import { experiencesList, projectsList } from "@/config";

import { FadeIn } from "@/components/animation";
import { PresentationHead } from "@/components/app";
import { Button, Icon } from "@/components/ui";
import { Locale } from "@/navigation";
import { ProjectCard, SectionTitle, WorkExperienceCard } from "./components";
import { PostsList } from "./sections/post-list";

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

          <ol className="flex flex-col h-full gap-6">
            {experiencesList
              .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
              .sort((a, b) => (a.highlight && !b.highlight ? -1 : 1))
              .map((experienceData, index) => (
                <FadeIn
                  key={`company-${experienceData.company}-${index}`}
                  delay={0.2 + 0.1 * index}
                  duration={0.4}
                  startOnScrollIntersect
                  as="li"
                >
                  <WorkExperienceCard data={experienceData} />
                </FadeIn>
              ))}
          </ol>
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
        <FadeIn
          to="left"
          duration={0.5}
          delay={0.1}
          className="card flex flex-col gap-2 min-h-[18rem]"
        >
          <SectionTitle
            title={t("latestPosts.title")}
            link={t("latestPosts.link")}
            href="/blog"
          />
          <PostsList emptyMessage={t("latestPosts.emptyMessage")} />
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
