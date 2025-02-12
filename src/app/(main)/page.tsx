import Image from "next/image";
import { api } from "~/lib/utils/api";
import { Post } from "../types";
import PostCard from "~/components/post-card";
import { use } from "react";
import PostsList from "~/components/posts-list";

export default async function Home() {
  const posts = await api<Post[]>("/posts");

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-6 justify-center">
      <PostsList posts={posts} />
    </div>
  );
}
