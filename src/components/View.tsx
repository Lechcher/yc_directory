import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { writeClient } from '@/sanity/lib/write-client';
import { client } from '@/sanity/lib/client';
import { after } from 'next/server';
import React from 'react';

import Ping from './Ping';


const View = async ({ id }: { id: string }) => {
    const result = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });
    const totalViews = result?.views || 0;

    after(async () => {
        try {
            await writeClient.patch(id).set({ views: totalViews + 1 }).commit();
        } catch (error) {
            console.error('Failed to increment view count:', error);
        }
    });
    return (
        <div className='view-container'>
            <div className='absolute -top-2 -right-2'>
                <Ping />
            </div>

            <p className='view-text'>
                <span className='font-black'>{totalViews == 1 ? `${totalViews} View` : `${totalViews} Views`}</span>
            </p>
        </div>
    )
}

export default View