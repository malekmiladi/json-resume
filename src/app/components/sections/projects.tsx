'use client';

import { projects } from '@/definitions/resume.json';
import { useState } from 'react';

function Projects() {
    const [projectsContent,] = useState(projects);
    return (
        <section>
            <h2 className='flex font-semibold'>
                {projectsContent.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <ol className="flex flex-col">
                {
                    projectsContent.entries.map(project =>
                        <li key={"project-" + project.id}>
                            <h3 className="flex left-0 font-semibold justify-between">
                                <span className="left-0 font-semibold">
                                    {project.title} - <span><a href={project.link} target="_blank" rel="noopener noreferrer">github</a></span>
                                </span>
                                <span className="font-semibold">
                                    {project.startDate.month + ' ' + project.startDate.year} {project.endDate ? (' - ' + project.endDate.month + (project.endDate.year ? ' ' + project.endDate.year : '')) : ""}
                                </span>
                            </h3>
                            <ul className="list-disc list-inside">
                                {project.description.map((r, i) =>
                                    <li key={"description-" + i} className='list-disc list-inside'>{r}</li>
                                )}
                            </ul>
                            <ol className='flex flex-row'>
                                <pre className='font-semibold'>{project.skills.title + ': '}</pre>
                                {project.skills.entries.join(", ")}
                            </ol>
                        </li>
                    )
                }
            </ol>
        </section>
    )
}

export default Projects;