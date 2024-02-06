"use client";
import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react";
import { PALETTE } from "@/app/theme/theme";

function ModalHeader({
    text,
    action,
    state,
    hiddenIcon,
}: {
    text: string;
    action?: () => void;
    state?: boolean;
    hiddenIcon?: boolean;
}) {
    return (
        <header className="w-full flex items-start justify-between sm:hidden">
            <label className="text-label font-label leading-label tracking-label text-darkGreyText">
                {text}
            </label>
            {!hiddenIcon &&
                (!state ? (
                    <ArrowUpRight
                        onClick={action}
                        size={24}
                        color={PALETTE.primaryBlue}
                        weight="bold"
                    />
                ) : (
                    <ArrowDownLeft
                        onClick={action}
                        size={24}
                        color={PALETTE.primaryBlue}
                        weight="bold"
                    />
                ))}
        </header>
    );
}

export default ModalHeader;
