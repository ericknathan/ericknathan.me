import { cn } from "@/lib/utils";
import { stack } from '@/config';

import { FadeIn } from "@/components/animation";
import { Badge } from "@/components/ui";

interface TechStackBadgesProps {
  className?: string;
  limit?: number;
}

export function TechStackBadges({ className, limit = 7 }: TechStackBadgesProps) {
  return (
    <FadeIn
      delay={0.3}
      duration={0.5}
      className={cn("hidden xs:flex flex-wrap gap-2 mt-2", className)}
    >
      {stack.slice(0, limit).map((tech) => (
        <Badge key={tech} variant="subtle" className="">
          {tech}
        </Badge>
      ))}
    </FadeIn>
  );
}
