'use client'
import { useState } from "react"


export function ContentBlock() {

    const [title, setTitle] = useState('Gabimaru')

    return (
        <div className="flex gap-x-0">
            <div className="bg-light-gray sm:w-40 md:w-80 h-[850px] rounded-3xl rounded-r-none pl-8 pt-6">
                <h2 className="text-black text-5xl font-alt">{title}</h2>
            </div>
            <div className="bg-dark-gray sm:w-40 md:w-80 h-[850px] rounded-3xl rounded-l-none"></div>
        </div>
    ) }
export default ContentBlock;