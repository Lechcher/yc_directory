// Import necessary types for post details and a utility function for date formatting.
import { DetailProps } from '@/app/(root)/startup/[id]/page';
import { formatDate } from '@/lib/utils';
import React from 'react'

// HeroSelection functional component responsible for displaying key information about a startup post.
// It receives a 'post' object containing the details to be displayed.
const HeroSelection = ({ post }: { post: DetailProps }) => {
    return (
        <>
            {/* Section container for the hero content, styled with a pink background and a minimum height. */}
            <section className='pink_container !min-h-[230px]'>
                {/* Displays the formatted creation date of the post. If the date is not available, it shows an error message. */}
                <p className='tag'>{post._createdAt ? formatDate(post._createdAt) : "Error to format date"}</p>
                {/* Displays the main title of the post. */}
                <h1 className='heading'>{post.title}</h1>
                {/* Displays the description of the post, with a maximum height constraint for better presentation. */}
                <p className='sub-heading !max-h-5xl'>{post.description}</p>
            </section>
        </>
    )
}

// Exports the HeroSelection component as the default export.
export default HeroSelection