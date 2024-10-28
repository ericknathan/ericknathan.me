import matter from "gray-matter";
import { NextRequest, NextResponse } from "next/server";
import path from "node:path";

interface GetPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_: NextRequest, context: GetPostProps) {
  try {
    const { slug } = await context.params;
    const compiled = matter.read(
      path.join(process.cwd(), `src/app/blog/posts/${slug}.mdx`)
    );

    return NextResponse.json({
      message: "Post successfully fetched",
      payload: {
        ...compiled.data,
        slug,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Post with this slug does not exist",
      },
      {
        status: 404,
      }
    );
  }
}
