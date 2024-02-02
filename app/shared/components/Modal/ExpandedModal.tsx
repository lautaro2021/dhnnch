"use client";
import ModalHeader from "./ModalHeader";
import Button from "../generics/Button";

function ExpandedModal({
    expandModal,
    handle,
    hideHeaderArrow,
    overlineButton,
    bgColor,
    title,
    description,
    primary,
}: {
    expandModal: boolean;
    handle?: () => void;
    hideHeaderArrow?: boolean;
    overlineButton?: boolean;
    bgColor: string;
    title: string;
    description: string;
    primary: boolean;
}) {
    return (
        <div
            className={`${bgColor} flex flex-col justify-end align-end gap-[8px] z-50 py-[40px] ${
                primary ? "pr-[40px] w-[606px]" : "w-[550px]"
            } pl-[120px] rounded-tr-[4px] text-balance text-grey`}
        >
            <ModalHeader
                text="LOREM IPSUM"
                action={handle}
                state={expandModal}
                hiddenIcon={hideHeaderArrow}
            />
            {primary ? (
                <h1 className="text-h1 font-h1 leading-h1">{title}</h1>
            ) : (
                <h2 className="text-h2 font-h2 leading-h2">{title}</h2>
            )}

            {expandModal && (
                <div className="flex flex-col gap-[20px]">
                    <hr className="h-[2px] w-[120px] bg-primaryBlue mt-[12px]" />
                    <p className="text-p font-p leading-p text-lightGreyText">
                        {description}
                    </p>
                    <Button text="Call to action" overline={overlineButton} />
                </div>
            )}
        </div>
    );
}

export default ExpandedModal;
