import { CharactersSelector } from "@/components/CharactersSelector"
import { ContentBlock } from "@/components/ContentBlock"


export default function Home(){
    return(
        <div className="flex w-[100%]">
            <div className="flex sm:flex-col md:flex-row w-[100%] justify-center pl-[15%] pr-[15%] pt-[3%] gap-x-5">
                <div className="space-y-16 flex flex-col place-content-center w-[50%] justify-start">
                    <div>
                        <h1 className="text-text-gray text-2xl">Characters</h1>
                    </div>

                    <CharactersSelector />

                </div>
                <div>
                    <ContentBlock />
                </div>
            </div>
        </div>
    )
}