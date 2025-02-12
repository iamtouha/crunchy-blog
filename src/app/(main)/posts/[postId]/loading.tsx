import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col mx-auto gap-2 px-2 py-6">
      <div
        className={"bg-secondary/20 rounded-md animate-pulse w-full h-64"}
      ></div>
    </div>
  );
}
