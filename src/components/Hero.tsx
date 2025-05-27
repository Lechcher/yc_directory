"use client"

import React, { useEffect, useState } from 'react'
import sanitizedHtml from '../lib/dompurify'

const Hero = ({heading, subheading}: {heading: string, subheading: string}) => {
  const [displayHtml, setDisplayHtml] = useState("");

  useEffect(() => {
    setDisplayHtml(sanitizedHtml(heading));
  }, [heading]);

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading' dangerouslySetInnerHTML={{ __html: displayHtml}}></h1>
        <p className='sub-heading !max-w-3xl'>{subheading}</p>
      </section>
    </>
  )
}

export default Hero