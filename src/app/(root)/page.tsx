// Import HeroSelection component from the components directory
import HeroSelection from '@/components/pages/homepage/HeroSelection';
// Import StartupCards component for displaying startup data
import StartupCards from '@/components/pages/homepage/StartupCards';
// Import sanityFetch and SanityLive for real-time data fetching and live updates
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
// Import StartupCardType for type definitions
import { StartupCardType } from '@/components/StartupCard';
// Import STARTUPS_QUERY for fetching startup data from Sanity
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
// Import auth for session management
import { auth } from '@/lib/auth';
import React from 'react';


/**
 * Page component for the startup homepage
 * Handles dynamic query parameters and fetches startup data
 */
const page = async ({ searchParams }: { searchParams: Promise<{ query?: string | undefined }> }) => {
  // Extract query parameter from searchParams
  const query = (await searchParams).query;
  // Set default parameters for the query
  const params = { search: query || null };

  // Authenticate user session
  const session = await auth();

  // Log user session ID for debugging
  console.log(session?.id);

  try {
    // Fetch startup data using the STARTUPS_QUERY with parameters
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

    // Log fetched posts for debugging
    console.log(posts);

    return (
      <>
        {/* Render HeroSelection component with query and heading/subheading */}
        <HeroSelection
          query={query}
          heading={`Pitch Your Startup, <br/> Connect With Entrepreneurs`}
          subheading={`Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.`}
        />
        {/* Render StartupCards component with fetched posts */}
        <StartupCards posts={posts as unknown as StartupCardType[]} query={query} />
        {/* Enable real-time updates with SanityLive */}
        <SanityLive />
      </>
    )
  } catch (error) {
    // Handle error by logging and displaying an error message
    console.error("Failed to fetch startup data", error);
    return <div>Error fetching startup data</div>
  }
}

// Export the default page component
export default page