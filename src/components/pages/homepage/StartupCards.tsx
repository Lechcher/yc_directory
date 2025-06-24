// Import necessary components and types from their respective paths.
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import React from 'react'

// Define the properties interface for the StartupCards component.
interface StartupCardsProps {
    query: string | undefined, // Optional search query string.
    posts: StartupCardType[] // Array of startup card data.
}

// The StartupCards functional component responsible for displaying a collection of startup cards.
// It conditionally renders search results or all available startups.
const StartupCards = ({ query, posts }: StartupCardsProps) => {
    return (
        // Main container for the section, applying general styling.
        <section className='section_container'>
            {/* Displays a dynamic heading based on whether a search query is present. */}
            <p className='text-30-semibold'>
                {query ? `Search results for "${query}"` : "All Startups"}
            </p>

            {/* Unordered list to contain the grid of startup cards, with top margin. */}
            <ul className='mt-7 card_grid'>
                {/* Conditionally renders content based on whether there are posts available. */}
                {posts?.length > 0 ? (
                    // Maps through the posts array and renders a StartupCard for each item.
                    posts.map((post: StartupCardType) => (
                        <StartupCard key={post?._id} post={post} />
                    ))
                ) : (
                    // Displays a message when no startups are found.
                    <p className='no-result'>No startups found.</p>
                )}
            </ul>
        </section >
    )
}

// Exports the StartupCards component as the default export.
export default StartupCards