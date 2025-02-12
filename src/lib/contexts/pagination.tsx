"use client";

import { createContext, useCallback, useContext, useState } from "react";

type Pagination = {
  page: number;
  perPage: number;
  nextPage: () => void;
  prevPage: () => void;
};
const PaginationContext = createContext<Pagination | null>(null);

export function PaginationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, setPage] = useState(() =>
    Number(localStorage.getItem("page") ?? 0)
  );
  const nextPage = useCallback(
    () =>
      setPage((prev) => {
        localStorage.setItem("page", String(prev + 1));
        return prev + 1;
      }),
    []
  );
  const prevPage = useCallback(
    () =>
      setPage((prev) => {
        localStorage.setItem("page", String(prev - 1));
        return prev - 1;
      }),
    []
  );

  return (
    <PaginationContext.Provider
      value={{ page, perPage: 5, nextPage, prevPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination(length: number) {
  const pagination = useContext(PaginationContext);
  if (!pagination) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  const { page, perPage, nextPage, prevPage } = pagination;

  const haveNextPage = page * perPage + perPage < length;
  const havePrevPage = page > 0;

  return {
    page,
    nextPage,
    prevPage,
    haveNextPage,
    havePrevPage,
  };
}
