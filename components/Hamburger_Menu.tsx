"use client"
import React, { useState } from "react";

export function HamburguerMenu () {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleClick = () => {
        {isOverlayVisible && (
            setIsOverlayVisible(false)
        )}{!isOverlayVisible && (
            setIsOverlayVisible(true)
        )}
    }

    return (
        <nav className="sm:flex md:hidden">
            <a href="#" className={`absolute flex items-center justify-center flex-col ${isOverlayVisible ? "gap-y-0" : "gap-y-1"} -translate-y-[12px] z-10`} onClick={handleClick}>
                <i className={`block h-1 w-7 bg-light-gray delay-100  ${isOverlayVisible ? "rotate-[45deg] translate-y-[8px]" : "" }`}> </i>
                <i className={`block h-1 w-7 bg-light-gray  ${isOverlayVisible ? "invisible" : "sm:visible" } md:invisible`}></i>
                <i className={`block h-1 w-7 bg-light-gray delay-100  ${isOverlayVisible ? "rotate-[-45deg]" : ""}`}></i>
            </a>
            {isOverlayVisible && (
                <div className="absolute h-full top-0 left-0 right-0 bg-black/75 flex flex-col  items-center text-light-gray text-5xl pt-[80px]">
                    <ul className="flex flex-col gap-y-[60px] text-center font-alt">
                        <li>
                            <a href="#">Resumo</a>
                        </li>
                        <li>
                            <a href="#">Personagens</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}