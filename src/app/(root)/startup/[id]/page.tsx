/**
 * Startup Detail Page Component
 * Dynamic route for displaying detailed startup information using Next.js data fetching
 * Implements Sanity Studio integration for content previewing
 */

// Import UI components for structured content display
import HeroSelection from '@/components/pages/startup/HeroSelection';
// Import container component for post details and editorial controls
import ContainerSelection from '@/components/pages/startup/ContainerSelection';
// Import Sanity content fetcher for API operations
import { client } from '@/sanity/lib/client';
// Import GraphQL query for retrieving startup by ID
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
// Import Next.js navigation utility for 404 handling
import { notFound } from 'next/navigation';
// Base React import for function components
import React from 'react';

// Enable partial prerendering for this route to improve SSR hydration performance
export const experimental_ppr = true;

/**
 * Type definition matching startup document schema from Sanity Studio
 * Includes core metadata and relationship fields for dynamic rendering
 */
export interface DetailProps {
    author: {
        bio?: string; // Author biography field
        image?: string; // Author avatar URL
        name?: string; // Display name for attribution
        username?: string; // Social identity reference
        _id?: string; // Unique identifier for relationship management
    },
    description?: string; // Executive summary of the startup
    category?: string; // Taxonomy tag for content grouping
    image?: string; // Featured visual with dynamic aspect handling
    pitch?: string; // CORE value proposition for the business
    // Slug system for RESTful URL generation and content routing
    slug?: {
        current?: string; // Active version of the URL path
        _type?: string; // Type annotation for schema validation
    },
    title?: string; // Display header with SEO optimization
    views?: number; // Engagement tracking for content prioritization
    _createdAt?: string; // Immutable creation timestamp from CMS
    _id?: string; // Document ID for cross-referencing operations
}

/**
 * Dynamic Startup Detail Page
 * @param params - Route parameters containing startup ID from URL
 * @returns React Component tree for detail view with content management capabilities
 */
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    // Await route parameters to extract content identifier
    const id = (await params).id;

    // Fetch startup document using GraphQL query with generated ID
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id }) as DetailProps;

    // Return 404 if no document resolved from CMS query
    if (!post) return notFound();

    // Render component hierarchy for startup detail view:
    // 1. HeroSelection - Visual header with immediate post data rendering
    // 2. ContainerSelection - Core content display with CMS editing support
    return (
        <>
            <HeroSelection post={post} />
            <ContainerSelection post={post} params={params} />
        </>
    );
}

// Register component as page renderer for route operations
export default page