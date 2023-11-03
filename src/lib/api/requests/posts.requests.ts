import { PostModel } from "@/models";
import { api } from "..";

export const postsRequests = {
  listPosts: (params: { maxPosts?: number } = {}) =>
    api.get<PostModel[]>(
      `/blog/posts${params.maxPosts ? `?maxPosts=${params.maxPosts}` : ""}`
    ),
  getPost: (params: { slug: string }) => api.get<PostModel>(`/blog/posts/${params.slug}`),
};
