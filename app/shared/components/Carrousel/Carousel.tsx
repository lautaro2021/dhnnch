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
            <CarouselFooter />
        </section>
    );
}

export default Carousel;
