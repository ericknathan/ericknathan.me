import { ProjectModel } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../../../components/animation";
import { ProjectImageDialog } from "../../../components/app/project-image-dialog";
import { Button, Icon } from "../../../components/ui";

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
      to={index % 2 === 0 ? "left" : "right"}
      delay={0.1 * index}
      id="project"
      className="flex gap-4 group flex-col-reverse items-center lg:flex-row lg:odd:flex-row-reverse"
      duration={0.4}
    >
      <div className="flex justify-center gap-1 flex-col w-full lg:w-1/2 lg:group-odd:text-end lg:group-odd:items-end">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-base text-muted-foreground">{shortDescription}</p>
        <footer className="flex flex-col xs:flex-row items-center gap-2 w-full xs:w-fit mt-2">
          {projectUrl && (
            <Button asChild className="text-center w-full xs:w-fit">
              <Link href={projectUrl} target="_blank">
                <Icon.arrowUpRight size={16} className="mr-2" /> Visit
              </Link>
            </Button>
          )}
          {sourceUrl && (
            <Button
              asChild
              variant="outline"
              className="text-center w-full xs:w-fit"
            >
              <Link href={sourceUrl} target="_blank">
                <Icon.github size={16} className="mr-2" /> Source-code
              </Link>
            </Button>
          )}
        </footer>
      </div>
      <ProjectImageDialog projectName={name} imageUrl={imagePreviewUrl}>
        <Image
          src={imagePreviewUrl}
          alt={`Preview of ${name} project`}
          className="dark:border-none border project-image rounded-lg max-w-[25rem] w-full max-lg:!transform-none lg:max-w-none lg:w-1/2 h-fit aspect-video shadow-2xl shadow-primary/10 cursor-zoom-in"
          width={1280}
          height={720}
        />
      </ProjectImageDialog>
    </FadeIn>
  );
}
