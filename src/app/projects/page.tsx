import { Metadata } from "next";
import Link from "next/link";

import { projectsList, userData } from "@/config";

import { FadeIn } from "@/components/animation";
import { Icon } from "@/components/ui";
import { ProjectCard } from "./components";

export const metadata: Metadata = {
  title: "My projects",
};

export default function ProjectsPage() {
  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <div className="flex flex-col gap-2">
        <FadeIn
          as="h1"
          className="font-bold text-2xl sm:text-3xl"
          delay={0.1}
          duration={0.5}
        >
          My projects
        </FadeIn>
        <FadeIn as="p" delay={0.2} duration={0.5}>
          <span className="opacity-80">
            Here are some of the projects I have worked on, you can find more on
            my
          </span>{" "}
          <Link
            href={userData.githubUrl}
            className="link underline"
            target="_blank"
          >
            GitHub <Icon.github size={16} className="inline-block" />
          </Link>
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
