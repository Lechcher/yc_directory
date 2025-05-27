import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge.
 * @param inputs - An array of class values.
 * @returns A string of combined and merged class names.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * Parses a server action response by stringifying and then parsing it.
 * This is often used to ensure the response is a plain JavaScript object.
 * @param response - The server action response.
 * @returns The parsed response.
 */
export const parseServerActionResponse = <T>(response: T) => JSON.parse(JSON.stringify(response));

/**
 * Formats a date string into a more readable format (e.g., "January 1, 2023").
 * @param date - The date string to format.
 * @returns The formatted date string.
 */
export const formatDate = (date: string) => new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

/**
 * Formats a number into a more readable string with suffixes for thousands (k) and millions (M).
 * @param number - The number to format.
 * @returns The formatted number string.
 */
export const formatNumber = (number: number) => {
    if(number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if(number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    } else {
        return number.toString();
    }
}