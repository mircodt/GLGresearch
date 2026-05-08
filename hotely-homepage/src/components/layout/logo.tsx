import * as React from "react";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn("flex items-center gap-2 font-semibold", className)}
      aria-label="Hotely"
    >
      <span
        aria-hidden="true"
        className="grid h-7 w-7 place-items-center rounded-lg bg-primary-gradient text-white shadow-md shadow-primary/30"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 21V8.5a1 1 0 0 1 .47-.85l7-4.45a1 1 0 0 1 1.06 0l7 4.45a1 1 0 0 1 .47.85V21"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21v-6.5h6V21"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg tracking-tight">Hotely</span>
    </span>
  );
}
