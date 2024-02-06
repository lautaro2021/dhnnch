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
            } l:border-none l:p-0 l:h-auto l:flex-col`}
            onClick={action}
        >
            <span className="text-p font-p leading-p px-[10px] text-grey inline-flex items-center l:p-0 l:justify-between l:w-full">
                {opt.Icon ? <opt.Icon /> : opt.text}
                <CaretRight
                    className="hidden l:block"
                    size={24}
                    color={PALETTE.lightGrey}
                />
            </span>
            {idx && idx !== navbarOptions.length - 1 && (
                <hr className="hidden mt-[24px] h-[1px] bg-borderGrey w-full l:block" />
            )}
        </li>
    );
}

export default NavbarAction;
