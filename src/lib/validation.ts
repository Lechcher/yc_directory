import { z as zod } from "zod/v4";

/**
 * Zod schema for form validation.
 * Defines the expected structure and validation rules for form data.
 */
export const formShema = zod.object({
    /** Title of the item, must be between 3 and 100 characters. */
    title: zod.string().min(3, "Title is required").max(100, "Title is too long"),
    /** Description of the item, must be between 20 and 500 characters. */
    description: zod.string().min(20, "Description should be at least 20 characters").max(500, "Description is too long. Max 500 characters at most"),
    /** Category of the item, must be between 3 and 20 characters. */
    category: zod.string().min(3, "Category should be at least 3 characters").max(20, "Category is too long. Max 20 characters at most"),
    /** Link to an image, must be a valid URL pointing to an image. */
    link: zod.string().url("Invalid Image URL").refine(async (url) => {
        try {
            const res = await fetch(url, { method: "HEAD" });
            const contentType = res.headers.get("content-type");
            return contentType?.startsWith("image/");
        } catch {
            return false;
        }
    }, "URL must be a valid image"),
    /** Pitch for the item, must be at least 10 characters long. */
    pitch: zod.string().min(10, "Pitch should be at least 10 characters"),
});