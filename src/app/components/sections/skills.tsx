'use client';

type CategoryData = {
    id: number;
    display: boolean;
    name: string;
    entries: string[];
}

type SkillsContent = {
    title: string;
    categories: CategoryData[];
}

type LanguageEntry = {
    id: number;
    name: string;
    level: string;
}

type LanguagesContent = {
    title: string;
    entries: LanguageEntry[];
}

function Skills({ content }: { content: { skills: SkillsContent, languages: LanguagesContent } }) {

    const languagesParts: string[] = [];
    content.languages.entries.forEach((entry) => {
        languagesParts.push(`${entry.name} (${entry.level})`);
    })

    return (
        <section className='mb-1'>
            <h2 className='flex font-semibold'>
                {content.skills.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <ul className="flex flex-col">
                {
                    content.skills.categories.map(category => category.display &&
                        <li key={"category-" + category.id}>
                            <p>
                                <span className='font-semibold pr-2 text-pre'>
                                    {category.name}:
                                </span>
                                {category.entries.join(", ")}.
                            </p>
                        </li>
                    )
                }
                {
                    <li key={"category-languages"}>
                        <p>
                            <span className='font-semibold pr-2'>
                                {content.languages.title}:
                            </span>
                            {languagesParts.join(", ")}.
                        </p>
                    </li>
                }
            </ul>
        </section>
    )
}

export default Skills;