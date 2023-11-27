import Image from "next/image"
import Link from "next/link"
import Logo from "../images/logo.png"
import { HamburguerMenu } from "./Hamburger_Menu"

export function Navbar() {
    return (
        <header className="w-full h-16 md:h-[82px] bg-dark-gray flex justify-around content-center items-center">
            <div className="w-[105px] md:w-[174px] md:h-[67px]">
                <Image src={Logo} alt="Jigokuraku_Logo" className=" w-full h-full" />
            </div>
            <HamburguerMenu/>
            <div className="hidden md:flex gap-x-5 text-light-gray text-4xl font-alt ">
                <Link href="/" className="hover:-translate-y-2">Resumo</Link>
                <Link href="/characters" className="hover:-translate-y-2">Personagens</Link>
            </div>

        </header>
    )
}