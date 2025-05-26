// Import necessary modules from Next.js and React
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// Import authentication functions from the custom auth library
import { auth, signOut, signIn } from '@/lib/auth'

// Define the Navbar component as an asynchronous function
const Navbar = async () => {
  // Fetch the current session status
  const session = await auth();
  // Log the session details to the console (for debugging purposes)
  console.log(session);
  return (
    // Header element for the navbar
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      {/* Navigation container */}
      <nav className='flex justify-between items-center'>
        {/* Logo linking to the homepage */}
        <Link href="/">
          <Image src="/logo.png" alt='logo' width={144} height={30} />
        </Link>

        {/* User authentication section */}
        <div className='flex items-center gap-5'>
          {/* Conditional rendering based on session and user existence */}
          {session && session?.user ? (
            <>
              {/* Link to create a new startup */}
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              {/* Logout form */}
              <form action={async () => {
                "use server" // Directive for server-side action
                // Sign out the user and redirect to the homepage
                await signOut({redirectTo: "/"})
              }}>
                <button type='submit'>
                  <span>Logout</span>
                </button>
              </form>

              {/* Link to the user's profile page */}
              <Link href={`/user/${session?.id}`}>
                {/* Display the user's name */}
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            // Login form (if no active session)
            <form action={async () => {
              "use server" // Directive for server-side action
              // Sign in the user using GitHub authentication
              await signIn('github')
            }}>
              <button type='submit'>
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

// Export the Navbar component as the default export
export default Navbar