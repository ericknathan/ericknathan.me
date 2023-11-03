import matter from "gray-matter";
import { NextRequest, NextResponse } from "next/server";
import { readdirSync } from "node:fs";
import path from "node:path";

import { PostModel } from "@/models";

const basePostsPath = "src/app/blog/posts";

export async function GET(request: NextRequest) {
  const files = readdirSync(basePostsPath);
  const query = new URLSearchParams(request.url.search.toString());

  const posts = files.map((file) => {
    const compiled = matter.read(
      path.join(process.cwd(), `${basePostsPath}/${file}`)
    );

    return {
      ...compiled.data,
      slug: file.replace(".mdx", "")
    } as PostModel
  });

  const maxPosts = Number(query.get("maxPosts") || posts.length);

  return NextResponse.json({
    message: "Posts successfully fetched",
    payload: posts
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, maxPosts),
  });
}
