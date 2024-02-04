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
        active:text-primaryBlue hover:border-b-[2px] hover:border-primaryBlue cursor-pointer`}
            onClick={() => action(idx)}
        >
            <span
                className={`text-p font-p leading-p px-[10px] text-grey ${
                    optionSelected === text && "text-primaryBlue"
                }`}
            >
                {text}
            </span>
        </li>
    );
}

export default NavbarOption;
