import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col mx-auto gap-2 px-2 py-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={"bg-secondary/20 rounded-md animate-pulse w-full h-20"}
        ></div>
      ))}
    </div>
  );
}
