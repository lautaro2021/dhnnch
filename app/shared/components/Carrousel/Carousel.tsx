import CarouselFooter from "./CarouselFooter";
import Post from "./Post";

function Carousel() {
    return (
        <section className="flex flex-col items-end justify-start gap-[32px] overflow-hidden">
            <div className="flex flex-row gap-[24px]">
                <Post
                    title="Lorem ipsum"
                    description="Quisque vel dictum magna."
                    cta={{ text: "Call to action", link: "" }}
                />
                <Post
                    title="Lorem ipsum"
                    description="Quisque vel dictum magna."
                    cta={{ text: "Call to action", link: "" }}
                />
                <Post
                    title="Lorem ipsum"
                    description="Quisque vel dictum magna."
                    cta={{ text: "Call to action", link: "" }}
                />
            </div>
            <CarouselFooter />
        </section>
    );
}

export default Carousel;
