import Image from "next/image";
import PostButton from "../generics/PostButton";
import { IMAGE_URL } from "@/app/services/blog";

function Post({
    img,
    title,
    description,
    slug,
}: {
    img?: string;
    title: string;
    description: string;
    slug: string;
}) {
    const url = `${IMAGE_URL}${img}`;

    return (
        <article className="w-[384px] flex flex-col gap-[16px]">
            <picture className="relative w-full h-[282px] rounded-[8px] overflow-hidden">
                <img src={url} alt={title} title={title} />
            </picture>
            <hr className="h-[2px] bg-grey" />
            <div className="flex flex-col gap-[8px]">
                <h6 className="text-h6 font-h6 leading-h6 text-grey">
                    {title}
                </h6>
                <span className="text-span font-span leading-span text-lightGreyText">
                    {description}
                </span>
                <PostButton slug={slug} />
            </div>
        </article>
    );
}

export default Post;
