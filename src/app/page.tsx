'use client';

import Footer from '@/components/footer'
import A4Paper from '@/components/a4-paper';
import Header from '@/components/header';
import About from '@/components/sections/about-me';
import Experience from '@/components/sections/work-experience';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import Interests from '@/components/sections/interests';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Home() {
    const printContent = useRef<HTMLDivElement>(null);
    const print = useReactToPrint({ contentRef: printContent });
    return (
        <main>
            <section className='grid grid-cols-2'>
                <div>
                    <button onClick={() => print()}>
                        Print
                    </button>
                </div>
                <div>
                    <div>
                        <A4Paper ref={printContent}>
                            <Header />
                            <About />
                            <Experience />
                            <Projects />
                            <Education />
                            <Skills />
                            <Interests />
                            <Footer />
                        </A4Paper>
                    </div>
                </div>
            </section>
        </main>
    );
}
