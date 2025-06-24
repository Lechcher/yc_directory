/**
 * StartupCard Component
 * Container for displaying individual startup profiles with visual hierarchy of information.
 * Features dynamic author linking, image display, and clickable details.
 */

// Standard utility imports for formatting dates and common functionality
import { formatDate } from '@/lib/utils'
// Import link component for post/category navigation and author avatar/image rendering
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// Import base button component styling from UI library
import { Button } from './ui/button'
// Import type definitions for author and startup data models
import { Author, Startup } from '@/sanity/types'

// Enhanced type definition for card data structure: 
// 1. Retains core startup fields (Omit excludes author from direct structure)
// 2. Allows optional author inclusion to enable safe access patterns
// 3. Enables flexibility between standalone cards and author-coupled cards
export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

/**
 * StartupCard Functional Component
 * Props accept enriched startup data through StartupCardType interface
 * @param {StartupCardType} post - Startup data object containing:
 * - _createdAt: Auto-generated timestamp from CMS
 * - views: User engagement tracking metric
 * - title: Primary text label for startup
 * - category: Strategic classification tag with linkable query
 * - image: Visual identity of the startup
 * - description: Summary text of the product/business
 * - author: Optional creator information with profile linking
 */
const StartupCard = ({ post }: { post: StartupCardType }) => {
    // Destructure CMS document fields with null-safety for optional relationships
    // _createdAt: Content creation timestamp
    // views: Numerical tracking of user interactions
    // _id: Unique identifier for content linking

    // Optional author fields (safe access with fallbacks enforced by ?. syntax):
    // - author.image: Associated user avatar from CMS definitions
    // - author.name: Display name for user tracking
    // - author._id: UUID for profile routing

    const {
        _createdAt, // Immutable document creation timestamp
        views,        // Incremental engagement counter (CMS-managed)
        author,       // Optional relationship to user profiles
        title,        // Search-optimized headline text
        category,     // Taxonomy tag for sorting/filtering
        _id,          // Content routing identifier
        image,        // Visual content with asset management
        description   // CTA-oriented summary with truncation style
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
                <Image 
                    src={image || 'https://placehold.co/600x400'} 
                    alt={title || 'Startup image'} 
                    width={600}
                    height={400}
                    className='startup-card_img'
                />
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
// Component should be wrapped with CSS styling and rendering capabilities
export default StartupCard