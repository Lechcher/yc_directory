import HeroSelection from '@/components/pages/root/HeroSelection'
import StartupCards from '@/components/pages/root/StartupCards';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import React from 'react'

const Home = async ({ searchParams }: { searchParams: Promise<{ query?: string | undefined }> }) => {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <HeroSelection query={query} heading={`Pitch Your Startup, <br/> Connect With Entrepreneurs`} subheading={`Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.`} />
      <StartupCards posts={posts} query={query} />
    </>
  )
}

export default Home