import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFoundPage() {
  const t = useTranslations("pages.404");

  return (
    <div className="h-full flex items-center justify-center flex-1 gap-4">
      <Image
        src={t("image")}
        height={100}
        width={100}
        alt={t("alt")}
        className="bg-muted rounded-lg p-1"
      />
      <div className="grid gap-1">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">{t("message")}</p>
      </div>
    </div>
  );
}
