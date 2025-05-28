import HeroSelection from '@/components/selections/HeroSelection'
import React from 'react'

const Home = async ({ searchParams }: { searchParams: Promise<{ query?: string | undefined }> }) => {
  const query = (await searchParams).query;

  return (
    <>
      <HeroSelection query={query} heading={`Pitch Your Startup, <br/> Connect With Entrepreneurs`} subheading={`Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.`} />
    </>
  )
}

export default Home