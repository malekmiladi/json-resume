'use client';

import { ChangeEventHandler } from "react";

function ImportButton({ handleChange }: { handleChange: ChangeEventHandler<HTMLInputElement> }) {
    return (
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-44 h-10 rounded-full cursor-pointer bg-[--blue]">
                Import from JSON
                <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} />
            </label>
    )
}

export default ImportButton;