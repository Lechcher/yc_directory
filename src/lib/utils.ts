import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (date: string | number | Date) => new Date(date).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric"
});

export const parseServerActionResponse = <T>(response: T) => JSON.parse(JSON.stringify(response));