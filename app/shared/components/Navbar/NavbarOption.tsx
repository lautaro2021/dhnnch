import { CaretRight } from "@phosphor-icons/react";
import { PALETTE } from "@/app/theme/theme";
// Finally, NavbarOption must be a Link component. For this example, i wil use li tag without href prop.

function NavbarOption({
    text,
    action,
    idx,
    optionSelected,
}: {
    action: (idx: number) => void;
    idx: number;
    text?: string;
    optionSelected?: string;
}) {
    return (
        <li
            className={`h-full flex items-center px-[8px]
        active:text-primaryBlue hover:border-b-[2px] hover:border-primaryBlue cursor-pointer md:h-auto md:p-0 md:flex-col md:hover:border-none`}
            onClick={() => action(idx)}
        >
            <div className="inline-flex items-center md:justify-between md:w-full">
                <span
                    className={`text-p font-p leading-p px-[10px] text-grey ${
                        optionSelected === text && "text-primaryBlue"
                    } md:p-0`}
                >
                    {text}
                </span>
                <CaretRight
                    className="hidden md:block"
                    size={24}
                    color={PALETTE.lightGrey}
                />
            </div>
            <hr className="hidden md:block mt-[24px] h-[1px] bg-borderGrey w-full" />
        </li>
    );
}

export default NavbarOption;
