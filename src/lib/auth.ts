import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

/**
 * NextAuth configuration object.
 * Sets up authentication providers, in this case, GitHub.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub], // Configures GitHub as an authentication provider.
})