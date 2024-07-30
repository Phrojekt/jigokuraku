import Image from "next/image"

export function Navbar() {
    return (
        <header className="w-full h-16 md:h-[82px] bg-dark-gray flex pl-[15%] justify-start content-center items-center">
            <div className="w-[105px] md:w-[174px] md:h-[67px]">
                <Image src="/images/logo.png" alt="Jigokuraku_Logo" width={174} height={67} className=" w-full h-full" />
            </div>

        </header>
    )
}