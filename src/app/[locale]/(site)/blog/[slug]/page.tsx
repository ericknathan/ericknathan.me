import { postsRequests } from "@/lib/api/requests";
import { readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost(props: BlogPostProps) {
  const { slug } = await props.params;

  const file = readFileSync(
    path.join(process.cwd(), `src/app/blog/posts/${slug}.mdx`)
  );

  const { content } = await compileMDX({
    source: file,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <article className="prose dark:prose-invert container max-w-4xl py-14 mx-auto prose-a:text-primary">
      {content}
    </article>
  );
}

export async function generateStaticParams() {
  const { payload: postsList } = await postsRequests.listPosts().catch(() => ({
    payload: [],
  }));

  return postsList.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug } = await props.params;
  
  const { payload: post } = await postsRequests
    .getPost({ slug: slug })
    .catch(() => ({
      payload: null,
    }));

  return {
    title: post?.title,
    description: post?.description,
  };
}
