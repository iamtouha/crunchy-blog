"use client";
import { Post } from "~/app/types";
import { usePagination } from "~/lib/contexts/pagination";
import PostCard from "./post-card";

export default function PostsList({ posts }: { posts: Post[] }) {
  const { page, nextPage, prevPage, haveNextPage, havePrevPage } =
    usePagination(posts.length);

  return (
    <>
      <div className="flex flex-col w-full gap-2 px-2 py-6">
        {posts.slice(page * 5, page * 5 + 5).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={!havePrevPage}
          className="text-primary bg-transparent hover:bg-primary/10 rounded-full p-2 pl-1 transition-colors cursor-pointer"
        >
          <ArrowNextIcon className="rotate-180 size-8" />
        </button>
        <span className="text-accent font-black text-3xl">{page + 1}</span>
        <button
          onClick={nextPage}
          disabled={!haveNextPage}
          className="text-primary bg-transparent hover:bg-primary/10 rounded-full p-2 pr-1 transition-colors cursor-pointer"
        >
          <ArrowNextIcon className="size-8" />
        </button>
      </div>
    </>
  );
}

const ArrowNextIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
