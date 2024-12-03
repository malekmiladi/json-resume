'use client';
import { useState } from 'react';
import { education } from '@/definitions/resume.json';

function Education() {

    const [educationContent,] = useState(education);

    return (
        <section>
            <h2 className='flex font-semibold'>
                {educationContent.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <ol className="flex flex-col">
                {
                    education.entries.map(ed =>
                        <li key={"education-" + ed.id}>
                            <h3 className="flex left-0 font-semibold justify-between">
                                <span className="left-0 font-semibold">
                                    {ed.establishment}
                                </span>
                                <span className="font-semibold">
                                    {ed.location}
                                </span>
                            </h3>
                            <ul className="flex flex-col">
                                {ed.diplomas.map((diploma, i) =>
                                    <li key={"diploma-" + i} className=''>
                                        <p className="flex left-0 font-semibold justify-between">
                                            <span className="left-0 font-normal">
                                                <span className="font-semibold">{diploma.type}</span> - {diploma.field}
                                            </span>
                                            <span className="font-semibold">
                                                {diploma.startYear} - {diploma.endYear}
                                            </span>
                                        </p>
                                    </li>
                                )}
                            </ul>
                        </li>
                    )
                }
            </ol>
        </section>
    )
}

export default Education;