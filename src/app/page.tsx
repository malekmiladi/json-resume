'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from '@/components/resume';
import ImportButton from '@/components/import-button';

export default function Home() {

    const [resumeContent, setResumeContent] = useState({});
    const [documentName, setDocumentName] = useState("resume");
    const [transforms, setTransforms] = useState({
        translateY: 0,
        scale: 0
    });
    const printContentRef = useRef<HTMLDivElement>(null);
    const resumePreviewRef = useRef<HTMLDivElement>(null);
    const print = useReactToPrint({
        contentRef: printContentRef as RefObject<Element>,
        documentTitle: documentName

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

    const handleDocumentNameChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setDocumentName(target.value);
    }

    useEffect(() => {
        const { width, height } = resumePreviewRef.current!.getBoundingClientRect();
        const widthInCM = width * 2.54 / 96;
        const heightInCM = height * 2.54 / 96;

        const scalePercentage = (widthInCM * 100) / 28;
        const scaleFactor = 1 - (scalePercentage / 100);
        const scaledHeight = (heightInCM * scalePercentage) / 100;
        const translateY = (heightInCM - scaledHeight) / 2;
        setTransforms({
            translateY: -1 * (translateY),
            scale: scaleFactor
        });
    }, [resumePreviewRef.current])

    return (
        <main>
            <div className='grid grid-cols-2'>
                <section className='bg-[--dark-blue] flex p-3 overflow-auto'>
                    <div className='flex flex-row gap-3 h-fit'>
                        <ImportButton handleChange={handleFileChange} />
                        <button className="w-20 h-10 bg-[--blue] rounded-full cursor-pointer" onClick={() => print()}>
                            Print
                        </button>
                        <input type="text" className='bg-[--gray] rounded-full pl-4 pr-4' placeholder="Document's name" onChange={handleDocumentNameChange} />
                    </div>
                </section>
                <section>
                    {/* <div className='flex items-center justify-center'>
                        <h2>
                            Preview
                        </h2>
                    </div> */}
                    <div className='flex w-full justify-center bg-slate-500 bg-opacity-70' ref={resumePreviewRef}>
                        <div className='w-fit' style={{ transform: `translateY(${transforms.translateY}cm) scale(${1 - transforms.scale})` }}>
                            <Resume content={resumeContent} printContent={printContentRef} />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
