'use client';
import { useState } from 'react';
import { interests } from '@/definitions/resume.json';

function Interests() {

    const [interestsContent,] = useState(interests);

    return (
        <section>
            <h2 className='flex font-semibold'>
                {interestsContent.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <p>
                {interests.entries.join(', ')}
            </p>
        </section>
    )
}

export default Interests;