import { openGraphDefaultCover, websiteUrl } from "@/config";
import { createTranslator } from "next-intl";

/* eslint-disable @next/next/no-img-element */
interface CreateOpenGraphProps {
  title: string;
  description: string;
  avatarUrl: ArrayBuffer;
  noiseUrl: ArrayBuffer;
  coverUrl?: string;
  size?: {
    width: number;
    height: number;
  };
}

export function CreateOpenGraph({
  title,
  description,
  avatarUrl,
  noiseUrl,
  coverUrl = openGraphDefaultCover,
  size = { width: 1200, height: 600 },
}: CreateOpenGraphProps) {
  const gap = 24,
    avatarSize = 120,
    padding = 64;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#020817",
        color: "#FFFFFF",
        position: "relative",
      }}
    >
      <img
        src={coverUrl}
        alt=""
        style={{
          display: "flex",
          backgroundColor: "#1E293B",
          flex: 1,
          objectFit: "cover",
          width: size.width,
          opacity: 0.9,
        }}
      />
      <div
        style={{
          display: "flex",
          gap,
          padding,
          width: size.width,
        }}
      >
        <img
          src={avatarUrl as unknown as string}
          alt=""
          style={{ width: avatarSize, height: avatarSize, borderRadius: 8 }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <h1
            style={{
              fontSize: title.length > 25 ? 48 : 64,
              margin: 0,
              padding: 0,
              fontWeight: 700,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: size.width - avatarSize - padding * 2,
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 36, fontWeight: 400, margin: 0, padding: 0, color: "#94A3B8" }}>
            {description}
          </p>
        </div>
      </div>
      <img
        src={noiseUrl as unknown as string}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export async function getOpenGraphData({
  locale,
  path,
}: {
  locale: string;
  path?: string;
}) {
  const messages = (await import(`/messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  const avatarUrl = await fetch(
    new URL("../../assets/opengraph/avatar.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const noiseUrl = await fetch(
    new URL("../../assets/opengraph/noise.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return {
    avatarUrl,
    noiseUrl,
    title: t("config.metadata.opengraph.title"),
    description: path || websiteUrl.split("//")[1],
  };
}
