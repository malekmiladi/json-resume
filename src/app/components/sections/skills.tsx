'use client';

type CategoryData = {
    id: number;
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
        <section className='mb-4'>
            <h2 className='flex font-semibold'>
                {content.skills.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <table className="flex flex-col">
                <tbody>
                    {
                        content.skills.categories.map(category =>
                            <tr key={"category-" + category.id}>
                                <td className='font-semibold'>
                                    {category.name}
                                </td>
                                <td className='pl-10'>
                                    {category.entries.join(", ")}
                                </td>
                            </tr>
                        )
                    }
                    {
                        <tr key={"category-languages"}>
                            <td className='font-semibold'>
                                {content.languages.title}
                            </td>
                            <td className='pl-10'>
                                {languagesParts.join(", ")}
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Skills;