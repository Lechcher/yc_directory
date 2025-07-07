// Imports necessary functions from Sanity for defining schema types and fields.
import { defineField, defineType } from "sanity";

// Defines the 'playlist' schema type for Sanity Studio.
export const playlist = defineType({
  name: "playlist", // The programmatic name of the schema type.
  title: "Playlist", // The human-readable title displayed in the Sanity Studio UI.
  type: "document", // Specifies that this is a document type, meaning it can be created and managed as a standalone entry.
  fields: [ // Defines the fields that will be part of the 'playlist' document.
    defineField({
      name: "title", // Field for the playlist's title.
      type: "string", // Data type is a simple string.
    }),
    defineField({
      name: "slug", // Field for the URL-friendly slug of the playlist.
      type: "slug", // Data type is a slug, which automatically generates from the source.
      options: {
        source: "title", // The slug will be generated based on the 'title' field.
      },
    }),
    defineField({
      name: "select", // Field to select multiple startup references for the playlist.
      type: "array", // Data type is an array, allowing multiple items.
      of : [{type: "reference", to: [{type: "startup"}]}] // Specifies that the array contains references to documents of type 'startup'.
    }),
  ],
});
