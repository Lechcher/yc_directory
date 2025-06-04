import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

// Define the "author" schema for Sanity CMS
export const author = defineType({
  name: "author",         // Internal name for the schema
  title: "Author",        // Display title in Sanity Studio
  type: "document",       // This schema represents a document type
  icon: UserIcon,         // Icon shown in the Sanity Studio sidebar
  fields: [
    // Unique numeric ID for the author
    defineField({
      name: "id",
      type: "number",
    }),
    // Author's full name
    defineField({
      name: "name",
      type: "string",
    }),
    // Author's username
    defineField({
      name: "username",
      type: "string",
    }),
    // Author's email address
    defineField({
      name: "email",
      type: "string",
    }),
    // URL to the author's profile image
    defineField({
      name: "image",
      type: "url",
    }),
    // Short biography or description of the author
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
  // Configure how author documents are previewed in the Studio
  preview: {
    select: {
        title: "name", // Use the "name" field as the preview title
    }
  }
});
