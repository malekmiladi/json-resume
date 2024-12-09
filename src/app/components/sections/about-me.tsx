'use client';

type AboutContent = {
    title: string;
    content: string;
}

function About({ content }: { content: AboutContent }) {
    return (
        <section className='mb-4'>
            <h2 className='flex font-semibold'>
                {content.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            {content.content}
        </section>
    )
}

export default About;