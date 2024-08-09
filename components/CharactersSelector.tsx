import Image from "next/image";
import { useState } from "react";

type CharactersSelectorProps  = { 
    handleSetArray: (id:number) => void
}

export function CharactersSelector({handleSetArray}: CharactersSelectorProps) {
    return ( 
        <div className="flex flex-row sm:flex-nowrap md:flex-wrap sm:gap-1 md:gap-x-4 md:overflow-hidden sm:w-[200%] h-full md:w-[100%]">
                        <div className="">
                            <Image src="/images/Gabimaru.png" alt="Gabimaru Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(0)}/>
                        </div>
                        <div>
                            <Image src="/images/YamadaSagiri.png" alt="Sagiri Icon" width={500} height={500} quality={100} className=" md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(1)} />
                        </div>
                        <div>
                            <Image src="/images/Nurugai.png" alt="Nurugai Icon" width={500} height={500}  quality={100} className=" md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(2)} />
                        </div>
                        <div>
                            <Image src="/images/YamadaTenza.png" alt="Tenza Icon" width={500} height={500}  quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(3)} />
                        </div>
                        <div>
                            <Image src="/images/AzaChobei.png" alt="Chobei Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(4)} />
                        </div>
                        <div>
                            <Image src="/images/AzaToma.png" alt="Toma Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(5)} />
                        </div>
                        <div>
                            <Image src="/images/Tamiya.png" alt="Tamiya Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(6)} />
                        </div>
                        <div>
                            <Image src="/images/YamadaFuchi.png" alt="Fuchi Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(7)} />
                        </div>
                        <div>
                            <Image src="/images/Yuzuriha.png" alt="Yuzuriha Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(8)} />
                        </div>
                        <div>
                            <Image src="/images/YamadaSenta.png" alt="Senta Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(9)} />
                        </div>
                        <div>
                            <Image src="/images/Shion.png" alt="Shion Icon" width={500} height={500} quality={100} className="md:w-[100px] md:h-[100px] md:hover:-translate-y-2 md:hover:scale-110 sm:rounded-xl md:rounded-3xl cursor-pointer" role="button" onClick={() => handleSetArray(10)} />
                        </div>
                    </div>
    )
}