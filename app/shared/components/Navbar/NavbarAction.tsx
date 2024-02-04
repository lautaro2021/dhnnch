import { NavbarOptionType } from "../models/navbar.model";

//This component is not a Link, it's an action component --> For example, change language, switch between light or dark theme, etc.

function NavbarAction({
    opt,
    action,
}: {
    opt: NavbarOptionType;
    action: () => void;
}) {
    return (
        <li
            className={`h-full flex items-center cursor-pointer px-[8px] border-r-[1px] border-grey ${
                !opt.text && "border-l-[1px]"
            }`}
            onClick={action}
        >
            {opt.Icon ? (
                <opt.Icon />
            ) : (
                <span className="text-p font-p leading-p px-[10px] text-grey">
                    {opt.text}
                </span>
            )}
        </li>
    );
}

export default NavbarAction;
