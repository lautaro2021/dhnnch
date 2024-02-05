import { CaretRight } from "@phosphor-icons/react";
import { NavbarOptionType, navbarOptions } from "../models/navbar.model";
import { PALETTE } from "@/app/theme/theme";

//This component is not a Link, it's an action component --> For example, change language, switch between light or dark theme, etc.
//This is why i'm creating another component, because NavbarAction and NavbarOption have different functions (Usability Principle - SOLID)

function NavbarAction({
    opt,
    action,
    idx,
}: {
    opt: NavbarOptionType;
    action: () => void;
    idx?: number;
}) {
    return (
        <li
            className={`h-full flex items-center cursor-pointer px-[8px] border-r-[1px] border-grey ${
                !opt.text && "border-l-[1px]"
            } md:border-none md:p-0 md:h-auto md:flex-col`}
            onClick={action}
        >
            <>
                <div className="inline-flex items-center md:justify-between md:w-full">
                    {opt.Icon ? (
                        <opt.Icon />
                    ) : (
                        <span className="text-p font-p leading-p px-[10px] text-grey md:p-0">
                            {opt.text}
                        </span>
                    )}
                    <CaretRight
                        className="hidden md:block"
                        size={24}
                        color={PALETTE.lightGrey}
                    />
                </div>
                {idx && idx !== navbarOptions.length - 1 && (
                    <hr className="hidden md:block mt-[24px] h-[1px] bg-borderGrey w-full" />
                )}
            </>
        </li>
    );
}

export default NavbarAction;
