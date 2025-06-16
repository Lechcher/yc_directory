"use client"

import React, { useEffect, useState, memo } from 'react'
import sanitizedHtml from '../../../lib/dompurify'
import SearchForm from '../../SearchForm'

// Define the props for the HeroSelection component
interface HeroSelectionProps {
  heading: string; // The main heading text
  subheading: string; // The subheading text
  query: string | undefined; // The search query, if any
}

// HeroSelection component displays a hero section with a heading, subheading, and a search form.
// It uses React.memo for performance optimization.
const HeroSelection = ({ heading, subheading, query }: HeroSelectionProps) => {

  // State to hold the sanitized HTML for the heading
  const [displayHtml, setDisplayHtml] = useState("");

  // Effect to sanitize the heading HTML whenever the 'heading' prop changes
  useEffect(() => {
    setDisplayHtml(sanitizedHtml(heading));
  }, [heading]);

  return (
    <>
      {/* Hero section container with a pink background */}
      <section className='pink_container'>
        {/* Main heading, rendered using dangerouslySetInnerHTML after sanitization */}
        <h1 className='heading' dangerouslySetInnerHTML={{ __html: displayHtml }}></h1>
        {/* Subheading with a maximum width */}
        <p className='sub-heading !max-w-3xl'>{subheading}</p>
        {/* SearchForm component, passing the query prop */}
        <SearchForm query={query} />
      </section>
    </>
  )
}

// Export the component wrapped in memo for performance
export default memo(HeroSelection)