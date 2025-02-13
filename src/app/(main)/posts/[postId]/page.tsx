import React from "react";
import { Post, User } from "~/app/types";
import PostDetailCard from "~/components/post-detail-card";
import { api } from "~/lib/utils/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const post = await api<Post>(`/posts/${postId}`);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const post = await api<Post>(`/posts/${postId}`);
  const user = await api<User>(`/users/${post.userId}`);

  return (
    <div className="mt-6">
      <PostDetailCard post={post} author={user} />
    </div>
  );
}
