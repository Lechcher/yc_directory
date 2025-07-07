// Imports necessary functions from Sanity for defining schema types and fields.
import { defineField, defineType } from "sanity";

// Defines the 'startup' schema type for Sanity Studio.
export const startup = defineType({
  name: "startup", // The programmatic name of the schema type.
  title: "Startup", // The human-readable title displayed in the Sanity Studio UI.
  type: "document", // Specifies that this is a document type, meaning it can be created and managed as a standalone entry.
  fields: [ // Defines the fields that will be part of the 'startup' document.
    defineField({
      name: "title", // Field for the startup's title.
      type: "string", // Data type is a simple string.
    }),
    defineField({
      name: "slug", // Field for the URL-friendly slug of the startup.
      type: "slug", // Data type is a slug, which automatically generates from the source.
      options: {
        source: "title", // The slug will be generated based on the 'title' field.
      },
    }),
    defineField({
      name: "author", // Field to reference the author of the startup.
      type: "reference", // Data type is a reference to another document.
      to: { type: "author" }, // Specifies that it references documents of type 'author'.
    }),
    defineField({
      name: "views", // Field for the number of views the startup has received.
      type: "number", // Data type is a number.
    }),
    defineField({
      name: "description", // Field for a brief description of the startup.
      type: "text", // Data type is a text area for longer content.
    }),
    defineField({
      name: "category", // Field for the category the startup belongs to.
      type: "string", // Data type is a string.
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category"), // Validation rules: must be between 1 and 20 characters and is required.
    }),
    defineField({
      name: "image", // Field for the main image URL of the startup.
      type: "url", // Data type is a URL.
      validation: (Rule) => Rule.required(), // Validation rule: must be a required field.
    }),
    defineField({
      name: "pitch", // Field for the startup's elevator pitch.
      type: "markdown", // Data type is markdown, allowing rich text formatting.
    }),
  ],
});
