import { ImageResponse } from "next/og";

import { CreateOpenGraph, getOpenGraphData } from "@/components/app/opengraph";
import { userData } from "@/config";
import { postsRequests } from "@/lib/api/requests";
import { notFound } from "next/navigation";

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
  params: { locale: string; slug: string };
}) {
  try {
    const {
      payload: { title, imageUrl },
    } = await postsRequests.getPost({ slug: params.slug });
    const { interBold, avatarUrl, noiseUrl, description } =
      await getOpenGraphData({
        locale: params.locale,
        path: `/blog/${params.slug}`,
      });

    return new ImageResponse(
      CreateOpenGraph({
        avatarUrl,
        noiseUrl,
        title,
        description,
        coverUrl: imageUrl,
        size
      }),
      {
        ...size,
        fonts: [
          {
            name: "Inter",
            data: await interBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return notFound();
  }
}
