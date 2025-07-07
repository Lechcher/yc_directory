import { PlaylistTypes } from "@/app/(root)/startup/[id]/page";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import React from "react";

// EditorPicksSelection component displays a selection of editor-picked startups.
// It receives 'editorPosts' as props, which is an array of startup data.
const EditorPicksSelection = ({
  editorPosts,
}: {
  editorPosts: PlaylistTypes;
}) => {
  return (
    <>
      {/* Conditionally renders the section only if there are editor-picked posts. */}
      {editorPosts?.length > 0 && (
        <div className="max-w-6xl mx-auto">
          {/* Title for the Editor Picks section */}
          <p className="text-30-semibold">Editor Picks</p>

          {/* Grid for displaying startup cards */}
          <ul className="mt-7 card_grid">
            {/* Maps through the editorPosts array and renders a StartupCard for each post. */}
            {editorPosts.map((post: StartupCardType | PlaylistTypes[0]) => (
              <StartupCard key={post._id} post={post as StartupCardType} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EditorPicksSelection;
