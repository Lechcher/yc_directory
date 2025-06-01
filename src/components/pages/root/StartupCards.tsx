import StartupCard, { StartupCardType } from '@/components/StartupCard';
import React from 'react'

interface StartupCardsProps {
    query: string | undefined
}

const StartupCards = ({ query }: StartupCardsProps) => {
    const posts = [
        {
            _createAt: new Date(),
            views: 55,
            author: { _id: 1, name: "John Doe" },
            _id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?cs=srgb&dl=pexels-canvastudio-3153201.jpg&fm=jpg",
            category: "Technology",
            title: "Tech Startup Pitch Competition",
        }
    ];

    return (
        <section className='section_container'>
            <p className='text-30-semibold'>
                {query ? `Search results for "${query}"` : "All Startups"}
            </p>

            <ul className='mt-7 card_grid'>
                {posts?.length > 0 ? (
                    posts.map((post: StartupCardType) => (
                        <StartupCard key={post?._id} post={post} />
                    ))
                ) : (
                    <p className='no-result'>No startups found.</p>
                )}
            </ul>
        </section >
    )
}

export default StartupCards