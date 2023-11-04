import { Icon } from "@/components/ui";
import Link from "next/link";

interface PostCardProps {
  data: {
    title: string;
    description: string;
    slug: string;
  };
}

export function PostCard({ data }: PostCardProps) {
  const { title, description, slug } = data;

  return (
    <Link href={`/blog/${slug}`}>
      <article className="grid p-4 hover:bg-accent hover:text-accent-foreground transition-all rounded-md">
        <time className="text-xs border-l-2 border-muted-foreground/80 pl-2 text-muted-foreground/80 mb-2">
          February, 24, 2023
        </time>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <span className="flex items-center gap-1 text-sm mt-2 text-primary font-medium">
          Read article
          <Icon.chevronRight size={14} />
        </span>
      </article>
    </Link>
  );
}
