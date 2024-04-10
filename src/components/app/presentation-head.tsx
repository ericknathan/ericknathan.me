import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "../animation";
import { Avatar } from "./avatar";
import { TechStackBadges } from "./tech-stack-badges";

export async function PresentationHead() {
  const userData = await getTranslations("config.userData");

  return (
    <div>
      <div className="flex gap-6 items-center">
        <FadeIn className="h-24 w-24 aspect-square rounded-lg overflow-hidden">
          <Avatar className="w-full h-full object-cover" size={100} />
        </FadeIn>
        <div className="flex-1">
          <FadeIn
            as="h1"
            className="font-bold text-2xl sm:text-3xl"
            delay={0.1}
            duration={0.5}
          >
            {userData("name")}
          </FadeIn>
          <FadeIn
            as="span"
            className="text-muted-foreground block"
            delay={0.2}
            duration={0.5}
          >
            {userData("role")}{" "}
            {userData("company.name") ? (
              <>
                @{" "}
                <Link
                  href={userData("company.url")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <span className="underline">{userData("company.name")}</span>
                </Link>
              </>
            ) : null}
          </FadeIn>
          <TechStackBadges />
        </div>
      </div>
      <TechStackBadges className="flex xs:hidden justify-center" />
    </div>
  );
}
