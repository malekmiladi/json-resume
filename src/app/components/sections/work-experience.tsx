'use client';

type ExperienceData = {
    month: string;
    year: number;
}

type CompanyData = {
    name: string;
    link: string;
    location: string;
}

type ExperienceEntry = {
    id: number;
    position: string;
    company: CompanyData;
    startDate: ExperienceData;
    endDate: ExperienceData;
    responsibilities: string[];
    skills: { title: string, entries: string[] };
}

type ExperiencesContent = {
    title: string;
    entries: ExperienceEntry[]
}

function Experience({ content }: { content: ExperiencesContent }) {

    return (
        <section className='mb-4'>
            <h2 className='flex font-semibold'>
                {content.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <ol className="flex flex-col">
                {
                    content.entries.map((experienceEntry) =>
                        <li key={"experience-" + experienceEntry.id}>
                            <h3 className="flex left-0 font-semibold justify-between">
                                <span className="left-0 font-semibold">
                                    {experienceEntry.position} @<span><a href={experienceEntry.company.link} target="_blank" rel="noopener noreferrer">{experienceEntry.company.name}</a></span>
                                </span>
                                <span className="font-semibold">
                                    {experienceEntry.startDate.month + ' ' + experienceEntry.startDate.year} {experienceEntry.endDate ? (' - ' + experienceEntry.endDate.month + (experienceEntry.endDate.year ? ' ' + experienceEntry.endDate.year : '')) : ""}
                                </span>
                            </h3>
                            <ul className="list-disc list-inside">
                                {experienceEntry.responsibilities.map((responsibility: string, i: number) =>
                                    <li key={"responsibility-" + i} className='list-disc list-inside'>{responsibility}</li>
                                )}
                            </ul>
                            <p className='flex flex-row whitespace-pre'>
                                <span className='font-semibold'>{experienceEntry.skills.title + ':'} </span>
                                {experienceEntry.skills.entries.join(", ")}
                            </p>
                        </li>
                    )
                }
            </ol>
        </section>
    )
}

export default Experience;