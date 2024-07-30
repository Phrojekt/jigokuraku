import { ContentUseState } from "@/components/ContentUseState";

export default function Home(){

    return(
        <div className="flex w-[100%]">
            <div className="flex sm:flex-col md:flex-row w-[100%] justify-center pl-[15%] pr-[15%] pt-[3%] gap-x-5">
                <ContentUseState />
            </div>
        </div>
    )
}