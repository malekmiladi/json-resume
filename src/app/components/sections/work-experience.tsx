'use client';

import { experiences } from '@/definitions/resume.json';
import { useState } from "react";

function Experience() {

    const [experienceContent,] = useState(experiences);

    return (
        <section>
            <h2 className='flex font-semibold'>
                {experienceContent.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <ol className="flex flex-col">
                {
                    experienceContent.entries.map(exp =>
                        <li key={"experience-" + exp.id}>
                            <h3 className="flex left-0 font-semibold justify-between">
                                <span className="left-0 font-semibold">
                                    {exp.position} @<span><a href={exp.company.link} target="_blank" rel="noopener noreferrer">{exp.company.name}</a></span>
                                </span>
                                <span className="font-semibold">
                                    {exp.startDate.month + ' ' + exp.startDate.year} - {exp.endDate.month + ' ' + exp.endDate.year}
                                </span>
                            </h3>
                            <ul className="list-disc list-inside">
                                {exp.responsibilities.map((r, i) =>
                                    <li key={"responsibility-" + i} className='list-disc list-inside'>{r}</li>
                                )}
                            </ul>
                            <ol className='flex flex-row'>
                                <pre className='font-semibold'>{exp.skills.title + ': '}</pre>
                                {exp.skills.entries.join(", ")}
                            </ol>
                        </li>
                    )
                }
            </ol>
        </section>
    )
}

export default Experience;