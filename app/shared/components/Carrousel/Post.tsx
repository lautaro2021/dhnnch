import Image from "next/image";
import PostButton from "../generics/PostButton";

function Post({
    img,
    title,
    description,
    cta,
}: {
    img?: string;
    title: string;
    description: string;
    cta: { text: string; link: string };
}) {
    return (
        <article className="w-[384px] flex flex-col gap-[16px]">
            <picture className="relative w-full h-[282px] rounded-[8px] overflow-hidden">
                <Image
                    fill
                    src={"/assets/posts/1.png"}
                    alt="test"
                    objectFit="cover"
                />
            </picture>
            <hr className="h-[2px] bg-grey" />
            <div className="flex flex-col gap-[8px]">
                <h6 className="text-h6 font-h6 leading-h6 text-grey">
                    {title}
                </h6>
                <span className="text-span font-span leading-span text-lightGreyText">
                    {description}
                </span>
                <PostButton cta={cta} />
            </div>
        </article>
    );
}

export default Post;
