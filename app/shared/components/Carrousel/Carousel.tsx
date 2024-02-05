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
    const [carouselPosition, setCarouselPosition] = useState(0);

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
        <section className={`flex flex-col items-end gap-[32px]`}>
            <div className="w-full overflow-hidden">
                <div
                    className={`flex flex-row gap-[24px] relative left-[${carouselPosition}px] transition-all`}
                >
                    {carouselData.map((data, idx) => (
                        <Post
                            title={data.title}
                            description={data.description}
                            cta={data.cta}
                            key={idx}
                        />
                    ))}
                </div>
            </div>

            <CarouselFooter
                actionNext={handleNext}
                actionPrev={handlePrev}
                actualPost={actualPost}
                totalDataSize={carouselData.length}
            />
        </section>
    );
}

export default Carousel;
