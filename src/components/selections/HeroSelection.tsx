"use client"

import React, { useEffect, useState, memo } from 'react'
import sanitizedHtml from '../../lib/dompurify'
import SearchForm from '../SearchForm'

const HeroSelection = ({ heading, subheading, query }: { heading: string, subheading: string, query: string | undefined }) => {

  const [displayHtml, setDisplayHtml] = useState("");

  useEffect(() => {
    setDisplayHtml(sanitizedHtml(heading));
  }, [heading]);

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading' dangerouslySetInnerHTML={{ __html: displayHtml }}></h1>
        <p className='sub-heading !max-w-3xl'>{subheading}</p>
        <SearchForm query={query} />
      </section>
    </>
  )
}

export default memo(HeroSelection)