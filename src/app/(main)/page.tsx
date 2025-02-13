import { api } from "~/lib/utils/api";
import { Post } from "../types";
import { PostsList } from "~/components/posts-list";

export default async function Home() {
  const posts = await api<Post[]>("/posts");

  return (
    <div className="mt-12 flex flex-col gap-6">
      <PostsList posts={posts} />
    </div>
  );
}
