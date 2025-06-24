// Import necessary components and types for the homepage.
import HeroSelection from '@/components/pages/homepage/HeroSelection'
import StartupCards from '@/components/pages/homepage/StartupCards';
import { StartupCardType } from '@/components/StartupCard';
import { auth } from '@/lib/auth';
// Import Sanity-related utilities for data fetching and live updates.
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import React from 'react'

/**
 * Home component serves as the main page for displaying startup listings.
 * It fetches startup data based on an optional search query and renders it.
 * @param {object} props - The component's properties.
 * @param {Promise<{ query?: string | undefined }>} props.searchParams - URL search parameters, potentially containing a 'query' string.
 * @returns {JSX.Element} The JSX element for the homepage, including a hero section and startup cards.
 */
const Home = async ({ searchParams }: { searchParams: Promise<{ query?: string | undefined }> }) => {
  /**
   * Extracts the search query from the URL search parameters.
   * The query is awaited as searchParams is a Promise.
   */
  const query = (await searchParams).query;
  // Prepares parameters for the Sanity fetch, setting 'search' to the query or null if no query exists.
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  /**
   * Fetches startup data from the Sanity CMS.
   * It uses the STARTUPS_QUERY and passes the prepared parameters.
   * @todo Implement robust error handling for potential API call failures to improve user experience.
   */
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  // Logs the fetched posts to the console for debugging purposes.
  console.log(posts);

  return (
    <>
      {/* Renders the HeroSelection component, providing the current query, a main heading, and a subheading. */}
      <HeroSelection 
        query={query}
        heading={`Pitch Your Startup, <br/> Connect With Entrepreneurs`}
        subheading={`Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.`} 
      />
      {/* Renders the StartupCards component, passing the fetched posts (type-casted) and the query. */}
      <StartupCards posts={posts as unknown as StartupCardType[]} query={query} />
      {/* Integrates SanityLive component to enable real-time updates from the Sanity CMS. */}
      <SanityLive></SanityLive>
    </>
  )
}

/**
 * Exports the Home component as the default export for the page.
 */
export default Home