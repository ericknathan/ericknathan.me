import { ImageResponse } from "next/og";

import { CreateOpenGraph, getOpenGraphData } from "@/components/app/opengraph";
import { userData } from "@/config";

export const runtime = "edge";

export const alt = userData.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { locale: string };
}) {
  const { interRegular, interBold, avatarUrl, noiseUrl, title, description } =
    await getOpenGraphData({ locale: params.locale });

  return new ImageResponse(
    CreateOpenGraph({
      avatarUrl,
      noiseUrl,
      title,
      description,
      size
    }),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: await interBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
