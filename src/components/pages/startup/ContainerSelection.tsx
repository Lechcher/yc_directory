import Link from 'next/link';
import React, { Suspense } from 'react'
import Image from 'next/image';
import markdownit from "markdown-it";
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';

interface ContainerSelectionProps {
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
  },
  params: Promise<{ id: string }>
}

const ContainerSelection = async ({ post, params }: ContainerSelectionProps) => {
  const id = (await params).id;

  const parsedContent = markdownit().render(post?.pitch || "");

  return (
    <>
      <section className='section_container'>
        <img src={post.image} alt="thumbnail" className='w-full h-auto rounded-xl' />

        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
              <Image src={post.author.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg ' />

              <div>
                <p className='text-20-medium'>{post.author.name}</p>
                <p className='text-16-medium !text-black-300'>{post.author.username}</p>
              </div>
            </Link>

            <p className='category-tag'>{post.category}</p>
          </div>

          <h3 className='text-30-bold'>Pitch Details</h3>
        </div>
        {parsedContent ? (
          <article className='prose' dangerouslySetInnerHTML={{ __html: parsedContent }} />

        ) : (
          <p className='no-result max-w-4xl font-work-sans break-all'>No details provided</p>
        )}

        <hr className='divider' />

        {/* TODO: EDITOR SELECTED STARTUPS */}
        <Suspense fallback={<Skeleton className='view_skeleton' />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  )
}

export default ContainerSelection