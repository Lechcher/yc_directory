import { formatDate } from '@/lib/utils';
import React from 'react'

// Define the props interface for the HeroSelection component
interface HeroSelectionProps {
    post: { // The 'post' object contains details about a startup or project
        author: { // Information about the author of the post
            bio: string,
            image: string,
            name: string,
            username: string,
            _id: string
        },
        description: string, // A brief description of the post
        category: string, 
        image: string, // URL of the main image for the post
        pitch: string, // The elevator pitch for the startup/project
        slug: { // Slug for the post, used in URLs
            current: string,
            _type: string
        },
        title: string, // The title of the post
        views: number, // Number of views the post has received
        _createdAt: string, // Timestamp when the post was created
        _id: string, // Unique identifier for the post
    };
}

// HeroSelection functional component that displays key information about a post
const HeroSelection = ({post}: HeroSelectionProps) => {
    return (
        <>
            {/* Section for displaying the hero content with a pink background */}
            <section className='pink_container !min-h-[230px]'>
                {/* Display the formatted creation date of the post */}
                <p className='tag'>{formatDate(post._createdAt)}</p>
                {/* Display the title of the post */}
                <h1 className='heading'>{post.title}</h1>
                {/* Display the description of the post, with a max height constraint */}
                <p className='sub-heading !max-h-5xl'>{post.description}</p>
            </section>
        </>
    )
}

export default HeroSelection