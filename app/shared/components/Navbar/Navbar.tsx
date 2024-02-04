"use client";
import { useState } from "react";
import Image from "next/image";
import { navbarOptions } from "../models/navbar.model";
import NavbarOption from "./NavbarOption";
import NavbarAction from "./NavbarAction";

function Navbar() {
    const [selected, setSelected] = useState<string | undefined>("Nosotros");

    const handleSelected = (idx: number) => {
        setSelected(navbarOptions[idx].text);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-[88px] flex items-center justify-center px-120 border-b-2 border-grey bg-white z-[100]">
            <picture>
                <Image
                    src={"/assets/iso.png"}
                    alt="logotype"
                    width={178}
                    height={48}
                />
            </picture>
            <ul className="w-full h-full flex items-center justify-center">
                {navbarOptions.map((val, idx) => {
                    if (val.action) {
                        return (
                            <NavbarAction
                                action={() => {}}
                                opt={val}
                                key={idx}
                            />
                        );
                    }
                    return (
                        <NavbarOption
                            text={val.text}
                            idx={idx}
                            action={handleSelected}
                            optionSelected={selected}
                            key={idx}
                        />
                    );
                })}
            </ul>
        </header>
    );
}

export default Navbar;
