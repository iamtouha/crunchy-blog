import Link from "next/link";
import React from "react";
import { Post, User } from "~/app/types";

export default function PostDetailCard({
  post,
  author,
}: {
  post: Post;
  author: User;
}) {
  return (
    <div className="border rounded-md p-4 bg-secondary/20 flex flex-col gap-6">
      <h2 className="text-3xl font-semibold text-secondary dark:text-text">
        {post.title}
      </h2>
      <p className="text-text/50">Author: {author.name}</p>
      <p className="text-text/80 text-xl leading-loose">{post.body}</p>
    </div>
  );
}
