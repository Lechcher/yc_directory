import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

// StartupCard component displays a summary card for a startup post.
// It expects a 'post' prop with startup details, including author info, title, category, etc.
const StartupCard = ({ post }: StartupCardType) => {
    // Destructure relevant fields from the post object
    const {
        _createdAt, // Date the post was created
        views,      // Number of views for the post
        author: { _id: authorId, name }, // Author's ID and name
        title,      // Startup title
        category,   // Startup category
        _id,        // Startup post ID
        image,      // Startup image URL
        description // Startup description
    } = post;

    return (
        // Main card container
        <li className='startup-card group'>
            {/* Top row: creation date and view count */}
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(_createdAt)}
                </p>

                <div className='flex gap-1.5'>
                    <EyeIcon />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>

            {/* Middle row: author info, title, and author avatar */}
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    {/* Author name links to their profile */}
                    <Link href={`/user/${authorId}`}>
                        <p className='text-16-medium line-clamp-1'>{name}</p>
                    </Link>
                    {/* Title links to the startup details page */}
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>
                {/* Author avatar */}
                <Link href={`/user/${authorId}`}>
                    <Image src={`https://placehold.co/48x48`} alt='placeholder' width={48} height={48} className='rounded-full' />
                </Link>
            </div>

            {/* Description and main image, both link to the startup details page */}
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
                <img src={image} alt='placeholder' className='startup-card_img' />
            </Link>

            {/* Bottom row: category link and details button */}
            <div className='flex-between gap-3 mt-5'>
                {/* Category links to a filtered list by category */}
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>

                {/* Button linking to the startup details page */}
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