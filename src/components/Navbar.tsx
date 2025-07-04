// Import the Link component from Next.js for client-side navigation.
import Link from "next/link";
// Import React for building the component.
import React from "react";
// Import the Image component from Next.js for optimized image rendering.
import Image from "next/image";
// Import authentication functions (auth, signOut, signIn) from the local auth library.
import { auth, signOut, signIn } from "@/lib/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Define the Navbar component as an asynchronous functional component.
// This component handles navigation and user authentication status display.
const Navbar = async () => {
  // Fetch the current session status using the auth utility.
  const session = await auth();

  return (
    // Header element serving as the main container for the navigation bar.
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      {/* Navigation container, using flexbox for layout and alignment. */}
      <nav className="flex justify-between items-center">
        {/* Logo that acts as a link to the homepage. */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Container for user authentication-related elements. */}
        <div className="flex items-center gap-5">
          {/* Conditional rendering: if a session exists and a user is logged in. */}
          {session && session?.user ? (
            <>
              {/* Link for authenticated users to create a new startup entry. */}
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden text-black" />
              </Link>

              {/* Form for logging out the user. */}
              <form
                action={async () => {
                  "use server"; // Specifies that this action runs on the server.
                  // Signs out the user and redirects them to the homepage.
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="flex items-center">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              {/* Link to the user's profile page, displaying their name. */}
              <Link href={`/user/${session?.id}`}>
                <Avatar className="ring-2 ring-black-100">
                  <AvatarImage src={session?.user?.image ?? ""} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            // Conditional rendering: if no active session, display a login form.
            <form
              action={async () => {
                "use server"; // Specifies that this action runs on the server.
                // Initiates the sign-in process using GitHub authentication.
                await signIn("github");
              }}
            >
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

// Export the Navbar component as the default export.
export default Navbar;
