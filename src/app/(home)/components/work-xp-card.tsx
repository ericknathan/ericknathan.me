import Image from "next/image";

interface WorkExperienceCardProps {
  data: {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    image: string;
  };
}

export function WorkExperienceCard({ data }: WorkExperienceCardProps) {
  const { company, role, startDate, endDate, image } = data;

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
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-muted-foreground max-w-[11rem]">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="xs:ml-auto text-xs text-muted-foreground flex">
          <time className="mt-auto">
            {new Date(startDate).getFullYear()} -{" "}
            {!endDate ? "Present" : new Date(endDate).getFullYear()}
          </time>
        </dd>
      </dl>
    </div>
  );
}
