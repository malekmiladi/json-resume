'use client';

import { about } from "@/definitions/resume.json";
import { useState } from "react";

function About() {
    const [aboutContent, setAboutContent] = useState(about);
    return (
        <section>
            <h2 className='flex font-semibold'>
                {aboutContent.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            {aboutContent.content}
        </section>
    )
}

export default About;