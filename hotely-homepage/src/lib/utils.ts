import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
