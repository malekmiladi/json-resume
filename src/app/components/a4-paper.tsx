import { forwardRef, ReactNode } from "react";

const A4Paper = forwardRef(function A4Paper({ children }: { children: ReactNode }, ref: React.Ref<HTMLDivElement>) {
    return (
        <article ref={ref} className="relative flex-col w-[28cm] min-h-[39.6cm] bg-white text-black p-[2cm] print">
            {children}
        </article>
    )
})

export default A4Paper;