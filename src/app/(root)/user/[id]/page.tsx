import ProfileSelection, {
  SessionTypes,
} from "@/components/pages/user/ProfileSelection";
import { auth } from "@/lib/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

// This is an asynchronous page component that displays a user's profile.
// It receives 'params' which is expected to contain an 'id' for the user.
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Extracts the 'id' from the resolved params.
  const id = (await params).id;

  // Fetches the current authentication session.
  const session = await auth();

  // Fetches user data from Sanity using the AUTHOR_BY_ID_QUERY and the extracted 'id'.
  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  // Logs the id, session, and user data to the console for debugging purposes.
  console.log(id);
  console.log(session);
  console.log(user);

  // If no user is found, returns a 404 Not Found page.
  if (!user) return notFound();
  return (
    // Renders the ProfileSelection component, passing the user id, user data, and session information.
    <ProfileSelection
      id={id}
      user={user}
      session={session as unknown as SessionTypes}
    />
  );
};

export default page;
