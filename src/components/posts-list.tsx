"use client";
import { Post } from "~/app/types";
import { usePagination } from "~/lib/contexts/pagination";
import { PostCard } from "./post-card";

export function PostsList({ posts }: { posts: Post[] }) {
  const {
    page,
    nextPage,
    prevPage,
    search,
    setSearch,
    paginatedPosts,
    haveNextPage,
    havePrevPage,
  } = usePagination(posts);

  return (
    <>
      <div className="px-2 relative">
        <label className="sr-only" htmlFor="search">
          Search posts
        </label>
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary">
          <MagnifyIcon className="size-6" />
        </span>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts"
          className="border text-lg px-4 py-2 w-full rounded-md bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="flex flex-col w-full gap-2 px-2 py-6 sm:h-[450px] justify-around">
        {!paginatedPosts.length && (
          <p className="text-text/50 text-center bg-secondary/10 rounded-md h-full items-center justify-center flex">
            No posts found
          </p>
        )}
        {paginatedPosts.map((post) => (
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
        <span className="text-accent font-black text-3xl w-12 text-center">
          {page + 1}
        </span>
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

export const MagnifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
      clipRule="evenodd"
    />
  </svg>
);
