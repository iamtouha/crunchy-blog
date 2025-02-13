import Link from "next/link";
import React from "react";
import { Post } from "~/app/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="h-full">
      <div className="border rounded-md p-4 bg-secondary/20 hover:bg-secondary/30 transition-colors h-full flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-secondary dark:text-text">
          {post.title}
        </h2>
      </div>
    </Link>
  );
}
