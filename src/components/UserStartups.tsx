import { client } from "@/sanity/lib/client";
import React from "react";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupCardType } from "./StartupCard";

// Defines the props for the UserStartups component
// It expects an 'id' which is a string, likely representing a user ID.
const UserStartups = async ({ id }: { id: string }) => {
  // Fetches startup data from Sanity using the STARTUPS_BY_AUTHOR_QUERY
  // The 'id' is passed as a parameter to the query to filter startups by author.
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, {
    id,
  });

  // Logs the fetched startups to the console for debugging purposes.
  console.log(startups);

  return (
    <>
      {/* Conditionally renders startup cards if there are any, otherwise displays a "No startups yet" message. */}
      {startups.length > 0 ? (
        // Maps through the array of startups and renders a StartupCard for each.
        startups.map((startup: StartupCardType) => {
          return <StartupCard key={startup._id} post={startup} />;
        })
      ) : (
        <p className="no-result">No startups yet</p>
      )}
    </>
  );
};

export default UserStartups;
