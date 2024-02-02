"use client";
import { useState } from "react";
import Image from "next/image";
import { navbarOptions } from "./models/navbar.model";

function Navbar() {
    const [selected, setSelected] = useState<string | undefined>("Nostros");

    const handleSelected = (idx: number) => {
        setSelected(navbarOptions[idx].text);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-[88px] flex items-center justify-center px-120 border-b-2 border-grey bg-white z-1000">
            <picture>
                <Image
                    src={"/assets/iso.png"}
                    alt="logotype"
                    width={178}
                    height={48}
                />
            </picture>
            <ul className="w-full h-full flex items-center justify-center gap-8">
                {navbarOptions.map((val, idx) => (
                    <li
                        key={idx}
                        className={`h-full flex items-center px-[12px] cursor-pointer text-grey hover:text-primaryBlue hover:border-b-[2px] border-primaryBlue`}
                        onClick={() => handleSelected(idx)}
                    >
                        {!val.Icon ? (
                            <span className="text-p font-p leading-p">
                                {val.text}
                            </span>
                        ) : (
                            <val.Icon />
                        )}
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Navbar;
