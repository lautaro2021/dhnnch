"use client";
import { useState } from "react";
import CarouselFooter from "./CarouselFooter";
import Post from "./Post";

function Carousel() {
    const carouselData = [
        {
            title: "Lorem ipsum",
            description: "Quisque vel dictum magna.",
            cta: { text: "Call to action", link: "" },
        },
        {
            title: "Lorem ipsum",
            description: "Quisque vel dictum magna.",
            cta: { text: "Call to action", link: "" },
        },
        {
            title: "Lorem ipsum",
            description: "Quisque vel dictum magna.",
            cta: { text: "Call to action", link: "" },
        },
    ];

    const [actualPost, setActualPost] = useState(1);
    const [carouselPosition, setCarouselPosition] = useState(564);

    const handleNext = () => {
        if (actualPost < carouselData.length) {
            setActualPost((prev) => prev + 1);
            setCarouselPosition((prev) => prev - 408);
        }
    };
    const handlePrev = () => {
        if (actualPost > 1) {
            setActualPost((prev) => prev - 1);
            setCarouselPosition((prev) => prev + 408);
        }
    };

    return (
        <section
            className={`flex items-center justify-center overflow-hidden absolute top-[50%] left-[${carouselPosition}px] translate-y-[-50%] transition-all`}
        >
            <div className="flex flex-col items-end gap-[32px]">
                <div className={`flex flex-row gap-[24px]`}>
                    {carouselData.map((data, idx) => (
                        <Post
                            title={data.title}
                            description={data.description}
                            cta={data.cta}
                            key={idx}
                        />
                    ))}
                </div>
                <CarouselFooter
                    actionNext={handleNext}
                    actionPrev={handlePrev}
                    actualPost={actualPost}
                    totalDataSize={carouselData.length}
                />
            </div>
        </section>
    );
}

export default Carousel;
