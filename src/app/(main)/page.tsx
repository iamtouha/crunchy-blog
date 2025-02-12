import { api } from "~/lib/utils/api";
import { Post } from "../types";
import { PostsList } from "~/components/posts-list";

export default async function Home() {
  const posts = await api<Post[]>("/posts");

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-6 justify-center">
      <PostsList posts={posts} />
    </div>
  );
}
