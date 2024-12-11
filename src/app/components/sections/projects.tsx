'use client';

import Icon from "@/components/icon";

type ProjectDate = {
    month: string;
    year: number;
}

type ProjectEntry = {
    id: number;
    title: string;
    link: string;
    description: string[];
    startDate: ProjectDate;
    endDate: ProjectDate;
    skills: { title: string, entries: string[] };
}

type ProjectsContent = {
    title: string;
    entries: ProjectEntry[];
}

function Projects({ content }: { content: ProjectsContent }) {
    return (
        <section className='mb-2'>
            <h2 className='flex font-semibold'>
                {content.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <ol className="flex flex-col">
                {
                    content.entries.map((project) =>
                        <li key={"project-" + project.id}>
                            <h3 className="flex left-0 font-semibold justify-between w">
                                <span className="left-0 font-semibold flex gap-2">
                                    {project.title} <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-4 aspect-square flex items-center"><Icon name={"github"} classes={"w-4 aspect-square"} /></a>
                                </span>
                                <span className="font-semibold">
                                    {project.startDate.month + ' ' + project.startDate.year} {project.endDate ? (' - ' + project.endDate.month + (project.endDate.year ? ' ' + project.endDate.year : '')) : ""}
                                </span>
                            </h3>
                            <ul className="list-disc list-inside">
                                {project.description.map((line, i) =>
                                    <li key={"description-" + i} className='list-disc list-inside'>{line}</li>
                                )}
                            </ul>
                            <p className='flex flex-row whitespace-pre'>
                                <span className='font-semibold'>{project.skills.title + ': '} </span>
                                {project.skills.entries.join(", ")}
                            </p>
                        </li>
                    )
                }
            </ol>
        </section>
    )
}

export default Projects;