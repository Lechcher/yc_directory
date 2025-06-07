/**
 * StartupCard Component
 * Displays a card representing a startup with its details including author, title, description, and metadata.
 */

import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'

// Type definition for the startup card data
// Extends the Startup type but makes the author field optional
export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

/**
 * StartupCard Component
 * @param {Object} props - Component props
 * @param {StartupCardType} props.post - The startup post data to display
 */
const StartupCard = ({ post }: { post: StartupCardType }) => {
    // Extract all required fields from the post object
    const {
        _createdAt, // Timestamp of post creation
        views,      // View count for the post
        author,     // Author information (optional)
        title,      // Startup title
        category,   // Startup category
        _id,        // Unique identifier for the post
        image,      // URL of the startup's image
        description // Brief description of the startup
    } = post;

    return (
        // Main card container with hover effects
        <li className='startup-card group'>
            {/* Header section: Creation date and view count */}
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(_createdAt)}
                </p>

                {/* View count display with eye icon */}
                <div className='flex gap-1.5'>
                    <EyeIcon />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>

            {/* Content section: Author info, title, and avatar */}
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    {/* Author name with link to profile */}
                    <Link href={`/user/${author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                    </Link>
                    {/* Startup title with link to details */}
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>
                {/* Author avatar with link to profile */}
                <Link href={`/user/${author?._id}`}>
                    <Image 
                        src={author?.image || `https://placehold.co/48x48`} 
                        alt={author?.name || "Author name"} 
                        width={48} 
                        height={48} 
                        className='rounded-full ring-2 ring-black-100' 
                    />
                </Link>
            </div>

            {/* Main content section: Description and image */}
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
                <img src={image} alt='placeholder' className='startup-card_img' />
            </Link>

            {/* Footer section: Category and details button */}
            <div className='flex-between gap-3 mt-5'>
                {/* Category link for filtering */}
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>

                {/* Details button linking to full startup page */}
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard