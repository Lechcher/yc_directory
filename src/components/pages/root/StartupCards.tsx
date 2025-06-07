import StartupCard, { StartupCardType } from '@/components/StartupCard';
import React from 'react'

// Props interface for the StartupCards component
interface StartupCardsProps {
    query: string | undefined,
    posts: Array<StartupCardType>
}

// StartupCards component displays a list of StartupCard components based on the posts array
const StartupCards = ({ query, posts }: StartupCardsProps) => {
    return (
        // Main section container for the startup cards
        <section className='section_container'>
            {/* Heading displays search results or all startups */}
            <p className='text-30-semibold'>
                {query ? `Search results for "${query}"` : "All Startups"}
            </p>

            {/* Grid of startup cards */}
            <ul className='mt-7 card_grid'>
                {posts?.length > 0 ? (
                    // Render a StartupCard for each post
                    posts.map((post: StartupCardType) => (
                        <StartupCard key={post?._id} post={post} />
                    ))
                ) : (
                    // Show message if no startups are found
                    <p className='no-result'>No startups found.</p>
                )}
            </ul>
        </section >
    )
}

export default StartupCards