import ContainerSelection from '@/components/pages/startup/ContainerSelection';
import HeroSelection from '@/components/pages/startup/HeroSelection';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })

    console.log(post);

    if (!post) return notFound();



    return (
        <>
            <HeroSelection post={post} />
            <ContainerSelection post={post} params={params} />
        </>
    )
}

export default page