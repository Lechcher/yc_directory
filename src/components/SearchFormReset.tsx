"use client"

import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// SearchFormReset component provides a button to reset the search form.
const SearchFormReset = () => {
    // Function to handle the form reset logic
    const reset = () => {

        // Select the search form element using its class name
        const form = document.querySelector(".search-form") as HTMLFormElement;

        // If the form element is found, reset it
        if (form) {
            form.reset();
        }
    }

    return (
        // Button to trigger the reset function
        <button type='reset' onClick={reset}>
            {/* Link to the home page, styled as a search button */}
            <Link href="/" className='search-btn text-white'>
                {/* X icon for the reset button */}
                <X className='size-5' />
            </Link>
        </button>
    )
}

export default SearchFormReset