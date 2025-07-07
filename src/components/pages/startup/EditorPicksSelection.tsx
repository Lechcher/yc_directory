import { PlaylistTypes } from "@/app/(root)/startup/[id]/page";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import React from "react";

const EditorPicksSelection = ({
  editorPosts,
}: {
  editorPosts: PlaylistTypes;
}) => {
  return (
    <>
      {editorPosts?.length > 0 && (
        <div className="max-w-6xl mx-auto">
          <p className="text-30-semibold">Editor Picks</p>

          <ul className="mt-7 card_grid">
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
