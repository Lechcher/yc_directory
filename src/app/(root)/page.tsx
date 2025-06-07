import HeroSelection from '@/components/pages/root/HeroSelection'
import StartupCards from '@/components/pages/root/StartupCards';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import React from 'react'

const Home = async ({ searchParams }: { searchParams: Promise<{ query?: string | undefined }> }) => {
  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });

  return (
    <>
      <HeroSelection query={query} heading={`Pitch Your Startup, <br/> Connect With Entrepreneurs`} subheading={`Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.`} />
      <StartupCards posts={posts} query={query} />
      <SanityLive></SanityLive>
    </>
  )
}

export default Home