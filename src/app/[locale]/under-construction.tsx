import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { FadeIn } from "@/components/animation";

export async function UnderConstructionPage() {
  const t = await getTranslations("pages.503");

  return (
    <FadeIn
      to="top"
      duration={0.25}
      className="h-[calc(100dvh_-_4rem)] md:h-[100dvh] flex flex-col text-center sm:text-start sm:flex-row items-center justify-center flex-1 gap-4 px-4"
    >
      <Image
        src={t("image")}
        height={100}
        width={100}
        alt={t("alt")}
        className="bg-muted rounded-lg p-1 w-28 h-28 object-cover"
      />
      <div className="grid gap-1">
        <h1 className="text-6xl font-bold">503</h1>
        <p className="text-2xl">{t("message")}</p>
      </div>
    </FadeIn>
  );
}
