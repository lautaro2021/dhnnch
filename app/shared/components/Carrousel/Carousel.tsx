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

    const handleNext = () => {
        actualPost < carouselData.length && setActualPost((prev) => prev + 1);
    };
    const handlePrev = () => {
        actualPost > 1 && setActualPost((prev) => prev - 1);
    };

    return (
        <section className="flex flex-col items-end justify-start gap-[32px] overflow-hidden">
            <div className="flex flex-row gap-[24px]">
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
        </section>
    );
}

export default Carousel;
