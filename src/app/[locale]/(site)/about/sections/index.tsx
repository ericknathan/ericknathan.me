import { FadeIn } from "@/components/animation";
import { locales } from "@/navigation";
import { readdirSync } from "fs";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import path from "path";

const sectionNames = [
  "tl-dr",
  "bio",
  "academic-background",
  "personal-interests",
  "get-in-touch",
  "closing-note",
];

export async function Sections({ locale }: { locale: string }) {
  const sections = await Promise.all(
    sectionNames.map((name) => {
      try {
        return require(`./${locale}/${name}.tsx`)
      } catch(error) {
        console.error(error);
        return { default: () => null };
      }
    })
  );

  return (
    <div className="prose dark:prose-invert prose-headings:text-primary prose-headings:mt-0 max-w-full prose-a:text-primary">
      {sections.map(({ default: Section }, index) => (
        <FadeIn startOnScrollIntersect key={index} delay={0.1} duration={0.5}>
          <Section />
        </FadeIn>
      ))}
    </div>
  );
}
