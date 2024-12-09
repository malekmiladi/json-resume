'use client';

import React, { RefObject, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from '@/components/resume';
import ImportButton from '@/components/import-button';

export default function Home() {

    const [resumeContent, setResumeContent] = useState({});

    const printContent = useRef<HTMLDivElement>(null);

    const print = useReactToPrint({
        contentRef: printContent as RefObject<Element>,
        documentTitle: "resume"

    });

    const handleFileRead = (fileReader: FileReader) => {
        const content = fileReader.result as string;
        setResumeContent(JSON.parse(content));
    }

    const handleFileChange = (e: React.ChangeEvent) => {
        const fileElement = e.target as HTMLInputElement;
        const file = fileElement.files![0];
        const fileReader = new FileReader();
        fileReader.onloadend = (e: ProgressEvent<FileReader>) => {
            handleFileRead(fileReader);
        }
        fileReader.readAsText(file);
    }

    return (
        <main>
            <div className='grid grid-cols-2'>
                <section id="input-section" className='bg-[--dark-blue] flex p-3'>
                    <div className='flex flex-row gap-3 h-fit'>
                        <ImportButton handleChange={handleFileChange} />
                        <button className="w-20 h-10 bg-[--blue] rounded-full cursor-pointer" onClick={() => print()}>
                            Print
                        </button>
                    </div>
                </section>
                <section id='preview-section'>
                    <div className='flex items-center justify-center'>
                        <h2>
                            Preview
                        </h2>
                    </div>
                    <div className='flex items-center justify-center bg-slate-500 bg-opacity-70'>
                        <Resume content={resumeContent} printContent={printContent} />
                    </div>
                </section>
            </div>
        </main>
    );
}
