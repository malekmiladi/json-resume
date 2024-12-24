'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from '@/components/resume';
import ImportButton from '@/components/import-button';

type PreviewDimensionsSettings = {
    previewContainer: {
        width: number;
        height: number;
    };
    a4paper: {
        transform: {
            scale: {
                x: number;
                y: number;
            };
            translate: {
                x: number;
                y: number
            }
        }
    };
}

export default function Home() {

    const [resumeContent, setResumeContent] = useState({});
    const [documentName, setDocumentName] = useState("resume");
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });
    const [transforms, setTransforms] = useState({
        previewContainer: {
            width: 0,
            height: 0,
        },
        a4paper: {
            transform: {
                scale: {
                    x: 0,
                    y: 0
                },
                translate: {
                    x: 0,
                    y: 0
                }
            }
        }
    } as PreviewDimensionsSettings);


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

    const handleWindowResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    useEffect(() => {
        const { width, height } = resumePreviewRef.current!.getBoundingClientRect();
        const widthInCM = width * 2.54 / 96;
        const heightInCM = height * 2.54 / 96;

        const widthScalePercentage = (widthInCM * 100) / 28;
        const heightScalePercentage = (heightInCM * 100) / 39.6;

        const widthScaleFactor = 1 - (widthScalePercentage / 100);
        const heightScaleFactor = 1 - (heightScalePercentage / 100);

        const scaleFactor = Math.max(widthScaleFactor, heightScaleFactor);

        const scaledHeight = (heightInCM * heightScalePercentage) / 100;
        const translateY = (heightInCM - scaledHeight) / 2;

        setTransforms({
            previewContainer: {
                width: 0,
                height: 0
            },
            a4paper: {
                transform: {
                    scale: {
                        x: scaleFactor,
                        y: scaleFactor,
                    },
                    translate: {
                        x: 0,
                        y: -1 * translateY
                    }
                }
            }
        });
    }, [windowSize]);

    const translateYString = `translateY(${transforms.a4paper.transform.translate.y}cm)`;
    const scaleString = `scale(${1 - transforms.a4paper.transform.scale.x}, ${1 - transforms.a4paper.transform.scale.y}`;

    return (
        <main>
            <div className='flex h-full'>
                <section className='bg-[--dark-blue] grid grid-cols-1 grid-rows-2 auto-rows-min p-3 w-1/2'>
                    <div className='flex flex-grow row-start-1 gap-3 h-fit'>
                        <ImportButton handleChange={handleFileChange} />
                        <button className="w-20 h-10 bg-[--blue] rounded-full cursor-pointer" onClick={() => print()}>
                            Print
                        </button>
                        <input type="text" className='bg-[--gray] rounded-full pl-4 pr-4 h-10' placeholder="Document's name" onChange={handleDocumentNameChange} />
                    </div>
                    <div className='flex flex-grow row-start-2 w-full'>

                    </div>
                </section>
                <section className='w-1/2 h-screen overflow-hidden'>
                    <div className='flex w-full h-full justify-center bg-slate-500 bg-opacity-70' ref={resumePreviewRef}>
                        <div className='w-fit ' style={{ transform: `${translateYString} ${scaleString}` }}>
                            <Resume content={resumeContent} printContent={printContentRef} />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
