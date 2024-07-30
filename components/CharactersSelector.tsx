import Image from "next/image";
import { useState } from "react";


export function CharactersSelector() {
    return ( 
        <div className="flex flex-row sm:flex-nowrap md:flex-wrap gap-4 w-[100%]">
                        <div className="">
                            <Image src="/images/Gabimaru.png" alt="Gabimaru Icon" width={500} height={100} quality={100} className="sm:w-[40%] md:w-[100px] md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/YamadaSagiri.png" alt="Sagiri Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/Nurugai.png" alt="Nurugai Icon" width={500} height={100}  quality={100} className="sm:w-[40px] md:w-[100px] md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/YamadaTenza.png" alt="Tenza Icon" width={500} height={100}  quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/AzaChobei.png" alt="Chobei Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/AzaToma.png" alt="Toma Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/Tamiya.png" alt="Tamiya Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/YamadaFuchi.png" alt="Fuchi Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/Yuzuriha.png" alt="Yuzuriha Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/YamadaSenta.png" alt="Senta Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                        <div>
                            <Image src="/images/Shion.png" alt="Shion Icon" width={500} height={100} quality={100} className="sm:w-[40px] md:w-[100px]  md:hover:-translate-y-2 md:hover:scale-110 h-auto rounded-3xl cursor-pointer" />
                        </div>
                    </div>
    )
}