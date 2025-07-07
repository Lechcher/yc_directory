// Imports the StructureResolver type from Sanity's structure module, which is used to define the structure of the Sanity Studio's content pane.
import type { StructureResolver } from "sanity/structure";

// Provides a link to the Sanity Structure Builder cheat sheet for reference.
// https://www.sanity.io/docs/structure-builder-cheat-sheet

// Defines the structure of the Sanity Studio's content pane.
// This function is passed the Structure Builder (S) object, which provides methods for creating list items, document types, etc.
export const structure: StructureResolver = (S) =>
  S.list() // Starts by creating a new list.
    .title("Content") // Sets the title of the list to "Content", which will be displayed in the Studio UI.
    .items([ // Defines the items within this list.
      // Creates a list item for the 'author' document type.
      // It will display all documents of type 'author' and be titled "Authors" in the UI.
      S.documentTypeListItem("author").title("Authors"),
      // Creates a list item for the 'startup' document type.
      // It will display all documents of type 'startup' and be titled "Startups" in the UI.
      S.documentTypeListItem("startup").title("Startups"),
      // Creates a list item for the 'playlist' document type.
      // It will display all documents of type 'playlist' and be titled "Playlists" in the UI.
      S.documentTypeListItem("playlist").title("Playlists"),
    ]);
