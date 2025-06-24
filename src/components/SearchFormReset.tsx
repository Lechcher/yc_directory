// "use client" directive ensures this component only runs in the browser/client environment.
// Required for components using browser-specific APIs like document.querySelector.
"use client"

// Import React for component definitions and React hooks.
import React from 'react'
// Import the X icon from lucide-react for visual representation.
import { X } from 'lucide-react'
// Import the Next.js Link component for navigation to clear the query path.
import Link from 'next/link'

// SearchFormReset component provides a user interface to reset the search form.
// It selects and resets the form element with class 'search-form'.
const SearchFormReset = () => {
    // Function to execute form reset logic.
    const reset = () => {
        // Access the form element with class 'search-form' from the DOM.
        const form = document.querySelector(".search-form") as HTMLFormElement;

        // If the form element exists, call its reset() method.
        if (form) {
            form.reset();
        }
    }

    return (
        // Reset button with onClick handler triggering form reset.
        <button type='reset' onClick={reset}>
            {/* Link to home page, styled as a search button without query persistence. */}
            <Link href="/" className='search-btn text-white'>                {/* X icon displayed as the reset graphic. */}
                <X className='size-5' />
            </Link>
        </button>
    )
}

// Exports the SearchFormReset component as the default export.
export default SearchFormReset