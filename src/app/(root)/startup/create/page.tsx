import HeroSelection from "@/components/pages/create/HeroSelection";
import StartupForm from "@/components/pages/create/StartupForm";
import { auth } from "@/lib/auth";
import React from "react";

// This is an asynchronous page component for creating a new startup.
const page = async () => {
  // Authenticates the user session.
  const session = await auth();

  // If no session exists, redirects the user to the home page.
  if (!session) {
    return Response.redirect(
      new URL("/", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000")
    );
  }

  return (
    <>
      {/* Renders the HeroSelection component for the create page. */}
      <HeroSelection />
      {/* Renders the StartupForm component for creating a new startup. */}
      <StartupForm />
    </>
  );
};

export default page;
