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
    <>
      <div className="border rounded-md p-4 bg-secondary/20 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-secondary dark:text-text">
          {post.title}
        </h2>
        <p className="text-text/50">Author: {author.name}</p>
        <p className="text-text/80 text-xl leading-loose">{post.body}</p>
      </div>
      <div className="flex justify-center mt-6">
        <Link className="text-primary " href="/">
          <ArrowNextIcon className="size-8 rotate-180" />
        </Link>
      </div>
    </>
  );
}
export const ArrowNextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
      clipRule="evenodd"
    />
  </svg>
);
