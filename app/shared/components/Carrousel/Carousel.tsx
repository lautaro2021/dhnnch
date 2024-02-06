"use client";
import { useState, useEffect, useRef } from "react";
import CarouselFooter from "./CarouselFooter";
import Post from "./Post";
import service from "@/app/services/blog";
import type { PostType } from "../models/post.model";

function Carousel() {
    const [actualPost, setActualPost] = useState(1);
    const [carouselPosition, setCarouselPosition] = useState(0);
    const [carouselData, setCarouselData] = useState<PostType[]>([]);

    const postRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        service
            .getPosts()
            .then((data) => setCarouselData(data.data.data))
            .catch((err) => console.log(err));
    }, []);

    const handleNext = () => {
        if (actualPost < carouselData.length) {
            setActualPost((prev) => prev + 1);
            setCarouselPosition(
                (prev) =>
                    prev -
                    (postRef.current ? postRef.current.clientWidth + 24 : 408)
            );
        }
    };
    const handlePrev = () => {
        if (actualPost > 1) {
            setActualPost((prev) => prev - 1);
            setCarouselPosition(
                (prev) =>
                    prev +
                    (postRef.current ? postRef.current.clientWidth + 24 : 408)
            );
        }
    };

    return (
        <>
            <section className={`flex min-w-[912px] overflow-hidden`}>
                <div className="w-full">
                    <div
                        className={`flex flex-row gap-[24px] transition-all`}
                        style={{
                            transform: `translateX(${carouselPosition}px)`,
                        }}
                    >
                        {carouselData?.map((data, idx) => (
                            <Post
                                img={data.attributes.image.data.attributes.url}
                                title={data.attributes.title}
                                description={data.attributes.description}
                                slug={data.attributes.slug}
                                key={idx}
                                ref={postRef}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CarouselFooter
                actionNext={handleNext}
                actionPrev={handlePrev}
                actualPost={actualPost}
                totalDataSize={carouselData.length}
            />
        </>
    );
}

export default Carousel;
