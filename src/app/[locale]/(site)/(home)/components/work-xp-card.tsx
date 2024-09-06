import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { ExperienceModel } from "@/config";
import { calcDuration } from "@/lib/utils";

interface WorkExperienceCardProps {
  data: ExperienceModel;
}

export async function WorkExperienceCard({ data }: WorkExperienceCardProps) {
  const { company, startDate: rawStartDate, endDate: rawEndDate, image } = data;

  const startDate = new Date(rawStartDate);
  const endDate = rawEndDate ? new Date(rawEndDate) : undefined;
  const duration = calcDuration(startDate, endDate);

  const [role, t] = await Promise.all([
    (await getTranslations("config"))(`roles.${company}` as any),
    getTranslations("components.experienceCard"),
  ]);

  return (
    <div className="flex gap-4">
      <div className="rounded-full h-11 aspect-square flex justify-center items-center ring-1 bg-muted/50 ring-muted-foreground/40 p-1">
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
        <dd className="w-full flex-none text-sm font-medium">{company}</dd>
        <dt className="sr-only">{t("role")}</dt>
        <dd className="text-xs text-muted-foreground">{role}</dd>
        <dt className="sr-only">{t("date")}</dt>
        <dd className="text-xs text-muted-foreground/80 flex">
          <time className="mt-auto">
            {startDate.getFullYear()} –{" "}
            {!endDate
              ? t("present")
              : `${endDate.getFullYear()} • ${t("duration", duration)}`}
          </time>
        </dd>
      </dl>
    </div>
  );
}
