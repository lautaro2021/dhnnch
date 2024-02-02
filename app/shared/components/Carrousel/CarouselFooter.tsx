"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { PALETTE } from "@/app/theme/theme";

function CarouselFooter() {
    return (
        <div className="flex flex-row items-center gap-[60px]">
            <div>
                <span>01</span>
                <span>/</span>
                <span>03</span>
            </div>
            <div className="flex flex-row gap-[21px]">
                <ArrowLeft size={32} color={PALETTE.primaryBlue} />
                <ArrowRight size={32} />
            </div>
        </div>
    );
}

export default CarouselFooter;
