// Imports for necessary Next.js components, React features, and utility libraries.
import Link from 'next/link';
import React, { Suspense } from 'react';
import Image from 'next/image';
import markdownit from "markdown-it"; // Library for parsing Markdown content.
import { Skeleton } from '@/components/ui/skeleton'; // UI component for loading states.
import View from '@/components/View'; // Custom component for displaying views.
import { DetailProps } from '@/app/(root)/startup/[id]/page'; // Type definition for startup details.

// Defines the props interface for the ContainerSelection component.
interface ContainerSelectionProps {
  post: DetailProps; // Contains the details of the startup post.
  params: Promise<{ id: string }>; // Promise resolving to an object containing the startup ID.
}

/**
 * ContainerSelection component displays detailed information about a startup.
 * It includes the startup's image, author details, category, pitch, and a view counter.
 *
 * @param {ContainerSelectionProps} { post, params } - Props containing startup data and parameters.
 * @returns {JSX.Element} The rendered component displaying startup details.
 */
const ContainerSelection = async ({ post, params }: ContainerSelectionProps) => {
  // Extracts the startup ID from the resolved params promise.
  const id = (await params).id;

  // Parses the pitch content from Markdown to HTML.
  const parsedContent = markdownit().render(post?.pitch || "");

  return (
    <>
      {/* Main section container for the startup details page. */}
      <section className='section_container'>
        {/* Displays the main image of the startup. */}
        <Image
          src={post.image || 'https://placehold.co/1200x630'}
          alt="thumbnail"
          width={1200}
          height={630}
          className='w-full h-auto rounded-xl'
          priority
        />

        {/* Section for author details and category. */}
        <div className='space-y-5 my-10 mx-auto'>
          <div className='flex-between gap-5'>
            {/* Link to the author's profile page. */}
            <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
              {/* Author's avatar. */}
              <Image src={post.author?.image || 'https://placehold.co/64x64'} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg ' />

              {/* Author's name and username. */}
              <div>
                <p className='text-20-medium'>{post.author?.name}</p>
                <p className='text-16-medium !text-black-300'>{post.author?.username}</p>
              </div>
            </Link>

            {/* Link to filter startups by category. */}
            <Link href={`/?query=${(post.category)?.toLowerCase()}`}>
              <p className='category-tag'>{post.category}</p>
            </Link>
          </div>

          {/* Heading for the pitch details section. */}
          <h3 className='text-30-bold'>Pitch Details</h3>
        </div>
        {/* Conditionally renders the parsed pitch content or a 'No details provided' message. */}
        {parsedContent ? (
          <article className='prose' dangerouslySetInnerHTML={{ __html: parsedContent }} />

        ) : (
          <p className='no-result max-w-4xl font-work-sans break-all'>No details provided</p>
        )}

        {/* Horizontal divider. */}
        <hr className='divider' />

        {/* Suspense boundary for the View component, showing a skeleton loader during loading. */}
        <Suspense fallback={<Skeleton className='view_skeleton' />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default ContainerSelection;