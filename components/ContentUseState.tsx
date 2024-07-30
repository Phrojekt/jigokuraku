'use client'
import { useState } from "react";
import { CharactersSelector } from "./CharactersSelector";
import ContentBlock from "./ContentBlock";


export function ContentUseState() {

    const array  = [
        {title: 'Gabimaru', description: 'Sexo é bom sexo é bom'},
        {title: 'Yamada Sagiri', description: 'Sexo é ruim sexo é ruim'}
    ]

    const [currentItem, setCurrentItem] = useState(0)

    function handleSetArray(id:number) {
        setCurrentItem(id)
    }

    return(
        <>
            <div className="space-y-16 flex flex-col place-content-center w-[50%] justify-start">
                <div>
                    <h1 className="text-text-gray text-2xl">Characters</h1>
                </div>

                <CharactersSelector handleSetArray={handleSetArray} />
            </div>
            <div>
                <ContentBlock title={array[currentItem].title} description={array[currentItem].description} />
            </div>
        </>
    )
}