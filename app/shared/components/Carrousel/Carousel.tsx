"use client";
import { useState, useEffect } from "react";
import CarouselFooter from "./CarouselFooter";
import Post from "./Post";
import service from "@/app/services/blog";
import type { PostType } from "../models/post.model";

function Carousel() {
    const [actualPost, setActualPost] = useState(1);
    const [carouselPosition, setCarouselPosition] = useState(0);
    const [carouselData, setCarouselData] = useState<PostType[]>([]);

    useEffect(() => {
        service
            .getPosts()
            .then((data) => setCarouselData(data.data.data))
            .catch((err) => console.log(err));
    }, []);

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
                    className={`flex flex-row gap-[24px] relative left-[${carouselPosition.toString()}px] transition-all`}
                >
                    {carouselData?.map((data, idx) => (
                        <Post
                            img={data.attributes.image.data.attributes.url}
                            title={data.attributes.title}
                            description={data.attributes.description}
                            slug={data.attributes.slug}
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
