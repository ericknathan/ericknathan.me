import { FadeIn } from "@/components/animation";
import { ExperienceModel } from "@/config";
import { WorkExperienceCard } from "./work-xp-card";

interface ExperiencesGridProps {
  experiencesList: ExperienceModel[];
}

export function ExperiencesGrid({ experiencesList }: ExperiencesGridProps) {
  return (
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
  );
}
