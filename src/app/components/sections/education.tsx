'use client';

type DiplomaData = {
    id: number;
    type: string;
    field: string;
    startYear: number;
    endYear: number;
}

type EducationEntry = {
    id: number;
    establishment: string;
    location: string;
    diplomas: DiplomaData[];
}

type EducationContent = {
    title: string;
    entries: EducationEntry[];
}

function Education({ content }: { content: EducationContent }) {

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
                    content.entries.map((education) =>
                        <li key={"education-" + education.id}>
                            <h3 className="flex left-0 font-semibold justify-between">
                                <span className="left-0 font-semibold">
                                    {education.establishment}
                                </span>
                                <span className="font-semibold">
                                    {education.location}
                                </span>
                            </h3>
                            <ul className="flex flex-col">
                                {education.diplomas.map((diploma, i) =>
                                    <li key={"diploma-" + i}>
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