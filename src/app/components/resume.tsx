'use client';

import { RefObject } from 'react';
import Footer from '@/components/footer'
import A4Paper from '@/components/a4-paper';
import Header from '@/components/header';
import About from '@/components/sections/about-me';
import Experience from '@/components/sections/work-experience';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import Interests from '@/components/sections/interests';

function Resume({ content, printContent }: { content: any, printContent: RefObject<HTMLDivElement | null> }) {

    return (
        <A4Paper ref={printContent}>
            {content.header && <Header content={content.header} />}
            {content.about && <About content={content.about} />}
            {content.experiences && <Experience content={content.experiences} />}
            {content.projects && <Projects content={content.projects} />}
            {content.education && <Education content={content.education} />}
            {content.skills && content.languages && <Skills content={{ skills: content.skills, languages: content.languages }} />}
            {content.interests && <Interests content={content.interests} />}
            {<Footer />}
        </A4Paper>
    )
}

export default Resume;