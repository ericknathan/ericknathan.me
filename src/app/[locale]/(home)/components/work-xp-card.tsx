import Image from "next/image";
import { useTranslations } from "next-intl";

import { ExperienceModel } from '@/config'

interface WorkExperienceCardProps {
  data: ExperienceModel;
}

export function WorkExperienceCard({ data }: WorkExperienceCardProps) {
  const { company, startDate, endDate, image } = data;
  const role = useTranslations("config")(`roles.${company}` as any);
  const t = useTranslations("components.experienceCard")

  return (
    <div className="flex gap-4">
      <div className="rounded-full h-10 w-10 aspect-square flex justify-center items-center ring-1 bg-muted ring-muted-foreground/40 p-1">
        <Image
          src={image}
          width={40}
          height={40}
          alt={`${company} logo`}
          className="rounded-full aspect-square opacity-90"
        />
      </div>
      <dl className="flex flex-col gap-x-2 w-full">
        <dt className="sr-only">{t("company")}</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dd>
        <dt className="sr-only">{t("role")}</dt>
        <dd className="text-xs text-accent-foreground/80">{role}</dd>
        <dt className="sr-only">{t("date")}</dt>
        <dd className="text-xs text-muted-foreground flex">
          <time className="mt-auto">
            {new Date(startDate).getFullYear()} -{" "}
            {!endDate ? t("present") : new Date(endDate).getFullYear()}
          </time>
        </dd>
      </dl>
    </div>
  );
}
