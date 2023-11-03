import { FadeIn } from "@/components/animation";
import { ProjectImageDialog } from "@/components/app/project-image-dialog";
import { Button, Icon } from "@/components/ui";
import { ProjectModel } from "@/config";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectModel;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { imagePreviewUrl, name, shortDescription, sourceUrl, projectUrl } =
    project;

  return (
    <FadeIn
      startOnScrollIntersect
      to={index % 2 === 0 ? "right" : "left"}
      className="card group flex flex-col gap-6 sm:max-w-[50vw]"
      delay={index % 2 === 0 ? 0 : 0.1}
      duration={0.4}
    >
      <ProjectImageDialog projectName={name} imageUrl={imagePreviewUrl}>
        <button className="overflow-hidden border rounded cursor-zoom-in w-full aspect-video">
          <Image
            className="brightness-75 group-hover:brightness-100 object-cover group-hover:scale-105 w-full h-full transition-all duration-300"
            src={imagePreviewUrl}
            alt=""
            width={1280}
            height={720}
          />
        </button>
      </ProjectImageDialog>
      <div>
        <h2 className="font-semibold leading-none tracking-tight text-xl">
          {name}
        </h2>
        <p className="text-base text-muted-foreground mt-1">
          {shortDescription}
        </p>
      </div>
      <footer className="flex flex-col md:flex-row items-center gap-2 w-full md:w-fit mt-auto">
        {projectUrl && (
          <Button asChild className="text-center w-full md:w-fit">
            <Link href={projectUrl} target="_blank">
              <Icon.arrowUpRight size={16} className="mr-2" /> Visit
            </Link>
          </Button>
        )}
        {sourceUrl && (
          <Button
            asChild
            variant="outline"
            className="text-center w-full md:w-fit"
          >
            <Link href={sourceUrl} target="_blank">
              <Icon.github size={16} className="mr-2" /> Source-code
            </Link>
          </Button>
        )}
      </footer>
    </FadeIn>
  );
}
