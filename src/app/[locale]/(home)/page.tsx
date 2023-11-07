import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

import { experiencesList, projectsList } from "@/config";

import { FadeIn } from "@/components/animation";
import { Avatar } from "@/components/app";
import { Button, Icon } from "@/components/ui";
import { Locale } from "@/navigation";
import {
  ProjectCard,
  SectionTitle,
  TechStackBadges,
  WorkExperienceCard,
} from "./components";
import { PostsList } from "./sections/post-list";

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const userData = useTranslations("config.userData");
  const t = useTranslations("pages.home");

  unstable_setRequestLocale(locale);

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <div>
        <div className="flex gap-6 items-center">
          <FadeIn className="h-24 w-24 aspect-square rounded-lg overflow-hidden">
            <Avatar className="w-full h-full object-cover" size={100} />
          </FadeIn>
          <div className="flex-1">
            <FadeIn
              as="h1"
              className="font-bold text-2xl sm:text-3xl"
              delay={0.1}
              duration={0.5}
            >
              {userData("name")}
            </FadeIn>
            <FadeIn
              as="span"
              className="text-muted-foreground block"
              delay={0.2}
              duration={0.5}
            >
              {userData("role")}{" "}
              {userData("company.name") ? (
                <>
                  @{" "}
                  <Link
                    href={userData("company.url")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    <span className="underline">
                      {userData("company.name")}
                    </span>
                  </Link>
                </>
              ) : null}
            </FadeIn>
            <TechStackBadges />
          </div>
        </div>
        <TechStackBadges className="flex xs:hidden justify-center" />
      </div>
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
