import { Metadata } from "next";

import { FadeIn } from "@/components/animation";
import {
  AcademicBackgroundSection,
  BioSection,
  ClosingNoteSection,
  GetInTouchSection,
  PersonalInterestsSection,
  TLDRSection,
} from "./sections";

export const metadata: Metadata = {
  title: "About me",
};

const sections = [
  TLDRSection,
  BioSection,
  AcademicBackgroundSection,
  PersonalInterestsSection,
  GetInTouchSection,
  ClosingNoteSection,
];

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <FadeIn as="h1" className="font-bold text-2xl sm:text-3xl" duration={0.5}>
        About me
      </FadeIn>
      <div className="prose dark:prose-invert prose-headings:text-primary prose-headings:mt-0 max-w-full prose-a:text-primary">
        {sections.map((Section, index) => (
          <FadeIn
            startOnScrollIntersect
            key={index}
            delay={0.1}
            duration={0.5}
          >
            <Section />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
