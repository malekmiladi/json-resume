'use client';

type InterestsContent = {
    title: string;
    entries: string[];
}

function Interests({ content }: { content: InterestsContent }) {

    return (
        <section className='mb-4'>
            <h2 className='flex font-semibold'>
                {content.title}
                <span className='flex-grow items-end pt-4 ml-2'>
                    <div className='border-black border-b-2 w-auto'></div>
                </span>
            </h2>
            <p>
                {content.entries.join(', ')}
            </p>
        </section>
    )
}

export default Interests;