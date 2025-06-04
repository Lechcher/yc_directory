import StartupCard, { StartupCardType } from '@/components/StartupCard';
import React from 'react'

// Props interface for the StartupCards component
interface StartupCardsProps {
    query: string | undefined // Search query string, if any
}

// StartupCards component displays a list of StartupCard components based on the posts array
const StartupCards = ({ query }: StartupCardsProps) => {
    // Example posts array (replace with real data fetching in production)
    const posts = [
        {
            _createAt: new Date(), // Creation date of the post
            views: 55, // Number of views
            author: { _id: 1, name: "John Doe" }, // Author info
            _id: 1, // Unique post ID
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Startup description
            image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?cs=srgb&dl=pexels-canvastudio-3153201.jpg&fm=jpg", // Startup image URL
            category: "Technology", // Startup category
            title: "Tech Startup Pitch Competition", // Startup title
        }
    ];

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