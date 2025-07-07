// Imports the Sanity query for fetching startup view counts.
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
// Imports the Sanity write client for updating data.
import { writeClient } from '@/sanity/lib/write-client';
// Imports the Sanity read client for fetching data.
import { client } from '@/sanity/lib/client';
// Imports the 'after' function from Next.js server utilities, used for post-response actions.
import { after } from 'next/server';
// Imports React for component creation.
import React from 'react';

// Imports the Ping component, likely a visual indicator.
import Ping from './Ping';

/**
 * View component to display and increment the view count of a startup.
 * This component fetches the current view count from Sanity, displays it,
 * and then increments it in the background after the response has been sent.
 * @param {object} props - The component props.
 * @param {string} props.id - The ID of the startup whose views are to be managed.
 */
const View = async ({ id }: { id: string }) => {
    // Fetches the current view count for the given startup ID from Sanity.
    // useCdn: false ensures that the latest data is fetched directly from the API, not a cached version.
    const result = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });
    // Extracts the total views from the result, defaulting to 0 if not found.
    const totalViews = result?.views || 0;

    // Schedules an asynchronous task to run after the HTTP response has been sent.
    // This is used to increment the view count without delaying the user's page load.
    after(async () => {
        try {
            // Patches the Sanity document for the given ID, incrementing the 'views' field by 1.
            await writeClient.patch(id).set({ views: totalViews + 1 }).commit();
        } catch (error) {
            // Logs an error if the view count increment fails.
            console.error('Failed to increment view count:', error);
        }
    });

    // Renders the view count display.
    return (
        <div className='view-container'>
            {/* Renders the Ping component, positioned absolutely within the view container. */}
            <div className='absolute -top-2 -right-2'>
                <Ping />
            </div>

            {/* Displays the view count, dynamically adjusting the text for singular/plural. */}
            <p className='view-text'>
                <span className='font-black'>{totalViews == 1 ? `${totalViews} View` : `${totalViews} Views`}</span>
            </p>
        </div>
    )
}

// Exports the View component as the default export.
export default View