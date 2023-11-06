import Image from "next/image";

import { postsRequests } from "@/lib/api/requests";
import { PostCard } from "../components";

interface PostsListProps {
  emptyMessage?: string;
}

export async function PostsList({ emptyMessage }: PostsListProps) {
  const { payload: postsList } = await postsRequests
    .listPosts({ maxPosts: 2 })
    .catch(() => ({
      payload: [],
    }));

  if (postsList.length === 0)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 group">
        <div className="flex items-center bg-accent rounded-full h-20 w-20 group-hover:rotate-6 transition-all">
          <Image
            src="/images/memojis/ouch-sweat.png"
            alt="😅"
            width={80}
            height={80}
            className="pt-2"
          />
        </div>

        <span className="text-muted-foreground">
          {emptyMessage}
        </span>
      </div>
    );

  return (
    <ol>
      {postsList.map((postData: any, index: number) => (
        <li key={`post-${postData.title}-${index}`}>
          <PostCard data={postData} />
        </li>
      ))}
    </ol>
  );
}
