import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { PALETTE } from "@/app/theme/theme";

function CarouselFooter({
    actionNext,
    actionPrev,
    actualPost,
    totalDataSize,
}: {
    actionNext: () => void;
    actionPrev: () => void;
    actualPost: number;
    totalDataSize: number;
}) {
    return (
        <div className="flex flex-row items-center gap-[60px]">
            <div className="text-span font-span leading-span ">
                <span className="text-grey">0{actualPost}</span>
                <span className="text-primaryBlue font-bold">{` / `}</span>
                <span className="text-darkGreyText">0{totalDataSize}</span>
            </div>
            <div className="flex flex-row gap-[21px]">
                <ArrowLeft
                    size={32}
                    color={`${
                        actualPost === 1
                            ? PALETTE.lightGrey
                            : PALETTE.primaryBlue
                    }`}
                    onClick={actionPrev}
                />
                <ArrowRight
                    size={32}
                    color={`${
                        actualPost === 3
                            ? PALETTE.lightGrey
                            : PALETTE.primaryBlue
                    }`}
                    onClick={actionNext}
                />
            </div>
        </div>
    );
}

export default CarouselFooter;
