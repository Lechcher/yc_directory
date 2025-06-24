// Import React for building the component.
import React from 'react'
// Import the Form component from Next.js for handling form submissions.
import Form from 'next/form'
// Import the Search icon from lucide-react for visual representation.
import { Search } from 'lucide-react'
// Import the SearchFormReset component for clearing search queries.
import SearchFormReset from './SearchFormReset'

// Define the interface for the props of the SearchForm component.
interface SearchFormProps {
  query: string | undefined; // The current search query string, which can be undefined.
}

// SearchForm component provides a user interface for searching startups.
// It includes an input field, a search button, and a conditional reset button.
const SearchForm = ({query}: SearchFormProps) => {
    return (
        // The main form element, configured to submit to the root path and prevent scrolling.
        <Form action={'/'} scroll={false} className='search-form'>
            {/* Input field for the search query. Its value is pre-filled with the current query, if any. */}
            <input type="text" name='query' defaultValue={query} className='search-input' placeholder='Search Startups' />

            {/* Container for the search and reset buttons, arranged with a gap. */}
            <div className='flex gap-2'>
                {/* Conditionally renders the SearchFormReset component only if a search query is present. */}
                {query && <SearchFormReset />}

                {/* Button to submit the search form. */}
                <button type='submit' className='search-btn text-white'>
                    {/* Search icon displayed within the button. */}
                    <Search className='size-5' />
                </button>
            </div>
        </Form>
    )
}

// Exports the SearchForm component as the default export.
export default SearchForm