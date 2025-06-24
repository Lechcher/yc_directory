// Enable client-side rendering for this component.
"use client"

// Import necessary React hooks and components.
import React, { useEffect, useState, memo } from 'react'
import sanitizedHtml from '../../../lib/dompurify'
import SearchForm from '../../SearchForm'

// Define the interface for the props of the HeroSelection component.
interface HeroSelectionProps {
  heading: string; // The main heading text to be displayed.
  subheading: string; // The subheading text providing additional information.
  query: string | undefined; // The current search query, if any, used to pre-fill the search form.
}

// HeroSelection component displays a prominent hero section including a heading, subheading, and a search input.
// It utilizes React.memo to optimize performance by preventing unnecessary re-renders.
const HeroSelection = ({ heading, subheading, query }: HeroSelectionProps) => {

  // State variable to store the sanitized HTML content for the heading.
  const [displayHtml, setDisplayHtml] = useState("");

  // useEffect hook to sanitize the 'heading' prop whenever it changes.
  // This prevents XSS attacks by ensuring the HTML content is safe before rendering.
  useEffect(() => {
    setDisplayHtml(sanitizedHtml(heading));
  }, [heading]); // Dependency array ensures this effect runs only when 'heading' changes.

  return (
    <>
      {/* Section container for the hero content, styled with a pink background. */}
      <section className='pink_container'>
        {/* Main heading element. The HTML content is dangerously set after being sanitized.
            This allows for rich text in the heading while maintaining security. */}
        <h1 className='heading' dangerouslySetInnerHTML={{ __html: displayHtml }}></h1>
        {/* Subheading paragraph, styled to have a maximum width for better readability. */}
        <p className='sub-heading !max-w-3xl'>{subheading}</p>
        {/* Renders the SearchForm component, passing the current 'query' prop to it. */}
        <SearchForm query={query} />
      </section>
    </>
  )
}

// Export the HeroSelection component wrapped with React.memo for performance optimization.
export default memo(HeroSelection)