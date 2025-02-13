"use client";

import * as React from "react";
import { Post } from "~/app/types";

type Pagination = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
const PaginationContext = React.createContext<Pagination | null>(null);

export function PaginationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");

  return (
    <PaginationContext.Provider value={{ page, setPage, search, setSearch }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination(posts: Post[]) {
  const perPage = 5;
  const totalPage = Math.floor(posts.length / perPage);
  const pagination = React.useContext(PaginationContext);
  if (!pagination) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  const { page, setPage, search, setSearch } = pagination;

  const nextPage = React.useCallback(
    () =>
      setPage((prev) => {
        return prev + 1;
      }),
    [setPage]
  );
  const prevPage = React.useCallback(
    () =>
      setPage((prev) => {
        return prev - 1;
      }),
    [setPage]
  );
  const setSearchHandler = React.useCallback(
    (text: string) => {
      setPage(0);
      setSearch(text);
    },
    [setSearch, setPage]
  );

  const filteredPosts = React.useMemo(() => {
    return search.trim().length
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(search.trim().toLowerCase())
        )
      : posts;
  }, [posts, search]);

  const paginatedPosts = React.useMemo(() => {
    const startIndex = page * perPage;
    const endIndex = startIndex + perPage;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, page]);

  const haveNextPage = (page + 1) * perPage < filteredPosts.length;
  const havePrevPage = page > 0;

  return {
    page,
    totalPage,
    paginatedPosts,
    nextPage,
    prevPage,
    haveNextPage,
    havePrevPage,
    search,
    setSearch: setSearchHandler,
  };
}
