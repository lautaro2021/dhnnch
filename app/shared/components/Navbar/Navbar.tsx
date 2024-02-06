"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navbarOptions } from "../models/navbar.model";
import NavbarOption from "./NavbarOption";
import NavbarAction from "./NavbarAction";
import { List } from "@phosphor-icons/react";

function Navbar() {
    const [selected, setSelected] = useState<string | undefined>("Nosotros");
    const [openMenu, setOpenMenu] = useState(false);

    const handleSelected = (idx: number) => {
        setSelected(navbarOptions[idx].text);
    };

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-[89px] flex items-center justify-center px-120 border-b-[1px] border-grey bg-white z-[100] md:px-[16px] md:h-[61px]">
            <picture className="md:w-full md:border-r-[1px] md:border-grey h-full flex items-center">
                <Image
                    src={"/assets/iso.png"}
                    alt="logotype"
                    width={178}
                    height={48}
                    className="sm:hidden"
                />
                <Image
                    src={"/assets/iso-sm.png"}
                    alt="logotype"
                    width={135}
                    height={36}
                    className="hidden sm:block"
                />
            </picture>
            <ul className="w-full h-full flex items-center justify-center md:hidden">
                {navbarOptions.map((val, idx) => (
                    <React.Fragment key={idx}>
                        {val.action ? (
                            <NavbarAction action={() => {}} opt={val} />
                        ) : (
                            <NavbarOption
                                text={val.text}
                                idx={idx}
                                action={handleSelected}
                                optionSelected={selected}
                            />
                        )}
                    </React.Fragment>
                ))}
            </ul>
            <div className="hidden md:block pl-[16px]">
                <List size={24} onClick={handleMenu} />
            </div>
            {openMenu && (
                <div
                    className="fixed w-screen h-screen top-[61px] bg-backdrop"
                    onClick={() => setOpenMenu(false)}
                >
                    <ul className="flex flex-col w-full h-auto bg-white fixed px-[16px] pt-[40px] pb-[24px] gap-[24px] animate-appear-menu z-[100] top-[61px] l:hidden border-b-[2px] border-primaryBlue">
                        {navbarOptions.map((val, idx) => (
                            <React.Fragment key={idx}>
                                {val.action ? (
                                    <NavbarAction
                                        action={() => {}}
                                        opt={val}
                                        idx={idx}
                                    />
                                ) : (
                                    <NavbarOption
                                        text={val.text}
                                        idx={idx}
                                        action={handleSelected}
                                        optionSelected={selected}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
