import { ImageResponse } from "next/og";

import { CreateOpenGraph, getOpenGraphData } from "@/components/app/opengraph";
import { userData } from "@/config/user";
import { postsRequests } from "@/lib/api/requests/posts.requests";

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
  const { payload } = await postsRequests
    .getPost({ slug: params.slug })
    .catch(() => ({
      payload: null,
    }));

  if (!payload) return;

  const { title, imageUrl } = payload;
  const { avatarUrl, noiseUrl, description } =
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
      size,
    }),
    {
      ...size,
    }
  );
}
