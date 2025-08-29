import * as React from "react";
import { cn } from "../utils";

export function Avatar({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-700",
        className
      )}
    >
      {children || "U"}
    </div>
  );
}


