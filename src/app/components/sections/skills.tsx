'use client';
import { useState } from 'react';
import { skills } from '@/definitions/resume.json';

function Skills() {

    const [skillsContent,] = useState(skills);

    return (
        <section>
            <h2 className='flex font-semibold'>
                {skillsContent.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <table className="flex flex-col">
                <tbody>
                    {
                        skills.categories.map(category =>
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
                </tbody>
            </table>
        </section>
    )
}

export default Skills;