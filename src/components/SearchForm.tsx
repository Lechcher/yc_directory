import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
import SearchFormReset from './SearchFormReset'

// Define the props for the SearchForm component
interface SearchFormProps {
  query: string | undefined; // The current search query, if any
}

// SearchForm component provides a search input and a search button.
// It also conditionally renders a reset button if a query is present.
const SearchForm = ({query}: SearchFormProps) => {
    return (
        // Form component with action to root and no scrolling
        <Form action={'/'} scroll={false} className='search-form'>
            {/* Search input field, pre-filled with the current query if available */}
            <input type="text" name='query' defaultValue={query} className='search-input' placeholder='Search Startups' />

            {/* Container for the reset button and search button */}
            <div className='flex gap-2'>
                {/* Conditionally render SearchFormReset component if a query exists */}
                {query && <SearchFormReset />}

                {/* Search button */}
                <button type='submit' className='search-btn text-white'>
                    {/* Search icon */}
                    <Search className='size-5' />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm