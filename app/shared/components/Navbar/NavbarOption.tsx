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
        active:!text-primaryBlue hover:border-b-[2px] hover:border-primaryBlue cursor-pointer l:h-auto l:p-0 l:flex-col l:hover:border-none l:pb-[24px] l:border-b-[1px] l:border-borderGrey`}
            onClick={() => action(idx)}
        >
            <span
                className={`text-p font-p leading-p px-[10px] text-grey inline-flex items-center l:justify-between l:w-full active:text-primaryBlue ${
                    optionSelected === text && "text-primaryBlue"
                } l:p-0`}
            >
                {text}
                <CaretRight
                    className="hidden l:block"
                    size={24}
                    color={PALETTE.lightGrey}
                />
            </span>
            {/* <hr className="hidden l:block mt-[24px] h-[1px] bg-borderGrey w-full" /> */}
        </li>
    );
}

export default NavbarOption;
