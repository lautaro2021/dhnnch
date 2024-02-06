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
                !opt.text && "border-l-[1px] l:border-l-0"
            } l:p-0 l:h-auto l:flex-col l:pb-[24px] l:border-b-[1px] l:border-borderGrey l:border-r-0 l:last:border-none`}
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
        </li>
    );
}

export default NavbarAction;
