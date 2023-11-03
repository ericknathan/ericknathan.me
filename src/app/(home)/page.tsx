import Image from "next/image";
import Link from "next/link";

import { experiencesList, projectsList, userData } from "@/config";
import { postsRequests } from "@/lib/api/requests";

import { FadeIn } from "@/components/animation";
import { Button, Icon } from "@/components/ui";
import { PostCard, ProjectCard, WorkExperienceCard } from "./components";

function SectionTitle({
  title,
  link,
  href,
}: {
  title: string;
  link: string;
  href: string;
}) {
  return (
    <header className="flex justify-between items-center">
      <h2 className="font-semibold leading-none tracking-tight text-xl">
        {title}
      </h2>
      <Button size="sm" variant="link" className="-mr-3" asChild>
        <Link href={href}>
          {link}
          <Icon.chevronRight size={14} />
        </Link>
      </Button>
    </header>
  );
}

export default async function Home() {
  const { payload: postsList } = await postsRequests
    .listPosts({ maxPosts: 2 })
    .catch(() => ({
      payload: [],
    }));

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <div className="flex gap-6 items-center">
        <FadeIn>
          <Image
            src={userData.avatarUrl}
            className="h-24 w-24 rounded-lg object-contain"
            alt={userData.avatarAltDescription}
            width={100}
            height={100}
          />
        </FadeIn>
        <div>
          <FadeIn
            as="h1"
            className="font-bold text-2xl sm:text-3xl"
            delay={0.1}
            duration={0.5}
          >
            {userData.name}
          </FadeIn>
          <FadeIn
            as="span"
            className="text-muted-foreground block"
            delay={0.2}
            duration={0.5}
          >
            {userData.role}{" "}
            {userData.company ? (
              <>
                at{" "}
                <Link
                  href={userData.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  @<span className="underline">{userData.company.name}</span>
                </Link>
              </>
            ) : null}
          </FadeIn>
        </div>
      </div>
      <FadeIn className="grid w-full gap-2 card" duration={0.5}>
        <SectionTitle title="📋 About me" link="Read more" href="/about" />
        <p className="leading-relaxed text-muted-foreground">
          {userData.description}
        </p>
      </FadeIn>
      <div className="grid xl:grid-cols-2 gap-[inherit]">
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <SectionTitle
            title="💼 Experiences"
            link="Hire me"
            href="https://linkedin.com/in/ericknathan"
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
                href="/documents/Erick Nathan - Frontend Developer.pdf"
                download
                target="_blank"
                prefetch={false}
              >
                Download CV <Icon.download size={16} className="ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </FadeIn>
        <FadeIn
          to="left"
          duration={0.5}
          delay={0.1}
          className="card flex flex-col gap-2"
        >
          <SectionTitle title="📰 Latest posts" href="/blog" link="See all" />
          {postsList.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 group">
              <div className="flex items-center bg-accent rounded-full h-20 w-20 group-hover:rotate-6 transition-all">
                <Image
                  src="/images/memojis/ouch-sweat.png"
                  alt="😅"
                  width={80}
                  height={80}
                  className="pt-2"
                />
              </div>

              <span className="text-muted-foreground">
                I haven&apos;t written anything yet
              </span>
            </div>
          ) : (
            <ol>
              {postsList.map((postData: any, index: number) => (
                <li key={`post-${postData.title}-${index}`}>
                  <PostCard data={postData} />
                </li>
              ))}
            </ol>
          )}
        </FadeIn>
      </div>
      <FadeIn>
        <div className="card">
          <SectionTitle
            title="📂 My projects"
            href="/projects"
            link="See all"
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
