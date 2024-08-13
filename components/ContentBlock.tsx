'use client'
import { useState } from "react"

type ContentBlockProps = {
    title: string
    description: string
    description2?: string
}

export function ContentBlock({title, description, description2}: ContentBlockProps) {

    return (
        <div className="flex sm:flex-wrap">
            <div className="bg-light-gray sm:w-[100%] md:w-80 sm:h-fit md:h-[850px] sm:rounded-t-3xl md:rounded-3xl md:rounded-r-none pl-8 pt-6 space-y-8">
                <h2 className="text-black text-5xl font-alt">{title}</h2>
                <div className="text-black sm:text-xs md:text-base" >{description} <br /> {description2}</div>
            </div>
            <div className="bg-dark-gray sm:w-40 md:w-80 h-[850px] rounded-3xl rounded-l-none"></div>
        </div>
    ) }
export default ContentBlock;